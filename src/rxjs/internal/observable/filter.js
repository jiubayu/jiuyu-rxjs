import { Observable } from "../Observable"

/**
 * 返回新的Observable
 * @param {*} project 映射函数
 */
export function filter(predicate) {
  // source -> old Observable
  return source => {
    // new Observable 创建一个新的Observable
    // subscriber 新的订阅器
    // 返回一个新的Observable,对需要更新的值进行映射
    return new Observable(function (subscriber) {
      return source.subscribe({
        ...subscriber,
        next(value) {
          predicate(value) && subscriber.next(value)
        },
        error(error) {
          subscriber.error(error)
        },
        complete() {
          subscriber.complete()
        }
      })
    })
  }
}