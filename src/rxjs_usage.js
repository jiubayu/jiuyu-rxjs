import {Observable} from './rxjs'
// 可观察对象
const observable = new Observable(subscriber => {
  subscriber.next(1)
  subscriber.next(2)
  subscriber.next(3)
  subscriber.complete()
})

// observer
const observer = {
  next: value => {
    console.log(value)
  },
  error: error => {
    console.log(error)
  },
  complete: () => {
    console.log('complete')
  }
}
observable.subscribe(observer)