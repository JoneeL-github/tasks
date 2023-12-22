function setImage() {
  //this is getting the img tag to display selected image
  var switchMyImage = document.getElementById("imgSwitcher");
  //using the img tag from demo then selecting src attribute
  //and sets property value to this.value
  //this.value which refers to yellow.jpg
  switchMyImage.src = this.value;
  return false;
}
//selection tag id imageList
document.getElementById("ImageList").onchange = setImage;

//   used this reference to achive this
/* <img id="image" src="Null_Image.png"/>
<select id="CarList">
    <option value="Null">No Car</option>
    <option value="Volvo">Volvo</option>
    <option value="Audi">Audi</option>
</select> */
// var changeCarImage = function () {
//     document.getElementById('image').src = this.options[this.selectedIndex].value + "_Image.png"
// }

// var carList = document.getElementById('CarList');
// carList.addEventListener('change', changeCarImage, false); // Note this has some issues in old browsers (IE).
