const butt = document.querySelector('button[type="submit"]');
const mail = document.querySelector('input[name="email"]');
const contact = document.querySelector('input[name="contact"]');
//const selct = document.querySelectorAll("select");
//const answer = document.querySelector('input[name="secQues"]');
const user = document.querySelector("#username");
const passw = document.querySelector("#password");

butt.addEventListener("click", function(event) {
    event.preventDefault();

    const input = document.querySelector('input[type="radio"]:checked').value;
    console.log(input);

    if(mail.value === localStorage.getItem('email')) {
        if(contact.value === localStorage.getItem('contact')) {
            //if(selct.value === localStorage.getItem('select')) {
                //if(answer.value === localStorage.getItem('answer')) {
                    
                    let userName = `Username : ${localStorage.getItem('username')}`;
                    let passWord = `Password : ${localStorage.getItem('password')}`;
    
                    user.innerText = userName;
                    passw.innerText = passWord;
        }
        else {
            user.innerText = "Wrong Input!";
            passw.innerText = "";
        }
    }
    else 
    {
        user.innerText = "Wrong Input!";
        passw.innerText = "";
    }
});