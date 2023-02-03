import { Controller,Selector, Feature, I, TestRunInfo } from 'test-maker';
import { pega } from 'pega-model';
import { app } from "../model/app";
import { createCarRentRequestPage } from "../model/pages/carRentRequest";
import { collectInformationPage } from "../model/pages/collectInformation";

import { getUrl } from './user-data';
let operator: { username: string, password: string };
//let operatorDev: { username: string, password: string };

Feature(`Gain Access`)
.before(async (I: Controller, runInfo?: TestRunInfo) => {
    
    await pega.visit(getUrl(runInfo?.configuration.extra.env.name), runInfo);
    operator = await runInfo?.configuration.extra.operatorsManager.assignOperator('user');

    await pega.loginForm.login(operator.username, operator.password);
    })




.Scenario(`Car Rent Request`)

    .Given('Create CarRentRequest Case', async (_I, _runInfo) => {
        await pega.frame.switchToDefault();
        await app.case.createCaseWithTitle("Car Rent Request");
    })
    // .Then(`Fill New sign-up request`, async (_I, _runInfo) => {
    //    await createGainAccessCasePage.signUpRequest();
    //    await createGainAccessCasePage.fillSignUpRequest();
    //    await app.globalActions.continue();
    //    await createGainAccessCasePage.paymentMethod();
    //    await app.globalActions.continue();
    //    await pega.buttonByDataTestId("20141017150414006514400").click();

    // })

     .Then(`Fill New process`, async (_I, _runInfo) => {
       //await createGainAccessCasePage.login();
       await createCarRentRequestPage.selectCar();
       await app.globalActions.submit()
       await createCarRentRequestPage.selectCarRent();
       await app.globalActions.submit();
       await I.wait(1000)
       await app.globalActions.submit()
       await I.debugger()

    }).Then(`Collect information`, async (_I, _runInfo) => {
        await collectInformationPage.setStartDate()
        await collectInformationPage.setEndtDate()
        await app.globalActions.submit();

        await I.debugger()
 
     })
