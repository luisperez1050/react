// default check for input field to set theme
// on change toggle theme 

export function themeSelector() {
    const themeSelector = document.querySelector("input[type='checkbox']");
    const body = document.querySelector("body");

    if (themeSelector.checked) body.classList.add("dark-theme");
    themeSelector.addEventListener('change', () => {
        (themeSelector.checked) ? body.classList.add("dark-theme") : body.classList.remove("dark-theme");
    })

}