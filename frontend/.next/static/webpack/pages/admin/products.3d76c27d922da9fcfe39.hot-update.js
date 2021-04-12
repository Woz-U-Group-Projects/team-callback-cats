webpackHotUpdate_N_E("pages/admin/products",{

/***/ "./pages/admin/products.js":
/*!*********************************!*\
  !*** ./pages/admin/products.js ***!
  \*********************************/
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
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../firebase */ "./firebase/index.js");
/* harmony import */ var _components_Admin_TopNavbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Admin/TopNavbar */ "./components/Admin/TopNavbar.js");
/* harmony import */ var _components_Admin_LeftSidebar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Admin/LeftSidebar */ "./components/Admin/LeftSidebar.js");
/* harmony import */ var _components_Admin_Modals_EditProductModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/Admin/Modals/EditProductModal */ "./components/Admin/Modals/EditProductModal.js");
/* harmony import */ var _components_Admin_Modals_ViewProductModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/Admin/Modals/ViewProductModal */ "./components/Admin/Modals/ViewProductModal.js");
/* harmony import */ var _helpers_withAuth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../helpers/withAuth */ "./helpers/withAuth.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_15__);







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }











var Products = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Products, _Component);

  var _super = _createSuper(Products);

  function Products() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Products);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      display: false,
      products: [],
      loading: true,
      modalProduct: {
        description: "Sunnyme POWER TOOLS Ponchos",
        discount: false,
        discountOff: 0,
        id: "81tgigL0U2zUHoTj85Ht",
        imageHoverUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img-hover8-1588705468374.jpg",
        imageUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img8-1588705462376.jpg",
        newPrice: 200,
        newProduct: false,
        offer: true,
        oldPrice: 210,
        onSale: true,
        title: "Sunnyme POWER TOOLS Ponchos",
        type: "Women Clothes"
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "toggleEditProductModal", function () {
      _this.setState({
        EditProductModal: !_this.state.EditProductModal
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "toggleViewProductModal", function () {
      _this.setState({
        ViewProductModal: !_this.state.ViewProductModal
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "dataModal", function (product) {
      _this.setState({
        modalProduct: product
      }); // console.log(product)

    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Products, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var db = _firebase__WEBPACK_IMPORTED_MODULE_9__["firebase"].firestore();
      var dbOrderRef = db.collection('products');
      var productsArray = [];
      dbOrderRef.get().then(function (res) {
        // console.log(res)
        res.forEach(function (doc) {
          var productsObj = doc.data();
          productsObj.id = doc.id;
          productsArray.push(productsObj);
        });

        _this2.setState({
          products: productsArray
        });

        _this2.loading = false;
      })["catch"](function (err) {
        console.log('error', err);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var products = this.state.products;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx(_components_Admin_TopNavbar__WEBPACK_IMPORTED_MODULE_10__["default"], null), __jsx(_components_Admin_LeftSidebar__WEBPACK_IMPORTED_MODULE_11__["default"], null), __jsx("div", {
        className: "admin-main-content d-flex flex-column"
      }, __jsx("div", {
        className: "page-header"
      }, __jsx("h2", null, "Products")), __jsx("div", {
        className: "admin-products"
      }, __jsx("div", {
        className: "row"
      }, products.length ? products.map(function (product, idx) {
        return __jsx("div", {
          key: idx,
          className: "col-lg-4 col-md-6 col-sm-6"
        }, __jsx("div", {
          className: "single-products-box"
        }, __jsx("div", {
          className: "products-image"
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
          href: "#viewproduct"
        }, __jsx("a", {
          onClick: _this3.toggleViewProductModal
        }, __jsx("img", {
          src: product.imageUrl,
          className: "main-image",
          alt: "image"
        }), __jsx("img", {
          src: product.imageHoverUrl,
          className: "hover-image",
          alt: "image"
        }))), product.onSale ? __jsx("div", {
          className: "sale-tag"
        }, "Sale!") : null, product["new"] ? __jsx("div", {
          className: "new-tag"
        }, "New!") : null, __jsx("div", {
          className: "products-button"
        }, __jsx("ul", null, __jsx("li", null, __jsx("div", {
          className: "wishlist-btn"
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
          href: "#"
        }, __jsx("a", {
          onClick: function onClick(e) {
            e.preventDefault();

            _this3.toggleViewProductModal();

            _this3.dataModal(product);
          }
        }, __jsx("i", {
          className: "bx bx-search-alt"
        }), __jsx("span", {
          className: "tooltip-label"
        }, "View"))))), __jsx("li", null, __jsx("div", {
          className: "compare-btn"
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
          href: "#"
        }, __jsx("a", {
          onClick: _this3.toggleEditProductModal
        }, __jsx("i", {
          className: "bx bx-edit"
        }), __jsx("span", {
          className: "tooltip-label"
        }, "Edit"))))), __jsx("li", null, __jsx("div", {
          className: "quick-view-btn"
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
          href: "#"
        }, __jsx("a", null, __jsx("i", {
          className: "bx bx-x"
        }), __jsx("span", {
          className: "tooltip-label"
        }, "Delete")))))))), __jsx("div", {
          className: "products-content"
        }, __jsx("h3", null, product.title), __jsx("div", {
          className: "price"
        }, product.offer ? __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("span", {
          className: "old-price"
        }, "$", product.oldPrice), __jsx("span", {
          className: "new-price"
        }, "$", product.newPrice)) : __jsx("span", {
          className: "new-price"
        }, "$", product.oldPrice)))));
      }) : null)), __jsx("div", {
        className: "flex-grow-1"
      })), __jsx(_components_Admin_Modals_EditProductModal__WEBPACK_IMPORTED_MODULE_12__["default"], {
        onClick: this.toggleEditProductModal,
        active: this.state.EditProductModal ? 'active' : ''
      }), __jsx(_components_Admin_Modals_ViewProductModal__WEBPACK_IMPORTED_MODULE_13__["default"], {
        onClick: this.toggleViewProductModal,
        active: this.state.ViewProductModal ? 'active' : '',
        product: this.state.modalProduct
      }));
    }
  }]);

  return Products;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (_c = Object(_helpers_withAuth__WEBPACK_IMPORTED_MODULE_14__["default"])(Products));

