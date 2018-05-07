
window.onload = function() {

  var form1 = document.querySelector("form");
  var playerSelect = "";
  var compSelect = "";

  form1.addEventListener("submit", function(event) {
    var data = new FormData(form1);
    for (const entry of data) {
      playerSelect = entry[1];
    };
    if (playerSelect == "X") {
      compSelect = "O";
    } else {
      compSelect = "X";
    }
    //console.log(playerSelect);
    //console.log(compSelect);
    event.preventDefault();
  }, false);


//Reset Board

  function resetBoard() {
    document.getElementById("space1").textContent = "Open";
    document.getElementById("space2").textContent = "Open";
    document.getElementById("space3").textContent = "Open";
    document.getElementById("space4").textContent = "Open";
    document.getElementById("space5").textContent = "Open";
    document.getElementById("space6").textContent = "Open";
    document.getElementById("space7").textContent = "Open";
    document.getElementById("space8").textContent = "Open";
    document.getElementById("space9").textContent = "Open";

    document.getElementById("space1").className = ('button1');
    document.getElementById("space2").className = ('button1');
    document.getElementById("space3").className = ('button1');
    document.getElementById("space4").className = ('button1');
    document.getElementById("space5").className = ('button1');
    document.getElementById("space6").className = ('button1');
    document.getElementById("space7").className = ('button1');
    document.getElementById("space8").className = ('button1');
    document.getElementById("space9").className = ('button1');
  };

//Computer's Move Logic

  function compMove() {

    if (compSelect == "X" || compSelect == "O") {

      var space1Var = document.getElementById("space1").textContent;
      var space2Var = document.getElementById("space2").textContent;
      var space3Var = document.getElementById("space3").textContent;
      var space4Var = document.getElementById("space4").textContent;
      var space5Var = document.getElementById("space5").textContent;
      var space6Var = document.getElementById("space6").textContent;
      var space7Var = document.getElementById("space7").textContent;
      var space8Var = document.getElementById("space8").textContent;
      var space9Var = document.getElementById("space9").textContent;

      if (space1Var == "Open") {
        document.getElementById("space1").textContent = compSelect;
      } else if (space5Var == "Open") {
        document.getElementById("space5").textContent = compSelect;
      } else if (space9Var == "Open") {
        document.getElementById("space9").textContent = compSelect;
      } else if (space3Var == "Open") {
        document.getElementById("space3").textContent = compSelect;
      } else if (space7Var == "Open") {
        document.getElementById("space7").textContent = compSelect;
      } else if (space2Var == "Open") {
        document.getElementById("space2").textContent = compSelect;
      } else if (space4Var == "Open") {
        document.getElementById("space4").textContent = compSelect;
      } else if (space6Var == "Open") {
        document.getElementById("space6").textContent = compSelect;
      } else if (space8Var == "Open") {
        document.getElementById("space8").textContent = compSelect;
      }
    }
  };

//Check to See If There's a Winner

  function checkWinner() {

    var space1Var = document.getElementById("space1").textContent;
    var space2Var = document.getElementById("space2").textContent;
    var space3Var = document.getElementById("space3").textContent;
    var space4Var = document.getElementById("space4").textContent;
    var space5Var = document.getElementById("space5").textContent;
    var space6Var = document.getElementById("space6").textContent;
    var space7Var = document.getElementById("space7").textContent;
    var space8Var = document.getElementById("space8").textContent;
    var space9Var = document.getElementById("space9").textContent;

    //CHeck all Matches Involving Space1

    if ((playerSelect == space1Var) && (space1Var == space2Var) && (space2Var == space3Var)) {
      document.getElementById("results1").innerHTML = ('<em>You Won! =)</em>');
      document.getElementById("results1").className = ('results');
      document.getElementById("space1").className = ('button2');
      document.getElementById("space2").className = ('button2');
      document.getElementById("space3").className = ('button2');

      setTimeout(resetBoard, 5000);

    } else if ((compSelect == space1Var) && (space1Var == space2Var) && (space2Var == space3Var)) {
      document.getElementById("results1").innerHTML = ('<em>You Lost! =(</em>');
      document.getElementById("results1").className = ('results1');
      document.getElementById("space1").className = ('button3');
      document.getElementById("space2").className = ('button3');
      document.getElementById("space3").className = ('button3');
      setTimeout(resetBoard, 5000);

    }

    else if ((playerSelect == space1Var) && (space1Var == space5Var) && (space5Var == space9Var)) {
      document.getElementById("results1").innerHTML = ('<em>You Won! =)</em>');
      document.getElementById("results1").className = ('results');
      document.getElementById("space1").className = ('button2');
      document.getElementById("space5").className = ('button2');
      document.getElementById("space9").className = ('button2');
      setTimeout(resetBoard, 5000);

    } else if ((compSelect == space1Var) && (space1Var == space5Var) && (space5Var == space9Var)) {
      document.getElementById("results1").innerHTML = ('<em>You Lost! =(</em>');
      document.getElementById("results1").className = ('results1');
      document.getElementById("space1").className = ('button3');
      document.getElementById("space5").className = ('button3');
      document.getElementById("space9").className = ('button3');
      setTimeout(resetBoard, 5000);

    }

    else if ((playerSelect == space1Var) && (space1Var == space4Var) && (space4Var == space7Var)) {
      document.getElementById("results1").innerHTML = ('<em>You Won! =)</em>');
      document.getElementById("results1").className = ('results');
      document.getElementById("space1").className = ('button2');
      document.getElementById("space4").className = ('button2');
      document.getElementById("space7").className = ('button2');
      setTimeout(resetBoard, 5000);

    } else if ((compSelect == space1Var) && (space1Var == space4Var) && (space4Var == space7Var)) {
      document.getElementById("results1").innerHTML = ('<em>You Lost! =(</em>');
      document.getElementById("results1").className = ('results1');
      document.getElementById("space1").className = ('button3');
      document.getElementById("space4").className = ('button3');
      document.getElementById("space7").className = ('button3');
      setTimeout(resetBoard, 5000);

    }

    //Check Remaining Matches Involving space2

    else if ((playerSelect == space2Var) && (space2Var == space5Var) && (space5Var == space8Var)) {
      document.getElementById("results1").innerHTML = ('<em>You Won! =)</em>');
      document.getElementById("results1").className = ('results');
      document.getElementById("space2").className = ('button2');
      document.getElementById("space5").className = ('button2');
      document.getElementById("space8").className = ('button2');
      setTimeout(resetBoard, 5000);

    } else if ((compSelect == space2Var) && (space2Var == space5Var) && (space5Var == space8Var)) {
      document.getElementById("results1").innerHTML = ('<em>You Lost! =(</em>');
      document.getElementById("results1").className = ('results1');
      document.getElementById("space2").className = ('button3');
      document.getElementById("space5").className = ('button3');
      document.getElementById("space8").className = ('button3');
      setTimeout(resetBoard, 5000);

    }

    //Check Remaining Matches Involving space3

    else if ((playerSelect == space3Var) && (space3Var == space5Var) && (space5Var == space7Var)) {
      document.getElementById("results1").innerHTML = ('<em>You Won! =)</em>');
      document.getElementById("results1").className = ('results');
      document.getElementById("space3").className = ('button2');
      document.getElementById("space5").className = ('button2');
      document.getElementById("space7").className = ('button2');
      setTimeout(resetBoard, 5000);

    } else if ((compSelect == space3Var) && (space3Var == space5Var) && (space5Var == space7Var)) {
      document.getElementById("results1").innerHTML = ('<em>You Lost! =(</em>');
      document.getElementById("results1").className = ('results1');
      document.getElementById("space3").className = ('button3');
      document.getElementById("space5").className = ('button3');
      document.getElementById("space7").className = ('button3');
      setTimeout(resetBoard, 5000);

    }

    else if ((playerSelect == space3Var) && (space3Var == space6Var) && (space6Var == space9Var)) {
      document.getElementById("results1").innerHTML = ('<em>You Won! =)</em>');
      document.getElementById("results1").className = ('results');
      document.getElementById("space3").className = ('button2');
      document.getElementById("space6").className = ('button2');
      document.getElementById("space9").className = ('button2');
      setTimeout(resetBoard, 5000);

    } else if ((compSelect == space3Var) && (space3Var == space6Var) && (space6Var == space9Var)) {
      document.getElementById("results1").innerHTML = ('<em>You Lost! =(</em>');
      document.getElementById("results1").className = ('results1');
      document.getElementById("space3").className = ('button3');
      document.getElementById("space6").className = ('button3');
      document.getElementById("space9").className = ('button3');
      setTimeout(resetBoard, 5000);

    }

    //Check Remaining Matches Involving space4

    else if ((playerSelect == space4Var) && (space4Var == space5Var) && (space5Var == space6Var)) {
      document.getElementById("results1").innerHTML = ('<em>You Won! =)</em>');
      document.getElementById("results1").className = ('results');
      document.getElementById("space4").className = ('button2');
      document.getElementById("space5").className = ('button2');
      document.getElementById("space6").className = ('button2');
      setTimeout(resetBoard, 5000);

    } else if ((compSelect == space4Var) && (space4Var == space5Var) && (space5Var == space6Var)) {
      document.getElementById("results1").innerHTML = ('<em>You Lost! =(</em>');
      document.getElementById("results1").className = ('results1');
      document.getElementById("space4").className = ('button3');
      document.getElementById("space5").className = ('button3');
      document.getElementById("space6").className = ('button3');
      setTimeout(resetBoard, 5000);

    }

    //Check Remaining Matches Involving space7

    else if ((playerSelect == space7Var) && (space7Var == space8Var) && (space8Var == space9Var)) {
      document.getElementById("results1").innerHTML = ('<em>You Won! =)</em>');
      document.getElementById("results1").className = ('results');
      document.getElementById("space7").className = ('button2');
      document.getElementById("space8").className = ('button2');
      document.getElementById("space9").className = ('button2');
      setTimeout(resetBoard, 5000);

    } else if ((compSelect == space7Var) && (space7Var == space8Var) && (space8Var == space9Var)) {
      document.getElementById("results1").innerHTML = ('<em>You Lost! =(</em>');
      document.getElementById("results1").className = ('results1');
      document.getElementById("space7").className = ('button3');
      document.getElementById("space8").className = ('button3');
      document.getElementById("space9").className = ('button3');
      setTimeout(resetBoard, 5000);

    }

    //Check for a Tie game

    else if (space1Var !== "Open" && space2Var !== "Open" && space3Var !== "Open" && space4Var !== "Open" && space5Var !== "Open" && space6Var !== "Open" && space7Var !== "Open" && space8Var !== "Open" && space9Var !== "Open") {
      document.getElementById("results1").innerHTML = ('<em>You Tied! ¯\\_(ツ)_/¯</em>');
      document.getElementById("results1").className = ('results2');
      document.getElementById("space1").className = ('button4');
      document.getElementById("space2").className = ('button4');
      document.getElementById("space3").className = ('button4');
      document.getElementById("space4").className = ('button4');
      document.getElementById("space5").className = ('button4');
      document.getElementById("space6").className = ('button4');
      document.getElementById("space7").className = ('button4');
      document.getElementById("space8").className = ('button4');
      document.getElementById("space9").className = ('button4');
      setTimeout(resetBoard, 5000);
    }

  };


//Begin Defining Button Click Functions

  function space1Data() {

    var spaceVar = document.getElementById("space1").textContent;

    if (playerSelect == "X" && spaceVar == "Open") {
      document.getElementById("space1").textContent = "X";
      checkWinner();
      compMove();
      checkWinner();
    } else if (playerSelect == "O" && spaceVar == "Open") {
      document.getElementById("space1").textContent = "O";
      checkWinner();
      compMove();
      checkWinner();
    }

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



  function space5Data() {

    var spaceVar = document.getElementById("space5").textContent;

    if (playerSelect == "X" && spaceVar == "Open") {
      document.getElementById("space5").textContent = "X";
      checkWinner();
      compMove();
      checkWinner();
    } else if (playerSelect == "O" && spaceVar == "Open") {
      document.getElementById("space5").textContent = "O";
      checkWinner();
      compMove();
      checkWinner();
    }

    //return false;
  };


  function space6Data() {

    var spaceVar = document.getElementById("space6").textContent;

    if (playerSelect == "X" && spaceVar == "Open") {
      document.getElementById("space6").textContent = "X";
      checkWinner();
      compMove();
      checkWinner();
    } else if (playerSelect == "O" && spaceVar == "Open") {
      document.getElementById("space6").textContent = "O";
      checkWinner();
      compMove();
      checkWinner();
    }

    //return false;
  };

  function space7Data() {

    var spaceVar = document.getElementById("space7").textContent;

    if (playerSelect == "X" && spaceVar == "Open") {
      document.getElementById("space7").textContent = "X";
      checkWinner();
      compMove();
      checkWinner();
    } else if (playerSelect == "O" && spaceVar == "Open") {
      document.getElementById("space7").textContent = "O";
      checkWinner();
      compMove();
      checkWinner();
    }

    //return false;
  };

  function space8Data() {

var spaceVar = document.getElementById("space8").textContent;

    if (playerSelect == "X" && spaceVar == "Open") {
      document.getElementById("space8").textContent = "X";
      checkWinner();
      compMove();
      checkWinner();
    } else if (playerSelect == "O" && spaceVar == "Open") {
      document.getElementById("space8").textContent = "O";
      checkWinner();
      compMove();
      checkWinner();
    }

    //return false;
  };

  function space9Data() {

    var spaceVar = document.getElementById("space9").textContent;

    if (playerSelect == "X" && spaceVar == "Open") {
      document.getElementById("space9").textContent = "X";
      checkWinner();
      compMove();
      checkWinner();
    } else if (playerSelect == "O" && spaceVar == "Open") {
      document.getElementById("space9").textContent = "O";
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
  document.getElementById("space5").onclick = space5Data;
  document.getElementById("space6").onclick = space6Data;
  document.getElementById("space7").onclick = space7Data;
  document.getElementById("space8").onclick = space8Data;
  document.getElementById("space9").onclick = space9Data;

};
