//LOGIN
const form2 = document.querySelector("#loginForm");
const username = document.querySelector("#userName");
const spell = document.querySelector("#spell");

let user = localStorage.getItem('username');
let pass = localStorage.getItem('password');


form2.addEventListener("submit", function(event) {
    event.preventDefault();

    if(username.value === user && spell.value === pass) {
    let bhaalu = localStorage.getItem('contact');
    console.log(bhaalu);
}
username.value = "";
spell.value = "";
});