//ACCOUNT CREATION
const form = document.querySelector("form");
const loginForm = document.querySelector("#loginForm");


    form.addEventListener("submit" , function(event){
        event.preventDefault();

        const formData = new FormData(form);

    // Iterate over the formData entries and log them
    for (const [name, value] of formData.entries()) {
        localStorage.setItem(name,value);
        
    }
    window.location.href = "index.html";
});