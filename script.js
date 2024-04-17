/* Getting started with jQuery */

// $(function(){
//     $("button").bind("click", function () {
//         alert(1112);
//       });
// })

$(function () {
  $("#go").click(function () {
    $("#block")
      .animate({ width: "90%" }, 1000)
      .animate({ fontSize: "40px" }, 1000)
      .animate({ borderLeftWidth: "30px" }, 1000);
  });
});

// .animate( properties [, duration][, easing][, complete])

// .animate( properties, options)
