/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/specs/user-data.ts":
/*!********************************!*\
  !*** ./src/specs/user-data.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getUrl": () => (/* binding */ getUrl),
/* harmony export */   "getUsersPool": () => (/* binding */ getUsersPool),
/* harmony export */   "users": () => (/* binding */ users)
/* harmony export */ });
// Copyright 2021 Knowledge Expert SA
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
let users = [];
const dev_users = [
    {
        id: `user`,
        alt: [
            { username: `sarra.bech`, password: `Rules!12345!!*` },
            { username: ``, password: `` },
        ],
    },
];
function getUsersPool(env) {
    //console.log(env);
    switch (env) {
        case `dev`:
            users = dev_users;
            break;
        case `stage`:
            users = '';
            break;
        default:
            users = [
                {
                    id: `operator`,
                    alt: [{ username: `test.maker`, password: `Rules12345$` }],
                },
            ];
            break;
    }
    //console.log(users);
    return users;
}
function getUrl(env) {
    let url = '';
    switch (env) {
        case `dev`:
            url = 'https://pega870-web-tnhubcosmosreact.dev.k-expert.com/prweb/app/simbafw/CWRZzxAkMqIuoiZieh-_tw*/!STANDARD?pyActivity=%40baseclass.pzProcessURLInWindow&pyPreActivity=Embed-PortalLayout.RedirectAndRun&ThreadName=OpenPortal_UserPortal&Location=pyActivity%3DData-Portal.ShowSelectedPortal%26portal%3DUserPortal%26Name%3D%20UserPortal%26pzSkinName%3D%26developer%3Dfalse%26ThreadName%3DOpenPortal_UserPortal%26launchPortal%3Dtrue%26mSessionThreadName%3DOpenPortal_UserPortal&bPurgeTargetThread=true&target=popup&portalThreadName=STANDARD&portalName=Developer&pzHarnessID=HID37AD8E4059E39BCCC53F5B3E1E978309';
            break;
        default:
            url = '';
            break;
    }
    return url;
}


/***/ }),

/***/ "./test-maker.pega.ts":
/*!****************************!*\
  !*** ./test-maker.pega.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "operatorsManager": () => (/* binding */ operatorsManager),
/* harmony export */   "pegaConfig": () => (/* binding */ pegaConfig)
/* harmony export */ });
/* harmony import */ var pega_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pega-model */ "pega-model");
/* harmony import */ var pega_model__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pega_model__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var test_maker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! test-maker */ "test-maker");
/* harmony import */ var test_maker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(test_maker__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_specs_user_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/specs/user-data */ "./src/specs/user-data.ts");



const operatorsManager = new pega_model__WEBPACK_IMPORTED_MODULE_0__.OperatorsManager();
const pegaConfig = {
    extra: {
        env: {
            name: 'dev'
        },
        operatorsManager: operatorsManager
    },
    runner: {
        isAppBusyEvaluator: pega_model__WEBPACK_IMPORTED_MODULE_0__.isAppBusyEvaluator,
        failure: {
            feature: {
                skipRemainingScenariosOnScenarioFail: async (runInfo) => runInfo.appIsBusy,
            },
        },
    },
    reporting: {
        reporters: [
            {
                ...test_maker__WEBPACK_IMPORTED_MODULE_1__.reporters.terminal,
                ...{
                    options: {
                        bypass: pega_model__WEBPACK_IMPORTED_MODULE_0__.bypassLogging,
                    },
                },
            },
        ],
    },
    hooks: {
        beforeAll: (async (runInfo) => {
            let name = runInfo.configuration.extra.env.name;
            console.log(`Current environment is ${name}`);
            await operatorsManager.SetOperatorsSource((0,_src_specs_user_data__WEBPACK_IMPORTED_MODULE_2__.getUsersPool)(name));
        }), afterEachScenario: (async (I, runInfo) => {
            if (await (0,test_maker__WEBPACK_IMPORTED_MODULE_1__.Selector)(`.icons.avatar`, { timeout: 2000 }).exists) {
                await pega_model__WEBPACK_IMPORTED_MODULE_0__.pega.logoff();
            }
        }),
    }
};


/***/ }),

/***/ "pega-model":
/*!*****************************!*\
  !*** external "pega-model" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("pega-model");

/***/ }),

