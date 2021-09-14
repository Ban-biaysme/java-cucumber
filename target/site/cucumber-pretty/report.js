$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Login.feature");
formatter.feature({
  "name": "Login Functionality",
  "description": "  In order to do internet banking\n  As a valid Para Bank customer\n  I want to login successfully",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Login Successful",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am in the login page of the Para Bank Application",
  "keyword": "Given "
});
formatter.step({
  "name": "I enter valid \u003cusername\u003e and \u003cpassword\u003e with \u003cuserFullName\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "I should be taken to the Overview page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "userFullName"
      ]
    },
    {
      "cells": [
        "\"autotester\"",
        "\"password\"",
        "\"Auto Tester\""
      ]
    },
    {
      "cells": [
        "\"john\"",
        "\"demo\"",
        "\"John Smith\""
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login Successful",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in the login page of the Para Bank Application",
  "keyword": "Given "
});
formatter.match({
  "location": "com.tau.steps.Steps.i_am_in_the_login_page_of_the_Para_Bank_Application() in file:/C:/Users/Biyas-Anirban/eclipse-workspace/tau-cucumber-course/target/test-classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter valid \"autotester\" and \"password\" with \"Auto Tester\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.tau.steps.Steps.i_enter_valid_credentials(String,String,String) in file:/C:/Users/Biyas-Anirban/eclipse-workspace/tau-cucumber-course/target/test-classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be taken to the Overview page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.tau.steps.Steps.i_should_be_taken_to_the_Overview_page() in file:/C:/Users/Biyas-Anirban/eclipse-workspace/tau-cucumber-course/target/test-classes/"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login Successful",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in the login page of the Para Bank Application",
  "keyword": "Given "
});
formatter.match({
  "location": "com.tau.steps.Steps.i_am_in_the_login_page_of_the_Para_Bank_Application() in file:/C:/Users/Biyas-Anirban/eclipse-workspace/tau-cucumber-course/target/test-classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter valid \"john\" and \"demo\" with \"John Smith\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.tau.steps.Steps.i_enter_valid_credentials(String,String,String) in file:/C:/Users/Biyas-Anirban/eclipse-workspace/tau-cucumber-course/target/test-classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be taken to the Overview page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.tau.steps.Steps.i_should_be_taken_to_the_Overview_page() in file:/C:/Users/Biyas-Anirban/eclipse-workspace/tau-cucumber-course/target/test-classes/"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Login2.feature");
formatter.feature({
  "name": "Login Functionality",
  "description": "  In order to do internet banking\n  As a valid Para Bank customer\n  I want to login successfully",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Login Successful",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am in the login page of the Para Bank Application",
  "keyword": "Given "
});
formatter.step({
  "name": "I enter valid \u003cusername\u003e and \u003cpassword\u003e with \u003cuserFullName\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "I should be taken to the Overview page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "userFullName"
      ]
    },
    {
      "cells": [
        "\"autotester\"",
        "\"password\"",
        "\"Auto Tester\""
      ]
    },
    {
      "cells": [
        "\"john\"",
        "\"demo\"",
        "\"John Smith\""
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login Successful",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in the login page of the Para Bank Application",
  "keyword": "Given "
});
formatter.match({
  "location": "com.tau.steps.Steps.i_am_in_the_login_page_of_the_Para_Bank_Application() in file:/C:/Users/Biyas-Anirban/eclipse-workspace/tau-cucumber-course/target/test-classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter valid \"autotester\" and \"password\" with \"Auto Tester\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.tau.steps.Steps.i_enter_valid_credentials(String,String,String) in file:/C:/Users/Biyas-Anirban/eclipse-workspace/tau-cucumber-course/target/test-classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be taken to the Overview page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.tau.steps.Steps.i_should_be_taken_to_the_Overview_page() in file:/C:/Users/Biyas-Anirban/eclipse-workspace/tau-cucumber-course/target/test-classes/"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login Successful",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am in the login page of the Para Bank Application",
  "keyword": "Given "
});
formatter.match({
  "location": "com.tau.steps.Steps.i_am_in_the_login_page_of_the_Para_Bank_Application() in file:/C:/Users/Biyas-Anirban/eclipse-workspace/tau-cucumber-course/target/test-classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter valid \"john\" and \"demo\" with \"John Smith\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.tau.steps.Steps.i_enter_valid_credentials(String,String,String) in file:/C:/Users/Biyas-Anirban/eclipse-workspace/tau-cucumber-course/target/test-classes/"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be taken to the Overview page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.tau.steps.Steps.i_should_be_taken_to_the_Overview_page() in file:/C:/Users/Biyas-Anirban/eclipse-workspace/tau-cucumber-course/target/test-classes/"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});