const highlightedUrl = "https://techstuff.aleksnord.no/wp-json/wp/v2/posts?tags=13";

const highlightedContainer = document.querySelector(".highlighted");

async function fetchHighlightedPosts() {

    try {

        const response = await fetch(highlightedUrl);

        const getPosts = await response.json();

        console.log(getPosts);

        createHtml(getPosts);
    }

    catch(error) {
        console.log(error);
    }
}

fetchHighlightedPosts();

function createHtml(posts) {
    posts.forEach(function(post) {
        highlightedContainer.innerHTML += `
            <div class="posts-highlighted">
                <a href="posts/postspecific.html?id=${post.id}">
                    <img src="${post.featured_media_src_url}" alt="${post.title.rendered}" class="highlighted-image">
                    <h2>${post.title.rendered}</h2>
                </a>
            </div>`;
    });
}