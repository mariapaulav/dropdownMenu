let btn_1 = document.querySelector('.dropdown_desktop_icon button')
let btn_3 = document.querySelector('.dropdown_mobile button')

btn_1.addEventListener('click', function(){
    this.classList.toggle('active')
})

btn_3.addEventListener('click', function(){
    this.classList.toggle('active')
})

