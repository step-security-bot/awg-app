import { browser, logging } from 'protractor';
import { AwgAppPage } from './app.po';

describe('awg-app', () => {
    let page: AwgAppPage;

    beforeEach(() => {
        page = new AwgAppPage();
    });

    it('should display welcome message', async () => {
        await page.navigateTo();
        expect(await page.getTitleText()).toEqual('awg-app is running!');
    });

    afterEach(async () => {
        // Assert that there are no errors emitted from the browser
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(
            jasmine.objectContaining({
                level: logging.Level.SEVERE,
            } as logging.Entry)
        );
    });
});