// --- Mobile menu toggle ---
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenuButton.classList.toggle('open');
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when a link is clicked
const mobileMenuLinks = mobileMenu.getElementsByTagName('a');
for (let link of mobileMenuLinks) {
    link.addEventListener('click', () => {
        if (!mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            mobileMenuButton.classList.remove('open');
        }
    });
}

// --- Image Lightbox Functionality ---
// Note: This script will only work for the FIRST image with id="Image".
// To make it work for all images, you should use a class instead of an ID.
const imageElements = document.querySelectorAll('#Image'); // Use querySelectorAll to get all matching images
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const closeLightbox = document.getElementById('closeLightbox');

// Function to open the lightbox
const openLightbox = (e) => {
    lightboxImage.src = e.target.src; // Set the src from the clicked image
    lightbox.classList.remove('hidden'); // Show the lightbox
};

// Add a click event listener to each image
imageElements.forEach(image => {
    image.addEventListener('click', openLightbox);
});

// Function to close the lightbox
const close = () => {
    lightbox.classList.add('hidden');
};

// Close the lightbox when the 'X' (close button) is clicked
closeLightbox.addEventListener('click', close);

// Also close the lightbox when the user clicks on the dark background area
lightbox.addEventListener('click', (e) => {
    // Check if the click was on the background itself, not the image
    if (e.target === lightbox) {
        close();
    }
});