#!/usr/bin/env bash

######################################################################
# 使用方式: aar_plugin_script version groupId
# 如： ./androidFlutter 0.0.1 com.xxx
# version 为必传参数， groupId 为可选参数
######################################################################
echo "输入格式==>aar_plugin_script.sh 0.0.1 com.vv.life"
# 定义默认groupId
readonly DEF_GROUP='com.koo'

# 读取传入参数
debugMode='release'
fVersion=$1 # 第一个参数:版本号,flutter module的版本和所有的插件的版本保持一致.
fGroupId=$2 # 第二个参数:包名,所有library的groupId都一样，默认是com.koo.fultter.

###### 0. 检查参数
if [ ! -n "${fVersion}" ] ;then
echo ">>> 版本参数不能为空!"
exit
fi

if [ ! -n "${fGroupId}" ]
then
fGroupId=$DEF_GROUP
fi

###### 1. 获取/更新包
echo ">>> 执行 flutter packages get"
flutter packages get

###### 2. 遍历 .flutter-plugin 文件
echo ">>> 遍历 .flutter-plugin 文件"
for line in $(cat .flutter-plugins)
do
plugin_name=${line%%=*}
plugin_path=${line##*=}

###### 3. 向依赖的项目中添加 apply from: "./android_flutter_maven.gradle"
echo -e "\n"
echo ">>> 向["${plugin_name}"]项目中插入 apply from: "./android_flutter_maven.gradle""
cd .android
cp ../android_flutter_maven.gradle ${plugin_path}'/android'
pushd .
cd ${plugin_path}'/android'
firstLine=$(sed -n '1p' build.gradle)
if [ "$firstLine" != 'apply from: "./android_flutter_maven.gradle"' ]
then
# mac上插入内容要换行才行
sed -i '' -e '1i \
apply from: "./android_flutter_maven.gradle"' build.gradle
else
echo ">>> flutter_maven 文件已经存在 "
fi
popd

###### 4. 构建依赖项目的AAR
if [ "$debugMode" == "debug" ]
then
echo ">>> 构建["${plugin_name}"]插件的AAR文件(DEBUG)"
./gradlew :${plugin_name}:clean :${plugin_name}:assembleDebug -PfGroupId=${fGroupId} -PfArtifactId=${plugin_name} -PfVersion=${fVersion}
else
echo ">>> 构建["${plugin_name}"]插件的AAR文件(RELEASE)"
./gradlew :${plugin_name}:clean :${plugin_name}:assembleRelease -PfGroupId=${fGroupId} -PfArtifactId=${plugin_name} -PfVersion=${fVersion}
fi

###### 5. 上传依赖项目的AAR
echo ">>> 上传["${plugin_name}"]插件"
./gradlew :${plugin_name}:uploadArchives -PfGroupId=${fGroupId} -PfArtifactId=${plugin_name} -PfVersion=${fVersion}
cd ../

done
echo ">>> 任务完成!"