//
//HEADER CONTROLS
//
//HEADER CONTROL -OPACITY AND COLOR

var navElement = document.querySelector("#vanish");
var threshold = 50;
var color = "bg-secondary";
var transparent = "bg-transparent"

//Check position and initialize
window.addEventListener("scroll", () => {

    var scrollElementRect = document.querySelector("#scroll").getBoundingClientRect();
    var scrollElement = Math.round(scrollElementRect.top);

    if (scrollElement <= threshold) {

        navElement.classList.remove(transparent);
        navElement.classList.add(color);
    
    } else if (scrollElement > threshold) {

        navElement.classList.remove(color);
        navElement.classList.add(transparent);
        
    }

});

//Check position
var scrollElementRectS = document.querySelector("#scroll").getBoundingClientRect();
var scrollElementS = Math.round(scrollElementRectS.top);
console.log(scrollElementS);

function startingPosition () {

    if (scrollElementS <= 0) {

        navElement.classList.remove(transparent);
        navElement.classList.add(color);
    
    } else if (scrollElementS > 0) {
    
        navElement.classList.remove(color);
        navElement.classList.add(transparent);
        
    }
}

window.onload = startingPosition;

//HEADER LIST SIZE CONTROL
var ulElement = document.querySelector("#offcanvas-text");

//Check size

const mediaQuery = window.matchMedia('(max-width: 992px)')

// Check if the media query is true
if (mediaQuery.matches) {

    ulElement.classList.add(
        "text-center",
        "position-absolute",
        "top-50",
        "start-50",
        "translate-middle",
        "fs-1");

}

//Check resizes and initiate
function checkMediaQuery() {
  
    // Check if the media query is true
  if (window.innerWidth <= 992) {
    
    // Then log the following message to the console
        ulElement.classList.add(
            "text-center",
            "position-absolute",
            "top-50",
            "start-50",
            "translate-middle",
            "fs-1");
  
    } else {

        ulElement.classList.remove(
            "text-center",
            "position-absolute",
            "top-50",
            "start-50",
            "translate-middle",
            "fs-1");
  }
}

window.addEventListener('resize', checkMediaQuery);

//
//FORM VALIDATION
//

const inputs = document.querySelectorAll('input');

const patterns = {
    firstName: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïıłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
//   username: /^[a-z\d]{2,12}$/i,
//   password: /^[\d\w@-]{8,20}$/i,
    emailInfo: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    phoneNumber: /^\+(?:[0-9] ?){6,14}[0-9]$/
};

inputs.forEach((input) => {
    input.addEventListener('keyup', (event) => {
    
        validate(event.target, patterns[event.target.attributes.id.value]);

    });
});

function validate(field, regex) {
  if (regex.test(field.value)) {
    
    field.className = 'form-control valid';

  } else {
    
    field.className = 'form-control invalid';

  }
}

//
//FORM CLEAN ON REFRESH
//

    document.getElementById('firstName').value ='';
    document.getElementById('lastName').value ='';
    document.getElementById('emailInfo').value ='';
    document.getElementById('phoneNumber').value ='';
    document.getElementById('comments').value ='';
