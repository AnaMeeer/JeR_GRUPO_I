function OcultarTodo() {
  var x = document.getElementById("canvas-wrap");
  var y = document.getElementById("botones-user");
  var z = document.getElementById("botones-chat");
  if (x.style.visibility === "hidden") {
    x.style.visibility = "visible";
    y.style.visibility = "visible";
    z.style.visibility = "visible";
  } else {
    x.style.visibility = "hidden";
    y.style.visibility = "hidden";
    z.style.visibility = "hidden";
  }
}


function ChatAlTerminar() {
  var x = document.getElementById("canvas-wrap");
  var y = document.getElementById("botones-user");
  var z = document.getElementById("botones-chat");
  if (x.style.display != "hidden") {
    x.style.visibility = "hidden";
    y.style.visibility = "hidden";
    z.style.visibility = "hidden";
  }
}

