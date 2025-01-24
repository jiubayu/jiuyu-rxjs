export class Scheduler {
  constructor(schedulerActionCtor) {
    this.schedulerActionCtor = schedulerActionCtor
  }

  /**
   * 类似setTimeout
   * @param {*} work 要执行的工作
   * @param {*} delay 延迟时间
   * @param {*} state 初始值
   * @returns 
   */
  schedule(work, delay=0,state) {
    return new this.schedulerActionCtor(work).schedule(state, delay)
  }
}