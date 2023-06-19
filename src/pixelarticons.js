window.addEventListener('load', pxicoReplaceToSVG());
function pxicoReplaceToSVG() {
    // Get all <i> elements with class "pxico-icon"
    const icons = document.querySelectorAll("i[class^='pxico-']");

    // Loop through each icon element
    icons.forEach(icon => {
        // Extract the icon name from the class
        const iconName = icon.className.replace(/.*pxico-(\w+).*/, "$1");
        
        // Create an <svg> element
        const fragment = document.createRange().createContextualFragment(pxicoIconMap.get(iconName));
        const svg = fragment.querySelector('svg');
        if (icon.getAttribute("style")) svg.setAttribute("style", icon.getAttribute("style"));
        svg.setAttribute("class", icon.getAttribute("class"));

        // Replace the <i> element with the generated <svg> element
        icon.parentNode.replaceChild(svg, icon);
    });
}