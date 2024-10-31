function contactServer() {
    var txtmsg = document.getElementById("msgg");
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("sendMessage").value;

    
    if (name.length < 5) {
        txtmsg.innerHTML = "Enter a Valid Name";
        return false
    }
    
    
    if (!email.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        txtmsg.innerHTML = "Please Enter a Valid Email";
        return false
    }
    
    if(!message.length !=0){
        txtmsg.innerHTML = "Please Enter Your Message";
        return false
    }

    window.alert("Submitted Successfully!");
    txtmsg.innerHTML = "";
    return true;


}