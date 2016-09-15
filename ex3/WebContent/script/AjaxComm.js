/**
 * 
 */

"use strict";
  
let memberId = null;

function onLoad() {
	getUpdates(-1);
}
  
function viewMessage(m) {
	var data = JSON.parse(m);
	console.log("Members found: " + data.updates.newMembers.length)
	for (var i = 0; i < data.updates.newMembers.length; i++) {
		var jsontext = JSON.stringify(data.updates.newMembers[i])
		console.log(data.updates.newMembers[i])
		updateMember(jsontext)
	}
}

function getUpdates(e) {
	memberId = e
	let url = "../Mservices/data/updates/"+memberId
    const ajax = new AJAXConnection(url)
    ajax.onsuccess = viewMessage
    ajax.get()
}
    
window.addEventListener("DOMContentLoaded",onLoad,true)
