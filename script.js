const error1 = document.getElementById("error1");
const error2 = document.getElementById("error2");
const error3 = document.getElementById("error3");
const error4 = document.getElementById("error4");

function validateName(){
    var name = document.getElementById("name").value;
    
    if(name.length === 0){
        error1.innerHTML = "required";
        return false;
    }
    if(!name.match(/^[A-Za-z]+\s{1}[A-Za-z]+$/)){
        error1.innerHTML = "Write full name";
        return false;
    }
    error1.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validatePhone(){
    var phone = document.getElementById("phone").value;

    if(phone.length === 0){
        error2.innerHTML = "required";
        return false;
    }

    if(phone.length !== 10){
        error2.innerHTML = "should be of 10 digits";
        return false;
    }

    if(!phone.match(/^[0-9]{10}$/)){
        error2.innerHTML = "Only digits are allowed";
        return false;
    }
    error2.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateEmail(){
    var email = document.getElementById("email").value;

    if(email.length === 0){
        error3.innerHTML = "required";
        return false;
    }
    if(!email.match(/^[A-Za-z._0-9-]+[@][A-za-z]+[\.][a-z]{2,4}$/)){
        error3.innerHTML = "invalid";
        return false;
    }
    error3.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateMessage(){
    var message = document.getElementById("message").value;
    var limit = document.getElementById("limit");

    var required = 20;
    var left = required - message.length;
    
    if(left>0){
        limit.innerHTML = left + " more characters required";
        return false;
    }
    limit.innerHTML = "";
    error4.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        return false;
    }
}