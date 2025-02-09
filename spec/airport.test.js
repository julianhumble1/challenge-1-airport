import { airport } from '../src/airport.js';
import { assertEquals, assertTrue, assertFalse } from './test-framework/testFramework.js';
import chalk from 'chalk';

const afterEach = () => {
    expected = undefined;
    actual = undefined;
    result = undefined;
    testPlane = undefined;
    airport.planeList = [];
    airport.setMaxCapacity(10);
}

//? User Story 1
console.log(chalk.blue("USER STORY 1"))
console.log("----------------------------------")

//* Test 1: Test that planeList.length increases by 1 after performing instructPlaneLanding()

console.log("Test 1:")
console.log("----------------")
console.log("Test that planeList.length increases by 1 after performing instructPlaneLanding()");

// Arrange
let expected = airport.getPlaneList().length + 1;
let actual, result;
let testPlane = { "id":"BA-1" };
// Act
airport.instructPlaneLanding(testPlane);
// Assert
actual = airport.getPlaneList().length;
result = assertEquals(actual, expected);
// Report
console.log(result ? chalk.green("Pass") : chalk.red("Fail"));
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log("----------------")

// Clean Up
afterEach();

//! End of Test 1

//* Test 2: Test that planeList includes the new plane after performing instructPlaneLanding()

console.log("Test 2:")
console.log("----------------")
console.log("Test that planeList includes the new plane after performing instructPlaneLanding()");

// Arrange
testPlane = { "id":"BA-1" };
// Act
airport.instructPlaneLanding(testPlane);
// Assert
actual = airport.getPlaneList().includes(testPlane);
result = assertTrue(actual);
// Report
console.log(result ? chalk.green("Pass") : chalk.red("Fail"));
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log("----------------")

// Clean Up
afterEach();

//! End of Test 2

//* Test 3: Test that the new plane is added for a airport already holding some planes

console.log("Test 3:")
console.log("----------------")
console.log("Test that the new plane is added for a airport already holding some planes");

// Arrange
testPlane = { "id": "BA-1" };
airport.instructPlaneLanding(testPlane);
let testPlane2 = { "id": "BA-2" };
expected = airport.getPlaneList().length + 1;
// Act
airport.instructPlaneLanding(testPlane2);
// Assert
actual = airport.getPlaneList().length;
result = assertEquals(actual, expected);
// Report
console.log(result ? chalk.green("Pass") : chalk.red("Fail"));
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log("----------------")

// Clean Up
afterEach();
testPlane2 = undefined;

//! End of Test 3

//* Test 4: Test that a null 'plane' can not be landed at the airport 

console.log("Test 4:")
console.log("----------------")
console.log("Test that a null 'plane' can not be landed at the airport ");

// Arrange
let testNull = null;
expected = airport.getPlaneList().length;
// Act
airport.instructPlaneLanding(testNull);
// Assert
actual = airport.getPlaneList().length;
result = assertEquals(actual, expected);
// Report
console.log(result ? chalk.green("Pass") : chalk.red("Fail"));
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log("----------------")

// Clean Up
afterEach();

//! End of Test 4

//? User Story 2
console.log(chalk.blue("USER STORY 2"))
console.log("----------------------------------")

//* Test 1: Test that spaceAvailable() returns false if planeList is longer than the capacity

console.log("Test 1:")
console.log("----------------")
console.log("Test that spaceAvailable() returns false if planeList is longer than the capacity");

// Arrange
let testPlaneList = [{ "id": "BA-1" }, { "id": "BA-2" }, { "id": "BA-3" }, { "id": "BA-4" }, { "id": "BA-5" }, { "id": "BA-6" }, { "id": "BA-7" }, { "id": "BA-8" }, { "id": "BA-9" }, { "id": "BA-10" }, { "id": "BA-11" }];

for (let i = 0; i < testPlaneList.length; i++) {
    airport.instructPlaneLanding(testPlaneList[i]);
}

// Act
actual = airport.spaceAvailable();
// Assert
result = assertFalse(actual);
// Report
console.log(result ? chalk.green("Pass") : chalk.red("Fail"));
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log("----------------")

// Clean Up
afterEach();
testPlaneList = undefined;

//! End of Test 1

//* Test 2: Test that spaceAvailable() returns false if planeList is equal to the capacity

console.log("Test 2:")
console.log("----------------")
console.log("Test that spaceAvailable() returns false if planeList is equal to the capacity");

// Arrange
testPlaneList = [{ "id": "BA-1" }, { "id": "BA-2" }, { "id": "BA-3" }, { "id": "BA-4" }, { "id": "BA-5" }, { "id": "BA-6" }, { "id": "BA-7" }, { "id": "BA-8" }, { "id": "BA-9" }, { "id": "BA-10" }];

