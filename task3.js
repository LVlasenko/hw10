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

// function inArray(text, array) {
//   var flag = false;
//   for (var i = 0; i < array.length; i++) {
//     if (text == array[i]) {
//       flag = true;
//       break;
//     }
//   }
//   return flag;
// }

// console.log(inArray("foo", ["sjhfnaof", "affooasf", "dfhdfhdfh"]));
