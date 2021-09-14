package com.tau.runners;

import org.junit.runner.RunWith;

import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		glue= {"com.tau.steps"},
		features="src/test/resources",
		plugin= {"pretty",
		"html:target/site/cucumber-pretty",
		"json:target/cucumber.json"
		},		
		dryRun = false,
		monochrome = true
		)

public class RunCucumberTests {

}
