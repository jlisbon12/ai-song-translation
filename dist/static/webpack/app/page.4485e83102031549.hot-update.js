"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/LanguageSelector.tsx":
/*!*********************************************!*\
  !*** ./src/components/LanguageSelector.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ \"(app-pages-browser)/./node_modules/recoil/es/index.js\");\n/* harmony import */ var _atoms_languageAtom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./atoms/languageAtom */ \"(app-pages-browser)/./src/components/atoms/languageAtom.tsx\");\n/* harmony import */ var _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @radix-ui/react-select */ \"(app-pages-browser)/./node_modules/@radix-ui/react-select/dist/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_ChevronDown_ChevronUp_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronDown,ChevronUp!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/chevron-down.js\");\n/* harmony import */ var _barrel_optimize_names_ChevronDown_ChevronUp_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronDown,ChevronUp!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/chevron-up.js\");\n/* harmony import */ var _ui_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/card */ \"(app-pages-browser)/./src/components/ui/card.tsx\");\n/* harmony import */ var _cospired_i18n_iso_languages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @cospired/i18n-iso-languages */ \"(app-pages-browser)/./node_modules/@cospired/i18n-iso-languages/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst LanguageSelector = ()=>{\n    _s();\n    const [languages, setLanguages] = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState)(_atoms_languageAtom__WEBPACK_IMPORTED_MODULE_3__.languageState);\n    const sourceLang = _cospired_i18n_iso_languages__WEBPACK_IMPORTED_MODULE_5__.getName(languages.sourceLanguage, \"en\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-row\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_card__WEBPACK_IMPORTED_MODULE_4__.Card, {\n                        className: \"glass p-2 \",\n                        children: \"Original Language\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jedaelisbon/Documents/WD/ai-song-translation/src/components/LanguageSelector.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_card__WEBPACK_IMPORTED_MODULE_4__.Card, {\n                        className: \"glass py-2 px-6\",\n                        children: sourceLang || \"Auto Detected\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jedaelisbon/Documents/WD/ai-song-translation/src/components/LanguageSelector.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jedaelisbon/Documents/WD/ai-song-translation/src/components/LanguageSelector.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_card__WEBPACK_IMPORTED_MODULE_4__.Card, {\n                        className: \"glass rounded-sm p-2\",\n                        children: \"Target Language\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jedaelisbon/Documents/WD/ai-song-translation/src/components/LanguageSelector.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_6__.Root, {\n                        onValueChange: (value)=>setLanguages({\n                                ...languages,\n                                targetLanguage: value\n                            }),\n                        value: languages.targetLanguage,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_6__.Trigger, {\n                                className: \"glass inline-flex items-center justify-center text-[13px] rounded-[4px] py-5 px-[15px] gap-[5px] h-[35px]\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_6__.Value, {\n                                        placeholder: \"Select a language\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jedaelisbon/Documents/WD/ai-song-translation/src/components/LanguageSelector.tsx\",\n                                        lineNumber: 29,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_6__.Icon, {\n                                        className: \"text-inherit\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChevronDown_ChevronUp_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                            className: \"\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jedaelisbon/Documents/WD/ai-song-translation/src/components/LanguageSelector.tsx\",\n                                            lineNumber: 31,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jedaelisbon/Documents/WD/ai-song-translation/src/components/LanguageSelector.tsx\",\n                                        lineNumber: 30,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/jedaelisbon/Documents/WD/ai-song-translation/src/components/LanguageSelector.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_6__.Portal, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_6__.Content, {\n                                    className: \"overflow-hidden rounded-md\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_6__.ScrollUpButton, {\n                                            className: \"flex items-center justify-center h-[25px] bg-inherit text-inherit cursor-default\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChevronDown_ChevronUp_lucide_react__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                                                fileName: \"/Users/jedaelisbon/Documents/WD/ai-song-translation/src/components/LanguageSelector.tsx\",\n                                                lineNumber: 37,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jedaelisbon/Documents/WD/ai-song-translation/src/components/LanguageSelector.tsx\",\n                                            lineNumber: 36,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_6__.Viewport, {\n                                            className: \"p-[4px]\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_6__.Group, {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_6__.Item, {\n                                                        value: \"fr\",\n                                                        className: \"flex items-center relative h-[25px] rounded-[3px] text-[13px]\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_6__.ItemText, {\n                                                            children: \"French\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/jedaelisbon/Documents/WD/ai-song-translation/src/components/LanguageSelector.tsx\",\n                                                            lineNumber: 45,\n                                                            columnNumber: 21\n                                                        }, undefined)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/jedaelisbon/Documents/WD/ai-song-translation/src/components/LanguageSelector.tsx\",\n                                                        lineNumber: 41,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_6__.Item, {\n                                                        value: \"es\",\n                                                        className: \"flex items-center relative h-[25px] rounded-[3px] text-[13px]\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_6__.ItemText, {\n                                                            children: \"Spanish\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/jedaelisbon/Documents/WD/ai-song-translation/src/components/LanguageSelector.tsx\",\n                                                            lineNumber: 51,\n                                                            columnNumber: 21\n                                                        }, undefined)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/jedaelisbon/Documents/WD/ai-song-translation/src/components/LanguageSelector.tsx\",\n                                                        lineNumber: 47,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_6__.Item, {\n                                                        value: \"de\",\n                                                        className: \"flex items-center relative h-[25px] rounded-[3px] text-[13px]\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_6__.ItemText, {\n                                                            children: \"German\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/jedaelisbon/Documents/WD/ai-song-translation/src/components/LanguageSelector.tsx\",\n                                                            lineNumber: 57,\n                                                            columnNumber: 21\n                                                        }, undefined)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/jedaelisbon/Documents/WD/ai-song-translation/src/components/LanguageSelector.tsx\",\n                                                        lineNumber: 53,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_6__.Item, {\n                                                        value: \"pt\",\n                                                        className: \"flex items-center relative h-[25px] rounded-[3px] text-[13px]\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_6__.ItemText, {\n                                                            children: \"Portuguese\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/jedaelisbon/Documents/WD/ai-song-translation/src/components/LanguageSelector.tsx\",\n                                                            lineNumber: 63,\n                                                            columnNumber: 21\n                                                        }, undefined)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/jedaelisbon/Documents/WD/ai-song-translation/src/components/LanguageSelector.tsx\",\n                                                        lineNumber: 59,\n                                                        columnNumber: 19\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/jedaelisbon/Documents/WD/ai-song-translation/src/components/LanguageSelector.tsx\",\n                                                lineNumber: 40,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jedaelisbon/Documents/WD/ai-song-translation/src/components/LanguageSelector.tsx\",\n                                            lineNumber: 39,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_6__.ScrollDownButton, {\n                                            className: \"flex items-center justify-center h-[25px] cursor-default\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChevronDown_ChevronUp_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                                fileName: \"/Users/jedaelisbon/Documents/WD/ai-song-translation/src/components/LanguageSelector.tsx\",\n                                                lineNumber: 68,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jedaelisbon/Documents/WD/ai-song-translation/src/components/LanguageSelector.tsx\",\n                                            lineNumber: 67,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/jedaelisbon/Documents/WD/ai-song-translation/src/components/LanguageSelector.tsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/jedaelisbon/Documents/WD/ai-song-translation/src/components/LanguageSelector.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jedaelisbon/Documents/WD/ai-song-translation/src/components/LanguageSelector.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jedaelisbon/Documents/WD/ai-song-translation/src/components/LanguageSelector.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jedaelisbon/Documents/WD/ai-song-translation/src/components/LanguageSelector.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\n_s(LanguageSelector, \"tNQwoUBz85kfJzxEj4vzQ4v0hBg=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState\n    ];\n});\n_c = LanguageSelector;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LanguageSelector);\nvar _c;\n$RefreshReg$(_c, \"LanguageSelector\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0xhbmd1YWdlU2VsZWN0b3IudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDaUM7QUFDTjtBQUNKO0FBQ0s7QUFDUjtBQUNFO0FBRWhELE1BQU1RLG1CQUFtQjs7SUFDdkIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdULHNEQUFjQSxDQUFDQyw4REFBYUE7SUFFOUQsTUFBTVMsYUFBYUosaUVBQVksQ0FBQ0UsVUFBVUksY0FBYyxFQUFFO0lBRTFELHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDVCwwQ0FBSUE7d0JBQUNTLFdBQVU7a0NBQWE7Ozs7OztrQ0FDN0IsOERBQUNULDBDQUFJQTt3QkFBQ1MsV0FBVTtrQ0FBbUJKLGNBQWM7Ozs7Ozs7Ozs7OzswQkFFbkQsOERBQUNHO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ1QsMENBQUlBO3dCQUFDUyxXQUFVO2tDQUF1Qjs7Ozs7O2tDQUN2Qyw4REFBQ1osd0RBQVc7d0JBQ1ZjLGVBQWUsQ0FBQ0MsUUFDZFIsYUFBYTtnQ0FBRSxHQUFHRCxTQUFTO2dDQUFFVSxnQkFBZ0JEOzRCQUFNO3dCQUVyREEsT0FBT1QsVUFBVVUsY0FBYzs7MENBRS9CLDhEQUFDaEIsMkRBQWM7Z0NBQUNZLFdBQVU7O2tEQUN4Qiw4REFBQ1oseURBQVk7d0NBQUNtQixhQUFZOzs7Ozs7a0RBQzFCLDhEQUFDbkIsd0RBQVc7d0NBQUNZLFdBQVU7a0RBQ3JCLDRFQUFDWCxpR0FBV0E7NENBQUNXLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUczQiw4REFBQ1osMERBQWE7MENBQ1osNEVBQUNBLDJEQUFjO29DQUFDWSxXQUFVOztzREFDeEIsOERBQUNaLGtFQUFxQjs0Q0FBQ1ksV0FBVTtzREFDL0IsNEVBQUNWLGlHQUFTQTs7Ozs7Ozs7OztzREFFWiw4REFBQ0YsNERBQWU7NENBQUNZLFdBQVU7c0RBQ3pCLDRFQUFDWix5REFBWTs7a0VBQ1gsOERBQUNBLHdEQUFXO3dEQUNWZSxPQUFNO3dEQUNOSCxXQUFVO2tFQUVWLDRFQUFDWiw0REFBZTtzRUFBQzs7Ozs7Ozs7Ozs7a0VBRW5CLDhEQUFDQSx3REFBVzt3REFDVmUsT0FBTTt3REFDTkgsV0FBVTtrRUFFViw0RUFBQ1osNERBQWU7c0VBQUM7Ozs7Ozs7Ozs7O2tFQUVuQiw4REFBQ0Esd0RBQVc7d0RBQ1ZlLE9BQU07d0RBQ05ILFdBQVU7a0VBRVYsNEVBQUNaLDREQUFlO3NFQUFDOzs7Ozs7Ozs7OztrRUFFbkIsOERBQUNBLHdEQUFXO3dEQUNWZSxPQUFNO3dEQUNOSCxXQUFVO2tFQUVWLDRFQUFDWiw0REFBZTtzRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzREFJdkIsOERBQUNBLG9FQUF1Qjs0Q0FBQ1ksV0FBVTtzREFDakMsNEVBQUNYLGlHQUFXQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUTVCO0dBbkVNSTs7UUFDOEJQLGtEQUFjQTs7O0tBRDVDTztBQXFFTiwrREFBZUEsZ0JBQWdCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0xhbmd1YWdlU2VsZWN0b3IudHN4P2VlMjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUmVjb2lsU3RhdGUsIHVzZVNldFJlY29pbFN0YXRlIH0gZnJvbSBcInJlY29pbFwiO1xuaW1wb3J0IHsgbGFuZ3VhZ2VTdGF0ZSB9IGZyb20gXCIuL2F0b21zL2xhbmd1YWdlQXRvbVwiO1xuaW1wb3J0ICogYXMgU2VsZWN0IGZyb20gXCJAcmFkaXgtdWkvcmVhY3Qtc2VsZWN0XCI7XG5pbXBvcnQgeyBDaGV2cm9uRG93biwgQ2hldnJvblVwIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IHsgQ2FyZCwgQ2FyZENvbnRlbnQgfSBmcm9tIFwiLi91aS9jYXJkXCI7XG5pbXBvcnQgbGFuZyBmcm9tIFwiQGNvc3BpcmVkL2kxOG4taXNvLWxhbmd1YWdlc1wiO1xuXG5jb25zdCBMYW5ndWFnZVNlbGVjdG9yID0gKCkgPT4ge1xuICBjb25zdCBbbGFuZ3VhZ2VzLCBzZXRMYW5ndWFnZXNdID0gdXNlUmVjb2lsU3RhdGUobGFuZ3VhZ2VTdGF0ZSk7XG5cbiAgY29uc3Qgc291cmNlTGFuZyA9IGxhbmcuZ2V0TmFtZShsYW5ndWFnZXMuc291cmNlTGFuZ3VhZ2UsIFwiZW5cIik7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3dcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvd1wiPlxuICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJnbGFzcyBwLTIgXCI+T3JpZ2luYWwgTGFuZ3VhZ2U8L0NhcmQ+XG4gICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cImdsYXNzIHB5LTIgcHgtNlwiPntzb3VyY2VMYW5nIHx8IFwiQXV0byBEZXRlY3RlZFwifTwvQ2FyZD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93XCI+XG4gICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cImdsYXNzIHJvdW5kZWQtc20gcC0yXCI+VGFyZ2V0IExhbmd1YWdlPC9DYXJkPlxuICAgICAgICA8U2VsZWN0LlJvb3RcbiAgICAgICAgICBvblZhbHVlQ2hhbmdlPXsodmFsdWUpID0+XG4gICAgICAgICAgICBzZXRMYW5ndWFnZXMoeyAuLi5sYW5ndWFnZXMsIHRhcmdldExhbmd1YWdlOiB2YWx1ZSB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICB2YWx1ZT17bGFuZ3VhZ2VzLnRhcmdldExhbmd1YWdlfVxuICAgICAgICA+XG4gICAgICAgICAgPFNlbGVjdC5UcmlnZ2VyIGNsYXNzTmFtZT1cImdsYXNzIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LVsxM3B4XSByb3VuZGVkLVs0cHhdIHB5LTUgcHgtWzE1cHhdIGdhcC1bNXB4XSBoLVszNXB4XVwiPlxuICAgICAgICAgICAgPFNlbGVjdC5WYWx1ZSBwbGFjZWhvbGRlcj1cIlNlbGVjdCBhIGxhbmd1YWdlXCIgLz5cbiAgICAgICAgICAgIDxTZWxlY3QuSWNvbiBjbGFzc05hbWU9XCJ0ZXh0LWluaGVyaXRcIj5cbiAgICAgICAgICAgICAgPENoZXZyb25Eb3duIGNsYXNzTmFtZT1cIlwiIC8+XG4gICAgICAgICAgICA8L1NlbGVjdC5JY29uPlxuICAgICAgICAgIDwvU2VsZWN0LlRyaWdnZXI+XG4gICAgICAgICAgPFNlbGVjdC5Qb3J0YWw+XG4gICAgICAgICAgICA8U2VsZWN0LkNvbnRlbnQgY2xhc3NOYW1lPVwib3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtbWRcIj5cbiAgICAgICAgICAgICAgPFNlbGVjdC5TY3JvbGxVcEJ1dHRvbiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBoLVsyNXB4XSBiZy1pbmhlcml0IHRleHQtaW5oZXJpdCBjdXJzb3ItZGVmYXVsdFwiPlxuICAgICAgICAgICAgICAgIDxDaGV2cm9uVXAgLz5cbiAgICAgICAgICAgICAgPC9TZWxlY3QuU2Nyb2xsVXBCdXR0b24+XG4gICAgICAgICAgICAgIDxTZWxlY3QuVmlld3BvcnQgY2xhc3NOYW1lPVwicC1bNHB4XVwiPlxuICAgICAgICAgICAgICAgIDxTZWxlY3QuR3JvdXA+XG4gICAgICAgICAgICAgICAgICA8U2VsZWN0Lkl0ZW1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJmclwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHJlbGF0aXZlIGgtWzI1cHhdIHJvdW5kZWQtWzNweF0gdGV4dC1bMTNweF1cIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0Lkl0ZW1UZXh0PkZyZW5jaDwvU2VsZWN0Lkl0ZW1UZXh0PlxuICAgICAgICAgICAgICAgICAgPC9TZWxlY3QuSXRlbT5cbiAgICAgICAgICAgICAgICAgIDxTZWxlY3QuSXRlbVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cImVzXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgcmVsYXRpdmUgaC1bMjVweF0gcm91bmRlZC1bM3B4XSB0ZXh0LVsxM3B4XVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3QuSXRlbVRleHQ+U3BhbmlzaDwvU2VsZWN0Lkl0ZW1UZXh0PlxuICAgICAgICAgICAgICAgICAgPC9TZWxlY3QuSXRlbT5cbiAgICAgICAgICAgICAgICAgIDxTZWxlY3QuSXRlbVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cImRlXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgcmVsYXRpdmUgaC1bMjVweF0gcm91bmRlZC1bM3B4XSB0ZXh0LVsxM3B4XVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3QuSXRlbVRleHQ+R2VybWFuPC9TZWxlY3QuSXRlbVRleHQ+XG4gICAgICAgICAgICAgICAgICA8L1NlbGVjdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgPFNlbGVjdC5JdGVtXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwicHRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciByZWxhdGl2ZSBoLVsyNXB4XSByb3VuZGVkLVszcHhdIHRleHQtWzEzcHhdXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdC5JdGVtVGV4dD5Qb3J0dWd1ZXNlPC9TZWxlY3QuSXRlbVRleHQ+XG4gICAgICAgICAgICAgICAgICA8L1NlbGVjdC5JdGVtPlxuICAgICAgICAgICAgICAgIDwvU2VsZWN0Lkdyb3VwPlxuICAgICAgICAgICAgICA8L1NlbGVjdC5WaWV3cG9ydD5cbiAgICAgICAgICAgICAgPFNlbGVjdC5TY3JvbGxEb3duQnV0dG9uIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGgtWzI1cHhdIGN1cnNvci1kZWZhdWx0XCI+XG4gICAgICAgICAgICAgICAgPENoZXZyb25Eb3duIC8+XG4gICAgICAgICAgICAgIDwvU2VsZWN0LlNjcm9sbERvd25CdXR0b24+XG4gICAgICAgICAgICA8L1NlbGVjdC5Db250ZW50PlxuICAgICAgICAgIDwvU2VsZWN0LlBvcnRhbD5cbiAgICAgICAgPC9TZWxlY3QuUm9vdD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGFuZ3VhZ2VTZWxlY3RvcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlY29pbFN0YXRlIiwibGFuZ3VhZ2VTdGF0ZSIsIlNlbGVjdCIsIkNoZXZyb25Eb3duIiwiQ2hldnJvblVwIiwiQ2FyZCIsImxhbmciLCJMYW5ndWFnZVNlbGVjdG9yIiwibGFuZ3VhZ2VzIiwic2V0TGFuZ3VhZ2VzIiwic291cmNlTGFuZyIsImdldE5hbWUiLCJzb3VyY2VMYW5ndWFnZSIsImRpdiIsImNsYXNzTmFtZSIsIlJvb3QiLCJvblZhbHVlQ2hhbmdlIiwidmFsdWUiLCJ0YXJnZXRMYW5ndWFnZSIsIlRyaWdnZXIiLCJWYWx1ZSIsInBsYWNlaG9sZGVyIiwiSWNvbiIsIlBvcnRhbCIsIkNvbnRlbnQiLCJTY3JvbGxVcEJ1dHRvbiIsIlZpZXdwb3J0IiwiR3JvdXAiLCJJdGVtIiwiSXRlbVRleHQiLCJTY3JvbGxEb3duQnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/LanguageSelector.tsx\n"));

/***/ })

});