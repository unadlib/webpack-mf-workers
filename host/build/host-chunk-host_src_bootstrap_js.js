"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack_mf_workers"] = self["webpackChunkwebpack_mf_workers"] || []).push([["host_src_bootstrap_js"],{

/***/ "./host/src/bootstrap.js":
/*!*******************************!*\
  !*** ./host/src/bootstrap.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var myModule_testValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! myModule/testValue */ \"webpack/container/remote/myModule/testValue\");\n/* harmony import */ var myModule_testValue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(myModule_testValue__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconsole.log('testValue in main thread', myModule_testValue__WEBPACK_IMPORTED_MODULE_0__.testValue);\n\nconst worker = new SharedWorker(new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u(\"host_src_worker_js-webpack_container_reference_myModule\"), __webpack_require__.b));\n\n\n//# sourceURL=webpack://webpack-mf-workers/./host/src/bootstrap.js?");

/***/ })

}]);