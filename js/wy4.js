/**
 * Created by 李永丽 on 2017/6/16.
 */
function checkName(){
    var name=document.getElementById("name").value;
    if(name.length<3){
        document.getElementById("nameSpan").innerHTML="长度不能少于3位";
    }else{
        document.getElementById("nameSpan").innerHTML="正确";
    }
}
function checkPwd(){
    var pwd=document.getElementById("pwd").value;
    if(pwd.length<8){
        document.getElementById("pwdSpan").innerHTML="密码不能少于8位";
    }else {
        document.getElementById("pwdSpan").innerHTML="正确";
    }
}
function checkEmail(){
    var email=document.getElementById("email").value;
    var a=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    if(!a.test(email)){
        document.getElementById("emailSpan").innerHTML="不正确"
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
function checkAll(){
    var name=document.getElementById("name").value;
    var pwd=document.getElementById("pwd").value;
    if(name==""||pwd==""){
        alert("必填");
        return false;
    }
}