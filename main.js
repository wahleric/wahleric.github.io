/**
 * Returns the mode setting that is currently being used
 *
 * @return {string} The current mode (either 'light' or 'dark')
 */
function getCurrentMode() {
    // Check for a cached mode
    let isLightModeCache = localStorage.getItem('isLightMode');
    if (isLightModeCache !== null) {
        return JSON.parse(isLightModeCache) ? 'light' : 'dark'
    }

    // Unless the user prefers light mode, default to dark mode
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

/**
 * Switches the page between light and dark mode
 *
 * @param {bool} isLightMode whether light mode should be active or not
 */
function toggleMode(isLightMode) {
    // Set the correct mode class on the document
    document.documentElement.classList.toggle('light', isLightMode);
    document.documentElement.classList.toggle('dark', !isLightMode);
}

/**
 * Handles when the user clicks the toggle switch to toggle light/dark mode
 *
 * @param {Event} event The click event from the mode toggle switch
 */
function toggleModeClicked(event) {
    let isLightMode = event.target.checked;
    toggleMode(isLightMode);
    localStorage.setItem('isLightMode', isLightMode);
}

// Initialize the page mode
let currentMode = getCurrentMode();
toggleMode(currentMode === 'light');

// Initialize the mode toggle switch
let modeToggleSwitch = document.querySelector('#mode_selector');
modeToggleSwitch.checked = currentMode === 'light';
modeToggleSwitch.addEventListener('click', toggleModeClicked)

