const butt = document.querySelector('button[type="submit"]');
const mail = document.querySelector('input[name="email"]');
const contact = document.querySelector('input[name="contact"]');
const selct = document.querySelector('select[name="secQues"]');
const answerr = document.querySelector('input[name="answer"]');
const user = document.querySelector("#username");
const passw = document.querySelector("#password");

butt.addEventListener("click", function(event) {
    event.preventDefault();

    const input = document.querySelector('input[type="radio"]:checked').value;

    if(mail.value === localStorage.getItem('email')) {
        if(contact.value === localStorage.getItem('contact')) {
            if(selct.value === localStorage.getItem('secQues')) {
                if(answerr.value === localStorage.getItem('answer')) {
                    
                    let userName = `Username : ${localStorage.getItem('username')}`;
                    let passWord = `Password : ${localStorage.getItem('password')}`;
                    if(input === "Username" ) {
                        user.innerText = "";
                        passw.innerText = "";
                        user.innerText = userName;
                    }
                    else {
                        user.innerText = "";
                        passw.innerText = "";
                        passw.innerText = passWord;
                    }
                }
                else {
                    user.innerText = "Wrong Answer! Please try again.";
                    passw.innerText = "";
                }
            }
            else {
                user.innerText = "Incorrect Question!!";
                passw.innerText = "";
            }        
        }
        else {
            user.innerText = "Wrong Input. Phone Number not found!";
            passw.innerText = "";
        }
    }
    else 
    {
        user.innerText = "Wrong Input. Email not found!";
        passw.innerText = "";
    }
});