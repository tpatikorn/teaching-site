// Global shared navigation & Google Translate helper script
document.addEventListener('DOMContentLoaded', () => {
    // Theme Preference initialization
    const savedTheme = localStorage.getItem('site-theme') || 'dark';
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
    }

    // Toggle theme function
    window.toggleTheme = function() {
        const isLight = document.body.classList.toggle('light-mode');
        localStorage.setItem('site-theme', isLight ? 'light' : 'dark');
        const themeBtnText = document.getElementById('theme-toggle-text');
        if (themeBtnText) {
            themeBtnText.textContent = isLight ? '🌙 Dark Mode' : '☀️ Light Mode';
        }
    };
});

// Google Translate Element Init Function
window.googleTranslateElementInit = function() {
    if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement({
            pageLanguage: 'en',
            includedLanguages: 'th,en',
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false
        }, 'google_translate_element');
    }
};

// Function to trigger Google Translate page translation to Thai
window.translateToThai = function() {
    let gtDiv = document.getElementById('google_translate_element');
    if (!gtDiv) {
        gtDiv = document.createElement('div');
        gtDiv.id = 'google_translate_element';
        gtDiv.style.position = 'fixed';
        gtDiv.style.bottom = '10px';
        gtDiv.style.right = '10px';
        gtDiv.style.zIndex = '9999';
        document.body.appendChild(gtDiv);
    }

    if (!document.getElementById('google-translate-script')) {
        const gtScript = document.createElement('script');
        gtScript.id = 'google-translate-script';
        gtScript.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        document.body.appendChild(gtScript);
    }

    const checkCombo = setInterval(() => {
        const select = document.querySelector('.goog-te-combo');
        if (select) {
            clearInterval(checkCombo);
            select.value = 'th';
            select.dispatchEvent(new Event('change'));
        }
    }, 300);

    setTimeout(() => clearInterval(checkCombo), 5000);
};
