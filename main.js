var faceImage = document.querySelector('.banner-container');

window.addEventListener('scroll', function(){
   var screenOffset = window.scrollY;
    var faceOffset = screenOffset * 0.7; //predkosc przesuwania

    faceImage.style.marginLeft = (faceOffset) + 'px';
    
    
})



function toggleClasses(element, classes, time){
    var index = 0;
    setInterval(function(){
        element.classList.remove(
            index !== 0 ? 
            classes[index-1] : classes[classes.length-1]
        );
        element.classList.add(classes[index]);
        index = (index + 1) % classes.length
    }, time)
}

toggleClasses(
    document.querySelector('.code'),
    ['one', 'two'],
    3000
)

var slideIndex = 1;
        
showImage(slideIndex);
function showImage(n) {
    var slide = document.getElementsByClassName('slides');
    var dots = document.getElementsByClassName('dots');
    
    if (n > slide.length) { slideIndex = 1 };

    if (n < 1) { slideIndex = slide.length };
    for(var i = 0; i < slide.length; i++){
        slide[i].style.display = 'none'
    }
    
    slide[slideIndex - 1].style.display = "block";
    for(var i = 0; i < slide.length; i++){
        dots[i].className = dots[i].className.replace(' active', '')
    }
    dots[slideIndex -1].className += ' active';

}

function plusIndex(n){
    showImage(slideIndex += n);
}

function currentSlide(n){
    showImage(slideIndex = n);
}