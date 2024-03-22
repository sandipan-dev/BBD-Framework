Feature: Test
  Background: 
    Given I navigate to the Qentelli Website
  Scenario: Verify Qentelli Website Pages

    # Then I verify Company brand is displayed
    # And I verify About Us Navigation link is displayed
    # When I click on About Us Navigation link
    # Then I verify About Us page is displayed
    # And I verify Contact Us Navigation link is displayed
    # When I click on Contact Us Navigation link
    # Then I verify Contact Us page is displayed

  Scenario:I verify the casestudy page in the QeGiven I navigate to the Qentelli Website
      Then I verify Company brand is displayed
      When I click on the Thought LeaderShip tab
      Then I verify the Thought LeaderShip page is displayed
      When I click on Case Studies link
      Then Case Studies page and title is displayed
      Then verify the optimize link and read link is displayed 
      Then Verify the Empowering global RPA and read links
      Then Verify the Microservices & Serverless and read links 
