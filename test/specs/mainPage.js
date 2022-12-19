
import MainPage from '../pageobjects/main.page.js'
import mainPage from "../pageobjects/main.page.js";

describe('Wiki main page', () => {
    it('Verify wiki main page elements', async ()  => {
        await MainPage.open();
        await expect(MainPage.logoWikipedia).toBeExisting();
        await expect(MainPage.logoWikipedia).toHaveTextContaining("Wikipedia");
        await expect(mainPage.fieldSearch).toBeExisting()
        await expect(MainPage.btnSearch).toBeExisting();
    });
})


