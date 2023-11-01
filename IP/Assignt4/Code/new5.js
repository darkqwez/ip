let arr1 = [1, 2, 3, 4, 5];
let iterator = arr1[Symbol.iterator]();
// console.log(iterator.next())
console.log(iterator);
while (((item = iterator.next()), !item.done)) {
  console.log(item.value);
}
//generator
function* ng() {
  let i = 0;
  while (true) {
    yield;
    i;
    i++;
  }
}
let darsh = ng();

console.log(darsh.next().value);
console.log(darsh.next().value);
console.log(darsh.next().value);
console.log(darsh.next().value);
