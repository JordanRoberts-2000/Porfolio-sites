const throttleDuration = 200;
const animationScrollDistance = 5;
const scrollContainer = window;

const header = document.querySelector('header');
if(!header) throw Error("Header element not found");
if(!scrollContainer) throw Error("Scroll container not valid");

const throttle = (fn, delay) => {
    let time = Date.now();
    return () => {
        if ((time + delay - Date.now()) <= 0 || scrollContainer.scrollY < animationScrollDistance) {
            fn();
            time = Date.now();
        }
    }
}

const handleScroll = () => {
    if (scrollContainer.scrollY >= animationScrollDistance) {
        header.setAttribute("header-scrolled", "");
        header.removeAttribute("header-topOfPage");
    }else{
        if(header.hasAttribute("header-scrolled")){
            header.setAttribute("header-topOfPage", "");
            header.removeAttribute("header-scrolled");
        }
    }
}

scrollContainer.addEventListener('scroll', throttle(handleScroll, throttleDuration)); 