// l

function setImage() {
  var displayImage = document.getElementById("displayImage");
  displayImage.src = this.value; //switch between 3 values
  return false;
}
//selection tag id imageList
document.getElementById("ImageList").onchange = setImage;

// Reference Vs Value In JavaScript ?? look this up next time