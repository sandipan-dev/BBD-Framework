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

const ThoughtLeadership = "li#thought_tab";
const ThoughtLeadershipText = "//div[@class='digital_bg']//p"
const ThoughtData ="In our clients' journey toward Digital Transformation, our primary goal is to accelerate the delivery of business value. This is achieved by aligning IT agility with business agility. Our comprehensive approach extends beyond streamlining infrastructure and automating release processes to include performance monitoring. Most importantly, we focus on cultural renovation, ensuring that these technical advancements are embraced and maximized within your organization."
const FirstInsight= "(//div[@class='insight-box views-col col-1'])[1]"
const FirstInsightLink = "//a[contains(text(),'Revolutionizing Financial and Controlling Operatio')]"
const FirstInsightContent = "In today’s rapidly changing business landscape, integrating advanced technologies is essential, particularly in finance and operations."
const FirstInsightText = "//p[contains(text(),'In today’s rapidly changing business landscape, in')]"
const FirstInsightNav = "(//span[@class='field-content'])[1]"
const InsightPageTitle = "Digital Platform Strategy - Driving Enterprise Revolution"
const InsightText = "//div[@class='field-item' and text()='Digital Platform Strategy - Driving Enterprise Revolution']"


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

    //click Qentelli Thought Leadership
        async clickThoughtLeadership() {
        await action.clickElement(ThoughtLeadership,100);
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
    //Verify Thought leadership text displayed
     async verifyThoughtLeaderText() {
        await action.verifyIsDisplayed(ThoughtLeadershipText);
        await action.pause(1000);
        cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
     }
    
     //Verify Thought leadership text contert
     async verifyThoughtLeaderTextContent() {
        await action.verifyText(ThoughtLeadershipText,ThoughtData);
        await action.pause(1000);
        cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
     }

     //Verify First insight
     async verifyThoughtFirstSight() {
        await action.verifyIsDisplayed(FirstInsight);
        await action.verifyIsDisplayed(FirstInsightLink);
        await action.pause(1000);
        await action.verifyText(FirstInsightText,FirstInsightContent);
        cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
     }

     //Verify First insight read more navigation
     async clcikFirstInsightReadmore()   {
        await action.clickElement(FirstInsightNav);
        await action.pause(1000);
        cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
     } 
     
     // Verify First insight Navigation Page Title
     async verifyInsightNav() {
        await action.verifyIsDisplayed(InsightText);
        await action.pause(1000);
        await action.verifyText(InsightText,InsightPageTitle);
        cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
     }
     
        
}
