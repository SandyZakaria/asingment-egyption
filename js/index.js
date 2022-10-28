let nvWidth = 0,
isTrue = !0,
arr = [];

$(".strip-toggel-menu").click(function () {
isTrue ? ($(".nav-tab-menu").addClass("open-menu").removeClass("close-menu"), nvWidth = $(".nav-tab-menu").width() - 10, $(".strip-header-nav").css("left", nvWidth), $(".fa-align-justify").toggleClass("fa-times"), $(".nav-tab-menu .item1").animate({
    opacity: "1",
    paddingTop: "25px"
}, 1100), $(".nav-tab-menu .item2").animate({
    opacity: "1",
    paddingTop: "25px"
}, 1200), $(".nav-tab-menu .item3").animate({
    opacity: "1",
    paddingTop: "25px"
}, 1300), $(".nav-tab-menu .item4").animate({
    opacity: "1",
    paddingTop: "25px"
}, 1400), $(".nav-tab-menu .item5").animate({
    opacity: "1",
    paddingTop: "25px"
}, 1500), $(".nav-tab-menu .item6").animate({
    opacity: "1",
    paddingTop: "25px"
}, 1600), isTrue = !isTrue) : ($(".nav-tab-menu").addClass("close-menu").removeClass("open-menu"), $(".fa-align-justify").toggleClass("fa-times"), $(".strip-header-nav").css("left", 0), $(".nav-tab-menu li").animate({
    opacity: "0",
    paddingTop: "500px"
}, 500), isTrue = !isTrue)
});

$(document).ready(function(){
    $("#singers div:first").css("display " , "block");
    $("#singers h3").click(function () {
        $(this).next().slideToggle(500);
        $("#singers div").not($(this).next()).slideUp(500);
    });
});
 function count() {
    let now = new Date();
    let eventDate = new Date(2022 , 11 , 27);
    let currentTime = now.getTime();
    let eventTime = eventDate.getTime();
    let rinTime = eventTime - currentTime ;

    let s = Math.floor(rinTime / 1000);
    let m = Math.floor(s / 60);
    let h = Math.floor(m / 60);
    let d = Math.floor(h / 24) - 30 ;
    h %= 24;
     m %= 60;
     s %= 60;
     h = (h < 10) ? "0" + h : h;
     m = (m < 10) ? "0" + m : m;
     s = (s < 10) ? "0" + s : s;
    document.getElementById("days").innerHTML = "<h3>" + d + " D" + "</h3>";
    document.getElementById("hours").innerHTML = "<h3>" + h + " h" + "</h3>";
    document.getElementById("minutes").innerHTML = "<h3>" + m + " m" + "</h3>";
    document.getElementById("seconds").innerHTML = "<h3>" + s + " s" + "</h3>";
     setTimeout(count , 1000);

}
count();
$(function () {
    let max = 100;
    $("textarea").keyup(function () {
        let length = $(this).val().length;
        let character = max - length;
        if (character <= 0) {
            $("#char").text("your available character finished");
        } else {
            $("#char").text(character);
        }
    });
});




