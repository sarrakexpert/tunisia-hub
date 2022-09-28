import { Controller,Selector, Feature, I, TestRunInfo } from 'test-maker';
import { pega } from 'pega-model';
import { app } from "../model/app";
import { createGainAccessCasePage } from "../model/pages/gainAccessCasePage";

//let operator: { username: string, password: string };
//let operatorDev: { username: string, password: string };

Feature(`Gain Access`)
.before(async () => {
    //common part for all the scenarios available per the feature
    //we need to pass the runInfo parameter to the login method to
    // get all current configurations (environment, timeout etc)
    await pega.visit(`https://pega870-web-tnhubcosmosreact.dev.k-expert.com/prweb/app/simbafw/CWRZzxAkMqIuoiZieh-_tw*/!STANDARD?pyActivity=%40baseclass.pzProcessURLInWindow&pyPreActivity=Embed-PortalLayout.RedirectAndRun&ThreadName=OpenPortal_UserPortal&Location=pyActivity%3DData-Portal.ShowSelectedPortal%26portal%3DUserPortal%26Name%3D%20UserPortal%26pzSkinName%3D%26developer%3Dfalse%26ThreadName%3DOpenPortal_UserPortal%26launchPortal%3Dtrue%26mSessionThreadName%3DOpenPortal_UserPortal_MTSP2&bPurgeTargetThread=true&target=popup&portalThreadName=STANDARD&portalName=Developer&pzHarnessID=HID779D62F0E5FA04CFABB2D556CCD1CB6A`);
    await pega.loginForm.login(`Sarra.bech`, `Rules!12345!`);
    })
    .after(async () => {
       //await pega.logoff()//Log off
       await pega.buttonByDataTestId("201901261711080731178947").click();
await I.refresh()
    await pega.elementByXpath(`(//button[@data-test-id="px-opr-image-ctrl"])[1]`).click();
    await pega.elementByXpath(`//*[@data-test-id="201711011301500120490"]`).click();
})



.Scenario(`Gain Access`)

    .Given('Gain Access Case', async (_I, _runInfo) => {
        await pega.frame.switchToDefault();
        await app.case.createCaseWithTitle("Gain Access");
    })
    .Then(`Fill New sign-up request`, async (_I, _runInfo) => {
       await createGainAccessCasePage.signUpRequest();
       await createGainAccessCasePage.fillSignUpRequest();
       await app.globalActions.continue();
       await createGainAccessCasePage.paymentMethod();
       await app.globalActions.continue();
       await pega.buttonByDataTestId("20141017150414006514400").click();

    })

     .Then(`Fill New process`, async (_I, _runInfo) => {
       await createGainAccessCasePage.login();
       await createGainAccessCasePage.selectCar();
       await app.globalActions.submit()
       await createGainAccessCasePage.selectCarRent();
       await app.globalActions.submit();
       await I.wait(1000)
       await app.globalActions.submit()


    })
    
