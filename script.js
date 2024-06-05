document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-ul li a");
    const checkBox = document.getElementById("check");

    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            checkBox.checked = false; // Uncheck the checkbox to close the menu
        });
    });
});



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


document.addEventListener("DOMContentLoaded", function() {
    // Attach click event listener to all anchor tags with href starting with #
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function(e) {
        e.preventDefault(); // Prevent default anchor click behavior
  
        const targetId = this.getAttribute("href").substring(1); // Get the target ID from the href attribute
        const targetElement = document.getElementById(targetId); // Find the target element
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop, // Scroll to the top offset of the target element
            behavior: "smooth" // Enable smooth scrolling
          });
        }
      });
    });
  });
  


  document.addEventListener("DOMContentLoaded", function() {
    // Get all info icons
    var infoIcons = document.querySelectorAll(".devzur_menu-item-info");
  
    // Add click event listener to each info icon
    infoIcons.forEach(function(icon) {
      icon.addEventListener("click", function() {
        // Toggle active class to show/hide tooltip
        this.classList.toggle("active");
      });
    });
  });
  