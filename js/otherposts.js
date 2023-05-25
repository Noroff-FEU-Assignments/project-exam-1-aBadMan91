const baseUrl = "https://techstuff.aleksnord.no/wp-json/wp/v2/posts";

const perPageUrl = "https://techstuff.aleksnord.no/wp-json/wp/v2/posts?tags=14&per_page=4";

const postContainer = document.querySelector(".more-posts");

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
            <div class="other-posts">
                <div class="other-post-image">
                    <a href="posts/postspecific.html?id=${post.id}&name=${post.title.rendered}">
                        <img src="${post.featured_media_src_url}" alt="${post.title.rendered}" class="carousel-thumbnail">
                    </a>
                </div>
                <div class="other-post-text">
                    <a href="posts/postspecific.html?id=${post.id}">
                        <h4>${post.title.rendered}</h4>
                        <p>${post.excerpt.rendered}</p>
                    </a>
                </div>
            </div>`;
    });
}