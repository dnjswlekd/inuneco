
// select-dog or cat
function change_img(e) {
  var btns = document.querySelectorAll(".scale-img");
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
const first = document.querySelector('#first-qna');
const second = document.querySelector('#second-qna');
const third = document.querySelector('#third-qna');
const final = document.querySelector('#final');



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
  addEventListener('click', e=> {
    window.location = 'http://127.0.0.1:5500/sing-up/sing-up-final.html'
  })
}

// forEach 사용해서 반복문 만들어보기

  






// progressbar
// const progress = document.getElementById("progress")
// const next = document.getElementById("next")
// const circles = document.getElementById("btn")

// let currentActive = 1;

// next.addEventListener('click', ()=> {
//   currentActive++;
  
//   if(currentActive > circles.length) {
//     currentActive = circles.lenght;
//   }
//   update();
// });

// function update() {
//   circles.forEach((circle, idx) => {
//     if (idx < currentActive) {
//       circle.classList.add("active");
//     } else {
//       circle.classList.remove("active");
//     }
//   });
//   const actives = document.querySelectorAll('.active')

// }

