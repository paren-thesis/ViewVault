document.addEventListener('scroll', () => {
    const topic = document.querySelector('.topic');
    const content = document.querySelector('.content');
    const section = document.querySelector('.more-thumbnail');
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight - 50) {
        topic.style.opacity = '1';
        content.style.opacity = '1';
    }
});

function goToAboutUs() {
    window.location.href = 'aboutus.html';
}

function goToStart() {
    window.location.href = 'selection.html';
}
