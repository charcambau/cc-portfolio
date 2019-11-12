// EVENT LISTENERS
var workOne = document.getElementById('workOne');
var workTwo = document.getElementById('workTwo');
var workThree = document.getElementById('workThree');
var allWork = document.getElementById('allWork');
var containerImg = document.getElementById('containerImg');

// EVENT LISTENERS
workOne.addEventListener('mouseover', showImgOne);
workOne.addEventListener('mouseout', hideImgOne);

workTwo.addEventListener('mouseover', showImgTwo);
workTwo.addEventListener('mouseout', hideImgTwo);

workThree.addEventListener('mouseover', showImgThree);
workThree.addEventListener('mouseout', hideImgThree);

allWork.addEventListener('mouseover', showCollage);

// FUNCTION

function showImgOne() {
  document.getElementById('imgOne').style.display = "block";
  document.getElementById('imgCollage').style.display = "none";
  containerImg.style.backgroundColor = "#00ff42";
}
function hideImgOne() {
  document.getElementById('imgOne').style.display = "none";
  document.getElementById('imgCollage').style.display = "block";
  containerImg.style.backgroundColor = "#360ea4";
}

function showImgTwo() {
  document.getElementById('imgTwo').style.display = "block";
  document.getElementById('imgCollage').style.display = "none";
  containerImg.style.backgroundColor = "#2c2cf5";
}
function hideImgTwo() {
  document.getElementById('imgTwo').style.display = "none";
  document.getElementById('imgCollage').style.display = "block";
  containerImg.style.backgroundColor = "#360ea4";
}

function showImgThree() {
  document.getElementById('imgThree').style.display = "block";
  document.getElementById('imgCollage').style.display = "none";
  containerImg.style.backgroundColor = "#7834d7";
}
function hideImgThree() {
  document.getElementById('imgThree').style.display = "none";
  document.getElementById('imgCollage').style.display = "block";
  containerImg.style.backgroundColor = "#360ea4";
}

function showCollage() {
  document.getElementById('imgCollage').style.display = "block";
  containerImg.style.backgroundColor = "#360ea4";
}