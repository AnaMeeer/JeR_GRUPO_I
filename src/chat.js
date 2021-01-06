function OcultarTodo() {
  var x = document.getElementById("myCanvas");
  var y = document.getElementById("botones-user");
  var z = document.getElementById("botones-chat");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "block";
    z.style.display = "block";
  } else {
    x.style.display = "none";
    y.style.display = "none";
    z.style.display = "none";
  }
}

