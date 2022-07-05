function strength(){
    var a = document.getElementById("password").value;
    var msg = document.getElementById("msg");
    if(a.length>0 && a.length<=5){
        msg.style.display = "inline"
        document.getElementById("msg").innerHTML="Password Strength is 10%"
    }
    else{
        msg.style.display = "none"
    }
    if(a.length>5 && a.length<=8){
        msg.style.display = "inline"
        document.getElementById("msg").innerHTML="Password Strength is 30%"
    }
    if(a.length>8 && a.length<=11){
        msg.style.display = "inline"
        document.getElementById("msg").innerHTML="Password Strength is 50%"
    }
    if(a.length>11 && a.length<=14){
        msg.style.display = "inline"
        document.getElementById("msg").innerHTML="Password Strength is 70%"
    }
    if(a.length>14 && a.length<=17){
        msg.style.display = "inline"
        document.getElementById("msg").innerHTML="Password Strength is 90%"
    }
    if(a.length>17 && a.length<=20){
        msg.style.display = "inline"
        document.getElementById("msg").innerHTML="Password Strength is >95%"
    }
    if(a.length>20){
        msg.style.display = "inline"
        document.getElementById("msg").innerHTML="Max limit of characters is 20"
    }
}

function constraints(){
    var a = document.getElementById("password").value;
    var alphabet=/^[A-Za-z0-9@]+$/;

    if(a.length==""){
        alert("Please Enter Alpha Password")
        return false;
    }
    if(a.length<5){
        alert("Alpha Password should Contain more than 5 Characters")
        return false;
    }
    if(a.length>20){
        alert("Password should contain less than 20 characters")
        return false;
    }
    if(!a.match(alphabet)){
        alert("Only numbers(0-9), alphabets(A-Z,a-z), and '@' are allowed. Blank spaces not allowed")
        return false;
    }

    var len1 = a.length
    console.log(len1)
}