const data1 = [1, 3, 5, 7, 9, 11, 1, 15]
const data2 = [1, 4, 5, 6, 8]
const data3 = [...data1, ...data2]
// const checkDuplicate = (el1) => {
//   const indFound = data1.findIndex(el2 => el2 === el1)
//   return indFound
// }

// const result = data2.filter((el1) => checkDuplicate(el1) < 0)
// const result = data3.filter((value, index, array) => {
//   return array.indexOf(value) !== index
// })

// const result = [...new Set([...data1])]

const result = data3.filter((value) => !data1.includes(value))
console.log(result)