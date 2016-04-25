(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
	return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

var _razilobindCore = require('razilobind-core');

var _razilobindAlterer = require('razilobind-alterer');

var _razilobindBinder = require('razilobind-binder');

var _razilobindResolver = require('razilobind-resolver');

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && ((typeof call === "undefined" ? "undefined" : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof2(superClass)));
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/**
 * RaziloBind Binding Library
 * Packages up the module with extension support if running as complete standalone binder to allow direct injected alterers, binders and resolvers
 * Offers View-Model binding between js object and html view
 */

var RaziloBind = function (_RaziloBindCore) {
	_inherits(RaziloBind, _RaziloBindCore);

	function RaziloBind(options) {
		_classCallCheck(this, RaziloBind);

		// Inject default alterers

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(RaziloBind).call(this, options));

		_razilobindCore.RaziloBindCoreDetector.defaultAlterers = {
			TrimAlterer: _razilobindAlterer.RaziloBindTrimAlterer,
			JsonAlterer: _razilobindAlterer.RaziloBindJsonAlterer,
			NotAlterer: _razilobindAlterer.RaziloBindNotAlterer,
			PrefixAlterer: _razilobindAlterer.RaziloBindPrefixAlterer,
			SuffixAlterer: _razilobindAlterer.RaziloBindSuffixAlterer,
			DateAlterer: _razilobindAlterer.RaziloBindDateAlterer,
			JoinAlterer: _razilobindAlterer.RaziloBindJoinAlterer
		};

		// Inject default binders
		_razilobindCore.RaziloBindCoreDetector.defaultBinders = {
			ForBinder: _razilobindBinder.RaziloBindForBinder,
			TextBinder: _razilobindBinder.RaziloBindTextBinder,
			HtmlBinder: _razilobindBinder.RaziloBindHtmlBinder,
			ShowBinder: _razilobindBinder.RaziloBindShowBinder,
			HideBinder: _razilobindBinder.RaziloBindHideBinder,
			StyleBinder: _razilobindBinder.RaziloBindStyleBinder,
			ClassBinder: _razilobindBinder.RaziloBindClassBinder,
			AttributeBinder: _razilobindBinder.RaziloBindAttributeBinder,
			IfBinder: _razilobindBinder.RaziloBindIfBinder,
			ElseBinder: _razilobindBinder.RaziloBindElseBinder,
			ValueBinder: _razilobindBinder.RaziloBindValueBinder,
			CheckedBinder: _razilobindBinder.RaziloBindCheckedBinder,
			EventBinder: _razilobindBinder.RaziloBindEventBinder
		};

		// Inject default resolvers
		_razilobindCore.RaziloBindCoreDetector.defaultResolvers = {
			BooleanResolver: _razilobindResolver.RaziloBindBooleanResolver,
			PropertyResolver: _razilobindResolver.RaziloBindPropertyResolver,
			MethodResolver: _razilobindResolver.RaziloBindMethodResolver,
			StringResolver: _razilobindResolver.RaziloBindStringResolver,
			NumberResolver: _razilobindResolver.RaziloBindNumberResolver,
			ObjectResolver: _razilobindResolver.RaziloBindObjectResolver,
			ArrayResolver: _razilobindResolver.RaziloBindArrayResolver,
			PhantomResolver: _razilobindResolver.RaziloBindPhantomResolver
		};
		return _this;
	}

	/**
  * addAlterers()
  * Add custom alterers
  *
  * @param array alterers An array of custom alterers to inject into Detector
  */

	_createClass(RaziloBind, [{
		key: 'addAlterers',
		value: function addAlterers(alterers) {
			if (!alterers || (typeof alterers === 'undefined' ? 'undefined' : _typeof(alterers)) !== 'object') return;
			_razilobindCore.RaziloBindCoreDetector.customAlterers = alterers;
		}

		/**
   * addBinder()
   * Add custom binders
   *
   * @param array binders An array of custom binders to inject into Detector
   */

	}, {
		key: 'addBinders',
		value: function addBinders(binders) {
			if (!binders || (typeof binders === 'undefined' ? 'undefined' : _typeof(binders)) !== 'object') return;
			_razilobindCore.RaziloBindCoreDetector.customBinders = binders;
		}

		/**
   * addResolvers()
   * Add custom resolvers
   *
   * @param array resolvers An array of custom resolvers to inject into Detector
   */

	}, {
		key: 'addResolvers',
		value: function addResolvers(resolvers) {
			if (!resolvers || (typeof resolvers === 'undefined' ? 'undefined' : _typeof(resolvers)) !== 'object') return;
			_razilobindCore.RaziloBindCoreDetector.customResolvers = resolvers;
		}
	}]);

	return RaziloBind;
}(_razilobindCore.RaziloBindCore);

exports.default = RaziloBind;

},{"razilobind-alterer":2,"razilobind-binder":11,"razilobind-core":26,"razilobind-resolver":31}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.RaziloBindTrimAlterer = exports.RaziloBindSuffixAlterer = exports.RaziloBindPrefixAlterer = exports.RaziloBindNotAlterer = exports.RaziloBindJsonAlterer = exports.RaziloBindJoinAlterer = exports.RaziloBindDateAlterer = exports.RaziloBindAlterer = undefined;

var _alterer = require('./src/alterer.js');

var _alterer2 = _interopRequireDefault(_alterer);

var _dateAlterer = require('./src/date.alterer.js');

var _dateAlterer2 = _interopRequireDefault(_dateAlterer);

var _joinAlterer = require('./src/join.alterer.js');

var _joinAlterer2 = _interopRequireDefault(_joinAlterer);

var _jsonAlterer = require('./src/json.alterer.js');

var _jsonAlterer2 = _interopRequireDefault(_jsonAlterer);

var _notAlterer = require('./src/not.alterer.js');

var _notAlterer2 = _interopRequireDefault(_notAlterer);

var _prefixAlterer = require('./src/prefix.alterer.js');

var _prefixAlterer2 = _interopRequireDefault(_prefixAlterer);

var _suffixAlterer = require('./src/suffix.alterer.js');

var _suffixAlterer2 = _interopRequireDefault(_suffixAlterer);

var _trimAlterer = require('./src/trim.alterer.js');

var _trimAlterer2 = _interopRequireDefault(_trimAlterer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.RaziloBindAlterer = _alterer2.default;
exports.RaziloBindDateAlterer = _dateAlterer2.default;
exports.RaziloBindJoinAlterer = _joinAlterer2.default;
exports.RaziloBindJsonAlterer = _jsonAlterer2.default;
exports.RaziloBindNotAlterer = _notAlterer2.default;
exports.RaziloBindPrefixAlterer = _prefixAlterer2.default;
exports.RaziloBindSuffixAlterer = _suffixAlterer2.default;
exports.RaziloBindTrimAlterer = _trimAlterer2.default;

},{"./src/alterer.js":3,"./src/date.alterer.js":4,"./src/join.alterer.js":5,"./src/json.alterer.js":6,"./src/not.alterer.js":7,"./src/prefix.alterer.js":8,"./src/suffix.alterer.js":9,"./src/trim.alterer.js":10}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Alterer
 * Generic alterer methods used accross all alterers
 */

var Alterer = function () {
	function Alterer() {
		_classCallCheck(this, Alterer);

		this.name = undefined;
		this.accepts = [];
	}

	_createClass(Alterer, [{
		key: "detect",
		value: function detect(name, resolved) {
			if (name !== this.name) return false;
			if (this.accepts.length !== 0 && this.accepts.indexOf(typeof resolved === "undefined" ? "undefined" : _typeof(resolved)) < 0) return false;
			return true;
		}
	}]);

	return Alterer;
}();

exports.default = Alterer;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alterer = require('./alterer.js');

var _alterer2 = _interopRequireDefault(_alterer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Date Alterer
 * Alters various data to a date string in (options) format
 *
 * Inspired by dateFormat https://github.com/felixge/node-dateformat/blob/master/lib/dateformat.js by Steven Levithan <stevenlevithan.com>
 *
 * Inherits
 *
 * properties: name, accepts, options
 * method: detect(name, resolved) { return bool }
 *
 * PORTED FROM: dateFormat https://github.com/felixge/node-dateformat/blob/master/lib/dateformat.js
 * Date Format 1.2.3
 * (c) 2007-2009 Steven Levithan <stevenlevithan.com>
 * MIT license
 *
 * Includes enhancements by Scott Trenda <scott.trenda.net>
 * and Kris Kowal <cixar.com/~kris.kowal/>
 *
 * Accepts a date, a mask, or a date and a mask.
 * Returns a formatted version of the given date.
 * The date defaults to the current date/time.
 * The mask defaults to dateFormat.masks.default.
 */

var DateAlterer = function (_Alterer) {
	_inherits(DateAlterer, _Alterer);

	function DateAlterer() {
		_classCallCheck(this, DateAlterer);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DateAlterer).call(this));

		_this.name = 'date';
		_this.accepts = ['string', 'number', 'object', 'symbol'];
		_this.token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|'[^']*'|'[^']*'/g;
		_this.timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g;
		_this.timezoneClip = /[^-+\dA-Z]/g;

		_this.masks = {
			'default': 'ddd mmm dd yyyy HH:MM:ss',
			'shortDate': 'm/d/yy',
			'mediumDate': 'mmm d, yyyy',
			'longDate': 'mmmm d, yyyy',
			'fullDate': 'dddd, mmmm d, yyyy',
			'shortTime': 'h:MM TT',
			'mediumTime': 'h:MM:ss TT',
			'longTime': 'h:MM:ss TT Z',
			'isoDate': 'yyyy-mm-dd',
			'isoTime': 'HH:MM:ss',
			'isoDateTime': 'yyyy-mm-dd\'T\'HH:MM:sso',
			'isoUtcDateTime': 'UTC:yyyy-mm-dd\'T\'HH:MM:ss\'Z\'',
			'expiresHeaderFormat': 'ddd, dd mmm yyyy HH:MM:ss Z'
		};

		_this.i18n = {
			dayNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			monthNames: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
		};
		return _this;
	}

	/**
  * alter()
  * Changes resolved data based on options
  * @param mixed resolved The data to change
  * @param mixed options Any options sent in with the alterer
  * @return mixed Changed resolved data
  */


	_createClass(DateAlterer, [{
		key: 'alter',
		value: function alter(resolved, options) {
			var dateObj = void 0;
			if ((typeof resolved === 'undefined' ? 'undefined' : _typeof(resolved)) === 'symbol') dateObj = new Date(String(Symbol(resolved)));else if ((typeof resolved === 'undefined' ? 'undefined' : _typeof(resolved)) !== 'object') dateObj = new Date(resolved);else if (resolved instanceof Date) dateObj = resolved;else dateObj = new Date();

			return this.dateFormat(dateObj, options);
		}
	}, {
		key: 'dateFormat',
		value: function dateFormat(date, mask, utc, gmt) {
			mask = String(this.masks[mask] || mask || this.masks['default']);

			// Allow setting the utc/gmt argument via the mask
			var maskSlice = mask.slice(0, 4);
			if (maskSlice === 'UTC:' || maskSlice === 'GMT:') {
				mask = mask.slice(4);
				utc = true;
				if (maskSlice === 'GMT:') gmt = true;
			}

			var _ = utc ? 'getUTC' : 'get';
			var d = date[_ + 'Date']();
			var D = date[_ + 'Day']();
			var m = date[_ + 'Month']();
			var y = date[_ + 'FullYear']();
			var H = date[_ + 'Hours']();
			var M = date[_ + 'Minutes']();
			var s = date[_ + 'Seconds']();
			var L = date[_ + 'Milliseconds']();
			var o = utc ? 0 : date.getTimezoneOffset();
			var W = this.getWeek(date);
			var N = this.getDayOfWeek(date);
			var flags = {
				d: d,
				dd: this.pad(d),
				ddd: this.i18n.dayNames[D],
				dddd: this.i18n.dayNames[D + 7],
				m: m + 1,
				mm: this.pad(m + 1),
				mmm: this.i18n.monthNames[m],
				mmmm: this.i18n.monthNames[m + 12],
				yy: String(y).slice(2),
				yyyy: y,
				h: H % 12 || 12,
				hh: this.pad(H % 12 || 12),
				H: H,
				HH: this.pad(H),
				M: M,
				MM: this.pad(M),
				s: s,
				ss: this.pad(s),
				l: this.pad(L, 3),
				L: this.pad(Math.round(L / 10)),
				t: H < 12 ? 'a' : 'p',
				tt: H < 12 ? 'am' : 'pm',
				T: H < 12 ? 'A' : 'P',
				TT: H < 12 ? 'AM' : 'PM',
				Z: gmt ? 'GMT' : utc ? 'UTC' : (String(date).match(this.timezone) || ['']).pop().replace(this.timezoneClip, ''),
				o: (o > 0 ? '-' : '+') + this.pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
				S: ['th', 'st', 'nd', 'rd'][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10],
				W: W,
				N: N
			};

			return mask.replace(this.token, function (match) {
				if (match in flags) return flags[match];
				return match.slice(1, match.length - 1);
			});
		}

		/**
   * Get the ISO 8601 week number
   * Based on comments from
   * http://techblog.procurios.nl/k/n618/news/view/33796/14863/Calculate-ISO-8601-week-and-year-in-javascript.html
   *
   * @param  {Object} `date`
   * @return {Number}
   */

	}, {
		key: 'getWeek',
		value: function getWeek(date) {
			// Remove time components of date
			var targetThursday = new Date(date.getFullYear(), date.getMonth(), date.getDate());

			// Change date to Thursday same week
			targetThursday.setDate(targetThursday.getDate() - (targetThursday.getDay() + 6) % 7 + 3);

			// Take January 4th as it is always in week 1 (see ISO 8601)
			var firstThursday = new Date(targetThursday.getFullYear(), 0, 4);

			// Change date to Thursday same week
			firstThursday.setDate(firstThursday.getDate() - (firstThursday.getDay() + 6) % 7 + 3);

			// Check if daylight-saving-time-switch occured and correct for it
			var ds = targetThursday.getTimezoneOffset() - firstThursday.getTimezoneOffset();
			targetThursday.setHours(targetThursday.getHours() - ds);

			// Number of weeks between target Thursday and first Thursday
			var weekDiff = (targetThursday - firstThursday) / (86400000 * 7);
			return 1 + Math.floor(weekDiff);
		}

		/**
   * Get ISO-8601 numeric representation of the day of the week
   * 1 (for Monday) through 7 (for Sunday)
   *
   * @param  {Object} `date`
   * @return {Number}
   */

	}, {
		key: 'getDayOfWeek',
		value: function getDayOfWeek(date) {
			var dow = date.getDay();
			if (dow === 0) dow = 7;
			return dow;
		}
	}, {
		key: 'pad',
		value: function pad(val, len) {
			val = String(val);
			len = len || 2;
			while (val.length < len) {
				val = '0' + val;
			}return val;
		}
	}]);

	return DateAlterer;
}(_alterer2.default);

