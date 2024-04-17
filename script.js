/* Getting started with jQuery */

// $(function(){
//     $("button").bind("click", function () {
//         alert(1112);
//       });
// })

$(function () {
  $("#go").click(function () {
    $("#block").animate(
      {
        opacity: 0.5,
        marginLeft: "+=50",
        height: "400px",
      },
      3000,
      "linear",
      function () {
        $(this).after("<div>Animation complete.</div>");
      }
    );
  });
});

// .animate( properties [, duration][, easing][, complete])

// .animate( properties, options)
