// setup date
const date = (document.getElementById(
  "date"
).innerHTML = new Date().getFullYear());
// setup nav
const navBtn = document.getElementById("nav-btn");
const navbar = document.getElementById("navbar");
const navClose = document.getElementById("nav-close");
// show nav
navBtn.addEventListener("click", () => {
  navbar.classList.add("showNav");
});
// close nav
navClose.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});

// Send emails using email SMTP



function SendMail(){

  var params = {
    form_name: document.getElementById("fullName").value,
    email_id: document.getElementById("email").value,
    message: document.getElementById("message").value

    

  }
  emailjs.send("service_tmreftr","template_ajyfmfq", params).then(function(res){
    alert("Success", res.status);
  })
}



