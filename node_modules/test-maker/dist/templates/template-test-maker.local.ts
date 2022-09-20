import { Configuration } from "test-maker";

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
export default testMakerLocalConfig;
