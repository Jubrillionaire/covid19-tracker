var selectedRow = null



function onFormSubmit(){
    var formData = readFormData();
    if(selectedRow == null)
       insertFormData(formData)
    else 
       updateData(formData)
    resetForm();
}

function resetForm(){
    document.getElementById("firstName").value = ""
    document.getElementById("lastName").value = ""
    document.getElementById("email").value = ""
    document.getElementById("gender").value = ""
    document.getElementById("checkbox").checked = ""
    selectedRow = null;
}


function readFormData(){
    var formData = {}
    formData["firstName"] = document.getElementById("firstName").value;
    formData["lastName"] = document.getElementById("lastName").value;
    formData["email"] = document.getElementById("email").value;
    formData["gender"] = document.getElementById("gender").value;
    formData["checkbox"] = document.getElementById("checkbox").checked ? "yes" : "no";
return formData
}

function insertFormData (formData) {
   var tBody = document.getElementById("tbody");
  const newRow =  tBody.insertRow(tBody.length)
   cell1 = newRow.insertCell(0)
   cell1.innerHTML = formData.firstName

   cell2 = newRow.insertCell(1)
   cell2.innerHTML = formData.lastName

   cell3 = newRow.insertCell(2)
   cell3.innerHTML = formData.email

   cell4 = newRow.insertCell(3)
   cell4.innerHTML = formData.gender

   cell5 = newRow.insertCell(4)
   cell5.innerHTML = formData.checkbox
   cell5 = newRow.insertCell(5)
   cell5.innerHTML = `<div id="buttons"><button onClick="editFormData(this)">Edit</button> <button onClick="deleteData(this)"> Delete</button></div>`
}

function editFormData (td){
 selectedRow = td.parentElement.parentElement.parentElement
  document.getElementById("firstName").value = selectedRow.cells[0].innerHTML
  document.getElementById("lastName").value  = selectedRow.cells[1].innerHTML
  document.getElementById("email").value  = selectedRow.cells[2].innerHTML
  document.getElementById("gender").value  = selectedRow.cells[3].innerHTML
  document.getElementById("checkbox").checked = selectedRow.cells[4].innerHTML
}

function updateData (formData) {
    selectedRow.cells[0].innerHTML = formData.firstName
    selectedRow.cells[1].innerHTML = formData.lastName
    selectedRow.cells[2].innerHTML = formData.email
    selectedRow.cells[3].innerHTML = formData.gender
    selectedRow.cells[4].innerHTML = formData.checkbox
    
}

function deleteData (td){
    if (confirm('Are you sure to delete this data ?')) {
        row = td.parentElement.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }

}

