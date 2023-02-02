import { Controller,Selector, Feature, I, TestRunInfo } from 'test-maker';
import { pega } from 'pega-model';
import { app } from "../model/app";
import { createGainAccessCasePage } from "../model/pages/gainAccessCasePage";
import { getUrl } from './user-data';
let operator: { username: string, password: string };
//let operatorDev: { username: string, password: string };

Feature(`Gain Access`)
.before(async (I: Controller, runInfo?: TestRunInfo) => {
    //common part for all the scenarios available per the feature
    //we need to pass the runInfo parameter to the login method to
    // get all current configurations (environment, timeout etc)
    // console.log("hhhhhhhhhhhhhhhh"+operator)
    //we need to pass the runInfo parameter to the login method to
    // get all current configurations (environment, timeout etc)
    await pega.visit(getUrl(runInfo?.configuration.extra.env.name), runInfo);
    operator = await runInfo?.configuration.extra.operatorsManager.assignOperator('user');

    await pega.loginForm.login(operator.username, operator.password);
    })




.Scenario(`Gain Access`)

    .Given('Gain Access Case', async (_I, _runInfo) => {
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
       await createGainAccessCasePage.selectCar();
       await app.globalActions.submit()
       await createGainAccessCasePage.selectCarRent();
       await app.globalActions.submit();
       await I.wait(1000)
       await app.globalActions.submit()


    })
    
