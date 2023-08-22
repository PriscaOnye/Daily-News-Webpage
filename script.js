const openButton = document.getElementById("menuButton");
const closeButton = document.getElementById("closeButton");
const sideMenu = document.getElementById("sideNav");

openButton.addEventListener('click', function () {
    sideMenu.style.width = "250px";
});

closeButton.addEventListener('click', function () {
    sideMenu.style.width = "0";
});



document.addEventListener('DOMContentLoaded', () => {
    const cardContents = document.querySelectorAll('.card-content');

        // Add the "expanded" class to the first card on page load
        cardContents[0].classList.add('expanded');

    cardContents.forEach((cardContent, index) => {
        const tagContent = cardContent.querySelector('.tag-content');
        const textContent = cardContent.querySelector('#details');

        cardContent.addEventListener('click', () => {
            cardContents.forEach(c => {
                c.classList.remove('expanded');
                c.querySelector('#details').style.display = 'none';
                c.querySelector('.tag-content').style.display = 'block';
            });

            cardContent.classList.add('expanded');
            textContent.style.display = 'block';
            tagContent.style.display = 'block';
        });
    });
});



