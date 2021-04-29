document.addEventListener(
"DOMContentLoaded",
function send_email(){
const msg = document.querySelector("#message");
const form = document.querySelector('#compose-form');

form.addEventListener("submit", () => {
const recipients = document.querySelector('#compose-recipients').value;
const subject = document.querySelector('#compose-subject').value;
const body = document.querySelector('#compose-body').value;
console.log(recipients);
//sending a post request for sending email
fetch('/emails', {
method: 'POST',
body: JSON.stringify({
recipients: recipients,
subject: subject,
body: body
})
})
.then(response => response.json())
.then(result => {
// Print result
if (parseInt(result.status) == 201){
//the mail was sent successfully, load sentbox
load_mailbox('sent');

}

else{
//display what error occurred while sending the email
msg.innerHTML = `<div class="alert alert-danger" role="alert">
${result.error}
</div>`;
}
console.log(result);
console.log("message" in result);
console.log("error" in result);
})
.catch(error => {
// in case an error has occurred
console.log(error);
});
});
},
false

);
