$(document).ready(function () {
    $(".container")
      .mouseenter(function () {
        $(".card").stop().animate(
          {
            top: "-90px"
          },
          "slow"
        );
      })
      .mouseleave(function () {
        $(".card").stop().animate(
          {
            top: 30
          },
          "slow"
        );
      });
  });
  