Feature: Test


Scenario: Click on Products and navigate to Thought Leadership page and verify Insights
Given I navigate to the Qentelli Website
Then I verify Company brand is displayed
When I click on PRODUCTS Navigation link
When I click on Thought Leadership Navigation link
Then I verify Insights page is displayed
Then I verify paragraph one is displayed
Then I verify paragraph two is displayed
Then I verify paragraph three is displayed
