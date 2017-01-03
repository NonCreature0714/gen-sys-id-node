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

fs.readFile('/sys/class/net/eth0/address', 'utf8', (err, data) => {
	if(!err) {
		ifs.eth0 = data;
		process.emit('readeth0complete');
	} else {
		return console.log('Error reading eth0 address: ' + err);
	}
});

fs.readFile('/sys/class/net/wlan0/address', 'utf8', (err, data) => {
	if(!err) {
		ifs.wlan0 = data;
		process.emit('readwlan0complete');
	} else {
		return console.log('Error reading eth0 address: ' + err);
	}
});

process.once('readeth0complete', () => {
	process.once('readwlan0complete', () => {
		process.emit('macreadcomplete');
	});
});

process.once('macreadcomplete', () => {
	console.log('ifs.eth0: ' + ifs.eth0);
//	console.log('hashed eth0 is: ' + ifs.eth0.hashCode());

	console.log('ifs.wlan0: ' + ifs.wlan0);
//	console.log('hashed wlan0 is: ' + ifs.eth0.hashCode());

});
