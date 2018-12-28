
var ul = document.getElementsByTagName("ul")[0];
var li = document.querySelectorAll("li");
$("input").keypress(function(e){
  if(e.which === 13){
    $("ul").append("<li class='list-item'><img src='https://cdn3.iconfinder.com/data/icons/computer-network-icons/512/Trash_Bin-512.png' alt=''>"+$("input").val()+"</li>");
    $("input").val("");
  }
});


$(document).on("mouseover",".list-item",function(){
  $(this).children("img").addClass("animated");
  $(this).children("img").addClass("faster");
  $(this).children("img").addClass("slideInLeft");
  $(this).children("img").css("visibility","visible");
});

$(document).on("mouseleave",".list-item",function(){
  $(this).children("img").removeClass("animated");
  $(this).children("img").removeClass("slideInLeft");
  $(this).children("img").css("visibility","hidden");
});

$(document).on("click",".list-item",function(){
  $(this).toggleClass("crossed");
});

$(document).on("click","li img", function(){
  $(this).parent().fadeOut(300,function(){
    $(this).remove();
  });
});

$("input").on("focus", function(){
  $(this).val("");
});

$("input").on("blur", function(){
  $(this).val("Add New ToDo");
});

$(document).on("click",".plus",function(){
  var input = $("input");
  if(input.css("display") ==="block"){
    input.fadeOut();
  } else {
    input.fadeIn();
  }
});
