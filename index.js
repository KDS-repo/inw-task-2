document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById("toggle");
    const menu = document.getElementById("menu");
    toggle.addEventListener('click', () => {
        const visibility = menu.getAttribute('data-menu');
        menu.setAttribute('data-menu', 
            visibility == "visible"?
            "invisible" : "visible"
        );
    });
});