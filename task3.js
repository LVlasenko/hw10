//Сделайте функцию inArray, которая определяет, есть в массиве элемент
//с заданным текстом или нет. Функция первым параметром должна принимать
//текст элемента, а вторым - массив, в котором делается поиск.
//Функция должна возвращать true или false.

function inArray(text, array) {
  var str = array.join(" ");
  console.log(str);
  return str.includes(text);
}

console.log(inArray("foo", ["sjhfnaof", "affooasf", "dfhdfhdfh"]));
