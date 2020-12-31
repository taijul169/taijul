const errorMsg = document.getElementById("error-msg");
const formLoader = document.getElementById("form-loader");
const successMsg = document.getElementById("nameDisplay");
const dataForm = document.getElementById("formData");
const successMsgBox = document.getElementById("successMsgBox");
const bgMusk = document.getElementById("bg-musk");
// form-data-initialization
const firstName = document.getElementById("firstName");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const submitBtn = document.getElementById("submitBtn");
const loadingArea = document.getElementById("loadingArea");
const errorMsgBox = document.getElementById("errorMsgBox");
submitBtn.addEventListener("click", (e) => {
  disLoader();
  setTimeout(() => {
    hideLoader();
    checkField();
  }, 3000);

  e.preventDefault();
});
// show-loader
function disLoader() {
  loadingArea.style = "display:block";
}
// hide-loader
function hideLoader() {
  loadingArea.style = "display:none";
}
// hide-success msg
function hideLoader() {
  loadingArea.style = "display:none";
}

// form-validation
function checkField() {
  if (firstName.value === "") {
    errorMsgBox.innerText = "Please enter your name!!.";
    errorMsgBox.style = "display:block";   
  }
  else if (email.value === "") {
      errorMsgBox.innerText = "Please enter Email Address!!.";
    errorMsgBox.style = "display:block";
  } else if (subject.value === "") {
      errorMsgBox.innerText = "Please enter your Subject!!.";
    
    errorMsgBox.style = "display:block";
  }  else if (message.value === "") {
      errorMsgBox.innerText = "Please write something on Message field!!";
     errorMsgBox.style = "display:block";
  } else {
    errorMsgBox.innerText =`${firstName.value} Your Message has been successfully sent.` ;
    errorMsgBox.style = "color:green;";
    errorMsgBox.style = "display:block";
  }
}
