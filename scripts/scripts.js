/* scripts for use in website
 * created by mathew de vin
 */

////////////// Parallax ///////////////
///////////////////////////////////////
let parallaxElements = document.getElementsByClassName("parallax_element");
// let parallaxPage = document.querySelector(".parallax");

function parallaxCalculate(height, width, mouseY, mouseX, speedX, speedY, xOffset, yOffset) {
    return [((((height - mouseY) / height * 100) - 50) * speedY) + yOffset,
            ((((width - mouseX) / width * 100) - 50) * speedX) + xOffset];
}

function parallax(e) {
    let width = window.innerWidth;
    let height = window.innerHeight;
    let mouseX = e.clientX;
    let mouseY = e.clientY;

    if (mouseX == null && mouseY == null) {
        mouseX = width/2;
        mouseY = height/2;
    }

    if (width >= 450) {
        for (let i = 0; i < parallaxElements.length; i++) {
            let idManipulates = parallaxElements[i].id;
            idManipulates = idManipulates.split("_");
            let parallaxCalc = parallaxCalculate(height, width, mouseY, mouseX,
                                                Number(idManipulates[0]), Number(idManipulates[1]), 
                                                Number(idManipulates[2]), Number(idManipulates[3]));
            parallaxElements[i].style.transform = "translate("+ (parallaxCalc[1]) + "vw," + (parallaxCalc[0]) + "vh)";
            parallaxElements[i].style.zIndex = i.toString();
        }
    }
}
window.addEventListener("mousemove", parallax);
window.dispatchEvent(new Event("mousemove"));
////////////////////////////////////////


////////// HEADER BUTTONS /////////////
///////////////////////////////////////
let body = document.querySelector("body");
let hamburgerButton = document.querySelector(".hamburger");
let exitButton = document.querySelector(".exit_overlay");
let backToTopButton = document.querySelector(".return_top")
let headerButtons = document.querySelector(".header_buttons");

hamburgerButton.onclick = () => {
    headerButtons.style.display = "block";
    body.style.overflow = "hidden";
}
exitButton.onclick = () => {
    hideHeader();
}

let contactButton = document.querySelector(".button_contact");
let linkedinButton = document.querySelector(".button_linkedin");
let instagramButton = document.querySelector(".button_instagram");
let aboutButton = document.querySelector(".button_about");
let projectsButton = document.querySelector(".button_projects");
let githubButton = document.querySelector(".button_github")
let logo = document.querySelector(".logo");

let about = document.querySelector(".skills");
let projects = document.querySelector(".projects");
let contact = document.querySelector(".contact");

const openLink = function(link) {
    window.open(link);
}
const hideHeader = function() {
    if (window.innerWidth <= 450) {
        headerButtons.style.display = "none";
        body.style.overflow = "scroll";
    }
}

linkedinButton.onclick = () => openLink("https://www.linkedin.com/in/mathew-de-vin-705a8a198/");
instagramButton.onclick = () => openLink("https://www.instagram.com/mathew_dv/");
githubButton.onclick = () => openLink("https://github.com/MtheDV");

function _scrollTo(selector, yOffset = 0){
    const y = selector.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({top: y, behavior: 'smooth'});
}
aboutButton.onclick = () => {
    _scrollTo(about, -60);
    hideHeader();
}
contactButton.onclick = () => {
    _scrollTo(contact, -60);
    hideHeader();
}
projectsButton.onclick = () => {
    _scrollTo(projects, -60);
    hideHeader();
}
logo.onclick = () => {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
    hideHeader();
};
backToTopButton.onclick = () => {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
};

let exodusGit = document.querySelector(".exodus_git");
let exodusPlay = document.querySelector(".exodus_play");
let nececcGit = document.querySelector(".nececc_git");
let remarrkGit = document.querySelector(".remarrk_git");

exodusGit.onclick = () => {
    openLink("https://github.com/MtheDV/Exodus");
}
exodusPlay.onclick = () => {
    openLink("https://play.google.com/store/apps/details?id=com.platypi.exodus");
}
nececcGit.onclick = () => {
    openLink("https://github.com/MtheDV/ubco-cosc304-project")
}
remarrkGit.onclick = () => {
    openLink("https://github.com/JadenBalogh/remarrk")
}
///////////////////////////////////////


// SCROLL TO CHANGE PARALLAX OPACITY //
///////////////////////////////////////
window.addEventListener("scroll", () => {
    let scrollY = window.scrollY;
    let winHeight = window.innerHeight;
    // if (scrollY > winHeight/2)
    //     parallaxPage.style.opacity = "0.0";
    // else
    //     parallaxPage.style.opacity = "1.0";

    if (scrollY > winHeight/2)
        backToTopButton.style.opacity = "1.0";
    else
        backToTopButton.style.opacity = "0.0";
});
///////////////////////////////////////


///////// REMOVE FORM DATA ////////////
///////////////////////////////////////
if ( window.history.replaceState ) {
    window.history.replaceState( null, null, window.location.href );
}
///////////////////////////////////////

////// DEPRECATED GALLERY CODE ////////
///////////////////////////////////////
/*let projectsButton = document.querySelector(".button_projects");
let exitButton = document.querySelector(".gallery_exit");
let exitButtonMobile = document.querySelector(".gallery_exit_mobile");
let projectsPage = document.querySelector(".gallery");

let galleryMore = document.querySelector(".gallery_more");

function animateOutParallax() {
    parallaxPage.style.opacity = "0.5";
}

function animateOut(element) {
    element.style.opacity = "0.0";
    setTimeout(function() {
        element.style.display = "none";
    }, 350);
}
function animateIn(element, display) {
    element.style.display = display;
    setTimeout(function() {
        element.style.opacity = "1.0";
    }, 20);
}

projectsButton.onclick = function() {
    animateOutParallax();

    animateIn(projectsPage, "flex");
    pageType = 1;
}
exitButton.onclick = function() {
    animateOut(projectsPage);

    animateIn(parallaxPage, "block");
    pageType = 0;

    galleryMore.style.display = "none";
}
exitButtonMobile.onclick = function() {
    galleryMore.style.display = "none";
    for (let i = 0; i < galleryDetails.length; i++) {
        galleryDetails[i].style.display = "none";
    }

    exitButtonMobile.style.display = "none";
}

let galleryImages = document.getElementsByClassName("gallery_block");
let galleryDetails = document.getElementsByClassName("gallery_details");

window.addEventListener("click", function() {
    if (pageType == 1) {
        for (let i = 0; i < galleryImages.length; i++) {
            galleryImages[i].onclick = function() {
                if (galleryImages[i].classList.contains("link"))
                    window.location = galleryImages[i].id;
                else {
                    galleryDetails[i].style.display = "block";
                    galleryMore.style.display = "block";
                    for (let j = 0; j < galleryDetails.length; j++) {
                        if (j != i) {
                            galleryDetails[j].style.display = "none";
                        }
                    }
                    exitButtonMobile.style.display = "block";
                }
            }
        }
    }
});*/
///////////////////////////////////////
