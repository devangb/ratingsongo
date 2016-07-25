chrome.runtime.sendMessage('hello');
var allMovies = document.getElementsByClassName('project-title');
console.log(allMovies);
for (var movie in allMovies) {
  console.log(typeof movie);
};
