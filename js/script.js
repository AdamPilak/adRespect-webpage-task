const masonry = Macy({
    container: '.img-grid',
    mobileFirst: true,
    columns: 3,
    margin: {
        x: 10,
        y: 10
    },
    breakAt: {
        992: {
            margin: {
                x: 30,
                y: 30
            }
        },
        768: {
            margin: {
                x: 20,
                y: 20
            }
        }
    },
})

const menuIcon = document.querySelector('#menu-icon');
const nav = document.querySelector('.nav');
const realizationsSection = document.querySelector('#realizations');
const gradient = document.querySelector('.gradient');
const expandCollapseBtn = document.querySelector('#expand-collapse');

menuIcon.addEventListener('click', () => {
    nav.classList.toggle('show');
    menuIcon.classList.toggle('bx-x')
})

expandCollapseBtn.addEventListener('click', () => {
    realizationsSection.classList.add('show');
    gradient.classList.add('hide');
    expandCollapseBtn.classList.add('hide');
})