import { action } from '../../../support/action/actionFactory';
import * as dotenv from 'dotenv';

import cucumberJson from 'wdio-cucumberjs-json-reporter';
import appConfig from '../config/app-config';

import Page from './Page';

dotenv.config();

const brand = "//a[@class='navbar-brand']";
const aboutUsNav = "//li[@id='about_us']//a[contains(text(),'About Us')]";
const contactUsNav = "//li[@id='contact_tab']";
const thoughtLeadership ="//li[@id='thought_tab']/a";
const casestudies = "//ul[@class='thought-banner-btns']/li/a[contains(text(),'Case Studies')]";
const optimizing = "//div[@class='insight-box views-col col-1']/div[@class='views-field views-field-field-tittle']/div/a[contains(text(),'Optimizing')]";
const empower   ="//div[@class='views-field views-field-field-tittle']/div/a[starts-with(text(),'Empowering')]";
const microservicelink = "//div[@class='views-field views-field-field-tittle']/div/a[starts-with(text(),'Microservices')]";
const microservice = "//div[@class='casestudy-banner_txt']/h3";
const microserviceText = "Microservices & Serverless in Consumer Tech";





const shadowRootDemoDescription = "//div[@class='demo-description']";
const shadowRootDemoDescriptionTxt = "Menu UI component is with Shadow DOM enabled. The Menu's markup structure, style, and behavior in this demo are hidden and separate from other code on the page.";
const shadowText = "File";

export default class TestPage extends Page {

    constructor() {
        super();
        this.ourFounder = "//div[@class='Heading_text']//h2[contains(text(),'Our Founders')]";
        this.contactUs = "//div[@class='digital_banner-txt']//h1[contains(text(),'Contact Us')]";
        this.tabs = "//li/a";
        this.techwave = "//div[@class='case_icon_box']/ul/li/a";
    }

    // Navigate to Qentelli Website
    async navigateToQentelliWebsite() {
        await action.openApplication(appConfig.url);
        await action.pause(1000);
        cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
    }

    // Verify Qentelli Brand
    async verifyBrand() {
        await action.pause(1000);
        await action.verifyIsDisplayed(brand);
        cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
    }

    // Verify Qentelli About Us Navigation
    async verifyAboutUsNav() {
        await action.verifyIsDisplayed(aboutUsNav);
        cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
    }

    // Verify Qentelli Contact Us Navigation
    async verifyContactUsNav() {
        await action.verifyIsDisplayed(contactUsNav);
        cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
    }

    // Click Qentelli About Us Navigation
    async clickAboutUs() {
        await action.clickElement(aboutUsNav, 100);
    }

    // Click Qentelli Contact Us Navigation
    async clickContactUs() {
        await action.clickElement(contactUsNav, 100);
    }

    // Verify Qentelli About Us Page
    async verifyAboutUsPage() {
        await action.verifyIsDisplayed(this.ourFounder);
        await action.pause(1000);
        cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
    }

    // Verify Qentelli Contact Us Page
    async verifyContactUsPage() {
        await action.verifyIsDisplayed(this.contactUs);
        await action.pause(1000);
        cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
    }

    // Navigate to ShadowRoot Demo Page
    async navigateToShadowRootDemoPage() {
        await action.openApplication(appConfig.shadowUrl);
        await action.pause(1000);
        cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
    }

    //checking tabs in Qentelli page
    async getTabstextQentellipage(){
        const tabs = await $$(this.tabs);
        await tabs.filter(async(ele) =>{
            console.log(await ele.getText());
        })
    }

    // Verify ShadowRoot Demo Page description
    async verifyShadowRootDemoPageDescription() {
        await action.verifyIsDisplayed(shadowRootDemoDescription, 100);
        await expect($("//div[@class='demo-description']")).toHaveText(shadowRootDemoDescriptionTxt);
        cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
    }

    // Verify Shadow Root Element
    async verifyShadowRootElement() {
        const locator = await $('smart-ui-menu').shadow$('smart-menu-items-group[role=menuitem] span');
        await expect(locator).toBeDisplayed();
        await expect(locator).toHaveText(expect.stringContaining(shadowText));
        cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
    }



    //click on the thought leadership
    async clickOnThoughtLeadershipTab(){
        await action.clickElement(thoughtLeadership,100);
    }

    //verify the thought leadership is displayed
    async verifyThoughtLeaderShipPage(){
        await action.verifyIsDisplayed(casestudies, 100);
        cucumberJson.attach(await browser.takeScreenshot(), 'image/png');

    }
    async clickOnCasestudiesLink(){
        await action.clickElement(casestudies,100);
    }
    async verifyCaseStudyPage(){
        await action.pause(1000);
        await action.verifyIsDisplayed(optimizing,100);
    }
   async verifyempowerink(){
    await action.verifyIsDisplayed(empower,100);

   }
   async verifyMicroServiceLink(){
    await action.verifyIsDisplayed(microservicelink,100);
    await action.clickElement(microservicelink,100);
    await action.pause(1000);
    await action.verifyIsDisplayed(microservice,100);
    await action.verifyText(microservice,microserviceText);
    cucumberJson.attach(await browser.takeScreenshot(), 'image/png');

   }
   async verifyOptimizeLink(){
    await action.verifyIsDisplayed(optimizing,100);
    cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
   }
}
