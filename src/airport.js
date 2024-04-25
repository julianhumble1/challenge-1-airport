export const airport = {
    planeList : [],

    getPlaneList() {
        return this.planeList;
    },

    instructPlaneLanding(plane) {
        (plane !== null) && this.planeList.push(plane);
    },

    spaceAvailable() {
        return (this.planeList.length < 10);
    }
};