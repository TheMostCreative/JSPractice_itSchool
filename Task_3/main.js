var a,b,c;

function s(a,b) {
  console.log(a + b + a);
  return a + b + a;
}
function f(a, b, c) {
  function sum(a, b) {
    console.log(a + b);
    return a + b;
  }
  var result;
  a = typeof a == "undefined"? 2:a;
  b = typeof b == "undefined"? 3:b;
  result = typeof c == "function"?c(a,b):sum(a,b);
  return result;
}