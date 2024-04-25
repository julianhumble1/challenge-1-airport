export const airport = {
    planeList : [],

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
        return (this.planeList.length < 10);
    },

    planeAtAirport(plane) {
        return this.planeList.includes(plane);
    }
};