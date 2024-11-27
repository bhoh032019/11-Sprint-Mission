/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./styles/Header.module.css":
/*!**********************************!*\
  !*** ./styles/Header.module.css ***!
  \**********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"navbar\": \"Header_navbar__g1l5B\",\n\t\"nav-front\": \"Header_nav-front__6_rhR\",\n\t\"nav-link\": \"Header_nav-link__fSFcT\",\n\t\"nav-list\": \"Header_nav-list__me74Q\",\n\t\"active-link\": \"Header_active-link__SaFnJ\",\n\t\"login\": \"Header_login__rJBZS\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSGVhZGVyLm1vZHVsZS5jc3MiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGJob2hcXERlc2t0b3BcXEZFX1NwcmludF9NaXNzaW9uXFwxMS1TcHJpbnQtTWlzc2lvblxcc3R5bGVzXFxIZWFkZXIubW9kdWxlLmNzcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJuYXZiYXJcIjogXCJIZWFkZXJfbmF2YmFyX19nMWw1QlwiLFxuXHRcIm5hdi1mcm9udFwiOiBcIkhlYWRlcl9uYXYtZnJvbnRfXzZfcmhSXCIsXG5cdFwibmF2LWxpbmtcIjogXCJIZWFkZXJfbmF2LWxpbmtfX2ZTRmNUXCIsXG5cdFwibmF2LWxpc3RcIjogXCJIZWFkZXJfbmF2LWxpc3RfX21lNzRRXCIsXG5cdFwiYWN0aXZlLWxpbmtcIjogXCJIZWFkZXJfYWN0aXZlLWxpbmtfX1NhRm5KXCIsXG5cdFwibG9naW5cIjogXCJIZWFkZXJfbG9naW5fX3JKQlpTXCJcbn07XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/Header.module.css\n");

/***/ }),

/***/ "./components/Layout/Header.tsx":
/*!**************************************!*\
  !*** ./components/Layout/Header.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/Header.module.css */ \"./styles/Header.module.css\");\n/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst Header = ()=>{\n    const { pathname } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().navbar),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"nav-front\"]),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                src: \"/svgs/ic_logo.svg\",\n                                alt: \"판다마켓 로고\",\n                                width: 100,\n                                height: 50\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\components\\\\Layout\\\\Header.tsx\",\n                                lineNumber: 14,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\components\\\\Layout\\\\Header.tsx\",\n                            lineNumber: 13,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"nav-link\"]),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"nav-list\"]),\n                                    href: \"/boards\",\n                                    children: \"자유게시판\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\components\\\\Layout\\\\Header.tsx\",\n                                    lineNumber: 22,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/items\",\n                                    className: pathname === '/items' || pathname === '/additem' ? (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"active-link nav-list\"]) : (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"nav-list\"]),\n                                    children: \"중고마켓\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\components\\\\Layout\\\\Header.tsx\",\n                                    lineNumber: 25,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\components\\\\Layout\\\\Header.tsx\",\n                            lineNumber: 21,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\components\\\\Layout\\\\Header.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().login),\n                    href: \"/signin\",\n                    children: \"로그인\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\components\\\\Layout\\\\Header.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\components\\\\Layout\\\\Header.tsx\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC9IZWFkZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNXO0FBQ1k7QUFDckI7QUFFL0IsTUFBTUksU0FBUztJQUNiLE1BQU0sRUFBRUMsUUFBUSxFQUFFLEdBQUdKLHNEQUFTQTtJQUU5QixxQkFDRTtrQkFDRSw0RUFBQ0s7WUFBSUMsV0FBV0wseUVBQWE7OzhCQUMzQiw4REFBQ087b0JBQUlGLFdBQVdMLCtFQUFtQjs7c0NBQ2pDLDhEQUFDRixrREFBSUE7NEJBQUNVLE1BQUs7c0NBQ1QsNEVBQUNQLG1EQUFLQTtnQ0FDSlEsS0FBSTtnQ0FDSkMsS0FBSTtnQ0FDSkMsT0FBTztnQ0FDUEMsUUFBUTs7Ozs7Ozs7Ozs7c0NBR1osOERBQUNMOzRCQUFJRixXQUFXTCw4RUFBa0I7OzhDQUNoQyw4REFBQ0Ysa0RBQUlBO29DQUFDTyxXQUFXTCw4RUFBa0I7b0NBQUVRLE1BQUs7OENBQVU7Ozs7Ozs4Q0FHcEQsOERBQUNWLGtEQUFJQTtvQ0FDSFUsTUFBSztvQ0FDTEgsV0FDRUYsYUFBYSxZQUFZQSxhQUFhLGFBQ2xDSCwwRkFBOEIsR0FDOUJBLDhFQUFrQjs4Q0FFekI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFLTCw4REFBQ0Ysa0RBQUlBO29CQUFDTyxXQUFXTCx3RUFBZTtvQkFBRVEsTUFBSzs4QkFBVTs7Ozs7Ozs7Ozs7OztBQU16RDtBQUVBLGlFQUFlTixNQUFNQSxFQUFDIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGJob2hcXERlc2t0b3BcXEZFX1NwcmludF9NaXNzaW9uXFwxMS1TcHJpbnQtTWlzc2lvblxcY29tcG9uZW50c1xcTGF5b3V0XFxIZWFkZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvSGVhZGVyLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLm5hdmJhcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snbmF2LWZyb250J119PlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgc3JjPVwiL3N2Z3MvaWNfbG9nby5zdmdcIlxyXG4gICAgICAgICAgICAgIGFsdD1cIu2MkOuLpOuniOy8kyDroZzqs6BcIlxyXG4gICAgICAgICAgICAgIHdpZHRoPXsxMDB9XHJcbiAgICAgICAgICAgICAgaGVpZ2h0PXs1MH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ25hdi1saW5rJ119PlxyXG4gICAgICAgICAgICA8TGluayBjbGFzc05hbWU9e3N0eWxlc1snbmF2LWxpc3QnXX0gaHJlZj1cIi9ib2FyZHNcIj5cclxuICAgICAgICAgICAgICDsnpDsnKDqsozsi5ztjJBcclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgIGhyZWY9XCIvaXRlbXNcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICBwYXRobmFtZSA9PT0gJy9pdGVtcycgfHwgcGF0aG5hbWUgPT09ICcvYWRkaXRlbSdcclxuICAgICAgICAgICAgICAgICAgPyBzdHlsZXNbJ2FjdGl2ZS1saW5rIG5hdi1saXN0J11cclxuICAgICAgICAgICAgICAgICAgOiBzdHlsZXNbJ25hdi1saXN0J11cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICDspJHqs6Drp4jsvJNcclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPExpbmsgY2xhc3NOYW1lPXtzdHlsZXNbJ2xvZ2luJ119IGhyZWY9XCIvc2lnbmluXCI+XHJcbiAgICAgICAgICDroZzqt7jsnbhcclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VSb3V0ZXIiLCJzdHlsZXMiLCJJbWFnZSIsIkhlYWRlciIsInBhdGhuYW1lIiwibmF2IiwiY2xhc3NOYW1lIiwibmF2YmFyIiwiZGl2IiwiaHJlZiIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Layout/Header.tsx\n");

