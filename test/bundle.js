/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EUFuckingLaw = function EUFuckingLaw(_ref) {
  var parentSelector = _ref.parent,
      onCookiesAccepted = _ref.onCookiesAccepted,
      onCookiesRejected = _ref.onCookiesRejected,
      onCookiesRevoked = _ref.onCookiesRevoked,
      style = _ref.style;

  _classCallCheck(this, EUFuckingLaw);

  _initialiseProps.call(this);

  this.onCookiesAccepted = onCookiesAccepted;
  this.onCookiesRejected = onCookiesRejected;
  this.onCookiesRevoked = onCookiesRevoked;

  this.parent = null; // The container for the cookie bars
  this.cookieAcceptBar = null; // The cookiebar with the info text and got it / decline buttons
  this.cookieRevokeBar = null; // The cookie bar with the reject button after the cookie has been accepted

  this.accepted = false; // Whether cookies are accepted or not

  this.insertStyle(style);
  this.init(parentSelector);
};

var _initialiseProps = function _initialiseProps() {
  var _this = this;

  this.insertStyle = function (style) {
    if (style) {
      var fileName = 'css/' + style + '.css';

      var styleElement = document.createElement('link');
      styleElement.setAttribute('rel', 'stylesheet');
      styleElement.setAttribute('type', 'text/css');
      styleElement.setAttribute('href', fileName);
      console.log(document.head);
      document.head.appendChild(styleElement);
    }
  };

  this.init = function (parentSelector) {
    _this.parent = document.getElementById(parentSelector) || document.body;

    _this.cookieAcceptBar = document.createElement('div');
    _this.cookieAcceptBar.className = 'eufuckingcookie-acceptbar';

    var infoTextElement = document.createElement('p');
    infoTextElement.innerText = 'Diese Seite verwendet Cookies. NAch EU-Richtlinien sind wir verpflichtet, Ihnen dies mitzuteilen und Ihnen die M\xF6glichkeit zu gew\xE4hren,\n      Cookies f\xFCr diese Seite zu deaktivieren. Bitte beachten Sie jedoch, dass mit der Ablehnung der Cookies der Funktionsumfang der Seite\n      unter Umst\xE4nden eingeschr\xE4nkt wird.\n    ';
    _this.cookieAcceptBar.appendChild(infoTextElement);

    var rejectButton = document.createElement('button');
    rejectButton.className = 'eufuckingcookie-declinebutton';
    rejectButton.onclick = _this.rejectCookies;
    rejectButton.innerText = 'Decline';
    _this.cookieAcceptBar.appendChild(rejectButton);

    var acceptButton = document.createElement('button');
    acceptButton.className = 'eufuckingcookie-acceptbutton';
    acceptButton.onclick = _this.acceptCookies;
    acceptButton.innerText = 'Accept';
    _this.cookieAcceptBar.appendChild(acceptButton);

    _this.parent.appendChild(_this.cookieAcceptBar);
  };

  this.rejectCookies = function () {
    _this.accepted = true;
    _this.onCookiesRejected();
    _this.hide();
  };

  this.acceptCookies = function () {
    _this.accepted = false;
    _this.onCookiesAccepted();
    _this.hide();
  };

  this.hide = function () {
    _this.cookieAcceptBar.className += ' eufuckingcookie-acceptbar-hidden';
  };
};

exports.default = EUFuckingLaw;


window.EUFuckingLaw = EUFuckingLaw;

/***/ })
/******/ ]);