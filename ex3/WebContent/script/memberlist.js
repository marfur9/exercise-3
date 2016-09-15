/**
 * haha, this is for the hecking code stoopid
 */
"use strict";

let id= 0;

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

function findRow(idn){
	let table = document.getElementById("memberTable");
	let row = null;
	let rows = table.rows;
	
	for(let r of rows){
		if(r.getAttribute("class")==("r"+idn)){
			row=r;
		}
	}
	
	console.log(row);
	return row;
}

function updateMember(jsontext){
	let member = JSON.parse(jsontext);
	let table = document.getElementById("memberTable");
	let row = findRow(member.id);
	
	if(row!=null){
		console.log("found row");
		let fnameCell = row.getElementById("fnameCell");
		fnameCell.textContent = member.fname;
		let lnameCell = row.getElementById("lnameCell");
		lnameCell.textContent = member.lname;
		let addressCell = row.getElementById("addressCell");
		addressCell.textContent = member.address;
		let phoneCell = row.getElementById("phoneCell");
		phoneCell.textContent = member.phone;
	}else{
		console.log("row not found");
		row = table.insertRow();
		row.id = ("r"+idn);
		
		let fnameCell = row.insertCell(0);
		fnameCell.id = "fnameCell";
		fnameCell.textContent = fname;
		
		let lnameCell = row.insertCell(1);
		lnameCell.id = "lnameCell";
		lnameCell.textContent = lname;
		
		let addressCell = row.insertCell(2);
		addressCell.id = "addressCell";
		addressCell.textContent = address;
		
		let phoneCell = row.insertCell(3);
		phoneCell.id = "phoneCell";
		phoneCell.textContent = phone;
		
		let deleteCell = row.insertCell(4);
		let deleteButton = document.createElement("input");
		deleteButton.setAttribute("type", "button");
		deleteButton.value = "Delete";
		deleteCell.appendChild(deleteButton);
		
		let editCell = row.insertCell(5);
		let editButton = document.createElement("input");
		editButton.setAttribute("type", "button");
		editButton.value = "Edit";
		editCell.appendChild(editButton);
		
		editButton.addEventListener("click", editMember);
		deleteButton.addEventListener("click", deleteMember);
		
	}
}

function deleteMember(){
	let table = document.getElementById("memberTable");
	let idn = this.getAttribute("class");
	
	
	//test
	let row = findRow(idn);
	
	table.tBodies[0].removeChild(row);
}

function editMember(){
	let idn = this.getAttribute("class");
	let row = findRow(parseInt(idn,10));
	
	let newFName = prompt("Enter firstname", row.cells[0].textContent);
	let newLName = prompt("Enter lastname", row.cells[1].textContent);
	let newAddress = prompt("Enter address", row.cells[2].textContent);
	let newPhone = prompt("Enter phone number", row.cells[3].textContent);
	
	console.log("{id:" + parseInt(idn,10) + ",fname:" + newFName + ",lname:" + newLName + ",address:" + newAddress +",phone:" + newPhone + '}');
	var jsontext = 	"{id:" + idn +
	",fname:" + newFName +
	",lname:" + newLName +
	",address:" + newAddress +
	",phone:" + newPhone + '}';
	updateMember(jsontext);
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
	row.setAttribute("class",("r"+id));
	let fNameCell = row.insertCell(0);
	let lNameCell = row.insertCell(1);
	let addressCell = row.insertCell(2);
	let phoneCell = row.insertCell(3);
	
	let deleteCell = row.insertCell(4);
	let deleteButton = document.createElement("input");
	deleteButton.setAttribute("type", "button");
	deleteButton.value = "Delete";
	deleteButton.setAttribute("class","r"+id);
	deleteCell.appendChild(deleteButton);
	
	let editCell = row.insertCell(5);
	let editButton = document.createElement("input");
	editButton.setAttribute("type", "button");
	editButton.value = "Edit";
	editButton.setAttribute("class","r"+id);
	editCell.appendChild(editButton);
	
	fNameCell.textContent = newFName;
	lNameCell.textContent = newLName;
	addressCell.textContent = newAddress;
	phoneCell.textContent = newPhone;
	
	editButton.addEventListener("click", editMember);
	deleteButton.addEventListener("click", deleteMember);
	id++;
}

window.addEventListener("load",init,true)