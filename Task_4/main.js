//without substrings 
function isCharPresent(symbol, string) {
      for(i = 0; i < string.length; i++){
          if (string[i] === symbol){
             return true;
          }
    
          }
        return false;  
    }




/*************************************************************/
//with substrings 
var str = "qwerty";
var b = "x"
var a;

function f() {
for(i = 0; i < str.length; i++)
{
    a = str.substring(i, i+1);
    if (str.search(b) === -1) {
        return -1;
    } else if (a === b) {
        console.log(a);
        console.log(i);
         return i;
     }
    }  
}


