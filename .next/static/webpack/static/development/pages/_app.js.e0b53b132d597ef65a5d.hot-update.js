webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/NavBarMobile.js":
/*!************************************!*\
  !*** ./components/NavBarMobile.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NavBarMobile; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MenuList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuList */ "./components/MenuList.js");
var _jsxFileName = "/home/paul/temp/greenscapes-commercial/components/NavBarMobile.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var NavBarMobile =
/*#__PURE__*/
function (_Component) {
  _inherits(NavBarMobile, _Component);

  function NavBarMobile() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, NavBarMobile);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(NavBarMobile)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      active: true,
      skrill: false,
      neteller: false,
      ecopayz: false,
      menu: true,
      icon: true,
      loggedIn: ''
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggleClass", function () {
      _this.setState({
        active: !_this.state.active
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggleMenu", function () {
      _this.setState({
        menu: !_this.state.menu,
        icon: !_this.state.icon
      });
    });

    return _this;
  }

  _createClass(NavBarMobile, [{
    key: "render",
    value: function render() {
      var linkStyle = {
        backgroundColor: '#003249',
        color: 'white',
        textAlign: 'center'
      };
      var activeStyle = {
        backgroundColor: '#003249',
        color: '#80CED7',
        textAlign: 'center'
      };
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "navbar is-light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "navbar-brand",
        role: "navigation",
        "aria-label": "main navigation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/",
        style: {
          maxWidth: '150px',
          height: '100%',
          paddingTop: '1.5rem'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/images/logo.png",
        alt: "eWalletBooster logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        role: "button",
        className: this.state.active ? 'navbar-burger' : 'navbar-burger is-active',
        onClick: this.toggleClass,
        "aria-label": "menu",
        "aria-expanded": "false",
        "data-target": "navMobile",
        style: {
          backgroundColor: 'white'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: this.state.active ? 'navbar-menu' : 'navbar-menu is-active',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container",
        style: {
          padding: '1rem',
          backgroundColor: '#003249'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("aside", {
        className: "menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "menu-label",
        style: {
          color: 'white',
          textAlign: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, "Account"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "menu-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        style: linkStyle,
        onClick: this.toggleClass,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        style: {
          marginRight: '0.3rem'
        },
        className: "fa fa-home",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      })), "Home")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "menu-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "menu-label",
        style: {
          color: 'white',
          textAlign: 'center'
        },
        onClick: this.toggleMenu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        style: {
          marginRight: '0.3rem'
        },
        className: !this.state.icon ? 'fa fa-plus-circle' : 'fa fa-minus-circle',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      })), "Ewallets"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "menu-list",
        style: {
          display: this.state.menu ? 'block' : 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MenuList__WEBPACK_IMPORTED_MODULE_2__["default"], {
        brand: 'Neteller',
        link: 'neteller',
        toggleclassName: this.toggleClass,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "menu-list",
        style: {
          display: this.state.menu ? 'block' : 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MenuList__WEBPACK_IMPORTED_MODULE_2__["default"], {
        brand: 'Skrill',
        link: 'skrill',
        toggleclassName: this.toggleClass,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "menu-list",
        style: {
          display: this.state.menu ? 'block' : 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MenuList__WEBPACK_IMPORTED_MODULE_2__["default"], {
        brand: 'Ecopayz',
        link: 'ecopayz',
        toggleclassName: this.toggleClass,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "menu-label",
        style: {
          color: 'white',
          textAlign: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, "General"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "menu-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        style: linkStyle,
        onClick: this.toggleClass,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        style: {
          marginRight: '0.3rem'
        },
        className: "fa fa-envelope",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      })), "Contact"))))))));
    }
  }]);

  return NavBarMobile;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ })

})
//# sourceMappingURL=_app.js.e0b53b132d597ef65a5d.hot-update.js.map