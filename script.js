document.querySelector('.right').addEventListener('click', function() {
    console.log("Right arrow clicked");
    document.querySelector('.devzur_categories-container').scrollBy({
        left: 100,
        behavior: 'smooth'
    });
});

document.querySelector('.left').addEventListener('click', function() {
    console.log("Left arrow clicked");
    document.querySelector('.devzur_categories-container').scrollBy({
        left: -100,
        behavior: 'smooth'
    });
});
