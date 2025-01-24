import { innerFrom } from "./innerFrom";

/**
 * RxJS 的 from 操作符允许你将多种不同的数据类型转换为 Observable，包括数组、类数组对象(如 arguments 对象)、迭代器和可观察对象
 * from 操作符是异步的，意味着它会在内部使用内置的调度
 * @param {*} arrayLike 
 * @returns 
 */
export function from(input) {
  return innerFrom(input)
}