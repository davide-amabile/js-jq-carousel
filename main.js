$(document).ready(function(){
  // evento click su next
  $(".next").click(function(){
    // slide img
    var imgActive = $(".images img.active");
    imgActive.removeClass("active");
    if (imgActive.hasClass("last") == true ) {
      var newImg = $("img.first");
    } else {
      var newImg = imgActive.next();
    }
    newImg.addClass("active");

    // evento slide fas circle
    var circleActive = $(".nav i.active");
    circleActive.removeClass("active");
    if( circleActive.hasClass("last") == true) {
      var newCircle = $("i.first");
    } else {
      var newCircle = circleActive.next();
    }
    newCircle.addClass("active");
  }
);





 // evento click su prev
 $(".prev").click(function(){
   // slide img
   var imgActive = $(".images img.active");
   imgActive.removeClass("active");
   if (imgActive.hasClass("first") == true ) {
     var newImg = $("img.last");
   } else {
     var newImg = imgActive.prev();
   }
   newImg.addClass("active");

   // evento slide fas circle
   var circleActive = $(".nav i.active");
   circleActive.removeClass("active");
   if( circleActive.hasClass("first") == true) {
     var newCircle = $("i.last");
   }else {
     newCircle = circleActive.prev();
   }
   newCircle.addClass("active");
 }
);

});



//   // check = true;
//   // if (check == true ) {
//    imgActive.removeClass("active");
//    imgActive.next("").addClass("active");
// /*} else*/ if ($(".last") == imgActive) {
//    $(".last").removeclass("active");
//    $(".first").addClass("active");
// }
// });
