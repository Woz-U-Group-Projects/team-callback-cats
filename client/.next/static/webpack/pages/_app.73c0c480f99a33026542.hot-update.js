webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/FirebaseAuthState.js":
/*!*****************************************!*\
  !*** ./components/FirebaseAuthState.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Jacob_Desktop_hardware_inventory_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Jacob_Desktop_hardware_inventory_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Jacob_Desktop_hardware_inventory_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Jacob_Desktop_hardware_inventory_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase */ "./firebase.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context */ "./context/index.js");
/* harmony import */ var _actions_axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/axios */ "./actions/axios.js");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! nookies */ "./node_modules/nookies/dist/index.js");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_7__);





var _s = $RefreshSig$();

//create a component that will keep track of user's auth state
//then wrap _app.js so that entire app knows if the user is logged in or not




 // this component is responsible to keep the current user in context
// then user info is accessible for the entire app
// you can build protected routes etc based on that...

var FirebaseAuthState = function FirebaseAuthState(_ref) {
  _s();

  var children = _ref.children;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_5__["Context"]),
      dispatch = _useContext.dispatch;

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    // console.log("firebase auth state from context", state);
    return _firebase__WEBPACK_IMPORTED_MODULE_4__["default"].auth().onIdTokenChanged( /*#__PURE__*/function () {
      var _ref2 = Object(C_Users_Jacob_Desktop_hardware_inventory_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Jacob_Desktop_hardware_inventory_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(user) {
        var token;
        return C_Users_Jacob_Desktop_hardware_inventory_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (user) {
                  _context.next = 7;
                  break;
                }

                dispatch({
                  type: "LOGOUT"
                });
                Object(nookies__WEBPACK_IMPORTED_MODULE_7__["destroyCookie"])(null, "token");
                Object(nookies__WEBPACK_IMPORTED_MODULE_7__["setCookie"])(null, "token", "", {});
                return _context.abrupt("return");

              case 7:
                _context.next = 9;
                return user.getIdToken();

              case 9:
                token = _context.sent;
                Object(nookies__WEBPACK_IMPORTED_MODULE_7__["destroyCookie"])(null, "token");
                Object(nookies__WEBPACK_IMPORTED_MODULE_7__["setCookie"])(null, "token", token, {}); // get user info from backend, not firebase

                _actions_axios__WEBPACK_IMPORTED_MODULE_6__["axiosAuth"].post("/current-user").then(function (res) {
                  // console.log("USER ROUTE RES IN FIREBASE_AUTH_STATE", res);
                  dispatch({
                    type: "LOGIN",
                    payload: res.data
                  });
                });

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  }, []); // force refresh the token every 10 minutes

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var handle = setInterval( /*#__PURE__*/Object(C_Users_Jacob_Desktop_hardware_inventory_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Jacob_Desktop_hardware_inventory_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
      var user, token;
      return C_Users_Jacob_Desktop_hardware_inventory_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              console.log("refreshing token...");
              user = _firebase__WEBPACK_IMPORTED_MODULE_4__["default"].auth().currentUser;

              if (!user) {
                _context2.next = 9;
                break;
              }

              _context2.next = 5;
              return user.getIdToken(true);

            case 5:
              token = _context2.sent;
              Object(nookies__WEBPACK_IMPORTED_MODULE_7__["destroyCookie"])(null, "token");
              Object(nookies__WEBPACK_IMPORTED_MODULE_7__["setCookie"])(null, "token", token, {}); // get user info from backend, not firebase

              _actions_axios__WEBPACK_IMPORTED_MODULE_6__["axiosAuth"].post("/current-user").then(function (res) {
                // console.log("USER ROUTE RES IN FIREBASE_AUTH_STATE", res);
                dispatch({
                  type: "LOGIN",
                  payload: res.data
                });
              });

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })), 10 * 60 * 1000);
    return function () {
      return clearInterval(handle);
    };
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: children
  }, void 0, false);
};

