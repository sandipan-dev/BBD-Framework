Feature: Test
#   Scenario: Verify Qentelli Website Pages
#     Given I navigate to the Qentelli Website
#     Then I verify Company brand is displayed
#     And I verify About Us Navigation link is displayed
#     When I click on About Us Navigation link
#     Then I verify About Us page is displayed
#     And I verify Contact Us Navigation link is displayed
#     When I click on Contact Us Navigation link
#     Then I verify Contact Us page is displayed

  # Scenario: Verify Qentelli Products page
  #   Given I navigate to the Qentelli Website
  #   Then I click on Products link
  #   And I validate various products offerings

  # Scenario: Validate Products details
  #   Given I navigate to the Qentelli Website
  #   Then I click on Products link
  #   And I verify the products text
  
  Scenario: Verify various links in Contact Us menu
    Given I navigate to the Qentelli Website
    Then I click on Products link
    And I verify Contact Us Navigation link is displayed
    When I click on Contact Us Navigation link
    Then I verify various links in contact us page






