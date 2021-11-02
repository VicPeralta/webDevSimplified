
/*
This funtion listens for click events and
verify if it comes from a dropDownButton
*/
document.addEventListener('click', e => {
    const isDropDownButton = e.target.matches('[data-dropdown-button]');
    const isParentDropdown = e.target.closest('[data-dropdown]') ? true : false;
    if (!isDropDownButton && isParentDropdown) {
        // Inside dropdown options
        return;
    }
    else {
        let currentDropdown;
        if (isDropDownButton) { // open dropdown
            currentDropdown = e.target.closest('[data-dropdown]');
            currentDropdown.classList.toggle('active');
        }

        document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
            if (dropdown === currentDropdown) return;
            // Close dropdown
            dropdown.classList.remove('active');
        })
    }
});