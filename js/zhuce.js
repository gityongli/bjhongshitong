/**
 * Created by lenovo on 17/6/29 029.
 */
function checkName() {
    var name = document.getElementById("name").value;
    var phone=document.getElementById("phone").value;
    var cid=document.getElementById("cid").value;
    var pwd=document.getElementById("pwd").value;
    if (phone=="15613776900") {
      window.open("wy1.html")
    }else if(cid=="620523199808275309"){
        window.open("wy1.html")
    }else if(pwd=="1234567"){
        window.open("wy1.html")
    }else {
       /* alert("请认真填写信息")*/
    }
}


