/**
 * Created by lenovo on 17/6/21 021.
 */
$(function () {
    $(".dv>a").click(function () {
        $(this).next().show().parent().siblings().children("a").next().hide();
    })
});
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
function checkYou(){
    var name=document.getElementById("youzheng").value;
    if(name.length<6){
        document.getElementById("youSpan").innerHTML="不能少于6位";
    }else{
        document.getElementById("youSpan").innerHTML="正确";
    }
}
