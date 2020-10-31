//Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello'.

// function changeStr(str) {
//   var array = str.split("_");
//   for (var i = 1; i < array.length; i++) {
//     array[i] = array[i].slice(0, 1).toUpperCase() + array[i].slice(1);
//   }
//   var newStr = array.join("");
//   return newStr;
// }

// console.log(changeStr("var_text_hello"));

// второй вариант решения задачи
function changeStr(str) {
  var array = str.split("_");
  console.log(array);
  for (var i = 1; i < array.length; i++) {
    var letter = array[i][0].toUpperCase(); //первую букву начиная со второго элемента массива сделать заглавной
    console.log(array[i][0]);

    for (var j = 1; j < array[i].length; j++) {
      letter += array[i][j]; // перебираем буквы каждого элемента массива и добавляем их к заглавным
      console.log(letter);
    }
    array[i] = letter; //перезаписываем элементи массива с первой заглавной буквой
    console.log(array[i]);
  }
  var newStr = array.join("");
  // или через цикл
  // for (var i = 0; i < array.length; i++) {
  //   newStr += array[i];
  // }
  return newStr;
}

console.log(changeStr("var_text_hello"));