exports.default = DateAlterer;

},{"./alterer.js":3}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alterer = require('./alterer.js');

var _alterer2 = _interopRequireDefault(_alterer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Join Alterer
 * Joins the values of object or array as a string
 *
 * Inherits
 *
 * properties: name, accepts, options
 * method: detect(name, resolved) { return bool }
 */

var JoinAlterer = function (_Alterer) {
	_inherits(JoinAlterer, _Alterer);

	function JoinAlterer() {
		_classCallCheck(this, JoinAlterer);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(JoinAlterer).call(this));

		_this.name = 'join';
		_this.accepts = ['object'];
		return _this;
	}

	/**
  * alter()
  * Changes resolved data based on options
  * @param mixed resolved The data to change
  * @param mixed options Any options sent in with the alterer
  * @return mixed Changed resolved data
  */


	_createClass(JoinAlterer, [{
		key: 'alter',
		value: function alter(resolved, options) {
			var result = '';
			for (var key in resolved) {
				result = result + String(resolved[key]);
			}return result;
		}
	}]);

	return JoinAlterer;
}(_alterer2.default);

exports.default = JoinAlterer;

},{"./alterer.js":3}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alterer = require('./alterer.js');

var _alterer2 = _interopRequireDefault(_alterer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * JSON Alterer
 * Alters any type of data to a JSON string
 *
 * Inherits
 *
 * properties: name, accepts, options
 * method: detect(name, resolved) { return bool }
 */

var JsonAlterer = function (_Alterer) {
	_inherits(JsonAlterer, _Alterer);

	function JsonAlterer() {
		_classCallCheck(this, JsonAlterer);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(JsonAlterer).call(this));

		_this.name = 'json';
		_this.accepts = [];
		return _this;
	}

	/**
  * alter()
  * Changes resolved data based on options
  * @param mixed resolved The data to change
  * @param mixed options Any options sent in with the alterer
  * @return mixed Changed resolved data
  */


	_createClass(JsonAlterer, [{
		key: 'alter',
		value: function alter(resolved, options) {
			return JSON.stringify(resolved);
		}
	}]);

	return JsonAlterer;
}(_alterer2.default);

exports.default = JsonAlterer;

},{"./alterer.js":3}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alterer = require('./alterer.js');

var _alterer2 = _interopRequireDefault(_alterer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Not Alterer
 * Alters any data to its boolean opposite
 *
 * Inherits
 *
 * properties: name, accepts, options
 * method: detect(name, resolved) { return bool }
 */

var NotAlterer = function (_Alterer) {
	_inherits(NotAlterer, _Alterer);

	function NotAlterer() {
		_classCallCheck(this, NotAlterer);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(NotAlterer).call(this));

		_this.name = 'not';
		_this.accepts = [];
		return _this;
	}

	/**
  * alter()
  * Changes resolved data based on options
  * @param mixed resolved The data to change
  * @param mixed options Any options sent in with the alterer
  * @return mixed Changed resolved data
  */


	_createClass(NotAlterer, [{
		key: 'alter',
		value: function alter(resolved, options) {
			return !resolved;
		}
	}]);

	return NotAlterer;
}(_alterer2.default);

exports.default = NotAlterer;

},{"./alterer.js":3}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alterer = require('./alterer.js');

var _alterer2 = _interopRequireDefault(_alterer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Prefix Alterer
 * Adds anything to start of a string
 *
 * Inherits
 *
 * properties: name, accepts, options
 * method: detect(name, resolved) { return bool }
 */

var PrefixAlterer = function (_Alterer) {
	_inherits(PrefixAlterer, _Alterer);

	function PrefixAlterer() {
		_classCallCheck(this, PrefixAlterer);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PrefixAlterer).call(this));

		_this.name = 'prefix';
		_this.accepts = ['string'];
		return _this;
	}

	/**
  * alter()
  * Changes resolved data based on options
  * @param mixed resolved The data to change
  * @param mixed options Any options sent in with the alterer
  * @return mixed Changed resolved data
  */


	_createClass(PrefixAlterer, [{
		key: 'alter',
		value: function alter(resolved, options) {
			return String(options) + resolved;
		}
	}]);

	return PrefixAlterer;
}(_alterer2.default);

exports.default = PrefixAlterer;

},{"./alterer.js":3}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alterer = require('./alterer.js');

var _alterer2 = _interopRequireDefault(_alterer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Suffix Alterer
 * Adds anything to end of a string
 *
 * Inherits
 *
 * properties: name, accepts, options
 * method: detect(name, resolved) { return bool }
 */

var SuffixAlterer = function (_Alterer) {
	_inherits(SuffixAlterer, _Alterer);

	function SuffixAlterer() {
		_classCallCheck(this, SuffixAlterer);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SuffixAlterer).call(this));

		_this.name = 'suffix';
		_this.accepts = ['string'];
		return _this;
	}

	/**
  * alter()
  * Changes resolved data based on options
  * @param mixed resolved The data to change
  * @param mixed options Any options sent in with the alterer
  * @return mixed Changed resolved data
  */


	_createClass(SuffixAlterer, [{
		key: 'alter',
		value: function alter(resolved, options) {
			return resolved + String(options);
		}
	}]);

	return SuffixAlterer;
}(_alterer2.default);

exports.default = SuffixAlterer;

},{"./alterer.js":3}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alterer = require('./alterer.js');

var _alterer2 = _interopRequireDefault(_alterer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Trim Alterer
 * Alters string data by triming it of whitespace
 *
 * Inherits
 *
 * properties: name, accepts, options
 * method: detect(name, resolved) { return bool }
 */

var TrimAlterer = function (_Alterer) {
	_inherits(TrimAlterer, _Alterer);

	function TrimAlterer() {
		_classCallCheck(this, TrimAlterer);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TrimAlterer).call(this));

		_this.name = 'trim';
		_this.accepts = ['string'];
		return _this;
	}

	/**
  * alter()
  * Changes resolved data based on options
  * @param mixed resolved The data to change
  * @param mixed options Any options sent in with the alterer
  * @return mixed Changed resolved data
  */


	_createClass(TrimAlterer, [{
		key: 'alter',
		value: function alter(resolved, options) {
			return resolved.trim();
		}
	}]);

	return TrimAlterer;
}(_alterer2.default);

exports.default = TrimAlterer;

},{"./alterer.js":3}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.RaziloBindEventBinder = exports.RaziloBindCheckedBinder = exports.RaziloBindValueBinder = exports.RaziloBindElseBinder = exports.RaziloBindIfBinder = exports.RaziloBindAttributeBinder = exports.RaziloBindClassBinder = exports.RaziloBindStyleBinder = exports.RaziloBindHideBinder = exports.RaziloBindShowBinder = exports.RaziloBindHtmlBinder = exports.RaziloBindTextBinder = exports.RaziloBindForBinder = exports.RaziloBindBinder = undefined;

var _binder = require('./src/binder.js');

var _binder2 = _interopRequireDefault(_binder);

var _forBinder = require('./src/for.binder.js');

var _forBinder2 = _interopRequireDefault(_forBinder);

var _textBinder = require('./src/text.binder.js');

var _textBinder2 = _interopRequireDefault(_textBinder);

var _htmlBinder = require('./src/html.binder.js');

var _htmlBinder2 = _interopRequireDefault(_htmlBinder);

var _showBinder = require('./src/show.binder.js');

var _showBinder2 = _interopRequireDefault(_showBinder);

var _hideBinder = require('./src/hide.binder.js');

var _hideBinder2 = _interopRequireDefault(_hideBinder);

var _styleBinder = require('./src/style.binder.js');

var _styleBinder2 = _interopRequireDefault(_styleBinder);

var _classBinder = require('./src/class.binder.js');

var _classBinder2 = _interopRequireDefault(_classBinder);

var _attributeBinder = require('./src/attribute.binder.js');

var _attributeBinder2 = _interopRequireDefault(_attributeBinder);

var _ifBinder = require('./src/if.binder.js');

var _ifBinder2 = _interopRequireDefault(_ifBinder);

var _elseBinder = require('./src/else.binder.js');

var _elseBinder2 = _interopRequireDefault(_elseBinder);

var _valueBinder = require('./src/value.binder.js');

var _valueBinder2 = _interopRequireDefault(_valueBinder);

var _checkedBinder = require('./src/checked.binder.js');

var _checkedBinder2 = _interopRequireDefault(_checkedBinder);

var _eventBinder = require('./src/event.binder.js');

var _eventBinder2 = _interopRequireDefault(_eventBinder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.RaziloBindBinder = _binder2.default;
exports.RaziloBindForBinder = _forBinder2.default;
exports.RaziloBindTextBinder = _textBinder2.default;
exports.RaziloBindHtmlBinder = _htmlBinder2.default;
exports.RaziloBindShowBinder = _showBinder2.default;
exports.RaziloBindHideBinder = _hideBinder2.default;
exports.RaziloBindStyleBinder = _styleBinder2.default;
exports.RaziloBindClassBinder = _classBinder2.default;
exports.RaziloBindAttributeBinder = _attributeBinder2.default;
exports.RaziloBindIfBinder = _ifBinder2.default;
exports.RaziloBindElseBinder = _elseBinder2.default;
exports.RaziloBindValueBinder = _valueBinder2.default;
exports.RaziloBindCheckedBinder = _checkedBinder2.default;
exports.RaziloBindEventBinder = _eventBinder2.default;

},{"./src/attribute.binder.js":12,"./src/binder.js":13,"./src/checked.binder.js":14,"./src/class.binder.js":15,"./src/else.binder.js":16,"./src/event.binder.js":17,"./src/for.binder.js":18,"./src/hide.binder.js":19,"./src/html.binder.js":20,"./src/if.binder.js":21,"./src/show.binder.js":22,"./src/style.binder.js":23,"./src/text.binder.js":24,"./src/value.binder.js":25}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _binder = require('./binder.js');

var _binder2 = _interopRequireDefault(_binder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Attribute Binder
 * Alters elements attributes based on resolved data contents
 *
 * Inherits
 *
 * properties: options, node, resolvable, model, accepts
 * method: detect(node) { return bool }
 * method: build(model) { return binder }
 * method: update(newValue, oldValue) { }
 */

var AttributeBinder = function (_Binder) {
	_inherits(AttributeBinder, _Binder);

	function AttributeBinder(options, traverser) {
		_classCallCheck(this, AttributeBinder);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AttributeBinder).call(this));

		_this.options = options;
		_this.traverser = traverser;
		_this.name = 'attribute';
		_this.accepts = ['property', 'phantom', 'object', 'array', 'string', 'method'];
		_this.attributes = [];
		return _this;
	}

	/**
  * bind()
  * Bind the resolved data by applying styles to node
  * @param object oldValue The old value of the observed object
  */


	_createClass(AttributeBinder, [{
		key: 'bind',
		value: function bind() {
			var attributes = [];

			// add new classes if not already added
			var atts = typeof this.resolver.resolved === 'string' ? [this.resolver.resolved.trim()] : this.resolver.resolved;
			for (var a in atts) {
				var attribute = isNaN(a) ? a.trim() : atts[a].trim();
				if (typeof a === 'string' && typeof atts[a] === 'boolean' && !atts[a]) continue; // skip boolean falsy objects
				attributes.push(attribute); // add already present to stack
				if (this.node.hasAttribute(attribute)) continue; // skip already present

				this.node.setAttribute(attribute, isNaN(a) ? typeof atts[a] === 'boolean' ? '' : atts[a] : '');
				attributes.push(attribute);
			}

			// remove any that where there previosly but now not in stack
			if (this.attributes.length > 0) {
				// remove any classes not in
				for (var i = 0; i < this.attributes.length; i++) {
					if (attributes.indexOf(this.attributes[i]) >= 0) continue;
					this.node.removeAttribute(this.attributes[i]);
				}
			}

			// update node and cache stack
			this.attributes = attributes;
		}
	}]);

	return AttributeBinder;
}(_binder2.default);

exports.default = AttributeBinder;

},{"./binder.js":13}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _razilobindCore = require('razilobind-core');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Binder
 * Generic binder methods used accross all binders
 */

