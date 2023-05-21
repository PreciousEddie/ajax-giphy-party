console.log("Let's get this party started!");
const div = document.querySelector("#gif-area");
const $gifArea = $("#gif-area");

function addGif(res) {
  let numResults = res.data.length;
  if (numResults) {
    let randomIdx = Math.floor(Math.random() * numResults);
    let newDiv = document.createElement("div");
    newDiv.classList.add("col-md-4", "col-12", "mb-4");
    newDiv.setAttribute("id", "newGifs");
    let newGif = document.createElement("img");
    newGif.src = res.data[randomIdx].images.original.url;
    newDiv.append(newGif);
    div.append(newDiv);
  }
}

async function getGif(searchterm) {
  const url = `http://api.giphy.com/v1/gifs/search?api_key=qCBK9qmqN7XXT53B5xVvjd5er5vcOqBC&q=${searchterm}&limit=25&offset=0&rating=g&lang=en`;
  const response = await axios.get(url);
  addGif(response.data);
}

const form = document.querySelector("#searchform");
form.addEventListener("submit", function (e) {
  const input = document.querySelector("#search");
  e.preventDefault();
  getGif(input.value);
  input.value = "";
});

// let gifs = document.getElementById("newGifs");
// const removeBtn = document.querySelector("#delete");
// removeBtn.addEventListener("click", () => {
//   gifs.remove();
// });

$("#delete").on("click", function () {
  $gifArea.empty();
});
