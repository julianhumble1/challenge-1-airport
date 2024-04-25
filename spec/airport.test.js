import { airport } from '../src/airport.js';
import { assertEquals, assertTrue } from './test-framework/testFramework.js';
import chalk from 'chalk';

const afterEach = () => {
    expected = undefined;
    actual = undefined;
    result = undefined;
    testPlane = undefined;
    airport.planeList = [];
}

//? User Story 1

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