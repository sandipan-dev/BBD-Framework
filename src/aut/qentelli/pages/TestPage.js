import { action } from '../../../support/action/actionFactory';
import * as dotenv from 'dotenv';

import cucumberJson from 'wdio-cucumberjs-json-reporter';
import appConfig from '../config/app-config';

import Page from './Page';

dotenv.config();

const Rightside_X  = "//p[normalize-space()='© 2024 Qentelli. All rights are reserved.']";
const Privacy_Policy  = "//a[@href='/privacy-policy']";
const Contact_Us = "(//a[@href='/contact-us'])[2]";
const S_X = "//div[@class='copy_icon']//li[5]//a";
const S_Facebook = "//div[@class='copy_icon']//li[4]//a";
const S_Instagram = "//div[@class='copy_icon']//li[3]//a";
const S_Glassdoor = "//div[@class='copy_icon']//li[2]//a";
const S_Linkedin = "//a[@href='https://www.linkedin.com/company/qentelli/']";
const Thought_Ledership = "//a[@href='/products/thought-leadership']";
const clickProducts = "//a[normalize-space()='PRODUCTS']";
const brand = "//a[@class='navbar-brand']";
const aboutUsNav = "//li[@id='about_us']//a[contains(text(),'About Us')]";
const contactUsNav = "//li[@id='contact_tab']";


const shadowRootDemoDescription = "//div[@class='demo-description']";
const shadowRootDemoDescriptionTxt = "Menu UI component is with Shadow DOM enabled. The Menu's markup structure, style, and behavior in this demo are hidden and separate from other code on the page.";
const shadowText = "File";

export default class TestPage extends Page {

    constructor() {
        super();
        this.ourFounder = "//div[@class='Heading_text']//h2[contains(text(),'Our Founders')]";
        this.contactUs = "//div[@class='digital_banner-txt']//h1[contains(text(),'Contact Us')]";
    }

    // Navigate to Qentelli Website
    async navigateToQentelliWebsite() {
        await action.openApplication(appConfig.url);
        await action.pause(1000);
        cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
    }

    // Verify Qentelli Brand
    async verifyBrand() {
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

    async clickProd(){
        await action.clickElement(clickProducts, 100)
    }

    // await action.verifyIsDisplayed(clickProducts, 100)
     async TLedership(){
        await action.clickElement(Thought_Ledership, 100)
    }
    async Linkedin_M(){
        await action.verifyIsDisplayed(S_Linkedin, 100)
    }
    async Glassdoor_M(){
        await action.verifyIsDisplayed(S_Glassdoor, 100)
    }
    async Instagram_M(){
        await action.verifyIsDisplayed(S_Instagram, 100)
    }
    async Facebook_M(){
        await action.verifyIsDisplayed(S_Facebook, 100)
    }
    async X_M(){
        await action.verifyIsDisplayed(S_X, 100)
    }
    async Contactus_M(){
        await action.verifyIsDisplayed(Contact_Us, 100)
    }
    async PrivacyPolicy_M(){
        await action.verifyIsDisplayed(Privacy_Policy, 100)
    }
    async Rightsidetext_M(){
        await action.verifyIsDisplayed(Rightside_X, 100)
    }
}
