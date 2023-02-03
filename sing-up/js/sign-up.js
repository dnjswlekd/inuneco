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
  // console.log(e.currentTarget);
}



// sign-up-final
function gofinal() {
  addEventListener("click", (e) => {
    location.href = "sing-up-final.html";
  });
}

// sign-up-login
function gologin() {
  addEventListener("click", (e) => {
    window.location = "../login/login.html";
  });
}



// dog or cat 이미지 누르면 버튼 색 나와야함
