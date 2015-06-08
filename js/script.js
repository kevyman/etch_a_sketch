
$(document).ready(function(){

	var boxNum = 16;
	var makeNew = $("#makeNew");
	var newEntry = $("#newEntry");
	var newSize = $("#newSize");
	var innCon = $("#innerContainer");
	var conWidth = innCon.width();
	var conHeight = 512;



	var fillGrid = function(input){
		var wid = conWidth/input;
		var hi = conHeight/input;
		innCon.empty();
		for(i=0;i<(input*input);i++){
			innCon.append("<div class='square gray' style='height: "+ hi +"px; width:"+ wid +"px;'></div>");
		}
		$(".square").mouseover(function(){
			$(this).css("background-color",'black');
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
		$("#toolbar").addClass("shadow");
		innCon.removeClass("shadow");
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
		if($.isNumeric(boxNum) && boxNum > 0 && boxNum <= 64){
			fillGrid(boxNum);
			newEntry.fadeOut("slow", function(){
				makeNew.fadeIn();
			});
			$(".oops").remove();
			$("#toolbar").removeClass("shadow");
			innCon.addClass("shadow");
		}
		else{
			newEntry.append("<p class='oops'><strong>Oops! It really needs to be a number from 1 to 64.</strong></p>");
			newSize.val("");
			newSize.focus();
		}
	});


});
