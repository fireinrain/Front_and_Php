/**
 * Created by 洛天依雨 on 2016/5/31.
 */
//$(document).ready(function(){
//    $("button").click(function(){
//        $("h1").hide("slow");
//        $("h2").show("fast");
//        $("img").slideUp();
//    });
//});


$(document).ready(function(){
    $("#move_up").click(function () {
        $("#change_me").animate({top:50},200);

    });
    $("#move_down").click(function () {
        $("#change_me").animate({top:500},2000);

    });
    $("#color").click(function () {
        $("#change_me").css("color","pink");

    });
    $("#disappear").click(function () {
        $("#change_me").toggle("slow");

    });
});
