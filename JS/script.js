document.addEventListener('DOMContentLoaded', function() {
    
    const leftSide = document.querySelector('.left-side');
    const rightSide = document.querySelector('.right-side');
    const articleModal = document.getElementById('article-modal');
    const imageModal = document.getElementById('image-modal');
    const manageImagesBtn = document.getElementById('manage-images');


    // Load articles from local storage
    loadArticles();

    // Load images for horizontal scroll
    loadImages();

    // Close button for article modal
    const articleCloseBtn = articleModal.querySelector('.close');
    articleCloseBtn.onclick = function() {
        articleModal.style.display = "none";
    }

    // Close button for image modal
    const imageCloseBtn = imageModal.querySelector('.close');
    imageCloseBtn.onclick = function() {
        imageModal.style.display = "none";
    }

    // Close modals when clicking outside
    window.onclick = function(event) {
        if (event.target == articleModal) {
            articleModal.style.display = "none";
        }
        if (event.target == imageModal) {
            imageModal.style.display = "none";
        }
    }

    const videoScroll = document.getElementById('video-scroll');
    
    function loadVideos() {
        const videos = JSON.parse(localStorage.getItem('videos')) || [];
        videoScroll.innerHTML = '';

        videos.forEach(video => {
            const videoElement = document.createElement('div');
            videoElement.className = 'video-item';
            videoElement.innerHTML = `
                <img src="${video.thumbnailUrl}" alt="${video.title}" style="width: 240px; height: 135px;">
                <h3>${video.title}</h3>
            `;
            videoElement.addEventListener('click', () => {
                window.open(video.videoUrl, '_blank');
            });
            videoScroll.appendChild(videoElement);
        });
    }

    loadVideos();

    // New function to load images for horizontal scroll
    function loadImages() {
        const imageScroll = document.getElementById('image-scroll');
        const images = JSON.parse(localStorage.getItem('images')) || [
            { title: 'Image 1', src: 'https://via.placeholder.com/200x200?text=Image+1', content: 'This is the content for Image 1.' },
            { title: 'Image 2', src: 'https://via.placeholder.com/200x200?text=Image+2', content: 'This is the content for Image 2.' },
            { title: 'Image 3', src: 'https://via.placeholder.com/200x200?text=Image+3', content: 'This is the content for Image 3.' }
        ];

        imageScroll.innerHTML = '';
        images.forEach((image, index) => {
            const img = document.createElement('img');
            img.src = image.src;
            img.alt = image.title;
            img.classList.add('scroll-image');
            img.onclick = () => openImageModal(index);
            imageScroll.appendChild(img);
        });
    }

    // New function to open image modal
    function openImageModal(index) {
        const images = JSON.parse(localStorage.getItem('images')) || [];
        const image = images[index];
        const modalTitle = document.getElementById('image-modal-title');
        const modalImage = document.getElementById('image-modal-image');
        const modalContent = document.getElementById('image-modal-content');

        modalTitle.textContent = image.title;
        modalImage.src = image.src;
        modalContent.textContent = image.content;

        imageModal.style.display = 'block';
    }

    // Event listener for manage images button
    manageImagesBtn.addEventListener('click', function() {
        window.location.href = 'HTML/manage-images.html';
    });
});

function loadArticles() {
    console.log('Loading articles');
    const articles = JSON.parse(localStorage.getItem('articles')) || [];
    console.log('Articles from localStorage:', articles);
    
    const mainImage = document.getElementById('main-image');
    const mainTitle = document.getElementById('main-title');
    const mainContent = document.getElementById('main-content');
    const smallArticles = document.querySelectorAll('.small-article');

    if (articles.length > 0) {
        displayMainArticle(articles[0]);
    }

    smallArticles.forEach((smallArticle, i) => {
        if (i < articles.length) {
            const article = articles[i];
            const image = smallArticle.querySelector('img');
            const title = smallArticle.querySelector('h2');
            const content = smallArticle.querySelector('p');

            image.src = article.imageUrl;
            image.alt = article.title;
            title.textContent = article.title;
            content.textContent = article.content.substring(0, 100) + '...';
            smallArticle.setAttribute('data-index', i);
            
            smallArticle.addEventListener('click', function(event) {
                console.log('Article clicked:', i);
                if (event.target.closest('.right-side')) {
                    displayMainArticle(article);
                } else {
                    openArticleModal(article);
                }
            });
        }
    });
}

function displayMainArticle(article) {
    const mainImage = document.getElementById('main-image');
    const mainTitle = document.getElementById('main-title');
    const mainContent = document.getElementById('main-content');

    mainImage.src = article.imageUrl;
    mainImage.alt = article.title;
    mainTitle.textContent = article.title;
    mainContent.textContent = article.content;

    // Scroll to the top of the left side
    document.querySelector('.left-side').scrollTop = 0;
}



document.getElementById('toggle-drivers').addEventListener('click', function () {
    toggleView('driver');
});

document.getElementById('toggle-teams').addEventListener('click', function () {
    toggleView('team');
});

