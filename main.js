// var faceImage = document.querySelector('.face');

// window.addEventListener('scroll', function(){
//    var screenOffset = window.scrollY;
//     var faceOffset = screenOffset * 0.5; //predkosc przesuwania

//     faceImage.style.paddingTop = (faceOffset) + 'px';
    
    
// })



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
    document.querySelector('.marketing'),
    ['one', 'two'],
    3000
)