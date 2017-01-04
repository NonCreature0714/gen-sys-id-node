const fs = require('fs');

var ifs = {
	eth0: String,
	wlan0: String
};

fs.readFileSync('/sys/class/net/eth0/address', 'utf8', (err, data) => {
	if(!err) {
		ifs.eth0 = data;
	} else {
		return console.log('Error reading eth0 address: ' + err);
	}
});

fs.readFileSync('/sys/class/net/wlan0/address', 'utf8', (err, data) => {
	if(!err) {
		ifs.wlan0 = data;
	} else {
		return console.log('Error reading eth0 address: ' + err);
	}
});

console.log('ifs.eth0: ' + ifs.eth0);

console.log('ifs.wlan0: ' + ifs.wlan0);
