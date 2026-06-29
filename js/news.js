var response = await fetch("/content/news/news.json");
var data = await response.json();
document.querySelector(".news > .text").innerHTML = data.items.map(item => '<div class="news_item">' + item.body + '</div>').join("");