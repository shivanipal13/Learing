// $(document).ready(function(){
//     $("button").click(function(){
//         alert("button clicked");

//     });

// });

// $(document).ready(function(){
//     $("#hide").click(function(){
//       $("p").hide();
//     });
//     $("#show").click(function(){
//       $("p").show();
//     });
//   });

$(document).ready(function() {
  var myElements = $("#id01");
  $("#demo").text("The text from the id01 paragraph is: " + myElements[0].innerHTML);
});

