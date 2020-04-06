## Test Cases Included

For this demo I have 4 test cases implemented. These test cases are validating the following scenarios: 

Test Case #1: Validate car distance on google maps from PA to CA is more than 40 hours
Test Case #2: Validate walking distance on google maps from PA to CA is more than 900 hours
Test Case #3: Validate bicycle distance on google maps from PA to CA is more than 250 horus and includes Ferry in the directions
Test Case #4(Edge Case): Validate flight booking from google maps doesn't allow booking for more than 11 months in the future 

##Framework-Page Object Model Overview
I am using Cucumber BDD framework with Page Object Model. Language used for this framework is javascript. npm libraries are used for implementing this BDD framework.


Overview of the Page Object Model 

1)Feature file includes all the test cases setup as individual scenarios. 
2)Logic behind each step is inside the step definition file. 
3)All the common functions used in the project are driverUtil file
4)config file includes the url and basic information for common variables. 
5)pageUtils includes all the elements and their xpaths that are being used for automation. 
6)environment file includes the before and after methods for all the tests
7)All the reports are generated and kept in the reports folder. 



#Installations for environment setup
1)Run npm install. (In this project I am including all the modules already)

1)  Run commands `npm install cucumber` to make sure node modules for cucumber are present.

#Test Execution: 

2) Run `node node_modules/cucumber/bin/cucumber-js features/UI -f json:features/reports/cucumber_report.json` to run the tests in the fetaure file

3) Run `node index.js` to generate report. Report is generated in reports folder

