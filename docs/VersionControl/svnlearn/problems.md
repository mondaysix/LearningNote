# svn管理常用操作

## svn服务启动

1. 服务器重启后要先查看svn服务是否是运行状态，可用命令ps aux|grep svnserve
2. 如果服务是启动状态会出现两个进程，一个是有路径的进程，一个是没有路径的进程。如果只有一个进程那么说明服务没有启动，需要重新启动一下服务，可用命令svnserver -d -r <svn版本库的具体地址>
3. 若不确定svn版本库的地址，可用查找路径命令 find / -name svn
4. 启动服务后需要再次查看svn服务的状态，确定服务是否启动ps aux|grep svnserve 此时出现两个进程说明服务已经启动，测试tortoise svn是否可以连接
5. 如果服务没有启动，需要杀死相关进程再重启svn服务，可用命令 kill -9 <进程号>


