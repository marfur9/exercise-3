/**
 * 
 */

"use strict";
  
let memberId = null;

function onLoad() {
	getUpdates(-1);
}

//Passes returned members to the memberlist
function passMember(m) {
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
    ajax.onsuccess = passMember
    ajax.get()
}

function postMember(m) {
	let url = "../Mservices/data/member/"
    const ajax = new AJAXConnection(url)
    ajax.onsuccess = passMember
    ajax.post(m)
}

function putMember(m) {
	member = JSON.parse(m);
	memberId = member.memberId
	let url = "../Mservices/data/member/"+memberId
    const ajax = new AJAXConnection(url)
    ajax.onsuccess = passMember
    ajax.put(m)
}

function deleteMember(m) {
	member = JSON.parse(m);
	memberId = member.memberId
	let url = "../Mservices/data/member/"+memberId
    const ajax = new AJAXConnection(url)
    ajax.onsuccess = passMember
    ajax.del()
}
    

window.addEventListener("DOMContentLoaded",onLoad,true)
