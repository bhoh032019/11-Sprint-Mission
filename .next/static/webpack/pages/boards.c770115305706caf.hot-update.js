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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BestArticlesSection)\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api_boardApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/boardApi */ \"./src/api/boardApi.js\");\n/* harmony import */ var _hooks_useDimensions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useDimensions */ \"./src/hooks/useDimensions.ts\");\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\nvar getPageSize = function(width) {\n    if (width < 768) {\n        return 1; // Mobile viewport\n    } else if (width < 1280) {\n        return 2; // Tablet viewport\n    } else {\n        return 3; // Desktop viewport\n    }\n};\nfunction BestArticlesSection() {\n    var _articles_;\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), articles = _useState[0], setArticles = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), pageSize = _useState1[0], setPageSize = _useState1[1];\n    var viewWidth = (0,_hooks_useDimensions__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"BestArticlesSection.useEffect\": function() {\n            if (viewWidth === 0) return;\n            var newPageSize = getPageSize(viewWidth);\n            if (newPageSize != pageSize) {\n                setPageSize(newPageSize);\n                var fetchBestArticles = {\n                    \"BestArticlesSection.useEffect.fetchBestArticles\": /*#__PURE__*/ function() {\n                        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_5__._)(function(size) {\n                            var data, error;\n                            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_6__._)(this, function(_state) {\n                                switch(_state.label){\n                                    case 0:\n                                        _state.trys.push([\n                                            0,\n                                            2,\n                                            ,\n                                            3\n                                        ]);\n                                        return [\n                                            4,\n                                            (0,_api_boardApi__WEBPACK_IMPORTED_MODULE_2__.getArticles)(size)\n                                        ];\n                                    case 1:\n                                        data = _state.sent();\n                                        setArticles(data.list);\n                                        console.log(data.list);\n                                        return [\n                                            3,\n                                            3\n                                        ];\n                                    case 2:\n                                        error = _state.sent();\n                                        console.error('데이터를 불러오는데 실패 했습니다.', error);\n                                        return [\n                                            3,\n                                            3\n                                        ];\n                                    case 3:\n                                        return [\n                                            2\n                                        ];\n                                }\n                            });\n                        });\n                        return function(size) {\n                            return _ref.apply(this, arguments);\n                        };\n                    }()\n                }[\"BestArticlesSection.useEffect.fetchBestArticles\"];\n                fetchBestArticles(newPageSize);\n            }\n        }\n    }[\"BestArticlesSection.useEffect\"], [\n        viewWidth,\n        pageSize\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: true,\n                children: \"베스트 게시글\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\BestArticlesSection.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            articles ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: ((_articles_ = articles[0]) === null || _articles_ === void 0 ? void 0 : _articles_.content) || '게시글이 없습니다.'\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\BestArticlesSection.tsx\",\n                lineNumber: 61,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"데이터를 불러오는 중...\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\BestArticlesSection.tsx\",\n                lineNumber: 63,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\BestArticlesSection.tsx\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, this);\n}\n_s(BestArticlesSection, \"q2djYd0/UnmiiYE/cuPgkF51Tpg=\", false, function() {\n    return [\n        _hooks_useDimensions__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = BestArticlesSection;\nvar _c;\n$RefreshReg$(_c, \"BestArticlesSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ib2FyZHMvQmVzdEFydGljbGVzU2VjdGlvbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ0s7QUFDSztBQWdCdEQsSUFBTUksY0FBYyxTQUFDQztJQUNuQixJQUFJQSxRQUFRLEtBQUs7UUFDZixPQUFPLEdBQUcsa0JBQWtCO0lBQzlCLE9BQU8sSUFBSUEsUUFBUSxNQUFNO1FBQ3ZCLE9BQU8sR0FBRyxrQkFBa0I7SUFDOUIsT0FBTztRQUNMLE9BQU8sR0FBRyxtQkFBbUI7SUFDL0I7QUFDRjtBQUVlLFNBQVNDO1FBZ0NWQzs7SUEvQlosSUFBZ0NOLFlBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBdUIsV0FBeERNLFdBQXlCTixjQUFmTyxjQUFlUDtJQUNoQyxJQUFnQ0EsYUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFnQixXQUFqRFEsV0FBeUJSLGVBQWZTLGNBQWVUO0lBRWhDLElBQU1VLFlBQVlSLGdFQUFhQTtJQUUvQkgsZ0RBQVNBO3lDQUFDO1lBQ1IsSUFBSVcsY0FBYyxHQUFHO1lBRXJCLElBQU1DLGNBQWNSLFlBQVlPO1lBRWhDLElBQUlDLGVBQWVILFVBQVU7Z0JBQzNCQyxZQUFZRTtnQkFFWixJQUFNQzs7bUNBQW9CLDRFQUFPQztnQ0FFdkJDLE1BR0NDOzs7Ozs7Ozs7O3dDQUhNOzs0Q0FBTWQsMERBQVdBLENBQUNZOzs7d0NBQXpCQyxPQUFPO3dDQUNiUCxZQUFZTyxLQUFLRSxJQUFJO3dDQUNyQkMsUUFBUUMsR0FBRyxDQUFDSixLQUFLRSxJQUFJOzs7Ozs7d0NBQ2REO3dDQUNQRSxRQUFRRixLQUFLLENBQUMsdUJBQXVCQTs7Ozs7Ozs7Ozs7d0JBRXpDO3dDQVJpQ0Y7Ozs7O2dCQVVqQ0Qsa0JBQWtCRDtZQUNwQjtRQUNGO3dDQUFHO1FBQUNEO1FBQVdGO0tBQVM7SUFFeEIscUJBQ0UsOERBQUNXOzswQkFDQyw4REFBQ0E7Z0JBQUlDLFNBQVM7MEJBQUM7Ozs7OztZQUNkZCx5QkFDQyw4REFBQ2E7MEJBQUtiLEVBQUFBLGFBQUFBLFFBQVEsQ0FBQyxFQUFFLGNBQVhBLGlDQUFBQSxXQUFhZSxPQUFPLEtBQUk7Ozs7O3FDQUU5Qiw4REFBQ0Y7MEJBQUk7Ozs7Ozs7Ozs7OztBQUliO0dBdEN3QmQ7O1FBSUpILDREQUFhQTs7O0tBSlRHIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGJob2hcXERlc2t0b3BcXEZFX1NwcmludF9NaXNzaW9uXFwxMS1TcHJpbnQtTWlzc2lvblxcc3JjXFxjb21wb25lbnRzXFxib2FyZHNcXEJlc3RBcnRpY2xlc1NlY3Rpb24udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGdldEFydGljbGVzIH0gZnJvbSAnLi4vLi4vYXBpL2JvYXJkQXBpJztcclxuaW1wb3J0IHVzZURpbWVuc2lvbnMgZnJvbSAnLi4vLi4vaG9va3MvdXNlRGltZW5zaW9ucyc7XHJcblxyXG5pbnRlcmZhY2UgQXJ0aWNsZUxpc3Qge1xyXG4gIGlkOiBudW1iZXI7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBjb250ZW50OiBzdHJpbmc7XHJcbiAgaW1hZ2U6IHN0cmluZztcclxuICBsaWtlQ291bnQ6IG51bWJlcjtcclxuICBjcmVhdGVkQXQ6IERhdGU7XHJcbiAgdXBkYXRlZEF0OiBEYXRlO1xyXG4gIHdyaXRlcjoge1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIG5pY2tuYW1lOiBzdHJpbmc7XHJcbiAgfTtcclxufVxyXG5cclxuY29uc3QgZ2V0UGFnZVNpemUgPSAod2lkdGg6IG51bWJlcik6IG51bWJlciA9PiB7XHJcbiAgaWYgKHdpZHRoIDwgNzY4KSB7XHJcbiAgICByZXR1cm4gMTsgLy8gTW9iaWxlIHZpZXdwb3J0XHJcbiAgfSBlbHNlIGlmICh3aWR0aCA8IDEyODApIHtcclxuICAgIHJldHVybiAyOyAvLyBUYWJsZXQgdmlld3BvcnRcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIDM7IC8vIERlc2t0b3Agdmlld3BvcnRcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCZXN0QXJ0aWNsZXNTZWN0aW9uKCkge1xyXG4gIGNvbnN0IFthcnRpY2xlcywgc2V0QXJ0aWNsZXNdID0gdXNlU3RhdGU8QXJ0aWNsZUxpc3RbXSB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IFtwYWdlU2l6ZSwgc2V0UGFnZVNpemVdID0gdXNlU3RhdGU8bnVtYmVyIHwgbnVsbD4obnVsbCk7XHJcblxyXG4gIGNvbnN0IHZpZXdXaWR0aCA9IHVzZURpbWVuc2lvbnMoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh2aWV3V2lkdGggPT09IDApIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBuZXdQYWdlU2l6ZSA9IGdldFBhZ2VTaXplKHZpZXdXaWR0aCk7XHJcblxyXG4gICAgaWYgKG5ld1BhZ2VTaXplICE9IHBhZ2VTaXplKSB7XHJcbiAgICAgIHNldFBhZ2VTaXplKG5ld1BhZ2VTaXplKTtcclxuXHJcbiAgICAgIGNvbnN0IGZldGNoQmVzdEFydGljbGVzID0gYXN5bmMgKHNpemU6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0QXJ0aWNsZXMoc2l6ZSk7XHJcbiAgICAgICAgICBzZXRBcnRpY2xlcyhkYXRhLmxpc3QpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YS5saXN0KTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcign642w7J207YSw66W8IOu2iOufrOyYpOuKlOuNsCDsi6TtjKgg7ZaI7Iq164uI64ukLicsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBmZXRjaEJlc3RBcnRpY2xlcyhuZXdQYWdlU2l6ZSk7XHJcbiAgICB9XHJcbiAgfSwgW3ZpZXdXaWR0aCwgcGFnZVNpemVdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPuuyoOyKpO2KuCDqsozsi5zquIA8L2Rpdj5cclxuICAgICAge2FydGljbGVzID8gKFxyXG4gICAgICAgIDxkaXY+e2FydGljbGVzWzBdPy5jb250ZW50IHx8ICfqsozsi5zquIDsnbQg7JeG7Iq164uI64ukLid9PC9kaXY+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPGRpdj7rjbDsnbTthLDrpbwg67aI65+s7Jik64qUIOykkS4uLjwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJnZXRBcnRpY2xlcyIsInVzZURpbWVuc2lvbnMiLCJnZXRQYWdlU2l6ZSIsIndpZHRoIiwiQmVzdEFydGljbGVzU2VjdGlvbiIsImFydGljbGVzIiwic2V0QXJ0aWNsZXMiLCJwYWdlU2l6ZSIsInNldFBhZ2VTaXplIiwidmlld1dpZHRoIiwibmV3UGFnZVNpemUiLCJmZXRjaEJlc3RBcnRpY2xlcyIsInNpemUiLCJkYXRhIiwiZXJyb3IiLCJsaXN0IiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRlbnQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/boards/BestArticlesSection.tsx\n"));

/***/ })

});