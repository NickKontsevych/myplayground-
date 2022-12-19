
import MainPage from '../pageobjects/main.page.js'
import WikiApple from "../pageobjects/wiki.apple.js";


describe('Search result ', () => {
    it('Verify wiki main page elements', async ()  => {
        await MainPage.open();
        await MainPage.fieldSearch.addValue('Apple')
        await MainPage.btnSearch.click();
        await expect(WikiApple.pageTitleApple).toBeExisting()
    });
})G