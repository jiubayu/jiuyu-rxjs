import { Observable, of, from, fromEvent, map, filter, asyncScheduler } from "./rxjs";
// 可观察对象
// const observable = new Observable(subscriber => {
//   subscriber.next(1)
//   subscriber.next(2)
//   subscriber.next(3)
//   subscriber.complete()
//   subscriber.next(4)
// })

// // observer
// const observer = {
//   next: value => {
//     console.log(value)
//   },
//   error: error => {
//     console.log(error)
//   },
//   complete: () => {
//     console.log('complete')
//   }
// }
// subscribe参数可以是observer，也可以是一个next函数
// observable.subscribe( value => {
//   console.log(value)
// })

// observable.subscribe(observer)

// const arrayLikeObservable = of(1,2,3)
// arrayLikeObservable.subscribe({
//   next: value => console.log(value, 'arrayLikeObservable'),
//   complete: () => console.log('complete')
// })

// const promiseLike = from(Promise.resolve(1))
// promiseLike.subscribe({
//   next: value => console.log(value, 'promiseLike'),
//   complete: () => console.log('complete')
// })

// const eventObservable = fromEvent(document, 'click')
// const subscriber = eventObservable.subscribe({
//   next: value => console.log(value, 'eventObservable'),
//   complete: () => console.log('complete')
// })

// setTimeout(() => subscriber.unsubscribe(), 3000)

// of(1, 2, 3)
//   .pipe(map((value) => value * 2)) // [2,4,6]
//   .pipe(filter((value) => value > 3)) // [4,6]
//   .pipe(map((value) => value + 1)) // [5,7]
//   .subscribe(
//     (value) => console.log(value),
//     (error) => console.log(error),
//     () => console.log("complete")
//   );

// of(1, 2, 3)
//   .pipe(
//     map((value) => value * 2),
//     filter((value) => value > 3),
//     map((value) => value + 1)
//   )
//   .subscribe(console.log);

function task(state) {
  console.log(state, 'state');
  if(state < 5) {
    this.schedule(state + 1, 1000)
  }
}
// 开始调度task任务 task, 1000 延迟时间 ，1 传递给task
asyncScheduler.schedule(task, 1000, 1);

function App() {
  return <div>app</div>;
}

export default App;
