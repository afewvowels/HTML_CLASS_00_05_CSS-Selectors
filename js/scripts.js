var checkbox = document.getElementsByClassName('checkbox');
var labels = document.getElementsByClassName('checkbox_label');

for(var i = 0; i < checkbox.length; i++) {
  checkbox[i].addEventListener('change', changeFontSize);
}

function changeFontSize() {
  this.parentElement.classList.toggle('checkbox_font_size');
}
