function sendMail() {
    event.preventDefault();
    let error = "";
    const emailRegex = /^[\w\.-]+@[\w\.-]+\.\w+$/;
    const inputName = document.getElementById('name').value;
    const inputEmail = document.getElementById('email').value;
    const inputMessage = document.getElementById('message').value;
    const inputMsgSubject = document.getElementById('msg_subject').value;

    if (inputName == '') {
        document.getElementById('errorMessage').textContent = 'Please enter your name...';
        document.getElementById('errorMessageContainer').style.display = "flex";
        return false;
    } else if (inputEmail == '') {
        document.getElementById('errorMessage').textContent = 'Please enter your email...';
        document.getElementById('errorMessageContainer').style.display = "flex";
        return false;
        debugger;
    } else if (emailRegex.test(inputEmail) == false) {
        document.getElementById('errorMessage').textContent = 'Email is invalid. Please enter a valid email...';
        document.getElementById('errorMessageContainer').style.display = "flex";
        return false;
    } else if (inputMsgSubject == '') {
        document.getElementById('errorMessage').textContent = 'Please enter your subject...';
        document.getElementById('errorMessageContainer').style.display = "flex";
        return false;
    } else if (inputMessage == '') {
        document.getElementById('errorMessage').textContent = 'Please enter your message...';
        document.getElementById('errorMessageContainer').style.display = "flex";
        return false;
    }

    console.log(error);

    var params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
        subject: document.getElementById('msg_subject').value
    };
    const serviceID = "service_rh243gm";
    const templateID = "template_tznj8q5";
    console.table(params);

    document.getElementById('errorMessageContainer').style.display = "none";

    emailjs.send(serviceID, templateID, params).then(
        res => {
            document.getElementById('name').value = "";
            document.getElementById('email').value = "";
            document.getElementById('message').value = "";
            document.getElementById('msg_subject').value = "";
            document.getElementById('errorMessage').innerText = "";
            if (res.status == 200) {
                alert("Your email sent successfully...");
            } else {
                alert("Error while sending the email...");
            }
        }
    ).catch(err => console.log("THE ERROR IS : " + err));
    // alert("Email sent");

    return true;
}

const dismissalOfComponent = () => {
    document.getElementById('errorMessageContainer').style.display = "none";
}
