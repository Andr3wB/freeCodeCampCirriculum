function loadData() {

  var $newQuote = $('#newQuote');
  var $newAuthor = $('#newAuthor');
  var $newTweet = $('.twitter-share-button');

  var newUrl = "http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en";




  // Clear out old data
  $newQuote.text("");
  $newAuthor.text("");

  var quoteRequestTimeout = setTimeout(function() {
    $newQuote.text("Failed to get quote...");
  }, 8000);

  $.ajax({
    url: newUrl,
    dataType: 'jsonp',
    jsonp: 'jsonp',
    success: function(data) {
      $newQuote.text(data.quoteText);
      $newAuthor.text(data.quoteAuthor);
      $newTweet.prop('href', 'https://twitter.com/intent/tweet?hashtags=bestquotes&text=' + data.quoteText + '-' + data.quoteAuthor);
      clearTimeout(quoteRequestTimeout);
      }
    });

  return false;
};




$('#quote-container').submit(loadData);
