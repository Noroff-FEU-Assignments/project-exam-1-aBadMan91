const baseUrl = "https://techstuff.aleksnord.no/wp-json/wp/v2/posts";

const postContainer = document.querySelector(".post-list");
const searchBtn = document.querySelector(".search-btn");
const categories = document.querySelector(".categories-selection");

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

fetchPosts(baseUrl);

function createHtml(posts) {
    posts.forEach(function(post) {
        postContainer.innerHTML += `
            <div class="posts">
                <a href="posts/postspecific.html?id=${post.id}">
                    <img src="${post.featured_media_src_url}" alt="${post.title.rendered}" class="postThumbnails">
                    <h3>${post.title.rendered}</h3>
                </a>
            </div>`;
    });
}