const detailContainer = document.querySelector(".container");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id");

const name = params.get("name");

const url = "https://techstuff.aleksnord.no/wp-json/wp/v2/posts/" + id;

const urlMedia = "https://techstuff.aleksnord.no/wp-json/wp/v2/media";

async function getPost() {

    try {
        const response = await fetch(url);

        const post = await response.json();

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
    detailContainer.innerHTML = ``;
}