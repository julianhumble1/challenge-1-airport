export const airport = {
    planeList : [],

    getPlaneList() {
        return this.planeList;
    },

    instructPlaneLanding(plane) {
        if (this.spaceAvailable()) {
            (plane !== null) && this.planeList.push(plane);
        } else {
            console.log(`No space available for plane ${plane.id} to land.`);
        }
    },

    instructPlaneTakeoff(plane) {
        for (let i = 0; i < this.planeList.length; i++) {
            if (plane.id === this.planeList[i].id); {
                let indexToRemove = i;
                this.planeList.splice(indexToRemove);
            }
        }
    },

    spaceAvailable() {
        return (this.planeList.length < 10);
    }
};