var Binder = function () {
	function Binder() {
		_classCallCheck(this, Binder);

		this.id = Math.random().toString(36).slice(2) + Date.now(); // create unique id for binder
		this.options = undefined;
		this.traverser = undefined;
		this.name = undefined;
		this.observables = [];
		this.accepts = [];
	}

	_createClass(Binder, [{
		key: 'setup',
		value: function setup(options, traverser) {
			this.options = options;
			this.traverser = traverser;
		}

		/**
   * detect()
   * Basic detection of an element by its attribute, setting resolvable
   * @param html-node node The node to detect any bindables on
   * @return bool True on bindable, false on fail
   */

	}, {
		key: 'detect',
		value: function detect(node) {
			// allow element nodes only
			if (node.nodeType !== 1) return false;

			this.resolvable = node.hasAttribute(this.options.prefix + 'bind-' + this.name) ? node.getAttribute(this.options.prefix + 'bind-' + this.name) : undefined;
			this.configurable = node.hasAttribute(this.options.prefix + 'config-' + this.name) ? node.getAttribute(this.options.prefix + 'config-' + this.name) : undefined;
			this.alterable = node.hasAttribute(this.options.prefix + 'alter-' + this.name) ? node.getAttribute(this.options.prefix + 'alter-' + this.name) : undefined;

			if (!this.resolvable) return false;

			this.node = node;
			return true;
		}

		/**
   * build()
   * Build a bindable object and try to resolve data, if resolved creates initial bind too
   * @param object model The model to attempt to build the binder against
   * @return Binder The binder of specific type
   */

	}, {
		key: 'build',
		value: function build(model) {
			// set bindable data
			this.priority = 1;
			this.resolver = _razilobindCore.RaziloBindCoreDetector.resolver(this.resolvable, this.node);
			this.alterer = _razilobindCore.RaziloBindCoreDetector.resolver(this.alterable, this.node);
			this.config = _razilobindCore.RaziloBindCoreDetector.resolver(this.configurable, this.node);
			this.model = model;

			// resolve data to actuals and observables if of correct type or no types set
			if (this.resolver && (this.accepts.length === 0 || this.accepts.indexOf(this.resolver.name) >= 0)) this.update();

			// collate binders
			if (this.resolver.observers) for (var i = 0; i < this.resolver.observers.length; i++) {
				if (this.observables.indexOf(this.resolver.observers[i]) < 0) this.observables.push(this.resolver.observers[i]);
			}if (this.alterer.observers) for (var _i = 0; _i < this.alterer.observers.length; _i++) {
				if (this.observables.indexOf(this.alterer.observers[_i]) < 0) this.observables.push(this.alterer.observers[_i]);
			}if (this.config.observers) for (var _i2 = 0; _i2 < this.config.observers.length; _i2++) {
				if (this.observables.indexOf(this.config.observers[_i2]) < 0) this.observables.push(this.config.observers[_i2]);
			}return this;
		}

		/**
   * update()
   * updates observers (as they can change if using properties as keys) and issue bind in child
   * @param object oldValue The old value once object change detect
   * @param string path The path that was affected (or the key if adding or removing a value to/from an object)
   * @param string action The action to perform, 'update', 'array-add', 'array-remove', 'object-add', 'object-remove'
   * @param object key The key name if an object value is added or removed
   */

	}, {
		key: 'update',
		value: function update(oldValue, path, action, key) {
			// resolve data, bind to element from child class
			this.resolver.resolve(this.model, this.name === 'event' ? true : false);
			var newValue = this.resolver.resolved;

			if (this.config) this.config.resolve(this.model);
			if (this.alterer) {
				this.alterer.resolve(this.model);
				this.resolver.resolved = _razilobindCore.RaziloBindCoreDetector.alterers(this.alterer.resolved, this.resolver.resolved);
			}

			this.bind(oldValue, path, action, key);

			// garbage collection on observables map which is only thing holding ref to binder (so binder will be released naturally)
			if (action === 'object-remove') delete this.traverser.observables[path + '.' + key];else if (action === 'array-remove') for (var i = newValue.length - 1; i < oldValue; i++) {
				delete this.traverser.observables[path + '.' + i];
			}
		}
	}]);

	return Binder;
}();

exports.default = Binder;

},{"razilobind-core":26}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _binder = require('./binder.js');

var _binder2 = _interopRequireDefault(_binder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Checked Binder
 * Binds resolved data to value attribute of elements such as input, textarea, select etc...
 *
 * Inherits
 *
 * properties: options, node, resolvable, model, accepts
 * method: detect(node) { return bool }
 * method: build(model) { return binder }
 * method: update(newValue, oldValue) { }
 */

var CheckedBinder = function (_Binder) {
	_inherits(CheckedBinder, _Binder);

	function CheckedBinder(options, traverser) {
		_classCallCheck(this, CheckedBinder);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CheckedBinder).call(this));

		_this.options = options;
		_this.traverser = traverser;
		_this.name = 'checked';
		_this.accepts = ['property', 'phantom', 'method'];
		_this.event;
		_this.type;
		return _this;
	}

	/**
  * bind()
  * Bind the resolved data to the node replacing contents
  * @param object oldValue The old value of the observed object
  */


	_createClass(CheckedBinder, [{
		key: 'bind',
		value: function bind(oldValue, path) {
			// catch duplicate fires from ui
			if (this.node.value === this.resolver.resolved) return;

			// set value
			this.type = this.node.getAttribute('type');
			this.setValue();

			// should we watch for changes?
			if (!!this.event || this.resolver.observers.length < 1) return;

			// add event listener to node
			this.event = 'change';
			this.node.addEventListener(this.event, this.listener.bind(this), false);
		}

		/**
   * listener()
   * Update model when an element interaction updates its value
   * @param event event The event that triggers the update
   */

	}, {
		key: 'listener',
		value: function listener(event) {
			// last observer is the full observed path to resolver (others before can make up sub properties)
			var path = this.resolver.observers[this.resolver.observers.length - 1].split('.');
			var end = path.pop();

			// get parent object/array
			var model = this.model;
			for (var i = 0; i < path.length; i++) {
				model = model[path[i]];
			} // change model
			if (this.node.hasAttribute('type') && this.type == 'radio') model[end] = this.node.value;else model[end] = !!this.node.checked ? true : false;
		}

		/**
   * setValue()
   * Set a node value and attribute to ensure changes can be picked up by attribute watchers
   */

	}, {
		key: 'setValue',
		value: function setValue() {
			if (this.node.hasAttribute('type') && this.type == 'radio') {
				// radio
				this.node.checked = this.node.value == this.resolver.resolved ? true : false;
				if (this.node.value == this.resolver.resolved) this.node.setAttribute('checked', '');else this.node.removeAttribute('checked');
			} else {
				// checkbox and others...
				this.node.checked = !!this.resolver.resolved ? true : false;
				if (!!this.resolver.resolved) this.node.setAttribute('checked', '');else this.node.removeAttribute('checked');
			}
		}
	}]);

	return CheckedBinder;
}(_binder2.default);

exports.default = CheckedBinder;

},{"./binder.js":13}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _binder = require('./binder.js');

var _binder2 = _interopRequireDefault(_binder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Class Binder
 * Alters elements style based on resolved data contents
 *
 * Inherits
 *
 * properties: options, node, resolvable, model, accepts
 * method: detect(node) { return bool }
 * method: build(model) { return binder }
 * method: update(newValue, oldValue) { }
 */

var ClassBinder = function (_Binder) {
	_inherits(ClassBinder, _Binder);

	function ClassBinder(options, traverser) {
		_classCallCheck(this, ClassBinder);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ClassBinder).call(this));

		_this.options = options;
		_this.traverser = traverser;
		_this.name = 'class';
		_this.accepts = ['property', 'phantom', 'object', 'array', 'string', 'method'];
		_this.classnames = [];
		return _this;
	}

	/**
  * bind()
  * Bind the resolved data by applying styles to node
  * @param object oldValue The old value of the observed object
  */


	_createClass(ClassBinder, [{
		key: 'bind',
		value: function bind() {
			var classnames = [];

			// add new classes if not already added
			var names = typeof this.resolver.resolved === 'string' ? [this.resolver.resolved.trim()] : this.resolver.resolved;
			for (var a in names) {
				var classname = isNaN(a) ? a.trim() : names[a].trim();
				if (typeof a === 'string' && !names[a]) continue; // skip falsy objects
				classnames.push(classname); // add already present to stack
				if (new RegExp('([^a-z0-9_-]{1}|^)' + classname + '([^a-z0-9_-]{1}|$)').test(this.node.className)) continue; // skip already present

				this.node.className += classname + ' ';
				classnames.push(classname);
			}

			// remove any that where there previosly but now not in stack
			if (this.classnames.length > 0) {
				// remove any classes not in
				for (var i = 0; i < this.classnames.length; i++) {
					if (classnames.indexOf(this.classnames[i]) >= 0) continue;
					this.node.className = this.node.className.replace(new RegExp('([^a-z0-9_-]{1}|^)' + this.classnames[i] + '([^a-z0-9_-]{1}|$)', 'g'), ' ');
				}
			}

			// update node and cache stack
			this.node.className = this.node.className.replace(/\s{1}\s{1}/g, ' ');
			this.classnames = classnames;
		}
	}]);

	return ClassBinder;
}(_binder2.default);

exports.default = ClassBinder;

},{"./binder.js":13}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _binder = require('./binder.js');

var _binder2 = _interopRequireDefault(_binder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Else Binder
 * Alters elements style based on resolved data contents
 *
 * Inherits
 *
 * properties: options, node, resolvable, model, accepts
 * method: detect(node) { return bool }
 * method: build(model) { return binder }
 * method: update(newValue, oldValue) { }
 */

var ElseBinder = function (_Binder) {
	_inherits(ElseBinder, _Binder);

	function ElseBinder(options, traverser) {
		_classCallCheck(this, ElseBinder);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ElseBinder).call(this));

		_this.options = options;
		_this.traverser = traverser;
		_this.name = 'else';
		_this.accepts = ['property', 'phantom', 'boolean', 'method'];
		_this.placeholder = null;
		return _this;
	}

	/**
  * bind()
  * Bind the resolved data by applying styles to node
  * @param object oldValue The old value of the observed object
  */


	_createClass(ElseBinder, [{
		key: 'bind',
		value: function bind() {
			if (!!this.resolver.resolved) {
				// insert placeholder
				this.placeholder = document.createComment('razilovm:if');
				this.node.parentNode.insertBefore(this.placeholder, this.node);
				this.node.parentNode.removeChild(this.node);
			} else if (this.placeholder) {
				this.placeholder.parentNode.insertBefore(this.node, this.placeholder);
				this.placeholder.parentNode.removeChild(this.placeholder);
				this.placeholder = null;
			}
		}
	}]);

	return ElseBinder;
}(_binder2.default);

exports.default = ElseBinder;

},{"./binder.js":13}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _binder = require('./binder.js');

var _binder2 = _interopRequireDefault(_binder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Event Binder
 * Bind methods to element events
 *
 * Inherits
 *
 * properties: options, node, resolvable, model, accepts
 * method: detect(node) { return bool }
 * method: build(model) { return binder }
 * method: update(newValue, oldValue) { }
 */

var EventBinder = function (_Binder) {
	_inherits(EventBinder, _Binder);

	function EventBinder(options, traverser) {
		_classCallCheck(this, EventBinder);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(EventBinder).call(this));

		_this.options = options;
		_this.traverser = traverser;
		_this.name = 'event';
		_this.accepts = ['object'];
		_this.events = {};
		return _this;
	}

	/**
  * bind()
  * Bind the resolved data by applying styles to node
  * @param object oldValue The old value of the observed object
  */


	_createClass(EventBinder, [{
		key: 'bind',
		value: function bind(object) {
			// remove old events
			for (var name in this.events) {
				if (this.resolver.resolved[name]) continue;
				this.node.removeEventListener(name, this.listener, false);
				delete this.events[name];
			}

			// add new events
			for (var _name in this.resolver.resolved) {
				if (!this.events[_name]) {
					if (typeof this.resolver.resolved[_name].method !== 'function') continue;
					this.node.addEventListener(_name, this.listener.bind(this), false);
				}
				this.events[_name] = this.resolver.resolved[_name];
			}
		}

		/**
   * listener()
   * Catch events on nodes and run functions set.
   * @param event event The event that triggers the update
   */

	}, {
		key: 'listener',
		value: function listener(event) {
			var values = [event].concat(this.events[event.type].values);
			this.events[event.type].method.apply(this.model, values);
		}
	}]);

	return EventBinder;
}(_binder2.default);

exports.default = EventBinder;

},{"./binder.js":13}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _razilobindCore = require('razilobind-core');

var _binder = require('./binder.js');

