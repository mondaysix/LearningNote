---
typora-root-url: ..\.vuepress\public
---

# Eclipse + selenium环境搭建

**Jdk**

Jdk可自行在Oracle官网下载，这里主要讲jdk环境变量的配置,以java8在windows10上安装为例：

![shot1](/img/shot1.jpg)

1、在系统属性页找到环境变量，在系统变量栏新建一个变量名为JAVA_HOME（名字最好取的见名知意），变量值为G:\program\Java\jdk1.8.0_191(jdk的路径)

2、Path路径下把刚刚JAVA_HOME的bin和jre/bin路径加入  %JAVA_HOME%\bin        %JAVA_HOME%\jre\bin                                          

3、在系统变量栏新建一个变量名为CLASSPATH，变量值.;%JAVA_HOME%\lib;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar

验证jdk环境是否搭建成功，cmd下分别运行命令java和javac，有正常输出就证明jdk环境搭建成功

如果要查看当前java的版本，使用命令java -version 

**eclipse**

Eclipse软件可在官网进行下载<https://www.eclipse.org/downloads/>下载后可默认安装或者自定义，看个人需要



**selenium**

在eclipse里用的话，基础的包需要下载selenium-server-standalone-3.9.1.jar和selenium-java-3.141.59.zip 下载地址：<https://selenium-release.storage.googleapis.com/index.html> 根据个人需要下载相应的版本



**浏览器firefox、chrome、IE等等**

   使用selenium webdriver来对web页面进行不同的操作，可使用不同的浏览器，如firefox、chrome、IE等等，新建一个java project后需要把selenium相关的包添加到工程下，如图：

![shot2](/img/shot2.jpg)

下面直接上码：

![shot3](/img/shot3.jpg)

直接run的话肯定是会报错的，我们看下是什么错误：Exception in thread "main" java.lang.IllegalStateException: The path to the driver executable must be set by the system property;

意思大概是需要启动浏览器的化需要把相应的driver配置下，不同浏览器有不同的driver，这里firefox的话需要geckodriver,加入System.*setProperty*("webdriver.gecko.driver", "G:\\program\\geckodriver-v0.23.0-win64\\geckodriver.exe");这行代码run就OK了，要是还不能打开浏览器的话，有可能是浏览器的启动路径没找到，再加一一行System.setProperty("webdriver.firefox.bin", "C:\\Program Files\\Mozilla Firefox\\firefox.exe"); 