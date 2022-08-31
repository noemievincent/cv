document.body.classList.remove('no-js');
document.body.classList.add('js-enabled');

displayContactForm();
handleContactForm();
handleBurgerMenu();
handleSkillsGraph();
// handleSlider();

function displayContactForm() {
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

function handleContactForm() {
    const anchors = document.querySelectorAll('.contact__anchor');
    const contactProgress = document.querySelector('.contact__progress');
    const contactDiv = document.querySelector('.contact__bottom');
    const contactSubs = document.querySelectorAll('.contact__sub');
    const formGroups = document.querySelectorAll('.form__group');
    const prevBtn = document.querySelector('.form__control--prev');
    const nextBtn = document.querySelector('.form__control--next');
    const submitBtn = document.querySelector('.form__control--submit');

    anchors.forEach((anchor) => {
        if (anchor.classList.contains('contact__anchor--active')) {
            contactProgress.style.transform = `scaleX(${0.5 * anchor.dataset.number})` ;
        }

        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            anchors.forEach((a) => {
                a.classList.toggle('contact__anchor--active');
            })

            formGroups.forEach((group, index) => {
                group.classList.toggle('form__group--hidden');
                group.classList.toggle('form__group--visible');
            })

            if (formGroups[0].classList.contains('form__group--visible')) {
                prevBtn.classList.add('form__control--disabled');
                nextBtn.classList.remove('form__control--hidden');
                submitBtn.classList.add('form__control--hidden');
            } if (formGroups[1].classList.contains('form__group--visible')) {
                prevBtn.classList.remove('form__control--disabled');
                nextBtn.classList.add('form__control--hidden');
                submitBtn.classList.remove('form__control--hidden');
            }

            contactSubs.forEach((sub, index) => {
                sub.classList.toggle('contact__sub--hidden');
            })
        })
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

    skillsItems.forEach((item, i) => {
        item.addEventListener('click', (e) => {
            skillsBars[i].classList.add('animated');
            skillsBarsGray[i].addEventListener('animationend', (e) => {
                skillsBars[i].classList.remove('animated');
            })
        })

        item.addEventListener('mouseenter', (e) => {
            skillsBars[i].classList.add('hovered');
        })

        item.addEventListener('mouseleave', (e) => {
            skillsBars[i].classList.remove('hovered');
        })
    })
}

function handleSlider() {
    const controls = document.querySelectorAll('.exp__control');
    const items = document.querySelectorAll('.exp__item');

    controls.forEach((control, i) => {
        control.addEventListener('click', (e) => {
            e.preventDefault();

            items.forEach((item) => {
                item.classList.add('animated');
                item.classList.toggle('exp__item--show');
                item.classList.toggle('exp__item--next');

                item.addEventListener('animationend', (e) => {
                    item.classList.remove('animated');
                })
            })
        })
    })
}