_s(FirebaseAuthState, "KVZv8QSi3lIdCjIyn6lwBt86Dj4=");

_c = FirebaseAuthState;
/* harmony default export */ __webpack_exports__["default"] = (FirebaseAuthState);

var _c;

$RefreshReg$(_c, "FirebaseAuthState");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaXJlYmFzZUF1dGhTdGF0ZS5qcyJdLCJuYW1lcyI6WyJGaXJlYmFzZUF1dGhTdGF0ZSIsImNoaWxkcmVuIiwidXNlQ29udGV4dCIsIkNvbnRleHQiLCJkaXNwYXRjaCIsInVzZUVmZmVjdCIsImZpcmViYXNlIiwiYXV0aCIsIm9uSWRUb2tlbkNoYW5nZWQiLCJ1c2VyIiwidHlwZSIsImRlc3Ryb3lDb29raWUiLCJzZXRDb29raWUiLCJnZXRJZFRva2VuIiwidG9rZW4iLCJheGlvc0F1dGgiLCJwb3N0IiwidGhlbiIsInJlcyIsInBheWxvYWQiLCJkYXRhIiwiaGFuZGxlIiwic2V0SW50ZXJ2YWwiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudFVzZXIiLCJjbGVhckludGVydmFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Q0FHQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixPQUFrQjtBQUFBOztBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFBQSxvQkFDckJDLHdEQUFVLENBQUNDLGdEQUFELENBRFc7QUFBQSxNQUNsQ0MsUUFEa0MsZUFDbENBLFFBRGtDOztBQUcxQ0MseURBQVMsQ0FBQyxZQUFNO0FBQ2Q7QUFDQSxXQUFPQyxpREFBUSxDQUFDQyxJQUFULEdBQWdCQyxnQkFBaEI7QUFBQSwyVEFBaUMsaUJBQU9DLElBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQ2pDQSxJQURpQztBQUFBO0FBQUE7QUFBQTs7QUFFcENMLHdCQUFRLENBQUM7QUFDUE0sc0JBQUksRUFBRTtBQURDLGlCQUFELENBQVI7QUFJQUMsNkVBQWEsQ0FBQyxJQUFELEVBQU8sT0FBUCxDQUFiO0FBQ0FDLHlFQUFTLENBQUMsSUFBRCxFQUFPLE9BQVAsRUFBZ0IsRUFBaEIsRUFBb0IsRUFBcEIsQ0FBVDtBQVBvQzs7QUFBQTtBQUFBO0FBQUEsdUJBWWhCSCxJQUFJLENBQUNJLFVBQUwsRUFaZ0I7O0FBQUE7QUFZOUJDLHFCQVo4QjtBQWFwQ0gsNkVBQWEsQ0FBQyxJQUFELEVBQU8sT0FBUCxDQUFiO0FBQ0FDLHlFQUFTLENBQUMsSUFBRCxFQUFPLE9BQVAsRUFBZ0JFLEtBQWhCLEVBQXVCLEVBQXZCLENBQVQsQ0Fkb0MsQ0FlcEM7O0FBQ0FDLHdFQUFTLENBQUNDLElBQVYsa0JBQWdDQyxJQUFoQyxDQUFxQyxVQUFDQyxHQUFELEVBQVM7QUFDNUM7QUFDQWQsMEJBQVEsQ0FBQztBQUNQTSx3QkFBSSxFQUFFLE9BREM7QUFFUFMsMkJBQU8sRUFBRUQsR0FBRyxDQUFDRTtBQUZOLG1CQUFELENBQVI7QUFJRCxpQkFORDs7QUFoQm9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWpDOztBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQVA7QUF5QkQsR0EzQlEsRUEyQk4sRUEzQk0sQ0FBVCxDQUgwQyxDQWdDMUM7O0FBQ0FmLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1nQixNQUFNLEdBQUdDLFdBQVcsd1RBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3pCQyxxQkFBTyxDQUFDQyxHQUFSO0FBQ01mLGtCQUZtQixHQUVaSCxpREFBUSxDQUFDQyxJQUFULEdBQWdCa0IsV0FGSjs7QUFBQSxtQkFHckJoQixJQUhxQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHFCQUlIQSxJQUFJLENBQUNJLFVBQUwsQ0FBZ0IsSUFBaEIsQ0FKRzs7QUFBQTtBQUlqQkMsbUJBSmlCO0FBS3ZCSCwyRUFBYSxDQUFDLElBQUQsRUFBTyxPQUFQLENBQWI7QUFDQUMsdUVBQVMsQ0FBQyxJQUFELEVBQU8sT0FBUCxFQUFnQkUsS0FBaEIsRUFBdUIsRUFBdkIsQ0FBVCxDQU51QixDQU92Qjs7QUFDQUMsc0VBQVMsQ0FBQ0MsSUFBVixrQkFBZ0NDLElBQWhDLENBQXFDLFVBQUNDLEdBQUQsRUFBUztBQUM1QztBQUNBZCx3QkFBUSxDQUFDO0FBQ1BNLHNCQUFJLEVBQUUsT0FEQztBQUVQUyx5QkFBTyxFQUFFRCxHQUFHLENBQUNFO0FBRk4saUJBQUQsQ0FBUjtBQUlELGVBTkQ7O0FBUnVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUQsSUFnQnZCLEtBQUssRUFBTCxHQUFVLElBaEJhLENBQTFCO0FBa0JBLFdBQU87QUFBQSxhQUFNTSxhQUFhLENBQUNMLE1BQUQsQ0FBbkI7QUFBQSxLQUFQO0FBQ0QsR0FwQlEsRUFvQk4sRUFwQk0sQ0FBVDtBQXNCQSxzQkFBTztBQUFBLGNBQUdwQjtBQUFILG1CQUFQO0FBQ0QsQ0F4REQ7O0dBQU1ELGlCOztLQUFBQSxpQjtBQTBEU0EsZ0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC43M2MwYzQ4MGY5OWEzMzAyNjU0Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9jcmVhdGUgYSBjb21wb25lbnQgdGhhdCB3aWxsIGtlZXAgdHJhY2sgb2YgdXNlcidzIGF1dGggc3RhdGVcclxuLy90aGVuIHdyYXAgX2FwcC5qcyBzbyB0aGF0IGVudGlyZSBhcHAga25vd3MgaWYgdGhlIHVzZXIgaXMgbG9nZ2VkIGluIG9yIG5vdFxyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcIi4uL2ZpcmViYXNlXCI7XHJcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dFwiO1xyXG5pbXBvcnQgeyBheGlvc0F1dGggfSBmcm9tIFwiLi4vYWN0aW9ucy9heGlvc1wiO1xyXG5pbXBvcnQgeyBzZXRDb29raWUsIGRlc3Ryb3lDb29raWUgfSBmcm9tIFwibm9va2llc1wiO1xyXG4gXHJcbi8vIHRoaXMgY29tcG9uZW50IGlzIHJlc3BvbnNpYmxlIHRvIGtlZXAgdGhlIGN1cnJlbnQgdXNlciBpbiBjb250ZXh0XHJcbi8vIHRoZW4gdXNlciBpbmZvIGlzIGFjY2Vzc2libGUgZm9yIHRoZSBlbnRpcmUgYXBwXHJcbi8vIHlvdSBjYW4gYnVpbGQgcHJvdGVjdGVkIHJvdXRlcyBldGMgYmFzZWQgb24gdGhhdC4uLlxyXG5jb25zdCBGaXJlYmFzZUF1dGhTdGF0ZSA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCB7IGRpc3BhdGNoIH0gPSB1c2VDb250ZXh0KENvbnRleHQpO1xyXG4gXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiZmlyZWJhc2UgYXV0aCBzdGF0ZSBmcm9tIGNvbnRleHRcIiwgc3RhdGUpO1xyXG4gICAgcmV0dXJuIGZpcmViYXNlLmF1dGgoKS5vbklkVG9rZW5DaGFuZ2VkKGFzeW5jICh1c2VyKSA9PiB7XHJcbiAgICAgIGlmICghdXNlcikge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IFwiTE9HT1VUXCIsXHJcbiAgICAgICAgfSk7XHJcbiBcclxuICAgICAgICBkZXN0cm95Q29va2llKG51bGwsIFwidG9rZW5cIik7XHJcbiAgICAgICAgc2V0Q29va2llKG51bGwsIFwidG9rZW5cIiwgXCJcIiwge30pO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkZJUkVCQVNFX0FVVEhfU1RBVEVfRklSRUJBU0VfVVNFUlwiLCB1c2VyKTtcclxuICAgICAgICAvLyBzZXQgdG9rZW4gaW4gY29va2llIGZvciB1c2UgaW4gZ2V0U2VydmVyU2lkZVByb3BzXHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBhd2FpdCB1c2VyLmdldElkVG9rZW4oKTtcclxuICAgICAgICBkZXN0cm95Q29va2llKG51bGwsIFwidG9rZW5cIik7XHJcbiAgICAgICAgc2V0Q29va2llKG51bGwsIFwidG9rZW5cIiwgdG9rZW4sIHt9KTtcclxuICAgICAgICAvLyBnZXQgdXNlciBpbmZvIGZyb20gYmFja2VuZCwgbm90IGZpcmViYXNlXHJcbiAgICAgICAgYXhpb3NBdXRoLnBvc3QoYC9jdXJyZW50LXVzZXJgKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiVVNFUiBST1VURSBSRVMgSU4gRklSRUJBU0VfQVVUSF9TVEFURVwiLCByZXMpO1xyXG4gICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkxPR0lOXCIsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IHJlcy5kYXRhLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuIFxyXG4gIC8vIGZvcmNlIHJlZnJlc2ggdGhlIHRva2VuIGV2ZXJ5IDEwIG1pbnV0ZXNcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlID0gc2V0SW50ZXJ2YWwoYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhgcmVmcmVzaGluZyB0b2tlbi4uLmApO1xyXG4gICAgICBjb25zdCB1c2VyID0gZmlyZWJhc2UuYXV0aCgpLmN1cnJlbnRVc2VyO1xyXG4gICAgICBpZiAodXNlcikge1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgdXNlci5nZXRJZFRva2VuKHRydWUpO1xyXG4gICAgICAgIGRlc3Ryb3lDb29raWUobnVsbCwgXCJ0b2tlblwiKTtcclxuICAgICAgICBzZXRDb29raWUobnVsbCwgXCJ0b2tlblwiLCB0b2tlbiwge30pO1xyXG4gICAgICAgIC8vIGdldCB1c2VyIGluZm8gZnJvbSBiYWNrZW5kLCBub3QgZmlyZWJhc2VcclxuICAgICAgICBheGlvc0F1dGgucG9zdChgL2N1cnJlbnQtdXNlcmApLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coXCJVU0VSIFJPVVRFIFJFUyBJTiBGSVJFQkFTRV9BVVRIX1NUQVRFXCIsIHJlcyk7XHJcbiAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiTE9HSU5cIixcclxuICAgICAgICAgICAgcGF5bG9hZDogcmVzLmRhdGEsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSwgMTAgKiA2MCAqIDEwMDApO1xyXG4gXHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChoYW5kbGUpO1xyXG4gIH0sIFtdKTtcclxuIFxyXG4gIHJldHVybiA8PntjaGlsZHJlbn08Lz47XHJcbn07XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgRmlyZWJhc2VBdXRoU3RhdGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=