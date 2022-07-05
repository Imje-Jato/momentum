const images = [
  "Grace_Farms_SANAA_1208_(c)_Dean_Kaufman.jpeg",
  "louvre-lens-by-sanaa-2.jpeg",
  "stringio.png",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
