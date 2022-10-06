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

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ (() => {

eval("console.log(\"navbar script\");\r\n\r\n// border-primary border-r-4\r\nconst HOME = document.querySelectorAll(\"#HOME\");\r\nconst ABOUT = document.querySelectorAll(\"#ABOUT\");\r\n\r\nfor(let i = 0; i < HOME.length; i++){\r\n    HOME[i].addEventListener(\"click\", ()=> {\r\n        if(!HOME[i].classList.contains(\"navFull\")){\r\n            HOME[i].classList.add(\"navFull\");\r\n            ABOUT[i].classList.remove(\"navFull\");\r\n            // console.log(ABOUT[i]);\r\n        }\r\n    });\r\n}\r\nfor(let i = 0; i < ABOUT.length; i++){\r\n    ABOUT[i].addEventListener(\"click\", ()=> {\r\n        if(!ABOUT[i].classList.contains(\"navFull\")){\r\n            ABOUT[i].classList.add(\"navFull\");\r\n            HOME[i].classList.remove(\"navFull\");\r\n            // console.log(HOME[i]);\r\n        }\r\n        // console.log(ABOUT[i]);\r\n    })\r\n}\n\n//# sourceURL=webpack:///./src/navbar.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/navbar.js"]();
/******/ 	
/******/ })()
;