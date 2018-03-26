/**
 * Created by lenovo on 17/6/20 020.
 */
function validate() {
    var name = document.getElementById("name").value;
    var phone=document.getElementById("phone").value;
    var cid=document.getElementById("cid").value;
    var pwd=document.getElementById("pwd").value;
    if (phone=="15076690274") {
        window.open("index.html")
    }else if(cid=="620523199808275309"){
        window.open("index.html")
    }else if(pwd=="12345678"){
        window.open("index.html")
    }else {
        /* alert("请认真填写信息")*/
    }
}
function checkName() {
    var name = document.getElementById("name").value;
    if (name.length < 3) {
        document.getElementById("nameSpan").innerHTML = "不能少于3位数";
    } else {
        document.getElementById("nameSpan").innerHTML = "正确";
    }
}
function checkEmail() {
    var email = document.getElementById("email").value;
    var a = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    if (!a.test(email)) {
        document.getElementById("emailSpan").innerHTML = "格式不正确"
    } else {
        document.getElementById("emailSpan").innerHTML = "正确"
    }
}
function checkPhone() {
    var phone = document.getElementById("phone").value;
    var a1 = /^1\d{10}$/;
    if (!a1.test(phone)) {
        document.getElementById("phoneSpan").innerHTML = "不符合规范"
    } else {
        document.getElementById("phoneSpan").innerHTML = "正确"
    }
}
function checkPwd() {
    var pwd = document.getElementById("pwd").value;
    if (pwd.length < 8) {
        document.getElementById("pwdSpan").innerHTML = "密码不能少于8位";
    } else {
        document.getElementById("pwdSpan").innerHTML = "正确";
    }
}

