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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AllArticlesSection)\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_AllArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../style/AllArticlesSection.module.css */ \"./src/style/AllArticlesSection.module.css\");\n/* harmony import */ var _style_AllArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_AllArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api_boardApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/boardApi */ \"./src/api/boardApi.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction AllArticlesSection() {\n    var _this = this;\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), articles = _useState[0], setArticles = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('recent'), 2), orderBy = _useState1[0], setOrderBy = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), 2), page = _useState2[0], setPage = _useState2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"AllArticlesSection.useEffect\": function() {\n            {\n                var fetchAllArticles = {\n                    \"AllArticlesSection.useEffect.fetchAllArticles\": /*#__PURE__*/ (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_7__._)(function() {\n                        var data, error;\n                        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_8__._)(this, function(_state) {\n                            switch(_state.label){\n                                case 0:\n                                    _state.trys.push([\n                                        0,\n                                        2,\n                                        ,\n                                        3\n                                    ]);\n                                    return [\n                                        4,\n                                        (0,_api_boardApi__WEBPACK_IMPORTED_MODULE_3__.getAllArticles)(page, orderBy)\n                                    ];\n                                case 1:\n                                    data = _state.sent();\n                                    setArticles(data.list);\n                                    return [\n                                        3,\n                                        3\n                                    ];\n                                case 2:\n                                    error = _state.sent();\n                                    console.error('데이터를 불러오는데 실패 했습니다.', error);\n                                    return [\n                                        3,\n                                        3\n                                    ];\n                                case 3:\n                                    return [\n                                        2\n                                    ];\n                            }\n                        });\n                    })\n                }[\"AllArticlesSection.useEffect.fetchAllArticles\"];\n                fetchAllArticles();\n            }\n        }\n    }[\"AllArticlesSection.useEffect\"], [\n        orderBy\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_style_AllArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"all-section-header\"]),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_style_AllArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"all-title\"]),\n                        children: \"게시글\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\AllArticlesSection.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        className: (_style_AllArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_2___default().addArticlelink),\n                        href: \"/addArticle\",\n                        children: \"글쓰기\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\AllArticlesSection.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\AllArticlesSection.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            articles ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_style_AllArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"allarticle-list\"]),\n                children: articles.map(function(article) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_style_AllArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"allarticle-item\"]),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_style_AllArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"allarticle-body\"]),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: (_style_AllArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"allarticle-title\"]),\n                                        children: article.title\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\AllArticlesSection.tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                        width: 48,\n                                        height: 48,\n                                        src: article.image || '/images/Img_home_02.png',\n                                        alt: \"게시글 이미지\",\n                                        className: (_style_AllArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"allarticle-image\"])\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\AllArticlesSection.tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 17\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\AllArticlesSection.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_style_AllArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"allarticle-footer\"]),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_style_AllArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"allarticle-info\"]),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: (_style_AllArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"allarticle-writer\"]),\n                                                children: article.writer.nickname\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\AllArticlesSection.tsx\",\n                                                lineNumber: 67,\n                                                columnNumber: 19\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: (_style_AllArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"allarticle-updatedAt\"]),\n                                                children: article.updatedAt\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\AllArticlesSection.tsx\",\n                                                lineNumber: 70,\n                                                columnNumber: 19\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\AllArticlesSection.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_style_AllArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"allarticle-likes\"]),\n                                        children: article.likeCount\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\AllArticlesSection.tsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 17\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\AllArticlesSection.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, article.id, true, {\n                        fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\AllArticlesSection.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 13\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\AllArticlesSection.tsx\",\n                lineNumber: 52,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"데이터를 불러오는 중...\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\AllArticlesSection.tsx\",\n                lineNumber: 82,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\AllArticlesSection.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n_s(AllArticlesSection, \"U1DqltPo9eOQgWjB8JOeA1rJhjg=\");\n_c = AllArticlesSection;\nvar _c;\n$RefreshReg$(_c, \"AllArticlesSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ib2FyZHMvQWxsQXJ0aWNsZXNTZWN0aW9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE0QztBQUNtQjtBQUNYO0FBQ3ZCO0FBQ0U7QUFrQmhCLFNBQVNNOzs7SUFDdEIsSUFBZ0NMLFlBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBdUIsV0FBeERNLFdBQXlCTixjQUFmTyxjQUFlUDtJQUNoQyxJQUE4QkEsYUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFpQixlQUFoRFEsVUFBdUJSLGVBQWRTLGFBQWNUO0lBQzlCLElBQXdCQSxhQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsUUFBMUJVLE9BQWlCVixlQUFYVyxVQUFXWDtJQUV4QkQsZ0RBQVNBO3dDQUFDO1lBQ1I7Z0JBQ0UsSUFBTWE7c0pBQW1COzRCQUVmQyxNQUVDQzs7Ozs7Ozs7OztvQ0FGTTs7d0NBQU1aLDZEQUFjQSxDQUFDUSxNQUFNRjs7O29DQUFsQ0ssT0FBTztvQ0FDYk4sWUFBWU0sS0FBS0UsSUFBSTs7Ozs7O29DQUNkRDtvQ0FDUEUsUUFBUUYsS0FBSyxDQUFDLHVCQUF1QkE7Ozs7Ozs7Ozs7O29CQUV6Qzs7Z0JBRUFGO1lBQ0Y7UUFDRjt1Q0FBRztRQUFDSjtLQUFRO0lBRVoscUJBQ0UsOERBQUNTOzswQkFDQyw4REFBQ0E7Z0JBQUlDLFdBQVdqQixtR0FBNEI7O2tDQUMxQyw4REFBQ2dCO3dCQUFJQyxXQUFXakIsMEZBQW1CO2tDQUFFOzs7Ozs7a0NBQ3JDLDhEQUFDRSxrREFBSUE7d0JBQUNlLFdBQVdqQiw0RkFBd0I7d0JBQUVrQixNQUFLO2tDQUFjOzs7Ozs7Ozs7Ozs7WUFJL0RiLHlCQUNDLDhEQUFDVztnQkFBSUMsV0FBV2pCLGdHQUF5QjswQkFDdENLLFNBQVNjLEdBQUcsQ0FBQyxTQUFDQzt5Q0FDYiw4REFBQ0o7d0JBQXFCQyxXQUFXakIsZ0dBQXlCOzswQ0FDeEQsOERBQUNnQjtnQ0FBSUMsV0FBV2pCLGdHQUF5Qjs7a0RBQ3ZDLDhEQUFDcUI7d0NBQUdKLFdBQVdqQixpR0FBMEI7a0RBQUdvQixRQUFRRSxLQUFLOzs7Ozs7a0RBQ3pELDhEQUFDbkIsbURBQUtBO3dDQUNKb0IsT0FBTzt3Q0FDUEMsUUFBUTt3Q0FDUkMsS0FBS0wsUUFBUU0sS0FBSyxJQUFJO3dDQUN0QkMsS0FBSTt3Q0FDSlYsV0FBV2pCLGlHQUEwQjs7Ozs7Ozs7Ozs7OzBDQUd6Qyw4REFBQ2dCO2dDQUFJQyxXQUFXakIsa0dBQTJCOztrREFDekMsOERBQUNnQjt3Q0FBSUMsV0FBV2pCLGdHQUF5Qjs7MERBQ3ZDLDhEQUFDNEI7Z0RBQUtYLFdBQVdqQixrR0FBMkI7MERBQ3pDb0IsUUFBUVMsTUFBTSxDQUFDQyxRQUFROzs7Ozs7MERBRTFCLDhEQUFDRjtnREFBS1gsV0FBV2pCLHFHQUE4QjswREFDNUNvQixRQUFRVyxTQUFTOzs7Ozs7Ozs7Ozs7a0RBR3RCLDhEQUFDSDt3Q0FBS1gsV0FBV2pCLGlHQUEwQjtrREFDeENvQixRQUFRWSxTQUFTOzs7Ozs7Ozs7Ozs7O3VCQXJCZFosUUFBUWEsRUFBRTs7Ozs7Ozs7OztxQ0E0QnhCLDhEQUFDakI7MEJBQUk7Ozs7Ozs7Ozs7OztBQUliO0dBL0R3Qlo7S0FBQUEiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYmhvaFxcRGVza3RvcFxcRkVfU3ByaW50X01pc3Npb25cXDExLVNwcmludC1NaXNzaW9uXFxzcmNcXGNvbXBvbmVudHNcXGJvYXJkc1xcQWxsQXJ0aWNsZXNTZWN0aW9uLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlL0FsbEFydGljbGVzU2VjdGlvbi5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHsgZ2V0QWxsQXJ0aWNsZXMgfSBmcm9tICcuLi8uLi9hcGkvYm9hcmRBcGknO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcblxyXG5pbnRlcmZhY2UgQXJ0aWNsZUxpc3Qge1xyXG4gIGlkOiBudW1iZXI7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBjb250ZW50OiBzdHJpbmc7XHJcbiAgaW1hZ2U6IHN0cmluZztcclxuICBsaWtlQ291bnQ6IG51bWJlcjtcclxuICBjcmVhdGVkQXQ6IHN0cmluZztcclxuICB1cGRhdGVkQXQ6IHN0cmluZztcclxuICB3cml0ZXI6IHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICBuaWNrbmFtZTogc3RyaW5nO1xyXG4gIH07XHJcbn1cclxuXHJcbnR5cGUgUHJvZHVjdE9yZGVyQnkgPSAncmVjZW50JyB8ICdsaWtlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFsbEFydGljbGVzU2VjdGlvbigpIHtcclxuICBjb25zdCBbYXJ0aWNsZXMsIHNldEFydGljbGVzXSA9IHVzZVN0YXRlPEFydGljbGVMaXN0W10gfCBudWxsPihudWxsKTtcclxuICBjb25zdCBbb3JkZXJCeSwgc2V0T3JkZXJCeV0gPSB1c2VTdGF0ZTxQcm9kdWN0T3JkZXJCeT4oJ3JlY2VudCcpO1xyXG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKDEpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAge1xyXG4gICAgICBjb25zdCBmZXRjaEFsbEFydGljbGVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0QWxsQXJ0aWNsZXMocGFnZSwgb3JkZXJCeSk7XHJcbiAgICAgICAgICBzZXRBcnRpY2xlcyhkYXRhLmxpc3QpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCfrjbDsnbTthLDrpbwg67aI65+s7Jik64qU642wIOyLpO2MqCDtlojsirXri4jri6QuJywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuXHJcbiAgICAgIGZldGNoQWxsQXJ0aWNsZXMoKTtcclxuICAgIH1cclxuICB9LCBbb3JkZXJCeV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snYWxsLXNlY3Rpb24taGVhZGVyJ119PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2FsbC10aXRsZSddfT7qsozsi5zquIA8L2Rpdj5cclxuICAgICAgICA8TGluayBjbGFzc05hbWU9e3N0eWxlc1snYWRkQXJ0aWNsZWxpbmsnXX0gaHJlZj1cIi9hZGRBcnRpY2xlXCI+XHJcbiAgICAgICAgICDquIDsk7DquLBcclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7YXJ0aWNsZXMgPyAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snYWxsYXJ0aWNsZS1saXN0J119PlxyXG4gICAgICAgICAge2FydGljbGVzLm1hcCgoYXJ0aWNsZSkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17YXJ0aWNsZS5pZH0gY2xhc3NOYW1lPXtzdHlsZXNbJ2FsbGFydGljbGUtaXRlbSddfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydhbGxhcnRpY2xlLWJvZHknXX0+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXNbJ2FsbGFydGljbGUtdGl0bGUnXX0+e2FydGljbGUudGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD17NDh9XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD17NDh9XHJcbiAgICAgICAgICAgICAgICAgIHNyYz17YXJ0aWNsZS5pbWFnZSB8fCAnL2ltYWdlcy9JbWdfaG9tZV8wMi5wbmcnfVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCLqsozsi5zquIAg7J2066+47KeAXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbJ2FsbGFydGljbGUtaW1hZ2UnXX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snYWxsYXJ0aWNsZS1mb290ZXInXX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydhbGxhcnRpY2xlLWluZm8nXX0+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzWydhbGxhcnRpY2xlLXdyaXRlciddfT5cclxuICAgICAgICAgICAgICAgICAgICB7YXJ0aWNsZS53cml0ZXIubmlja25hbWV9XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXNbJ2FsbGFydGljbGUtdXBkYXRlZEF0J119PlxyXG4gICAgICAgICAgICAgICAgICAgIHthcnRpY2xlLnVwZGF0ZWRBdH1cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlc1snYWxsYXJ0aWNsZS1saWtlcyddfT5cclxuICAgICAgICAgICAgICAgICAge2FydGljbGUubGlrZUNvdW50fVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxkaXY+642w7J207YSw66W8IOu2iOufrOyYpOuKlCDspJEuLi48L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiZ2V0QWxsQXJ0aWNsZXMiLCJMaW5rIiwiSW1hZ2UiLCJBbGxBcnRpY2xlc1NlY3Rpb24iLCJhcnRpY2xlcyIsInNldEFydGljbGVzIiwib3JkZXJCeSIsInNldE9yZGVyQnkiLCJwYWdlIiwic2V0UGFnZSIsImZldGNoQWxsQXJ0aWNsZXMiLCJkYXRhIiwiZXJyb3IiLCJsaXN0IiwiY29uc29sZSIsImRpdiIsImNsYXNzTmFtZSIsImhyZWYiLCJtYXAiLCJhcnRpY2xlIiwiaDIiLCJ0aXRsZSIsIndpZHRoIiwiaGVpZ2h0Iiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJzcGFuIiwid3JpdGVyIiwibmlja25hbWUiLCJ1cGRhdGVkQXQiLCJsaWtlQ291bnQiLCJpZCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/boards/AllArticlesSection.tsx\n"));

/***/ })

});