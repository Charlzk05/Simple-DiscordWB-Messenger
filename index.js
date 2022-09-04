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
            "content": req.query.content
        }
    });

    if (req.query.webhookavatar == "" && req.query.webhookusername == ""){
        const hook = new Webhook(req.query.webhookurl);
        hook.send(req.query.content);
    } else {
        const hook = new Webhook(req.query.webhookurl);
        hook.setAvatar(req.query.webhookavatar);
        hook.setUsername(req.query.webhookusername);
        hook.send(req.query.content);
    }
});

app.listen(PORT, function(){
    console.log("Express server listening on port " + PORT);
});