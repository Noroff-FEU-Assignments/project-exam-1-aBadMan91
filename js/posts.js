const baseUrl = "https://techstuff.aleksnord.no/wp-json/wp/v2/posts";
const perPageUrl = "https://techstuff.aleksnord.no/wp-json/wp/v2/posts?per_page=100";

const postContainer = document.querySelector(".posts");
const perPage = document.querySelector(".selection-per-page");
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

fetchPosts(perPageUrl);

function createHtml(posts) {
    posts.forEach(function(post) {
        postContainer.innerHTML += `
            <div class="post">
                <a href="posts/postspecific.html?id=${post.id}">
                    <img src="${post.featured_media_src_url}" alt="${post.title.rendered}" class="postThumbnails">
                    <h3>${post.title.rendered}</h3>
                </a>
            </div>`;
    });
}

perPage.addEventListener("change", function(event) {
    const newUrl = baseUrl + `?per_page=${event.target.value}`;
    postContainer.innerHTML = "";
    fetchPosts(newUrl);
});