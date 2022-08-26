/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/addArticle/addArticle.js":
/*!**************************************!*\
  !*** ./src/addArticle/addArticle.js ***!
  \**************************************/
/***/ (() => {

eval("console.log(\"add article\");\r\nconsole.log(\"conected\");\r\n\r\nconst burger = document.querySelector(\"#burger\");\r\nconst menu = document.querySelector(\"#menu\");\r\n\r\nburger.addEventListener(\"click\", ()=> {\r\n    if(menu.classList.contains(\"hidden\")){\r\n        menu.classList.remove(\"hidden\");\r\n    }else{\r\n        menu.classList.add(\"hidden\");\r\n    }\r\n});\n\n//# sourceURL=webpack:///./src/addArticle/addArticle.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/addArticle/addArticle.js"]();
/******/ 	
/******/ })()
;