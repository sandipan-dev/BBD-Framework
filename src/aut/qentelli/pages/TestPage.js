import { action } from '../../../support/action/actionFactory';
import * as dotenv from 'dotenv';

import cucumberJson from 'wdio-cucumberjs-json-reporter';
import appConfig from '../config/app-config';

import Page from './Page';

dotenv.config();

const brand = "//a[@class='navbar-brand']";
const aboutUsNav = "//li[@id='about_us']//a[contains(text(),'About Us')]";
const contactUsNav = "//li[@id='contact_tab']";

const shadowRootDemoDescription = "//div[@class='demo-description']";
const shadowRootDemoDescriptionTxt = "Menu UI component is with Shadow DOM enabled. The Menu's markup structure, style, and behavior in this demo are hidden and separate from other code on the page.";
const shadowText = "File";
const thoughtLeadershipNav = "//li[@id='thought_tab']//a[contains(text(),'Thought Leadership')]";
const caseStudiesNav ="//ul[@class='thought-banner-btns']//li/a[contains(text(), 'Case Studies')]";
const insightsNav ="//ul[@class='thought-banner-btns']/li/a[contains(text(),'Insights')]";
const insightsText= "//div[@class='Heading_text']/h2[contains(text(),'Insights')]";
const applicationSecurity = "//div[@class='field-content']/a[contains(text(),'Application Security: Your Guide to Building the Digital Fortress')]";
const applicationSecurityForm ="//div[@class='field-item']/form[@class='webform-submission-form webform-submission-add-form webform-submission-insight-blogs-form-form webform-submission-insight-blogs-form-add-form webform-submission-insight-blogs-form-block_content-14-form webform-submission-insight-blogs-form-block_content-14-add-form insight_webform js-webform-details-toggle webform-details-toggle']";
const applicationSecurityImg ="//div[@class='field-item']/img[@class='image-field']";
const solutions = $("//p[@id='solution_tab']");
const blueBoxTextElement = "//div[@class='sub_blue_box']/p[1]";
const blueBoxTex = "At Qentelli, we've crafted a legacy of digital excellence, quality, and superior customer experiences. Our portfolio reflects our commitment to precision and innovation. Interested in the full picture? Explore our client success stories in the testimonials gallery.";
const ExploreTestimonial ="//button[@id='testimonials_tab']";
const ypoText = '"I Was Very Fortunate To Meet Sanjay And Prasana, Who Literally Spent Multiple Weekends Educating Me On Digital Transformation, DevOps, And How To Run Agile Sprints. I Cannot Thank The Team At Qentelli Enough."';
const ypoTextEle = ["//div[@class='video_txt']/p[2]"];
const ypoPerName= ["//div[@class='video_txt']/h3/strong"];
const ypoPersDis= ["//div[@class='video_txt']/p[3]"];
const knowMore =["//div[@class='video_txt']/p/a"];
const digitalInnovationLink = "//h4[@id='Digital_tab']/a"
const talkToAnExpertButton = "//input[@id='edit-actions-submit']"


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
    
    async verifyCaseStudies() {
        await action.verifyIsDisplayed();
        cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
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
    // Verify Qentelli Thought Leadership Navigation link is Displayed
    async verifyThoughtLeadershipNav() {
        await action.verifyIsDisplayed(thoughtLeadershipNav, 100);
        cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
    }
    // Click Qentelli Thought Leadership Navigation
    async clickThoughtLeaseship() {
        await action.clickElement(thoughtLeadershipNav, 100);
    }
    //Verify Case Studies Navigation Link is Displayed
    async verifyCaseStudies() {
        await action.verifyIsDisplayed(caseStudiesNav, 100);
        await action.waitForPageload();
        cucumberJson.attach(await browser.takeScreenshot(), 'image/png');

    }
    // Verify Insights Navigation Link is Displayed
    async verifyInsights() {
        await action.verifyIsDisplayed(insightsNav, 100);
        await action.waitForPageload();
        cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
    }
    // Click on Insights link
    async clickInsights(){
        await action.clickElement(insightsNav, 100);
    }
    // Verify Insights text is Displayed
    async insightsText(){
        await action.verifyText(insightsText, "Insights");
        await action.waitForPageload();
        cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
    }
    // Verify Application Security Navigation Link is Displayed
    async applicationSecurity() {
        await action.verifyIsDisplayed(applicationSecurity, 100);
        await action.waitForPageload();
        cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
    }
    //Click on Application Security Link
    async clickApplicationSecurity(){
        await action.clickElement(applicationSecurity);
    }
    //Verify Application Security Form
    async applicationSecurityForm() {
        await action.verifyIsDisplayed(applicationSecurityForm, 100);
        await action.waitForPageload();
        cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
    }
    //Verify Application Security Image
    async applicationSecurityImg() {
        await action.verifyIsDisplayed(applicationSecurityImg, 100);
        cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
    }
    //Mouseover to Solutions
    async mouseHover(){
        await solutions.moveTo();
    }
    //Validate Blue Box Text
    async valBlueBoxText(){
       await action.verifyText(blueBoxTextElement,blueBoxTex)
        cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
    }
    //Verify Explore Testimonials Button
    async exploreTestimonialBut() {
        await action.verifyIsDisplayed(ExploreTestimonial, 100);
        cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
    }
    //Click Explore Testimonials Button
    async clickExpTesiBut() {
        await action.clickElement(ExploreTestimonial, 100)
    }
    //Validate Ypo Text
    async valYpoText(){
        await action.verifyText(ypoTextEle[0],ypoText)
         cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
     }
     //Validate Ypo Person Name
     async valYpoPerName(){
        await action.verifyText(ypoPerName[0],"Sean Magennis")
         cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
     }
      //Validate Ypo Person Designation
      async valYpoPerDis(){
        await action.verifyText(ypoPersDis[0],"Global President and COO")
         cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
     }
     //Verify Know More Button
    async knowMore() {
        await action.verifyIsDisplayed(knowMore[0], 100);
        cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
    }
    //Verify Know More Button
    async knowMore() {
        await action.verifyIsDisplayed(knowMore[0], 100);
        cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
    }
    async clickDigInn() {
        await action.clickElement(digitalInnovationLink, 100);
    }
    async clickTalkToAnExpert() {
        await action.clickElement(talkToAnExpertButton, 100);
    }
    async alertText() {
        const text = await getAlertText();
        console.log(text);
    }
}
