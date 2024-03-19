import { When } from '@wdio/cucumber-framework';
import { action } from '../../../support/action/actionFactory';
import * as dotenv from 'dotenv';

import TestPage from '../pages/TestPage';

const testPage = new TestPage();

dotenv.config();

When(/^I click on About Us Navigation link$/, async () => {
    await testPage.clickAboutUs();
});

When(/^I click on Contact Us Navigation link$/, async () => {
    await testPage.clickContactUs();
});
When(/^I click on Thought Leadership link$/, async () =>{
    await testPage.clickThoughtLeaseship();
});
When(/^I click on Insights link$/, async () => {
    await testPage.clickInsights();
});
When(/^I click on Application Security Navigation link$/, async () => {
    await testPage.clickApplicationSecurity();
});
When(/^I Mousehover to Solutions$/, async () => {
    await testPage.mouseHover();
});
When(/^I Click on Explore Testimonials button$/, async () => {
    await testPage.clickExpTesiBut();
})