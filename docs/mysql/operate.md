---
typora-root-url: ..\.vuepress\public
---

## mysql5.7服务无法启动问题

以mysql 5.7.17 版本为例

**方式1**

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

**方式2**

启动services.msc里的mysql服务重新启动失败，提示“本地计算机上的MySQL服务启动后停止。某些服务在未由其他服务或程序使用时将自动”，可参考如下方式：

1.首先需要把原来的服务删除，执行如下操作:

- cd C:\Program Files\MySQL\MySQL Server 5.7
- **mysqld --remove mysql**
- 进入bin目录
- **mysqld--initialize-insecure --user=mysql**
- 注册服务**mysqld --install mysql --defaults-file=C:\Program Files\MySQL\MySQL Server 5.7\my.ini**
- 启动服务:**net start mysql**



## Access denied for user ‘root’@‘localhost’ (using password: YES)问题

输入正确用户名和密码登录失败，弹出access denied，可用跳过验证重新设置密码

1. **使用管理员权限打开cmd**,先看services.msc里的mysql服务是否已经关闭

2. 进入安装路径执行如下操作

   cd C:\Program Files\MySQL\MySQL Server 5.7\bin

   mysqld --initialize

   mysqld --install mysql --defaults-file=C:\Program Files\MySQL\MySQL Server 5.7\my.ini

   net stop mysql

   mysqld --skip-grant-tables

3. 同样使用管理员权限另外开一个cmd窗口，执行如下操作

   mysql -u root

   update user set authentication_string=password('123456') where user="root";

   flush privileges;

   关闭该窗口

4. ​	再重新启动mysql服务

   net start mysql

   mysql -u root -p 输入之前修改的密码可正常登录

   若是正常登录后提示“ERROR 1820 (HY000): You must reset your password using ALTER USER statement before executing this statement.”则执行alter user user() identified by "123456";

   

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

## MySQL经常弹出提示框：Unable to connect to remote host. Catalog download has failed

具体如下图：

![shot1](/img/shot5.PNG)

该问题是由于新版本的 Mysql 在安装的时候会自动在 Windows 的“任务计划程序”中安装一个定时任务

打开“控制面板”，查看方式选择“小图标”，找到“管理工具”项，点击“任务计划程序”，找到列表中的MySQL->Installer选择名称为“ManifestUpdate”任务，右键菜单点击“禁用”项，完成任务禁用。也可以点击右侧的“禁用”

## 实践SQL语句

```mysql
## 创建、删除、查询数据库
create database sonar character set utf8 collate utf8_general_ci;
drop database sonarqubedb;
show databases;

## 创建用户并赋予权限
CREATE USER 'sonaruser'@'%' IDENTIFIED BY '123456';
create user 'sonaruser'@'localhost' identified by '123456';
grant all on *.* to 'sonaruser'@'%';
flush privileges;
grant all on *.* to 'sonaruser'@'localhost';

## 指定数据库下创建表
use sonarqubedb;
create table employee(
	ename varchar(10),
    hiredate date,
    sal decimal(10,2),
    deptno int(2)
);
create table dept(
	deptno int(2),
    deptname varchar(20)
);
## 查询表数据及表信息
show tables;
desc employee; -- 查看表信息
show create table employee \G; -- 显示表详细信息
-- information_schema 存储系统中一些数据库对象信息，比如用户表信息、权限信息、列信息等等
-- mysql 存储系统的用户权限信息
## 修改表的属性、数据等等操作
alter table employee modify ename varchar(20);
alter table employee add column age int(3);
alter table employee drop column age;
alter table employee change column age age1 int(4);
alter table employee add birth date after ename;
alter table employee modify age1 int(3) first;
alter table employee rename employee1;
/**
	DML操作，主要是insert update delete select
*/
insert into employee(ename,sal) values('dony',1000),('dony2',2000);
insert into employee(ename,sal,hiredate,deptno) values('zzz',100,'2019-1-1',1),('lisa',200,'2018-1-1',2),('qwe',100,'2017-1-1',1),('zzz',2000,'2016-1-1',4);
update employee set ename='abc' where sal='1000';
insert into dept(deptno,deptname) value(1,'tech'),(2,'sale'),(5,'test');
insert into dept(deptno,deptname) value(6,'fin');
update employee a,dept b set a.sal = a.sal*b.deptno,b.deptname=a.ename where a.deptno = b.deptno;

delete from employee where ename='abc';
select * from dept;
update dept set deptname='hr' where deptno=2;
select * from employee;
select distinct deptno from employee order by deptno desc;

select * from employee order by deptno,sal desc limit 1,4;
select deptno,count(1) from employee group by deptno with rollup;
select deptno,count(1) from employee group by deptno having count(1)>1;
-- 表连接 内连接：仅选出两张表中互相匹配的记录，也就是两个表的交集
select ename,deptname from employee,dept where employee.deptno=dept.deptno;
-- 左（外）连接，将左表的记录全部显示出来，右表只会显示符合搜索条件的记录，右表记录不足的地方为null
select ename,deptname from employee left join dept on employee.deptno = dept.deptno; 
select ename,deptname from dept left join employee on dept.deptno = employee.deptno; 
-- 右（外）连接，刚好与左连接相反

-- 子查询
select * from employee where deptno in(select deptno from dept);

select deptno from employee union  select deptno from dept; -- union union all

/**
	DCL:DBA管理系统中的对象权限时用到
*/
grant select,insert on sonarqubedb.* to '' identified by 'root';
-- 收回权限
revoke insert,select on sonarqubedb.* from 'root@localhost';
-- 命令行模式下，查看支持哪些数据类型 ? data types 若想知道具体某个数据类型的信息 ? int
-- 快速查看某项语法，使用关键字进行快速查询 ? show
-- https://dev.mysql.com/doc/
-- 存储引擎
create table myisam_char(name char(10)) engine=MyISAM;
insert into myisam_char values("abc"),("abc  "),("  abc"),("  abc  ");
select name,length(name) from myisam_char;
show variables like 'table_type';
show engines;


```

## 提示错误信息包含“SELECT list is not in group by clause and contains nonaggre”

mysql5.7.5以上版本功能依赖检测功能，

```mysql
select @@global.sql_mode
查询结果：
ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION
去掉only_full_group_by设置
set@@global.sql_mode=’STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION’;
```

