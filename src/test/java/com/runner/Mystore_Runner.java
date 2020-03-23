package com.runner;

	import org.junit.runner.RunWith;

	import cucumber.api.CucumberOptions;
	import cucumber.api.junit.Cucumber;

	@RunWith(Cucumber.class)
	@CucumberOptions(
			features = "src/main/resources/feature/featureFile.feature",
			plugin = {"pretty", "html:reports/cucumber-html-report"},
			tags = {"@TC08_Yourlogo"},
			glue = {"com.stepdefinitions"},
			monochrome = true
			)
	
public class Mystore_Runner {

	}

