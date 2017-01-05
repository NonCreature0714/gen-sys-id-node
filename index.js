const fs = require('fs');

var ifs = {
	eth0: String,
	wlan0: String
};

ifs.eth0 = fs.readFileSync('/sys/class/net/eth0/address', 'utf8');

ifs.wlan0 = fs.readFileSync('/sys/class/net/wlan0/address', 'utf8'); 

console.log('ifs.eth0: ' + ifs.eth0);

console.log('ifs.wlan0: ' + ifs.wlan0);
