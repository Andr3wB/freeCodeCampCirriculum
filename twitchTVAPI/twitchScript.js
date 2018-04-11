

    //Define variables that will be edited
var $updates = $('#updates');
var $updateBtn = $('#update-btn');
var $twitchValue = $('#twitchValue');
var $twitchIcon = $('#twitchIcon');
var $convertContainer = $('#convert-container');
//Establish list of streamers to check
var userList = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
//var options = ["channels", "users", "streams"];

function loadData() {



  var twitchRequestTimeout = setTimeout(function() {
    $updates.text("Failed to get twitchTV resources...");
  }, 8000);
  //Clear out old entries
  $updates.html("");

  for (var i = 0; i < userList.length ; i++) {

    //Call the twitchTV API
    var twitchUrl = "https://wind-bow.glitch.me/twitch-api/streams/" + userList[i];

    $.ajax({
      url: twitchUrl,
      dataType: 'jsonp',
      indexValue: i,
      success: function(twitchData) {
        clearTimeout(twitchRequestTimeout);
        loadAdditionalUser(twitchData, this.indexValue);

          function loadAdditionalUser(twitchData, i) {
            if (twitchData.stream) {
              $twitchValue.append('<li class="userInstance"><a href="https://www.twitch.tv/' + userList[i] + '" target="_blank">' + userList[i] + '</a><br><br><img src="' + twitchData.stream.channel.logo + '" alt = "No Logo"><p>Recent Stream: ' + twitchData.stream.channel.status + '</p></li>');
          } else {

            $.ajax({
              url: "https://wind-bow.glitch.me/twitch-api/channels/" + userList[i],
              dataType: 'jsonp',
              indexValue: i,
              success: function(offlineData) {
                loadOfflineUser(offlineData, this.indexValue);
                function loadOfflineUser(offlineData, i) {
                  $twitchValue.append('<li class="userInstance"><a href="https://www.twitch.tv/' + userList[i] + '" target="_blank">' + userList[i] + '</a><span class="sadText"> User is currently offline =(</span><br><br><img src="' + offlineData.logo + '" alt = "No Logo"><p>Recent Stream: ' + offlineData.status + '</p></li>');
                };
              }
            });
          };
        };
      }
    });
  };
  return false;
};



document.getElementById("update-btn").onclick = loadData;
