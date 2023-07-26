// Get references to form and table
const form = document.getElementById('myForm');
const tableBody = document.querySelector('#myTable tbody');

// Function to handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const address = document.getElementById('address').value;
    const pincode = document.getElementById('pincode').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const selectedFood = document.querySelectorAll('input[name="food"]:checked');
    const food = Array.from(selectedFood).map(item => item.value).join(', ');
    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;

    // Append the values to the table
    const newRow = tableBody.insertRow();
    newRow.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${address}</td>
        <td>${pincode}</td>
        <td>${gender}</td>
        <td>${food}</td>
        <td>${state}</td>
        <td>${country}</td>
    `;

    // Clear form fields after updating the table
    clearForm();
});

// Function to clear the form fields
function clearForm() {
    form.reset();
}