var _binder2 = _interopRequireDefault(_binder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * For Binder
 * Alters elements style based on resolved data contents
 *
 * Inherits
 *
 * properties: options, node, resolvable, config, model, accepts
 */

var ForBinder = function (_Binder) {
	_inherits(ForBinder, _Binder);

	function ForBinder(options, traverser) {
		_classCallCheck(this, ForBinder);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ForBinder).call(this));

		_this.options = options;
		_this.traverser = traverser;
		_this.name = 'for';
		_this.accepts = ['property', 'phantom', 'method', 'array', 'object'];
		_this.placeholder = {};
		_this.children = [];
		return _this;
	}

	/**
  * OVERRIDE:detect()
  * Basic detection of an element by its attribute, setting resolvable
  * @param html-node node The node to detect any bindables on
  * @return bool True on bindable, false on fail
  */


	_createClass(ForBinder, [{
		key: 'detect',
		value: function detect(node) {
			// allow element nodes only
			if (node.nodeType !== 1) return false;

			this.resolvable = node.hasAttribute(this.options.prefix + 'bind-' + this.name) ? node.getAttribute(this.options.prefix + 'bind-' + this.name) : undefined;
			this.configurable = node.hasAttribute(this.options.prefix + 'config-' + this.name) ? node.getAttribute(this.options.prefix + 'config-' + this.name) : undefined;
			this.alterable = node.hasAttribute(this.options.prefix + 'alter-' + this.name) ? node.getAttribute(this.options.prefix + 'alter-' + this.name) : undefined;
			this.orderable = node.hasAttribute(this.options.prefix + 'order-' + this.name) ? node.getAttribute(this.options.prefix + 'order-' + this.name) : undefined;
			this.filterable = node.hasAttribute(this.options.prefix + 'filter-' + this.name) ? node.getAttribute(this.options.prefix + 'filter-' + this.name) : undefined;
			this.limitable = node.hasAttribute(this.options.prefix + 'limit-' + this.name) ? node.getAttribute(this.options.prefix + 'limit-' + this.name) : undefined;
			this.offsetable = node.hasAttribute(this.options.prefix + 'offset-' + this.name) ? node.getAttribute(this.options.prefix + 'offset-' + this.name) : undefined;

			if (!this.resolvable) return false;

			this.node = node;
			return true;
		}

		/**
   * OVERRIDE:build()
   * Build a bindable object and try to resolve data, if resolved creates initial bind too
   * @param object model The model to attempt to build the binder against
   * @return Binder The binder of specific type
   */

	}, {
		key: 'build',
		value: function build(model) {
			// set bindable data
			this.priority = 1;
			this.resolver = _razilobindCore.RaziloBindCoreDetector.resolver(this.resolvable, this.node);
			this.alterer = _razilobindCore.RaziloBindCoreDetector.resolver(this.alterable, this.node);
			this.config = _razilobindCore.RaziloBindCoreDetector.resolver(this.configurable, this.node);
			this.order = _razilobindCore.RaziloBindCoreDetector.resolver(this.orderable, this.node);
			this.filter = _razilobindCore.RaziloBindCoreDetector.resolver(this.filterable, this.node);
			this.limit = _razilobindCore.RaziloBindCoreDetector.resolver(this.limitable, this.node);
			this.offset = _razilobindCore.RaziloBindCoreDetector.resolver(this.offsetable, this.node);
			this.model = model;

			// resolve data to actuals and observables if of correct type or no types set
			if (this.resolver && (this.accepts.length === 0 || this.accepts.indexOf(this.resolver.name) >= 0)) this.update();

			// collate binders
			if (this.resolver.observers) for (var i = 0; i < this.resolver.observers.length; i++) {
				if (this.observables.indexOf(this.resolver.observers[i]) < 0) this.observables.push(this.resolver.observers[i]);
			}if (this.alterer.observers) for (var _i = 0; _i < this.alterer.observers.length; _i++) {
				if (this.observables.indexOf(this.alterer.observers[_i]) < 0) this.observables.push(this.alterer.observers[_i]);
			}if (this.config.observers) for (var _i2 = 0; _i2 < this.config.observers.length; _i2++) {
				if (this.observables.indexOf(this.config.observers[_i2]) < 0) this.observables.push(this.config.observers[_i2]);
			}if (this.order.observers) for (var _i3 = 0; _i3 < this.order.observers.length; _i3++) {
				if (this.observables.indexOf(this.order.observers[_i3]) < 0) this.observables.push(this.order.observers[_i3]);
			}if (this.filter.observers) for (var _i4 = 0; _i4 < this.filter.observers.length; _i4++) {
				if (this.observables.indexOf(this.filter.observers[_i4]) < 0) this.observables.push(this.filter.observers[_i4]);
			}if (this.limit.observers) for (var _i5 = 0; _i5 < this.limit.observers.length; _i5++) {
				if (this.observables.indexOf(this.limit.observers[_i5]) < 0) this.observables.push(this.limit.observers[_i5]);
			}if (this.offset.observers) for (var _i6 = 0; _i6 < this.offset.observers.length; _i6++) {
				if (this.observables.indexOf(this.offset.observers[_i6]) < 0) this.observables.push(this.offset.observers[_i6]);
			}return this;
		}

		/**
   * OVERRIDE:update()
   * updates observers (as they can change if using properties as keys) and issue bind in child
   * @param object oldValue The old value once object change detect
   * @param string path The path that was affected (or the key if adding or removing a value to/from an object)
   * @param string action The action to perform, 'update', 'array-add', 'array-remove', 'object-add', 'object-remove'
   * @param object key The key name if an object value is added or removed
   */

	}, {
		key: 'update',
		value: function update(oldValue, path, action, key) {
			// resolve data, bind to element from child class
			this.resolver.resolve(this.model);
			var newValue = this.resolver.resolved;

			if (this.config) this.config.resolve(this.model);
			if (this.order) this.order.resolve(this.model);
			if (this.filter) this.filter.resolve(this.model);
			if (this.limit) this.limit.resolve(this.model);
			if (this.offset) this.offset.resolve(this.model);
			if (this.alterer) {
				// alter resolved value
				this.alterer.resolve(this.model);
				this.resolver.resolved = _razilobindCore.RaziloBindCoreDetector.alterers(this.alterer.resolved, this.resolver.resolved);
			}

			this.bind(oldValue, path, action, key);

			// garbage collection on observables map which is only thing holding ref to binder (so binder will be released naturally)
			if (action === 'object-remove') delete this.traverser.observables[path + '.' + key];else if (action === 'array-remove') for (var i = newValue.length - 1; i < oldValue; i++) {
				delete this.traverser.observables[path + '.' + i];
			}
		}

		/**
   * bind()
   * Bind the resolved data by applying styles to node
   * @param object oldValue The old value of the observed object
   */

	}, {
		key: 'bind',
		value: function bind(oldValue, path, action, objectKey) {
			if (_typeof(this.resolver.resolved) !== 'object') return;

			// grab any config data
			var phantomKey = this.config && this.config.resolved.key ? this.config.resolved.key : '';
			var phantomValue = this.config && this.config.resolved.value ? this.config.resolved.value : '';
			var order = this.order && this.order.resolved ? this.order.resolved : undefined;
			var filter = this.filter && this.filter.resolved ? this.filter.resolved : undefined;

			// add placeholder and remove element from dom
			if (!this.placeholder.start) {
				this.placeholder.end = document.createComment('razilovm:for:end');
				if (this.node.nextSibling === null) this.node.parentNode.appendChild(this.placeholder.end);else this.node.parentNode.insertBefore(this.placeholder.end, this.node.nextSibling);

				this.placeholder.start = document.createComment('razilovm:for:start');
				this.placeholder.end.parentNode.insertBefore(this.placeholder.start, this.placeholder.end);

				this.node.parentNode.removeChild(this.node);
			}

			if (this.children.length > 0) {
				// remove any current children
				for (var _i7 = 0; _i7 < this.children.length; _i7++) {
					this.children[_i7].node.parentNode.removeChild(this.children[_i7].node);
				}this.children = [];
			}

			// order and/or filter the resolved data, dont allow over length of data
			var orderedFiltered = this.orderFilter(this.resolver.resolved, order, filter);

			// limit and offset if either set
			if (this.offset || this.limit) {
				var offset = this.offset && this.offset.resolved ? parseInt(this.offset.resolved) : 0;
				var limit = this.limit && this.limit.resolved ? parseInt(this.limit.resolved) : 0;

				var nOffset = offset < 1 ? 0 : offset - 1;
				var nLimit = nOffset + limit < 1 ? 0 : (nOffset > 0 ? nOffset - 1 : nOffset) + limit;

				orderedFiltered.resolved = orderedFiltered.resolved.splice(nOffset, nLimit);
				if (orderedFiltered.map) orderedFiltered.map = orderedFiltered.map.splice(nOffset, nLimit);
			}

			for (var key in orderedFiltered.resolved) {
				var newNode = this.node.cloneNode(true);
				newNode.removeAttribute(this.options.prefix + 'bind-' + this.name);
				newNode.removeAttribute(this.options.prefix + 'config-' + this.name);
				newNode.removeAttribute(this.options.prefix + 'alter-' + this.name);
				newNode.removeAttribute(this.options.prefix + 'order-' + this.name);
				newNode.removeAttribute(this.options.prefix + 'filter-' + this.name);
				newNode.removeAttribute(this.options.prefix + 'limit-' + this.name);
				newNode.removeAttribute(this.options.prefix + 'offset-' + this.name);
				newNode.phantom = {
					'iterationKey': orderedFiltered.map ? orderedFiltered.map[key] : key,
					'initialValue': orderedFiltered.resolved[key],
					'observers': this.resolver.observers,
					'keyName': phantomKey,
					'valueName': phantomValue
				};

				this.children.push(newNode);
			}

			// add children
			for (var i = 0; i < this.children.length; i++) {
				this.placeholder.end.parentNode.insertBefore(this.children[i], this.placeholder.end);
				if (path) this.traverser.traverse(this.children[i], this.model);
			}
		}

		// order data

	}, {
		key: 'orderFilter',
		value: function orderFilter(resolved, orderBy, filterBy) {
			if (!resolved || !orderBy && !filterBy) return { map: undefined, resolved: resolved };

			var isArray = Array.isArray(resolved);
			var newOrder = [];
			var map = [];

			resolvedloop: for (var key in resolved) {
				// filter out any data before ordering
				if (filterBy) {
					for (var name in filterBy) {
						if (typeof filterBy[name] === 'string' && new RegExp("^" + filterBy[name].split('*').join('.*') + "$").test(resolved[key][name])) continue resolvedloop;else if (Array.isArray(filterBy[name]) && new RegExp("^" + filterBy[name].join('').split('*').join('.*') + "$").test(resolved[key][name])) continue resolvedloop;
					}
				}

				// if first bit of data or no order defined, push data
				if (map.length < 1 || !orderBy) {
					map.push(key);
					newOrder.push(resolved[key]);
					continue;
				}

				// get position for order
				orderloop: for (var i = 0; i < newOrder.length; i++) {
					for (var _name in orderBy) {
						if (orderBy[_name] == 'asc' && resolved[key][_name] > newOrder[i][_name]) continue orderloop;
						if (resolved[key][_name] == newOrder[i][_name]) continue;
						if (orderBy[_name] == 'desc' && resolved[key][_name] < newOrder[i][_name]) continue orderloop;
					}
					break;
				}

				// splice data into new stack
				map.splice(i, 0, key);
				newOrder.splice(i, 0, resolved[key]);
			}

			return { map: map, resolved: newOrder };
		}
	}]);

	return ForBinder;
}(_binder2.default);

exports.default = ForBinder;

},{"./binder.js":13,"razilobind-core":26}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _binder = require('./binder.js');

var _binder2 = _interopRequireDefault(_binder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Hide Binder
 * Hides element if data resolved to true
 *
 * Inherits
 *
 * properties: options, node, resolvable, model, accepts
 * method: detect(node) { return bool }
 * method: build(model) { return binder }
 * method: update(newValue, oldValue) { }
 */

var HideBinder = function (_Binder) {
	_inherits(HideBinder, _Binder);

	function HideBinder(options, traverser) {
		_classCallCheck(this, HideBinder);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(HideBinder).call(this));

		_this.options = options;
		_this.traverser = traverser;
		_this.name = 'hide';
		_this.accepts = [];
		return _this;
	}

	/**
  * bind()
  * Bind the resolved data by showing or hiding node
  * @param object oldValue The old value of the observed object
  */


	_createClass(HideBinder, [{
		key: 'bind',
		value: function bind() {
			if (!!this.resolver.resolved) this.node.style.display = 'none';else this.node.style.display = '';
		}
	}]);

	return HideBinder;
}(_binder2.default);

exports.default = HideBinder;

},{"./binder.js":13}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _binder = require('./binder.js');

var _binder2 = _interopRequireDefault(_binder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * HTML Binder
 * Binds resolved data to element contents (innerHTML)
 * !!! USE WITH CAUTION ONLY BIND TRUSTED HTML !!!
 *
 * Inherits
 *
 * properties: options, node, resolvable, model, accepts
 * method: detect(node) { return bool }
 * method: build(model) { return binder }
 * method: update(newValue, oldValue) { }
 */

var HtmlBinder = function (_Binder) {
	_inherits(HtmlBinder, _Binder);

	function HtmlBinder(options, traverser) {
		_classCallCheck(this, HtmlBinder);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(HtmlBinder).call(this));

		_this.options = options;
		_this.traverser = traverser;
		_this.name = 'html';
		_this.accepts = ['string', 'property', 'phantom', 'method'];
		return _this;
	}

	/**
  * bind()
  * Bind the resolved data to the node replacing contents
  * @param object oldValue The old value of the observed object
  */


	_createClass(HtmlBinder, [{
		key: 'bind',
		value: function bind() {
			this.node.innerHTML = this.resolver.resolved;
		}
	}]);

	return HtmlBinder;
}(_binder2.default);

exports.default = HtmlBinder;

},{"./binder.js":13}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _binder = require('./binder.js');

