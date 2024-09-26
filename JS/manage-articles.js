document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('article-form');
    const articlesContainer = document.getElementById('articles-container');
    let articles = JSON.parse(localStorage.getItem('articles')) || [];

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
        const imageUrl = document.getElementById('imageUrl').value;

        if (form.dataset.editingIndex) {
            // Update existing article
            const index = form.dataset.editingIndex;
            articles[index] = { title, content, imageUrl };
            delete form.dataset.editingIndex; // Clear editing index
        } else {
            // Add new article
            articles.push({ title, content, imageUrl });
        }

        localStorage.setItem('articles', JSON.stringify(articles));
        displayArticles();
        form.reset();
    });

    function displayArticles() {
        articlesContainer.innerHTML = '';
        articles.forEach((article, index) => {
            const articleElement = document.createElement('div');
            articleElement.classList.add('article-item');
            articleElement.innerHTML = `
                <h2>${article.title}</h2>
                <img src="${article.imageUrl}" alt="Article Image" class="article-image" />
                <p>${article.content.substring(0, 100)}...</p>
                <button onclick="editArticle(${index})">Edit</button>
                <button onclick="deleteArticle(${index})">Delete</button>
            `;
            articlesContainer.appendChild(articleElement);
        });
    }

    window.editArticle = function(index) {
        const article = articles[index];
        document.getElementById('title').value = article.title;
        document.getElementById('content').value = article.content;
        document.getElementById('imageUrl').value = article.imageUrl;

        // Set the index to the form's dataset for editing
        form.dataset.editingIndex = index; 
    };

    window.deleteArticle = function(index) {
        articles.splice(index, 1);
        localStorage.setItem('articles', JSON.stringify(articles));
        displayArticles();
    };

    displayArticles();
});
