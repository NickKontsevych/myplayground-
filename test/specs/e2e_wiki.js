import MainPage from '../pageobjects/main.page.js'
import mainPage from "../pageobjects/main.page.js";

describe('Wikipedia main page', () => {
    beforeEach(() => {
        MainPage.open();
    });

    after(() => {
        browser.closeWindow();
    })

    it('should see Wikipedia page elements', async () => {
        await expect(MainPage.logoWikipedia).toBeExisting();
        await expect(MainPage.logoWikipedia).toHaveTextContaining("Wikipedia");
        await expect(mainPage.fieldSearch).toBeExisting()
        await expect(MainPage.btnSearch).toBeExisting();
    });
    it('should search for term', async () => {
        let searchTerm = "Apple";

        // Find the search input field and enter the search term
        await MainPage.fieldSearch.addValue(searchTerm)

        // Click the search button
        await MainPage.btnSearch.click();

        // Assert that the search term appears in the page title
        await expect(MainPage.getTitle).toHaveTextContaining(searchTerm)
    });
    it('should search for multiple terms', async () => {
        const SEARCHITEMS = ['Apple', 'Ukraine', 'Love'];

        for (const searchTerm of SEARCHITEMS) {
            // Find the search input field and enter the search term
            await MainPage.fieldSearch.setValue(searchTerm)

            // Click the search button
            await MainPage.btnSearch.click();

            // Assert that the search term appears in the page title
            await expect(MainPage.getTitle).toHaveTextContaining(searchTerm);

            // Go back to the main page
            await browser.back();
        }
    })
})
