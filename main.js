document.addEventListener('DOMContentLoaded', () => {
    const root = document.documentElement;
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const themeToggle = document.getElementById('toggle');

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);

    themeToggle.addEventListener('click', () => {
        const newTheme = root.classList.contains('light') ? 'dark' : 'light';
        setTheme(newTheme);
        // Save theme preference
        localStorage.setItem('theme', newTheme);
    });

    function setTheme(theme) {
        root.classList.remove('light', 'dark');
        header.classList.remove('light', 'dark');
        footer.classList.remove('light', 'dark');

        root.classList.add(theme);
        header.classList.add(theme);
        footer.classList.add(theme);

        // Set the background and text colors
        document.body.style.backgroundColor = `var(--color-base-bg)`;
        document.body.style.color = `var(--color-base-text)`;
    }
});
