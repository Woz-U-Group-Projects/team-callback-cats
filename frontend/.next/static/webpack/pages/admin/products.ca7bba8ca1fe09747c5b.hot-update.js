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
            axios__WEBPACK_IMPORTED_MODULE_15___default.a.post('http://localhost:4000/admin/products').then(function (data) {
              console.log('Product Successfully');
            });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vcHJvZHVjdHMuanMiXSwibmFtZXMiOlsiUHJvZHVjdHMiLCJkaXNwbGF5IiwicHJvZHVjdHMiLCJsb2FkaW5nIiwibW9kYWxQcm9kdWN0IiwiZGVzY3JpcHRpb24iLCJkaXNjb3VudCIsImRpc2NvdW50T2ZmIiwiaWQiLCJpbWFnZUhvdmVyVXJsIiwiaW1hZ2VVcmwiLCJuZXdQcmljZSIsIm5ld1Byb2R1Y3QiLCJvZmZlciIsIm9sZFByaWNlIiwib25TYWxlIiwidGl0bGUiLCJ0eXBlIiwic2V0U3RhdGUiLCJFZGl0UHJvZHVjdE1vZGFsIiwic3RhdGUiLCJWaWV3UHJvZHVjdE1vZGFsIiwicHJvZHVjdCIsImRiIiwiZmlyZWJhc2UiLCJmaXJlc3RvcmUiLCJkYk9yZGVyUmVmIiwiY29sbGVjdGlvbiIsInByb2R1Y3RzQXJyYXkiLCJnZXQiLCJ0aGVuIiwicmVzIiwiZm9yRWFjaCIsImRvYyIsInByb2R1Y3RzT2JqIiwiZGF0YSIsInB1c2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwibWFwIiwiaWR4IiwidG9nZ2xlVmlld1Byb2R1Y3RNb2RhbCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImF4aW9zIiwicG9zdCIsImRhdGFNb2RhbCIsInRvZ2dsZUVkaXRQcm9kdWN0TW9kYWwiLCJDb21wb25lbnQiLCJ3aXRoQXV0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsUTs7Ozs7Ozs7Ozs7Ozs7OztnTkFFTTtBQUNKQyxhQUFPLEVBQUUsS0FETDtBQUVKQyxjQUFRLEVBQUUsRUFGTjtBQUdKQyxhQUFPLEVBQUUsSUFITDtBQUlKQyxrQkFBWSxFQUFFO0FBQ1ZDLG1CQUFXLEVBQUUsNkJBREg7QUFFVkMsZ0JBQVEsRUFBRSxLQUZBO0FBR1ZDLG1C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LENBNUJKLENBREosQ0FwQkosQ0FESixFQWdFSTtBQUFLLG1CQUFTLEVBQUM7QUFBZixXQUNJLGtCQUFLM0IsT0FBTyxDQUFDTixLQUFiLENBREosRUFFSTtBQUFLLG1CQUFTLEVBQUM7QUFBZixXQUVRTSxPQUFPLENBQUNULEtBQVIsR0FDSSxNQUFDLDRDQUFELENBQU8sUUFBUCxRQUNJO0FBQU0sbUJBQVMsRUFBQztBQUFoQixnQkFBOEJTLE9BQU8sQ0FBQ1IsUUFBdEMsQ0FESixFQUVJO0FBQU0sbUJBQVMsRUFBQztBQUFoQixnQkFBOEJRLE9BQU8sQ0FBQ1gsUUFBdEMsQ0FGSixDQURKLEdBTUk7QUFBTSxtQkFBUyxFQUFDO0FBQWhCLGdCQUE4QlcsT0FBTyxDQUFDUixRQUF0QyxDQVJaLENBRkosQ0FoRUosQ0FESixDQUQ0QjtBQUFBLE9BQWIsQ0FBbEIsR0FtRkksSUFwRlQsQ0FESixDQUxKLEVBMEhHO0FBQUssaUJBQVMsRUFBQztBQUFmLFFBMUhILENBSkosRUFrSUksTUFBQyxrRkFBRDtBQUNJLGVBQU8sRUFBRSxLQUFLbUMsc0JBRGxCO0FBRUksY0FBTSxFQUFFLEtBQUs3QixLQUFMLENBQVdELGdCQUFYLEdBQThCLFFBQTlCLEdBQXlDO0FBRnJELFFBbElKLEVBc0lJLE1BQUMsa0ZBQUQ7QUFDSSxlQUFPLEVBQUUsS0FBS3dCLHNCQURsQjtBQUVJLGNBQU0sRUFBRSxLQUFLdkIsS0FBTCxDQUFXQyxnQkFBWCxHQUE4QixRQUE5QixHQUF5QyxFQUZyRDtBQUdJLGVBQU8sRUFBRSxLQUFLRCxLQUFMLENBQVdoQjtBQUh4QixRQXRJSixDQURKO0FBOElIOzs7O0VBL01rQjhDLCtDOztBQWtOUixvRUFBQUMsa0VBQVEsQ0FBQ25ELFFBQUQsQ0FBdkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vcHJvZHVjdHMuY2E3YmJhOGNhMWZlMDk3NDdjNWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IGZpcmViYXNlIH0gZnJvbSAnLi4vLi4vZmlyZWJhc2UnO1xyXG5pbXBvcnQgVG9wTmF2YmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQWRtaW4vVG9wTmF2YmFyJztcclxuaW1wb3J0IExlZnRTaWRlYmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQWRtaW4vTGVmdFNpZGViYXInO1xyXG5pbXBvcnQgRWRpdFByb2R1Y3RNb2RhbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0FkbWluL01vZGFscy9FZGl0UHJvZHVjdE1vZGFsJztcclxuaW1wb3J0IFZpZXdQcm9kdWN0TW9kYWwgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9BZG1pbi9Nb2RhbHMvVmlld1Byb2R1Y3RNb2RhbCc7XHJcbmltcG9ydCB3aXRoQXV0aCBmcm9tICcuLi8uLi9oZWxwZXJzL3dpdGhBdXRoJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNsYXNzIFByb2R1Y3RzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIC8vIEVkaXQgUHJvZHVjdCBNb2RhbFxyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgZGlzcGxheTogZmFsc2UsXHJcbiAgICAgICAgcHJvZHVjdHM6IFtdLFxyXG4gICAgICAgIGxvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgbW9kYWxQcm9kdWN0OiB7XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlN1bm55bWUgUE9XRVIgVE9PTFMgUG9uY2hvc1wiLFxyXG4gICAgICAgICAgICBkaXNjb3VudDogZmFsc2UsXHJcbiAgICAgICAgICAgIGRpc2NvdW50T2ZmOiAwLFxyXG4gICAgICAgICAgICBpZDogXCI4MXRnaWdMMFUyelVIb1RqODVIdFwiLFxyXG4gICAgICAgICAgICBpbWFnZUhvdmVyVXJsOiBcImh0dHBzOi8vZGVtYXhpbi5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vaW1nLWhvdmVyOC0xNTg4NzA1NDY4Mzc0LmpwZ1wiLFxyXG4gICAgICAgICAgICBpbWFnZVVybDogXCJodHRwczovL2RlbWF4aW4uczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2ltZzgtMTU4ODcwNTQ2MjM3Ni5qcGdcIixcclxuICAgICAgICAgICAgbmV3UHJpY2U6IDIwMCxcclxuICAgICAgICAgICAgbmV3UHJvZHVjdDogZmFsc2UsXHJcbiAgICAgICAgICAgIG9mZmVyOiB0cnVlLFxyXG4gICAgICAgICAgICBvbGRQcmljZTogMjEwLFxyXG4gICAgICAgICAgICBvblNhbGU6IHRydWUsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIlN1bm55bWUgUE9XRVIgVE9PTFMgUG9uY2hvc1wiLFxyXG4gICAgICAgICAgICB0eXBlOiBcIldvbWVuIENsb3RoZXNcIlxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0b2dnbGVFZGl0UHJvZHVjdE1vZGFsID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBFZGl0UHJvZHVjdE1vZGFsOiAhdGhpcy5zdGF0ZS5FZGl0UHJvZHVjdE1vZGFsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIFZpZXcgUHJvZHVjdCBNb2RhbFxyXG4gICAgdG9nZ2xlVmlld1Byb2R1Y3RNb2RhbCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgVmlld1Byb2R1Y3RNb2RhbDogIXRoaXMuc3RhdGUuVmlld1Byb2R1Y3RNb2RhbFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZGF0YU1vZGFsID0gKHByb2R1Y3QpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgbW9kYWxQcm9kdWN0OiBwcm9kdWN0XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cocHJvZHVjdClcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIGNvbnN0IGRiID0gZmlyZWJhc2UuZmlyZXN0b3JlKCk7XHJcbiAgICAgICAgY29uc3QgZGJPcmRlclJlZiA9IGRiLmNvbGxlY3Rpb24oJ3Byb2R1Y3RzJyk7XHJcbiAgICAgICAgbGV0IHByb2R1Y3RzQXJyYXkgPSBbXTtcclxuICAgICAgICBkYk9yZGVyUmVmLmdldCgpXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgICByZXMuZm9yRWFjaChkb2MgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHByb2R1Y3RzT2JqID0gZG9jLmRhdGEoKTtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RzT2JqLmlkID0gZG9jLmlkO1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdHNBcnJheS5wdXNoKHByb2R1Y3RzT2JqKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0czogcHJvZHVjdHNBcnJheVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3InLCBlcnIpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCB7IHByb2R1Y3RzIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIDxUb3BOYXZiYXIgLz5cclxuICAgICAgICAgICAgICAgIDxMZWZ0U2lkZWJhciAvPlxyXG4gXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkbWluLW1haW4tY29udGVudCBkLWZsZXggZmxleC1jb2x1bW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5Qcm9kdWN0czwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRtaW4tcHJvZHVjdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0cy5sZW5ndGggPyBwcm9kdWN0cy5tYXAoKHByb2R1Y3QsIGlkeCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpZHh9IGNsYXNzTmFtZT1cImNvbC1sZy00IGNvbC1tZC02IGNvbC1zbS02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2luZ2xlLXByb2R1Y3RzLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0cy1pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjdmlld3Byb2R1Y3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy50b2dnbGVWaWV3UHJvZHVjdE1vZGFsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9kdWN0LmltYWdlVXJsfSBjbGFzc05hbWU9XCJtYWluLWltYWdlXCIgYWx0PVwiaW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Byb2R1Y3QuaW1hZ2VIb3ZlclVybH0gY2xhc3NOYW1lPVwiaG92ZXItaW1hZ2VcIiBhbHQ9XCJpbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Lm9uU2FsZSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2FsZS10YWdcIj5TYWxlITwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Lm5ldyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3LXRhZ1wiPk5ldyE8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHMtYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpc2hsaXN0LWJ0blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9hZG1pbi9wcm9kdWN0cycpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1Byb2R1Y3QgU3VjY2Vzc2Z1bGx5JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlVmlld1Byb2R1Y3RNb2RhbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YU1vZGFsKHByb2R1Y3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdieCBieC1zZWFyY2gtYWx0Jz48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidG9vbHRpcC1sYWJlbFwiPlZpZXc8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wYXJlLWJ0blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy50b2dnbGVFZGl0UHJvZHVjdE1vZGFsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2J4IGJ4LWVkaXQnPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0b29sdGlwLWxhYmVsXCI+RWRpdDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1aWNrLXZpZXctYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2J4IGJ4LXgnPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0b29sdGlwLWxhYmVsXCI+RGVsZXRlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0cy1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPntwcm9kdWN0LnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Lm9mZmVyID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib2xkLXByaWNlXCI+JHtwcm9kdWN0Lm9sZFByaWNlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmV3LXByaWNlXCI+JHtwcm9kdWN0Lm5ld1ByaWNlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuZXctcHJpY2VcIj4ke3Byb2R1Y3Qub2xkUHJpY2V9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBQYWdpbmF0aW9uICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyIGNvbC1tZC0xMiBjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2luYXRpb24tYXJlYSBhZG1pbi1wYWdpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwcmV2IHBhZ2UtbnVtYmVyc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nYnggYngtY2hldnJvbi1sZWZ0Jz48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBhZ2UtbnVtYmVycyBjdXJyZW50XCI+MTwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwYWdlLW51bWJlcnNcIj4yPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicGFnZS1udW1iZXJzXCI+MzwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5leHQgcGFnZS1udW1iZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdieCBieC1jaGV2cm9uLXJpZ2h0Jz48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgey8qIEZvb3RlciAqL31cclxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1ncm93LTFcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBTaWRlYmFyIE1vZGFsICovfVxyXG4gICAgICAgICAgICAgICAgPEVkaXRQcm9kdWN0TW9kYWwgXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy50b2dnbGVFZGl0UHJvZHVjdE1vZGFsfSBcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e3RoaXMuc3RhdGUuRWRpdFByb2R1Y3RNb2RhbCA/ICdhY3RpdmUnIDogJyd9IFxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxWaWV3UHJvZHVjdE1vZGFsIFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudG9nZ2xlVmlld1Byb2R1Y3RNb2RhbH0gXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXt0aGlzLnN0YXRlLlZpZXdQcm9kdWN0TW9kYWwgPyAnYWN0aXZlJyA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3Q9e3RoaXMuc3RhdGUubW9kYWxQcm9kdWN0fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQXV0aChQcm9kdWN0cyk7Il0sInNvdXJjZVJvb3QiOiIifQ==