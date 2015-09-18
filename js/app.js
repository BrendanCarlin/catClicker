var clickCnt = 0;

var cat = ["http://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg", "http://i.ytimg.com/vi/icqDxNab3Do/maxresdefault.jpg", "http://images.smilesumo.com/2015/04/Cat-Pictures-Funny-1024x685.jpg",
"http://ewallpapers-hub.com/wp-content/uploads/2015/04/Funny-Cat-Pictures-for-desktop.jpg", "http://ewallpapers-hub.com/wp-content/uploads/2015/04/Funny-Cat-HD-Pictures-for-desktop.jpg",
"http://ewallpapers-hub.com/wp-content/uploads/2015/04/Funny-Cat-Picture.jpg"];

var catLength = cat.length;

//create image click event
$("#photo").click(function() {
	clickCnt = clickCnt + 1;
	$("#clickCnt").html("<h3>Click Count: " + clickCnt + "</h3>");
});

$("#reset").click(function() {
	$("#clickCnt").empty();
	clickCnt = 0;
})

$("#newCat").click(function() {
	$("#photo").attr("src", cat[Math.floor(Math.random() * catLength)]);
	$("#clickCnt").empty();
	clickCnt = 0;
})