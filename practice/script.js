$(".button").click(function () {
  var buttonId = $(this).attr("id");
  $("#modal-container").removeAttr("class").addClass(buttonId);
  $("body").addClass("modal-active");
});

$("#modal-container .close").click(function () {
  $("#modal-container").addClass("out");
  $("body").removeClass("modal-active");
});

// let btn2 = document.querySelector('.bth-2');

// btn2.addEventListener('click', function() {
//   btn2.classList.toggle('onclick');
// })
