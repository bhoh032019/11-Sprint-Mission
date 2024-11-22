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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AllArticlesSection)\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_AllArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../style/AllArticlesSection.module.css */ \"./src/style/AllArticlesSection.module.css\");\n/* harmony import */ var _style_AllArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_AllArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api_boardApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/boardApi */ \"./src/api/boardApi.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _images_ic_heart_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../images/ic_heart.svg */ \"./src/images/ic_heart.svg\");\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction AllArticlesSection() {\n    var _this = this;\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), articles = _useState[0], setArticles = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('recent'), 2), orderBy = _useState1[0], setOrderBy = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), 2), page = _useState2[0], setPage = _useState2[1];\n    var formatDate = function(isoDate) {\n        var date = new Date(isoDate);\n        return date.toLocaleDateString('ko-KR', {\n            year: 'numeric',\n            month: '2-digit',\n            day: '2-digit'\n        }).replace(/\\. /g, '. ').slice(0, -1); // 공백 제거\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"AllArticlesSection.useEffect\": function() {\n            {\n                var fetchAllArticles = {\n                    \"AllArticlesSection.useEffect.fetchAllArticles\": /*#__PURE__*/ (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_8__._)(function() {\n                        var data, error;\n                        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_9__._)(this, function(_state) {\n                            switch(_state.label){\n                                case 0:\n                                    _state.trys.push([\n                                        0,\n                                        2,\n                                        ,\n                                        3\n                                    ]);\n                                    return [\n                                        4,\n                                        (0,_api_boardApi__WEBPACK_IMPORTED_MODULE_3__.getAllArticles)(page, orderBy)\n                                    ];\n                                case 1:\n                                    data = _state.sent();\n                                    setArticles(data.list);\n                                    return [\n                                        3,\n                                        3\n                                    ];\n                                case 2:\n                                    error = _state.sent();\n                                    console.error('데이터를 불러오는데 실패 했습니다.', error);\n                                    return [\n                                        3,\n                                        3\n                                    ];\n                                case 3:\n                                    return [\n                                        2\n                                    ];\n                            }\n                        });\n                    })\n                }[\"AllArticlesSection.useEffect.fetchAllArticles\"];\n                fetchAllArticles();\n            }\n        }\n    }[\"AllArticlesSection.useEffect\"], [\n        orderBy\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_style_AllArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"all-section-header\"]),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_style_AllArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"all-title\"]),\n                        children: \"게시글\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\AllArticlesSection.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        className: (_style_AllArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_2___default().addArticlelink),\n                        href: \"/addArticle\",\n                        children: \"글쓰기\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\AllArticlesSection.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\AllArticlesSection.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            articles ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_style_AllArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"allarticle-list\"]),\n                children: articles.map(function(article) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_style_AllArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"allarticle-item\"]),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_style_AllArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"allarticle-body\"]),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: (_style_AllArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"allarticle-title\"]),\n                                        children: article.title\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\AllArticlesSection.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                        width: 46,\n                                        height: 46,\n                                        src: article.image || '/images/Img_home_02.png',\n                                        alt: \"게시글 이미지\",\n                                        className: (_style_AllArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"allarticle-image\"])\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\AllArticlesSection.tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 17\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\AllArticlesSection.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_style_AllArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"allarticle-footer\"]),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_style_AllArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"allarticle-info\"]),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: (_style_AllArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"allarticle-writer\"]),\n                                                children: article.writer.nickname\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\AllArticlesSection.tsx\",\n                                                lineNumber: 80,\n                                                columnNumber: 19\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: (_style_AllArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"allarticle-updatedAt\"]),\n                                                children: formatDate(article.updatedAt)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\AllArticlesSection.tsx\",\n                                                lineNumber: 83,\n                                                columnNumber: 19\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\AllArticlesSection.tsx\",\n                                        lineNumber: 79,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_style_AllArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"allarticle-likes\"]),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_images_ic_heart_svg__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                                className: (_style_AllArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"heart-icon\"])\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\AllArticlesSection.tsx\",\n                                                lineNumber: 88,\n                                                columnNumber: 19\n                                            }, _this),\n                                            article.likeCount\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\AllArticlesSection.tsx\",\n                                        lineNumber: 87,\n                                        columnNumber: 17\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\AllArticlesSection.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, article.id, true, {\n                        fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\AllArticlesSection.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 13\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\AllArticlesSection.tsx\",\n                lineNumber: 65,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"데이터를 불러오는 중...\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\AllArticlesSection.tsx\",\n                lineNumber: 96,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\AllArticlesSection.tsx\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, this);\n}\n_s(AllArticlesSection, \"U1DqltPo9eOQgWjB8JOeA1rJhjg=\");\n_c = AllArticlesSection;\nvar _c;\n$RefreshReg$(_c, \"AllArticlesSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ib2FyZHMvQWxsQXJ0aWNsZXNTZWN0aW9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFDbUI7QUFDWDtBQUN2QjtBQUNFO0FBQ2U7QUFrQi9CLFNBQVNPOzs7SUFDdEIsSUFBZ0NOLFlBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBdUIsV0FBeERPLFdBQXlCUCxjQUFmUSxjQUFlUjtJQUNoQyxJQUE4QkEsYUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFpQixlQUFoRFMsVUFBdUJULGVBQWRVLGFBQWNWO0lBQzlCLElBQXdCQSxhQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsUUFBMUJXLE9BQWlCWCxlQUFYWSxVQUFXWjtJQUV4QixJQUFNYSxhQUFhLFNBQUNDO1FBQ2xCLElBQU1DLE9BQU8sSUFBSUMsS0FBS0Y7UUFDdEIsT0FBT0MsS0FDSkUsa0JBQWtCLENBQUMsU0FBUztZQUMzQkMsTUFBTTtZQUNOQyxPQUFPO1lBQ1BDLEtBQUs7UUFDUCxHQUNDQyxPQUFPLENBQUMsUUFBUSxNQUNoQkMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLFFBQVE7SUFDM0I7SUFFQXZCLGdEQUFTQTt3Q0FBQztZQUNSO2dCQUNFLElBQU13QjtzSkFBbUI7NEJBRWZDLE1BRUNDOzs7Ozs7Ozs7O29DQUZNOzt3Q0FBTXZCLDZEQUFjQSxDQUFDUyxNQUFNRjs7O29DQUFsQ2UsT0FBTztvQ0FDYmhCLFlBQVlnQixLQUFLRSxJQUFJOzs7Ozs7b0NBQ2REO29DQUNQRSxRQUFRRixLQUFLLENBQUMsdUJBQXVCQTs7Ozs7Ozs7Ozs7b0JBRXpDOztnQkFFQUY7WUFDRjtRQUNGO3VDQUFHO1FBQUNkO0tBQVE7SUFFWixxQkFDRSw4REFBQ21COzswQkFDQyw4REFBQ0E7Z0JBQUlDLFdBQVc1QixtR0FBNEI7O2tDQUMxQyw4REFBQzJCO3dCQUFJQyxXQUFXNUIsMEZBQW1CO2tDQUFFOzs7Ozs7a0NBQ3JDLDhEQUFDRSxrREFBSUE7d0JBQUMwQixXQUFXNUIsNEZBQXdCO3dCQUFFNkIsTUFBSztrQ0FBYzs7Ozs7Ozs7Ozs7O1lBSS9EdkIseUJBQ0MsOERBQUNxQjtnQkFBSUMsV0FBVzVCLGdHQUF5QjswQkFDdENNLFNBQVN3QixHQUFHLENBQUMsU0FBQ0M7eUNBQ2IsOERBQUNKO3dCQUFxQkMsV0FBVzVCLGdHQUF5Qjs7MENBQ3hELDhEQUFDMkI7Z0NBQUlDLFdBQVc1QixnR0FBeUI7O2tEQUN2Qyw4REFBQ2dDO3dDQUFHSixXQUFXNUIsaUdBQTBCO2tEQUFHK0IsUUFBUUUsS0FBSzs7Ozs7O2tEQUN6RCw4REFBQzlCLG1EQUFLQTt3Q0FDSitCLE9BQU87d0NBQ1BDLFFBQVE7d0NBQ1JDLEtBQUtMLFFBQVFNLEtBQUssSUFBSTt3Q0FDdEJDLEtBQUk7d0NBQ0pWLFdBQVc1QixpR0FBMEI7Ozs7Ozs7Ozs7OzswQ0FHekMsOERBQUMyQjtnQ0FBSUMsV0FBVzVCLGtHQUEyQjs7a0RBQ3pDLDhEQUFDMkI7d0NBQUlDLFdBQVc1QixnR0FBeUI7OzBEQUN2Qyw4REFBQ3VDO2dEQUFLWCxXQUFXNUIsa0dBQTJCOzBEQUN6QytCLFFBQVFTLE1BQU0sQ0FBQ0MsUUFBUTs7Ozs7OzBEQUUxQiw4REFBQ0Y7Z0RBQUtYLFdBQVc1QixxR0FBOEI7MERBQzVDWSxXQUFXbUIsUUFBUVcsU0FBUzs7Ozs7Ozs7Ozs7O2tEQUdqQyw4REFBQ0g7d0NBQUtYLFdBQVc1QixpR0FBMEI7OzBEQUN6Qyw4REFBQ0ksNERBQUtBO2dEQUFDd0IsV0FBVzVCLDJGQUFvQjs7Ozs7OzRDQUNyQytCLFFBQVFZLFNBQVM7Ozs7Ozs7Ozs7Ozs7O3VCQXRCZFosUUFBUWEsRUFBRTs7Ozs7Ozs7OztxQ0E2QnhCLDhEQUFDakI7MEJBQUk7Ozs7Ozs7Ozs7OztBQUliO0dBNUV3QnRCO0tBQUFBIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGJob2hcXERlc2t0b3BcXEZFX1NwcmludF9NaXNzaW9uXFwxMS1TcHJpbnQtTWlzc2lvblxcc3JjXFxjb21wb25lbnRzXFxib2FyZHNcXEFsbEFydGljbGVzU2VjdGlvbi50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZS9BbGxBcnRpY2xlc1NlY3Rpb24ubW9kdWxlLmNzcyc7XHJcbmltcG9ydCB7IGdldEFsbEFydGljbGVzIH0gZnJvbSAnLi4vLi4vYXBpL2JvYXJkQXBpJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgSGVhcnQgZnJvbSAnLi4vLi4vaW1hZ2VzL2ljX2hlYXJ0LnN2Zyc7XHJcblxyXG5pbnRlcmZhY2UgQXJ0aWNsZUxpc3Qge1xyXG4gIGlkOiBudW1iZXI7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBjb250ZW50OiBzdHJpbmc7XHJcbiAgaW1hZ2U6IHN0cmluZztcclxuICBsaWtlQ291bnQ6IG51bWJlcjtcclxuICBjcmVhdGVkQXQ6IHN0cmluZztcclxuICB1cGRhdGVkQXQ6IHN0cmluZztcclxuICB3cml0ZXI6IHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICBuaWNrbmFtZTogc3RyaW5nO1xyXG4gIH07XHJcbn1cclxuXHJcbnR5cGUgUHJvZHVjdE9yZGVyQnkgPSAncmVjZW50JyB8ICdsaWtlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFsbEFydGljbGVzU2VjdGlvbigpIHtcclxuICBjb25zdCBbYXJ0aWNsZXMsIHNldEFydGljbGVzXSA9IHVzZVN0YXRlPEFydGljbGVMaXN0W10gfCBudWxsPihudWxsKTtcclxuICBjb25zdCBbb3JkZXJCeSwgc2V0T3JkZXJCeV0gPSB1c2VTdGF0ZTxQcm9kdWN0T3JkZXJCeT4oJ3JlY2VudCcpO1xyXG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKDEpO1xyXG5cclxuICBjb25zdCBmb3JtYXREYXRlID0gKGlzb0RhdGU6IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGlzb0RhdGUpO1xyXG4gICAgcmV0dXJuIGRhdGVcclxuICAgICAgLnRvTG9jYWxlRGF0ZVN0cmluZygna28tS1InLCB7XHJcbiAgICAgICAgeWVhcjogJ251bWVyaWMnLFxyXG4gICAgICAgIG1vbnRoOiAnMi1kaWdpdCcsXHJcbiAgICAgICAgZGF5OiAnMi1kaWdpdCcsXHJcbiAgICAgIH0pXHJcbiAgICAgIC5yZXBsYWNlKC9cXC4gL2csICcuICcpXHJcbiAgICAgIC5zbGljZSgwLCAtMSk7IC8vIOqzteuwsSDsoJzqsbBcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAge1xyXG4gICAgICBjb25zdCBmZXRjaEFsbEFydGljbGVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0QWxsQXJ0aWNsZXMocGFnZSwgb3JkZXJCeSk7XHJcbiAgICAgICAgICBzZXRBcnRpY2xlcyhkYXRhLmxpc3QpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCfrjbDsnbTthLDrpbwg67aI65+s7Jik64qU642wIOyLpO2MqCDtlojsirXri4jri6QuJywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuXHJcbiAgICAgIGZldGNoQWxsQXJ0aWNsZXMoKTtcclxuICAgIH1cclxuICB9LCBbb3JkZXJCeV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snYWxsLXNlY3Rpb24taGVhZGVyJ119PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2FsbC10aXRsZSddfT7qsozsi5zquIA8L2Rpdj5cclxuICAgICAgICA8TGluayBjbGFzc05hbWU9e3N0eWxlc1snYWRkQXJ0aWNsZWxpbmsnXX0gaHJlZj1cIi9hZGRBcnRpY2xlXCI+XHJcbiAgICAgICAgICDquIDsk7DquLBcclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7YXJ0aWNsZXMgPyAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snYWxsYXJ0aWNsZS1saXN0J119PlxyXG4gICAgICAgICAge2FydGljbGVzLm1hcCgoYXJ0aWNsZSkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17YXJ0aWNsZS5pZH0gY2xhc3NOYW1lPXtzdHlsZXNbJ2FsbGFydGljbGUtaXRlbSddfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydhbGxhcnRpY2xlLWJvZHknXX0+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXNbJ2FsbGFydGljbGUtdGl0bGUnXX0+e2FydGljbGUudGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD17NDZ9XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD17NDZ9XHJcbiAgICAgICAgICAgICAgICAgIHNyYz17YXJ0aWNsZS5pbWFnZSB8fCAnL2ltYWdlcy9JbWdfaG9tZV8wMi5wbmcnfVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCLqsozsi5zquIAg7J2066+47KeAXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbJ2FsbGFydGljbGUtaW1hZ2UnXX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snYWxsYXJ0aWNsZS1mb290ZXInXX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydhbGxhcnRpY2xlLWluZm8nXX0+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzWydhbGxhcnRpY2xlLXdyaXRlciddfT5cclxuICAgICAgICAgICAgICAgICAgICB7YXJ0aWNsZS53cml0ZXIubmlja25hbWV9XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXNbJ2FsbGFydGljbGUtdXBkYXRlZEF0J119PlxyXG4gICAgICAgICAgICAgICAgICAgIHtmb3JtYXREYXRlKGFydGljbGUudXBkYXRlZEF0KX1cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlc1snYWxsYXJ0aWNsZS1saWtlcyddfT5cclxuICAgICAgICAgICAgICAgICAgPEhlYXJ0IGNsYXNzTmFtZT17c3R5bGVzWydoZWFydC1pY29uJ119IC8+XHJcbiAgICAgICAgICAgICAgICAgIHthcnRpY2xlLmxpa2VDb3VudH1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8ZGl2PuuNsOydtO2EsOulvCDrtojrn6zsmKTripQg7KSRLi4uPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsImdldEFsbEFydGljbGVzIiwiTGluayIsIkltYWdlIiwiSGVhcnQiLCJBbGxBcnRpY2xlc1NlY3Rpb24iLCJhcnRpY2xlcyIsInNldEFydGljbGVzIiwib3JkZXJCeSIsInNldE9yZGVyQnkiLCJwYWdlIiwic2V0UGFnZSIsImZvcm1hdERhdGUiLCJpc29EYXRlIiwiZGF0ZSIsIkRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJyZXBsYWNlIiwic2xpY2UiLCJmZXRjaEFsbEFydGljbGVzIiwiZGF0YSIsImVycm9yIiwibGlzdCIsImNvbnNvbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJocmVmIiwibWFwIiwiYXJ0aWNsZSIsImgyIiwidGl0bGUiLCJ3aWR0aCIsImhlaWdodCIsInNyYyIsImltYWdlIiwiYWx0Iiwic3BhbiIsIndyaXRlciIsIm5pY2tuYW1lIiwidXBkYXRlZEF0IiwibGlrZUNvdW50IiwiaWQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/boards/AllArticlesSection.tsx\n"));

/***/ })

});