/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/src/bundle";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

eval("throw new Error(\"Module build failed: Error: Cannot find module 'babel-core'\\n    at Function.Module._resolveFilename (module.js:470:15)\\n    at Function.Module._load (module.js:418:25)\\n    at Module.require (module.js:498:17)\\n    at require (internal/module.js:20:19)\\n    at Object.<anonymous> (C:\\\\Users\\\\pheon\\\\Desktop\\\\axl-projects-lite\\\\node_modules\\\\babel-loader\\\\lib\\\\index.js:3:13)\\n    at Module._compile (module.js:571:32)\\n    at Object.Module._extensions..js (module.js:580:10)\\n    at Module.load (module.js:488:32)\\n    at tryModuleLoad (module.js:447:12)\\n    at Function.Module._load (module.js:439:3)\\n    at Module.require (module.js:498:17)\\n    at require (internal/module.js:20:19)\\n    at loadLoader (C:\\\\Users\\\\pheon\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\webpack\\\\node_modules\\\\loader-runner\\\\lib\\\\loadLoader.js:13:17)\\n    at iteratePitchingLoaders (C:\\\\Users\\\\pheon\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\webpack\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:164:2)\\n    at runLoaders (C:\\\\Users\\\\pheon\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\webpack\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:357:2)\\n    at NormalModule.doBuild (C:\\\\Users\\\\pheon\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\webpack\\\\lib\\\\NormalModule.js:131:2)\\n    at NormalModule.build (C:\\\\Users\\\\pheon\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\webpack\\\\lib\\\\NormalModule.js:179:15)\\n    at Compilation.buildModule (C:\\\\Users\\\\pheon\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:127:9)\\n    at C:\\\\Users\\\\pheon\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:306:10\\n    at C:\\\\Users\\\\pheon\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\webpack\\\\lib\\\\NormalModuleFactory.js:74:13\\n    at NormalModuleFactory.applyPluginsAsyncWaterfall (C:\\\\Users\\\\pheon\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\webpack\\\\node_modules\\\\tapable\\\\lib\\\\Tapable.js:160:70)\\n    at onDoneResolving (C:\\\\Users\\\\pheon\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\webpack\\\\lib\\\\NormalModuleFactory.js:49:11)\\n    at onDoneResolving (C:\\\\Users\\\\pheon\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\webpack\\\\lib\\\\NormalModuleFactory.js:165:6)\\n    at C:\\\\Users\\\\pheon\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\webpack\\\\lib\\\\NormalModuleFactory.js:161:6\\n    at C:\\\\Users\\\\pheon\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\webpack\\\\node_modules\\\\async\\\\lib\\\\async.js:726:13\\n    at C:\\\\Users\\\\pheon\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\webpack\\\\node_modules\\\\async\\\\lib\\\\async.js:52:16\\n    at done (C:\\\\Users\\\\pheon\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\webpack\\\\node_modules\\\\async\\\\lib\\\\async.js:246:17)\\n    at C:\\\\Users\\\\pheon\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\webpack\\\\node_modules\\\\async\\\\lib\\\\async.js:44:16\\n    at C:\\\\Users\\\\pheon\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\webpack\\\\node_modules\\\\async\\\\lib\\\\async.js:723:17\\n    at C:\\\\Users\\\\pheon\\\\AppData\\\\Roaming\\\\npm\\\\node_modules\\\\webpack\\\\node_modules\\\\async\\\\lib\\\\async.js:167:37\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIwLmpzIiwic291cmNlUm9vdCI6IiJ9");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

(function webpackMissingModule() { throw new Error("Cannot find module \"whatwg-fetch\""); }());
module.exports = __webpack_require__(0);


/***/ }
/******/ ]);