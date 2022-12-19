
import Page from "./page.js";

class WikiApple extends Page {
    get pageTitleApple () {
        return $('.mw-page-title-main');
    }

    openEN() {
        return super.openEN('Apple');
    }
}
export default new WikiApple();