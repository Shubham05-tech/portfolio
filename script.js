
// MOBILE NAVIGATION

const menu = document.getElementById('menu');
const nav = document.getElementById('navLinks');

if (menu && nav) {

    menu.addEventListener('click', () => {

        const open = nav.classList.toggle('open');

        menu.setAttribute('aria-expanded', String(open));

    });

    nav.querySelectorAll('a').forEach(link => {

        link.addEventListener('click', () => {

            nav.classList.remove('open');

            menu.setAttribute('aria-expanded', 'false');

        });

    });

}


// SCROLL REVEAL ANIMATION

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add('visible');

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.12
});

document.querySelectorAll('.reveal').forEach(element => {

    observer.observe(element);

});


// PROJECT FILTERS

document.querySelectorAll('.filters button').forEach(button => {

    button.addEventListener('click', () => {

        document.querySelectorAll('.filters button').forEach(btn => {

            btn.classList.remove('active');

        });

        button.classList.add('active');

        const filter = button.dataset.filter;

        document.querySelectorAll('.project').forEach(card => {

            const categories = (card.dataset.cat || '').split(' ');

            const show = filter === 'all' || categories.includes(filter);

            card.classList.toggle('hide', !show);

        });

    });

});


// SCROLL PROGRESS BAR

const progress = document.getElementById('progress');

window.addEventListener('scroll', () => {

    const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

    const percentage = maxScroll > 0
        ? (window.scrollY / maxScroll) * 100
        : 0;

    if (progress) {

        progress.style.width = percentage + '%';

    }

}, {
    passive: true
});


// CURRENT YEAR

const year = document.getElementById('year');

if (year) {

    year.textContent = new Date().getFullYear();

}


// ROTATING PROFESSIONAL TITLE

const role = document.getElementById('role');

const roles = [
    'Power BI Developer',
    'Python & SQL Learner',
    'Data Visualization Enthusiast'
];

let index = 0;

setInterval(() => {

    if (role) {

        index = (index + 1) % roles.length;

        role.textContent = roles[index];

    }

}, 2800);
