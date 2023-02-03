import { pega, today } from 'pega-model';
import { I } from 'test-maker';

export class CollectInformationPage {
    readonly StartDate = pega.datePickerByCss(`//input[@data-test-id="202211290503210685644"]`);
    readonly EndDate = pega.datePickerByCss(`//input[@data-test-id="202211290503210685164"]`);






    public async setStartDate() { 
        await this.StartDate.set(today())
    }
    public async setEndtDate() { 
        await this.EndDate.set(today().plusDays(1))
    }
};
export const collectInformationPage = new CollectInformationPage();