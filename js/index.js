const baseUrl = "https://techstuff.aleksnord.no/wp-json/wp/v2/posts";

const perPageUrl = "https://techstuff.aleksnord.no/wp-json/wp/v2/posts?per_page=8";

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
            <div class="post">
                <a href="posts/postspecific.html?id=${post.id}">
                    <img src="${post.featured_media_src_url}" alt="${post.title.rendered}" class="carousel-thumbnail">
                    <p>${post.title.rendered}</p>
                </a>
            </div>`;
    });
}

// Slider

    const sliderContainer = document.querySelector(".carousel-slider");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const slideWidth = sliderContainer.clientWidth;
    let currentPosition = 0;
  
    function updatePosition() {
      sliderContainer.style.transform = `translateX(${currentPosition}px)`;
      prevBtn.disabled = (currentPosition >= 0);
      nextBtn.disabled = (currentPosition <= -(sliderContainer.scrollWidth - sliderContainer.offsetWidth));
    }
    
  
    prevBtn.addEventListener("click", function() {
      if (currentPosition < 0) {
        currentPosition += slideWidth;
        updatePosition();
      }
    });
  
    nextBtn.addEventListener("click", function() {
      const maxPosition = -(sliderContainer.scrollWidth - slideWidth);
      if (currentPosition > maxPosition) {
        currentPosition -= slideWidth;
        updatePosition();
      }
    });