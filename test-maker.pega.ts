import {OperatorsManager, pega, isAppBusyEvaluator, bypassLogging} from 'pega-model';
import {
    Configuration,
    reporters,
    Selector,
    TerminalReporterOptions,
    TestRunInfo
} from 'test-maker';
import {getUsersPool} from './src/specs/user-data';

export const operatorsManager = new OperatorsManager();

export const pegaConfig: Configuration = {
    extra: {
        env: {
            name: 'dev'
        },
       operatorsManager: operatorsManager
    },
    runner: {
        isAppBusyEvaluator: isAppBusyEvaluator,
        failure: {
            feature: {
                skipRemainingScenariosOnScenarioFail: async (runInfo: TestRunInfo) => runInfo.appIsBusy,
            },
        },
    },
    reporting: {
        reporters: [
            {
                ...reporters.terminal,
                ...{
                    options: <TerminalReporterOptions>{
                        bypass: bypassLogging,
                    },
                },
            },
        ],
    },
    hooks: {
        beforeAll: (async (runInfo) => {
            let name = runInfo.configuration.extra.env.name;
            console.log(`Current environment is ${name}`);
            await operatorsManager.SetOperatorsSource(getUsersPool(name));
        }), afterEachScenario: (async (I, runInfo) => {
            if(await Selector(`.icons.avatar`, {timeout: 2000}).exists) {
                await pega.logoff();
            }
        }),
    }
};

