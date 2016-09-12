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
	//For something
	let row = table.insertRow();
	let fNameCell = row.insertCell(0);
	let lNameCell = row.insertCell(1);
	let addressCell = row.insertCell(2);
	let phoneCell = row.insertCell(3);
	
	//fNameCell.innerHTML = member.fName;
	//lNameCell.innerHTML = member.lName;
	//addressCell.innerHTML = member.address;
	//phoneCell.innerHTML = member.phone;
	//end for something
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