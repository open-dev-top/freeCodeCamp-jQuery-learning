/* Getting started with jQuery */

// $(function(){
//     $("button").bind("click", function () {
//         alert(1112);
//       });
// })

$(document).ready(function () {
  $("button").click(function () {
    $(".unicycle").hide();
  });
});
