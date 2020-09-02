$(document).ready(function(){
  $(".next").click(function(){
    $("img").removeClass("active");
    $("img").next("img").addClass("active");
  });
});
