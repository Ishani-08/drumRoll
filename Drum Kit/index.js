for (var i = 0; i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click", handleClick);
}


function handleClick(){
    click (this.innerHTML); 
    buttonAnimation(this.innerHTML);
}

// can also be written like this
// document.querySelector("button")[i].addEventListener("click", function(){
//     alert("I got clicked");
// });


document.addEventListener("keydown",function(event){      //event gives the key that was pressed , the key tells us which key
    click(event.key);
    buttonAnimation(event.key);
})


function click(stroke){
    switch (stroke) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break; 
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break; 
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break; 
        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break; 
        case "k":
            var kickBass = new Audio('sounds/kick-bass.mp3');
            kickBass.play();
            break; 
        case "l":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break; 
        default:
            break;
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
    activeButton.classList.remove("pressed");
    }, 100)
}


