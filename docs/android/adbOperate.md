# adb常用操作命令

## monkey

1. 查看monkey相关命令adb shell monkey -help
2. 忽略crash命令：--ignore-crashes
3. 忽略ANR：--ignore-timeouts
4. 忽略安全异常：--ignore-security-exceptions
5. 发送错误后直接杀掉进程：--kill-process-after-error
6. 跟踪本地方法的崩溃问题：--monitor-native-crashes
7. 指定伪随机数生成器的seed值：-s 【SEED】两次monkey测试所产生的事件序列相同
8. 指定一个或多个包：-p 【包名】
9. 反馈信息的级别：
   		级别0：-v 仅提供启动提示、测试完成和最终结果等少量信息
   		级别1：-v -v 提供较为详细的日志，包括每个发送到activity的事件信息
   		级别2：-v -v -v 最详细的日志，包括测试中选中、未选中的activity信息
10. 设置事件间隔：-throttle 【时间】	

**monkey测试过程中内存问题分析：**
	如何确定内存泄漏问题：弹出out of memory对话框，如果没有弹出对话框，则可以通过logcat文件GC出信息
	
**缺点**：不能读取待测试界面的信息执行验证操作、不提供截屏功能，出现问题很难复现的场景、不支持条件判断、
控件不能识别、容易误点工具栏导致wifi关闭，影响测试结果、无法自动解锁