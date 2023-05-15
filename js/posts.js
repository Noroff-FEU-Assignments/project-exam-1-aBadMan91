/* const baseUrl = "https://techstuff.aleksnord.no/wp-json/wp/v2/posts";
// const perPageUrl = "https://techstuff.aleksnord.no/wp-json/wp/v2/posts?per_page=10";

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

fetchPosts(baseUrl);

function createHtml(posts) {
    posts.forEach(function(post) {
        postContainer.innerHTML += `
            <div class="post">
                <a href="posts/postspecific.html?id=${post.id}&name=${post.title.rendered}">
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
});*/

const baseUrl = "https://techstuff.aleksnord.no/wp-json/wp/v2/posts";
const perPageUrl = "https://techstuff.aleksnord.no/wp-json/wp/v2/posts?per_page=10";

const postContainer = document.querySelector(".posts");
const viewMoreBtn = document.querySelector(".view-more");
const viewLessBtn = document.querySelector(".view-less");
let currentPage = 1;

viewMoreBtn.addEventListener("click", fetchNextPage);
viewLessBtn.addEventListener("click", fetchPreviousPage);

async function fetchPosts(url) {

  try {

      const response = await fetch(url);

      const getPosts = await response.json();

      console.log(getPosts);

      createHtml(getPosts);

      if (getPosts.length < 10 && currentPage === 1) {
        viewMoreBtn.style.display = "none";
      }
      else {
        viewLessBtn.style.display = "none";
    }
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
              <a href="posts/postspecific.html?id=${post.id}&name=${post.title.rendered}">
                  <img src="${post.featured_media_src_url}" alt="${post.title.rendered}" class="postThumbnails">
                  <h3>${post.title.rendered}</h3>
              </a>
          </div>`;
  });
}

async function fetchNextPage() {
  currentPage++;
  const nextPageUrl = `${perPageUrl}&page=${currentPage}`;
  await fetchPosts(nextPageUrl);
  viewLessBtn.style.display = "inline-block";
  viewMoreBtn.style.display = "none";
}

async function fetchPreviousPage() {
  if (currentPage > 1) {
    currentPage--;
    const previousPageUrl = `${perPageUrl}&page=${currentPage}`;
    postContainer.innerHTML = "";
    await fetchPosts(previousPageUrl);
    viewMoreBtn.style.display = "inline-block";
  }
  if (currentPage === 1) {
    viewLessBtn.style.display = "none";
  }
}
