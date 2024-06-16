#language: en
Feature: Shopping Experience on Clothing Store

Scenario: Navigate and Purchase from Clothing Store

  Given user acessa the Clothing Store website
  
  When user scrolls halfway down the page
  And selects a product to view its details
  And specifies the quantity as 30
  And adds the product to their cart
  Then user proceeds to checkout
  
  When user enters their email address and registers
  And completes all required account details
  And successfully creates their account
  Then user continues after account creation
  
  When user accesses their cart from the header
  And proceeds to checkout once more
  And adds a comment before placing the order
  
  When user provides fake credit card information
  And completes the payment to confirm the order
  And proceeds after successful payment
  Then user logs out from their account
  
  When user logs in using their existing credentials
  And navigates to the contact us page
  And fills out the contact form and submits
  And confirms the submission pop-up
  Then user logs out once more
