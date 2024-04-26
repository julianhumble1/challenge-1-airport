import { airport } from "./airport.js"
import chalk from 'chalk'

const printAirportStatus = () => {
    console.log("---------------")
    console.log(chalk.blue(`Airport\n`))
    console.log(`List of each plane at the airport:`)
    if (airport.getPlaneList().length === 0) {
        console.log("The airport is currently empty.")
    } else {
        airport.getPlaneList().forEach(element => console.log(element));
    }
    console.log(`Max Capacity: ${airport.getMaxCapacity()}`);
    console.log("---------------")
}


console.log("---------------")
// Show how the airport starts as empty
console.log("The airport is initialised empty:")
printAirportStatus();

// Landing a plane at the airport
const plane1 = { "id": "BA-1" };
airport.instructPlaneLanding(plane1);
console.log("We instruct plane1 to land at the airport, and see it is now listed as being at the airport:");
printAirportStatus();

// Instructing the same plane to land at the airport while it is already there
airport.instructPlaneLanding(plane1);
console.log("We instruct plane1 to land at the airport again, although it is already at the airport. It is not added to the list of planes twice:")
printAirportStatus();

// Instructing another plane to land at the airport
const plane2 = { "id": "BA-2" };
airport.instructPlaneLanding(plane2);
console.log("We instruct another plane, plane2, to land so that both plane1 and plane2 are both at the airport:");
printAirportStatus();

// Instruct plane1 to leave
airport.instructPlaneTakeoff(plane1);
console.log("We instruct plane1 to take off and go to another destination, and it is no longer in the plane list:");
printAirportStatus();

// Instruct plane1 to leave although it is not in the plane list
airport.instructPlaneTakeoff(plane1);
console.log("We instruct plane1 to take off again, although it is no longer at the airport. The airport remains unchanged:");
printAirportStatus();

// Changing the maximum capacity of the airport
airport.setMaxCapacity(1);
console.log("We change the max capacity of the airport to 1, so the only space available is taken up by plane2:")
printAirportStatus();

// Instructing a plane to land when the airport is full
airport.instructPlaneLanding(plane1);
console.log("We instruct plane1 to land, but as there is no space, the list of planes in the airport remains unchanged:");
printAirportStatus();