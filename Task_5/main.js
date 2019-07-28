var general = {firstNumber : 1,
    secondNumber : 2,
    meshok : {thirdNumber : 3,
             fourthNumber : 4}
    }
    var clone = {};
  function cloneObject(obj) {
    for(var i in obj) {
        if(obj[i] != null &&  typeof(obj[i])=="object"){
      clone[i] = {};
          for (var e in obj[i]) {
            clone[i][e] = obj[i][e];
          }}
        else
            clone[i] = obj[i];
    }
    return clone;
  }