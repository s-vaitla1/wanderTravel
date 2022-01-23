//Image Slider Functionality
const slideShowImages = document.querySelectorAll('.slideshow__img')
const nextBtn = document.querySelector('.next')
const backBtn = document.querySelector('.back')

let activeImage = 0 

nextBtn.addEventListener('click', () => {
    activeImage++
    if(activeImage > slideShowImages.length -1){
        activeImage = 0
    }
    setActiveImage()
})

backBtn.addEventListener('click', () => {
    activeImage--
    if(activeImage < 0){
        activeImage = slideShowImages.length -1
    }
    setActiveImage()
})

const setActiveImage = () => {
    slideShowImages.forEach(slideShowImage => {
        slideShowImage.classList.remove('active')
    })
    slideShowImages[activeImage].classList.add('active')
}
