#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e
 
# 生成静态文件
npm run build
 
# 进入生成的文件夹
cd docs/.vuepress/dist

#git init
#git remote add -f origin git@github.com:mondaysix/mondaysix.github.io.git
# 下面这行是官网没有的，如果是多人开发项目，务必执行此命令
#git pull https://github.com/JDsecretFE/quist-ui.git master 
git add -A 
git commit -m $1
git push -f git@github.com:mondaysix/mondaysix.github.io.git master
 
