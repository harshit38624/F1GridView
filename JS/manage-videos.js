let videos = JSON.parse(localStorage.getItem('videos')) || [];
let editIndex = null; // Track which video is being edited

// Add or Update video based on the current mode
document.getElementById('video-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const title = document.getElementById('video-title').value;
    const videoUrl = document.getElementById('video-url').value;
    const thumbnailUrl = document.getElementById('thumbnail-url').value;

    if (title && videoUrl && thumbnailUrl) {
        if (editIndex === null) {
            // Add mode
            videos.push({ title, videoUrl, thumbnailUrl });
        } else {
            // Edit mode
            videos[editIndex] = { title, videoUrl, thumbnailUrl };
            editIndex = null; // Reset after editing
        }

        // Save to localStorage
        localStorage.setItem('videos', JSON.stringify(videos));
        displayVideos();
        clearInputs();
    }
});

// Clear form inputs
function clearInputs() {
    document.getElementById('video-title').value = '';
    document.getElementById('video-url').value = '';
    document.getElementById('thumbnail-url').value = '';
    document.getElementById('add-update-video-btn').innerText = 'Add Video';
}

// Display all videos
function displayVideos() {
    const videoList = document.getElementById('video-list');
    videoList.innerHTML = '';

    videos.forEach((video, index) => {
        const videoElement = document.createElement('div');
        videoElement.className = 'video-item';
        videoElement.innerHTML = `
            <img src="${video.thumbnailUrl}" alt="${video.title}" style="width: 120px; height: 67px;">
            <span>${video.title}</span>
            <button onclick="editVideo(${index})">Edit</button>
            <button onclick="deleteVideo(${index})">Delete</button>
        `;
        videoList.appendChild(videoElement);
    });
}

// Edit video
function editVideo(index) {
    editIndex = index; // Track the index being edited
    const video = videos[index];
    
    document.getElementById('video-title').value = video.title;
    document.getElementById('video-url').value = video.videoUrl;
    document.getElementById('thumbnail-url').value = video.thumbnailUrl;

    document.getElementById('add-update-video-btn').innerText = 'Update Video';
}

// Delete video
function deleteVideo(index) {
    videos.splice(index, 1); // Remove video from array
    localStorage.setItem('videos', JSON.stringify(videos)); // Update localStorage
    displayVideos();
}

// Load videos initially
displayVideos();
