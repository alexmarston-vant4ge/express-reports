const puppeteer = require('puppeteer');

module.exports =  async function launchPuppeteer () {
  console.log('hits');
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.geeksforgeeks.org/');
    
    await browser.close();
}