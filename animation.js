$(document).ready(function () {
    $(".slide").click(function (e) {
        var link = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(link).offset().top
        }, 1000);

        e.preventDefault();
    });
    $("#recipes").mouseenter(function () {

        if ($(window).width() > 768) {
            $("#tomato").animate({
                right: "300px",
                top: "350px"
            });
            $("#pepper").animate({
                right: "200px",
                top: "350px"
            });
            $("#chili").animate({
                right: "100px",
                top: "350px"
            });
            $("#garlic").animate({
                top: "350px"
            });
            $("#gradient").animate({
                top: "350px"
            });
            $("#peppermint").animate({
                left: "100px",
                top: "350px"
            });
        } else {
            $("#tomato").animate({
                right: "160px",
                top: "200px"
            });
            $("#pepper").animate({
                right: "120px",
                top: "200px"
            });
            $("#chili").animate({
                right: "100px",
                top: "200px"
            });
            $("#garlic").animate({
                right: "20px",
                top: "200px"
            });
            $("#gradient").animate({
                top: "200px"
            });
            $("#peppermint").animate({
                left: "30px",
                top: "200px"
            });
        }
    });
    $("#blocks").hover(function () {
        $('#red').shake({
            duration: 2000,
            distance: 30
        });
        $('#hot').shake({
            duration: 1000,
            distance: 50,

        });
        $('#spicy').shake({
            duration: 800,
            distance: 20,
            vertical: true
        });
    });
});
