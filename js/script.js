
$(document).ready(function(){

	var boxNum = 16;
	var makeNew = $("#makeNew");
	var newEntry = $("#newEntry");
	var newSize = $("#newSize");

	makeNew.on("click",function(event){
		event.preventDefault();
		$(this).hide();
		newEntry.fadeIn("slow", function(){
			newSize.val("");
			newSize.focus();
		});
	});
	// newSize.keyup(function(event){
	// 	event.preventDefault();
	//     if(event.keyCode == 13){
	//         $("#finished").click();
	//     }
	// });
	$("#finished").on("click", function(event){
		event.preventDefault();
		boxNum = newSize.val();
		if($.isNumeric(boxNum) && boxNum > 0 && boxNum <= 100){
			newEntry.fadeOut("slow", function(){
				makeNew.fadeIn();
			});
			$(".oops").remove();
		}
		else{
			newEntry.append("<p class='oops'>Oops! It really needs to be a number from 1 to 100.</p>");
			newSize.val("");
			newSize.focus();
		}
	});
});
