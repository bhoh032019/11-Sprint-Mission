"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/boards",{

/***/ "./src/components/boards/AllArticlesSection.tsx":
/*!******************************************************!*\
  !*** ./src/components/boards/AllArticlesSection.tsx ***!
  \******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AllArticlesSection)\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_AllArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../style/AllArticlesSection.module.css */ \"./src/style/AllArticlesSection.module.css\");\n/* harmony import */ var _style_AllArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_AllArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api_boardApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/boardApi */ \"./src/api/boardApi.js\");\n/* harmony import */ var _hooks_useDimensions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useDimensions */ \"./src/hooks/useDimensions.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction AllArticlesSection() {\n    var _this = this;\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), articles = _useState[0], setArticles = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('recent'), 2), orderBy = _useState1[0], setOrderBy = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), 2), page = _useState2[0], setPage = _useState2[1];\n    var viewWidth = (0,_hooks_useDimensions__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"AllArticlesSection.useEffect\": function() {\n            {\n                var fetchAllArticles = {\n                    \"AllArticlesSection.useEffect.fetchAllArticles\": /*#__PURE__*/ (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_7__._)(function() {\n                        var data, error;\n                        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_8__._)(this, function(_state) {\n                            switch(_state.label){\n                                case 0:\n                                    _state.trys.push([\n                                        0,\n                                        2,\n                                        ,\n                                        3\n                                    ]);\n                                    return [\n                                        4,\n                                        (0,_api_boardApi__WEBPACK_IMPORTED_MODULE_3__.getAllArticles)(page, orderBy)\n                                    ];\n                                case 1:\n                                    data = _state.sent();\n                                    setArticles(data.list);\n                                    return [\n                                        3,\n                                        3\n                                    ];\n                                case 2:\n                                    error = _state.sent();\n                                    console.error('데이터를 불러오는데 실패 했습니다.', error);\n                                    return [\n                                        3,\n                                        3\n                                    ];\n                                case 3:\n                                    return [\n                                        2\n                                    ];\n                            }\n                        });\n                    })\n                }[\"AllArticlesSection.useEffect.fetchAllArticles\"];\n                fetchAllArticles();\n            }\n        }\n    }[\"AllArticlesSection.useEffect\"], [\n        orderBy\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_style_AllArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"all-section-header\"]),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_style_AllArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"all-title\"]),\n                        children: \"게시글\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\AllArticlesSection.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        className: (_style_AllArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_2___default().addArticlelink),\n                        href: \"/addArticle\",\n                        children: \"글쓰기\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\AllArticlesSection.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\AllArticlesSection.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            articles ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_style_AllArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"article-list\"]),\n                children: articles.map(function(article) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_style_AllArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"article-item\"]),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_style_AllArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"article-header\"]),\n                                children: \"Best\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\AllArticlesSection.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_style_AllArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"article-body\"]),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: (_style_AllArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"article-title\"]),\n                                        children: article.title\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\AllArticlesSection.tsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Image, {\n                                        width: 48,\n                                        height: 48,\n                                        src: \"\".concat(article.image),\n                                        alt: \"게시글 이미지\",\n                                        className: (_style_AllArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"article-image\"])\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\AllArticlesSection.tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 17\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\AllArticlesSection.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_style_AllArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"article-footer\"]),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_style_AllArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"article-info\"]),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: (_style_AllArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"article-writer\"]),\n                                                children: article.writer.nickname\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\AllArticlesSection.tsx\",\n                                                lineNumber: 70,\n                                                columnNumber: 19\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: (_style_AllArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"article-likes\"]),\n                                                children: article.likeCount\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\AllArticlesSection.tsx\",\n                                                lineNumber: 73,\n                                                columnNumber: 19\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\AllArticlesSection.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_style_AllArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"article-updatedAt\"]),\n                                        children: article.updatedAt\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\AllArticlesSection.tsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 17\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\AllArticlesSection.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, article.id, true, {\n                        fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\AllArticlesSection.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 13\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\AllArticlesSection.tsx\",\n                lineNumber: 54,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"데이터를 불러오는 중...\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\AllArticlesSection.tsx\",\n                lineNumber: 85,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\AllArticlesSection.tsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n_s(AllArticlesSection, \"qTgK4b6uY9pxzmZYFF1audGn/i4=\", false, function() {\n    return [\n        _hooks_useDimensions__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = AllArticlesSection;\nvar _c;\n$RefreshReg$(_c, \"AllArticlesSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ib2FyZHMvQWxsQXJ0aWNsZXNTZWN0aW9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ21CO0FBQ1g7QUFDRTtBQUN6QjtBQWtCZCxTQUFTTTs7O0lBQ3RCLElBQWdDTCxZQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQXVCLFdBQXhETSxXQUF5Qk4sY0FBZk8sY0FBZVA7SUFDaEMsSUFBOEJBLGFBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBaUIsZUFBaERRLFVBQXVCUixlQUFkUyxhQUFjVDtJQUM5QixJQUF3QkEsYUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFDLFFBQTFCVSxPQUFpQlYsZUFBWFcsVUFBV1g7SUFFeEIsSUFBTVksWUFBWVQsZ0VBQWFBO0lBRS9CSixnREFBU0E7d0NBQUM7WUFDUjtnQkFDRSxJQUFNYztzSkFBbUI7NEJBRWZDLE1BRUNDOzs7Ozs7Ozs7O29DQUZNOzt3Q0FBTWIsNkRBQWNBLENBQUNRLE1BQU1GOzs7b0NBQWxDTSxPQUFPO29DQUNiUCxZQUFZTyxLQUFLRSxJQUFJOzs7Ozs7b0NBQ2REO29DQUNQRSxRQUFRRixLQUFLLENBQUMsdUJBQXVCQTs7Ozs7Ozs7Ozs7b0JBRXpDOztnQkFFQUY7WUFDRjtRQUNGO3VDQUFHO1FBQUNMO0tBQVE7SUFFWixxQkFDRSw4REFBQ1U7OzBCQUNDLDhEQUFDQTtnQkFBSUMsV0FBV2xCLG1HQUE0Qjs7a0NBQzFDLDhEQUFDaUI7d0JBQUlDLFdBQVdsQiwwRkFBbUI7a0NBQUU7Ozs7OztrQ0FDckMsOERBQUNHLGtEQUFJQTt3QkFBQ2UsV0FBV2xCLDRGQUF3Qjt3QkFBRW1CLE1BQUs7a0NBQWM7Ozs7Ozs7Ozs7OztZQUkvRGQseUJBQ0MsOERBQUNZO2dCQUFJQyxXQUFXbEIsNkZBQXNCOzBCQUNuQ0ssU0FBU2UsR0FBRyxDQUFDLFNBQUNDO3lDQUNiLDhEQUFDSjt3QkFBcUJDLFdBQVdsQiw2RkFBc0I7OzBDQUNyRCw4REFBQ2lCO2dDQUFJQyxXQUFXbEIsK0ZBQXdCOzBDQUFFOzs7Ozs7MENBQzFDLDhEQUFDaUI7Z0NBQUlDLFdBQVdsQiw2RkFBc0I7O2tEQUNwQyw4REFBQ3NCO3dDQUFHSixXQUFXbEIsOEZBQXVCO2tEQUFHcUIsUUFBUUUsS0FBSzs7Ozs7O2tEQUN0RCw4REFBQ0M7d0NBQ0NDLE9BQU87d0NBQ1BDLFFBQVE7d0NBQ1JDLEtBQUssR0FBaUIsT0FBZE4sUUFBUU8sS0FBSzt3Q0FDckJDLEtBQUk7d0NBQ0pYLFdBQVdsQiw4RkFBdUI7Ozs7Ozs7Ozs7OzswQ0FHdEMsOERBQUNpQjtnQ0FBSUMsV0FBV2xCLCtGQUF3Qjs7a0RBQ3RDLDhEQUFDaUI7d0NBQUlDLFdBQVdsQiw2RkFBc0I7OzBEQUNwQyw4REFBQzhCO2dEQUFLWixXQUFXbEIsK0ZBQXdCOzBEQUN0Q3FCLFFBQVFVLE1BQU0sQ0FBQ0MsUUFBUTs7Ozs7OzBEQUUxQiw4REFBQ0Y7Z0RBQUtaLFdBQVdsQiw4RkFBdUI7MERBQ3JDcUIsUUFBUVksU0FBUzs7Ozs7Ozs7Ozs7O2tEQUd0Qiw4REFBQ0g7d0NBQUtaLFdBQVdsQixrR0FBMkI7a0RBQ3pDcUIsUUFBUWEsU0FBUzs7Ozs7Ozs7Ozs7Ozt1QkF0QmRiLFFBQVFjLEVBQUU7Ozs7Ozs7Ozs7cUNBNkJ4Qiw4REFBQ2xCOzBCQUFJOzs7Ozs7Ozs7Ozs7QUFJYjtHQWxFd0JiOztRQUtKRiw0REFBYUE7OztLQUxURSIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxiaG9oXFxEZXNrdG9wXFxGRV9TcHJpbnRfTWlzc2lvblxcMTEtU3ByaW50LU1pc3Npb25cXHNyY1xcY29tcG9uZW50c1xcYm9hcmRzXFxBbGxBcnRpY2xlc1NlY3Rpb24udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGUvQWxsQXJ0aWNsZXNTZWN0aW9uLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgeyBnZXRBbGxBcnRpY2xlcyB9IGZyb20gJy4uLy4uL2FwaS9ib2FyZEFwaSc7XHJcbmltcG9ydCB1c2VEaW1lbnNpb25zIGZyb20gJy4uLy4uL2hvb2tzL3VzZURpbWVuc2lvbnMnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuaW50ZXJmYWNlIEFydGljbGVMaXN0IHtcclxuICBpZDogbnVtYmVyO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgY29udGVudDogc3RyaW5nO1xyXG4gIGltYWdlOiBzdHJpbmc7XHJcbiAgbGlrZUNvdW50OiBudW1iZXI7XHJcbiAgY3JlYXRlZEF0OiBzdHJpbmc7XHJcbiAgdXBkYXRlZEF0OiBzdHJpbmc7XHJcbiAgd3JpdGVyOiB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgbmlja25hbWU6IHN0cmluZztcclxuICB9O1xyXG59XHJcblxyXG50eXBlIFByb2R1Y3RPcmRlckJ5ID0gJ3JlY2VudCcgfCAnbGlrZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBbGxBcnRpY2xlc1NlY3Rpb24oKSB7XHJcbiAgY29uc3QgW2FydGljbGVzLCBzZXRBcnRpY2xlc10gPSB1c2VTdGF0ZTxBcnRpY2xlTGlzdFtdIHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgW29yZGVyQnksIHNldE9yZGVyQnldID0gdXNlU3RhdGU8UHJvZHVjdE9yZGVyQnk+KCdyZWNlbnQnKTtcclxuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZSgxKTtcclxuXHJcbiAgY29uc3Qgdmlld1dpZHRoID0gdXNlRGltZW5zaW9ucygpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAge1xyXG4gICAgICBjb25zdCBmZXRjaEFsbEFydGljbGVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0QWxsQXJ0aWNsZXMocGFnZSwgb3JkZXJCeSk7XHJcbiAgICAgICAgICBzZXRBcnRpY2xlcyhkYXRhLmxpc3QpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCfrjbDsnbTthLDrpbwg67aI65+s7Jik64qU642wIOyLpO2MqCDtlojsirXri4jri6QuJywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuXHJcbiAgICAgIGZldGNoQWxsQXJ0aWNsZXMoKTtcclxuICAgIH1cclxuICB9LCBbb3JkZXJCeV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snYWxsLXNlY3Rpb24taGVhZGVyJ119PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2FsbC10aXRsZSddfT7qsozsi5zquIA8L2Rpdj5cclxuICAgICAgICA8TGluayBjbGFzc05hbWU9e3N0eWxlc1snYWRkQXJ0aWNsZWxpbmsnXX0gaHJlZj1cIi9hZGRBcnRpY2xlXCI+XHJcbiAgICAgICAgICDquIDsk7DquLBcclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7YXJ0aWNsZXMgPyAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snYXJ0aWNsZS1saXN0J119PlxyXG4gICAgICAgICAge2FydGljbGVzLm1hcCgoYXJ0aWNsZSkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17YXJ0aWNsZS5pZH0gY2xhc3NOYW1lPXtzdHlsZXNbJ2FydGljbGUtaXRlbSddfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydhcnRpY2xlLWhlYWRlciddfT5CZXN0PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snYXJ0aWNsZS1ib2R5J119PlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzWydhcnRpY2xlLXRpdGxlJ119PnthcnRpY2xlLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezQ4fVxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezQ4fVxyXG4gICAgICAgICAgICAgICAgICBzcmM9e2Ake2FydGljbGUuaW1hZ2V9YH1cclxuICAgICAgICAgICAgICAgICAgYWx0PVwi6rKM7Iuc6riAIOydtOuvuOyngFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzWydhcnRpY2xlLWltYWdlJ119XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2FydGljbGUtZm9vdGVyJ119PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snYXJ0aWNsZS1pbmZvJ119PlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlc1snYXJ0aWNsZS13cml0ZXInXX0+XHJcbiAgICAgICAgICAgICAgICAgICAge2FydGljbGUud3JpdGVyLm5pY2tuYW1lfVxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzWydhcnRpY2xlLWxpa2VzJ119PlxyXG4gICAgICAgICAgICAgICAgICAgIHthcnRpY2xlLmxpa2VDb3VudH1cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlc1snYXJ0aWNsZS11cGRhdGVkQXQnXX0+XHJcbiAgICAgICAgICAgICAgICAgIHthcnRpY2xlLnVwZGF0ZWRBdH1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8ZGl2PuuNsOydtO2EsOulvCDrtojrn6zsmKTripQg7KSRLi4uPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsImdldEFsbEFydGljbGVzIiwidXNlRGltZW5zaW9ucyIsIkxpbmsiLCJBbGxBcnRpY2xlc1NlY3Rpb24iLCJhcnRpY2xlcyIsInNldEFydGljbGVzIiwib3JkZXJCeSIsInNldE9yZGVyQnkiLCJwYWdlIiwic2V0UGFnZSIsInZpZXdXaWR0aCIsImZldGNoQWxsQXJ0aWNsZXMiLCJkYXRhIiwiZXJyb3IiLCJsaXN0IiwiY29uc29sZSIsImRpdiIsImNsYXNzTmFtZSIsImhyZWYiLCJtYXAiLCJhcnRpY2xlIiwiaDIiLCJ0aXRsZSIsIkltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJzcmMiLCJpbWFnZSIsImFsdCIsInNwYW4iLCJ3cml0ZXIiLCJuaWNrbmFtZSIsImxpa2VDb3VudCIsInVwZGF0ZWRBdCIsImlkIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/boards/AllArticlesSection.tsx\n"));

/***/ })

});