for (let i = 0; i < testPlaneList.length; i++) {
    airport.instructPlaneLanding(testPlaneList[i]);
}

// Act
actual = airport.spaceAvailable();
// Assert
result = assertFalse(actual);
// Report
console.log(result ? chalk.green("Pass") : chalk.red("Fail"));
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log("----------------")

// Clean Up
afterEach();
testPlaneList = undefined;

//! End of Test 2

//* Test 3: Test that spaceAvailable() returns true if planeList is shorter than the capacity

console.log("Test 3:")
console.log("----------------")
console.log("Test that spaceAvailable() returns true if planeList is shorter than the capacity");

// Arrange

// Act
actual = airport.spaceAvailable();
// Assert
result = assertTrue(actual)
// Report
console.log(result ? chalk.green("Pass") : chalk.red("Fail"));
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log("----------------")

// Clean Up
afterEach();

//! End of Test 3

//* Test 4: Test that I can land a plane if spaceAvailable is true

console.log("Test 4:")
console.log("----------------")
console.log("Test that I can land a plane if spaceAvailable is true");

// Arrange
testPlane = { "id": "BA-1" };
expected = airport.getPlaneList().length + 1;
// Act
airport.instructPlaneLanding(testPlane);
// Assert
actual = airport.getPlaneList().length;
result = assertEquals(actual, expected);
// Report
console.log(result ? chalk.green("Pass") : chalk.red("Fail"));
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log("----------------")

// Clean Up
afterEach();

//! End of Test 4

//* Test 5: Test that I am not able to land a plane if spaceAvailable is false

console.log("Test 5:")
console.log("----------------")
console.log("Test that I am not able to land a plane if spaceAvailable is false");

// Arrange
testPlaneList = [{ "id": "BA-1" }, { "id": "BA-2" }, { "id": "BA-3" }, { "id": "BA-4" }, { "id": "BA-5" }, { "id": "BA-6" }, { "id": "BA-7" }, { "id": "BA-8" }, { "id": "BA-9" }, { "id": "BA-10" }];

for (let i = 0; i < testPlaneList.length; i++) {
    airport.instructPlaneLanding(testPlaneList[i]);
}

testPlane = { "id": "BA-11"};

expected = airport.getPlaneList().length;
// Act
airport.instructPlaneLanding(testPlane);
// Assert
actual = airport.getPlaneList().length;
result = assertEquals(actual, expected);
// Report
console.log(result ? chalk.green("Pass") : chalk.red("Fail"));
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log("----------------")

// Clean Up
afterEach();
testPlaneList = undefined;

//! End of Test 5

//? User Story 3
console.log(chalk.blue("USER STORY 3"))
console.log("----------------------------------")

//* Test 1: Test that instructing a plane to take off reduces length of planeList() by 1

console.log("Test 1:")
console.log("----------------")
console.log("Test that instructing a plane to take off reduces length of planeList() by 1");

// Arrange
testPlane = { "id": "BA-1" };
airport.instructPlaneLanding(testPlane);
expected = airport.getPlaneList().length - 1;
// Act
airport.instructPlaneTakeoff(testPlane);
// Assert
actual = airport.getPlaneList().length;
result = assertEquals(actual, expected);
// Report
console.log(result ? chalk.green("Pass") : chalk.red("Fail"));
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log("----------------")

// Clean Up
afterEach();

//! End of Test 1

//* Test 2: Test that after instructing a plane to leave, that plane is no longer in the planeList

console.log("Test 2:")
console.log("----------------")
console.log("Test that after instructing a plane to leave, that plane is no longer in the planeList");

// Arrange
testPlane = { "id": "BA-1" };
airport.instructPlaneLanding(testPlane);
// Act
airport.instructPlaneTakeoff(testPlane);
// Assert
actual = airport.getPlaneList().includes(testPlane);
result = assertFalse(actual);
// Report
console.log(result ? chalk.green("Pass") : chalk.red("Fail"));
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log("----------------")

// Clean Up
afterEach();

//! End of Test 2

//* Test 3: Test that we can instruct a plane to leave if there are multiple planes in the airport to start with

console.log("Test 3:")
console.log("----------------")
console.log("Test that we can instruct a plane to leave if there are multiple planes in the airport to start with");

// Arrange
testPlane = { "id": "BA-1" };
airport.instructPlaneLanding(testPlane);

testPlane2 = { "id": "BA-2" };
airport.instructPlaneLanding(testPlane2);

expected = airport.getPlaneList().length - 1
// Act
airport.instructPlaneTakeoff(testPlane2);
// Assert
actual = airport.getPlaneList().length;
result = assertEquals(actual, expected)
// Report
console.log(result ? chalk.green("Pass") : chalk.red("Fail"));
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log("----------------")

// Clean Up
afterEach();
testPlane2 = undefined;

//! End of Test 3

