var sum = "";

function getButton(){
	$(".button").on("click",function(){
		var newVal = $(this).attr("value");
		console.log(newVal);
		if(newVal === "c"){
			del();
		} else if (newVal === "="){
			if($("#value-bar").text() === "8008135"){
				$('body').css('background-image', 'url(https://images.alphacoders.com/434/434695.jpg)');
			}
			sum = eval($("#value-bar").text());
			$("#value-bar").text(sum).addClass("summed");
		} else {
			if($("#value-bar").hasClass("summed")){
				del();
				$("#value-bar").removeClass("summed");
			}
			$("#value-bar").append(newVal);
		}
	});
}

getButton();

$(".button").mousedown(function() {
	$(this).addClass("button-press");
	console.log("mousedown");
});

$(".button").mouseup(function () {
	$(this).removeClass("button-press");
	console.log("mouseup");
});

function del(){
	$("#value-bar").text("");
	$('body').css('background-image', 'url("")');

}