/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export default class Page {
    /**
     * Open Wikipedia page
     *
     * @param path
     * @returns {Promise<string>}
     */
    open(path) {
        return browser.url(`https://www.wikipedia.org/${path}`)
    }
}


