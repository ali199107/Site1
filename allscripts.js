$(document).ready(function(){




$("img.osagobutton").bind("click", function() {
         
         $("img.osagobutton").attr("src", "images/osagoActive.png");
         $("img.kaskobutton").attr("src", "images/kaskob.png");
}); 

$("img.osagobutton").css("width", 65);
$("img.osagobutton").css("height", 30);

$("img.kaskobutton").bind("click", function(){

	$("img.kaskobutton").attr("src", "images/kaskoActive.png");
    $("img.osagobutton").attr("src", "images/osagob.png");
});

$(".popupButton").click(function(){
	$(".popupWrapper").css("display", "block");
    
});

$(".popupWrapper").mouseleave(function(){
	$(this).css("display", "none")
});



$(".menu-sitemap-tree li ul")
.hide()
.click(function(event){
	event.stopPropagation();
}); 

 $(document).ready(function() {
	$('#slider').rhinoslider({
		controlsPlayPause: false,
		autoPlay: true,
		showBullets: 'always',
		showControls: 'always' 
     });
    });



/*$(".menu-sitemap-tree ul li").click(function(){
 $(this).find("ul:first").toggle("fast");
});  

$(".menu-sitemap-tree img").click(function() { $(this).closest("li").find("ul:first").toggle("fast"); });*/


$(".folder").click(function() {   if ( $(this).closest("li").find("ul:first").css("display")=="block" )  $(this).css("background-position", "0% 50%"); else $(this).css("background-position", "100% 100%");  $(this).closest("li").find("ul:first").toggle("fast");});

$(".foldbelow").click(function() {   if ( $(this).closest("li").find("ul:first").css("display")=="block" )  $(this).css("background-position", "0% 50%"); else $(this).css("background-position", "100% 100%");  $(this).closest("li").find("ul:first").toggle("fast");});

$("menu-sitemap-tree ul li").hover(function(){
 $(this).children("ul").css("background-image:", "url(images/greenban.png)");
 });

$(".iblink").mousedown(function() {  $(this).addClass("selected"); }); 

$(".iblink").mouseup(function() {  $(this).removeClass("selected");}); 

 $(".iblink").mouseover(function(){
  $(this).children("span").addClass("sign");
 });

$(".iblink").mouseout(function(){
  $(this).children("span").removeClass("sign");
});



$(".callback").click(function() {
    $("#fm").css("display", "block");
});

$(".alertCloseRecall").click(function(){
	$("#fm").css("display", "none");
});

$(".recallAccButton").mouseover(function(){
	$(this).css("background-image", "url(images/sbact2.png)");
});

$(".recallAccButton").mouseout(function(){
	$(this).css("background-image", "url(images/sb2.png)");
}); 

$(".recallAccButton").mousedown(function(){
	$(this).css("background-image", "url(images/sbpress.png)");
}); 

$(".recallAccButton").mouseup(function(){
	$(this).css("background-image", "url(images/sb2.png)");
});

$(".menu-sitemap-tree a").mouseenter(function(){
	$(this).parent().addClass("menover");
});

$(".menu-sitemap-tree a").mouseleave(function(){
	$(this).parent().removeClass("menover");
});


$(".menu-sitemap-tree ul ul li a").mouseenter(function(){
	$(this).parent().addClass("menover2");
}); 

$(".menu-sitemap-tree ul ul li a").mouseleave(function(){
	$(this).parent().removeClass("menover2");
});

/*$(".menu-sitemap-tree ul:last").css("border-bottom:none");*/

$(".menu-sitemap-tree ul ul ul li a").mouseenter(function(){
	$(this).parent().addClass("menover3");
});

$(".menu-sitemap-tree ul ul ul li a").mouseleave(function(){
	$(this).parent().removeClass("menover3");
});


});
