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

Then(/^I verify Products Navigation link is displayed$/, async () => {
    await testPage.verifyProductsNav();
});

Then(/^I verify Prodcuts page is displayed$/, async () => {
    await testPage.verifyProductsPage();
});

Then(/^I verify TED page is displayed$/, async () => {
    await testPage.verifyTEDPage();
});

Then(/^I verify Focus on Your Core Business. Let TED Handle the Complexities text is displayed$/, async () => {
    await testPage.verifyTEDSubPage();
});

Then(/^I verify Company Email text box is displayed$/, async () => {
    await testPage.verifyTEDEmailTextBox();
});

Then(/^I verify Request a Demo button is displayed$/, async () => {
    await testPage.verifyTEDEmailDemoButton();
});