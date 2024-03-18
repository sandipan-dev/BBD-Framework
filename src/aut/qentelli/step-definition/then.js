import { Then } from '@wdio/cucumber-framework';
import { action } from '../../../support/action/actionFactory';
import * as dotenv from 'dotenv';

import TestPage from '../pages/TestPage';

const testPage = new TestPage();

dotenv.config();

Then(/^I verify Company brand is displayed$/, async () => {
    await testPage.verifyBrand();
});

Then(/^I verify About Us Navigation link is displayed$/, async () => {
    await testPage.verifyAboutUsNav();
});

Then(/^I verify About Us page is displayed$/, async () => {
    await testPage.verifyAboutUsPage();
});

Then(/^I verify Contact Us Navigation link is displayed$/, async () => {
    await testPage.verifyContactUsNav();
});

Then(/^I verify Contact Us page is displayed$/, async () => {
    await testPage.verifyContactUsPage();
});

Then(/^I verify ShadowRoot Demo page description is displayed$/, async () => {
    await testPage.verifyShadowRootDemoPageDescription();
});

Then(/^I verify Shadow Root Element is displayed$/, async () => {
    await testPage.verifyShadowRootElement();
});
Then(/^I verify Thought Leadership link is displayed$/, async () => {
    await testPage.verifyThoughtLeadershipNav();
});
Then(/^I verify case studies link is displayed$/, async () =>{
    await testPage.verifyCaseStudies();
} );
Then(/^I verify Insights link is displayed$/, async () =>{
    await testPage.verifyInsights();
});
Then(/^I verify Insights text$/, async () => {
    await testPage.insightsText();
});
Then(/^I verify Application Security link$/, async () => {
    await testPage.applicationSecurity();
});
Then(/^I Verify Application Security Submittion form$/, async () => {
    await testPage.applicationSecurityForm();
});
Then(/^I Verify Application Security Image$/, async () => {
    await testPage.applicationSecurityImg();
});
Then(/^I Verify Blue Box text$/, async () => {
    await testPage.valBlueBoxText();
});
Then(/^I Verify Explore Testimonials button$/, async () =>{
    await testPage.exploreTestimonialBut();
});
Then(/^I Verify the YPO Text$/, async () => {
    await testPage.valYpoText();
});
Then(/^I Verify the Person Name$/, async () => {
    await testPage.valYpoPerName();
});
Then(/^I Verify the Disignation$/, async () => {
    await testPage.valYpoPerDis();
});
Then(/^I Verify Know More Button$/, async () => {
    await testPage.knowMore();
});