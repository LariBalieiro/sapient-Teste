// jQuery
// $(document).ready(function() {
// code
// });

// Vanilla JS

// window.onload = function() {
// code
// };

///////   Menu    //////////
const menuButton = document.getElementById("menu-button");
const menu = document.getElementById("menu");

menuButton.addEventListener("click", () => {
  if (menu.classList.contains("-active")) {
    menu.classList.remove("-active");
  } else {
    menu.classList.add("-active");
  }
});

//////// Sistema de sanfona /////////
const accordionItems = document.querySelectorAll(".accordion .item");

accordionItems.forEach((item) => {
  const title = item.querySelector(".title");
  const description = item.querySelector(".description");

  title.addEventListener("click", () => {
    item.classList.toggle("-active");

    if (item.classList.contains("-active")) {
      description.style.maxHeight = description.scrollHeight + "px";
    } else {
      description.style.maxHeight = "0";
    }
  });
});

//////// Carregamento de conteúdo ajax pela api //////////
const extractElement = document.querySelector(".extract");
const wikipediaURL =
  "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Albert%20Einstein&callback=displayContent";

function displayContent(data) {
  const pageId = Object.keys(data.query.pages)[0];
  const extract = data.query.pages[pageId].extract;

  extractElement.textContent = extract;
}
const script = document.createElement("script");
script.src = wikipediaURL;
document.body.appendChild(script);

/////// Abrir modal ////////
const buttonModal = document.getElementById("button-modal");
const modalWiki = document.querySelector(".modal-wiki");
const closeModal = document.querySelector(".close-modal");

buttonModal.addEventListener("click", () => {
  modalWiki.style.top = `${buttonModal.offsetTop}px`;
  modalWiki.style.left = `${buttonModal.offsetLeft}px`;
  modalWiki.classList.add("modal-wiki-active");
});

closeModal.addEventListener("click", () => {
  modalWiki.classList.remove("modal-wiki-active");
});

///////// Play do vídeo ////////////
const videoCover = document.getElementById("video-cover");
const videoPlayer = document.getElementById("video-player");

videoCover.style.display = "block";
videoPlayer.style.display = "none";

videoCover.addEventListener("click", () => {
  videoCover.style.display = "none";
  videoPlayer.style.display = "block";
  videoPlayer.play();
});

videoPlayer.addEventListener("play", "pause", () => {
  videoPlayer.controls = true;
});
