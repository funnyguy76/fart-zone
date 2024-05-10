let drums;
let farts;
let drumsMap;

window.onload = function() {
    drums = document.querySelectorAll(".drum");
    farts = new Map();
    drumsMap = new Map();
    for (let i = 0; i < drums.length; i++) {
        let letter = drums[i].textContent.toLowerCase();
        drumsMap.set(letter, drums[i]);
        farts.set(letter, new Audio("./public/assets/sounds/"+letter+".mp3"));
    }
    for (let i = 0; i < drums.length; i++) {
        drums[i].addEventListener("click", function(event) {
            let letter = event.currentTarget.textContent.toLowerCase();
            playSound(letter);
        });
    }
    window.addEventListener("keydown", function(event) {
        let letter = event.key.toLowerCase()
        playSound(letter);
    });
}

function playSound(letter) {
    farts.get(letter).play();
    drumsMap.get(letter).classList.add("drum-pressed");
    setTimeout(function() {
        drumsMap.get(letter).classList.remove("drum-pressed");
    }, 300);
}