const form = document.querySelector('#formElem')
const tableDataRef = document.querySelector('#tableData')
form.addEventListener("submit", (event) =>{
  event.preventDefault()
  let formData = new FormData(form) 
  let newDataRow = tableDataRef.insertRow(-1)
  let newTypeCell0 = newDataRow.insertCell(0)
  newTypeCell0.textContent = formData.get("fuente")

  let newTypeCell1 = newDataRow.insertCell(1)
  newTypeCell1.textContent = formData.get("petroleo")

  let newTypeCell2 = newDataRow .insertCell(2)
  newTypeCell2.textContent = formData.get("precio")
  form.reset()
})