//? User Story 4
console.log(chalk.blue("USER STORY 4"))
console.log("----------------------------------")

//* Test 1: Test that planeAtAirport(plane) returns true if the plane is at the airport

console.log("Test 1:")
console.log("----------------")
console.log("Test that planeAtAirport(plane) returns true if the plane is at the airport");

// Arrange
testPlane = { "id": "BA-1" };
airport.instructPlaneLanding(testPlane);
// Act
actual = airport.planeAtAirport(testPlane);
// Assert
result = assertTrue(actual);
// Report
console.log(result ? chalk.green("Pass") : chalk.red("Fail"));
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log("----------------")

// Clean Up
afterEach();

//! End of Test 1

//* Test 2: Test that planeAtAirport(plane) returns false for an empty airport

console.log("Test 2:")
console.log("----------------")
console.log("Test that planeAtAirport(plane) returns false for an empty airport");

// Arrange
testPlane = { "id": "BA-1" };
// Act
actual = airport.planeAtAirport(testPlane);
// Assert
result = assertFalse(actual);
// Report
console.log(result ? chalk.green("Pass") : chalk.red("Fail"));
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log("----------------")

// Clean Up
afterEach();

//! End of Test 2

//* Test 3: Test that planeAtAirport(plane) returns false if the plane is not at the airport even if there are other planes already

console.log("Test 3:")
console.log("----------------")
console.log("Test that planeAtAirport(plane) returns false if the plane is not at the airport even if there are other planes already");

// Arrange
testPlane = { "id": "BA-1" };
airport.instructPlaneLanding(testPlane)
testPlane2 = { "id": "BA-2" };
// Act
actual = airport.planeAtAirport(testPlane2);
// Assert
result = assertFalse(actual);
// Report
console.log(result ? chalk.green("Pass") : chalk.red("Fail"));
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log("----------------")

// Clean Up
afterEach();
testPlane2 = undefined;

//! End of Test 3

//* Test 4: Test that if a plane is already at an airport then we can't instruct the plane to land

console.log("Test 4:")
console.log("----------------")
console.log("Test that if a plane is already at an airport then we can't instruct the plane to land");

// Arrange
testPlane = { "id": "BA-1" };
airport.instructPlaneLanding(testPlane)
expected = airport.getPlaneList().length;
// Act
airport.instructPlaneLanding(testPlane);
actual = airport.getPlaneList().length;
// Assert
result = assertEquals(actual, expected);
// Report
console.log(result ? chalk.green("Pass") : chalk.red("Fail"));
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log("----------------")

// Clean Up
afterEach();

//! End of Test 4

//* Test 5: Test that if a plane is not already at an airport then we can instruct the plane to land

console.log("Test 5:")
console.log("----------------")
console.log("Test that if a plane is not already at an airport then we can instruct the plane to land");

// Arrange
testPlane = { "id": "BA-1" };
expected = airport.getPlaneList().length + 1;
// Act
airport.instructPlaneLanding(testPlane);
actual = airport.getPlaneList().length;
// Assert
result = assertEquals(actual, expected);
// Report
console.log(result ? chalk.green("Pass") : chalk.red("Fail"));
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log("----------------")

// Clean Up
afterEach();

//! End of Test 5

//? User Story 5
console.log(chalk.blue("USER STORY 5"))
console.log("----------------------------------")

//* Test 1: Test that if a plane is the only plane at the airport then we can instruct it to leave

console.log("Test 1:")
console.log("----------------")
console.log("Test that if a plane is the only plane at the airport then we can instruct it to leave");

// Arrange
testPlane = { "id": "BA-1"};
airport.instructPlaneLanding(testPlane);
expected = airport.getPlaneList().length - 1;
// Act
airport.instructPlaneTakeoff(testPlane);
// Assert
actual = airport.getPlaneList().length;
result = assertEquals(actual, expected);
// Report
console.log(result ? chalk.green("Pass") : chalk.red("Fail"));
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log("----------------")

// Clean Up
afterEach();

//! End of Test 1

//* Test 2: Test that if a plane is one of many planes at the airport we can instruct it to leave

console.log("Test 2:")
console.log("----------------")
console.log("Test that if a plane is one of many planes at the airport we can instruct it to leave");

// Arrange
testPlane = { "id": "BA-1"};
airport.instructPlaneLanding(testPlane);
testPlane2 = { "id": "BA-2" };
airport.instructPlaneLanding(testPlane2);
expected = airport.getPlaneList().length - 1;
// Act
airport.instructPlaneTakeoff(testPlane2);
// Assert
actual = airport.getPlaneList().length;
result = assertEquals(actual, expected);
// Report
console.log(result ? chalk.green("Pass") : chalk.red("Fail"));
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log("----------------")

// Clean Up
afterEach();
testPlane2 = undefined;

