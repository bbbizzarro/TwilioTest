// Define API keys from .env file.
//------------------------------------------------------------
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const notifyServiceSid = process.env.NOTIFY_SERVICE_SID;

// Establish a client with Twilio account using API keys.
//------------------------------------------------------------
const client = require('twilio')(accountSid, authToken);

// FS allows us to read in files i.e. numbers.txt and body.txt
//------------------------------------------------------------
const fs = require('fs');

// Check that the necessary files are in the working directory.
//------------------------------------------------------------
if (!fs.existsSync('numbers.txt')) {
	console.log('No file named numbers.txt in working directory');
	console.log('Please, create a list of numbers in the format: +10000000000');
	process.exit(1);
	
}

if (!fs.existsSync('body.txt')) {
	console.log('Please include a body.txt file');
	process.exit(1);
	
}

// Load data from numbers.txt and body.txt
//------------------------------------------------------------
var numbers = fs.readFileSync('numbers.txt', 'utf8').split("\n").filter(function(el) {
	return el != '';});

var bodyText = fs.readFileSync('body.txt', 'utf8');

// Create number bindings to send to Twilio
//------------------------------------------------------------
const bindings = numbers.map(number => {
  return JSON.stringify({ binding_type: 'sms', address: number });
});

// Connect to Twilio and text from body.txt 
//   to the numbers in numbers.txt
//------------------------------------------------------------
client.notify.services(notifyServiceSid)
  .notifications.create({
	toBinding: bindings,
    body: bodyText
  })
  .then(notification => console.log(notification.sid))
  .catch(error => console.log(error));
