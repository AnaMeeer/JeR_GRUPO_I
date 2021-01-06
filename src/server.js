
//----------------REST FUNCTIONS----------------//
//---------------------------------------------

function getMessages() {
    $.ajax({
        url: "http://193.161.193.99:30998/messages"
    }).done(function (data) {
        for (var i = 0; i < data.length; i++) {
            showMessage(data[i]);
        }
    });
}

function postMessage(message, callback) {
    $.ajax({
        method: 'POST',
        url: "http://193.161.193.99:30998/messages",
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
    }
    ).fail(function (data, textStatus) {
        console.log(textStatus);
        console.log("Mensaje demasiado largo");
    });
}

function postUser(user) {
    $.ajax({
        method: 'POST',
        url: "http://193.161.193.99:30998/users",
        data: JSON.stringify(user),
        processData: false,
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (data, textStatus) {
        console.log("POST: " + textStatus);
        checkPassword(data, user);
    }
    ).fail(function (data, textStatus) {
        console.log(textStatus);
    });
}
function putUser(user) {
    $.ajax({
        method: 'PUT',
        url: "http://193.161.193.99:30998/users/" + player.id,
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

//----------------APP FUNCTIONS----------------//
//----------------------------------------------------------------

function checkPassword(feedback, user) {
    if (feedback == -1) {
        alert("Your username/password is incorrect");
    }
    else {
        player = user;
        player.id = feedback;
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
let pageUrl = "193.161.193.99:30998";
let player;
getMessages();


$(document).ready(function () {

    var input = $('#value-input');
    var userInput = $('#user-input');
    var passwordInput = $('#password-input');

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
            }
            else {
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
        }
        else {
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
        }
        else {
            alert("Enter a valid password with more than 3 characters");
        }
    })


    $("#password-input").on("keydown", function search(e) {
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
            }
            else {
                alert("Enter a valid password with more than 3 characters");
            }

        }
    });


    $("#user-input").on("keydown", function search(e) {
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
            }
            else {
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

