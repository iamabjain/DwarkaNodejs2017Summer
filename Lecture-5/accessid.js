/**
 * Created by aayusharora on 6/19/17.
 */

window.onload = function () {
    var input1 = document.getElementById('input1');
    var b = document.getElementById('get');
    var value_input = document.getElementById('value');

    b.onclick = function () {

        var v = input1.value;
        value_input.innerHTML += v;

    };




};
