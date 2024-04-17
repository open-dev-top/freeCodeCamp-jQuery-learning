/* Getting started with jQuery */

// $(function(){
//     $("button").bind("click", function () {
//         alert(1112);
//       });
// })

$("#btn").click(function () {
  // console.log($("#test").text());
  // console.log($("#test").html());
  console.log($("#fcc").attr("href"));
});

$("#btn2").click(function () {
  // $("#test").text("freeCodeCamp is owesome!");
  // $("#test").html("freeCodeCamp is <b>owesome!</b>");
  $("p").text((i, originText) => {
    return (
      "Old text:" +
      originText +
      "\n" +
      "New text: freeCodeCamp is awesome! (index: " +
      i +
      ")"
    );
  });
});

$("#btn3").click(function () {
  $("#name").val("Quincy Larson");
});
