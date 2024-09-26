let teams = JSON.parse(localStorage.getItem('teams')) || [];
let editIndex = null; // To track which team is being edited

// Add team function
document.getElementById('add-team-btn').addEventListener('click', function() {
    const title = document.getElementById('team-title').value;
    const image = document.getElementById('team-image').value;

    if (title && image) {
        teams.push({ title, image });
        localStorage.setItem('teams', JSON.stringify(teams));
        displayTeams();
        clearInputs();
    }
});

// Clear input fields
function clearInputs() {
    document.getElementById('team-title').value = '';
    document.getElementById('team-image').value = '';
    document.getElementById('add-team-btn').style.display = 'inline-block';
    document.getElementById('update-team-btn').style.display = 'none';
}

// Display all teams
function displayTeams() {
    const teamList = document.getElementById('team-list');
    teamList.innerHTML = '';

    teams.forEach((team, index) => {
        let li = document.createElement('li');
        li.innerHTML = `
            <img src="${team.image}" alt="${team.title}" width="50">
            <p>${team.title}</p>
            <button onclick="showEditForm(${index})">Edit</button>
            <button onclick="deleteTeam(${index})">Delete</button>
        `;
        teamList.appendChild(li);
    });
}

// Show the edit form with existing team details
function showEditForm(index) {
    editIndex = index;
    document.getElementById('team-title').value = teams[index].title;
    document.getElementById('team-image').value = teams[index].image;
    document.getElementById('add-team-btn').style.display = 'none';
    document.getElementById('update-team-btn').style.display = 'inline-block';
}

// Update team
document.getElementById('update-team-btn').addEventListener('click', function() {
    const title = document.getElementById('team-title').value;
    const image = document.getElementById('team-image').value;

    if (title && image) {
        teams[editIndex] = { title, image };
        localStorage.setItem('teams', JSON.stringify(teams));
        displayTeams();
        clearInputs();
    }
});

// Delete a team
function deleteTeam(index) {
    teams.splice(index, 1);
    localStorage.setItem('teams', JSON.stringify(teams));
    displayTeams();
}

// Initial display of teams on page load
displayTeams();