var _binder2 = _interopRequireDefault(_binder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * If Binder
 * Alters elements style based on resolved data contents
 *
 * Inherits
 *
 * properties: options, node, resolvable, model, accepts
 * method: detect(node) { return bool }
 * method: build(model) { return binder }
 * method: update(newValue, oldValue) { }
 */

var IfBinder = function (_Binder) {
	_inherits(IfBinder, _Binder);

	function IfBinder(options, traverser) {
		_classCallCheck(this, IfBinder);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(IfBinder).call(this));

		_this.options = options;
		_this.traverser = traverser;
		_this.name = 'if';
		_this.accepts = ['property', 'phantom', 'boolean', 'method'];
		_this.placeholder = null;
		return _this;
	}

	/**
  * bind()
  * Bind the resolved data by applying styles to node
  * @param object oldValue The old value of the observed object
  */


	_createClass(IfBinder, [{
		key: 'bind',
		value: function bind() {
			if (!this.resolver.resolved) {
				// insert placeholder
				this.placeholder = document.createComment('razilovm:if');
				this.node.parentNode.insertBefore(this.placeholder, this.node);
				this.node.parentNode.removeChild(this.node);
			} else if (this.placeholder) {
				this.placeholder.parentNode.insertBefore(this.node, this.placeholder);
				this.placeholder.parentNode.removeChild(this.placeholder);
				this.placeholder = null;
			}
		}
	}]);

	return IfBinder;
}(_binder2.default);

exports.default = IfBinder;

},{"./binder.js":13}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _binder = require('./binder.js');

var _binder2 = _interopRequireDefault(_binder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Show Binder
 * Shows element if data resolved to true
 *
 * Inherits
 *
 * properties: options, node, resolvable, model, accepts
 * method: detect(node) { return bool }
 * method: build(model) { return binder }
 * method: update(newValue, oldValue) { }
 */

var ShowBinder = function (_Binder) {
	_inherits(ShowBinder, _Binder);

	function ShowBinder(options, traverser) {
		_classCallCheck(this, ShowBinder);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ShowBinder).call(this));

		_this.options = options;
		_this.traverser = traverser;
		_this.name = 'show';
		_this.accepts = [];
		return _this;
	}

	/**
  * bind()
  * Bind the resolved data by showing hiding the node
  * @param object oldValue The old value of the observed object
  */


	_createClass(ShowBinder, [{
		key: 'bind',
		value: function bind() {
			if (!!this.resolver.resolved) this.node.style.display = '';else this.node.style.display = 'none';
		}
	}]);

	return ShowBinder;
}(_binder2.default);

exports.default = ShowBinder;

},{"./binder.js":13}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _binder = require('./binder.js');

var _binder2 = _interopRequireDefault(_binder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Style Binder
 * Alters elements style based on resolved data contents
 *
 * Inherits
 *
 * properties: options, node, resolvable, model, accepts
 * method: detect(node) { return bool }
 * method: build(model) { return binder }
 * method: update(newValue, oldValue) { }
 */

var StyleBinder = function (_Binder) {
	_inherits(StyleBinder, _Binder);

	function StyleBinder(options, traverser) {
		_classCallCheck(this, StyleBinder);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(StyleBinder).call(this));

		_this.options = options;
		_this.traverser = traverser;
		_this.name = 'style';
		_this.accepts = ['property', 'phantom', 'object', 'method'];
		return _this;
	}

	/**
  * bind()
  * Bind the resolved data by applying styles to node
  * @param object oldValue The old value of the observed object
  */


	_createClass(StyleBinder, [{
		key: 'bind',
		value: function bind(oldValue) {
			if (_typeof(this.resolver.resolved) !== 'object') return;

			// set new values
			for (var key in this.resolver.resolved) {
				if (typeof key !== 'string' || typeof this.resolver.resolved[key] !== 'string') continue;
				this.node.style[key] = this.resolver.resolved[key];
			}

			// remove any old values not set by new ones
			for (var key2 in oldValue) {
				if (typeof this.resolver.resolved[key2] !== 'undefined') continue;
				this.node.style[key2] = '';
			}
		}
	}]);

	return StyleBinder;
}(_binder2.default);

exports.default = StyleBinder;

},{"./binder.js":13}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _binder = require('./binder.js');

var _binder2 = _interopRequireDefault(_binder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Text Binder
 * Binds resolved data to element contents via HTML innerText
 *
 * Inherits
 *
 * properties: options, node, resolvable, model, accepts
 * method: detect(node) { return bool }
 * method: build(model) { return binder }
 * method: update(newValue, oldValue) { }
 */

var TextBinder = function (_Binder) {
	_inherits(TextBinder, _Binder);

	function TextBinder(options, traverser) {
		_classCallCheck(this, TextBinder);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TextBinder).call(this));

		_this.options = options;
		_this.traverser = traverser;
		_this.name = 'text';
		_this.accepts = [];
		return _this;
	}

	/**
  * bind()
  * Bind the resolved data to the node replacing contents
  * @param object oldValue The old value of the observed object
  */


	_createClass(TextBinder, [{
		key: 'bind',
		value: function bind(oldValue, path) {
			this.node.innerText = String(_typeof(this.resolver.resolved) === 'symbol' ? Symbol(this.resolver.resolved) : this.resolver.resolved);
		}
	}]);

	return TextBinder;
}(_binder2.default);

exports.default = TextBinder;

},{"./binder.js":13}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _binder = require('./binder.js');

var _binder2 = _interopRequireDefault(_binder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Value Binder
 * Binds resolved data to value attribute of elements such as input, textarea, select etc...
 *
 * Inherits
 *
 * properties: options, node, resolvable, model, accepts
 * method: detect(node) { return bool }
 * method: build(model) { return binder }
 * method: update(newValue, oldValue) { }
 */

var ValueBinder = function (_Binder) {
	_inherits(ValueBinder, _Binder);

	function ValueBinder(options, traverser) {
		_classCallCheck(this, ValueBinder);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ValueBinder).call(this));

		_this.options = options;
		_this.traverser = traverser;
		_this.name = 'value';
		_this.accepts = ['property', 'phantom', 'method'];
		_this.event;
		_this.tag;
		_this.type;
		return _this;
	}

	/**
  * bind()
  * Bind the resolved data to the node replacing contents
  * @param object oldValue The old value of the observed object
  */


	_createClass(ValueBinder, [{
		key: 'bind',
		value: function bind(oldValue, path) {
			// catch duplicate fires from ui
			if (this.node.value === this.resolver.resolved) return;

			// set value
			this.tag = this.node.tagName.toLowerCase();
			this.type = this.node.getAttribute('type');
			if (this.type != 'file') {
				if (this.tag === 'select') setTimeout(this.setValue.bind(this), 1);else this.setValue();
			}

			// should we watch for changes?
			if (!!this.event || this.resolver.observers.length < 1 || this.tag === 'option' || this.type == 'radio') return;

			// add event listener to node
			this.event = this.eventType();
			this.node.addEventListener(this.event, this.listener.bind(this), false);
		}

		/**
   * listener()
   * Update model when an element interaction updates its value
   * @param event event The event that triggers the update
   */

	}, {
		key: 'listener',
		value: function listener(event) {
			// last observer is the full observed path to resolver (others before can make up sub properties)
			var path = this.resolver.observers[this.resolver.observers.length - 1].split('.');
			var end = path.pop();

			// get parent object/array
			var model = this.model;
			for (var i = 0; i < path.length; i++) {
				model = model[path[i]];
			} // change model
			if (this.tag === 'select' && this.node.hasAttribute('multiple')) {
				var selected = [];
				var opts = this.node.querySelectorAll('option');
				for (var i = 0; i < opts.length; i++) {
					if (!!opts[i].selected) selected.push(opts[i].value);
				}model[end] = selected;
			} else {
				model[end] = this.node.value;
				this.node.setAttribute('value', this.node.value);
			}
		}

		/**
   * setValue()
   * Set a node value and attribute to ensure changes can be picked up by attribute watchers
   */

	}, {
		key: 'setValue',
		value: function setValue() {
			if (this.tag === 'select' && this.node.hasAttribute('multiple') && Array.isArray(this.resolver.resolved)) {
				var opts = this.node.querySelectorAll('option');
				for (var i = 0; i < opts.length; i++) {
					// do not indexOf to stop issues with mixed var type
					for (var ii = 0; ii < this.resolver.resolved.length; ii++) {
						if (opts[i].value == this.resolver.resolved[ii]) opts[i].selected = true;
					}
				}
			} else {
				this.node.value = this.resolver.resolved;
				this.node.setAttribute('value', this.node.value);
			}
		}

		/**
   * eventType()
   * Get the type of event we want to listen on
   */

	}, {
		key: 'eventType',
		value: function eventType() {
			var name = 'input';
			if (this.tag === 'select' || this.type === 'file') name = 'change';

			return name;
		}
	}]);

	return ValueBinder;
}(_binder2.default);

exports.default = ValueBinder;

},{"./binder.js":13}],26:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.RaziloBindCoreObserver = exports.RaziloBindCoreTraverser = exports.RaziloBindCoreDetector = exports.RaziloBindCore = undefined;

var _core = require('./src/core.js');

var _core2 = _interopRequireDefault(_core);

var _detector = require('./src/detector.js');

var _detector2 = _interopRequireDefault(_detector);

var _traverser = require('./src/traverser.js');

var _traverser2 = _interopRequireDefault(_traverser);

var _observer = require('./src/observer.js');

var _observer2 = _interopRequireDefault(_observer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.RaziloBindCore = _core2.default;
exports.RaziloBindCoreDetector = _detector2.default;
exports.RaziloBindCoreTraverser = _traverser2.default;
exports.RaziloBindCoreObserver = _observer2.default;

},{"./src/core.js":27,"./src/detector.js":28,"./src/observer.js":29,"./src/traverser.js":30}],27:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _traverser = require('./traverser.js');

var _traverser2 = _interopRequireDefault(_traverser);

var _observer = require('./observer.js');

var _observer2 = _interopRequireDefault(_observer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * RaziloVM Binding Library
 * Offers View-Model binding between js object and html view
 */

var Core = function () {
	function Core(options) {
		_classCallCheck(this, Core);

		// set up
		this.options = typeof options !== 'undefined' ? options : {};
		this.options.prefix = typeof this.options.prefix !== 'undefined' ? this.options.prefix + '-' : '';
	}

	_createClass(Core, [{
		key: 'bind',
		value: function bind(element, object) {
			element = typeof element === 'string' ? document.querySelector(element) : element;
			if (!element) throw "Element not found, cannot bind to non-element";

			// set basics
			element.razilovm = this;
			this.model = _observer2.default.object(object, this.update.bind(this), true);
			this.element = element;

			// iterate over nodes
			this.traverser = new _traverser2.default(this.options);
			this.traverser.traverse(this.element, this.model, this.object);
		}
	}, {
		key: 'update',
		value: function update(path, oldV, newV) {
			var action = 'update';
			var pathParts = path.split('.');
			var pathEnd = pathParts[pathParts.length - 1];

			// sort out arrys and objects
			if (pathEnd === 'length') {
				// convert .lengths to parent updates
				action = oldV > newV ? 'array-remove' : 'array-add';
				path = path.substring(0, path.length - pathEnd.length - 1);
			} else if (typeof oldV === 'undefined' || typeof newV === 'undefined') {
				var model = this.model;
				for (var i = 0; i < pathParts.length - 1; i++) {
					model = model[pathParts[i]];
				} // if parent is object, also fire parent update and allow original to continue
				if (typeof model.length === 'undefined') {
					var xPath = path.substring(0, path.length - pathEnd.length - 1);
					var xAction = typeof oldV === 'undefined' ? 'object-add' : 'object-remove';
					if (typeof this.traverser.observables[xPath] !== 'undefined') for (var key in this.traverser.observables[xPath]) {
						this.traverser.observables[xPath][key].update(oldV, xPath, xAction, pathEnd);
					}
				}
			}

			if (typeof this.traverser.observables[path] !== 'undefined') for (var _key in this.traverser.observables[path]) {
				this.traverser.observables[path][_key].update(oldV, path, action);
			}
		}
	}]);

	return Core;
}();

exports.default = Core;

},{"./observer.js":29,"./traverser.js":30}],28:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Detector = function () {
	function Detector() {
		_classCallCheck(this, Detector);
	}

	_createClass(Detector, null, [{
		key: 'binders',

		/**
   * Choose binders for the data found when iterating over element bindables
   * Some binders will not allow other binders to be found, such as any binder that
   * creates it own insance e.g. for loops, as they are generated on the fly.
   * return array of binders
   */
		value: function binders(node, model, options, traverser) {
			if (!Detector.defaultBinders || _typeof(Detector.defaultBinders) !== 'object') return;

			var binders = [];
			for (var name in Detector.defaultBinders) {
				var binder = new Detector.defaultBinders[name](options, traverser);
				binder.setup(options, traverser);
				if (binder.detect(node)) binders.push(binder.build(model));
			}

			if (Detector.customBinders && _typeof(Detector.customBinders) === 'object') {
				for (var _name in Detector.customBinders) {
					var _binder = new Detector.customBinders[_name](options, traverser);
					_binder.setup(options, traverser);
					if (_binder.detect(node)) binders.push(_binder.build(model));
				}
			}

			return binders;
		}

		/**
   * Run alterers found in resolved alterable data
   * return resolved The altered resolved data
   */

	}, {
		key: 'alterers',
		value: function alterers(_alterers, resolved) {
			if (typeof _alterers === 'undefined') return false;
			if ((typeof _alterers === 'undefined' ? 'undefined' : _typeof(_alterers)) !== 'object') _alterers = [_alterers];

			for (var key in _alterers) {
				var name = isNaN(key) ? key : _alterers[key];
				var options = isNaN(key) ? _alterers[key] : undefined;

				if (!Detector.defaultAlterers || _typeof(Detector.defaultAlterers) !== 'object') continue;

				for (var _key in Detector.defaultAlterers) {
					var alterer = new Detector.defaultAlterers[_key]();
					if (alterer.detect(name, resolved)) resolved = alterer.alter(resolved, options);
				}

				if (Detector.customAlterers && _typeof(Detector.customAlterers) === 'object') {
					for (var _name2 in Detector.customAlterers) {
						var _alterer = new Detector.customAlterers[_name2]();
						if (_alterer.detect(_name2, resolved)) resolved = _alterer.alter(resolved, options);
					}
				}
			}

			return resolved;
		}

		/**
   * Choose a single resolver for data found when iterating over elements. Can be used for any element attribute data
   * return Resolver resolver or bool false on fail
   */

	}, {
		key: 'resolver',
		value: function resolver(data, node) {
			if (typeof data === 'undefined' || data.length < 1) return false;
			if (!Detector.defaultResolvers || _typeof(Detector.defaultResolvers) !== 'object') return false;

			for (var name in Detector.defaultResolvers) {
				var resolver = new Detector.defaultResolvers[name](node);
				if (resolver.detect(data)) return resolver;
			}

			if (Detector.customResolvers && _typeof(Detector.customResolvers) === 'object') {
				for (var _name3 in Detector.customResolvers) {
					var _resolver = new Detector.customResolvers[_name3](node);
					if (_resolver.detect(data)) return _resolver;
				}
			}

			// failed to resolve
			return false;
		}
	}]);

	return Detector;
}();

