import $ from 'jquery';
window.jQuery = $;
window.$ = $;

$(function () {
    const theme = (() => {
        if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
            return localStorage.getItem('theme');
        }
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        return 'light';
    })();

    if (theme === 'light') {
        $('html').removeClass('dark');
    } else {
        $('html').addClass('dark');
    }

    window.localStorage.setItem('theme', theme);

    const handleToggleClick = () => {
        const element = $('html');
        element.toggleClass("dark");

        const isDark = element.hasClass("dark");
        localStorage.setItem("theme", isDark ? "dark" : "light");
    }

    $("#themeToggle").on('click',handleToggleClick);
});
