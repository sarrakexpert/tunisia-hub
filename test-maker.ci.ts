import { Configuration, reporters } from "test-maker";

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
        },
        video:{ 
            enabled:true,
            failedOnly:false
        }
    },
};
export default testMakerCIConfig;
