var bootRuler = function(){
	chrome.tabs.executeScript({
		file: 'javascripts/app.min.js'
	});
	chrome.tabs.insertCSS({
		file: 'styles/style.css'
	});
}


chrome.commands.onCommand.addListener(function(command) {
	if (command == 'show-guides') {
		bootRuler();
	}
});

chrome.browserAction.onClicked.addListener(function(tab) { 
	bootRuler();
});