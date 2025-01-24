export class AsyncAction {
  pending = false
  constructor(work) {
    this.work = work
  }
  // 当调用此方法时，需要在delay时间后执行work
  schedule(state, delay = 0) {
    this.state = state
    this.delay = delay

    if(this.timerId !== null) {
      this.timerId = this.recycleAsyncId(this.timerId )
    }
    // 表示有任务等待执行
    this.pending = true
    this.timerId = this.requestAsyncId(delay)
  }

  recycleAsyncId(timerId) {
    if(timerId !== null) {
      clearInterval(timerId)
    }
  }

  requestAsyncId(delay = 0) {
    return setInterval(this.execute, delay)
  }

  execute = () => {
    this.pending = false
    this.work(this.state)
    // 如果在work中没有调度新的任务的话，就把定时器清掉
    if(this.pending === false && this.timerId !== null) {
      this.recycleAsyncId(this.timerId)
    }
  }
}