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






var FirebaseAuthState = function FirebaseAuthState(_ref) {
  _s();

  var children = _ref.children;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_5__["Context"]),
      dispatch = _useContext.dispatch;

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var handle = setInterval( /*#__PURE__*/Object(C_Users_Jacob_Desktop_hardware_inventory_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Jacob_Desktop_hardware_inventory_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var user, token;
      return C_Users_Jacob_Desktop_hardware_inventory_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log("refreshing token...");
              user = _firebase__WEBPACK_IMPORTED_MODULE_4__["default"].auth().currentUser;

              if (!user) {
                _context.next = 9;
                break;
              }

              _context.next = 5;
              return user.getIdToken(true);

            case 5:
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

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })), 10 * 60 * 1000);
    return function () {
      return clearInterval(handle);
    };
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: children
  }, void 0, false);
};

_s(FirebaseAuthState, "o3sFqHzzIboOoOF6b2FSmERiAhY=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaXJlYmFzZUF1dGhTdGF0ZS5qcyJdLCJuYW1lcyI6WyJGaXJlYmFzZUF1dGhTdGF0ZSIsImNoaWxkcmVuIiwidXNlQ29udGV4dCIsIkNvbnRleHQiLCJkaXNwYXRjaCIsInVzZUVmZmVjdCIsImhhbmRsZSIsInNldEludGVydmFsIiwiY29uc29sZSIsImxvZyIsInVzZXIiLCJmaXJlYmFzZSIsImF1dGgiLCJjdXJyZW50VXNlciIsImdldElkVG9rZW4iLCJ0b2tlbiIsImRlc3Ryb3lDb29raWUiLCJzZXRDb29raWUiLCJheGlvc0F1dGgiLCJwb3N0IiwidGhlbiIsInJlcyIsInR5cGUiLCJwYXlsb2FkIiwiZGF0YSIsImNsZWFySW50ZXJ2YWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1BLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQUEsb0JBQ25CQyx3REFBVSxDQUFDQyxnREFBRCxDQURTO0FBQUEsTUFDaENDLFFBRGdDLGVBQ2hDQSxRQURnQzs7QUFJeENDLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQU1DLE1BQU0sR0FBR0MsV0FBVyx3VEFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDekJDLHFCQUFPLENBQUNDLEdBQVI7QUFDTUMsa0JBRm1CLEdBRVpDLGlEQUFRLENBQUNDLElBQVQsR0FBZ0JDLFdBRko7O0FBQUEsbUJBR3JCSCxJQUhxQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHFCQUlIQSxJQUFJLENBQUNJLFVBQUwsQ0FBZ0IsSUFBaEIsQ0FKRzs7QUFBQTtBQUlqQkMsbUJBSmlCO0FBS3ZCQywyRUFBYSxDQUFDLElBQUQsRUFBTyxPQUFQLENBQWI7QUFDQUMsdUVBQVMsQ0FBQyxJQUFELEVBQU8sT0FBUCxFQUFnQkYsS0FBaEIsRUFBdUIsRUFBdkIsQ0FBVCxDQU51QixDQU92Qjs7QUFDQUcsc0VBQVMsQ0FBQ0MsSUFBVixrQkFBZ0NDLElBQWhDLENBQXFDLFVBQUNDLEdBQUQsRUFBUztBQUM1QztBQUNBakIsd0JBQVEsQ0FBQztBQUNQa0Isc0JBQUksRUFBRSxPQURDO0FBRVBDLHlCQUFPLEVBQUVGLEdBQUcsQ0FBQ0c7QUFGTixpQkFBRCxDQUFSO0FBSUQsZUFORDs7QUFSdUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRCxJQWdCdkIsS0FBSyxFQUFMLEdBQVUsSUFoQmEsQ0FBMUI7QUFrQkEsV0FBTztBQUFBLGFBQU1DLGFBQWEsQ0FBQ25CLE1BQUQsQ0FBbkI7QUFBQSxLQUFQO0FBQ0QsR0FwQk0sRUFvQkosRUFwQkksQ0FBVDtBQXNCQSxzQkFBTztBQUFBLGNBQUdMO0FBQUgsbUJBQVA7QUFDSCxDQTNCRDs7R0FBTUQsaUI7O0tBQUFBLGlCO0FBNkJTQSxnRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmI4OWMzMDg4N2FkMmFkMzIwOGM4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2NyZWF0ZSBhIGNvbXBvbmVudCB0aGF0IHdpbGwga2VlcCB0cmFjayBvZiB1c2VyJ3MgYXV0aCBzdGF0ZVxyXG4vL3RoZW4gd3JhcCBfYXBwLmpzIHNvIHRoYXQgZW50aXJlIGFwcCBrbm93cyBpZiB0aGUgdXNlciBpcyBsb2dnZWQgaW4gb3Igbm90XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSAnLi4vZmlyZWJhc2UnO1xyXG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dCc7XHJcbmltcG9ydCB7IGF4aW9zQXV0aCB9IGZyb20gJy4uL2FjdGlvbnMvYXhpb3MnO1xyXG5pbXBvcnQgeyBzZXRDb29raWUsIGRlc3Ryb3lDb29raWUgfSBmcm9tICdub29raWVzJztcclxuXHJcblxyXG5jb25zdCBGaXJlYmFzZUF1dGhTdGF0ZSA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICAgIGNvbnN0IHsgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQoQ29udGV4dCk7XHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaGFuZGxlID0gc2V0SW50ZXJ2YWwoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coYHJlZnJlc2hpbmcgdG9rZW4uLi5gKTtcclxuICAgICAgICAgIGNvbnN0IHVzZXIgPSBmaXJlYmFzZS5hdXRoKCkuY3VycmVudFVzZXI7XHJcbiAgICAgICAgICBpZiAodXNlcikge1xyXG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IGF3YWl0IHVzZXIuZ2V0SWRUb2tlbih0cnVlKTtcclxuICAgICAgICAgICAgZGVzdHJveUNvb2tpZShudWxsLCBcInRva2VuXCIpO1xyXG4gICAgICAgICAgICBzZXRDb29raWUobnVsbCwgXCJ0b2tlblwiLCB0b2tlbiwge30pO1xyXG4gICAgICAgICAgICAvLyBnZXQgdXNlciBpbmZvIGZyb20gYmFja2VuZCwgbm90IGZpcmViYXNlXHJcbiAgICAgICAgICAgIGF4aW9zQXV0aC5wb3N0KGAvY3VycmVudC11c2VyYCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJVU0VSIFJPVVRFIFJFUyBJTiBGSVJFQkFTRV9BVVRIX1NUQVRFXCIsIHJlcyk7XHJcbiAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJMT0dJTlwiLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogcmVzLmRhdGEsXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sIDEwICogNjAgKiAxMDAwKTtcclxuICAgICBcclxuICAgICAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChoYW5kbGUpO1xyXG4gICAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIDw+e2NoaWxkcmVufTwvPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpcmViYXNlQXV0aFN0YXRlOyJdLCJzb3VyY2VSb290IjoiIn0=