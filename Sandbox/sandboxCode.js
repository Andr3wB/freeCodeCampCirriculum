function loadData() {

  var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [
        "1999",
        "Little Red Corvette"
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};

  var collectionCopy = JSON.parse(JSON.stringify(collection));
  var stringCopy = JSON.stringify(collection);
  var whyCopy = collection;


  function updateRecords(id, prop, value) {


    if(collection[id][prop]) {
      if(value === "") {
        delete collection[id][prop];
      } else if (prop === "tracks") {
        collection[id][prop].push(value);
      } else {
        collection[id][prop] = value;
      }

    } else if (prop === "tracks") {
      collection[id][prop] = [];
      collection[id][prop].push(value);
    } else {
      collection[id][prop] = value;
    }
    return collection;
  }

  updateRecords(1245, "tracks", "Addicted to Love");


  /*function telephoneCheck(str) {

    var newStr = str.replace(/(-)|(\s)|(\()|(\))/gi, "");
    var secondStr = str.replace(/(\D)/gi, function(match, p1, p2) {
      switch (match) {
        case "(": return match;
        case ")": return match;
        case "-": return match;
        default: return "";
      }
    });
    console.log(newStr.length);
    console.log(newStr[0]);

    console.log(str);
    console.log(newStr);
    console.log(str.indexOf("\)"));

    if (newStr.length > 11 || newStr.length < 10) {
      return false;
    } else if(newStr.length === 11 && newStr[0] !== "1") {
      return false;
    } else if (secondStr[0] == "-") {
      return false;
    } else if ((secondStr.indexOf("\)") && secondStr.indexOf("\(") !== -1) && (secondStr.indexOf("\)") - secondStr.indexOf("\(")) === 4) {
      return true;
    } else if (secondStr.indexOf("\(") !== -1 || secondStr.indexOf("\)") !== -1) {
      return false;
    } return true;


    console.log(newStr);




  }


  telephoneCheck("555)-555-5555");*/

  /*function createString() {

    //document.getElementById(".selected");
    var dateValue = document.getElementsByTagName("H2")[0].textContent;
    console.log(dateValue);
    dateValue = dateValue.split( " " );
    var monthVal = dateValue[0];
    var yearVal = dateValue[1];

    console.log(monthVal);
    console.log(yearVal);

  }
  createString();*/

  /*function addTogether() {

    function makeAdder(x) {
      return function(y) {
        if (typeof(y) === "number") {
          return x + y;
        } return undefined;
      };
    }
    if (typeof(arguments[0]) === "number" && arguments[1]) {
      return makeAdder(arguments[0])(arguments[1]);
    } else if (typeof(arguments[0]) === "number" && !arguments[1]) {
      return makeAdder(arguments[0]);
    }
    return undefined;
  }

  addTogether(2)([3]);*/

  /*function truthCheck(collection, pre) {

    return collection.length == collection.filter(obj => obj[pre]).length;

  }

  truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");*/




  /*function binaryAgent(str) {

    str = str.split( " " );
    var newStr = "";

    for (var i = 0; i < str.length; i++) {
      newStr += (String.fromCharCode(parseInt(str[i], 2)))
    }
    return newStr;

  }

  binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");*/






  /*function steamrollArray(arr) {

    var newArr = [];

    function arrayRoller(yar) {

      for ( var i = 0; i < yar.length; i++ ) {
        if (!Array.isArray(yar[i])) {
          newArr.push(yar[i]);
        } else {
          arrayRoller(yar[i]);
        }
      }
    }

    arrayRoller(arr);
    console.log(newArr);
    return newArr;

  }

  steamrollArray([1, [2], [3, [[4]]]]);*/



  /*function dropElements(arr, func) {

    var initialLength = arr.length;

    for (var i = 0; i < initialLength; i++) {
      if (func(arr[0])) {
        return arr;
      }
      arr.shift();

    }
    return [];
  }


  dropElements([1, 2, 3, 4], function(n) {return n > 5;});*/


  /*function findElement(arr, func) {


    newArr = arr.filter(func)[0];
    console.log(newArr);
    return newArr;



    }




  findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });*/

  /*function findElement(arr, func) {


    for (var i = 0; i < arr.length; i++) {

      if (func(arr[i])) {
        console.log(arr[i]);
        return arr[i];
      }


    }


  }


  findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });*/




  /*function smallestCommons(arr) {

    var checkCounter = 0;
    var maximum = Math.max(...arr);
    var minimum = Math.min(...arr);
    var multiplier = 1;
    var newGCD = 1;
    var newCounter = 0;

    while (checkCounter === 0) {

      newCounter = 0;
      newGCD = multiplier * maximum;

      for (var i = 1; i <= (maximum-minimum); i++) {
        if (newGCD % (maximum - i) !== 0) {
          newCounter += 1;
        }
      }

      if (newCounter == 0) {
        checkCounter += 1;
      }

      multiplier++;

    }
    console.log(newGCD);
    return newGCD;
  }

  smallestCommons([1,5]);*/




  /*function sumPrimes(num) {

    var counter = 0;
    var checkCounter = 0;

    if (num >= 2) {
      counter += 2;
      if (num > 3) {

        for (var i = 3; i <= num; i += 2) {
          checkCounter = 0;
          for (var j = 3; j <= Math.sqrt(i); j += 2) {
            if (i/j == Math.floor(i/j)) {
              checkCounter += 1;
            }
          }
          if (checkCounter == 0) {
            counter += i;
          }
        }
      } else {
        counter += 3;
      }
    }
    console.log(counter);
    return counter;
  }

  sumPrimes(977);*/





  /*function sumFibs(num) {

    var j = 0;
    var i = 1;
    var counter = 0;
    var placeholder = 0;

    while (i <= num) {

      if (i % 2 == 1) {
        counter = counter + i;
      }

      placeHolder = i;
      i = i + j;
      j = placeHolder;

    }
    console.log(counter);
    return counter;

  }


  sumFibs(1000);*/


  /*function spinalCase(str) {

    var newStr = str.replace(/\u005f/g, "%");
    newStr = newStr.replace(/\B[A-Z]/g, " " + "$&");

    console.log(newStr.replace(/\W+/g, "-").toLowerCase());*/

    /*console.log(newStr.replace(/\W/g, function test(match, p1, p2, p3) {
      switch(true) {
        case /\W/.test(newStr): console.log("A"); return "-"; break;
        default: return "oops";
      }

    }).toLowerCase());*/

  /*}

  spinalCase('All-The-SmallThings');*/






  /*function convertHTML(str) {

    console.log(str.replace(/\W/gi, function(match, p1, offset, string) {
      switch (match) {
        case "&": return "&amp;";
        case "<": return "&lt;";
        case ">": return "&gt;";
        case '"': return "&quot;";
        case "'": return "&apos;";
        default: return match;
      }
    }));
  }

  convertHTML("Dolce & Gabbana");*/


  /*function uniteUnique(arr) {

    var newArr = [];

    for (var i = 0; i < arguments.length; i++) {
      for (var j = 0; j < arguments[i].length; j++) {
        if (!newArr.includes(arguments[i][j])) {
          newArr.push(arguments[i][j]);
        }
      }
    }
    return newArr;

  };




  uniteUnique([1, 3, 2, 7, 9], [5, 2, 1, 4], [2, 1]);*/






  /*function booWho(bool) {

    if (typeof(bool) === "boolean") {
      return true;
    } else {
      return false;
    }


  }

booWho(null);*/



  /*function fearNotLetter(str) {

    var initialCounter = str.charCodeAt(0);

    for (var i = 0; i < str.length; i++) {

      if (initialCounter < str.charCodeAt(i)) {
        return String.fromCharCode(initialCounter);
      } else {
        initialCounter++;
      }

    }
    return undefined;

  }

  fearNotLetter("defghijk");
  //expected output: h;*/



  /*function pairElement(str) {

    var newArr = [];
    var newStr = str.split("");

    for (var i = 0; i < str.length; i++) {

      if (newStr[i] == "C") {
        newArr.push(["C","G"]);
      } else if (newStr[i] == "G") {
        newArr.push(["G","C"]);
      } else if (newStr[i] == "A") {
        newArr.push(["A","T"]);
      } else if (newStr[i] == "T") {
        newArr.push(["T","A"]);
      }

    }

    return newArr;

  }


  pairElement("CGT"); */


  /*function translatePigLatin(str) {
    var vowels = ["a", "e", "i", "o", "u", "y"];

    if (vowels.includes(str.charAt(0))) {
      str = str + "way";
      console.log(str);
      return(str);
    } else {
      for (var i = 1; i < str.length; i++) {
        if (vowels.includes(str.charAt(i))) {
          var frontStr = str.slice(0, i);
          str = (str.slice(i) + frontStr + "ay");
          console.log(str);
          return (str);
        }

      }
    }



  };

  translatePigLatin("crrrant"); */



  /*function myReplace(str, before, after) {

    var matchCase = before.split("");
    if (matchCase[0] === matchCase[0].toUpperCase()) {
      var afterCase = after.split("");
      afterCase[0] = afterCase[0].toUpperCase();
      after = afterCase.join("");
      var newStr = str.replace(before, after);
    } else {
      var newStr = str.replace(before, after);
    }


    return newStr;


  }



  myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped"); */




  /*function whatIsInAName(collection, source) {

    var arr = [];

    var sourceKeys = Object.keys(source);

    //Iterate through collection array
    for (var i = 0; i < collection.length ; i++) {

      var collectionKeys = Object.keys(collection[i]);

      //Iterate through source object prperties
      for ( var j = 0; j < sourceKeys.length; j++) {
        if (collection[i].hasOwnProperty(sourceKeys[j]) && collection[i][sourceKeys[j]] === source[sourceKeys[j]]) {

          if (j == sourceKeys.length - 1) {
            arr.push(collection[i]);
          } else {
            continue;
          }

        } else {
          break;
        }

      }

    }
    return arr;
  };

  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }); */

  /*var numerals = ["I", "V", "X", "L", "C", "D", "M"];
  var numOptions = [1, 5, 10, 50, 100, 500, 1000];



    function convertToRoman(num) {

      var total ="";
      var thousands = Math.floor(num/1000);
      num -= thousands * 1000;

      var hundreds = Math.floor(num/100);
      num -= hundreds * 100;

      var tens = Math.floor(num/10);
      num -= tens * 10;

      var ones = Math.floor(num/1);




      if (num <= 0) {
        return "Please enter a positive number";
      } else {
        total += "M".repeat(thousands);
      };

      if (hundreds == 9) {
        total += "CM";
      } else if (hundreds == 4) {
        total += "CD";
      } else if (hundreds >= 5) {
        total += "D" + ("C".repeat(hundreds - 5));
      } else {
        total += "C".repeat(hundreds);
      };

      if (tens == 9) {
        total += "XC";
      } else if (tens == 4) {
        total += "XL";
      } else if (tens >= 5) {
        total += "L" + ("X".repeat(tens - 5));
      } else {
        total += "X".repeat(tens);
      };

      if (ones == 9) {
        total += "IX";
      } else if (ones == 4) {
        total += "IV";
      } else if (ones >= 5) {
        total += "V" + ("I".repeat(ones - 5));
      } else {
        total += "I".repeat(ones);
      };

        console.log(num);
        console.log(total);
        return total;

    };






convertToRoman(1000);*/



/*  var arrVar1 = [8,4,2,3,1];
  var arrVar2 = [3,9,0,2,1];
  //expected output = [0,4,8,9];


  function diffArray(arr1, arr2) {


    var diff = [];


    for (var i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) === -1) {
          diff.push(arr2[i]);
        } else {
          continue;
        }
    };

    for (var i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) === -1) {
          diff.push(arr1[i]);
        } else {
          continue;
        }
    };
    return diff;

  }

diffArray(arrVar1, arrVar2); */


  /* var arr1 = [4,9];
  console.log(arr1);
  var maximum = Math.max(...arr1);
  console.log(maximum);
  var minimum = Math.min(...arr1);
  console.log(minimum);

  function reducer(accumulator, currentVal) {
    return accumulator + currentVal;
  };
  console.log(reducer(maximum, minimum)); */

};

document.getElementById("submitBtn").onclick = loadData;
