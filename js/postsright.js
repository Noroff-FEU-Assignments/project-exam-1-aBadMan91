const rightUrl = "https://techstuff.aleksnord.no/wp-json/wp/v2/posts?tags=14";

const postContainerRight = document.querySelector(".post-list-right");

async function fetchPostsRight(url) {

    try {

        const response = await fetch(rightUrl);

        const getPostsRight = await response.json();

        console.log(getPostsRight);

        createHtml(getPostsRight);
    }

    catch(error) {
        console.log(error);
    }
}

fetchPostsRight(rightUrl);

function createHtml(posts) {
    posts.forEach(function(post) {
        postContainerRight.innerHTML += `
            <div class="post-right">
                <a href="posts/postspecific.html?id=${post.id}">
                    <img src="${post.featured_media_src_url}" alt="${post.title.rendered}" class="postThumbnails-right">
                    <h4>${post.title.rendered}</h4>
                </a>
            </div>`;
    });
}

// <script src="js/postsright.js" defer type="module"></script>
// <div class="post-list-right"></div>