var _c;

$RefreshReg$(_c, "%default%");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vcHJvZHVjdHMuanMiXSwibmFtZXMiOlsiUHJvZHVjdHMiLCJkaXNwbGF5IiwicHJvZHVjdHMiLCJsb2FkaW5nIiwibW9kYWxQcm9kdWN0IiwiZGVzY3JpcHRpb24iLCJkaXNjb3VudCIsImRpc2NvdW50T2ZmIiwiaWQiLCJpbWFnZUhvdmVyVXJsIiwiaW1hZ2VVcmwiLCJuZXdQcmljZSIsIm5ld1Byb2R1Y3QiLCJvZmZlciIsIm9sZFByaWNlIiwib25TYWxlIiwidGl0bGUiLCJ0eXBlIiwic2V0U3RhdGUiLCJFZGl0UHJvZHVjdE1vZGFsIiwic3RhdGUiLCJWaWV3UHJvZHVjdE1vZGFsIiwicHJvZHVjdCIsImRiIiwiZmlyZWJhc2UiLCJmaXJlc3RvcmUiLCJkYk9yZGVyUmVmIiwiY29sbGVjdGlvbiIsInByb2R1Y3RzQXJyYXkiLCJnZXQiLCJ0aGVuIiwicmVzIiwiZm9yRWFjaCIsImRvYyIsInByb2R1Y3RzT2JqIiwiZGF0YSIsInB1c2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwibWFwIiwiaWR4IiwidG9nZ2xlVmlld1Byb2R1Y3RNb2RhbCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGFNb2RhbCIsInRvZ2dsZUVkaXRQcm9kdWN0TW9kYWwiLCJDb21wb25lbnQiLCJ3aXRoQXV0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsUTs7Ozs7Ozs7Ozs7Ozs7OztnTkFFTTtBQUNKQyxhQUFPLEVBQUUsS0FETDtBQUVKQyxjQUFRLEVBQUUsRUFGTjtBQUdKQyxhQUFPLEVBQUUsSUFITDtBQUlKQyxrQkFBWSxFQUFFO0FBQ1ZDLG1CQUFXLEVBQUUsNkJBREg7QUFFVkMsZ0JBQVEsRUFBRSxLQUZBO0FBR1ZDLG1CQUFXLEVBQUUsQ0FISDtB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R0FDSSxNQUFDLDRDQUFELENBQU8sUUFBUCxRQUNJO0FBQU0sbUJBQVMsRUFBQztBQUFoQixnQkFBOEJTLE9BQU8sQ0FBQ1IsUUFBdEMsQ0FESixFQUVJO0FBQU0sbUJBQVMsRUFBQztBQUFoQixnQkFBOEJRLE9BQU8sQ0FBQ1gsUUFBdEMsQ0FGSixDQURKLEdBTUk7QUFBTSxtQkFBUyxFQUFDO0FBQWhCLGdCQUE4QlcsT0FBTyxDQUFDUixRQUF0QyxDQVJaLENBRkosQ0E3REosQ0FESixDQUQ0QjtBQUFBLE9BQWIsQ0FBbEIsR0FnRkksSUFqRlQsQ0FESixDQUxKLEVBdUhHO0FBQUssaUJBQVMsRUFBQztBQUFmLFFBdkhILENBSkosRUErSEksTUFBQyxrRkFBRDtBQUNJLGVBQU8sRUFBRSxLQUFLaUMsc0JBRGxCO0FBRUksY0FBTSxFQUFFLEtBQUszQixLQUFMLENBQVdELGdCQUFYLEdBQThCLFFBQTlCLEdBQXlDO0FBRnJELFFBL0hKLEVBbUlJLE1BQUMsa0ZBQUQ7QUFDSSxlQUFPLEVBQUUsS0FBS3dCLHNCQURsQjtBQUVJLGNBQU0sRUFBRSxLQUFLdkIsS0FBTCxDQUFXQyxnQkFBWCxHQUE4QixRQUE5QixHQUF5QyxFQUZyRDtBQUdJLGVBQU8sRUFBRSxLQUFLRCxLQUFMLENBQVdoQjtBQUh4QixRQW5JSixDQURKO0FBMklIOzs7O0VBNU1rQjRDLCtDOztBQStNUixvRUFBQUMsa0VBQVEsQ0FBQ2pELFFBQUQsQ0FBdkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vcHJvZHVjdHMuM2Q3NmMyN2Q5MjJkYTlmY2ZlMzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IGZpcmViYXNlIH0gZnJvbSAnLi4vLi4vZmlyZWJhc2UnO1xyXG5pbXBvcnQgVG9wTmF2YmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQWRtaW4vVG9wTmF2YmFyJztcclxuaW1wb3J0IExlZnRTaWRlYmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQWRtaW4vTGVmdFNpZGViYXInO1xyXG5pbXBvcnQgRWRpdFByb2R1Y3RNb2RhbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0FkbWluL01vZGFscy9FZGl0UHJvZHVjdE1vZGFsJztcclxuaW1wb3J0IFZpZXdQcm9kdWN0TW9kYWwgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9BZG1pbi9Nb2RhbHMvVmlld1Byb2R1Y3RNb2RhbCc7XHJcbmltcG9ydCB3aXRoQXV0aCBmcm9tICcuLi8uLi9oZWxwZXJzL3dpdGhBdXRoJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuY2xhc3MgUHJvZHVjdHMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgLy8gRWRpdCBQcm9kdWN0IE1vZGFsXHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICBkaXNwbGF5OiBmYWxzZSxcclxuICAgICAgICBwcm9kdWN0czogW10sXHJcbiAgICAgICAgbG9hZGluZzogdHJ1ZSxcclxuICAgICAgICBtb2RhbFByb2R1Y3Q6IHtcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiU3VubnltZSBQT1dFUiBUT09MUyBQb25jaG9zXCIsXHJcbiAgICAgICAgICAgIGRpc2NvdW50OiBmYWxzZSxcclxuICAgICAgICAgICAgZGlzY291bnRPZmY6IDAsXHJcbiAgICAgICAgICAgIGlkOiBcIjgxdGdpZ0wwVTJ6VUhvVGo4NUh0XCIsXHJcbiAgICAgICAgICAgIGltYWdlSG92ZXJVcmw6IFwiaHR0cHM6Ly9kZW1heGluLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9pbWctaG92ZXI4LTE1ODg3MDU0NjgzNzQuanBnXCIsXHJcbiAgICAgICAgICAgIGltYWdlVXJsOiBcImh0dHBzOi8vZGVtYXhpbi5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vaW1nOC0xNTg4NzA1NDYyMzc2LmpwZ1wiLFxyXG4gICAgICAgICAgICBuZXdQcmljZTogMjAwLFxyXG4gICAgICAgICAgICBuZXdQcm9kdWN0OiBmYWxzZSxcclxuICAgICAgICAgICAgb2ZmZXI6IHRydWUsXHJcbiAgICAgICAgICAgIG9sZFByaWNlOiAyMTAsXHJcbiAgICAgICAgICAgIG9uU2FsZTogdHJ1ZSxcclxuICAgICAgICAgICAgdGl0bGU6IFwiU3VubnltZSBQT1dFUiBUT09MUyBQb25jaG9zXCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiV29tZW4gQ2xvdGhlc1wiXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRvZ2dsZUVkaXRQcm9kdWN0TW9kYWwgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIEVkaXRQcm9kdWN0TW9kYWw6ICF0aGlzLnN0YXRlLkVkaXRQcm9kdWN0TW9kYWxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gVmlldyBQcm9kdWN0IE1vZGFsXHJcbiAgICB0b2dnbGVWaWV3UHJvZHVjdE1vZGFsID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBWaWV3UHJvZHVjdE1vZGFsOiAhdGhpcy5zdGF0ZS5WaWV3UHJvZHVjdE1vZGFsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBkYXRhTW9kYWwgPSAocHJvZHVjdCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBtb2RhbFByb2R1Y3Q6IHByb2R1Y3RcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhwcm9kdWN0KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgY29uc3QgZGIgPSBmaXJlYmFzZS5maXJlc3RvcmUoKTtcclxuICAgICAgICBjb25zdCBkYk9yZGVyUmVmID0gZGIuY29sbGVjdGlvbigncHJvZHVjdHMnKTtcclxuICAgICAgICBsZXQgcHJvZHVjdHNBcnJheSA9IFtdO1xyXG4gICAgICAgIGRiT3JkZXJSZWYuZ2V0KClcclxuICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICAgIHJlcy5mb3JFYWNoKGRvYyA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcHJvZHVjdHNPYmogPSBkb2MuZGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdHNPYmouaWQgPSBkb2MuaWQ7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0c0FycmF5LnB1c2gocHJvZHVjdHNPYmopXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RzOiBwcm9kdWN0c0FycmF5XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicsIGVycilcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IHsgcHJvZHVjdHMgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgPFRvcE5hdmJhciAvPlxyXG4gICAgICAgICAgICAgICAgPExlZnRTaWRlYmFyIC8+XHJcbiBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRtaW4tbWFpbi1jb250ZW50IGQtZmxleCBmbGV4LWNvbHVtblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPlByb2R1Y3RzPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZG1pbi1wcm9kdWN0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3RzLmxlbmd0aCA/IHByb2R1Y3RzLm1hcCgocHJvZHVjdCwgaWR4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2lkeH0gY2xhc3NOYW1lPVwiY29sLWxnLTQgY29sLW1kLTYgY29sLXNtLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW5nbGUtcHJvZHVjdHMtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RzLWltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiN2aWV3cHJvZHVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLnRvZ2dsZVZpZXdQcm9kdWN0TW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Byb2R1Y3QuaW1hZ2VVcmx9IGNsYXNzTmFtZT1cIm1haW4taW1hZ2VcIiBhbHQ9XCJpbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cHJvZHVjdC5pbWFnZUhvdmVyVXJsfSBjbGFzc05hbWU9XCJob3Zlci1pbWFnZVwiIGFsdD1cImltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Qub25TYWxlID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYWxlLXRhZ1wiPlNhbGUhPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QubmV3ID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXctdGFnXCI+TmV3ITwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0cy1idXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lzaGxpc3QtYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVWaWV3UHJvZHVjdE1vZGFsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhTW9kYWwocHJvZHVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2J4IGJ4LXNlYXJjaC1hbHQnPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0b29sdGlwLWxhYmVsXCI+Vmlldzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBhcmUtYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLnRvZ2dsZUVkaXRQcm9kdWN0TW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nYnggYngtZWRpdCc+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRvb2x0aXAtbGFiZWxcIj5FZGl0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVpY2stdmlldy1idG5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nYnggYngteCc+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRvb2x0aXAtbGFiZWxcIj5EZWxldGU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RzLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e3Byb2R1Y3QudGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Qub2ZmZXIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvbGQtcHJpY2VcIj4ke3Byb2R1Y3Qub2xkUHJpY2V9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuZXctcHJpY2VcIj4ke3Byb2R1Y3QubmV3UHJpY2V9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5ldy1wcmljZVwiPiR7cHJvZHVjdC5vbGRQcmljZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFBhZ2luYXRpb24gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTIgY29sLW1kLTEyIGNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnaW5hdGlvbi1hcmVhIGFkbWluLXBhZ2lcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInByZXYgcGFnZS1udW1iZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdieCBieC1jaGV2cm9uLWxlZnQnPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGFnZS1udW1iZXJzIGN1cnJlbnRcIj4xPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInBhZ2UtbnVtYmVyc1wiPjI8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwYWdlLW51bWJlcnNcIj4zPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmV4dCBwYWdlLW51bWJlcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2J4IGJ4LWNoZXZyb24tcmlnaHQnPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICB7LyogRm9vdGVyICovfVxyXG4gICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWdyb3ctMVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIFNpZGViYXIgTW9kYWwgKi99XHJcbiAgICAgICAgICAgICAgICA8RWRpdFByb2R1Y3RNb2RhbCBcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnRvZ2dsZUVkaXRQcm9kdWN0TW9kYWx9IFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17dGhpcy5zdGF0ZS5FZGl0UHJvZHVjdE1vZGFsID8gJ2FjdGl2ZScgOiAnJ30gXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFZpZXdQcm9kdWN0TW9kYWwgXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy50b2dnbGVWaWV3UHJvZHVjdE1vZGFsfSBcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e3RoaXMuc3RhdGUuVmlld1Byb2R1Y3RNb2RhbCA/ICdhY3RpdmUnIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdD17dGhpcy5zdGF0ZS5tb2RhbFByb2R1Y3R9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoKFByb2R1Y3RzKTsiXSwic291cmNlUm9vdCI6IiJ9