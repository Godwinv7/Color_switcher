const buttons = document.querySelectorAll(".button"); //it is used for selecting all buttons
const body = document.querySelector("body"); //it is used for changing the color of the body
buttons.forEach(function (changeColor) {
  changeColor.addEventListener('click', function (event) {
    console.log(event);
    console.log(event.target);
    if (event.target.id === "red") {
      body.style.backgroundColor = event.target.id;
    }
    if(event.target.id==='green'){
        body.style.backgroundColor=event.target.id;
    }
    if(event.target.id==="blue"){
        body.style.backgroundColor=event.target.id;
    }
    if(event.target.id==='orange'){
        body.style.backgroundColor=event.target.id;

    }
    if(event.target.id==="purple"){
        body.style.backgroundColor='purple'
    }
    if(event.target.id==="violet"){
        body.style.backgroundColor='violet'
    }

  });
});

