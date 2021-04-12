webpackHotUpdate_N_E("pages/signup",{

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions_cartActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../store/actions/cartActions */ "./store/actions/cartActions.js");
/* harmony import */ var _components_Layouts_TopHeader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Layouts/TopHeader */ "./components/Layouts/TopHeader.js");
/* harmony import */ var _components_Layouts_Navbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Layouts/Navbar */ "./components/Layouts/Navbar.js");
/* harmony import */ var _components_Common_PageBanner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Common/PageBanner */ "./components/Common/PageBanner.js");
/* harmony import */ var _components_Common_FacilitySlider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Common/FacilitySlider */ "./components/Common/FacilitySlider.js");
/* harmony import */ var _components_Common_InstagramFeed__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/Common/InstagramFeed */ "./components/Common/InstagramFeed.js");
/* harmony import */ var _components_Layouts_Footer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/Layouts/Footer */ "./components/Layouts/Footer.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_18__);







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }














var Signup = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Signup, _Component);

  var _super = _createSuper(Signup);

  function Signup() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Signup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleLogin", function (e) {
      e.preventDefault();
      axios__WEBPACK_IMPORTED_MODULE_18___default.a.post('http://localhost:4000/users', function (req, res, next) {
        var newUser = new userModel();
        newUser.firstName = req.body.firstName;
        newUser.lastName = req.body.lastName;
        newUser.email = req.body.email;
        newUser.password = auth.password;
        newUser.save().then(function (user) {
          return res.json(user);
        });
      }).then(function (data) {
        console.log('Axios Post', data);
      })["catch"](function (error) {
        return console.error(error);
      });

      _this.props.userLogin();

      next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push('/login');
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Signup, [{
    key: "render",
    value: function render() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx(_components_Layouts_TopHeader__WEBPACK_IMPORTED_MODULE_12__["default"], null), __jsx(_components_Layouts_Navbar__WEBPACK_IMPORTED_MODULE_13__["default"], null), __jsx(_components_Common_PageBanner__WEBPACK_IMPORTED_MODULE_14__["default"], {
        pageTitle: "My Account",
        homePageUrl: "/",
        homePageText: "Home",
        activePageText: "Login"
      }), __jsx("section", {
        className: "signup-area ptb-100"
      }, __jsx("div", {
        className: "container"
      }, __jsx("div", {
        className: "signup-content"
      }, __jsx("h2", null, "Create an Account"), __jsx("form", {
        onSubmit: this.handleLogin,
        className: "signup-form"
      }, __jsx("div", {
        className: "form-group"
      }, __jsx("label", null, "First Name"), __jsx("input", {
        type: "text",
        className: "form-control",
        id: "fname",
        name: "fname"
      })), __jsx("div", {
        className: "form-group"
      }, __jsx("label", null, "Last Name"), __jsx("input", {
        type: "text",
        className: "form-control",
        id: "lname",
        name: "lname"
      })), __jsx("div", {
        className: "form-group"
      }, __jsx("label", null, "Email"), __jsx("input", {
        type: "email",
        className: "form-control",
        id: "name",
        name: "name"
      })), __jsx("div", {
        className: "form-group"
      }, __jsx("label", null, "Password"), __jsx("input", {
        type: "password",
        className: "form-control",
        id: "password",
        name: "password"
      })), __jsx("button", {
        type: "submit",
        className: "default-btn"
      }, "Signup"), __jsx("div", {
        className: "text-center"
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/"
      }, __jsx("a", {
        className: "return-store"
      }, "or Return to Store"))))))), __jsx(_components_Common_FacilitySlider__WEBPACK_IMPORTED_MODULE_15__["default"], null), __jsx(_components_Common_InstagramFeed__WEBPACK_IMPORTED_MODULE_16__["default"], null), __jsx(_components_Layouts_Footer__WEBPACK_IMPORTED_MODULE_17__["default"], null));
    }
  }]);

  return Signup;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    userLogin: function userLogin() {
      dispatch(Object(_store_actions_cartActions__WEBPACK_IMPORTED_MODULE_11__["userLogin"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(null, mapDispatchToProps)(Signup));

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwLmpzIl0sIm5hbWVzIjpbIlNpZ251cCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImF4aW9zIiwicG9zdCIsInJlcSIsInJlcyIsIm5leHQiLCJuZXdVc2VyIiwidXNlck1vZGVsIiwiZmlyc3ROYW1lIiwiYm9keSIsImxhc3ROYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImF1dGgiLCJzYXZlIiwidGhlbiIsInVzZXIiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInByb3BzIiwidXNlckxvZ2luIiwiUm91dGVyIiwicHVzaCIsImhhbmRsZUxvZ2luIiwiQ29tcG9uZW50IiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsTTs7Ozs7Ozs7Ozs7Ozs7OztzTkFFWSxVQUFDQyxDQUFELEVBQU87QUFDakJBLE9BQUMsQ0FBQ0MsY0FBRjtBQUNBQyxtREFBSyxDQUFDQyxJQUFOLENBQVcsNkJBQVgsRUFBMEMsVUFBU0MsR0FBVCxFQUFjQyxHQUFkLEVBQW1CQyxJQUFuQixFQUF5QjtBQUMvRCxZQUFJQyxPQUFPLEdBQUcsSUFBSUMsU0FBSixFQUFkO0FBQ0FELGVBQU8sQ0FBQ0UsU0FBUixHQUFvQkwsR0FBRyxDQUFDTSxJQUFKLENBQVNELFNBQTdCO0FBQ0FGLGVBQU8sQ0FBQ0ksUUFBUixHQUFtQlAsR0FBRyxDQUFDTSxJQUFKLENBQVNDLFFBQTVCO0FBQ0FKLGVBQU8sQ0FBQ0ssS0FBUixHQUFnQlIsR0FBRyxDQUFDTSxJQUFKLENBQVNFLEtBQXpCO0FBQ0FMLGVBQU8sQ0FBQ00sUUFBUixHQUFtQkMsSUFBSSxDQUFDRCxRQUF4QjtBQUNBTixlQUFPLENBQUNRLElBQVIsR0FBZUMsSUFBZixDQUFvQixVQUFBQyxJQUFJO0FBQUEsaUJBQUlaLEdBQUcsQ0FBQ2EsSUFBSixDQUFTRCxJQUFULENBQUo7QUFBQSxTQUF4QjtBQUNILE9BUEQsRUFPR0QsSUFQSCxDQU9RLFVBQUNHLElBQUQsRUFBVTtBQUNkQyxlQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCRixJQUExQjtBQUNILE9BVEQsV0FTUyxVQUFBRyxLQUFLO0FBQUEsZUFBSUYsT0FBTyxDQUFDRSxLQUFSLENBQWNBLEtBQWQsQ0FBSjtBQUFBLE9BVGQ7O0FBVUEsWUFBS0MsS0FBTCxDQUFXQyxTQUFYOztBQUNBQyx3REFBTSxDQUFDQyxJQUFQLENBQVksUUFBWjtBQUNILEs7Ozs7Ozs7V0FFRCxrQkFBUztBQUNMLGFBQ0ksTUFBQyw0Q0FBRCxDQUFPLFFBQVAsUUFDRyxNQUFDLHNFQUFELE9BREgsRUFFSSxNQUFDLG1FQUFELE9BRkosRUFHSSxNQUFDLHNFQUFEO0FBQ0ksaUJBQVMsRUFBQyxZQURkO0FBRUksbUJBQVcsRUFBQyxHQUZoQjtBQUdJLG9CQUFZLEVBQUMsTUFIakI7QUFJSSxzQkFBYyxFQUFDO0FBSm5CLFFBSEosRUFVSTtBQUFTLGlCQUFTLEVBQUM7QUFBbkIsU0FDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0ksc0NBREosRUFHSTtBQUFNLGdCQUFRLEVBQUUsS0FBS0MsV0FBckI7QUFBa0MsaUJBQVMsRUFBQztBQUE1QyxTQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0ksa0NBREosRUFFSTtBQUFPLFlBQUksRUFBQyxNQUFaO0FBQW1CLGlCQUFTLEVBQUMsY0FBN0I7QUFBNEMsVUFBRSxFQUFDLE9BQS9DO0FBQXVELFlBQUksRUFBQztBQUE1RCxRQUZKLENBREosRUFNSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNJLGlDQURKLEVBRUk7QUFBTyxZQUFJLEVBQUMsTUFBWjtBQUFtQixpQkFBUyxFQUFDLGNBQTdCO0FBQTRDLFVBQUUsRUFBQyxPQUEvQztBQUF1RCxZQUFJLEVBQUM7QUFBNUQsUUFGSixDQU5KLEVBV0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSSw2QkFESixFQUVJO0FBQU8sWUFBSSxFQUFDLE9BQVo7QUFBb0IsaUJBQVMsRUFBQyxjQUE5QjtBQUE2QyxVQUFFLEVBQUMsTUFBaEQ7QUFBdUQsWUFBSSxFQUFDO0FBQTVELFFBRkosQ0FYSixFQWdCSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNJLGdDQURKLEVBRUk7QUFBTyxZQUFJLEVBQUMsVUFBWjtBQUF1QixpQkFBUyxFQUFDLGNBQWpDO0FBQWdELFVBQUUsRUFBQyxVQUFuRDtBQUE4RCxZQUFJLEVBQUM7QUFBbkUsUUFGSixDQWhCSixFQXFCSTtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQXNCLGlCQUFTLEVBQUM7QUFBaEMsa0JBckJKLEVBdUJJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0ksTUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQztBQUFYLFNBQ0k7QUFBRyxpQkFBUyxFQUFDO0FBQWIsOEJBREosQ0FESixDQXZCSixDQUhKLENBREosQ0FESixDQVZKLEVBZ0RJLE1BQUMsMEVBQUQsT0FoREosRUFpREksTUFBQyx5RUFBRCxPQWpESixFQWtESSxNQUFDLG1FQUFELE9BbERKLENBREo7QUFzREg7Ozs7RUF6RWdCQywrQzs7QUE0RXJCLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRCxFQUFjO0FBQ3JDLFNBQU87QUFDSE4sYUFBUyxFQUFFLHFCQUFNO0FBQUNNLGNBQVEsQ0FBQ04sNkVBQVMsRUFBVixDQUFSO0FBQXNCO0FBRHJDLEdBQVA7QUFHSCxDQUpEOztBQU1lTywySEFBTyxDQUFDLElBQUQsRUFBT0Ysa0JBQVAsQ0FBUCxDQUFrQzlCLE1BQWxDLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbnVwLmQ0YWRmOWMzMDBjY2NhZDdjMGVhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgdXNlckxvZ2luIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9jYXJ0QWN0aW9ucyc7XHJcbmltcG9ydCBUb3BIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXRzL1RvcEhlYWRlcic7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXRzL05hdmJhcic7XHJcbmltcG9ydCBQYWdlQmFubmVyIGZyb20gJy4uL2NvbXBvbmVudHMvQ29tbW9uL1BhZ2VCYW5uZXInO1xyXG5pbXBvcnQgRmFjaWxpdHlTbGlkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Db21tb24vRmFjaWxpdHlTbGlkZXInO1xyXG5pbXBvcnQgSW5zdGFncmFtRmVlZCBmcm9tICcuLi9jb21wb25lbnRzL0NvbW1vbi9JbnN0YWdyYW1GZWVkJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dHMvRm9vdGVyJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNsYXNzIFNpZ251cCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgaGFuZGxlTG9naW4gPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjQwMDAvdXNlcnMnLCBmdW5jdGlvbihyZXEsIHJlcywgbmV4dCkge1xyXG4gICAgICAgICAgICBsZXQgbmV3VXNlciA9IG5ldyB1c2VyTW9kZWwoKTtcclxuICAgICAgICAgICAgbmV3VXNlci5maXJzdE5hbWUgPSByZXEuYm9keS5maXJzdE5hbWU7XHJcbiAgICAgICAgICAgIG5ld1VzZXIubGFzdE5hbWUgPSByZXEuYm9keS5sYXN0TmFtZTtcclxuICAgICAgICAgICAgbmV3VXNlci5lbWFpbCA9IHJlcS5ib2R5LmVtYWlsO1xyXG4gICAgICAgICAgICBuZXdVc2VyLnBhc3N3b3JkID0gYXV0aC5wYXNzd29yZDtcclxuICAgICAgICAgICAgbmV3VXNlci5zYXZlKCkudGhlbih1c2VyID0+IHJlcy5qc29uKHVzZXIpKVxyXG4gICAgICAgIH0pLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0F4aW9zIFBvc3QnLCBkYXRhKVxyXG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcclxuICAgICAgICB0aGlzLnByb3BzLnVzZXJMb2dpbigpO1xyXG4gICAgICAgIFJvdXRlci5wdXNoKCcvbG9naW4nKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICA8VG9wSGVhZGVyIC8+XHJcbiAgICAgICAgICAgICAgICA8TmF2YmFyIC8+XHJcbiAgICAgICAgICAgICAgICA8UGFnZUJhbm5lciBcclxuICAgICAgICAgICAgICAgICAgICBwYWdlVGl0bGU9XCJNeSBBY2NvdW50XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgaG9tZVBhZ2VVcmw9XCIvXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgaG9tZVBhZ2VUZXh0PVwiSG9tZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZVBhZ2VUZXh0PVwiTG9naW5cIiBcclxuICAgICAgICAgICAgICAgIC8+IFxyXG5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNpZ251cC1hcmVhIHB0Yi0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZ251cC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+Q3JlYXRlIGFuIEFjY291bnQ8L2gyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZUxvZ2lufSBjbGFzc05hbWU9XCJzaWdudXAtZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Rmlyc3QgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwiZm5hbWVcIiBuYW1lPVwiZm5hbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkxhc3QgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwibG5hbWVcIiBuYW1lPVwibG5hbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwibmFtZVwiIG5hbWU9XCJuYW1lXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiZGVmYXVsdC1idG5cIj5TaWdudXA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJyZXR1cm4tc3RvcmVcIj5vciBSZXR1cm4gdG8gU3RvcmU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICAgICAgPEZhY2lsaXR5U2xpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICA8SW5zdGFncmFtRmVlZCAvPlxyXG4gICAgICAgICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB1c2VyTG9naW46ICgpID0+IHtkaXNwYXRjaCh1c2VyTG9naW4oKSl9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCwgbWFwRGlzcGF0Y2hUb1Byb3BzKShTaWdudXApIl0sInNvdXJjZVJvb3QiOiIifQ==