var container = document.getElementById("center");
var pwShowHide = document.querySelectorAll(".showHidePw");
var pwFields = document.querySelectorAll(".password");
var signUp = document.getElementById("signupLink");
var login = document.getElementById("loginLink");

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        pwFields.forEach(pwField => {
            if (pwField.type === "password") {
                pwField.type = "text";

                pwShowHide.forEach(icon => {
                    icon.classList.replace("uil-eye-slash", "uil-eye");
                })
            } else {
                pwField.type = "password";

                pwShowHide.forEach(icon => {
                    icon.classList.replace("uil-eye", "uil-eye-slash");
                })
            }
        })
    })
})

signUp.addEventListener("click", () => {
    container.classList.add("active");
});
login.addEventListener("click", () => {
    container.classList.remove("active");
});



function formReg() {
    var txtmsg = document.getElementById("msgError2");
    var nameUser = document.getElementById("nameUser").value;
    var emailReg = document.getElementById("emailReg").value;
    var phoneUser = document.getElementById("phoneUser").value;
    var regPassword = document.getElementById("regPassword").value;
    var samePassword = document.getElementById("samePassword").value;
    console.log("222ewewe");
    const phonePattern = /^\d{10}$/;


    if (nameUser.length < 3) {
        txtmsg.innerHTML = "Enter a Valid Name"
        return false
    }


    if (!emailReg.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        txtmsg.innerHTML = "Please Enter a Valid Email"
        return false
    }

    if (!phonePattern.test(phoneUser)) {
        txtmsg.innerHTML = "Enter a Valid Phone Number"
        return false;
    }

    if (regPassword.length != 0) {

        if (regPassword == samePassword) {
            txtmsg.innerHTML = "";
            txtmsg.style.color = ""
            txtmsg.style.backgroundColor = ""

        } else {
            txtmsg.innerHTML = "Password Not Match";
            txtmsg.style.color = "#fff"
            txtmsg.style.backgroundColor = "#ff4d4d"
            return false;

        }
    } else {
        txtmsg.innerHTML = "Please Enter Password"
        return false;
    }

    window.alert("Form Submitted Successfully!");
    txtmsg.innerHTML = "";
    return true;
};



function formLog() {
    var txtmsg = document.getElementById("msgError1");
    var emailLog = document.getElementById("emailLog").value;
    var passwordUser = document.getElementById("passwordUser").value;



    if (!emailLog.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        txtmsg.innerHTML = "Please Enter a Valid Email";
        return false

    }

    if (!passwordUser.length != 0) {
        txtmsg.innerHTML = "Please Enter Password";
        return false;

    }

    window.alert("Form Submitted Successfully!");
    txtmsg.innerHTML = "";
    return true;
};


