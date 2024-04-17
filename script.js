/* Getting started with jQuery */

// $(function(){
//     $("button").bind("click", function () {
//         alert(1112);
//       });
// })

$(function () {
  $("p").one("click mouseenter", function () {
    console.log("You clicked a paragraph!");
  });

  $("p").on({
    blur: function () {
      console.log("blured!");
    },
  });

  $("p").off("blur");
});

// mouse events: dbclick, mouseenter, mouseleave, mousedown, mouseup, hover

// form events: foucs, blur, change
