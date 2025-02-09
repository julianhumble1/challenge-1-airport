export const airport = {
    planeList: [],
    
    maxCapacity : 10,

    getPlaneList() {
        return this.planeList;
    },

    instructPlaneLanding(plane) {
        if (this.spaceAvailable() && !this.planeAtAirport(plane)) {
            (plane !== null) && this.planeList.push(plane);
        }
    },

    instructPlaneTakeoff(plane) {
        for (let i = 0; i < this.planeList.length; i++) {
            if (plane.id === this.planeList[i].id) {
                let indexToRemove = i;
                this.planeList.splice(indexToRemove,1);
            }
        }
    },

    spaceAvailable() {
        return (this.planeList.length < this.maxCapacity);
    },

    planeAtAirport(plane) {
        return this.planeList.includes(plane);
    },

    setMaxCapacity(newCapacity) {
        (newCapacity >= this.planeList.length) && (this.maxCapacity = newCapacity);
    },

    getMaxCapacity() {
        return this.maxCapacity;
    }
};