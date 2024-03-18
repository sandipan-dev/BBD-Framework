Feature: Test

  Scenario: Verify TED page 
    Given I navigate to the Qentelli Website
    Then I verify Company brand is displayed
    And I verify Products Navigation link is displayed
    When I click on Products Navigation link
    Then I verify Prodcuts page is displayed
    When I click on Learn More About TED text
    Then I verify TED page is displayed
    And I verify Focus on Your Core Business. Let TED Handle the Complexities text is displayed
    And I verify Company Email text box is displayed
    And I verify Request a Demo button is displayed
  
    

