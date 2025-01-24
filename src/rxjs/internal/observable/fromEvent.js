import { Observable } from "../Observable"

export function fromEvent(element, eventName) {
  return new Observable(observer => {
    const handler = (...args) => observer.next(...args)
    element.addEventListener(eventName, handler)
    return () => element.removeEventListener(eventName, handler)
  })
}