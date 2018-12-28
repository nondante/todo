var colors = [
  "#ff7373",
  "#ffc0cb",
  "#b0e0e6",
  "#fa8072",
  "#20b2aa",
  "#c39797",
  "#c0d6e4",
  "#ff4040"
];

$(document).on('keypress',function(){
  var circle = document.createElement("div");
  $(circle).addClass("circle");
  $(circle).css("top",getRandomTop());
  $(circle).css("left",getRandomLeft());

  var size = getRandomSize();
  $(circle).css("width",size);
  $(circle).css("height",size);

  var color = getRandomColor(colors);
  $(circle).css("background-color",colors[color]);

  $(".container").append(circle);

});

$(document).on('animationend',".circle",function(){
  $(this).remove();
});

function getRandomTop(){
  var windowHeight = $(window).height() - 200;
  var randomHeight = Math.random() * (windowHeight - 5) + 5;
  return randomHeight
}

function getRandomLeft(){
  var windowWidth = $(window).width() - 200;
  var randomWidth = Math.random() * (windowWidth - 5) + 5;
  return randomWidth
}

function getRandomSize(){
  var randomSize = Math.random() * (500 - 100) + 100;
  return randomSize
}

function getRandomColor(arr){
  var randomColorIndex = Math.floor(Math.random() * (arr.length-1));
  console.log(randomColorIndex);
  return randomColorIndex;
}
