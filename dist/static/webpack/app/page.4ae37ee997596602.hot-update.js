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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ \"(app-pages-browser)/./node_modules/recoil/es/index.js\");\n/* harmony import */ var _atoms_languageAtom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./atoms/languageAtom */ \"(app-pages-browser)/./src/components/atoms/languageAtom.tsx\");\n/* harmony import */ var _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @radix-ui/react-select */ \"(app-pages-browser)/./node_modules/@radix-ui/react-select/dist/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_ChevronDown_ChevronUp_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronDown,ChevronUp!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/chevron-down.js\");\n/* harmony import */ var _barrel_optimize_names_ChevronDown_ChevronUp_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronDown,ChevronUp!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/chevron-up.js\");\n/* harmony import */ var _ui_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/card */ \"(app-pages-browser)/./src/components/ui/card.tsx\");\n/* harmony import */ var _cospired_i18n_iso_languages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @cospired/i18n-iso-languages */ \"(app-pages-browser)/./node_modules/@cospired/i18n-iso-languages/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst LanguageSelector = ()=>{\n    _s();\n    const [languages, setLanguages] = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState)(_atoms_languageAtom__WEBPACK_IMPORTED_MODULE_3__.languageState);\n    const sourceLang = (0,_cospired_i18n_iso_languages__WEBPACK_IMPORTED_MODULE_5__.getName)(String(languages.sourceLanguage), \"en\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-row\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_card__WEBPACK_IMPORTED_MODULE_4__.Card, {\n                        className: \"glass p-2 \",\n                        children: \"Original Language\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jedaelisbon/Documents/WD/ai-song-translation/src/components/LanguageSelector.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_card__WEBPACK_IMPORTED_MODULE_4__.Card, {\n                        className: \"glass py-2 px-6\",\n                        children: sourceLang || \"Auto Detected\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jedaelisbon/Documents/WD/ai-song-translation/src/components/LanguageSelector.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jedaelisbon/Documents/WD/ai-song-translation/src/components/LanguageSelector.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_card__WEBPACK_IMPORTED_MODULE_4__.Card, {\n                        className: \"glass rounded-sm p-2\",\n                        children: \"Target Language\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jedaelisbon/Documents/WD/ai-song-translation/src/components/LanguageSelector.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_6__.Root, {\n                        onValueChange: (value)=>setLanguages({\n                                ...languages,\n                                targetLanguage: value\n                            }),\n                        value: languages.targetLanguage,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_6__.Trigger, {\n                                className: \"glass inline-flex items-center justify-center text-[13px] rounded-[4px] py-5 px-[15px] gap-[5px] h-[35px]\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_6__.Value, {\n                                        placeholder: \"Select a language\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jedaelisbon/Documents/WD/ai-song-translation/src/components/LanguageSelector.tsx\",\n                                        lineNumber: 29,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_6__.Icon, {\n                                        className: \"text-inherit\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChevronDown_ChevronUp_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                            className: \"\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jedaelisbon/Documents/WD/ai-song-translation/src/components/LanguageSelector.tsx\",\n                                            lineNumber: 31,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jedaelisbon/Documents/WD/ai-song-translation/src/components/LanguageSelector.tsx\",\n                                        lineNumber: 30,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/jedaelisbon/Documents/WD/ai-song-translation/src/components/LanguageSelector.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_6__.Portal, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_6__.Content, {\n                                    className: \"overflow-hidden rounded-md\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_6__.ScrollUpButton, {\n                                            className: \"flex items-center justify-center h-[25px] bg-inherit text-inherit cursor-default\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChevronDown_ChevronUp_lucide_react__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                                                fileName: \"/Users/jedaelisbon/Documents/WD/ai-song-translation/src/components/LanguageSelector.tsx\",\n                                                lineNumber: 37,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jedaelisbon/Documents/WD/ai-song-translation/src/components/LanguageSelector.tsx\",\n                                            lineNumber: 36,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_6__.Viewport, {\n                                            className: \"p-[4px]\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_6__.Group, {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_6__.Item, {\n                                                        value: \"fr\",\n                                                        className: \"flex items-center relative h-[25px] rounded-[3px] text-[13px]\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_6__.ItemText, {\n                                                            children: \"French\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/jedaelisbon/Documents/WD/ai-song-translation/src/components/LanguageSelector.tsx\",\n                                                            lineNumber: 45,\n                                                            columnNumber: 21\n                                                        }, undefined)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/jedaelisbon/Documents/WD/ai-song-translation/src/components/LanguageSelector.tsx\",\n                                                        lineNumber: 41,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_6__.Item, {\n                                                        value: \"es\",\n                                                        className: \"flex items-center relative h-[25px] rounded-[3px] text-[13px]\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_6__.ItemText, {\n                                                            children: \"Spanish\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/jedaelisbon/Documents/WD/ai-song-translation/src/components/LanguageSelector.tsx\",\n                                                            lineNumber: 51,\n                                                            columnNumber: 21\n                                                        }, undefined)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/jedaelisbon/Documents/WD/ai-song-translation/src/components/LanguageSelector.tsx\",\n                                                        lineNumber: 47,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_6__.Item, {\n                                                        value: \"de\",\n                                                        className: \"flex items-center relative h-[25px] rounded-[3px] text-[13px]\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_6__.ItemText, {\n                                                            children: \"German\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/jedaelisbon/Documents/WD/ai-song-translation/src/components/LanguageSelector.tsx\",\n                                                            lineNumber: 57,\n                                                            columnNumber: 21\n                                                        }, undefined)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/jedaelisbon/Documents/WD/ai-song-translation/src/components/LanguageSelector.tsx\",\n                                                        lineNumber: 53,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_6__.Item, {\n                                                        value: \"pt\",\n                                                        className: \"flex items-center relative h-[25px] rounded-[3px] text-[13px]\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_6__.ItemText, {\n                                                            children: \"Portuguese\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/jedaelisbon/Documents/WD/ai-song-translation/src/components/LanguageSelector.tsx\",\n                                                            lineNumber: 63,\n                                                            columnNumber: 21\n                                                        }, undefined)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/jedaelisbon/Documents/WD/ai-song-translation/src/components/LanguageSelector.tsx\",\n                                                        lineNumber: 59,\n                                                        columnNumber: 19\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/jedaelisbon/Documents/WD/ai-song-translation/src/components/LanguageSelector.tsx\",\n                                                lineNumber: 40,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jedaelisbon/Documents/WD/ai-song-translation/src/components/LanguageSelector.tsx\",\n                                            lineNumber: 39,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_6__.ScrollDownButton, {\n                                            className: \"flex items-center justify-center h-[25px] cursor-default\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChevronDown_ChevronUp_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                                fileName: \"/Users/jedaelisbon/Documents/WD/ai-song-translation/src/components/LanguageSelector.tsx\",\n                                                lineNumber: 68,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jedaelisbon/Documents/WD/ai-song-translation/src/components/LanguageSelector.tsx\",\n                                            lineNumber: 67,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/jedaelisbon/Documents/WD/ai-song-translation/src/components/LanguageSelector.tsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/jedaelisbon/Documents/WD/ai-song-translation/src/components/LanguageSelector.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jedaelisbon/Documents/WD/ai-song-translation/src/components/LanguageSelector.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jedaelisbon/Documents/WD/ai-song-translation/src/components/LanguageSelector.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jedaelisbon/Documents/WD/ai-song-translation/src/components/LanguageSelector.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\n_s(LanguageSelector, \"tNQwoUBz85kfJzxEj4vzQ4v0hBg=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState\n    ];\n});\n_c = LanguageSelector;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LanguageSelector);\nvar _c;\n$RefreshReg$(_c, \"LanguageSelector\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0xhbmd1YWdlU2VsZWN0b3IudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDaUM7QUFDTjtBQUNKO0FBQ0s7QUFDUjtBQUNTO0FBRXZELE1BQU1RLG1CQUFtQjs7SUFDdkIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdULHNEQUFjQSxDQUFDQyw4REFBYUE7SUFFOUQsTUFBTVMsYUFBYUoscUVBQU9BLENBQUNLLE9BQU9ILFVBQVVJLGNBQWMsR0FBRztJQUU3RCxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ1QsMENBQUlBO3dCQUFDUyxXQUFVO2tDQUFhOzs7Ozs7a0NBQzdCLDhEQUFDVCwwQ0FBSUE7d0JBQUNTLFdBQVU7a0NBQW1CSixjQUFjOzs7Ozs7Ozs7Ozs7MEJBRW5ELDhEQUFDRztnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNULDBDQUFJQTt3QkFBQ1MsV0FBVTtrQ0FBdUI7Ozs7OztrQ0FDdkMsOERBQUNaLHdEQUFXO3dCQUNWYyxlQUFlLENBQUNDLFFBQ2RSLGFBQWE7Z0NBQUUsR0FBR0QsU0FBUztnQ0FBRVUsZ0JBQWdCRDs0QkFBTTt3QkFFckRBLE9BQU9ULFVBQVVVLGNBQWM7OzBDQUUvQiw4REFBQ2hCLDJEQUFjO2dDQUFDWSxXQUFVOztrREFDeEIsOERBQUNaLHlEQUFZO3dDQUFDbUIsYUFBWTs7Ozs7O2tEQUMxQiw4REFBQ25CLHdEQUFXO3dDQUFDWSxXQUFVO2tEQUNyQiw0RUFBQ1gsaUdBQVdBOzRDQUFDVyxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OzswQ0FHM0IsOERBQUNaLDBEQUFhOzBDQUNaLDRFQUFDQSwyREFBYztvQ0FBQ1ksV0FBVTs7c0RBQ3hCLDhEQUFDWixrRUFBcUI7NENBQUNZLFdBQVU7c0RBQy9CLDRFQUFDVixpR0FBU0E7Ozs7Ozs7Ozs7c0RBRVosOERBQUNGLDREQUFlOzRDQUFDWSxXQUFVO3NEQUN6Qiw0RUFBQ1oseURBQVk7O2tFQUNYLDhEQUFDQSx3REFBVzt3REFDVmUsT0FBTTt3REFDTkgsV0FBVTtrRUFFViw0RUFBQ1osNERBQWU7c0VBQUM7Ozs7Ozs7Ozs7O2tFQUVuQiw4REFBQ0Esd0RBQVc7d0RBQ1ZlLE9BQU07d0RBQ05ILFdBQVU7a0VBRVYsNEVBQUNaLDREQUFlO3NFQUFDOzs7Ozs7Ozs7OztrRUFFbkIsOERBQUNBLHdEQUFXO3dEQUNWZSxPQUFNO3dEQUNOSCxXQUFVO2tFQUVWLDRFQUFDWiw0REFBZTtzRUFBQzs7Ozs7Ozs7Ozs7a0VBRW5CLDhEQUFDQSx3REFBVzt3REFDVmUsT0FBTTt3REFDTkgsV0FBVTtrRUFFViw0RUFBQ1osNERBQWU7c0VBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0RBSXZCLDhEQUFDQSxvRUFBdUI7NENBQUNZLFdBQVU7c0RBQ2pDLDRFQUFDWCxpR0FBV0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVE1QjtHQW5FTUk7O1FBQzhCUCxrREFBY0E7OztLQUQ1Q087QUFxRU4sK0RBQWVBLGdCQUFnQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9MYW5ndWFnZVNlbGVjdG9yLnRzeD9lZTI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJlY29pbFN0YXRlLCB1c2VTZXRSZWNvaWxTdGF0ZSB9IGZyb20gXCJyZWNvaWxcIjtcbmltcG9ydCB7IGxhbmd1YWdlU3RhdGUgfSBmcm9tIFwiLi9hdG9tcy9sYW5ndWFnZUF0b21cIjtcbmltcG9ydCAqIGFzIFNlbGVjdCBmcm9tIFwiQHJhZGl4LXVpL3JlYWN0LXNlbGVjdFwiO1xuaW1wb3J0IHsgQ2hldnJvbkRvd24sIENoZXZyb25VcCB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCB7IENhcmQsIENhcmRDb250ZW50IH0gZnJvbSBcIi4vdWkvY2FyZFwiO1xuaW1wb3J0IHsgZ2V0TmFtZSB9IGZyb20gXCJAY29zcGlyZWQvaTE4bi1pc28tbGFuZ3VhZ2VzXCI7XG5cbmNvbnN0IExhbmd1YWdlU2VsZWN0b3IgPSAoKSA9PiB7XG4gIGNvbnN0IFtsYW5ndWFnZXMsIHNldExhbmd1YWdlc10gPSB1c2VSZWNvaWxTdGF0ZShsYW5ndWFnZVN0YXRlKTtcblxuICBjb25zdCBzb3VyY2VMYW5nID0gZ2V0TmFtZShTdHJpbmcobGFuZ3VhZ2VzLnNvdXJjZUxhbmd1YWdlKSwgXCJlblwiKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvd1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93XCI+XG4gICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cImdsYXNzIHAtMiBcIj5PcmlnaW5hbCBMYW5ndWFnZTwvQ2FyZD5cbiAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwiZ2xhc3MgcHktMiBweC02XCI+e3NvdXJjZUxhbmcgfHwgXCJBdXRvIERldGVjdGVkXCJ9PC9DYXJkPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3dcIj5cbiAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwiZ2xhc3Mgcm91bmRlZC1zbSBwLTJcIj5UYXJnZXQgTGFuZ3VhZ2U8L0NhcmQ+XG4gICAgICAgIDxTZWxlY3QuUm9vdFxuICAgICAgICAgIG9uVmFsdWVDaGFuZ2U9eyh2YWx1ZSkgPT5cbiAgICAgICAgICAgIHNldExhbmd1YWdlcyh7IC4uLmxhbmd1YWdlcywgdGFyZ2V0TGFuZ3VhZ2U6IHZhbHVlIH0pXG4gICAgICAgICAgfVxuICAgICAgICAgIHZhbHVlPXtsYW5ndWFnZXMudGFyZ2V0TGFuZ3VhZ2V9XG4gICAgICAgID5cbiAgICAgICAgICA8U2VsZWN0LlRyaWdnZXIgY2xhc3NOYW1lPVwiZ2xhc3MgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtWzEzcHhdIHJvdW5kZWQtWzRweF0gcHktNSBweC1bMTVweF0gZ2FwLVs1cHhdIGgtWzM1cHhdXCI+XG4gICAgICAgICAgICA8U2VsZWN0LlZhbHVlIHBsYWNlaG9sZGVyPVwiU2VsZWN0IGEgbGFuZ3VhZ2VcIiAvPlxuICAgICAgICAgICAgPFNlbGVjdC5JY29uIGNsYXNzTmFtZT1cInRleHQtaW5oZXJpdFwiPlxuICAgICAgICAgICAgICA8Q2hldnJvbkRvd24gY2xhc3NOYW1lPVwiXCIgLz5cbiAgICAgICAgICAgIDwvU2VsZWN0Lkljb24+XG4gICAgICAgICAgPC9TZWxlY3QuVHJpZ2dlcj5cbiAgICAgICAgICA8U2VsZWN0LlBvcnRhbD5cbiAgICAgICAgICAgIDxTZWxlY3QuQ29udGVudCBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1tZFwiPlxuICAgICAgICAgICAgICA8U2VsZWN0LlNjcm9sbFVwQnV0dG9uIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGgtWzI1cHhdIGJnLWluaGVyaXQgdGV4dC1pbmhlcml0IGN1cnNvci1kZWZhdWx0XCI+XG4gICAgICAgICAgICAgICAgPENoZXZyb25VcCAvPlxuICAgICAgICAgICAgICA8L1NlbGVjdC5TY3JvbGxVcEJ1dHRvbj5cbiAgICAgICAgICAgICAgPFNlbGVjdC5WaWV3cG9ydCBjbGFzc05hbWU9XCJwLVs0cHhdXCI+XG4gICAgICAgICAgICAgICAgPFNlbGVjdC5Hcm91cD5cbiAgICAgICAgICAgICAgICAgIDxTZWxlY3QuSXRlbVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cImZyXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgcmVsYXRpdmUgaC1bMjVweF0gcm91bmRlZC1bM3B4XSB0ZXh0LVsxM3B4XVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3QuSXRlbVRleHQ+RnJlbmNoPC9TZWxlY3QuSXRlbVRleHQ+XG4gICAgICAgICAgICAgICAgICA8L1NlbGVjdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgPFNlbGVjdC5JdGVtXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiZXNcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciByZWxhdGl2ZSBoLVsyNXB4XSByb3VuZGVkLVszcHhdIHRleHQtWzEzcHhdXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdC5JdGVtVGV4dD5TcGFuaXNoPC9TZWxlY3QuSXRlbVRleHQ+XG4gICAgICAgICAgICAgICAgICA8L1NlbGVjdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgPFNlbGVjdC5JdGVtXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiZGVcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciByZWxhdGl2ZSBoLVsyNXB4XSByb3VuZGVkLVszcHhdIHRleHQtWzEzcHhdXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdC5JdGVtVGV4dD5HZXJtYW48L1NlbGVjdC5JdGVtVGV4dD5cbiAgICAgICAgICAgICAgICAgIDwvU2VsZWN0Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICA8U2VsZWN0Lkl0ZW1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJwdFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHJlbGF0aXZlIGgtWzI1cHhdIHJvdW5kZWQtWzNweF0gdGV4dC1bMTNweF1cIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0Lkl0ZW1UZXh0PlBvcnR1Z3Vlc2U8L1NlbGVjdC5JdGVtVGV4dD5cbiAgICAgICAgICAgICAgICAgIDwvU2VsZWN0Lkl0ZW0+XG4gICAgICAgICAgICAgICAgPC9TZWxlY3QuR3JvdXA+XG4gICAgICAgICAgICAgIDwvU2VsZWN0LlZpZXdwb3J0PlxuICAgICAgICAgICAgICA8U2VsZWN0LlNjcm9sbERvd25CdXR0b24gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC1bMjVweF0gY3Vyc29yLWRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgICA8Q2hldnJvbkRvd24gLz5cbiAgICAgICAgICAgICAgPC9TZWxlY3QuU2Nyb2xsRG93bkJ1dHRvbj5cbiAgICAgICAgICAgIDwvU2VsZWN0LkNvbnRlbnQ+XG4gICAgICAgICAgPC9TZWxlY3QuUG9ydGFsPlxuICAgICAgICA8L1NlbGVjdC5Sb290PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYW5ndWFnZVNlbGVjdG9yO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVjb2lsU3RhdGUiLCJsYW5ndWFnZVN0YXRlIiwiU2VsZWN0IiwiQ2hldnJvbkRvd24iLCJDaGV2cm9uVXAiLCJDYXJkIiwiZ2V0TmFtZSIsIkxhbmd1YWdlU2VsZWN0b3IiLCJsYW5ndWFnZXMiLCJzZXRMYW5ndWFnZXMiLCJzb3VyY2VMYW5nIiwiU3RyaW5nIiwic291cmNlTGFuZ3VhZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJSb290Iiwib25WYWx1ZUNoYW5nZSIsInZhbHVlIiwidGFyZ2V0TGFuZ3VhZ2UiLCJUcmlnZ2VyIiwiVmFsdWUiLCJwbGFjZWhvbGRlciIsIkljb24iLCJQb3J0YWwiLCJDb250ZW50IiwiU2Nyb2xsVXBCdXR0b24iLCJWaWV3cG9ydCIsIkdyb3VwIiwiSXRlbSIsIkl0ZW1UZXh0IiwiU2Nyb2xsRG93bkJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/LanguageSelector.tsx\n"));

/***/ })

});