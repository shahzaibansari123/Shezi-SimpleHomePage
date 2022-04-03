// console.log(firebase)

var database = firebase.database().ref('Contact')
var key = database.push().key;

function contact() {
    let inputName = document.getElementById("inputName");
    let inputEmail = document.getElementById("inputEmail");
    let company = document.getElementById("company");
    let phoneNumber = document.getElementById("phoneNumber");
    let message = document.getElementById("message");
    let contactData = {
        inputName: inputName.value,
        inputEmail: inputEmail.value,
        company: company.value,
        phoneNumber: phoneNumber.value,
        message: message.value
    }
    database.child(key).set(contactData)
}