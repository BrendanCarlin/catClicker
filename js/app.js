var clickCnt = 0;

var cat = ["http://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg", "http://i.ytimg.com/vi/icqDxNab3Do/maxresdefault.jpg", "http://images.smilesumo.com/2015/04/Cat-Pictures-Funny-1024x685.jpg",
"http://ewallpapers-hub.com/wp-content/uploads/2015/04/Funny-Cat-Pictures-for-desktop.jpg", "http://ewallpapers-hub.com/wp-content/uploads/2015/04/Funny-Cat-HD-Pictures-for-desktop.jpg",
"http://ewallpapers-hub.com/wp-content/uploads/2015/04/Funny-Cat-Picture.jpg", "http://ewallpapers-hub.com/wp-content/uploads/2015/04/Funny-Cat-desktop-Pictures.jpg", "http://ewallpapers-hub.com/wp-content/uploads/2015/04/Funny-Cat-HD-Picture.jpg",
"http://ewallpapers-hub.com/wp-content/uploads/2015/04/Funny-Cat-Pictures.jpg", "http://ewallpapers-hub.com/wp-content/uploads/2015/04/Funny-Cat-HD-Pictures.jpg", "http://ewallpapers-hub.com/wp-content/uploads/2015/04/Funny-Cat-Picture-HD.jpg", "http://i.ytimg.com/vi/GchUiYAmlLM/maxresdefault.jpg",
"http://images2.fanpop.com/image/photos/9400000/Funny-Cats-cats-9474201-1600-1200.jpg", "http://www.dumpaday.com/wp-content/uploads/2012/10/funny-cats-1.jpg", "http://7-themes.com/data_images/out/77/7035315-funny-cute-cat.jpg" ];

var catNames = ["Humperdink", "Tickles McFittins", "Leopold Von Jellybean", "Hastag Awareness", "Elliot Ness", "The Quilted, Quicker Picker-Upper"]

var getRandom = function(array) {
	return array[Math.floor(Math.random() * array.length)];
}

$(document).ready(function() {
	$("#clickCnt").html("<h4>Click the cat to start the count.</h4>");
	$("#photo").attr("src", getRandom(cat));
	$("#photo1").attr("src", getRandom(cat));
	$("#name").html("<h2>" + getRandom(catNames) + "</h2>");
	$("#name1").html("<h2>" + getRandom(catNames) + "</h2>");
})
//create image click event
$("#photo, #photo1").click(function() {
	clickCnt = clickCnt + 1;
	$("#clickCnt").html("<h4>Click Count: " + clickCnt + "</h4>");
});

$("#reset").click(function() {
	$("#clickCnt").empty();
	$("#clickCnt").html("<h4>Click the cat to start the count.</h4>")
	clickCnt = 0;
})

$("#newCat").click(function() {
	$("#photo").attr("src", getRandom(cat));
	$("#photo1").attr("src", getRandom(cat));
	$("#name").html("<h2>" + getRandom(catNames) + "</h2>");
	$("#name1").html("<h2>" + getRandom(catNames) + "</h2>");
	$("#clickCnt").empty();
	$("#clickCnt").html("<h4>Click the cat to start the count.</h4>")
	clickCnt = 0;
})