## mysql5.7服务无法启动问题

以mysql 5.7.17 版本为例

### 解决办法一

1. 进入mysql server安装的路径: cd C:\Program Files\MySQL\MySQL Server 5.7

2. 如果目录下有data文件的先删除掉data文件

3. 清除掉原来的服务:**mysqld remove**

4. 重新安装服务: **mysqld -install**

5. 产生无密码的帐号: **mysqld --initialize-insecure**

6.  启动服务:**net start mysql**

7. 登录数据库：**mysql -u root -p** 直接回车不输入密码

8. 此时若是需要修改密码的话，可继续操作

9. 修改root密码：

   **update user set authentication_string=password('123456') where user="root";**

   **flush privileges;**

10. 退出数据库**exit**后重新使用新的密码登录即可



### 解决办法二

启动services.msc里的mysql服务重新启动失败，提示“本地计算机上的MySQL服务启动后停止。某些服务在未由其他服务或程序使用时将自动”，可参考如下方式：

1.首先需要把原来的服务删除，执行如下操作:

- [ ] cd C:\Program Files\MySQL\MySQL Server 5.7
- [ ] **mysqld --remove mysql**
- [ ] 进入bin目录
- [ ] **mysqld--initialize-insecure --user=mysql**
- [ ] 注册服务**mysqld --install mysql --defaults-file=C:\Program Files\MySQL\MySQL Server 5.7\my.ini**
- [ ] 启动服务:**net start mysql**



## Access denied for user ‘root’@‘localhost’ (using password: YES)问题

输入正确用户名和密码登录失败，弹出access denied，可用跳过验证重新设置密码

1. **使用管理员权限打开cmd**,先看services.msc里的mysql服务是否已经关闭

2. ​	进入安装路径执行如下操作

   - [ ] cd C:\Program Files\MySQL\MySQL Server 5.7\bin
   - [ ] ​	mysqld --initialize
   - [ ] ​	mysqld --install mysql --defaults-file=C:\Program Files\MySQL\MySQL Server 5.7\my.ini
   - [ ] ​	net stop mysql
   - [ ] ​	mysqld --skip-grant-tables

3. ​	同样使用管理员权限另外开一个cmd窗口，执行如下操作

   - [ ] mysql -u root
   - [ ] update user set authentication_string=password('123456') where user="root";
   - [ ] flush privileges;
   - [ ] 关闭该窗口

4. ​	再重新启动mysql服务

   - [ ] net start mysql

   - [ ] mysql -u root -p 输入之前修改的密码可正常登录

   - [ ] 若是正常登录后提示“ERROR 1820 (HY000): You must reset your password using ALTER USER statement before executing this statement.”则执行alter user user() identified by "123456";

     

## 创建用户并赋予权限

首先查看各个用户的权限情况

​	**select user,host,grant_priv from mysql.user;**

若是当前用户登录下的grant_priv为N，则需要修改权限

​	**update user set grant_priv='Y' where user='username';**

**FLUSH PRIVILEGES;**

再创建一个新的用户并赋予权限

​	**create user 'username'@'%' identified by 'username';**(通配符%表示让该用户从任意远程主机登录，如果是本地用户可以用localhost替换%)

​	**grant select,insert,update,delete,create on databasename.* to username;**

​	**FLUSH PRIVILEGES;**



## 撤销用户权限

**revoke select,insert,update,delete,create on databasename.* from 'username'@'%';**

## 备份数据库问题

备份数据库：**mysqldump -u root -p --all-databases > dumpdata.sql**

恢复数据库 **source dumpdata.sql** 或者直接把sql脚本放在workbench里执行

## 创建触发器

​	CREATE TRIGGER trigger_name trigger_time trigger_event ON tb_name FOR EACH ROW trigger_stmt
​		trigger_name：触发器的名称
​		tirgger_time：触发时机，为BEFORE或者AFTER
​		trigger_event：触发事件，为INSERT、DELETE或者UPDATE
​		tb_name：表示建立触发器的表明，就是在哪张表上建立触发器
​		trigger_stmt：触发器的程序体，可以是一条SQL语句或者是用BEGIN和END包含的多条语句
​	所以可以说MySQL创建以下六种触发器：BEFORE INSERT,BEFORE DELETE,BEFORE UPDATE,AFTER INSERT,AFTER DELETE,AFTER UPDATE

