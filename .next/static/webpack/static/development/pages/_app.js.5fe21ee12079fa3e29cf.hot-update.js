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
      menu: false,
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
        backgroundColor: '#1C541D',
        color: 'white',
        textAlign: 'center'
      };
      var services = ['Grounds Management', 'Business & Retail Maintenance', 'School Maintenance', 'Hedge & Shrub Maintenance', 'Landscaping & Planting', 'Interior Plant Displays', 'Lawn Care', 'Outdoor Cleaning', 'Spraying & Vegetation Control', 'Tree Surgery', 'Graffiti Removal', 'Jet & Pressure Washing'];
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "navbar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "navbar-brand",
        role: "navigation",
        "aria-label": "main navigation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/",
        style: {
          maxWidth: '150px',
          height: '100%',
          padding: '1.5rem 0 0.5rem 0.5rem'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/images/logo.png",
        alt: "eWalletBooster logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
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
          backgroundColor: 'white',
          alignSelf: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: this.state.active ? 'navbar-menu' : 'navbar-menu is-active',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container",
        style: {
          padding: '1rem',
          backgroundColor: '#1C541D'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("aside", {
        className: "menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
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
          lineNumber: 71
        },
        __self: this
      }, "General"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "menu-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        style: linkStyle,
        onClick: this.toggleClass,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        style: {
          marginRight: '0.3rem'
        },
        className: "fa fa-home",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      })), "ome"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        style: linkStyle,
        onClick: this.toggleClass,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        style: {
          marginRight: '0.3rem'
        },
        className: "fa fa-user",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      })), "About us"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        style: linkStyle,
        onClick: this.toggleClass,
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
        className: "fa fa-map",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      })), "Areas"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        style: linkStyle,
        onClick: this.toggleMenu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-exchange",
        style: {
          marginRight: '0.3rem'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      })), "Services", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        style: {
          marginLeft: '0.3rem'
        },
        className: !this.state.icon ? 'fa fa-chevron-circle-up' : 'fa fa-chevron-circle-down',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          display: this.state.menu ? 'block' : 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, services.map(function (service, index) {
        var url = "/".concat(service.split(' ').join('-').toLowerCase().replace('-&', ''));
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
          key: index,
          href: url,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          style: linkStyle,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          },
          __self: this
        }, service));
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "menu-label",
        style: {
          color: 'white',
          textAlign: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, "Get in touch"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "menu-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        style: linkStyle,
        onClick: this.toggleClass,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        style: {
          marginRight: '0.3rem'
        },
        className: "fa fa-envelope",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      })), "Contact"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        style: linkStyle,
        onClick: this.toggleClass,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        style: {
          marginRight: '0.3rem'
        },
        className: "fa fa-comments",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      })), "Reviews"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        style: linkStyle,
        onClick: this.toggleClass,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        style: {
          marginRight: '0.3rem'
        },
        className: "fa fa-facebook",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      })), "Facebook"))))))));
    }
  }]);

  return NavBarMobile;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ })

})
//# sourceMappingURL=_app.js.5fe21ee12079fa3e29cf.hot-update.js.map