$(document).ready(function(){
  $(".next").click(function(){
    var imgActive = $(".images img.active");
    check = true;
    if (check == true ) {
     imgActive.removeClass("active");
     imgActive.next("img").addClass("active");
  } else {
    $(".last").removeClass("active");
    $(".first").addClass("active");
  }
  });
});
