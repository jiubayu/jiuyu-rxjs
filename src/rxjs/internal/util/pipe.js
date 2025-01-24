/**
 * 把函数数组转换成一个函数 compose
 * @param {*} fns 
 * @returns 
 */
export function pipeFromArray(fns) {
  if(fns.length === 0) {
    return x => x
  }

  if(fns.length === 1) {
    return fns[0]
  }
  // fns [a, b, c] => (...args) => c(b(a(...args)))
  return (input) =>  fns.reduce((f, g) =>  g(f), input)
}