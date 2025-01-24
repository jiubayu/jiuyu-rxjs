import { from } from "./from";

/**
 * RxJS 的 of 操作符允许你创建一个 Observable，它发出一组项目，然后完成
 * 你可以使用它来将任何值发送到一个 Observable 中，例如，你可以使用它来将一个数字数组转换为 Observable
 * of 操作符是同步的，意味着它会立即发出所有的值，并立即完成,如果你需要异步发出值，你可以使用 from 操作符
 * @param  {...any} args 
 * @returns 
 */
export function of(...args) {
  return from(args)
}