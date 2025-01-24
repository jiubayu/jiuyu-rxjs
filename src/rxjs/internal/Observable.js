import { SubScriber } from "./Subscriber"
import { pipeFromArray } from "./util/pipe"

export class Observable {
  constructor(subscriber) {
    if (subscriber) {
      // 保存订阅函数，在创建的时候并没有执行
      this._subscribe = subscriber
    }
  }
  // 当调用Observable的subscribe方法时，触发订阅，开始执行_subscribe
  subscribe(observerOrNext) {
    // 创建一个订阅者对象
    const subscriber = new SubScriber(observerOrNext)
    // 订阅函数执行后会返回一个销毁unsubscribe函数
    const teardown = this._subscribe(subscriber)
    subscriber.add(teardown)
    return subscriber
  }
  // 管道
  pipe(...operation) {
    // 把老的Observable传递给operation的source参数，通过映射函数转换，返回新的Observable
    return pipeFromArray(operation)(this)
  }
}