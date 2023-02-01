// select-dog or cat
function change_img(e) {
  const btns = document.querySelectorAll(".scale-img");
  const clickbtns = document.querySelectorAll(".btn");
  btns.forEach(function (img, i) {
    if (e.currentTarget == img) {
      img.classList.add("click-img");
    } else {
      img.classList.remove("click-img");
    }
  });
  console.log(e.currentTarget);
}





// btn-animation
const first = document.querySelector("#first-qna");
const second = document.querySelector("#second-qna");
const third = document.querySelector("#third-qna");
const final = document.querySelector("#final");

function ani() {
  second.style.WebkitAnimation = "fadeIn 1s"; //css로
  first.style.display = "none";
  second.style.display = "block";
  third.style.display = "none";
  final.style.display = "none";
}

function ani2() {
  third.style.WebkitAnimation = "fadeIn 1s";
  first.style.display = "none";
  second.style.display = "none";
  third.style.display = "block";
  final.style.display = "none";
}

function ani3() {
  final.style.WebkitAnimation = "fadeIn 1s";
  first.style.display = "none";
  second.style.display = "none";
  third.style.display = "none";
  final.style.display = "block";
}

function gofinal() {
  addEventListener("click", (e) => {
    window.location = "sing-up-final.html";
  });
}

function goModal() {
  addEventListener("click", (e) => {
    window.location = "../practice/index.html";
  });
}


