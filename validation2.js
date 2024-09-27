function validateForm(){
    let valid = true;

document.getElementById('emailError').innerHTML = ''
document.getElementById('passwordError').innerHTML = ''

let email = document.getElementById('email').value;
if(email ===""){
    document.getElementById('emailError').innerHTML = 'Email required.'
    valid = false;
}

let password = document.getElementById('password').value;
if(password ===""){
    document.getElementById('passwordError').innerHTML = 'Password required.'
    valid = false;
}else if(password.lenght < 8){
    document.getElementById('passwordError').innerHTML = ' Password must be at least 8 characters long.'
    valid = false;
}
return valid
}