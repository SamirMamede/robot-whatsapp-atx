const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Bot whatsApp ATX')
  })

app.get('/qrcode', (req, res) => {

const fs = require('fs');
const wppconnect = require('@wppconnect-team/wppconnect');

wppconnect
  .create({
    session: 'sessionName',
    catchQR: (base64Qr, asciiQR) => {
      console.log(asciiQR); // Optional to log the QR in the terminal
      var matches = base64Qr.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
        response = {};

      if (matches.length !== 3) {
        return new Error('Invalid input string');
      }
      response.type = matches[1];
      response.data = new Buffer.from(matches[2], 'base64');

      var imageBuffer = response;
      require('fs').writeFile(
        'out.png',
        imageBuffer['data'],
        'binary',
        function (err) {
          if (err != null) {
            console.log(err);
          }
        }
      );
    },
    logQR: false,
  })
  .then((client) => start(client))
  .catch((error) => console.log(error));
  function start(client) {
    client.onMessage((message) => {
      if (message.body === 'Preciso de suporte') {
        client
          .sendText(message.from, 'Olá, você entrou e contato com o time de suporte da ATX, em que posso ajudar?')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });
      }
    });
  }
  })


  module.exports = app;