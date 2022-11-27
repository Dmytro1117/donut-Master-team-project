var input = document.getElementById('username');
input.oninvalid = function(event) {
    event.target.setCustomValidity('Введіть адекватне імя');
}