import { airport } from '../src/airport.js';
import { assertEquals } from './test-framework/testFramework.js';
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
let testPlane = {};
// Act
airport.instructPlaneLanding(testPlane);
// Assert
actual = airport.getPlaneList.length();
result = assertEquals(actual, expected);
// Report
console.log(result ? chalk.green("Pass") : chalk.red("Fail"));
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log("----------------")

// Clean Up
afterEach();