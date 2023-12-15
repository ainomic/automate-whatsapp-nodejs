# WhatsApp Automation

This is a learning repo where we use NodeJS, ExpressJS and packages to automate the process of receiving and sending WhatsApp messages.

## Setup environment

1. Check if `NodeJS` is installed: `node -v`. If not, then install NodeJS
1. Init the env using `npm init -y`
1. Install packages: `npm install qrcode-terminal whatsapp-web.js express`

## Run the application

1. Run app: `node index.js`
1. When you see QR code in terminal, scan the code using WhatsApp on Mobile to link device
1. You should see `Client is ready!`

### Test receiving messages

1. Send `!ping` WhatsApp message from another mobile to your account
1. You should see `pong` WhatsApp message as reply on the above message

### Test sending messages

1. Copy `test_data_sample.json` and rename to `test_data.json`
1. Update the information inside `test_data.json` to send messages to contacts
1. Browse [here](http://localhost:3000/send-wa-notifications)
1. This will send WhatsApp messages to numbers mentioned in `test_data.json`
