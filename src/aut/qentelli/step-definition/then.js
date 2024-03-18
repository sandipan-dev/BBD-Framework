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
// click product btn
Then(/^I click on products$/, async () => {
    await testPage.clickProd();
});
Then(/^I click on Thought Leadership$/, async () => {
    await testPage.TLedership();
});
Then(/^I verify linkedin link$/, async () => {
    await testPage.Linkedin_M();
});
Then(/^I verify glassdoor link$/, async () => {
    await testPage.Glassdoor_M();
});
Then(/^I verify instagram$/, async () => {
    await testPage.Instagram_M();
});
Then(/^I verify facebook$/, async () => {
    await testPage.Facebook_M();
});
Then(/^I verify x$/, async () => {
    await testPage.X_M();
});
Then(/^I verify on Contact Us link$/, async () => {
    await testPage.X_M();
});
Then(/^I verify on Privacy Policy$/, async () => {
    await testPage.X_M();
});
Then(/^I verify left side text of social media icons$/, async () => {
    await testPage.X_M();
});