    const id = document.getElementById('id')
    const pw = document.getElementById('pw')
    const btn = document.getElementById('btn')

    btn.addEventListener('click', () => {
        if(id.value === "") {
            label = id.nextElementSibling
            label.classList.add('warning')
            setTimeout(() => {
                label.classList.remove('warning')
            }, 1500)
        } else if(pw.value === "") {
            label = pw.nextElementSibling
            label.classList.add('warning')
               setTimeout(() => {
                label.classList.remove('warning')
            }, 1500)
        }
    })

    console.log(id.value);



    const Icon = document.getElementById('naverIcon');

    function mouseover() {
        Icon.setAttribute("src","/images/naver-white.png");
    }
    
    function mouseleave() {
        Icon.setAttribute("src","/images/icon-naver01.png");
    }        