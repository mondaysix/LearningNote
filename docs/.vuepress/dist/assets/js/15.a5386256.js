(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{179:function(t,e,s){"use strict";s.r(e);var a=s(0),r=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("p",[t._v('三种方式得到Class：getClass()、类名.class、Class.forName("")')]),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("hashmap继承abstractMap<K,V>，线程不安全,key允许为null,value允许为null。get(object key)方法若返回null，可能是key不存在为null，也可能是key对应的value为null，所以不能通过get方法判断键是否存在，要使用containsKey")]),t._v(" "),s("p",[t._v("hashtable继承Dictionary<K,V>,很多方法加了synchronized，所以是线程安全的。key和value都不允许为null，\nvalue为null抛出nullpointexception")]),t._v(" "),s("p",[t._v("引用一个不错的学习两者区别的链接")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.jianshu.com/p/ee0de4c99f87",target:"_blank",rel:"noopener noreferrer"}},[t._v("读懂hashmap"),s("OutboundLink")],1)]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),s("p",[t._v("SE：standard edition\nEE：enterprise edition\nME：micro edition\n框架：Struts、Spring、Hibernate、spring mvc，spring boot, spring cloud、mybatis")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),s("p",[t._v("在一个进程内部可以执行多个任务，这样的任务可以看成一个线程。线程是程序使用CPU的基本单位")]),t._v(" "),t._m(8),t._v(" "),s("p",[t._v("周期：NEW(新建)、RUNNABLE（就绪）、RUNNING（运行）、BLOCKED（阻塞）、DEAD（死亡）\n僵尸进程：一个进程使用fork创建子进程，如果子进程退出，而父进程并没有调用wait或waitpid获取子进程的状态信息，那么子进程的进程描述符仍然保存在系统中")]),t._v(" "),t._m(9),t._v(" "),s("p",[t._v("并行：逻辑上同时发生，某一个时间内同时运行多个程序")]),t._v(" "),s("p",[t._v("并发：物理上同时发生，某一个时间点同时运行多个程序")]),t._v(" "),t._m(10),t._v(" "),s("p",[t._v("实现线程安全的方式有：同步代码块、同步方法、加lock锁机制\nwait()和sleep()最大的不同在于wait()会释放对象锁，而sleep()不会释放对象锁。")]),t._v(" "),t._m(11),t._v(" "),s("p",[t._v("synchronized锁粒度、模拟死锁场景、原子性与可见性；\nvolatile强制线程每次从主内存中读到变量，而不是从线程的私有内存中读取变量，保证数据的可见性\nvolatile轻量级，只修饰变量，不能同步\nsynchronized重量级，可以用来修饰方法，保证可见性和原子性")]),t._v(" "),t._m(12),t._v(" "),s("p",[t._v("​\t原理：提交一个任务到线程池中，流程如下")]),t._v(" "),s("p",[t._v("​\t\t第一步：先判断线程池的核心线程是否都在执行任务，若不满，则创建，若核心线程都在执行任务，看第二步\n​\t\t第二步：线程池判断工作队列是否已满，若没有满，则将新提交的存储在工作队列里，若满了，看第三步\n​\t\t第三步：判断线程池里的线程是否都处于工作状态，若没有，则创建新工作线程执行任务，若满了，交给饱和策略来进行处理\n​\t线程是稀缺资源，被无限制的创建，不仅消耗系统资源还会降低系统稳定性。所以要创建线程池")]),t._v(" "),t._m(13),t._v(" "),t._m(14),s("p",[s("a",{attrs:{href:"https://www.cnblogs.com/hapjin/p/5492645.html",target:"_blank",rel:"noopener noreferrer"}},[s("strong",[t._v("JAVA多线程之wait/notify")]),s("OutboundLink")],1)]),t._v(" "),t._m(15),t._v(" "),s("p",[t._v("正在运行的程序，是系统进行资源分配和调用的独立单位，每个进程都有它自己的内存空间和系统资源。我们经常在任务管理器查看的就是进程")]),t._v(" "),t._m(16),t._v(" "),s("p",[t._v("现在的计算机都是多进程的操作系统，在同一个时间段内执行多个任务。对CPU来说，在某个时间点上只能做一件事，计算机在不同的进程间坐着频繁的切换操作，切换速度快，所以我们感觉不同的进程在同时进行，其实是切换速度快，所以多进程的作用是提高CPU的使用率")]),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),s("p",[t._v("就绪->运行状态：处于就绪状态的进程被调度后，获得处理机资源")]),t._v(" "),s("p",[t._v("运行->就绪状态：处于运行状态的进程在时间片用完后，让出处理机，")]),t._v(" "),s("p",[t._v("运行->阻塞状态：进程请求某一资源的使用和分配而等待某一事件的发生（如IO操作的完成），从运行状态转换为阻塞状态")]),t._v(" "),s("p",[t._v("阻塞->就绪状态：当进程等待的事件到来时，中断处理程序必须把相应进程的状态由阻塞状态转换为就绪状态")]),t._v(" "),t._m(19),t._v(" "),s("p",[t._v("死锁是指多个进程在运行过程中，因争夺资源而造成的一种僵局")]),t._v(" "),t._m(20),t._v(" "),s("p",[t._v("资源竞争：请求同一有限资源的进程数多于可用资源数")]),t._v(" "),s("p",[t._v("进程执行中，请求和释放资源顺序混乱")]),t._v(" "),t._m(21),t._v(" "),s("p",[t._v("互斥：进程对所分配的资源进行排他性使用")]),t._v(" "),s("p",[t._v("请求和保持：进程被阻塞的时候并不释放锁申请到的资源")]),t._v(" "),s("p",[t._v("不可剥夺：进程对已经申请到的资源在使用完成之前不可以被剥夺")]),t._v(" "),s("p",[t._v("环路等待：发生死锁时候存在进行资源环形等待链")]),t._v(" "),t._m(22),t._v(" "),s("p",[t._v("预防死锁：破坏产生死锁的必要条件中的一个或者多个")]),t._v(" "),s("p",[t._v("避免死锁：在资源动态分配中，防止系统进入不安全状态")]),t._v(" "),s("p",[t._v("检测死锁：死锁发生后，采用一定的算法检测，确定与死锁相关的资源和进程，采取相关方法清除检测到的死锁")]),t._v(" "),s("p",[t._v("解除死锁：对检测到的和死锁相关的进程以及资源，通过撤销或者挂起的方式，释放一些资源并将其分配给处于阻塞状态的进程")])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"java基础"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#java基础","aria-hidden":"true"}},[this._v("#")]),this._v(" java基础")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"反射"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#反射","aria-hidden":"true"}},[this._v("#")]),this._v(" 反射")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"hashmap和hashtable区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hashmap和hashtable区别","aria-hidden":"true"}},[this._v("#")]),this._v(" hashmap和hashtable区别")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"string-stringbuffer、stringbuilder区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#string-stringbuffer、stringbuilder区别","aria-hidden":"true"}},[this._v("#")]),this._v(" String Stringbuffer、stringbuilder区别")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("主要在运行速度和线程安全方面的区别")]),this._v("\n运行速度：stringbuilder > stringbuffer > string\nStringbuffer和stringbuilder继承abstractstringbuilder抽象类\nstring：字符串常量，一旦创建则该对象不可更改，如果不断的进行创建、回收对象，则速度会变慢\nStringbuffer：线程安全，其中的append方法使用了synchoronized，导致效率比stringbuilder低\nstringbuilder：非线程安全，效率高于stringbuffer")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"java-se、ee、me及框架"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#java-se、ee、me及框架","aria-hidden":"true"}},[this._v("#")]),this._v(" java SE、EE、ME及框架")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"线程进程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#线程进程","aria-hidden":"true"}},[this._v("#")]),this._v(" 线程进程")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"线程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#线程","aria-hidden":"true"}},[this._v("#")]),this._v(" 线程")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"线程的生命周期"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#线程的生命周期","aria-hidden":"true"}},[this._v("#")]),this._v(" 线程的生命周期")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"并行和并发"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#并行和并发","aria-hidden":"true"}},[this._v("#")]),this._v(" 并行和并发")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"线程安全"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#线程安全","aria-hidden":"true"}},[this._v("#")]),this._v(" 线程安全")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("synchronized、volatile区别")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"线程池"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#线程池","aria-hidden":"true"}},[this._v("#")]),this._v(" 线程池")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("创建线程池核心参数")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LinkedBlockingDeque")]),t._v(" queque "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LinkedBlockingDeque")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Runnable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RejectedExecutionHandler")]),t._v(" handler "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ThreadPoolExecutor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DiscardPolicy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//饱和策略")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ThreadPoolExecutor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TimeUnit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SECONDS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("queque"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("handler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//核心线程数2个，全部线程数10个，工作队列3个")]),t._v("\ncorePoolSize：核心线程数，当提交任务，线程池创建新线程执行任务直到当前线程数等于corePoolSize\nmaximumPoolSize：线程池中允许的最大线程数，若当前阻塞队列满了，继续提交任务，创建新的线程执行任务，前提是小于maximum\nkeepAliveTime：线程空闲时的存活时间\nunit：keepaliveTime的单位\nworkQueue：用来保存等待被执行的任务的阻塞队列，且实现runnable接口\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"进程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#进程","aria-hidden":"true"}},[this._v("#")]),this._v(" 进程")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"多进程的意义"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#多进程的意义","aria-hidden":"true"}},[this._v("#")]),this._v(" 多进程的意义")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"进程的生命周期"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#进程的生命周期","aria-hidden":"true"}},[this._v("#")]),this._v(" 进程的生命周期")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("就绪状态->运行状态->阻塞状态")]),this._v(" "),e("p",[this._v("就绪状态：进程已经处于准备运行的状态即获取了除处理机之外的一切资源，一旦得到处理机即可运行")]),this._v(" "),e("p",[this._v("运行状态：进程正在处理及上运行")]),this._v(" "),e("p",[this._v("阻塞状态：进程正在等待某一事件而暂停运行")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"进程死锁"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#进程死锁","aria-hidden":"true"}},[this._v("#")]),this._v(" 进程死锁")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("造成死锁原因：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("死锁产生的必要条件：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("死锁处理：")])])}],!1,null,null,null);e.default=r.exports}}]);