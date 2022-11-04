const burger = document.querySelector('.burger');
const drop = document.querySelector('.menu');

const tabs = document.querySelectorAll('.tab-toggle');
const contents = document.querySelectorAll('.step-content');

burger.addEventListener('click', () => {

    drop.classList.toggle('active');
})


tabs.forEach((tab, index) => {

    tab.addEventListener('click', () => {
        
        contents.forEach( content => {

            content.classList.remove('is-active');
        });

        tabs.forEach( tab => {

            tab.classList.remove('is-active');
        });

        contents[index].classList.add('is-active');
        tabs[index].classList.add('is-active');

    })
})