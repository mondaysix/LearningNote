# Android APP基础知识

## Activity

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

## Service

启动方式：startservice和bindservice

**startservice：**启动一个服务执行后台任务，不进行通信，停止服务使用stopservice

生命周期：startservice—>oncreate--->onstartcommand--->service running—>ondestroy

**bindservice:**启动服务可以进行通信，停止服务使用unbindservice

生命周期：bindservice---》oncreate---》onbind---》client are bound to service---》onunbind---》ondestroy

service需要注册在manifest

两者的区别：startservice与客户端是否退出没有关联关系，即使客户端停止运行，服务同样也会在后台运行。bindservice是与客户端绑定的，客户端退出，service也自动停止

## BroadcastReceiver

静态注册和动态注册

## ContentProvider

