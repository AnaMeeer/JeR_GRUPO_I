function OcultarTodo() {
    var w = document.getElementById("estado-usuarios");
    var x = document.getElementById("canvas-wrap");
    var y = document.getElementById("botones-user");
    var z = document.getElementById("botones-chat");
    var form1 = document.getElementById("form1");
    var form2 = document.getElementById("form2");

    if (x.style.visibility === "hidden") {
        w.style.visibility = "visible";
        x.style.visibility = "visible";
        y.style.visibility = "visible";
        z.style.visibility = "visible";
        form1.style.visibility = "visible";
        form2.style.visibility = "visible";
    } else {
        w.style.visibility = "hidden";
        x.style.visibility = "hidden";
        y.style.visibility = "hidden";
        z.style.visibility = "hidden";
        form1.style.visibility = "hidden";
        form2.style.visibility = "hidden";
    }
}


function ChatAlTerminar() {
    var w = document.getElementById("estado-usuarios");
    var x = document.getElementById("canvas-wrap");
    var y = document.getElementById("botones-user");
    var z = document.getElementById("botones-chat");
    var form1 = document.getElementById("form1");
    var form2 = document.getElementById("form2");
    if (x.style.display != "hidden") {
        w.style.visibility = "hidden";
        x.style.visibility = "hidden";
        y.style.visibility = "hidden";
        z.style.visibility = "hidden";
        form1.style.visibility = "hidden";
        form2.style.visibility = "hidden";
    }
}