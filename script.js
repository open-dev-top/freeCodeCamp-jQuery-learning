/* Getting started with jQuery */

// $(function(){
//     $("button").bind("click", function () {
//         alert(1112);
//       });
// })

$(function () {
  $("h1").hide();
  $("h1").fadeIn(2000).addClass("blanchedalmond");

  $("p").hide();
  $("p").fadeIn(5000, function () {
    $(this).addClass("palevioletred");
  });

  $("img").on("click", function () {
    console.log("stop");
    $("p").stop();
  });

  $("p").hide(500).delay(2000).show(300);
});
