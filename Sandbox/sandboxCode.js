function loadData() {

  //The following problem is in Advanced Algorithm Scripting:
  //Problem: Pairwise
  //E
  //*extra detail 1:
  //*extra detail 2:
  //My Answer (with console.log debugging) is below, best answer is shown blelow my answer:

  /*function pairwise(arr, arg) {

    var usedIndex = [];

    var newSum = arr.reduce(function(acc, curr, index, array) {

      console.log("Entering reduce, Acc, curr, index, array: " + ", " + acc + ", " + curr + ", " + index + ", " + array);
      console.log(usedIndex);

      if (!usedIndex.includes(index)) {
        var usedVal = [];
        for (var i = index + 1; i < arr.length; i++) {
          if ((curr + array[i] == arg) && !usedIndex.includes(i) && !usedVal.includes(array[i])) {
            acc += (index + i);
            usedIndex.push(i);
            usedVal.push(array[i]);
          }
        }
      }

      usedIndex.push(index);
      return acc;

    }, 0 );

    console.log(newSum);
    return newSum;

  }

  pairwise([1, 1, 1], 2);*/

  //The following problem is in Advanced Algorithm Scripting:
  //Problem: Make a Person
  //E
  //*extra detail 1:
  //*extra detail 2:
  //My Answer (with console.log debugging) is below, best answer is shown blelow my answer:

  var Person = function (firstAndLast) {

    var fullNameArr = firstAndLast.split(" ");
    var fullName = fullNameArr.join(" ");
    var firstName = fullNameArr[0];
    var lastName = fullNameArr[1];

    this.getFirstName = function () {
      console.log(firstName);
      return firstName;
    };
    this.getLastName = function () {
      console.log(lastName);
      return lastName;
    };
    this.getFullName = function () {
      console.log(fullName);
      return fullName;
    };
    this.setFirstName = function (name) {
      fullNameArr[0] = name || "";
      fullName = fullNameArr.join(" ");
      firstName = fullNameArr[0];
      console.log(fullNameArr);
      console.log(fullName);
    };
    this.setLastName = function (name) {
      fullNameArr[1] = name || "";
      fullName = fullNameArr.join(" ");
      lastName = fullNameArr[1];
    };
    this.setFullName = function (name) {
      fullNameArr = name.split(" ") || "";
      fullName = fullNameArr.join(" ");
      firstName = fullNameArr[0];
      lastName = fullNameArr[1];
    };
  };

  var bob = new Person('Bob Ross');
  bob.setFirstName("tim");
  bob.getFullName();


  //The following problem is in Advanced Algorithm Scripting:
  //Problem: No Repeats Please
  //E
  //*extra detail 1:
  //*extra detail 2:
  //My Answer (with console.log debugging) is below, best answer is shown blelow my answer:

  /*function permAlone(str) {

    var arr = str.split("");
    var newReg = /(\w)\1+/;
    var total = 0;

    function sweepThrough(arr1, arr2) {
      console.log("<---------Entering Recursive Function--------->")
      var num = arr1.length;
      var arrCopy = arr1.join("").split("");
      var newArr = arr2.join("").split("");

      console.log("arr2: " + arr2 + "  ||  arr1: " + arr1 +  "  ||  num: " + num + "  ||  arrCopy (arr1): " + arrCopy + "  || newArr (arr2): " + newArr)

      for (var i = 0; i < num; i++) {
        console.log("index: " + (i + 1) + "   Out of: " + num);
        console.log("arr2: " + arr2 + "   arr1: " + arr1);

        newArr = arr2.join("").split("");
        arrCopy = arr1.join("").split("");
        //If begining of the recursion, re-establish arrCopy.
        if (arr1.length == arr.length) {
          //console.log("------------------------------------------------------------------------------");
          arrCopy = str.split("");
          newArr = [];
          console.log("Resetting arrCopy to top level, and wiping newArr");
        }

        newArr.push(arr1[i]);
        arrCopy.splice(i, 1);

        console.log("newArr: " + newArr + "  ||  arrCopy: " + arrCopy);

        //If the recursion has reached the end of the string, and there are no double, add 1.
        if (!newReg.test(newArr.join("")) && arr1.length == 1) {
          total += 1;
          console.log("Added to total count: " + total);
        }
        console.log(" ");
        console.log(!newReg.test(newArr.join("")) + "    ||      " + arr1.length);
        console.log(" ");
        console.log("xxxxxxxxxx End of sweep xxxxxxxxxxxxxxx");
        console.log(" ");

        sweepThrough(arrCopy, newArr);

      }
    }

    sweepThrough(arr, []);


    //console.log("Final newArr: " + newArr);
    console.log("Final arr: " + arr);
    console.log(total);
    return total;

  }


  permAlone('aab');*/

  //The following problem is in Advanced Algorithm Scripting:
  //Problem: Inventory Update
  //Need to take 2 inputs: 2 arrays. The first array is the existing inventory (i.e. [[21, "bowling Ball"], [2, "Shoes"]]), and the second array is a shipment recieved. Both arrays are 2D arrays, update the first array with the contents recieved in the second array.
  //*extra detail 1: If an item cannot be found in the first array, add the new item and quantity into the inventory array.
  //*extra detail 2: The returned array should be in alphabetical order by item.
  //My Answer (with console.log debugging) is below, best answer is shown blelow my answer:

  /*function updateInventory(arr1, arr2) {

    var newArr1 = arr1.reduce(function(acc, curr, index, arr) {
      acc[index] = curr[1];
      return acc;
    }, []);

    console.log(newArr1);

    for (var i = 0; i < arr2.length; i++) {
      if (newArr1.includes(arr2[i][1])) {
        arr1[newArr1.indexOf(arr2[i][1])][0] += arr2[i][0];

      } else {
        arr1.push(arr2[i]);

      }
    }

    arr1.sort(function (a, b) {
      if(a[1].toLowerCase() < b[1].toLowerCase()) {
        return -1;
      } else {
        return 1;
      }

    });
    console.log(arr1);
    return arr1;

  }



  var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
  ];

  var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
  ];

  updateInventory(curInv, newInv);*/

  //The following problem is in Advanced Algorithm Scripting:
  //Problem: Exact Change
  //Need to take 3 inputs: price of item, cash used to pay, and an array of cash in the drawer (i.e [[|PENNY", 1.01], ["NICKLE", 2.05]])
  //*extra detail 1: Must return "Unsufficient Funds" is cash in drawer is less than the change due, or return "Closed" if the cash in the drawer is equal to the change due.
  //*extra detail 2: If details in 1 are not met, then return change in an array (of the same form as input array), in the "highest-to-lowest" bill order.
  //My Answer (with console.log debugging) is below, best answer is shown blelow my answer:

  /*function checkCashRegister(price, cash, cid) {

    var valObj = cid.reverse().reduce(function(acc, curr) {
      acc[curr[0]] = curr[1]
      return acc
    }, {});

    //Added "*100/100" to remove rounding errors
    var changeInDrawer = Object.values(valObj).reduce(function(acc1, curr1) {
      return acc1 + curr1;
    })*100/100;

    var billsInDrawer = Object.keys(valObj).reduce(function(acc1, curr1, index) {
      switch (curr1) {
        case "PENNY": acc1[index] = 0.01; return acc1;
        case "NICKEL": acc1[index] = 0.05; return acc1;
        case "DIME": acc1[index] = 0.10; return acc1;
        case "QUARTER": acc1[index] = 0.25; return acc1;
        case "ONE": acc1[index] = 1; return acc1;
        case "FIVE": acc1[index] = 5; return acc1;
        case "TEN": acc1[index] = 10; return acc1;
        case "TWENTY": acc1[index] = 20; return acc1;
        case "ONE HUNDRED": acc1[index] = 100; return acc1;
      }

    }, []);

    var changeBack = cash - price;

    console.log(billsInDrawer);
    console.log(changeBack);
    console.log(Object.values(valObj));
    console.log(changeInDrawer);
    console.log(valObj);

    if (changeInDrawer < changeBack) {
      return "Insufficient Funds";
    } else if (changeInDrawer == changeBack) {
      return "Closed";
    } else {
      var changeArr = [];
      //Divide changeBack by each dividing amount in array, use Math.floor to return multiple of that bill.
      for (var i = 0; i < billsInDrawer.length; i++) {
        var billMultiple = Math.floor(changeBack/billsInDrawer[i]);
        console.log(billMultiple);
        if (billMultiple >= 1) {
          var desiredNum = billMultiple * billsInDrawer[i];
          console.log("Checking ideal amount to have " + desiredNum);
          if (desiredNum <= Object.values(valObj)[i]) {
            changeArr.push([Object.keys(valObj)[i], desiredNum]);
            console.log("All of the bills fit in change! " + changeArr);
            changeBack = Math.round((changeBack - desiredNum)*100)/100;
            console.log("New desired change " + changeBack);
          } else {
            changeArr.push([Object.keys(valObj)[i], Object.values(valObj)[i]]);
            console.log(" Had to get weird change" + changeArr);
            changeBack = Math.round((changeBack - Object.values(valObj)[i])*100)/100;
            console.log("New Desired chamge" + changeBack);
          }

        }
      }
      if (changeBack == 0) {
        console.log("Final Return " + changeArr);
        return changeArr;
      } else {
        return "Insufficient Funds";
      }

    }

    console.log(billsInDrawer);
    console.log(changeBack);
    console.log(Object.values(valObj));
    console.log(changeInDrawer);
    console.log(valObj);
  }

  checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);*/


//The following problem is in Advanced Algorithm Scripting:
//Problem: Symmetric Differece
//Need to take two or more arrays and return an array of the symmetric difference of the provided arrays (dissimilar values)
//*extra detail 1: cannot accept duplicate values in array(s)
//*extra detail 2: Resulting symmetric difference array is compared to subsequent arrays provided to initial argument - i.e. the final result may contain values held within early arrays of input.
//My Answer (with console.log debugging) is below, best answer is shown blelow my answer:
  /*function sym(args) {

  var newArr = arguments[0].reduce(function (acc, curr) {
    if (acc.indexOf(curr) == -1) {
      acc.push(curr);
    }
    return acc;
    }, []
  );
  console.log("stripped newArr of duplicates");

  var i = 1;
  var recursion = arguments.length;
  var args1 = Array.prototype.slice.call(arguments);

  function checkTwo(first, second) {
    if (recursion === 1) {
      console.log("exiting recursive function");
      console.log(newArr);
      return newArr;
    }
    second = second.reduce(function (acc, curr) {
      if (acc.indexOf(curr) == -1) {
        acc.push(curr);
      }
      return acc;
      }, []
    );
    console.log("entered recursive function");
    console.log("argument 1 (newArr):    " + first);
    console.log("argument 2:    " + second);
    for (var j = 0; j < second.length; j++) {
      if (!first.includes(second[j])) {
        console.log("pushed " + second[j]);
        newArr.push(second[j]);
        console.log(newArr);
      } else {
        console.log("pulled " + second[j]);
        newArr.splice(first.indexOf(second[j]), 1);
        console.log(newArr);
      }
    }

    i++;
    recursion --;
    return checkTwo(newArr, args1[i]);

  }

  console.log(checkTwo(newArr, args1[i]));

}*/

  /*Best answer:
  function sym(args) {
  return Array.from(arguments) \
         .reduce((a,b)=>a.concat(b).filter(el=>(a.indexOf(el)==-1||b.indexOf(el)==-1),[])) \
         .filter((el,index,array)=> array.indexOf(el)==index);
  }*/

  /*Another good answer:
  function sym() {
  // difference between set A and set B
  const diff = (A, B) => new Set([...A].filter(n => !B.has(n)));
  // spread operator to convert array like object to array
  const result = [...arguments]
    // map elements in arguments (array) to Set
    .map(arr => new Set(arr))
    // using the formula in https://en.wikipedia.org/wiki/Symmetric_difference
    // i reduce it by uniting the diff(A, B) and diff(B, A)
    .reduce((acc, set) => new Set([...diff(acc, set), ...diff(set, acc)]));

  // convert the set to array by using spread operator again
  return [...result];
  }*/


  //sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);



  /*var collection = {
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

  updateRecords(1245, "tracks", "Addicted to Love");*/


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