/***/ "test-maker":
/*!*****************************!*\
  !*** external "test-maker" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("test-maker");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./test-maker.local.ts ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var test_maker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! test-maker */ "test-maker");
/* harmony import */ var test_maker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(test_maker__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _test_maker_pega__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test-maker.pega */ "./test-maker.pega.ts");


const testMakerLocalConfig = {
    runner: {
        liveMode: false,
        headless: false,
        timeout: {
            selector: 10000,
            assertion: 12000
        }
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,test_maker__WEBPACK_IMPORTED_MODULE_0__.mergeAndConcat)(_test_maker_pega__WEBPACK_IMPORTED_MODULE_1__.pegaConfig, testMakerLocalConfig));

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBRyxNQUFNLG9EQUFRLENBQUMsZUFBZSxFQUFFLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUMsTUFBTSxFQUFFO2dCQUN4RCxNQUFNLG1EQUFXLEVBQUUsQ0FBQzthQUN2QjtRQUNMLENBQUMsQ0FBQztLQUNMO0NBQ0osQ0FBQzs7Ozs7Ozs7Ozs7QUNsREY7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnlEO0FBQ1o7QUFFN0MsTUFBTSxvQkFBb0IsR0FBa0I7SUFDeEMsTUFBTSxFQUFFO1FBQ0osUUFBUSxFQUFFLEtBQUs7UUFDZixRQUFRLEVBQUUsS0FBSztRQUNmLE9BQU8sRUFBRTtZQUNMLFFBQVEsRUFBRSxLQUFLO1lBQ2YsU0FBUyxFQUFFLEtBQUs7U0FDbkI7S0FDSjtDQUNKLENBQUM7QUFDRixpRUFBZSwwREFBYyxDQUFDLHdEQUFVLEVBQUUsb0JBQW9CLENBQUMsRUFBQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxLaXNob3JlS3VtYXJCaXJhZGF2b1xcT25lRHJpdmUgLSBLLUV4cGVydFxcRG9jdW1lbnRzXFxLRVxcSW50ZXJuYWxcXFRyYWluaW5nc19MZWFybmluZ3NcXFNJTUJBXFx0dW5pc2lhLWh1Ylxcc3JjXFxzcGVjc1xcdXNlci1kYXRhLnRzIiwiQzpcXFVzZXJzXFxLaXNob3JlS3VtYXJCaXJhZGF2b1xcT25lRHJpdmUgLSBLLUV4cGVydFxcRG9jdW1lbnRzXFxLRVxcSW50ZXJuYWxcXFRyYWluaW5nc19MZWFybmluZ3NcXFNJTUJBXFx0dW5pc2lhLWh1YlxcdGVzdC1tYWtlci5wZWdhLnRzIiwiZXh0ZXJuYWwgY29tbW9uanMgXCJwZWdhLW1vZGVsXCIiLCJleHRlcm5hbCBjb21tb25qcyBcInRlc3QtbWFrZXJcIiIsIndlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIkM6XFxVc2Vyc1xcS2lzaG9yZUt1bWFyQmlyYWRhdm9cXE9uZURyaXZlIC0gSy1FeHBlcnRcXERvY3VtZW50c1xcS0VcXEludGVybmFsXFxUcmFpbmluZ3NfTGVhcm5pbmdzXFxTSU1CQVxcdHVuaXNpYS1odWJcXHRlc3QtbWFrZXIubG9jYWwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IDIwMjEgS25vd2xlZGdlIEV4cGVydCBTQVxyXG4vL1xyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4vLyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbi8vIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4vL1xyXG4vLyBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuLy9cclxuLy8gVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4vLyBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbi8vIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4vLyBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbi8vIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG5cclxuZXhwb3J0IGxldCB1c2VycyA6YW55PSBbXTtcclxuXHJcbmNvbnN0IGRldl91c2VycyA9IFtcclxuICAgIHtcclxuICAgICAgICBpZDogYHVzZXJgLFxyXG4gICAgICAgIGFsdDogW1xyXG4gICAgICAgICAgICB7IHVzZXJuYW1lOiBgc2FycmEuYmVjaGAsIHBhc3N3b3JkOiBgUnVsZXMhMTIzNDUhISpgIH0sXHJcbiAgICAgICAgICAgIHsgdXNlcm5hbWU6IGBgLCBwYXNzd29yZDogYGAgfSxcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRVc2Vyc1Bvb2woZW52OiBzdHJpbmcpIHtcclxuICAgIC8vY29uc29sZS5sb2coZW52KTtcclxuICAgIHN3aXRjaCAoZW52KSB7XHJcbiAgICAgICAgY2FzZSBgZGV2YDpcclxuICAgICAgICAgICAgdXNlcnMgPSBkZXZfdXNlcnM7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgYHN0YWdlYDpcclxuICAgICAgICAgICAgdXNlcnMgPSAnJztcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgdXNlcnMgPSBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGBvcGVyYXRvcmAsXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0OiBbeyB1c2VybmFtZTogYHRlc3QubWFrZXJgLCBwYXNzd29yZDogYFJ1bGVzMTIzNDUkYCB9XSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIC8vY29uc29sZS5sb2codXNlcnMpO1xyXG4gICAgcmV0dXJuIHVzZXJzO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFVybChlbnY6IHN0cmluZykge1xyXG4gICAgbGV0IHVybCA9ICcnO1xyXG4gICAgc3dpdGNoIChlbnYpIHtcclxuICAgICAgICBjYXNlIGBkZXZgOlxyXG4gICAgICAgICAgICB1cmwgPSAnaHR0cHM6Ly9wZWdhODcwLXdlYi10bmh1YmNvc21vc3JlYWN0LmRldi5rLWV4cGVydC5jb20vcHJ3ZWIvYXBwL3NpbWJhZncvQ1dSWnp4QWtNcUl1b2laaWVoLV90dyovIVNUQU5EQVJEP3B5QWN0aXZpdHk9JTQwYmFzZWNsYXNzLnB6UHJvY2Vzc1VSTEluV2luZG93JnB5UHJlQWN0aXZpdHk9RW1iZWQtUG9ydGFsTGF5b3V0LlJlZGlyZWN0QW5kUnVuJlRocmVhZE5hbWU9T3BlblBvcnRhbF9Vc2VyUG9ydGFsJkxvY2F0aW9uPXB5QWN0aXZpdHklM0REYXRhLVBvcnRhbC5TaG93U2VsZWN0ZWRQb3J0YWwlMjZwb3J0YWwlM0RVc2VyUG9ydGFsJTI2TmFtZSUzRCUyMFVzZXJQb3J0YWwlMjZwelNraW5OYW1lJTNEJTI2ZGV2ZWxvcGVyJTNEZmFsc2UlMjZUaHJlYWROYW1lJTNET3BlblBvcnRhbF9Vc2VyUG9ydGFsJTI2bGF1bmNoUG9ydGFsJTNEdHJ1ZSUyNm1TZXNzaW9uVGhyZWFkTmFtZSUzRE9wZW5Qb3J0YWxfVXNlclBvcnRhbCZiUHVyZ2VUYXJnZXRUaHJlYWQ9dHJ1ZSZ0YXJnZXQ9cG9wdXAmcG9ydGFsVGhyZWFkTmFtZT1TVEFOREFSRCZwb3J0YWxOYW1lPURldmVsb3BlciZwekhhcm5lc3NJRD1ISUQzN0FEOEU0MDU5RTM5QkNDQzUzRjVCM0UxRTk3ODMwOSc7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHVybCA9ICcnO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICB9XHJcbiAgICByZXR1cm4gdXJsO1xyXG59XHJcblxyXG4iLCJpbXBvcnQge09wZXJhdG9yc01hbmFnZXIsIHBlZ2EsIGlzQXBwQnVzeUV2YWx1YXRvciwgYnlwYXNzTG9nZ2luZ30gZnJvbSAncGVnYS1tb2RlbCc7XHJcbmltcG9ydCB7XHJcbiAgICBDb25maWd1cmF0aW9uLFxyXG4gICAgcmVwb3J0ZXJzLFxyXG4gICAgU2VsZWN0b3IsXHJcbiAgICBUZXJtaW5hbFJlcG9ydGVyT3B0aW9ucyxcclxuICAgIFRlc3RSdW5JbmZvXHJcbn0gZnJvbSAndGVzdC1tYWtlcic7XHJcbmltcG9ydCB7Z2V0VXNlcnNQb29sfSBmcm9tICcuL3NyYy9zcGVjcy91c2VyLWRhdGEnO1xyXG5cclxuZXhwb3J0IGNvbnN0IG9wZXJhdG9yc01hbmFnZXIgPSBuZXcgT3BlcmF0b3JzTWFuYWdlcigpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHBlZ2FDb25maWc6IENvbmZpZ3VyYXRpb24gPSB7XHJcbiAgICBleHRyYToge1xyXG4gICAgICAgIGVudjoge1xyXG4gICAgICAgICAgICBuYW1lOiAnZGV2J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICBvcGVyYXRvcnNNYW5hZ2VyOiBvcGVyYXRvcnNNYW5hZ2VyXHJcbiAgICB9LFxyXG4gICAgcnVubmVyOiB7XHJcbiAgICAgICAgaXNBcHBCdXN5RXZhbHVhdG9yOiBpc0FwcEJ1c3lFdmFsdWF0b3IsXHJcbiAgICAgICAgZmFpbHVyZToge1xyXG4gICAgICAgICAgICBmZWF0dXJlOiB7XHJcbiAgICAgICAgICAgICAgICBza2lwUmVtYWluaW5nU2NlbmFyaW9zT25TY2VuYXJpb0ZhaWw6IGFzeW5jIChydW5JbmZvOiBUZXN0UnVuSW5mbykgPT4gcnVuSW5mby5hcHBJc0J1c3ksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICByZXBvcnRpbmc6IHtcclxuICAgICAgICByZXBvcnRlcnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLi4ucmVwb3J0ZXJzLnRlcm1pbmFsLFxyXG4gICAgICAgICAgICAgICAgLi4ue1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IDxUZXJtaW5hbFJlcG9ydGVyT3B0aW9ucz57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ5cGFzczogYnlwYXNzTG9nZ2luZyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuICAgIGhvb2tzOiB7XHJcbiAgICAgICAgYmVmb3JlQWxsOiAoYXN5bmMgKHJ1bkluZm8pID0+IHtcclxuICAgICAgICAgICAgbGV0IG5hbWUgPSBydW5JbmZvLmNvbmZpZ3VyYXRpb24uZXh0cmEuZW52Lm5hbWU7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBDdXJyZW50IGVudmlyb25tZW50IGlzICR7bmFtZX1gKTtcclxuICAgICAgICAgICAgYXdhaXQgb3BlcmF0b3JzTWFuYWdlci5TZXRPcGVyYXRvcnNTb3VyY2UoZ2V0VXNlcnNQb29sKG5hbWUpKTtcclxuICAgICAgICB9KSwgYWZ0ZXJFYWNoU2NlbmFyaW86IChhc3luYyAoSSwgcnVuSW5mbykgPT4ge1xyXG4gICAgICAgICAgICBpZihhd2FpdCBTZWxlY3RvcihgLmljb25zLmF2YXRhcmAsIHt0aW1lb3V0OiAyMDAwfSkuZXhpc3RzKSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBwZWdhLmxvZ29mZigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSksXHJcbiAgICB9XHJcbn07XHJcblxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwZWdhLW1vZGVsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRlc3QtbWFrZXJcIik7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7Q29uZmlndXJhdGlvbiwgbWVyZ2VBbmRDb25jYXR9IGZyb20gXCJ0ZXN0LW1ha2VyXCI7XHJcbmltcG9ydCB7cGVnYUNvbmZpZ30gZnJvbSAnLi90ZXN0LW1ha2VyLnBlZ2EnO1xyXG5cclxuY29uc3QgdGVzdE1ha2VyTG9jYWxDb25maWc6IENvbmZpZ3VyYXRpb24gPSB7XHJcbiAgICBydW5uZXI6IHtcclxuICAgICAgICBsaXZlTW9kZTogZmFsc2UsXHJcbiAgICAgICAgaGVhZGxlc3M6IGZhbHNlLFxyXG4gICAgICAgIHRpbWVvdXQ6IHtcclxuICAgICAgICAgICAgc2VsZWN0b3I6IDEwMDAwLFxyXG4gICAgICAgICAgICBhc3NlcnRpb246IDEyMDAwXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBtZXJnZUFuZENvbmNhdChwZWdhQ29uZmlnLCB0ZXN0TWFrZXJMb2NhbENvbmZpZyk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==