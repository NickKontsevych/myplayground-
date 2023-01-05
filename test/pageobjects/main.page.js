import Page from "./page.js";

class MainPage extends Page {

    get logoWikipedia() {
        return $('.svg-Wikipedia_wordmark');
    }

    get fieldSearch() {
        return $('#searchInput');
    }

    get btnSearch() {
        return $('.pure-button-primary-progressive');
    }

    get getTitle() {
        return $('.mw-page-title-main');
    }

    open(path) {
        return super.open('');
    }
}

export default new MainPage();
