#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
Feature: Login Functionality
  In order to do internet banking
  As a valid Para Bank customer
  I want to login successfully

  Scenario Outline: Login Successful
    Given I am in the login page of the Para Bank Application
    When I enter valid <username> and <password> with <userFullName>
    Then I should be taken to the Overview page

    Examples: 
      | username     | password   |	userFullName  |
      | "autotester" | "password" | "Auto Tester" |
      | "john"       | "demo"     | "John Smith" |
