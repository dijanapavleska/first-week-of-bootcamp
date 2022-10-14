let theButton = document.getElementById('theButton');//so that your javascript file knows which of your HTML elements to work with, getElementById because "theButton" is an ID in HTML
let theText = document.querySelectorAll('.the-text'); //querySelector and not ID because .the-text is a class in HTML
//give the button an onclick function   
theButton.onclick = function () { 
    for(let x of theText) {
        x.classList.toggle('toggled');
    }
}; 