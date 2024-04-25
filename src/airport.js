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

    spaceAvailable() {
        return (this.planeList.length < 10);
    }
};