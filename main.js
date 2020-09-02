$(document).ready(function(){
  $(".next").click(function(){
    $("img.first").removeClass("active");
    $("img.first").removeClass("first").next("img").addClass("active first");
  });
});
