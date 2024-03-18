Feature: Test
  Scenario: Verify Qentelli Website Pages
    Given I navigate to the Qentelli Website
    Then I verify Company brand is displayed
    And I verify About Us Navigation link is displayed
    When I click on About Us Navigation link
    Then I verify About Us page is displayed
    And I verify Contact Us Navigation link is displayed
    When I click on Contact Us Navigation link
    Then I verify Contact Us page is displayed

   Scenario: Verify Quality Engineering page in qentelli website
    Given I navigate to the Qentelli Website
    Then I verify Company brand is displayed
    And I hover on Solutions tab
    Then I click on Quality Engineering Navigation link
    Then I verify Quality Engineering element is displayed
    And I verify sub-text element is displayed
    Then I verify the label is displayed
    Then I click on Talk to an expert button