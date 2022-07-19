//header color control
window.addEventListener("scroll", () => {

    var top = Math.round(window.scrollY);
    var scrollElementRect = document.querySelector("#scroll").getBoundingClientRect();
    var scrollElement = Math.round(scrollElementRect.top);
    var navElement = document.querySelector("#vanish");
    var threshold = 50;
    var color = "bg-secondary";
    var transparent = "bg-transparent"


    if (scrollElement <= threshold) {

        navElement.classList.remove(transparent);
        navElement.classList.add(color);
        

    } else if (scrollElement > threshold) {

        navElement.classList.remove(color);
        navElement.classList.add(transparent);
        
    
    }

});

//

//header list control
var ulElement = document.querySelector("#offcanvas-text");

//check size

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

//check resizes and initiate
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

// Add a listener for when the window resizes
window.addEventListener('resize', checkMediaQuery);

//
//horizontal scroll
const scrollContainer = document.querySelector('#horizon-scroll');

scrollContainer.addEventListener('wheel', function () {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});

//
//contact submit succeed
function getVal() {
    const val = document.querySelector('#isSucceed').value;
    console.log(val);
  }