
window.onload = function() {

  var form1 = document.querySelector("form");
  var playerSelect = "";
  var index = 0;
  var compArr = [];
  var playerArr = [];


  form1.addEventListener("submit", function(event) {
    var data = new FormData(form1);
    for (const entry of data) {
      playerSelect = entry[1];
    };

    index = 0;
    compArr = [];
    playerArr = [];

    var randomInt = Math.floor(Math.random() * Math.floor(4));
    compArr.push(randomInt);
    console.log(compArr + " compArr initial value");
    document.getElementById("space5").innerHTML = compArr.length;
    document.getElementById("results1").textContent = ("New Game Has Begun! Good Luck!");
    document.getElementById("results1").className = ("results2");

    activateSimon();

    event.preventDefault();
  }, false);

  //Run a sequence of steps, create a for loop with a delay between runs

  function activateSimon() {

    //Establish auto-reset after strict mode mess-up occurs from player

    if (compArr.length == 0) {
      var randomInt = Math.floor(Math.random() * Math.floor(4));
      compArr.push(randomInt);
      console.log(compArr + " compArr initial value");
      document.getElementById("space5").innerHTML = compArr.length;
      document.getElementById("results1").textContent = ("New Game Has Begun! (You Have Strict Mode Enabled!)");
      document.getElementById("results1").className = ("results2");
    }

    //Begin normal iteration of compArr to activate board

    var j = 0;

    //First run through iteration is shown below, this is to prevent a delay on first compArr activation

    if (j == 0) {

      if (compArr[j] == 0) {
        document.getElementById('space1').className = ('button1a');
        document.getElementById("sound1").play();

        function innerLoop1 () {
          setTimeout(function () {
            document.getElementById('space1').className = ('button1');
          }, 1000);
        };

        innerLoop1();

      } else if (compArr[j] == 1) {
        document.getElementById('space2').className = ('button2a');
        document.getElementById("sound2").play();

        function innerLoop2 () {
          setTimeout(function () {
            document.getElementById('space2').className = ('button2');
          }, 1000);
        };

        innerLoop2();

      } else if (compArr[j] == 2) {
        document.getElementById('space3').className = ('button3a');
        document.getElementById("sound3").play();

        function innerLoop3 () {
          setTimeout(function () {
            document.getElementById('space3').className = ('button3');
          }, 1000);
        };

        innerLoop3();

      } else if (compArr[j] == 3) {
        document.getElementById('space4').className = ('button4a');
        document.getElementById("sound4").play();

        function innerLoop4 () {
          setTimeout(function () {
            document.getElementById('space4').className = ('button4');
          }, 1000);
        };

        innerLoop4();

      }

      j++;

    }

    function simonLoop () {
       setTimeout(function () {

         if (compArr[j] == 0) {
           document.getElementById('space1').className = ('button1a');
           document.getElementById("sound1").play();

           function innerLoop1 () {
             setTimeout(function () {
               document.getElementById('space1').className = ('button1');
             }, 1000);
           };

           innerLoop1();

         } else if (compArr[j] == 1) {
           document.getElementById('space2').className = ('button2a');
           document.getElementById("sound2").play();

           function innerLoop2 () {
             setTimeout(function () {
               document.getElementById('space2').className = ('button2');
             }, 1000);
           };

           innerLoop2();

         } else if (compArr[j] == 2) {
           document.getElementById('space3').className = ('button3a');
           document.getElementById("sound3").play();

           function innerLoop3 () {
             setTimeout(function () {
               document.getElementById('space3').className = ('button3');
             }, 1000);
           };

           innerLoop3();

         } else if (compArr[j] == 3) {
           document.getElementById('space4').className = ('button4a');
           document.getElementById("sound4").play();

           function innerLoop4 () {
             setTimeout(function () {
               document.getElementById('space4').className = ('button4');
             }, 1000);
           };

           innerLoop4();

         }

          j++;

          if (j < compArr.length) {
             simonLoop();
          }
       }, 2000);
    };

    if (j < compArr.length) {
      simonLoop();
    }

  };


//Reset Board

  function resetData() {
    index = 0;
    document.getElementById("space5").innerHTML = index;
    compArr = [];
    playerArr = [];
    document.getElementById("results1").textContent = ("Game Reset");
    document.getElementById("results1").className = ("results2");

  };

//Begin Defining Button Click Functions

  function space1Data() {

    playerArr.push(0);
    console.log(playerArr + " playerArr");

    document.getElementById("sound1").play();

    checkArr();

    //return false;
  };

  function space2Data() {

    playerArr.push(1);
    console.log(playerArr + " playerArr");

    document.getElementById("sound2").play();

    checkArr();

    //return false;
  };

  function space3Data() {

    playerArr.push(2);
    console.log(playerArr + " playerArr");

    document.getElementById("sound3").play();

    checkArr();

    //return false;
  };

  function space4Data() {

    playerArr.push(3);
    console.log(playerArr + " playerArr");

    document.getElementById("sound4").play();

    checkArr();

    //return false;
  };

  //Make function to check each press, and overall winning criteria

  function checkArr() {

    if ((playerArr[index] !== compArr[index]) && playerSelect == "classic") {
      document.getElementById("results1").textContent = ("WRONG! Try Again");
      document.getElementById("results1").className = ("results1");
      index = 0;
      playerArr = [];

      setTimeout(activateSimon, 2000);

    } else if ((playerArr[index] !== compArr[index]) && playerSelect == "strict") {
      document.getElementById("results1").textContent = ("WRONG! .. resetting game..");
      document.getElementById("results1").className = ("results1");
      index = 0;
      playerArr = [];

      setTimeout(resetData, 2000);
      setTimeout(activateSimon, 3000);

    } else {
      index += 1;
      console.log(index + " Just added 1 to index");
      document.getElementById("results1").textContent = ("");
    }

    if (index == 20) {
      document.getElementById("results1").textContent = ("You WIN! .. resetting game..");
      document.getElementById("results1").className = ("results");
      setTimeout(resetData, 3000);
    } else if (index == compArr.length) {
      playerArr = [];
      index = 0;
      var randomInt = Math.floor(Math.random() * Math.floor(4));
      compArr.push(randomInt);
      document.getElementById('space5').textContent = compArr.length;
      document.getElementById("results1").textContent = ("Good Work So Far!.. Next Level!");
      document.getElementById("results1").className = ("results2");
      console.log(compArr + " compArr, just added a random Int");
      setTimeout(activateSimon, 2000);
    }

  }


  document.getElementById("space1").onclick = space1Data;
  document.getElementById("space2").onclick = space2Data;
  document.getElementById("space3").onclick = space3Data;
  document.getElementById("space4").onclick = space4Data;
  document.getElementById("resetBtn").onclick = resetData;

};
