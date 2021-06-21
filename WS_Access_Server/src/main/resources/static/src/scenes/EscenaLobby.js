export default class EscenaLobby extends Phaser.Scene {
    constructor() {
        super({key: 'EscenaLobby'});
    }

    create(data) {
        this.updateChat = this.time.addEvent({delay: 500, callback: getMessages, callbackScope: this, loop: true});
        this.updateServerState = this.time.addEvent({
            delay: 2000,
            callback: getConnectedUsers,
            callbackScope: this,
            loop: true
        });
        this.escena = data.escena;
        this.fondo = this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height / 2, 'fondoNegro');
        var that = this;
        this.pasarAjugar = this.add.image(this.sys.game.config.width / 2 + 350, this.sys.game.config.height / 2 - 200, 'levels').setInteractive({useHandCursor: true}).setScale(0.7)
            .on("pointerover", () => {
                this.pasarAjugar.setScale(0.75);


            })
            .on("pointerout", () => {
                this.pasarAjugar.setScale(0.7);

            })
            .on("pointerdown", () => {
                if (player != undefined) {
                    this.scene.start('SelectorNiveles', {escena: data.escena, player: player});
                    OcultarTodo();
                    that.updateChat.paused = true;
                    that.updateServerState.paused = true;
                } else {
                    alert("Sign in/Log in to play");
                }
            });

    }
}
//----------------REST FUNCTIONS----------------//
//---------------------------------------------

function getMessages() {
    $.ajax({
        url: window.location.href + "/messages"
    }).done(function (data) {
        $('#chat').empty();
        $('#chat').append('/////////////////////////Welcome to the chat/////////////////////////');
        for (var i = 0; i < data.length; i++) {
            showMessage(data[i]);
        }
    });
}

function getMessagesaAfterPost() {
    $.ajax({
        url: window.location.href + "/messages"
    }).done(function (data) {
        $('#chat').empty();
        $('#chat').append('/////////////////////////Welcome to the chat/////////////////////////');
        for (var i = 0; i < data.length; i++) {
            showMessage(data[i]);
        }
        var element = document.getElementById("canvas-wrap");
        element.scrollTop = element.scrollHeight;
    });
}

function postMessage(message, callback) {
    $.ajax({
        method: 'POST',
        url: window.location.href + "/messages",
        data: JSON.stringify(message),
        processData: false,
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (data, textStatus) {
            console.log("POST: " + textStatus);
            if (callback != undefined) {
                callback(message);
            }
            getMessagesaAfterPost();
        }
    ).fail(function (data, textStatus) {
        console.log(textStatus);
        console.log("Mensaje demasiado largo");
    });
}

function postUser(user) {
    $.ajax({
        method: 'POST',
        url: window.location.href + "/users",
        data: JSON.stringify(user),
        processData: false,
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (data, textStatus) {
            console.log("POST: " + textStatus);
            checkPassword(data);
        }
    ).fail(function (data, textStatus) {
        console.log(textStatus);
    });
}

function putUser(user) {
    $.ajax({
        method: 'PUT',
        url: window.location.href + "/users",
        data: JSON.stringify(user),
        processData: false,
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (data, textStatus) {
        console.log('PUT: ' + textStatus);
        console.log("Usuario desconectado");
        player = undefined;
    })
}

function getConnectedUsers() {
    $.ajax({
        url: window.location.href + "/users/status"
    }).done(function (data) {
        updateStatus(data);
    }).fail(function () {
        serverNotFound();
    })
}

function getUserByID(id) {
    $.ajax({
        url: window.location.href + "/users/" + id
    }).done(function (data) {
        player = data;
        console.log(player)
    })
}

//----------------APP FUNCTIONS----------------//
//----------------------------------------------------------------

function serverNotFound() {
    $('#estado-usuarios').css("color", "red");
    document.getElementById('estado-servidor').innerHTML = "Server status: disconnected";
    document.getElementById('usuarios-conectados').innerHTML = "Users connected: unknown";

}

function updateStatus(users) {

    $('#estado-usuarios').css("color", "#3aff00");
    document.getElementById('usuarios-conectados').innerHTML = "Users connected: " + users;
    document.getElementById('estado-servidor').innerHTML = "Server status: connected";
}

function checkPassword(feedback) {
    if (feedback.highScore == -1) {
        alert("Your username/password is incorrect");
    } else {
        player = feedback;
        alert("Welcome ");

    }
}

function showMessage(m) {
    $('#chat').append(
        '<p>' + m.user + ": " + m.body + "</p>"
    );

}

//======================================================================================

//let pageUrl = window.location.href;
let player;
getMessages();
getConnectedUsers();


$(document).ready(function () {

    var input = $('#value-input');
    // var userInput = $('#user-input');
    var userInput = $('.CampoUsuario');
    // var passwordInput = $('#password-input');
    var passwordInput = $('.CampoContraseña');


    $("#value-input").on("keydown", function search(e) {
        if (e.keyCode == 13) {
            var value = input.val();
            input.val('');
            if (player != undefined && value.length > 0) {
                var newmessage = {
                    user: player.name,
                    body: value
                }
                postMessage(newmessage, showMessage(newmessage));
            } else if (player === undefined) {
                alert("Sign in or log in to use the chat");
            } else {
                alert("Enter a valid message")
            }

        }
    });

    $('#add-button').click(function () {
        var value = input.val();
        input.val('');
        if (player != undefined && value.length > 0) {
            var newmessage = {
                user: player.name,
                body: value
            }
            postMessage(newmessage, showMessage(newmessage));
        } else if (player === undefined) {
            alert("Sign in or log in to use the chat");
        } else {
            alert("Enter a valid message")
        }

    });

    $('#log-button').click(function () {
        var user = userInput.val();
        var password = passwordInput.val();
        userInput.val('');
        passwordInput.val('');

        var newUser = {
            name: user,
            password: password,
            connected: true,
            highScore: 0
        }
        if (password.length > 3) {
            postUser(newUser);
        } else {
            alert("Enter a valid password with more than 3 characters");
        }
    })


    $(".CampoContraseña").on("keydown", function search(e) {
        if (e.keyCode == 13) {
            var user = userInput.val();
            var password = passwordInput.val();
            userInput.val('');
            passwordInput.val('');

            var newUser = {
                name: user,
                password: password,
                connected: true,
                highScore: 0
            }
            if (password.length > 3) {
                postUser(newUser);
            } else {
                alert("Enter a valid password with more than 3 characters");
            }

        }
    });


    $(".CampoUsuario").on("keydown", function search(e) {
        if (e.keyCode == 13) {
            var user = userInput.val();
            var password = passwordInput.val();
            userInput.val('');
            passwordInput.val('');

            var newUser = {
                name: user,
                password: password,
                connected: true,
                highScore: 0
            }
            if (password.length > 3) {
                postUser(newUser);
            } else {
                alert("Enter a valid password with more than 3 characters");
            }

        }
    });
    $('#logOut-button').click(function () {
        var disUser = player;
        disUser.connected = false;
        putUser(disUser);

    })

})

