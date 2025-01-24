// Examen JavaScript Amaliy savollar 

// 1-savol Arifmetik operatorla

//  5 sonini 2 ga bo'ling va qoldig`ini alertga chiqaring!

// разделить 5 на 2 и вывести остаток в алерт (использовать оператор %)

// javob:Pasdan yozib keting kodini
// const bir = 5;
// const iki = 2;
// alert(`Javob: 5 % 2 = ${bir % iki}`); 





// 2-savol  Math metodlari

// 1 dan 10 gacha bo'lgan random son yasang va alertga chiqaring

// сделать рандомное число от 1 до 10 и вывести в алерт

// Javob:Pasdan yozib keting kodini

// const randomRaqam =Math.round(Math.random() * 10);
// alert(`Javob: Random number between 1 and 10:  ${randomRaqam}`);




// 3-savol Math metodlari

// 12.510 sonini butun songa aylantiring! 

// сделать число 12.510 целым

// ответ должен выйти 12

// javob: 12 chiqishi kerak!

// const randomRaqam = Math.round(12.510);
// alert(`Javob: 12.510 butun sona aylantirildi:  ${randomRaqam}`);






// 4-savol function

// "MARS IT SCHOOL" sozini nechta harfdan iboratligini funksiya orqali topib va alertga chiqaring!.

// с помощью функции найти сколько букв в слове "MARS IT SCHOOL" и вывести в алерт

// Javob:Kodini yozib bering 

// function countCharacters(text) {
//     return text.length;
//   }

//   const text = "MARS IT SCHOOL";

//   const numberOfCharacters = countCharacters(text);
//   alert(`"${text}" содержит ${numberOfCharacters} символов.`);




// 5-savol for loop

// "MARS IT SCHOOL" sozini javascript funksiyasi orqali 10 marta console.log ga chiqaring!

// С помощью функции вывести в консоль 10 раз слово "MARS IT SCHOOL"

// Javob:Kodini yozib bering

// function printMarsItSchool() {
//     for (let i = 0; i < 10; i++) {
//       console.log("MARS IT SCHOOL");
//     }
//   }

//   printMarsItSchool( );

// 6-savol Array methods

// let harflar = ["a" , "b" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t",  "u" , "v" , "x" , "y" , "z" ]

// Shu arraydan foydalangan holda console.log ga o'zingizni ismigizni chiqaring

// С помощью этого массива вывести в консоль свое имя

// Javob:Kodini yozib bering

// let harflar = ["a", "b", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];

// let myName = harflar[17] + harflar[0] + harflar[4] + harflar[7] + harflar[12] + harflar[0]; 

// console.log(myName);






// 7-savol if else

// Promtdan yosh kiriting agar yoshi 18 yoshdan katta bo'lsa console da Siz balag'ot yoshiga yetgansiz , aks holda  siz balog'at yoshiga yetmagansiz  // agar yoshi 18 yoshga teng bolsa  balog'at yoshi muborak deb console da chiqarish kerak

// Работа с if else, проверка возраста больше 18 лет, меньше 18 лет или равен 18 годам

// Javob:Kodini yozib bering

// const ism = +prompt("Yoshigizni kiriting")

// if (ism >= 18) {
//     alert("Siz balag'ot yoshiga yetgansiz");
// } else {
//     alert("Siz balog'at yoshiga yetmagansiz");
// }




// 8-savol String metodlari vs Array metodlari

// Promtdan ismigizni kiriting va console.log da ismigizni teskarisini chiqaring

// Ввести в промпт свое имя и вывести в консоль его наоборот

// Javob:Kodini yozib bering

// const ism = prompt("Ismingizni kiriting:");
// const reversedName = ism.split("").reverse().join("");
// console.log("Ismingiz teskari:", reversedName);



// 9-savol DOM

// Promtdan ismigizni kiriting va yoshingizni kiriting va uni style berilgan holda DOM ga chiqaring


// Javob:Kodini yozib bering

// const name = prompt("Введите ваше имя:");
// const age = prompt("Введите ваш возраст:");

// const outputBox = document.createElement("div");
// outputBox.className = "output-box";

// outputBox.innerHTML = `
//   <p>1. Ism: ${name}</p>
//   <p>2. Yosh: ${age}</p>
// `;

// document.body.appendChild(outputBox);









// 10-savol Array metodlari

// let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// shu arraydagi juft sonlarni console ga chiqaring

// найти и вывести четные массивы в консоль, с помощью методов


// Javob :Kodini yozib bering

// const sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const juft = [];
// const toq = [];

// for (let boshlash = 0; boshlash < sonlar.length; boshlash++) 
//     if (sonlar[boshlash] % 2 === 0) {
//         juft.push(sonlar[boshlash])
//     } else if ( sonlar[boshlash] % 2 === 1) {
//         toq.push(sonlar[boshlash])
//     }
    
//     console.log(toq, 'toq sonlarga ajtatilgan ');
//     console.log(juft, 'juft sonlarga ajratilgan ');
    

