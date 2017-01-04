const fs = require('fs');
const hashval = 5000;
const guid = () => {
	const s4 = () => {
	 return Math.floor((1 + Math.random()) * 0x100000)
		.toString(16)
		.substring(1);
	}
	return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

var ifs = {
	eth0: String,
	wlan0: String
};

var sysId = "";
sysId = guid();

console.log('sysId: ' + sysId);

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
