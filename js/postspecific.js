const detailContainer = document.querySelector(".container");
const queryString = document.location.search;
const params = mew URLSearchParams(queryString);

const url = "" + id;

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