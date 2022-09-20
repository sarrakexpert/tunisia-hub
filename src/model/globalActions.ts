
import { pega } from 'pega-model';

export class GlobalActions{
    async continue() {
        await pega.button.byText(`Continue`).click();
        }
        async confirm() {
            await pega.button.byText(`Confirmer`).click();
            }
        async submit() {
        await pega.button.submit().click();
        }
        async validate() {
        await pega.button.byText(`Valider`).click()
        }
        async yesContinue() {
            await pega.buttonByDataTestId(`2014121801251706289770`).click();            
        }
        async submitButton() {
            await pega.buttonById(`submitButton`).click();
        }
        async submitModal() {
            //await pega.frame.switchToWorkAreaIframe();
            await pega.buttonById(`ModalButtonSubmit`).click();
        } 
        async cancel() {
            //await pega.frame.switchToWorkAreaIframe();
            await pega.button.byText(`Cancel`).click();
        }
        async continuer() {
             await pega.button.byText(`Continuer`).click();
        }
        async ContinueProcess() {
            await pega.button.byText(`Continue Process`).click();
       }
        
    async noWait(){
        await pega.button.byText(`No (wait)`).click();
    }
}