// CONFIGURATION
const baseURL = "https://cdn.jsdelivr.net/gh/CornetPanique86/pixelart-icons/res/svg/optimized"; // The base of the URL for the icon. Leave empty for relative link.
const fileExtension = true; // If the link should have the .svg extension at the end or not.
const classList = ""; // The classes that the <img> element should have. Leave empty for none.
// -------------

document.addEventListener('DOMContentLoaded', function() {
    // Get all <i> elements with class "pxico-icon"
    const icons = document.querySelectorAll("i[class^='pxico-']");

    // Loop through each icon element
    icons.forEach(icon => {
        // Extract the icon name from the class
        const iconName = icon.className.replace(/.*pxico-(\w+).*/, "$1");
        
        // Create an <img> element
        const img = document.createElement("img");
        img.src = fileExtension ? baseURL + "/" + iconName + ".svg" : baseURL + "/" + iconName;
        img.alt = iconName;
        if (/\S/.test(classList)) img.class = classList;

        // Replace the <i> element with the generated <svg> element
        icon.parentNode.replaceChild(img, icon);
    });
});