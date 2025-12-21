// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize Facebook SDK
window.fbAsyncInit = function() {
    FB.init({
        appId: '', // You'll need to add your Facebook App ID if using Graph API
        xfbml: true,
        version: 'v18.0'
    });
};

// Check if Facebook Page Plugin loaded, show fallback if not
setTimeout(() => {
    const fbPage = document.querySelector('.fb-page');
    if (fbPage && fbPage.querySelector('iframe')) {
        // Facebook embed loaded successfully
        console.log('Facebook embed loaded');
    } else {
        // Show fallback button if embed doesn't load
        const fallback = document.querySelector('.fb-fallback');
        if (fallback) {
            fallback.style.display = 'block';
        }
    }
}, 3000);

// Add loading state
document.addEventListener('DOMContentLoaded', function() {
    // Add any additional initialization here
    console.log('Tim Mason Pro Tools website loaded');
});