/***/ }),

/***/ "./components/Layout/Layout.tsx":
/*!**************************************!*\
  !*** ./components/Layout/Layout.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ \"./components/Layout/Header.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst Layout = ({ children })=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const isAuthPage = router.pathname === '/login' || router.pathname === '/signup';\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            !isAuthPage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\components\\\\Layout\\\\Layout.tsx\",\n                lineNumber: 16,\n                columnNumber: 23\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: isAuthPage ? '' : 'withHeader',\n                children: children\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\components\\\\Layout\\\\Layout.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC9MYXlvdXQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF5QztBQUNYO0FBQ1U7QUFNeEMsTUFBTUcsU0FBZ0MsQ0FBQyxFQUFFQyxRQUFRLEVBQUU7SUFDakQsTUFBTUMsU0FBU0gsc0RBQVNBO0lBQ3hCLE1BQU1JLGFBQ0pELE9BQU9FLFFBQVEsS0FBSyxZQUFZRixPQUFPRSxRQUFRLEtBQUs7SUFFdEQscUJBQ0U7O1lBQ0csQ0FBQ0QsNEJBQWMsOERBQUNMLCtDQUFNQTs7Ozs7MEJBQ3ZCLDhEQUFDTztnQkFBS0MsV0FBV0gsYUFBYSxLQUFLOzBCQUFlRjs7Ozs7Ozs7QUFHeEQ7QUFFQSxpRUFBZUQsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxiaG9oXFxEZXNrdG9wXFxGRV9TcHJpbnRfTWlzc2lvblxcMTEtU3ByaW50LU1pc3Npb25cXGNvbXBvbmVudHNcXExheW91dFxcTGF5b3V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuaW50ZXJmYWNlIExheW91dFByb3BzIHtcclxuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xyXG59XHJcblxyXG5jb25zdCBMYXlvdXQ6IFJlYWN0LkZDPExheW91dFByb3BzPiA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBpc0F1dGhQYWdlID1cclxuICAgIHJvdXRlci5wYXRobmFtZSA9PT0gJy9sb2dpbicgfHwgcm91dGVyLnBhdGhuYW1lID09PSAnL3NpZ251cCc7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7IWlzQXV0aFBhZ2UgJiYgPEhlYWRlciAvPn1cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtpc0F1dGhQYWdlID8gJycgOiAnd2l0aEhlYWRlcid9PntjaGlsZHJlbn08L21haW4+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJIZWFkZXIiLCJ1c2VSb3V0ZXIiLCJMYXlvdXQiLCJjaGlsZHJlbiIsInJvdXRlciIsImlzQXV0aFBhZ2UiLCJwYXRobmFtZSIsIm1haW4iLCJjbGFzc05hbWUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Layout/Layout.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout/Layout */ \"./components/Layout/Layout.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\pages\\\\_app.tsx\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\bhoh\\\\Desktop\\\\FE_Sprint_Mission\\\\11-Sprint-Mission\\\\pages\\\\_app.tsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ2lEO0FBQ3ZCO0FBRVgsU0FBU0UsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBWTtJQUM1RCxxQkFDRTtrQkFDRSw0RUFBQ0osaUVBQU1BO3NCQUNMLDRFQUFDRztnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7QUFJaEMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYmhvaFxcRGVza3RvcFxcRkVfU3ByaW50X01pc3Npb25cXDExLVNwcmludC1NaXNzaW9uXFxwYWdlc1xcX2FwcC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0JztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkxheW91dCIsIlJlYWN0IiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.tsx")));
module.exports = __webpack_exports__;

})();