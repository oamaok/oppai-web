/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client/oppai.js":
/*!*****************************!*\
  !*** ./src/client/oppai.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar file = document.getElementById('map');\nvar form = document.getElementById('oppai');\nvar output = document.getElementById('output');\nvar mods = ['nf', 'ez', 'hd', 'hr', 'dt', 'ht', 'fl', 'so'];\nvar modInputs = mods.map(function (mod) {\n  return document.getElementById(\"mod-\".concat(mod));\n});\nfile.addEventListener('change', function (evt) {\n  document.getElementById('filename').innerText = file.value.replace(/\\\\/g, '/').replace(/.*\\//, '');\n});\nform.addEventListener('submit', function (evt) {\n  evt.preventDefault();\n  output.innerHTML = '<div class=\"loading\"></div>';\n  var body = new FormData(form);\n  body.append('mods', _toConsumableArray(modInputs).filter(function (node) {\n    return node.checked;\n  }).map(function (node) {\n    return node.id.substr(-2);\n  }));\n  fetch('/oppai', {\n    method: 'post',\n    body: body\n  }).then(function (res) {\n    return res.json();\n  }).then(function (res) {\n    if (res.error) {\n      output.innerText = res.error;\n      return;\n    }\n\n    output.innerText = res.output.split('\\n').slice(-16).join('\\n').trim();\n  })[\"catch\"](function (error) {\n    output.innerText = res.error;\n  });\n});\n\n//# sourceURL=webpack:///./src/client/oppai.js?");

/***/ }),

/***/ "./src/client/styles/main.sass":
/*!*************************************!*\
  !*** ./src/client/styles/main.sass ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/client/styles/main.sass?");

/***/ }),

/***/ 0:
/*!*****************************************************************!*\
  !*** multi ./src/client/oppai.js ./src/client/styles/main.sass ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! /data/repos/oppai-web/src/client/oppai.js */\"./src/client/oppai.js\");\nmodule.exports = __webpack_require__(/*! /data/repos/oppai-web/src/client/styles/main.sass */\"./src/client/styles/main.sass\");\n\n\n//# sourceURL=webpack:///multi_./src/client/oppai.js_./src/client/styles/main.sass?");

/***/ })

/******/ });