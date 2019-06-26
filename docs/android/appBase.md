# Android 知识

## 四大组件

> **Activity**

**生命周期**：onCreate()-->onStart()-->onResume()-->onPause()-->onStop()--->onRestart()-->onDestroy()

启动Activity：onCreate()-->onStart()-->onResume()然后Activity进入运行状态

当前Activity被其他Activity覆盖,调用onPause()

当前ACTIVITY回到前台，调用OnResume

**启动模式**

Standard（每次都会创建一个activity）、

singleTop（栈顶复用）：若需要创建的activity处于栈顶，则直接复用，onNewIntent（传入新的intent）会被调用。如果没有处于栈顶则和standard模式一致

singleTask(栈内复用)：若需要创建的activity处于栈内，则把存在他上面的所有activity都销毁

singleInstance(全局单例模式)：整个系统中只有一个

启动模式方式：

​       manifest.xml中静态指定，launchMode

   	intent中动态指定：addFlags

> **Service**

启动方式：startservice和bindservice

**startservice：**启动一个服务执行后台任务，不进行通信，停止服务使用stopservice

生命周期：startservice—>oncreate--->onstartcommand--->service running—>ondestroy

**bindservice:**启动服务可以进行通信，停止服务使用unbindservice

生命周期：bindservice---》oncreate---》onbind---》client are bound to service---》onunbind---》ondestroy

service需要注册在manifest

两者的区别：startservice与客户端是否退出没有关联关系，即使客户端停止运行，服务同样也会在后台运行。bindservice是与客户端绑定的，客户端退出，service也自动停止

**BroadcastReceiver**

静态注册和动态注册

**ContentProvider**

## AIDL

Android Interface Definition Language，接口定义语言，**为了实现进程间的通信**

每个进程都由自己的Dalvik VM实例，一块独立的内存，存储自己的数据，执行自己的操作。不同的进程不知道相互的信息，则出现了AIDL，通过AIDL制定一些规则，规定它们能进行哪些操作，一个进程可以访问另外一个进程的数据

数据类实现Parcelable接口，将需要传输的数据转化为能够在内存之间流通的形式，即序列化与反序列化

## View

**PopupMenu**

使用步骤：

1、res目录下创建menu文件夹，用例存放菜单资源文件，比如新建一个case_item.xml

```java
<menu xmlns:android="http://schemas.android.com/apk/res/android" >
    <item
        android:id="@+id/test_fun1"
        android:title="test_fun1"/>
    <item
        android:id="@+id/test_fun2"
        android:title="test_fun1"/>
</menu>

```

2、展示菜单项

```java
//创建PopupMenu对象
PopupMenu popup=new PopupMenu(this, button);
//将R.menu.popup_menu菜单资源加载到popup菜单中
getMenuInflater().inflate(R.menu.case_item, popup.getMenu());
//设置点击事件
popup.setOnMenuItemClickListener(new PopupMenu.OnMenuItemClickListener(){
			@Override
			public boolean onMenuItemClick(MenuItem item) {
                
            }
}
//展示列表
popup.show();
//隐藏该对话框
popup.dismiss();                           
```

**Adapter**

BaseAdapter、ArrayAdapter、TreeListViewAdapter

## 应用问题

**app崩溃后自动重启问题**

https://www.jianshu.com/p/eb34c5df30e5

https://blog.csdn.net/BeyondWorlds/article/details/79759348

```java
public class CrashHandler implements Thread.UncaughtExceptionHandler {

        public void init(Context ctx){
            Thread.setDefaultUncaughtExceptionHandler(this);
        }

        @Override
        public void uncaughtException(Thread thread, Throwable ex) {
            if(ex.getCause() != null)
                ex = ex.getCause();
            StringBuilder errInfo = new StringBuilder(1024);
            errInfo.append("uncaughtException: "+ex.toString()+"\n");
            StackTraceElement[] stackTraceElements = ex.getStackTrace();
            for (StackTraceElement ste : stackTraceElements) {
                errInfo.append("\tat " + ste.toString() + "\n");
            }

            String info = errInfo.toString();
            Log.err("exception", info);
            System.exit(-1);//结束当前进程，关闭当前的JVM
        }

    }
```