//! End of Test 2

//* Test 3: Test that we can't instruct a plane to leave if they airport is empty

console.log("Test 3:")
console.log("----------------")
console.log("Test that we can't instruct a plane to leave if they airport is empty");

// Arrange
testPlane = { "id": "BA-1"};
expected = airport.getPlaneList().length;
// Act
airport.instructPlaneTakeoff(testPlane);
// Assert
actual = airport.getPlaneList().length;
result = assertEquals(actual, expected);
// Report
console.log(result ? chalk.green("Pass") : chalk.red("Fail"));
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log("----------------")

// Clean Up
afterEach();

//! End of Test 3

//* Test 4: Test that if there are planes in the airport, but not the one we instruct to leave, the plane can not leave

console.log("Test 4:")
console.log("----------------")
console.log("Test that if there are planes in the airport, but not the one we instruct to leave, the plane can not leave");

// Arrange
testPlane = { "id": "BA-1"};
airport.instructPlaneLanding(testPlane);
testPlane2 = { "id": "BA-2" };

expected = airport.getPlaneList().length;
// Act
airport.instructPlaneTakeoff(testPlane2);
// Assert
actual = airport.getPlaneList().length;
result = assertEquals(actual, expected);
// Report
console.log(result ? chalk.green("Pass") : chalk.red("Fail"));
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log("----------------")

// Clean Up
afterEach();
testPlane2 = undefined;

//! End of Test 4

//? User Story 6
console.log(chalk.blue("USER STORY 6"))
console.log("----------------------------------")

//* Test 1: Test that after using setMaxCapacity(), the airport's capacity has changed to the inputted capacity

console.log("Test 1:")
console.log("----------------")
console.log("Test that after using setMaxCapacity(), the airport's capacity has changed to the inputted capacity");

// Arrange
expected = 5;
// Act
airport.setMaxCapacity(5);
// Assert
actual = airport.getMaxCapacity();
result = assertEquals(actual, expected);
// Report
console.log(result ? chalk.green("Pass") : chalk.red("Fail"));
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log("----------------")

// Clean Up
afterEach();

//! End of Test 1

//* Test 2: Test that increasing the capacity does not affect the number of planes already in the airport

console.log("Test 2:")
console.log("----------------")
console.log("Test that increasing the capacity does not affect the number of planes already in the airport");

// Arrange
testPlane = { "id":"BA-1" };
airport.instructPlaneLanding(testPlane);
expected = airport.getPlaneList().length;
// Act
airport.setMaxCapacity(11);
// Assert
actual = airport.getPlaneList().length;
result = assertEquals(actual, expected);
// Report
console.log(result ? chalk.green("Pass") : chalk.red("Fail"));
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log("----------------")

// Clean Up
afterEach();

//! End of Test 2

//* Test 3: Test that we are unable to reduce the capacity below the number of planes currently in the airport

console.log("Test 3:")
console.log("----------------")
console.log("Test that we are unable to reduce the capacity below the number of planes currently in the airport");

// Arrange
testPlane = { "id":"BA-1" };
airport.instructPlaneLanding(testPlane);
expected = airport.getMaxCapacity();
// Act
airport.setMaxCapacity(0);
// Assert
actual = airport.getMaxCapacity();
result = assertEquals(actual, expected);
// Report
console.log(result ? chalk.green("Pass") : chalk.red("Fail"));
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log("----------------")

// Clean Up
afterEach();

//! End of Test 3

//* Test 4: Test that we are able to reduce the capacity to exactly the number of planes currently in the airport

console.log("Test 4:")
console.log("----------------")
console.log("Test that we are able to reduce the capacity to exactly the number of planes currently in the airport");

// Arrange
testPlane = { "id":"BA-1" };
airport.instructPlaneLanding(testPlane);
expected = 1;
// Act
airport.setMaxCapacity(1);
// Assert
actual = airport.getMaxCapacity();
result = assertEquals(actual, expected);
// Report
console.log(result ? chalk.green("Pass") : chalk.red("Fail"));
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log("----------------")

// Clean Up
afterEach();

//! End of Test 4

//* Test 5: Test that if we reduce the capacity to exactly the number of planes in the airport, spaceAvailable() changes from true to false

console.log("Test 5:")
console.log("----------------")
console.log("Test that if we reduce the capacity to exactly the number of planes in the airport, spaceAvailable() changes from true to false");

// Arrange
testPlane = { "id":"BA-1" };
airport.instructPlaneLanding(testPlane);
expected - false;
// Act
airport.setMaxCapacity(1);
// Assert
actual = airport.spaceAvailable();
result = assertFalse(actual)
// Report
console.log(result ? chalk.green("Pass") : chalk.red("Fail"));
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log("----------------")

// Clean Up
afterEach();

//! End of Test 5