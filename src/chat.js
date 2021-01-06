function myFunction() {
  var x = document.getElementById("myCanvas");
  var y = document.getElementById("overlay");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "block";
  } else {
    x.style.display = "none";
    y.style.display = "none";
  }
}

