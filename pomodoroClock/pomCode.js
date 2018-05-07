
window.onload = function() {

  var userVal = 25;

  /*var timerVar = setInterval(startCount, 1000);
  function startCount() {
    document.getElementById("screen").textContent += 1;
  };*/

  function startData() {

    var mins = parseInt(userVal) - 1;
    var secs = 59;
    var timerVar = setInterval(startCount, 1000);
    function startCount() {
      document.getElementById("screen").textContent = mins + ":" + secs;
      secs -= 1;
      if (secs == 0 && mins == 0) {
        document.getElementById("screen").textContent = mins + ":" + secs;
        alert("Time's Up!");
        clearInterval(timerVar);
      } else if (secs == 0 ) {
        mins -= 1;
        secs = 59;
      }
    };

    document.getElementById("stopBtn").onclick = stopData;
    function stopData() {
        clearInterval(timerVar);
    };
    //return false;
  };


  function resetData() {
    if (userVal == "" ) {
      document.getElementById("screen").textContent = "25:00";
    } else {
      document.getElementById("screen").textContent = userVal + ":00";
    }
  };

  /*function stopData() {
      clearInterval(timerVar);
  };*/

  function submitData() {

    userVal = document.getElementsByName("timeEntered")[0].value
    if (userVal == "" ) {
      userVal = 25;
    };
    document.getElementById('screen').textContent = userVal + ":00";
    return false;
  };

  document.getElementById("startBtn").onclick = startData;
  //document.getElementById("stopBtn").onclick = stopData;
  document.getElementById("resetBtn").onclick = resetData;
  document.getElementById("submitBtn").onclick = submitData;

};
