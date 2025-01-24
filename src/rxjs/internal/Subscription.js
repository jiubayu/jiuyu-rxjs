export class Subscription {
  _finalizers = []
  // 取消订阅
  unsubscribe() {
    this._finalizers.forEach(teardown => teardown())
  }
  add(teardown) {
    this._finalizers.push(teardown)
  }
}