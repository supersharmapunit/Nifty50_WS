let fs = require('fs');
let path = require('path');

function fn(dirAddress, name) {
    if (dirAddress == undefined) dirAddress = process.cwd();
    let mainDir = path.join(dirAddress, 'Stonks');
    if (!fs.existsSync(mainDir)) {
        fs.mkdirSync(mainDir);
    }

    let filePath = path.join(mainDir, `${name}.txt`);
    if (!fs.existsSync(filePath)) {
        createNewFile(filePath, name);
    }
    else {
        appendThatFile(filePath, `\r\ni'm again in: ${name}`);
    }
}


function createNewFile(filePath, name) {
    fs.writeFileSync(filePath, `Stonk name is: ${name}`);
}

function appendThatFile(filePath, data){
    fs.appendFileSync(filePath, data);
}

module.exports = {
    makeDir: fn
}