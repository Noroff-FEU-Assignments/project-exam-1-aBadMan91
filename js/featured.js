const baseUrl = "https://techstuff.aleksnord.no/wp-json/wp/v2/posts";

const perPageUrl = "https://techstuff.aleksnord.no/wp-json/wp/v2/posts?tags=13&per_page=1";

const postContainer = document.querySelector(".featured");

async function fetchPosts(url) {

    try {

        const response = await fetch(url);

        const getPosts = await response.json();

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
            <div class="featured-post">
                <div class="featured-post-image">
                    <a href="posts/postspecific.html?id=${post.id}&name=${post.title.rendered}">
                        <img src="${post.featured_media_src_url}" alt="${post.title.rendered}" class="featured-image">
                    </a>
                </div>
                <div class="featured-post-text">
                    <a href="posts/postspecific.html?id=${post.id}">
                        <h3>${post.title.rendered}</h3>
                    </a>
                </div>
            </div>`;
    });
}