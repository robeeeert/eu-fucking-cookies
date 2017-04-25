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
      _ref$allowReject = _ref.allowReject,
      allowReject = _ref$allowReject === undefined ? true : _ref$allowReject,
      _ref$allowRevoke = _ref.allowRevoke,
      allowRevoke = _ref$allowRevoke === undefined ? false : _ref$allowRevoke,
      style = _ref.style;

  _classCallCheck(this, EUFuckingLaw);

  _initialiseProps.call(this);

  this.onCookiesAccepted = onCookiesAccepted;
  this.onCookiesRejected = onCookiesRejected;
  this.onCookiesRevoked = onCookiesRevoked;

  this.allowRevoke = allowRevoke;
  this.allowReject = allowReject;
  this.cookieAcceptBar = null; // The cookiebar with the info text and got it / decline buttons
  this.cookieRevokeBar = null; // The cookie bar with the reject button after the cookie has been accepted

  this.init(parentSelector);
};

var _initialiseProps = function _initialiseProps() {
  var _this = this;

  this.init = function (parentSelector) {
    if (!_this.isCookieAccepted()) {
      _this.showAcceptCookieBar(parent);
    } else if (_this.allowRevoke) {
      _this.showRevokeBar(parent);
    }
  };

  this.showRevokeBar = function (parentSelector) {
    if (_this.cookieRevokeBar) {
      _this.cookieRevokeBar.className = _this.cookieRevokeBar.className.replace(/eufuckingcookie-revokebar-hidden/g, '');
    } else {
      var _parent = document.getElementById(parentSelector) || document.body;

      _this.cookieRevokeBar = document.createElement('div');
      _this.cookieRevokeBar.className = 'eufuckingcookie-revokebar';

      var infoTextElement = document.createElement('p');
      infoTextElement.innerText = 'According to EU laws we grant to you the possibility of revoking your agreement on cookie usage on this site.';
      _this.cookieRevokeBar.appendChild(infoTextElement);

      var revokeButton = document.createElement('button');
      revokeButton.className = 'eufuckingcookie-revokebutton';
      revokeButton.innerText = 'Revoke';
      revokeButton.onclick = _this.revokeCookies;
      _this.cookieRevokeBar.appendChild(revokeButton);

      _parent.appendChild(_this.cookieRevokeBar);
    }
  };

  this.showAcceptCookieBar = function (parentSelector) {
    if (_this.cookieAcceptBar) {
      _this.cookieAcceptBar.className = _this.cookieAcceptBar.className.replace(/eufuckingcookie-acceptbar-hidden/g, '');
    } else {
      var _parent2 = document.getElementById(parentSelector) || document.body;

      _this.cookieAcceptBar = document.createElement('div');
      _this.cookieAcceptBar.className = 'eufuckingcookie-acceptbar';

      var infoTextElement = document.createElement('p');
      infoTextElement.innerText = 'This site uses cookies. Due to EU laws we have to inform you about this.';
      _this.cookieAcceptBar.appendChild(infoTextElement);

      if (_this.allowReject) {
        var rejectButton = document.createElement('button');
        rejectButton.className = 'eufuckingcookie-declinebutton';
        rejectButton.onclick = _this.rejectCookies;
        rejectButton.innerText = 'Decline';
        _this.cookieAcceptBar.appendChild(rejectButton);
      }

      var acceptButton = document.createElement('button');
      acceptButton.className = 'eufuckingcookie-acceptbutton';
      acceptButton.onclick = _this.acceptCookies;
      acceptButton.innerText = 'Got it';
      _this.cookieAcceptBar.appendChild(acceptButton);

      _parent2.appendChild(_this.cookieAcceptBar);
    }
  };

  this.rejectCookies = function () {
    _this.unsetCookie();
    _this.onCookiesRejected && _this.onCookiesRejected();
    _this.hideAcceptBar();
  };

  this.acceptCookies = function () {
    _this.setCookie();
    _this.onCookiesAccepted && _this.onCookiesAccepted();
    _this.hideAcceptBar();
    _this.allowRevoke && _this.showRevokeBar();
  };

  this.revokeCookies = function () {
    _this.unsetCookie();
    _this.onCookiesRevoked && _this.onCookiesRevoked();
    _this.hideRevokeBar();
  };

  this.hideRevokeBar = function () {
    _this.cookieRevokeBar.className += ' eufuckingcookie-revokebar-hidden';
  };

  this.hideAcceptBar = function () {
    _this.cookieAcceptBar.className += ' eufuckingcookie-acceptbar-hidden';
  };

  this.isCookieAccepted = function () {
    return (/eufuckingcookies=allow/.test(document.cookie)
    );
  };

  this.setCookie = function () {
    document.cookie = 'eufuckingcookies=allow; expires=' + (new Date() + 30 * 7 * 24 * 60 * 60 * 1000);
  };

  this.unsetCookie = function () {
    document.cookie += 'eufuckingcookies=deny; expires=Thu, 01 Jan 1970 00:00:00 UTC';
  };
};

exports.default = EUFuckingLaw;


window.EUFuckingLaw = EUFuckingLaw;

/***/ })
/******/ ]);