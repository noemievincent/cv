document.body.classList.remove('no-js');
document.body.classList.add('js-enabled');

handleContactForm();
handleBurgerMenu();

function handleContactForm() {
    const contactBtns = document.querySelectorAll('.showContact');
    const closeBtn = document.querySelector('.contact__close');
    const moreInfosBtn = document.querySelector('.contact__expander-link');
    const moreInfosContainer = document.querySelector('.contact__container');
    const moreInfosText = document.querySelector('.contact__expander-text');

    moreInfosBtn.addEventListener('click', (e) => {
        moreInfosContainer.classList.toggle('contact__expander--expanded');
        [moreInfosText.textContent, moreInfosText.dataset.text] = [moreInfosText.dataset.text, moreInfosText.textContent];
    })

    contactBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            document.body.classList.add('contact--show');
        });
    });

    closeBtn.addEventListener('click', (e) => {
        document.body.classList.remove('contact--show');
    });
}

function handleBurgerMenu() {
    const openMenuCheckbox = document.querySelector(".toggle");
    const menuItems = document.querySelectorAll(".nav__link");

    openMenuCheckbox.addEventListener('change', (e) => {
        document.body.classList.toggle('header--expanded');
    })

    menuItems.forEach((menuItem) => {
        menuItem.addEventListener('click', (e) => {
            openMenuCheckbox.checked = false;
        })
    })
}