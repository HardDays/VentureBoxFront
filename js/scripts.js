// Empty JS for your own code to be here
var TOKEN = '';
if (localStorage.getItem('token')) {
    TOKEN = localStorage.getItem('token');
}

setUserOnHeader();

function setUserOnHeader() {
    if (TOKEN) {
        $('#login-block').css({'display':'none'});
        $('#username-block').css({'display':'block'});
        var user = JSON.parse(localStorage.getItem('user'));
        $('#username-text').text(user.name + " " + user.surname);
    }
}