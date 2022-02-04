import HikesController from "./HikesController";

const hikesControl = new HikesController('#hikeList');

setTimeout(() => {
    hikesControl.showHikeList();
}, 100);