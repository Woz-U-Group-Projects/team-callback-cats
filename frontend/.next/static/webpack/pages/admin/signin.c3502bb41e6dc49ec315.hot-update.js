webpackHotUpdate_N_E("pages/admin/signin",{

/***/ "./pages/admin/signin.js":
/*!*******************************!*\
  !*** ./pages/admin/signin.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../firebase */ "./firebase/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var Signin = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Signin, _React$Component);

  var _super = _createSuper(Signin);

  function Signin() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Signin);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      email: '',
      password: ''
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleSignInWithEmail", function (e) {
      e.preventDefault();
      _firebase__WEBPACK_IMPORTED_MODULE_10__["firebase"].auth().signInWithEmailAndPassword(_this.state.email, _this.state.password).then(function (data) {
        console.log(data);
        react_toastify__WEBPACK_IMPORTED_MODULE_8__["toast"].success('You are signed In successfully!', {
          position: "bottom-left",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
        axios__WEBPACK_IMPORTED_MODULE_11___default.a.get('http://localhost:4000/admin/users').then(function (data) {
          console.log('Admin User Successfully Signed in!', data);
        })["catch"](function (error) {
          return console.error(error);
        });
        setTimeout(function () {
          next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push('/admin/dashboard');
        }, 1500);
      })["catch"](function (error) {
        react_toastify__WEBPACK_IMPORTED_MODULE_8__["toast"].error(error.message, {
          position: "bottom-left",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
        console.log(error);
      });
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Signin, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx("div", {
        className: "admin-signin ptb-100"
      }, __jsx("div", {
        className: "d-table"
      }, __jsx("div", {
        className: "d-table-cell"
      }, __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_8__["ToastContainer"], {
        transition: react_toastify__WEBPACK_IMPORTED_MODULE_8__["Flip"]
      }), __jsx("div", {
        className: "container"
      }, __jsx("div", {
        className: "login-content"
      }, __jsx("h2", null, "Admin Signin"), __jsx("form", {
        onSubmit: this.handleSignInWithEmail,
        className: "login-form"
      }, __jsx("div", {
        className: "form-group"
      }, __jsx("input", {
        type: "email",
        className: "form-control",
        placeholder: "Username or email address",
        value: this.state.email,
        onChange: function onChange(e) {
          return _this2.setState({
            email: e.target.value
          });
        }
      })), __jsx("div", {
        className: "form-group"
      }, __jsx("input", {
        type: "password",
        className: "form-control",
        placeholder: "Password",
        value: this.state.password,
        onChange: function onChange(e) {
          return _this2.setState({
            password: e.target.value
          });
        }
      })), __jsx("button", {
        type: "submit",
        className: "default-btn"
      }, "Login"), __jsx("br", null), __jsx("button", {
        type: "submit",
        className: "default-btn"
      }, "Admin Register")))))));
    }
  }]);

  return Signin;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Signin);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vc2lnbmluLmpzIl0sIm5hbWVzIjpbIlNpZ25pbiIsImVtYWlsIiwicGFzc3dvcmQiLCJlIiwicHJldmVudERlZmF1bHQiLCJmaXJlYmFzZSIsImF1dGgiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInN0YXRlIiwidGhlbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwidG9hc3QiLCJzdWNjZXNzIiwicG9zaXRpb24iLCJhdXRvQ2xvc2UiLCJoaWRlUHJvZ3Jlc3NCYXIiLCJjbG9zZU9uQ2xpY2siLCJwYXVzZU9uSG92ZXIiLCJkcmFnZ2FibGUiLCJheGlvcyIsImdldCIsImVycm9yIiwic2V0VGltZW91dCIsIlJvdXRlciIsInB1c2giLCJtZXNzYWdlIiwiRmxpcCIsImhhbmRsZVNpZ25JbldpdGhFbWFpbCIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsTTs7Ozs7Ozs7Ozs7Ozs7OztnTkFDTTtBQUNKQyxXQUFLLEVBQUUsRUFESDtBQUVKQyxjQUFRLEVBQUU7QUFGTixLOztnT0FLZ0IsVUFBQ0MsQ0FBRCxFQUFPO0FBQzNCQSxPQUFDLENBQUNDLGNBQUY7QUFFQUMseURBQVEsQ0FBQ0MsSUFBVCxHQUFnQkMsMEJBQWhCLENBQTJDLE1BQUtDLEtBQUwsQ0FBV1AsS0FBdEQsRUFBNkQsTUFBS08sS0FBTCxDQUFXTixRQUF4RSxFQUNDTyxJQURELENBQ00sVUFBQ0MsSUFBRCxFQUFVO0FBQ1pDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBQ0FHLDREQUFLLENBQUNDLE9BQU4sQ0FBYyxpQ0FBZCxFQUFpRDtBQUM3Q0Msa0JBQVEsRUFBRSxhQURtQztBQUU3Q0MsbUJBQVMsRUFBRSxJQUZrQztBQUc3Q0MseUJBQWUsRUFBRSxJQUg0QjtBQUk3Q0Msc0JBQVksRUFBRSxJQUorQjtBQUs3Q0Msc0JBQVksRUFBRSxJQUwrQjtBQU03Q0MsbUJBQVMsRUFBRTtBQU5rQyxTQUFqRDtBQVFBQyxxREFBSyxDQUFDQyxHQUFOLENBQVUsbUNBQVYsRUFBK0NiLElBQS9DLENBQW9ELFVBQUNDLElBQUQsRUFBVTtBQUM5REMsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLG9DQUFaLEVBQWtERixJQUFsRDtBQUNILFNBRkcsV0FFSyxVQUFBYSxLQUFLO0FBQUEsaUJBQUlaLE9BQU8sQ0FBQ1ksS0FBUixDQUFjQSxLQUFkLENBQUo7QUFBQSxTQUZWO0FBR0FDLGtCQUFVLENBQUMsWUFBVTtBQUNqQkMsNERBQU0sQ0FBQ0MsSUFBUCxDQUFZLGtCQUFaO0FBQ0gsU0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdILE9BakJELFdBa0JPLFVBQVNILEtBQVQsRUFBZ0I7QUFDbkJWLDREQUFLLENBQUNVLEtBQU4sQ0FBWUEsS0FBSyxDQUFDSSxPQUFsQixFQUEyQjtBQUN2Qlosa0JBQVEsRUFBRSxhQURhO0FBRXZCQyxtQkFBUyxFQUFFLElBRlk7QUFHdkJDLHlCQUFlLEVBQUUsSUFITTtBQUl2QkMsc0JBQVksRUFBRSxJQUpTO0FBS3ZCQyxzQkFBWSxFQUFFLElBTFM7QUFNdkJDLG1CQUFTLEVBQUU7QUFOWSxTQUEzQjtBQVFBVCxlQUFPLENBQUNDLEdBQVIsQ0FBWVcsS0FBWjtBQUNILE9BNUJEO0FBNkJILEs7Ozs7Ozs7V0FDRCxrQkFBUztBQUFBOztBQUNMLGFBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0ksTUFBQyw2REFBRDtBQUNJLGtCQUFVLEVBQUVLLG1EQUFJQTtBQURwQixRQURKLEVBS0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNJLGlDQURKLEVBR0k7QUFBTSxnQkFBUSxFQUFFLEtBQUtDLHFCQUFyQjtBQUE0QyxpQkFBUyxFQUFDO0FBQXRELFNBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSTtBQUNJLFlBQUksRUFBQyxPQURUO0FBRUksaUJBQVMsRUFBQyxjQUZkO0FBR0ksbUJBQVcsRUFBQywyQkFIaEI7QUFJSSxhQUFLLEVBQUUsS0FBS3JCLEtBQUwsQ0FBV1AsS0FKdEI7QUFLSSxnQkFBUSxFQUFFLGtCQUFBRSxDQUFDO0FBQUEsaUJBQUksTUFBSSxDQUFDMkIsUUFBTCxDQUFjO0FBQUU3QixpQkFBSyxFQUFFRSxDQUFDLENBQUM0QixNQUFGLENBQVNDO0FBQWxCLFdBQWQsQ0FBSjtBQUFBO0FBTGYsUUFESixDQURKLEVBV0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSTtBQUNJLFlBQUksRUFBQyxVQURUO0FBRUksaUJBQVMsRUFBQyxjQUZkO0FBR0ksbUJBQVcsRUFBQyxVQUhoQjtBQUlJLGFBQUssRUFBRSxLQUFLeEIsS0FBTCxDQUFXTixRQUp0QjtBQUtJLGdCQUFRLEVBQUUsa0JBQUFDLENBQUM7QUFBQSxpQkFBSSxNQUFJLENBQUMyQixRQUFMLENBQWM7QUFBRTVCLG9CQUFRLEVBQUVDLENBQUMsQ0FBQzRCLE1BQUYsQ0FBU0M7QUFBckIsV0FBZCxDQUFKO0FBQUE7QUFMZixRQURKLENBWEosRUFxQkk7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFzQixpQkFBUyxFQUFDO0FBQWhDLGlCQXJCSixFQXFCZ0UsaUJBckJoRSxFQXNCSTtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQXNCLGlCQUFTLEVBQUM7QUFBaEMsMEJBdEJKLENBSEosQ0FESixDQUxKLENBREosQ0FESixDQURKO0FBMENIOzs7O0VBbEZnQkMsNENBQUssQ0FBQ0MsUzs7QUFvRlpsQyxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi9zaWduaW4uYzM1MDJiYjQxZTZkYzQ5ZWMzMTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyLCB0b2FzdCwgRmxpcCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgZmlyZWJhc2UgfSBmcm9tICcuLi8uLi9maXJlYmFzZSc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jbGFzcyBTaWduaW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgIHBhc3N3b3JkOiAnJ1xyXG4gICAgfTtcclxuXHJcbiAgICBoYW5kbGVTaWduSW5XaXRoRW1haWwgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBcclxuICAgICAgICBmaXJlYmFzZS5hdXRoKCkuc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQodGhpcy5zdGF0ZS5lbWFpbCwgdGhpcy5zdGF0ZS5wYXNzd29yZClcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgdG9hc3Quc3VjY2VzcygnWW91IGFyZSBzaWduZWQgSW4gc3VjY2Vzc2Z1bGx5IScsIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImJvdHRvbS1sZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICBhdXRvQ2xvc2U6IDEwMDAsXHJcbiAgICAgICAgICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBkcmFnZ2FibGU6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDo0MDAwL2FkbWluL3VzZXJzJykudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQWRtaW4gVXNlciBTdWNjZXNzZnVsbHkgU2lnbmVkIGluIScsIGRhdGEpXHJcbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2FkbWluL2Rhc2hib2FyZCcpO1xyXG4gICAgICAgICAgICB9LCAxNTAwKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbihlcnJvcikge1xyXG4gICAgICAgICAgICB0b2FzdC5lcnJvcihlcnJvci5tZXNzYWdlLCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJib3R0b20tbGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgYXV0b0Nsb3NlOiAxMDAwLFxyXG4gICAgICAgICAgICAgICAgaGlkZVByb2dyZXNzQmFyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkbWluLXNpZ25pbiBwdGItMTAwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtdGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtdGFibGUtY2VsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VG9hc3RDb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e0ZsaXB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+QWRtaW4gU2lnbmluPC9oMj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU2lnbkluV2l0aEVtYWlsfSBjbGFzc05hbWU9XCJsb2dpbi1mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWUgb3IgZW1haWwgYWRkcmVzc1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0U3RhdGUoeyBlbWFpbDogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0U3RhdGUoeyBwYXNzd29yZDogZS50YXJnZXQudmFsdWUgfSl9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJkZWZhdWx0LWJ0blwiPkxvZ2luPC9idXR0b24+PGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImRlZmF1bHQtYnRuXCI+QWRtaW4gUmVnaXN0ZXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFNpZ25pbiJdLCJzb3VyY2VSb290IjoiIn0=