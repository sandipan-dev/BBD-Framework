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

Then(/^I hover on Solutions tab$/, async () => {
    await testPage.verifySolutionsIsDisplayed();
});

Then(/^I click on Quality Engineering Navigation link$/, async () => {
    await testPage.clickQualityEngineering();
});

Then(/^I verify Quality Engineering element is displayed$/, async () => {
    await testPage.verifyQEServicesELementIsDisplayed();
});

Then(/^I verify sub-text element is displayed$/, async () => {
    await testPage.verifyQEServicesSubELementIsDisplayed();
});

Then(/^I verify the label is displayed$/, async () => {
    await testPage.verifyQualityLabel();
});

Then(/^I click on Talk to an expert button$/, async () => {
    await testPage.clickTalkToExpert();
});