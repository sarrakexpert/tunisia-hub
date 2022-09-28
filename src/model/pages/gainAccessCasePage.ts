import { pega } from 'pega-model';
import { I } from 'test-maker';

export class CreateGainAccessCasePage {
    readonly SignUp = pega.elementByXpath(`//a[@data-test-id="202209051850320960738"]`);
    readonly Name = pega.textInputById("e7852830");
    readonly FamilyName= pega.textInputById("5d9a8732");
    readonly PassW = pega.textInputById("230cdbac");
    readonly DateOB = pega.datePickerById("067288d1");
    readonly Email = pega.textInputById("4feafdd3");
    readonly Phone = pega.textInputById("61e1a0b7");
    readonly Adresse1 = pega.textInputById("9ad9b46d");
    readonly Adresse2 = pega.textInputById("03d0e5d7");
    readonly Adresse3 = pega.textInputById("74d7d541");
    readonly City = pega.textInputById("779760d9");
    readonly CodePostal = pega.textInputById("d1701170");
    readonly State = pega.textInputById("7d72805c");
    readonly PaymentMethod = pega.dropdownById("8a18161c");
    readonly EmailAdress = pega.textInputById("6c660a0e");
    readonly Login = pega.buttonByDataTestId("202209051850320960164");
    readonly UserName = pega.textInputById("a72e6948");
    readonly Password = pega.textInputById("59792773");
    readonly CarType = pega.elementByXpath(`(//img[@data-test-id="202209031648430678841"])[9]`);
    readonly CarRent = pega.elementByXpath(`(//img[@data-test-id="202209051756430678814"])[2]`);





    public async signUpRequest() { 
        await this.SignUp.click();
    }
    public async fillSignUpRequest() { 
        await this.Name.paste("Alex");
        await this.FamilyName.paste("Dicosta");
        await this.PassW.paste("1234");
        await this.DateOB.paste("14/04/2000");
        await this.Email.paste("Alex.Dicosta@yopmail.com");
        await this.Phone.paste("0021697658087");
        await this.Adresse1.paste("Tunisia");
        await this.Adresse2.paste("beja");
        await this.Adresse3.paste("Nefza");
        await this.Adresse3.paste("Nefza");
        await this.City.paste("Nefza");
        await this.CodePostal.paste("7021");
        await this.State.paste("Tunisia");
    } 
    public async paymentMethod() { 
        await this.PaymentMethod.select("Paypal Account");
        await this.EmailAdress.paste("Alex.yahmdi@yopmail.com");

    }
    public async login() { 
        await this.UserName.paste(`Alex.Dicosta`);
        await this.Password.paste(`1234`);
        await this.Login.click();
        await this.Login.click();
    }
    public async selectCar() { 
             await this.CarType.click();
    }
    public async selectCarRent() { 
        await this.CarRent.click();
}
};
export const createGainAccessCasePage = new CreateGainAccessCasePage();
