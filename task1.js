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
};

function getStoreProperty() {
  if (!this.hasOwnProperty("storeProperty")) {
    this.storeProperty = "result";
  }
  return this.storeProperty;
}

function setStoreProperty(property) {
  this.storeProperty = property;
}

var getStorePropertyWithObj = getStoreProperty.bind(obj);
var setStorePropertyWithObj = setStoreProperty.bind(obj);

function doFunction(func, x, y) {
  this[getStorePropertyWithObj()];
  this[getStorePropertyWithObj()] = func(x, y);
  return this;
}

function clear() {
  this[getStorePropertyWithObj()] = 0;
  return this;
}

function copy(buffer) {
  this[buffer] = this[getStorePropertyWithObj()];
  return this;
}

function sum(x, y) {
  return x + y;
}

function mul(x, y) {
  return x * y;
}

obj.target = target;

function target(property) {
  setStorePropertyWithObj(property);
  return this;
}

// console.log(obj.doFunction(sum, 2, 4).doFunction(mul, 6, 3).clear());
// console.log(obj.doFunction(sum, 2, 4).clear().doFunction(mul, 6, 3));
// console.log(obj.clear().doFunction(mul, 6, 3).doFunction(sum, 2, 4));
console.log(
  obj
    .doFunction(sum, 2, 4)
    .copy("some_name")
    .target("another_some_name")
    .doFunction(mul, 6, 3)
);
