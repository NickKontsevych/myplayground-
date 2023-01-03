
import Page from "./page.js";

class Pages extends Page {
    get getTitle () {
        return $('.mw-page-title-main');
    }
}
export default new Pages();