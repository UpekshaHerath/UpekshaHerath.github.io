function sendMail() {
    var params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
        subject: document.getElementById('msg_subject').value
    };
    const serviceID = "service_rh243gm";
    const templateID = "template_tznj8q5";
    console.table(params);

    emailjs.send(serviceID, templateID, params).then(
        res => {
            document.getElementById('name').value = "";
            document.getElementById('email').value = "";
            document.getElementById('message').value = "";
            document.getElementById('msg_subject').value = "";
            console.log(res);
            alert("Your email sent successfully...");
        }
    ).catch(err => console.log("THE ERROR IS : " + err));

}

