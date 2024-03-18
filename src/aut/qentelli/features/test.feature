Feature: Test
#  Scenario: Verify Qentelli Website Pages
#    Given I navigate to the Qentelli Website
#    Then I verify Company brand is displayed
#     And I verify About Us Navigation link is displayed
#     When I click on About Us Navigation link
#     Then I verify About Us page is displayed
#     And I verify Contact Us Navigation link is displayed
#     When I click on Contact Us Navigation link
#     Then I verify Contact Us page is displayed

  Scenario: Verify Qentelli Website Pages
    Given I navigate to the Qentelli Website
    Then I click on products
    And I click on Thought Leadership
    Then I verify linkedin link
    And I verify glassdoor link
    Then I verify instagram
    And I verify facebook
    Then I verify x
    And I verify on Contact Us link
    Then I verify on Privacy Policy
    And I verify left side text of social media icons
