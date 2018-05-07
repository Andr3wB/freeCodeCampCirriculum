
window.onload = function() {

  var form1 = document.querySelector("form");
  var playerSelect = "";
  var index = 0;
  //var j = 0;
  var compArr = [];
  var playerArr = [];


  form1.addEventListener("submit", function(event) {
    var data = new FormData(form1);
    for (const entry of data) {
      playerSelect = entry[1];
    };

    var randomInt = Math.floor(Math.random() * Math.floor(4));
    compArr.push(randomInt);
    console.log(compArr);
    index = 1;
    document.getElementById("space5").innerHTML = index;

    activateSimon();

    event.preventDefault();
  }, false);

  //Run a sequence of steps, create a for loop with a delay between runs

  function activateSimon() {

    var j = 0;

    if (j == 0) {

      if (compArr[j] == 0) {
        document.getElementById('space1').className = ('button1a');

        function innerLoop1 () {
          setTimeout(function () {
            document.getElementById('space1').className = ('button1');
          }, 1000);
        };

        innerLoop1();

      } else if (compArr[j] == 1) {
        document.getElementById('space2').className = ('button2a');

        function innerLoop2 () {
          setTimeout(function () {
            document.getElementById('space2').className = ('button2');
          }, 1000);
        };

        innerLoop2();

      } else if (compArr[j] == 2) {
        document.getElementById('space3').className = ('button3a');

        function innerLoop3 () {
          setTimeout(function () {
            document.getElementById('space3').className = ('button3');
          }, 1000);
        };

        innerLoop3();

      } else if (compArr[j] == 3) {
        document.getElementById('space4').className = ('button4a');

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

           function innerLoop1 () {
             setTimeout(function () {
               document.getElementById('space1').className = ('button1');
             }, 1000);
           };

           innerLoop1();

         } else if (compArr[j] == 1) {
           document.getElementById('space2').className = ('button2a');

           function innerLoop2 () {
             setTimeout(function () {
               document.getElementById('space2').className = ('button2');
             }, 1000);
           };

           innerLoop2();

         } else if (compArr[j] == 2) {
           document.getElementById('space3').className = ('button3a');

           function innerLoop3 () {
             setTimeout(function () {
               document.getElementById('space3').className = ('button3');
             }, 1000);
           };

           innerLoop3();

         } else if (compArr[j] == 3) {
           document.getElementById('space4').className = ('button4a');

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

  };

//Begin Defining Button Click Functions

  function space1Data() {

    console.log(Math.random());

    //return false;
  };

  function space2Data() {

    var spaceVar = document.getElementById("space2").textContent;

    if (playerSelect == "X" && spaceVar == "Open") {
      document.getElementById("space2").textContent = "X";
      checkWinner();
      compMove();
      checkWinner();
    } else if (playerSelect == "O" && spaceVar == "Open") {
      document.getElementById("space2").textContent = "O";
      checkWinner();
      compMove();
      checkWinner();
    }

    //return false;
  };

  function space3Data() {

    var spaceVar = document.getElementById("space3").textContent;

    if (playerSelect == "X" && spaceVar == "Open") {
      document.getElementById("space3").textContent = "X";
      checkWinner();
      compMove();
      checkWinner();
    } else if (playerSelect == "O" && spaceVar == "Open") {
      document.getElementById("space3").textContent = "O";
      checkWinner();
      compMove();
      checkWinner();
    }

    //return false;
  };

  function space4Data() {

    var spaceVar = document.getElementById("space4").textContent;

    if (playerSelect == "X" && spaceVar == "Open") {
      document.getElementById("space4").textContent = "X";
      checkWinner();
      compMove();
      checkWinner();
    } else if (playerSelect == "O" && spaceVar == "Open") {
      document.getElementById("space4").textContent = "O";
      checkWinner();
      compMove();
      checkWinner();
    }

    //return false;
  };

  document.getElementById("space1").onclick = space1Data;
  document.getElementById("space2").onclick = space2Data;
  document.getElementById("space3").onclick = space3Data;
  document.getElementById("space4").onclick = space4Data;
  document.getElementById("resetBtn").onclick = resetData;

};
