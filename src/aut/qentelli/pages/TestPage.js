import { action } from '../../../support/action/actionFactory';
import * as dotenv from 'dotenv';

import cucumberJson from 'wdio-cucumberjs-json-reporter';
import appConfig from '../config/app-config';

import Page from './Page';

dotenv.config();

const brand = "//a[@class='navbar-brand']";
const aboutUsNav = "//li[@id='about_us']//a[contains(text(),'About Us')]";
const contactUsNav = "//li[@id='contact_tab']";
const PRODUCTS = "//a[normalize-space()='PRODUCTS']";
const ThoughtLeadership = "//a[@href='/products/thought-leadership']";
const Insights = "//h2[text()='Insights']";
const paragraphone = "//a[text()='A Comprehensive Guide: What is a Software Engineering Intelligence Platform?']";
const paragraphtwo = "//a[text()='autoMagiQ Product Roundup December 2023']";
const paragraphthree = "//a[text()='Into the Future: The Promises and Realities of Autonomous Testing']";
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
    // Click on PRODUCTS
    async clickPRODUCTS() {
        await action.clickElement(PRODUCTS, 100);
}
// Click on Thought Leadership
async clickThoughtLeadership() {
    await action.clickElement(ThoughtLeadership, 100);
}
// Verify Insights Page
async verifyInsights() {
    await action.scrollElement(Insights)
    await action.verifyIsDisplayed(Insights);
    await action.pause(1000);
    cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
}
 // Verify Insights col one 
 async verifyparagraphone() {
    await action.verifyIsDisplayed(paragraphone);
    await action.pause(1000);
    cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
}
// Verify Insights col two
async verifyparagraphtwo() {
    await action.verifyIsDisplayed(paragraphtwo);
    await action.pause(1000);
    cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
}
// Verify Insights col three 
async verifyparagrapthree() {
    await action.verifyIsDisplayed(paragraphthree);
    await action.pause(1000);
    cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
}
}
