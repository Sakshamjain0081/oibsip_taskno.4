let login_button=document.querySelector(".login-btn"),
form_content=document.querySelector(".form-content"),
login_form=document.querySelector(".login-form"),
loginclosebtn=document.querySelector(".login-icon-close"),
registerclosebtn=document.querySelector(".register-icon-close"),
signupbtn=document.querySelector("#signup"),
registration_form=document.querySelector(".registration-form"),
signinbtn=document.querySelector("#signin");

login_button.addEventListener("click",function () {
    login_form.classList.add("show");
    registration_form.classList.remove("openregisteration");
})

loginclosebtn.addEventListener("click",function () {
    login_form.classList.remove("show");
})

signupbtn.addEventListener("click",function () {
    login_form.classList.remove("show");
    registration_form.classList.add("openregisteration");
})

registerclosebtn.addEventListener("click",function () {
    registration_form.classList.remove("openregisteration");
})

signinbtn.addEventListener("click",function () {
    registration_form.classList.remove("openregisteration");
    login_form.classList.add("show");
})