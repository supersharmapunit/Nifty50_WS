let url = 'https://www.moneycontrol.com/markets/indian-indices/top-nse-50-companies-list/9?classic=true';
let request = require('request');
let cheerio = require('cheerio');
let fs = require('fs')

request(url, cb);

function cb(error, response, html){
    if(error) console.log(error);
    else if(response.statusCode == 404) console.log('Page not found');
    else getRowData(html);
}

function getRowData(html){
    let searchTool = cheerio.load(html);
    let contentArr = searchTool('#indices_stocks .indices .responsive tr');
    let content = "";
    for (let i = 1; i <= 50; i++){
        let name = searchTool(contentArr[i]).find('td');
        content += name.text() + "\r\n"
    }
    fs.writeFileSync("Nifty50.txt", content);
    
    
}