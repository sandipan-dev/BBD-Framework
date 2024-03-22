Feature: Thought Leadership
  # Scenario: Validate thought leadership link
  #  Given I navigate to the Qentelli Website
  #  Then I verify Thought Leadership link is displayed
  #  When I click on Thought Leadership link
  #  Then I verify case studies link is displayed
  #  And I verify Insights link is displayed
  # Scenario: Validate Insights Link
  #  Given I navigate to the Qentelli Website
  #  And I click on Thought Leadership link
  #  When I click on Insights link
  #  Then I verify Insights text
  #  And I verify Application Security link
  # Scenario: Validate and Submit Application Security form
  #  Given I navigate to the Qentelli Website
  #  When I click on Thought Leadership link
  #  And I click on Insights link
  #  And I click on Application Security Navigation link
  #  Then I Verify Application Security Submittion form
  #  And I Verify Application Security Image
  Scenario: Validate error message
   Given I navigate to the Qentelli Website
   When I Mousehover to Solutions
   And I click on Digital Innovation Link
   And I click on Talk to on expert button by giving empty email field
   Then I Verify Error Message



