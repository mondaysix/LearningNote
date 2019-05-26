# java基础知识

## java反射

 三种方式得到Class：getClass()、类名.class、Class.forName("")

## hashmap和hashtable区别

hashmap继承abstractMap<K,V>，线程不安全,key允许为null,value允许为null。get(object key)方法若返回null，可能是key不存在为null，也可能是key对应的value为null，所以不能通过get方法判断键是否存在，要使用containsKey

hashtable继承Dictionary<K,V>,很多方法加了synchronized，所以是线程安全的。key和value都不允许为null，
value为null抛出nullpointexception

## String Stringbuffer、stringbuilder区别

**主要在运行速度和线程安全方面的区别**
	运行速度：stringbuilder > stringbuffer > string
	Stringbuffer和stringbuilder继承abstractstringbuilder抽象类
	string：字符串常量，一旦创建则该对象不可更改，如果不断的进行创建、回收对象，则速度会变慢
	Stringbuffer：线程安全，其中的append方法使用了synchoronized，导致效率比stringbuilder低
stringbuilder：非线程安全，效率高于stringbuffer

## java SE、EE、ME及框架

SE：standard edition
EE：enterprise edition
ME：micro edition
框架：Struts、Spring、Hibernate、spring mvc，spring boot, spring cloud、mybatis

## Java多线程

线程池

​	原理：提交一个任务到线程池中，流程如下

​		第一步：先判断线程池的核心线程是否都在执行任务，若不满，则创建，若核心线程都在执行任务，看第二步
​		第二步：线程池判断工作队列是否已满，若没有满，则将新提交的存储在工作队列里，若满了，看第三步
​		第三步：判断线程池里的线程是否都处于工作状态，若没有，则创建新工作线程执行任务，若满了，交给饱和策略来进行处理
​	线程是稀缺资源，被无限制的创建，不仅消耗系统资源还会降低系统稳定性。所以要创建线程池

**创建线程池核心参数**
	 

```java
LinkedBlockingDeque queque = new LinkedBlockingDeque<Runnable>(3);
RejectedExecutionHandler handler = new ThreadPoolExecutor.DiscardPolicy();//饱和策略
new ThreadPoolExecutor(2,10,60, TimeUnit.SECONDS,queque,handler);//核心线程数2个，全部线程数10个，工作队列3个
corePoolSize：核心线程数，当提交任务，线程池创建新线程执行任务直到当前线程数等于corePoolSize
maximumPoolSize：线程池中允许的最大线程数，若当前阻塞队列满了，继续提交任务，创建新的线程执行任务，前提是小于maximum
keepAliveTime：线程空闲时的存活时间
unit：keepaliveTime的单位
workQueue：用来保存等待被执行的任务的阻塞队列，且实现runnable接口
```



### 线程的生命周期

周期：NEW(新建)、RUNNABLE（就绪）、RUNNING（运行）、BLOCKED（阻塞）、DEAD（死亡）
僵尸进程：一个进程使用fork创建子进程，如果子进程退出，而父进程并没有调用wait或waitpid获取子进程的状态信息，那么子进程的进程描述符仍然保存在系统中

### 线程安全

实现线程安全的方式有：同步代码块、同步方法、加lock锁机制
wait()和sleep()最大的不同在于wait()会释放对象锁，而sleep()不会释放对象锁。

**synchronized、volatile区别**

synchronized锁粒度、模拟死锁场景、原子性与可见性；
volatile强制线程每次从主内存中读到变量，而不是从线程的私有内存中读取变量，保证数据的可见性
volatile轻量级，只修饰变量，不能同步
synchronized重量级，可以用来修饰方法，保证可见性和原子性