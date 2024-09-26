let drivers = JSON.parse(localStorage.getItem('drivers')) || [];
let editIndex = null; // To keep track of which driver is being edited

// Add or update driver function
document.getElementById('add-driver-btn').addEventListener('click', function() {
    const title = document.getElementById('driver-title').value;
    const image = document.getElementById('driver-image').value;

    if (title && image) {
        if (editIndex !== null) {
            // Update existing driver
            drivers[editIndex] = { title, image };
            editIndex = null; // Reset editIndex
        } else {
            // Add new driver
            drivers.push({ title, image });
        }
        localStorage.setItem('drivers', JSON.stringify(drivers));
        displayDrivers();
        clearInputs();
    }
});

function clearInputs() {
    document.getElementById('driver-title').value = '';
    document.getElementById('driver-image').value = '';
}

// Display all drivers
function displayDrivers() {
    const driverList = document.getElementById('driver-list');
    driverList.innerHTML = '';

    drivers.forEach((driver, index) => {
        let li = document.createElement('li');
        li.innerHTML = `
            <img src="${driver.image}" alt="${driver.title}" width="50">
            <p>${driver.title}</p>
            <button onclick="editDriver(${index})">Edit</button>
            <button onclick="deleteDriver(${index})">Delete</button>
        `;
        driverList.appendChild(li);
    });
}

// Edit a driver
function editDriver(index) {
    editIndex = index; // Set the index of the driver being edited
    document.getElementById('driver-title').value = drivers[index].title; // Populate title input
    document.getElementById('driver-image').value = drivers[index].image; // Populate image input
}

// Delete a driver
function deleteDriver(index) {
    drivers.splice(index, 1);
    localStorage.setItem('drivers', JSON.stringify(drivers));
    displayDrivers();
}

// Initial display of drivers on page load
displayDrivers();
