import { action } from '../../../support/action/actionFactory';
import * as dotenv from 'dotenv';

import cucumberJson from 'wdio-cucumberjs-json-reporter';
import appConfig from '../config/app-config';

import Page from './Page';
import { Assertion, assert } from 'chai';

dotenv.config();

const brand = "//a[@class='navbar-brand']";
const aboutUsNav = "//li[@id='about_us']//a[contains(text(),'About Us')]";
const contactUsNav = "//li[@id='contact_tab']";

const shadowRootDemoDescription = "//div[@class='demo-description']";
const shadowRootDemoDescriptionTxt = "Menu UI component is with Shadow DOM enabled. The Menu's markup structure, style, and behavior in this demo are hidden and separate from other code on the page.";
const shadowText = "File";
const productsButton = "//a[text()='PRODUCTS']";
const productTab = "[id='product_tab']";
const tedTab = "//p[@id='product_ted_tab']";
const requestDemoButton = "[name='op']";
const tedPageText = "//p[text()='Focus on Your Core Business. Let TED Handle the Complexities.']";
const thoughtLeadership = "[id='product_thought_tab']";
const thoughtLeadershipSection = "[class='footer_glass']";
const tedLinkThoughtLeadership = "//div[@class='foot_links']/descendant::a[@href='/products/ted']";
const productsLinkThoughtLeadership = "//div[@class='footer_glass']/descendant::a[text()='Products']";
const autoMagiqLinkThoughtLeadership = "(//a[@href='/products/automagiq'])[3]";
const thoughtLeadershipLinkonThoughtLeadership = "(//a[@href='/products/thought-leadership'])[3]";
const insights = "(//a[@href='/products/thought-leadership/insights'])[3]";
const caseStudiesLink = "(//a[@href='/products/thought-leadership/case-studies'])[2]";
const quentelliBrandingThoughtLeadership = "//div[@class='foot_list']/h4";

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

    // Verify product button is displayed
    async verifyProductButtonIsDisplayed(){
        await action.verifyIsDisplayed(productsButton);
        cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
    }

    // Click on product button
    async clickOnProductButton(){
        await action.clickElement(productsButton);
        await action.waitForPageLoad();
    }

    // verify product tab is displayed
    async verifyProductTabIsDisplayed(){
        await action.verifyIsDisplayed(productTab);
        cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
    }

    // Click on product tab
    async clickOnProductTab(){
        await action.clickElement(productTab);
    }

    // Verify TED Tab is displayed
    async verifyTedTabIsDisplayed(){
        await action.verifyIsDisplayed(tedTab);
        cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
    }

    // Click TED tab
    async clickOnTEDTab(){
        await action.clickElement(tedTab);
        await action.waitForPageLoad();
    }

     // Verify TED page is displayed
     async verifyTedPageIsDisplayed(){
        await action.waitForPageLoad();
        await action.verifyIsDisplayed(tedPageText);
        cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
    }

    // Verify request Demo button is displayed
    async verifyRequestDemoButtonIsDisplayed(){
        await action.verifyIsDisplayed(requestDemoButton);
        cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
    }

    // verify leadership button is displayed
    async verifyThoughtLeadershipButton(){
        await action.verifyIsDisplayed(thoughtLeadership);
        cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
    }

    // click thought leadership button
    async clickThoughtLeadershipButton(){
        await action.clickElement(thoughtLeadership);
        await action.waitForPageLoad();
    }

    // verify thought leadership section
    async verifyThoughtLeadershipSection(){
        await action.scrollElement(thoughtLeadershipSection)
        await action.verifyIsDisplayed(thoughtLeadershipSection, 4000);
        cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
    }

    // verify products Link on thought Leadership page
    async verifyProductsLinkOnThoughtLeadership(){
        await action.verifyIsDisplayed(productsLinkThoughtLeadership);
        cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
    }

    // verify TED Link on thought Leadership page
    async verifyTedLinkOnThoughtLeadership(){
        await action.verifyIsDisplayed(tedLinkThoughtLeadership);
        cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
    }

    // verify autoMagiQ Link on thought Leadership page
    async verifyAutoMagiqLinkOnThoughtLeadership(){
        await action.verifyIsDisplayed(autoMagiqLinkThoughtLeadership);
        cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
    }

    // verify thought leadership link on thought Leadership page
    async verifyThoughtLeadershipLinkOnThoughtLeadership(){
        await action.verifyIsDisplayed(thoughtLeadershipLinkonThoughtLeadership);
        await action.verifyIsDisplayed(insights);
        await action.verifyIsDisplayed(caseStudiesLink);
        cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
    }

    // verify Qentelli branding link on thought Leadership page
    async verifyQentelliBrandingThoughtLeaderShip(){
        browser.debug();
        await action.verifyIsDisplayed(quentelliBrandingThoughtLeadership);
        cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
    }
}
