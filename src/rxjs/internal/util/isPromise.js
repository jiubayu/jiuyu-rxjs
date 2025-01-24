import { isFunction } from "./isFunction"

export function isPromise(value) {
  return value && isFunction(value.then)
}