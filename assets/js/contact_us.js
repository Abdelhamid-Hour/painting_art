const message = document.getElementById("message");
console.log(message);
if (message.innerText != null) {
    setTimeout(function (){
        message.innerText = "";  // Clear the message after 2 seconds
    }, 2000)
}