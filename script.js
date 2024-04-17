/* Getting started with jQuery */

// $(function(){
//     $("button").bind("click", function () {
//         alert(1112);
//       });
// })

$(function () {
  $("img").hide("slow");
  $("img").show("fast");
  $("h1").hide("500");
  $("h1").show("1500");
  $("p").slideUp("500");
  $("p").slideDown("1500");
  $("p").fadeOut("500");
  $("p").fadeIn("normal");
});

// mouse events: dbclick, mouseenter, mouseleave, mousedown, mouseup, hover

// form events: foucs, blur, change
