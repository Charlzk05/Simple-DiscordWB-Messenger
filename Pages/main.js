console.log("Hello there! :0");

const webhookurlBox = document.getElementById("webhookurlBox");
const webhookavatarBox = document.getElementById("webhookavatarBox");
const webhookusernameBox = document.getElementById("webhookusernameBox");
const webhookcontentBox = document.getElementById("webhookcontentBox");
const sendButton = document.getElementById("sendButton");

webhookurlBox.addEventListener("input", function(e) {
    if (e.target.value.includes("https://discord.com/api/webhooks/")) {
        sendButton.disabled = false;
    } else { 
        sendButton.disabled = true;
    }
});

// SEND WEBHOOK

sendButton.addEventListener("click", function() {
    const sendUrl = `http://localhost:8000/send?webhookurl=${webhookurlBox.value}&webhookavatar=${webhookavatarBox.value}&webhookusername=${webhookusernameBox.value}&content=${webhookcontentBox.value}`;
    fetch(sendUrl, {
        method: "GET",
        headers: {
            accept: "application/json",
            "Content-Type": "text/plain"
        },
    });

    return false;
});