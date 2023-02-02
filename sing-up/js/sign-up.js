// select-dog or cat
function change_img(e) {
  const btns = document.querySelectorAll(".scale-img");
  btns.forEach(function (img, i) {
    if (e.currentTarget == img) {
      img.classList.add("click-img");
    } else {
      img.classList.remove("click-img");
    }
  });
  console.log(e.currentTarget);
}



// select dog or cat -> button active


// sign-up-final
function gofinal() {
  addEventListener("click", (e) => {
    setTimeout(location.href = "sing-up-final.html",5000);
  });
}

// sign-up-login
function gologin() {
  addEventListener("click", (e) => {
    window.location = "../login/login.html";
  });
}
