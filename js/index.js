const baseUrl = "https://techstuff.aleksnord.no/wp-json/wp/v2/posts";

const perPageUrl = "https://techstuff.aleksnord.no/wp-json/wp/v2/posts?per_page=12";

const postContainer = document.querySelector(".carousel-slider");

async function fetchPosts(url) {

    try {

        const response = await fetch(url);

        const getPosts = await response.json();

        console.log(getPosts);

        createHtml(getPosts);
    }

    catch(error) {
        console.log(error);
    }
}

fetchPosts(perPageUrl);

function createHtml(posts) {
    posts.forEach(function(post) {
        postContainer.innerHTML += `
            <div class="posts">
                <a href="posts/postspecific.html?id=${post.id}">
                    <img src="${post.featured_media_src_url}" alt="${post.title.rendered}" class="carousel-thumbnail">
                    <p>${post.title.rendered}</p>
                </a>
            </div>`;
    });
}