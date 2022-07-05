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

    var b = document.getElementById("password1").value;
    var msg1 = document.getElementById("msg1");

    if(b.length>0 && b.length<=5){
        msg1.style.display = "inline"
        document.getElementById("msg1").innerHTML="Password Strength is 10%"
    }
    else{
        msg1.style.display = "none"
    }
    if(b.length>5 && b.length<=8){
        msg1.style.display = "inline"
        document.getElementById("msg1").innerHTML="Password Strength is 30%"
    }
    if(b.length>8 && b.length<=11){
        msg1.style.display = "inline"
        document.getElementById("msg1").innerHTML="Password Strength is 50%"
    }
    if(b.length>11 && b.length<=14){
        msg1.style.display = "inline"
        document.getElementById("msg1").innerHTML="Password Strength is 70%"
    }
    if(b.length>14 && b.length<=17){
        msg1.style.display = "inline"
        document.getElementById("msg1").innerHTML="Password Strength is 90%"
    }
    if(b.length>17 && b.length<=20){
        msg1.style.display = "inline"
        document.getElementById("msg1").innerHTML="Password Strength is >95%"
    }
    if(b.length>20){
        msg1.style.display = "inline"
        document.getElementById("msg1").innerHTML="Max limit of characters is 20"
    }
}


function constraints(){
    var a = document.getElementById("password").value;
    var b = document.getElementById("password1").value;

    var alphabet=/^[A-Za-z]+$/;
    var numbers = /^[0-9]+$/;

    if(a.length==""){
        alert("Please Enter Alpha Password")
        return false;
    }
    if(a.length<5){
        alert("Alpha Password should Contain more than 5 Characters")
        return false;
    }
    if(a.length>20){
        alert("Alpha Password should contain less than 20 characters")
        return false;
    }
    if(!a.match(alphabet)){
        alert("Alpha Password should contain only alphabets and no blank spaces or numbers")
        return false;
    }

    if(b.length==""){
        alert("Please Enter Num Password")
        return false;
    }
    if(b.length<5){
        alert("Num Password should Contain more than 5 Characters")
        return false;
    }
    if(b.length>20){
        alert("Num Password should contain less than 20 characters")
        return false;
    }
    if(!b.match(numbers)){
        alert("Num Password should contain only numbers and no blank spaces or alphabets")
        return false;
    }

    var len1 = a.length
    console.log(len1)

    var len2 = b.length
    console.log(len2)
}