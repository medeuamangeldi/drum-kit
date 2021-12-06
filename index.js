for (var i=0; i<document.querySelectorAll("button").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function (){
        // document.querySelectorAll("button")[i].innerHTML = "I got clicked";
        // document.querySelectorAll("button")[i].style.fontSize = "1.1rem";
    
        makeSound(this.innerHTML);
        clickAnimation(this.innerHTML);
    });
}

document.addEventListener("keydown", function (event){
    makeSound(event.key);
    clickAnimation(event.key);
})

function makeSound(character) {
    switch (character) {
        case "w":
            var crash = new Audio("crash.mp3");
            crash.play()
            break;
        case "a":
            var kick = new Audio("kick-bass.mp3");
            kick.play()
            break;
        case "s":
            var snare = new Audio("snare.mp3");
            snare.play()
            break;
        case "d":
            var tom1 = new Audio("tom-1.mp3");
            tom1.play()
            break;
        case "j":
                var tom2 = new Audio("tom-2.mp3");
                tom2.play()
                break;
        case "k":
            var tom3 = new Audio("tom-3.mp3");
            tom3.play()
            break;
        case "l":
            var tom4 = new Audio("tom-4.mp3");
            tom4.play()
            break;
        default:
            alert("This sound doesn't exist")
            break;
    }
}

function clickAnimation (eventHappened) {
    var buttonPressed = document.querySelector("." + eventHappened);
    buttonPressed.classList.add("pressed");

    var delayIn = 100; //0.1 seconds

    setTimeout(function() {
        buttonPressed.classList.remove("pressed");
    }, delayIn);

    
}
