/**
 * Created by lenovo on 17/6/14 014.
 */
//----------------------------------js选项卡
function dian() {
    document.getElementById("xuan").style.display = "block";
    document.getElementById("xuanxiang").style.display = "none";
}
function ji() {
    document.getElementById("xuanxiang").style.display = "block";
    document.getElementById("xuan").style.display = "none";
}
function xing() {
    document.getElementById("xuan3").style.display = "block";
    document.getElementById("xuanxiang4").style.display = "none";
}
function zui() {
    document.getElementById("xuanxiang4").style.display = "block";
    document.getElementById("xuan3").style.display = "none";
}
function d() {
    document.getElementById("xuanxk1").style.display = "block";
    document.getElementById("xuanxk2").style.display = "none";
}
function j() {
    document.getElementById("xuanxk2").style.display = "block";
    document.getElementById("xuanxk1").style.display = "none";
}
//---------------------------------jQuery选项卡
$(function() {
    $(".list .li15").mouseenter(function () {
        $(this).stop().children("ul").slideDown(200)
    }).mouseleave(function () {
        $(this).stop().children("ul").slideUp(200)
    });
});
//---------------------------------表单验证
function checkName(){
    var name=document.getElementById("name").value;
    if(name.length<3){
        document.getElementById("nameSpan").innerHTML="不能少于3位";
    }else{
        document.getElementById("nameSpan").innerHTML="正确";
    }
}
function checkEmail(){
    var email=document.getElementById("email").value;
    var a=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    if(!a.test(email)){
        document.getElementById("emailSpan").innerHTML="格式不正确"
    }else{
        document.getElementById("emailSpan").innerHTML="正确"
    }
}
function checkPhone(){
    var phone=document.getElementById("phone").value;
    var a=/^1\d{10}$/;
    if(!a.test(phone)){
        document.getElementById("phoneSpan").innerHTML="不符合规范"
    }else{
        document.getElementById("phoneSpan").innerHTML="正确"
    }
}
function checkYou(){
    var name=document.getElementById("youzheng").value;
    if(name.length<6){
        document.getElementById("youSpan").innerHTML="不能少于6位";
    }else{
        document.getElementById("youSpan").innerHTML="正确";
    }
}
//---------------------------------------------js轮播图
$(function () {
    var n = 0;               //4
    function run() {        //2
        if (n < 2) {        //5
            $(".pic").animate({"margin-left": "-=1170px"}, 1000);//3
            n++;
        } else {
            $(".pic").animate({"margin-left": 0}, 1000);
            n = 0;
        }
        $(".dian span").eq(n).addClass("span11").siblings("span").removeClass("span11");//6
    }
    var timer=setInterval(run, 1500);   //1---7
    $(".dian span").hover(function(){
        clearInterval(timer);
        var i=$(this).index();
        if(i>n){
            $(".pic").animate({"margin-left":"-="+1170*(i-n)+"px"},1000);
        }else{
            $(".pic").animate({"margin-left":"+="+1170*(n-i)+"px"},1000);
        }
        $(".dian span").eq(i).addClass("span11").siblings("span").removeClass("span11");
        n=i;
    },function(){
        timer=setInterval(run,2000);
    })
});
//----------------------------------------滑到顶部
//$(window).scroll(function () {
//    if ($(window).scrollTop() > 500) {
//        $(".back-to-top").fadeIn(500)
//    } else {
//        $(".back-to-top").fadeOut(500)
//    }
//});
//$(".back-to-top").click(function () {
//    $("body").animate({scrollTop: "0"}, 5000)
//});