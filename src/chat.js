function OcultarTodo() {
  var w = document.getElementById("estado-usuarios");
  var x = document.getElementById("canvas-wrap");
  var y = document.getElementById("botones-user");
  var z = document.getElementById("botones-chat");

  if (x.style.visibility === "hidden") {
    w.style.visibility = "visible";
    x.style.visibility = "visible";
    y.style.visibility = "visible";
    z.style.visibility = "visible";
  } else {
    w.style.visibility = "hidden";
    x.style.visibility = "hidden";
    y.style.visibility = "hidden";
    z.style.visibility = "hidden";
  }
}


function ChatAlTerminar() {
  var w = document.getElementById("estado-usuarios");
  var x = document.getElementById("canvas-wrap");
  var y = document.getElementById("botones-user");
  var z = document.getElementById("botones-chat");
  if (x.style.display != "hidden") {
    w.style.visibility = "hidden";
    x.style.visibility = "hidden";
    y.style.visibility = "hidden";
    z.style.visibility = "hidden";
  }
}

