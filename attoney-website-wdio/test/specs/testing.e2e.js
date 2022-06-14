const MainPage = require('../pageobjects/main.page');
const ConfPage = require('../pageobjects/conf.page');

describe('Exploratory testing', () => {
    before(function () {
        MainPage.open('/');
        console.log('before hook')
    });
    it('Should perform black-box test', async () => {
        
        await MainPage.setter('George', +1234567654, 279823, 'NY', 'Test123');
        await browser.switchWindow('https://onlineattorney.org/enquiry/?mail');
        console.log((await ConfPage.confirmation).waitForDisplayed());

        await browser.switchWindow('https://onlineattorney.org/');
        (await MainPage.emailInput).scrollIntoView();
        await browser.pause(2000);
        
        (await MainPage.emailInput).setValue('fakemail@mail.com');
        (await MainPage.sendNewsettlerBtn).click(); 
        await browser.pause(3000); 

    });
    after(function () {
        browser.saveScreenshot('./screenshots/screenshot.png');
        console.log('after hook')
    });
});
