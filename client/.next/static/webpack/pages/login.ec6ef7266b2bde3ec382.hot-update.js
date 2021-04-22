webpackHotUpdate_N_E("pages/login",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Jacob_Desktop_Hardware_Inventory_App_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Jacob_Desktop_Hardware_Inventory_App_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Jacob_Desktop_Hardware_Inventory_App_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Jacob_Desktop_Hardware_Inventory_App_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase */ "./firebase.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_LoginRegisterForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/LoginRegisterForm */ "./components/LoginRegisterForm.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);




var _jsxFileName = "C:\\Users\\Jacob\\Desktop\\Hardware-Inventory-App\\client\\pages\\login.js",
    _this = undefined,
    _s = $RefreshSig$();










var Login = function Login() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      loginEmail = _useState[0],
      setLoginEmail = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      loginPass = _useState2[0],
      setLoginPass = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      registerEmail = _useState3[0],
      setRegisterEmail = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      registerPass = _useState4[0],
      setRegisterPass = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      loading = _useState5[0],
      setLoading = _useState5[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();

  var register = /*#__PURE__*/function () {
    var _ref = Object(C_Users_Jacob_Desktop_Hardware_Inventory_App_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Jacob_Desktop_Hardware_Inventory_App_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      return C_Users_Jacob_Desktop_Hardware_Inventory_App_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              //console.log(registerEmail, registerPass)
              setLoading(true);
              _context.next = 3;
              return _firebase__WEBPACK_IMPORTED_MODULE_3__["default"].auth().createUserWithEmailAndPassword(registerEmail, registerPass).then(function (user) {
                console.log("REGISTER", user);
                router.push;
              })["catch"](function (err) {
                console.log(err);
                Object(react_toastify__WEBPACK_IMPORTED_MODULE_7__["toast"])(err.message);
                setLoading(false);
              });

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function register() {
      return _ref.apply(this, arguments);
    };
  }();

  var login = /*#__PURE__*/function () {
    var _ref2 = Object(C_Users_Jacob_Desktop_Hardware_Inventory_App_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Jacob_Desktop_Hardware_Inventory_App_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
      return C_Users_Jacob_Desktop_Hardware_Inventory_App_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              //console.log(loginEmail, loginPass)
              setLoading(true);
              _context2.next = 3;
              return _firebase__WEBPACK_IMPORTED_MODULE_3__["default"].auth().signInWithEmailAndPassword(loginEmail, loginPass).then(function (user) {
                console.log("LOGIN", user);
                router.push("/");
              })["catch"](function (err) {
                console.log(err);
                Object(react_toastify__WEBPACK_IMPORTED_MODULE_7__["toast"])(err.message);
                setLoading(false);
              });

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function login() {
      return _ref2.apply(this, arguments);
    };
  }();

  var googleLogin = /*#__PURE__*/function () {
    var _ref3 = Object(C_Users_Jacob_Desktop_Hardware_Inventory_App_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Jacob_Desktop_Hardware_Inventory_App_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
      return C_Users_Jacob_Desktop_Hardware_Inventory_App_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _firebase__WEBPACK_IMPORTED_MODULE_3__["default"].auth().signInWithPopup(new _firebase__WEBPACK_IMPORTED_MODULE_3__["default"].auth.GoogleAuthProvider()).then(function (user) {
                console.log("LOGIN", user);
                router.push("/");
              })["catch"](function (err) {
                console.log(err);
                Object(react_toastify__WEBPACK_IMPORTED_MODULE_7__["toast"])(err.message);
              });

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function googleLogin() {
      return _ref3.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "container",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      className: "text-center pt-4 display-4",
      children: "Welcome to the Hardware Inventory App!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      className: "text-center pt-8 display-6",
      children: loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["SyncOutlined"], {
        spin: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 61
      }, _this) : "Please Login / Register"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_9__["Button"], {
      onClick: googleLogin,
      className: "mb-3 col-md-6 offset-md-3",
      type: "danger",
      shape: "round",
      icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["GoogleOutlined"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 15
      }, _this),
      size: "large",
      block: "true",
      children: "Login with Google"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LoginRegisterForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
        email: loginEmail,
        setEmail: setLoginEmail,
        pass: loginPass,
        setPass: setLoginPass,
        handleSubmit: login,
        buttonName: "Login"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LoginRegisterForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
        email: registerEmail,
        setEmail: setRegisterEmail,
        pass: registerPass,
        setPass: setRegisterPass,
        handleSubmit: register,
        buttonName: "Register"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "d-flex",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "/reset/password",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "btn btn-outline-danger btn-sm mt-5",
          children: "Reset Password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 5
  }, _this);
};

_s(Login, "nj7/kGG49CD2+l8ZXpv/dWkOCMw=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

_c = Login;
/* harmony default export */ __webpack_exports__["default"] = (Login);

var _c;

$RefreshReg$(_c, "Login");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanMiXSwibmFtZXMiOlsiTG9naW4iLCJ1c2VTdGF0ZSIsImxvZ2luRW1haWwiLCJzZXRMb2dpbkVtYWlsIiwibG9naW5QYXNzIiwic2V0TG9naW5QYXNzIiwicmVnaXN0ZXJFbWFpbCIsInNldFJlZ2lzdGVyRW1haWwiLCJyZWdpc3RlclBhc3MiLCJzZXRSZWdpc3RlclBhc3MiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJvdXRlciIsInVzZVJvdXRlciIsInJlZ2lzdGVyIiwiZmlyZWJhc2UiLCJhdXRoIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwidGhlbiIsInVzZXIiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsImVyciIsInRvYXN0IiwibWVzc2FnZSIsImxvZ2luIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJnb29nbGVMb2dpbiIsInNpZ25JbldpdGhQb3B1cCIsIkdvb2dsZUF1dGhQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFBQSxrQkFDa0JDLHNEQUFRLENBQUMsRUFBRCxDQUQxQjtBQUFBLE1BQ1hDLFVBRFc7QUFBQSxNQUNDQyxhQUREOztBQUFBLG1CQUVnQkYsc0RBQVEsQ0FBQyxFQUFELENBRnhCO0FBQUEsTUFFWEcsU0FGVztBQUFBLE1BRUFDLFlBRkE7O0FBQUEsbUJBR3dCSixzREFBUSxDQUFDLEVBQUQsQ0FIaEM7QUFBQSxNQUdYSyxhQUhXO0FBQUEsTUFHSUMsZ0JBSEo7O0FBQUEsbUJBSXNCTixzREFBUSxDQUFDLEVBQUQsQ0FKOUI7QUFBQSxNQUlYTyxZQUpXO0FBQUEsTUFJR0MsZUFKSDs7QUFBQSxtQkFLWVIsc0RBQVEsQ0FBQyxLQUFE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YWdlcy9sb2dpbi5lYzZlZjcyNjZiMmJkZTNlYzM4Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZpcmViYXNlIGZyb20gXCIuLi9maXJlYmFzZVwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IExvZ2luUmVnaXN0ZXJGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL0xvZ2luUmVnaXN0ZXJGb3JtXCI7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcbmltcG9ydCB7IEdvb2dsZU91dGxpbmVkLCBTeW5jT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcclxuICBjb25zdCBbbG9naW5FbWFpbCwgc2V0TG9naW5FbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbG9naW5QYXNzLCBzZXRMb2dpblBhc3NdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3JlZ2lzdGVyRW1haWwsIHNldFJlZ2lzdGVyRW1haWxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3JlZ2lzdGVyUGFzcywgc2V0UmVnaXN0ZXJQYXNzXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgcmVnaXN0ZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAvL2NvbnNvbGUubG9nKHJlZ2lzdGVyRW1haWwsIHJlZ2lzdGVyUGFzcylcclxuICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgIGF3YWl0IGZpcmViYXNlXHJcbiAgICAgIC5hdXRoKClcclxuICAgICAgLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChyZWdpc3RlckVtYWlsLCByZWdpc3RlclBhc3MpXHJcbiAgICAgIC50aGVuKCh1c2VyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJSRUdJU1RFUlwiLCB1c2VyKTtcclxuICAgICAgICByb3V0ZXIucHVzaFxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgdG9hc3QoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGxvZ2luID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgLy9jb25zb2xlLmxvZyhsb2dpbkVtYWlsLCBsb2dpblBhc3MpXHJcbiAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICBhd2FpdCBmaXJlYmFzZVxyXG4gICAgICAuYXV0aCgpXHJcbiAgICAgIC5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChsb2dpbkVtYWlsLCBsb2dpblBhc3MpXHJcbiAgICAgIC50aGVuKCh1c2VyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJMT0dJTlwiLCB1c2VyKTtcclxuICAgICAgICByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB0b2FzdChlcnIubWVzc2FnZSk7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ29vZ2xlTG9naW4gPSBhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCBmaXJlYmFzZS5hdXRoKCkuc2lnbkluV2l0aFBvcHVwKG5ldyBmaXJlYmFzZS5hdXRoLkdvb2dsZUF1dGhQcm92aWRlcigpKVxyXG4gICAgICAudGhlbigodXNlcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTE9HSU5cIiwgdXNlcik7XHJcbiAgICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgdG9hc3QoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB0LTQgZGlzcGxheS00XCI+V2VsY29tZSB0byB0aGUgSGFyZHdhcmUgSW52ZW50b3J5IEFwcCE8L2gyPlxyXG4gICAgICA8aHI+PC9ocj5cclxuICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB0LTggZGlzcGxheS02XCI+e2xvYWRpbmcgPyA8U3luY091dGxpbmVkIHNwaW4gLz4gOiBcIlBsZWFzZSBMb2dpbiAvIFJlZ2lzdGVyXCJ9PC9oMz5cclxuXHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgICBvbkNsaWNrPXtnb29nbGVMb2dpbn1cclxuICAgICAgICBjbGFzc05hbWU9XCJtYi0zIGNvbC1tZC02IG9mZnNldC1tZC0zXCJcclxuICAgICAgICB0eXBlPVwiZGFuZ2VyXCJcclxuICAgICAgICBzaGFwZT1cInJvdW5kXCJcclxuICAgICAgICBpY29uPXs8R29vZ2xlT3V0bGluZWQgLz59XHJcbiAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICBibG9jaz1cInRydWVcIlxyXG4gICAgICA+XHJcbiAgICAgICAgTG9naW4gd2l0aCBHb29nbGVcclxuICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgIDxMb2dpblJlZ2lzdGVyRm9ybVxyXG4gICAgICAgICAgZW1haWw9e2xvZ2luRW1haWx9XHJcbiAgICAgICAgICBzZXRFbWFpbD17c2V0TG9naW5FbWFpbH1cclxuICAgICAgICAgIHBhc3M9e2xvZ2luUGFzc31cclxuICAgICAgICAgIHNldFBhc3M9e3NldExvZ2luUGFzc31cclxuICAgICAgICAgIGhhbmRsZVN1Ym1pdD17bG9naW59XHJcbiAgICAgICAgICBidXR0b25OYW1lPVwiTG9naW5cIlxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxMb2dpblJlZ2lzdGVyRm9ybVxyXG4gICAgICAgICAgZW1haWw9e3JlZ2lzdGVyRW1haWx9XHJcbiAgICAgICAgICBzZXRFbWFpbD17c2V0UmVnaXN0ZXJFbWFpbH1cclxuICAgICAgICAgIHBhc3M9e3JlZ2lzdGVyUGFzc31cclxuICAgICAgICAgIHNldFBhc3M9e3NldFJlZ2lzdGVyUGFzc31cclxuICAgICAgICAgIGhhbmRsZVN1Ym1pdD17cmVnaXN0ZXJ9XHJcbiAgICAgICAgICBidXR0b25OYW1lPVwiUmVnaXN0ZXJcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXhcIj5cclxuICAgICAgICA8TGluayBocmVmPVwiL3Jlc2V0L3Bhc3N3b3JkXCI+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtZGFuZ2VyIGJ0bi1zbSBtdC01XCI+UmVzZXQgUGFzc3dvcmQ8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==