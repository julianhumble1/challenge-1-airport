import { airport } from "./airport.js"
import chalk from 'chalk'

const printAirportStatus = () => {
    console.log(chalk.blue(`Airport`))
    console.log(`List of each plane at the airport:`)
    if (airport.getPlaneList().length === 0) {
        console.log("There airport is currently empty.")
    } else {
        airport.getPlaneList().forEach(element => console.log(element));
    }
    console.log(`Max Capacity: ${airport.getMaxCapacity()}`);
}

// Show how the airport starts as empty
console.log("The airport is initialised empty.")
printAirportStatus();

// Landing a plane at the airport
