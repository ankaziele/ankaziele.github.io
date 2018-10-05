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

//about me carousel

var previousButton = document.querySelector('.features-prevoius-button');
var nextButton = document.querySelector('.features-next-button');
var navigation = document.querySelector('.about-navigation');

nextButton.addEventListener('click', function(){
    clearInterval(intervalId);
    activateNextSlide()
});
previousButton.addEventListener('click', function(){
    clearInterval(intervalId);
    activatePreviousSlide()
});

var intervalId = setInterval(function(){
    activateNextSlide()
}, 2000);

function activateNextSlide(){
    var element = document.querySelector('.features div:first-child');
    element.parentElement.appendChild(element);

    var current = navigation.querySelector('active');
    var next = current.nextElementSibling || navigation.querySelector('span');

    current.classList.remove('active');
    next.classList.add('active');
}


function activatePreviousSlide() {
  var element = document.querySelector('.features div:last-child');
  element.parentElement.prepend(element);

  var current = navigation.querySelector('.active');
  var previous = current.previousElementSibling || navigation.querySelector('span:last-child');

  current.classList.remove('active');
  previous.classList.add('active');
}