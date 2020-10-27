$(function () {

    $('.click').click(function(){
        var hs_hight = $($(this).attr("href")).offset().top;
        $("html, body").animate({
            scrollTop: hs_hight - 100 + "px"
        }, 500);
        return false;
    });

    $('.click1').click(function(){
        var hs_hight = $($(this).attr("href")).offset().top;
        $("html, body").animate({
            scrollTop: hs_hight - 200 + "px"
        }, 500);
        return false;
    });

    //获取时间
    var d = new Date();
    document.getElementById("copyright").innerHTML = "    © "+d.getFullYear()+"心伴医服";

});