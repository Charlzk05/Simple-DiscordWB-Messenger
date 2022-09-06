const { Webhook } = require('discord-webhook-node');
const express = require("express");
const app = express();

const PORT = 8000;

app.get("/send", function(req, res){
    res.json({
        "send": {
            "webhookurl": req.query.webhookurl,
            "webhookavatar": req.query.webhookavatar,
            "webhookusername": req.query.webhookusername,
            "content": req.query.content,
            "attachment": req.query.attachment
        }
    });

    const hook = new Webhook(req.query.webhookurl);
    hook.setAvatar(req.query.webhookavatar);
    hook.setUsername(req.query.webhookusername);
    hook.send(req.query.content);
    
    if (req.query.attachment == "") {

    } else {
        hook.sendFile(req.query.attachment);
    }
});

app.listen(PORT, function(){
    console.log("Express server listening on port " + PORT);
});