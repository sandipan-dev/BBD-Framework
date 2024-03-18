Feature: Solutions
 Scenario: Validate Explore Testimonials
  Given I navigate to the Qentelli Website
  When I Mousehover to Solutions
  Then I Verify Blue Box text
  Then I Verify Explore Testimonials button
  When I Click on Explore Testimonials button
  Then I Verify the YPO Text
  Then I Verify the Person Name
  Then I Verify the Disignation
  And I Verify Know More Button