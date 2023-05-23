const detailContainer = document.querySelector(".container");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id");

const name = params.get("name");

const url = "https://techstuff.aleksnord.no/wp-json/wp/v2/posts/" + id;

async function getPost() {

    try {
        const response = await fetch(url);

        const post = await response.json();

        console.log(url)

        createHtml(post);
    }

    catch (error) {
        console.log(error)
        detailContainer.innerHTML = alert("error, couldn't load page correctly", error);
    }
}

document.title = "AleksTechStuff" + " " + "|" + " " + name;

getPost();

function createHtml(post) {
  
    const heading = document.createElement("h1");
    heading.textContent = post.title.rendered;
  
    const postContent = document.createElement("div");
    postContent.classList.add("post-content");
    postContent.innerHTML = post.content.rendered;
  
    postContent.addEventListener("click", openModal);
  
    detailContainer.appendChild(heading);
    detailContainer.appendChild(postContent);
  }

  function openModal(event) {
    if (event.target.tagName === "IMG") {
      const imageUrl = event.target.src;
  
      const modalContainer = document.createElement("div");
      modalContainer.classList.add("modal-container");
  
      const modalContent = document.createElement("div");
      modalContent.classList.add("modal-content");
  
      const closeButton = document.createElement("span");
      closeButton.classList.add("modal-close");
      closeButton.innerHTML = "&times;";
  
      const modalImage = document.createElement("img");
      modalImage.src = imageUrl;
      modalImage.alt = "Modal Image";
  
      modalContent.appendChild(modalImage);
      modalContent.appendChild(closeButton);
  
      modalContainer.appendChild(modalContent);
  
      document.body.appendChild(modalContainer);
  
      modalContainer.addEventListener("click", closeModal);
      closeButton.addEventListener("click", closeModal);
    }
  }
  
  function closeModal() {
    const modalContainer = document.querySelector(".modal-container");
    modalContainer.remove();
  }
  