(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{187:function(i,t,e){"use strict";e.r(t);var _=e(0),a=Object(_.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{staticClass:"content"},[e("h2",{attrs:{id:"git查看-修改用户名和密码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git查看-修改用户名和密码","aria-hidden":"true"}},[i._v("#")]),i._v(" git查看/修改用户名和密码")]),i._v(" "),e("p",[i._v("​\t在使用git进行push代码的时候，提示：The Requested URL return error 403，表示没有相关权限来push相关代码")]),i._v(" "),e("p",[i._v("​\tpush相关代码的那个工程地址与内存和硬盘中缓存的git仓库的账号密码不一致")]),i._v(" "),e("p",[i._v("解决办法如下：")]),i._v(" "),e("ol",[e("li",[i._v("执行git config --list，查看user.name和user.email是否与需要push的代码工程仓库账号邮箱一致，不一致需要更改账号")]),i._v(" "),e("li",[i._v("清除缓存:\ngit config --local --unset credential.helper\ngit config --global --unset credential.helper\ngit config --system --unset credential.helper")]),i._v(" "),e("li",[i._v("清除缓存后提交代码需要重新输入用户名密码")]),i._v(" "),e("li",[i._v("查看当前的用户名和邮箱地址：\ngit config user.name\ngit config user.email")]),i._v(" "),e("li",[i._v('修改用户名和邮箱地址:\ngit config --global user.name "username"\ngit config --global user.email "email"')])]),i._v(" "),e("p",[i._v("​")]),i._v(" "),e("h2",{attrs:{id:"更新代码至远程仓库流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更新代码至远程仓库流程","aria-hidden":"true"}},[i._v("#")]),i._v(" 更新代码至远程仓库流程")]),i._v(" "),e("ol",[e("li",[i._v("git status 查看当前工程中modified了哪些文件")]),i._v(" "),e("li",[i._v("git add . 一次性添加所有修改过的文件")]),i._v(" "),e("li",[i._v('git commit -m "修改的相关描述XXX"')]),i._v(" "),e("li",[i._v("git push origin master 推送到git 远程仓库")])]),i._v(" "),e("h2",{attrs:{id:"删除远程仓库里的文件夹"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除远程仓库里的文件夹","aria-hidden":"true"}},[i._v("#")]),i._v(" 删除远程仓库里的文件夹")]),i._v(" "),e("ol",[e("li",[i._v("git clone <远程仓库地址>")]),i._v(" "),e("li",[i._v("git rm -rf <需要删除的文件夹>")]),i._v(" "),e("li",[i._v("如果需要删除的文件太多了，直接在文件夹里删除，不需要使用rm，但删除后需要执行git add .")]),i._v(" "),e("li",[i._v('git commit -m "描述语句"')]),i._v(" "),e("li",[i._v("git push origin master")])]),i._v(" "),e("h2",{attrs:{id:"分支相关操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分支相关操作","aria-hidden":"true"}},[i._v("#")]),i._v(" 分支相关操作")]),i._v(" "),e("ol",[e("li",[i._v("git branch 查看当前分支")]),i._v(" "),e("li",[i._v("git checkout <分支名称> 切换到新的分支")]),i._v(" "),e("li",[i._v("git branch <新分支名称>创建新的分支")])]),i._v(" "),e("h2",{attrs:{id:"使用ssh密钥"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用ssh密钥","aria-hidden":"true"}},[i._v("#")]),i._v(" 使用ssh密钥")]),i._v(" "),e("p",[i._v("SSH 公钥默认储存在账户的主目录下的 ~/.ssh 目录")]),i._v(" "),e("ol",[e("li",[e("p",[i._v("cd ./.ssh/")])]),i._v(" "),e("li",[e("p",[i._v('ssh-keygen -t rsa -C "email@youremail.com"')])]),i._v(" "),e("li",[e("p",[i._v("直接回车就行")])]),i._v(" "),e("li",[e("p",[i._v("ls查看下是否生成id_rsa.pub和id_rsa")])]),i._v(" "),e("li",[e("p",[i._v("把id_rsa.pub密钥添加到远程仓库中")])]),i._v(" "),e("li",[e("p",[i._v("验证下key是否可以正常工作 ssh -T git@github.com")])])]),i._v(" "),e("h2",{attrs:{id:"下载github仓库中的部分文件夹"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下载github仓库中的部分文件夹","aria-hidden":"true"}},[i._v("#")]),i._v(" 下载github仓库中的部分文件夹")]),i._v(" "),e("p",[i._v("git版本>2.17.1")]),i._v(" "),e("p",[i._v("要是git的版本低于2.17.1，则需要更新git版本:")]),i._v(" "),e("ul",[e("li",[e("p",[i._v("2.17.1之前版本用git update")])]),i._v(" "),e("li",[e("p",[i._v("2.17.1之后用git update-git-for-windows")])])]),i._v(" "),e("ol",[e("li",[i._v("创建新文件夹mkdir projects")]),i._v(" "),e("li",[i._v("git init")]),i._v(" "),e("li",[i._v("git remote add -f origin git@github.com:username/responsity.git")]),i._v(" "),e("li",[i._v("git config core.sparseCheckout true")]),i._v(" "),e("li",[i._v('echo "远程仓库文件夹路径" >> .git/info/sparse-checkout')]),i._v(" "),e("li",[i._v("git pull origin master")])])])}],!1,null,null,null);t.default=a.exports}}]);