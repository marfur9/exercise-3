/**
 * UI handler
 */
"use strict";


function init(){
	let table = document.getElementById("memberTable");
	let button = document.getElementById("addMember");
	
	button.addEventListener("click",addMember);
}




function updateMember(jsontext){
	let member = JSON.parse(jsontext);
	let table = document.getElementById("memberTable");
	let row = null;
	let rows = table.rows;
	
	
	
	for(let r of rows){
		if(r.id==("r"+member.memberId)){
			row=r;
		}
	}
	
	if(row!=null){
		let fnameCell = row.cells[0];
		fnameCell.textContent = member.firstname;
		let lnameCell = row.cells[1];
		lnameCell.textContent = member.lastname;
		let addressCell = row.cells[2];
		addressCell.textContent = member.address;
		let phoneCell = row.cells[3];
		phoneCell.textContent = member.phone;
	}else{
		row = table.insertRow();
		row.id = ("r"+member.memberId);
		
		let fnameCell = row.insertCell(0);
		fnameCell.id = "fnameCell";
		fnameCell.textContent = member.firstname;
		
		let lnameCell = row.insertCell(1);
		lnameCell.id = "lnameCell";
		lnameCell.textContent = member.lastname;
		
		let addressCell = row.insertCell(2);
		addressCell.id = "addressCell";
		addressCell.textContent = member.address;
		
		let phoneCell = row.insertCell(3);
		phoneCell.id = "phoneCell";
		phoneCell.textContent = member.phone;
		
		let deleteCell = row.insertCell(4);
		let deleteButton = document.createElement("input");
		deleteButton.setAttribute("type", "button");
		deleteButton.value = "Delete";
		deleteButton.setAttribute("class", ("r"+member.memberId));
		deleteCell.appendChild(deleteButton);
		
		let editCell = row.insertCell(5);
		let editButton = document.createElement("input");
		editButton.setAttribute("type", "button");
		editButton.value = "Edit";
		editButton.setAttribute("class", ("r"+member.memberId));
		editCell.appendChild(editButton);
		
		editButton.addEventListener("click", editMember);
		deleteButton.addEventListener("click", delMember);
		
	}
}

function delMember(){
	let table = document.getElementById("memberTable");
	let idn = this.getAttribute("class");
	let id = parseInt(idn.substring(1,idn.length));
	var jsontext = 	"{\"memberId\":" + id + '}';
	deleteMember(jsontext);
}

function delRow(id){
	let table = document.getElementById("memberTable");
	let row = null;
	let rows = table.rows;
	
	for(let r of rows){
		if(r.id==("r"+id)){
			row=r;
		}
	}
	table.tBodies[0].removeChild(row);
}

function editMember(){
	let idn = this.getAttribute("class");
	let id = parseInt(idn.substring(1,idn.length));
	let table = document.getElementById("memberTable");
	let row = null;
	let rows = table.rows;
	
	for(let r of rows){
		if(r.id==("r"+id)){
			row=r;
		}
	}
	
	let newFName = prompt("Enter firstname", row.cells[0].textContent);
	let newLName = prompt("Enter lastname", row.cells[1].textContent);
	let newAddress = prompt("Enter address", row.cells[2].textContent);
	let newPhone = prompt("Enter phone number", row.cells[3].textContent);
	
	var jsontext = 	"{\"memberId\":" + id +
	",\"firstname\":" + newFName +
	",\"lastname\":" + newLName +
	",\"address\":" + newAddress +
	",\"phone\":" + newPhone + '}';
	putMember(jsontext);
}

function addMember(){ 
	let newFName = prompt("Enter firstname", "");
	let newLName = prompt("Enter lastname", "");
	let newAddress = prompt("Enter address", "");
	let newPhone = prompt("Enter phone number", "");
	
	
	var jsontext = 	"{\"firstname\":" + newFName +
	",\"lastname\":" + newLName +
	",\"address\":" + newAddress +
	",\"phone\":" + newPhone + '}';
	
	postMember(jsontext);
}

window.addEventListener("load",init,true)