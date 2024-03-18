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

  @Thought
  Scenario: Verify Qentelli Thought Leadership
    Given I navigate to the Qentelli Website
    When I click on Thought Leadership in solutions
    Then I verify the paragraph is displayed
    And I verify the text content 
    And I verify the first insight text is displayed
    When I click on first insight read more
    Then I verify the insight page is displayed