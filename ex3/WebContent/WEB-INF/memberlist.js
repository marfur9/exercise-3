/**
 * haha, this is for the hecking code stoopid
 */
"use strict";

function init(){
	let table = document.getElementById("memberTable");
	let button = document.getElementById("addMember");
	
	button.addEventListener("click",addMember);
	setInterval(getTable,10000);
}

function getTable(){
	
}

function updateMembers(){
	
}

function deleteMember(member){
	
}

function editMember(member){
	
}

function addMember(){
	let newFName = prompt("Enter firstname", "");
	let newLName = prompt("Enter lastname", "");
	let newAddress = prompt("Enter address", "");
	let newPhone = prompt("Enter phone number", "");
}

window.addEventListener("load",init,true)