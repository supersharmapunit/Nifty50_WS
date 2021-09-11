let request = require('request');
let cheerio = require('cheerio');
let itsDir = require('./dirCreate')

let url = 'https://www.moneycontrol.com/markets/indian-indices/top-nse-50-companies-list/9?classic=true';

request(url, cb);
let dirAddress = process.argv.splice(2);

function cb(error, response, html){
    if(error) console.log(error);
    else if (response.statusCode == 404) console.log('Page not found');
    else dataExtract(html);
}

function dataExtract(html){
    let searchTool = cheerio.load(html);
    let contentArr = searchTool('.clearfix .hist_tbl .responsive tbody tr');
    for (let i = 1; i <= 50; i++){
        let name = searchTool(contentArr[i]).find('td');
        itsDir.makeDir(dirAddress[0], name.text());
    }
}