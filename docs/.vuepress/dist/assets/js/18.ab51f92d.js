(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{176:function(e,t,r){"use strict";r.r(t);var i=r(0),s=Object(i.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),r("p",[e._v("Jdk可自行在Oracle官网下载，这里主要讲jdk环境变量的配置,以java8在windows10上安装为例：")]),e._v(" "),e._m(2),e._v(" "),r("p",[e._v("1、在系统属性页找到环境变量，在系统变量栏新建一个变量名为JAVA_HOME（名字最好取的见名知意），变量值为G:\\program\\Java\\jdk1.8.0_191(jdk的路径)")]),e._v(" "),r("p",[e._v("2、Path路径下把刚刚JAVA_HOME的bin和jre/bin路径加入  %JAVA_HOME%\\bin        %JAVA_HOME%\\jre\\bin")]),e._v(" "),r("p",[e._v("3、在系统变量栏新建一个变量名为CLASSPATH，变量值.;%JAVA_HOME%\\lib;%JAVA_HOME%\\lib\\dt.jar;%JAVA_HOME%\\lib\\tools.jar")]),e._v(" "),r("p",[e._v("验证jdk环境是否搭建成功，cmd下分别运行命令java和javac，有正常输出就证明jdk环境搭建成功")]),e._v(" "),r("p",[e._v("如果要查看当前java的版本，使用命令java -version")]),e._v(" "),e._m(3),e._v(" "),r("p",[e._v("Eclipse软件可在官网进行下载"),r("a",{attrs:{href:"https://www.eclipse.org/downloads/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.eclipse.org/downloads/"),r("OutboundLink")],1),e._v("下载后可默认安装或者自定义，看个人需要")]),e._v(" "),e._m(4),e._v(" "),r("p",[e._v("在eclipse里用的话，基础的包需要下载selenium-server-standalone-3.9.1.jar和selenium-java-3.141.59.zip 下载地址："),r("a",{attrs:{href:"https://selenium-release.storage.googleapis.com/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://selenium-release.storage.googleapis.com/index.html"),r("OutboundLink")],1),e._v(" 根据个人需要下载相应的版本")]),e._v(" "),e._m(5),e._v(" "),r("p",[e._v("使用selenium webdriver来对web页面进行不同的操作，可使用不同的浏览器，如firefox、chrome、IE等等，新建一个java project后需要把selenium相关的包添加到工程下，如图：")]),e._v(" "),e._m(6),e._v(" "),r("p",[e._v("下面直接上码：")]),e._v(" "),e._m(7),e._v(" "),r("p",[e._v('直接run的话肯定是会报错的，我们看下是什么错误：Exception in thread "main" java.lang.IllegalStateException: The path to the driver executable must be set by the system property;')]),e._v(" "),e._m(8)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"eclipse-selenium环境搭建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#eclipse-selenium环境搭建","aria-hidden":"true"}},[this._v("#")]),this._v(" Eclipse + selenium环境搭建")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"jdk"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jdk","aria-hidden":"true"}},[this._v("#")]),this._v(" Jdk")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"/img/shot1.jpg",alt:"shot1"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"eclipse"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#eclipse","aria-hidden":"true"}},[this._v("#")]),this._v(" eclipse")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"selenium"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#selenium","aria-hidden":"true"}},[this._v("#")]),this._v(" selenium")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"浏览器firefox、chrome、ie等等"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浏览器firefox、chrome、ie等等","aria-hidden":"true"}},[this._v("#")]),this._v(" 浏览器firefox、chrome、IE等等")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"/img/shot2.jpg",alt:"shot2"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"/img/shot3.jpg",alt:"shot3"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("意思大概是需要启动浏览器的化需要把相应的driver配置下，不同浏览器有不同的driver，这里firefox的话需要geckodriver,加入System."),t("em",[this._v("setProperty")]),this._v('("webdriver.gecko.driver", "G:\\program\\geckodriver-v0.23.0-win64\\geckodriver.exe");这行代码run就OK了，要是还不能打开浏览器的话，有可能是浏览器的启动路径没找到，再加一一行System.setProperty("webdriver.firefox.bin", "C:\\Program Files\\Mozilla Firefox\\firefox.exe");')])}],!1,null,null,null);t.default=s.exports}}]);