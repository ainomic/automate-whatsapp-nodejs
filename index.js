const fs = require('fs');

const qrcode = require('qrcode-terminal');
const { Client, LocalAuth } = require('whatsapp-web.js');
const whatsapp = new Client({
    authStrategy: new LocalAuth()
});

const express = require('express');
const app = express();
const port = 3000;

// whatsapp
whatsapp.on('qr', qr => {
    qrcode.generate(qr, {
        small: true
    });
});

whatsapp.on('ready', () => {
    console.log('Client is ready!');
});

whatsapp.on('message', async message => {
    if (message.body === '!ping') {
        message.reply('pong');
        console.log(message.from);
    }
});
// end whatsapp

app.get('/send-wa-notifications', (req, res) => {
    var data = fs.readFileSync('test_data.json');
    data = JSON.parse(data);

    for (var i = 0; i < data.length; i++) {
        var numbers = data[i].number + '@c.us';
        var text = "Dear Mr/Mrs " + data[i].number + ", \nwe inform you that " + data[i].text + ". \nThank you";

        whatsapp.sendMessage(numbers, text)
    }

    res.send(data)
})

whatsapp.initialize();

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
