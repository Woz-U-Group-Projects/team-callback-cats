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
                router.push("/login");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanMiXSwibmFtZXMiOlsiTG9naW4iLCJ1c2VTdGF0ZSIsImxvZ2luRW1haWwiLCJzZXRMb2dpbkVtYWlsIiwibG9naW5QYXNzIiwic2V0TG9naW5QYXNzIiwicmVnaXN0ZXJFbWFpbCIsInNldFJlZ2lzdGVyRW1haWwiLCJyZWdpc3RlclBhc3MiLCJzZXRSZWdpc3RlclBhc3MiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJvdXRlciIsInVzZVJvdXRlciIsInJlZ2lzdGVyIiwiZmlyZWJhc2UiLCJhdXRoIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwidGhlbiIsInVzZXIiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsImVyciIsInRvYXN0IiwibWVzc2FnZSIsImxvZ2luIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJnb29nbGVMb2dpbiIsInNpZ25JbldpdGhQb3B1cCIsIkdvb2dsZUF1dGhQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFBQSxrQkFDa0JDLHNEQUFRLENBQUMsRUFBRCxDQUQxQjtBQUFBLE1BQ1hDLFVBRFc7QUFBQSxNQUNDQyxhQUREOztBQUFBLG1CQUVnQkYsc0RBQVEsQ0FBQyxFQUFELENBRnhCO0FBQUEsTUFFWEcsU0FGVztBQUFBLE1BRUFDLFlBRkE7O0FBQUEsbUJBR3dCSixzREFBUSxDQUFDLEVBQUQsQ0FIaEM7QUFBQSxNQUdYSyxhQUhXO0FBQUEsTUFHSUMsZ0JBSEo7O0FBQUEsbUJBSXNCTixzREFBUSxDQUFDLEVBQUQsQ0FKOUI7QUFBQSxNQUlYTyxZQUpXO0FBQUEsTUFJR0MsZUFKSDs7QUFBQSxtQkFLWVIsc0RBQVEsQ0FBQyxLQUFE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L3dlYnBhY2svcGFnZXMvbG9naW4uODliODlkZWFkNzk5MTAwYjI5YzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaXJlYmFzZSBmcm9tIFwiLi4vZmlyZWJhc2VcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBMb2dpblJlZ2lzdGVyRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9Mb2dpblJlZ2lzdGVyRm9ybVwiO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xyXG5pbXBvcnQgeyBHb29nbGVPdXRsaW5lZCwgU3luY091dGxpbmVkIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY29uc3QgTG9naW4gPSAoKSA9PiB7XHJcbiAgY29uc3QgW2xvZ2luRW1haWwsIHNldExvZ2luRW1haWxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xvZ2luUGFzcywgc2V0TG9naW5QYXNzXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtyZWdpc3RlckVtYWlsLCBzZXRSZWdpc3RlckVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtyZWdpc3RlclBhc3MsIHNldFJlZ2lzdGVyUGFzc10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IHJlZ2lzdGVyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgLy9jb25zb2xlLmxvZyhyZWdpc3RlckVtYWlsLCByZWdpc3RlclBhc3MpXHJcbiAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICBhd2FpdCBmaXJlYmFzZVxyXG4gICAgICAuYXV0aCgpXHJcbiAgICAgIC5jcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQocmVnaXN0ZXJFbWFpbCwgcmVnaXN0ZXJQYXNzKVxyXG4gICAgICAudGhlbigodXNlcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUkVHSVNURVJcIiwgdXNlcik7XHJcbiAgICAgICAgcm91dGVyLnB1c2goXCIvbG9naW5cIilcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIHRvYXN0KGVyci5tZXNzYWdlKTtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBsb2dpbiA9IGFzeW5jICgpID0+IHtcclxuICAgIC8vY29uc29sZS5sb2cobG9naW5FbWFpbCwgbG9naW5QYXNzKVxyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgYXdhaXQgZmlyZWJhc2VcclxuICAgICAgLmF1dGgoKVxyXG4gICAgICAuc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQobG9naW5FbWFpbCwgbG9naW5QYXNzKVxyXG4gICAgICAudGhlbigodXNlcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTE9HSU5cIiwgdXNlcik7XHJcbiAgICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgdG9hc3QoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdvb2dsZUxvZ2luID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgYXdhaXQgZmlyZWJhc2UuYXV0aCgpLnNpZ25JbldpdGhQb3B1cChuZXcgZmlyZWJhc2UuYXV0aC5Hb29nbGVBdXRoUHJvdmlkZXIoKSlcclxuICAgICAgLnRoZW4oKHVzZXIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkxPR0lOXCIsIHVzZXIpO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIHRvYXN0KGVyci5tZXNzYWdlKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBwdC00IGRpc3BsYXktNFwiPldlbGNvbWUgdG8gdGhlIEhhcmR3YXJlIEludmVudG9yeSBBcHAhPC9oMj5cclxuICAgICAgPGhyPjwvaHI+XHJcbiAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBwdC04IGRpc3BsYXktNlwiPntsb2FkaW5nID8gPFN5bmNPdXRsaW5lZCBzcGluIC8+IDogXCJQbGVhc2UgTG9naW4gLyBSZWdpc3RlclwifTwvaDM+XHJcblxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgb25DbGljaz17Z29vZ2xlTG9naW59XHJcbiAgICAgICAgY2xhc3NOYW1lPVwibWItMyBjb2wtbWQtNiBvZmZzZXQtbWQtM1wiXHJcbiAgICAgICAgdHlwZT1cImRhbmdlclwiXHJcbiAgICAgICAgc2hhcGU9XCJyb3VuZFwiXHJcbiAgICAgICAgaWNvbj17PEdvb2dsZU91dGxpbmVkIC8+fVxyXG4gICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgYmxvY2s9XCJ0cnVlXCJcclxuICAgICAgPlxyXG4gICAgICAgIExvZ2luIHdpdGggR29vZ2xlXHJcbiAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICA8TG9naW5SZWdpc3RlckZvcm1cclxuICAgICAgICAgIGVtYWlsPXtsb2dpbkVtYWlsfVxyXG4gICAgICAgICAgc2V0RW1haWw9e3NldExvZ2luRW1haWx9XHJcbiAgICAgICAgICBwYXNzPXtsb2dpblBhc3N9XHJcbiAgICAgICAgICBzZXRQYXNzPXtzZXRMb2dpblBhc3N9XHJcbiAgICAgICAgICBoYW5kbGVTdWJtaXQ9e2xvZ2lufVxyXG4gICAgICAgICAgYnV0dG9uTmFtZT1cIkxvZ2luXCJcclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8TG9naW5SZWdpc3RlckZvcm1cclxuICAgICAgICAgIGVtYWlsPXtyZWdpc3RlckVtYWlsfVxyXG4gICAgICAgICAgc2V0RW1haWw9e3NldFJlZ2lzdGVyRW1haWx9XHJcbiAgICAgICAgICBwYXNzPXtyZWdpc3RlclBhc3N9XHJcbiAgICAgICAgICBzZXRQYXNzPXtzZXRSZWdpc3RlclBhc3N9XHJcbiAgICAgICAgICBoYW5kbGVTdWJtaXQ9e3JlZ2lzdGVyfVxyXG4gICAgICAgICAgYnV0dG9uTmFtZT1cIlJlZ2lzdGVyXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4XCI+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9yZXNldC9wYXNzd29yZFwiPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWRhbmdlciBidG4tc20gbXQtNVwiPlJlc2V0IFBhc3N3b3JkPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=