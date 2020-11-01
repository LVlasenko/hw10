// 1) Есть обьект `obj = { }`
// Внутри него описываем методы `copy, clear, doFunction`.
//     Организовать создание методов так, что бы можно было вызывать любые комбинации:
//
//     `obj.doFunction(sum, 2, 4).doFunction(mul, 6, 3).clear()`
//
//     `doFunction(x, y, func);` получает параметрами 2 числа и функцию, которую нужно применить к x и y.
//     Результат операции сохранять в `obj.result`
//
//     `clear()` очищает значение `obj.result` в 0
//     `copy(buffer)` получает параметром название ключа buffer (string) и добавляет его к `obj`
//      Далее в любом порядке можно вызывать комбинации функций
//      Создать метод target(property)- дальнейшие действия функций doFunction() и clear() будут изменять значение
//      не result, а переданной property

obj = {
  copy: copy,
  clear: clear,
  doFunction: doFunction,
  target: target,
  result: "result",
};

function doFunction(func, x, y) {
  this[this.result] = func(x, y);
  return this;
}

function clear() {
  this[this.result] = 0;
  return this;
}

function copy(buffer) {
  this[buffer] = this[this.result];
  return this;
}

function sum(x, y) {
  return x + y;
}

function mul(x, y) {
  return x * y;
}

function target(property) {
  this[property] = this[this.result];
  this.result = property;
  return this;
}

console.log(obj.doFunction(sum, 2, 4).doFunction(mul, 6, 3).clear());
console.log(obj.doFunction(sum, 2, 4).clear().doFunction(mul, 6, 3));
console.log(obj.clear().doFunction(mul, 6, 3).doFunction(sum, 2, 4));

console.log(
  obj
    .doFunction(sum, 2, 4)
    .copy("some_name")
    .target("another_some_name")
    .doFunction(mul, 6, 3)
);
