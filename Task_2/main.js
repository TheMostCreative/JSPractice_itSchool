var line = prompt('Впиши цифру', '');
function drawTriangle(line) {
var a = "";
var b = "\n";
var c = "*";
var d = "";
for(var i = 0; i < line; i++){
a += c;
d += a + b;
}
return d;};