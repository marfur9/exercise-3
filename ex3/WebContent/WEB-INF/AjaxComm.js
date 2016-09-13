/**
 * 
 */

"use strict";
  
function onLoad() {
	getUpdates(-1);
}
  
function viewMessage(m) {
	var parts = m.split(" ");
	for (var i = 0; i < parts.length%5; i++) {
		var j = 5*i;
		updateMembers(parts[j+0],parts[j+1],parts[j+2],parts[j+3],parts[j+4])
	}
}

function getUpdates(e) {
	let url = config.servicesPath + "/updates"
    const ajax = new AJAXConnection(url)
    ajax.onsuccess = viewMessage
    ajax.get(-1)
}
    
window.addEventListener("DOMContentLoaded",onLoad,true)
