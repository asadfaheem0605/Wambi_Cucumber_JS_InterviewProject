const { By } = require('selenium-webdriver');

const uiElements = {};

uiElements.directionBtn=By.xpath("//button[@id='searchbox-directions']");
uiElements.sourceField=By.xpath("(//input[@class='tactile-searchbox-input'])[3]");
uiElements.destinationField=By.xpath("(//input[@class='tactile-searchbox-input'])[4]");
uiElements.carBtn=By.xpath("//div[@data-travel_mode='0']");
uiElements.cycleBtn=By.xpath("//div[@data-travel_mode='1']");
uiElements.flightBtn=By.xpath("//div[@data-travel_mode='4']");
uiElements.walkBtn=By.xpath("//div[@data-travel_mode='2']");
uiElements.carFirstResultHours=By.xpath("(//div[@class='section-directions-trip-duration delay-light']/span)[1]");
uiElements.walkBicycleFirstResultHours=By.xpath("//div[@class='section-directions-trip-duration']");
uiElements.walkFirstResultMiles=By.xpath("//div[@class='section-directions-trip-distance section-directions-trip-secondary-text']");
uiElements.ferryMessage=By.xpath("(//h6[@class='notice-headline'])[1]");
uiElements.flightResultLink=By.xpath("(//a[@class='section-directions-trip-flight-search-link'])[1]");
uiElements.fromDate=By.xpath("(//div[@class='gws-flights__flex-filler gws-flights__ellipsize gws-flights-form__input-target'])[1]");
uiElements.toDate=By.xpath("(//div[@class='gws-flights__flex-filler gws-flights__ellipsize gws-flights-form__input-target'])[2]");
uiElements.firstAvailDate=By.xpath("(//calendar-day[@class='gws-travel-calendar__day'])[1]");
uiElements.availDate=By.xpath("(//calendar-day[@class='gws-travel-calendar__day'])");
uiElements.nextMonthSelectionBtn=By.xpath("//div[@class='njjicd rSFy9b']");
uiElements.nextMonthSelectionBtnDisabled=By.xpath("//div[@class='njjicd rSFy9b gws-travel-calendar__disabled']");

module.exports = uiElements;