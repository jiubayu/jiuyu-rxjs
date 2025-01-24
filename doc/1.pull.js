// 函数就是pull
function getName() {
  return 'jiuyu'
}

let name = getName()

console.log(name)

function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

const it = generator();
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())