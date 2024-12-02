function menuShow() {
    let menuMobile = document.querySelector('.mobile_menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.mobile-icon').src = "assets/menu.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.mobile-icon').src = "assets/close.svg";
    }
}