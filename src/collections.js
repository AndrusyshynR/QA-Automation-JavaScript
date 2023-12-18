// 1.створити масив з цифрами [1,1,1,2,3,4,5,5,66,6,6,7,77,8,8,8888,9]. перебрати масив і до кожного числа додати 5, і вивести результат в консоль

// 2.створити на базі масиву Set унікальних значень. ітерувати через сет і кожне число збільшити на 2, далі вивести суму всіх елементів

// 3.створити мапу з літерами алфівіту, і значеннями з сету {"a" : 1, "b" : 2 ....}. зробити конкатенацію ключів з мапи. 

let arrayNum = [1,1,1,2,3,4,5,5,66,6,6,7,77,8,8,8888,9];
// ====================   1   ====================
// for(let num of arrayNum) {
//     let concatNum = num + 5;
//     console.log(concatNum);
// }

// ====================   2   ====================
// let uniqueNum = new Set(arrayNum);

// for (let i of uniqueNum) {
//     var num = i + 2;
// }
// const allElements = Array.from(uniqueNum);

// var res = allElements.reduce(function(sum, elem) {
//         return sum + elem;
//         }, 0);
// console.log(res);

// ====================   3   ====================

let alphabet = new Map();
alphabet.set = [{"a": 1}, {"b" : 2}, {"c": 3}];
console.log(alphabet);


//     for (let key in alphabet.keys()) {
//         console.log(key);
//     }
// дороблю потім