function func(){
    var email = document.getElementById("user").value;
    var pass = document.getElementById('password').value;
    if (email == 'we are group6' && pass == '04122024'){
        alert("Login Success Full !")
        window.location.assign("https://lyhuy123.github.io/group6/")
    }
    else{
        alert('Wrong Passwords')
    }
}
var a;
function pass(){
    if(a==1){
        document.getElementById('password').type='password';
        document.getElementById('password1').src='lock-regular-24.png';
        a=0;
    }
    else{
        document.getElementById('password').type='text';
        document.getElementById('password1').src='lock-open-regular-24.png';
        a=1;
    }
}
