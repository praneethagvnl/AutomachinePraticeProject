$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/feature/featureFile.feature");
formatter.feature({
  "line": 2,
  "name": "Yourlogo Website",
  "description": "",
  "id": "yourlogo-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Yourlogo"
    }
  ]
});
formatter.scenario({
  "line": 69,
  "name": "",
  "description": "checking list or grid view",
  "id": "yourlogo-website;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 68,
      "name": "@TC08_Yourlogo"
    }
  ]
});
formatter.step({
  "line": 71,
  "name": "to launch chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 72,
  "name": "open home page of the given webapplication",
  "keyword": "When "
});
formatter.step({
  "line": 73,
  "name": "login to web application using username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 74,
  "name": "click on login button and the page navigate to next page",
  "keyword": "Then "
});
formatter.step({
  "line": 75,
  "name": "select new products options from footer",
  "keyword": "Then "
});
formatter.match({
  "location": "newProductsSteps.to_launch_chrome_application()"
});
formatter.result({
  "duration": 27955808699,
  "status": "passed"
});
formatter.match({
  "location": "newProductsSteps.open_home_page_of_the_given_webapplication()"
});
formatter.result({
  "duration": 13418610940,
  "status": "passed"
});
formatter.match({
  "location": "newProductsSteps.login_to_web_application_using_username_and_password()"
});
formatter.result({
  "duration": 9360914971,
  "status": "passed"
});
formatter.match({
  "location": "newProductsSteps.click_on_login_button_and_the_page_navigate_to_next_page()"
});
formatter.result({
  "duration": 5998989653,
  "status": "passed"
});
formatter.match({
  "location": "newProductsSteps.select_new_products_options_from_footer()"
});
formatter.result({
  "duration": 6681795702,
  "status": "passed"
});
});