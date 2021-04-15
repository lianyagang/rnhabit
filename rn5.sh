#!/usr/bin/env bash

######################################################################
# 使用方式: ./androidFlutter version artifactId groupId
# 如： ./androidFlutter 0.0.1-SNAPSHOT kwmoduleflutter com.xxx
# 注意，在使用该命令之前先把.android/gradle.properties中的FLUTTER_SOURCE变为1
######################################################################



######################################################################
# 使用方式: aar_plugin_script version groupId
# 如： ./androidFlutter 0.0.1 com.xxx
# version 为必传参数， groupId 为可选参数
######################################################################
echo "输入格式==>aar_plugin_script.sh 0.0.1 com.vv.life"
# 定义默认groupId
array=("react-native-spinkit")
readonly DEF_GROUP='com.vv.life'
plugin_name="app"
# 读取传入参数
debugMode='release'
fVersion=$1 # 第一个参数:版本号,flutter module的版本和所有的插件的版本保持一致.
fGroupId=$2 # 第二个参数:包名,所有library的groupId都一样，默认是com.koo.fultter.


plugin_path=$(cd "$(dirname "$0")";pwd)
android_path=""

###### 0. 检查参数
if [ ! -n "${fVersion}" ] ;then
echo ">>> 版本参数不能为空!"
exit
fi

if [ ! -n "${fGroupId}" ]
then
fGroupId=$DEF_GROUP
fi
echo "RN JS Bundle 打包"
#暂时屏蔽
#npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/rn_library/src/main/assets/index.android.bundle --assets-dest android/rn_library/src/main/res/

echo "执行RN打包成功"

echo ">>>项目主地址 ${plugin_path}"
for element in ${array[*]}
do
  android_path='node_modules/'${element}'/android'
echo "android_path>>>${android_path}"
###### 1. 向依赖的项目中添加 apply from: "./android_flutter_maven.gradle"
echo -e "\n"
echo ">>> 向${element}项目中插入 apply from: "./android_flutter_maven.gradle""
cd ${plugin_path}/${android_path}
cp ${plugin_path}/android_flutter_maven.gradle ${plugin_path}/${android_path}
pushd .
cd ${plugin_path}/${android_path}
firstLine=$(sed -n '1p' build.gradle)

if [ "$firstLine" != 'apply from: "./android_flutter_maven.gradle"' ]
then
# mac上插入内容要换行才行
sed -i '' -e '1i \
apply from: "./android_flutter_maven.gradle"' build.gradle


else
echo ">>> rn_maven 文件已经存在 "
fi
###### 5. 上传依赖项目的AAR
echo ">>> 上传["${element}"]插件"
#    ./gradlew clean assembleRelease -PfGroupId=${fGroupId} -PfArtifactId=${element} -PfVersion=${fVersion} -PfModule=true

./gradlew uploadArchives -PfGroupId=${fGroupId} -PfArtifactId=${element} -PfVersion=${fVersion}
cd ../
popd
  done





echo ">>> 任务完成!"






