// var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3, 'A'];
const data1 = [1, 3, 5, 7, 9, 11, 1, 15]
const data2 = [1, 4, 5, 6, 8]
const data3 = [...data1, ...data2]

var uniqueArray = data3.filter(function (value, index, array) {
  console.log("index  :" + index + " first index of this value: " + array.indexOf(value) + " element :" + value + " is filterable :" + (index === array.indexOf(value)));
  return index === array.indexOf(value);
})
console.log(uniqueArray);