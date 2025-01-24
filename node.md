# RxJS
- RxJS 是一个使用可观察序列组合异步和基于事件的程序的库
- 提供了一种核心类型，即 Observable，以及卫星类型（Observer，Schedulers，Subjects）和操作符，这些操作符受到 Array 方法（map，filter，reduce，every 等）的启发，可以将异步事件处理为集合
- ReactiveX 结合了观察者模式和迭代器模式，并将函数式编程与集合相结合，以满足对理想管理事件序列的需求

## 基本概念
- Observable 表示可调用的未来值或事件的集合的想法
- Observer 是一组回调，知道如何监听 Observable 传递的值
- Subscription 表示 Observable 的执行，主要用于取消执行
- Operators 是纯函数，使用操作（如 map、filter、concat、reduce 等）处理集合时具有函数式编程风格
- Subject 等同于 EventEmitter，是将值或事件多播到多个 Observer 的唯一方法
- Schedulers 是集中式调度程序，用于控制并发，允许我们协调计算发生在例如 setTimeout、requestAnimationFrame 或其他位置的时间