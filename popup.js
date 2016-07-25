chrome.tabs.executeScript( {
  code: "window.getSelection().toString();"
}, function(selection) {
  selection = selection[0];
  var searchUrl = 'http://www.omdbapi.com/' + '?t=' + selection;
  console.log(selection);
  var x = new XMLHttpRequest();
  x.open('GET', searchUrl,false);
  x.send();
  var res = x.responseText;
  var resp = JSON.parse(res);

  document.getElementById('title'). textContent = resp.Title;
  document.getElementById('rating').textContent = resp.imdbRating;
  document.getElementById('votes').textContent = resp.imdbVotes;
}
)
