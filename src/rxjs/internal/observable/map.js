import { Observable } from "../Observable"

/**
 * 返回新的Observable
 * @param {*} project 映射函数
 */
export function map(project) {
  //  operation

  // source -> old Observable
  return source => {
    // new Observable 创建一个新的Observable
    // subscriber 新的订阅器
    // 返回一个新的Observable,对需要更新的值进行映射
    // 返回的还是一个Observable，这样对于组合函数的处理更方便，不用再写pipe
    return new Observable(function (subscriber) {
      return source.subscribe({
        ...subscriber,
        next(value) {
          subscriber.next(project(value))
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