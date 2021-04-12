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
              req;
              console.log('Product Successfully added!', data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vcHJvZHVjdHMuanMiXSwibmFtZXMiOlsiUHJvZHVjdHMiLCJkaXNwbGF5IiwicHJvZHVjdHMiLCJsb2FkaW5nIiwibW9kYWxQcm9kdWN0IiwiZGVzY3JpcHRpb24iLCJkaXNjb3VudCIsImRpc2NvdW50T2ZmIiwiaWQiLCJpbWFnZUhvdmVyVXJsIiwiaW1hZ2VVcmwiLCJuZXdQcmljZSIsIm5ld1Byb2R1Y3QiLCJvZmZlciIsIm9sZFByaWNlIiwib25TYWxlIiwidGl0bGUiLCJ0eXBlIiwic2V0U3RhdGUiLCJFZGl0UHJvZHVjdE1vZGFsIiwic3RhdGUiLCJWaWV3UHJvZHVjdE1vZGFsIiwicHJvZHVjdCIsImRiIiwiZmlyZWJhc2UiLCJmaXJlc3RvcmUiLCJkYk9yZGVyUmVmIiwiY29sbGVjdGlvbiIsInByb2R1Y3RzQXJyYXkiLCJnZXQiLCJ0aGVuIiwicmVzIiwiZm9yRWFjaCIsImRvYyIsInByb2R1Y3RzT2JqIiwiZGF0YSIsInB1c2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwibWFwIiwiaWR4IiwidG9nZ2xlVmlld1Byb2R1Y3RNb2RhbCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImF4aW9zIiwicG9zdCIsInJlcSIsImRhdGFNb2RhbCIsInRvZ2dsZUVkaXRQcm9kdWN0TW9kYWwiLCJDb21wb25lbnQiLCJ3aXRoQXV0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsUTs7Ozs7Ozs7Ozs7Ozs7OztnTkFFTTtBQUNKQyxhQUFPLEVBQUUsS0FETDtBQUVKQyxjQUFRLEVBQUUsRUFGTjtBQUdKQyxhQUFPLEVBQUUsSUFITDtBQUlKQyxrQkFBWSxFQUFFO0FBQ1ZDLG1CQUFXLEVBQUUsNkJBREg7QUFFVkMsZ0JBQVEsRUFBRSxLQUZBO0FB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RUFBQztBQUFoQixvQkFGSixDQURKLENBREosQ0FESixDQTdCSixDQURKLENBcEJKLENBREosRUFpRUk7QUFBSyxtQkFBUyxFQUFDO0FBQWYsV0FDSSxrQkFBSzVCLE9BQU8sQ0FBQ04sS0FBYixDQURKLEVBRUk7QUFBSyxtQkFBUyxFQUFDO0FBQWYsV0FFUU0sT0FBTyxDQUFDVCxLQUFSLEdBQ0ksTUFBQyw0Q0FBRCxDQUFPLFFBQVAsUUFDSTtBQUFNLG1CQUFTLEVBQUM7QUFBaEIsZ0JBQThCUyxPQUFPLENBQUNSLFFBQXRDLENBREosRUFFSTtBQUFNLG1CQUFTLEVBQUM7QUFBaEIsZ0JBQThCUSxPQUFPLENBQUNYLFFBQXRDLENBRkosQ0FESixHQU1JO0FBQU0sbUJBQVMsRUFBQztBQUFoQixnQkFBOEJXLE9BQU8sQ0FBQ1IsUUFBdEMsQ0FSWixDQUZKLENBakVKLENBREosQ0FENEI7QUFBQSxPQUFiLENBQWxCLEdBb0ZJLElBckZULENBREosQ0FMSixFQTJIRztBQUFLLGlCQUFTLEVBQUM7QUFBZixRQTNISCxDQUpKLEVBbUlJLE1BQUMsa0ZBQUQ7QUFDSSxlQUFPLEVBQUUsS0FBS29DLHNCQURsQjtBQUVJLGNBQU0sRUFBRSxLQUFLOUIsS0FBTCxDQUFXRCxnQkFBWCxHQUE4QixRQUE5QixHQUF5QztBQUZyRCxRQW5JSixFQXVJSSxNQUFDLGtGQUFEO0FBQ0ksZUFBTyxFQUFFLEtBQUt3QixzQkFEbEI7QUFFSSxjQUFNLEVBQUUsS0FBS3ZCLEtBQUwsQ0FBV0MsZ0JBQVgsR0FBOEIsUUFBOUIsR0FBeUMsRUFGckQ7QUFHSSxlQUFPLEVBQUUsS0FBS0QsS0FBTCxDQUFXaEI7QUFIeEIsUUF2SUosQ0FESjtBQStJSDs7OztFQWhOa0IrQywrQzs7QUFtTlIsb0VBQUFDLGtFQUFRLENBQUNwRCxRQUFELENBQXZCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL3Byb2R1Y3RzLmM4ZTE3N2QzZGI0NjFhMWVjOTUxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBmaXJlYmFzZSB9IGZyb20gJy4uLy4uL2ZpcmViYXNlJztcclxuaW1wb3J0IFRvcE5hdmJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0FkbWluL1RvcE5hdmJhcic7XHJcbmltcG9ydCBMZWZ0U2lkZWJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0FkbWluL0xlZnRTaWRlYmFyJztcclxuaW1wb3J0IEVkaXRQcm9kdWN0TW9kYWwgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9BZG1pbi9Nb2RhbHMvRWRpdFByb2R1Y3RNb2RhbCc7XHJcbmltcG9ydCBWaWV3UHJvZHVjdE1vZGFsIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQWRtaW4vTW9kYWxzL1ZpZXdQcm9kdWN0TW9kYWwnO1xyXG5pbXBvcnQgd2l0aEF1dGggZnJvbSAnLi4vLi4vaGVscGVycy93aXRoQXV0aCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jbGFzcyBQcm9kdWN0cyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICAvLyBFZGl0IFByb2R1Y3QgTW9kYWxcclxuICAgIHN0YXRlID0ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZhbHNlLFxyXG4gICAgICAgIHByb2R1Y3RzOiBbXSxcclxuICAgICAgICBsb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgIG1vZGFsUHJvZHVjdDoge1xyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJTdW5ueW1lIFBPV0VSIFRPT0xTIFBvbmNob3NcIixcclxuICAgICAgICAgICAgZGlzY291bnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBkaXNjb3VudE9mZjogMCxcclxuICAgICAgICAgICAgaWQ6IFwiODF0Z2lnTDBVMnpVSG9Uajg1SHRcIixcclxuICAgICAgICAgICAgaW1hZ2VIb3ZlclVybDogXCJodHRwczovL2RlbWF4aW4uczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2ltZy1ob3ZlcjgtMTU4ODcwNTQ2ODM3NC5qcGdcIixcclxuICAgICAgICAgICAgaW1hZ2VVcmw6IFwiaHR0cHM6Ly9kZW1heGluLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9pbWc4LTE1ODg3MDU0NjIzNzYuanBnXCIsXHJcbiAgICAgICAgICAgIG5ld1ByaWNlOiAyMDAsXHJcbiAgICAgICAgICAgIG5ld1Byb2R1Y3Q6IGZhbHNlLFxyXG4gICAgICAgICAgICBvZmZlcjogdHJ1ZSxcclxuICAgICAgICAgICAgb2xkUHJpY2U6IDIxMCxcclxuICAgICAgICAgICAgb25TYWxlOiB0cnVlLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJTdW5ueW1lIFBPV0VSIFRPT0xTIFBvbmNob3NcIixcclxuICAgICAgICAgICAgdHlwZTogXCJXb21lbiBDbG90aGVzXCJcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdG9nZ2xlRWRpdFByb2R1Y3RNb2RhbCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgRWRpdFByb2R1Y3RNb2RhbDogIXRoaXMuc3RhdGUuRWRpdFByb2R1Y3RNb2RhbFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBWaWV3IFByb2R1Y3QgTW9kYWxcclxuICAgIHRvZ2dsZVZpZXdQcm9kdWN0TW9kYWwgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIFZpZXdQcm9kdWN0TW9kYWw6ICF0aGlzLnN0YXRlLlZpZXdQcm9kdWN0TW9kYWxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGRhdGFNb2RhbCA9IChwcm9kdWN0KSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIG1vZGFsUHJvZHVjdDogcHJvZHVjdFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHByb2R1Y3QpXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICBjb25zdCBkYiA9IGZpcmViYXNlLmZpcmVzdG9yZSgpO1xyXG4gICAgICAgIGNvbnN0IGRiT3JkZXJSZWYgPSBkYi5jb2xsZWN0aW9uKCdwcm9kdWN0cycpO1xyXG4gICAgICAgIGxldCBwcm9kdWN0c0FycmF5ID0gW107XHJcbiAgICAgICAgZGJPcmRlclJlZi5nZXQoKVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgICAgcmVzLmZvckVhY2goZG9jID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBwcm9kdWN0c09iaiA9IGRvYy5kYXRhKCk7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0c09iai5pZCA9IGRvYy5pZDtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RzQXJyYXkucHVzaChwcm9kdWN0c09iailcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdHM6IHByb2R1Y3RzQXJyYXlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yJywgZXJyKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQgeyBwcm9kdWN0cyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICA8VG9wTmF2YmFyIC8+XHJcbiAgICAgICAgICAgICAgICA8TGVmdFNpZGViYXIgLz5cclxuIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZG1pbi1tYWluLWNvbnRlbnQgZC1mbGV4IGZsZXgtY29sdW1uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+UHJvZHVjdHM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkbWluLXByb2R1Y3RzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdHMubGVuZ3RoID8gcHJvZHVjdHMubWFwKChwcm9kdWN0LCBpZHgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aWR4fSBjbGFzc05hbWU9XCJjb2wtbGctNCBjb2wtbWQtNiBjb2wtc20tNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS1wcm9kdWN0cy1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHMtaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI3ZpZXdwcm9kdWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMudG9nZ2xlVmlld1Byb2R1Y3RNb2RhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cHJvZHVjdC5pbWFnZVVybH0gY2xhc3NOYW1lPVwibWFpbi1pbWFnZVwiIGFsdD1cImltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9kdWN0LmltYWdlSG92ZXJVcmx9IGNsYXNzTmFtZT1cImhvdmVyLWltYWdlXCIgYWx0PVwiaW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5vblNhbGUgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNhbGUtdGFnXCI+U2FsZSE8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5uZXcgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ldy10YWdcIj5OZXchPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RzLWJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aXNobGlzdC1idG5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjQwMDAvYWRtaW4vcHJvZHVjdHMnKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUHJvZHVjdCBTdWNjZXNzZnVsbHkgYWRkZWQhJywgZGF0YSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZVZpZXdQcm9kdWN0TW9kYWwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFNb2RhbChwcm9kdWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nYnggYngtc2VhcmNoLWFsdCc+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRvb2x0aXAtbGFiZWxcIj5WaWV3PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcGFyZS1idG5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMudG9nZ2xlRWRpdFByb2R1Y3RNb2RhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdieCBieC1lZGl0Jz48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidG9vbHRpcC1sYWJlbFwiPkVkaXQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdWljay12aWV3LWJ0blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdieCBieC14Jz48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidG9vbHRpcC1sYWJlbFwiPkRlbGV0ZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHMtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57cHJvZHVjdC50aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5vZmZlciA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm9sZC1wcmljZVwiPiR7cHJvZHVjdC5vbGRQcmljZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5ldy1wcmljZVwiPiR7cHJvZHVjdC5uZXdQcmljZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmV3LXByaWNlXCI+JHtwcm9kdWN0Lm9sZFByaWNlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogUGFnaW5hdGlvbiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMiBjb2wtbWQtMTIgY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdpbmF0aW9uLWFyZWEgYWRtaW4tcGFnaVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicHJldiBwYWdlLW51bWJlcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2J4IGJ4LWNoZXZyb24tbGVmdCc+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYWdlLW51bWJlcnMgY3VycmVudFwiPjE8L3NwYW4+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicGFnZS1udW1iZXJzXCI+MjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInBhZ2UtbnVtYmVyc1wiPjM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuZXh0IHBhZ2UtbnVtYmVyc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nYnggYngtY2hldnJvbi1yaWdodCc+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgIHsvKiBGb290ZXIgKi99XHJcbiAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtZ3Jvdy0xXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogU2lkZWJhciBNb2RhbCAqL31cclxuICAgICAgICAgICAgICAgIDxFZGl0UHJvZHVjdE1vZGFsIFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudG9nZ2xlRWRpdFByb2R1Y3RNb2RhbH0gXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXt0aGlzLnN0YXRlLkVkaXRQcm9kdWN0TW9kYWwgPyAnYWN0aXZlJyA6ICcnfSBcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8Vmlld1Byb2R1Y3RNb2RhbCBcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnRvZ2dsZVZpZXdQcm9kdWN0TW9kYWx9IFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17dGhpcy5zdGF0ZS5WaWV3UHJvZHVjdE1vZGFsID8gJ2FjdGl2ZScgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0PXt0aGlzLnN0YXRlLm1vZGFsUHJvZHVjdH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEF1dGgoUHJvZHVjdHMpOyJdLCJzb3VyY2VSb290IjoiIn0=