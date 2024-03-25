"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 5;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});

function handleYesClick() {
  titleElement.innerHTML = "Tôy iu chị mẹ cụa tôy, tôy yêu chị mẹ cụa tôy được 4 ngài....bla bla bla!!:3";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "Không Bao Giờ",
    "Em bít lũi rùi ạ!!",
    "Chị mẹ tha lũi cho em điiii :((",
    "Em sai gùi, tha lũi cho em plssss",
    "Đừng lãy em nữa nha",
    "Thén kiêu chị mẹ ^_^",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  catImg.src = `https://cdn.glitch.global/564b6cfd-e584-4199-9b03-f5678755c960/432536595_1125263088612609_72488442462566406_n.jpg?v=1711384610449`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}