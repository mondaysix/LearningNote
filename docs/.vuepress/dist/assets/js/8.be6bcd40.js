(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{188:function(e,t,i){"use strict";i.r(t);var n=i(0),v=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content"},[i("h1",{attrs:{id:"adb常用操作命令"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#adb常用操作命令","aria-hidden":"true"}},[e._v("#")]),e._v(" adb常用操作命令")]),e._v(" "),i("h2",{attrs:{id:"monkey"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#monkey","aria-hidden":"true"}},[e._v("#")]),e._v(" monkey")]),e._v(" "),i("ol",[i("li",[e._v("查看monkey相关命令adb shell monkey -help")]),e._v(" "),i("li",[e._v("忽略crash命令：--ignore-crashes")]),e._v(" "),i("li",[e._v("忽略ANR：--ignore-timeouts")]),e._v(" "),i("li",[e._v("忽略安全异常：--ignore-security-exceptions")]),e._v(" "),i("li",[e._v("发送错误后直接杀掉进程：--kill-process-after-error")]),e._v(" "),i("li",[e._v("跟踪本地方法的崩溃问题：--monitor-native-crashes")]),e._v(" "),i("li",[e._v("指定伪随机数生成器的seed值：-s 【SEED】两次monkey测试所产生的事件序列相同")]),e._v(" "),i("li",[e._v("指定一个或多个包：-p 【包名】")]),e._v(" "),i("li",[e._v("反馈信息的级别：\n级别0：-v 仅提供启动提示、测试完成和最终结果等少量信息\n级别1：-v -v 提供较为详细的日志，包括每个发送到activity的事件信息\n级别2：-v -v -v 最详细的日志，包括测试中选中、未选中的activity信息")]),e._v(" "),i("li",[e._v("设置事件间隔：-throttle 【时间】")])]),e._v(" "),i("p",[i("strong",[e._v("monkey测试过程中内存问题分析：")]),e._v("\n如何确定内存泄漏问题：弹出out of memory对话框，如果没有弹出对话框，则可以通过logcat文件GC出信息")]),e._v(" "),i("p",[i("strong",[e._v("缺点")]),e._v("：不能读取待测试界面的信息执行验证操作、不提供截屏功能，出现问题很难复现的场景、不支持条件判断、\n控件不能识别、容易误点工具栏导致wifi关闭，影响测试结果、无法自动解锁")])])}],!1,null,null,null);t.default=v.exports}}]);