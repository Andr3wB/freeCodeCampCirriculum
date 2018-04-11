

    //Define variables that will be edited
var $topic = $('#topic');
var $wikiValue = $('#wikiValue');


function loadData() {

  //Clear out old entries
  $wikiValue.html("");

  //Save user input into a variable
  var userTopic = $("#searchTopic").val();


  //Call the Wikipedia API
  var wikiUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + userTopic + '&format=json&callback=wikiCallback';
  var wikiRequestTimeout = setTimeout(function() {
    $topic.text("Failed to get Wikipedia resources...");
  }, 8000);

  $.ajax({
    url: wikiUrl,
    dataType: 'jsonp',
    success: function(wikiData) {
      console.log(wikiData);
      $topic.text(" " + userTopic + "...");
      for (var i = 0; i < 10; i++) {
        $wikiValue.append('<li class="article"><a href="' + wikiData[3][i] + '" target="_blank">' + wikiData[1][i] + '</a><p>' + wikiData[2][i] + '</p></li>');
        }
        clearTimeout(wikiRequestTimeout);
      }
    });

  return false;
};



document.getElementById("submitBtn").onclick = loadData;
