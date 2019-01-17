webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/NavBar.js":
/*!******************************!*\
  !*** ./components/NavBar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/paul/temp/greenscapes-commercial/components/NavBar.js";

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




/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(
/*#__PURE__*/
function (_Component) {
  _inherits(NavBar, _Component);

  function NavBar() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, NavBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(NavBar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      active: true
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggleClass", function () {
      _this.setState({
        active: !_this.state.active
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "logout", function () {
      localStorage.removeItem('jwtToken');
      window.location.reload();
    });

    return _this;
  }

  _createClass(NavBar, [{
    key: "render",
    value: function render() {
      // const activeStyle = {            
      //     color: '#003249',
      //     fontWeight: 'bold'
      // }
      var linkStyle = {
        color: '#1C541D'
      };
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "navbar",
        style: {
          height: '75px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "navbar-brand",
        role: "navigation",
        "aria-label": "main navigation",
        style: {
          display: 'flex',
          alignItems: 'bottom',
          padding: '0.5rem'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/",
        style: {
          maxWidth: '160px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/images/logo.png",
        alt: "eWalletBooster",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "navbar-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "navbar-end",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "navbar-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/skrill/cashback",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "navbar-item",
        style: linkStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        style: {
          marginRight: '0.5rem',
          color: '#1C541D'
        },
        className: "fa fa-home",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      })), "Home"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "navbar-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/skrill/cashback",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "navbar-item",
        style: linkStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        style: {
          marginRight: '0.5rem',
          color: '#1C541D'
        },
        className: "fa fa-user",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      })), "About"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "navbar-item has-dropdown is-hoverable",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/neteller/cashback",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "navbar-link",
        style: linkStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        style: {
          marginRight: '0.5rem',
          color: '#1C541D'
        },
        className: "fa fa-cogs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      })), "Services")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropDownItems, {
        brand: 'Neteller',
        link: 'neteller',
        color: '#83ba3b',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "navbar-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/skrill/cashback",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "navbar-item",
        style: linkStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        style: {
          marginRight: '0.5rem',
          color: '#1C541D'
        },
        className: "fa fa-comments",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      })), "Reviews"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "navbar-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/skrill/cashback",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "navbar-item",
        style: linkStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        style: {
          marginRight: '0.5rem',
          color: '#1C541D'
        },
        className: "fa fa-map",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      })), "Areas"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "navbar-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "button is-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        style: {
          color: 'white'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
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
          marginRight: '0.5rem'
        },
        className: "fa fa-envelope",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      })), "Free Quotation"))))))));
    }
  }]);

  return NavBar;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"])));

var DropDownItems = function DropDownItems(props) {
  var linkStyle = {
    color: 'black'
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "navbar-dropdown",
    role: "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dropdown-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/".concat(props.link, "/cashback"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "navbar-item",
    style: linkStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    style: {
      marginRight: '0.5rem',
      color: props.color,
      fontWeight: 'bold'
    },
    className: "fa fa-usd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, props.brand, " "), " Cashback Scheme"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "dropdown-divider",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/".concat(props.link, "/review"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "navbar-item",
    style: linkStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    style: {
      marginRight: '0.5rem',
      color: props.color,
      fontWeight: 'bold'
    },
    className: "fa fa-graduation-cap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  })), props.brand, " Information")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "dropdown-divider",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/".concat(props.link, "/cashback#application"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "navbar-item",
    style: linkStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    style: {
      marginRight: '0.5rem',
      color: props.color,
      fontWeight: 'bold'
    },
    className: "fa fa-check",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  })), "Submit Application"))));
};

/***/ })

})
//# sourceMappingURL=_app.js.ef05302960f03517865a.hot-update.js.map