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
		var jsontext = 	"{id:" + parts[j+0] +
						",fname:" + parts[j+1] +
						",lname:" + parts[j+2] +
						",address:" + parts[j+3] +
						",phone:" + parts[j+4] + '}';
		updateMember(jsontext)
	}
}

function getUpdates(e) {
	let url = "../Mservices/data/updates"
    const ajax = new AJAXConnection(url)
    ajax.onsuccess = viewMessage
    ajax.get(e)
}
    
window.addEventListener("DOMContentLoaded",onLoad,true)
