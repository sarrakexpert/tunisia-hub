(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/model/app.ts":
/*!**************************!*\
  !*** ./src/model/app.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "App": () => (/* binding */ App),
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "./node_modules/test-maker/node_modules/source-map-support/register.js");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _case__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./case */ "./src/model/case.ts");
/* harmony import */ var _globalActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./globalActions */ "./src/model/globalActions.ts");



class App {
    constructor() {
        this.globalActions = new _globalActions__WEBPACK_IMPORTED_MODULE_2__.GlobalActions();
        this.case = new _case__WEBPACK_IMPORTED_MODULE_1__.Case();
    }
}
const app = new App();


/***/ }),

/***/ "./src/model/case.ts":
/*!***************************!*\
  !*** ./src/model/case.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Case": () => (/* binding */ Case)
/* harmony export */ });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "./node_modules/test-maker/node_modules/source-map-support/register.js");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pega_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pega-model */ "pega-model");
/* harmony import */ var pega_model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pega_model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var test_maker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! test-maker */ "test-maker");
/* harmony import */ var test_maker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(test_maker__WEBPACK_IMPORTED_MODULE_2__);



class Case {
    async createCaseWithTitle(title) {
        await test_maker__WEBPACK_IMPORTED_MODULE_2__.I.resizeWindow(1600, 900);
        await test_maker__WEBPACK_IMPORTED_MODULE_2__.I.click(`//*[@class="menu-item-icon-imageclass pi pi-plus"]`);
        await pega_model__WEBPACK_IMPORTED_MODULE_1__.pega.elementByXpath(`//*[@class="menu-item-title"][contains(text(),"${title}")]`).shouldBeVisible();
        await pega_model__WEBPACK_IMPORTED_MODULE_1__.pega.elementByXpath(`//*[@class="menu-item-title"][contains(text(),"${title}")]`).click();
        //await pega.frame.switchToWorkAreaIframe()
        await pega_model__WEBPACK_IMPORTED_MODULE_1__.pega.elementByXpath(`//a[@data-test-id="202209051850320960738"]`).click();
    }
}


/***/ }),

/***/ "./src/model/globalActions.ts":
/*!************************************!*\
  !*** ./src/model/globalActions.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalActions": () => (/* binding */ GlobalActions)
/* harmony export */ });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "./node_modules/test-maker/node_modules/source-map-support/register.js");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pega_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pega-model */ "pega-model");
/* harmony import */ var pega_model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pega_model__WEBPACK_IMPORTED_MODULE_1__);


class GlobalActions {
    async continue() {
        await pega_model__WEBPACK_IMPORTED_MODULE_1__.pega.button.byText(`Continue`).click();
    }
    async confirm() {
        await pega_model__WEBPACK_IMPORTED_MODULE_1__.pega.button.byText(`Confirmer`).click();
    }
    async submit() {
        await pega_model__WEBPACK_IMPORTED_MODULE_1__.pega.button.submit().click();
    }
    async validate() {
        await pega_model__WEBPACK_IMPORTED_MODULE_1__.pega.button.byText(`Valider`).click();
    }
    async yesContinue() {
        await pega_model__WEBPACK_IMPORTED_MODULE_1__.pega.buttonByDataTestId(`2014121801251706289770`).click();
    }
    async submitButton() {
        await pega_model__WEBPACK_IMPORTED_MODULE_1__.pega.buttonById(`submitButton`).click();
    }
    async submitModal() {
        //await pega.frame.switchToWorkAreaIframe();
        await pega_model__WEBPACK_IMPORTED_MODULE_1__.pega.buttonById(`ModalButtonSubmit`).click();
    }
    async cancel() {
        //await pega.frame.switchToWorkAreaIframe();
        await pega_model__WEBPACK_IMPORTED_MODULE_1__.pega.button.byText(`Cancel`).click();
    }
    async continuer() {
        await pega_model__WEBPACK_IMPORTED_MODULE_1__.pega.button.byText(`Continuer`).click();
    }
    async ContinueProcess() {
        await pega_model__WEBPACK_IMPORTED_MODULE_1__.pega.button.byText(`Continue Process`).click();
    }
    async noWait() {
        await pega_model__WEBPACK_IMPORTED_MODULE_1__.pega.button.byText(`No (wait)`).click();
    }
}


