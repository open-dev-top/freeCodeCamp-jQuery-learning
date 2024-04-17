/* Getting started with jQuery */

// $(function(){
//     $("button").bind("click", function () {
//         alert(1112);
//       });
// })

$(document).ready(function () {
  $("h3").click(function () {
    $("button").hide();
  });
});
