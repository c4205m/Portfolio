//
//HEADER CONTROLS
//
//HEADER CONTROL -OPACITY AND COLOR

var navElement = document.querySelector("#vanish");
var headerThreshold = 50;
var color = "bg-dark";
var transparent = "bg-transparent"

//Check position and initialize
window.addEventListener("scroll", () => {

    var scrollElementRect = document.querySelector("#scroll").getBoundingClientRect();
    var scrollElement = Math.round(scrollElementRect.top);

    if (scrollElement <= headerThreshold) {

        navElement.classList.remove(transparent);
        navElement.classList.add(color);
    
    } else if (scrollElement > headerThreshold) {

        navElement.classList.remove(color);
        navElement.classList.add(transparent);
        
    }

});

//Check position
var scrollElementRectS = document.querySelector("#scroll").getBoundingClientRect();
var scrollElementS = Math.round(scrollElementRectS.top);

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
};

//
//JUMP TO TOP
//

//Show hidden element

const showOnPx = 500;
const backToTopButton = document.querySelector(".back-to-top");

const scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {

        backToTopButton.classList.remove("cus_hidden");

    } else {

        backToTopButton.classList.add("cus_hidden");
  
    }
});

//

const goToTop = () => {
    document.body.scrollIntoView({
      behavior: "smooth",
    });
  };

backToTopButton.addEventListener("click", goToTop);

//
// AUTOPAUSE VIDEO
//

if(!!window.IntersectionObserver){
	let video = document.querySelector('video');
	let isPaused = false; /* flag for auto-pausing of the video */
	let observer = new IntersectionObserver((entries, observer) => { 
		entries.forEach(entry => {
			if(entry.intersectionRatio!=1  && !video.paused){
				video.pause(); isPaused = true;
			}
			else if(isPaused) {
                video.play(); isPaused=false;
            }

		});
	}, {threshold: 1});
	observer.observe(video) ;
}

//
//FORM CLEAN ON REFRESH
//
function resetForm() {
    
    document.getElementById('firstName').value ='';
    document.getElementById('lastName').value ='';
    document.getElementById('emailInfo').value ='';
    document.getElementById('phoneNumber').value ='';
    document.getElementById('comments').value ='';

};

window.onload = resetForm;