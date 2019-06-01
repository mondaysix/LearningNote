# java基础

## 反射

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

## 线程进程

### 线程

在一个进程内部可以执行多个任务，这样的任务可以看成一个线程。线程是程序使用CPU的基本单位

#### 线程的生命周期

周期：NEW(新建)、RUNNABLE（就绪）、RUNNING（运行）、BLOCKED（阻塞）、DEAD（死亡）
僵尸进程：一个进程使用fork创建子进程，如果子进程退出，而父进程并没有调用wait或waitpid获取子进程的状态信息，那么子进程的进程描述符仍然保存在系统中

#### 并行和并发

并行：逻辑上同时发生，某一个时间内同时运行多个程序

并发：物理上同时发生，某一个时间点同时运行多个程序

#### 线程安全

实现线程安全的方式有：同步代码块、同步方法、加lock锁机制
wait()和sleep()最大的不同在于wait()会释放对象锁，而sleep()不会释放对象锁。

**synchronized、volatile区别**

synchronized锁粒度、模拟死锁场景、原子性与可见性；
volatile强制线程每次从主内存中读到变量，而不是从线程的私有内存中读取变量，保证数据的可见性
volatile轻量级，只修饰变量，不能同步
synchronized重量级，可以用来修饰方法，保证可见性和原子性

#### 线程池

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

### 进程

正在运行的程序，是系统进行资源分配和调用的独立单位，每个进程都有它自己的内存空间和系统资源。我们经常在任务管理器查看的就是进程

#### 多进程的意义

现在的计算机都是多进程的操作系统，在同一个时间段内执行多个任务。对CPU来说，在某个时间点上只能做一件事，计算机在不同的进程间坐着频繁的切换操作，切换速度快，所以我们感觉不同的进程在同时进行，其实是切换速度快，所以多进程的作用是提高CPU的使用率

#### 进程的生命周期

> 就绪状态->运行状态->阻塞状态
>
> 就绪状态：进程已经处于准备运行的状态即获取了除处理机之外的一切资源，一旦得到处理机即可运行
>
> 运行状态：进程正在处理及上运行
>
> 阻塞状态：进程正在等待某一事件而暂停运行

就绪->运行状态：处于就绪状态的进程被调度后，获得处理机资源

运行->就绪状态：处于运行状态的进程在时间片用完后，让出处理机，

运行->阻塞状态：进程请求某一资源的使用和分配而等待某一事件的发生（如IO操作的完成），从运行状态转换为阻塞状态

阻塞->就绪状态：当进程等待的事件到来时，中断处理程序必须把相应进程的状态由阻塞状态转换为就绪状态

#### 进程死锁

死锁是指多个进程在运行过程中，因争夺资源而造成的一种僵局

**造成死锁原因：**

资源竞争：请求同一有限资源的进程数多于可用资源数

进程执行中，请求和释放资源顺序混乱

**死锁产生的必要条件：**

互斥：进程对所分配的资源进行排他性使用

请求和保持：进程被阻塞的时候并不释放锁申请到的资源

不可剥夺：进程对已经申请到的资源在使用完成之前不可以被剥夺

环路等待：发生死锁时候存在进行资源环形等待链

**死锁处理：**

预防死锁：破坏产生死锁的必要条件中的一个或者多个

避免死锁：在资源动态分配中，防止系统进入不安全状态

检测死锁：死锁发生后，采用一定的算法检测，确定与死锁相关的资源和进程，采取相关方法清除检测到的死锁

解除死锁：对检测到的和死锁相关的进程以及资源，通过撤销或者挂起的方式，释放一些资源并将其分配给处于阻塞状态的进程

