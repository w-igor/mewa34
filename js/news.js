var space_id = "bmp9s2ulzj14";
var access_token = "6ro8gXkKjsvWCzMGoUwNB_q51VN9afHs7jW9WhfruR4";
var response = await fetch("https://cdn.contentful.com/spaces/" + space_id + "/entries?content_type=news", { headers: { Authorization: "Bearer " + access_token } });
var data = await response.json();
document.querySelector(".news > .text").innerHTML = data.items.map(item => item.fields.text).join("");