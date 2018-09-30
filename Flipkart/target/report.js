$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LoginFeature.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    }
  ],
  "line": 4,
  "name": "Working of Login functionality",
  "description": "",
  "id": "working-of-login-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "line": 7,
  "name": "Login with correct credentials",
  "description": "",
  "id": "working-of-login-functionality;login-with-correct-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User login to application url",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});