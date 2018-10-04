var faceImage = document.querySelector('.face');

window.addEventListener('scroll', function(){
   var screenOffset = window.scrollY;
    var faceOffset = screenOffset * 0.5; //predkosc przesuwania

    faceImage.style.paddingTop = (faceOffset) + 'px';
    
    
})

