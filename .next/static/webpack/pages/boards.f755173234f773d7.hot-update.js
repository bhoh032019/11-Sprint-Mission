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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AllArticlesSection)\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swc/helpers/_/_object_spread */ \"./node_modules/@swc/helpers/esm/_object_spread.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_AllArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../style/AllArticlesSection.module.css */ \"./src/style/AllArticlesSection.module.css\");\n/* harmony import */ var _style_AllArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_AllArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api_boardApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/boardApi */ \"./src/api/boardApi.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _images_ic_heart_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../images/ic_heart.svg */ \"./src/images/ic_heart.svg\");\n/* harmony import */ var _SearchBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../SearchBar */ \"./src/components/SearchBar.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _DropdownMenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../DropdownMenu */ \"./src/components/DropdownMenu.tsx\");\n\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction AllArticlesSection() {\n    var _this = this;\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_10__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), articles = _useState[0], setArticles = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_10__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('recent'), 2), orderBy = _useState1[0], setOrderBy = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_10__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), 2), page = _useState2[0], setPage = _useState2[1];\n    var formatDate = function(isoDate) {\n        var date = new Date(isoDate);\n        return date.toLocaleDateString('ko-KR', {\n            year: 'numeric',\n            month: '2-digit',\n            day: '2-digit'\n        }).replace(/\\. /g, '. ').slice(0, -1); // 공백 제거\n    };\n    var handleSortSelection = function(sortOption) {\n        setOrderBy(sortOption);\n    };\n    var handleSearch = function(searchKeyword) {\n        var query = (0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_11__._)({}, (next_router__WEBPACK_IMPORTED_MODULE_8___default().query));\n        if (searchKeyword.trim()) {\n            query.q = searchKeyword;\n        } else {\n            delete query.q; // Optional: 키워드가 빈 문자열일 때 URL에서 query string 없애주기\n        }\n        next_router__WEBPACK_IMPORTED_MODULE_8___default().replace({\n            pathname: (next_router__WEBPACK_IMPORTED_MODULE_8___default().pathname),\n            query: query\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"AllArticlesSection.useEffect\": function() {\n            {\n                var fetchAllArticles = {\n                    \"AllArticlesSection.useEffect.fetchAllArticles\": /*#__PURE__*/ (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_12__._)(function() {\n                        var data, error;\n                        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_13__._)(this, function(_state) {\n                            switch(_state.label){\n                                case 0:\n                                    _state.trys.push([\n                                        0,\n                                        2,\n                                        ,\n                                        3\n                                    ]);\n                                    return [\n                                        4,\n                                        (0,_api_boardApi__WEBPACK_IMPORTED_MODULE_3__.getAllArticles)(page, orderBy)\n                                    ];\n                                case 1:\n                                    data = _state.sent();\n                                    setArticles(data.list);\n                                    return [\n                                        3,\n                                        3\n                                    ];\n                                case 2:\n                                    error = _state.sent();\n                                    console.error('데이터를 불러오는데 실패 했습니다.', error);\n                                    return [\n                                        3,\n                                        3\n                                    ];\n                                case 3:\n                                    return [\n                                        2\n                                    ];\n                            }\n                        });\n                    })\n                }[\"AllArticlesSection.useEffect.fetchAllArticles\"];\n                fetchAllArticles();\n            }\n        }\n    }[\"AllArticlesSection.useEffect\"], [\n        orderBy\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_style_AllArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"all-section-header\"]),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_style_AllArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"all-title\"]),\n                        children: \"게시글\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\AllArticlesSection.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        className: (_style_AllArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_2___default().addArticlelink),\n                        href: \"/addArticle\",\n                        children: \"글쓰기\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\AllArticlesSection.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\AllArticlesSection.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_style_AllArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"all-section=header\"]),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SearchBar__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        onSearch: handleSearch\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\AllArticlesSection.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DropdownMenu__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        onSelection: handleSortSelection,\n                        sortOptions: [\n                            {\n                                key: 'recent',\n                                label: '최신순'\n                            },\n                            {\n                                key: 'like',\n                                label: '인기순'\n                            }\n                        ]\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\AllArticlesSection.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\AllArticlesSection.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this),\n            articles ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_style_AllArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"allarticle-list\"]),\n                children: articles.map(function(article) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_style_AllArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"allarticle-item\"]),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_style_AllArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"allarticle-body\"]),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: (_style_AllArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"allarticle-title\"]),\n                                        children: article.title\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\AllArticlesSection.tsx\",\n                                        lineNumber: 84,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                        width: 46,\n                                        height: 46,\n                                        src: article.image || '/images/Img_home_02.png',\n                                        alt: \"게시글 이미지\",\n                                        className: (_style_AllArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"allarticle-image\"])\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\AllArticlesSection.tsx\",\n                                        lineNumber: 85,\n                                        columnNumber: 17\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\AllArticlesSection.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_style_AllArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"allarticle-footer\"]),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_style_AllArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"allarticle-info\"]),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: (_style_AllArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"allarticle-writer\"]),\n                                                children: article.writer.nickname\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\AllArticlesSection.tsx\",\n                                                lineNumber: 95,\n                                                columnNumber: 19\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: (_style_AllArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"allarticle-updatedAt\"]),\n                                                children: formatDate(article.updatedAt)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\AllArticlesSection.tsx\",\n                                                lineNumber: 98,\n                                                columnNumber: 19\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\AllArticlesSection.tsx\",\n                                        lineNumber: 94,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_style_AllArticlesSection_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"allarticle-likes\"]),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_images_ic_heart_svg__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\AllArticlesSection.tsx\",\n                                                lineNumber: 103,\n                                                columnNumber: 19\n                                            }, _this),\n                                            article.likeCount\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\AllArticlesSection.tsx\",\n                                        lineNumber: 102,\n                                        columnNumber: 17\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\AllArticlesSection.tsx\",\n                                lineNumber: 93,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, article.id, true, {\n                        fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\AllArticlesSection.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 13\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\AllArticlesSection.tsx\",\n                lineNumber: 80,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"데이터를 불러오는 중...\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\AllArticlesSection.tsx\",\n                lineNumber: 111,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\src\\\\components\\\\boards\\\\AllArticlesSection.tsx\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, this);\n}\n_s(AllArticlesSection, \"U1DqltPo9eOQgWjB8JOeA1rJhjg=\");\n_c = AllArticlesSection;\nvar _c;\n$RefreshReg$(_c, \"AllArticlesSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ib2FyZHMvQWxsQXJ0aWNsZXNTZWN0aW9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFDbUI7QUFDWDtBQUN2QjtBQUNFO0FBQ2U7QUFDVDtBQUNKO0FBQ1U7QUFHNUIsU0FBU1U7OztJQUN0QixJQUFnQ1QsWUFBQUEsZ0VBQUFBLENBQUFBLCtDQUFRQSxDQUF1QixXQUF4RFUsV0FBeUJWLGNBQWZXLGNBQWVYO0lBQ2hDLElBQThCQSxhQUFBQSxnRUFBQUEsQ0FBQUEsK0NBQVFBLENBQWlCLGVBQWhEWSxVQUF1QlosZUFBZGEsYUFBY2I7SUFDOUIsSUFBd0JBLGFBQUFBLGdFQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxRQUExQmMsT0FBaUJkLGVBQVhlLFVBQVdmO0lBRXhCLElBQU1nQixhQUFhLFNBQUNDO1FBQ2xCLElBQU1DLE9BQU8sSUFBSUMsS0FBS0Y7UUFDdEIsT0FBT0MsS0FDSkUsa0JBQWtCLENBQUMsU0FBUztZQUMzQkMsTUFBTTtZQUNOQyxPQUFPO1lBQ1BDLEtBQUs7UUFDUCxHQUNDQyxPQUFPLENBQUMsUUFBUSxNQUNoQkMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLFFBQVE7SUFDM0I7SUFFQSxJQUFNQyxzQkFBc0IsU0FBQ0M7UUFDM0JkLFdBQVdjO0lBQ2I7SUFFQSxJQUFNQyxlQUFlLFNBQUNDO1FBQ3BCLElBQU1DLFFBQVEsbUVBQUt2QiwwREFBWTtRQUMvQixJQUFJc0IsY0FBY0UsSUFBSSxJQUFJO1lBQ3hCRCxNQUFNRSxDQUFDLEdBQUdIO1FBQ1osT0FBTztZQUNMLE9BQU9DLE1BQU1FLENBQUMsRUFBRSxrREFBa0Q7UUFDcEU7UUFDQXpCLDBEQUFjLENBQUM7WUFDYjBCLFVBQVUxQiw2REFBZTtZQUN6QnVCLE9BQUFBO1FBQ0Y7SUFDRjtJQUVBL0IsZ0RBQVNBO3dDQUFDO1lBQ1I7Z0JBQ0UsSUFBTW1DO3VKQUFtQjs0QkFFZkMsTUFFQ0M7Ozs7Ozs7Ozs7b0NBRk07O3dDQUFNbEMsNkRBQWNBLENBQUNZLE1BQU1GOzs7b0NBQWxDdUIsT0FBTztvQ0FDYnhCLFlBQVl3QixLQUFLRSxJQUFJOzs7Ozs7b0NBQ2REO29DQUNQRSxRQUFRRixLQUFLLENBQUMsdUJBQXVCQTs7Ozs7Ozs7Ozs7b0JBRXpDOztnQkFFQUY7WUFDRjtRQUNGO3VDQUFHO1FBQUN0QjtLQUFRO0lBRVoscUJBQ0UsOERBQUMyQjs7MEJBQ0MsOERBQUNBO2dCQUFJQyxXQUFXdkMsbUdBQTRCOztrQ0FDMUMsOERBQUNzQzt3QkFBSUMsV0FBV3ZDLDBGQUFtQjtrQ0FBRTs7Ozs7O2tDQUNyQyw4REFBQ0Usa0RBQUlBO3dCQUFDcUMsV0FBV3ZDLDRGQUF3Qjt3QkFBRXdDLE1BQUs7a0NBQWM7Ozs7Ozs7Ozs7OzswQkFJaEUsOERBQUNGO2dCQUFJQyxXQUFXdkMsbUdBQTRCOztrQ0FDMUMsOERBQUNLLGtEQUFTQTt3QkFBQ29DLFVBQVVkOzs7Ozs7a0NBQ3JCLDhEQUFDcEIscURBQVlBO3dCQUNYbUMsYUFBYWpCO3dCQUNia0IsYUFBYTs0QkFDWDtnQ0FBRUMsS0FBSztnQ0FBVUMsT0FBTzs0QkFBTTs0QkFDOUI7Z0NBQUVELEtBQUs7Z0NBQVFDLE9BQU87NEJBQU07eUJBQzdCOzs7Ozs7Ozs7Ozs7WUFHSnBDLHlCQUNDLDhEQUFDNkI7Z0JBQUlDLFdBQVd2QyxnR0FBeUI7MEJBQ3RDUyxTQUFTcUMsR0FBRyxDQUFDLFNBQUNDO3lDQUNiLDhEQUFDVDt3QkFBcUJDLFdBQVd2QyxnR0FBeUI7OzBDQUN4RCw4REFBQ3NDO2dDQUFJQyxXQUFXdkMsZ0dBQXlCOztrREFDdkMsOERBQUNnRDt3Q0FBR1QsV0FBV3ZDLGlHQUEwQjtrREFBRytDLFFBQVFFLEtBQUs7Ozs7OztrREFDekQsOERBQUM5QyxtREFBS0E7d0NBQ0orQyxPQUFPO3dDQUNQQyxRQUFRO3dDQUNSQyxLQUFLTCxRQUFRTSxLQUFLLElBQUk7d0NBQ3RCQyxLQUFJO3dDQUNKZixXQUFXdkMsaUdBQTBCOzs7Ozs7Ozs7Ozs7MENBR3pDLDhEQUFDc0M7Z0NBQUlDLFdBQVd2QyxrR0FBMkI7O2tEQUN6Qyw4REFBQ3NDO3dDQUFJQyxXQUFXdkMsZ0dBQXlCOzswREFDdkMsOERBQUN1RDtnREFBS2hCLFdBQVd2QyxrR0FBMkI7MERBQ3pDK0MsUUFBUVMsTUFBTSxDQUFDQyxRQUFROzs7Ozs7MERBRTFCLDhEQUFDRjtnREFBS2hCLFdBQVd2QyxxR0FBOEI7MERBQzVDZSxXQUFXZ0MsUUFBUVcsU0FBUzs7Ozs7Ozs7Ozs7O2tEQUdqQyw4REFBQ0g7d0NBQUtoQixXQUFXdkMsaUdBQTBCOzswREFDekMsOERBQUNJLDREQUFLQTs7Ozs7NENBQ0wyQyxRQUFRWSxTQUFTOzs7Ozs7Ozs7Ozs7Ozt1QkF0QmRaLFFBQVFhLEVBQUU7Ozs7Ozs7Ozs7cUNBNkJ4Qiw4REFBQ3RCOzBCQUFJOzs7Ozs7Ozs7Ozs7QUFJYjtHQXZHd0I5QjtLQUFBQSIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxiaG9oXFxEZXNrdG9wXFxGRV9TcHJpbnRfTWlzc2lvblxcMTEtU3ByaW50LU1pc3Npb25cXHNyY1xcY29tcG9uZW50c1xcYm9hcmRzXFxBbGxBcnRpY2xlc1NlY3Rpb24udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGUvQWxsQXJ0aWNsZXNTZWN0aW9uLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgeyBnZXRBbGxBcnRpY2xlcyB9IGZyb20gJy4uLy4uL2FwaS9ib2FyZEFwaSc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IEhlYXJ0IGZyb20gJy4uLy4uL2ltYWdlcy9pY19oZWFydC5zdmcnO1xyXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJy4uL1NlYXJjaEJhcic7XHJcbmltcG9ydCByb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgRHJvcGRvd25NZW51IGZyb20gJy4uL0Ryb3Bkb3duTWVudSc7XHJcbmltcG9ydCB7IEFydGljbGVMaXN0LCBBcnRpY2xlT3JkZXJCeSB9IGZyb20gJy4uL3R5cGVzL2FydGljbGVUeXBlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBbGxBcnRpY2xlc1NlY3Rpb24oKSB7XHJcbiAgY29uc3QgW2FydGljbGVzLCBzZXRBcnRpY2xlc10gPSB1c2VTdGF0ZTxBcnRpY2xlTGlzdFtdIHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgW29yZGVyQnksIHNldE9yZGVyQnldID0gdXNlU3RhdGU8QXJ0aWNsZU9yZGVyQnk+KCdyZWNlbnQnKTtcclxuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZSgxKTtcclxuXHJcbiAgY29uc3QgZm9ybWF0RGF0ZSA9IChpc29EYXRlOiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShpc29EYXRlKTtcclxuICAgIHJldHVybiBkYXRlXHJcbiAgICAgIC50b0xvY2FsZURhdGVTdHJpbmcoJ2tvLUtSJywge1xyXG4gICAgICAgIHllYXI6ICdudW1lcmljJyxcclxuICAgICAgICBtb250aDogJzItZGlnaXQnLFxyXG4gICAgICAgIGRheTogJzItZGlnaXQnLFxyXG4gICAgICB9KVxyXG4gICAgICAucmVwbGFjZSgvXFwuIC9nLCAnLiAnKVxyXG4gICAgICAuc2xpY2UoMCwgLTEpOyAvLyDqs7XrsLEg7KCc6rGwXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU29ydFNlbGVjdGlvbiA9IChzb3J0T3B0aW9uOiBBcnRpY2xlU29ydE9wdGlvbikgPT4ge1xyXG4gICAgc2V0T3JkZXJCeShzb3J0T3B0aW9uKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTZWFyY2ggPSAoc2VhcmNoS2V5d29yZDogc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCBxdWVyeSA9IHsgLi4ucm91dGVyLnF1ZXJ5IH07XHJcbiAgICBpZiAoc2VhcmNoS2V5d29yZC50cmltKCkpIHtcclxuICAgICAgcXVlcnkucSA9IHNlYXJjaEtleXdvcmQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkZWxldGUgcXVlcnkucTsgLy8gT3B0aW9uYWw6IO2CpOybjOuTnOqwgCDruYgg66y47J6Q7Je07J28IOuVjCBVUkzsl5DshJwgcXVlcnkgc3RyaW5nIOyXhuyVoOyjvOq4sFxyXG4gICAgfVxyXG4gICAgcm91dGVyLnJlcGxhY2Uoe1xyXG4gICAgICBwYXRobmFtZTogcm91dGVyLnBhdGhuYW1lLFxyXG4gICAgICBxdWVyeSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB7XHJcbiAgICAgIGNvbnN0IGZldGNoQWxsQXJ0aWNsZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRBbGxBcnRpY2xlcyhwYWdlLCBvcmRlckJ5KTtcclxuICAgICAgICAgIHNldEFydGljbGVzKGRhdGEubGlzdCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ+uNsOydtO2EsOulvCDrtojrn6zsmKTripTrjbAg7Iuk7YyoIO2WiOyKteuLiOuLpC4nLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgZmV0Y2hBbGxBcnRpY2xlcygpO1xyXG4gICAgfVxyXG4gIH0sIFtvcmRlckJ5XSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydhbGwtc2VjdGlvbi1oZWFkZXInXX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snYWxsLXRpdGxlJ119PuqyjOyLnOq4gDwvZGl2PlxyXG4gICAgICAgIDxMaW5rIGNsYXNzTmFtZT17c3R5bGVzWydhZGRBcnRpY2xlbGluayddfSBocmVmPVwiL2FkZEFydGljbGVcIj5cclxuICAgICAgICAgIOq4gOyTsOq4sFxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2FsbC1zZWN0aW9uPWhlYWRlciddfT5cclxuICAgICAgICA8U2VhcmNoQmFyIG9uU2VhcmNoPXtoYW5kbGVTZWFyY2h9IC8+XHJcbiAgICAgICAgPERyb3Bkb3duTWVudVxyXG4gICAgICAgICAgb25TZWxlY3Rpb249e2hhbmRsZVNvcnRTZWxlY3Rpb259XHJcbiAgICAgICAgICBzb3J0T3B0aW9ucz17W1xyXG4gICAgICAgICAgICB7IGtleTogJ3JlY2VudCcsIGxhYmVsOiAn7LWc7Iug7IicJyB9LFxyXG4gICAgICAgICAgICB7IGtleTogJ2xpa2UnLCBsYWJlbDogJ+yduOq4sOyInCcgfSxcclxuICAgICAgICAgIF19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHthcnRpY2xlcyA/IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydhbGxhcnRpY2xlLWxpc3QnXX0+XHJcbiAgICAgICAgICB7YXJ0aWNsZXMubWFwKChhcnRpY2xlKSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXthcnRpY2xlLmlkfSBjbGFzc05hbWU9e3N0eWxlc1snYWxsYXJ0aWNsZS1pdGVtJ119PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2FsbGFydGljbGUtYm9keSddfT5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlc1snYWxsYXJ0aWNsZS10aXRsZSddfT57YXJ0aWNsZS50aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXs0Nn1cclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs0Nn1cclxuICAgICAgICAgICAgICAgICAgc3JjPXthcnRpY2xlLmltYWdlIHx8ICcvaW1hZ2VzL0ltZ19ob21lXzAyLnBuZyd9XHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIuqyjOyLnOq4gCDsnbTrr7jsp4BcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1snYWxsYXJ0aWNsZS1pbWFnZSddfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydhbGxhcnRpY2xlLWZvb3RlciddfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2FsbGFydGljbGUtaW5mbyddfT5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXNbJ2FsbGFydGljbGUtd3JpdGVyJ119PlxyXG4gICAgICAgICAgICAgICAgICAgIHthcnRpY2xlLndyaXRlci5uaWNrbmFtZX1cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlc1snYWxsYXJ0aWNsZS11cGRhdGVkQXQnXX0+XHJcbiAgICAgICAgICAgICAgICAgICAge2Zvcm1hdERhdGUoYXJ0aWNsZS51cGRhdGVkQXQpfVxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzWydhbGxhcnRpY2xlLWxpa2VzJ119PlxyXG4gICAgICAgICAgICAgICAgICA8SGVhcnQgLz5cclxuICAgICAgICAgICAgICAgICAge2FydGljbGUubGlrZUNvdW50fVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxkaXY+642w7J207YSw66W8IOu2iOufrOyYpOuKlCDspJEuLi48L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiZ2V0QWxsQXJ0aWNsZXMiLCJMaW5rIiwiSW1hZ2UiLCJIZWFydCIsIlNlYXJjaEJhciIsInJvdXRlciIsIkRyb3Bkb3duTWVudSIsIkFsbEFydGljbGVzU2VjdGlvbiIsImFydGljbGVzIiwic2V0QXJ0aWNsZXMiLCJvcmRlckJ5Iiwic2V0T3JkZXJCeSIsInBhZ2UiLCJzZXRQYWdlIiwiZm9ybWF0RGF0ZSIsImlzb0RhdGUiLCJkYXRlIiwiRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsInllYXIiLCJtb250aCIsImRheSIsInJlcGxhY2UiLCJzbGljZSIsImhhbmRsZVNvcnRTZWxlY3Rpb24iLCJzb3J0T3B0aW9uIiwiaGFuZGxlU2VhcmNoIiwic2VhcmNoS2V5d29yZCIsInF1ZXJ5IiwidHJpbSIsInEiLCJwYXRobmFtZSIsImZldGNoQWxsQXJ0aWNsZXMiLCJkYXRhIiwiZXJyb3IiLCJsaXN0IiwiY29uc29sZSIsImRpdiIsImNsYXNzTmFtZSIsImhyZWYiLCJvblNlYXJjaCIsIm9uU2VsZWN0aW9uIiwic29ydE9wdGlvbnMiLCJrZXkiLCJsYWJlbCIsIm1hcCIsImFydGljbGUiLCJoMiIsInRpdGxlIiwid2lkdGgiLCJoZWlnaHQiLCJzcmMiLCJpbWFnZSIsImFsdCIsInNwYW4iLCJ3cml0ZXIiLCJuaWNrbmFtZSIsInVwZGF0ZWRBdCIsImxpa2VDb3VudCIsImlkIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/boards/AllArticlesSection.tsx\n"));

/***/ })

});