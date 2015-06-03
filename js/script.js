
$(document).ready(function(){

	var boxNum = 64;
	var makeNew = $("#makeNew");
	var newEntry = $("#newEntry");
	var newSize = $("#newSize");
	var innCon = $("#innerContainer");

	var fillGrid = function(input){
		var size = 512/input;
		innCon.empty();
		for(i=0;i<(input*input);i++){
			innCon.append("<div class='square gray' style='height: "+ size +"px; width:"+ size +"px;'></div>");
		}
		$(".square").hover(function(){
			$(this).removeClass("gray").addClass("black");
		});
	};

	fillGrid(boxNum);

	makeNew.on("click",function(event){
		event.preventDefault();
		$(this).hide();
		newSize.val("");
		newEntry.fadeIn("slow", function(){
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
		if($.isNumeric(boxNum) && boxNum > 0 && boxNum <= 10000){
			fillGrid(boxNum);
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
