let numberOfButtons = document.querySelectorAll(".drum").length;

for(let i = 0; i < numberOfButtons; i++){
  document.querySelectorAll(".drum") [i].addEventListener("click", function (event) {
    //play audio
    let buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    //show animation
    buttonAnimation(buttonInnerHtml);
});
}

document.addEventListener("keypress", function (event){
  makeSound(event.key); //play audio

  //shadow animation
});

function makeSound(key) {
  switch (key) {
    case "w":
      //play audio for w
      let tom1 = new Audio('sounds/tom-1 (1).mp3');
      tom1.play();
      break;
    case "a":
      //play audio for a
      let tom2 = new Audio('sounds/tom-2 (1).mp3');
      tom2.play();
      break;
    case "s":
      //play audio for s
      let tom3 = new Audio('sounds/tom-3 (1).mp3');
      tom3.play();
      break;
    case "d":
      //play audio for d
      let tom4 = new Audio('sounds/tom-4 (1).mp3');
      tom4.play();
      break;
    case "j":
      //play audio for j
      let snare = new Audio('sounds/snare (1).mp3');
      snare.play();
      break;
    case "k":
      //play audio for k
      let crash = new Audio('sounds/crash (1).mp3');
      crash.play();
      break;
    case "l":
      //play audio for l
      let kick = new Audio('sounds/kick-bass (1).mp3');
      kick.play();
      break;
  }
}

function buttonAnimation(key) {
  let activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100)

}