exports.default = Detector;

},{}],29:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Observer = function () {
	function Observer() {
		_classCallCheck(this, Observer);
	}

	_createClass(Observer, null, [{
		key: 'object',
		value: function object(obj, fn, deep, prefix) {
			if (typeof this.object === 'undefined') this.object = obj;
			prefix = typeof prefix === 'undefined' ? '' : prefix;
			return new Proxy(obj, {
				set: function set(target, prop, value) {
					var old = target[prop];
					target[prop] = value;
					// if (prop == 'length' && !isNaN(old) && !isNaN(value) && (value == old -1 || value == old)) fn(prefix.indexOf('.') == prefix.length -1 ? prefix.substring(0, prefix.length -1) : prefix, old, value);
					// else fn(prefix + prop, old, value);
					fn(prefix + prop, old, value);
					return true;
				},
				get: function get(target, prop) {
					var val = target[prop];
					if (!!deep && val instanceof Object) return Observer.object(val, fn, deep, prefix + prop + '.');
					return val;
				}
			});
		}
	}]);

	return Observer;
}();

exports.default = Observer;

},{}],30:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _detector = require('./detector.js');

var _detector2 = _interopRequireDefault(_detector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Traverser = function () {
    function Traverser(options) {
        _classCallCheck(this, Traverser);

        this.options = options;
        this.observables = {};
    }

    _createClass(Traverser, [{
        key: 'traverse',
        value: function traverse(element, model) {
            // check for binders and build observables map
            var binders = _detector2.default.binders(element, model, this.options, this);

            // compile binders into a watch list (one binder instance only per element)
            if (binders.length > 0) {
                for (var i = 0; i < binders.length; i++) {
                    if (binders[i].observables.length > 0) {
                        for (var ii = 0; ii < binders[i].observables.length; ii++) {
                            var path = binders[i].observables[ii];
                            if (typeof this.observables[path] === 'undefined') this.observables[path] = {};
                            this.observables[path][binders[i].id] = binders[i];
                        }
                    }
                }
            }

            // do not traverse parent elements with flag set, accept root binded elements
            // if (!!element.hasAttribute && element.hasAttribute('no-traverse') && !element.razilovm) return;
            if (!!element.hasAttribute && element.hasAttribute('no-traverse')) return;

            // always go deep! <o_0>
            if (element.childNodes) {
                for (var _i = 0; _i < element.childNodes.length; _i++) {
                    this.traverse(element.childNodes[_i], model);
                }
            }
        }
    }]);

    return Traverser;
}();

exports.default = Traverser;

},{"./detector.js":28}],31:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.RaziloBindStringResolver = exports.RaziloBindPropertyResolver = exports.RaziloBindPhantomResolver = exports.RaziloBindObjectResolver = exports.RaziloBindNumberResolver = exports.RaziloBindMethodResolver = exports.RaziloBindBooleanResolver = exports.RaziloBindArrayResolver = exports.RaziloBindResolver = undefined;

var _resolver = require('./src/resolver.js');

var _resolver2 = _interopRequireDefault(_resolver);

var _arrayResolver = require('./src/array.resolver.js');

var _arrayResolver2 = _interopRequireDefault(_arrayResolver);

var _booleanResolver = require('./src/boolean.resolver.js');

var _booleanResolver2 = _interopRequireDefault(_booleanResolver);

var _methodResolver = require('./src/method.resolver.js');

var _methodResolver2 = _interopRequireDefault(_methodResolver);

var _numberResolver = require('./src/number.resolver.js');

var _numberResolver2 = _interopRequireDefault(_numberResolver);

var _objectResolver = require('./src/object.resolver.js');

var _objectResolver2 = _interopRequireDefault(_objectResolver);

var _phantomResolver = require('./src/phantom.resolver.js');

var _phantomResolver2 = _interopRequireDefault(_phantomResolver);

var _propertyResolver = require('./src/property.resolver.js');

var _propertyResolver2 = _interopRequireDefault(_propertyResolver);

var _stringResolver = require('./src/string.resolver.js');

var _stringResolver2 = _interopRequireDefault(_stringResolver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.RaziloBindResolver = _resolver2.default;
exports.RaziloBindArrayResolver = _arrayResolver2.default;
exports.RaziloBindBooleanResolver = _booleanResolver2.default;
exports.RaziloBindMethodResolver = _methodResolver2.default;
exports.RaziloBindNumberResolver = _numberResolver2.default;
exports.RaziloBindObjectResolver = _objectResolver2.default;
exports.RaziloBindPhantomResolver = _phantomResolver2.default;
exports.RaziloBindPropertyResolver = _propertyResolver2.default;
exports.RaziloBindStringResolver = _stringResolver2.default;

},{"./src/array.resolver.js":32,"./src/boolean.resolver.js":33,"./src/method.resolver.js":34,"./src/number.resolver.js":35,"./src/object.resolver.js":36,"./src/phantom.resolver.js":37,"./src/property.resolver.js":38,"./src/resolver.js":39,"./src/string.resolver.js":40}],32:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _resolver = require('./resolver.js');

var _resolver2 = _interopRequireDefault(_resolver);

var _stringResolver = require('./string.resolver.js');

var _stringResolver2 = _interopRequireDefault(_stringResolver);

var _numberResolver = require('./number.resolver.js');

var _numberResolver2 = _interopRequireDefault(_numberResolver);

var _booleanResolver = require('./boolean.resolver.js');

var _booleanResolver2 = _interopRequireDefault(_booleanResolver);

var _propertyResolver = require('./property.resolver.js');

var _propertyResolver2 = _interopRequireDefault(_propertyResolver);

var _phantomResolver = require('./phantom.resolver.js');

var _phantomResolver2 = _interopRequireDefault(_phantomResolver);

var _methodResolver = require('./method.resolver.js');

var _methodResolver2 = _interopRequireDefault(_methodResolver);

var _objectResolver = require('./object.resolver.js');

var _objectResolver2 = _interopRequireDefault(_objectResolver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Array Resolver
 * Resolves data as array with literals or model properties
 *
 * Inherits
 *
 * property: data
 * method: detect(data) { return bool }
 */

var ArrayResolver = function (_Resolver) {
	_inherits(ArrayResolver, _Resolver);

	function ArrayResolver(node) {
		_classCallCheck(this, ArrayResolver);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ArrayResolver).call(this));

		_this.node = node;
		_this.name = 'array';
		_this.regex = ArrayResolver.regex();
		return _this;
	}

	/**
  * resolve()
  * Resolve data to a string, set any observables on data
  */


	_createClass(ArrayResolver, [{
		key: 'resolve',
		value: function resolve(object) {
			var res = ArrayResolver.toArray(this.data, object, this.node);
			this.resolved = res.resolved;
			this.observers = res.observers;
		}

		/**
   * static regex()
   * turns a path and object to a property value, returning list of observers on any found properties
   * @return object regex The regex used to validate if of type or not
   */

	}], [{
		key: 'regex',
		value: function regex() {
			return (/^\[{1}\s?(([0-9]+|\'{1}[^\']+\'{1}|[a-zA-Z_]+|[a-zA-Z_]{1}[^,]+[a-zA-Z_\]]{1}|\[{1}.*\]{1}|\{{1}.*\}{1}|[a-zA-Z]{1}[a-zA-Z0-9_]+((\.[a-zA-Z]{1}[a-zA-Z0-9_]+)|(\[([0-9]+|[a-zA-Z_]{1}[a-zA-Z0-9_.\[\'\]]+)\])|(\[\'[^\[\]\']+\'\]))*\({1}[^\(\)]*\){1})\s?,?\s?)*\s?\]{1}$/
			);
		}

		/**
   * static toArray()
   * turns a data and object to a property value, returning list of observers on any found properties
   * @param string data The data to resolve on the object
   * @param object object The object to resolve the data on
   * @return object {resolved: ..., observers:...} The resolved data and any observers needed to track future changes
   */

	}, {
		key: 'toArray',
		value: function toArray(data, object, node) {
			// split by comma but be carefull not to break nested data
			data = data.trim();
			var parts = data.substring(1, data.length - 1).split(',');
			var values = [parts[0]];
			for (var i = 1; i < parts.length; i++) {
				var sb = (values[values.length - 1].match(/\[/g) || []).length == (values[values.length - 1].match(/\]/g) || []).length;
				var mb = (values[values.length - 1].match(/\{/g) || []).length == (values[values.length - 1].match(/\}/g) || []).length;

				if (sb && mb) values[values.length] = parts[i];else values[values.length - 1] += ',' + parts[i];
			}

			// work through seperated data resolving or pushing for further analysis
			var observers = [];
			var result = [];
			for (var ii = 0; ii < values.length; ii++) {
				values[ii] = values[ii].trim();
				if (_booleanResolver2.default.regex().test(values[ii])) result.push(_booleanResolver2.default.toBoolean(values[ii]).resolved);else if (_stringResolver2.default.regex().test(values[ii])) result.push(_stringResolver2.default.toString(values[ii]).resolved);else if (_numberResolver2.default.regex().test(values[ii])) result.push(_numberResolver2.default.toNumber(values[ii]).resolved);else if (_propertyResolver2.default.regex().test(values[ii])) {
					var propRes = _propertyResolver2.default.toProperty(values[ii], object, node);
					result.push(propRes.resolved);
					observers = _resolver2.default.mergeObservers(observers, propRes.observers);
				} else if (_phantomResolver2.default.regex().test(values[ii])) {
					var phRes = _phantomResolver2.default.toProperty(values[ii], object, node);
					result.push(phRes.resolved);
					observers = _resolver2.default.mergeObservers(observers, phRes.observers);
				} else if (_methodResolver2.default.regex().test(values[ii])) {
					var methRes = _methodResolver2.default.toMethod(values[ii], object, node);
					result.push(methRes.resolved);
					observers = _resolver2.default.mergeObservers(observers, methRes.observers);
				} else if (ArrayResolver.regex().test(values[ii])) {
					var arrRes = ArrayResolver.toArray(values[ii], object, node);
					result.push(arrRes.resolved);
					observers = _resolver2.default.mergeObservers(observers, arrRes.observers);
				} else if (_objectResolver2.default.regex().test(values[ii])) {
					var objRes = _objectResolver2.default.toObject(values[ii], object, node);
					result.push(objRes.resolved);
					observers = _resolver2.default.mergeObservers(observers, objRes.observers);
				}
			}

			return { resolved: result, observers: observers };
		}
	}]);

	return ArrayResolver;
}(_resolver2.default);

exports.default = ArrayResolver;

},{"./boolean.resolver.js":33,"./method.resolver.js":34,"./number.resolver.js":35,"./object.resolver.js":36,"./phantom.resolver.js":37,"./property.resolver.js":38,"./resolver.js":39,"./string.resolver.js":40}],33:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _resolver = require('./resolver.js');

var _resolver2 = _interopRequireDefault(_resolver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Boolean Resolver
 * Resolves data as boolean true or false
 *
 * Inherits
 *
 * property: data
 * method: detect(data) { return bool }
 */

var BooleanResolver = function (_Resolver) {
	_inherits(BooleanResolver, _Resolver);

	function BooleanResolver(node) {
		_classCallCheck(this, BooleanResolver);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BooleanResolver).call(this));

		_this.node = node;
		_this.name = 'boolean';
		_this.regex = BooleanResolver.regex();
		return _this;
	}

	/**
  * resolve()
  * Resolve data to a boolean true or false, set any observables on data
  */


	_createClass(BooleanResolver, [{
		key: 'resolve',
		value: function resolve(object) {
			var res = BooleanResolver.toBoolean(this.data);
			this.resolved = res.resolved;
			this.observers = res.observers;
		}

		/**
   * static regex()
   * turns a path and object to a property value, returning list of observers on any found properties
   * @return object regex The regex used to validate if of type or not
   */

	}], [{
		key: 'regex',
		value: function regex() {
			return (/^true|false$/
			);
		}

		/**
   * static toBoolean()
   * turns a path and object to a property value, returning list of observers on any found properties
   * @param string data The data to resolve to a string
   * @return object {resolved: ..., observers:...} The resolved data and any observers needed to track future changes
   */

	}, {
		key: 'toBoolean',
		value: function toBoolean(data) {
			return { resolved: data == 'true' ? true : false, observers: [] };
		}
	}]);

	return BooleanResolver;
}(_resolver2.default);

