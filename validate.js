let fnameNode = document.getElementById('fname')
let errorNode1 = document.getElementById('error1');
let lnameNode = document.getElementById('lname')
let errorNode2 = document.getElementById('error2');
let telNode = document.getElementById('tel')
let errorNode3 = document.getElementById('error3');
let emailNode = document.getElementById('email')
let errorNode4 = document.getElementById('error4');
let passNode = document.getElementById('pass')
let errorNode5 = document.getElementById('error5');
let cpassNode = document.getElementById('cpass')
let errorNode6 = document.getElementById('error6');
const errorBorder = "2px solid red"
const successBorder = "2px solid black"

function validate() {
    let s1 = validate1()
    let s2 = validate2()
    let s3 = validate3()
    let s4 = validate4()
    let s5 = validate5()
    let s6 = validate6()
    console.log(s1 && s2 && s3 && s4 && s5 && s6)
    return (s1 && s2 && s3 && s4 && s5 && s6)
}

function validate1() {
    let fname = fnameNode.value;
    errorNode1.innerHTML = "";
    if (fname === '') {
        errorNode1.innerHTML = "First name is required";
        fnameNode.style.border = errorBorder;
        return false
    } else {
        fnameNode.style.border = successBorder;
        return true
    }
}

function validate2() {
    let lname = lnameNode.value
    errorNode2.innerHTML = "";
    if (lname === '') {
        errorNode2.innerHTML = "Please Enter Lastname"
        lnameNode.style.border = errorBorder
        return false
    } else {
        lnameNode.style.border = successBorder
        return true
    }
}

function validate4() {
    let email = emailNode.value; // @vinapatil
    errorNode4.innerHTML = "";
    let ss1 = email.substring(0, email.indexOf('@'));
    let ss2 = email.substring(email.indexOf('@') + 1);
    // let index=email.indexOf('@');
    // if(index==0 || index===email.length-1)
    console.log(ss1);
    console.log(ss2);
    if (email === '') {
        errorNode4.innerHTML = "Email Id is required";
        emailNode.style.border = errorBorder;
        return false
    } else if (!email.includes('@')) {
        errorNode4.innerHTML = "Email Id should contain @";
        emailNode.style.border = errorBorder;
        return false
    } else if (ss1 === '' || ss2 === '') {
        errorNode4.innerHTML = "Invalid Email id";
        emailNode.style.border = errorBorder;
        return false
    } else {
        emailNode.style.border = successBorder;
        re
    }
}

function validate3() {
    let tel = telNode.value
    let regExp = new RegExp("^[0-9]{10}$")
    errorNode3.innerHTML = ""
    console.log(regExp.test(tel))
    if (tel === '') {
        errorNode3.innerHTML = "Mobile Number is reqired"
        telNode.style.border = errorBorder
        return false
    } else if (regExp.test(tel) == false) {
        errorNode3.innerHTML = "Please enter valid mobile no"
        return false
    } else {
        telNode.style.border = successBorder
        return true
    }
}

function validate5() {
    let pass = passNode.value
    let regExp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,15})")
    errorNode5.innerHTML = ""
    console.log(regExp.test(pass))
    if (pass === '') {
        errorNode5.innerHTML = "Password is reqired"
        passNode.style.border = errorBorder
        return false
    } else if (regExp.test(pass) == false) {
        errorNode5.innerHTML = "Password shold contain at least one character,one digit,one special character,One uppercase character"
        return false
    } else {
        passNode.style.border = successBorder
        return true
    }
}

function validate6() {
    let pass = passNode.value
    let cpass = cpassNode.value
    errorNode6.innerHTML = ""
    if (cpass === '') {
        errorNode6.innerHTML = " Confirm Password is reqired"
        cpassNode.style.border = errorBorder
        return false
    } else if (cpass != pass) {
        errorNode6.innerHTML = "Both password shold match"
        return false
    } else {
        cpassNode.style.border = successBorder
        return true
    }
}