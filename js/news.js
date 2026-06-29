window.addEventListener("load", async () => {
    var response = await fetch("https://mewa34-admin.stronainternetowa.workers.dev/api/news");
    var data = await response.text();
    document.querySelector(".news .text").innerHTML = data;
});