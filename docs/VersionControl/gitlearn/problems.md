## git查看/修改用户名和密码			

​	在使用git进行push代码的时候，提示：The Requested URL return error 403，表示没有相关权限来push相关代码

​	push相关代码的那个工程地址与内存和硬盘中缓存的git仓库的账号密码不一致

解决办法如下：

1. 执行git config --list，查看user.name和user.email是否与需要push的代码工程仓库账号邮箱一致，不一致需要更改账号
2. 清除缓存:
   		git config --local --unset credential.helper
      		git config --global --unset credential.helper
      		git config --system --unset credential.helper
3. 清除缓存后提交代码需要重新输入用户名密码
4. 查看当前的用户名和邮箱地址：
   		git config user.name
      		git config user.email
5. 修改用户名和邮箱地址:
   		git config --global user.name "username"
      		git config --global user.email "email"

​		

## 更新代码至远程仓库流程	

1. git status 查看当前工程中modified了哪些文件
2. git add . 一次性添加所有修改过的文件
3. git commit -m "修改的相关描述XXX"
4. git push origin master 推送到git 远程仓库

## 删除远程仓库里的文件夹

1. git clone <远程仓库地址>
2. git rm -rf <需要删除的文件夹>
3. 如果需要删除的文件太多了，直接在文件夹里删除，不需要使用rm，但删除后需要执行git add .
4. git commit -m "描述语句"
5. git push origin master

## 分支相关操作

1. git branch 查看当前分支
2. git checkout <分支名称> 切换到新的分支
3. git branch <新分支名称>创建新的分支

## 使用ssh密钥

SSH 公钥默认储存在账户的主目录下的 ~/.ssh 目录

1. cd ./.ssh/

2. ssh-keygen -t rsa -C "email@youremail.com"

3. 直接回车就行

4. ls查看下是否生成id_rsa.pub和id_rsa

5. 把id_rsa.pub密钥添加到远程仓库中

6. 验证下key是否可以正常工作 ssh -T git@github.com

   

## 下载github仓库中的部分文件夹

git版本>2.17.1

要是git的版本低于2.17.1，则需要更新git版本:

- 2.17.1之前版本用git update 

- 2.17.1之后用git update-git-for-windows

  

1. 创建新文件夹mkdir projects
2. git init
3. git remote add -f origin git@github.com:username/responsity.git
4. git config core.sparseCheckout true
5. echo "远程仓库文件夹路径" >> .git/info/sparse-checkout
6. git pull origin master