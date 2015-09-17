var clickCnt = 0;
//create image click event
$("#photo").click(function() {
	clickCnt = clickCnt + 1;
	$("#clickCnt").html("<h3>Click Count: " + clickCnt + "</h3>");
});

$("#reset").click(function() {
	$("#clickCnt").empty();
	clickCnt = 0;
})