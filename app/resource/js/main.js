document.body.classList.remove('no-js');
document.body.classList.add('js-enabled');

handleContactForm();
handleBurgerMenu();
handleSkillsGraph();

function handleContactForm() {
    const contactBtns = document.querySelectorAll('.showContact');
    const closeBtn = document.querySelector('.contact__close');
    const moreInfosBtn = document.querySelector('.contact__expander-link');
    const moreInfosContainer = document.querySelector('.contact__container');
    const moreInfosText = document.querySelector('.contact__expander-text');
    const anchors = document.querySelectorAll('.contact__anchor');
    const contactProgress = document.querySelector('.contact__progress');

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

    anchors.forEach((anchor) => {
        if (anchor.classList.contains('contact__anchor--active')) {
            contactProgress.style.transform = `scaleX(${0.5 * anchor.dataset.number})` ;
        }
    })
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

function handleSkillsGraph() {
    const skillsItems = document.querySelectorAll('.skills__item');
    const skillsBars = document.querySelectorAll('.skills__bar');
    const skillsBarsGray = document.querySelectorAll('.skills__bar--gray');

    skillsItems.forEach((item, index) => {
        item.addEventListener('click', (e) => {
            skillsBars[index].classList.add('animated');
            skillsBarsGray[index].addEventListener('animationend', (e) => {
                skillsBars[index].classList.remove('animated');
            })
        })

        item.addEventListener('mouseenter', (e) => {
            skillsBars[index].classList.add('hovered');
        })

        item.addEventListener('mouseleave', (e) => {
            skillsBars[index].classList.remove('hovered');
        })
    })
}