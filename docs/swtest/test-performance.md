# 性能测试

##  不同视角的软件性能和指标

同一个系统，不同的对象群体对软件性能的关注点不同，比如终端用户、系统运维人员、软件设计开发人员、性能测试人员

**终端用户**，软件性能表现为用户进行业务操作时的主观响应时间，包括系统响应时间和前端展现的时间

- 系统响应时间，反应的是系统能力，比如应用系统处理时间、数据库处理时间、网络传输时间。
- 前端展现时间，取决于用户端的处理能力

**系统运维人员**，表现为大量用户并发访问时的负载，并发处理能力、当前部署的系统容量、可能的系统瓶颈、长时间运行的稳定性和可扩展性

**软件设计开发人员**，关注性能相关的设计和实现细节，包括算法设计、架构设计、性能最佳实践、数据库相关、软件性能的可测试性。

算法设计

- 核心算法的设计与实现是否高效，设计上是否采用buffer机制以提高性能，降低I/O
- 是否存在潜在的内存泄漏
- 是否存在并发环境下的线程安全问题
- 是否存在不合理的线程同步方式
- 是否存在不合理的资源竞争

架构设计

- 是否可以方便地进行系统容量和性能扩展
- 应用集群、缓存集群、数据库的可扩展性是否经过测试和验证

性能最佳实践

- 代码实现是否遵守开发语言的性能最佳实践
- 是否考虑 前端性能优化
- 关键代码是否采用白盒测试方法
- 对于压缩和加密的场景，是否采用先压缩后加密

数据库

- 数据库表设计是否高效
- 是否引入索引
- sql语句执行计划是否合理
- sql语句除了功能是否考虑性能要求
- 是否需要引入读写分离机制
- 系统冷启动后，缓存大量不命中的时候，数据库承载压力是否超负荷

软件性能的可测试点

- 是否支持高并发场景下的性能打点
- 是否支持全链路的性能分析
- 是否为性能分析提供必要的接口支持

**性能测试人员**，关注算法设计、架构设计、性能最佳实践、数据库相关、软件性能的可测试性



衡量软件性能的三个常用指标：并发用户数、响应实践以及系统吞吐量



并发用户数，包括业务层面和后端服务器层面

- 业务层面，实际使用系统的用户总数。
- 后端服务器层面的并发用户数，指同时向服务器发送请求的数量，直接反映了系统实际承载的压力

响应时间，反映完成某个操作所需要的时间。分为前端响应时间和系统响应时间，前端响应时间取决于客户端收到服务器返回的数据后渲染页面所消耗的时间；系统响应时间，进一步划分为web服务器时间、应用服务器时间、数据库时间、服务器通信的网络时间。



系统吞吐量，吞吐率=吞吐量/单位时间。通常用requests/second、pages/second、bytes/second来衡量

## 常用方法和应用领域

常用方法：后端性能测试、前端性能测试、代码级性能测试、压力测试、配置测试、并发测试、可靠性测试。

后端性能测试，通过性能测试工具模拟大量的并发用户请求，然后获取系统性能的各项指标，并且验证各项指标是否符合预期的性能需求，指标包括并发用户数、响应时间、系统吞吐量、CPU占用率、内存使用率、磁盘I/O、网络I/O等等

前端性能测试，关注浏览器端的页面渲染时间、资源加载顺序、请求数量、前端缓存使用情况、资源压缩等等。目前普遍采用的前端测试方法是雅虎的前端团队总结的7大类35条 前端优化规则

代码级别性能测试，单元测试阶段对代码的时间性能和空间性能进行必要的测试和评估

压力测试，不断对系统施加压力，验证系统处于或者长期处于临界饱和阶段的稳定性

配置测试，住哟啊用于观察系统在不同配置下的性能表现

并发测试，同一时间内，同时调用后端服务，观察被调用服务在并发 情况下的行为表现

可靠性测试，验证系统在常规负载模式下长期运行的稳定性，本质是通过长时间模拟真实的系统负载来发现系统潜在的内存泄漏、链接池回收等等

应用领域，包括能力验证、能力规划、性能调优、缺陷发现
