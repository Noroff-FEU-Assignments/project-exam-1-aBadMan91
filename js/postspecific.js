const detailContainer = document.querySelector(".container");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id");

const name = params.get("name");

const url = "https://techstuff.aleksnord.no/wp-json/wp/v2/posts/" + id +  "?_embed=author";

// const urlMedia = "https://techstuff.aleksnord.no/wp-json/wp/v2/media";

// const urlComments = "https://techstuff.aleksnord.no/wp-json/wp/v2/comments";

// const urlAuthor = "https://techstuff.aleksnord.no/wp-json/wp/v2/users/1";

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
    detailContainer.innerHTML = `
            <h1>${post.title.rendered}</h1>
        <div class="post-content">
            ${post.content.rendered}
        </div>
    `;
}