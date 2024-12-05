function menuShow() {
    let menuMobile = document.querySelector('.mobile_menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.mobile-icon').src = "assets/people.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.mobile-icon').src = "assets/close.svg";
    }
}

function menuShow2() {
    let menuMobile2 = document.querySelector('.mobile_menu2');
    if (menuMobile2.classList.contains('open')) {
        menuMobile2.classList.remove('open');
        document.querySelector('.mobile-icon2').src = "assets/menu.svg";
    } else {
        menuMobile2.classList.add('open');
        document.querySelector('.mobile-icon2').src = "assets/close.svg";
    } 
}