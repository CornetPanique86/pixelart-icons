document.addEventListener('DOMContentLoaded', function() {
    // Get all <i> elements with class "pxico-icon"
    const icons = document.querySelectorAll("i[class^='pxico-']");

    // Loop through each icon element
    icons.forEach(icon => {
        // Extract the icon name from the class
        const iconName = icon.className.replace(/.*pxico-(\w+).*/, "$1");
        
        // Create an <svg> element
        const fragment = document.createRange().createContextualFragment(iconMap.get(iconName));
        const svg = fragment.querySelector('svg');
        svg.setAttribute("style", icon.attributes.getNamedItem("style"));

        // Replace the <i> element with the generated <svg> element
        icon.parentNode.replaceChild(svg, icon);
    });
});  