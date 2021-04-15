#!/usr/bin/env bash

######################################################################
# 使用方式: ./androidFlutter version artifactId groupId
# 如： ./androidFlutter 0.0.1-SNAPSHOT kwmoduleflutter com.xxx
# 注意，在使用该命令之前先把.android/gradle.properties中的FLUTTER_SOURCE变为1
######################################################################

# 定义默认groupId
readonly DEF_GROUP='com.xxx'

# 读取参数
debugMode='release'
fVersion=$1         # flutter module的版本和所有的插件的版本保持一致
fArtifactId=$2      # flutter module的artifactId
fGroupId=$3         # 所有library的groupId都一样，默认是com.xxx

# 检查参数
#if [ ! -n "$fArtifactId" -o ! -n "fVersion" ] ;then
#    echo "==fArtifactId or fVersion is null"
#    exit
#fi
#
#if [ ! -n "${fGroupId}" ] # 当串的长度不大于0时为真
#then
#    fGroupId=$DEF_GROUP
#fi

###### 1. 获取/更新包
#echo "==Start flutter packages get"
#flutter packages get
#echo -e "\n"
#A="$1"
#B="$2"
#echo "输入的原始值：A=$A,B=$B"
##判断字符串是否相等
#if [ "$A" = "$B" ];then
#echo "[ = ]"
#fi
D='"dependencies":'
###### 2. 读取.flutter-plugin中的插件，进入对应的工程目录，编译成aar并上传
for line in $(cat package.json)
do
    A=${line}
    if [ "$A" = "$D" ];then # 当串的长度不大于0时为真
    echo "<<<$A"

    fi
#fi
#    plugin_name=${line%%=*}
#    plugin_path=${line##*=}
#    echo '==Build and publish plugin: ['${plugin_name}']='${plugin_path}


done



