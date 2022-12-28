
import MainPage from '../pageobjects/main.page.js'
import mainPage from "../pageobjects/main.page.js";
import WikiApple from "../pageobjects/wiki.apple.js";

describe('Wiki main page', () => {
    it('Verify wiki main page elements', async ()  => {
        await MainPage.open();
        await expect(MainPage.logoWikipedia).toBeExisting();
        await expect(MainPage.logoWikipedia).toHaveTextContaining("Wikipedia");
        await expect(mainPage.fieldSearch).toBeExisting()
        await expect(MainPage.btnSearch).toBeExisting();
    });
})
describe('Search result ', () => {
    it('Verify wiki main page elements', async ()  => {
        await MainPage.open();
        await MainPage.fieldSearch.addValue('Apple')
        await MainPage.btnSearch.click();
        await expect(WikiApple.pageTitleApple).toBeExisting()
    });
})