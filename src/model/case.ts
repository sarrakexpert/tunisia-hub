
import { pega } from "pega-model";
import { I } from "test-maker";
export class Case {
    async createCaseWithTitle(title: string) {
        await I.resizeWindow(1600, 900);
         await I.click(`//*[@class="menu-item-icon-imageclass pi pi-plus"]`);   
        
         await pega.elementByXpath(`//*[@class="menu-item-title"][contains(text(),"${title}")]`).shouldBeVisible();
         await pega.elementByXpath(`//*[@class="menu-item-title"][contains(text(),"${title}")]`).click();
         //await pega.frame.switchToWorkAreaIframe()
         //await pega.elementByXpath(`//a[@data-test-id="202209051850320960738"]`).click();
    }
}