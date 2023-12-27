// l

var ImageList = document.getElementById("ImageList");
var imageArea = document.getElementById("imageArea");
var displayText = document.getElementById("displayText");
function displaySelected() {
  // Set the content of the image area to the selected value from the dropdown
  imageArea.src = ImageList.value;
}

// Reference Vs Value In JavaScript ?? look this up next time
console.log(ImageList);

function text() {
  var displayText = document.getElementById("displayText");
  displayText.innerText += `you clicked + <br></br>`;
}

function displayText() {
  if (ImageList.value === "yellow.jpg") {
    console.log("yes");
    displayText.innerText = "yes";
  } else {
    console.log("no");
    displayText.style = "block";
    displayText.innerText = "no";
  }
}

var imageArea = document.getElementById("imageArea");
imageArea.addEventListener("mouseover", function () {
  displayText.style.marginTop = "50px"
  displayText.style.display = "block";
});
imageArea.addEventListener("mouseleave", function () {
  displayText.style.display = "none";
  displayText.innerText = "";
});
