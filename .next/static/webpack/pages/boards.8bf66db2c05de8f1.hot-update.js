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

/***/ "./src/components/boards/BestArticlesSection.tsx":
/*!*******************************************************!*\
  !*** ./src/components/boards/BestArticlesSection.tsx ***!
  \*******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BestArticlesSection)\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api_boardApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/boardApi */ \"./src/api/boardApi.js\");\n/* harmony import */ var _hooks_useDimensions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useDimensions */ \"./src/hooks/useDimensions.ts\");\n/* harmony import */ var _style_BestArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../style/BestArticlesSection.module.css */ \"./src/style/BestArticlesSection.module.css\");\n/* harmony import */ var _style_BestArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_BestArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar getPageSize = function(width) {\n    if (width < 768) {\n        return 1; // Mobile viewport\n    } else if (width < 1280) {\n        return 2; // Tablet viewport\n    } else {\n        return 3; // Desktop viewport\n    }\n};\nfunction BestArticlesSection() {\n    var _this = this;\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), articles = _useState[0], setArticles = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), pageSize = _useState1[0], setPageSize = _useState1[1];\n    var viewWidth = (0,_hooks_useDimensions__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"BestArticlesSection.useEffect\": function() {\n            if (viewWidth === 0) return;\n            var newPageSize = getPageSize(viewWidth);\n            if (newPageSize !== pageSize) {\n                setPageSize(newPageSize);\n                var fetchBestArticles = {\n                    \"BestArticlesSection.useEffect.fetchBestArticles\": /*#__PURE__*/ function() {\n                        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_7__._)(function(size) {\n                            var data, error;\n                            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_8__._)(this, function(_state) {\n                                switch(_state.label){\n                                    case 0:\n                                        _state.trys.push([\n                                            0,\n                                            2,\n                                            ,\n                                            3\n                                        ]);\n                                        return [\n                                            4,\n                                            (0,_api_boardApi__WEBPACK_IMPORTED_MODULE_2__.getArticles)(size)\n                                        ];\n                                    case 1:\n                                        data = _state.sent();\n                                        setArticles(data.list);\n                                        return [\n                                            3,\n                                            3\n                                        ];\n                                    case 2:\n                                        error = _state.sent();\n                                        console.error('데이터를 불러오는데 실패 했습니다.', error);\n                                        return [\n                                            3,\n                                            3\n                                        ];\n                                    case 3:\n                                        return [\n                                            2\n                                        ];\n                                }\n                            });\n                        });\n                        return function(size) {\n                            return _ref.apply(this, arguments);\n                        };\n                    }()\n                }[\"BestArticlesSection.useEffect.fetchBestArticles\"];\n                fetchBestArticles(newPageSize);\n            }\n        }\n    }[\"BestArticlesSection.useEffect\"], [\n        viewWidth,\n        pageSize\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_style_BestArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_4___default()[\"best-section\"]),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_style_BestArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_4___default()[\"best-title\"]),\n                children: \"베스트 게시글\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\BestArticlesSection.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            articles ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_style_BestArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_4___default()[\"article-list\"]),\n                children: articles.map(function(article) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_style_BestArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_4___default()[\"article-item\"]),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_style_BestArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_4___default()[\"article-body\"]),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: (_style_BestArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_4___default()[\"article-title\"]),\n                                        children: article.title\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\BestArticlesSection.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                        width: 48,\n                                        height: 44.57,\n                                        src: \"\".concat(article.image),\n                                        alt: \"게시글 이미지\",\n                                        className: (_style_BestArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_4___default()[\"article-image\"])\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\BestArticlesSection.tsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 17\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\BestArticlesSection.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_style_BestArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_4___default()[\"article-footer\"]),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_style_BestArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_4___default()[\"article-writer\"]),\n                                        children: [\n                                            \"작성자: \",\n                                            article.writer.nickname\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\BestArticlesSection.tsx\",\n                                        lineNumber: 76,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_style_BestArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_4___default()[\"article-likes\"]),\n                                        children: [\n                                            \"좋아요: \",\n                                            article.likeCount\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\BestArticlesSection.tsx\",\n                                        lineNumber: 79,\n                                        columnNumber: 17\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\BestArticlesSection.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, article.id, true, {\n                        fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\BestArticlesSection.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 13\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\BestArticlesSection.tsx\",\n                lineNumber: 62,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"데이터를 불러오는 중...\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\BestArticlesSection.tsx\",\n                lineNumber: 87,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\BestArticlesSection.tsx\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, this);\n}\n_s(BestArticlesSection, \"q2djYd0/UnmiiYE/cuPgkF51Tpg=\", false, function() {\n    return [\n        _hooks_useDimensions__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = BestArticlesSection;\nvar _c;\n$RefreshReg$(_c, \"BestArticlesSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ib2FyZHMvQmVzdEFydGljbGVzU2VjdGlvbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE0QztBQUNLO0FBQ0s7QUFDVTtBQUNqQztBQWdCL0IsSUFBTU0sY0FBYyxTQUFDQztJQUNuQixJQUFJQSxRQUFRLEtBQUs7UUFDZixPQUFPLEdBQUcsa0JBQWtCO0lBQzlCLE9BQU8sSUFBSUEsUUFBUSxNQUFNO1FBQ3ZCLE9BQU8sR0FBRyxrQkFBa0I7SUFDOUIsT0FBTztRQUNMLE9BQU8sR0FBRyxtQkFBbUI7SUFDL0I7QUFDRjtBQUVlLFNBQVNDOzs7SUFDdEIsSUFBZ0NQLFlBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBdUIsV0FBeERRLFdBQXlCUixjQUFmUyxjQUFlVDtJQUNoQyxJQUFnQ0EsYUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFnQixXQUFqRFUsV0FBeUJWLGVBQWZXLGNBQWVYO0lBRWhDLElBQU1ZLFlBQVlWLGdFQUFhQTtJQUUvQkgsZ0RBQVNBO3lDQUFDO1lBQ1IsSUFBSWEsY0FBYyxHQUFHO1lBRXJCLElBQU1DLGNBQWNSLFlBQVlPO1lBRWhDLElBQUlDLGdCQUFnQkgsVUFBVTtnQkFDNUJDLFlBQVlFO2dCQUVaLElBQU1DOzttQ0FBb0IsNEVBQU9DO2dDQUV2QkMsTUFFQ0M7Ozs7Ozs7Ozs7d0NBRk07OzRDQUFNaEIsMERBQVdBLENBQUNjOzs7d0NBQXpCQyxPQUFPO3dDQUNiUCxZQUFZTyxLQUFLRSxJQUFJOzs7Ozs7d0NBQ2REO3dDQUNQRSxRQUFRRixLQUFLLENBQUMsdUJBQXVCQTs7Ozs7Ozs7Ozs7d0JBRXpDO3dDQVBpQ0Y7Ozs7O2dCQVNqQ0Qsa0JBQWtCRDtZQUNwQjtRQUNGO3dDQUFHO1FBQUNEO1FBQVdGO0tBQVM7SUFFeEIscUJBQ0UsOERBQUNVO1FBQUlDLFdBQVdsQiw4RkFBc0I7OzBCQUNwQyw4REFBQ2lCO2dCQUFJQyxXQUFXbEIsNEZBQW9COzBCQUFFOzs7Ozs7WUFDckNLLHlCQUNDLDhEQUFDWTtnQkFBSUMsV0FBV2xCLDhGQUFzQjswQkFDbkNLLFNBQVNjLEdBQUcsQ0FBQyxTQUFDQzt5Q0FDYiw4REFBQ0g7d0JBQXFCQyxXQUFXbEIsOEZBQXNCOzswQ0FDckQsOERBQUNpQjtnQ0FBSUMsV0FBV2xCLDhGQUFzQjs7a0RBQ3BDLDhEQUFDcUI7d0NBQUdILFdBQVdsQiwrRkFBdUI7a0RBQUdvQixRQUFRRSxLQUFLOzs7Ozs7a0RBQ3RELDhEQUFDckIsbURBQUtBO3dDQUNKRSxPQUFPO3dDQUNQb0IsUUFBUTt3Q0FDUkMsS0FBSyxHQUFpQixPQUFkSixRQUFRSyxLQUFLO3dDQUNyQkMsS0FBSTt3Q0FDSlIsV0FBV2xCLCtGQUF1Qjs7Ozs7Ozs7Ozs7OzBDQUd0Qyw4REFBQ2lCO2dDQUFJQyxXQUFXbEIsZ0dBQXdCOztrREFDdEMsOERBQUMyQjt3Q0FBS1QsV0FBV2xCLGdHQUF3Qjs7NENBQUU7NENBQ25Db0IsUUFBUVEsTUFBTSxDQUFDQyxRQUFROzs7Ozs7O2tEQUUvQiw4REFBQ0Y7d0NBQUtULFdBQVdsQiwrRkFBdUI7OzRDQUFFOzRDQUNsQ29CLFFBQVFVLFNBQVM7Ozs7Ozs7Ozs7Ozs7O3VCQWhCbkJWLFFBQVFXLEVBQUU7Ozs7Ozs7Ozs7cUNBdUJ4Qiw4REFBQ2Q7MEJBQUk7Ozs7Ozs7Ozs7OztBQUliO0dBNUR3QmI7O1FBSUpMLDREQUFhQTs7O0tBSlRLIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGJob2hcXERlc2t0b3BcXEZFX1NwcmludF9NaXNzaW9uXFwxMS1TcHJpbnQtTWlzc2lvblxcc3JjXFxjb21wb25lbnRzXFxib2FyZHNcXEJlc3RBcnRpY2xlc1NlY3Rpb24udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGdldEFydGljbGVzIH0gZnJvbSAnLi4vLi4vYXBpL2JvYXJkQXBpJztcclxuaW1wb3J0IHVzZURpbWVuc2lvbnMgZnJvbSAnLi4vLi4vaG9va3MvdXNlRGltZW5zaW9ucyc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGUvQmVzdEFydGljbGVzU2VjdGlvbi5tb2R1bGUuY3NzJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5cclxuaW50ZXJmYWNlIEFydGljbGVMaXN0IHtcclxuICBpZDogbnVtYmVyO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgY29udGVudDogc3RyaW5nO1xyXG4gIGltYWdlOiBzdHJpbmc7XHJcbiAgbGlrZUNvdW50OiBudW1iZXI7XHJcbiAgY3JlYXRlZEF0OiBEYXRlO1xyXG4gIHVwZGF0ZWRBdDogRGF0ZTtcclxuICB3cml0ZXI6IHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICBuaWNrbmFtZTogc3RyaW5nO1xyXG4gIH07XHJcbn1cclxuXHJcbmNvbnN0IGdldFBhZ2VTaXplID0gKHdpZHRoOiBudW1iZXIpOiBudW1iZXIgPT4ge1xyXG4gIGlmICh3aWR0aCA8IDc2OCkge1xyXG4gICAgcmV0dXJuIDE7IC8vIE1vYmlsZSB2aWV3cG9ydFxyXG4gIH0gZWxzZSBpZiAod2lkdGggPCAxMjgwKSB7XHJcbiAgICByZXR1cm4gMjsgLy8gVGFibGV0IHZpZXdwb3J0XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiAzOyAvLyBEZXNrdG9wIHZpZXdwb3J0XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmVzdEFydGljbGVzU2VjdGlvbigpIHtcclxuICBjb25zdCBbYXJ0aWNsZXMsIHNldEFydGljbGVzXSA9IHVzZVN0YXRlPEFydGljbGVMaXN0W10gfCBudWxsPihudWxsKTtcclxuICBjb25zdCBbcGFnZVNpemUsIHNldFBhZ2VTaXplXSA9IHVzZVN0YXRlPG51bWJlciB8IG51bGw+KG51bGwpO1xyXG5cclxuICBjb25zdCB2aWV3V2lkdGggPSB1c2VEaW1lbnNpb25zKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodmlld1dpZHRoID09PSAwKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgbmV3UGFnZVNpemUgPSBnZXRQYWdlU2l6ZSh2aWV3V2lkdGgpO1xyXG5cclxuICAgIGlmIChuZXdQYWdlU2l6ZSAhPT0gcGFnZVNpemUpIHtcclxuICAgICAgc2V0UGFnZVNpemUobmV3UGFnZVNpemUpO1xyXG5cclxuICAgICAgY29uc3QgZmV0Y2hCZXN0QXJ0aWNsZXMgPSBhc3luYyAoc2l6ZTogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRBcnRpY2xlcyhzaXplKTtcclxuICAgICAgICAgIHNldEFydGljbGVzKGRhdGEubGlzdCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ+uNsOydtO2EsOulvCDrtojrn6zsmKTripTrjbAg7Iuk7YyoIO2WiOyKteuLiOuLpC4nLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgZmV0Y2hCZXN0QXJ0aWNsZXMobmV3UGFnZVNpemUpO1xyXG4gICAgfVxyXG4gIH0sIFt2aWV3V2lkdGgsIHBhZ2VTaXplXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydiZXN0LXNlY3Rpb24nXX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2Jlc3QtdGl0bGUnXX0+67Kg7Iqk7Yq4IOqyjOyLnOq4gDwvZGl2PlxyXG4gICAgICB7YXJ0aWNsZXMgPyAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snYXJ0aWNsZS1saXN0J119PlxyXG4gICAgICAgICAge2FydGljbGVzLm1hcCgoYXJ0aWNsZSkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17YXJ0aWNsZS5pZH0gY2xhc3NOYW1lPXtzdHlsZXNbJ2FydGljbGUtaXRlbSddfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydhcnRpY2xlLWJvZHknXX0+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXNbJ2FydGljbGUtdGl0bGUnXX0+e2FydGljbGUudGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD17NDh9XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD17NDQuNTd9XHJcbiAgICAgICAgICAgICAgICAgIHNyYz17YCR7YXJ0aWNsZS5pbWFnZX1gfVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCLqsozsi5zquIAg7J2066+47KeAXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbJ2FydGljbGUtaW1hZ2UnXX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snYXJ0aWNsZS1mb290ZXInXX0+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlc1snYXJ0aWNsZS13cml0ZXInXX0+XHJcbiAgICAgICAgICAgICAgICAgIOyekeyEseyekDoge2FydGljbGUud3JpdGVyLm5pY2tuYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXNbJ2FydGljbGUtbGlrZXMnXX0+XHJcbiAgICAgICAgICAgICAgICAgIOyii+yVhOyalDoge2FydGljbGUubGlrZUNvdW50fVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxkaXY+642w7J207YSw66W8IOu2iOufrOyYpOuKlCDspJEuLi48L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZ2V0QXJ0aWNsZXMiLCJ1c2VEaW1lbnNpb25zIiwic3R5bGVzIiwiSW1hZ2UiLCJnZXRQYWdlU2l6ZSIsIndpZHRoIiwiQmVzdEFydGljbGVzU2VjdGlvbiIsImFydGljbGVzIiwic2V0QXJ0aWNsZXMiLCJwYWdlU2l6ZSIsInNldFBhZ2VTaXplIiwidmlld1dpZHRoIiwibmV3UGFnZVNpemUiLCJmZXRjaEJlc3RBcnRpY2xlcyIsInNpemUiLCJkYXRhIiwiZXJyb3IiLCJsaXN0IiwiY29uc29sZSIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsImFydGljbGUiLCJoMiIsInRpdGxlIiwiaGVpZ2h0Iiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJzcGFuIiwid3JpdGVyIiwibmlja25hbWUiLCJsaWtlQ291bnQiLCJpZCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/boards/BestArticlesSection.tsx\n"));

/***/ })

});