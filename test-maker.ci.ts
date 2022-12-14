import {Configuration, mergeAndConcat, reporters} from "test-maker";
import {pegaConfig} from './test-maker.pega';

const testMakerCIConfig: Configuration = {
    runner: {
        liveMode: false,
        headless: false,
        timeout:{
            selector:10000,
            assertion:12000
        }
    },
    reporting: {
        reporters: [reporters.terminal, reporters.allure],
        screenshots: {
            enabled: true
        }
    },
};
export default mergeAndConcat(pegaConfig, testMakerCIConfig);
