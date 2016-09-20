/**
 * 
 */

"use strict";
 

function onLoad() {
	let memberId = null;
	let logId = -1;
	getUpdates();
	setInterval(getUpdates,10000);
}

//Passes returned members to the memberlist
function passMembers(m) {
	var data = JSON.parse(m);
	logId = data.logId;
	
	if (data.updates.newMembers != null) {
		console.log("New members found: " + data.updates.newMembers.length)
		for (var i = 0; i < data.updates.newMembers.length; i++) {
			var jsontext = JSON.stringify(data.updates.newMembers[i])
			console.log(data.updates.newMembers[i])
			updateMember(jsontext)
		}
	}
	
	if (data.updates.updatedMembers != null) {
		console.log("Updated members found: " + data.updates.updatedMembers.length)
		for (var i = 0; i < data.updates.updatedMembers.length; i++) {
			var jsontext = JSON.stringify(data.updates.updatedMembers[i])
			console.log(data.updates.updatedMembers[i])
			updateMember(jsontext)
		}
	}
	
	if (data.updates.deletedMembers != null) {
		if (isNaN(data.updates.deletedMembers)) {
			console.log("Deleted members found: " + data.updates.updatedMembers.length)
			for (var i = 0; i < data.updates.deletedMembers.length; i++) {
				console.log(data.updates.deletedMembers[i])
				delRow(data.updates.deletedMembers[i].memberId)
			}
		} else {
			console.log("Deleted members found: " + 1)
		}
	}
	
	
}

function getUpdates() {
	let url = "../Mservices/data/updates/"+logId
    const ajax = new AJAXConnection(url)
    ajax.onsuccess = passMembers
    ajax.get()
}

function postMember(m) {
	let url = "../Mservices/data/member/"
    const ajax = new AJAXConnection(url)
    ajax.onsuccess = getUpdates
    ajax.post(m)
}

function putMember(m) {
	member = JSON.parse(m);
	memberId = member.memberId
	let url = "../Mservices/data/member/"+memberId
    const ajax = new AJAXConnection(url)
    ajax.onsuccess = getUpdates
    ajax.put(m)
}

function deleteMember(m) {
	member = JSON.parse(m);
	memberId = member.memberId
	let url = "../Mservices/data/member/"+memberId
    const ajax = new AJAXConnection(url)
    ajax.onsuccess = getUpdates
    ajax.del()
}
    

window.addEventListener("DOMContentLoaded",onLoad,true)
