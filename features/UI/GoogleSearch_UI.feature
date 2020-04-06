Feature: Google Map

  @asad @google-maps-car
  Scenario: Validate car distance on google maps
    Given I go to Google Maps
    When I input source and destination in maps
    Then I verify car distance in the maps

  @asad @google-maps-walk
  Scenario: Validate walking distance on google maps
    Given I go to Google Maps
    When I input source and destination in maps
    Then I verify walking distance in the maps

  @asad @google-maps-bicycle
  Scenario: Validate bicycle distance on google maps
    Given I go to Google Maps
    When I input source and destination in maps
    Then I verify bicycle distance and includes ferry in the maps

  @asad @google-maps-edge-case
  Scenario: Validate flight distance on google maps
    Given I go to Google Maps
    When I input source and destination in maps
    When I check flights information by clicking google flights
    Then I verify how forward a flight can be booked