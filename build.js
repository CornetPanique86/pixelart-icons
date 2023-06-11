const fs = require('fs');
const path = require('path');

const svgFolderPath = "./res/svg/optimized"

const isFile = fileName => {
    return fs.lstatSync(fileName).isFile();
};
  
const svgFileList = fs.readdirSync(svgFolderPath)
                        .map(fileName => {
                          return path.join(svgFolderPath, fileName);
                        })
                        .filter(isFile);

var jsBuild = function(svgFileList) {
    let output = `const iconMap = new Map();`;
    svgFileList.forEach(svgFile => {
        function mapContent(svgFile) {
            let content = "error";
            try {
                content = fs.readFileSync(path.resolve(svgFile), 'utf8');
            } catch (err) {
                console.error(err);
                content = err;
            }
            return ` iconMap.set("${path.basename(svgFile)}", \`${content}\`);`;
        }
        output += mapContent(svgFile);
    });
    
}(svgFileList);