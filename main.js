$(document).ready(function(){
  $(".next").click(function(){
    $("img").removeClass("active");
    $("img").next().addClass("active");
  });
});