/***/ }),

/***/ "./src/specs/exemple-spec.ts":
/*!***********************************!*\
  !*** ./src/specs/exemple-spec.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "./node_modules/test-maker/node_modules/source-map-support/register.js");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var test_maker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! test-maker */ "test-maker");
/* harmony import */ var test_maker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(test_maker__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var pega_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pega-model */ "pega-model");
/* harmony import */ var pega_model__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pega_model__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _model_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/app */ "./src/model/app.ts");




let operator;
//let operatorDev: { username: string, password: string };
(0,test_maker__WEBPACK_IMPORTED_MODULE_1__.Feature)(`Gain Access`)
    .before(async () => {
    try {
        //common part for all the scenarios available per the feature
        //we need to pass the runInfo parameter to the login method to
        // get all current configurations (environment, timeout etc)
        await pega_model__WEBPACK_IMPORTED_MODULE_2__.pega.visit(`https://pega870-web-tnhubcosmosreact.dev.k-expert.com/prweb/app/simbafw/CWRZzxAkMqIuoiZieh-_tw*/!STANDARD?pyActivity=%40baseclass.pzProcessURLInWindow&pyPreActivity=Embed-PortalLayout.RedirectAndRun&ThreadName=OpenPortal_UserPortal&Location=pyActivity%3DData-Portal.ShowSelectedPortal%26portal%3DUserPortal%26Name%3D%20UserPortal%26pzSkinName%3D%26developer%3Dfalse%26ThreadName%3DOpenPortal_UserPortal%26launchPortal%3Dtrue%26mSessionThreadName%3DOpenPortal_UserPortal_MTSP2&bPurgeTargetThread=true&target=popup&portalThreadName=STANDARD&portalName=Developer&pzHarnessID=HID779D62F0E5FA04CFABB2D556CCD1CB6A`);
        await pega_model__WEBPACK_IMPORTED_MODULE_2__.pega.loginForm.login(`Sarra.bech`, `Rules!12345!`);
    }
    catch (e) {
        e.fromSpec = true;
        e.filePath = `D:/tunisia-hub/src/specs/exemple-spec.ts`;
        throw e;
    }
})
    .after(async () => {
    try {
        await pega_model__WEBPACK_IMPORTED_MODULE_2__.pega.logoff(); //Log off
    }
    catch (e) {
        e.fromSpec = true;
        e.filePath = `D:/tunisia-hub/src/specs/exemple-spec.ts`;
        throw e;
    }
})
    .Scenario(`Gain Access`)
    .Given('Gain Access Case', async (_I, _runInfo) => {
    try {
        await pega_model__WEBPACK_IMPORTED_MODULE_2__.pega.frame.switchToDefault();
        await _model_app__WEBPACK_IMPORTED_MODULE_3__.app["case"].createCaseWithTitle("Gain Access");
        await test_maker__WEBPACK_IMPORTED_MODULE_1__.I["debugger"]();
    }
    catch (e) {
        e.fromSpec = true;
        e.filePath = `D:/tunisia-hub/src/specs/exemple-spec.ts`;
        throw e;
    }
})
    .Then(`Reprogrammation Demarche`, async (_I, _runInfo) => {
    try {
        await test_maker__WEBPACK_IMPORTED_MODULE_1__.I["debugger"]();
    }
    catch (e) {
        e.fromSpec = true;
        e.filePath = `D:/tunisia-hub/src/specs/exemple-spec.ts`;
        throw e;
    }
});


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

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = () => {
/******/ 		// Load entry module and return exports
/******/ 		// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_test-maker_node_modules_source-map-support_register_js"], () => (__webpack_require__("./src/specs/exemple-spec.ts")))
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			"./src/specs/exemple-spec": 1
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.O.require = (chunkId) => (installedChunks[chunkId]);
/******/ 		
/******/ 		var installChunk = (chunk) => {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 			__webpack_require__.O();
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("../../" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	(() => {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			__webpack_require__.e("vendors-node_modules_test-maker_node_modules_source-map-support_register_js");
/******/ 			return next();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=exemple-spec.js.map