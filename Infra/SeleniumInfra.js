const {Builder, By, Key, until} = require('selenium-webdriver');
const path = require('chromedriver').path;
const chrome = require('selenium-webdriver/chrome');
let service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

class SeleniumInfra {    
    constructor() {        
        this.driver = new Builder().forBrowser('chrome').build();
    }
    // Send Keys To Element
        async infra_setText(data , locatorType , locatorValue , element , fromElement){
            try {
                if(!element){
                    if(fromElement){
                        element = await fromElement.findElement(By[locatorType](locatorValue))
                    }else{
                        element = await this.driver.findElement(By[locatorType](locatorValue))
                    }
                }
                await element.sendKeys(data)
                console.log(`SeleniumInfra Send Keys to element:     locatorType=${locatorType}      locatorValue=${locatorValue}    PASS`)
            }
            catch (error) {
                console.error(`SeleniumInfra Send Keys to element:     locatorType=${locatorType}      locatorValue=${locatorValue}    FAIL`)
            }
        }
    
    
        async infra_setBrowserUrl(url) {
            try {
                // await this.driver.manage().window().maximize();
                await this.driver.get(url);
                await this.driver.manage().setTimeouts({ pageLoad: 3000 });
                console.log(`SeleniumInfra set URL:"     ${url}  PASS`)
                return true            
            }
            catch (error) {
                console.error(`SeleniumInfra set URL:"     ${url}  FAIL`)
                return false
            }
        }
    
        async infra_closeBrowser() {
            try {
                await this.driver.quit();
                console.log(`SeleniumInfra Close Browser:   PASS`)
            }
            catch (error) {
                console.error(`SeleniumInfra Close Browser:   FAIL`)
            }
        }
    
        async infra_clickElement(locatorType = "id", locatorValue = "", element = null, fromElement = null) {
            if (!element) {
                element = await this.infra_findElementBy(locatorType, locatorValue, fromElement);
            }
    
            try {
                await element.click();
                console.log(`SeleniumInfra click element:       locatorType=${locatorType}  locatorValue=${locatorValue}     Element=${element}   PASS`)
                await this.driver.sleep(4000);
                return true
            }
            catch (error) {
                console.error(`SeleniumInfra click element:       locatorType=${locatorType}  locatorValue=${locatorValue}     Element=${element}   FAIL`)
                return false
            }
        }
    

        async infra_sleep() {
                await this.driver.sleep(4000);
        }


        // Get text from element
        async infra_getTextFromElement(locatorType , locatorValue , element, fromElement){
            try {
                if(!element){
                    if(fromElement){
                        element = await fromElement.findElement(By[locatorType](locatorValue))
                    }else{
                        element = await this.driver.findElement(By[locatorType](locatorValue))
                    }
                }
                let elementText = await element.getText()
                console.log(`SeleniumInfra Get Text from element:       locatorType=${locatorType}  locatorValue=${locatorValue}     Element=${element}   PASS`)
                console.log("element Text is ====>>====>>===>> " + elementText);
                return elementText
            }
            catch (error) {
                console.error(`SeleniumInfra Get Text from element:       locatorType=${locatorType}  locatorValue=${locatorValue}     Element=${element}   FAIL`)        
                console.log(error)
                return ""
            }
        }
    
        async infra_clearElementField(locatorType = "id", locatorValue = "", element = null, fromElement = null) {
            if (!element) {
                element = await this.infra_findElementBy(locatorType, locatorValue, fromElement);
            }
    
            try {
                await element.clear();
                console.log(`SeleniumInfra clear Element:       locatorType=${locatorType}  locatorValue=${locatorValue}     Element=${element}   PASS`)
            } catch (error) {
                console.error(`SeleniumInfra clear Element:     locatorType=${locatorType}  locatorValue=${locatorValue}     Element=${element}   FAIL`)
            }
        }
    
        async infra_isElementExists(locatorType = "id", locatorValue = "", element = null) {
            try {
                await this.driver.findElement(By[locatorType](locatorValue))
                console.log(`SeleniumInfra is Element Exists:   locatorType=${locatorType}  locatorValue=${locatorValue}     Element=${element}   PASS`)
                return true;
            } catch (error) {
                console.log(`SeleniumInfra is Element Exists:   locatorType=${locatorType}  locatorValue=${locatorValue}     Element=${element}   Not Exists`)
                return false;
            }
        }
    
    
    // Find and return element by type and value
    async infra_findElementBy(locatorType , locatorValue , fromElement = null){
        let element
        try{
            if(fromElement){
                element = await fromElement.findElement(By[locatorType](locatorValue))
            }
            else{
                element = await this.driver.findElement(By[locatorType](locatorValue))
            }
            console.log(`SeleniumInfra Find element:       locatorType=${locatorType}  locatorValue=${locatorValue}      Element=${element}   PASS`)
        }
        catch{
            console.error(`SeleniumInfra Find element:       locatorType=${locatorType}  locatorValue=${locatorValue}      Element=${element}   FAIL`)
        }
        return element
    }
    
    
    
        // Find all the elements with the same type and value and return array(list)
        async infra_findElementListBy(locatorType , locatorValue , fromElement){
            let element
            try{
                if(fromElement){
                    element = await fromElement.findElements(By[locatorType](locatorValue))
                }
                else{
                    element = await this.driver.findElements(By[locatorType](locatorValue))
                }
                console.log(`SeleniumInfra find Element List:   locatorType=${locatorType}  locatorValue=${locatorValue}      Element=${element}   PASS`)
                return element
            }
            catch{
                console.error(`SeleniumInfra find Element List:   locatorType=${locatorType}  locatorValue=${locatorValue}      Element=${element}   FAIL`)
            }
        }
    
        async infra_UrlValidation(pageName) {
            try {
                const isValid = await this.driver.wait(until.urlContains(pageName), 8000);
                console.log(`SeleniumInfra URL Validation for:  ${pageName}    PASS`)
                return isValid;
            } catch (error) {
                console.error(`SeleniumInfra URL Validation for:  ${pageName}    FAIL`)
                return false;
            }
        }
    
        async infra_getCurrentURL() {
            let currentURL
            try {
                currentURL = await this.driver.getCurrentUrl();
                console.log(`SeleniumInfra get Current Url  PASS`)
                console.log(`SeleniumInfra Current Url is ==>==>:  ${currentURL}`)
                return currentURL
            } catch (error) {
                console.error(`SeleniumInfra get Current Url  FAIL`)            
            }
        }
    
        async infra_isUrlMatch(pageName = "") {
            try {
                const currentURL = await this.getCurrentURL();
                return currentURL.search(pageName);
            } catch (error) {
                return false;
            }
        }
    }
    
module.exports = SeleniumInfra