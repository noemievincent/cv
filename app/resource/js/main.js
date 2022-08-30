document.body.classList.remove('no-js');
document.body.classList.add('js-enabled');

handleContactForm();
handleBurgerMenu();

function handleContactForm() {
    const contactBtns = document.querySelectorAll('.showContact');
    const closeBtn = document.querySelector('.contact__close');
    const openMenuCheckbox = document.querySelector(".toggle");

    contactBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            document.body.classList.add('contact--show');
            if (openMenuCheckbox.checked) {
                openMenuCheckbox.checked = false;
            }
        });
    });

    closeBtn.addEventListener('click', (e) => {
        document.body.classList.remove('contact--show');
    });
}

function handleBurgerMenu() {
    const openMenuCheckbox = document.querySelector(".toggle");
    const menuItems = document.querySelectorAll(".nav__link");

    menuItems.forEach((menuItem) => {
        menuItem.addEventListener('click', (e) => {
            openMenuCheckbox.checked = false;
        })
    })
}