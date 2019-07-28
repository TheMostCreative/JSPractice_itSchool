var i = prompt('Сколько Вам лет?', '');
if (i % 10 == 1 && i % 100 != 11) {
console.log(i + " год"); }
else if (i % 10 == 2 || i % 10 == 3 || i % 10 == 4) { 
if (i % 100 == 12 ||  i % 100 == 13 || i % 100 == 14) 
{ 
console.log(i + " лет");
} else {
console.log(i + " года");
       }
} else {
console.log(i + " лет");}