exports.default = BooleanResolver;

},{"./resolver.js":39}],34:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _resolver = require('./resolver.js');

var _resolver2 = _interopRequireDefault(_resolver);

var _stringResolver = require('./string.resolver.js');

var _stringResolver2 = _interopRequireDefault(_stringResolver);

var _numberResolver = require('./number.resolver.js');

var _numberResolver2 = _interopRequireDefault(_numberResolver);

var _booleanResolver = require('./boolean.resolver.js');

var _booleanResolver2 = _interopRequireDefault(_booleanResolver);

var _propertyResolver = require('./property.resolver.js');

var _propertyResolver2 = _interopRequireDefault(_propertyResolver);

var _phantomResolver = require('./phantom.resolver.js');

var _phantomResolver2 = _interopRequireDefault(_phantomResolver);

var _arrayResolver = require('./array.resolver.js');

var _arrayResolver2 = _interopRequireDefault(_arrayResolver);

var _objectResolver = require('./object.resolver.js');

var _objectResolver2 = _interopRequireDefault(_objectResolver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Method Resolver
 * Resolves data to model method
 *
 * Inherits
 *
 * property: data
 * method: detect(data) { return bool }
 */

var MethodResolver = function (_Resolver) {
	_inherits(MethodResolver, _Resolver);

	function MethodResolver(node) {
		_classCallCheck(this, MethodResolver);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MethodResolver).call(this));

		_this.node = node;
		_this.name = 'method';
		_this.regex = MethodResolver.regex();
		return _this;
	}

	/**
  * resolve()
  * Resolve data to a property, set any observables on data
  * @param object object The object that you want to resolve data to
  */


	_createClass(MethodResolver, [{
		key: 'resolve',
		value: function resolve(object, delay) {
			var res = MethodResolver.toMethod(this.data, object, this.node, delay);
			this.resolved = res.resolved;
			this.observers = res.observers;
		}

		/**
   * static regex()
   * Used to validate if data is a method call or not
   * @return object regex The regex used to validate if of type or not
   */

	}], [{
		key: 'regex',
		value: function regex() {
			return (/^[a-zA-Z]{1}[a-zA-Z0-9_]+((\.[a-zA-Z]{1}[a-zA-Z0-9_]+)|(\[([0-9]+|[a-zA-Z_]{1}[a-zA-Z0-9_.\[\'\]]+)\])|(\[\'[^\[\]\']+\'\]))*\({1}[^\(\)]*\){1}$/
			);
		}

		/**
   * static toMethod()
   * turns a path and object to a property value, returning list of observers on any found properties
   * @param string data The data to resolve on the object
   * @param object object The object to resolve the path on
   * @return object {resolved: ..., observers:...} The resolved data and any observers needed to track future changes
   */

	}, {
		key: 'toMethod',
		value: function toMethod(data, object, node, delay) {
			// get the bit before (
			data = data.trim();
			var key = data.substring(0, data.indexOf('('));

			// get the bit between ()
			var val = data.substring(data.indexOf('(') + 1, data.length - 1);

			// resolve method name
			if (!_propertyResolver2.default.regex().test(key)) return undefined;
			var resolver = _propertyResolver2.default.toProperty(key, object, node);
			var method = resolver.resolved;
			var observers = resolver.observers;
			if (typeof method !== 'function') return undefined;

			// split data by , but do not split objects or arrays
			var parts = val.split(',');
			var values = [parts[0]];
			for (var i = 1; i < parts.length; i++) {
				var sb = (values[values.length - 1].match(/\[/g) || []).length == (values[values.length - 1].match(/\]/g) || []).length;
				var mb = (values[values.length - 1].match(/\{/g) || []).length == (values[values.length - 1].match(/\}/g) || []).length;

				if (sb && mb) values[values.length] = parts[i];else values[values.length - 1] += ',' + parts[i];
			}

			// resolve each split data
			for (var ii = 0; ii < values.length; ii++) {
				// resolve value
				if (_booleanResolver2.default.regex().test(values[ii])) values[ii] = _booleanResolver2.default.toBoolean(values[ii]).resolved;else if (_stringResolver2.default.regex().test(values[ii])) values[ii] = _stringResolver2.default.toString(values[ii]).resolved;else if (_numberResolver2.default.regex().test(values[ii])) values[ii] = _numberResolver2.default.toNumber(values[ii]).resolved;else if (_propertyResolver2.default.regex().test(values[ii])) {
					var propValRes = _propertyResolver2.default.toProperty(values[ii], object, node);
					values[ii] = propValRes.resolved;
					observers = _resolver2.default.mergeObservers(observers, propValRes.observers);
				} else if (_phantomResolver2.default.regex().test(values[ii])) {
					var phValRes = _phantomResolver2.default.toProperty(values[ii], object, node);
					values[ii] = phValRes.resolved;
					observers = _resolver2.default.mergeObservers(observers, phValRes.observers);
				} else if (_arrayResolver2.default.regex().test(values[ii])) {
					var arrValRes = _arrayResolver2.default.toArray(values[ii], object, node);
					values[ii] = arrValRes.resolved;
					observers = _resolver2.default.mergeObservers(observers, arrValRes.observers);
				} else if (_objectResolver2.default.regex().test(values[ii])) {
					var objValRes = _objectResolver2.default.toObject(values[ii], object, node);
					values[ii] = objValRes.resolved;
					observers = _resolver2.default.mergeObservers(observers, objValRes.observers);
				} else values[ii] = undefined;
			}

			// for event binders... return method instead of running it
			return { resolved: !!delay ? { method: method, values: values } : method.apply(this, values), observers: observers };
		}
	}]);

	return MethodResolver;
}(_resolver2.default);

exports.default = MethodResolver;

},{"./array.resolver.js":32,"./boolean.resolver.js":33,"./number.resolver.js":35,"./object.resolver.js":36,"./phantom.resolver.js":37,"./property.resolver.js":38,"./resolver.js":39,"./string.resolver.js":40}],35:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _resolver = require('./resolver.js');

var _resolver2 = _interopRequireDefault(_resolver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Number Resolver
 * Resolves data as number
 *
 * Inherits
 *
 * property: data
 * method: detect(data) { return bool }
 */

var NumberResolver = function (_Resolver) {
	_inherits(NumberResolver, _Resolver);

	function NumberResolver(node) {
		_classCallCheck(this, NumberResolver);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(NumberResolver).call(this));

		_this.node = node;
		_this.name = 'number';
		_this.regex = NumberResolver.regex();
		return _this;
	}

	/**
  * resolve()
  * Resolve data to a number, set any observables on data
  */


	_createClass(NumberResolver, [{
		key: 'resolve',
		value: function resolve(object) {
			var res = NumberResolver.toNumber(this.data);
			this.resolved = res.resolved;
			this.observers = res.obeservers;
		}

		/**
   * static regex()
   * turns a path and object to a property value, returning list of observers on any found properties
   * @return object regex The regex used to validate if of type or not
   */

	}], [{
		key: 'regex',
		value: function regex() {
			return (/^[0-9]+(\.[0-9]+)?$/
			);
		}

		/**
   * static toNumber()
   * turns a path and object to a property value, returning list of observers on any found properties
   * @param string data The data to resolve to a string
   * @return object {resolved: ..., observers:...} The resolved data and any observers needed to track future changes
   */

	}, {
		key: 'toNumber',
		value: function toNumber(data) {
			return { resolved: data, observers: [] };
		}
	}]);

	return NumberResolver;
}(_resolver2.default);

exports.default = NumberResolver;

},{"./resolver.js":39}],36:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _resolver = require('./resolver.js');

var _resolver2 = _interopRequireDefault(_resolver);

var _stringResolver = require('./string.resolver.js');

var _stringResolver2 = _interopRequireDefault(_stringResolver);

var _numberResolver = require('./number.resolver.js');

var _numberResolver2 = _interopRequireDefault(_numberResolver);

var _booleanResolver = require('./boolean.resolver.js');

var _booleanResolver2 = _interopRequireDefault(_booleanResolver);

var _propertyResolver = require('./property.resolver.js');

var _propertyResolver2 = _interopRequireDefault(_propertyResolver);

var _phantomResolver = require('./phantom.resolver.js');

var _phantomResolver2 = _interopRequireDefault(_phantomResolver);

var _methodResolver = require('./method.resolver.js');

var _methodResolver2 = _interopRequireDefault(_methodResolver);

var _arrayResolver = require('./array.resolver.js');

var _arrayResolver2 = _interopRequireDefault(_arrayResolver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Object Resolver
 * Resolves data as object with literals or model properties
 *
 * Inherits
 *
 * property: data
 * method: detect(data) { return bool }
 */

var ObjectResolver = function (_Resolver) {
	_inherits(ObjectResolver, _Resolver);

	function ObjectResolver(node) {
		_classCallCheck(this, ObjectResolver);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ObjectResolver).call(this));

		_this.node = node;
		_this.name = 'object';
		_this.regex = ObjectResolver.regex();
		return _this;
	}

	/**
  * resolve()
  * Resolve data to a string, set any observables on data
  */


	_createClass(ObjectResolver, [{
		key: 'resolve',
		value: function resolve(object, delay) {
			var res = ObjectResolver.toObject(this.data, object, this.node, delay);
			this.resolved = res.resolved;
			this.observers = res.observers;
		}

		/**
   * static regex()
   * turns a path and object to a property value, returning list of observers on any found properties
   * @return object regex The regex used to validate if of type or not
   */

	}], [{
		key: 'regex',
		value: function regex() {
			return (/^\{{1}\s?((\'{1}[^\']+\'{1}|[a-zA-Z_]+|[a-zA-Z_]{1}[^,]+[a-zA-Z_\]]{1}|)\s?:{1}\s?([0-9]+|\'{1}[^\']+\'{1}|[a-zA-Z_]+|[a-zA-Z_]{1}[^,]+[a-zA-Z_\]]{1}|\[{1}.*\]{1}|\{{1}.*\}{1}|[a-zA-Z]{1}[a-zA-Z0-9_]+((\.[a-zA-Z]{1}[a-zA-Z0-9_]+)|(\[([0-9]+|[a-zA-Z_]{1}[a-zA-Z0-9_.\[\'\]]+)\])|(\[\'[^\[\]\']+\'\]))*\({1}[^\(\)]*\){1})\s?,?\s?)*\s?\}{1}$/
			);
		}

		/**
   * static toObject()
   * turns a data and object to a property value, returning list of observers on any found properties
   * @param string data The data to resolve on the object
   * @param object object The object to resolve the data on
   * @return object {resolved: ..., observers:...} The resolved data and any observers needed to track future changes
   */

	}, {
		key: 'toObject',
		value: function toObject(data, object, node, delay) {
			// split by comma but be carefull not to break nested data
			data = data.trim();
			var parts = data.substring(1, data.length - 1).split(',');
			var values = [parts[0]];
			for (var i = 1; i < parts.length; i++) {
				var sb = (values[values.length - 1].match(/\[/g) || []).length == (values[values.length - 1].match(/\]/g) || []).length;
				var mb = (values[values.length - 1].match(/\{/g) || []).length == (values[values.length - 1].match(/\}/g) || []).length;

				if (sb && mb) values[values.length] = parts[i];else values[values.length - 1] += ',' + parts[i];
			}

			// work through seperated data resolving or pushing for further analysis
			var observers = [];
			var result = [];
			for (var ii = 0; ii < values.length; ii++) {
				values[ii] = values[ii].trim();

				// split by ':' preserving data in second part
				var vKey = values[ii].substring(0, values[ii].indexOf(':')).trim();
				var vVal = values[ii].substring(values[ii].indexOf(':') + 1, values[ii].length).trim();

				// resolve key
				if (_stringResolver2.default.regex().test(vKey)) vKey = _stringResolver2.default.toString(vKey).resolved;else if (_propertyResolver2.default.regex().test(vKey)) {
					var propKeyRes = _propertyResolver2.default.toProperty(vKey, object, node);
					vKey = propKeyRes.resolved;
					observers = _resolver2.default.mergeObservers(observers, propKeyRes.observers);
				} else if (_phantomResolver2.default.regex().test(vKey)) {
					var phKeyRes = _phantomResolver2.default.toProperty(vKey, object, node);
					vKey = phKeyRes.resolved;
					observers = _resolver2.default.mergeObservers(observers, phKeyRes.observers);
				} else vKey = 'undefined';

				// resolve value
				if (_booleanResolver2.default.regex().test(vVal)) vVal = _booleanResolver2.default.toBoolean(vVal).resolved;else if (_stringResolver2.default.regex().test(vVal)) vVal = _stringResolver2.default.toString(vVal).resolved;else if (_numberResolver2.default.regex().test(vVal)) vVal = _numberResolver2.default.toNumber(vVal).resolved;else if (_propertyResolver2.default.regex().test(vVal)) {
					var propValRes = _propertyResolver2.default.toProperty(vVal, object, node);
					vVal = propValRes.resolved;
					observers = _resolver2.default.mergeObservers(observers, propValRes.observers);
				} else if (_phantomResolver2.default.regex().test(vVal)) {
					var phValRes = _phantomResolver2.default.toProperty(vVal, object, node);
					vVal = phValRes.resolved;
					observers = _resolver2.default.mergeObservers(observers, phValRes.observers);
				} else if (_methodResolver2.default.regex().test(vVal)) {
					var methValRes = _methodResolver2.default.toMethod(vVal, object, node, delay);
					vVal = methValRes.resolved;
					observers = _resolver2.default.mergeObservers(observers, methValRes.observers);
				} else if (_arrayResolver2.default.regex().test(vVal)) {
					var arrValRes = _arrayResolver2.default.toArray(vVal, object, node);
					vVal = arrValRes.resolved;
					observers = _resolver2.default.mergeObservers(observers, arrValRes.observers);
				} else if (ObjectResolver.regex().test(vVal)) {
					var objValRes = ObjectResolver.toObject(vVal, object, node);
					vVal = objValRes.resolved;
					observers = _resolver2.default.mergeObservers(observers, objValRes.observers);
				} else vVal = undefined;

				result[vKey] = vVal;
			}

			return { resolved: result, observers: observers };
		}
	}]);

	return ObjectResolver;
}(_resolver2.default);

exports.default = ObjectResolver;

},{"./array.resolver.js":32,"./boolean.resolver.js":33,"./method.resolver.js":34,"./number.resolver.js":35,"./phantom.resolver.js":37,"./property.resolver.js":38,"./resolver.js":39,"./string.resolver.js":40}],37:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _resolver = require('./resolver.js');

var _resolver2 = _interopRequireDefault(_resolver);

var _propertyResolver = require('./property.resolver.js');

var _propertyResolver2 = _interopRequireDefault(_propertyResolver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Phantom Property Resolver
 * Resolves phantom property to real property based on parent iteration.
 * Phantom properties proceed with a $ and must resolve to an itterable instance
 *
 * Inherits
 *
 * property: data
 * method: detect(data) { return bool }
 */

var PhantomResolver = function (_Resolver) {
	_inherits(PhantomResolver, _Resolver);

	function PhantomResolver(node) {
		_classCallCheck(this, PhantomResolver);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PhantomResolver).call(this));

		_this.node = node;
		_this.name = 'phantom';
		_this.regex = PhantomResolver.regex();
		return _this;
	}

	/**
  * resolve()
  * Resolve data to a property, set any observables on data
  * @param object object The object that you want to resolve data to
  */


	_createClass(PhantomResolver, [{
		key: 'resolve',
		value: function resolve(object) {
			var res = PhantomResolver.toProperty(this.data, object, this.node);
			this.resolved = res.resolved;
			this.observers = res.observers;
		}

		/**
   * static regex()
   * regex used to test resolvable data on
   * @return object regex The regex used to validate if of type or not
   */

	}], [{
		key: 'regex',
		value: function regex() {
			return (/^\${1}[a-zA-Z]{1}[a-zA-Z0-9_]+((\.[a-zA-Z]{1}[a-zA-Z0-9_]+)|(\[([0-9]+|[a-zA-Z_]{1}[a-zA-Z0-9_.\[\'\]]+)\])|(\[\'[^\[\]\']+\'\]))*$/
			);
		}

		/**
   * static toProperty()
   * turns a path and object to a property value, returning list of observers on any found properties
   * @param string path The path to resolve on the object
   * @param object object The object to resolve the path on
   * @param HTMLElement node The node that the property is being generated for (allows look back for phantom)
   * @return object {resolved: ..., observers:...} The resolved data and any observers needed to track future changes
   */

	}, {
		key: 'toProperty',
		value: function toProperty(data, object, node) {
			data = data.trim();
			var result = { resolved: undefined, observers: [] };
			if (!node || !node.parentNode) return result;

			// find closest phantom up nodes
			var sniffed = node;
			while (sniffed && !sniffed.razilovm && !sniffed.phantom) {
				if (sniffed.phantom && (!sniffed.phantom.keyName || sniffed.phantom.keyName == data)) break;
				if (sniffed.phantom && (!sniffed.phantom.valueName || sniffed.phantom.valueName == data)) break;
				sniffed = sniffed.parentNode;
			}
			if (!sniffed || !sniffed.phantom) return result;

			// resolve key and value names, else default (force $ in front)
			var keyName = sniffed.phantom.keyName ? sniffed.phantom.keyName : '$key';
			var valueName = sniffed.phantom.valueName ? sniffed.phantom.valueName : '$value';
			if (keyName.indexOf('$') !== 0) keyName = '$' + keyName;
			if (valueName.indexOf('$') !== 0) valueName = '$' + valueName;

			// lets resolve phantom data, check first part of data for phantom name
			var pName = data.split(/\.|\[/)[0];
			var pProperty = data.length > pName.length ? data.substring(pName.length + 1, data.length) : undefined;
			if (pName == keyName) result.resolved = sniffed.phantom.iterationKey;else if (pName == valueName) {
				// if observers, resolve result.resolved to live value, else use one time value
				if (sniffed.phantom.observers.length > 0) {
					// clone observers, ensure root is changed to reflect itterable (last one in stack)
					for (var key in sniffed.phantom.observers) {
						result.observers.push(sniffed.phantom.observers[key]);
					}result.observers[result.observers.length - 1] = result.observers[result.observers.length - 1] + '.' + sniffed.phantom.iterationKey;

					// get live value from model
					var obsParts = result.observers[result.observers.length - 1].split('.');
					result.resolved = object[obsParts[0]];
					for (var i = 1; i < obsParts.length; i++) {
						result.resolved = result.resolved[obsParts[i]];
					} // resolve properties on phantom and collect observers
					if (pProperty) {
						var propRes = _propertyResolver2.default.toProperty(pProperty, result.resolved);
						result.resolved = typeof propRes.resolved !== 'undefined' ? propRes.resolved : undefined;
						if (propRes.observers.length > 0) {
							propRes.observers[propRes.observers.length - 1] = result.observers[result.observers.length - 1] + '.' + propRes.observers[propRes.observers.length - 1];
							for (var key2 in propRes.observers) {
								result.observers.push(propRes.observers[key2]);
							}
						}
					}
				} else result.resolved = sniffed.phantom.initialValue; // fugees (one-time!)
			}

			return result;
		}
	}]);

	return PhantomResolver;
}(_resolver2.default);

exports.default = PhantomResolver;

},{"./property.resolver.js":38,"./resolver.js":39}],38:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _resolver = require('./resolver.js');

var _resolver2 = _interopRequireDefault(_resolver);

var _phantomResolver = require('./phantom.resolver.js');

var _phantomResolver2 = _interopRequireDefault(_phantomResolver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Property Resolver
 * Resolves data to object, sets observers on any paths found
 *
 * Inherits
 *
 * property: data
 * method: detect(data) { return bool }
 */

var PropertyResolver = function (_Resolver) {
	_inherits(PropertyResolver, _Resolver);

	function PropertyResolver(node) {
		_classCallCheck(this, PropertyResolver);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PropertyResolver).call(this));

		_this.node = node;
		_this.name = 'property';
		_this.regex = PropertyResolver.regex();
		return _this;
	}

	/**
  * resolve()
  * Resolve data to a property, set any observables on data
  * @param object object The object that you want to resolve data to
  */


	_createClass(PropertyResolver, [{
		key: 'resolve',
		value: function resolve(object) {
			var res = PropertyResolver.toProperty(this.data, object, this.node);
			this.resolved = res.resolved;
			this.observers = res.observers;
		}

		/**
   * static regex()
   * turns a path and object to a property value, returning list of observers on any found properties
   * @return object regex The regex used to validate if of type or not
   */

	}], [{
		key: 'regex',
		value: function regex() {
			return (/^[a-zA-Z]{1}[a-zA-Z0-9_]+((\.[a-zA-Z]{1}[a-zA-Z0-9_]+)|(\[([0-9]+|[a-zA-Z_]{1}[a-zA-Z0-9_.\[\'\]]+)\])|(\[\'[^\[\]\']+\'\]))*$/
			);
		}

		/**
   * static toProperty()
   * turns a path and object to a property value, returning list of observers on any found properties
   * @param string path The path to resolve on the object
   * @param object object The object to resolve the path on
   * @return object {resolved: ..., observers:...} The resolved data and any observers needed to track future changes
   */

	}, {
		key: 'toProperty',
		value: function toProperty(data, object, node) {
			// split by dot or open square bracket but be carefull not to break nested data
			data = data.trim();
			var parts = data.replace(/\[/g, '.[').split(/\./);
			var values = [parts[0]];
			for (var i = 1; i < parts.length; i++) {
				var sb = (values[values.length - 1].match(/\[/g) || []).length == (values[values.length - 1].match(/\]/g) || []).length;

				if (sb) values[values.length] = parts[i];else {
					values[values.length - 1] += '.' + parts[i];
					values[values.length - 1] = values[values.length - 1].replace(/\.\[/g, '[');
				}
			}

			// work through seperated data resolving or pushing for further analysis
			var observable = '';
			var observers = [];
			var result = object;
			for (var ii = 0; ii < values.length; ii++) {
				values[ii] = values[ii].trim();

				if (values[ii].indexOf("[") == 0) {
					if (/^\[\s*[0-9]+\s*\]$/.test(values[ii])) {
						// index
						var key = parseInt(values[ii].replace(/\[|\]/g, '').trim());
						result = result[key];
						observable += '.' + key;
					} else if (/^\[\s*\'(.*)\'\s*\]$/.test(values[ii])) {
						// key
						var _key = values[ii].replace(/\'|\[|\]/g, '').trim();
						result = result[_key];
						observable += '.' + _key;
					} else if (_phantomResolver2.default.regex().test(values[ii].substring(1, values[ii].length - 1))) {
						var phRes = _phantomResolver2.default.toProperty(values[ii].substring(1, values[ii].length - 1), object, node);
						result = phRes.resolved ? result[phRes.resolved] : undefined;
						observable += '.' + phRes.resolved;
						observers = _resolver2.default.mergeObservers(observers, phRes.observers);
					} else {
						var propRes = PropertyResolver.toProperty(values[ii].substring(1, values[ii].length - 1), object, node);
						result = propRes.resolved ? result[propRes.resolved] : undefined;
						observable += '.' + propRes.resolved;
						observers = _resolver2.default.mergeObservers(observers, propRes.observers);
					}
				} else {
					result = result ? result[values[ii]] : undefined; // removing array items
					if (typeof result !== 'undefined') observable += '.' + values[ii];
				}
			}

			// compact observable path to any other observables found
			if (observable) observers.push(observable.charAt(0) === '.' ? observable.substring(1, observable.length) : observable);

			return { resolved: result, observers: observers };
		}
	}]);

	return PropertyResolver;
}(_resolver2.default);

exports.default = PropertyResolver;

},{"./phantom.resolver.js":37,"./resolver.js":39}],39:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Resolver
 * Generic resolver methods used accross all resolvers
 */

var Resolver = function () {
	function Resolver() {
		_classCallCheck(this, Resolver);

		this.node = undefined;
		this.name = undefined;
		this.regex = undefined;
	}

	/**
  * detect()
  * is data resolvable to resolver
  * @param string data The data string to try and resolve to type
  * @return bool True on resolvable, false on fail.
  */


	_createClass(Resolver, [{
		key: "detect",
		value: function detect(data) {
			this.data = data;
			return this.regex.test(this.data);
		}

		// join two observer arrays togethor without duplicating

	}], [{
		key: "mergeObservers",
		value: function mergeObservers(obsA, obsB) {
			for (var i = 0; i < obsB.length; i++) {
				if (obsA.indexOf(obsB[i]) < 0) obsA.push(obsB[i]);
			}

			return obsA;
		}
	}]);

	return Resolver;
}();

exports.default = Resolver;

},{}],40:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _resolver = require('./resolver.js');

var _resolver2 = _interopRequireDefault(_resolver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * String Resolver
 * Resolves data as string literal
 *
 * Inherits
 *
 * property: data
 * method: detect(data) { return bool }
 */

var StringResolver = function (_Resolver) {
	_inherits(StringResolver, _Resolver);

	function StringResolver(node) {
		_classCallCheck(this, StringResolver);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(StringResolver).call(this));

		_this.node = node;
		_this.name = 'string';
		_this.regex = StringResolver.regex();
		return _this;
	}

	/**
  * resolve()
  * Resolve data to a string, set any observables on data
  */


	_createClass(StringResolver, [{
		key: 'resolve',
		value: function resolve(object) {
			var res = StringResolver.toString(this.data);
			this.resolved = res.resolved;
			this.observers = res.obeservers;
		}

		/**
   * static regex()
   * turns a path and object to a property value, returning list of observers on any found properties
   * @return object regex The regex used to validate if of type or not
   */

	}], [{
		key: 'regex',
		value: function regex() {
			return (/^\'.*\'$/
			);
		}

		/**
   * static toString()
   * turns a path and object to a property value, returning list of observers on any found properties
   * @param string data The data to resolve to a string
   * @return object {resolved: ..., observers:...} The resolved data and any observers needed to track future changes
   */

	}, {
		key: 'toString',
		value: function toString(data) {
			return { resolved: data.substring(1, data.length - 1), observers: [] };
		}
	}]);

	return StringResolver;
}(_resolver2.default);

exports.default = StringResolver;

},{"./resolver.js":39}]},{},[1]);
