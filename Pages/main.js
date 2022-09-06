console.log("Hello there! :0");

const body = document.getElementById("body");
const webhookurlBox = document.getElementById("webhookurlBox");
const webhookavatarBox = document.getElementById("webhookavatarBox");
const webhookusernameBox = document.getElementById("webhookusernameBox");
const webhookcontentBox = document.getElementById("webhookcontentBox");
const webhookAttachmentBox = document.getElementById("webhookAttachmentBox");
const webhookAttachmentPathBox = document.getElementById("webhookAttachmentPathBox");
const fileDialogBox = document.getElementById("fileDialogBox");
const removeSelectedFileButton = document.getElementById("removeSelectedFileButton");
const sendButton = document.getElementById("sendButton");

webhookurlBox.addEventListener("input", function(e) {
    if (e.target.value.includes("https://discord.com/api/webhooks/")) {
        sendButton.disabled = false;
    } else if (e.target.value.includes("https://discordapp.com/api/webhooks/")) {
        sendButton.disabled = false;
    } else { 
        sendButton.disabled = true;
    }
});

webhookAttachmentBox.addEventListener("input", function(e) {
    if (e.target.value == "") {
        webhookAttachmentPathBox.disabled = false;
    } else {
        webhookAttachmentPathBox.disabled = true;
    }
});

fileDialogBox.addEventListener("click", function() {
    if (fileDialogBox.checked == true) {
        webhookAttachmentPathBox.disabled = true;
        webhookAttachmentBox.disabled = false;
        removeSelectedFileButton.disabled = false;
    } else {
        webhookAttachmentPathBox.disabled = false;
        webhookAttachmentBox.disabled = true;
        removeSelectedFileButton.disabled = true;
    }
});

removeSelectedFileButton.addEventListener("click", function() {
    webhookAttachmentBox.value = "";
});

// SEND WEBHOOK

sendButton.addEventListener("click", function() {
    const sendUrl = `http://localhost:8000/send?webhookurl=${webhookurlBox.value}&webhookavatar=${webhookavatarBox.value}&webhookusername=${webhookusernameBox.value}&content=${webhookcontentBox.value}&attachment=${webhookAttachmentBox.value}${webhookAttachmentPathBox.value}`;
    fetch(sendUrl, {
        method: "GET",
        headers: {
            accept: "application/json",
            "Content-Type": "text/plain"
        },
    });

    return false;
});

body.addEventListener("keypress", function(e) {
    if (e.ctrlKey || e.key == "Enter") {
        const sendUrl = `http://localhost:8000/send?webhookurl=${webhookurlBox.value}&webhookavatar=${webhookavatarBox.value}&webhookusername=${webhookusernameBox.value}&content=${webhookcontentBox.value}&attachment=${webhookAttachmentBox.value}${webhookAttachmentPathBox.value}`;
        fetch(sendUrl, {
            mode: "cors",
            method: "GET",
            headers: {
                accept: "application/json",
                "Content-Type": "text/plain"
            },
        });

        return false;
    }
});