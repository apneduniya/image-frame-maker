// import Cropper from 'cropperjs';

let frame_1 = false;
let frame_2 = false;
let frame_3 = false;
let frame_4 = false;

const deleteChar = async (sentence, element, totalChar) => {
  for (let letter = 0; letter < totalChar + 1; letter++) {
    await sleep(100);
    let remainingChar = totalChar - letter;
    element[0].innerHTML = " ";
    let char = 0;
    while (char < remainingChar) {
      element[0].innerHTML += sentence.charAt(char)
      char++
    }
  }
  typingChar("IMAGE EDITOR");
}

const typingChar = async (sentence) => {
  const element = document.getElementsByClassName("line");
  const len = sentence.length;
  let char = 0;
  for (char; char < len; char++) {
    await sleep(100);
    element[0].innerHTML += sentence.charAt(char);
  }
  await sleep(1000);
  deleteChar(sentence, element, len);
}

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const loadImage = (event) => {
  const image = document.getElementById("upload");
  const overlay = document.getElementById("overlay");
  const imageOutput = document.getElementById("output");
  const dialogBox = document.getElementById("uploadedBox");
  dialogBox.style.display = "flex";
  overlay.style.display = "flex";
  image.src = URL.createObjectURL(event.target.files[0]);
  imageOutput.src = URL.createObjectURL(event.target.files[0]);
}

const cross = () => {
  const crossImg = document.getElementById("cross");
  const dialogBox = document.getElementById("uploadedBox");
  const overlay = document.getElementById("overlay");

  if (dialogBox.style.display === "flex") {
    dialogBox.style.display = "none";
    overlay.style.display = "none";
  }
  else {
    dialogBox.style.display = "flex";
    overlay.style.display = "flex";
  }
}

const optionFunc1 = () => {
  frame_1 = true;
  frame_2 = false;
  frame_3 = false;
  frame_4 = false;
  frame_5 = false;
  document.getElementById("frame").style.display = "none";
}

const optionFunc2 = () => {
  frame_1 = false;
  frame_2 = true;
  frame_3 = false;
  frame_4 = false;
  frame_5 = false;
  document.getElementById("frame").style.display = "block";
  document.getElementById("frame").src = "asset/option1.png";
}

const optionFunc3 = () => {
  frame_1 = false;
  frame_2 = false;
  frame_3 = true;
  frame_4 = false;
  frame_5 = false;
  document.getElementById("frame").style.display = "block";
  document.getElementById("frame").src = "asset/option2.png";
}

const optionFunc4 = () => {
  frame_1 = false;
  frame_2 = false;
  frame_3 = false;
  frame_4 = true;
  frame_5 = false;
  document.getElementById("frame").style.display = "block";
  document.getElementById("frame").src = "asset/option3.png";
}

const optionFunc5 = () => {
  frame_1 = false;
  frame_2 = false;
  frame_3 = false;
  frame_4 = false;
  frame_5 = true;
  document.getElementById("frame").style.display = "block";
  document.getElementById("frame").src = "asset/option4.png";
}

const upload = () => {
  const frame = document.getElementById("outputFrame");
  if (frame_2) {
    frame.src = "asset/option1.png";
  }
  else if (frame_3) {
    frame.src = "asset/option2.png";
  }
  else if (frame_4) {
    frame.src = "asset/option3.png";
  }
  else if (frame_5) {
    frame.src = "asset/option4.png";
  }
  cross()
}


// typingChar("IMAGE EDITOR")
