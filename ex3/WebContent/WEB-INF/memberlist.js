/**
 * haha, this is for the hecking code stoopid
 */
"use strict";

function init(){
	let table = document.getElementById("memberTable");
	let button = document.getElementById("addMember");
	
	button.addEventListener("click",addMember);
	//setInterval(getTable,10000);
}

function getTable(){
	let table = document.getElementById("memberTable");
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
//	let newFName = prompt("Enter firstname", member.fName);
//	let newLName = prompt("Enter lastname", member.lName);
//	let newAddress = prompt("Enter address", member.address);
//	let newPhone = prompt("Enter phone number", member.phone);
	
	//send changed data to database
}

//function addMember(){
//	let newFName = prompt("Enter firstname", "");
//	let newLName = prompt("Enter lastname", "");
//	let newAddress = prompt("Enter address", "");
//	let newPhone = prompt("Enter phone number", "");

	// send new data to database 
//}

function addMember(){ //test,         addMember + getTable
	let newFName = prompt("Enter firstname", "");
	let newLName = prompt("Enter lastname", "");
	let newAddress = prompt("Enter address", "");
	let newPhone = prompt("Enter phone number", "");
	
	let table = document.getElementById("memberTable");
	let row = table.insertRow();
	let fNameCell = row.insertCell(0);
	let lNameCell = row.insertCell(1);
	let addressCell = row.insertCell(2);
	let phoneCell = row.insertCell(3);
	
	fNameCell.innerHTML = newFName;
	lNameCell.innerHTML = newLName;
	addressCell.innerHTML = newAddress;
	phoneCell.innerHTML = newPhone;
}

window.addEventListener("load",init,true)