/* HTML, CSS, and Javascript derived from:
https://udemy.com/2019-calendar-app-lets-build-it
Author Jesse Cain
Will use shorthand notation Derived from JC to represent the above source

*/

// Derived from JC
//remove class from element
function removeClass(elem, className){
    if(elem.classList.contains(className)){
        elem.classList.remove(className);
    }
}

//remove element attribute
function removeAttribute(elem, attrName){
    if(elem.hasAttribute(attrName)){
        elem.removeAttribute(attrName);
    }
}

//end of reference
