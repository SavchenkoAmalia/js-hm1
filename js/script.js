let age = 14;
let userName = "Amalia";
let isStudent = true;
let  myString = "The best way to predict the future is to create it";
const myNumber = 3;
let myNull = null;

console.log(age);
console.log(userName);
console.log(isStudent);
console.log(myString);
console.log(myNumber + 10);
console.log(myNull);

const yourName  = prompt("введіть своє ім'я")
if (yourName){
    console.log("Вітаємо", yourName );
    const isUserAccepted = confirm("будь ласка, підтвердіть цю дію");
if (isUserAccepted) {
    console.log("Дякую за підтвердження!");
    const info = alert("Ця дія небезпечна!Всеодно хочете підтвердити?");
    console.log("Дякую за підтвердження!", info);
  } else {
    console.log("Дію відмінено!");
  }
}
else {
    console.log("Дію скасовано", yourName );
}