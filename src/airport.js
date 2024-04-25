export const airport = {
    planeList : [],

    getPlaneList() {
        return this.planeList;
    },

    instructPlaneLanding(plane) {
        this.planeList.push(plane);
    }
};