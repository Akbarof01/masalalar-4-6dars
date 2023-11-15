//function showMessage(x){
    //console.log(x);
//}
//showMessage("salom");


//function Cool(a, b) {
//    var sum = a + b;
//    alert("yig'indisi " + a + " va " + b + " bu: " + sum);
//}

//var number1 = 5;
//var number2 = 10;
//Cool(number1, number2);

//function promptToNumber(){
//    let result = prompt("Ma'lumot");
//    result = +result;
//    if (isNaN(result)) {
//        alert("son hosil qib bomadi")
//    }
//else{
//        alert(isNaN(result))
//    }
//}
//promptToNumber();

//function sum(x, y) {
//    let result = x + y;
//    return result;
//}
//let natija = sum(3, 4);
//console.log(natija);


//function checkEvenOrOdd() {
//    const userInput = prompt("Raqam kiriting:");
//    const number = parseInt(userInput);
  
//    if (!isNaN(number)) {
//      if (number % 2 === 0) {
//        alert("Raqam juft.");
//      } else {
//        alert("raqam toq.");
//      }
//    } else {
//      alert("Sog' bo'lasla.");
//    }
//  }
  
//  checkEvenOrOdd();

///4.6 uy ishi
//1-10gacha sonlarni chop eting
//for (let i = 1; i <= 10; i++) {
//  console.log(i);
//}
//100dan kichkina toq sonlarni chiqarsin
//for (let i = 1; i < 100; i += 2) {
//  console.log(i);
//}

// 7 ga ko'paytirish jadvalini chop etish uchun funktsiyani chaqiring
//function printMultiplicationTable() {
//  for (let i = 1; i <= 10; i++) {
//    let result = 7 * i;
//    console.log(`7 * ${i} = ${result}`);
//  }
//}
//printMultiplicationTable();

// 1 dan 10 gacha bo'lgan raqamlar uchun ko'paytirish jadvallarini chop etish funksiyasini chaqiring
//function printMultiplicationTables() {
//  for (let i = 1; i <= 10; i++) {
//    console.log(`kara jadvali ${i}:`);
//    for (let j = 1; j <= 10; j++) {
//      let result = i * j;
//      console.log(`${i} * ${j} = ${result}`);
//    }
//    console.log("\n"); // Empty line between tables for clarity
//  }
//}

//printMultiplicationTables();

//1 dan 10 gacha bo'lgan sonlar yig'indisini hisoblang
//let sum = 0;

//for (let i = 1; i <= 10; i++) {
//  sum += i;
//}

//console.log("raqamlar yig'indisi 1 va 10 hisoblanadi: " + sum);

//10ni hisoblang
//function factorial(n) {
//  if (n === 0 || n === 1) {
//    return 1;
//  } else {
//    return n * factorial(n - 1);
//  }
//}

//let result = factorial(10);
//console.log("10 ning faktoriali: " + result);

//10 dan katta va 30 dan kichik juft sonlar yig'indisi
//let sum = 0;

//for (let i = 12; i < 30; i += 2) {
//  sum += i;
//}

//console.log("10 dan katta va 30 dan kichik juft sonlar yig'indisi: " + sum);


//Selsiydan Farengeytga aylantiradigan funksiya yarating
//function celsiusToFahrenheit(celsius) {
//  let fahrenheit = (celsius * 9/5) + 32;
//  return fahrenheit;
//}

//let temperatureInCelsius = 25;
//let convertedTemperature = celsiusToFahrenheit(temperatureInCelsius);
//console.log(`${temperatureInCelsius}°C ga teng ${convertedTemperature}°F`);

//Farengeytdan Selsiyga aylantiradigan funksiya yarating

//function fahrenheitToCelsius(fahrenheit) {
//  let celsius = (fahrenheit - 32) * (5/9);
//  return celsius;
//}


//let temperatureInFahrenheit = 77;
//let convertedTemperature = fahrenheitToCelsius(temperatureInFahrenheit);
//console.log(`${temperatureInFahrenheit}°F ga teng ${convertedTemperature}°C`);