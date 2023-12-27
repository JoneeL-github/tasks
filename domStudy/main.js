// l
//the NEW function
function displaySelected() {
  let ImageList = document.getElementById("ImageList");
  let imageArea = document.getElementById("imageArea");
  // Set the content of the image area to the selected value from the dropdown
  imageArea.src = ImageList.value;
}

// Reference Vs Value In JavaScript ?? look this up next time
