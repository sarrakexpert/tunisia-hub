import {Configuration, mergeAndConcat} from "test-maker";
import {pegaConfig} from './test-maker.pega';

const testMakerLocalConfig: Configuration = {
    runner: {
        liveMode: false,
        headless: false,
        timeout: {
            selector: 10000,
            assertion: 12000
        }
    }
};
export default mergeAndConcat(pegaConfig, testMakerLocalConfig);
