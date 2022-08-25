/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst heading = document.createElement(\"h1\");\nheading.textContent = \"Do you like our Mo:mos?\";\n\nconst contact = document.createElement(\"p\");\ncontact.textContent = \"Contact no: +977-XXX-XXX-XXX\"\n\nfunction AboutTab(parent) {\n    parent.appendChild(heading);\n    parent.appendChild(contact);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutTab);\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// h1 element\nconst title = document.createElement('h1');\ntitle.textContent = \"Our MoMo\";\n\n// img element\nconst img = document.createElement('img');\nimg.setAttribute(\"src\",\"../Jhol_Buff_Momo_.jpg\");\nimg.setAttribute(\"alt\",\"MoMo\");\n\n// p element\nconst paragraph = document.createElement('p');\nparagraph.textContent = \"Our Momo is simply the best is the town. Try us now.\";\n\n// Adds DOM into desired element\nfunction HomeTab (parent) {\n    parent.appendChild(title);\n    parent.appendChild(img);\n    parent.appendChild(paragraph);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeTab);\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n\n\n\n\nconst content = document.querySelector(\"#content\");\n\nconst top = document.createElement('div');\ntop.setAttribute('id','top');\n\nconst pages = document.createElement('div');\npages.setAttribute('id','pages');\n\n//creating three tabs\nconst Home = document.createElement('a');\nHome.textContent = \"Home\";\n\nconst Menu = document.createElement('a');\nMenu.textContent = \"Menu\";\n\nconst About = document.createElement('a');\nAbout.textContent = \"About\";\n\ncontent.appendChild(top);\n\ntop.appendChild(Home);\ntop.appendChild(Menu);\ntop.appendChild(About);\n\ncontent.appendChild(pages);\n\n//default home page\n(0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(pages);\n\n// implementing tab model for pages\ndocument.addEventListener('click', function(e) {\n    if (e.target.textContent === \"Home\") {\n        pages.innerHTML = \"\";\n        (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(pages);\n    } else if (e.target.textContent === \"Menu\") {\n        pages.innerHTML = \"\";\n        (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(pages);\n    } else if (e.target.textContent === \"About\") {\n        pages.innerHTML = \"\";\n        (0,_about__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(pages);\n    };\n});\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst ul = document.createElement(\"ul\");\n\n//Menu list\nconst momoList = [\"Veg Mo:mo\", \"Chicken Mo:mo\", \"Buff Mo:mo\", \"Jhol Mo:mo\", \"Fried Mo:mo\"];\n\nmomoList.forEach( momo => {\n    let li = document.createElement(\"li\");\n    li.innerHTML = momo;\n    ul.appendChild(li);\n})\n\n// Adds node into desired parent element\nfunction MenuTab (parent) {\n    parent.appendChild(ul);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuTab);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;