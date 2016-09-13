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

function updateMembers(idn, fname, lname, address, phone){
	let table = document.getElementById("membertable");
	let row = table.getElementById("r"+idn);
	
	if(row!=null){
		let fnameCell = row.getElementById("fnameCell");
		fnameCell.textContent = fname;
		let lnameCell = row.getElementById("lnameCell");
		lnameCell.textContent = lname;
		let addressCell = row.getElementById("addressCell");
		addressCell.textContent = address;
		let phoneCell = row.getElementById("phoneCell");
		phoneCell.textContent = phone;
	}else{
		row = table.insertRow();
		row.id = ("r"+idn);
		
		let fnameCell = row.insertCell(0);
		fnameCell.id = "fnameCell";
		fNameCell.textContent = fname;
		
		let lnameCell = row.insertCell(1);
		lnameCell.id = "lnameCell";
		fNameCell.textContent = lname;
		
		let addressCell = row.insertCell(2);
		addressCell.id = "addressCell";
		addressCell.textContent = address;
		
		let phoneCell = row.insertCell(3);
		phoneCell.id = "phoneCell";
		phoneCell.textContent = phone;
		
		let editButton = document.createElement("input");
		editButton.setAttribute("type", "button");
		
		let deleteButton = document.createElement("input");
		deleteButton.setAttribute("type", "button");
		
		editButton.addEventListener("click", editMember);
		deleteButton.addEventListener("click", deleteMember);
		
	}
}

function deleteMember(id){
	
}

function editMember(id){
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
	
	fNameCell.textContent = newFName;
	lNameCell.textContent = newLName;
	addressCell.textContent = newAddress;
	phoneCell.textContent = newPhone;
}

window.addEventListener("load",init,true)