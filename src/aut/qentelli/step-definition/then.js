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

Then (/^I verify the Thought LeaderShip page is displayed$/, async () =>{
    await testPage.verifyThoughtLeaderShipPage();
});

Then(/^Case Studies page and title is displayed$/, async()=>{
    await action.pause(2000);
    await testPage.verifyCaseStudyPage();
});  

Then(/^verify the optimize link and read link is displayed$/, async()=>{
   await testPage.verifyOptimizeLink();
});

Then(/^Verify the Empowering global RPA and read links$/, async()=>{
await testPage.verifyempowerink();
}
);

Then(/^Verify the Microservices & Serverless and read links$/, async()=>{
await testPage.verifyMicroServiceLink();
});