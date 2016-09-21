/**
 * 
 */
"use strict";

AjaxComm.logId = -1;

function AjaxComm() {
}

AjaxComm.onLoad = function() {
	AjaxComm.getUpdates();
	setInterval(AjaxComm.getUpdates,10000);
}

//Passes returned members to the memberlist
AjaxComm.passMembers = function(m) {
	var data = JSON.parse(m);
	AjaxComm.logId = data.updates.logId;
	
	if (data.updates.newMembers != null) {
		if (data.updates.newMembers.length != null) {
			console.log("New members found: " + data.updates.newMembers.length)
			for (var i = 0; i < data.updates.newMembers.length; i++) {
				var jsontext = JSON.stringify(data.updates.newMembers[i])
				console.log(data.updates.newMembers[i])
				updateMember(jsontext)
			}
		} else {
			console.log("New members found: 1")
			var jsontext = JSON.stringify(data.updates.newMembers)
			console.log(data.updates.newMembers)
			updateMember(jsontext)
		}
	}
	
	if (data.updates.updatedMembers != null) {
		if (data.updates.updatedMembers.length != null) {
			console.log("Updated members found: " + data.updates.updatedMembers.length)
			for (var i = 0; i < data.updates.updatedMembers.length; i++) {
				var jsontext = JSON.stringify(data.updates.updatedMembers[i])
				console.log(data.updates.updatedMembers[i])
				updateMember(jsontext)
			}
		} else {
			console.log("Updated members found: 1")
			var jsontext = JSON.stringify(data.updates.updatedMembers)
			console.log(data.updates.updatedMembers)
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
			delRow(data.updates.deletedMembers)
		}
	}
	
	
}

AjaxComm.getUpdates = function() {
	let url = "../Mservices/data/updates/"+AjaxComm.logId
    const ajax = new AJAXConnection(url)
    ajax.onsuccess = AjaxComm.passMembers
    ajax.get()
}

AjaxComm.postMember = function(m) {
	let member = JSON.parse(m)
	let url = "../Mservices/data/member"
    const ajax = new AJAXConnection(url)
    ajax.onsuccess = AjaxComm.getUpdates
    ajax.post(null,{'member': member})
}

AjaxComm.putMember = function(m) {
	let member = JSON.parse(m);
	let memberId = member.memberId
	let url = "../Mservices/data/member"
    const ajax = new AJAXConnection(url)
    ajax.onsuccess = AjaxComm.getUpdates
    ajax.put([memberId],{'member': member})
}

AjaxComm.deleteMember = function(m) {
	let member = JSON.parse(m);
	let memberId = member.memberId
	let url = "../Mservices/data/member/"+AjaxComm.memberId
    const ajax = new AJAXConnection(url)
    ajax.onsuccess = AjaxComm.getUpdates
    ajax.del()
}

    

window.addEventListener("DOMContentLoaded",AjaxComm.onLoad,true)
