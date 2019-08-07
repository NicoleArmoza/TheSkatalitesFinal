$(".abrir").click(function() {
  // $("nav").css("top", "0");
  $("nav").css({
    top: "0",
    left: "0"
  });
});

$(".cerrar").click(function() {
  $("nav").css({
    top: "-100%",
    left: "-100%"
  });
  // $("nav").css("top", "-100%");
});

$("header nav ul li a").click(function() {
  $("nav").css({
    top: "-100%",
    left: "-100%"
  });
  //$("nav").css("top", "-100%");
});
