
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $wikiHeaderElem = $('#wikipedia-header');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview

    var userCity = $("#city").val();
    var userStreet = $("#street").val();
    var userAddress = (userStreet + ", " + userCity);
    $body.append('<img class="bgimg" src="http://maps.googleapis.com/maps/api/streetview?size=600x400&location=' + userAddress +'">');


    // YOUR CODE GOES HERE!
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
      'api-key': "7f2de3e17bfd418abdce7b1f9df9206a",
      'q': userCity,
      'page': 0
    });
    $.getJSON(url, function( data ) {
      $nytHeaderElem.text("Here's what's going on in " + userCity + "...");
      for (var i = 0; i < 10; i++) {
      $nytElem.append('<li class="article"><a href="' + data.response.docs[i].web_url + '">' + data.response.docs[i].headline.main + '</a><p>' + data.response.docs[i].snippet + '</p></li>');
        }
      })
      .fail(function(e) {
        console.log(e);
        $nytHeaderElem.html("Sorry...");
      });

      var wikiUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + userCity + '&format=json&callback=wikiCallback';
      var wikiRequestTimeout = setTimeout(function() {
        $wikiElem.text("Failed to get Wikipedia resources...");
      }, 8000);

      $.ajax({
        url: wikiUrl,
        dataType: 'jsonp',
        success: function(wikiData) {
          console.log(wikiData);
          $wikiHeaderElem.text("Here are some relevant topics related to " + userCity + "...");
          for (var i = 0; i < 10; i++) {
            $wikiElem.append('<li class="article"><a href="' + wikiData[3][i] + '">' + wikiData[1][i] + '</a><p>' + wikiData[2][i] + '</p></li>');
            }
            clearTimeout(wikiRequestTimeout);
          }
        });



    return false;
};

$('#form-container').submit(loadData);
