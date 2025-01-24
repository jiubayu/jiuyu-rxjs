import { Subscription } from './Subscription';
import { isFunction } from './util/isFunction'
export class SubScriber extends Subscription {
  isStopped = false
  constructor(observerOrNext) {
    super()
    let observer;
    if (isFunction(observerOrNext)) {
      observer = {
        next: observerOrNext,
        // error: null,
        // complete: null
      }
    } else {
      observer = observerOrNext
    }
    // 把观察者对象存储到订阅者对象的属性中
    this.destination = observer
  }

  next(value) {
    if (!this.isStopped) {
      this.destination.next(value)
    }
  }

  error(error) {
    this.destination.error?.(error)
  }
  // 如果调用了complete方法，就表示订阅已经完成
  complete() {
    if (!this.isStopped) {
      this.isStopped = true
      this.destination.complete?.()
    }
  }
}