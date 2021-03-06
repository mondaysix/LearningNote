# Selenium实现web自动化

## Selenium 1.0工作原理

​	1.0又称Selenium Remote Control,利用的原理是：javascript代码可以很方便的获取页面上的任何元素并执行各种操作。（基于javascript代码注入）

​	“同源策略”：只有来自相同域名、端口和协议的javascript代码才能被浏览器执行。所以selenium RC就必须欺骗被测站点，则需要引入selenium RC Server

​	RC 包括两个部分 RC Server 、Client Libraries。RC Server包括Launcher、Http Proxy、Selenium Core。Client Libraries包括Java、c#、Ruby等等

​	Selenium Core:被注入到浏览器页面中javascript函数集合，用来实现页面元素的识别和操作

​	Http Proxy：代理服务器，以达到欺骗被测站点目的

​	Launcher：在启动测试浏览器时完成selenium core的注入和浏览器代理的设置

​	Client Libraries:测试大爱吗向selenium rc server发送http请求的接口

Selenium RC的执行流程如下：

1. 测试用例基于不同语言编写的Client Libraries向RC Server发送请求，要求建立连接
2. 建立连接后，Launcher启动浏览器，把selenium core加载到浏览器页面并把浏览器代理设置为Http Proxy
3. 测试用例向RC server发送http请求，RC server解析请求，通过http proxy发送javascript命令通知core执行浏览器上控件的具体操作
4. selenium core接收到指令后执行操作
5. 若浏览器接收到新的页面请求，则发送请求新的页面，launcher启动浏览器时有代理，则rc server会接收到所有由它启动的浏览器发送的请求
6. rc server 接收到请求后，重组http请求规避同源策略，然后获取对应的web页面
7. http proxy把接收到的web页面返回给浏览器，

## Selenium 2.0工作原理

2.0又称selenium webdriver，利用的原理是使用浏览器原生的webdriver实现页面操作。

webdriver是典型的server-client模式，执行流程如下：

1. client启动浏览器时，后台同时启动基于webdriver wire协议的web service作为remote server并与浏览器进行绑定，绑定后，remote server 开始监听client的请求
2. client将要执行的页面请求以http request的方式发送给remote server。http request的body是以webdriver wire协议规定的json格式来描述需要浏览器执行的具体操作
3. remote server接收到请求后，会请求解析，将解析结果发送给webdriver，由webdriver实际执行浏览器的操作
4. webdriver看作是直接操作浏览器的 原生组件，所以在测试前需要下载浏览器相应的webdriver

