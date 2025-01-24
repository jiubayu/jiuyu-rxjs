import { Observable } from "../Observable";
import { isArrayLike } from "../util/isArrayLike";
import { isPromise } from "../util/isPromise";

/**
 * 将input转换成Observable
 * @param {*} input 
 */
export function innerFrom(input) {
  if(input instanceof Observable) {
    return input
  }

  if(isPromise(input)) {
    return fromPromise(input)
  }

  if(isArrayLike(input)) {
    return fromArrayLike(input)
  }
}

export function fromArrayLike(arrayLike) {
  return new Observable(subscriber => {
    for(let i = 0; i < arrayLike.length; i++) {
      subscriber.next(arrayLike[i])
    }
    subscriber.complete()
  })
}

export function fromPromise(promise) {
  return new Observable(subscriber => {
    promise.then(value => {
      subscriber.next(value)
      subscriber.complete()
    }, error => {
      subscriber.error(error)
      subscriber.complete()
    })
  })
}