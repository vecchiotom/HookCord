var express = require('express');
var request = require('request');
var bodyparser = require('body-parser');
var Discord = require('discord.js');

var app = express();


app.use(bodyparser.urlencoded({extended: true}));
 
 
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
 
app.post('/webhook', (req, res) => {
    
	const hook = new Discord.WebhookClient(req.body.id, req.body.token);
	hook.avatar = req.body.avatar
	hook.name = req.body.user
	
	
	hook.send(req.body.msg)
 .then(message => console.log(`Sent message: ${message.content}` + " "+" with webhook id: " + req.body.id + " and token: " + req.body.token + " "))
 .catch(console.error);
	
	
 
    res.redirect('/');
});
app.listen(80, () => {
	console.log("Server Started correctly, listening on port 80")
})