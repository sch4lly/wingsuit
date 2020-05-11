(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("lib", [], factory);
	else if(typeof exports === 'object')
		exports["lib"] = factory();
	else
		root["lib"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./.cache/develop-static-entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./.cache/develop-static-entry.js":
/*!****************************************!*\
  !*** ./.cache/develop-static-entry.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/gatsby/dist/utils/babel-loader.js):\nSyntaxError: /home/rafael/projects/wingsuit/packages/wingsuit/.cache/develop-static-entry.js: Unexpected token (31:4)\n\n\u001b[0m \u001b[90m 29 | \u001b[39m\u001b[36mexport\u001b[39m \u001b[36mdefault\u001b[39m (pagePath\u001b[33m,\u001b[39m callback) \u001b[33m=>\u001b[39m {\u001b[0m\n\u001b[0m \u001b[90m 30 | \u001b[39m  let headComponents \u001b[33m=\u001b[39m [\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 31 | \u001b[39m    \u001b[33m<\u001b[39m\u001b[33mmeta\u001b[39m key\u001b[33m=\u001b[39m\u001b[32m\"environment\"\u001b[39m name\u001b[33m=\u001b[39m\u001b[32m\"note\"\u001b[39m content\u001b[33m=\u001b[39m\u001b[32m\"environment=development\"\u001b[39m \u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m    \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 32 | \u001b[39m  ]\u001b[0m\n\u001b[0m \u001b[90m 33 | \u001b[39m  let htmlAttributes \u001b[33m=\u001b[39m {}\u001b[0m\n\u001b[0m \u001b[90m 34 | \u001b[39m  let bodyAttributes \u001b[33m=\u001b[39m {}\u001b[0m\n    at Parser._raise (/home/rafael/projects/wingsuit/packages/wingsuit/node_modules/@babel/parser/lib/index.js:742:17)\n    at Parser.raiseWithData (/home/rafael/projects/wingsuit/packages/wingsuit/node_modules/@babel/parser/lib/index.js:735:17)\n    at Parser.raise (/home/rafael/projects/wingsuit/packages/wingsuit/node_modules/@babel/parser/lib/index.js:729:17)\n    at Parser.unexpected (/home/rafael/projects/wingsuit/packages/wingsuit/node_modules/@babel/parser/lib/index.js:8779:16)\n    at Parser.parseExprAtom (/home/rafael/projects/wingsuit/packages/wingsuit/node_modules/@babel/parser/lib/index.js:10074:20)\n    at Parser.parseExprSubscripts (/home/rafael/projects/wingsuit/packages/wingsuit/node_modules/@babel/parser/lib/index.js:9624:23)\n    at Parser.parseMaybeUnary (/home/rafael/projects/wingsuit/packages/wingsuit/node_modules/@babel/parser/lib/index.js:9604:21)\n    at Parser.parseExprOps (/home/rafael/projects/wingsuit/packages/wingsuit/node_modules/@babel/parser/lib/index.js:9474:23)\n    at Parser.parseMaybeConditional (/home/rafael/projects/wingsuit/packages/wingsuit/node_modules/@babel/parser/lib/index.js:9447:23)\n    at Parser.parseMaybeAssign (/home/rafael/projects/wingsuit/packages/wingsuit/node_modules/@babel/parser/lib/index.js:9402:21)\n    at Parser.parseExprListItem (/home/rafael/projects/wingsuit/packages/wingsuit/node_modules/@babel/parser/lib/index.js:10740:18)\n    at Parser.parseExprList (/home/rafael/projects/wingsuit/packages/wingsuit/node_modules/@babel/parser/lib/index.js:10714:22)\n    at Parser.parseExprAtom (/home/rafael/projects/wingsuit/packages/wingsuit/node_modules/@babel/parser/lib/index.js:9991:32)\n    at Parser.parseExprSubscripts (/home/rafael/projects/wingsuit/packages/wingsuit/node_modules/@babel/parser/lib/index.js:9624:23)\n    at Parser.parseMaybeUnary (/home/rafael/projects/wingsuit/packages/wingsuit/node_modules/@babel/parser/lib/index.js:9604:21)\n    at Parser.parseExprOps (/home/rafael/projects/wingsuit/packages/wingsuit/node_modules/@babel/parser/lib/index.js:9474:23)");

/***/ })

/******/ });
});
//# sourceMappingURL=render-page.js.map