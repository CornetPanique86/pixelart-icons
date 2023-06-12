const fs = require('fs');
const path = require('path');
const CleanCSS = require('clean-css');
const UglifyJS = require("uglify-js");

const svgFolderPath = "./res/svg/optimized"

const isFile = fileName => {
    return fs.lstatSync(fileName).isFile();
};
  
const svgFileList = fs.readdirSync(svgFolderPath)
                        .map(fileName => {
                          return path.join(svgFolderPath, fileName);
                        })
                        .filter(isFile);

function fileContentList(fileList) {
    const list = [];
    for (let i = 0; i < fileList.length; i++) {
        list.push({ 
            name: path.basename(fileList[i], path.extname(fileList[i])),
            content: fs.readFileSync(path.resolve(fileList[i]), 'utf8')
        });
    }
    return list;
}

const svgList = fileContentList(svgFileList);

// Method 1: store all SVG contents in a map
function jsM1Build(svgList) {
    let output = `const iconMap = new Map();`;
    for (let i = 0; i < svgList.length; i++) {
        output += ` iconMap.set("${svgList[i].name}", \`${svgList[i].content}\`);`;
    }
    const minifyInput = output + fs.readFileSync("./src/pixelarticons.js", 'utf8');
    return UglifyJS.minify(minifyInput).code;
}
try {
    fs.writeFileSync('./dist/pixelarticons.js', jsM1Build(svgList));
    console.log("JS method 1 written");
} catch (err) {
    console.error("!!! Error at JS method 1 write !!!   " + err);
}

// Method 2: generate <img> with src attribute to an external SVG.
function jsM2Build() {
    return UglifyJS.minify(fs.readFileSync("./src/pixelarticons_ext.js", 'utf8')).code;
}
try {
    fs.writeFileSync('./dist/pixelarticons_ext.js', jsM2Build());
    console.log("JS method 2 written");
} catch (err) {
    console.error("!!! Error at JS method 2 write !!!   " + err);
}

// Method 3: CSS file with background image URL's containing the SVG's encoded data URI
function cssM3Build(svgList) {
    let output = fs.readFileSync("./src/pixelarticons.css", 'utf8');
    for (let i = 0; i < svgList.length; i++) {
        output += `i.pxico-${svgList[i].name} { background-image: url("${svgToDataURI(svgList[i].content)}"); }`;
    }
    const minifiedOutput = new CleanCSS().minify(output).styles;
    return minifiedOutput;
}
try {
    fs.writeFileSync('./dist/pixelarticons.css', cssM3Build(svgList));
    console.log("CSS method 3 written");
} catch (err) {
    console.error("!!! Error at CSS method 3 write !!!   " + err);
}


function svgToDataURI(svg) {
    /*
    Function by heyallan under the mit license: https://github.com/heyallan/svg-to-data-uri/blob/master/LICENSE
    Repository: https://github.com/heyallan/svg-to-data-uri
    */
    svg = svg.trim();
    // remove xml, doctype, generator...
    svg = svg.slice(svg.indexOf('<svg'));
    // soft validate
    if (!svg.startsWith('<svg') || !svg.endsWith('svg>')) return;
    // add namespace if necessary
    if (!svg.includes('http://www.w3.org/2000/svg')) svg = svg.replace(/<svg/g, `<svg xmlns='http://www.w3.org/2000/svg'`);
    // remove comments
    svg = svg.replace(/<!--.{1,}-->/g, '');
    // remove unnecessary attributes
    svg = svg.replace(/version=[\"\'](.{0,}?)[\"\'](?=[\s>])/g, '');
    // svg = svg.replace(/id=[\"\'](.{0,}?)[\"\'](?=[\s>])/g, '');
    // svg = svg.replace(/class=[\"\'](.{0,}?)[\"\'](?=[\s>])/g, '');
    // replace nested quotes
    svg = svg.replace(/"'(.{1,})'"/g, '\'$1\'');
    // replace double quotes
    svg = svg.replace(/"/g, '\'');
    // remove empty spaces between tags
    svg = svg.replace(/>\s{1,}</g, '><');
    // remove duplicate spaces
    svg = svg.replace(/\s{2,}/g, ' ');
    // trim again
    svg = svg.trim();
    // soft validate again
    if (!(svg.startsWith('<svg')) || !(svg.endsWith('svg>'))) return;
    // replace ampersand
    svg = svg.replace(/&/g, '&amp;');
    // encode only unsafe symbols
    svg = svg.replace(/[%#<>?\[\\\]^`{|}]/g, encodeURIComponent);
    // build data uri
    svg = `data:image/svg+xml,${svg}`;
    // ok, ship it!
    return svg;
}