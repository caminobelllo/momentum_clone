const images = ["01.jpg", "02.jpg", "03.jpg", "04.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// javascript에서 html element를 생성
const backgroungImage = document.createElement("img");
backgroungImage.src = `./images/${chosenImage}`;
// 이 tag를 body 태그 내부에 넣음
document.body.appendChild(backgroungImage);
