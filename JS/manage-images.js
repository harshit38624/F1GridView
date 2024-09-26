let images = JSON.parse(localStorage.getItem('images')) || [];
let editIndex = null; // To track the image being edited

function renderImageList() {
    const imageList = document.getElementById('image-list');
    imageList.innerHTML = '';
    images.forEach((image, index) => {
        const li = document.createElement('li');
        li.className = 'image-item';
        li.innerHTML = `
            <h3>${image.title}</h3>
            <img src="${image.src}" alt="${image.title}" style="max-width: 100px;">
            <p>${image.content}</p>
            <button onclick="editImage(${index})">Edit</button>
            <button onclick="deleteImage(${index})">Delete</button>
        `;
        imageList.appendChild(li);
    });
}

document.getElementById('add-image-form').onsubmit = function(e) {
    e.preventDefault();
    const title = document.getElementById('image-title').value;
    const src = document.getElementById('image-src').value;
    const content = document.getElementById('image-content').value;
    
    if (editIndex === null) {
        // Add new image
        images.push({ title, src, content });
    } else {
        // Update existing image
        images[editIndex] = { title, src, content };
        editIndex = null;
        document.getElementById('submit-btn').innerText = 'Add Image';
    }

    saveImages();
    renderImageList();
    clearInputs();
};

// Edit image in the same form
function editImage(index) {
    const image = images[index];
    document.getElementById('image-title').value = image.title;
    document.getElementById('image-src').value = image.src;
    document.getElementById('image-content').value = image.content;
    
    editIndex = index; // Track the index being edited
    document.getElementById('submit-btn').innerText = 'Update Image';
}

function deleteImage(index) {
    if (confirm('Are you sure you want to delete this image?')) {
        images.splice(index, 1);
        saveImages();
        renderImageList();
    }
}

function clearInputs() {
    document.getElementById('image-title').value = '';
    document.getElementById('image-src').value = '';
    document.getElementById('image-content').value = '';
}

function saveImages() {
    localStorage.setItem('images', JSON.stringify(images));
}

document.getElementById('back-to-main').onclick = function() {
    window.location.href = '../index.html';
};

// Initial render
renderImageList();
