function loadSliders() {
  var sliders = document.getElementsByClassName("slider");
  for (var i = 0; i < sliders.length; i++) {
    linkValue(sliders[i])
  }
}

function linkValue(slider) {
  var output = document.getElementById(slider.id + "_output")
  output.innerHTML = slider.value;
  slider.oninput = function() {
    output.innerHTML = slider.value;
  }
}
loadSliders();
