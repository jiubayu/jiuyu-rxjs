import { isFunction } from "./isFunction";

export function isArrayLike(x) {
  return x && typeof x.length === 'number' && !isFunction(x)
}