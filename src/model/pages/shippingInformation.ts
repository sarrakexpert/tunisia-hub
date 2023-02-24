import { pega } from 'pega-model';
import { I } from 'test-maker';

export class ShippingInformationPage {
    readonly ShippingAddress = pega.elementByDataTestId({dataTestId:"202210140737070295433"});
    readonly ShippingEmail = pega.elementByDataTestId({dataTestId:"202210140737070295147"});
    readonly ShippingPhoneNumber = pega.elementByDataTestId({dataTestId:"202210140737070296455"});


    public async setShippingAddress() { 
        await this.ShippingAddress.set("1 rue capitole")
    }
    public async setShippingEmail() { 
        await this.ShippingEmail.set("testapp@yopmail.com")
    }
    public async setShippingPhoneNumber() { 
        await this.ShippingPhoneNumber.set("9889098909")
    }
};
export const shippingInformationPage = new ShippingInformationPage();