function toggleView(type) {
    if (type === 'driver') {
        document.getElementById('driver-container').style.display = 'block';
        document.getElementById('team-container').style.display = 'none';
        loadData('drivers', document.getElementById('driver-list'), 'left-driver', 'middle-driver', 'right-driver');
    } else {
        document.getElementById('driver-container').style.display = 'none';
        document.getElementById('team-container').style.display = 'block';
        loadData('teams', document.getElementById('team-list'), 'left-team', 'middle-team', 'right-team');
    }
}

function loadData(type, listElement, leftId, middleId, rightId) {
    const items = JSON.parse(localStorage.getItem(type)) || [];

    // Reset the containers
    listElement.innerHTML = '';
    document.getElementById(leftId).innerHTML = '';
    document.getElementById(middleId).innerHTML = '';
    document.getElementById(rightId).innerHTML = '';

    // Display the first three in top three containers
    if (items.length > 0) {
        document.getElementById(middleId).innerHTML = `<img src="${items[0].image}" alt="${items[0].title}"><p>${items[0].title}</p>`;
    }
    if (items.length > 1) {
        document.getElementById(leftId).innerHTML = `<img src="${items[1].image}" alt="${items[1].title}"><p>${items[1].title}</p>`;
    }
    if (items.length > 2) {
        document.getElementById(rightId).innerHTML = `<img src="${items[2].image}" alt="${items[2].title}"><p>${items[2].title}</p>`;
    }

    // Display all items in the numbered list
    items.forEach((item, index) => {
        let li = document.createElement('li');
        li.innerHTML = `<img src="${item.image}" alt="${item.title}"><p>${item.title}</p>`;
        listElement.appendChild(li);
    });
}

// Redirect to manage pages
document.getElementById('manage-drivers-btn').addEventListener('click', function() {
    window.location.href = 'HTML/manage-drivers.html';
});

document.getElementById('manage-teams-btn').addEventListener('click', function() {
    window.location.href = 'HTML/manage-teams.html';
});

// Load the drivers view by default
window.onload = function() {
    toggleView('driver');
};

// Handle navigation clicks (Standing and Schedule)
// Handle navigation clicks (Standing and Schedule)
function handleNavigation(target) {
    switch (target) {
        case 'standing':
            scrollToSection('#driver-container');
            break;
        case 'schedule':
            scrollToSection('.image-scroll-section');
            break;
    }
}

// Scroll to specific section smoothly
function scrollToSection(selector) {
    const section = document.querySelector(selector);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Display driver data on hover
function showDriverPopup() {
    const drivers = JSON.parse(localStorage.getItem('drivers')) || [];
    let driverHTML = '<h2>Drivers</h2>';
    if (drivers.length > 0) {
        driverHTML += '<div class="popup-content">';
        drivers.forEach((driver, index) => {
            // Add a new row for every 5th driver
            if (index % 5 === 0) {
                driverHTML += '<div class="driver-row">';
            }
            driverHTML += `
                <div class="driver-item">
                    <img src="${driver.image}" alt="${driver.title}" width="50">
                    <p>${driver.title}</p>
                </div>
            `;
            // Close the row after 5th item
            if ((index + 1) % 5 === 0 || index === drivers.length - 1) {
                driverHTML += '</div>';
            }
        });
        driverHTML += '</div>';
    } else {
        driverHTML += '<p>No driver data available.</p>';
    }

    const popup = document.querySelector('#driver-popup');
    popup.innerHTML = driverHTML;
    popup.style.display = 'block';
}

function hideDriverPopup() {
    document.querySelector('#driver-popup').style.display = 'none'; // Hide the pop-up
}

// Display team data on hover
function showTeamPopup() {
    const teams = JSON.parse(localStorage.getItem('teams')) || [];
    let teamHTML = '<h2>Teams</h2>';
    if (teams.length > 0) {
        teamHTML += '<div class="popup-content">';
        teams.forEach((team, index) => {
            // Add a new row for every 5th team
            if (index % 5 === 0) {
                teamHTML += '<div class="team-row">';
            }
            teamHTML += `
                <div class="team-item">
                    <img src="${team.image}" alt="${team.title}" width="50">
                    <p>${team.title}</p>
                </div>
            `;
            // Close the row after 5th item
            if ((index + 1) % 5 === 0 || index === teams.length - 1) {
                teamHTML += '</div>';
            }
        });
        teamHTML += '</div>';
    } else {
        teamHTML += '<p>No team data available.</p>';
    }

    const popup = document.querySelector('#team-popup');
    popup.innerHTML = teamHTML;
    popup.style.display = 'block';
}

function hideTeamPopup() {
    document.querySelector('#team-popup').style.display = 'none'; // Hide the pop-up
}

// Event listeners for hover and click
document.querySelector('#driver-nav').addEventListener('mouseover', showDriverPopup);
document.querySelector('#driver-nav').addEventListener('mouseout', hideDriverPopup);

document.querySelector('#team-nav').addEventListener('mouseover', showTeamPopup);
document.querySelector('#team-nav').addEventListener('mouseout', hideTeamPopup);

document.querySelector('#standing-nav').addEventListener('click', function () {
    handleNavigation('standing');
});

document.querySelector('#schedule-nav').addEventListener('click', function () {
    handleNavigation('schedule');
});
