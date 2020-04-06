const { Before, Given, When, And, Then, setDefaultTimeout } = require('cucumber');
const { driver } = require('../utilities/driver');
const { click, sendKeys, sendEnter, text, wait, count, clear, switchWindow, sleepDriver, WAIT, BY } = require('../utilities/driver-util');
const { By, Key, until } = require('selenium-webdriver');
const { sconfig } = require('../utilities/config');
const assert = require('assert');
const uiElements = require('../utilities/uiElements');
setDefaultTimeout(60 * 1000);


Given("I go to Google Maps", async function () {
    await driver.get(sconfig.googleMapUrl);
});

When("I input source and destination in maps", async function () {
    await click(uiElements.directionBtn);
    await wait(uiElements.sourceField);
    await clear(uiElements.sourceField);
    await sendKeys(uiElements.sourceField, sconfig.source);
    await clear(uiElements.destinationField);
    await sendKeys(uiElements.destinationField, sconfig.destination);
    await sendEnter(uiElements.destinationField);
});

When("I check flights information by clicking google flights", async function () {
    await wait(uiElements.walkBicycleFirstResultHours);
    await click(uiElements.flightBtn);
    await wait(uiElements.flightResultLink);
    await click(uiElements.flightResultLink);
    await sleepDriver(WAIT.UNIT3);
    driver.getAllWindowHandles().then(async function (handles) {
        if (handles.length > 1) {
            driver.switchTo().window(handles[handles.length - 1]);
        }
    });
    await wait(uiElements.fromDate);
});

Then("I verify car distance in the maps", async function () {
    await wait(uiElements.carFirstResultHours);
    var hours = await text(uiElements.carFirstResultHours);
    console.log("Number of hours: " + hours);
    var hoursValue = parseInt(hours.substr(0, hours.length - 1));
    console.log("Number of hours by Car: "+ hoursValue);
    await assert(hoursValue > sconfig.carHoursMin);
});

Then("I verify walking distance in the maps", async function () {
    await wait(uiElements.carFirstResultHours);
    await click(uiElements.walkBtn);
    await wait(uiElements.walkFirstResultMiles);
    await sleepDriver(WAIT.UNIT3);
    var miles = await text(uiElements.walkFirstResultMiles);
    console.log("Number of miles: " + miles);
    var milesValue = parseInt(miles.replace(/\D/g,''));//.substr(0, hours.length - 1));
    console.log("Number of miles by Walk: " + milesValue);
    await assert(milesValue > sconfig.walkMilesMin);
});

Then("I verify bicycle distance and includes ferry in the maps", async function () {
    await wait(uiElements.walkBicycleFirstResultHours);
    await click(uiElements.cycleBtn);
    await wait(uiElements.walkBicycleFirstResultHours);
    await sleepDriver(WAIT.UNIT3);
    var hours = await text(uiElements.walkBicycleFirstResultHours);
    console.log("Number of hours: " + hours);
    var hoursValue = parseInt(hours.substr(0, hours.length - 1));
    console.log("Number of hours by Bicycle: " + hoursValue);
    await assert(hoursValue > sconfig.bicycleHoursMin);
    let ferryMsg = await text(uiElements.ferryMessage);
    console.log("Ferry Message is: " + ferryMsg);
    await assert.equal(ferryMsg, sconfig.ferryIncludedMsg);
});

Then("I verify how forward a flight can be booked", async function () {
    await click(uiElements.fromDate);
    await wait(uiElements.firstAvailDate);
    await sleepDriver(WAIT.UNIT1);
    await click(uiElements.firstAvailDate);
    await sleepDriver(WAIT.UNIT2);
    var availToClickCount = await count(uiElements.availDate);
    console.log("availToClickCount: "+availToClickCount);
    var numOfMonthsAvaialble = parseInt(availToClickCount / 30);
    console.log("Number of months to book ahead from elements: "+numOfMonthsAvaialble);
    var availCheckCount = 1;

    try {
        for (i=1; i<(numOfMonthsAvaialble+1); i++) {
            console.log("Next month selection clicked");
            await click(uiElements.nextMonthSelectionBtn);
            availCheckCount = availCheckCount + 1;
        }
    } catch (err) {
        await click(uiElements.nextMonthSelectionBtnDisabled);
        console.log("Number of months to book ahead from next month click: " + availCheckCount);
        await assert.equal(availCheckCount, numOfMonthsAvaialble)
    }
});