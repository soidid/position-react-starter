module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/_assets/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!************************************!*\
  !*** ./config/mainPrerenderer.jsx ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _appMainRoutes = __webpack_require__(/*! ../app/mainRoutes */ 3);

	var _appMainRoutes2 = _interopRequireDefault(_appMainRoutes);

	var _appMainStoresDescriptions = __webpack_require__(/*! ../app/mainStoresDescriptions */ 4);

	var _appMainStoresDescriptions2 = _interopRequireDefault(_appMainStoresDescriptions);

	var _appMainPrerenderHtml = __webpack_require__(/*! ../app/mainPrerender.html */ 8);

	var _appMainPrerenderHtml2 = _interopRequireDefault(_appMainPrerenderHtml);

	var _createStoresForPrerender = __webpack_require__(/*! ./createStoresForPrerender */ 5);

	var _createStoresForPrerender2 = _interopRequireDefault(_createStoresForPrerender);

	var _Prerenderer = __webpack_require__(/*! ./Prerenderer */ 6);

	var _Prerenderer2 = _interopRequireDefault(_Prerenderer);

	var MainRenderer = (function () {
		function MainRenderer(options) {
			_classCallCheck(this, MainRenderer);

			this.prerenderer = new _Prerenderer2["default"](_appMainRoutes2["default"]);
			this.html = _appMainPrerenderHtml2["default"].replace("STYLE_URL", options.styleUrl).replace("SCRIPT_URL", options.scriptUrl).replace("COMMONS_URL", options.commonsUrl);
		}

		_createClass(MainRenderer, [{
			key: "render",
			value: function render(path, readItems, callback) {
				var _this = this;

				var stores = _createStoresForPrerender2["default"](_appMainStoresDescriptions2["default"], readItems);
				this.prerenderer.getContent(path, stores, function (err, content, data) {
					if (err) return callback(err);
					var page = _this.html.replace("DATA", JSON.stringify(data)).replace("CONTENT", content);
					callback(null, page);
				});
			}
		}]);

		return MainRenderer;
	})();

	exports["default"] = MainRenderer;
	module.exports = exports["default"];

/***/ },
/* 1 */
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("react");

/***/ },
/* 2 */,
/* 3 */
/*!****************************!*\
  !*** ./app/mainRoutes.jsx ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _react = __webpack_require__(/*! react */ 1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(/*! react-router */ 28);

	/* eslint-disable no-multi-spaces */
	// Only import from `route-handlers/*`

	var _routeHandlersApplication = __webpack_require__(/*! route-handlers/Application */ 10);

	var _routeHandlersApplication2 = _interopRequireDefault(_routeHandlersApplication);

	var _routeHandlersSomePage = __webpack_require__(/*! route-handlers/SomePage */ 25);

	var _routeHandlersSomePage2 = _interopRequireDefault(_routeHandlersSomePage);

	var _routeHandlersTodoListPage = __webpack_require__(/*! route-handlers/TodoListPage */ 11);

	var _routeHandlersTodoListPage2 = _interopRequireDefault(_routeHandlersTodoListPage);

	var _routeHandlersHomePage = __webpack_require__(/*! route-handlers/HomePage */ 12);

	var _routeHandlersHomePage2 = _interopRequireDefault(_routeHandlersHomePage);

	var _routeHandlersNotFoundPage = __webpack_require__(/*! route-handlers/NotFoundPage */ 13);

	var _routeHandlersNotFoundPage2 = _interopRequireDefault(_routeHandlersNotFoundPage);

	//

	var _routeHandlersPersonPage = __webpack_require__(/*! route-handlers/PersonPage */ 14);

	var _routeHandlersPersonPage2 = _interopRequireDefault(_routeHandlersPersonPage);

	var _routeHandlersPersonIssuePage = __webpack_require__(/*! route-handlers/PersonIssuePage */ 15);

	var _routeHandlersPersonIssuePage2 = _interopRequireDefault(_routeHandlersPersonIssuePage);

	var _routeHandlersPersonListPage = __webpack_require__(/*! route-handlers/PersonListPage */ 16);

	var _routeHandlersPersonListPage2 = _interopRequireDefault(_routeHandlersPersonListPage);

	var _componentsProfileProfileJsx = __webpack_require__(/*! components/Profile/Profile.jsx */ 21);

	var _componentsProfileProfileJsx2 = _interopRequireDefault(_componentsProfileProfileJsx);

	var _routeHandlersCandidatesPage = __webpack_require__(/*! route-handlers/CandidatesPage */ 17);

	var _routeHandlersCandidatesPage2 = _interopRequireDefault(_routeHandlersCandidatesPage);

	var _routeHandlersIssueListPage = __webpack_require__(/*! route-handlers/IssueListPage */ 18);

	var _routeHandlersIssueListPage2 = _interopRequireDefault(_routeHandlersIssueListPage);

	var _routeHandlersIssuePage = __webpack_require__(/*! route-handlers/IssuePage */ 19);

	var _routeHandlersIssuePage2 = _interopRequireDefault(_routeHandlersIssuePage);

	var _routeHandlersIssueVotePage = __webpack_require__(/*! route-handlers/IssueVotePage */ 20);

	var _routeHandlersIssueVotePage2 = _interopRequireDefault(_routeHandlersIssueVotePage);

	/* eslint-enable */

	// polyfill
	if (!Object.assign) Object.assign = _react2["default"].__spread; // eslint-disable-line no-underscore-dangle

	// export routes
	module.exports = _react2["default"].createElement(
		_reactRouter.Route,
		{ name: "app", path: "/", handler: _routeHandlersApplication2["default"] },
		_react2["default"].createElement(_reactRouter.Route, { name: "home", path: "/", handler: _routeHandlersHomePage2["default"] }),
		_react2["default"].createElement(_reactRouter.Route, { name: "personList", path: "/person-list", handler: _routeHandlersPersonListPage2["default"] }),
		_react2["default"].createElement(_reactRouter.Route, { name: "person", path: "/person", handler: _routeHandlersPersonPage2["default"] }),
		_react2["default"].createElement(_reactRouter.Route, { name: "personIssue", path: "/person/:issue", handler: _routeHandlersPersonPage2["default"] }),
		_react2["default"].createElement(_reactRouter.Route, { name: "candidates", path: "/candidates", handler: _routeHandlersCandidatesPage2["default"] }),
		_react2["default"].createElement(_reactRouter.Route, { name: "issueList", path: "/issue-list", handler: _routeHandlersIssueListPage2["default"] }),
		_react2["default"].createElement(_reactRouter.Route, { name: "issue", path: "/issue", handler: _routeHandlersIssuePage2["default"] }),
		_react2["default"].createElement(_reactRouter.Route, { name: "issueVote", path: "/issue/:issue", handler: _routeHandlersIssueVotePage2["default"] }),
		_react2["default"].createElement(_reactRouter.DefaultRoute, { handler: _routeHandlersHomePage2["default"] }),
		_react2["default"].createElement(_reactRouter.NotFoundRoute, { handler: _routeHandlersNotFoundPage2["default"] })
	);

/***/ },
/* 4 */
/*!***************************************!*\
  !*** ./app/mainStoresDescriptions.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	
	// This file describe which stores exists and in which format updates are stored and merged

	"use strict";

	var _updateHelpersReact = __webpack_require__(/*! update-helpers/react */ 22);

	var _updateHelpersList = __webpack_require__(/*! update-helpers/list */ 23);

	module.exports = {
		// the Router is a local store that handles information about data fetching
		// see ../config/app.jsx
		Router: {
			local: true,
			readSingleItem: function readSingleItem(item, callback) {
				callback(null, item.oldData || null);
			}
		}
	};

/***/ },
/* 5 */
/*!*********************************************!*\
  !*** ./config/createStoresForPrerender.jsx ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	// create stores for prerending
	// readItems contains async methods for fetching the data from database
	exports["default"] = createStoresForPrerender;

	var _itemsStore = __webpack_require__(/*! items-store */ 24);

	function createStoresForPrerender(storesDescriptions, readItems) {
		return Object.keys(storesDescriptions).reduce(function (obj, name) {
			obj[name] = new _itemsStore.ItemsStore(Object.assign({
				readSingleItem: readItems[name],
				queueRequest: function queueRequest(fn) {
					fn();
				}
			}, storesDescriptions[name]));
			return obj;
		}, {});
	}

	module.exports = exports["default"];

/***/ },
/* 6 */
/*!********************************!*\
  !*** ./config/Prerenderer.jsx ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _react = __webpack_require__(/*! react */ 1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(/*! react-router */ 28);

	var _reactRouter2 = _interopRequireDefault(_reactRouter);

	var _async = __webpack_require__(/*! async */ 7);

	var _async2 = _interopRequireDefault(_async);

	var _StoresWrapper = __webpack_require__(/*! ./StoresWrapper */ 9);

	var _StoresWrapper2 = _interopRequireDefault(_StoresWrapper);

	var Prerenderer = (function () {
		function Prerenderer(routes) {
			_classCallCheck(this, Prerenderer);

			this.routes = routes;
		}

		_createClass(Prerenderer, [{
			key: "getContent",
			value: function getContent(path, stores, callback) {
				// run the path thought react-router
				_reactRouter2["default"].run(this.routes, path, function (Application, state) {
					// wait until every store is charged by the components
					// for faster response time there could be a timeout here
					_async2["default"].forEach(state.routes, function (route, innerCallback) {
						if (route.handler.chargeStores) {
							route.handler.chargeStores(stores, state.params, innerCallback);
						} else {
							innerCallback();
						}
					}, function () {

						// prerender the application with the stores
						var application = _react2["default"].renderToString(_react2["default"].createElement(_StoresWrapper2["default"], { Component: Application, stores: stores }));

						// get the data from the stores for embedding into the page
						var data = Object.keys(stores).reduce(function (obj, name) {
							if (!stores[name].desc.local) obj[name] = stores[name].getData();
							return obj;
						}, {});

						// format the full page
						callback(null, application, data);
					});
				});
			}
		}]);

		return Prerenderer;
	})();

	exports["default"] = Prerenderer;
	module.exports = exports["default"];

/***/ },
/* 7 */
/*!************************!*\
  !*** external "async" ***!
  \************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("async");

/***/ },
/* 8 */
/*!********************************!*\
  !*** ./app/mainPrerender.html ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<!DOCTYPE html>\n<html>\n\t<head>\n\t\t<meta charset=\"utf-8\">\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1\">\n\t\t<link rel=\"stylesheet\" href=\"STYLE_URL\">\n\t</head>\n\t<body>\n\t\t<script>var __StoreData = DATA;</script><div id=\"content\">CONTENT</div><script src=\"SCRIPT_URL\"></script>\n\t</body>\n</html>\n";

/***/ },
/* 9 */
/*!**********************************!*\
  !*** ./config/StoresWrapper.jsx ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _react = __webpack_require__(/*! react */ 1);

	var _react2 = _interopRequireDefault(_react);

	var StoresWrapper = (function () {
		function StoresWrapper() {
			_classCallCheck(this, StoresWrapper);
		}

		_createClass(StoresWrapper, [{
			key: "getChildContext",
			value: function getChildContext() {
				return {
					stores: this.props.stores
				};
			}
		}, {
			key: "render",
			value: function render() {
				var Application = this.props.Component;
				return _react2["default"].createElement(Application, null);
			}
		}]);

		return StoresWrapper;
	})();

	exports["default"] = StoresWrapper;
	;

	StoresWrapper.childContextTypes = {
		stores: _react2["default"].PropTypes.object
	};
	module.exports = exports["default"];

/***/ },
/* 10 */
/*!********************************************!*\
  !*** ./app/route-handlers/Application.jsx ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _itemsStore = __webpack_require__(/*! items-store */ 24);

	var _containersApplicationApplicationJsx = __webpack_require__(/*! containers/Application/Application.jsx */ 31);

	var _containersApplicationApplicationJsx2 = _interopRequireDefault(_containersApplicationApplicationJsx);

	__webpack_require__(/*! ./normalize.css */ 42);

	__webpack_require__(/*! ./css/font-awesome.css */ 43);

	exports["default"] = _itemsStore.createContainer(_containersApplicationApplicationJsx2["default"]);
	module.exports = exports["default"];

/***/ },
/* 11 */
/*!*********************************************!*\
  !*** ./app/route-handlers/TodoListPage.jsx ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _itemsStore = __webpack_require__(/*! items-store */ 24);

	var _containersTodoListPageTodoListPageJsx = __webpack_require__(/*! containers/TodoListPage/TodoListPage.jsx */ 33);

	var _containersTodoListPageTodoListPageJsx2 = _interopRequireDefault(_containersTodoListPageTodoListPageJsx);

	exports["default"] = _itemsStore.createContainer(_containersTodoListPageTodoListPageJsx2["default"]);
	module.exports = exports["default"];

/***/ },
/* 12 */
/*!*****************************************!*\
  !*** ./app/route-handlers/HomePage.jsx ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _itemsStore = __webpack_require__(/*! items-store */ 24);

	var _containersHomePageHomePageJsx = __webpack_require__(/*! containers/HomePage/HomePage.jsx */ 34);

	var _containersHomePageHomePageJsx2 = _interopRequireDefault(_containersHomePageHomePageJsx);

	exports["default"] = _itemsStore.createContainer(_containersHomePageHomePageJsx2["default"]);
	module.exports = exports["default"];

/***/ },
/* 13 */
/*!*********************************************!*\
  !*** ./app/route-handlers/NotFoundPage.jsx ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _itemsStore = __webpack_require__(/*! items-store */ 24);

	var _containersNotFoundPageNotFoundPageJsx = __webpack_require__(/*! containers/NotFoundPage/NotFoundPage.jsx */ 32);

	var _containersNotFoundPageNotFoundPageJsx2 = _interopRequireDefault(_containersNotFoundPageNotFoundPageJsx);

	exports["default"] = _itemsStore.createContainer(_containersNotFoundPageNotFoundPageJsx2["default"]);
	module.exports = exports["default"];

/***/ },
/* 14 */
/*!*******************************************!*\
  !*** ./app/route-handlers/PersonPage.jsx ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _itemsStore = __webpack_require__(/*! items-store */ 24);

	var _containersPersonPagePersonPageJsx = __webpack_require__(/*! containers/PersonPage/PersonPage.jsx */ 35);

	var _containersPersonPagePersonPageJsx2 = _interopRequireDefault(_containersPersonPagePersonPageJsx);

	exports["default"] = _itemsStore.createContainer(_containersPersonPagePersonPageJsx2["default"]);
	module.exports = exports["default"];

/***/ },
/* 15 */
/*!************************************************!*\
  !*** ./app/route-handlers/PersonIssuePage.jsx ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _itemsStore = __webpack_require__(/*! items-store */ 24);

	var _containersPersonIssuePagePersonIssuePageJsx = __webpack_require__(/*! containers/PersonIssuePage/PersonIssuePage.jsx */ 36);

	var _containersPersonIssuePagePersonIssuePageJsx2 = _interopRequireDefault(_containersPersonIssuePagePersonIssuePageJsx);

	exports["default"] = _itemsStore.createContainer(_containersPersonIssuePagePersonIssuePageJsx2["default"]);
	module.exports = exports["default"];

/***/ },
/* 16 */
/*!***********************************************!*\
  !*** ./app/route-handlers/PersonListPage.jsx ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _itemsStore = __webpack_require__(/*! items-store */ 24);

	var _containersPersonListPagePersonListPageJsx = __webpack_require__(/*! containers/PersonListPage/PersonListPage.jsx */ 37);

	var _containersPersonListPagePersonListPageJsx2 = _interopRequireDefault(_containersPersonListPagePersonListPageJsx);

	exports["default"] = _itemsStore.createContainer(_containersPersonListPagePersonListPageJsx2["default"]);
	module.exports = exports["default"];

/***/ },
/* 17 */
/*!***********************************************!*\
  !*** ./app/route-handlers/CandidatesPage.jsx ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _itemsStore = __webpack_require__(/*! items-store */ 24);

	var _containersCandidatesPageCandidatesPageJsx = __webpack_require__(/*! containers/CandidatesPage/CandidatesPage.jsx */ 38);

	var _containersCandidatesPageCandidatesPageJsx2 = _interopRequireDefault(_containersCandidatesPageCandidatesPageJsx);

	exports["default"] = _itemsStore.createContainer(_containersCandidatesPageCandidatesPageJsx2["default"]);
	module.exports = exports["default"];

/***/ },
/* 18 */
/*!**********************************************!*\
  !*** ./app/route-handlers/IssueListPage.jsx ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _itemsStore = __webpack_require__(/*! items-store */ 24);

	var _containersIssueListPageIssueListPageJsx = __webpack_require__(/*! containers/IssueListPage/IssueListPage.jsx */ 39);

	var _containersIssueListPageIssueListPageJsx2 = _interopRequireDefault(_containersIssueListPageIssueListPageJsx);

	exports["default"] = _itemsStore.createContainer(_containersIssueListPageIssueListPageJsx2["default"]);
	module.exports = exports["default"];

/***/ },
/* 19 */
/*!******************************************!*\
  !*** ./app/route-handlers/IssuePage.jsx ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _itemsStore = __webpack_require__(/*! items-store */ 24);

	var _containersIssuePageIssuePageJsx = __webpack_require__(/*! containers/IssuePage/IssuePage.jsx */ 40);

	var _containersIssuePageIssuePageJsx2 = _interopRequireDefault(_containersIssuePageIssuePageJsx);

	exports["default"] = _itemsStore.createContainer(_containersIssuePageIssuePageJsx2["default"]);
	module.exports = exports["default"];

/***/ },
/* 20 */
/*!**********************************************!*\
  !*** ./app/route-handlers/IssueVotePage.jsx ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _itemsStore = __webpack_require__(/*! items-store */ 24);

	var _containersIssueVotePageIssueVotePageJsx = __webpack_require__(/*! containers/IssueVotePage/IssueVotePage.jsx */ 41);

	var _containersIssueVotePageIssueVotePageJsx2 = _interopRequireDefault(_containersIssueVotePageIssueVotePageJsx);

	exports["default"] = _itemsStore.createContainer(_containersIssueVotePageIssueVotePageJsx2["default"]);
	module.exports = exports["default"];

/***/ },
/* 21 */
/*!********************************************!*\
  !*** ./app/components/Profile/Profile.jsx ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { desc = parent = getter = undefined; _again = false; var object = _x,
	    property = _x2,
	    receiver = _x3; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(/*! react */ 1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(/*! react-router */ 28);

	var _LegislatorLegislatorJsx = __webpack_require__(/*! ../Legislator/Legislator.jsx */ 29);

	var _LegislatorLegislatorJsx2 = _interopRequireDefault(_LegislatorLegislatorJsx);

	var _FactsCardFactsCardJsx = __webpack_require__(/*! ../FactsCard/FactsCard.jsx */ 30);

	var _FactsCardFactsCardJsx2 = _interopRequireDefault(_FactsCardFactsCardJsx);

	__webpack_require__(/*! ./Profile.css */ 44);

	var Profile = (function (_React$Component) {
	    function Profile(props) {
	        _classCallCheck(this, Profile);

	        _get(Object.getPrototypeOf(Profile.prototype), "constructor", this).call(this, props);
	        this.state = { showFull: false };
	    }

	    _inherits(Profile, _React$Component);

	    _createClass(Profile, [{
	        key: "_toggleShowFull",
	        value: function _toggleShowFull() {
	            console.log(this);
	            this.setState({
	                showFull: !this.state.showFull
	            });
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var foodData = {
	                "name": "食品安全",
	                "vote": 832,
	                "facts": [{
	                    "title": "儘速修法將同性婚姻合法化",
	                    "opinion": "贊成",
	                    "opinionCount": 12
	                }, {
	                    "title": "是否自設實驗室",
	                    "opinion": "反對",
	                    "opinionCount": 2
	                }, {
	                    "title": "是否分廠分照",
	                    "opinion": "反對",
	                    "opinionCount": 7
	                }, {
	                    "title": "是否訂立吹哨者條款",
	                    "opinion": "反對",
	                    "opinionCount": 8
	                }, {
	                    "title": "電子發票",
	                    "opinion": "贊成",
	                    "opinionCount": 8
	                }, {
	                    "title": "是否提高罰鍰",
	                    "opinion": "贊成",
	                    "opinionCount": 12
	                }]
	            };
	            var nuclearData = {
	                "name": "核能",
	                "vote": 719,
	                "facts": [{
	                    "title": "停建核四（龍門）電廠",
	                    "opinion": "贊成",
	                    "opinionCount": 12
	                }, {
	                    "title": "凍結核能發電後端營運基金",
	                    "opinion": "贊成",
	                    "opinionCount": 2
	                }]
	            };
	            var marriageData = {
	                "name": "婚姻平權",
	                "vote": 458,
	                "facts": [{
	                    "title": "同性婚姻合法化？",
	                    "opinion": "贊成",
	                    "opinionCount": 12
	                }]
	            };
	            var laborData = {
	                "name": "勞基法",
	                "vote": 402,
	                "facts": [{
	                    "title": "每周40工時？",
	                    "opinion": "贊成",
	                    "opinionCount": 50
	                }]
	            };
	            var watchData = {
	                "name": "監督條例",
	                "vote": 391,
	                "facts": [{
	                    "title": "應建立國會事後監督機制",
	                    "opinion": "反對",
	                    "opinionCount": 5
	                }, {
	                    "title": "應建立國會事前監督機制",
	                    "opinion": "贊成",
	                    "opinionCount": 1
	                }]
	            };
	            var referendumData = {
	                "name": "罷免",
	                "vote": 321,
	                "facts": [{
	                    "title": "罷免門檻下修至 5%",
	                    "opinion": "反對",
	                    "opinionCount": 5
	                }, {
	                    "title": "修改「罷免不得宣傳」的規定",
	                    "opinion": "贊成",
	                    "opinionCount": 1
	                }]
	            };
	            var taxData = {
	                "name": "兩稅合一",
	                "vote": 289,
	                "facts": [{
	                    "title": "兩稅合一",
	                    "opinion": "反對",
	                    "opinionCount": 5
	                }, {
	                    "title": "ＯＯＯＯＯＯ",
	                    "opinion": "贊成",
	                    "opinionCount": 1
	                }]
	            };
	            var boundClick = this._toggleShowFull.bind(this, null);
	            var showFull = this.state.showFull;

	            var content = showFull === true ? _react2["default"].createElement(
	                "div",
	                { className: "Profile-factCards" },
	                _react2["default"].createElement(_FactsCardFactsCardJsx2["default"], { data: foodData, listTop3: true }),
	                _react2["default"].createElement(_FactsCardFactsCardJsx2["default"], { data: nuclearData, listTop3: true }),
	                _react2["default"].createElement(_FactsCardFactsCardJsx2["default"], { data: marriageData, listTop3: true }),
	                _react2["default"].createElement(_FactsCardFactsCardJsx2["default"], { data: laborData, listTop3: true }),
	                _react2["default"].createElement(_FactsCardFactsCardJsx2["default"], { data: watchData, listTop3: true }),
	                _react2["default"].createElement(_FactsCardFactsCardJsx2["default"], { data: referendumData, listTop3: true }),
	                _react2["default"].createElement(_FactsCardFactsCardJsx2["default"], { data: taxData, listTop3: true })
	            ) : _react2["default"].createElement(
	                "div",
	                { className: "Profile-factCards" },
	                _react2["default"].createElement(_FactsCardFactsCardJsx2["default"], { data: foodData, listTop3: true }),
	                _react2["default"].createElement(_FactsCardFactsCardJsx2["default"], { data: nuclearData, listTop3: true }),
	                _react2["default"].createElement(_FactsCardFactsCardJsx2["default"], { data: marriageData, listTop3: true })
	            );

	            var showMoreButton = showFull === true ? "" : _react2["default"].createElement(
	                "div",
	                null,
	                _react2["default"].createElement(
	                    "div",
	                    { className: "Profile-button",
	                        onClick: boundClick },
	                    "看更多議題立場"
	                )
	            );

	            return _react2["default"].createElement(
	                "div",
	                { className: "Profile" },
	                content,
	                showMoreButton
	            );
	        }
	    }]);

	    return Profile;
	})(_react2["default"].Component);

	exports["default"] = Profile;
	module.exports = exports["default"];

/***/ },
/* 22 */
/*!*************************************!*\
  !*** ./app/update-helpers/react.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// a helper method for merging react style updates
	// (not totally correct, but fine for now)
	exports.mergeUpdates = mergeUpdates;

	function _interopRequire(obj) { return obj && obj.__esModule ? obj["default"] : obj; }

	function mergeUpdates(a, b) {
		if (typeof a === "object" && typeof b === "object") {
			var res = {};
			Object.keys(a).concat(Object.keys(b)).forEach(function (key) {
				if (a[key] && b[key]) {
					switch (key) {
						case "$push":
							res[key] = a[key].concat(b[key]);
							break;
						case "$unshift":
							res[key] = b[key].concat(a[key]);
							break;
						case "$splice":
							res[key] = a[key].concat(b[key]);
							break;
						case "$set":
							res[key] = b[key];
							break;
						case "$merge":
							var o = res[key] = {};
							Object.keys(a[key]).forEach(function (x) {
								o[x] = a[key][x];
							});
							Object.keys(b[key]).forEach(function (x) {
								o[x] = b[key][x];
							});
							break;
					}
					res[key] = mergeUpdates(a[key], b[key]);
				} else if (a[key]) res[key] = a[key];else res[key] = b[key];
			});
		}
		return a || b;
	}

	var _reactLibUpdate = __webpack_require__(/*! react/lib/update */ 26);

	exports.applyUpdate = _interopRequire(_reactLibUpdate);

/***/ },
/* 23 */
/*!************************************!*\
  !*** ./app/update-helpers/list.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.mergeUpdates = mergeUpdates;
	exports.applyUpdate = applyUpdate;

	function mergeUpdates(a, b) {
		return a.concat(b);
	}

	function applyUpdate(oldData, update) {
		return oldData.concat(update.map(function (u) {
			return _extends({ sending: true }, u);
		}));
	}

/***/ },
/* 24 */
/*!********************************!*\
  !*** ./~/items-store/index.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	exports.ItemsStore = __webpack_require__(/*! ./ItemsStore */ 45);
	exports.ItemsStoreLease = __webpack_require__(/*! ./ItemsStoreLease */ 46);
	exports.ItemsStoreFetcher = __webpack_require__(/*! ./ItemsStoreFetcher */ 47);
	exports.Actions = __webpack_require__(/*! ./Actions */ 48);
	exports.createContainer = __webpack_require__(/*! ./createContainer */ 49);


/***/ },
/* 25 */
/*!*****************************************!*\
  !*** ./app/route-handlers/SomePage.jsx ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 1);
	var desc = {
		loadComponent: function(callback) {}
	};
	var mixinReactProxy = __webpack_require__(/*! ./~/react-proxy-loader/mixinReactProxy.js */ 27);
	mixinReactProxy(React, desc);
	module.exports = React.createClass(desc);
	module.exports.Mixin = desc;

/***/ },
/* 26 */
/*!***********************************!*\
  !*** external "react/lib/update" ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("react/lib/update");

/***/ },
/* 27 */
/*!*************************************************!*\
  !*** ./~/react-proxy-loader/mixinReactProxy.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(React, desc) {
		desc.displayName = "ReactProxy";
		desc.render = function() {
			var Component = this.state.component;
			if(Component) {
				return React.createElement(Component, this.props, this.props.children);
			} else if(this.renderUnavailable) {
				return this.renderUnavailable();
			} else {
				return null;
			}
		};
		desc.getInitialState = function() {
			return { component: this.loadComponent() };
		};
		desc.componentDidMount = function() {
			if(!this.state.component) {
				this.loadComponent(function(component) {
					if(this.isMounted()) {
						this.setState({ component: component });
					}
				}.bind(this));
			}
		};
	};


/***/ },
/* 28 */
/*!*************************************!*\
  !*** ./~/react-router/lib/index.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.DefaultRoute = __webpack_require__(/*! ./components/DefaultRoute */ 51);
	exports.Link = __webpack_require__(/*! ./components/Link */ 52);
	exports.NotFoundRoute = __webpack_require__(/*! ./components/NotFoundRoute */ 53);
	exports.Redirect = __webpack_require__(/*! ./components/Redirect */ 54);
	exports.Route = __webpack_require__(/*! ./components/Route */ 55);
	exports.ActiveHandler = __webpack_require__(/*! ./components/RouteHandler */ 56);
	exports.RouteHandler = exports.ActiveHandler;

	exports.HashLocation = __webpack_require__(/*! ./locations/HashLocation */ 57);
	exports.HistoryLocation = __webpack_require__(/*! ./locations/HistoryLocation */ 58);
	exports.RefreshLocation = __webpack_require__(/*! ./locations/RefreshLocation */ 59);
	exports.StaticLocation = __webpack_require__(/*! ./locations/StaticLocation */ 60);
	exports.TestLocation = __webpack_require__(/*! ./locations/TestLocation */ 61);

	exports.ImitateBrowserBehavior = __webpack_require__(/*! ./behaviors/ImitateBrowserBehavior */ 62);
	exports.ScrollToTopBehavior = __webpack_require__(/*! ./behaviors/ScrollToTopBehavior */ 63);

	exports.History = __webpack_require__(/*! ./History */ 64);
	exports.Navigation = __webpack_require__(/*! ./Navigation */ 65);
	exports.State = __webpack_require__(/*! ./State */ 66);

	exports.createRoute = __webpack_require__(/*! ./Route */ 67).createRoute;
	exports.createDefaultRoute = __webpack_require__(/*! ./Route */ 67).createDefaultRoute;
	exports.createNotFoundRoute = __webpack_require__(/*! ./Route */ 67).createNotFoundRoute;
	exports.createRedirect = __webpack_require__(/*! ./Route */ 67).createRedirect;
	exports.createRoutesFromReactChildren = __webpack_require__(/*! ./createRoutesFromReactChildren */ 68);

	exports.create = __webpack_require__(/*! ./createRouter */ 69);
	exports.run = __webpack_require__(/*! ./runRouter */ 70);

/***/ },
/* 29 */
/*!**************************************************!*\
  !*** ./app/components/Legislator/Legislator.jsx ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(/*! react */ 1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(/*! react-router */ 28);

	__webpack_require__(/*! ./Legislator.css */ 71);

	var Legislator = (function (_React$Component) {
	  function Legislator() {
	    _classCallCheck(this, Legislator);

	    if (_React$Component != null) {
	      _React$Component.apply(this, arguments);
	    }
	  }

	  _inherits(Legislator, _React$Component);

	  _createClass(Legislator, [{
	    key: "render",
	    value: function render() {
	      var data = this.props.data;

	      var imgURL;

	      try {
	        imgURL = __webpack_require__(/*! ./images/avatar */ 72)("./" + data + ".png");
	      } catch (e) {
	        imgURL = __webpack_require__(/*! ./images/default.jpg */ 121);
	      }

	      return _react2["default"].createElement(
	        "div",
	        { className: "Legislator" },
	        _react2["default"].createElement(
	          _reactRouter.Link,
	          { to: "person" },
	          _react2["default"].createElement("img", { className: "Legislator-avatar",
	            src: imgURL }),
	          _react2["default"].createElement(
	            "div",
	            { className: "Legislator-name" },
	            data
	          )
	        )
	      );
	    }
	  }]);

	  return Legislator;
	})(_react2["default"].Component);

	exports["default"] = Legislator;
	module.exports = exports["default"];

/***/ },
/* 30 */
/*!************************************************!*\
  !*** ./app/components/FactsCard/FactsCard.jsx ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _reactAddons = __webpack_require__(/*! react/addons */ 50);

	var _reactAddons2 = _interopRequireDefault(_reactAddons);

	var _reactRouter = __webpack_require__(/*! react-router */ 28);

	__webpack_require__(/*! ./FactsCard.css */ 73);

	var _IconIconJsx = __webpack_require__(/*! ../Icon/Icon.jsx */ 74);

	var _IconIconJsx2 = _interopRequireDefault(_IconIconJsx);

	var _classnames = __webpack_require__(/*! classnames */ 109);

	var _classnames2 = _interopRequireDefault(_classnames);

	var FactsCard = (function (_React$Component) {
	    function FactsCard() {
	        _classCallCheck(this, FactsCard);

	        if (_React$Component != null) {
	            _React$Component.apply(this, arguments);
	        }
	    }

	    _inherits(FactsCard, _React$Component);

	    _createClass(FactsCard, [{
	        key: "render",
	        value: function render() {
	            var _props = this.props;
	            var data = _props.data;
	            var listTop3 = _props.listTop3;

	            var factItems = data.facts.map(function (item, key) {
	                var opinionClasses = _classnames2["default"]({
	                    "FactsCard-opinion": true,
	                    "is-for": item.opinion === "贊成",
	                    "is-against": item.opinion === "反對",
	                    "is-unclear": item.opinion === "不明確"
	                });

	                if (listTop3 && key >= 3) return "";

	                var countItem = listTop3 ? "" : _reactAddons2["default"].createElement(
	                    "div",
	                    { className: "FactsCard-opinionCount" },
	                    item.opinionCount
	                );
	                return _reactAddons2["default"].createElement(
	                    _reactRouter.Link,
	                    { to: "personIssue", params: { issue: "same-sex-marraige" },
	                        className: "FactsCard-listItem",
	                        key: key },
	                    _reactAddons2["default"].createElement(
	                        "div",
	                        { className: opinionClasses },
	                        item.opinion
	                    ),
	                    item.title,
	                    countItem
	                );
	            });

	            return _reactAddons2["default"].createElement(
	                "div",
	                { className: "FactsCard" },
	                _reactAddons2["default"].createElement(
	                    "div",
	                    { className: "FactsCard-content" },
	                    _reactAddons2["default"].createElement(
	                        "div",
	                        { className: "FactsCard-mainTitle" },
	                        data.name
	                    ),
	                    _reactAddons2["default"].createElement(
	                        "div",
	                        null,
	                        factItems
	                    ),
	                    _reactAddons2["default"].createElement(
	                        "div",
	                        { className: "FactsCard-actions" },
	                        _reactAddons2["default"].createElement(
	                            "a",
	                            { className: "FactsCard-button" },
	                            _reactAddons2["default"].createElement(_IconIconJsx2["default"], { icon: "star" }),
	                            _reactAddons2["default"].createElement(
	                                "span",
	                                { className: "FactsCard-buttonMeta" },
	                                data.vote
	                            )
	                        ),
	                        _reactAddons2["default"].createElement(
	                            "a",
	                            { className: "FactsCard-button",
	                                href: "#" },
	                            _reactAddons2["default"].createElement(_IconIconJsx2["default"], { icon: "eye" }),
	                            _reactAddons2["default"].createElement(
	                                "span",
	                                { className: "FactsCard-buttonMeta" },
	                                "2312"
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return FactsCard;
	})(_reactAddons2["default"].Component);

	exports["default"] = FactsCard;
	module.exports = exports["default"];

/***/ },
/* 31 */
/*!****************************************************!*\
  !*** ./app/containers/Application/Application.jsx ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { desc = parent = getter = undefined; _again = false; var object = _x,
	    property = _x2,
	    receiver = _x3; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(/*! react */ 1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(/*! react-router */ 28);

	var _componentsAppBarAppBarJsx = __webpack_require__(/*! components/AppBar/AppBar.jsx */ 75);

	var _componentsAppBarAppBarJsx2 = _interopRequireDefault(_componentsAppBarAppBarJsx);

	var _componentsSideBarSideBarJsx = __webpack_require__(/*! components/SideBar/SideBar.jsx */ 76);

	var _componentsSideBarSideBarJsx2 = _interopRequireDefault(_componentsSideBarSideBarJsx);

	var _classnames = __webpack_require__(/*! classnames */ 109);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ApplicationCss = __webpack_require__(/*! ./Application.css */ 77);

	var _ApplicationCss2 = _interopRequireDefault(_ApplicationCss);

	var Application = (function (_React$Component) {
		function Application(props) {
			_classCallCheck(this, Application);

			_get(Object.getPrototypeOf(Application.prototype), "constructor", this).call(this, props);
			this.state = { showSideBar: false };
		}

		_inherits(Application, _React$Component);

		_createClass(Application, [{
			key: "_onToggleShowSideBar",
			value: function _onToggleShowSideBar() {
				this.setState({
					showSideBar: !this.state.showSideBar
				});
			}
		}, {
			key: "render",
			value: function render() {
				var loading = this.props.loading;
				var showSideBar = this.state.showSideBar;

				var applicationClasses = _classnames2["default"]({
					"Application-content": true,
					"with-sidebar": showSideBar
				});
				var mainClasses = _classnames2["default"]({
					"Application-main": true,
					"with-sidebar": showSideBar
				});
				var sidebarItem = showSideBar ? _react2["default"].createElement(_componentsSideBarSideBarJsx2["default"], null) : "";
				return _react2["default"].createElement(
					"div",
					null,
					_react2["default"].createElement(
						"div",
						{ className: "Application-sidebar" },
						sidebarItem
					),
					_react2["default"].createElement(
						"div",
						{ className: applicationClasses },
						_react2["default"].createElement(_componentsAppBarAppBarJsx2["default"], { toggleSideBar: this._onToggleShowSideBar.bind(this, null) }),
						_react2["default"].createElement(
							"div",
							{ className: mainClasses },
							_react2["default"].createElement(_reactRouter.RouteHandler, null)
						)
					)
				);
			}
		}], [{
			key: "getProps",
			value: function getProps(stores, params) {
				var transition = stores.Router.getItem("transition");
				return {
					loading: !!transition
				};
			}
		}]);

		return Application;
	})(_react2["default"].Component);

	exports["default"] = Application;

	Application.contextTypes = {
		stores: _react2["default"].PropTypes.object
	};
	module.exports = exports["default"];

/***/ },
/* 32 */
/*!******************************************************!*\
  !*** ./app/containers/NotFoundPage/NotFoundPage.jsx ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(/*! react */ 1);

	var _react2 = _interopRequireDefault(_react);

	var NotFoundPage = (function (_React$Component) {
		function NotFoundPage() {
			_classCallCheck(this, NotFoundPage);

			if (_React$Component != null) {
				_React$Component.apply(this, arguments);
			}
		}

		_inherits(NotFoundPage, _React$Component);

		_createClass(NotFoundPage, [{
			key: "render",
			value: function render() {
				return _react2["default"].createElement(
					"div",
					null,
					_react2["default"].createElement(
						"h2",
						null,
						"Not found"
					),
					_react2["default"].createElement(
						"p",
						null,
						"The page you requested was not found."
					)
				);
			}
		}], [{
			key: "getProps",
			value: function getProps() {
				return {};
			}
		}]);

		return NotFoundPage;
	})(_react2["default"].Component);

	exports["default"] = NotFoundPage;
	module.exports = exports["default"];

/***/ },
/* 33 */
/*!******************************************************!*\
  !*** ./app/containers/TodoListPage/TodoListPage.jsx ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(/*! react */ 1);

	var _react2 = _interopRequireDefault(_react);

	var TodoListPage = (function (_React$Component) {
		function TodoListPage() {
			_classCallCheck(this, TodoListPage);

			if (_React$Component != null) {
				_React$Component.apply(this, arguments);
			}
		}

		_inherits(TodoListPage, _React$Component);

		_createClass(TodoListPage, [{
			key: "render",
			value: function render() {
				var _props = this.props;
				var id = _props.id;
				var list = _props.list;

				return _react2["default"].createElement(
					"div",
					null,
					_react2["default"].createElement(
						"h3",
						null,
						"Todolist: ",
						id
					)
				);
			}
		}], [{
			key: "getProps",
			value: function getProps(stores, params) {
				var list = params.list;

				return {
					id: list
				};
			}
		}]);

		return TodoListPage;
	})(_react2["default"].Component);

	exports["default"] = TodoListPage;
	module.exports = exports["default"];

/***/ },
/* 34 */
/*!**********************************************!*\
  !*** ./app/containers/HomePage/HomePage.jsx ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(/*! react */ 1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(/*! react-router */ 28);

	__webpack_require__(/*! ./HomePage.css */ 78);

	var HomePage = (function (_React$Component) {
		function HomePage() {
			_classCallCheck(this, HomePage);

			if (_React$Component != null) {
				_React$Component.apply(this, arguments);
			}
		}

		_inherits(HomePage, _React$Component);

		_createClass(HomePage, [{
			key: "render",
			value: function render() {
				var avatarURL = __webpack_require__(/*! ./images/HomePage-avatar.png */ 122);

				return _react2["default"].createElement(
					"div",
					{ className: "HomePage" },
					_react2["default"].createElement(
						"div",
						{ className: "HomePage-content" },
						_react2["default"].createElement("img", { src: avatarURL,
							className: "HomePage-avtar" }),
						_react2["default"].createElement(
							"div",
							null,
							"嘿！讓我們一起試著努力看看。"
						),
						_react2["default"].createElement(
							"h1",
							null,
							"立委選舉共筆"
						),
						_react2["default"].createElement(
							_reactRouter.Link,
							{ to: "personList", className: "HomePage-btn" },
							"找立委"
						),
						_react2["default"].createElement(
							_reactRouter.Link,
							{ to: "issueList", className: "HomePage-btn" },
							"找議題"
						)
					)
				);
			}
		}], [{
			key: "getProps",
			value: function getProps() {
				return {};
			}
		}]);

		return HomePage;
	})(_react2["default"].Component);

	exports["default"] = HomePage;
	module.exports = exports["default"];

/***/ },
/* 35 */
/*!**************************************************!*\
  !*** ./app/containers/PersonPage/PersonPage.jsx ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(/*! react */ 1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(/*! react-router */ 28);

	var _componentsProfileProfileJsx = __webpack_require__(/*! components/Profile/Profile.jsx */ 21);

	var _componentsProfileProfileJsx2 = _interopRequireDefault(_componentsProfileProfileJsx);

	var _componentsLegislatorLegislatorJsx = __webpack_require__(/*! components/Legislator/Legislator.jsx */ 29);

	var _componentsLegislatorLegislatorJsx2 = _interopRequireDefault(_componentsLegislatorLegislatorJsx);

	var _componentsTabsTabsJsx = __webpack_require__(/*! components/Tabs/Tabs.jsx */ 84);

	var _componentsTabsTabsJsx2 = _interopRequireDefault(_componentsTabsTabsJsx);

	var _componentsRecordListRecordListJsx = __webpack_require__(/*! components/RecordList/RecordList.jsx */ 85);

	var _componentsRecordListRecordListJsx2 = _interopRequireDefault(_componentsRecordListRecordListJsx);

	__webpack_require__(/*! ./PersonPage.css */ 86);

	var PersonPage = (function (_React$Component) {
		function PersonPage() {
			_classCallCheck(this, PersonPage);

			if (_React$Component != null) {
				_React$Component.apply(this, arguments);
			}
		}

		_inherits(PersonPage, _React$Component);

		_createClass(PersonPage, [{
			key: "render",
			value: function render() {
				var _props = this.props;
				var loading = _props.loading;
				var params = _props.params;
				var issue = params.issue;

				var content = issue ? _react2["default"].createElement(_componentsRecordListRecordListJsx2["default"], null) : _react2["default"].createElement(_componentsProfileProfileJsx2["default"], null);
				var currentTab = issue ? "婚姻平權" : "立場總覽";
				return _react2["default"].createElement(
					"div",
					{ className: "PersonPage" },
					_react2["default"].createElement(
						"div",
						{ className: "PersonPage-person" },
						_react2["default"].createElement(_componentsLegislatorLegislatorJsx2["default"], { data: "尤美女" })
					),
					_react2["default"].createElement(_componentsTabsTabsJsx2["default"], { currentTab: currentTab }),
					_react2["default"].createElement(
						"div",
						{ className: "PersonPage-content" },
						content
					)
				);
			}
		}], [{
			key: "getProps",
			value: function getProps(stores, params) {
				var transition = stores.Router.getItem("transition");
				return {
					loading: !!transition,
					params: params
				};
			}
		}]);

		return PersonPage;
	})(_react2["default"].Component);

	exports["default"] = PersonPage;

	PersonPage.contextTypes = {
		stores: _react2["default"].PropTypes.object
	};
	module.exports = exports["default"];

/***/ },
/* 36 */
/*!************************************************************!*\
  !*** ./app/containers/PersonIssuePage/PersonIssuePage.jsx ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(/*! react */ 1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(/*! react-router */ 28);

	var _componentsLegislatorLegislatorJsx = __webpack_require__(/*! components/Legislator/Legislator.jsx */ 29);

	var _componentsLegislatorLegislatorJsx2 = _interopRequireDefault(_componentsLegislatorLegislatorJsx);

	var _componentsRecordListRecordListJsx = __webpack_require__(/*! components/RecordList/RecordList.jsx */ 85);

	var _componentsRecordListRecordListJsx2 = _interopRequireDefault(_componentsRecordListRecordListJsx);

	var _componentsIconIconJsx = __webpack_require__(/*! components/Icon/Icon.jsx */ 74);

	var _componentsIconIconJsx2 = _interopRequireDefault(_componentsIconIconJsx);

	var _componentsTabsTabsJsx = __webpack_require__(/*! components/Tabs/Tabs.jsx */ 84);

	var _componentsTabsTabsJsx2 = _interopRequireDefault(_componentsTabsTabsJsx);

	__webpack_require__(/*! ./PersonIssuePage.css */ 87);

	var PersonIssuePage = (function (_React$Component) {
		function PersonIssuePage() {
			_classCallCheck(this, PersonIssuePage);

			if (_React$Component != null) {
				_React$Component.apply(this, arguments);
			}
		}

		_inherits(PersonIssuePage, _React$Component);

		_createClass(PersonIssuePage, [{
			key: "render",
			value: function render() {
				var loading = this.props.loading;

				// <div className="PersonIssuePage-back"><Link to="person"><Icon icon={"chevron-left"}/>所有立場</Link></div>
				return _react2["default"].createElement(
					"div",
					{ className: "PersonIssuePage" },
					_react2["default"].createElement(
						"div",
						{ className: "PersonIssuePage-records" },
						_react2["default"].createElement(_componentsRecordListRecordListJsx2["default"], null)
					)
				);
			}
		}], [{
			key: "getProps",
			value: function getProps(stores, params) {
				var transition = stores.Router.getItem("transition");
				return {
					loading: !!transition
				};
			}
		}]);

		return PersonIssuePage;
	})(_react2["default"].Component);

	exports["default"] = PersonIssuePage;

	PersonIssuePage.contextTypes = {
		stores: _react2["default"].PropTypes.object
	};
	module.exports = exports["default"];

/***/ },
/* 37 */
/*!**********************************************************!*\
  !*** ./app/containers/PersonListPage/PersonListPage.jsx ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { desc = parent = getter = undefined; _again = false; var object = _x,
	    property = _x2,
	    receiver = _x3; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(/*! react */ 1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(/*! react-router */ 28);

	var _componentsLegislatorAvatarLegislatorAvatarJsx = __webpack_require__(/*! components/LegislatorAvatar/LegislatorAvatar.jsx */ 88);

	var _componentsLegislatorAvatarLegislatorAvatarJsx2 = _interopRequireDefault(_componentsLegislatorAvatarLegislatorAvatarJsx);

	var _componentsIconIconJsx = __webpack_require__(/*! components/Icon/Icon.jsx */ 74);

	var _componentsIconIconJsx2 = _interopRequireDefault(_componentsIconIconJsx);

	var _componentsInputInputJsx = __webpack_require__(/*! components/Input/Input.jsx */ 89);

	var _componentsInputInputJsx2 = _interopRequireDefault(_componentsInputInputJsx);

	__webpack_require__(/*! ./PersonListPage.css */ 90);

	var _lyInfoJs = __webpack_require__(/*! ./ly-info.js */ 91);

	var _lyInfoJs2 = _interopRequireDefault(_lyInfoJs);

	var iso3166tw = {
	    "CHA": "彰化縣",
	    "CYI": "嘉義市",
	    "CYQ": "嘉義縣",
	    "HSQ": "新竹縣",
	    "HSZ": "新竹市",
	    "HUA": "花蓮縣",
	    "ILA": "宜蘭縣",
	    "KEE": "基隆市",
	    "KHH": "高雄市",
	    "KHQ": "高雄市",
	    "MIA": "苗栗縣",
	    "NAN": "南投縣",
	    "PEN": "澎湖縣",
	    "PIF": "屏東縣",
	    "TAO": "桃園縣",
	    "TNN": "台南市",
	    "TNQ": "台南市",
	    "TPE": "台北市",
	    "TPQ": "新北市",
	    "TTT": "台東縣",
	    "TXG": "台中市",
	    "TXQ": "台中市",
	    "YUN": "雲林縣",
	    "JME": "金門縣",
	    "LJF": "連江縣"
	};
	function constituency_area_parser(constituency) {
	    switch (constituency[0]) {

	        case "proportional":
	            return "全國不分區";
	            break;
	        case "aborigine":
	            return "山地原住民";
	            break;
	        case "foreign":
	            return "僑居國外國民";
	            break;
	        default:
	            if (constituency[0] in iso3166tw) {
	                result = iso3166tw[constituency[0]];
	            } else {
	                result = constituency[0] + "<br>" + constituency[1];
	            }
	            return result;
	            break;

	    }
	}
	function constituency_parser(constituency) {
	    var result = "";
	    switch (constituency[0]) {

	        case "proportional":
	            return "全國不分區";
	            break;
	        case "aborigine":
	            return "山地原住民";
	            break;
	        case "foreign":
	            return "僑居國外國民";
	            break;
	        default:
	            if (constituency[0] in iso3166tw) {
	                if (constituency[1] == 0) {
	                    result = iso3166tw[constituency[0]];
	                } else {
	                    result = iso3166tw[constituency[0]] + "第" + constituency[1] + "選區";
	                }
	            } else {
	                result = constituency[0] + "<br>" + constituency[1];
	            }
	            return result;
	            break;

	    }
	}

	var PersonListPage = (function (_React$Component) {
	    function PersonListPage(props) {
	        _classCallCheck(this, PersonListPage);

	        _get(Object.getPrototypeOf(PersonListPage.prototype), "constructor", this).call(this, props);
	        this.state = { currentTerm: "" };
	    }

	    _inherits(PersonListPage, _React$Component);

	    _createClass(PersonListPage, [{
	        key: "_onInputChange",
	        value: function _onInputChange(i, event) {
	            /*
	              取得 input 的輸入值得方式有幾種
	               第一種：透過 event.target 取得值
	              event.target.value
	               第二種：透過 refs 取得值
	              this.refs.textInput.getDOMNode().value
	              
	              第三種：透過 id 或 class 取得，用 js 或 jQuery 的方式去抓
	              例如 Jeremy 的範例是在 componet mount 之後，綁定
	              componentDidMount: function(){
	                this.$input = $('#todo-input');
	              }
	              
	              */
	            this.setState({
	                currentTerm: event.target.value
	            });
	        }
	    }, {
	        key: "_onSetInput",
	        value: function _onSetInput(value) {
	            //console.log(value);
	            this.setState({
	                currentTerm: value
	            });
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var loading = this.props.loading;
	            var currentTerm = this.state.currentTerm;

	            var lyItems = _lyInfoJs2["default"].data.filter(function (item) {

	                var shouldReturn = false;
	                if (currentTerm !== "") {
	                    if (item.constituency.indexOf(currentTerm) !== -1) {
	                        shouldReturn = true;
	                    }
	                    if (item.constituency_detail) {
	                        if (item.constituency_detail.indexOf(currentTerm) !== -1) shouldReturn = true;
	                    }
	                    if (item.name.indexOf(currentTerm) !== -1) {
	                        shouldReturn = true;
	                    }
	                    if (item.party.indexOf(currentTerm) !== -1) {
	                        shouldReturn = true;
	                    }
	                } else {
	                    shouldReturn = true;
	                }
	                if (shouldReturn) return item;
	            }).map(function (item, key) {
	                var partyClass = "PersonListPage-avatar is-" + item.party_eng;

	                var constituency = constituency_parser(item.constituency);

	                return _react2["default"].createElement(
	                    _reactRouter.Link,
	                    { className: "PersonListPage-legislatorItem",
	                        to: "person",
	                        key: key },
	                    _react2["default"].createElement(
	                        "div",
	                        { className: partyClass },
	                        _react2["default"].createElement(
	                            "div",
	                            { className: "PersonListPage-flex" },
	                            _react2["default"].createElement(
	                                "div",
	                                { className: "PersonListPage-flexLeft" },
	                                _react2["default"].createElement(_componentsLegislatorAvatarLegislatorAvatarJsx2["default"], { data: item.name, party: item.party_eng })
	                            ),
	                            _react2["default"].createElement(
	                                "div",
	                                { className: "PersonListPage-flexMain" },
	                                _react2["default"].createElement(
	                                    "div",
	                                    { className: "PersonListPage-name" },
	                                    item.name
	                                ),
	                                _react2["default"].createElement(
	                                    "div",
	                                    { className: "PersonListPage-description" },
	                                    item.party
	                                ),
	                                _react2["default"].createElement(
	                                    "div",
	                                    { className: "PersonListPage-description" },
	                                    constituency
	                                ),
	                                _react2["default"].createElement(
	                                    "div",
	                                    { className: "PersonListPage-descriptionLight" },
	                                    item.constituency_detail
	                                )
	                            )
	                        ),
	                        _react2["default"].createElement(
	                            "div",
	                            { className: "PersonListPage-mainIssues" },
	                            "關鍵議題：食品安全、核能"
	                        )
	                    )
	                );
	            });
	            var bindInputChange = this._onInputChange.bind(this, null);
	            var bindSetInput = this._onSetInput.bind(this);
	            var examples = ["吳育昇", "蔡正元", "國民黨"];
	            return _react2["default"].createElement(
	                "div",
	                { className: "PersonListPage" },
	                _react2["default"].createElement(_componentsInputInputJsx2["default"], { handleInputChange: bindInputChange,
	                    handleSetInput: bindSetInput,
	                    currentTerm: currentTerm,
	                    examples: examples,
	                    placeholder: "搜尋立委姓名或選區" }),
	                lyItems
	            );
	        }
	    }], [{
	        key: "getProps",
	        value: function getProps(stores, params) {
	            var transition = stores.Router.getItem("transition");
	            return {
	                loading: !!transition
	            };
	        }
	    }]);

	    return PersonListPage;
	})(_react2["default"].Component);

	exports["default"] = PersonListPage;

	PersonListPage.contextTypes = {
	    stores: _react2["default"].PropTypes.object
	};
	module.exports = exports["default"];

/***/ },
/* 38 */
/*!**********************************************************!*\
  !*** ./app/containers/CandidatesPage/CandidatesPage.jsx ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { desc = parent = getter = undefined; _again = false; var object = _x,
	    property = _x2,
	    receiver = _x3; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(/*! react */ 1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(/*! react-router */ 28);

	var _componentsCompareCardCompareCardJsx = __webpack_require__(/*! components/CompareCard/CompareCard.jsx */ 79);

	var _componentsCompareCardCompareCardJsx2 = _interopRequireDefault(_componentsCompareCardCompareCardJsx);

	var _componentsCompareTabsCompareTabsJsx = __webpack_require__(/*! components/CompareTabs/CompareTabs.jsx */ 80);

	var _componentsCompareTabsCompareTabsJsx2 = _interopRequireDefault(_componentsCompareTabsCompareTabsJsx);

	var _componentsCompareMultiCardCompareMultiCardJsx = __webpack_require__(/*! components/CompareMultiCard/CompareMultiCard.jsx */ 81);

	var _componentsCompareMultiCardCompareMultiCardJsx2 = _interopRequireDefault(_componentsCompareMultiCardCompareMultiCardJsx);

	var _componentsCandidatePickerCandidatePickerJsx = __webpack_require__(/*! components/CandidatePicker/CandidatePicker.jsx */ 82);

	var _componentsCandidatePickerCandidatePickerJsx2 = _interopRequireDefault(_componentsCandidatePickerCandidatePickerJsx);

	__webpack_require__(/*! ./CandidatesPage.css */ 83);

	var CandidatesPage = (function (_React$Component) {
		function CandidatesPage(props) {
			_classCallCheck(this, CandidatesPage);

			_get(Object.getPrototypeOf(CandidatesPage.prototype), "constructor", this).call(this, props);
			this.state = {
				activeTab: "議題立場",
				activeSubtab: "勞工",
				candidateA: "賴士葆",
				candidateB: "苗博雅"
			};
		}

		_inherits(CandidatesPage, _React$Component);

		_createClass(CandidatesPage, [{
			key: "_onClearCandidates",
			value: function _onClearCandidates() {
				this.setState({
					candidateA: "",
					candidateB: ""
				});
			}
		}, {
			key: "_onSetCandidates",
			value: function _onSetCandidates(value) {
				var candidateA = this.state.candidateA;

				if (candidateA === "") {
					this.setState({
						candidateA: value
					});
				} else {
					if (candidateA !== value) {
						this.setState({
							candidateB: value
						});
					}
				}
			}
		}, {
			key: "_setActiveTab",
			value: function _setActiveTab(value, event) {
				this.setState({
					activeTab: value
				});
			}
		}, {
			key: "_setActiveSubtab",
			value: function _setActiveSubtab(value, event) {
				this.setState({
					activeSubtab: value
				});
			}
		}, {
			key: "_onResize",
			value: function _onResize(event) {
				this.setState({
					width: window.innerWidth
				});
			}
		}, {
			key: "componentDidMount",
			value: function componentDidMount() {

				this.setState({
					width: window.innerWidth
				});

				window.addEventListener("resize", this._onResize.bind(this, null), false);
			}
		}, {
			key: "componentWillUnmount",
			value: function componentWillUnmount() {
				window.removeEventListener("resize", this._onResize.bind(this, null), false);
			}
		}, {
			key: "render",
			value: function render() {
				var _state = this.state;
				var width = _state.width;
				var activeTab = _state.activeTab;
				var activeSubtab = _state.activeSubtab;
				var candidateA = _state.candidateA;
				var candidateB = _state.candidateB;

				//*********
				// to be refined
				//
				//
				var mobile = _react2["default"].createElement(
					"div",
					{ className: "CandidatesPage" },
					_react2["default"].createElement(
						"div",
						{ className: "CandidatesPage-compare" },
						_react2["default"].createElement(
							"div",
							{ className: "CandidatesPage-title" },
							"2016 臺北市 - 中正區，文山區 立委候選人"
						),
						_react2["default"].createElement(
							"div",
							{ className: "CandidatesPage-outerWrapper" },
							_react2["default"].createElement(
								"div",
								{ className: "CandidatesPage-innerWrapper" },
								_react2["default"].createElement(
									"div",
									{ className: "CandidatesPage-list" },
									_react2["default"].createElement(
										"div",
										{ className: "CandidatesPage-item" },
										_react2["default"].createElement(_componentsCompareCardCompareCardJsx2["default"], { issueTitle: "勞工", candidateA: candidateA, candidateB: candidateB })
									),
									_react2["default"].createElement(
										"div",
										{ className: "CandidatesPage-item" },
										_react2["default"].createElement(_componentsCompareCardCompareCardJsx2["default"], { issueTitle: "婚姻平權", candidateA: candidateA, candidateB: candidateB })
									),
									_react2["default"].createElement(
										"div",
										{ className: "CandidatesPage-item" },
										_react2["default"].createElement(_componentsCompareCardCompareCardJsx2["default"], { issueTitle: "核能", candidateA: candidateA, candidateB: candidateB })
									),
									_react2["default"].createElement(
										"div",
										{ className: "CandidatesPage-item" },
										_react2["default"].createElement(_componentsCompareCardCompareCardJsx2["default"], { issueTitle: "中國因素", candidateA: candidateA, candidateB: candidateB })
									)
								)
							)
						)
					),
					_react2["default"].createElement(
						"div",
						{ className: "CandidatesPage-candidatePicker" },
						_react2["default"].createElement(_componentsCandidatePickerCandidatePickerJsx2["default"], { candidateA: candidateA, candidateB: candidateB,
							setCandidateHandler: this._onSetCandidates.bind(this),
							clearCandidateHandler: this._onClearCandidates.bind(this) })
					)
				);

				//////////
				var title = activeTab;
				if (activeTab === "議題立場") title = activeSubtab;
				var web = _react2["default"].createElement(
					"div",
					{ className: "CandidatesPage" },
					_react2["default"].createElement(
						"div",
						{ className: "CandidatesPage-compare" },
						_react2["default"].createElement(
							"div",
							{ className: "CandidatesPage-title" },
							"2016 臺北市 - 中正區，文山區 立委候選人"
						),
						_react2["default"].createElement(
							"div",
							{ className: "CandidatesPage-menu" },
							_react2["default"].createElement(_componentsCompareTabsCompareTabsJsx2["default"], { activeTab: activeTab,
								activeSubtab: activeSubtab,
								setActiveTabHandler: this._setActiveTab.bind(this),
								setActiveSubtabHandler: this._setActiveSubtab.bind(this) })
						),
						_react2["default"].createElement(_componentsCompareMultiCardCompareMultiCardJsx2["default"], { issueTitle: title })
					)
				);

				return width > 600 ? web : mobile;
			}
		}], [{
			key: "getProps",
			value: function getProps(stores, params) {
				var transition = stores.Router.getItem("transition");
				return {
					loading: !!transition,
					params: params
				};
			}
		}]);

		return CandidatesPage;
	})(_react2["default"].Component);

	exports["default"] = CandidatesPage;

	CandidatesPage.contextTypes = {
		stores: _react2["default"].PropTypes.object
	};
	module.exports = exports["default"];

/***/ },
/* 39 */
/*!********************************************************!*\
  !*** ./app/containers/IssueListPage/IssueListPage.jsx ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { desc = parent = getter = undefined; _again = false; var object = _x,
	    property = _x2,
	    receiver = _x3; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(/*! react */ 1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(/*! react-router */ 28);

	var _componentsInputInputJsx = __webpack_require__(/*! components/Input/Input.jsx */ 89);

	var _componentsInputInputJsx2 = _interopRequireDefault(_componentsInputInputJsx);

	__webpack_require__(/*! ./IssueListPage.css */ 92);

	var IssueListPage = (function (_React$Component) {
	  function IssueListPage(props) {
	    _classCallCheck(this, IssueListPage);

	    _get(Object.getPrototypeOf(IssueListPage.prototype), "constructor", this).call(this, props);
	    this.state = { currentTerm: "" };
	  }

	  _inherits(IssueListPage, _React$Component);

	  _createClass(IssueListPage, [{
	    key: "_onInputChange",
	    value: function _onInputChange(i, event) {
	      /*
	        取得 input 的輸入值得方式有幾種
	         第一種：透過 event.target 取得值
	        event.target.value
	         第二種：透過 refs 取得值
	        this.refs.textInput.getDOMNode().value
	        
	        第三種：透過 id 或 class 取得，用 js 或 jQuery 的方式去抓
	        例如 Jeremy 的範例是在 componet mount 之後，綁定
	        componentDidMount: function(){
	          this.$input = $('#todo-input');
	        }
	        
	        */
	      this.setState({
	        currentTerm: event.target.value
	      });
	    }
	  }, {
	    key: "_onSetInput",
	    value: function _onSetInput(value) {
	      //console.log(value);
	      this.setState({
	        currentTerm: value
	      });
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var loading = this.props.loading;

	      var issueList = [{
	        "id": "food",
	        "name": "食品安全"
	      }, {
	        "id": "nuclear",
	        "name": "核能"
	      }, {
	        "id": "marriage",
	        "name": "婚姻平權"
	      }, {
	        "id": "labor",
	        "name": "勞基法"
	      }, {
	        "id": "watch",
	        "name": "監督條例"
	      }, {
	        "id": "referendum",
	        "name": "罷免"
	      }, {
	        "id": "tax",
	        "name": "兩稅合一"
	      }];
	      var issueListItem = issueList.map(function (i, k) {

	        var imgURL = __webpack_require__(/*! ./images */ 93)("./" + (k + 1) + ".png");
	        return _react2["default"].createElement(
	          _reactRouter.Link,
	          { to: "issue",
	            className: "IssueListPage-issue",
	            key: k },
	          _react2["default"].createElement("img", { className: "IssueListPage-issueImg",
	            src: imgURL }),
	          _react2["default"].createElement(
	            "div",
	            { className: "IssueListPage-issueTitle" },
	            i.name
	          )
	        );
	      });

	      var currentTerm = this.state.currentTerm;

	      var bindInputChange = this._onInputChange.bind(this, null);
	      var bindSetInput = this._onSetInput.bind(this);
	      var examples = ["核能", "食安", "婚姻平權"];

	      return _react2["default"].createElement(
	        "div",
	        { className: "IssueListPage" },
	        _react2["default"].createElement(
	          "div",
	          { className: "IssueListPage-content" },
	          _react2["default"].createElement(_componentsInputInputJsx2["default"], { handleInputChange: bindInputChange,
	            handleSetInput: bindSetInput,
	            currentTerm: currentTerm,
	            examples: examples,
	            placeholder: "搜尋議題" }),
	          issueListItem
	        )
	      );
	    }
	  }], [{
	    key: "getProps",
	    value: function getProps(stores, params) {
	      var transition = stores.Router.getItem("transition");
	      return {
	        loading: !!transition
	      };
	    }
	  }]);

	  return IssueListPage;
	})(_react2["default"].Component);

	exports["default"] = IssueListPage;

	IssueListPage.contextTypes = {
	  stores: _react2["default"].PropTypes.object
	};
	module.exports = exports["default"];

/***/ },
/* 40 */
/*!************************************************!*\
  !*** ./app/containers/IssuePage/IssuePage.jsx ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { desc = parent = getter = undefined; _again = false; var object = _x,
	    property = _x2,
	    receiver = _x3; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(/*! react */ 1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(/*! react-router */ 28);

	var _componentsLegislatorAvatarLegislatorAvatarJsx = __webpack_require__(/*! components/LegislatorAvatar/LegislatorAvatar.jsx */ 88);

	var _componentsLegislatorAvatarLegislatorAvatarJsx2 = _interopRequireDefault(_componentsLegislatorAvatarLegislatorAvatarJsx);

	var _componentsIconIconJsx = __webpack_require__(/*! components/Icon/Icon.jsx */ 74);

	var _componentsIconIconJsx2 = _interopRequireDefault(_componentsIconIconJsx);

	__webpack_require__(/*! ./IssuePage.css */ 94);

	var _lyInfoJs = __webpack_require__(/*! ./ly-info.js */ 95);

	var _lyInfoJs2 = _interopRequireDefault(_lyInfoJs);

	var iso3166tw = {
	    "CHA": "彰化縣",
	    "CYI": "嘉義市",
	    "CYQ": "嘉義縣",
	    "HSQ": "新竹縣",
	    "HSZ": "新竹市",
	    "HUA": "花蓮縣",
	    "ILA": "宜蘭縣",
	    "KEE": "基隆市",
	    "KHH": "高雄市",
	    "KHQ": "高雄市",
	    "MIA": "苗栗縣",
	    "NAN": "南投縣",
	    "PEN": "澎湖縣",
	    "PIF": "屏東縣",
	    "TAO": "桃園縣",
	    "TNN": "台南市",
	    "TNQ": "台南市",
	    "TPE": "台北市",
	    "TPQ": "新北市",
	    "TTT": "台東縣",
	    "TXG": "台中市",
	    "TXQ": "台中市",
	    "YUN": "雲林縣",
	    "JME": "金門縣",
	    "LJF": "連江縣"
	};
	function constituency_area_parser(constituency) {
	    switch (constituency[0]) {

	        case "proportional":
	            return "全國不分區";
	            break;
	        case "aborigine":
	            return "山地原住民";
	            break;
	        case "foreign":
	            return "僑居國外國民";
	            break;
	        default:
	            if (constituency[0] in iso3166tw) {
	                result = iso3166tw[constituency[0]];
	            } else {
	                result = constituency[0] + "<br>" + constituency[1];
	            }
	            return result;
	            break;

	    }
	}
	function constituency_parser(constituency) {
	    var result = "";
	    switch (constituency[0]) {

	        case "proportional":
	            return "全國不分區";
	            break;
	        case "aborigine":
	            return "山地原住民";
	            break;
	        case "foreign":
	            return "僑居國外國民";
	            break;
	        default:
	            if (constituency[0] in iso3166tw) {
	                if (constituency[1] == 0) {
	                    result = iso3166tw[constituency[0]];
	                } else {
	                    result = iso3166tw[constituency[0]] + "第" + constituency[1] + "選區";
	                }
	            } else {
	                result = constituency[0] + "<br>" + constituency[1];
	            }
	            return result;
	            break;

	    }
	}

	var IssuePage = (function (_React$Component) {
	    function IssuePage(props) {
	        _classCallCheck(this, IssuePage);

	        _get(Object.getPrototypeOf(IssuePage.prototype), "constructor", this).call(this, props);
	        this.state = { showFull: false };
	    }

	    _inherits(IssuePage, _React$Component);

	    _createClass(IssuePage, [{
	        key: "_toggleShowFull",
	        value: function _toggleShowFull() {
	            console.log(this);
	            this.setState({
	                showFull: !this.state.showFull
	            });
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var loading = this.props.loading;
	            var showFull = this.state.showFull;

	            var lyItems = _lyInfoJs2["default"].data.map(function (item, key) {
	                var partyClass = "PersonListPage-avatar is-" + item.party_eng;

	                var constituency = constituency_parser(item.constituency);

	                if (!showFull && key > 2) return;
	                return _react2["default"].createElement(
	                    _reactRouter.Link,
	                    { to: "personIssue", params: { issue: "same-sex-marriage" },
	                        className: "PersonListPage-legislatorItem",
	                        key: key },
	                    _react2["default"].createElement(
	                        "div",
	                        { className: partyClass },
	                        _react2["default"].createElement(
	                            "div",
	                            { className: "PersonListPage-flex" },
	                            _react2["default"].createElement(
	                                "div",
	                                { className: "PersonListPage-flexLeft" },
	                                _react2["default"].createElement(_componentsLegislatorAvatarLegislatorAvatarJsx2["default"], { data: item.name, party: item.party_eng })
	                            ),
	                            _react2["default"].createElement(
	                                "div",
	                                { className: "PersonListPage-flexMain" },
	                                _react2["default"].createElement(
	                                    "div",
	                                    { className: "PersonListPage-name" },
	                                    item.name
	                                ),
	                                _react2["default"].createElement(
	                                    "div",
	                                    { className: "PersonListPage-description" },
	                                    item.party
	                                ),
	                                _react2["default"].createElement(
	                                    "div",
	                                    { className: "PersonListPage-description" },
	                                    constituency
	                                ),
	                                _react2["default"].createElement(
	                                    "div",
	                                    { className: "PersonListPage-descriptionLight" },
	                                    item.constituency_detail
	                                )
	                            )
	                        ),
	                        _react2["default"].createElement(
	                            "div",
	                            { className: "PersonListPage-mainIssues" },
	                            "有 ",
	                            119 - key * 14,
	                            " 筆相關立場表態資料"
	                        )
	                    )
	                );
	            });

	            var boundClick = this._toggleShowFull.bind(this, null);

	            var showMoreButton = showFull === true ? "" : _react2["default"].createElement(
	                "div",
	                null,
	                _react2["default"].createElement(
	                    "div",
	                    { className: "Profile-button",
	                        onClick: boundClick },
	                    "列出所有相關立委"
	                )
	            );

	            /////////

	            var sub = [{
	                "title": "法人除罪化",
	                "des": "食安問題人心惶惶，但最後裁罰的結果，往往和不法業者的巨額獲利比例懸殊。究竟要如何才能罰得到？"
	            }, { "title": "吹哨者條款",
	                "des": "要揪出黑心食品，內部員工往往比稽察人員更知道工廠內部狀況。我們能夠過保護吹哨者，來建立更好的食安嗎？"
	            }, { "title": "消費者保護（舉證反轉 + 補助訴訟費用）",
	                "des": "2008 年的三聚氰氨事件中，消費者因難舉證身體受到侵害而無法順利求償。此修法將食安受害的舉證責任，由受害消費者轉移為業者，讓舉證責任回歸廠商。\n律師打消費者訴訟官司有報酬：可讓更多律師加入投入消保相關訴訟。\n食品安全保護基金補助訴訟：食安基金可以用來補助消保相關訴訟費，以及補助「吹哨者」因檢舉僱主，遭不當對待時之訴訟費。"
	            }, {
	                "title": "「食安會報」入法",
	                "des": "目前的食安會報是任務型編組，只有在問題發生時才開會因應，但應變會議無法常態處理食安問題。"
	            }, {
	                "title": "中央設「食品警察隊」協助稽察 ",
	                "des": "餿水油風暴中，衛生人員赴工廠稽察時常碰壁，甚至受到業者威脅。\n提案改由中央政府配置「食品警察隊」，協助食品衛生稽查人員，排除稽查及取締違法之組礙。"
	            }];
	            var subItem = sub.map(function (item, key) {
	                var styleFor = { "width": "43%" };
	                var styleAgainst = { "width": "38%" };
	                var styleUnclear = { "width": "15%" };
	                var styleNone = { "width": "4%" };
	                return _react2["default"].createElement(
	                    _reactRouter.Link,
	                    { to: "issueVote",
	                        params: { issue: "food-safety" },
	                        className: "IssuePage-item" },
	                    _react2["default"].createElement(
	                        "div",
	                        { className: "IssuePage-itemTitle" },
	                        item.title
	                    ),
	                    _react2["default"].createElement(
	                        "div",
	                        { className: "IssuePage-itemDescription" },
	                        item.des
	                    ),
	                    _react2["default"].createElement(
	                        "div",
	                        { className: "IssuePage-itemPosition" },
	                        _react2["default"].createElement(
	                            "div",
	                            { className: "IssuePage-itemPositionTopText" },
	                            "立法院多數意見"
	                        ),
	                        _react2["default"].createElement(
	                            "div",
	                            { className: "IssuePage-itemPositionCount" },
	                            Math.round(Math.random() * 50 + 10) + "%"
	                        ),
	                        _react2["default"].createElement(
	                            "div",
	                            { className: "IssuePage-itemPositionBottomText" },
	                            "同意"
	                        )
	                    ),
	                    _react2["default"].createElement(
	                        "div",
	                        { className: "IssuePage-actions" },
	                        _react2["default"].createElement(
	                            "div",
	                            { className: "IssuePage-button" },
	                            _react2["default"].createElement(_componentsIconIconJsx2["default"], { icon: "star" }),
	                            _react2["default"].createElement(
	                                "span",
	                                { className: "IssuePage-buttonMeta" },
	                                423 - key * 12
	                            )
	                        ),
	                        _react2["default"].createElement(
	                            "div",
	                            { className: "IssuePage-button" },
	                            _react2["default"].createElement(_componentsIconIconJsx2["default"], { icon: "eye" }),
	                            _react2["default"].createElement(
	                                "span",
	                                { className: "IssuePage-FactsCard-buttonMeta" },
	                                "2312"
	                            )
	                        )
	                    )
	                );
	            });

	            return _react2["default"].createElement(
	                "div",
	                { className: "IssuePage" },
	                _react2["default"].createElement(
	                    "div",
	                    { className: "IssuePage-content" },
	                    _react2["default"].createElement(
	                        "div",
	                        { className: "IssuePage-intro" },
	                        _react2["default"].createElement(
	                            "div",
	                            { className: "IssuePage-introTitle" },
	                            "食品安全"
	                        ),
	                        _react2["default"].createElement(
	                            "div",
	                            { className: "IssuePage-introDescription" },
	                            "為因應食安危機，《食品安全衛生管理法》於 2014 年 10 月展開修法，經9次黨團協商辯論，終於在 2014 年 11 月 18 日完成三讀。在委員會初審通過，朝野達成共識的四個修法項目皆順利三讀通過，而進入朝野協商的五大爭議，通過兩項，一項部分通過，另外兩項最後並未通過。"
	                        )
	                    ),
	                    _react2["default"].createElement(
	                        "div",
	                        { className: "IssuePage-sectionTitle" },
	                        "立法院表態牆"
	                    ),
	                    _react2["default"].createElement(
	                        "div",
	                        { className: "IssuePage-sectionDescription" },
	                        "在食品安全這個議題中，立法院共有五個相關的子議題。快來看看各政黨的立場吧！"
	                    ),
	                    _react2["default"].createElement(
	                        "div",
	                        { className: "IssuePage-items" },
	                        subItem
	                    ),
	                    _react2["default"].createElement(
	                        "div",
	                        { className: "IssuePage-sectionTitle" },
	                        "最關心食品安全的立委"
	                    ),
	                    _react2["default"].createElement(
	                        "div",
	                        { className: "IssuePage-sectionDescription" },
	                        "關心有正有負，請詳閱立場表態說明書後再投票。"
	                    ),
	                    lyItems,
	                    showMoreButton
	                )
	            );
	        }
	    }], [{
	        key: "getProps",
	        value: function getProps(stores, params) {
	            var transition = stores.Router.getItem("transition");
	            return {
	                loading: !!transition
	            };
	        }
	    }]);

	    return IssuePage;
	})(_react2["default"].Component);

	exports["default"] = IssuePage;

	IssuePage.contextTypes = {
	    stores: _react2["default"].PropTypes.object
	};
	module.exports = exports["default"];

/***/ },
/* 41 */
/*!********************************************************!*\
  !*** ./app/containers/IssueVotePage/IssueVotePage.jsx ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(/*! react */ 1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(/*! react-router */ 28);

	var _lyPositionJs = __webpack_require__(/*! ./ly-position.js */ 96);

	var _lyPositionJs2 = _interopRequireDefault(_lyPositionJs);

	var _componentsOpinionGroupOpinionGroupJsx = __webpack_require__(/*! components/OpinionGroup/OpinionGroup.jsx */ 97);

	var _componentsOpinionGroupOpinionGroupJsx2 = _interopRequireDefault(_componentsOpinionGroupOpinionGroupJsx);

	__webpack_require__(/*! ./IssueVotePage.css */ 98);

	var _dataForJs = __webpack_require__(/*! ./data/for.js */ 99);

	var _dataForJs2 = _interopRequireDefault(_dataForJs);

	var _dataAgainstJs = __webpack_require__(/*! ./data/against.js */ 100);

	var _dataAgainstJs2 = _interopRequireDefault(_dataAgainstJs);

	var _dataUnclearJs = __webpack_require__(/*! ./data/unclear.js */ 101);

	var _dataUnclearJs2 = _interopRequireDefault(_dataUnclearJs);

	var _dataNoneJs = __webpack_require__(/*! ./data/none.js */ 102);

	var _dataNoneJs2 = _interopRequireDefault(_dataNoneJs);

	var IssueVotePage = (function (_React$Component) {
	  function IssueVotePage() {
	    _classCallCheck(this, IssueVotePage);

	    if (_React$Component != null) {
	      _React$Component.apply(this, arguments);
	    }
	  }

	  _inherits(IssueVotePage, _React$Component);

	  _createClass(IssueVotePage, [{
	    key: "render",
	    value: function render() {

	      var pieChartURL = __webpack_require__(/*! ./images/IssueVotePage-pieChart.jpg */ 123);
	      return _react2["default"].createElement(
	        "div",
	        { className: "IssueVotePage" },
	        _react2["default"].createElement(
	          "div",
	          { className: "IssueVotePage-title" },
	          "法人除罪化"
	        ),
	        _react2["default"].createElement(
	          "div",
	          { className: "IssueVotePage-description" },
	          "食安問題人心惶惶，但最後裁罰的結果，往往和不法業者的巨額獲利比例懸殊。究竟要如何才能罰得到？"
	        ),
	        _react2["default"].createElement(
	          "div",
	          { className: "IssueVotePage-sectionTitle" },
	          "立法院意見"
	        ),
	        _react2["default"].createElement(
	          "div",
	          { className: "IssueVotePage-pieChart" },
	          "這裡是一個立法院整體的 pie chart "
	        ),
	        _react2["default"].createElement(
	          "div",
	          { className: "IssueVotePage-voteGroup" },
	          _react2["default"].createElement(_componentsOpinionGroupOpinionGroupJsx2["default"], { data: _dataForJs2["default"] }),
	          _react2["default"].createElement(_componentsOpinionGroupOpinionGroupJsx2["default"], { data: _dataAgainstJs2["default"] }),
	          _react2["default"].createElement(_componentsOpinionGroupOpinionGroupJsx2["default"], { data: _dataUnclearJs2["default"] }),
	          _react2["default"].createElement(_componentsOpinionGroupOpinionGroupJsx2["default"], { data: _dataNoneJs2["default"] })
	        )
	      );
	    }
	  }], [{
	    key: "getProps",
	    value: function getProps(stores, params) {
	      var transition = stores.Router.getItem("transition");
	      return {
	        loading: !!transition
	      };
	    }
	  }]);

	  return IssueVotePage;
	})(_react2["default"].Component);

	exports["default"] = IssueVotePage;

	IssueVotePage.contextTypes = {
	  stores: _react2["default"].PropTypes.object
	};
	module.exports = exports["default"];

/***/ },
/* 42 */
/*!******************************************!*\
  !*** ./app/route-handlers/normalize.css ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = {};

/***/ },
/* 43 */
/*!*************************************************!*\
  !*** ./app/route-handlers/css/font-awesome.css ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = {};

/***/ },
/* 44 */
/*!********************************************!*\
  !*** ./app/components/Profile/Profile.css ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = {};

/***/ },
/* 45 */
/*!*************************************!*\
  !*** ./~/items-store/ItemsStore.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	function ItemsStore(desc, initialData) {
		if(!desc || typeof desc !== "object")
			throw new Error("Invalid argument: desc must be an object");
		desc.applyUpdate = desc.applyUpdate || applyUpdate;
		desc.mergeUpdates = desc.mergeUpdates || mergeUpdates;
		desc.rebaseUpdate = desc.rebaseUpdate || rebaseUpdate;
		desc.applyNewData = desc.applyNewData || applyNewData;
		desc.applyNewError = desc.applyNewError || applyNewError;
		desc.queueRequest = desc.queueRequest || process.nextTick.bind(process);
		this.desc = desc;
		this.items = initialData ? Object.keys(initialData).reduce(function(obj, key) {
			obj[key] = {
				data: initialData[key],
				tick: 0
			};
			return obj;
		}, {}) : {};
		this.createableItems = [];
		this.deletableItems = [];
		this.requesting = false;
		this.invalidItems = [];
		this.updateTick = 0;
		this.supportCreate = desc.createSingleItem || desc.createMultipleItems ||
			desc.createAndReadSingleItem || desc.createAndReadMultipleItems;
		this.supportDelete = desc.deleteSingleItem || desc.deleteMultipleItems;
		this.supportWrite = desc.writeSingleItem || desc.writeMultipleItems ||
			desc.writeAndReadSingleItem || desc.writeAndReadMultipleItems;
		this.supportRead = desc.readSingleItem || desc.readMultipleItems;
	}

	module.exports = ItemsStore;

	/*

	item = { outdated: true }
	no item data available and data should be requested

	item = { data: {} }
	item data available

	item = { data: {}, outdated: true }
	item data available, but data should be renewed by request

	item = { data: {}, update: {}, newData: {} }
	item data available, but it should be updated with the "update" and "newData"

	item = { update: {} }
	no item data available and it should be updated with the "update"

	*/

	ItemsStore.prototype._createItem = function() {
		return {
			data: undefined,
			update: undefined,
			newData: undefined,
			error: undefined,
			outdated: undefined,
			tick: undefined,
			handlers: undefined,
			infoHandlers: undefined
		};
	}

	ItemsStore.prototype.getData = function() {
		var data = {};
		var hasData = false;
		Object.keys(this.items).forEach(function(key) {
			if(this.items[key].data) {
				data[key] = this.items[key].data;
				hasData = true;
			}
		}, this);
		if(hasData)
			return data;
	};

	ItemsStore.prototype.outdate = function(id) {
		if(typeof id === "string") {
			var item = this.items["_" + id];
			if(!item) return;
			item.tick = null;
		} else {
			this.updateTick++;
		}
	};

	ItemsStore.prototype.update = function(allOrId) {
		if(typeof allOrId === "string") {
			var id = allOrId;
			var item = this.items["_" + id];
			if(!item) return;
			if(!item.outdated) {
				item.outdated = true;
				this.invalidateItem(id);
				if(item.infoHandlers) {
					var handlers = item.infoHandlers.slice();
					handlers.forEach(function(fn) {
						fn(item.newData !== undefined ? item.newData : item.data);
					});
				}
			}
		} else {
			this.updateTick++;
			Object.keys(this.items).forEach(function(key) {
				var id = key.substr(1);
				var item = this.items[key];
				if(!item) return;
				if(!item.outdated && (allOrId || (item.handlers && item.handlers.length > 0))) {
					item.outdated = true;
					this.invalidateItem(id);
				}
			}, this);
		}
	};

	ItemsStore.prototype.listenToItem = function(id, handler) {
		if(typeof handler !== "function") throw new Error("handler argument must be a function");
		var lease = {
			close: function lease() {
				var item = this.items["_" + id];
				if(!item) return;
				var idx = item.handlers.indexOf(handler);
				if(idx < 0) return;
				item.handlers.splice(idx, 1);
				item.leases.splice(idx, 1);
				// TODO stream: if item.handlers.length === 0
			}.bind(this)
		};
		var item = this.items["_" + id];
		if(!item) {
			item = this._createItem();
			item.handlers = [handler];
			item.leases = [lease];
			item.outdated = true;
			this.items["_" + id] = item;
			this.invalidateItem(id);
		} else {
			if(item.handlers) {
				var idx = item.handlers.indexOf(handler);
				if(idx >= 0) {
					return item.leases[idx];
				}
				item.handlers.push(handler);
				item.leases.push(lease);
			} else {
				item.handlers = [handler];
				item.leases = [lease];
			}
			if(item.tick !== this.updateTick && !item.outdated) {
				item.outdated = true;
				this.invalidateItem(id);
			}
		}
		// TODO stream: start streaming
		return lease;
	}

	ItemsStore.prototype.waitForItem = function(id, callback) {
		var self = this;
		var onUpdate = function() {
			if(!self.isItemUpToDate(id)) return;
			var idx = item.infoHandlers.indexOf(onUpdate);
			if(idx < 0) return;
			item.infoHandlers.splice(idx, 1);
			callback();
		};

		var item = this.items["_" + id];
		if(!item) {
			item = this._createItem();
			item.infoHandlers = [onUpdate];
			item.outdated = true;
			this.items["_" + id] = item;
			this.invalidateItem(id);
		} else {
			if(this.isItemUpToDate(id)) {
				callback();
				return;
			}
			if(item.infoHandlers) {
				item.infoHandlers.push(onUpdate);
			} else {
				item.infoHandlers = [onUpdate];
			}
			if(!item.outdated && item.tick !== this.updateTick) {
				item.outdated = true;
				this.invalidateItem(id);
			}
		}
	};

	ItemsStore.prototype.getItem = function(id) {
		var item = this.items["_" + id];
		if(!item) return undefined;
		return item.newData !== undefined ? item.newData : item.data;
	};

	ItemsStore.prototype.isItemAvailable = function(id) {
		var item = this.items["_" + id];
		return !!(item && item.data !== undefined);
	};

	ItemsStore.prototype.isItemUpToDate = function(id) {
		var item = this.items["_" + id];
		return !!(item && item.data !== undefined && !item.outdated && item.tick === this.updateTick);
	};

	ItemsStore.prototype.getItemInfo = function(id) {
		var item = this.items["_" + id];
		if(!item) return {
			available: false,
			outdated: false,
			updated: false,
			listening: false,
			error: undefined
		};
		return {
			available: item.data !== undefined,
			outdated: !(!item.outdated && item.tick === this.updateTick),
			updated: item.update !== undefined,
			listening: !!item.handlers && item.handlers.length > 0,
			error: item.error
		};
	};

	ItemsStore.prototype.updateItem = function(id, update) {
		if(!this.supportWrite)
			throw new Error("Store doesn't support updating of items");
		var item = this.items["_" + id];
		if(!item) {
			item = this._createItem();
			item.update = update;
			this.items["_" + id] = item;
		} else {
			if(item.data !== undefined) {
				item.newData = this.desc.applyUpdate(item.newData !== undefined ? item.newData : item.data, update);
			}
			if(item.update !== undefined) {
				item.update = this.desc.mergeUpdates(item.update, update);
			} else {
				item.update = update;
			}
		}
		this.invalidateItem(id);
		if(item.data !== undefined && item.handlers) {
			var handlers = item.handlers.slice();
			handlers.forEach(function(fn) {
				fn(item.newData);
			});
		}
	};

	ItemsStore.prototype.createItem = function(data, handler) {
		if(!this.supportCreate)
			throw new Error("Store doesn't support creating of items");
		this.createableItems.push({
			data: data,
			handler: handler
		});
		if(!this.requesting) {
			this.requesting = true;
			this._queueRequest();
		}
	};

	ItemsStore.prototype.deleteItem = function(id, handler) {
		if(!this.supportDelete)
			throw new Error("Store doesn't support deleting of items");
		this.deletableItems.push({
			id: id,
			handler: handler
		});
		if(!this.requesting) {
			this.requesting = true;
			this._queueRequest();
		}
	};

	ItemsStore.prototype.invalidateItem = function(id) {
		if(this.invalidItems.indexOf(id) >= 0)
			return;
		if(!this.supportRead)
			throw new Error("Store doesn't support reading of items");
		this.invalidItems.push(id);
		if(!this.requesting) {
			this.requesting = true;
			this._queueRequest();
		}
	};

	ItemsStore.prototype._queueRequest = function() {
		this.desc.queueRequest(this._request.bind(this));
	};

	ItemsStore.prototype._requestWriteAndReadMultipleItems = function(items, callback) {
		this.desc.writeAndReadMultipleItems(items, function(err, newDatas) {
			if(err) {
				items.forEach(function(item) {
					this.setItemError(item.id, err);
				}, this);
			}
			if(newDatas) {
				Object.keys(newDatas).forEach(function(id) {
					this.setItemData(id.substr(1), newDatas[id]);
				}, this);
			}
			this._queueRequest();
			callback();
		}.bind(this));
	};

	ItemsStore.prototype._requestWriteMultipleItems = function(items, callback) {
		this.desc.writeMultipleItems(items, function(err) {
			if(err) {
				items.forEach(function(item) {
					this.setItemError(item.id, err);
				}, this);
			}
			this._queueRequest();
			callback();
		}.bind(this));
	};

	ItemsStore.prototype._requestWriteAndReadSingleItem = function(item, callback) {
		this.desc.writeAndReadSingleItem(item, function(err, newData) {
			if(err) {
				this.setItemError(item.id, err);
			}
			if(newData !== undefined) {
				this.setItemData(item.id, newData);
			}
			this._queueRequest();
			callback();
		}.bind(this));
	};

	ItemsStore.prototype._requestWriteSingleItem = function(item, callback) {
		this.desc.writeSingleItem(item, function(err) {
			if(err) {
				this.setItemError(item.id, err);
			}
			this._queueRequest();
			callback();
		}.bind(this));
	};

	ItemsStore.prototype._requestReadMultipleItems = function(items, callback) {
		this.desc.readMultipleItems(items, function(err, newDatas) {
			if(err) {
				items.forEach(function(item) {
					this.setItemError(item.id, err);
				}, this);
			}
			if(newDatas) {
				Object.keys(newDatas).forEach(function(id) {
					this.setItemData(id.substr(1), newDatas[id]);
				}, this);
			}
			this._queueRequest();
			callback();
		}.bind(this));
	};

	ItemsStore.prototype._requestReadSingleItem = function(item, callback) {
		this.desc.readSingleItem(item, function(err, newData) {
			if(err) {
				this.setItemError(item.id, err);
			}
			if(newData !== undefined) {
				this.setItemData(item.id, newData);
			}
			this._queueRequest();
			callback();
		}.bind(this));
	};

	ItemsStore.prototype._requestCreateSingleItem = function(item, callback) {
		this.desc.createSingleItem(item, function(err, id) {
			if(item.handler) item.handler(err, id);
			this._queueRequest();
			callback();
		}.bind(this));
	};

	ItemsStore.prototype._requestCreateMultipleItems = function(items, callback) {
		this.desc.createMultipleItems(items, function(err, ids) {
			for(var i = 0; i < items.length; i++) {
				if(items[i].handler) {
					items[i].handler(err, ids && ids[i]);
				}
			}
			this._queueRequest();
			callback();
		}.bind(this));
	};

	ItemsStore.prototype._requestCreateAndReadSingleItem = function(item, callback) {
		this.desc.createAndReadSingleItem(item, function(err, id, newData) {
			if(!err && newData !== undefined) {
				this.setItemData(id, newData);
			}
			if(item.handler) item.handler(err, id, newData);
			this._queueRequest();
			callback();
		}.bind(this));
	};

	ItemsStore.prototype._requestCreateAndReadMultipleItems = function(items, callback) {
		this.desc.createAndReadMultipleItems(items, function(err, ids, newDatas) {
			if(newDatas) {
				Object.keys(newDatas).forEach(function(id) {
					this.setItemData(id.substr(1), newDatas[id]);
				}, this);
			}
			for(var i = 0; i < items.length; i++) {
				if(items[i].handler) {
					items[i].handler(err, ids && ids[i], ids && newDatas && newDatas[ids[i]]);
				}
			}
			this._queueRequest();
			callback();
		}.bind(this));
	};

	ItemsStore.prototype._requestDeleteSingleItem = function(item, callback) {
		this.desc.deleteSingleItem(item, function(err) {
			if(item.handler) item.handler(err);
			if(!err) {
				delete this.items["_" + item.id];
			}
			this._queueRequest();
			callback();
		}.bind(this));
	};

	ItemsStore.prototype._requestDeleteMultipleItems = function(items, callback) {
		this.desc.deleteMultipleItems(items, function(err) {
			for(var i = 0; i < items.length; i++) {
				if(items[i].handler) {
					items[i].handler(err);
				}
				if(!err) {
					delete this.items["_" + items[i].id];
				}
			}
			this._queueRequest();
			callback();
		}.bind(this));
	};

	ItemsStore.prototype._request = function(callback) {
		callback = callback || function () {};
		if(this.desc.createAndReadMultipleItems) {
			var items = this._popCreateableItem(true);
			if(items.length === 1 && this.desc.createAndReadSingleItem) {
				this._requestCreateAndReadSingleItem(items[0], callback);
				return;
			} else if(items.length > 0) {
				this._requestCreateAndReadMultipleItems(items, callback);
				return;
			}
		}
		if(this.desc.createMultipleItems) {
			var items = this._popCreateableItem(true);
			if(items.length === 1 && this.desc.createSingleItem) {
				if(!this.desc.createAndReadSingleItem) {
					this._requestCreateSingleItem(items[0], callback);
					return;
				}
			} else if(items.length > 0) {
				this._requestCreateMultipleItems(items, callback);
				return;
			}
		}
		if(this.desc.createAndReadSingleItem) {
			var item = this._popCreateableItem(false);
			if(item) {
				this._requestCreateAndReadSingleItem(item, callback);
				return;
			}
		}
		if(this.desc.createSingleItem) {
			var item = this._popCreateableItem(false);
			if(item) {
				this._requestCreateSingleItem(item, callback);
				return;
			}
		}
		if(this.desc.writeAndReadMultipleItems) {
			var items = this._popWriteableItem(true, true);
			if(items.length === 1 && this.desc.writeAndReadSingleItem) {
				this._requestWriteAndReadSingleItem(items[0], callback);
				return;
			} else if(items.length > 0) {
				this._requestWriteAndReadMultipleItems(items, callback);
				return;
			}
		}
		if(this.desc.writeMultipleItems) {
			var items = this._popWriteableItem(true, false);
			if(items.length === 1 && this.desc.writeSingleItem) {
				if(!this.desc.writeAndReadSingleItem) {
					this._requestWriteSingleItem(items[0], callback);
					return;
				}
			} else if(items.length > 0) {
				this._requestWriteMultipleItems(items, callback);
				return;
			}
		}
		if(this.desc.writeAndReadSingleItem) {
			var item = this._popWriteableItem(false, true);
			if(item) {
				this._requestWriteAndReadSingleItem(item, callback);
				return;
			}
		}
		if(this.desc.writeSingleItem) {
			var item = this._popWriteableItem(false);
			if(item) {
				this._requestWriteSingleItem(item, callback);
				return;
			}
		}
		if(this.desc.deleteMultipleItems) {
			var items = this._popDeleteableItem(true);
			if(items.length === 1 && this.desc.deleteSingleItem) {
				this._requestDeleteSingleItem(items[0], callback);
				return;
			} else if(items.length > 0) {
				this._requestDeleteMultipleItems(items, callback);
				return;
			}
		}
		if(this.desc.deleteSingleItem) {
			var item = this._popDeleteableItem(false);
			if(item) {
				this._requestDeleteSingleItem(item, callback);
				return;
			}
		}
		if(this.desc.readMultipleItems) {
			var items = this._popReadableItem(true);
			if(items.length === 1 && this.desc.readSingleItem) {
				this._requestReadSingleItem(items[0], callback);
				return;
			} else if(items.length > 0) {
				this._requestReadMultipleItems(items, callback);
				return;
			}
		}
		if(this.desc.readSingleItem) {
			var item = this._popReadableItem(false);
			if(item) {
				this._requestReadSingleItem(item, callback);
				return;
			}
		}
		this.requesting = false;
		callback();
	};

	ItemsStore.prototype.setItemError = function(id, newError) {
		var item = this.items["_" + id];
		if(!item) {
			item = this._createItem();
			item.data = this.desc.applyNewError(undefined, newError);
			item.error = newError;
			item.tick = this.updateTick;
			this.items["_" + id] = item;
			return;
		}
		newData = this.desc.applyNewError(item.data, newError);
		item.error = newError;
		this._setItemNewData(id, item, newData)
	};

	ItemsStore.prototype.setItemData = function(id, newData) {
		var item = this.items["_" + id];
		if(!item) {
			item = this._createItem();
			item.data = this.desc.applyNewData(undefined, newData);
			item.tick = this.updateTick;
			this.items["_" + id] = item;
			return;
		}
		newData = this.desc.applyNewData(item.data, newData);
		item.error = null;
		this._setItemNewData(id, item, newData)
	};

	ItemsStore.prototype._setItemNewData = function(id, item, newData) {
		if(item.newData !== undefined) {
			item.update = this.desc.rebaseUpdate(item.update, item.data, newData);
			item.newData = this.desc.applyUpdate(newData, item.update);
		}
		var oldData = item.data;
		item.data = newData;
		item.outdated = false;
		item.tick = this.updateTick;
		if(item.update === undefined) {
			var idx = this.invalidItems.indexOf(id);
			if(idx >= 0)
				this.invalidItems.splice(idx, 1);
		}
		var infoHandlers = item.infoHandlers && item.infoHandlers.slice();
		var handlers = item.handlers && item.handlers.slice();
		if(infoHandlers) {
			infoHandlers.forEach(function(fn) {
				fn();
			});
		}
		if(handlers && oldData !== newData) {
			handlers.forEach(function(fn) {
				fn(item.newData !== undefined ? item.newData : newData);
			});
		}
	};

	ItemsStore.prototype._popCreateableItem = function(multiple) {
		if(multiple) {
			if(this.maxCreateItems && this.maxCreateItems < this.createableItems.length) {
				return this.createableItems.splice(0, this.maxCreateItems);
			} else {
				var items = this.createableItems;
				this.createableItems = [];
				return items;
			}
		} else {
			return this.createableItems.shift();
		}
	};

	ItemsStore.prototype._popDeleteableItem = function(multiple) {
		if(multiple) {
			if(this.maxDeleteItems && this.maxDeleteItems < this.deletableItems.length) {
				return this.deletableItems.splice(0, this.maxDeleteItems);
			} else {
				var items = this.deletableItems;
				this.deletableItems = [];
				return items;
			}
		} else {
			return this.deletableItems.shift();
		}
	};

	ItemsStore.prototype._popWriteableItem = function(multiple, willRead) {
		var results = [];
		for(var i = 0; i < this.invalidItems.length; i++) {
			var id = this.invalidItems[i];
			var item = this.items["_" + id];
			if(item.update) {
				var result = {
					id: id,
					update: item.update,
					oldData: item.data,
					newData: item.newData
				};
				item.outdated = true;
				item.data = item.newData;
				delete item.update;
				delete item.newData;
				if(willRead) {
					this.invalidItems.splice(i, 1);
					i--;
				}
				if(!multiple)
					return result;
				results.push(result);
				if(this.desc.maxWriteItems && results.length >= this.desc.maxWriteItems)
					break;
			}
		}
		if(multiple)
			return results;
	};

	ItemsStore.prototype._popReadableItem = function(multiple) {
		var results = [];
		for(var i = 0; i < this.invalidItems.length; i++) {
			var id = this.invalidItems[i];
			var item = this.items["_" + id];
			if(item.outdated) {
				var result = {
					id: id,
					oldData: item.data
				};
				this.invalidItems.splice(i, 1);
				i--;
				if(!multiple)
					return result;
				results.push(result);
				if(this.desc.maxReadItems && results.length >= this.desc.maxReadItems)
					break;
			}
		}
		if(multiple)
			return results;
	};


	function applyUpdate(data, update) {
		return Object.assign({}, data, update);
	}

	function mergeUpdates(a, b) {
		return Object.assign({}, a, b);
	}

	function rebaseUpdate(update, oldData, newData) {
		return update;
	}

	function applyNewData(oldData, newData) {
		return newData;
	}

	function applyNewError(oldData, newError) {
		return null;
	}


/***/ },
/* 46 */
/*!******************************************!*\
  !*** ./~/items-store/ItemsStoreLease.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	function ItemsStoreLease() {
		this.leases = undefined;
	}

	module.exports = ItemsStoreLease;

	ItemsStoreLease.prototype.capture = function(fn, onUpdate) {
		var newLeases = [];
		var leases = this.leases;
		function listenTo(Store, id) {
			var lease = Store.listenToItem(id, onUpdate);
			var idx = newLeases.indexOf(lease);
			if(idx < 0) {
				if(leases) {
					idx = leases.indexOf(lease);
					if(idx >= 0)
						leases.splice(idx, 1);
				}
				newLeases.push(lease);
			}
		}
		var error = null;
		try {
			var ret = fn(listenTo);
		} catch(e) {
			error = e;
		}
		if(leases) {
			leases.forEach(function(lease) {
				lease.close();
			});
		}
		this.leases = newLeases;
		if(error) throw error;
		return ret;
	};

	ItemsStoreLease.prototype.close = function() {
		if(this.leases) {
			this.leases.forEach(function(lease) {
				lease.close();
			});
		}
		this.leases = undefined;
	};


/***/ },
/* 47 */
/*!********************************************!*\
  !*** ./~/items-store/ItemsStoreFetcher.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var ItemsStoreFetcher = module.exports = exports;

	ItemsStoreFetcher.fetch = function(fn, callback) {
		var ident = this.ident;
		var unavailableItems;
		function onItemAvailable() {
			if(--unavailableItems === 0)
				runFn();
		}
		function listenTo(Store, id) {
			if(!Store.isItemUpToDate(id)) {
				unavailableItems++;
				Store.waitForItem(id, onItemAvailable);
			}
		}
		function runFn() {
			unavailableItems = 1;
			try {
				var ret = fn(listenTo);
			} catch(e) {
				unavailableItems = NaN;
				callback(e);
			}
			if(--unavailableItems === 0) {
				callback(null, ret);
			}
		}
		runFn();
	};


/***/ },
/* 48 */
/*!**********************************!*\
  !*** ./~/items-store/Actions.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var EventEmitter = __webpack_require__(/*! events */ 103).EventEmitter;

	var Actions = module.exports = exports;

	Actions.create = function create(array) {
		var obj = {};
		if(Array.isArray(array)) {
			array.forEach(function(name) {
				obj[name] = create();
			});
			return obj;
		} else {
			var ee = new EventEmitter();
			var action = function() {
				var args = Array.prototype.slice.call(arguments);
				ee.emit("trigger", args);
			};
			action.listen = function(callback, bindContext) {
				ee.addListener("trigger", function(args) {
					callback.apply(bindContext, args);
				});
			};
			return action;
		}
	};


/***/ },
/* 49 */
/*!******************************************!*\
  !*** ./~/items-store/createContainer.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var React = __webpack_require__(/*! react */ 1);
	var ItemsStoreLease = __webpack_require__(/*! ./ItemsStoreLease */ 46);
	var ItemsStoreFetcher = __webpack_require__(/*! ./ItemsStoreFetcher */ 47);
	var ReactUpdates = __webpack_require__(/*! react/lib/ReactUpdates */ 104);

	function makeStores(stores, addDependency) {
		if(!addDependency) {
			return stores;
		}
		return Object.keys(stores).reduce(function(obj, key) {
			obj[key] = {
				getItem: function(id) {
					addDependency(stores[key], id);
					return stores[key].getItem(id);
				},
				getItemInfo: function(id) {
					addDependency(stores[key], id);
					return stores[key].getItemInfo(id);
				},
				isItemAvailable: function(id) {
					addDependency(stores[key], id);
					return stores[key].isItemAvailable(id);
				},
				isItemUpToDate: function(id) {
					addDependency(stores[key], id);
					return stores[key].isItemUpToDate(id);
				},
			};
			return obj;
		}, {});
	}

	module.exports = function createContainer(Component) {
		var componentName = Component.displayName || Component.name;
		if(!Component.getProps)
			throw new Error("Passed Component " + componentName + " has no static getProps function");
		return React.createClass({
			displayName: componentName + "Container",
			statics: {
				chargeStores: function(stores, params, callback) {
					ItemsStoreFetcher.fetch(function(addDependency) {
						Component.getProps(makeStores(stores, addDependency), params);
					}.bind(this), callback);
				}
			},
			getInitialState: function() {
				if(!this.lease) this.lease = new ItemsStoreLease();
				var stores = this.context.stores;
				var router = this.context.router;
				var params = router && router.getCurrentParams && router.getCurrentParams();
				return this.lease.capture(function(addDependency) {
					return Component.getProps(makeStores(stores, addDependency), params);
				}, this._onUpdate);
			},
			_onUpdate: function() {
				// _onUpdate is called when any leased value has changed
				// we schedule an update (this merges multiple changes to a single state change)
				if(this._updateScheduled)
					return;
				this._updateScheduled = true;
				ReactUpdates.asap(this._doUpdate);
			},
			_doUpdate: function() {
				// 
				this._updateScheduled = false;
				if(!this.isMounted()) return;
				var stores = this.context.stores;
				var router = this.context.router;
				var params = router && router.getCurrentParams && router.getCurrentParams();
				this.setState(this.lease.capture(function(addDependency) {
					return Component.getProps(makeStores(stores, addDependency), params);
				}, this._onUpdate));
			},
			componentWillReceiveProps: function(newProps, newContext) {
				// on context change update, because params may have changed
				if(!newContext || !newContext.router) return;
				var stores = newContext.stores;
				var router = newContext.router;
				var params = router && router.getCurrentParams && router.getCurrentParams();
				this.setState(this.lease.capture(function(addDependency) {
					return Component.getProps(makeStores(stores, addDependency), params);
				}, this._onUpdate));
			},
			componentWillUnmount: function() {
				if(this.lease) this.lease.close();
			},
			render: function() {
				return React.createElement(Component, this.state);
			},
			contextTypes: {
				stores: React.PropTypes.object.isRequired,
				router: React.PropTypes.func
			}
		})
	};


/***/ },
/* 50 */
/*!*******************************!*\
  !*** external "react/addons" ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("react/addons");

/***/ },
/* 51 */
/*!*******************************************************!*\
  !*** ./~/react-router/lib/components/DefaultRoute.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

	var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	var PropTypes = __webpack_require__(/*! ../PropTypes */ 110);
	var RouteHandler = __webpack_require__(/*! ./RouteHandler */ 56);
	var Route = __webpack_require__(/*! ./Route */ 55);

	/**
	 * A <DefaultRoute> component is a special kind of <Route> that
	 * renders when its parent matches but none of its siblings do.
	 * Only one such route may be used at any given level in the
	 * route hierarchy.
	 */

	var DefaultRoute = (function (_Route) {
	  function DefaultRoute() {
	    _classCallCheck(this, DefaultRoute);

	    if (_Route != null) {
	      _Route.apply(this, arguments);
	    }
	  }

	  _inherits(DefaultRoute, _Route);

	  return DefaultRoute;
	})(Route);

	// TODO: Include these in the above class definition
	// once we can use ES7 property initializers.
	// https://github.com/babel/babel/issues/619

	DefaultRoute.propTypes = {
	  name: PropTypes.string,
	  path: PropTypes.falsy,
	  children: PropTypes.falsy,
	  handler: PropTypes.func.isRequired
	};

	DefaultRoute.defaultProps = {
	  handler: RouteHandler
	};

	module.exports = DefaultRoute;

/***/ },
/* 52 */
/*!***********************************************!*\
  !*** ./~/react-router/lib/components/Link.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	var React = __webpack_require__(/*! react */ 1);
	var assign = __webpack_require__(/*! react/lib/Object.assign */ 105);
	var PropTypes = __webpack_require__(/*! ../PropTypes */ 110);

	function isLeftClickEvent(event) {
	  return event.button === 0;
	}

	function isModifiedEvent(event) {
	  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
	}

	/**
	 * <Link> components are used to create an <a> element that links to a route.
	 * When that route is active, the link gets an "active" class name (or the
	 * value of its `activeClassName` prop).
	 *
	 * For example, assuming you have the following route:
	 *
	 *   <Route name="showPost" path="/posts/:postID" handler={Post}/>
	 *
	 * You could use the following component to link to that route:
	 *
	 *   <Link to="showPost" params={{ postID: "123" }} />
	 *
	 * In addition to params, links may pass along query string parameters
	 * using the `query` prop.
	 *
	 *   <Link to="showPost" params={{ postID: "123" }} query={{ show:true }}/>
	 */

	var Link = (function (_React$Component) {
	  function Link() {
	    _classCallCheck(this, Link);

	    if (_React$Component != null) {
	      _React$Component.apply(this, arguments);
	    }
	  }

	  _inherits(Link, _React$Component);

	  _createClass(Link, [{
	    key: 'handleClick',
	    value: function handleClick(event) {
	      var allowTransition = true;
	      var clickResult;

	      if (this.props.onClick) clickResult = this.props.onClick(event);

	      if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
	        return;
	      }if (clickResult === false || event.defaultPrevented === true) allowTransition = false;

	      event.preventDefault();

	      if (allowTransition) this.context.router.transitionTo(this.props.to, this.props.params, this.props.query);
	    }
	  }, {
	    key: 'getHref',

	    /**
	     * Returns the value of the "href" attribute to use on the DOM element.
	     */
	    value: function getHref() {
	      return this.context.router.makeHref(this.props.to, this.props.params, this.props.query);
	    }
	  }, {
	    key: 'getClassName',

	    /**
	     * Returns the value of the "class" attribute to use on the DOM element, which contains
	     * the value of the activeClassName property when this <Link> is active.
	     */
	    value: function getClassName() {
	      var className = this.props.className;

	      if (this.getActiveState()) className += ' ' + this.props.activeClassName;

	      return className;
	    }
	  }, {
	    key: 'getActiveState',
	    value: function getActiveState() {
	      return this.context.router.isActive(this.props.to, this.props.params, this.props.query);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var props = assign({}, this.props, {
	        href: this.getHref(),
	        className: this.getClassName(),
	        onClick: this.handleClick.bind(this)
	      });

	      if (props.activeStyle && this.getActiveState()) props.style = props.activeStyle;

	      return React.DOM.a(props, this.props.children);
	    }
	  }]);

	  return Link;
	})(React.Component);

	// TODO: Include these in the above class definition
	// once we can use ES7 property initializers.
	// https://github.com/babel/babel/issues/619

	Link.contextTypes = {
	  router: PropTypes.router.isRequired
	};

	Link.propTypes = {
	  activeClassName: PropTypes.string.isRequired,
	  to: PropTypes.oneOfType([PropTypes.string, PropTypes.route]).isRequired,
	  params: PropTypes.object,
	  query: PropTypes.object,
	  activeStyle: PropTypes.object,
	  onClick: PropTypes.func
	};

	Link.defaultProps = {
	  activeClassName: 'active',
	  className: ''
	};

	module.exports = Link;

/***/ },
/* 53 */
/*!********************************************************!*\
  !*** ./~/react-router/lib/components/NotFoundRoute.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

	var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	var PropTypes = __webpack_require__(/*! ../PropTypes */ 110);
	var RouteHandler = __webpack_require__(/*! ./RouteHandler */ 56);
	var Route = __webpack_require__(/*! ./Route */ 55);

	/**
	 * A <NotFoundRoute> is a special kind of <Route> that
	 * renders when the beginning of its parent's path matches
	 * but none of its siblings do, including any <DefaultRoute>.
	 * Only one such route may be used at any given level in the
	 * route hierarchy.
	 */

	var NotFoundRoute = (function (_Route) {
	  function NotFoundRoute() {
	    _classCallCheck(this, NotFoundRoute);

	    if (_Route != null) {
	      _Route.apply(this, arguments);
	    }
	  }

	  _inherits(NotFoundRoute, _Route);

	  return NotFoundRoute;
	})(Route);

	// TODO: Include these in the above class definition
	// once we can use ES7 property initializers.
	// https://github.com/babel/babel/issues/619

	NotFoundRoute.propTypes = {
	  name: PropTypes.string,
	  path: PropTypes.falsy,
	  children: PropTypes.falsy,
	  handler: PropTypes.func.isRequired
	};

	NotFoundRoute.defaultProps = {
	  handler: RouteHandler
	};

	module.exports = NotFoundRoute;

/***/ },
/* 54 */
/*!***************************************************!*\
  !*** ./~/react-router/lib/components/Redirect.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

	var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	var PropTypes = __webpack_require__(/*! ../PropTypes */ 110);
	var Route = __webpack_require__(/*! ./Route */ 55);

	/**
	 * A <Redirect> component is a special kind of <Route> that always
	 * redirects to another route when it matches.
	 */

	var Redirect = (function (_Route) {
	  function Redirect() {
	    _classCallCheck(this, Redirect);

	    if (_Route != null) {
	      _Route.apply(this, arguments);
	    }
	  }

	  _inherits(Redirect, _Route);

	  return Redirect;
	})(Route);

	// TODO: Include these in the above class definition
	// once we can use ES7 property initializers.
	// https://github.com/babel/babel/issues/619

	Redirect.propTypes = {
	  path: PropTypes.string,
	  from: PropTypes.string, // Alias for path.
	  to: PropTypes.string,
	  handler: PropTypes.falsy
	};

	// Redirects should not have a default handler
	Redirect.defaultProps = {};

	module.exports = Redirect;

/***/ },
/* 55 */
/*!************************************************!*\
  !*** ./~/react-router/lib/components/Route.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	var React = __webpack_require__(/*! react */ 1);
	var invariant = __webpack_require__(/*! react/lib/invariant */ 106);
	var PropTypes = __webpack_require__(/*! ../PropTypes */ 110);
	var RouteHandler = __webpack_require__(/*! ./RouteHandler */ 56);

	/**
	 * <Route> components specify components that are rendered to the page when the
	 * URL matches a given pattern.
	 *
	 * Routes are arranged in a nested tree structure. When a new URL is requested,
	 * the tree is searched depth-first to find a route whose path matches the URL.
	 * When one is found, all routes in the tree that lead to it are considered
	 * "active" and their components are rendered into the DOM, nested in the same
	 * order as they are in the tree.
	 *
	 * The preferred way to configure a router is using JSX. The XML-like syntax is
	 * a great way to visualize how routes are laid out in an application.
	 *
	 *   var routes = [
	 *     <Route handler={App}>
	 *       <Route name="login" handler={Login}/>
	 *       <Route name="logout" handler={Logout}/>
	 *       <Route name="about" handler={About}/>
	 *     </Route>
	 *   ];
	 *   
	 *   Router.run(routes, function (Handler) {
	 *     React.render(<Handler/>, document.body);
	 *   });
	 *
	 * Handlers for Route components that contain children can render their active
	 * child route using a <RouteHandler> element.
	 *
	 *   var App = React.createClass({
	 *     render: function () {
	 *       return (
	 *         <div class="application">
	 *           <RouteHandler/>
	 *         </div>
	 *       );
	 *     }
	 *   });
	 *
	 * If no handler is provided for the route, it will render a matched child route.
	 */

	var Route = (function (_React$Component) {
	  function Route() {
	    _classCallCheck(this, Route);

	    if (_React$Component != null) {
	      _React$Component.apply(this, arguments);
	    }
	  }

	  _inherits(Route, _React$Component);

	  _createClass(Route, [{
	    key: 'render',
	    value: function render() {
	      invariant(false, '%s elements are for router configuration only and should not be rendered', this.constructor.name);
	    }
	  }]);

	  return Route;
	})(React.Component);

	// TODO: Include these in the above class definition
	// once we can use ES7 property initializers.
	// https://github.com/babel/babel/issues/619

	Route.propTypes = {
	  name: PropTypes.string,
	  path: PropTypes.string,
	  handler: PropTypes.func,
	  ignoreScrollBehavior: PropTypes.bool
	};

	Route.defaultProps = {
	  handler: RouteHandler
	};

	module.exports = Route;

/***/ },
/* 56 */
/*!*******************************************************!*\
  !*** ./~/react-router/lib/components/RouteHandler.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	var React = __webpack_require__(/*! react */ 1);
	var ContextWrapper = __webpack_require__(/*! ./ContextWrapper */ 111);
	var assign = __webpack_require__(/*! react/lib/Object.assign */ 105);
	var PropTypes = __webpack_require__(/*! ../PropTypes */ 110);

	var REF_NAME = '__routeHandler__';

	/**
	 * A <RouteHandler> component renders the active child route handler
	 * when routes are nested.
	 */

	var RouteHandler = (function (_React$Component) {
	  function RouteHandler() {
	    _classCallCheck(this, RouteHandler);

	    if (_React$Component != null) {
	      _React$Component.apply(this, arguments);
	    }
	  }

	  _inherits(RouteHandler, _React$Component);

	  _createClass(RouteHandler, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return {
	        routeDepth: this.context.routeDepth + 1
	      };
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this._updateRouteComponent(this.refs[REF_NAME]);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this._updateRouteComponent(this.refs[REF_NAME]);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this._updateRouteComponent(null);
	    }
	  }, {
	    key: '_updateRouteComponent',
	    value: function _updateRouteComponent(component) {
	      this.context.router.setRouteComponentAtDepth(this.getRouteDepth(), component);
	    }
	  }, {
	    key: 'getRouteDepth',
	    value: function getRouteDepth() {
	      return this.context.routeDepth;
	    }
	  }, {
	    key: 'createChildRouteHandler',
	    value: function createChildRouteHandler(props) {
	      var route = this.context.router.getRouteAtDepth(this.getRouteDepth());

	      if (route == null) {
	        return null;
	      }var childProps = assign({}, props || this.props, {
	        ref: REF_NAME,
	        params: this.context.router.getCurrentParams(),
	        query: this.context.router.getCurrentQuery()
	      });

	      return React.createElement(route.handler, childProps);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var handler = this.createChildRouteHandler();
	      // <script/> for things like <CSSTransitionGroup/> that don't like null
	      return handler ? React.createElement(
	        ContextWrapper,
	        null,
	        handler
	      ) : React.createElement('script', null);
	    }
	  }]);

	  return RouteHandler;
	})(React.Component);

	// TODO: Include these in the above class definition
	// once we can use ES7 property initializers.
	// https://github.com/babel/babel/issues/619

	RouteHandler.contextTypes = {
	  routeDepth: PropTypes.number.isRequired,
	  router: PropTypes.router.isRequired
	};

	RouteHandler.childContextTypes = {
	  routeDepth: PropTypes.number.isRequired
	};

	module.exports = RouteHandler;

/***/ },
/* 57 */
/*!******************************************************!*\
  !*** ./~/react-router/lib/locations/HashLocation.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var LocationActions = __webpack_require__(/*! ../actions/LocationActions */ 112);
	var History = __webpack_require__(/*! ../History */ 64);

	var _listeners = [];
	var _isListening = false;
	var _actionType;

	function notifyChange(type) {
	  if (type === LocationActions.PUSH) History.length += 1;

	  var change = {
	    path: HashLocation.getCurrentPath(),
	    type: type
	  };

	  _listeners.forEach(function (listener) {
	    listener.call(HashLocation, change);
	  });
	}

	function ensureSlash() {
	  var path = HashLocation.getCurrentPath();

	  if (path.charAt(0) === '/') {
	    return true;
	  }HashLocation.replace('/' + path);

	  return false;
	}

	function onHashChange() {
	  if (ensureSlash()) {
	    // If we don't have an _actionType then all we know is the hash
	    // changed. It was probably caused by the user clicking the Back
	    // button, but may have also been the Forward button or manual
	    // manipulation. So just guess 'pop'.
	    var curActionType = _actionType;
	    _actionType = null;
	    notifyChange(curActionType || LocationActions.POP);
	  }
	}

	/**
	 * A Location that uses `window.location.hash`.
	 */
	var HashLocation = {

	  addChangeListener: function addChangeListener(listener) {
	    _listeners.push(listener);

	    // Do this BEFORE listening for hashchange.
	    ensureSlash();

	    if (!_isListening) {
	      if (window.addEventListener) {
	        window.addEventListener('hashchange', onHashChange, false);
	      } else {
	        window.attachEvent('onhashchange', onHashChange);
	      }

	      _isListening = true;
	    }
	  },

	  removeChangeListener: function removeChangeListener(listener) {
	    _listeners = _listeners.filter(function (l) {
	      return l !== listener;
	    });

	    if (_listeners.length === 0) {
	      if (window.removeEventListener) {
	        window.removeEventListener('hashchange', onHashChange, false);
	      } else {
	        window.removeEvent('onhashchange', onHashChange);
	      }

	      _isListening = false;
	    }
	  },

	  push: function push(path) {
	    _actionType = LocationActions.PUSH;
	    window.location.hash = path;
	  },

	  replace: function replace(path) {
	    _actionType = LocationActions.REPLACE;
	    window.location.replace(window.location.pathname + window.location.search + '#' + path);
	  },

	  pop: function pop() {
	    _actionType = LocationActions.POP;
	    History.back();
	  },

	  getCurrentPath: function getCurrentPath() {
	    return decodeURI(
	    // We can't use window.location.hash here because it's not
	    // consistent across browsers - Firefox will pre-decode it!
	    window.location.href.split('#')[1] || '');
	  },

	  toString: function toString() {
	    return '<HashLocation>';
	  }

	};

	module.exports = HashLocation;

/***/ },
/* 58 */
/*!*********************************************************!*\
  !*** ./~/react-router/lib/locations/HistoryLocation.js ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var LocationActions = __webpack_require__(/*! ../actions/LocationActions */ 112);
	var History = __webpack_require__(/*! ../History */ 64);

	var _listeners = [];
	var _isListening = false;

	function notifyChange(type) {
	  var change = {
	    path: HistoryLocation.getCurrentPath(),
	    type: type
	  };

	  _listeners.forEach(function (listener) {
	    listener.call(HistoryLocation, change);
	  });
	}

	function onPopState(event) {
	  if (event.state === undefined) {
	    return;
	  } // Ignore extraneous popstate events in WebKit.

	  notifyChange(LocationActions.POP);
	}

	/**
	 * A Location that uses HTML5 history.
	 */
	var HistoryLocation = {

	  addChangeListener: function addChangeListener(listener) {
	    _listeners.push(listener);

	    if (!_isListening) {
	      if (window.addEventListener) {
	        window.addEventListener('popstate', onPopState, false);
	      } else {
	        window.attachEvent('onpopstate', onPopState);
	      }

	      _isListening = true;
	    }
	  },

	  removeChangeListener: function removeChangeListener(listener) {
	    _listeners = _listeners.filter(function (l) {
	      return l !== listener;
	    });

	    if (_listeners.length === 0) {
	      if (window.addEventListener) {
	        window.removeEventListener('popstate', onPopState, false);
	      } else {
	        window.removeEvent('onpopstate', onPopState);
	      }

	      _isListening = false;
	    }
	  },

	  push: function push(path) {
	    window.history.pushState({ path: path }, '', path);
	    History.length += 1;
	    notifyChange(LocationActions.PUSH);
	  },

	  replace: function replace(path) {
	    window.history.replaceState({ path: path }, '', path);
	    notifyChange(LocationActions.REPLACE);
	  },

	  pop: History.back,

	  getCurrentPath: function getCurrentPath() {
	    return decodeURI(window.location.pathname + window.location.search);
	  },

	  toString: function toString() {
	    return '<HistoryLocation>';
	  }

	};

	module.exports = HistoryLocation;

/***/ },
/* 59 */
/*!*********************************************************!*\
  !*** ./~/react-router/lib/locations/RefreshLocation.js ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var HistoryLocation = __webpack_require__(/*! ./HistoryLocation */ 58);
	var History = __webpack_require__(/*! ../History */ 64);

	/**
	 * A Location that uses full page refreshes. This is used as
	 * the fallback for HistoryLocation in browsers that do not
	 * support the HTML5 history API.
	 */
	var RefreshLocation = {

	  push: function push(path) {
	    window.location = path;
	  },

	  replace: function replace(path) {
	    window.location.replace(path);
	  },

	  pop: History.back,

	  getCurrentPath: HistoryLocation.getCurrentPath,

	  toString: function toString() {
	    return '<RefreshLocation>';
	  }

	};

	module.exports = RefreshLocation;

/***/ },
/* 60 */
/*!********************************************************!*\
  !*** ./~/react-router/lib/locations/StaticLocation.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var invariant = __webpack_require__(/*! react/lib/invariant */ 106);

	function throwCannotModify() {
	  invariant(false, 'You cannot modify a static location');
	}

	/**
	 * A location that only ever contains a single path. Useful in
	 * stateless environments like servers where there is no path history,
	 * only the path that was used in the request.
	 */

	var StaticLocation = (function () {
	  function StaticLocation(path) {
	    _classCallCheck(this, StaticLocation);

	    this.path = path;
	  }

	  _createClass(StaticLocation, [{
	    key: 'getCurrentPath',
	    value: function getCurrentPath() {
	      return this.path;
	    }
	  }, {
	    key: 'toString',
	    value: function toString() {
	      return '<StaticLocation path="' + this.path + '">';
	    }
	  }]);

	  return StaticLocation;
	})();

	// TODO: Include these in the above class definition
	// once we can use ES7 property initializers.
	// https://github.com/babel/babel/issues/619

	StaticLocation.prototype.push = throwCannotModify;
	StaticLocation.prototype.replace = throwCannotModify;
	StaticLocation.prototype.pop = throwCannotModify;

	module.exports = StaticLocation;

/***/ },
/* 61 */
/*!******************************************************!*\
  !*** ./~/react-router/lib/locations/TestLocation.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var invariant = __webpack_require__(/*! react/lib/invariant */ 106);
	var LocationActions = __webpack_require__(/*! ../actions/LocationActions */ 112);
	var History = __webpack_require__(/*! ../History */ 64);

	/**
	 * A location that is convenient for testing and does not require a DOM.
	 */

	var TestLocation = (function () {
	  function TestLocation(history) {
	    _classCallCheck(this, TestLocation);

	    this.history = history || [];
	    this.listeners = [];
	    this._updateHistoryLength();
	  }

	  _createClass(TestLocation, [{
	    key: 'needsDOM',
	    get: function () {
	      return false;
	    }
	  }, {
	    key: '_updateHistoryLength',
	    value: function _updateHistoryLength() {
	      History.length = this.history.length;
	    }
	  }, {
	    key: '_notifyChange',
	    value: function _notifyChange(type) {
	      var change = {
	        path: this.getCurrentPath(),
	        type: type
	      };

	      for (var i = 0, len = this.listeners.length; i < len; ++i) this.listeners[i].call(this, change);
	    }
	  }, {
	    key: 'addChangeListener',
	    value: function addChangeListener(listener) {
	      this.listeners.push(listener);
	    }
	  }, {
	    key: 'removeChangeListener',
	    value: function removeChangeListener(listener) {
	      this.listeners = this.listeners.filter(function (l) {
	        return l !== listener;
	      });
	    }
	  }, {
	    key: 'push',
	    value: function push(path) {
	      this.history.push(path);
	      this._updateHistoryLength();
	      this._notifyChange(LocationActions.PUSH);
	    }
	  }, {
	    key: 'replace',
	    value: function replace(path) {
	      invariant(this.history.length, 'You cannot replace the current path with no history');

	      this.history[this.history.length - 1] = path;

	      this._notifyChange(LocationActions.REPLACE);
	    }
	  }, {
	    key: 'pop',
	    value: function pop() {
	      this.history.pop();
	      this._updateHistoryLength();
	      this._notifyChange(LocationActions.POP);
	    }
	  }, {
	    key: 'getCurrentPath',
	    value: function getCurrentPath() {
	      return this.history[this.history.length - 1];
	    }
	  }, {
	    key: 'toString',
	    value: function toString() {
	      return '<TestLocation>';
	    }
	  }]);

	  return TestLocation;
	})();

	module.exports = TestLocation;

/***/ },
/* 62 */
/*!****************************************************************!*\
  !*** ./~/react-router/lib/behaviors/ImitateBrowserBehavior.js ***!
  \****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var LocationActions = __webpack_require__(/*! ../actions/LocationActions */ 112);

	/**
	 * A scroll behavior that attempts to imitate the default behavior
	 * of modern browsers.
	 */
	var ImitateBrowserBehavior = {

	  updateScrollPosition: function updateScrollPosition(position, actionType) {
	    switch (actionType) {
	      case LocationActions.PUSH:
	      case LocationActions.REPLACE:
	        window.scrollTo(0, 0);
	        break;
	      case LocationActions.POP:
	        if (position) {
	          window.scrollTo(position.x, position.y);
	        } else {
	          window.scrollTo(0, 0);
	        }
	        break;
	    }
	  }

	};

	module.exports = ImitateBrowserBehavior;

/***/ },
/* 63 */
/*!*************************************************************!*\
  !*** ./~/react-router/lib/behaviors/ScrollToTopBehavior.js ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * A scroll behavior that always scrolls to the top of the page
	 * after a transition.
	 */
	"use strict";

	var ScrollToTopBehavior = {

	  updateScrollPosition: function updateScrollPosition() {
	    window.scrollTo(0, 0);
	  }

	};

	module.exports = ScrollToTopBehavior;

/***/ },
/* 64 */
/*!***************************************!*\
  !*** ./~/react-router/lib/History.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var invariant = __webpack_require__(/*! react/lib/invariant */ 106);
	var canUseDOM = __webpack_require__(/*! react/lib/ExecutionEnvironment */ 107).canUseDOM;

	var History = {

	  /**
	   * The current number of entries in the history.
	   *
	   * Note: This property is read-only.
	   */
	  length: 1,

	  /**
	   * Sends the browser back one entry in the history.
	   */
	  back: function back() {
	    invariant(canUseDOM, 'Cannot use History.back without a DOM');

	    // Do this first so that History.length will
	    // be accurate in location change listeners.
	    History.length -= 1;

	    window.history.back();
	  }

	};

	module.exports = History;

/***/ },
/* 65 */
/*!******************************************!*\
  !*** ./~/react-router/lib/Navigation.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var PropTypes = __webpack_require__(/*! ./PropTypes */ 110);

	/**
	 * A mixin for components that modify the URL.
	 *
	 * Example:
	 *
	 *   var MyLink = React.createClass({
	 *     mixins: [ Router.Navigation ],
	 *     handleClick(event) {
	 *       event.preventDefault();
	 *       this.transitionTo('aRoute', { the: 'params' }, { the: 'query' });
	 *     },
	 *     render() {
	 *       return (
	 *         <a onClick={this.handleClick}>Click me!</a>
	 *       );
	 *     }
	 *   });
	 */
	var Navigation = {

	  contextTypes: {
	    router: PropTypes.router.isRequired
	  },

	  /**
	   * Returns an absolute URL path created from the given route
	   * name, URL parameters, and query values.
	   */
	  makePath: function makePath(to, params, query) {
	    return this.context.router.makePath(to, params, query);
	  },

	  /**
	   * Returns a string that may safely be used as the href of a
	   * link to the route with the given name.
	   */
	  makeHref: function makeHref(to, params, query) {
	    return this.context.router.makeHref(to, params, query);
	  },

	  /**
	   * Transitions to the URL specified in the arguments by pushing
	   * a new URL onto the history stack.
	   */
	  transitionTo: function transitionTo(to, params, query) {
	    this.context.router.transitionTo(to, params, query);
	  },

	  /**
	   * Transitions to the URL specified in the arguments by replacing
	   * the current URL in the history stack.
	   */
	  replaceWith: function replaceWith(to, params, query) {
	    this.context.router.replaceWith(to, params, query);
	  },

	  /**
	   * Transitions to the previous URL.
	   */
	  goBack: function goBack() {
	    return this.context.router.goBack();
	  }

	};

	module.exports = Navigation;

/***/ },
/* 66 */
/*!*************************************!*\
  !*** ./~/react-router/lib/State.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var PropTypes = __webpack_require__(/*! ./PropTypes */ 110);

	/**
	 * A mixin for components that need to know the path, routes, URL
	 * params and query that are currently active.
	 *
	 * Example:
	 *
	 *   var AboutLink = React.createClass({
	 *     mixins: [ Router.State ],
	 *     render() {
	 *       var className = this.props.className;
	 *
	 *       if (this.isActive('about'))
	 *         className += ' is-active';
	 *
	 *       return React.DOM.a({ className: className }, this.props.children);
	 *     }
	 *   });
	 */
	var State = {

	  contextTypes: {
	    router: PropTypes.router.isRequired
	  },

	  /**
	   * Returns the current URL path.
	   */
	  getPath: function getPath() {
	    return this.context.router.getCurrentPath();
	  },

	  /**
	   * Returns the current URL path without the query string.
	   */
	  getPathname: function getPathname() {
	    return this.context.router.getCurrentPathname();
	  },

	  /**
	   * Returns an object of the URL params that are currently active.
	   */
	  getParams: function getParams() {
	    return this.context.router.getCurrentParams();
	  },

	  /**
	   * Returns an object of the query params that are currently active.
	   */
	  getQuery: function getQuery() {
	    return this.context.router.getCurrentQuery();
	  },

	  /**
	   * Returns an array of the routes that are currently active.
	   */
	  getRoutes: function getRoutes() {
	    return this.context.router.getCurrentRoutes();
	  },

	  /**
	   * A helper method to determine if a given route, params, and query
	   * are active.
	   */
	  isActive: function isActive(to, params, query) {
	    return this.context.router.isActive(to, params, query);
	  }

	};

	module.exports = State;

/***/ },
/* 67 */
/*!*************************************!*\
  !*** ./~/react-router/lib/Route.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var assign = __webpack_require__(/*! react/lib/Object.assign */ 105);
	var invariant = __webpack_require__(/*! react/lib/invariant */ 106);
	var warning = __webpack_require__(/*! react/lib/warning */ 108);
	var PathUtils = __webpack_require__(/*! ./PathUtils */ 113);

	var _currentRoute;

	var Route = (function () {
	  function Route(name, path, ignoreScrollBehavior, isDefault, isNotFound, onEnter, onLeave, handler) {
	    _classCallCheck(this, Route);

	    this.name = name;
	    this.path = path;
	    this.paramNames = PathUtils.extractParamNames(this.path);
	    this.ignoreScrollBehavior = !!ignoreScrollBehavior;
	    this.isDefault = !!isDefault;
	    this.isNotFound = !!isNotFound;
	    this.onEnter = onEnter;
	    this.onLeave = onLeave;
	    this.handler = handler;
	  }

	  _createClass(Route, [{
	    key: 'appendChild',

	    /**
	     * Appends the given route to this route's child routes.
	     */
	    value: function appendChild(route) {
	      invariant(route instanceof Route, 'route.appendChild must use a valid Route');

	      if (!this.childRoutes) this.childRoutes = [];

	      this.childRoutes.push(route);
	    }
	  }, {
	    key: 'toString',
	    value: function toString() {
	      var string = '<Route';

	      if (this.name) string += ' name="' + this.name + '"';

	      string += ' path="' + this.path + '">';

	      return string;
	    }
	  }], [{
	    key: 'createRoute',

	    /**
	     * Creates and returns a new route. Options may be a URL pathname string
	     * with placeholders for named params or an object with any of the following
	     * properties:
	     *
	     * - name                     The name of the route. This is used to lookup a
	     *                            route relative to its parent route and should be
	     *                            unique among all child routes of the same parent
	     * - path                     A URL pathname string with optional placeholders
	     *                            that specify the names of params to extract from
	     *                            the URL when the path matches. Defaults to `/${name}`
	     *                            when there is a name given, or the path of the parent
	     *                            route, or /
	     * - ignoreScrollBehavior     True to make this route (and all descendants) ignore
	     *                            the scroll behavior of the router
	     * - isDefault                True to make this route the default route among all
	     *                            its siblings
	     * - isNotFound               True to make this route the "not found" route among
	     *                            all its siblings
	     * - onEnter                  A transition hook that will be called when the
	     *                            router is going to enter this route
	     * - onLeave                  A transition hook that will be called when the
	     *                            router is going to leave this route
	     * - handler                  A React component that will be rendered when
	     *                            this route is active
	     * - parentRoute              The parent route to use for this route. This option
	     *                            is automatically supplied when creating routes inside
	     *                            the callback to another invocation of createRoute. You
	     *                            only ever need to use this when declaring routes
	     *                            independently of one another to manually piece together
	     *                            the route hierarchy
	     *
	     * The callback may be used to structure your route hierarchy. Any call to
	     * createRoute, createDefaultRoute, createNotFoundRoute, or createRedirect
	     * inside the callback automatically uses this route as its parent.
	     */
	    value: function createRoute(options, callback) {
	      options = options || {};

	      if (typeof options === 'string') options = { path: options };

	      var parentRoute = _currentRoute;

	      if (parentRoute) {
	        warning(options.parentRoute == null || options.parentRoute === parentRoute, 'You should not use parentRoute with createRoute inside another route\'s child callback; it is ignored');
	      } else {
	        parentRoute = options.parentRoute;
	      }

	      var name = options.name;
	      var path = options.path || name;

	      if (path && !(options.isDefault || options.isNotFound)) {
	        if (PathUtils.isAbsolute(path)) {
	          if (parentRoute) {
	            invariant(path === parentRoute.path || parentRoute.paramNames.length === 0, 'You cannot nest path "%s" inside "%s"; the parent requires URL parameters', path, parentRoute.path);
	          }
	        } else if (parentRoute) {
	          // Relative paths extend their parent.
	          path = PathUtils.join(parentRoute.path, path);
	        } else {
	          path = '/' + path;
	        }
	      } else {
	        path = parentRoute ? parentRoute.path : '/';
	      }

	      if (options.isNotFound && !/\*$/.test(path)) path += '*'; // Auto-append * to the path of not found routes.

	      var route = new Route(name, path, options.ignoreScrollBehavior, options.isDefault, options.isNotFound, options.onEnter, options.onLeave, options.handler);

	      if (parentRoute) {
	        if (route.isDefault) {
	          invariant(parentRoute.defaultRoute == null, '%s may not have more than one default route', parentRoute);

	          parentRoute.defaultRoute = route;
	        } else if (route.isNotFound) {
	          invariant(parentRoute.notFoundRoute == null, '%s may not have more than one not found route', parentRoute);

	          parentRoute.notFoundRoute = route;
	        }

	        parentRoute.appendChild(route);
	      }

	      // Any routes created in the callback
	      // use this route as their parent.
	      if (typeof callback === 'function') {
	        var currentRoute = _currentRoute;
	        _currentRoute = route;
	        callback.call(route, route);
	        _currentRoute = currentRoute;
	      }

	      return route;
	    }
	  }, {
	    key: 'createDefaultRoute',

	    /**
	     * Creates and returns a route that is rendered when its parent matches
	     * the current URL.
	     */
	    value: function createDefaultRoute(options) {
	      return Route.createRoute(assign({}, options, { isDefault: true }));
	    }
	  }, {
	    key: 'createNotFoundRoute',

	    /**
	     * Creates and returns a route that is rendered when its parent matches
	     * the current URL but none of its siblings do.
	     */
	    value: function createNotFoundRoute(options) {
	      return Route.createRoute(assign({}, options, { isNotFound: true }));
	    }
	  }, {
	    key: 'createRedirect',

	    /**
	     * Creates and returns a route that automatically redirects the transition
	     * to another route. In addition to the normal options to createRoute, this
	     * function accepts the following options:
	     *
	     * - from         An alias for the `path` option. Defaults to *
	     * - to           The path/route/route name to redirect to
	     * - params       The params to use in the redirect URL. Defaults
	     *                to using the current params
	     * - query        The query to use in the redirect URL. Defaults
	     *                to using the current query
	     */
	    value: function createRedirect(options) {
	      return Route.createRoute(assign({}, options, {
	        path: options.path || options.from || '*',
	        onEnter: function onEnter(transition, params, query) {
	          transition.redirect(options.to, options.params || params, options.query || query);
	        }
	      }));
	    }
	  }]);

	  return Route;
	})();

	module.exports = Route;

/***/ },
/* 68 */
/*!*************************************************************!*\
  !*** ./~/react-router/lib/createRoutesFromReactChildren.js ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* jshint -W084 */
	'use strict';

	var React = __webpack_require__(/*! react */ 1);
	var assign = __webpack_require__(/*! react/lib/Object.assign */ 105);
	var warning = __webpack_require__(/*! react/lib/warning */ 108);
	var DefaultRoute = __webpack_require__(/*! ./components/DefaultRoute */ 51);
	var NotFoundRoute = __webpack_require__(/*! ./components/NotFoundRoute */ 53);
	var Redirect = __webpack_require__(/*! ./components/Redirect */ 54);
	var Route = __webpack_require__(/*! ./Route */ 67);

	function checkPropTypes(componentName, propTypes, props) {
	  componentName = componentName || 'UnknownComponent';

	  for (var propName in propTypes) {
	    if (propTypes.hasOwnProperty(propName)) {
	      var error = propTypes[propName](props, propName, componentName);

	      if (error instanceof Error) warning(false, error.message);
	    }
	  }
	}

	function createRouteOptions(props) {
	  var options = assign({}, props);
	  var handler = options.handler;

	  if (handler) {
	    options.onEnter = handler.willTransitionTo;
	    options.onLeave = handler.willTransitionFrom;
	  }

	  return options;
	}

	function createRouteFromReactElement(element) {
	  if (!React.isValidElement(element)) {
	    return;
	  }var type = element.type;
	  var props = assign({}, type.defaultProps, element.props);

	  if (type.propTypes) checkPropTypes(type.displayName, type.propTypes, props);

	  if (type === DefaultRoute) {
	    return Route.createDefaultRoute(createRouteOptions(props));
	  }if (type === NotFoundRoute) {
	    return Route.createNotFoundRoute(createRouteOptions(props));
	  }if (type === Redirect) {
	    return Route.createRedirect(createRouteOptions(props));
	  }return Route.createRoute(createRouteOptions(props), function () {
	    if (props.children) createRoutesFromReactChildren(props.children);
	  });
	}

	/**
	 * Creates and returns an array of routes created from the given
	 * ReactChildren, all of which should be one of <Route>, <DefaultRoute>,
	 * <NotFoundRoute>, or <Redirect>, e.g.:
	 *
	 *   var { createRoutesFromReactChildren, Route, Redirect } = require('react-router');
	 *
	 *   var routes = createRoutesFromReactChildren(
	 *     <Route path="/" handler={App}>
	 *       <Route name="user" path="/user/:userId" handler={User}>
	 *         <Route name="task" path="tasks/:taskId" handler={Task}/>
	 *         <Redirect from="todos/:taskId" to="task"/>
	 *       </Route>
	 *     </Route>
	 *   );
	 */
	function createRoutesFromReactChildren(children) {
	  var routes = [];

	  React.Children.forEach(children, function (child) {
	    if (child = createRouteFromReactElement(child)) routes.push(child);
	  });

	  return routes;
	}

	module.exports = createRoutesFromReactChildren;

/***/ },
/* 69 */
/*!********************************************!*\
  !*** ./~/react-router/lib/createRouter.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	/* jshint -W058 */
	'use strict';

	var React = __webpack_require__(/*! react */ 1);
	var warning = __webpack_require__(/*! react/lib/warning */ 108);
	var invariant = __webpack_require__(/*! react/lib/invariant */ 106);
	var canUseDOM = __webpack_require__(/*! react/lib/ExecutionEnvironment */ 107).canUseDOM;
	var LocationActions = __webpack_require__(/*! ./actions/LocationActions */ 112);
	var ImitateBrowserBehavior = __webpack_require__(/*! ./behaviors/ImitateBrowserBehavior */ 62);
	var HashLocation = __webpack_require__(/*! ./locations/HashLocation */ 57);
	var HistoryLocation = __webpack_require__(/*! ./locations/HistoryLocation */ 58);
	var RefreshLocation = __webpack_require__(/*! ./locations/RefreshLocation */ 59);
	var StaticLocation = __webpack_require__(/*! ./locations/StaticLocation */ 60);
	var ScrollHistory = __webpack_require__(/*! ./ScrollHistory */ 114);
	var createRoutesFromReactChildren = __webpack_require__(/*! ./createRoutesFromReactChildren */ 68);
	var isReactChildren = __webpack_require__(/*! ./isReactChildren */ 115);
	var Transition = __webpack_require__(/*! ./Transition */ 116);
	var PropTypes = __webpack_require__(/*! ./PropTypes */ 110);
	var Redirect = __webpack_require__(/*! ./Redirect */ 117);
	var History = __webpack_require__(/*! ./History */ 64);
	var Cancellation = __webpack_require__(/*! ./Cancellation */ 118);
	var Match = __webpack_require__(/*! ./Match */ 119);
	var Route = __webpack_require__(/*! ./Route */ 67);
	var supportsHistory = __webpack_require__(/*! ./supportsHistory */ 120);
	var PathUtils = __webpack_require__(/*! ./PathUtils */ 113);

	/**
	 * The default location for new routers.
	 */
	var DEFAULT_LOCATION = canUseDOM ? HashLocation : '/';

	/**
	 * The default scroll behavior for new routers.
	 */
	var DEFAULT_SCROLL_BEHAVIOR = canUseDOM ? ImitateBrowserBehavior : null;

	function hasProperties(object, properties) {
	  for (var propertyName in properties) if (properties.hasOwnProperty(propertyName) && object[propertyName] !== properties[propertyName]) {
	    return false;
	  }return true;
	}

	function hasMatch(routes, route, prevParams, nextParams, prevQuery, nextQuery) {
	  return routes.some(function (r) {
	    if (r !== route) return false;

	    var paramNames = route.paramNames;
	    var paramName;

	    // Ensure that all params the route cares about did not change.
	    for (var i = 0, len = paramNames.length; i < len; ++i) {
	      paramName = paramNames[i];

	      if (nextParams[paramName] !== prevParams[paramName]) return false;
	    }

	    // Ensure the query hasn't changed.
	    return hasProperties(prevQuery, nextQuery) && hasProperties(nextQuery, prevQuery);
	  });
	}

	function addRoutesToNamedRoutes(routes, namedRoutes) {
	  var route;
	  for (var i = 0, len = routes.length; i < len; ++i) {
	    route = routes[i];

	    if (route.name) {
	      invariant(namedRoutes[route.name] == null, 'You may not have more than one route named "%s"', route.name);

	      namedRoutes[route.name] = route;
	    }

	    if (route.childRoutes) addRoutesToNamedRoutes(route.childRoutes, namedRoutes);
	  }
	}

	function routeIsActive(activeRoutes, routeName) {
	  return activeRoutes.some(function (route) {
	    return route.name === routeName;
	  });
	}

	function paramsAreActive(activeParams, params) {
	  for (var property in params) if (String(activeParams[property]) !== String(params[property])) {
	    return false;
	  }return true;
	}

	function queryIsActive(activeQuery, query) {
	  for (var property in query) if (String(activeQuery[property]) !== String(query[property])) {
	    return false;
	  }return true;
	}

	/**
	 * Creates and returns a new router using the given options. A router
	 * is a ReactComponent class that knows how to react to changes in the
	 * URL and keep the contents of the page in sync.
	 *
	 * Options may be any of the following:
	 *
	 * - routes           (required) The route config
	 * - location         The location to use. Defaults to HashLocation when
	 *                    the DOM is available, "/" otherwise
	 * - scrollBehavior   The scroll behavior to use. Defaults to ImitateBrowserBehavior
	 *                    when the DOM is available, null otherwise
	 * - onError          A function that is used to handle errors
	 * - onAbort          A function that is used to handle aborted transitions
	 *
	 * When rendering in a server-side environment, the location should simply
	 * be the URL path that was used in the request, including the query string.
	 */
	function createRouter(options) {
	  options = options || {};

	  if (isReactChildren(options)) options = { routes: options };

	  var mountedComponents = [];
	  var location = options.location || DEFAULT_LOCATION;
	  var scrollBehavior = options.scrollBehavior || DEFAULT_SCROLL_BEHAVIOR;
	  var state = {};
	  var nextState = {};
	  var pendingTransition = null;
	  var dispatchHandler = null;

	  if (typeof location === 'string') location = new StaticLocation(location);

	  if (location instanceof StaticLocation) {
	    warning(!canUseDOM || ("production") === 'test', 'You should not use a static location in a DOM environment because ' + 'the router will not be kept in sync with the current URL');
	  } else {
	    invariant(canUseDOM || location.needsDOM === false, 'You cannot use %s without a DOM', location);
	  }

	  // Automatically fall back to full page refreshes in
	  // browsers that don't support the HTML history API.
	  if (location === HistoryLocation && !supportsHistory()) location = RefreshLocation;

	  var Router = React.createClass({

	    displayName: 'Router',

	    statics: {

	      isRunning: false,

	      cancelPendingTransition: function cancelPendingTransition() {
	        if (pendingTransition) {
	          pendingTransition.cancel();
	          pendingTransition = null;
	        }
	      },

	      clearAllRoutes: function clearAllRoutes() {
	        Router.cancelPendingTransition();
	        Router.namedRoutes = {};
	        Router.routes = [];
	      },

	      /**
	       * Adds routes to this router from the given children object (see ReactChildren).
	       */
	      addRoutes: function addRoutes(routes) {
	        if (isReactChildren(routes)) routes = createRoutesFromReactChildren(routes);

	        addRoutesToNamedRoutes(routes, Router.namedRoutes);

	        Router.routes.push.apply(Router.routes, routes);
	      },

	      /**
	       * Replaces routes of this router from the given children object (see ReactChildren).
	       */
	      replaceRoutes: function replaceRoutes(routes) {
	        Router.clearAllRoutes();
	        Router.addRoutes(routes);
	        Router.refresh();
	      },

	      /**
	       * Performs a match of the given path against this router and returns an object
	       * with the { routes, params, pathname, query } that match. Returns null if no
	       * match can be made.
	       */
	      match: function match(path) {
	        return Match.findMatch(Router.routes, path);
	      },

	      /**
	       * Returns an absolute URL path created from the given route
	       * name, URL parameters, and query.
	       */
	      makePath: function makePath(to, params, query) {
	        var path;
	        if (PathUtils.isAbsolute(to)) {
	          path = to;
	        } else {
	          var route = to instanceof Route ? to : Router.namedRoutes[to];

	          invariant(route instanceof Route, 'Cannot find a route named "%s"', to);

	          path = route.path;
	        }

	        return PathUtils.withQuery(PathUtils.injectParams(path, params), query);
	      },

	      /**
	       * Returns a string that may safely be used as the href of a link
	       * to the route with the given name, URL parameters, and query.
	       */
	      makeHref: function makeHref(to, params, query) {
	        var path = Router.makePath(to, params, query);
	        return location === HashLocation ? '#' + path : path;
	      },

	      /**
	       * Transitions to the URL specified in the arguments by pushing
	       * a new URL onto the history stack.
	       */
	      transitionTo: function transitionTo(to, params, query) {
	        var path = Router.makePath(to, params, query);

	        if (pendingTransition) {
	          // Replace so pending location does not stay in history.
	          location.replace(path);
	        } else {
	          location.push(path);
	        }
	      },

	      /**
	       * Transitions to the URL specified in the arguments by replacing
	       * the current URL in the history stack.
	       */
	      replaceWith: function replaceWith(to, params, query) {
	        location.replace(Router.makePath(to, params, query));
	      },

	      /**
	       * Transitions to the previous URL if one is available. Returns true if the
	       * router was able to go back, false otherwise.
	       *
	       * Note: The router only tracks history entries in your application, not the
	       * current browser session, so you can safely call this function without guarding
	       * against sending the user back to some other site. However, when using
	       * RefreshLocation (which is the fallback for HistoryLocation in browsers that
	       * don't support HTML5 history) this method will *always* send the client back
	       * because we cannot reliably track history length.
	       */
	      goBack: function goBack() {
	        if (History.length > 1 || location === RefreshLocation) {
	          location.pop();
	          return true;
	        }

	        warning(false, 'goBack() was ignored because there is no router history');

	        return false;
	      },

	      handleAbort: options.onAbort || function (abortReason) {
	        if (location instanceof StaticLocation) throw new Error('Unhandled aborted transition! Reason: ' + abortReason);

	        if (abortReason instanceof Cancellation) {
	          return;
	        } else if (abortReason instanceof Redirect) {
	          location.replace(Router.makePath(abortReason.to, abortReason.params, abortReason.query));
	        } else {
	          location.pop();
	        }
	      },

	      handleError: options.onError || function (error) {
	        // Throw so we don't silently swallow async errors.
	        throw error; // This error probably originated in a transition hook.
	      },

	      handleLocationChange: function handleLocationChange(change) {
	        Router.dispatch(change.path, change.type);
	      },

	      /**
	       * Performs a transition to the given path and calls callback(error, abortReason)
	       * when the transition is finished. If both arguments are null the router's state
	       * was updated. Otherwise the transition did not complete.
	       *
	       * In a transition, a router first determines which routes are involved by beginning
	       * with the current route, up the route tree to the first parent route that is shared
	       * with the destination route, and back down the tree to the destination route. The
	       * willTransitionFrom hook is invoked on all route handlers we're transitioning away
	       * from, in reverse nesting order. Likewise, the willTransitionTo hook is invoked on
	       * all route handlers we're transitioning to.
	       *
	       * Both willTransitionFrom and willTransitionTo hooks may either abort or redirect the
	       * transition. To resolve asynchronously, they may use the callback argument. If no
	       * hooks wait, the transition is fully synchronous.
	       */
	      dispatch: function dispatch(path, action) {
	        Router.cancelPendingTransition();

	        var prevPath = state.path;
	        var isRefreshing = action == null;

	        if (prevPath === path && !isRefreshing) {
	          return;
	        } // Nothing to do!

	        // Record the scroll position as early as possible to
	        // get it before browsers try update it automatically.
	        if (prevPath && action === LocationActions.PUSH) Router.recordScrollPosition(prevPath);

	        var match = Router.match(path);

	        warning(match != null, 'No route matches path "%s". Make sure you have <Route path="%s"> somewhere in your routes', path, path);

	        if (match == null) match = {};

	        var prevRoutes = state.routes || [];
	        var prevParams = state.params || {};
	        var prevQuery = state.query || {};

	        var nextRoutes = match.routes || [];
	        var nextParams = match.params || {};
	        var nextQuery = match.query || {};

	        var fromRoutes, toRoutes;
	        if (prevRoutes.length) {
	          fromRoutes = prevRoutes.filter(function (route) {
	            return !hasMatch(nextRoutes, route, prevParams, nextParams, prevQuery, nextQuery);
	          });

	          toRoutes = nextRoutes.filter(function (route) {
	            return !hasMatch(prevRoutes, route, prevParams, nextParams, prevQuery, nextQuery);
	          });
	        } else {
	          fromRoutes = [];
	          toRoutes = nextRoutes;
	        }

	        var transition = new Transition(path, Router.replaceWith.bind(Router, path));
	        pendingTransition = transition;

	        var fromComponents = mountedComponents.slice(prevRoutes.length - fromRoutes.length);

	        Transition.from(transition, fromRoutes, fromComponents, function (error) {
	          if (error || transition.abortReason) return dispatchHandler.call(Router, error, transition); // No need to continue.

	          Transition.to(transition, toRoutes, nextParams, nextQuery, function (error) {
	            dispatchHandler.call(Router, error, transition, {
	              path: path,
	              action: action,
	              pathname: match.pathname,
	              routes: nextRoutes,
	              params: nextParams,
	              query: nextQuery
	            });
	          });
	        });
	      },

	      /**
	       * Starts this router and calls callback(router, state) when the route changes.
	       *
	       * If the router's location is static (i.e. a URL path in a server environment)
	       * the callback is called only once. Otherwise, the location should be one of the
	       * Router.*Location objects (e.g. Router.HashLocation or Router.HistoryLocation).
	       */
	      run: function run(callback) {
	        invariant(!Router.isRunning, 'Router is already running');

	        dispatchHandler = function (error, transition, newState) {
	          if (error) Router.handleError(error);

	          if (pendingTransition !== transition) return;

	          pendingTransition = null;

	          if (transition.abortReason) {
	            Router.handleAbort(transition.abortReason);
	          } else {
	            callback.call(Router, Router, nextState = newState);
	          }
	        };

	        if (!(location instanceof StaticLocation)) {
	          if (location.addChangeListener) location.addChangeListener(Router.handleLocationChange);

	          Router.isRunning = true;
	        }

	        // Bootstrap using the current path.
	        Router.refresh();
	      },

	      refresh: function refresh() {
	        Router.dispatch(location.getCurrentPath(), null);
	      },

	      stop: function stop() {
	        Router.cancelPendingTransition();

	        if (location.removeChangeListener) location.removeChangeListener(Router.handleLocationChange);

	        Router.isRunning = false;
	      },

	      getLocation: function getLocation() {
	        return location;
	      },

	      getScrollBehavior: function getScrollBehavior() {
	        return scrollBehavior;
	      },

	      getRouteAtDepth: function getRouteAtDepth(routeDepth) {
	        var routes = state.routes;
	        return routes && routes[routeDepth];
	      },

	      setRouteComponentAtDepth: function setRouteComponentAtDepth(routeDepth, component) {
	        mountedComponents[routeDepth] = component;
	      },

	      /**
	       * Returns the current URL path + query string.
	       */
	      getCurrentPath: function getCurrentPath() {
	        return state.path;
	      },

	      /**
	       * Returns the current URL path without the query string.
	       */
	      getCurrentPathname: function getCurrentPathname() {
	        return state.pathname;
	      },

	      /**
	       * Returns an object of the currently active URL parameters.
	       */
	      getCurrentParams: function getCurrentParams() {
	        return state.params;
	      },

	      /**
	       * Returns an object of the currently active query parameters.
	       */
	      getCurrentQuery: function getCurrentQuery() {
	        return state.query;
	      },

	      /**
	       * Returns an array of the currently active routes.
	       */
	      getCurrentRoutes: function getCurrentRoutes() {
	        return state.routes;
	      },

	      /**
	       * Returns true if the given route, params, and query are active.
	       */
	      isActive: function isActive(to, params, query) {
	        if (PathUtils.isAbsolute(to)) {
	          return to === state.path;
	        }return routeIsActive(state.routes, to) && paramsAreActive(state.params, params) && (query == null || queryIsActive(state.query, query));
	      }

	    },

	    mixins: [ScrollHistory],

	    propTypes: {
	      children: PropTypes.falsy
	    },

	    childContextTypes: {
	      routeDepth: PropTypes.number.isRequired,
	      router: PropTypes.router.isRequired
	    },

	    getChildContext: function getChildContext() {
	      return {
	        routeDepth: 1,
	        router: Router
	      };
	    },

	    getInitialState: function getInitialState() {
	      return state = nextState;
	    },

	    componentWillReceiveProps: function componentWillReceiveProps() {
	      this.setState(state = nextState);
	    },

	    componentWillUnmount: function componentWillUnmount() {
	      Router.stop();
	    },

	    render: function render() {
	      var route = Router.getRouteAtDepth(0);
	      return route ? React.createElement(route.handler, this.props) : null;
	    }

	  });

	  Router.clearAllRoutes();

	  if (options.routes) Router.addRoutes(options.routes);

	  return Router;
	}

	module.exports = createRouter;

/***/ },
/* 70 */
/*!*****************************************!*\
  !*** ./~/react-router/lib/runRouter.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var createRouter = __webpack_require__(/*! ./createRouter */ 69);

	/**
	 * A high-level convenience method that creates, configures, and
	 * runs a router in one shot. The method signature is:
	 *
	 *   Router.run(routes[, location ], callback);
	 *
	 * Using `window.location.hash` to manage the URL, you could do:
	 *
	 *   Router.run(routes, function (Handler) {
	 *     React.render(<Handler/>, document.body);
	 *   });
	 * 
	 * Using HTML5 history and a custom "cursor" prop:
	 * 
	 *   Router.run(routes, Router.HistoryLocation, function (Handler) {
	 *     React.render(<Handler cursor={cursor}/>, document.body);
	 *   });
	 *
	 * Returns the newly created router.
	 *
	 * Note: If you need to specify further options for your router such
	 * as error/abort handling or custom scroll behavior, use Router.create
	 * instead.
	 *
	 *   var router = Router.create(options);
	 *   router.run(function (Handler) {
	 *     // ...
	 *   });
	 */
	function runRouter(routes, location, callback) {
	  if (typeof location === 'function') {
	    callback = location;
	    location = null;
	  }

	  var router = createRouter({
	    routes: routes,
	    location: location
	  });

	  router.run(callback);

	  return router;
	}

	module.exports = runRouter;

/***/ },
/* 71 */
/*!**************************************************!*\
  !*** ./app/components/Legislator/Legislator.css ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = {};

/***/ },
/* 72 */
/*!***************************************************************!*\
  !*** ./app/components/Legislator/images/avatar ^\.\/.*\.png$ ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./丁守中.png": 124,
		"./何欣純.png": 125,
		"./劉建國.png": 126,
		"./劉櫂豪.png": 127,
		"./吳宜臻.png": 128,
		"./吳秉叡.png": 129,
		"./吳育仁.png": 130,
		"./吳育昇.png": 131,
		"./呂學樟.png": 132,
		"./呂玉玲.png": 133,
		"./周倪安.png": 134,
		"./姚文智.png": 135,
		"./孔文吉.png": 136,
		"./孫大千.png": 137,
		"./尤美女.png": 138,
		"./廖國棟.png": 139,
		"./廖正井.png": 140,
		"./張嘉郡.png": 141,
		"./張慶忠.png": 142,
		"./徐少萍.png": 143,
		"./徐欣瑩.png": 144,
		"./徐耀昌.png": 145,
		"./曾巨威.png": 146,
		"./李俊俋.png": 147,
		"./李慶華.png": 148,
		"./李應元.png": 149,
		"./李昆澤.png": 150,
		"./李桐豪.png": 151,
		"./李貴敏.png": 152,
		"./李鴻鈞.png": 153,
		"./林佳龍.png": 154,
		"./林國正.png": 155,
		"./林岱樺.png": 156,
		"./林德福.png": 157,
		"./林明溱.png": 158,
		"./林淑芬.png": 159,
		"./林滄敏.png": 160,
		"./林郁方.png": 161,
		"./林鴻池.png": 162,
		"./柯建銘.png": 163,
		"./楊應雄.png": 164,
		"./楊曜.png": 165,
		"./楊玉欣.png": 166,
		"./楊瓊瓔.png": 167,
		"./楊麗環.png": 168,
		"./段宜康.png": 169,
		"./江啟臣.png": 170,
		"./江惠貞.png": 171,
		"./洪秀柱.png": 172,
		"./潘孟安.png": 173,
		"./潘維剛.png": 174,
		"./王廷升.png": 175,
		"./王惠美.png": 176,
		"./王育敏.png": 177,
		"./王進士.png": 178,
		"./王金平.png": 179,
		"./田秋堇.png": 180,
		"./盧嘉辰.png": 181,
		"./盧秀燕.png": 182,
		"./管碧玲.png": 183,
		"./簡東明.png": 184,
		"./紀國棟.png": 185,
		"./羅明才.png": 186,
		"./羅淑蕾.png": 187,
		"./翁重鈞.png": 188,
		"./葉宜津.png": 189,
		"./葉津鈴.png": 190,
		"./蔡其昌.png": 191,
		"./蔡正元.png": 192,
		"./蔡煌瑯.png": 193,
		"./蔡錦隆.png": 194,
		"./蔣乃辛.png": 195,
		"./蕭美琴.png": 196,
		"./薛凌.png": 197,
		"./蘇清泉.png": 198,
		"./蘇震清.png": 199,
		"./許忠信.png": 200,
		"./許智傑.png": 201,
		"./許添財.png": 202,
		"./詹凱臣.png": 203,
		"./謝國樑.png": 204,
		"./費鴻泰.png": 205,
		"./賴士葆.png": 206,
		"./賴振昌.png": 207,
		"./趙天麟.png": 208,
		"./邱志偉.png": 209,
		"./邱文彥.png": 210,
		"./邱議瑩.png": 211,
		"./鄭天財.png": 212,
		"./鄭汝芬.png": 213,
		"./鄭麗君.png": 214,
		"./陳亭妃.png": 215,
		"./陳其邁.png": 216,
		"./陳唐山.png": 217,
		"./陳學聖.png": 218,
		"./陳怡潔.png": 219,
		"./陳明文.png": 220,
		"./陳根德.png": 221,
		"./陳歐珀.png": 222,
		"./陳淑慧.png": 223,
		"./陳碧涵.png": 224,
		"./陳節如.png": 225,
		"./陳超明.png": 226,
		"./陳鎮湘.png": 227,
		"./陳雪生.png": 228,
		"./顏寬恒.png": 229,
		"./馬文君.png": 230,
		"./高志鵬.png": 231,
		"./高金素梅.png": 232,
		"./魏明谷.png": 233,
		"./黃偉哲.png": 234,
		"./黃志雄.png": 235,
		"./黃文玲.png": 236,
		"./黃昭順.png": 237
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 72;


/***/ },
/* 73 */
/*!************************************************!*\
  !*** ./app/components/FactsCard/FactsCard.css ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = {};

/***/ },
/* 74 */
/*!**************************************!*\
  !*** ./app/components/Icon/Icon.jsx ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(/*! react */ 1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(/*! react-router */ 28);

	__webpack_require__(/*! ./Icon.css */ 245);

	var Icon = (function (_React$Component) {
		function Icon() {
			_classCallCheck(this, Icon);

			if (_React$Component != null) {
				_React$Component.apply(this, arguments);
			}
		}

		_inherits(Icon, _React$Component);

		_createClass(Icon, [{
			key: "render",
			value: function render() {
				var icon = this.props.icon;

				var classes = "fa fa-" + icon;
				return _react2["default"].createElement(
					"div",
					{ className: "Icon" },
					_react2["default"].createElement("i", { className: classes })
				);
			}
		}]);

		return Icon;
	})(_react2["default"].Component);

	exports["default"] = Icon;
	module.exports = exports["default"];

/***/ },
/* 75 */
/*!******************************************!*\
  !*** ./app/components/AppBar/AppBar.jsx ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(/*! react */ 1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(/*! react-router */ 28);

	var _IconIconJsx = __webpack_require__(/*! ../Icon/Icon.jsx */ 74);

	var _IconIconJsx2 = _interopRequireDefault(_IconIconJsx);

	__webpack_require__(/*! ./AppBar.css */ 253);

	var AppBar = (function (_React$Component) {
	  function AppBar() {
	    _classCallCheck(this, AppBar);

	    if (_React$Component != null) {
	      _React$Component.apply(this, arguments);
	    }
	  }

	  _inherits(AppBar, _React$Component);

	  _createClass(AppBar, [{
	    key: "render",
	    value: function render() {
	      var toggleSideBar = this.props.toggleSideBar;

	      return _react2["default"].createElement(
	        "div",
	        { className: "AppBar" },
	        _react2["default"].createElement(
	          "div",
	          { className: "AppBar-item",
	            onClick: toggleSideBar },
	          _react2["default"].createElement(_IconIconJsx2["default"], { icon: "bars" })
	        )
	      );
	    }
	  }], [{
	    key: "getProps",
	    value: function getProps(stores, params) {
	      var transition = stores.Router.getItem("transition");
	      return {
	        loading: !!transition
	      };
	    }
	  }]);

	  return AppBar;
	})(_react2["default"].Component);

	exports["default"] = AppBar;
	module.exports = exports["default"];

/***/ },
/* 76 */
/*!********************************************!*\
  !*** ./app/components/SideBar/SideBar.jsx ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { desc = parent = getter = undefined; _again = false; var object = _x,
	    property = _x2,
	    receiver = _x3; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(/*! react */ 1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(/*! react-router */ 28);

	var _classnames = __webpack_require__(/*! classnames */ 109);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _IconIconJsx = __webpack_require__(/*! ../Icon/Icon.jsx */ 74);

	var _IconIconJsx2 = _interopRequireDefault(_IconIconJsx);

	__webpack_require__(/*! ./SideBar.css */ 246);

	var SideBarItem = (function (_React$Component) {
	  function SideBarItem(props) {
	    _classCallCheck(this, SideBarItem);

	    _get(Object.getPrototypeOf(SideBarItem.prototype), "constructor", this).call(this, props);
	    this.state = {
	      "showSub": false
	    };
	  }

	  _inherits(SideBarItem, _React$Component);

	  _createClass(SideBarItem, [{
	    key: "_toggleShowSub",
	    value: function _toggleShowSub(i, event) {
	      event.stopPropagation();
	      event.preventDefault();
	      this.setState({
	        "showSub": !this.state.showSub
	      });
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var showSub = this.state.showSub;

	      var subIssues = _classnames2["default"]({
	        "SideBar-issues": true,
	        "is-show": showSub
	      });
	      var iconText = showSub ? "chevron-up" : "chevron-down";
	      return _react2["default"].createElement(
	        "div",
	        null,
	        _react2["default"].createElement(
	          _reactRouter.Link,
	          { className: "SideBar-subitem", to: "issue" },
	          "食品安全",
	          _react2["default"].createElement(
	            "div",
	            { className: "SideBar-icon",
	              onClick: this._toggleShowSub.bind(this, "") },
	            _react2["default"].createElement(_IconIconJsx2["default"], { icon: iconText })
	          )
	        ),
	        _react2["default"].createElement(
	          "div",
	          { className: subIssues },
	          _react2["default"].createElement(
	            _reactRouter.Link,
	            { className: "SideBar-issue", to: "issueVote", params: { issue: "food-safety" } },
	            "法人除罪化"
	          ),
	          _react2["default"].createElement(
	            _reactRouter.Link,
	            { className: "SideBar-issue", to: "issueVote", params: { issue: "food-safety" } },
	            "吹哨者條款"
	          ),
	          _react2["default"].createElement(
	            _reactRouter.Link,
	            { className: "SideBar-issue", to: "issueVote", params: { issue: "food-safety" } },
	            "消費者保護（舉證反轉 + 補助訴訟費用）"
	          ),
	          _react2["default"].createElement(
	            _reactRouter.Link,
	            { className: "SideBar-issue", to: "issueVote", params: { issue: "food-safety" } },
	            "「食安會報」入法"
	          ),
	          _react2["default"].createElement(
	            _reactRouter.Link,
	            { className: "SideBar-issue", to: "issueVote", params: { issue: "food-safety" } },
	            "中央設「食品警察隊」協助稽察"
	          )
	        )
	      );
	    }
	  }], [{
	    key: "getProps",
	    value: function getProps(stores, params) {
	      var transition = stores.Router.getItem("transition");
	      return {
	        loading: !!transition
	      };
	    }
	  }]);

	  return SideBarItem;
	})(_react2["default"].Component);

	exports["default"] = SideBarItem;

	var SideBar = (function (_React$Component2) {
	  function SideBar() {
	    _classCallCheck(this, SideBar);

	    if (_React$Component2 != null) {
	      _React$Component2.apply(this, arguments);
	    }
	  }

	  _inherits(SideBar, _React$Component2);

	  _createClass(SideBar, [{
	    key: "render",
	    value: function render() {

	      return _react2["default"].createElement(
	        "div",
	        { className: "SideBar" },
	        _react2["default"].createElement(
	          "div",
	          { className: "SideBar-sidebarContainer" },
	          _react2["default"].createElement(
	            _reactRouter.Link,
	            { className: "SideBar-item", to: "home" },
	            "首頁"
	          ),
	          _react2["default"].createElement(
	            _reactRouter.Link,
	            { className: "SideBar-item", to: "candidates" },
	            "2016候選人"
	          ),
	          _react2["default"].createElement(
	            _reactRouter.Link,
	            { className: "SideBar-item", to: "personList" },
	            "找立委"
	          ),
	          _react2["default"].createElement(
	            _reactRouter.Link,
	            { className: "SideBar-item", to: "issueList" },
	            "找議題"
	          ),
	          _react2["default"].createElement(SideBarItem, null),
	          _react2["default"].createElement(
	            _reactRouter.Link,
	            { className: "SideBar-subitem", to: "issue" },
	            "核能"
	          ),
	          _react2["default"].createElement(
	            _reactRouter.Link,
	            { className: "SideBar-subitem", to: "issue" },
	            "婚姻平權"
	          ),
	          _react2["default"].createElement(
	            _reactRouter.Link,
	            { className: "SideBar-subitem", to: "issue" },
	            "勞基法"
	          ),
	          _react2["default"].createElement(
	            _reactRouter.Link,
	            { className: "SideBar-subitem", to: "issue" },
	            "監督條例"
	          ),
	          _react2["default"].createElement(
	            _reactRouter.Link,
	            { className: "SideBar-subitem", to: "issue" },
	            "罷免"
	          ),
	          _react2["default"].createElement(
	            _reactRouter.Link,
	            { className: "SideBar-subitem", to: "issue" },
	            "兩稅合一"
	          )
	        )
	      );
	    }
	  }], [{
	    key: "getProps",
	    value: function getProps(stores, params) {
	      var transition = stores.Router.getItem("transition");
	      return {
	        loading: !!transition
	      };
	    }
	  }]);

	  return SideBar;
	})(_react2["default"].Component);

	exports["default"] = SideBar;
	module.exports = exports["default"];

/***/ },
/* 77 */
/*!****************************************************!*\
  !*** ./app/containers/Application/Application.css ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = {"this":"n9zwqtlXTbL-3jcnZr4mC","loading":"_2TYQhh_5PR7uD_ji2Exm_0","loadingElement":"_36X98_Aq2Kto37P-_WaFIy"};

/***/ },
/* 78 */
/*!**********************************************!*\
  !*** ./app/containers/HomePage/HomePage.css ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = {};

/***/ },
/* 79 */
/*!****************************************************!*\
  !*** ./app/components/CompareCard/CompareCard.jsx ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _reactAddons = __webpack_require__(/*! react/addons */ 50);

	var _reactAddons2 = _interopRequireDefault(_reactAddons);

	var _reactRouter = __webpack_require__(/*! react-router */ 28);

	__webpack_require__(/*! ./CompareCard.css */ 247);

	var _CompareCard = __webpack_require__(/*! ./CompareCard */ 248);

	var _CompareCard2 = _interopRequireDefault(_CompareCard);

	var _IconIconJsx = __webpack_require__(/*! ../Icon/Icon.jsx */ 74);

	var _IconIconJsx2 = _interopRequireDefault(_IconIconJsx);

	var _classnames = __webpack_require__(/*! classnames */ 109);

	var _classnames2 = _interopRequireDefault(_classnames);

	function opinionToIcon(opinion) {
	    //circle-o
	    //times
	    //frown-o, 不知所云,  unclear
	    //question, 未表態, none

	    switch (opinion) {
	        case "for":
	            return "circle-o";
	        case "against":
	            return "times";
	        case "unclear":
	            return "frown-o";
	        case "none":
	            return "question";
	    }
	    return "";
	}
	function opinionToText(opinion) {

	    switch (opinion) {
	        case "for":
	            return "贊成";
	        case "against":
	            return "反對";
	        case "unclear":
	            return "不知所云";
	        case "none":
	            return "未表態";
	    }
	    return "";
	}

	var CompareCard = (function (_React$Component) {
	    function CompareCard() {
	        _classCallCheck(this, CompareCard);

	        if (_React$Component != null) {
	            _React$Component.apply(this, arguments);
	        }
	    }

	    _inherits(CompareCard, _React$Component);

	    _createClass(CompareCard, [{
	        key: "render",
	        value: function render() {
	            var _props = this.props;
	            var issueTitle = _props.issueTitle;
	            var candidateA = _props.candidateA;
	            var candidateB = _props.candidateB;

	            if (!candidateA) candidateA = "請選擇";
	            if (!candidateB) candidateB = "請選擇";
	            var candidateAimg = "";
	            var candidateBimg = "";
	            try {
	                candidateAimg = __webpack_require__(/*! ./images */ 249)("./" + candidateA + ".png");
	                candidateBimg = __webpack_require__(/*! ./images */ 249)("./" + candidateB + ".png");
	            } catch (e) {
	                if (!candidateAimg) candidateAimg = __webpack_require__(/*! ./images/default.svg */ 250);
	                if (!candidateBimg) candidateBimg = __webpack_require__(/*! ./images/default.svg */ 250);
	            }

	            var issueItems = _CompareCard2["default"].issues.map(function (item, key) {
	                var classes = _classnames2["default"]({
	                    "CompareCard-flexGrids": true,
	                    "is-even": key % 2 === 0,
	                    "is-odd": key % 2 !== 0
	                });
	                return _reactAddons2["default"].createElement(
	                    "div",
	                    { className: classes,
	                        key: key },
	                    _reactAddons2["default"].createElement(
	                        "div",
	                        { className: "CompareCard-GridOne" },
	                        _reactAddons2["default"].createElement(
	                            "div",
	                            { className: "CompareCard-Icon" },
	                            _reactAddons2["default"].createElement(_IconIconJsx2["default"], { icon: opinionToIcon(item[candidateA]) })
	                        ),
	                        _reactAddons2["default"].createElement(
	                            "div",
	                            { className: "CompareCard-Opinion" },
	                            opinionToText(item[candidateA])
	                        )
	                    ),
	                    _reactAddons2["default"].createElement(
	                        "div",
	                        { className: "CompareCard-GridTwo CompareCard-issue" },
	                        item.title
	                    ),
	                    _reactAddons2["default"].createElement(
	                        "div",
	                        { className: "CompareCard-GridOne" },
	                        _reactAddons2["default"].createElement(
	                            "div",
	                            { className: "CompareCard-Icon" },
	                            _reactAddons2["default"].createElement(_IconIconJsx2["default"], { icon: opinionToIcon(item[candidateB]) })
	                        ),
	                        _reactAddons2["default"].createElement(
	                            "div",
	                            { className: "CompareCard-Opinion" },
	                            opinionToText(item[candidateB])
	                        )
	                    )
	                );
	            });

	            return _reactAddons2["default"].createElement(
	                "div",
	                { className: "CompareCard" },
	                _reactAddons2["default"].createElement(
	                    "div",
	                    { className: "CompareCard-title" },
	                    issueTitle
	                ),
	                _reactAddons2["default"].createElement(
	                    "div",
	                    { className: "CompareCard-flexGrids" },
	                    _reactAddons2["default"].createElement(
	                        "div",
	                        { className: "CompareCard-GridTwo" },
	                        _reactAddons2["default"].createElement("img", { className: "CompareCard-img",
	                            src: candidateAimg }),
	                        candidateA
	                    ),
	                    _reactAddons2["default"].createElement(
	                        "div",
	                        { className: "CompareCard-pk" },
	                        "PK"
	                    ),
	                    _reactAddons2["default"].createElement(
	                        "div",
	                        { className: "CompareCard-GridTwo" },
	                        _reactAddons2["default"].createElement("img", { className: "CompareCard-img",
	                            src: candidateBimg }),
	                        candidateB
	                    )
	                ),
	                _reactAddons2["default"].createElement(
	                    "div",
	                    { className: "CompareCard-issues" },
	                    issueItems
	                ),
	                _reactAddons2["default"].createElement(
	                    "div",
	                    { className: "CompareCard-flexGrids" },
	                    _reactAddons2["default"].createElement(
	                        "div",
	                        { className: "CompareCard-GridTwo" },
	                        _reactAddons2["default"].createElement(
	                            "div",
	                            { className: "ComareCard-btn" },
	                            _reactAddons2["default"].createElement(
	                                "div",
	                                null,
	                                candidateA
	                            ),
	                            _reactAddons2["default"].createElement(
	                                "div",
	                                null,
	                                "完整檔案"
	                            )
	                        )
	                    ),
	                    _reactAddons2["default"].createElement(
	                        "div",
	                        { className: "CompareCard-GridTwo" },
	                        _reactAddons2["default"].createElement(
	                            "div",
	                            { className: "ComareCard-btn" },
	                            _reactAddons2["default"].createElement(
	                                "div",
	                                null,
	                                candidateB
	                            ),
	                            _reactAddons2["default"].createElement(
	                                "div",
	                                null,
	                                "完整檔案"
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return CompareCard;
	})(_reactAddons2["default"].Component);

	exports["default"] = CompareCard;
	module.exports = exports["default"];

/***/ },
/* 80 */
/*!****************************************************!*\
  !*** ./app/components/CompareTabs/CompareTabs.jsx ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(/*! react */ 1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(/*! react-router */ 28);

	__webpack_require__(/*! ./CompareTabs.css */ 254);

	var _classnames = __webpack_require__(/*! classnames */ 109);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _IconIconJsx = __webpack_require__(/*! ../Icon/Icon.jsx */ 74);

	var _IconIconJsx2 = _interopRequireDefault(_IconIconJsx);

	var CompareTabs = (function (_React$Component) {
		function CompareTabs() {
			_classCallCheck(this, CompareTabs);

			if (_React$Component != null) {
				_React$Component.apply(this, arguments);
			}
		}

		_inherits(CompareTabs, _React$Component);

		_createClass(CompareTabs, [{
			key: "render",
			value: function render() {
				var _this = this;

				var _props = this.props;
				var activeTab = _props.activeTab;
				var activeSubtab = _props.activeSubtab;
				var setActiveTabHandler = _props.setActiveTabHandler;
				var setActiveSubtabHandler = _props.setActiveSubtabHandler;

				var menu = ["個人簡歷", "推薦函", "議題立場", "野生政見"];
				var submenu = ["勞工", "婚姻平權", "中國因素", "核能"];
				var items = menu.map(function (value, index) {
					var tabClasses = _classnames2["default"]({
						"CompareTabs-item": true,
						"is-active": value === activeTab
					});
					return _react2["default"].createElement(
						"div",
						{ className: tabClasses,
							onClick: setActiveTabHandler.bind(_this, value),
							key: index },
						value
					);
				});
				var subitems = submenu.map(function (value, index) {
					var tabClasses = _classnames2["default"]({
						"CompareTabs-subitem": true,
						"is-active": value === activeSubtab
					});
					return _react2["default"].createElement(
						"div",
						{ className: tabClasses,
							onClick: setActiveSubtabHandler.bind(_this, value),
							key: index },
						value
					);
				});
				var subitemClassess = _classnames2["default"]({
					"CompareTabs-subitems": true,
					"is-show": activeTab === "議題立場"
				});
				return _react2["default"].createElement(
					"div",
					{ className: "CompareTabs" },
					_react2["default"].createElement(
						"div",
						{ className: "CompareTabs-items" },
						_react2["default"].createElement(
							"div",
							{ className: "CompareTabs-maxWidth" },
							items
						)
					),
					_react2["default"].createElement(
						"div",
						{ className: subitemClassess },
						_react2["default"].createElement(
							"div",
							{ className: "CompareTabs-maxWidth" },
							subitems
						)
					)
				);
			}
		}]);

		return CompareTabs;
	})(_react2["default"].Component);

	exports["default"] = CompareTabs;
	module.exports = exports["default"];

/***/ },
/* 81 */
/*!**************************************************************!*\
  !*** ./app/components/CompareMultiCard/CompareMultiCard.jsx ***!
  \**************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _reactAddons = __webpack_require__(/*! react/addons */ 50);

	var _reactAddons2 = _interopRequireDefault(_reactAddons);

	var _reactRouter = __webpack_require__(/*! react-router */ 28);

	__webpack_require__(/*! ./CompareMultiCard.css */ 261);

	var _CompareMultiCard = __webpack_require__(/*! ./CompareMultiCard */ 262);

	var _CompareMultiCard2 = _interopRequireDefault(_CompareMultiCard);

	var _IconIconJsx = __webpack_require__(/*! ../Icon/Icon.jsx */ 74);

	var _IconIconJsx2 = _interopRequireDefault(_IconIconJsx);

	var _classnames = __webpack_require__(/*! classnames */ 109);

	var _classnames2 = _interopRequireDefault(_classnames);

	function opinionToIcon(opinion) {
	  //circle-o
	  //times
	  //frown-o, 不知所云,  unclear
	  //question, 未表態, none

	  switch (opinion) {
	    case "for":
	      return "circle-o";
	    case "against":
	      return "times";
	    case "unclear":
	      return "frown-o";
	    case "none":
	      return "question";
	  }
	  return "";
	}
	function opinionToText(opinion) {

	  switch (opinion) {
	    case "for":
	      return "贊成";
	    case "against":
	      return "反對";
	    case "unclear":
	      return "不知所云";
	    case "none":
	      return "未表態";
	  }
	  return "";
	}

	var CompareMultiCard = (function (_React$Component) {
	  function CompareMultiCard() {
	    _classCallCheck(this, CompareMultiCard);

	    if (_React$Component != null) {
	      _React$Component.apply(this, arguments);
	    }
	  }

	  _inherits(CompareMultiCard, _React$Component);

	  _createClass(CompareMultiCard, [{
	    key: "render",
	    value: function render() {
	      var issueTitle = this.props.issueTitle;

	      var candidateAimg = __webpack_require__(/*! ./images/賴士葆.png */ 263);
	      var candidateBimg = __webpack_require__(/*! ./images/苗博雅.png */ 264);
	      var candidateCimg = __webpack_require__(/*! ./images/阮昭雄.png */ 265);
	      var candidateDimg = __webpack_require__(/*! ./images/余宛如.png */ 266);

	      var issueItems = _CompareMultiCard2["default"].issues.map(function (item, key) {
	        var classes = _classnames2["default"]({
	          "CompareMultiCard-flexGrids": true,
	          "is-even": key % 2 === 0,
	          "is-odd": key % 2 !== 0
	        });
	        return _reactAddons2["default"].createElement(
	          "div",
	          { className: classes,
	            key: key },
	          _reactAddons2["default"].createElement(
	            "div",
	            { className: "CompareMultiCard-GridTwo CompareMultiCard-issue" },
	            item.title
	          ),
	          _reactAddons2["default"].createElement(
	            "div",
	            { className: "CompareMultiCard-GridOne" },
	            _reactAddons2["default"].createElement(
	              "div",
	              { className: "CompareMultiCard-Icon" },
	              _reactAddons2["default"].createElement(_IconIconJsx2["default"], { icon: opinionToIcon(item.candidateA) })
	            ),
	            _reactAddons2["default"].createElement(
	              "div",
	              { className: "CompareMultiCard-Opinion" },
	              opinionToText(item.candidateA)
	            )
	          ),
	          _reactAddons2["default"].createElement(
	            "div",
	            { className: "CompareMultiCard-GridOne" },
	            _reactAddons2["default"].createElement(
	              "div",
	              { className: "CompareMultiCard-Icon" },
	              _reactAddons2["default"].createElement(_IconIconJsx2["default"], { icon: opinionToIcon(item.candidateB) })
	            ),
	            _reactAddons2["default"].createElement(
	              "div",
	              { className: "CompareMultiCard-Opinion" },
	              opinionToText(item.candidateB)
	            )
	          ),
	          _reactAddons2["default"].createElement(
	            "div",
	            { className: "CompareMultiCard-GridOne" },
	            _reactAddons2["default"].createElement(
	              "div",
	              { className: "CompareMultiCard-Icon" },
	              _reactAddons2["default"].createElement(_IconIconJsx2["default"], { icon: opinionToIcon(item.candidateC) })
	            ),
	            _reactAddons2["default"].createElement(
	              "div",
	              { className: "CompareMultiCard-Opinion" },
	              opinionToText(item.candidateC)
	            )
	          ),
	          _reactAddons2["default"].createElement(
	            "div",
	            { className: "CompareMultiCard-GridOne" },
	            _reactAddons2["default"].createElement(
	              "div",
	              { className: "CompareMultiCard-Icon" },
	              _reactAddons2["default"].createElement(_IconIconJsx2["default"], { icon: opinionToIcon(item.candidateD) })
	            ),
	            _reactAddons2["default"].createElement(
	              "div",
	              { className: "CompareMultiCard-Opinion" },
	              opinionToText(item.candidateD)
	            )
	          )
	        );
	      });

	      return _reactAddons2["default"].createElement(
	        "div",
	        { className: "CompareMultiCard" },
	        _reactAddons2["default"].createElement(
	          "div",
	          { className: "CompareMultiCard-flexGrids" },
	          _reactAddons2["default"].createElement(
	            "div",
	            { className: "CompareMultiCard-GridTwo CompareMultiCard-title" },
	            issueTitle
	          ),
	          _reactAddons2["default"].createElement(
	            "div",
	            { className: "CompareMultiCard-GridOne" },
	            _reactAddons2["default"].createElement("img", { className: "CompareMultiCard-img",
	              src: candidateAimg }),
	            _CompareMultiCard2["default"].candidateA
	          ),
	          _reactAddons2["default"].createElement(
	            "div",
	            { className: "CompareMultiCard-GridOne" },
	            _reactAddons2["default"].createElement("img", { className: "CompareMultiCard-img",
	              src: candidateBimg }),
	            _CompareMultiCard2["default"].candidateB
	          ),
	          _reactAddons2["default"].createElement(
	            "div",
	            { className: "CompareMultiCard-GridOne" },
	            _reactAddons2["default"].createElement("img", { className: "CompareMultiCard-img",
	              src: candidateCimg }),
	            _CompareMultiCard2["default"].candidateC
	          ),
	          _reactAddons2["default"].createElement(
	            "div",
	            { className: "CompareMultiCard-GridOne" },
	            _reactAddons2["default"].createElement("img", { className: "CompareMultiCard-img",
	              src: candidateDimg }),
	            _CompareMultiCard2["default"].candidateD
	          )
	        ),
	        _reactAddons2["default"].createElement(
	          "div",
	          { className: "CompareMultiCard-issues" },
	          issueItems
	        )
	      );
	    }
	  }]);

	  return CompareMultiCard;
	})(_reactAddons2["default"].Component);

	exports["default"] = CompareMultiCard;
	module.exports = exports["default"];

/***/ },
/* 82 */
/*!************************************************************!*\
  !*** ./app/components/CandidatePicker/CandidatePicker.jsx ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _reactAddons = __webpack_require__(/*! react/addons */ 50);

	var _reactAddons2 = _interopRequireDefault(_reactAddons);

	var _reactRouter = __webpack_require__(/*! react-router */ 28);

	__webpack_require__(/*! ./CandidatePicker.css */ 251);

	var _classnames = __webpack_require__(/*! classnames */ 109);

	var _classnames2 = _interopRequireDefault(_classnames);

	var CandidatePicker = (function (_React$Component) {
	  function CandidatePicker() {
	    _classCallCheck(this, CandidatePicker);

	    if (_React$Component != null) {
	      _React$Component.apply(this, arguments);
	    }
	  }

	  _inherits(CandidatePicker, _React$Component);

	  _createClass(CandidatePicker, [{
	    key: "render",
	    value: function render() {
	      var _this = this;

	      var candidates = ["賴士葆", "苗博雅", "阮昭雄", "余宛如"];
	      var _props = this.props;
	      var candidateA = _props.candidateA;
	      var candidateB = _props.candidateB;
	      var clearCandidateHandler = _props.clearCandidateHandler;
	      var setCandidateHandler = _props.setCandidateHandler;

	      var options = candidates.map(function (item, key) {
	        var img = "";
	        try {
	          img = __webpack_require__(/*! ./images */ 252)("./" + item + ".png");
	        } catch (e) {}
	        var imgClasses = _classnames2["default"]({
	          "CandidatePicker-img": true,
	          "is-active": item === candidateA || item === candidateB

	        });
	        var setFunction = candidateA || candidateB === "" ? setCandidateHandler : "";
	        return _reactAddons2["default"].createElement(
	          "div",
	          { className: "CandidatePicker-option",
	            key: key,
	            onClick: setFunction.bind(_this, item) },
	          _reactAddons2["default"].createElement("img", { className: imgClasses,
	            src: img }),
	          _reactAddons2["default"].createElement(
	            "div",
	            { className: "CandidatePicker-name" },
	            item
	          )
	        );
	      });

	      var optionsClasses = _classnames2["default"]({
	        "CandidatePicker-options": true,
	        "is-show": candidateA === "" || candidateB === ""
	      });

	      return _reactAddons2["default"].createElement(
	        "div",
	        { className: "CandidatePicker" },
	        _reactAddons2["default"].createElement(
	          "div",
	          { className: "CandidatePicker-btn",
	            onClick: clearCandidateHandler },
	          "換人比"
	        ),
	        _reactAddons2["default"].createElement(
	          "div",
	          { className: optionsClasses },
	          options
	        )
	      );
	    }
	  }]);

	  return CandidatePicker;
	})(_reactAddons2["default"].Component);

	exports["default"] = CandidatePicker;
	module.exports = exports["default"];

	//

/***/ },
/* 83 */
/*!**********************************************************!*\
  !*** ./app/containers/CandidatesPage/CandidatesPage.css ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = {};

/***/ },
/* 84 */
/*!**************************************!*\
  !*** ./app/components/Tabs/Tabs.jsx ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { desc = parent = getter = undefined; _again = false; var object = _x,
	    property = _x2,
	    receiver = _x3; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(/*! react */ 1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(/*! react-router */ 28);

	__webpack_require__(/*! ./Tabs.css */ 255);

	var _classnames = __webpack_require__(/*! classnames */ 109);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _IconIconJsx = __webpack_require__(/*! ../Icon/Icon.jsx */ 74);

	var _IconIconJsx2 = _interopRequireDefault(_IconIconJsx);

	var Tabs = (function (_React$Component) {
		function Tabs(props) {
			_classCallCheck(this, Tabs);

			_get(Object.getPrototypeOf(Tabs.prototype), "constructor", this).call(this, props);
			this.state = {
				scrolling: false,
				showSubitems: false
			};
		}

		_inherits(Tabs, _React$Component);

		_createClass(Tabs, [{
			key: "_onScroll",
			value: function _onScroll() {
				//console.log("scrolling: ");
				//console.log(pageYOffset)
				if (pageYOffset >= 230 && !this.state.scrolling) {
					this.setState({
						scrolling: true
					});
				}
				if (pageYOffset < 230 && this.state.scrolling) {
					this.setState({
						scrolling: false
					});
				}
			}
		}, {
			key: "_toggleSubitems",
			value: function _toggleSubitems() {
				this.setState({
					showSubitems: !this.state.showSubitems
				});
			}
		}, {
			key: "componentDidMount",
			value: function componentDidMount() {
				window.addEventListener("scroll", this._onScroll.bind(this, null), false);
			}
		}, {
			key: "componentWillUnmount",
			value: function componentWillUnmount() {
				window.removeEventListener("scroll", this._onScroll.bind(this, null), false);
			}
		}, {
			key: "render",
			value: function render() {
				var currentTab = this.props.currentTab;
				var showSubitems = this.state.showSubitems;

				var tabClasses = _classnames2["default"]({
					"Tabs": true,
					"is-scrolling": this.state.scrolling
				});

				var totalClass = "Tabs-item";
				var issueClass = "Tabs-item";
				if (currentTab === "立場總覽") {
					totalClass += " is-active";
				} else {
					issueClass += " is-active";
				}

				var subitemClasses = _classnames2["default"]({
					"Tabs-subTabs": true,
					"is-show": showSubitems && currentTab === "婚姻平權"
				});

				return _react2["default"].createElement(
					"div",
					{ className: tabClasses },
					_react2["default"].createElement(
						"div",
						{ className: "Tabs-items" },
						_react2["default"].createElement(
							"div",
							{ className: "Tabs-maxWidth" },
							_react2["default"].createElement(
								_reactRouter.Link,
								{ className: totalClass,
									to: "person" },
								"立場總覽"
							),
							_react2["default"].createElement(
								"div",
								{ className: "Tabs-item" },
								"食品安全"
							),
							_react2["default"].createElement(
								_reactRouter.Link,
								{ className: issueClass,
									to: "personIssue",
									params: { issue: "same-sex-marriage" },
									onClick: this._toggleSubitems.bind(this) },
								"婚姻平權",
								_react2["default"].createElement(
									"div",
									{ className: subitemClasses },
									_react2["default"].createElement(
										"div",
										{ className: "Tabs-subItem" },
										"婚姻平權子議題1"
									),
									_react2["default"].createElement(
										"div",
										{ className: "Tabs-subItem" },
										"婚姻平權子議題2"
									),
									_react2["default"].createElement(
										"div",
										{ className: "Tabs-subItem" },
										"婚姻平權子議題3"
									)
								)
							),
							_react2["default"].createElement(
								"div",
								{ className: "Tabs-scrollRight" },
								_react2["default"].createElement(_IconIconJsx2["default"], { icon: "chevron-right" })
							)
						)
					)
				);
			}
		}]);

		return Tabs;
	})(_react2["default"].Component);

	exports["default"] = Tabs;
	module.exports = exports["default"];

/***/ },
/* 85 */
/*!**************************************************!*\
  !*** ./app/components/RecordList/RecordList.jsx ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { desc = parent = getter = undefined; _again = false; var object = _x,
	    property = _x2,
	    receiver = _x3; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(/*! react */ 1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(/*! react-router */ 28);

	var _LegislatorLegislatorJsx = __webpack_require__(/*! ../Legislator/Legislator.jsx */ 29);

	var _LegislatorLegislatorJsx2 = _interopRequireDefault(_LegislatorLegislatorJsx);

	var _LegislatorAvatarLegislatorAvatarJsx = __webpack_require__(/*! ../LegislatorAvatar/LegislatorAvatar.jsx */ 88);

	var _LegislatorAvatarLegislatorAvatarJsx2 = _interopRequireDefault(_LegislatorAvatarLegislatorAvatarJsx);

	var _IconIconJsx = __webpack_require__(/*! ../Icon/Icon.jsx */ 74);

	var _IconIconJsx2 = _interopRequireDefault(_IconIconJsx);

	var _RecordRecordJsx = __webpack_require__(/*! ../Record/Record.jsx */ 256);

	var _RecordRecordJsx2 = _interopRequireDefault(_RecordRecordJsx);

	__webpack_require__(/*! ./RecordList.css */ 257);

	var RecordList = (function (_React$Component) {
	    function RecordList(props) {
	        _classCallCheck(this, RecordList);

	        _get(Object.getPrototypeOf(RecordList.prototype), "constructor", this).call(this, props);
	        this.state = {
	            shouldYearExpand: {},
	            currentTab: "vote"
	        };
	    }

	    _inherits(RecordList, _React$Component);

	    _createClass(RecordList, [{
	        key: "_onSetTab",
	        value: function _onSetTab(i, event) {
	            this.setState({
	                currentTab: i
	            });
	        }
	    }, {
	        key: "_onTogggleYearData",
	        value: function _onTogggleYearData(i, event) {
	            console.log(i);
	            var currentYearExpand = this.state.shouldYearExpand;

	            if (!currentYearExpand[i]) currentYearExpand[i] = true;else currentYearExpand[i] = !currentYearExpand;

	            this.setState({
	                currentYearExpand: currentYearExpand
	            });
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _this2 = this;

	            var _state = this.state;
	            var shouldYearExpand = _state.shouldYearExpand;
	            var currentTab = _state.currentTab;

	            var classSet = _react2["default"].addons.classSet;

	            var entriesCount = {};
	            entriesCount.all = 0;
	            entriesCount.yearAll = 0;
	            entriesCount["for"] = 0;
	            entriesCount.against = 0;
	            entriesCount.unclear = 0;

	            //console.log(data);
	            //每一年

	            var data = [{
	                "year": "2012",
	                "entries": [{
	                    "name": "黃昭順",
	                    "id": "1",
	                    "date": "2012-05-11",
	                    "year": "2012",
	                    "month": "05",
	                    "day": "11",
	                    "type": "院會書面質詢",
	                    "quote": "本院黃委員昭順，針對近日同性婚姻合法化爭議，認為人生而平等，同性婚姻權益等同於異性之婚姻權，應與其享婚姻中相同的權利與義務，亦應受憲法婚姻自由之保障，對於同性婚姻也應採取理解並尊重之態度，儘速修正相關法令，以期落實平等原則，特向行政院提出質詢。",
	                    "opinion": "贊成",
	                    "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/101/32/LCIDC01_1013201.pdf",
	                    "trustVote": "12"
	                }, {
	                    "name": "蕭美琴",
	                    "id": "2",
	                    "date": "2012-11-09",
	                    "year": "2012",
	                    "month": "11",
	                    "day": "09",
	                    "type": "院會質詢",
	                    "quote": "美國剛進行總統大選，期間也針對很多公共議題進行公民投票，其中有三個州同意通過同性婚姻，請問院長，對於同性伴侶、同性婚姻、不同性傾向的權益問題，你有何立場？",
	                    "opinion": "贊成",
	                    "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/101/68/LCIDC01_1016801.pdf",
	                    "trustVote": "3"
	                }, {
	                    "name": "吳育仁",
	                    "id": "3",
	                    "date": "2012-12-03",
	                    "year": "2012",
	                    "month": "12",
	                    "day": "03",
	                    "type": "委員會質詢",
	                    "quote": "如果親屬法或民法上同意同性婚姻或同志伴侶權時，你是否支持他們享有勞動基本權？也就是有關家庭的部分，譬如留職育嬰停薪與陪產假？",
	                    "opinion": "贊成",
	                    "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/101/83/LCIDC01_1018303.pdf",
	                    "trustVote": "2"
	                }, {
	                    "name": "尤美女",
	                    "id": "4",
	                    "date": "2012-12-26",
	                    "year": "2012",
	                    "month": "12",
	                    "day": "26",
	                    "type": "公聽會",
	                    "quote": "舉行「同性婚姻合法化及伴侶權益法制化」公聽會",
	                    "opinion": "贊成",
	                    "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/102/03/LCIDC01_1020304.pdf",
	                    "trustVote": "1"
	                }]
	            }, {
	                "year": "2013",
	                "entries": [{
	                    "name": "蕭美琴",
	                    "id": "5",
	                    "date": "2013-01-07",
	                    "year": "2013",
	                    "month": "01",
	                    "day": "07",
	                    "type": "委員會質詢",
	                    "quote": "其實，在亞洲其他國家中，尤其是一些講華語的國家，台灣算是相對自由與開放的國家，當然，越是自由與開放的國家，其文化與創意也更能蓬勃發展，樣態上也更趨多元，這也是台灣的優勢，像本席就主張同性婚姻可以合法化，因為我覺得台灣社會若能包容不同性傾向的人，就表示我們是一個越前衛、越進步的國家，在這樣的國家裡面文化創意的空間自然就更大，這也表示我們的社會可以包容更多不同意見，換言之，這裡是讓更多元意見存在的地方！",
	                    "opinion": "贊成",
	                    "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/102/06/LCIDC01_1020601.pdf",
	                    "trustVote": "0"
	                }, {
	                    "name": "孔文吉",
	                    "id": "6",
	                    "date": "2013-10-24",
	                    "year": "2013",
	                    "month": "10",
	                    "day": "24",
	                    "type": "委員會質詢",
	                    "quote": "本席希望你們能夠仔細審酌這件事情，本席是反對的，因為我是基督徒，幸好尤美女委員的提案，本席沒有連署，連署欄沒有本席的名字，我必須在此表示反對，不然很多宗教團體都會來找我。現在有些學校會請同志團體到學校去分享他們的心得，本席希望法務部能站在中性的立場，多聽取各方的意見，教會團體對於同性戀結婚還是無法容許、無法同意的。",
	                    "opinion": "反對",
	                    "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/102/63/LCIDC01_1026301.pdf",
	                    "trustVote": "43"
	                }, {
	                    "name": "羅淑蕾",
	                    "id": "7",
	                    "date": "2013-11-01",
	                    "year": "2013",
	                    "month": "11",
	                    "day": "01",
	                    "type": "院會書面質詢",
	                    "quote": "本院羅委員淑蕾，鑑於近期少數團體基於「同性婚姻」、「伴侶制度」、「多人家屬及收養制度」之三大訴求，執意推動「多元成家法案」，將會為台灣帶來家庭的不穩定性及耗費大量社會成本，兒童的權益得不到保障，衍生更多社會問題，感到憂心。爰此，衡平台灣整體社會發展及少數特殊家庭需求，相關主管機關應在維護法制穩定性的前提下，建立起個案考量及處理之機制，特向行政院提出質詢。",
	                    "opinion": "反對",
	                    "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/102/61/LCIDC01_1026101.pdf",
	                    "trustVote": "100"
	                }, {
	                    "name": "丁守中",
	                    "id": "8",
	                    "date": "2013-11-08",
	                    "year": "2013",
	                    "month": "11",
	                    "day": "08",
	                    "type": "院會質詢",
	                    "quote": "我完全同意同性戀者有相愛、同居也有財產自由處分的完全自主權利，但我更支持宗教團體，因為我是國際佛光會的副總會長。我認為對於宗教團體與一般人的傳統認知，也就是對家庭、對夫妻倫理與價值不應該改變。",
	                    "opinion": "反對",
	                    "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/102/65/LCIDC01_1026501.pdf",
	                    "trustVote": "332"
	                }, {
	                    "name": "陳其邁",
	                    "id": "9",
	                    "date": "2013-11-20",
	                    "year": "2013",
	                    "month": "11",
	                    "day": "20",
	                    "type": "預算凍結案",
	                    "quote": "內政部103年度單位預算第3目「戶政業務」分支計畫「01督導改進戶籍行政」編列業務費219萬2千元。惟今年6月內政部發函予一對已登記結婚之吳姓跨性別伴侶，要求其自行辦理撤銷婚姻，又於今年8月7日內政部專案會議，認定吳姓伴侶婚姻有效，內政部態度反覆，標準不一，侵害民眾權益，造成不必要之精神傷害，顯見內政部缺乏性別友善意識。爰此，提案凍結前開預算1/2，計109萬6千元，俟內政部提出「如何推行我國同性婚姻合法化」之專案報告，向本院內政委員會報告並經同意後，始得動支。",
	                    "opinion": "贊成",
	                    "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/102/75/LCIDC01_1027501.pdf",
	                    "trustVote": "1"
	                }, {
	                    "name": "吳育仁",
	                    "id": "10",
	                    "date": "2013-11-25",
	                    "year": "2013",
	                    "month": "11",
	                    "day": "25",
	                    "type": "委員會質詢",
	                    "quote": "請問羅總經理，同性婚姻合法化之後，勞工保險條例中的老人給付中會產生什麼樣的改變？",
	                    "opinion": "不明確",
	                    "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/102/77/LCIDC01_1027702.pdf",
	                    "trustVote": "343"
	                }, {
	                    "name": "陳其邁",
	                    "id": "11",
	                    "date": "2013-11-27",
	                    "year": "2013",
	                    "month": "11",
	                    "day": "27",
	                    "type": "預算凍結案",
	                    "quote": "內政部103年度單位預算第3目「戶政業務」分支計畫「01督導改進戶籍行政」編列業務費219萬2,000元。惟今年6月內政部發函予一對已登記結婚之吳姓跨性別伴侶，要求其自行辦理撤銷婚姻，又於今年8月7日內政部專案會議，認定吳姓伴侶婚姻有效，內政部態度反覆，標準不一，侵害民眾權益，造成不必要之精神傷害，顯見內政部缺乏性別友善意識。爰此，提案凍結預算，俟內政部提出「如何推行我國同性婚姻合法化」之專案報告，向立法院內政委員會報告並經同意後，始得動支。",
	                    "opinion": "贊成",
	                    "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/102/79/LCIDC01_1027901.pdf",
	                    "trustVote": "12"
	                }, {
	                    "name": "許忠信",
	                    "id": "12",
	                    "date": "2013-12-16",
	                    "year": "2013",
	                    "month": "12",
	                    "day": "16",
	                    "type": "委員會質詢",
	                    "quote": "社會上有許多同性戀的同志，我們非常尊重他們的權益，他們該受到的尊重，本席都非常尊重。現今有所謂的多元成家方案，在多元成家方案中兩位同性別的人不可能自然生育，勢必要倚賴人工生殖，問題在於兩位女性共組家庭，能不能兩位女性都接受人工生殖，在兩位女性中誰可以接受人工授孕？如果兩位同性的男性共組家庭，在兩位男性中誰能找代理孕母？請部長針對此一問題向媒體做答復。",
	                    "opinion": "不明確",
	                    "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/103/03/LCIDC01_1030302.pdf",
	                    "trustVote": "32"
	                }, {
	                    "name": "段宜康",
	                    "id": "13",
	                    "date": "2013-12-25",
	                    "year": "2013",
	                    "month": "12",
	                    "day": "25",
	                    "type": "委員會質詢",
	                    "quote": "這樣問你好了，你覺得該不該往這個方向去努力？這樣比較有階段性，要往一個方向去努力跟現在馬上要落實是不同的，所以我這樣問你好了，你覺得我們的政府或性別平等業務該不該將此列為重要推動項目？",
	                    "opinion": "贊成",
	                    "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/103/07/LCIDC01_1030702.pdf",
	                    "trustVote": "123"
	                }, {
	                    "name": "姚文智",
	                    "id": "14",
	                    "date": "2013-12-25",
	                    "year": "2013",
	                    "month": "12",
	                    "day": "25",
	                    "type": "委員會質詢",
	                    "quote": "大家一直在反同性戀，在冬季奧運時，美國就請一個同性戀當團長到俄羅斯去，這不要花錢呀！這是一個用不同的事件去累積、激盪而推動性別平等的作法，你們也可以做呀！國內也有同志的遊行或是其他活動，你們也可以有些創意，不用花錢呀！但是現在不太看得到你們的角色。",
	                    "opinion": "贊成",
	                    "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/103/07/LCIDC01_1030702.pdf",
	                    "trustVote": "3"
	                }]
	            }, {
	                "year": "2014",
	                "entries": [{
	                    "name": "邱志偉",
	                    "id": "15",
	                    "date": "2014-03-31",
	                    "year": "2014",
	                    "month": "03",
	                    "day": "31",
	                    "type": "委員會質詢",
	                    "quote": "如果他（軍事院校的學生）今天參與其他的議題，例如我們支持同性婚姻或是多元成家的方案，如果他去參加，你們會禁止嗎？",
	                    "opinion": "贊成",
	                    "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/103/21/LCIDC01_1032101.pdf",
	                    "trustVote": "74"
	                }, {
	                    "name": "蕭美琴",
	                    "id": "16",
	                    "date": "2014-10-16",
	                    "year": "2014",
	                    "month": "10",
	                    "day": "16",
	                    "type": "委員會質詢",
	                    "quote": "有一些國家承認同性婚姻的合法性，如果今天在台灣的一些外交官有同性的配偶或伴侶，那外交部是否承認他們的婚姻關係？總是會涉及簽證以及居留權的問題，我們的態度為何？",
	                    "opinion": "贊成",
	                    "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/103/67/LCIDC01_1036701.pdf",
	                    "trustVote": "54"
	                }, {
	                    "name": "尤美女",
	                    "id": "17",
	                    "date": "2014-10-16",
	                    "year": "2014",
	                    "month": "10",
	                    "day": "16",
	                    "type": "公聽會",
	                    "quote": "舉行「用平等的心把每一個人擁入憲法的懷抱─同性婚姻及同志收養議題」公聽會",
	                    "opinion": "贊成",
	                    "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/103/64/LCIDC01_1036401.pdf",
	                    "trustVote": "23"
	                }, {
	                    "name": "陳其邁",
	                    "id": "18",
	                    "date": "2014-11-12",
	                    "year": "2014",
	                    "month": "11",
	                    "day": "12",
	                    "type": "預算主決議",
	                    "quote": "查行政院100年函頒之「性別平等政策綱領」乃由行政院性別平等處主政，規劃我國性別平等施政藍圖。然查「性別平等政策綱領」內容偏重婦女政策，多元性別、同志權益等政策尚不完備，實有不盡完善之處。且查103年6月「消除對婦女一切形式歧視公約（CEDAW）中華民國（臺灣）第2次國家報告國外專家審查暨發表會議」中，國外專家建議政府應將多元性別內涵納入性別平等教育教材中，並建議政府就國內社會關注的多元家庭法制保障及福利取得議題評估與制定相關政策。又查近年台灣同志及多元性別權益諸多倡議活動皆將「多元性別」、「婚姻平權、平等成家」、「擁抱性/別認同差異」主題納入，國際知名之紐約時報亦於103年10月報導台灣社會追求同志平權運動，形容台灣已具有亞洲同性戀者的「燈塔」地位。爰此，為求政府之性別平等政策不致落後社會脈動及趨勢之外，行政院性別平等處身為「性別平等政策綱領」主政機關，應就同志權益、多元性別、婚姻平權等議題進行研擬，將上述層面之議題修正納入「性別平等政策綱領」政策內容。",
	                    "opinion": "贊成",
	                    "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/103/80/LCIDC01_1038001.pdf",
	                    "trustVote": "54"
	                }, {
	                    "name": "吳宜臻",
	                    "id": "19",
	                    "date": "2014-12-11",
	                    "year": "2014",
	                    "month": "12",
	                    "day": "11",
	                    "type": "委員會質詢",
	                    "quote": "抱歉！因為本席在10月及11月請假，所以未出席委員會會議，現在請教次長，對包含同性婚姻的婚姻平權法案，法務部到底提出了嗎？",
	                    "opinion": "贊成",
	                    "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/104/01/LCIDC01_1040101.pdf",
	                    "trustVote": "23"
	                }, {
	                    "name": "尤美女",
	                    "id": "20",
	                    "date": "2014-12-18",
	                    "year": "2014",
	                    "month": "12",
	                    "day": "18",
	                    "type": "委員會質詢",
	                    "quote": "其次，我們看到很多國家都承認同性婚姻，他們甚至於可以去登記，如果他們在國外已經是合法登記的同性婚姻，今天他們到國內來，他們可不可以拿國外合法登記的結婚證書到國內來登記結婚？",
	                    "opinion": "贊成",
	                    "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/104/01/LCIDC01_1040101.pdf",
	                    "trustVote": "862"
	                }, {
	                    "name": "廖正井",
	                    "id": "21",
	                    "date": "2014-12-22",
	                    "year": "2014",
	                    "month": "12",
	                    "day": "22",
	                    "type": "委員會質詢",
	                    "quote": "我贊成你的看法，我們客家人有家族族譜，像我們就常常談起自己是來台第幾代，相關族譜也都會留傳下來，如果照這樣發展，可能就會失去家庭倫理，家庭關係也不復存在，是不是？",
	                    "opinion": "反對",
	                    "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/104/12/LCIDC01_1041201.pdf",
	                    "trustVote": "4"
	                }, {
	                    "name": "李貴敏",
	                    "id": "22",
	                    "date": "2014-12-22",
	                    "year": "2014",
	                    "month": "12",
	                    "day": "22",
	                    "type": "委員會質詢",
	                    "quote": "我們去看看別的國家如何解決這個問題，我剛才特別提到，我到國外蒐集資料，美國的解決方式是在全民尚未達成共識時讓彼此的對立降到最低，可能是透過法院判決或其他方式，而不是在共識尚未達成時硬要撕裂人民之間的情感。",
	                    "opinion": "反對",
	                    "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/104/12/LCIDC01_1041201.pdf",
	                    "trustVote": "52"
	                }, {
	                    "name": "段宜康",
	                    "id": "23",
	                    "date": "2014-12-22",
	                    "year": "2014",
	                    "month": "12",
	                    "day": "22",
	                    "type": "委員會質詢",
	                    "quote": "因為擔心國家的人口政策而不贊成少數人同性婚姻，照這個邏輯，在一男一女結婚之前就要統統檢查有沒有生育能力，沒有生育能力的就沒有資格結婚，否則將影響國家人口政策，現在出生率已經這麼低了，怎麼可以容許沒有生育能力的人結婚？即便是一男一女結婚，在結婚之前都要證明可以生育，你的邏輯是這樣嗎？",
	                    "opinion": "贊成",
	                    "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/104/12/LCIDC01_1041201.pdf",
	                    "trustVote": "45"
	                }, {
	                    "name": "尤美女",
	                    "id": "24",
	                    "date": "2014-12-22",
	                    "year": "2014",
	                    "month": "12",
	                    "day": "22",
	                    "type": "委員會質詢",
	                    "quote": "你覺得人權是要用所謂的共識才能決定？剛剛段委員講得很好，法律是要保障少數人的權益，但今天對於這些少數人的權益，卻要經過多數人的同意，但那些多數人根本不承認這些少數人的存在啊！所以多數人不同意，因此這些少數人的權益就不受到保障，是這樣子嗎？",
	                    "opinion": "贊成",
	                    "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/104/12/LCIDC01_1041201.pdf",
	                    "trustVote": "23"
	                }, {
	                    "name": "呂學樟",
	                    "id": "25",
	                    "date": "2014-12-22",
	                    "year": "2014",
	                    "month": "12",
	                    "day": "22",
	                    "type": "委員會質詢",
	                    "quote": "我反對的是為同性戀婚姻過當修法，因為這樣的修法會造成千百年來家庭倫常的淪喪，社會的價值觀也會崩潰。",
	                    "opinion": "反對",
	                    "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/104/12/LCIDC01_1041201.pdf",
	                    "trustVote": "54"
	                }, {
	                    "name": "鄭麗君",
	                    "id": "26",
	                    "date": "2014-12-22",
	                    "year": "2014",
	                    "month": "12",
	                    "day": "22",
	                    "type": "委員會質詢",
	                    "quote": "今天如果你們繼續要主張這條法律必須基於所謂的傳統、人倫與國情，就是一種社會的歧視，而此背後是這個法律制度性歧視的結構，所以，為什麼我們主張要修民法，因為如果前面所說的制度性歧視結構不打破，社會歧視依然可以這麼大聲地繼續污名，而且竟然是由立法委員在這裡說出來，讓我們覺得實在不可思議！",
	                    "opinion": "贊成",
	                    "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/104/12/LCIDC01_1041201.pdf",
	                    "trustVote": "542"
	                }, {
	                    "name": "林淑芬",
	                    "id": "27",
	                    "date": "2014-12-22",
	                    "year": "2014",
	                    "month": "12",
	                    "day": "22",
	                    "type": "委員會質詢",
	                    "quote": "你這種說法根本是助長歧視，完全是一種假裝式的漸進及演進，基本上，你們認為同志的人權應該要保障，但現在不能給，然後結果就是剝奪同志的基本人權，我告訴你，你這是助長歧視，假裝演進，假裝漸進。你們認為基本上是應該要，但是現在不能，結果就是剝奪他們的基本人權嘛！",
	                    "opinion": "贊成",
	                    "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/104/12/LCIDC01_1041201.pdf",
	                    "trustVote": "5"
	                }, {
	                    "name": "林鴻池",
	                    "id": "28",
	                    "date": "2014-12-22",
	                    "year": "2014",
	                    "month": "12",
	                    "day": "22",
	                    "type": "委員會質詢",
	                    "quote": "今天要討論的民法親屬編部分條文修正案中針對去性別化，希望透過去性別化，修改民法親屬編，讓同性戀可以結婚。有的人認為這其實是基本人權，他們兩個要結婚並沒有礙著別人，不過，這是一個婚姻制度，也是一個家庭制度，我們幾千年來的家庭制度、倫理在一夕之間要透過民法親屬編改變它，我們也可以很快就讓它出委員會，送院會三讀通過，改文字很簡單，但我們需要考量的是，幾千年來的這個家庭制度、倫理的變化對社會產生的衝擊是什麼？",
	                    "opinion": "反對",
	                    "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/104/12/LCIDC01_1041201.pdf",
	                    "trustVote": "2"
	                }]
	            }, {
	                "year": "2015",
	                "entries": [{
	                    "name": "尤美女",
	                    "id": "29",
	                    "date": "2015-01-05",
	                    "year": "2015",
	                    "month": "01",
	                    "day": "05",
	                    "type": "委員會質詢",
	                    "quote": "今日報紙刊載一則「原民部落喜辦同志家庭收養」的新聞，前陣子本委員會方才審查「婚姻平權法草案」，當時法務部認為「婚姻平權法草案」若通過，社會對立將會太高，也會有許多的負面輿論，因而不讓同志婚姻平權及收養孩童；但是，我們看到原住民部落有兩位女同志，他們一起生活近30年，並收養其中一位女同志哥哥的小孩，三人共同生活了12年，他們一直把她當親生女兒般照顧，所以部落特別認可這對同志家庭收養這名小孩，他們明知依照漢人的法律，組成同志家庭不具有法律效力，但是他們認為即使沒有被法律認可，仍可以實踐非常重要的家庭功能，所以他們的收養儀式獲得長老們的首肯，由頭目遵循傳統將祖傳禮刀、大鐵鍋、琉璃珠、現金等貴重禮品贈與被收養者生父的家族，完成收養儀式。既然部落做得到，我們漢族是不是也能夠拋下傲慢的心態，重新認識另外一個與我們不一樣的同志家族？請法務部與司法院能夠多加考量。好不好？",
	                    "opinion": "贊成",
	                    "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/104/08/LCIDC01_1040801.pdf",
	                    "trustVote": "65"
	                }, {
	                    "name": "陳其邁",
	                    "id": "30",
	                    "date": "2015-01-12",
	                    "year": "2015",
	                    "month": "01",
	                    "day": "12",
	                    "type": "委員會質詢",
	                    "quote": "所以我說尊重部落會議的決定啊！這是原住民族自治，所以包括對同性婚姻的看法，我們也應該尊重部落，你剛剛的口頭宣示很好、很進步啊！我給你鼓勵啊！所以我的意思是，我們進一步在原住民族基本法裡頭，就把同性婚姻這個部分列入，明定我們尊重部落所做的決定，尊重原住民自治，人家魯凱族贊成，或是有其他族群贊成，我們應該要尊重他們啊！我也同意啊！",
	                    "opinion": "贊成",
	                    "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/104/12/LCIDC01_1041201.pdf",
	                    "trustVote": "75"
	                }, {
	                    "name": "尤美女",
	                    "id": "31",
	                    "date": "2015-03-12",
	                    "year": "2015",
	                    "month": "03",
	                    "day": "12",
	                    "type": "委員會質詢",
	                    "quote": "法務部在2001年呈報行政院的人權保障基本法草案第二十四條，即已明白規定國家應尊重同性戀者之權益，同性男女得依法組成家庭及收養子女。當時即已定調要保障同志的婚姻，馬政府上台之後，卻整個推翻，現在又要從頭來過嗎？事實上你們早已委託戴教授去對同志的權益作研究，厚厚的一本報告在法務部裡面都躺多久了，你們還要重啟爐灶，從頭再來？",
	                    "opinion": "贊成",
	                    "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/104/16/LCIDC01_1041601.pdf",
	                    "trustVote": "2"
	                }]
	            }];

	            var orderByYearItems = data.map(function (year, year_index) {
	                entriesCount.yearAll = 0;
	                var entries = year.entries.filter(function (item) {
	                    var shouldReturn = true;
	                    if (item.name !== "尤美女") {
	                        shouldReturn = false;
	                    }
	                    //console.log(item.name+": "+shouldReturn);
	                    if (shouldReturn) {
	                        return item;
	                    }
	                }).map(function (item, key) {

	                    entriesCount.all++;
	                    entriesCount.yearAll++;

	                    //每一筆 entry
	                    switch (item.opinion) {
	                        case "贊成":
	                            entriesCount["for"]++;
	                            break;
	                        case "反對":
	                            entriesCount.against++;
	                            break;
	                        case "不明確":
	                            entriesCount.unclear++;
	                            break;

	                    }

	                    return _react2["default"].createElement(
	                        "div",
	                        { key: key },
	                        _react2["default"].createElement(_RecordRecordJsx2["default"], { data: item })
	                    );
	                });

	                var boundToggleYear = _this2._onTogggleYearData.bind(_this2, year.year);
	                var voteEntries = shouldYearExpand[year.year] === true ? _react2["default"].createElement(
	                    "div",
	                    null,
	                    entries
	                ) : "";
	                var toggleText = shouldYearExpand[year.year] === true ? "折疊" : "展開";

	                if (entriesCount.yearAll === 0) toggleText = "";

	                return _react2["default"].createElement(
	                    "div",
	                    { className: "RecordList-year",
	                        key: year_index },
	                    _react2["default"].createElement(
	                        "div",
	                        { className: "RecordList-yearHeader",
	                            onClick: boundToggleYear },
	                        _react2["default"].createElement("div", { className: "RecordList-yearUnit" }),
	                        _react2["default"].createElement(
	                            "div",
	                            { className: "RecordList-yearTitle" },
	                            year.year
	                        ),
	                        _react2["default"].createElement(
	                            "div",
	                            { className: "RecordList-yearSum" },
	                            _react2["default"].createElement(
	                                "span",
	                                { className: "RecordList-voteNumbers" },
	                                entriesCount.yearAll
	                            ),
	                            " 個相關表態",
	                            _react2["default"].createElement(
	                                "div",
	                                { className: "RecordList-yearToggle" },
	                                toggleText
	                            )
	                        )
	                    ),
	                    _react2["default"].createElement(
	                        "div",
	                        { className: "RecordList-yearEntries" },
	                        voteEntries
	                    )
	                );
	            });

	            // /////////////////////////////////////////////////////////
	            // /* 依照票數排序 */
	            // ////////////////////////////////////////////////////////

	            var orderByVote = [{
	                "name": "尤美女",
	                "id": "20",
	                "date": "2014-12-18",
	                "year": "2014",
	                "month": "12",
	                "day": "18",
	                "type": "委員會質詢",
	                "quote": "其次，我們看到很多國家都承認同性婚姻，他們甚至於可以去登記，如果他們在國外已經是合法登記的同性婚姻，今天他們到國內來，他們可不可以拿國外合法登記的結婚證書到國內來登記結婚？",
	                "opinion": "贊成",
	                "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/104/01/LCIDC01_1040101.pdf",
	                "trustVote": "862"
	            }, {
	                "name": "尤美女",
	                "id": "29",
	                "date": "2015-01-05",
	                "year": "2015",
	                "month": "01",
	                "day": "05",
	                "type": "委員會質詢",
	                "quote": "今日報紙刊載一則「原民部落喜辦同志家庭收養」的新聞，前陣子本委員會方才審查「婚姻平權法草案」，當時法務部認為「婚姻平權法草案」若通過，社會對立將會太高，也會有許多的負面輿論，因而不讓同志婚姻平權及收養孩童；但是，我們看到原住民部落有兩位女同志，他們一起生活近30年，並收養其中一位女同志哥哥的小孩，三人共同生活了12年，他們一直把她當親生女兒般照顧，所以部落特別認可這對同志家庭收養這名小孩，他們明知依照漢人的法律，組成同志家庭不具有法律效力，但是他們認為即使沒有被法律認可，仍可以實踐非常重要的家庭功能，所以他們的收養儀式獲得長老們的首肯，由頭目遵循傳統將祖傳禮刀、大鐵鍋、琉璃珠、現金等貴重禮品贈與被收養者生父的家族，完成收養儀式。既然部落做得到，我們漢族是不是也能夠拋下傲慢的心態，重新認識另外一個與我們不一樣的同志家族？請法務部與司法院能夠多加考量。好不好？",
	                "opinion": "贊成",
	                "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/104/08/LCIDC01_1040801.pdf",
	                "trustVote": "65"
	            }, {
	                "name": "尤美女",
	                "id": "17",
	                "date": "2014-10-16",
	                "year": "2014",
	                "month": "10",
	                "day": "16",
	                "type": "公聽會",
	                "quote": "舉行「用平等的心把每一個人擁入憲法的懷抱─同性婚姻及同志收養議題」公聽會",
	                "opinion": "贊成",
	                "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/103/64/LCIDC01_1036401.pdf",
	                "trustVote": "23"
	            }, {
	                "name": "尤美女",
	                "id": "24",
	                "date": "2014-12-22",
	                "year": "2014",
	                "month": "12",
	                "day": "22",
	                "type": "委員會質詢",
	                "quote": "你覺得人權是要用所謂的共識才能決定？剛剛段委員講得很好，法律是要保障少數人的權益，但今天對於這些少數人的權益，卻要經過多數人的同意，但那些多數人根本不承認這些少數人的存在啊！所以多數人不同意，因此這些少數人的權益就不受到保障，是這樣子嗎？",
	                "opinion": "贊成",
	                "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/104/12/LCIDC01_1041201.pdf",
	                "trustVote": "23"
	            }, {
	                "name": "尤美女",
	                "id": "31",
	                "date": "2015-03-12",
	                "year": "2015",
	                "month": "03",
	                "day": "12",
	                "type": "委員會質詢",
	                "quote": "法務部在2001年呈報行政院的人權保障基本法草案第二十四條，即已明白規定國家應尊重同性戀者之權益，同性男女得依法組成家庭及收養子女。當時即已定調要保障同志的婚姻，馬政府上台之後，卻整個推翻，現在又要從頭來過嗎？事實上你們早已委託戴教授去對同志的權益作研究，厚厚的一本報告在法務部裡面都躺多久了，你們還要重啟爐灶，從頭再來？",
	                "opinion": "贊成",
	                "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/104/16/LCIDC01_1041601.pdf",
	                "trustVote": "2"
	            }, {
	                "name": "尤美女",
	                "id": "4",
	                "date": "2012-12-26",
	                "year": "2012",
	                "month": "12",
	                "day": "26",
	                "type": "公聽會",
	                "quote": "舉行「同性婚姻合法化及伴侶權益法制化」公聽會",
	                "opinion": "贊成",
	                "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/102/03/LCIDC01_1020304.pdf",
	                "trustVote": "1"
	            }];

	            var orderByVoteItems = orderByVote.map(function (item, key) {
	                return _react2["default"].createElement(
	                    "div",
	                    { key: key },
	                    _react2["default"].createElement(_RecordRecordJsx2["default"], { data: item })
	                );
	            });

	            var content = currentTab === "vote" ? orderByVoteItems : orderByYearItems;
	            var tabs = [{ title: "依票數", id: "vote" }, { title: "時間軸", id: "timeline" }];
	            var tabsItem = tabs.map(function (item, key) {
	                var tabClass = "RecordList-tab";
	                if (currentTab === item.id) {
	                    tabClass += " is-active";
	                }
	                var boundClick = _this2._onSetTab.bind(_this2, item.id);
	                return _react2["default"].createElement(
	                    "div",
	                    { className: tabClass,
	                        onClick: boundClick,
	                        key: key },
	                    item.title
	                );
	            });

	            return _react2["default"].createElement(
	                "div",
	                { className: "RecordList" },
	                _react2["default"].createElement(
	                    "div",
	                    { className: "RecordList-title" },
	                    _react2["default"].createElement(
	                        "span",
	                        { className: "RecordList-opinion is-for" },
	                        "贊成"
	                    ),
	                    "儘速修法將同性婚姻合法化"
	                ),
	                _react2["default"].createElement(
	                    "div",
	                    { className: "RecordList-description" },
	                    "在過去四年中，尤美女有 ",
	                    entriesCount.all,
	                    " 筆相關的立場表達事件：",
	                    entriesCount["for"],
	                    " 筆贊成；",
	                    entriesCount.against,
	                    " 筆反對；",
	                    entriesCount.unclear,
	                    " 筆立場不明確。"
	                ),
	                tabsItem,
	                content
	            );
	        }
	    }]);

	    return RecordList;
	})(_react2["default"].Component);

	exports["default"] = RecordList;
	module.exports = exports["default"];

/***/ },
/* 86 */
/*!**************************************************!*\
  !*** ./app/containers/PersonPage/PersonPage.css ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = {};

/***/ },
/* 87 */
/*!************************************************************!*\
  !*** ./app/containers/PersonIssuePage/PersonIssuePage.css ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = {};

/***/ },
/* 88 */
/*!**************************************************************!*\
  !*** ./app/components/LegislatorAvatar/LegislatorAvatar.jsx ***!
  \**************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(/*! react */ 1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(/*! react-router */ 28);

	__webpack_require__(/*! ./LegislatorAvatar.css */ 258);

	var LegislatorAvatar = (function (_React$Component) {
	  function LegislatorAvatar() {
	    _classCallCheck(this, LegislatorAvatar);

	    if (_React$Component != null) {
	      _React$Component.apply(this, arguments);
	    }
	  }

	  _inherits(LegislatorAvatar, _React$Component);

	  _createClass(LegislatorAvatar, [{
	    key: "render",
	    value: function render() {
	      var _props = this.props;
	      var data = _props.data;
	      var plain = _props.plain;
	      var party = _props.party;
	      var name = _props.name;

	      var imgURL;

	      try {
	        imgURL = __webpack_require__(/*! ./images/avatar */ 259)("./" + data + ".png");
	      } catch (e) {
	        imgURL = __webpack_require__(/*! ./images/default.jpg */ 260);
	      }

	      var name = name ? _react2["default"].createElement(
	        "div",
	        { className: "LegislatorAvatar-name" },
	        data
	      ) : "";

	      var imgClass = "LegislatorAvatar-avatar";
	      if (party) {
	        imgClass += " is-" + party;
	      }
	      var result = _react2["default"].createElement(
	        "div",
	        { className: "LegislatorAvatar" },
	        _react2["default"].createElement("img", { className: imgClass,
	          src: imgURL }),
	        name
	      );

	      if (plain) {
	        var name = name ? _react2["default"].createElement(
	          "div",
	          { className: "LegislatorAvatar-namePlain" },
	          data
	        ) : "";
	        result = _react2["default"].createElement(
	          "div",
	          { className: "LegislatorAvatar" },
	          _react2["default"].createElement("img", { className: "LegislatorAvatar-avatarPlain",
	            src: imgURL }),
	          name
	        );
	      }

	      return result;
	    }
	  }]);

	  return LegislatorAvatar;
	})(_react2["default"].Component);

	exports["default"] = LegislatorAvatar;
	module.exports = exports["default"];

/***/ },
/* 89 */
/*!****************************************!*\
  !*** ./app/components/Input/Input.jsx ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(/*! react */ 1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(/*! react-router */ 28);

	__webpack_require__(/*! ./Input.css */ 267);

	var _IconIconJsx = __webpack_require__(/*! ../Icon/Icon.jsx */ 74);

	var _IconIconJsx2 = _interopRequireDefault(_IconIconJsx);

	var Input = (function (_React$Component) {
	  function Input() {
	    _classCallCheck(this, Input);

	    if (_React$Component != null) {
	      _React$Component.apply(this, arguments);
	    }
	  }

	  _inherits(Input, _React$Component);

	  _createClass(Input, [{
	    key: "render",
	    value: function render() {
	      var _this = this;

	      var _props = this.props;
	      var handleInputChange = _props.handleInputChange;
	      var handleSetInput = _props.handleSetInput;
	      var currentTerm = _props.currentTerm;
	      var examples = _props.examples;
	      var placeholder = _props.placeholder;

	      var exampleButtons = examples.map(function (item, key) {
	        var boundClick = handleSetInput.bind(_this, item);

	        return _react2["default"].createElement(
	          "div",
	          { className: "Input-keyword",
	            onClick: boundClick,
	            key: key },
	          item
	        );
	      });

	      var boundClearInput = handleSetInput.bind(this, "");
	      var boundClearInputItem = currentTerm ? _react2["default"].createElement(
	        "div",
	        { className: "Input-clearInput",
	          onClick: boundClearInput },
	        "x"
	      ) : "";

	      return _react2["default"].createElement(
	        "div",
	        { className: "Input" },
	        _react2["default"].createElement("input", { className: "Input-textInput",
	          onChange: handleInputChange,
	          placeholder: placeholder,
	          value: currentTerm }),
	        boundClearInputItem,
	        _react2["default"].createElement(
	          "div",
	          { className: "Input-hint" },
	          "大家都在找：",
	          exampleButtons
	        )
	      );
	    }
	  }]);

	  return Input;
	})(_react2["default"].Component);

	exports["default"] = Input;
	module.exports = exports["default"];

/***/ },
/* 90 */
/*!**********************************************************!*\
  !*** ./app/containers/PersonListPage/PersonListPage.css ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = {};

/***/ },
/* 91 */
/*!**************************************************!*\
  !*** ./app/containers/PersonListPage/ly-info.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = {
	  "data": [{
	    "name": "許忠信",
	    "party": "台灣團結聯盟",
	    "party_eng": "TSU",
	    "caucus": "TSU",
	    "constituency": ["proportional"]
	  }, {
	    "name": "丁守中",
	    "party": "中國國民黨",
	    "party_eng": "KMT",
	    "caucus": "KMT",
	    "constituency": ["TPE", 1],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6706",
	        "address": "10051臺北市中正區濟南路1段3-1號0707室",
	        "fax": "02-2358-6710"
	      },
	      "北投服務處": {
	        "phone": "02-2828-7789",
	        "address": "11262臺北市北投區承德路七段188巷2號1樓",
	        "fax": "02-2828-6877"
	      }
	    },
	    "constituency_detail": "北投區 士林區13里"
	  }, {
	    "name": "孔文吉",
	    "party": "中國國民黨",
	    "party_eng": "KMT",
	    "caucus": "KMT",
	    "constituency": ["aborigine", "highland"],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-8246",
	        "address": "10051臺北市中正區濟南路1段3-1號0203室",
	        "fax": "02-2358-8250"
	      }
	    },
	    "constituency_detail": "山地原住民"
	  }, {
	    "name": "尤美女",
	    "party": "民主進步黨",
	    "party_eng": "DPP",
	    "caucus": "DPP",
	    "constituency": ["proportional"],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-8112",
	        "address": "10051臺北市中正區濟南路1段3-1號0402室",
	        "fax": "02-2358-8113"
	      }
	    },
	    "constituency_detail": ""
	  }, {
	    "name": "王廷升",
	    "party": "中國國民黨",
	    "party_eng": "KMT",
	    "caucus": "KMT",
	    "constituency": ["HUA", 0],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6688",
	        "address": "10051臺北市中正區濟南路1段3-1號1103室",
	        "fax": "02-2358-6690"
	      },
	      "花蓮市服務處": {
	        "phone": "03-833-0729",
	        "address": "970花蓮市中原路462號",
	        "fax": "03-836-2156"
	      }
	    },
	    "constituency_detail": "全縣"
	  }, {
	    "name": "王育敏",
	    "party": "中國國民黨",
	    "party_eng": "KMT",
	    "caucus": "KMT",
	    "constituency": ["proportional"],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-8261",
	        "address": "10051臺北市中正區青島東路1-3號7103室",
	        "fax": "02-2358-8265"
	      }
	    },
	    "constituency_detail": ""
	  }, {
	    "name": "王金平",
	    "party": "中國國民黨",
	    "party_eng": "KMT",
	    "caucus": "KMT",
	    "constituency": ["proportional"],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6011~15",
	        "address": "10051臺北市中正區中山南路1號",
	        "fax": "02-2395-5317"
	      },
	      "高雄服務處": {
	        "phone": "07-607-5509",
	        "address": "高雄市路竹區甲南村大仁路369巷7號",
	        "fax": "07-607-5669"
	      }
	    },
	    "constituency_detail": ""
	  }, {
	    "name": "王進士",
	    "party": "中國國民黨",
	    "party_eng": "KMT",
	    "caucus": "KMT",
	    "constituency": ["PIF", 2],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6626",
	        "address": "10051臺北市中正區濟南路1段3-1號0401室",
	        "fax": "02-2358-6630"
	      },
	      "屏東服務處": {
	        "phone": "08-723-2505",
	        "address": "屏東市公園東路115號",
	        "fax": "08-721-5191"
	      },
	      "萬丹服務處": {
	        "phone": "08-776-3989",
	        "address": "屏東縣萬丹鄉萬全村萬丹路一段412號",
	        "fax": "08-776-3989"
	      }
	    },
	    "constituency_detail": "屏東市 麟洛鄉 萬丹鄉"
	  }, {
	    "name": "王惠美",
	    "party": "中國國民黨",
	    "party_eng": "KMT",
	    "caucus": "KMT",
	    "constituency": ["CHA", 1],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6181",
	        "address": "10051臺北市中正區濟南路1段3-1號0501室",
	        "fax": "02-2358-6185"
	      },
	      "鹿港服務處": {
	        "phone": "04-775-4168",
	        "address": "彰化縣鹿港鎮永安里鹿東路55號",
	        "fax": "04-777-9150"
	      },
	      "和美服務處": {
	        "phone": "04-757-8568",
	        "address": "彰化縣和美鎮德美路456號",
	        "fax": "04-757-4822"
	      }
	    },
	    "constituency_detail": "伸港鄉 線西鄉 和美鎮 鹿港鎮 福興鄉 秀水鄉"
	  }, {
	    "name": "田秋堇",
	    "party": "民主進步黨",
	    "party_eng": "DPP",
	    "caucus": "DPP",
	    "constituency": ["proportional"],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-8316",
	        "address": "10051臺北市中正區濟南路1段3-1號0806室",
	        "fax": "02-2358-8320"
	      },
	      "立法委員田秋堇服務處": {
	        "phone": "03-960-1321",
	        "address": "羅東鎮中山路2段171號",
	        "fax": "03-960-1592"
	      }
	    },
	    "constituency_detail": ""
	  }, {
	    "name": "江啟臣",
	    "party": "中國國民黨",
	    "party_eng": "KMT",
	    "caucus": "KMT",
	    "constituency": ["TXG", 8],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6726",
	        "address": "10051臺北市中正區濟南路1段3-1號2102室",
	        "fax": "02-2358-6730"
	      },
	      "豐原服務處": {
	        "phone": "04-2515-9998",
	        "address": "臺中市豐原區南村路20號",
	        "fax": "04-2515-6798"
	      },
	      "東勢服務處": {
	        "phone": "04-2577-3099",
	        "address": "臺中市東勢區第五橫街32號",
	        "fax": "04-2577-3167"
	      }
	    },
	    "constituency_detail": "豐原區 石岡區 新社區 東勢區 和平區"
	  }, {
	    "name": "江惠貞",
	    "party": "中國國民黨",
	    "party_eng": "KMT",
	    "caucus": "KMT",
	    "constituency": ["TPQ", 7],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6532",
	        "address": "10051臺北市中正區濟南路1段3-1號0808室",
	        "fax": "02-2358-6585"
	      },
	      "板橋服務處": {
	        "phone": "02-2961-0599",
	        "address": "新北市板橋區實踐路30號2樓",
	        "fax": "02-2961-9899"
	      }
	    },
	    "constituency_detail": "板橋區（縣民大道 湳仔溝以東）61里"
	  }, {
	    "name": "何欣純",
	    "party": "民主進步黨",
	    "party_eng": "DPP",
	    "caucus": "DPP",
	    "constituency": ["TXG", 7],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-8388",
	        "address": "10051臺北市中正區濟南路1段3-1號0301室",
	        "fax": "02-2358-8390"
	      },
	      "大里服務處": {
	        "phone": "04-2483-6527",
	        "address": "臺中市大里區大里路63號",
	        "fax": "04-2482-8743"
	      },
	      "太平服務處": {
	        "phone": "04-2276-3111",
	        "address": "台中市太平區新平路二段142號",
	        "fax": "04-2276-3555"
	      }
	    },
	    "constituency_detail": "太平區 大里區25里"
	  }, {
	    "name": "吳宜臻",
	    "party": "民主進步黨",
	    "party_eng": "DPP",
	    "caucus": "DPP",
	    "constituency": ["proportional"],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-8580",
	        "address": "10051臺北市中正區鎮江街2號5105室",
	        "fax": "02-2358-8135"
	      }
	    },
	    "constituency_detail": ""
	  }, {
	    "name": "吳育仁",
	    "party": "中國國民黨",
	    "party_eng": "KMT",
	    "caucus": "KMT",
	    "constituency": ["proportional"],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6656",
	        "address": "10051臺北市中正區濟南路1段3-1號0305室",
	        "fax": "02-2358-6660"
	      },
	      "雲林服務處": {
	        "phone": "05-537-5331",
	        "address": "640雲林縣斗六市明德北路二段401號",
	        "fax": "05-537-5351"
	      }
	    },
	    "constituency_detail": ""
	  }, {
	    "name": "吳育昇",
	    "party": "中國國民黨",
	    "party_eng": "KMT",
	    "caucus": "KMT",
	    "constituency": ["TPQ", 1],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-8011",
	        "address": "10051臺北市中正區青島東路10號3502室",
	        "fax": "02-2358-8015"
	      },
	      "泰山服務處": {
	        "phone": "02-2296-0360",
	        "address": "新北市泰山區明志路一段478號2樓",
	        "fax": "02-2296-1607"
	      },
	      "淡水服務處": {
	        "phone": "02-2625-5158",
	        "address": "新北市淡水區中正東路55號2樓(淡水捷運站對面)",
	        "fax": "02-2625-5159"
	      },
	      "林口服務處": {
	        "phone": "02-2601-8588",
	        "address": "新北市林口區中正路100號",
	        "fax": "02-2601-8589"
	      }
	    },
	    "constituency_detail": "石門區 三芝區 淡水區 八里區 林口區 泰山區"
	  }, {
	    "name": "吳秉叡",
	    "party": "民主進步黨",
	    "party_eng": "DPP",
	    "caucus": "DPP",
	    "constituency": ["proportional"],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6858",
	        "address": "10051臺北市中正區濟南路1段3-1號0902室",
	        "fax": "02-2358-6859"
	      },
	      "福營服務處": {
	        "phone": "02-2208-3852",
	        "address": "新北市新莊區後港一路130巷48號1樓",
	        "fax": "02-2208-3853"
	      },
	      "大新莊服務處": {
	        "phone": "02-2276-8287",
	        "address": "新北市新莊區中原路327號1樓",
	        "fax": "02-2277-5657"
	      },
	      "新北總聯絡處": {
	        "phone": "02-8522-5786",
	        "address": "新北市新莊區化成路路814巷1號",
	        "fax": "02-8522-5726"
	      }
	    },
	    "constituency_detail": ""
	  }, {
	    "name": "呂玉玲",
	    "party": "中國國民黨",
	    "party_eng": "KMT",
	    "caucus": "KMT",
	    "constituency": ["TAO", 5],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6836",
	        "address": "10051臺北市中正區濟南路1段3-1號0905室",
	        "fax": "02-2358-6840"
	      },
	      "平鎮服務處": {
	        "phone": "03-401-5616",
	        "address": "桃園縣平鎮市復興街68號2樓之2",
	        "fax": "03-401-0616"
	      },
	      "龍潭服務處": {
	        "phone": "03-409-6688",
	        "address": "桃園縣龍潭鄉東龍路124號",
	        "fax": "03-480-6549"
	      }
	    },
	    "constituency_detail": "平鎮市 龍潭鄉"
	  }, {
	    "name": "呂學樟",
	    "party": "中國國民黨",
	    "party_eng": "KMT",
	    "caucus": "KMT",
	    "constituency": ["HSZ", 0],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6258",
	        "address": "10051臺北市中正區濟南路1段3-1號0407室",
	        "fax": "02-2358-6260"
	      },
	      "新竹服務處": {
	        "phone": "03-535-8181",
	        "address": "新竹市民族路272號",
	        "fax": "03-542-9399"
	      }
	    },
	    "constituency_detail": "全市"
	  }, {
	    "name": "李昆澤",
	    "party": "民主進步黨",
	    "party_eng": "DPP",
	    "caucus": "DPP",
	    "constituency": ["KHH", 6],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6086",
	        "address": "10051臺北市中正區濟南路1段3-1號2106室",
	        "fax": "02-2358-6090"
	      },
	      "高雄服務處": {
	        "phone": "07-386-8292",
	        "address": "高雄市三民區大昌二路63號",
	        "fax": "07-386-3277"
	      }
	    },
	    "constituency_detail": "三民區45里"
	  }, {
	    "name": "李俊俋",
	    "party": "民主進步黨",
	    "party_eng": "DPP",
	    "caucus": "DPP",
	    "constituency": ["CYI", 0],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6541",
	        "address": "10051臺北市中正區濟南路1段3-1號1001室",
	        "fax": "02-2358-6545"
	      },
	      "嘉義服務處": {
	        "phone": "05-271-9595",
	        "address": "600嘉義市共和路239號",
	        "fax": "05-277-9775"
	      }
	    },
	    "constituency_detail": "全市"
	  }, {
	    "name": "李桐豪",
	    "party": "親民黨",
	    "party_eng": "PFP",
	    "caucus": "PFP",
	    "constituency": ["proportional"],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-8306",
	        "address": "10051臺北市中正區濟南路1段3-1號2116室",
	        "fax": "02-2358-8310"
	      }
	    },
	    "constituency_detail": ""
	  }, {
	    "name": "李貴敏",
	    "party": "中國國民黨",
	    "party_eng": "KMT",
	    "caucus": "KMT",
	    "constituency": ["proportional"],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6246",
	        "address": "10051臺北市中正區鎮江街2號5302室",
	        "fax": "02-2358-6380"
	      }
	    },
	    "constituency_detail": ""
	  }, {
	    "name": "李慶華",
	    "party": "中國國民黨",
	    "party_eng": "KMT",
	    "caucus": "KMT",
	    "constituency": ["TPQ", 12],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6521",
	        "address": "10051臺北市中正區濟南路1段3-1號2111室",
	        "fax": "02-2358-6525"
	      },
	      "汐止服務處": {
	        "phone": "02-2694-1301",
	        "address": "新北市汐止區中興路95號4樓之3",
	        "fax": "02-2694-1302"
	      },
	      "瑞芳服務處": {
	        "phone": "02-2497-7809",
	        "address": "新北市瑞芳區瑞芳街45號2樓",
	        "fax": "02-2497-1969"
	      }
	    },
	    "constituency_detail": "金山區 萬里區 汐止區 平溪區 瑞芳區 雙溪區 貢寮區"
	  }, {
	    "name": "李應元",
	    "party": "民主進步黨",
	    "party_eng": "DPP",
	    "caucus": "DPP",
	    "constituency": ["proportional"],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-8156",
	        "address": "10051臺北市中正區濟南路1段3-1號0701室",
	        "fax": "02-2358-8165"
	      },
	      "斗六服務處": {
	        "phone": "05-532-6355",
	        "address": "雲林縣斗六市武昌路35號",
	        "fax": "05-536-1451"
	      },
	      "虎尾服務處": {
	        "phone": "05-636-5296",
	        "address": "雲林縣虎尾鎮光復路505號",
	        "fax": "05-636-5396"
	      },
	      "新莊服務處": {
	        "phone": "02-2279-7241",
	        "address": "新北市新莊區中華路二段105號2樓",
	        "fax": "02-2995-5221"
	      }
	    },
	    "constituency_detail": ""
	  }, {
	    "name": "李鴻鈞",
	    "party": "中國國民黨",
	    "party_eng": "KMT",
	    "caucus": "KMT",
	    "constituency": ["TPQ", 4],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6236",
	        "address": "10051臺北市中正區濟南路1段3-1號1108室",
	        "fax": "02-2358-6240"
	      },
	      "新莊服務處": {
	        "phone": "02-2992-9199",
	        "address": "新北市新莊區公園路36號",
	        "fax": "02-2992-9818"
	      }
	    },
	    "constituency_detail": "新莊區75里"
	  }, {
	    "name": "邱文彥",
	    "party": "中國國民黨",
	    "party_eng": "KMT",
	    "caucus": "KMT",
	    "constituency": ["proportional"],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-8106",
	        "address": "10051臺北市中正區鎮江街2號5108室",
	        "fax": "02-2358-8110"
	      }
	    },
	    "constituency_detail": ""
	  }, {
	    "name": "邱志偉",
	    "party": "民主進步黨",
	    "party_eng": "DPP",
	    "caucus": "DPP",
	    "constituency": ["KHH", 2],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6561",
	        "address": "10051臺北市中正區青島東路1-3號7303室",
	        "fax": "02-2358-6565"
	      },
	      "岡山服務處": {
	        "phone": "07-623-0655",
	        "address": "高雄市岡山區華園路99號",
	        "fax": "07-623-0671"
	      },
	      "茄萣服務處": {
	        "phone": "07-690-1234",
	        "address": "高雄市茄萣區信義路三段138號",
	        "fax": "07-690-2598"
	      },
	      "橋頭區邱志偉立委與陳政聞議員聯合服務處": {
	        "phone": "07-612-3058",
	        "address": "高雄市橋頭區成功路237號",
	        "fax": "07-611-4926"
	      },
	      "路竹區邱志偉立委與陳明澤議員聯合服務處": {
	        "phone": "07-607-1999",
	        "address": "高雄市路竹區國昌路73號",
	        "fax": "07-607-6869"
	      },
	      "路竹區邱志偉立委與張文瑞議員聯合服務處": {
	        "phone": "07-696-0525",
	        "address": "高雄市路竹區國昌路82號",
	        "fax": "07-691-8588"
	      }
	    },
	    "constituency_detail": "茄萣區 湖內區 路竹區 永安區 岡山區 彌陀區 梓官區 橋頭區"
	  }, {
	    "name": "邱議瑩",
	    "party": "民主進步黨",
	    "party_eng": "DPP",
	    "caucus": "DPP",
	    "constituency": ["KHH", 1],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6516",
	        "address": "10051臺北市中正區濟南路1段3-1號0801室",
	        "fax": "02-2358-6520"
	      },
	      "美濃服務處": {
	        "phone": "07-681-8755",
	        "address": "843高雄市美濃區泰中路866號",
	        "fax": "07-681-8677"
	      }
	    },
	    "constituency_detail": "那瑪夏區 桃源區 甲仙區 內門區 杉林區 六龜區 阿蓮區 田寮區 旗山區 美濃區 茂林區 燕巢區 大社區 大樹區"
	  }, {
	    "name": "賴振昌",
	    "party": "台灣團結聯盟",
	    "party_eng": "TSU",
	    "caucus": "TSU",
	    "constituency": ["proportional"],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-8558",
	        "address": "10051臺北市中正區濟南路一段3-1號1008室",
	        "fax": "02-2358-8560"
	      }
	    },
	    "constituency_detail": ""
	  }, {
	    "name": "黃國書",
	    "party": "民主進步黨",
	    "party_eng": "DPP",
	    "caucus": "DPP",
	    "constituency": ["TXG", 6],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-8358",
	        "address": "10051臺北市中正區濟南路1段3-1號0302室",
	        "fax": "02-2358-8050"
	      },
	      "台中服務處": {
	        "phone": "04-2262-0088",
	        "address": "臺中市南區復興路二段30-22號",
	        "fax": "04-2265-8822"
	      }
	    },
	    "constituency_detail": "西區 中區 東區 南區"
	  }, {
	    "name": "林岱樺",
	    "party": "民主進步黨",
	    "party_eng": "DPP",
	    "caucus": "DPP",
	    "constituency": ["KHH", 4],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-8021",
	        "address": "10051臺北市中正區濟南路1段3-1號0706室",
	        "fax": "02-2358-8030"
	      },
	      "大竂服務處": {
	        "phone": "07-781-8117",
	        "address": "高雄市大竂區力行路61號",
	        "fax": "07-781-8167"
	      },
	      "鳳山服務處": {
	        "phone": "07-748-1033",
	        "address": "高雄市鳳山區五權路160號",
	        "fax": "07-741-9584"
	      }
	    },
	    "constituency_detail": "仁武區 鳥松區 大寮區 林園區"
	  }, {
	    "name": "莊瑞雄",
	    "party": "中國國民黨",
	    "party_eng": "KMT",
	    "caucus": "KMT",
	    "constituency": ["NAN", 2],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6171",
	        "address": "10051臺北市中正區濟南路1段3-1號0805室",
	        "fax": "02-2358-6270"
	      },
	      "南投服務處": {
	        "phone": "049-222-7688",
	        "address": "南投市復興路75號之1",
	        "fax": "049-224-2379"
	      }
	    },
	    "constituency_detail": "南投市 名間鄉 集集鎮 竹山鎮 鹿谷鄉 水里鄉 信義鄉"
	  }, {
	    "name": "林郁方",
	    "party": "中國國民黨",
	    "party_eng": "KMT",
	    "caucus": "KMT",
	    "constituency": ["TPE", 5],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6276",
	        "address": "10051臺北市中正區濟南路1段3-1號0601室",
	        "fax": "02-2358-6280"
	      }
	    },
	    "constituency_detail": "萬華區 中正區21里"
	  }, {
	    "name": "林國正",
	    "party": "中國國民黨",
	    "party_eng": "KMT",
	    "caucus": "KMT",
	    "constituency": ["KHH", 9],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6923",
	        "address": "10051臺北市中正區濟南路1段3-1號2119室",
	        "fax": "02-2358-6925"
	      },
	      "高雄服務處": {
	        "phone": "07-721-1213",
	        "address": "高雄市前鎮區永豐路19之6號",
	        "fax": "07-721-3055"
	      }
	    },
	    "constituency_detail": "前鎮區51里 小港區"
	  }, {
	    "name": "林淑芬",
	    "party": "民主進步黨",
	    "party_eng": "DPP",
	    "caucus": "DPP",
	    "constituency": ["TPQ", 2],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-8186",
	        "address": "10051臺北市中正區青島東路1-3號7301室",
	        "fax": "02-2358-8190"
	      },
	      "蘆洲服務處": {
	        "phone": "02-8285-6412",
	        "address": "新北市蘆洲區長興路25號",
	        "fax": "02-2281-7980"
	      },
	      "五股服務處": {
	        "phone": "02-2291-2995",
	        "address": "臺北縣五股鄉民義路一段37號",
	        "fax": "02-2291-2355"
	      }
	    },
	    "constituency_detail": "五股區 蘆洲區 三重區16里"
	  }, {
	    "name": "林滄敏",
	    "party": "中國國民黨",
	    "party_eng": "KMT",
	    "caucus": "KMT",
	    "constituency": ["CHA", 2],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-8281",
	        "address": "10051臺北市中正區鎮江街2號5102室",
	        "fax": "02-2358-8285"
	      },
	      "彰化服務處": {
	        "phone": "04-728-2282",
	        "address": "彰化市成功里旭光西路90號",
	        "fax": "04-723-9961"
	      }
	    },
	    "constituency_detail": "彰化市 花壇鄉 芬園鄉"
	  }, {
	    "name": "林德福",
	    "party": "中國國民黨",
	    "party_eng": "KMT",
	    "caucus": "KMT",
	    "constituency": ["TPQ", 9],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6995",
	        "address": "10051臺北市中正區青島東路1-3號7202室",
	        "fax": "02-2358-6999"
	      },
	      "永和服務處": {
	        "phone": "02-2232-9899",
	        "address": "新北市永和區永和路二段403號",
	        "fax": "02-3233-4625"
	      }
	    },
	    "constituency_detail": "永和區 中和區17里"
	  }, {
	    "name": "林鴻池",
	    "party": "中國國民黨",
	    "party_eng": "KMT",
	    "caucus": "KMT",
	    "constituency": ["TPQ", 6],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6871",
	        "address": "10051臺北市中正區濟南路1段3-1號0506室",
	        "fax": "02-2358-6875"
	      },
	      "板橋服務處": {
	        "phone": "02-2253-6788",
	        "address": "新北市板橋區文化路一段120號6樓之1",
	        "fax": "02-2253-7688"
	      }
	    },
	    "constituency_detail": "板橋區（縣民大道 湳仔溝以西）65里"
	  }, {
	    "name": "姚文智",
	    "party": "民主進步黨",
	    "party_eng": "DPP",
	    "caucus": "DPP",
	    "constituency": ["TPE", 2],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6758",
	        "address": "10051臺北市中正區濟南路1段3-1號1102室",
	        "fax": "02-2358-6040"
	      }
	    },
	    "constituency_detail": "大同區 士林區38里"
	  }, {
	    "name": "柯建銘",
	    "party": "民主進步黨",
	    "party_eng": "DPP",
	    "caucus": "DPP",
	    "constituency": ["proportional"],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6106",
	        "address": "10051臺北市中正區青島東路3號3樓",
	        "fax": "02-2358-6110"
	      },
	      "新竹服務處": {
	        "phone": "03-526-9880",
	        "address": "新竹市四維路15號3樓",
	        "fax": "03-523-2902"
	      }
	    },
	    "constituency_detail": ""
	  }, {
	    "name": "段宜康",
	    "party": "民主進步黨",
	    "party_eng": "DPP",
	    "caucus": "DPP",
	    "constituency": ["proportional"],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6196",
	        "address": "10051臺北市中正區濟南路1段3-1號0308室",
	        "fax": "02-2358-6200"
	      }
	    },
	    "constituency_detail": ""
	  }, {
	    "name": "洪秀柱",
	    "party": "中國國民黨",
	    "party_eng": "KMT",
	    "caucus": "KMT",
	    "constituency": ["proportional"],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6099",
	        "address": "10051臺北市中正區濟南路1段3-1號12樓",
	        "fax": "02-2358-6100"
	      },
	      "立法委員洪秀柱服務處": {
	        "phone": "02-8923-7667",
	        "address": "新北市永和區永和路一段65巷2號",
	        "fax": "02-8923-7668"
	      }
	    },
	    "constituency_detail": ""
	  }, {
	    "name": "紀國棟",
	    "party": "中國國民黨",
	    "party_eng": "KMT",
	    "caucus": "KMT",
	    "constituency": ["proportional"],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6936",
	        "address": "10051臺北市中正區濟南路1段3-1號0303",
	        "fax": "02-2358-6940"
	      },
	      "大肚服務處": {
	        "phone": "04-2691-2967",
	        "address": "臺中市大肚區自強里遊園路二段278號",
	        "fax": "04-2691-3967"
	      }
	    },
	    "constituency_detail": ""
	  }, {
	    "name": "孫大千",
	    "party": "中國國民黨",
	    "party_eng": "KMT",
	    "caucus": "KMT",
	    "constituency": ["TAO", 6],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6881",
	        "address": "10051臺北市中正區濟南路1段3-1號2118室",
	        "fax": "02-2358-6885"
	      },
	      "桃園服務處": {
	        "phone": "03-375-5558",
	        "address": "桃園縣八德市廣福路299號",
	        "fax": "03-375-2000"
	      }
	    },
	    "constituency_detail": "八德市 大溪鎮 復興鄉 中壢市12里"
	  }, {
	    "name": "徐少萍",
	    "party": "中國國民黨",
	    "party_eng": "KMT",
	    "caucus": "KMT",
	    "constituency": ["proportional"],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6231",
	        "address": "10051臺北市中正區濟南路1段3-1號0607室",
	        "fax": "02-2358-6235"
	      },
	      "基隆服務處": {
	        "phone": "02-2427-7799",
	        "address": "基隆市義一路87號9樓之2",
	        "fax": "02-2428-0097"
	      }
	    },
	    "constituency_detail": ""
	  }, {
	    "name": "徐欣瑩",
	    "party": "中國國民黨",
	    "party_eng": "KMT",
	    "caucus": "KMT",
	    "constituency": ["HSQ", 0],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6351",
	        "address": "10051臺北市中正區濟南路1段3-1號0306室",
	        "fax": "02-2358-6355"
	      },
	      "竹北服務處": {
	        "phone": "03-657-1621",
	        "address": "新竹縣竹北市光明六路235號",
	        "fax": "03-657-2133"
	      }
	    },
	    "constituency_detail": "全縣"
	  }, {
	    "name": "許淑華",
	    "party": "中國國民黨",
	    "party_eng": "KMT",
	    "caucus": "KMT",
	    "constituency": ["MIA", 2],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6975",
	        "address": "10051臺北市中正區濟南路1段3-1號2107室",
	        "fax": "02-2358-6979"
	      },
	      "頭份服務處": {
	        "phone": "037-666-369",
	        "address": "苗栗縣頭份鎮忠孝里信東路206號",
	        "fax": "037-674-319"
	      },
	      "苗栗服務處": {
	        "phone": "037-374-000",
	        "address": "苗栗市自治路517號",
	        "fax": "037-320-216"
	      },
	      "公館服務處": {
	        "phone": "037-223-566",
	        "address": "苗栗縣公館鄉仁愛路二段168-1號",
	        "fax": "037-239-233"
	      }
	    },
	    "constituency_detail": "頭份鎮 三灣鄉 南庄鄉 苗栗市 頭屋鄉 獅潭鄉 公館鄉 大湖鄉 泰安鄉 卓蘭鎮"
	  }, {
	    "name": "翁重鈞",
	    "party": "中國國民黨",
	    "party_eng": "KMT",
	    "caucus": "KMT",
	    "constituency": ["CYQ", 1],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6781",
	        "address": "10051臺北市中正區濟南路1段3-1號0906室",
	        "fax": "02-2358-6785"
	      },
	      "嘉義義竹服務處": {
	        "phone": "05-341-2029",
	        "address": "嘉義縣義竹鄉仁里村407-4號",
	        "fax": "05-341-7251"
	      }
	    },
	    "constituency_detail": "六腳鄉 東石鄉 朴子市 太保市 布袋鎮 義竹鄉 鹿草鄉 水上鄉"
	  }, {
	    "name": "陳其邁",
	    "party": "民主進步黨",
	    "party_eng": "DPP",
	    "caucus": "DPP",
	    "constituency": ["proportional"],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-8566",
	        "address": "10051臺北市中正區濟南路1段3-1號1105室",
	        "fax": "02-2358-8570"
	      },
	      "高雄服務處": {
	        "phone": "07-382-5189",
	        "address": "高雄市三民區九如一路399號",
	        "fax": "07-382-5177"
	      }
	    },
	    "constituency_detail": ""
	  }, {
	    "name": "陳明文",
	    "party": "民主進步黨",
	    "party_eng": "DPP",
	    "caucus": "DPP",
	    "constituency": ["CYQ", 2],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-8101",
	        "address": "10051臺北市中正區青島東路1-3號7105室",
	        "fax": "02-2358-8105"
	      },
	      "嘉義服務處": {
	        "phone": "05-225-5589",
	        "address": "600嘉義市力行街72號",
	        "fax": "05-225-1641"
	      }
	    },
	    "constituency_detail": "溪口鄉 大林鎮 梅山鄉 新港鄉 民雄鄉 竹崎鄉 中埔鄉 番路鄉 大埔鄉 阿里山鄉"
	  }, {
	    "name": "陳亭妃",
	    "party": "民主進步黨",
	    "party_eng": "DPP",
	    "caucus": "DPP",
	    "constituency": ["TNN", 3],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6761",
	        "address": "10051臺北市中正區濟南路1段3-1號1101室",
	        "fax": "02-2358-6755"
	      },
	      "北區服務處": {
	        "phone": "06-280-3906",
	        "address": "704臺南市北區海安路三段963號",
	        "fax": "06-358-6489"
	      },
	      "安南區服務處": {
	        "phone": "06-256-8012",
	        "address": "709臺南市安南區安中路二段8號",
	        "fax": "06-256-0701"
	      }
	    },
	    "constituency_detail": "安南區 北區 中西區"
	  }, {
	    "name": "陳唐山",
	    "party": "民主進步黨",
	    "party_eng": "DPP",
	    "caucus": "DPP",
	    "constituency": ["TNN", 5],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-8211",
	        "address": "10051臺北市中正區鎮江街2號5305室",
	        "fax": "02-2358-8215"
	      },
	      "台南服務處": {
	        "phone": "06-201-8217",
	        "address": "臺南市永康區永忠路88號",
	        "fax": "06-201-8219"
	      }
	    },
	    "constituency_detail": "永康區 仁德區 歸仁區 關廟區 龍崎區"
	  }, {
	    "name": "陳根德",
	    "party": "中國國民黨",
	    "party_eng": "KMT",
	    "caucus": "KMT",
	    "constituency": ["TAO", 1],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6221",
	        "address": "10051臺北市中正區鎮江街2號5303室",
	        "fax": "02-2358-6225"
	      },
	      "桃園市服務處": {
	        "phone": "(03)338-6656",
	        "address": "桃園縣桃園市大有路80號",
	        "fax": "(03)338-6599"
	      },
	      "龜山服務處": {
	        "phone": "03-329-9255",
	        "address": "桃園縣龜山鄉三民路70號",
	        "fax": "03-329-9769"
	      },
	      "蘆竹服務處": {
	        "phone": "03-312-1988",
	        "address": "桃園縣蘆竹鄉新南路一段128號",
	        "fax": "03-312-1875"
	      }
	    },
	    "constituency_detail": "蘆竹鄉 龜山鄉 桃園市10里"
	  }, {
	    "name": "陳淑慧",
	    "party": "中國國民黨",
	    "party_eng": "KMT",
	    "caucus": "KMT",
	    "constituency": ["proportional"],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6931",
	        "address": "10051臺北市中正區濟南路1段3-1號1006室",
	        "fax": "02-2358-6935"
	      },
	      "台南服務處": {
	        "phone": "06-268-5889",
	        "address": "臺南市東區崇明14街53號",
	        "fax": "06-269-2889"
	      }
	    },
	    "constituency_detail": ""
	  }, {
	    "name": "陳雪生",
	    "party": "無黨籍",
	    "party_eng": "NP",
	    "caucus": null,
	    "constituency": ["LJF", 0],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6631",
	        "address": "10051臺北市中正區濟南路1段3-1號2117室",
	        "fax": "02-2358-6635"
	      },
	      "馬祖服務處": {
	        "phone": "0836-25018",
	        "address": "連江縣南竿鄉介壽村237號"
	      }
	    },
	    "constituency_detail": "全縣"
	  }, {
	    "name": "陳超明",
	    "party": "中國國民黨",
	    "party_eng": "KMT",
	    "caucus": "KMT",
	    "constituency": ["MIA", 1],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6611",
	        "address": "10051臺北市中正區濟南路1段3-1號1003室",
	        "fax": "02-2358-6615"
	      },
	      "竹南服務處": {
	        "phone": "037-468-448",
	        "address": "350苗栗縣竹南鎮港墘里10鄰塭內46-1號",
	        "fax": "037-478-508"
	      }
	    },
	    "constituency_detail": "竹南鎮 造橋鄉 後龍鎮 西湖鄉 通霄鎮 銅鑼鄉 苑裡鎮 三義鄉"
	  }, {
	    "name": "陳節如",
	    "party": "民主進步黨",
	    "party_eng": "DPP",
	    "caucus": "DPP",
	    "constituency": ["proportional"],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6046",
	        "address": "10051臺北市中正區濟南路1段3-1號2115室",
	        "fax": "02-2358-6050"
	      }
	    },
	    "constituency_detail": ""
	  }, {
	    "name": "陳碧涵",
	    "party": "中國國民黨",
	    "party_eng": "KMT",
	    "caucus": "KMT",
	    "constituency": ["proportional"],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-8181",
	        "address": "10051臺北市中正區濟南路1段3-1號0603室",
	        "fax": "02-2358-8185"
	      }
	    },
	    "constituency_detail": ""
	  }, {
	    "name": "陳歐珀",
	    "party": "民主進步黨",
	    "party_eng": "DPP",
	    "caucus": "DPP",
	    "constituency": ["ILA", 0],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6220",
	        "address": "10051臺北市中正區濟南路1段3-1號0408室",
	        "fax": "02-2358-6170"
	      },
	      "宜蘭服務處": {
	        "phone": "03-936-6299",
	        "address": "宜蘭市民族路593號",
	        "fax": "03-936-6189"
	      },
	      "羅東服務處": {
	        "phone": "03-957-2099",
	        "address": "羅東鎮興東南路152號",
	        "fax": "03-957-2788"
	      }
	    },
	    "constituency_detail": "全縣"
	  }, {
	    "name": "陳學聖",
	    "party": "中國國民黨",
	    "party_eng": "KMT",
	    "caucus": "KMT",
	    "constituency": ["TAO", 3],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6699",
	        "address": "10051臺北市中正區濟南路1段3-1號0908室",
	        "fax": "02-2358-6700"
	      },
	      "中壢服務處": {
	        "address": "桃園縣中壢市中央西路二段281號4樓"
	      }
	    },
	    "constituency_detail": "中壢市69里"
	  }, {
	    "name": "陳鎮湘",
	    "party": "中國國民黨",
	    "party_eng": "KMT",
	    "caucus": "KMT",
	    "constituency": ["proportional"],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-8286",
	        "address": "10051臺北市中正區青島東路1-3號7302室",
	        "fax": "02-2358-8290"
	      }
	    },
	    "constituency_detail": ""
	  }, {
	    "name": "馬文君",
	    "party": "中國國民黨",
	    "party_eng": "KMT",
	    "caucus": "KMT",
	    "constituency": ["NAN", 1],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6816",
	        "address": "10051臺北市中正區青島東路1-3號7203室",
	        "fax": "02-2358-6820"
	      },
	      "埔里服務處": {
	        "phone": "049-242-3248",
	        "address": "南投縣埔里鎮西寧路36號",
	        "fax": "049-290-1626"
	      },
	      "草屯服務處": {
	        "phone": "049-235-5807",
	        "address": "南投縣草屯鎮博愛路411號",
	        "fax": "049-235-5023"
	      }
	    },
	    "constituency_detail": "草屯鎮 國姓鄉 埔里鎮 仁愛鄉 中寮鄉 魚池鄉"
	  }, {
	    "name": "高志鵬",
	    "party": "民主進步黨",
	    "party_eng": "DPP",
	    "caucus": "DPP",
	    "constituency": ["TPQ", 3],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6241",
	        "address": "10051臺北市中正區濟南路1段3-1號0503室",
	        "fax": "02-2358-6245"
	      },
	      "三重服務處": {
	        "phone": "02-8988-1368",
	        "address": "新北市三重區忠孝路一段153號",
	        "fax": "02-8988-3076"
	      }
	    },
	    "constituency_detail": "三重區103里"
	  }, {
	    "name": "高金素梅",
	    "party": "無黨團結聯盟",
	    "party_eng": "NPU",
	    "caucus": null,
	    "constituency": ["aborigine", "highland"],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6051",
	        "address": "10051臺北市中正區青島東路10號3507室",
	        "fax": "02-2358-6055"
	      },
	      "南區服務處": {
	        "phone": "08-799-5962",
	        "address": "屏東縣瑪家鄉北葉村9鄰風景巷1-3號",
	        "fax": "08-799-5963"
	      }
	    },
	    "constituency_detail": "山地原住民"
	  }, {
	    "name": "張嘉郡",
	    "party": "中國國民黨",
	    "party_eng": "KMT",
	    "caucus": "KMT",
	    "constituency": ["YUN", 1],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6970",
	        "address": "10051臺北市中正區濟南路1段3-1號0206室",
	        "fax": "02-2358-6974"
	      },
	      "虎尾服務處": {
	        "phone": "05-632-0629",
	        "address": "雲林縣虎尾鎮平和里青埔2-23號",
	        "fax": "05-633-3318"
	      },
	      "北港服務處": {
	        "phone": "05-782-2088",
	        "address": "雲林縣北港鎮公園路406號",
	        "fax": "05-782-2848"
	      }
	    },
	    "constituency_detail": "麥寮鄉 台西鄉 東勢鄉 褒忠鄉 土庫鎮 虎尾鎮 四湖鄉 元長鄉 口湖鄉 水林鄉 北港鎮"
	  }, {
	    "name": "張慶忠",
	    "party": "中國國民黨",
	    "party_eng": "KMT",
	    "caucus": "KMT",
	    "constituency": ["TPQ", 8],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6896",
	        "address": "10051臺北市中正區濟南路1段3-1號1002室",
	        "fax": "02-2358-6900"
	      },
	      "中和服務處": {
	        "phone": "02-8221-5879",
	        "address": "新北市中和區建康路107號1樓",
	        "fax": "02-8221-3690"
	      }
	    },
	    "constituency_detail": "中和區76里"
	  }, {
	    "name": "陳怡潔",
	    "party": "親民黨",
	    "party_eng": "PFP",
	    "caucus": "PFP",
	    "constituency": ["proportional"],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6798",
	        "address": "10051臺北市中正區濟南路1段3-1號0507室",
	        "fax": "02-2358-6800"
	      }
	    },
	    "constituency_detail": ""
	  }, {
	    "name": "周倪安",
	    "party": "台灣團結聯盟",
	    "party_eng": "TSU",
	    "caucus": "TSU",
	    "constituency": ["proportional"],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6868",
	        "address": "10051臺北市中正區青島東路1號3203室",
	        "fax": "02-2358-6870"
	      }
	    },
	    "constituency_detail": ""
	  }, {
	    "name": "許添財",
	    "party": "民主進步黨",
	    "party_eng": "DPP",
	    "caucus": "DPP",
	    "constituency": ["TNN", 4],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6909",
	        "address": "10051臺北市中正區濟南路1段3-1號0903室",
	        "fax": "02-2358-6920"
	      },
	      "台南服務處": {
	        "phone": "06-298-3701",
	        "address": "臺南市安平區永華路二段822號",
	        "fax": "06-298-3163"
	      },
	      "灣裡聯絡處": {
	        "phone": "06-296-3568",
	        "address": "台南市南區明興路1331號 (林良文理事長)"
	      }
	    },
	    "constituency_detail": "安平區 南區 東區"
	  }, {
	    "name": "許智傑",
	    "party": "民主進步黨",
	    "party_eng": "DPP",
	    "caucus": "DPP",
	    "constituency": ["KHH", 8],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-8151",
	        "address": "10051臺北市中正區濟南路1段3-1號0703室",
	        "fax": "02-2358-6625"
	      },
	      "鳳山服務處": {
	        "phone": "07-768-2666;07-768-1899",
	        "address": "830高雄市鳳山區保泰路96號",
	        "fax": "07-768-9900"
	      },
	      "": {
	        "phone": "07-768-1899"
	      }
	    },
	    "constituency_detail": "鳳山區"
	  }, {
	    "name": "曾巨威",
	    "party": "中國國民黨",
	    "party_eng": "KMT",
	    "caucus": "KMT",
	    "constituency": ["proportional"],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6381",
	        "address": "10051臺北市中正區濟南路1段3-1號0705室",
	        "fax": "02-2358-6390"
	      }
	    },
	    "constituency_detail": ""
	  }, {
	    "name": "葉宜津",
	    "party": "民主進步黨",
	    "party_eng": "DPP",
	    "caucus": "DPP",
	    "constituency": ["TNN", 1],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6291",
	        "address": "10051臺北市中正區濟南路1段3-1號0403室",
	        "fax": "02-2358-6295"
	      },
	      "新營服務處": {
	        "phone": "06-657-2808",
	        "address": "臺南市新營區民生路130號",
	        "fax": "06-657-2818"
	      },
	      "安平服務處": {
	        "phone": "06-295-0826",
	        "address": "臺南市安平區健康路三段206號",
	        "fax": "06-295-0829"
	      }
	    },
	    "constituency_detail": "後壁區 白河區 北門區 學甲區 鹽水區 新營區 柳營區 東山區 將軍區 下營區 六甲區 官田區"
	  }, {
	    "name": "費鴻泰",
	    "party": "中國國民黨",
	    "party_eng": "KMT",
	    "caucus": "KMT",
	    "constituency": ["TPE", 7],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6990",
	        "address": "10051臺北市中正區濟南路1段3-1號0502室",
	        "fax": "02-2358-6994"
	      },
	      "服務處": {
	        "phone": "02-2729-1966",
	        "address": "11050臺北市信義區莊敬路311號5樓",
	        "fax": "02-2720-9492"
	      }
	    },
	    "constituency_detail": "信義區 松山區13里"
	  }, {
	    "name": "葉津鈴",
	    "party": "台灣團結聯盟",
	    "party_eng": "TSU",
	    "caucus": "TSU",
	    "constituency": ["proportional"],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6876",
	        "address": "10051臺北市中正區濟南路一段3-1號405室",
	        "fax": "02-2358-6880"
	      },
	      "高雄服務處": {
	        "phone": "07-333-2333",
	        "address": "高雄市前鎮區滇池街193號",
	        "fax": "07-338-8957"
	      }
	    },
	    "constituency_detail": ""
	  }, {
	    "name": "黃志雄",
	    "party": "中國國民黨",
	    "party_eng": "KMT",
	    "caucus": "KMT",
	    "constituency": ["TPQ", 5],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6391",
	        "address": "10051臺北市中正區濟南路1段3-1號0606室",
	        "fax": "02-2358-6395"
	      },
	      "樹林服務處": {
	        "phone": "02-2680-0775",
	        "address": "23852新北市樹林區中山路三段137號",
	        "fax": "02-2680-5365"
	      },
	      "鶯歌服務處": {
	        "phone": "02-8678-0909",
	        "address": "新北市鶯歌區光明街52號",
	        "fax": "02-8678-0707"
	      },
	      "新莊服務處": {
	        "phone": "02-2204-2269",
	        "address": "臺北縣新莊市龍安路485號",
	        "fax": "02-2204-0486"
	      }
	    },
	    "constituency_detail": "樹林區 鶯歌區 新莊區9里"
	  }, {
	    "name": "黃昭順",
	    "party": "中國國民黨",
	    "party_eng": "KMT",
	    "caucus": "KMT",
	    "constituency": ["KHH", 3],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6786",
	        "address": "10051臺北市中正區濟南路1段3-1號1107室",
	        "fax": "02-2358-6790"
	      },
	      "高雄服務處": {
	        "phone": "07-341-3361",
	        "address": "813高雄市左營區新庄仔路425號",
	        "fax": "07-341-2672"
	      }
	    },
	    "constituency_detail": "楠梓區 左營區"
	  }, {
	    "name": "黃偉哲",
	    "party": "民主進步黨",
	    "party_eng": "DPP",
	    "caucus": "DPP",
	    "constituency": ["TNN", 2],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-8311",
	        "address": "10051臺北市中正區鎮江街2號5106室",
	        "fax": "02-2358-8315"
	      },
	      "佳里服務處": {
	        "phone": "06-723-0100",
	        "address": "臺南市佳里區進學路130號",
	        "fax": "06-723-0023"
	      },
	      "麻豆服務處": {
	        "phone": "06-571-7753",
	        "address": "臺南市麻豆區南勢里62-2號",
	        "fax": "06-571-0225"
	      }
	    },
	    "constituency_detail": "七股區 佳里區 麻豆區 善化區 大內區 玉井區 楠西區 西港區 安定區 新市區 山上區 新化區 左鎮區 南化區"
	  }, {
	    "name": "楊玉欣",
	    "party": "中國國民黨",
	    "party_eng": "KMT",
	    "caucus": "KMT",
	    "constituency": ["proportional"],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6666",
	        "address": "10051臺北市中正區濟南路1段3-1號0608室",
	        "fax": "02-2358-6670"
	      }
	    },
	    "constituency_detail": ""
	  }, {
	    "name": "楊應雄",
	    "party": "中國國民黨",
	    "party_eng": "KMT",
	    "caucus": "KMT",
	    "constituency": ["JME", 0],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-8268",
	        "address": "10051臺北市中正區青島東路1-3號7102室",
	        "fax": "02-2358-8270"
	      },
	      "金門服務處": {
	        "phone": "082-312-058",
	        "address": "金門縣金城鎮光前路97號",
	        "fax": "082-326-175"
	      }
	    },
	    "constituency_detail": "全縣"
	  }, {
	    "name": "楊曜",
	    "party": "民主進步黨",
	    "party_eng": "DPP",
	    "caucus": "DPP",
	    "constituency": ["PEN", 0],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6736",
	        "address": "10051臺北市中正區濟南路1段3-1號0205室",
	        "fax": "02-2358-6740"
	      },
	      "澎湖服務處": {
	        "phone": "06-921-8678",
	        "address": "澎湖縣馬公市新店路473號",
	        "fax": "06-921-1317"
	      }
	    },
	    "constituency_detail": "全縣"
	  }, {
	    "name": "楊瓊瓔",
	    "party": "中國國民黨",
	    "party_eng": "KMT",
	    "caucus": "KMT",
	    "constituency": ["TXG", 3],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6206",
	        "address": "10051臺北市中正區濟南路1段3-1號0907室",
	        "fax": "02-2358-6210"
	      },
	      "潭子服務處": {
	        "phone": "04-2536-2878",
	        "address": "臺中市潭子區潭興路二段397號",
	        "fax": "04-2536-2516"
	      },
	      "大雅服務處": {
	        "phone": "04-2568-5512",
	        "address": "428臺中市大雅區學府路405號",
	        "fax": "04-2568-2112"
	      }
	    },
	    "constituency_detail": "后里區 神岡區 大雅區 潭子區"
	  }, {
	    "name": "楊麗環",
	    "party": "中國國民黨",
	    "party_eng": "KMT",
	    "caucus": "KMT",
	    "constituency": ["TAO", 4],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6066",
	        "address": "10051臺北市中正區濟南路1段3-1號0208室",
	        "fax": "02-2358-6070"
	      },
	      "桃園服務處": {
	        "phone": "03-346-5509",
	        "address": "桃園縣桃園市同安街171號",
	        "fax": "03-357-7640"
	      }
	    },
	    "constituency_detail": "桃園市66里"
	  }, {
	    "name": "詹凱臣",
	    "party": "中國國民黨",
	    "party_eng": "KMT",
	    "caucus": "KMT",
	    "constituency": ["foreign"],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6536",
	        "address": "10051臺北市中正區濟南路1段3-1號0802室",
	        "fax": "02-2358-6540"
	      }
	    },
	    "constituency_detail": "僑居國外國民"
	  }, {
	    "name": "廖正井",
	    "party": "中國國民黨",
	    "party_eng": "KMT",
	    "caucus": "KMT",
	    "constituency": ["TAO", 2],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6316",
	        "address": "10051臺北市中正區濟南路1段3-1號0605室",
	        "fax": "02-2358-6320"
	      },
	      "大園服務處": {
	        "phone": "03-385-1818",
	        "address": "桃園縣大園鄉田心村華興路157號",
	        "fax": "03-386-9656"
	      },
	      "楊梅服務處": {
	        "phone": "03-488-2728",
	        "address": "桃園縣楊梅市大模街10號3樓之2",
	        "fax": "03-488-2758"
	      },
	      "新屋服務處": {
	        "phone": "03-477-3556",
	        "address": "桃園縣新屋鄉中山路112號",
	        "fax": "03-477-3536"
	      }
	    },
	    "constituency_detail": "大園鄉 觀音鄉 新屋鄉 楊梅市"
	  }, {
	    "name": "廖國棟",
	    "party": "中國國民黨",
	    "party_eng": "KMT",
	    "caucus": "KMT",
	    "constituency": ["aborigine", "lowland"],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-8176",
	        "address": "10051臺北市中正區濟南路1段3-1號0807室",
	        "fax": "02-2358-8180"
	      },
	      "台東服務處": {
	        "phone": "089-228-798",
	        "address": "臺東市四維路3段72號",
	        "fax": "089-228-600"
	      }
	    },
	    "constituency_detail": ""
	  }, {
	    "name": "管碧玲",
	    "party": "民主進步黨",
	    "party_eng": "DPP",
	    "caucus": "DPP",
	    "constituency": ["KHH", 5],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-8146",
	        "address": "10051臺北市中正區濟南路1段3-1號0901室",
	        "fax": "02-2358-8150"
	      },
	      "高雄服務處": {
	        "phone": "07-313-7816",
	        "address": "高雄市三民區博愛一路183號",
	        "fax": "07-313-5797"
	      },
	      "內惟服務處": {
	        "phone": "07-533-0227",
	        "address": "高雄市鼓山區九如四路1097號",
	        "fax": "07-521-5237"
	      }
	    },
	    "constituency_detail": "鼓山區 鹽埕區 旗津區 三民區42里"
	  }, {
	    "name": "蔡正元",
	    "party": "中國國民黨",
	    "party_eng": "KMT",
	    "caucus": "KMT",
	    "constituency": ["TPE", 4],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-8276",
	        "address": "10051臺北市中正區鎮江街2號5301室",
	        "fax": "02-2358-8280"
	      },
	      "內湖服務處": {
	        "phone": "02-2790-5746",
	        "address": "114臺北市內湖區成功路三段82號2樓",
	        "fax": "02-2795-6289"
	      }
	    },
	    "constituency_detail": "內湖區 南港區"
	  }, {
	    "name": "蔡其昌",
	    "party": "民主進步黨",
	    "party_eng": "DPP",
	    "caucus": "DPP",
	    "constituency": ["TXG", 1],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6151",
	        "address": "10051臺北市中正區鎮江街2號5103室",
	        "fax": "02-2358-6155"
	      },
	      "清水服務處": {
	        "phone": "04-2623-8581",
	        "address": "臺中市清水區中華路448號",
	        "fax": "04-2623-8583"
	      },
	      "大甲服務處": {
	        "phone": "04-2688-7555",
	        "address": "臺中市大甲區文武路274號",
	        "fax": "04-2688-9123"
	      }
	    },
	    "constituency_detail": "大甲區 大安區 外埔區 清水區 梧棲區"
	  }, {
	    "name": "蔡煌瑯",
	    "party": "民主進步黨",
	    "party_eng": "DPP",
	    "caucus": "DPP",
	    "constituency": ["proportional"],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-8256",
	        "address": "10051臺北市中正區濟南路1段3-1號2101室",
	        "fax": "02-2358-8260"
	      }
	    },
	    "constituency_detail": ""
	  }, {
	    "name": "蔡錦隆",
	    "party": "中國國民黨",
	    "party_eng": "KMT",
	    "caucus": "KMT",
	    "constituency": ["TXG", 4],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6121",
	        "address": "10051臺北市中正區濟南路1段3-1號0803室",
	        "fax": "02-2358-6125"
	      },
	      "台中服務處": {
	        "phone": "04-2708-2899",
	        "address": "臺中市西屯區黎明路三段58號",
	        "fax": "04-2708-2896"
	      }
	    },
	    "constituency_detail": "西屯區 南屯區"
	  }, {
	    "name": "蔣乃辛",
	    "party": "中國國民黨",
	    "party_eng": "KMT",
	    "caucus": "KMT",
	    "constituency": ["TPE", 6],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6901",
	        "address": "10051臺北市中正區濟南路1段3-1號2112室",
	        "fax": "02-2358-6905"
	      }
	    },
	    "constituency_detail": "大安區"
	  }, {
	    "name": "趙天麟",
	    "party": "民主進步黨",
	    "party_eng": "DPP",
	    "caucus": "DPP",
	    "constituency": ["KHH", 7],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6576",
	        "address": "10051臺北市中正區濟南路1段3-1號0505室",
	        "fax": "02-2358-6580"
	      },
	      "高雄服務處": {
	        "phone": "07-333-6868",
	        "address": "80251高雄市苓雅區民權一路53號",
	        "fax": "07-333-6860"
	      }
	    },
	    "constituency_detail": "前金區 新興區 苓雅區 前鎮區8里"
	  }, {
	    "name": "鄭天財",
	    "party": "中國國民黨",
	    "party_eng": "KMT",
	    "caucus": "KMT",
	    "constituency": ["aborigine", "lowland"],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6831",
	        "address": "10051臺北市中正區濟南路1段3-1號0307室",
	        "fax": "02-2358-6835"
	      },
	      "花蓮服務處": {
	        "phone": "03-851-2306",
	        "address": "973花蓮縣吉安鄉南昌村南昌北路59號",
	        "fax": "03-851-3306"
	      }
	    },
	    "constituency_detail": ""
	  }, {
	    "name": "鄭汝芬",
	    "party": "中國國民黨",
	    "party_eng": "KMT",
	    "caucus": "KMT",
	    "constituency": ["CHA", 3],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6191",
	        "address": "10051臺北市中正區濟南路1段3-1號1007室",
	        "fax": "02-2358-6195"
	      },
	      "溪州服務處": {
	        "phone": "04-889-4123",
	        "address": "彰化縣溪洲鄉中山路三段270巷5號",
	        "fax": "04-889-8399"
	      },
	      "二林服務處": {
	        "phone": "04-895-5011",
	        "address": "彰化縣二林鎮後厝里太平路一段88巷86號",
	        "fax": "04-895-5012"
	      },
	      "溪湖服務處": {
	        "phone": "04-882-2211",
	        "address": "彰化縣溪湖鎮東環路320號",
	        "fax": "04-861-3552"
	      }
	    },
	    "constituency_detail": "芳苑鄉 二林鎮 埔鹽鄉 溪湖鎮 埔心鄉 大城鄉 竹塘鄉 埤頭鄉 北斗鎮 溪州鄉"
	  }, {
	    "name": "鄭麗君",
	    "party": "民主進步黨",
	    "party_eng": "DPP",
	    "caucus": "DPP",
	    "constituency": ["proportional"],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-8329",
	        "address": "10051臺北市中正區鎮江街2號5107室",
	        "fax": "02-2358-8330"
	      }
	    },
	    "constituency_detail": ""
	  }, {
	    "name": "劉建國",
	    "party": "民主進步黨",
	    "party_eng": "DPP",
	    "caucus": "DPP",
	    "constituency": ["YUN", 2],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-8088",
	        "address": "10051臺北市中正區濟南路1段3-1號0602室",
	        "fax": "02-2358-8089"
	      },
	      "斗六服務處": {
	        "phone": "05-534-2586",
	        "address": "640雲林縣斗六市公明路3號",
	        "fax": "05-532-2270"
	      },
	      "西螺服務處": {
	        "phone": "05-587-3586",
	        "address": "640雲林縣西螺鎮建興路365號之1"
	      },
	      "斗南服務處": {
	        "phone": "05-595-1270",
	        "address": "640雲林縣斗南鎮東光二街20號"
	      }
	    },
	    "constituency_detail": "崙背鄉 二崙鄉 西螺鎮 莿桐鄉 林內鄉 斗六市 大埤鄉 斗南鎮 古坑鄉"
	  }, {
	    "name": "劉櫂豪",
	    "party": "民主進步黨",
	    "party_eng": "DPP",
	    "caucus": "DPP",
	    "constituency": ["TTT", 0],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6286",
	        "address": "10051臺北市中正區濟南路1段3-1號2108室",
	        "fax": "02-2358-6290"
	      },
	      "臺東服務處": {
	        "phone": "089-310-979",
	        "address": "臺東市傳廣路18號",
	        "fax": "089-310-879"
	      },
	      "東海岸服務處": {
	        "phone": "089-851-018",
	        "address": "臺東縣成功鎮民權路30號",
	        "fax": "089-851-018"
	      },
	      "南迴服務處": {
	        "phone": "089-791-305",
	        "address": "台東縣大武鄉尚武村4鄰32號",
	        "fax": "089-790-398"
	      }
	    },
	    "constituency_detail": "全縣"
	  }, {
	    "name": "徐志榮",
	    "party": "民主進步黨",
	    "party_eng": "DPP",
	    "caucus": "DPP",
	    "constituency": ["PIF", 3],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6655",
	        "address": "10051臺北市中正區濟南路1段3-1號0702室",
	        "fax": "02-2358-6651"
	      },
	      "東港服務處": {
	        "phone": "08-832-8000",
	        "address": "屏東縣東港鎮光復路一段57號",
	        "fax": "08-831-1110"
	      },
	      "車城服務處": {
	        "phone": "08-882-2888",
	        "address": "屏東縣車城鄉福安村(路)6-4號",
	        "fax": "08-882-3456"
	      },
	      "屏東服務處": {
	        "phone": "08-733-6000",
	        "address": "屏東市忠孝路161號",
	        "fax": "08-766-7576"
	      },
	      "恆春服務處": {
	        "phone": "08-888-0888",
	        "address": "屏東縣恆春鎮省北路85號",
	        "fax": "08-889-9322"
	      }
	    },
	    "constituency_detail": "新園鄉 崁頂鄉 南州鄉 新埤鄉 來義鄉 東港鎮 林邊鄉 佳冬鄉 枋寮鄉 春日鄉 枋山鄉 獅子鄉 牡丹鄉 車城鄉 滿州鄉 恆春鎮 琉球鄉"
	  }, {
	    "name": "潘維剛",
	    "party": "中國國民黨",
	    "party_eng": "KMT",
	    "caucus": "KMT",
	    "constituency": ["proportional"],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6031",
	        "address": "10051臺北市中正區濟南路1段3-1號0201室",
	        "fax": "02-2358-6035"
	      }
	    },
	    "constituency_detail": ""
	  }, {
	    "name": "盧秀燕",
	    "party": "中國國民黨",
	    "party_eng": "KMT",
	    "caucus": "KMT",
	    "constituency": ["TXG", 5],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-8121",
	        "address": "10051臺北市中正區青島東路1-3號7101室",
	        "fax": "02-2358-8125"
	      },
	      "台中服務處": {
	        "phone": "04-2319-9770",
	        "address": "臺中市北區博館路92號4樓",
	        "fax": "04-2319-9760"
	      }
	    },
	    "constituency_detail": "北屯區 北區"
	  }, {
	    "name": "盧嘉辰",
	    "party": "中國國民黨",
	    "party_eng": "KMT",
	    "caucus": "KMT",
	    "constituency": ["TPQ", 10],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6911",
	        "address": "10051臺北市中正區濟南路1段3-1號0202室",
	        "fax": "02-2358-6915"
	      },
	      "土城服務處": {
	        "phone": "02-2268-9268",
	        "address": "新北市土城區中央路3段85-1號",
	        "fax": "02-2268-9269"
	      },
	      "三峽服務處": {
	        "phone": "02-2672-8399",
	        "address": "新北市三峽區中正路一段108巷7弄17號",
	        "fax": "02-2672-8599"
	      }
	    },
	    "constituency_detail": "土城區 三峽區"
	  }, {
	    "name": "蕭美琴",
	    "party": "民主進步黨",
	    "party_eng": "DPP",
	    "caucus": "DPP",
	    "constituency": ["proportional"],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6176",
	        "address": "10051臺北市中正區青島東路10號3503室",
	        "fax": "02-2358-6180"
	      }
	    },
	    "constituency_detail": ""
	  }, {
	    "name": "薛凌",
	    "party": "民主進步黨",
	    "party_eng": "DPP",
	    "caucus": "DPP",
	    "constituency": ["proportional"],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6056",
	        "address": "10051臺北市中正區濟南路1段3-1號0207室",
	        "fax": "02-2358-6060"
	      },
	      "重慶服務處": {
	        "phone": "02-2811-4556",
	        "address": "臺北市重慶北路4段186號",
	        "fax": "02-2813-3582"
	      },
	      "後港服務處": {
	        "phone": "02-2883-9006",
	        "address": "臺北市士林區華齡街88之2號",
	        "fax": "02-2883-0263"
	      },
	      "北投服務處": {
	        "phone": "02-2891-5265",
	        "address": "臺北市北投區大同街221號",
	        "fax": "02-2891-3096"
	      }
	    },
	    "constituency_detail": ""
	  }, {
	    "name": "賴士葆",
	    "party": "中國國民黨",
	    "party_eng": "KMT",
	    "caucus": "KMT",
	    "constituency": ["TPE", 8],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-8166",
	        "address": "10051臺北市中正區青島東路1-3號7201室",
	        "fax": "02-2358-8170"
	      },
	      "文山服務處": {
	        "phone": "02-2935-5358",
	        "address": "臺北市文山區景興路254號",
	        "fax": "02-2930-0945"
	      }
	    },
	    "constituency_detail": "文山區 中正區10里"
	  }, {
	    "name": "謝國樑",
	    "party": "中國國民黨",
	    "party_eng": "KMT",
	    "caucus": "KMT",
	    "constituency": ["KEE", 0],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-8066",
	        "address": "10051臺北市中正區鎮江街2號5101室",
	        "fax": "02-2358-8070"
	      },
	      "基隆服務處": {
	        "phone": "02-2427-8899",
	        "address": "基隆市中正區愛三路37號6樓",
	        "fax": "02-2421-3639"
	      }
	    },
	    "constituency_detail": "全市"
	  }, {
	    "name": "陳素月",
	    "party": "民主進步黨",
	    "party_eng": "DPP",
	    "caucus": "DPP",
	    "constituency": ["CHA", 4],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6691",
	        "address": "10051臺北市中正區濟南路1段3-1號2109室",
	        "fax": "02-2358-6695"
	      },
	      "員林服務處": {
	        "phone": "04-832-8552",
	        "address": "彰化縣員林鎮惠來里惠明街219號",
	        "fax": "04-835-3414"
	      },
	      "社頭服務處": {
	        "phone": "04-871-1433",
	        "address": "彰化縣社頭鄉社頭村員集路二段370號",
	        "fax": "04-873-6266"
	      },
	      "田中服務處": {
	        "phone": "04-875-2170",
	        "address": "彰化縣田中鎮西路里斗中路一段68巷4號",
	        "fax": "04-876-1432"
	      }
	    },
	    "constituency_detail": "大村鄉 員林鎮 永靖鄉 社頭鄉 田尾鄉 田中鎮 二水鄉"
	  }, {
	    "name": "簡東明",
	    "party": "中國國民黨",
	    "party_eng": "KMT",
	    "caucus": "KMT",
	    "constituency": ["aborigine", "highland"],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6681",
	        "address": "10051臺北市中正區濟南路1段3-1號1005室",
	        "fax": "02-2358-6685"
	      },
	      "屏東服務處": {
	        "phone": "08-732-2728",
	        "address": "90071屏東市廣東路1324號",
	        "fax": "08-732-6442"
	      }
	    },
	    "constituency_detail": "山地原住民"
	  }, {
	    "name": "顏寬恒",
	    "party": "中國國民黨",
	    "party_eng": "KMT",
	    "caucus": "KMT",
	    "constituency": ["TXG", 2],
	    "contact": {
	      " ": {},
	      "": {}
	    },
	    "constituency_detail": "沙鹿鎮 龍井鄉 大肚鄉 烏日鄉 霧峰 大里市2里"
	  }, {
	    "name": "羅明才",
	    "party": "中國國民黨",
	    "party_eng": "KMT",
	    "caucus": "KMT",
	    "constituency": ["TPQ", 11],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6546",
	        "address": "10051臺北市中正區濟南路1段3-1號1106室",
	        "fax": "02-2358-6780"
	      },
	      "新店服務處": {
	        "phone": "02-2915-7788",
	        "address": "新北市新店區中正路54巷8號1樓",
	        "fax": "02-2911-1448"
	      }
	    },
	    "constituency_detail": "新店區 深坑區 石碇區 坪林區 烏來區"
	  }, {
	    "name": "羅淑蕾",
	    "party": "中國國民黨",
	    "party_eng": "KMT",
	    "caucus": "KMT",
	    "constituency": ["TPE", 3],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6156",
	        "address": "10051臺北市中正區濟南路1段3-1號0406室",
	        "fax": "02-2358-6160"
	      },
	      "松山服務處": {
	        "phone": "02-2719-5580",
	        "address": "臺北市松山區光復北路240號",
	        "fax": "02-2718-6878"
	      },
	      "中山服務處": {
	        "phone": "02-2563-8251",
	        "address": "臺北市民權東路二段26號6樓之7",
	        "fax": "02-2561-1035"
	      }
	    },
	    "constituency_detail": "中山區 松山區20里"
	  }, {
	    "name": "蘇清泉",
	    "party": "中國國民黨",
	    "party_eng": "KMT",
	    "caucus": "KMT",
	    "constituency": ["proportional"],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6571",
	        "address": "10051臺北市中正區青島東路10號3505室",
	        "fax": "02-2358-6575"
	      },
	      "東港服務處": {
	        "phone": "08-833-4517",
	        "address": "屏東縣東港鎮東隆里東隆街6-2號",
	        "fax": "08-832-9977"
	      }
	    },
	    "constituency_detail": ""
	  }, {
	    "name": "蘇震清",
	    "party": "民主進步黨",
	    "party_eng": "DPP",
	    "caucus": "DPP",
	    "constituency": ["PIF", 1],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6636",
	        "address": "10051臺北市中正區濟南路1段3-1號0708室",
	        "fax": "02-2358-6640"
	      },
	      "屏東服務處": {
	        "phone": "08-766-6636",
	        "address": "屏東縣屏東市自由路586號",
	        "fax": "08-766-6262"
	      }
	    },
	    "constituency_detail": "里港鄉 高樹鄉 三地門鄉"
	  }] };

/***/ },
/* 92 */
/*!********************************************************!*\
  !*** ./app/containers/IssueListPage/IssueListPage.css ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = {};

/***/ },
/* 93 */
/*!***********************************************************!*\
  !*** ./app/containers/IssueListPage/images ^\.\/.*\.png$ ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./1.png": 238,
		"./2.png": 239,
		"./3.png": 240,
		"./4.png": 241,
		"./5.png": 242,
		"./6.png": 243,
		"./7.png": 244
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 93;


/***/ },
/* 94 */
/*!************************************************!*\
  !*** ./app/containers/IssuePage/IssuePage.css ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = {};

/***/ },
/* 95 */
/*!*********************************************!*\
  !*** ./app/containers/IssuePage/ly-info.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = {
	  "data": [{
	    "name": "尤美女",
	    "party": "民主進步黨",
	    "party_eng": "DPP",
	    "caucus": "DPP",
	    "constituency": ["proportional"],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-8112",
	        "address": "10051臺北市中正區濟南路1段3-1號0402室",
	        "fax": "02-2358-8113"
	      }
	    },
	    "constituency_detail": ""
	  }, {
	    "name": "許忠信",
	    "party": "台灣團結聯盟",
	    "party_eng": "TSU",
	    "caucus": "TSU",
	    "constituency": ["proportional"]
	  }, {
	    "name": "丁守中",
	    "party": "中國國民黨",
	    "party_eng": "KMT",
	    "caucus": "KMT",
	    "constituency": ["TPE", 1],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6706",
	        "address": "10051臺北市中正區濟南路1段3-1號0707室",
	        "fax": "02-2358-6710"
	      },
	      "北投服務處": {
	        "phone": "02-2828-7789",
	        "address": "11262臺北市北投區承德路七段188巷2號1樓",
	        "fax": "02-2828-6877"
	      }
	    },
	    "constituency_detail": "北投區 士林區13里"
	  }, {
	    "name": "江惠貞",
	    "party": "中國國民黨",
	    "party_eng": "KMT",
	    "caucus": "KMT",
	    "constituency": ["TPQ", 7],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6532",
	        "address": "10051臺北市中正區濟南路1段3-1號0808室",
	        "fax": "02-2358-6585"
	      },
	      "板橋服務處": {
	        "phone": "02-2961-0599",
	        "address": "新北市板橋區實踐路30號2樓",
	        "fax": "02-2961-9899"
	      }
	    },
	    "constituency_detail": "板橋區（縣民大道 湳仔溝以東）61里"
	  }, {
	    "name": "何欣純",
	    "party": "民主進步黨",
	    "party_eng": "DPP",
	    "caucus": "DPP",
	    "constituency": ["TXG", 7],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-8388",
	        "address": "10051臺北市中正區濟南路1段3-1號0301室",
	        "fax": "02-2358-8390"
	      },
	      "大里服務處": {
	        "phone": "04-2483-6527",
	        "address": "臺中市大里區大里路63號",
	        "fax": "04-2482-8743"
	      },
	      "太平服務處": {
	        "phone": "04-2276-3111",
	        "address": "台中市太平區新平路二段142號",
	        "fax": "04-2276-3555"
	      }
	    },
	    "constituency_detail": "太平區 大里區25里"
	  }, {
	    "name": "吳宜臻",
	    "party": "民主進步黨",
	    "party_eng": "DPP",
	    "caucus": "DPP",
	    "constituency": ["proportional"],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-8580",
	        "address": "10051臺北市中正區鎮江街2號5105室",
	        "fax": "02-2358-8135"
	      }
	    },
	    "constituency_detail": ""
	  }, {
	    "name": "呂學樟",
	    "party": "中國國民黨",
	    "party_eng": "KMT",
	    "caucus": "KMT",
	    "constituency": ["HSZ", 0],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6258",
	        "address": "10051臺北市中正區濟南路1段3-1號0407室",
	        "fax": "02-2358-6260"
	      },
	      "新竹服務處": {
	        "phone": "03-535-8181",
	        "address": "新竹市民族路272號",
	        "fax": "03-542-9399"
	      }
	    },
	    "constituency_detail": "全市"
	  }, {
	    "name": "李昆澤",
	    "party": "民主進步黨",
	    "party_eng": "DPP",
	    "caucus": "DPP",
	    "constituency": ["KHH", 6],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6086",
	        "address": "10051臺北市中正區濟南路1段3-1號2106室",
	        "fax": "02-2358-6090"
	      },
	      "高雄服務處": {
	        "phone": "07-386-8292",
	        "address": "高雄市三民區大昌二路63號",
	        "fax": "07-386-3277"
	      }
	    },
	    "constituency_detail": "三民區45里"
	  }, {
	    "name": "李俊俋",
	    "party": "民主進步黨",
	    "party_eng": "DPP",
	    "caucus": "DPP",
	    "constituency": ["CYI", 0],
	    "contact": {
	      "國會研究室": {
	        "phone": "02-2358-6541",
	        "address": "10051臺北市中正區濟南路1段3-1號1001室",
	        "fax": "02-2358-6545"
	      },
	      "嘉義服務處": {
	        "phone": "05-271-9595",
	        "address": "600嘉義市共和路239號",
	        "fax": "05-277-9775"
	      }
	    },
	    "constituency_detail": "全市"
	  }] };

/***/ },
/* 96 */
/*!*****************************************************!*\
  !*** ./app/containers/IssueVotePage/ly-position.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = {
	    "data": [{
	        "name": "許忠信",
	        "party": "台灣團結聯盟",
	        "party_eng": "TSU",
	        "caucus": "TSU",
	        "entries": [{
	            "name": "許忠信",
	            "id": "12",
	            "date": "2013-12-16",
	            "year": "2013",
	            "month": "12",
	            "day": "16",
	            "type": "委員會質詢",
	            "quote": "社會上有許多同性戀的同志，我們非常尊重他們的權益，他們該受到的尊重，本席都非常尊重。現今有所謂的多元成家方案，在多元成家方案中兩位同性別的人不可能自然生育，勢必要倚賴人工生殖，問題在於兩位女性共組家庭，能不能兩位女性都接受人工生殖，在兩位女性中誰可以接受人工授孕？如果兩位同性的男性共組家庭，在兩位男性中誰能找代理孕母？請部長針對此一問題向媒體做答復。",
	            "opinion": "不明確",
	            "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/103/03/LCIDC01_1030302.pdf",
	            "trustVote": "32"
	        }],
	        "forTotal": 0,
	        "againstTotal": 0,
	        "unclearTotal": 1,
	        "position": "不明確",
	        "positionCount": 1
	    }, {
	        "name": "丁守中",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["TPE", 1],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6706",
	                "address": "10051臺北市中正區濟南路1段3-1號0707室",
	                "fax": "02-2358-6710"
	            },
	            "北投服務處": {
	                "phone": "02-2828-7789",
	                "address": "11262臺北市北投區承德路七段188巷2號1樓",
	                "fax": "02-2828-6877"
	            }
	        },
	        "constituency_detail": "北投區 士林區13里",
	        "entries": [{
	            "name": "丁守中",
	            "id": "8",
	            "date": "2013-11-08",
	            "year": "2013",
	            "month": "11",
	            "day": "08",
	            "type": "院會質詢",
	            "quote": "我完全同意同性戀者有相愛、同居也有財產自由處分的完全自主權利，但我更支持宗教團體，因為我是國際佛光會的副總會長。我認為對於宗教團體與一般人的傳統認知，也就是對家庭、對夫妻倫理與價值不應該改變。",
	            "opinion": "反對",
	            "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/102/65/LCIDC01_1026501.pdf",
	            "trustVote": "332"
	        }],
	        "forTotal": 0,
	        "againstTotal": 1,
	        "unclearTotal": 0,
	        "position": "反對",
	        "positionCount": 1
	    }, {
	        "name": "孔文吉",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["aborigine", "highland"],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-8246",
	                "address": "10051臺北市中正區濟南路1段3-1號0203室",
	                "fax": "02-2358-8250"
	            }
	        },
	        "constituency_detail": "山地原住民",
	        "entries": [{
	            "name": "孔文吉",
	            "id": "6",
	            "date": "2013-10-24",
	            "year": "2013",
	            "month": "10",
	            "day": "24",
	            "type": "委員會質詢",
	            "quote": "本席希望你們能夠仔細審酌這件事情，本席是反對的，因為我是基督徒，幸好尤美女委員的提案，本席沒有連署，連署欄沒有本席的名字，我必須在此表示反對，不然很多宗教團體都會來找我。現在有些學校會請同志團體到學校去分享他們的心得，本席希望法務部能站在中性的立場，多聽取各方的意見，教會團體對於同性戀結婚還是無法容許、無法同意的。",
	            "opinion": "反對",
	            "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/102/63/LCIDC01_1026301.pdf",
	            "trustVote": "43"
	        }],
	        "forTotal": 0,
	        "againstTotal": 1,
	        "unclearTotal": 0,
	        "position": "反對",
	        "positionCount": 1
	    }, {
	        "name": "尤美女",
	        "party": "民主進步黨",
	        "party_eng": "DPP",
	        "caucus": "DPP",
	        "constituency": ["proportional"],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-8112",
	                "address": "10051臺北市中正區濟南路1段3-1號0402室",
	                "fax": "02-2358-8113"
	            }
	        },
	        "constituency_detail": "",
	        "entries": [{
	            "name": "尤美女",
	            "id": "4",
	            "date": "2012-12-26",
	            "year": "2012",
	            "month": "12",
	            "day": "26",
	            "type": "公聽會",
	            "quote": "舉行「同性婚姻合法化及伴侶權益法制化」公聽會",
	            "opinion": "贊成",
	            "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/102/03/LCIDC01_1020304.pdf",
	            "trustVote": "1"
	        }, {
	            "name": "尤美女",
	            "id": "17",
	            "date": "2014-10-16",
	            "year": "2014",
	            "month": "10",
	            "day": "16",
	            "type": "公聽會",
	            "quote": "舉行「用平等的心把每一個人擁入憲法的懷抱─同性婚姻及同志收養議題」公聽會",
	            "opinion": "贊成",
	            "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/103/64/LCIDC01_1036401.pdf",
	            "trustVote": "23"
	        }, {
	            "name": "尤美女",
	            "id": "20",
	            "date": "2014-12-18",
	            "year": "2014",
	            "month": "12",
	            "day": "18",
	            "type": "委員會質詢",
	            "quote": "其次，我們看到很多國家都承認同性婚姻，他們甚至於可以去登記，如果他們在國外已經是合法登記的同性婚姻，今天他們到國內來，他們可不可以拿國外合法登記的結婚證書到國內來登記結婚？",
	            "opinion": "贊成",
	            "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/104/01/LCIDC01_1040101.pdf",
	            "trustVote": "862"
	        }, {
	            "name": "尤美女",
	            "id": "24",
	            "date": "2014-12-22",
	            "year": "2014",
	            "month": "12",
	            "day": "22",
	            "type": "委員會質詢",
	            "quote": "你覺得人權是要用所謂的共識才能決定？剛剛段委員講得很好，法律是要保障少數人的權益，但今天對於這些少數人的權益，卻要經過多數人的同意，但那些多數人根本不承認這些少數人的存在啊！所以多數人不同意，因此這些少數人的權益就不受到保障，是這樣子嗎？",
	            "opinion": "贊成",
	            "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/104/12/LCIDC01_1041201.pdf",
	            "trustVote": "23"
	        }, {
	            "name": "尤美女",
	            "id": "29",
	            "date": "2015-01-05",
	            "year": "2015",
	            "month": "01",
	            "day": "05",
	            "type": "委員會質詢",
	            "quote": "今日報紙刊載一則「原民部落喜辦同志家庭收養」的新聞，前陣子本委員會方才審查「婚姻平權法草案」，當時法務部認為「婚姻平權法草案」若通過，社會對立將會太高，也會有許多的負面輿論，因而不讓同志婚姻平權及收養孩童；但是，我們看到原住民部落有兩位女同志，他們一起生活近30年，並收養其中一位女同志哥哥的小孩，三人共同生活了12年，他們一直把她當親生女兒般照顧，所以部落特別認可這對同志家庭收養這名小孩，他們明知依照漢人的法律，組成同志家庭不具有法律效力，但是他們認為即使沒有被法律認可，仍可以實踐非常重要的家庭功能，所以他們的收養儀式獲得長老們的首肯，由頭目遵循傳統將祖傳禮刀、大鐵鍋、琉璃珠、現金等貴重禮品贈與被收養者生父的家族，完成收養儀式。既然部落做得到，我們漢族是不是也能夠拋下傲慢的心態，重新認識另外一個與我們不一樣的同志家族？請法務部與司法院能夠多加考量。好不好？",
	            "opinion": "贊成",
	            "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/104/08/LCIDC01_1040801.pdf",
	            "trustVote": "65"
	        }, {
	            "name": "尤美女",
	            "id": "31",
	            "date": "2015-03-12",
	            "year": "2015",
	            "month": "03",
	            "day": "12",
	            "type": "委員會質詢",
	            "quote": "法務部在2001年呈報行政院的人權保障基本法草案第二十四條，即已明白規定國家應尊重同性戀者之權益，同性男女得依法組成家庭及收養子女。當時即已定調要保障同志的婚姻，馬政府上台之後，卻整個推翻，現在又要從頭來過嗎？事實上你們早已委託戴教授去對同志的權益作研究，厚厚的一本報告在法務部裡面都躺多久了，你們還要重啟爐灶，從頭再來？",
	            "opinion": "贊成",
	            "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/104/16/LCIDC01_1041601.pdf",
	            "trustVote": "2"
	        }],
	        "forTotal": 6,
	        "againstTotal": 0,
	        "unclearTotal": 0,
	        "position": "贊成",
	        "positionCount": 6
	    }, {
	        "name": "王廷升",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["HUA", 0],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6688",
	                "address": "10051臺北市中正區濟南路1段3-1號1103室",
	                "fax": "02-2358-6690"
	            },
	            "花蓮市服務處": {
	                "phone": "03-833-0729",
	                "address": "970花蓮市中原路462號",
	                "fax": "03-836-2156"
	            }
	        },
	        "constituency_detail": "全縣",
	        "position": "未表態"
	    }, {
	        "name": "王育敏",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["proportional"],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-8261",
	                "address": "10051臺北市中正區青島東路1-3號7103室",
	                "fax": "02-2358-8265"
	            }
	        },
	        "constituency_detail": "",
	        "position": "未表態"
	    }, {
	        "name": "王金平",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["proportional"],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6011~15",
	                "address": "10051臺北市中正區中山南路1號",
	                "fax": "02-2395-5317"
	            },
	            "高雄服務處": {
	                "phone": "07-607-5509",
	                "address": "高雄市路竹區甲南村大仁路369巷7號",
	                "fax": "07-607-5669"
	            }
	        },
	        "constituency_detail": "",
	        "position": "未表態"
	    }, {
	        "name": "王進士",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["PIF", 2],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6626",
	                "address": "10051臺北市中正區濟南路1段3-1號0401室",
	                "fax": "02-2358-6630"
	            },
	            "屏東服務處": {
	                "phone": "08-723-2505",
	                "address": "屏東市公園東路115號",
	                "fax": "08-721-5191"
	            },
	            "萬丹服務處": {
	                "phone": "08-776-3989",
	                "address": "屏東縣萬丹鄉萬全村萬丹路一段412號",
	                "fax": "08-776-3989"
	            }
	        },
	        "constituency_detail": "屏東市 麟洛鄉 萬丹鄉",
	        "position": "未表態"
	    }, {
	        "name": "王惠美",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["CHA", 1],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6181",
	                "address": "10051臺北市中正區濟南路1段3-1號0501室",
	                "fax": "02-2358-6185"
	            },
	            "鹿港服務處": {
	                "phone": "04-775-4168",
	                "address": "彰化縣鹿港鎮永安里鹿東路55號",
	                "fax": "04-777-9150"
	            },
	            "和美服務處": {
	                "phone": "04-757-8568",
	                "address": "彰化縣和美鎮德美路456號",
	                "fax": "04-757-4822"
	            }
	        },
	        "constituency_detail": "伸港鄉 線西鄉 和美鎮 鹿港鎮 福興鄉 秀水鄉",
	        "position": "未表態"
	    }, {
	        "name": "田秋堇",
	        "party": "民主進步黨",
	        "party_eng": "DPP",
	        "caucus": "DPP",
	        "constituency": ["proportional"],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-8316",
	                "address": "10051臺北市中正區濟南路1段3-1號0806室",
	                "fax": "02-2358-8320"
	            },
	            "立法委員田秋堇服務處": {
	                "phone": "03-960-1321",
	                "address": "羅東鎮中山路2段171號",
	                "fax": "03-960-1592"
	            }
	        },
	        "constituency_detail": "",
	        "position": "未表態"
	    }, {
	        "name": "江啟臣",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["TXG", 8],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6726",
	                "address": "10051臺北市中正區濟南路1段3-1號2102室",
	                "fax": "02-2358-6730"
	            },
	            "豐原服務處": {
	                "phone": "04-2515-9998",
	                "address": "臺中市豐原區南村路20號",
	                "fax": "04-2515-6798"
	            },
	            "東勢服務處": {
	                "phone": "04-2577-3099",
	                "address": "臺中市東勢區第五橫街32號",
	                "fax": "04-2577-3167"
	            }
	        },
	        "constituency_detail": "豐原區 石岡區 新社區 東勢區 和平區",
	        "position": "未表態"
	    }, {
	        "name": "江惠貞",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["TPQ", 7],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6532",
	                "address": "10051臺北市中正區濟南路1段3-1號0808室",
	                "fax": "02-2358-6585"
	            },
	            "板橋服務處": {
	                "phone": "02-2961-0599",
	                "address": "新北市板橋區實踐路30號2樓",
	                "fax": "02-2961-9899"
	            }
	        },
	        "constituency_detail": "板橋區（縣民大道 湳仔溝以東）61里",
	        "position": "未表態"
	    }, {
	        "name": "何欣純",
	        "party": "民主進步黨",
	        "party_eng": "DPP",
	        "caucus": "DPP",
	        "constituency": ["TXG", 7],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-8388",
	                "address": "10051臺北市中正區濟南路1段3-1號0301室",
	                "fax": "02-2358-8390"
	            },
	            "大里服務處": {
	                "phone": "04-2483-6527",
	                "address": "臺中市大里區大里路63號",
	                "fax": "04-2482-8743"
	            },
	            "太平服務處": {
	                "phone": "04-2276-3111",
	                "address": "台中市太平區新平路二段142號",
	                "fax": "04-2276-3555"
	            }
	        },
	        "constituency_detail": "太平區 大里區25里",
	        "position": "未表態"
	    }, {
	        "name": "吳宜臻",
	        "party": "民主進步黨",
	        "party_eng": "DPP",
	        "caucus": "DPP",
	        "constituency": ["proportional"],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-8580",
	                "address": "10051臺北市中正區鎮江街2號5105室",
	                "fax": "02-2358-8135"
	            }
	        },
	        "constituency_detail": "",
	        "entries": [{
	            "name": "吳宜臻",
	            "id": "19",
	            "date": "2014-12-11",
	            "year": "2014",
	            "month": "12",
	            "day": "11",
	            "type": "委員會質詢",
	            "quote": "抱歉！因為本席在10月及11月請假，所以未出席委員會會議，現在請教次長，對包含同性婚姻的婚姻平權法案，法務部到底提出了嗎？",
	            "opinion": "贊成",
	            "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/104/01/LCIDC01_1040101.pdf",
	            "trustVote": "23"
	        }],
	        "forTotal": 1,
	        "againstTotal": 0,
	        "unclearTotal": 0,
	        "position": "贊成",
	        "positionCount": 1
	    }, {
	        "name": "吳育仁",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["proportional"],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6656",
	                "address": "10051臺北市中正區濟南路1段3-1號0305室",
	                "fax": "02-2358-6660"
	            },
	            "雲林服務處": {
	                "phone": "05-537-5331",
	                "address": "640雲林縣斗六市明德北路二段401號",
	                "fax": "05-537-5351"
	            }
	        },
	        "constituency_detail": "",
	        "entries": [{
	            "name": "吳育仁",
	            "id": "3",
	            "date": "2012-12-03",
	            "year": "2012",
	            "month": "12",
	            "day": "03",
	            "type": "委員會質詢",
	            "quote": "如果親屬法或民法上同意同性婚姻或同志伴侶權時，你是否支持他們享有勞動基本權？也就是有關家庭的部分，譬如留職育嬰停薪與陪產假？",
	            "opinion": "贊成",
	            "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/101/83/LCIDC01_1018303.pdf",
	            "trustVote": "2"
	        }, {
	            "name": "吳育仁",
	            "id": "10",
	            "date": "2013-11-25",
	            "year": "2013",
	            "month": "11",
	            "day": "25",
	            "type": "委員會質詢",
	            "quote": "請問羅總經理，同性婚姻合法化之後，勞工保險條例中的老人給付中會產生什麼樣的改變？",
	            "opinion": "不明確",
	            "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/102/77/LCIDC01_1027702.pdf",
	            "trustVote": "343"
	        }],
	        "forTotal": 1,
	        "againstTotal": 0,
	        "unclearTotal": 1,
	        "position": "贊成",
	        "positionCount": 1
	    }, {
	        "name": "吳育昇",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["TPQ", 1],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-8011",
	                "address": "10051臺北市中正區青島東路10號3502室",
	                "fax": "02-2358-8015"
	            },
	            "泰山服務處": {
	                "phone": "02-2296-0360",
	                "address": "新北市泰山區明志路一段478號2樓",
	                "fax": "02-2296-1607"
	            },
	            "淡水服務處": {
	                "phone": "02-2625-5158",
	                "address": "新北市淡水區中正東路55號2樓(淡水捷運站對面)",
	                "fax": "02-2625-5159"
	            },
	            "林口服務處": {
	                "phone": "02-2601-8588",
	                "address": "新北市林口區中正路100號",
	                "fax": "02-2601-8589"
	            }
	        },
	        "constituency_detail": "石門區 三芝區 淡水區 八里區 林口區 泰山區",
	        "position": "未表態"
	    }, {
	        "name": "吳秉叡",
	        "party": "民主進步黨",
	        "party_eng": "DPP",
	        "caucus": "DPP",
	        "constituency": ["proportional"],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6858",
	                "address": "10051臺北市中正區濟南路1段3-1號0902室",
	                "fax": "02-2358-6859"
	            },
	            "福營服務處": {
	                "phone": "02-2208-3852",
	                "address": "新北市新莊區後港一路130巷48號1樓",
	                "fax": "02-2208-3853"
	            },
	            "大新莊服務處": {
	                "phone": "02-2276-8287",
	                "address": "新北市新莊區中原路327號1樓",
	                "fax": "02-2277-5657"
	            },
	            "新北總聯絡處": {
	                "phone": "02-8522-5786",
	                "address": "新北市新莊區化成路路814巷1號",
	                "fax": "02-8522-5726"
	            }
	        },
	        "constituency_detail": "",
	        "position": "未表態"
	    }, {
	        "name": "呂玉玲",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["TAO", 5],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6836",
	                "address": "10051臺北市中正區濟南路1段3-1號0905室",
	                "fax": "02-2358-6840"
	            },
	            "平鎮服務處": {
	                "phone": "03-401-5616",
	                "address": "桃園縣平鎮市復興街68號2樓之2",
	                "fax": "03-401-0616"
	            },
	            "龍潭服務處": {
	                "phone": "03-409-6688",
	                "address": "桃園縣龍潭鄉東龍路124號",
	                "fax": "03-480-6549"
	            }
	        },
	        "constituency_detail": "平鎮市 龍潭鄉",
	        "position": "未表態"
	    }, {
	        "name": "呂學樟",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["HSZ", 0],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6258",
	                "address": "10051臺北市中正區濟南路1段3-1號0407室",
	                "fax": "02-2358-6260"
	            },
	            "新竹服務處": {
	                "phone": "03-535-8181",
	                "address": "新竹市民族路272號",
	                "fax": "03-542-9399"
	            }
	        },
	        "constituency_detail": "全市",
	        "entries": [{
	            "name": "呂學樟",
	            "id": "25",
	            "date": "2014-12-22",
	            "year": "2014",
	            "month": "12",
	            "day": "22",
	            "type": "委員會質詢",
	            "quote": "我反對的是為同性戀婚姻過當修法，因為這樣的修法會造成千百年來家庭倫常的淪喪，社會的價值觀也會崩潰。",
	            "opinion": "反對",
	            "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/104/12/LCIDC01_1041201.pdf",
	            "trustVote": "54"
	        }],
	        "forTotal": 0,
	        "againstTotal": 1,
	        "unclearTotal": 0,
	        "position": "反對",
	        "positionCount": 1
	    }, {
	        "name": "李昆澤",
	        "party": "民主進步黨",
	        "party_eng": "DPP",
	        "caucus": "DPP",
	        "constituency": ["KHH", 6],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6086",
	                "address": "10051臺北市中正區濟南路1段3-1號2106室",
	                "fax": "02-2358-6090"
	            },
	            "高雄服務處": {
	                "phone": "07-386-8292",
	                "address": "高雄市三民區大昌二路63號",
	                "fax": "07-386-3277"
	            }
	        },
	        "constituency_detail": "三民區45里",
	        "position": "未表態"
	    }, {
	        "name": "李俊俋",
	        "party": "民主進步黨",
	        "party_eng": "DPP",
	        "caucus": "DPP",
	        "constituency": ["CYI", 0],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6541",
	                "address": "10051臺北市中正區濟南路1段3-1號1001室",
	                "fax": "02-2358-6545"
	            },
	            "嘉義服務處": {
	                "phone": "05-271-9595",
	                "address": "600嘉義市共和路239號",
	                "fax": "05-277-9775"
	            }
	        },
	        "constituency_detail": "全市",
	        "position": "未表態"
	    }, {
	        "name": "李桐豪",
	        "party": "親民黨",
	        "party_eng": "PFP",
	        "caucus": "PFP",
	        "constituency": ["proportional"],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-8306",
	                "address": "10051臺北市中正區濟南路1段3-1號2116室",
	                "fax": "02-2358-8310"
	            }
	        },
	        "constituency_detail": "",
	        "position": "未表態"
	    }, {
	        "name": "李貴敏",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["proportional"],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6246",
	                "address": "10051臺北市中正區鎮江街2號5302室",
	                "fax": "02-2358-6380"
	            }
	        },
	        "constituency_detail": "",
	        "entries": [{
	            "name": "李貴敏",
	            "id": "22",
	            "date": "2014-12-22",
	            "year": "2014",
	            "month": "12",
	            "day": "22",
	            "type": "委員會質詢",
	            "quote": "我們去看看別的國家如何解決這個問題，我剛才特別提到，我到國外蒐集資料，美國的解決方式是在全民尚未達成共識時讓彼此的對立降到最低，可能是透過法院判決或其他方式，而不是在共識尚未達成時硬要撕裂人民之間的情感。",
	            "opinion": "反對",
	            "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/104/12/LCIDC01_1041201.pdf",
	            "trustVote": "52"
	        }],
	        "forTotal": 0,
	        "againstTotal": 1,
	        "unclearTotal": 0,
	        "position": "反對",
	        "positionCount": 1
	    }, {
	        "name": "李慶華",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["TPQ", 12],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6521",
	                "address": "10051臺北市中正區濟南路1段3-1號2111室",
	                "fax": "02-2358-6525"
	            },
	            "汐止服務處": {
	                "phone": "02-2694-1301",
	                "address": "新北市汐止區中興路95號4樓之3",
	                "fax": "02-2694-1302"
	            },
	            "瑞芳服務處": {
	                "phone": "02-2497-7809",
	                "address": "新北市瑞芳區瑞芳街45號2樓",
	                "fax": "02-2497-1969"
	            }
	        },
	        "constituency_detail": "金山區 萬里區 汐止區 平溪區 瑞芳區 雙溪區 貢寮區",
	        "position": "未表態"
	    }, {
	        "name": "李應元",
	        "party": "民主進步黨",
	        "party_eng": "DPP",
	        "caucus": "DPP",
	        "constituency": ["proportional"],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-8156",
	                "address": "10051臺北市中正區濟南路1段3-1號0701室",
	                "fax": "02-2358-8165"
	            },
	            "斗六服務處": {
	                "phone": "05-532-6355",
	                "address": "雲林縣斗六市武昌路35號",
	                "fax": "05-536-1451"
	            },
	            "虎尾服務處": {
	                "phone": "05-636-5296",
	                "address": "雲林縣虎尾鎮光復路505號",
	                "fax": "05-636-5396"
	            },
	            "新莊服務處": {
	                "phone": "02-2279-7241",
	                "address": "新北市新莊區中華路二段105號2樓",
	                "fax": "02-2995-5221"
	            }
	        },
	        "constituency_detail": "",
	        "position": "未表態"
	    }, {
	        "name": "李鴻鈞",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["TPQ", 4],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6236",
	                "address": "10051臺北市中正區濟南路1段3-1號1108室",
	                "fax": "02-2358-6240"
	            },
	            "新莊服務處": {
	                "phone": "02-2992-9199",
	                "address": "新北市新莊區公園路36號",
	                "fax": "02-2992-9818"
	            }
	        },
	        "constituency_detail": "新莊區75里",
	        "position": "未表態"
	    }, {
	        "name": "邱文彥",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["proportional"],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-8106",
	                "address": "10051臺北市中正區鎮江街2號5108室",
	                "fax": "02-2358-8110"
	            }
	        },
	        "constituency_detail": "",
	        "position": "未表態"
	    }, {
	        "name": "邱志偉",
	        "party": "民主進步黨",
	        "party_eng": "DPP",
	        "caucus": "DPP",
	        "constituency": ["KHH", 2],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6561",
	                "address": "10051臺北市中正區青島東路1-3號7303室",
	                "fax": "02-2358-6565"
	            },
	            "岡山服務處": {
	                "phone": "07-623-0655",
	                "address": "高雄市岡山區華園路99號",
	                "fax": "07-623-0671"
	            },
	            "茄萣服務處": {
	                "phone": "07-690-1234",
	                "address": "高雄市茄萣區信義路三段138號",
	                "fax": "07-690-2598"
	            },
	            "橋頭區邱志偉立委與陳政聞議員聯合服務處": {
	                "phone": "07-612-3058",
	                "address": "高雄市橋頭區成功路237號",
	                "fax": "07-611-4926"
	            },
	            "路竹區邱志偉立委與陳明澤議員聯合服務處": {
	                "phone": "07-607-1999",
	                "address": "高雄市路竹區國昌路73號",
	                "fax": "07-607-6869"
	            },
	            "路竹區邱志偉立委與張文瑞議員聯合服務處": {
	                "phone": "07-696-0525",
	                "address": "高雄市路竹區國昌路82號",
	                "fax": "07-691-8588"
	            }
	        },
	        "constituency_detail": "茄萣區 湖內區 路竹區 永安區 岡山區 彌陀區 梓官區 橋頭區",
	        "entries": [{
	            "name": "邱志偉",
	            "id": "15",
	            "date": "2014-03-31",
	            "year": "2014",
	            "month": "03",
	            "day": "31",
	            "type": "委員會質詢",
	            "quote": "如果他（軍事院校的學生）今天參與其他的議題，例如我們支持同性婚姻或是多元成家的方案，如果他去參加，你們會禁止嗎？",
	            "opinion": "贊成",
	            "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/103/21/LCIDC01_1032101.pdf",
	            "trustVote": "74"
	        }],
	        "forTotal": 1,
	        "againstTotal": 0,
	        "unclearTotal": 0,
	        "position": "贊成",
	        "positionCount": 1
	    }, {
	        "name": "邱議瑩",
	        "party": "民主進步黨",
	        "party_eng": "DPP",
	        "caucus": "DPP",
	        "constituency": ["KHH", 1],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6516",
	                "address": "10051臺北市中正區濟南路1段3-1號0801室",
	                "fax": "02-2358-6520"
	            },
	            "美濃服務處": {
	                "phone": "07-681-8755",
	                "address": "843高雄市美濃區泰中路866號",
	                "fax": "07-681-8677"
	            }
	        },
	        "constituency_detail": "那瑪夏區 桃源區 甲仙區 內門區 杉林區 六龜區 阿蓮區 田寮區 旗山區 美濃區 茂林區 燕巢區 大社區 大樹區",
	        "position": "未表態"
	    }, {
	        "name": "賴振昌",
	        "party": "台灣團結聯盟",
	        "party_eng": "TSU",
	        "caucus": "TSU",
	        "constituency": ["proportional"],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-8558",
	                "address": "10051臺北市中正區濟南路一段3-1號1008室",
	                "fax": "02-2358-8560"
	            }
	        },
	        "constituency_detail": "",
	        "position": "未表態"
	    }, {
	        "name": "黃國書",
	        "party": "民主進步黨",
	        "party_eng": "DPP",
	        "caucus": "DPP",
	        "constituency": ["TXG", 6],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-8358",
	                "address": "10051臺北市中正區濟南路1段3-1號0302室",
	                "fax": "02-2358-8050"
	            },
	            "台中服務處": {
	                "phone": "04-2262-0088",
	                "address": "臺中市南區復興路二段30-22號",
	                "fax": "04-2265-8822"
	            }
	        },
	        "constituency_detail": "西區 中區 東區 南區",
	        "position": "未表態"
	    }, {
	        "name": "林岱樺",
	        "party": "民主進步黨",
	        "party_eng": "DPP",
	        "caucus": "DPP",
	        "constituency": ["KHH", 4],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-8021",
	                "address": "10051臺北市中正區濟南路1段3-1號0706室",
	                "fax": "02-2358-8030"
	            },
	            "大竂服務處": {
	                "phone": "07-781-8117",
	                "address": "高雄市大竂區力行路61號",
	                "fax": "07-781-8167"
	            },
	            "鳳山服務處": {
	                "phone": "07-748-1033",
	                "address": "高雄市鳳山區五權路160號",
	                "fax": "07-741-9584"
	            }
	        },
	        "constituency_detail": "仁武區 鳥松區 大寮區 林園區",
	        "position": "未表態"
	    }, {
	        "name": "莊瑞雄",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["NAN", 2],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6171",
	                "address": "10051臺北市中正區濟南路1段3-1號0805室",
	                "fax": "02-2358-6270"
	            },
	            "南投服務處": {
	                "phone": "049-222-7688",
	                "address": "南投市復興路75號之1",
	                "fax": "049-224-2379"
	            }
	        },
	        "constituency_detail": "南投市 名間鄉 集集鎮 竹山鎮 鹿谷鄉 水里鄉 信義鄉",
	        "position": "未表態"
	    }, {
	        "name": "林郁方",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["TPE", 5],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6276",
	                "address": "10051臺北市中正區濟南路1段3-1號0601室",
	                "fax": "02-2358-6280"
	            }
	        },
	        "constituency_detail": "萬華區 中正區21里",
	        "position": "未表態"
	    }, {
	        "name": "林國正",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["KHH", 9],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6923",
	                "address": "10051臺北市中正區濟南路1段3-1號2119室",
	                "fax": "02-2358-6925"
	            },
	            "高雄服務處": {
	                "phone": "07-721-1213",
	                "address": "高雄市前鎮區永豐路19之6號",
	                "fax": "07-721-3055"
	            }
	        },
	        "constituency_detail": "前鎮區51里 小港區",
	        "position": "未表態"
	    }, {
	        "name": "林淑芬",
	        "party": "民主進步黨",
	        "party_eng": "DPP",
	        "caucus": "DPP",
	        "constituency": ["TPQ", 2],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-8186",
	                "address": "10051臺北市中正區青島東路1-3號7301室",
	                "fax": "02-2358-8190"
	            },
	            "蘆洲服務處": {
	                "phone": "02-8285-6412",
	                "address": "新北市蘆洲區長興路25號",
	                "fax": "02-2281-7980"
	            },
	            "五股服務處": {
	                "phone": "02-2291-2995",
	                "address": "臺北縣五股鄉民義路一段37號",
	                "fax": "02-2291-2355"
	            }
	        },
	        "constituency_detail": "五股區 蘆洲區 三重區16里",
	        "entries": [{
	            "name": "林淑芬",
	            "id": "27",
	            "date": "2014-12-22",
	            "year": "2014",
	            "month": "12",
	            "day": "22",
	            "type": "委員會質詢",
	            "quote": "你這種說法根本是助長歧視，完全是一種假裝式的漸進及演進，基本上，你們認為同志的人權應該要保障，但現在不能給，然後結果就是剝奪同志的基本人權，我告訴你，你這是助長歧視，假裝演進，假裝漸進。你們認為基本上是應該要，但是現在不能，結果就是剝奪他們的基本人權嘛！",
	            "opinion": "贊成",
	            "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/104/12/LCIDC01_1041201.pdf",
	            "trustVote": "5"
	        }],
	        "forTotal": 1,
	        "againstTotal": 0,
	        "unclearTotal": 0,
	        "position": "贊成",
	        "positionCount": 1
	    }, {
	        "name": "林滄敏",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["CHA", 2],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-8281",
	                "address": "10051臺北市中正區鎮江街2號5102室",
	                "fax": "02-2358-8285"
	            },
	            "彰化服務處": {
	                "phone": "04-728-2282",
	                "address": "彰化市成功里旭光西路90號",
	                "fax": "04-723-9961"
	            }
	        },
	        "constituency_detail": "彰化市 花壇鄉 芬園鄉",
	        "position": "未表態"
	    }, {
	        "name": "林德福",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["TPQ", 9],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6995",
	                "address": "10051臺北市中正區青島東路1-3號7202室",
	                "fax": "02-2358-6999"
	            },
	            "永和服務處": {
	                "phone": "02-2232-9899",
	                "address": "新北市永和區永和路二段403號",
	                "fax": "02-3233-4625"
	            }
	        },
	        "constituency_detail": "永和區 中和區17里",
	        "position": "未表態"
	    }, {
	        "name": "林鴻池",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["TPQ", 6],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6871",
	                "address": "10051臺北市中正區濟南路1段3-1號0506室",
	                "fax": "02-2358-6875"
	            },
	            "板橋服務處": {
	                "phone": "02-2253-6788",
	                "address": "新北市板橋區文化路一段120號6樓之1",
	                "fax": "02-2253-7688"
	            }
	        },
	        "constituency_detail": "板橋區（縣民大道 湳仔溝以西）65里",
	        "entries": [{
	            "name": "林鴻池",
	            "id": "28",
	            "date": "2014-12-22",
	            "year": "2014",
	            "month": "12",
	            "day": "22",
	            "type": "委員會質詢",
	            "quote": "今天要討論的民法親屬編部分條文修正案中針對去性別化，希望透過去性別化，修改民法親屬編，讓同性戀可以結婚。有的人認為這其實是基本人權，他們兩個要結婚並沒有礙著別人，不過，這是一個婚姻制度，也是一個家庭制度，我們幾千年來的家庭制度、倫理在一夕之間要透過民法親屬編改變它，我們也可以很快就讓它出委員會，送院會三讀通過，改文字很簡單，但我們需要考量的是，幾千年來的這個家庭制度、倫理的變化對社會產生的衝擊是什麼？",
	            "opinion": "反對",
	            "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/104/12/LCIDC01_1041201.pdf",
	            "trustVote": "2"
	        }],
	        "forTotal": 0,
	        "againstTotal": 1,
	        "unclearTotal": 0,
	        "position": "反對",
	        "positionCount": 1
	    }, {
	        "name": "姚文智",
	        "party": "民主進步黨",
	        "party_eng": "DPP",
	        "caucus": "DPP",
	        "constituency": ["TPE", 2],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6758",
	                "address": "10051臺北市中正區濟南路1段3-1號1102室",
	                "fax": "02-2358-6040"
	            }
	        },
	        "constituency_detail": "大同區 士林區38里",
	        "entries": [{
	            "name": "姚文智",
	            "id": "14",
	            "date": "2013-12-25",
	            "year": "2013",
	            "month": "12",
	            "day": "25",
	            "type": "委員會質詢",
	            "quote": "大家一直在反同性戀，在冬季奧運時，美國就請一個同性戀當團長到俄羅斯去，這不要花錢呀！這是一個用不同的事件去累積、激盪而推動性別平等的作法，你們也可以做呀！國內也有同志的遊行或是其他活動，你們也可以有些創意，不用花錢呀！但是現在不太看得到你們的角色。",
	            "opinion": "贊成",
	            "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/103/07/LCIDC01_1030702.pdf",
	            "trustVote": "3"
	        }],
	        "forTotal": 1,
	        "againstTotal": 0,
	        "unclearTotal": 0,
	        "position": "贊成",
	        "positionCount": 1
	    }, {
	        "name": "柯建銘",
	        "party": "民主進步黨",
	        "party_eng": "DPP",
	        "caucus": "DPP",
	        "constituency": ["proportional"],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6106",
	                "address": "10051臺北市中正區青島東路3號3樓",
	                "fax": "02-2358-6110"
	            },
	            "新竹服務處": {
	                "phone": "03-526-9880",
	                "address": "新竹市四維路15號3樓",
	                "fax": "03-523-2902"
	            }
	        },
	        "constituency_detail": "",
	        "position": "未表態"
	    }, {
	        "name": "段宜康",
	        "party": "民主進步黨",
	        "party_eng": "DPP",
	        "caucus": "DPP",
	        "constituency": ["proportional"],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6196",
	                "address": "10051臺北市中正區濟南路1段3-1號0308室",
	                "fax": "02-2358-6200"
	            }
	        },
	        "constituency_detail": "",
	        "entries": [{
	            "name": "段宜康",
	            "id": "13",
	            "date": "2013-12-25",
	            "year": "2013",
	            "month": "12",
	            "day": "25",
	            "type": "委員會質詢",
	            "quote": "這樣問你好了，你覺得該不該往這個方向去努力？這樣比較有階段性，要往一個方向去努力跟現在馬上要落實是不同的，所以我這樣問你好了，你覺得我們的政府或性別平等業務該不該將此列為重要推動項目？",
	            "opinion": "贊成",
	            "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/103/07/LCIDC01_1030702.pdf",
	            "trustVote": "123"
	        }, {
	            "name": "段宜康",
	            "id": "23",
	            "date": "2014-12-22",
	            "year": "2014",
	            "month": "12",
	            "day": "22",
	            "type": "委員會質詢",
	            "quote": "因為擔心國家的人口政策而不贊成少數人同性婚姻，照這個邏輯，在一男一女結婚之前就要統統檢查有沒有生育能力，沒有生育能力的就沒有資格結婚，否則將影響國家人口政策，現在出生率已經這麼低了，怎麼可以容許沒有生育能力的人結婚？即便是一男一女結婚，在結婚之前都要證明可以生育，你的邏輯是這樣嗎？",
	            "opinion": "贊成",
	            "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/104/12/LCIDC01_1041201.pdf",
	            "trustVote": "45"
	        }],
	        "forTotal": 2,
	        "againstTotal": 0,
	        "unclearTotal": 0,
	        "position": "贊成",
	        "positionCount": 2
	    }, {
	        "name": "洪秀柱",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["proportional"],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6099",
	                "address": "10051臺北市中正區濟南路1段3-1號12樓",
	                "fax": "02-2358-6100"
	            },
	            "立法委員洪秀柱服務處": {
	                "phone": "02-8923-7667",
	                "address": "新北市永和區永和路一段65巷2號",
	                "fax": "02-8923-7668"
	            }
	        },
	        "constituency_detail": "",
	        "position": "未表態"
	    }, {
	        "name": "紀國棟",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["proportional"],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6936",
	                "address": "10051臺北市中正區濟南路1段3-1號0303",
	                "fax": "02-2358-6940"
	            },
	            "大肚服務處": {
	                "phone": "04-2691-2967",
	                "address": "臺中市大肚區自強里遊園路二段278號",
	                "fax": "04-2691-3967"
	            }
	        },
	        "constituency_detail": "",
	        "position": "未表態"
	    }, {
	        "name": "孫大千",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["TAO", 6],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6881",
	                "address": "10051臺北市中正區濟南路1段3-1號2118室",
	                "fax": "02-2358-6885"
	            },
	            "桃園服務處": {
	                "phone": "03-375-5558",
	                "address": "桃園縣八德市廣福路299號",
	                "fax": "03-375-2000"
	            }
	        },
	        "constituency_detail": "八德市 大溪鎮 復興鄉 中壢市12里",
	        "position": "未表態"
	    }, {
	        "name": "徐少萍",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["proportional"],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6231",
	                "address": "10051臺北市中正區濟南路1段3-1號0607室",
	                "fax": "02-2358-6235"
	            },
	            "基隆服務處": {
	                "phone": "02-2427-7799",
	                "address": "基隆市義一路87號9樓之2",
	                "fax": "02-2428-0097"
	            }
	        },
	        "constituency_detail": "",
	        "position": "未表態"
	    }, {
	        "name": "徐欣瑩",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["HSQ", 0],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6351",
	                "address": "10051臺北市中正區濟南路1段3-1號0306室",
	                "fax": "02-2358-6355"
	            },
	            "竹北服務處": {
	                "phone": "03-657-1621",
	                "address": "新竹縣竹北市光明六路235號",
	                "fax": "03-657-2133"
	            }
	        },
	        "constituency_detail": "全縣",
	        "position": "未表態"
	    }, {
	        "name": "許淑華",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["MIA", 2],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6975",
	                "address": "10051臺北市中正區濟南路1段3-1號2107室",
	                "fax": "02-2358-6979"
	            },
	            "頭份服務處": {
	                "phone": "037-666-369",
	                "address": "苗栗縣頭份鎮忠孝里信東路206號",
	                "fax": "037-674-319"
	            },
	            "苗栗服務處": {
	                "phone": "037-374-000",
	                "address": "苗栗市自治路517號",
	                "fax": "037-320-216"
	            },
	            "公館服務處": {
	                "phone": "037-223-566",
	                "address": "苗栗縣公館鄉仁愛路二段168-1號",
	                "fax": "037-239-233"
	            }
	        },
	        "constituency_detail": "頭份鎮 三灣鄉 南庄鄉 苗栗市 頭屋鄉 獅潭鄉 公館鄉 大湖鄉 泰安鄉 卓蘭鎮",
	        "position": "未表態"
	    }, {
	        "name": "翁重鈞",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["CYQ", 1],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6781",
	                "address": "10051臺北市中正區濟南路1段3-1號0906室",
	                "fax": "02-2358-6785"
	            },
	            "嘉義義竹服務處": {
	                "phone": "05-341-2029",
	                "address": "嘉義縣義竹鄉仁里村407-4號",
	                "fax": "05-341-7251"
	            }
	        },
	        "constituency_detail": "六腳鄉 東石鄉 朴子市 太保市 布袋鎮 義竹鄉 鹿草鄉 水上鄉",
	        "position": "未表態"
	    }, {
	        "name": "陳其邁",
	        "party": "民主進步黨",
	        "party_eng": "DPP",
	        "caucus": "DPP",
	        "constituency": ["proportional"],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-8566",
	                "address": "10051臺北市中正區濟南路1段3-1號1105室",
	                "fax": "02-2358-8570"
	            },
	            "高雄服務處": {
	                "phone": "07-382-5189",
	                "address": "高雄市三民區九如一路399號",
	                "fax": "07-382-5177"
	            }
	        },
	        "constituency_detail": "",
	        "entries": [{
	            "name": "陳其邁",
	            "id": "9",
	            "date": "2013-11-20",
	            "year": "2013",
	            "month": "11",
	            "day": "20",
	            "type": "預算凍結案",
	            "quote": "內政部103年度單位預算第3目「戶政業務」分支計畫「01督導改進戶籍行政」編列業務費219萬2千元。惟今年6月內政部發函予一對已登記結婚之吳姓跨性別伴侶，要求其自行辦理撤銷婚姻，又於今年8月7日內政部專案會議，認定吳姓伴侶婚姻有效，內政部態度反覆，標準不一，侵害民眾權益，造成不必要之精神傷害，顯見內政部缺乏性別友善意識。爰此，提案凍結前開預算1/2，計109萬6千元，俟內政部提出「如何推行我國同性婚姻合法化」之專案報告，向本院內政委員會報告並經同意後，始得動支。",
	            "opinion": "贊成",
	            "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/102/75/LCIDC01_1027501.pdf",
	            "trustVote": "1"
	        }, {
	            "name": "陳其邁",
	            "id": "11",
	            "date": "2013-11-27",
	            "year": "2013",
	            "month": "11",
	            "day": "27",
	            "type": "預算凍結案",
	            "quote": "內政部103年度單位預算第3目「戶政業務」分支計畫「01督導改進戶籍行政」編列業務費219萬2,000元。惟今年6月內政部發函予一對已登記結婚之吳姓跨性別伴侶，要求其自行辦理撤銷婚姻，又於今年8月7日內政部專案會議，認定吳姓伴侶婚姻有效，內政部態度反覆，標準不一，侵害民眾權益，造成不必要之精神傷害，顯見內政部缺乏性別友善意識。爰此，提案凍結預算，俟內政部提出「如何推行我國同性婚姻合法化」之專案報告，向立法院內政委員會報告並經同意後，始得動支。",
	            "opinion": "贊成",
	            "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/102/79/LCIDC01_1027901.pdf",
	            "trustVote": "12"
	        }, {
	            "name": "陳其邁",
	            "id": "18",
	            "date": "2014-11-12",
	            "year": "2014",
	            "month": "11",
	            "day": "12",
	            "type": "預算主決議",
	            "quote": "查行政院100年函頒之「性別平等政策綱領」乃由行政院性別平等處主政，規劃我國性別平等施政藍圖。然查「性別平等政策綱領」內容偏重婦女政策，多元性別、同志權益等政策尚不完備，實有不盡完善之處。且查103年6月「消除對婦女一切形式歧視公約（CEDAW）中華民國（臺灣）第2次國家報告國外專家審查暨發表會議」中，國外專家建議政府應將多元性別內涵納入性別平等教育教材中，並建議政府就國內社會關注的多元家庭法制保障及福利取得議題評估與制定相關政策。又查近年台灣同志及多元性別權益諸多倡議活動皆將「多元性別」、「婚姻平權、平等成家」、「擁抱性/別認同差異」主題納入，國際知名之紐約時報亦於103年10月報導台灣社會追求同志平權運動，形容台灣已具有亞洲同性戀者的「燈塔」地位。爰此，為求政府之性別平等政策不致落後社會脈動及趨勢之外，行政院性別平等處身為「性別平等政策綱領」主政機關，應就同志權益、多元性別、婚姻平權等議題進行研擬，將上述層面之議題修正納入「性別平等政策綱領」政策內容。",
	            "opinion": "贊成",
	            "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/103/80/LCIDC01_1038001.pdf",
	            "trustVote": "54"
	        }, {
	            "name": "陳其邁",
	            "id": "30",
	            "date": "2015-01-12",
	            "year": "2015",
	            "month": "01",
	            "day": "12",
	            "type": "委員會質詢",
	            "quote": "所以我說尊重部落會議的決定啊！這是原住民族自治，所以包括對同性婚姻的看法，我們也應該尊重部落，你剛剛的口頭宣示很好、很進步啊！我給你鼓勵啊！所以我的意思是，我們進一步在原住民族基本法裡頭，就把同性婚姻這個部分列入，明定我們尊重部落所做的決定，尊重原住民自治，人家魯凱族贊成，或是有其他族群贊成，我們應該要尊重他們啊！我也同意啊！",
	            "opinion": "贊成",
	            "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/104/12/LCIDC01_1041201.pdf",
	            "trustVote": "75"
	        }],
	        "forTotal": 4,
	        "againstTotal": 0,
	        "unclearTotal": 0,
	        "position": "贊成",
	        "positionCount": 4
	    }, {
	        "name": "陳明文",
	        "party": "民主進步黨",
	        "party_eng": "DPP",
	        "caucus": "DPP",
	        "constituency": ["CYQ", 2],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-8101",
	                "address": "10051臺北市中正區青島東路1-3號7105室",
	                "fax": "02-2358-8105"
	            },
	            "嘉義服務處": {
	                "phone": "05-225-5589",
	                "address": "600嘉義市力行街72號",
	                "fax": "05-225-1641"
	            }
	        },
	        "constituency_detail": "溪口鄉 大林鎮 梅山鄉 新港鄉 民雄鄉 竹崎鄉 中埔鄉 番路鄉 大埔鄉 阿里山鄉",
	        "position": "未表態"
	    }, {
	        "name": "陳亭妃",
	        "party": "民主進步黨",
	        "party_eng": "DPP",
	        "caucus": "DPP",
	        "constituency": ["TNN", 3],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6761",
	                "address": "10051臺北市中正區濟南路1段3-1號1101室",
	                "fax": "02-2358-6755"
	            },
	            "北區服務處": {
	                "phone": "06-280-3906",
	                "address": "704臺南市北區海安路三段963號",
	                "fax": "06-358-6489"
	            },
	            "安南區服務處": {
	                "phone": "06-256-8012",
	                "address": "709臺南市安南區安中路二段8號",
	                "fax": "06-256-0701"
	            }
	        },
	        "constituency_detail": "安南區 北區 中西區",
	        "position": "未表態"
	    }, {
	        "name": "陳唐山",
	        "party": "民主進步黨",
	        "party_eng": "DPP",
	        "caucus": "DPP",
	        "constituency": ["TNN", 5],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-8211",
	                "address": "10051臺北市中正區鎮江街2號5305室",
	                "fax": "02-2358-8215"
	            },
	            "台南服務處": {
	                "phone": "06-201-8217",
	                "address": "臺南市永康區永忠路88號",
	                "fax": "06-201-8219"
	            }
	        },
	        "constituency_detail": "永康區 仁德區 歸仁區 關廟區 龍崎區",
	        "position": "未表態"
	    }, {
	        "name": "陳根德",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["TAO", 1],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6221",
	                "address": "10051臺北市中正區鎮江街2號5303室",
	                "fax": "02-2358-6225"
	            },
	            "桃園市服務處": {
	                "phone": "(03)338-6656",
	                "address": "桃園縣桃園市大有路80號",
	                "fax": "(03)338-6599"
	            },
	            "龜山服務處": {
	                "phone": "03-329-9255",
	                "address": "桃園縣龜山鄉三民路70號",
	                "fax": "03-329-9769"
	            },
	            "蘆竹服務處": {
	                "phone": "03-312-1988",
	                "address": "桃園縣蘆竹鄉新南路一段128號",
	                "fax": "03-312-1875"
	            }
	        },
	        "constituency_detail": "蘆竹鄉 龜山鄉 桃園市10里",
	        "position": "未表態"
	    }, {
	        "name": "陳淑慧",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["proportional"],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6931",
	                "address": "10051臺北市中正區濟南路1段3-1號1006室",
	                "fax": "02-2358-6935"
	            },
	            "台南服務處": {
	                "phone": "06-268-5889",
	                "address": "臺南市東區崇明14街53號",
	                "fax": "06-269-2889"
	            }
	        },
	        "constituency_detail": "",
	        "position": "未表態"
	    }, {
	        "name": "陳雪生",
	        "party": "無黨籍",
	        "party_eng": "NP",
	        "caucus": null,
	        "constituency": ["LJF", 0],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6631",
	                "address": "10051臺北市中正區濟南路1段3-1號2117室",
	                "fax": "02-2358-6635"
	            },
	            "馬祖服務處": {
	                "phone": "0836-25018",
	                "address": "連江縣南竿鄉介壽村237號"
	            }
	        },
	        "constituency_detail": "全縣",
	        "position": "未表態"
	    }, {
	        "name": "陳超明",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["MIA", 1],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6611",
	                "address": "10051臺北市中正區濟南路1段3-1號1003室",
	                "fax": "02-2358-6615"
	            },
	            "竹南服務處": {
	                "phone": "037-468-448",
	                "address": "350苗栗縣竹南鎮港墘里10鄰塭內46-1號",
	                "fax": "037-478-508"
	            }
	        },
	        "constituency_detail": "竹南鎮 造橋鄉 後龍鎮 西湖鄉 通霄鎮 銅鑼鄉 苑裡鎮 三義鄉",
	        "position": "未表態"
	    }, {
	        "name": "陳節如",
	        "party": "民主進步黨",
	        "party_eng": "DPP",
	        "caucus": "DPP",
	        "constituency": ["proportional"],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6046",
	                "address": "10051臺北市中正區濟南路1段3-1號2115室",
	                "fax": "02-2358-6050"
	            }
	        },
	        "constituency_detail": "",
	        "position": "未表態"
	    }, {
	        "name": "陳碧涵",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["proportional"],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-8181",
	                "address": "10051臺北市中正區濟南路1段3-1號0603室",
	                "fax": "02-2358-8185"
	            }
	        },
	        "constituency_detail": "",
	        "position": "未表態"
	    }, {
	        "name": "陳歐珀",
	        "party": "民主進步黨",
	        "party_eng": "DPP",
	        "caucus": "DPP",
	        "constituency": ["ILA", 0],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6220",
	                "address": "10051臺北市中正區濟南路1段3-1號0408室",
	                "fax": "02-2358-6170"
	            },
	            "宜蘭服務處": {
	                "phone": "03-936-6299",
	                "address": "宜蘭市民族路593號",
	                "fax": "03-936-6189"
	            },
	            "羅東服務處": {
	                "phone": "03-957-2099",
	                "address": "羅東鎮興東南路152號",
	                "fax": "03-957-2788"
	            }
	        },
	        "constituency_detail": "全縣",
	        "position": "未表態"
	    }, {
	        "name": "陳學聖",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["TAO", 3],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6699",
	                "address": "10051臺北市中正區濟南路1段3-1號0908室",
	                "fax": "02-2358-6700"
	            },
	            "中壢服務處": {
	                "address": "桃園縣中壢市中央西路二段281號4樓"
	            }
	        },
	        "constituency_detail": "中壢市69里",
	        "position": "未表態"
	    }, {
	        "name": "陳鎮湘",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["proportional"],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-8286",
	                "address": "10051臺北市中正區青島東路1-3號7302室",
	                "fax": "02-2358-8290"
	            }
	        },
	        "constituency_detail": "",
	        "position": "未表態"
	    }, {
	        "name": "馬文君",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["NAN", 1],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6816",
	                "address": "10051臺北市中正區青島東路1-3號7203室",
	                "fax": "02-2358-6820"
	            },
	            "埔里服務處": {
	                "phone": "049-242-3248",
	                "address": "南投縣埔里鎮西寧路36號",
	                "fax": "049-290-1626"
	            },
	            "草屯服務處": {
	                "phone": "049-235-5807",
	                "address": "南投縣草屯鎮博愛路411號",
	                "fax": "049-235-5023"
	            }
	        },
	        "constituency_detail": "草屯鎮 國姓鄉 埔里鎮 仁愛鄉 中寮鄉 魚池鄉",
	        "position": "未表態"
	    }, {
	        "name": "高志鵬",
	        "party": "民主進步黨",
	        "party_eng": "DPP",
	        "caucus": "DPP",
	        "constituency": ["TPQ", 3],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6241",
	                "address": "10051臺北市中正區濟南路1段3-1號0503室",
	                "fax": "02-2358-6245"
	            },
	            "三重服務處": {
	                "phone": "02-8988-1368",
	                "address": "新北市三重區忠孝路一段153號",
	                "fax": "02-8988-3076"
	            }
	        },
	        "constituency_detail": "三重區103里",
	        "position": "未表態"
	    }, {
	        "name": "高金素梅",
	        "party": "無黨團結聯盟",
	        "party_eng": "NPU",
	        "caucus": null,
	        "constituency": ["aborigine", "highland"],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6051",
	                "address": "10051臺北市中正區青島東路10號3507室",
	                "fax": "02-2358-6055"
	            },
	            "南區服務處": {
	                "phone": "08-799-5962",
	                "address": "屏東縣瑪家鄉北葉村9鄰風景巷1-3號",
	                "fax": "08-799-5963"
	            }
	        },
	        "constituency_detail": "山地原住民",
	        "position": "未表態"
	    }, {
	        "name": "張嘉郡",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["YUN", 1],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6970",
	                "address": "10051臺北市中正區濟南路1段3-1號0206室",
	                "fax": "02-2358-6974"
	            },
	            "虎尾服務處": {
	                "phone": "05-632-0629",
	                "address": "雲林縣虎尾鎮平和里青埔2-23號",
	                "fax": "05-633-3318"
	            },
	            "北港服務處": {
	                "phone": "05-782-2088",
	                "address": "雲林縣北港鎮公園路406號",
	                "fax": "05-782-2848"
	            }
	        },
	        "constituency_detail": "麥寮鄉 台西鄉 東勢鄉 褒忠鄉 土庫鎮 虎尾鎮 四湖鄉 元長鄉 口湖鄉 水林鄉 北港鎮",
	        "position": "未表態"
	    }, {
	        "name": "張慶忠",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["TPQ", 8],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6896",
	                "address": "10051臺北市中正區濟南路1段3-1號1002室",
	                "fax": "02-2358-6900"
	            },
	            "中和服務處": {
	                "phone": "02-8221-5879",
	                "address": "新北市中和區建康路107號1樓",
	                "fax": "02-8221-3690"
	            }
	        },
	        "constituency_detail": "中和區76里",
	        "position": "未表態"
	    }, {
	        "name": "陳怡潔",
	        "party": "親民黨",
	        "party_eng": "PFP",
	        "caucus": "PFP",
	        "constituency": ["proportional"],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6798",
	                "address": "10051臺北市中正區濟南路1段3-1號0507室",
	                "fax": "02-2358-6800"
	            }
	        },
	        "constituency_detail": "",
	        "position": "未表態"
	    }, {
	        "name": "周倪安",
	        "party": "台灣團結聯盟",
	        "party_eng": "TSU",
	        "caucus": "TSU",
	        "constituency": ["proportional"],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6868",
	                "address": "10051臺北市中正區青島東路1號3203室",
	                "fax": "02-2358-6870"
	            }
	        },
	        "constituency_detail": "",
	        "position": "未表態"
	    }, {
	        "name": "許添財",
	        "party": "民主進步黨",
	        "party_eng": "DPP",
	        "caucus": "DPP",
	        "constituency": ["TNN", 4],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6909",
	                "address": "10051臺北市中正區濟南路1段3-1號0903室",
	                "fax": "02-2358-6920"
	            },
	            "台南服務處": {
	                "phone": "06-298-3701",
	                "address": "臺南市安平區永華路二段822號",
	                "fax": "06-298-3163"
	            },
	            "灣裡聯絡處": {
	                "phone": "06-296-3568",
	                "address": "台南市南區明興路1331號 (林良文理事長)"
	            }
	        },
	        "constituency_detail": "安平區 南區 東區",
	        "position": "未表態"
	    }, {
	        "name": "許智傑",
	        "party": "民主進步黨",
	        "party_eng": "DPP",
	        "caucus": "DPP",
	        "constituency": ["KHH", 8],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-8151",
	                "address": "10051臺北市中正區濟南路1段3-1號0703室",
	                "fax": "02-2358-6625"
	            },
	            "鳳山服務處": {
	                "phone": "07-768-2666;07-768-1899",
	                "address": "830高雄市鳳山區保泰路96號",
	                "fax": "07-768-9900"
	            },
	            "": {
	                "phone": "07-768-1899"
	            }
	        },
	        "constituency_detail": "鳳山區",
	        "position": "未表態"
	    }, {
	        "name": "曾巨威",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["proportional"],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6381",
	                "address": "10051臺北市中正區濟南路1段3-1號0705室",
	                "fax": "02-2358-6390"
	            }
	        },
	        "constituency_detail": "",
	        "position": "未表態"
	    }, {
	        "name": "葉宜津",
	        "party": "民主進步黨",
	        "party_eng": "DPP",
	        "caucus": "DPP",
	        "constituency": ["TNN", 1],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6291",
	                "address": "10051臺北市中正區濟南路1段3-1號0403室",
	                "fax": "02-2358-6295"
	            },
	            "新營服務處": {
	                "phone": "06-657-2808",
	                "address": "臺南市新營區民生路130號",
	                "fax": "06-657-2818"
	            },
	            "安平服務處": {
	                "phone": "06-295-0826",
	                "address": "臺南市安平區健康路三段206號",
	                "fax": "06-295-0829"
	            }
	        },
	        "constituency_detail": "後壁區 白河區 北門區 學甲區 鹽水區 新營區 柳營區 東山區 將軍區 下營區 六甲區 官田區",
	        "position": "未表態"
	    }, {
	        "name": "費鴻泰",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["TPE", 7],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6990",
	                "address": "10051臺北市中正區濟南路1段3-1號0502室",
	                "fax": "02-2358-6994"
	            },
	            "服務處": {
	                "phone": "02-2729-1966",
	                "address": "11050臺北市信義區莊敬路311號5樓",
	                "fax": "02-2720-9492"
	            }
	        },
	        "constituency_detail": "信義區 松山區13里",
	        "position": "未表態"
	    }, {
	        "name": "葉津鈴",
	        "party": "台灣團結聯盟",
	        "party_eng": "TSU",
	        "caucus": "TSU",
	        "constituency": ["proportional"],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6876",
	                "address": "10051臺北市中正區濟南路一段3-1號405室",
	                "fax": "02-2358-6880"
	            },
	            "高雄服務處": {
	                "phone": "07-333-2333",
	                "address": "高雄市前鎮區滇池街193號",
	                "fax": "07-338-8957"
	            }
	        },
	        "constituency_detail": "",
	        "position": "未表態"
	    }, {
	        "name": "黃志雄",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["TPQ", 5],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6391",
	                "address": "10051臺北市中正區濟南路1段3-1號0606室",
	                "fax": "02-2358-6395"
	            },
	            "樹林服務處": {
	                "phone": "02-2680-0775",
	                "address": "23852新北市樹林區中山路三段137號",
	                "fax": "02-2680-5365"
	            },
	            "鶯歌服務處": {
	                "phone": "02-8678-0909",
	                "address": "新北市鶯歌區光明街52號",
	                "fax": "02-8678-0707"
	            },
	            "新莊服務處": {
	                "phone": "02-2204-2269",
	                "address": "臺北縣新莊市龍安路485號",
	                "fax": "02-2204-0486"
	            }
	        },
	        "constituency_detail": "樹林區 鶯歌區 新莊區9里",
	        "position": "未表態"
	    }, {
	        "name": "黃昭順",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["KHH", 3],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6786",
	                "address": "10051臺北市中正區濟南路1段3-1號1107室",
	                "fax": "02-2358-6790"
	            },
	            "高雄服務處": {
	                "phone": "07-341-3361",
	                "address": "813高雄市左營區新庄仔路425號",
	                "fax": "07-341-2672"
	            }
	        },
	        "constituency_detail": "楠梓區 左營區",
	        "entries": [{
	            "name": "黃昭順",
	            "id": "1",
	            "date": "2012-05-11",
	            "year": "2012",
	            "month": "05",
	            "day": "11",
	            "type": "院會書面質詢",
	            "quote": "本院黃委員昭順，針對近日同性婚姻合法化爭議，認為人生而平等，同性婚姻權益等同於異性之婚姻權，應與其享婚姻中相同的權利與義務，亦應受憲法婚姻自由之保障，對於同性婚姻也應採取理解並尊重之態度，儘速修正相關法令，以期落實平等原則，特向行政院提出質詢。",
	            "opinion": "贊成",
	            "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/101/32/LCIDC01_1013201.pdf",
	            "trustVote": "12"
	        }],
	        "forTotal": 1,
	        "againstTotal": 0,
	        "unclearTotal": 0,
	        "position": "贊成",
	        "positionCount": 1
	    }, {
	        "name": "黃偉哲",
	        "party": "民主進步黨",
	        "party_eng": "DPP",
	        "caucus": "DPP",
	        "constituency": ["TNN", 2],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-8311",
	                "address": "10051臺北市中正區鎮江街2號5106室",
	                "fax": "02-2358-8315"
	            },
	            "佳里服務處": {
	                "phone": "06-723-0100",
	                "address": "臺南市佳里區進學路130號",
	                "fax": "06-723-0023"
	            },
	            "麻豆服務處": {
	                "phone": "06-571-7753",
	                "address": "臺南市麻豆區南勢里62-2號",
	                "fax": "06-571-0225"
	            }
	        },
	        "constituency_detail": "七股區 佳里區 麻豆區 善化區 大內區 玉井區 楠西區 西港區 安定區 新市區 山上區 新化區 左鎮區 南化區",
	        "position": "未表態"
	    }, {
	        "name": "楊玉欣",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["proportional"],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6666",
	                "address": "10051臺北市中正區濟南路1段3-1號0608室",
	                "fax": "02-2358-6670"
	            }
	        },
	        "constituency_detail": "",
	        "position": "未表態"
	    }, {
	        "name": "楊應雄",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["JME", 0],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-8268",
	                "address": "10051臺北市中正區青島東路1-3號7102室",
	                "fax": "02-2358-8270"
	            },
	            "金門服務處": {
	                "phone": "082-312-058",
	                "address": "金門縣金城鎮光前路97號",
	                "fax": "082-326-175"
	            }
	        },
	        "constituency_detail": "全縣",
	        "position": "未表態"
	    }, {
	        "name": "楊曜",
	        "party": "民主進步黨",
	        "party_eng": "DPP",
	        "caucus": "DPP",
	        "constituency": ["PEN", 0],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6736",
	                "address": "10051臺北市中正區濟南路1段3-1號0205室",
	                "fax": "02-2358-6740"
	            },
	            "澎湖服務處": {
	                "phone": "06-921-8678",
	                "address": "澎湖縣馬公市新店路473號",
	                "fax": "06-921-1317"
	            }
	        },
	        "constituency_detail": "全縣",
	        "position": "未表態"
	    }, {
	        "name": "楊瓊瓔",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["TXG", 3],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6206",
	                "address": "10051臺北市中正區濟南路1段3-1號0907室",
	                "fax": "02-2358-6210"
	            },
	            "潭子服務處": {
	                "phone": "04-2536-2878",
	                "address": "臺中市潭子區潭興路二段397號",
	                "fax": "04-2536-2516"
	            },
	            "大雅服務處": {
	                "phone": "04-2568-5512",
	                "address": "428臺中市大雅區學府路405號",
	                "fax": "04-2568-2112"
	            }
	        },
	        "constituency_detail": "后里區 神岡區 大雅區 潭子區",
	        "position": "未表態"
	    }, {
	        "name": "楊麗環",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["TAO", 4],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6066",
	                "address": "10051臺北市中正區濟南路1段3-1號0208室",
	                "fax": "02-2358-6070"
	            },
	            "桃園服務處": {
	                "phone": "03-346-5509",
	                "address": "桃園縣桃園市同安街171號",
	                "fax": "03-357-7640"
	            }
	        },
	        "constituency_detail": "桃園市66里",
	        "position": "未表態"
	    }, {
	        "name": "詹凱臣",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["foreign"],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6536",
	                "address": "10051臺北市中正區濟南路1段3-1號0802室",
	                "fax": "02-2358-6540"
	            }
	        },
	        "constituency_detail": "僑居國外國民",
	        "position": "未表態"
	    }, {
	        "name": "廖正井",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["TAO", 2],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6316",
	                "address": "10051臺北市中正區濟南路1段3-1號0605室",
	                "fax": "02-2358-6320"
	            },
	            "大園服務處": {
	                "phone": "03-385-1818",
	                "address": "桃園縣大園鄉田心村華興路157號",
	                "fax": "03-386-9656"
	            },
	            "楊梅服務處": {
	                "phone": "03-488-2728",
	                "address": "桃園縣楊梅市大模街10號3樓之2",
	                "fax": "03-488-2758"
	            },
	            "新屋服務處": {
	                "phone": "03-477-3556",
	                "address": "桃園縣新屋鄉中山路112號",
	                "fax": "03-477-3536"
	            }
	        },
	        "constituency_detail": "大園鄉 觀音鄉 新屋鄉 楊梅市",
	        "entries": [{
	            "name": "廖正井",
	            "id": "21",
	            "date": "2014-12-22",
	            "year": "2014",
	            "month": "12",
	            "day": "22",
	            "type": "委員會質詢",
	            "quote": "我贊成你的看法，我們客家人有家族族譜，像我們就常常談起自己是來台第幾代，相關族譜也都會留傳下來，如果照這樣發展，可能就會失去家庭倫理，家庭關係也不復存在，是不是？",
	            "opinion": "反對",
	            "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/104/12/LCIDC01_1041201.pdf",
	            "trustVote": "4"
	        }],
	        "forTotal": 0,
	        "againstTotal": 1,
	        "unclearTotal": 0,
	        "position": "反對",
	        "positionCount": 1
	    }, {
	        "name": "廖國棟",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["aborigine", "lowland"],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-8176",
	                "address": "10051臺北市中正區濟南路1段3-1號0807室",
	                "fax": "02-2358-8180"
	            },
	            "台東服務處": {
	                "phone": "089-228-798",
	                "address": "臺東市四維路3段72號",
	                "fax": "089-228-600"
	            }
	        },
	        "constituency_detail": "",
	        "position": "未表態"
	    }, {
	        "name": "管碧玲",
	        "party": "民主進步黨",
	        "party_eng": "DPP",
	        "caucus": "DPP",
	        "constituency": ["KHH", 5],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-8146",
	                "address": "10051臺北市中正區濟南路1段3-1號0901室",
	                "fax": "02-2358-8150"
	            },
	            "高雄服務處": {
	                "phone": "07-313-7816",
	                "address": "高雄市三民區博愛一路183號",
	                "fax": "07-313-5797"
	            },
	            "內惟服務處": {
	                "phone": "07-533-0227",
	                "address": "高雄市鼓山區九如四路1097號",
	                "fax": "07-521-5237"
	            }
	        },
	        "constituency_detail": "鼓山區 鹽埕區 旗津區 三民區42里",
	        "position": "未表態"
	    }, {
	        "name": "蔡正元",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["TPE", 4],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-8276",
	                "address": "10051臺北市中正區鎮江街2號5301室",
	                "fax": "02-2358-8280"
	            },
	            "內湖服務處": {
	                "phone": "02-2790-5746",
	                "address": "114臺北市內湖區成功路三段82號2樓",
	                "fax": "02-2795-6289"
	            }
	        },
	        "constituency_detail": "內湖區 南港區",
	        "position": "未表態"
	    }, {
	        "name": "蔡其昌",
	        "party": "民主進步黨",
	        "party_eng": "DPP",
	        "caucus": "DPP",
	        "constituency": ["TXG", 1],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6151",
	                "address": "10051臺北市中正區鎮江街2號5103室",
	                "fax": "02-2358-6155"
	            },
	            "清水服務處": {
	                "phone": "04-2623-8581",
	                "address": "臺中市清水區中華路448號",
	                "fax": "04-2623-8583"
	            },
	            "大甲服務處": {
	                "phone": "04-2688-7555",
	                "address": "臺中市大甲區文武路274號",
	                "fax": "04-2688-9123"
	            }
	        },
	        "constituency_detail": "大甲區 大安區 外埔區 清水區 梧棲區",
	        "position": "未表態"
	    }, {
	        "name": "蔡煌瑯",
	        "party": "民主進步黨",
	        "party_eng": "DPP",
	        "caucus": "DPP",
	        "constituency": ["proportional"],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-8256",
	                "address": "10051臺北市中正區濟南路1段3-1號2101室",
	                "fax": "02-2358-8260"
	            }
	        },
	        "constituency_detail": "",
	        "position": "未表態"
	    }, {
	        "name": "蔡錦隆",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["TXG", 4],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6121",
	                "address": "10051臺北市中正區濟南路1段3-1號0803室",
	                "fax": "02-2358-6125"
	            },
	            "台中服務處": {
	                "phone": "04-2708-2899",
	                "address": "臺中市西屯區黎明路三段58號",
	                "fax": "04-2708-2896"
	            }
	        },
	        "constituency_detail": "西屯區 南屯區",
	        "position": "未表態"
	    }, {
	        "name": "蔣乃辛",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["TPE", 6],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6901",
	                "address": "10051臺北市中正區濟南路1段3-1號2112室",
	                "fax": "02-2358-6905"
	            }
	        },
	        "constituency_detail": "大安區",
	        "position": "未表態"
	    }, {
	        "name": "趙天麟",
	        "party": "民主進步黨",
	        "party_eng": "DPP",
	        "caucus": "DPP",
	        "constituency": ["KHH", 7],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6576",
	                "address": "10051臺北市中正區濟南路1段3-1號0505室",
	                "fax": "02-2358-6580"
	            },
	            "高雄服務處": {
	                "phone": "07-333-6868",
	                "address": "80251高雄市苓雅區民權一路53號",
	                "fax": "07-333-6860"
	            }
	        },
	        "constituency_detail": "前金區 新興區 苓雅區 前鎮區8里",
	        "position": "未表態"
	    }, {
	        "name": "鄭天財",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["aborigine", "lowland"],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6831",
	                "address": "10051臺北市中正區濟南路1段3-1號0307室",
	                "fax": "02-2358-6835"
	            },
	            "花蓮服務處": {
	                "phone": "03-851-2306",
	                "address": "973花蓮縣吉安鄉南昌村南昌北路59號",
	                "fax": "03-851-3306"
	            }
	        },
	        "constituency_detail": "",
	        "position": "未表態"
	    }, {
	        "name": "鄭汝芬",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["CHA", 3],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6191",
	                "address": "10051臺北市中正區濟南路1段3-1號1007室",
	                "fax": "02-2358-6195"
	            },
	            "溪州服務處": {
	                "phone": "04-889-4123",
	                "address": "彰化縣溪洲鄉中山路三段270巷5號",
	                "fax": "04-889-8399"
	            },
	            "二林服務處": {
	                "phone": "04-895-5011",
	                "address": "彰化縣二林鎮後厝里太平路一段88巷86號",
	                "fax": "04-895-5012"
	            },
	            "溪湖服務處": {
	                "phone": "04-882-2211",
	                "address": "彰化縣溪湖鎮東環路320號",
	                "fax": "04-861-3552"
	            }
	        },
	        "constituency_detail": "芳苑鄉 二林鎮 埔鹽鄉 溪湖鎮 埔心鄉 大城鄉 竹塘鄉 埤頭鄉 北斗鎮 溪州鄉",
	        "position": "未表態"
	    }, {
	        "name": "鄭麗君",
	        "party": "民主進步黨",
	        "party_eng": "DPP",
	        "caucus": "DPP",
	        "constituency": ["proportional"],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-8329",
	                "address": "10051臺北市中正區鎮江街2號5107室",
	                "fax": "02-2358-8330"
	            }
	        },
	        "constituency_detail": "",
	        "entries": [{
	            "name": "鄭麗君",
	            "id": "26",
	            "date": "2014-12-22",
	            "year": "2014",
	            "month": "12",
	            "day": "22",
	            "type": "委員會質詢",
	            "quote": "今天如果你們繼續要主張這條法律必須基於所謂的傳統、人倫與國情，就是一種社會的歧視，而此背後是這個法律制度性歧視的結構，所以，為什麼我們主張要修民法，因為如果前面所說的制度性歧視結構不打破，社會歧視依然可以這麼大聲地繼續污名，而且竟然是由立法委員在這裡說出來，讓我們覺得實在不可思議！",
	            "opinion": "贊成",
	            "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/104/12/LCIDC01_1041201.pdf",
	            "trustVote": "542"
	        }],
	        "forTotal": 1,
	        "againstTotal": 0,
	        "unclearTotal": 0,
	        "position": "贊成",
	        "positionCount": 1
	    }, {
	        "name": "劉建國",
	        "party": "民主進步黨",
	        "party_eng": "DPP",
	        "caucus": "DPP",
	        "constituency": ["YUN", 2],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-8088",
	                "address": "10051臺北市中正區濟南路1段3-1號0602室",
	                "fax": "02-2358-8089"
	            },
	            "斗六服務處": {
	                "phone": "05-534-2586",
	                "address": "640雲林縣斗六市公明路3號",
	                "fax": "05-532-2270"
	            },
	            "西螺服務處": {
	                "phone": "05-587-3586",
	                "address": "640雲林縣西螺鎮建興路365號之1"
	            },
	            "斗南服務處": {
	                "phone": "05-595-1270",
	                "address": "640雲林縣斗南鎮東光二街20號"
	            }
	        },
	        "constituency_detail": "崙背鄉 二崙鄉 西螺鎮 莿桐鄉 林內鄉 斗六市 大埤鄉 斗南鎮 古坑鄉",
	        "position": "未表態"
	    }, {
	        "name": "劉櫂豪",
	        "party": "民主進步黨",
	        "party_eng": "DPP",
	        "caucus": "DPP",
	        "constituency": ["TTT", 0],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6286",
	                "address": "10051臺北市中正區濟南路1段3-1號2108室",
	                "fax": "02-2358-6290"
	            },
	            "臺東服務處": {
	                "phone": "089-310-979",
	                "address": "臺東市傳廣路18號",
	                "fax": "089-310-879"
	            },
	            "東海岸服務處": {
	                "phone": "089-851-018",
	                "address": "臺東縣成功鎮民權路30號",
	                "fax": "089-851-018"
	            },
	            "南迴服務處": {
	                "phone": "089-791-305",
	                "address": "台東縣大武鄉尚武村4鄰32號",
	                "fax": "089-790-398"
	            }
	        },
	        "constituency_detail": "全縣",
	        "position": "未表態"
	    }, {
	        "name": "徐志榮",
	        "party": "民主進步黨",
	        "party_eng": "DPP",
	        "caucus": "DPP",
	        "constituency": ["PIF", 3],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6655",
	                "address": "10051臺北市中正區濟南路1段3-1號0702室",
	                "fax": "02-2358-6651"
	            },
	            "東港服務處": {
	                "phone": "08-832-8000",
	                "address": "屏東縣東港鎮光復路一段57號",
	                "fax": "08-831-1110"
	            },
	            "車城服務處": {
	                "phone": "08-882-2888",
	                "address": "屏東縣車城鄉福安村(路)6-4號",
	                "fax": "08-882-3456"
	            },
	            "屏東服務處": {
	                "phone": "08-733-6000",
	                "address": "屏東市忠孝路161號",
	                "fax": "08-766-7576"
	            },
	            "恆春服務處": {
	                "phone": "08-888-0888",
	                "address": "屏東縣恆春鎮省北路85號",
	                "fax": "08-889-9322"
	            }
	        },
	        "constituency_detail": "新園鄉 崁頂鄉 南州鄉 新埤鄉 來義鄉 東港鎮 林邊鄉 佳冬鄉 枋寮鄉 春日鄉 枋山鄉 獅子鄉 牡丹鄉 車城鄉 滿州鄉 恆春鎮 琉球鄉",
	        "position": "未表態"
	    }, {
	        "name": "潘維剛",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["proportional"],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6031",
	                "address": "10051臺北市中正區濟南路1段3-1號0201室",
	                "fax": "02-2358-6035"
	            }
	        },
	        "constituency_detail": "",
	        "position": "未表態"
	    }, {
	        "name": "盧秀燕",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["TXG", 5],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-8121",
	                "address": "10051臺北市中正區青島東路1-3號7101室",
	                "fax": "02-2358-8125"
	            },
	            "台中服務處": {
	                "phone": "04-2319-9770",
	                "address": "臺中市北區博館路92號4樓",
	                "fax": "04-2319-9760"
	            }
	        },
	        "constituency_detail": "北屯區 北區",
	        "position": "未表態"
	    }, {
	        "name": "盧嘉辰",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["TPQ", 10],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6911",
	                "address": "10051臺北市中正區濟南路1段3-1號0202室",
	                "fax": "02-2358-6915"
	            },
	            "土城服務處": {
	                "phone": "02-2268-9268",
	                "address": "新北市土城區中央路3段85-1號",
	                "fax": "02-2268-9269"
	            },
	            "三峽服務處": {
	                "phone": "02-2672-8399",
	                "address": "新北市三峽區中正路一段108巷7弄17號",
	                "fax": "02-2672-8599"
	            }
	        },
	        "constituency_detail": "土城區 三峽區",
	        "position": "未表態"
	    }, {
	        "name": "蕭美琴",
	        "party": "民主進步黨",
	        "party_eng": "DPP",
	        "caucus": "DPP",
	        "constituency": ["proportional"],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6176",
	                "address": "10051臺北市中正區青島東路10號3503室",
	                "fax": "02-2358-6180"
	            }
	        },
	        "constituency_detail": "",
	        "entries": [{
	            "name": "蕭美琴",
	            "id": "2",
	            "date": "2012-11-09",
	            "year": "2012",
	            "month": "11",
	            "day": "09",
	            "type": "院會質詢",
	            "quote": "美國剛進行總統大選，期間也針對很多公共議題進行公民投票，其中有三個州同意通過同性婚姻，請問院長，對於同性伴侶、同性婚姻、不同性傾向的權益問題，你有何立場？",
	            "opinion": "贊成",
	            "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/101/68/LCIDC01_1016801.pdf",
	            "trustVote": "3"
	        }, {
	            "name": "蕭美琴",
	            "id": "5",
	            "date": "2013-01-07",
	            "year": "2013",
	            "month": "01",
	            "day": "07",
	            "type": "委員會質詢",
	            "quote": "其實，在亞洲其他國家中，尤其是一些講華語的國家，台灣算是相對自由與開放的國家，當然，越是自由與開放的國家，其文化與創意也更能蓬勃發展，樣態上也更趨多元，這也是台灣的優勢，像本席就主張同性婚姻可以合法化，因為我覺得台灣社會若能包容不同性傾向的人，就表示我們是一個越前衛、越進步的國家，在這樣的國家裡面文化創意的空間自然就更大，這也表示我們的社會可以包容更多不同意見，換言之，這裡是讓更多元意見存在的地方！",
	            "opinion": "贊成",
	            "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/102/06/LCIDC01_1020601.pdf",
	            "trustVote": "0"
	        }, {
	            "name": "蕭美琴",
	            "id": "16",
	            "date": "2014-10-16",
	            "year": "2014",
	            "month": "10",
	            "day": "16",
	            "type": "委員會質詢",
	            "quote": "有一些國家承認同性婚姻的合法性，如果今天在台灣的一些外交官有同性的配偶或伴侶，那外交部是否承認他們的婚姻關係？總是會涉及簽證以及居留權的問題，我們的態度為何？",
	            "opinion": "贊成",
	            "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/103/67/LCIDC01_1036701.pdf",
	            "trustVote": "54"
	        }],
	        "forTotal": 3,
	        "againstTotal": 0,
	        "unclearTotal": 0,
	        "position": "贊成",
	        "positionCount": 3
	    }, {
	        "name": "薛凌",
	        "party": "民主進步黨",
	        "party_eng": "DPP",
	        "caucus": "DPP",
	        "constituency": ["proportional"],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6056",
	                "address": "10051臺北市中正區濟南路1段3-1號0207室",
	                "fax": "02-2358-6060"
	            },
	            "重慶服務處": {
	                "phone": "02-2811-4556",
	                "address": "臺北市重慶北路4段186號",
	                "fax": "02-2813-3582"
	            },
	            "後港服務處": {
	                "phone": "02-2883-9006",
	                "address": "臺北市士林區華齡街88之2號",
	                "fax": "02-2883-0263"
	            },
	            "北投服務處": {
	                "phone": "02-2891-5265",
	                "address": "臺北市北投區大同街221號",
	                "fax": "02-2891-3096"
	            }
	        },
	        "constituency_detail": "",
	        "position": "未表態"
	    }, {
	        "name": "賴士葆",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["TPE", 8],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-8166",
	                "address": "10051臺北市中正區青島東路1-3號7201室",
	                "fax": "02-2358-8170"
	            },
	            "文山服務處": {
	                "phone": "02-2935-5358",
	                "address": "臺北市文山區景興路254號",
	                "fax": "02-2930-0945"
	            }
	        },
	        "constituency_detail": "文山區 中正區10里",
	        "position": "未表態"
	    }, {
	        "name": "謝國樑",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["KEE", 0],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-8066",
	                "address": "10051臺北市中正區鎮江街2號5101室",
	                "fax": "02-2358-8070"
	            },
	            "基隆服務處": {
	                "phone": "02-2427-8899",
	                "address": "基隆市中正區愛三路37號6樓",
	                "fax": "02-2421-3639"
	            }
	        },
	        "constituency_detail": "全市",
	        "position": "未表態"
	    }, {
	        "name": "陳素月",
	        "party": "民主進步黨",
	        "party_eng": "DPP",
	        "caucus": "DPP",
	        "constituency": ["CHA", 4],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6691",
	                "address": "10051臺北市中正區濟南路1段3-1號2109室",
	                "fax": "02-2358-6695"
	            },
	            "員林服務處": {
	                "phone": "04-832-8552",
	                "address": "彰化縣員林鎮惠來里惠明街219號",
	                "fax": "04-835-3414"
	            },
	            "社頭服務處": {
	                "phone": "04-871-1433",
	                "address": "彰化縣社頭鄉社頭村員集路二段370號",
	                "fax": "04-873-6266"
	            },
	            "田中服務處": {
	                "phone": "04-875-2170",
	                "address": "彰化縣田中鎮西路里斗中路一段68巷4號",
	                "fax": "04-876-1432"
	            }
	        },
	        "constituency_detail": "大村鄉 員林鎮 永靖鄉 社頭鄉 田尾鄉 田中鎮 二水鄉",
	        "position": "未表態"
	    }, {
	        "name": "簡東明",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["aborigine", "highland"],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6681",
	                "address": "10051臺北市中正區濟南路1段3-1號1005室",
	                "fax": "02-2358-6685"
	            },
	            "屏東服務處": {
	                "phone": "08-732-2728",
	                "address": "90071屏東市廣東路1324號",
	                "fax": "08-732-6442"
	            }
	        },
	        "constituency_detail": "山地原住民",
	        "position": "未表態"
	    }, {
	        "name": "顏寬恒",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["TXG", 2],
	        "contact": {
	            " ": {},
	            "": {}
	        },
	        "constituency_detail": "沙鹿鎮 龍井鄉 大肚鄉 烏日鄉 霧峰 大里市2里",
	        "position": "未表態"
	    }, {
	        "name": "羅明才",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["TPQ", 11],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6546",
	                "address": "10051臺北市中正區濟南路1段3-1號1106室",
	                "fax": "02-2358-6780"
	            },
	            "新店服務處": {
	                "phone": "02-2915-7788",
	                "address": "新北市新店區中正路54巷8號1樓",
	                "fax": "02-2911-1448"
	            }
	        },
	        "constituency_detail": "新店區 深坑區 石碇區 坪林區 烏來區",
	        "position": "未表態"
	    }, {
	        "name": "羅淑蕾",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["TPE", 3],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6156",
	                "address": "10051臺北市中正區濟南路1段3-1號0406室",
	                "fax": "02-2358-6160"
	            },
	            "松山服務處": {
	                "phone": "02-2719-5580",
	                "address": "臺北市松山區光復北路240號",
	                "fax": "02-2718-6878"
	            },
	            "中山服務處": {
	                "phone": "02-2563-8251",
	                "address": "臺北市民權東路二段26號6樓之7",
	                "fax": "02-2561-1035"
	            }
	        },
	        "constituency_detail": "中山區 松山區20里",
	        "entries": [{
	            "name": "羅淑蕾",
	            "id": "7",
	            "date": "2013-11-01",
	            "year": "2013",
	            "month": "11",
	            "day": "01",
	            "type": "院會書面質詢",
	            "quote": "本院羅委員淑蕾，鑑於近期少數團體基於「同性婚姻」、「伴侶制度」、「多人家屬及收養制度」之三大訴求，執意推動「多元成家法案」，將會為台灣帶來家庭的不穩定性及耗費大量社會成本，兒童的權益得不到保障，衍生更多社會問題，感到憂心。爰此，衡平台灣整體社會發展及少數特殊家庭需求，相關主管機關應在維護法制穩定性的前提下，建立起個案考量及處理之機制，特向行政院提出質詢。",
	            "opinion": "反對",
	            "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/102/61/LCIDC01_1026101.pdf",
	            "trustVote": "100"
	        }],
	        "forTotal": 0,
	        "againstTotal": 1,
	        "unclearTotal": 0,
	        "position": "反對",
	        "positionCount": 1
	    }, {
	        "name": "蘇清泉",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["proportional"],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6571",
	                "address": "10051臺北市中正區青島東路10號3505室",
	                "fax": "02-2358-6575"
	            },
	            "東港服務處": {
	                "phone": "08-833-4517",
	                "address": "屏東縣東港鎮東隆里東隆街6-2號",
	                "fax": "08-832-9977"
	            }
	        },
	        "constituency_detail": "",
	        "position": "未表態"
	    }, {
	        "name": "蘇震清",
	        "party": "民主進步黨",
	        "party_eng": "DPP",
	        "caucus": "DPP",
	        "constituency": ["PIF", 1],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6636",
	                "address": "10051臺北市中正區濟南路1段3-1號0708室",
	                "fax": "02-2358-6640"
	            },
	            "屏東服務處": {
	                "phone": "08-766-6636",
	                "address": "屏東縣屏東市自由路586號",
	                "fax": "08-766-6262"
	            }
	        },
	        "constituency_detail": "里港鄉 高樹鄉 三地門鄉",
	        "position": "未表態"
	    }] };

/***/ },
/* 97 */
/*!******************************************************!*\
  !*** ./app/components/OpinionGroup/OpinionGroup.jsx ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { desc = parent = getter = undefined; _again = false; var object = _x,
	    property = _x2,
	    receiver = _x3; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(/*! react */ 1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(/*! react-router */ 28);

	var _OverviewWallAvatarOverviewWallAvatarJsx = __webpack_require__(/*! ../OverviewWallAvatar/OverviewWallAvatar.jsx */ 268);

	var _OverviewWallAvatarOverviewWallAvatarJsx2 = _interopRequireDefault(_OverviewWallAvatarOverviewWallAvatarJsx);

	var _IconIconJsx = __webpack_require__(/*! ../Icon/Icon.jsx */ 74);

	var _IconIconJsx2 = _interopRequireDefault(_IconIconJsx);

	__webpack_require__(/*! ./OpinionGroup.css */ 269);

	var OpinionGroupr = (function (_React$Component) {
	    function OpinionGroupr(props) {
	        _classCallCheck(this, OpinionGroupr);

	        _get(Object.getPrototypeOf(OpinionGroupr.prototype), "constructor", this).call(this, props);
	        this.state = {
	            showFull: false
	        };
	    }

	    _inherits(OpinionGroupr, _React$Component);

	    _createClass(OpinionGroupr, [{
	        key: "_onToggleShowFull",
	        value: function _onToggleShowFull() {
	            this.setState({
	                showFull: !this.state.showFull
	            });
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var data = this.props.data;
	            var showFull = this.state.showFull;

	            var boundToggleShowFull = this._onToggleShowFull.bind(this, null);

	            var partyCount = {};
	            var legislatorItems = data.legislators.map(function (item, key) {

	                //計算各政黨人數
	                if (!partyCount[item.party_eng]) partyCount[item.party_eng] = { "name_cht": item.party, "name_eng": item.party_eng, "count": 0 };

	                partyCount[item.party_eng].count++;

	                return _react2["default"].createElement(_OverviewWallAvatarOverviewWallAvatarJsx2["default"], { data: item, key: key });
	            });

	            //依照各政黨在此意見的人數多少排序
	            var partyCountArray = [];
	            Object.keys(partyCount).map(function (value, index) {
	                partyCountArray.push(partyCount[value]);
	            });
	            partyCountArray.sort(function (a, b) {
	                return b.count - a.count;
	            });

	            var partyCountItems = partyCountArray.map(function (item, key) {
	                var partyBarClasses = "OpinionGroup-partyBar" + " is-" + item.name_eng;
	                var percentage = Math.round(item.count / 11 * 100);
	                var style = { "width": percentage + "%" };
	                return _react2["default"].createElement(
	                    "div",
	                    { className: "OpinionGroup-party",
	                        key: key },
	                    _react2["default"].createElement("div", { className: partyBarClasses,
	                        style: style }),
	                    item.name_cht,
	                    "：",
	                    item.count,
	                    " 人"
	                );
	            });

	            var toggleIconItem = showFull ? _react2["default"].createElement(_IconIconJsx2["default"], { icon: "angle-double-up" }) : _react2["default"].createElement(_IconIconJsx2["default"], { icon: "angle-double-down" });
	            var memberItem = showFull ? _react2["default"].createElement(
	                "div",
	                { className: "OpinionGroup-members" },
	                legislatorItems
	            ) : "";
	            return _react2["default"].createElement(
	                "div",
	                { className: "OpinionGroup",
	                    onClick: boundToggleShowFull },
	                _react2["default"].createElement(
	                    "div",
	                    { className: "OpinionGroup-box" },
	                    _react2["default"].createElement(
	                        "div",
	                        { className: "OpinionGroup-title" },
	                        _react2["default"].createElement(_IconIconJsx2["default"], { icon: data.icon }),
	                        data.opinion,
	                        "：",
	                        data.count,
	                        "人",
	                        _react2["default"].createElement(
	                            "div",
	                            { className: "OpinionGroup-titleToggle" },
	                            toggleIconItem
	                        )
	                    ),
	                    _react2["default"].createElement(
	                        "div",
	                        { className: "OpinionGroup-content" },
	                        _react2["default"].createElement(
	                            "div",
	                            { className: "OpinionGroup-parties" },
	                            partyCountItems
	                        ),
	                        _react2["default"].createElement(
	                            "div",
	                            null,
	                            memberItem
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return OpinionGroupr;
	})(_react2["default"].Component);

	exports["default"] = OpinionGroupr;
	module.exports = exports["default"];

/***/ },
/* 98 */
/*!********************************************************!*\
  !*** ./app/containers/IssueVotePage/IssueVotePage.css ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = {};

/***/ },
/* 99 */
/*!**************************************************!*\
  !*** ./app/containers/IssueVotePage/data/for.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = {
	    "opinion": "支持",
	    "icon": "circle-o",
	    "count": 11,
	    "percentage": 42,
	    "legislators": [{
	        "name": "尤美女",
	        "party": "民主進步黨",
	        "party_eng": "DPP",
	        "caucus": "DPP",
	        "constituency": ["proportional"],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-8112",
	                "address": "10051臺北市中正區濟南路1段3-1號0402室",
	                "fax": "02-2358-8113"
	            }
	        },
	        "constituency_detail": "",
	        "entries": [{
	            "name": "尤美女",
	            "id": "4",
	            "date": "2012-12-26",
	            "year": "2012",
	            "month": "12",
	            "day": "26",
	            "type": "公聽會",
	            "quote": "舉行「同性婚姻合法化及伴侶權益法制化」公聽會",
	            "opinion": "贊成",
	            "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/102/03/LCIDC01_1020304.pdf",
	            "trustVote": "1"
	        }, {
	            "name": "尤美女",
	            "id": "17",
	            "date": "2014-10-16",
	            "year": "2014",
	            "month": "10",
	            "day": "16",
	            "type": "公聽會",
	            "quote": "舉行「用平等的心把每一個人擁入憲法的懷抱─同性婚姻及同志收養議題」公聽會",
	            "opinion": "贊成",
	            "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/103/64/LCIDC01_1036401.pdf",
	            "trustVote": "23"
	        }, {
	            "name": "尤美女",
	            "id": "20",
	            "date": "2014-12-18",
	            "year": "2014",
	            "month": "12",
	            "day": "18",
	            "type": "委員會質詢",
	            "quote": "其次，我們看到很多國家都承認同性婚姻，他們甚至於可以去登記，如果他們在國外已經是合法登記的同性婚姻，今天他們到國內來，他們可不可以拿國外合法登記的結婚證書到國內來登記結婚？",
	            "opinion": "贊成",
	            "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/104/01/LCIDC01_1040101.pdf",
	            "trustVote": "862"
	        }, {
	            "name": "尤美女",
	            "id": "24",
	            "date": "2014-12-22",
	            "year": "2014",
	            "month": "12",
	            "day": "22",
	            "type": "委員會質詢",
	            "quote": "你覺得人權是要用所謂的共識才能決定？剛剛段委員講得很好，法律是要保障少數人的權益，但今天對於這些少數人的權益，卻要經過多數人的同意，但那些多數人根本不承認這些少數人的存在啊！所以多數人不同意，因此這些少數人的權益就不受到保障，是這樣子嗎？",
	            "opinion": "贊成",
	            "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/104/12/LCIDC01_1041201.pdf",
	            "trustVote": "23"
	        }, {
	            "name": "尤美女",
	            "id": "29",
	            "date": "2015-01-05",
	            "year": "2015",
	            "month": "01",
	            "day": "05",
	            "type": "委員會質詢",
	            "quote": "今日報紙刊載一則「原民部落喜辦同志家庭收養」的新聞，前陣子本委員會方才審查「婚姻平權法草案」，當時法務部認為「婚姻平權法草案」若通過，社會對立將會太高，也會有許多的負面輿論，因而不讓同志婚姻平權及收養孩童；但是，我們看到原住民部落有兩位女同志，他們一起生活近30年，並收養其中一位女同志哥哥的小孩，三人共同生活了12年，他們一直把她當親生女兒般照顧，所以部落特別認可這對同志家庭收養這名小孩，他們明知依照漢人的法律，組成同志家庭不具有法律效力，但是他們認為即使沒有被法律認可，仍可以實踐非常重要的家庭功能，所以他們的收養儀式獲得長老們的首肯，由頭目遵循傳統將祖傳禮刀、大鐵鍋、琉璃珠、現金等貴重禮品贈與被收養者生父的家族，完成收養儀式。既然部落做得到，我們漢族是不是也能夠拋下傲慢的心態，重新認識另外一個與我們不一樣的同志家族？請法務部與司法院能夠多加考量。好不好？",
	            "opinion": "贊成",
	            "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/104/08/LCIDC01_1040801.pdf",
	            "trustVote": "65"
	        }, {
	            "name": "尤美女",
	            "id": "31",
	            "date": "2015-03-12",
	            "year": "2015",
	            "month": "03",
	            "day": "12",
	            "type": "委員會質詢",
	            "quote": "法務部在2001年呈報行政院的人權保障基本法草案第二十四條，即已明白規定國家應尊重同性戀者之權益，同性男女得依法組成家庭及收養子女。當時即已定調要保障同志的婚姻，馬政府上台之後，卻整個推翻，現在又要從頭來過嗎？事實上你們早已委託戴教授去對同志的權益作研究，厚厚的一本報告在法務部裡面都躺多久了，你們還要重啟爐灶，從頭再來？",
	            "opinion": "贊成",
	            "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/104/16/LCIDC01_1041601.pdf",
	            "trustVote": "2"
	        }],
	        "forTotal": 6,
	        "againstTotal": 0,
	        "unclearTotal": 0,
	        "position": "贊成",
	        "positionCount": 6
	    }, {
	        "name": "陳其邁",
	        "party": "民主進步黨",
	        "party_eng": "DPP",
	        "caucus": "DPP",
	        "constituency": ["proportional"],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-8566",
	                "address": "10051臺北市中正區濟南路1段3-1號1105室",
	                "fax": "02-2358-8570"
	            },
	            "高雄服務處": {
	                "phone": "07-382-5189",
	                "address": "高雄市三民區九如一路399號",
	                "fax": "07-382-5177"
	            }
	        },
	        "constituency_detail": "",
	        "entries": [{
	            "name": "陳其邁",
	            "id": "9",
	            "date": "2013-11-20",
	            "year": "2013",
	            "month": "11",
	            "day": "20",
	            "type": "預算凍結案",
	            "quote": "內政部103年度單位預算第3目「戶政業務」分支計畫「01督導改進戶籍行政」編列業務費219萬2千元。惟今年6月內政部發函予一對已登記結婚之吳姓跨性別伴侶，要求其自行辦理撤銷婚姻，又於今年8月7日內政部專案會議，認定吳姓伴侶婚姻有效，內政部態度反覆，標準不一，侵害民眾權益，造成不必要之精神傷害，顯見內政部缺乏性別友善意識。爰此，提案凍結前開預算1/2，計109萬6千元，俟內政部提出「如何推行我國同性婚姻合法化」之專案報告，向本院內政委員會報告並經同意後，始得動支。",
	            "opinion": "贊成",
	            "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/102/75/LCIDC01_1027501.pdf",
	            "trustVote": "1"
	        }, {
	            "name": "陳其邁",
	            "id": "11",
	            "date": "2013-11-27",
	            "year": "2013",
	            "month": "11",
	            "day": "27",
	            "type": "預算凍結案",
	            "quote": "內政部103年度單位預算第3目「戶政業務」分支計畫「01督導改進戶籍行政」編列業務費219萬2,000元。惟今年6月內政部發函予一對已登記結婚之吳姓跨性別伴侶，要求其自行辦理撤銷婚姻，又於今年8月7日內政部專案會議，認定吳姓伴侶婚姻有效，內政部態度反覆，標準不一，侵害民眾權益，造成不必要之精神傷害，顯見內政部缺乏性別友善意識。爰此，提案凍結預算，俟內政部提出「如何推行我國同性婚姻合法化」之專案報告，向立法院內政委員會報告並經同意後，始得動支。",
	            "opinion": "贊成",
	            "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/102/79/LCIDC01_1027901.pdf",
	            "trustVote": "12"
	        }, {
	            "name": "陳其邁",
	            "id": "18",
	            "date": "2014-11-12",
	            "year": "2014",
	            "month": "11",
	            "day": "12",
	            "type": "預算主決議",
	            "quote": "查行政院100年函頒之「性別平等政策綱領」乃由行政院性別平等處主政，規劃我國性別平等施政藍圖。然查「性別平等政策綱領」內容偏重婦女政策，多元性別、同志權益等政策尚不完備，實有不盡完善之處。且查103年6月「消除對婦女一切形式歧視公約（CEDAW）中華民國（臺灣）第2次國家報告國外專家審查暨發表會議」中，國外專家建議政府應將多元性別內涵納入性別平等教育教材中，並建議政府就國內社會關注的多元家庭法制保障及福利取得議題評估與制定相關政策。又查近年台灣同志及多元性別權益諸多倡議活動皆將「多元性別」、「婚姻平權、平等成家」、「擁抱性/別認同差異」主題納入，國際知名之紐約時報亦於103年10月報導台灣社會追求同志平權運動，形容台灣已具有亞洲同性戀者的「燈塔」地位。爰此，為求政府之性別平等政策不致落後社會脈動及趨勢之外，行政院性別平等處身為「性別平等政策綱領」主政機關，應就同志權益、多元性別、婚姻平權等議題進行研擬，將上述層面之議題修正納入「性別平等政策綱領」政策內容。",
	            "opinion": "贊成",
	            "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/103/80/LCIDC01_1038001.pdf",
	            "trustVote": "54"
	        }, {
	            "name": "陳其邁",
	            "id": "30",
	            "date": "2015-01-12",
	            "year": "2015",
	            "month": "01",
	            "day": "12",
	            "type": "委員會質詢",
	            "quote": "所以我說尊重部落會議的決定啊！這是原住民族自治，所以包括對同性婚姻的看法，我們也應該尊重部落，你剛剛的口頭宣示很好、很進步啊！我給你鼓勵啊！所以我的意思是，我們進一步在原住民族基本法裡頭，就把同性婚姻這個部分列入，明定我們尊重部落所做的決定，尊重原住民自治，人家魯凱族贊成，或是有其他族群贊成，我們應該要尊重他們啊！我也同意啊！",
	            "opinion": "贊成",
	            "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/104/12/LCIDC01_1041201.pdf",
	            "trustVote": "75"
	        }],
	        "forTotal": 4,
	        "againstTotal": 0,
	        "unclearTotal": 0,
	        "position": "贊成",
	        "positionCount": 4
	    }, {
	        "name": "蕭美琴",
	        "party": "民主進步黨",
	        "party_eng": "DPP",
	        "caucus": "DPP",
	        "constituency": ["proportional"],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6176",
	                "address": "10051臺北市中正區青島東路10號3503室",
	                "fax": "02-2358-6180"
	            }
	        },
	        "constituency_detail": "",
	        "entries": [{
	            "name": "蕭美琴",
	            "id": "2",
	            "date": "2012-11-09",
	            "year": "2012",
	            "month": "11",
	            "day": "09",
	            "type": "院會質詢",
	            "quote": "美國剛進行總統大選，期間也針對很多公共議題進行公民投票，其中有三個州同意通過同性婚姻，請問院長，對於同性伴侶、同性婚姻、不同性傾向的權益問題，你有何立場？",
	            "opinion": "贊成",
	            "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/101/68/LCIDC01_1016801.pdf",
	            "trustVote": "3"
	        }, {
	            "name": "蕭美琴",
	            "id": "5",
	            "date": "2013-01-07",
	            "year": "2013",
	            "month": "01",
	            "day": "07",
	            "type": "委員會質詢",
	            "quote": "其實，在亞洲其他國家中，尤其是一些講華語的國家，台灣算是相對自由與開放的國家，當然，越是自由與開放的國家，其文化與創意也更能蓬勃發展，樣態上也更趨多元，這也是台灣的優勢，像本席就主張同性婚姻可以合法化，因為我覺得台灣社會若能包容不同性傾向的人，就表示我們是一個越前衛、越進步的國家，在這樣的國家裡面文化創意的空間自然就更大，這也表示我們的社會可以包容更多不同意見，換言之，這裡是讓更多元意見存在的地方！",
	            "opinion": "贊成",
	            "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/102/06/LCIDC01_1020601.pdf",
	            "trustVote": "0"
	        }, {
	            "name": "蕭美琴",
	            "id": "16",
	            "date": "2014-10-16",
	            "year": "2014",
	            "month": "10",
	            "day": "16",
	            "type": "委員會質詢",
	            "quote": "有一些國家承認同性婚姻的合法性，如果今天在台灣的一些外交官有同性的配偶或伴侶，那外交部是否承認他們的婚姻關係？總是會涉及簽證以及居留權的問題，我們的態度為何？",
	            "opinion": "贊成",
	            "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/103/67/LCIDC01_1036701.pdf",
	            "trustVote": "54"
	        }],
	        "forTotal": 3,
	        "againstTotal": 0,
	        "unclearTotal": 0,
	        "position": "贊成",
	        "positionCount": 3
	    }, {
	        "name": "段宜康",
	        "party": "民主進步黨",
	        "party_eng": "DPP",
	        "caucus": "DPP",
	        "constituency": ["proportional"],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6196",
	                "address": "10051臺北市中正區濟南路1段3-1號0308室",
	                "fax": "02-2358-6200"
	            }
	        },
	        "constituency_detail": "",
	        "entries": [{
	            "name": "段宜康",
	            "id": "13",
	            "date": "2013-12-25",
	            "year": "2013",
	            "month": "12",
	            "day": "25",
	            "type": "委員會質詢",
	            "quote": "這樣問你好了，你覺得該不該往這個方向去努力？這樣比較有階段性，要往一個方向去努力跟現在馬上要落實是不同的，所以我這樣問你好了，你覺得我們的政府或性別平等業務該不該將此列為重要推動項目？",
	            "opinion": "贊成",
	            "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/103/07/LCIDC01_1030702.pdf",
	            "trustVote": "123"
	        }, {
	            "name": "段宜康",
	            "id": "23",
	            "date": "2014-12-22",
	            "year": "2014",
	            "month": "12",
	            "day": "22",
	            "type": "委員會質詢",
	            "quote": "因為擔心國家的人口政策而不贊成少數人同性婚姻，照這個邏輯，在一男一女結婚之前就要統統檢查有沒有生育能力，沒有生育能力的就沒有資格結婚，否則將影響國家人口政策，現在出生率已經這麼低了，怎麼可以容許沒有生育能力的人結婚？即便是一男一女結婚，在結婚之前都要證明可以生育，你的邏輯是這樣嗎？",
	            "opinion": "贊成",
	            "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/104/12/LCIDC01_1041201.pdf",
	            "trustVote": "45"
	        }],
	        "forTotal": 2,
	        "againstTotal": 0,
	        "unclearTotal": 0,
	        "position": "贊成",
	        "positionCount": 2
	    }, {
	        "name": "邱志偉",
	        "party": "民主進步黨",
	        "party_eng": "DPP",
	        "caucus": "DPP",
	        "constituency": ["KHH", 2],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6561",
	                "address": "10051臺北市中正區青島東路1-3號7303室",
	                "fax": "02-2358-6565"
	            },
	            "岡山服務處": {
	                "phone": "07-623-0655",
	                "address": "高雄市岡山區華園路99號",
	                "fax": "07-623-0671"
	            },
	            "茄萣服務處": {
	                "phone": "07-690-1234",
	                "address": "高雄市茄萣區信義路三段138號",
	                "fax": "07-690-2598"
	            },
	            "橋頭區邱志偉立委與陳政聞議員聯合服務處": {
	                "phone": "07-612-3058",
	                "address": "高雄市橋頭區成功路237號",
	                "fax": "07-611-4926"
	            },
	            "路竹區邱志偉立委與陳明澤議員聯合服務處": {
	                "phone": "07-607-1999",
	                "address": "高雄市路竹區國昌路73號",
	                "fax": "07-607-6869"
	            },
	            "路竹區邱志偉立委與張文瑞議員聯合服務處": {
	                "phone": "07-696-0525",
	                "address": "高雄市路竹區國昌路82號",
	                "fax": "07-691-8588"
	            }
	        },
	        "constituency_detail": "茄萣區 湖內區 路竹區 永安區 岡山區 彌陀區 梓官區 橋頭區",
	        "entries": [{
	            "name": "邱志偉",
	            "id": "15",
	            "date": "2014-03-31",
	            "year": "2014",
	            "month": "03",
	            "day": "31",
	            "type": "委員會質詢",
	            "quote": "如果他（軍事院校的學生）今天參與其他的議題，例如我們支持同性婚姻或是多元成家的方案，如果他去參加，你們會禁止嗎？",
	            "opinion": "贊成",
	            "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/103/21/LCIDC01_1032101.pdf",
	            "trustVote": "74"
	        }],
	        "forTotal": 1,
	        "againstTotal": 0,
	        "unclearTotal": 0,
	        "position": "贊成",
	        "positionCount": 1
	    }, {
	        "name": "林淑芬",
	        "party": "民主進步黨",
	        "party_eng": "DPP",
	        "caucus": "DPP",
	        "constituency": ["TPQ", 2],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-8186",
	                "address": "10051臺北市中正區青島東路1-3號7301室",
	                "fax": "02-2358-8190"
	            },
	            "蘆洲服務處": {
	                "phone": "02-8285-6412",
	                "address": "新北市蘆洲區長興路25號",
	                "fax": "02-2281-7980"
	            },
	            "五股服務處": {
	                "phone": "02-2291-2995",
	                "address": "臺北縣五股鄉民義路一段37號",
	                "fax": "02-2291-2355"
	            }
	        },
	        "constituency_detail": "五股區 蘆洲區 三重區16里",
	        "entries": [{
	            "name": "林淑芬",
	            "id": "27",
	            "date": "2014-12-22",
	            "year": "2014",
	            "month": "12",
	            "day": "22",
	            "type": "委員會質詢",
	            "quote": "你這種說法根本是助長歧視，完全是一種假裝式的漸進及演進，基本上，你們認為同志的人權應該要保障，但現在不能給，然後結果就是剝奪同志的基本人權，我告訴你，你這是助長歧視，假裝演進，假裝漸進。你們認為基本上是應該要，但是現在不能，結果就是剝奪他們的基本人權嘛！",
	            "opinion": "贊成",
	            "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/104/12/LCIDC01_1041201.pdf",
	            "trustVote": "5"
	        }],
	        "forTotal": 1,
	        "againstTotal": 0,
	        "unclearTotal": 0,
	        "position": "贊成",
	        "positionCount": 1
	    }, {
	        "name": "吳宜臻",
	        "party": "民主進步黨",
	        "party_eng": "DPP",
	        "caucus": "DPP",
	        "constituency": ["proportional"],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-8580",
	                "address": "10051臺北市中正區鎮江街2號5105室",
	                "fax": "02-2358-8135"
	            }
	        },
	        "constituency_detail": "",
	        "entries": [{
	            "name": "吳宜臻",
	            "id": "19",
	            "date": "2014-12-11",
	            "year": "2014",
	            "month": "12",
	            "day": "11",
	            "type": "委員會質詢",
	            "quote": "抱歉！因為本席在10月及11月請假，所以未出席委員會會議，現在請教次長，對包含同性婚姻的婚姻平權法案，法務部到底提出了嗎？",
	            "opinion": "贊成",
	            "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/104/01/LCIDC01_1040101.pdf",
	            "trustVote": "23"
	        }],
	        "forTotal": 1,
	        "againstTotal": 0,
	        "unclearTotal": 0,
	        "position": "贊成",
	        "positionCount": 1
	    }, {
	        "name": "鄭麗君",
	        "party": "民主進步黨",
	        "party_eng": "DPP",
	        "caucus": "DPP",
	        "constituency": ["proportional"],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-8329",
	                "address": "10051臺北市中正區鎮江街2號5107室",
	                "fax": "02-2358-8330"
	            }
	        },
	        "constituency_detail": "",
	        "entries": [{
	            "name": "鄭麗君",
	            "id": "26",
	            "date": "2014-12-22",
	            "year": "2014",
	            "month": "12",
	            "day": "22",
	            "type": "委員會質詢",
	            "quote": "今天如果你們繼續要主張這條法律必須基於所謂的傳統、人倫與國情，就是一種社會的歧視，而此背後是這個法律制度性歧視的結構，所以，為什麼我們主張要修民法，因為如果前面所說的制度性歧視結構不打破，社會歧視依然可以這麼大聲地繼續污名，而且竟然是由立法委員在這裡說出來，讓我們覺得實在不可思議！",
	            "opinion": "贊成",
	            "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/104/12/LCIDC01_1041201.pdf",
	            "trustVote": "542"
	        }],
	        "forTotal": 1,
	        "againstTotal": 0,
	        "unclearTotal": 0,
	        "position": "贊成",
	        "positionCount": 1
	    }, {
	        "name": "姚文智",
	        "party": "民主進步黨",
	        "party_eng": "DPP",
	        "caucus": "DPP",
	        "constituency": ["TPE", 2],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6758",
	                "address": "10051臺北市中正區濟南路1段3-1號1102室",
	                "fax": "02-2358-6040"
	            }
	        },
	        "constituency_detail": "大同區 士林區38里",
	        "entries": [{
	            "name": "姚文智",
	            "id": "14",
	            "date": "2013-12-25",
	            "year": "2013",
	            "month": "12",
	            "day": "25",
	            "type": "委員會質詢",
	            "quote": "大家一直在反同性戀，在冬季奧運時，美國就請一個同性戀當團長到俄羅斯去，這不要花錢呀！這是一個用不同的事件去累積、激盪而推動性別平等的作法，你們也可以做呀！國內也有同志的遊行或是其他活動，你們也可以有些創意，不用花錢呀！但是現在不太看得到你們的角色。",
	            "opinion": "贊成",
	            "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/103/07/LCIDC01_1030702.pdf",
	            "trustVote": "3"
	        }],
	        "forTotal": 1,
	        "againstTotal": 0,
	        "unclearTotal": 0,
	        "position": "贊成",
	        "positionCount": 1
	    }, {
	        "name": "吳育仁",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["proportional"],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6656",
	                "address": "10051臺北市中正區濟南路1段3-1號0305室",
	                "fax": "02-2358-6660"
	            },
	            "雲林服務處": {
	                "phone": "05-537-5331",
	                "address": "640雲林縣斗六市明德北路二段401號",
	                "fax": "05-537-5351"
	            }
	        },
	        "constituency_detail": "",
	        "entries": [{
	            "name": "吳育仁",
	            "id": "3",
	            "date": "2012-12-03",
	            "year": "2012",
	            "month": "12",
	            "day": "03",
	            "type": "委員會質詢",
	            "quote": "如果親屬法或民法上同意同性婚姻或同志伴侶權時，你是否支持他們享有勞動基本權？也就是有關家庭的部分，譬如留職育嬰停薪與陪產假？",
	            "opinion": "贊成",
	            "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/101/83/LCIDC01_1018303.pdf",
	            "trustVote": "2"
	        }, {
	            "name": "吳育仁",
	            "id": "10",
	            "date": "2013-11-25",
	            "year": "2013",
	            "month": "11",
	            "day": "25",
	            "type": "委員會質詢",
	            "quote": "請問羅總經理，同性婚姻合法化之後，勞工保險條例中的老人給付中會產生什麼樣的改變？",
	            "opinion": "不明確",
	            "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/102/77/LCIDC01_1027702.pdf",
	            "trustVote": "343"
	        }],
	        "forTotal": 1,
	        "againstTotal": 0,
	        "unclearTotal": 1,
	        "position": "贊成",
	        "positionCount": 1
	    }, {
	        "name": "黃昭順",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["KHH", 3],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6786",
	                "address": "10051臺北市中正區濟南路1段3-1號1107室",
	                "fax": "02-2358-6790"
	            },
	            "高雄服務處": {
	                "phone": "07-341-3361",
	                "address": "813高雄市左營區新庄仔路425號",
	                "fax": "07-341-2672"
	            }
	        },
	        "constituency_detail": "楠梓區 左營區",
	        "entries": [{
	            "name": "黃昭順",
	            "id": "1",
	            "date": "2012-05-11",
	            "year": "2012",
	            "month": "05",
	            "day": "11",
	            "type": "院會書面質詢",
	            "quote": "本院黃委員昭順，針對近日同性婚姻合法化爭議，認為人生而平等，同性婚姻權益等同於異性之婚姻權，應與其享婚姻中相同的權利與義務，亦應受憲法婚姻自由之保障，對於同性婚姻也應採取理解並尊重之態度，儘速修正相關法令，以期落實平等原則，特向行政院提出質詢。",
	            "opinion": "贊成",
	            "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/101/32/LCIDC01_1013201.pdf",
	            "trustVote": "12"
	        }],
	        "forTotal": 1,
	        "againstTotal": 0,
	        "unclearTotal": 0,
	        "position": "贊成",
	        "positionCount": 1
	    }] };

/***/ },
/* 100 */
/*!******************************************************!*\
  !*** ./app/containers/IssueVotePage/data/against.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = {
	    "opinion": "反對",
	    "icon": "times",
	    "count": 7,
	    "percentage": 27,
	    "legislators": [{
	        "name": "丁守中",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["TPE", 1],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6706",
	                "address": "10051臺北市中正區濟南路1段3-1號0707室",
	                "fax": "02-2358-6710"
	            },
	            "北投服務處": {
	                "phone": "02-2828-7789",
	                "address": "11262臺北市北投區承德路七段188巷2號1樓",
	                "fax": "02-2828-6877"
	            }
	        },
	        "constituency_detail": "北投區 士林區13里",
	        "entries": [{
	            "name": "丁守中",
	            "id": "8",
	            "date": "2013-11-08",
	            "year": "2013",
	            "month": "11",
	            "day": "08",
	            "type": "院會質詢",
	            "quote": "我完全同意同性戀者有相愛、同居也有財產自由處分的完全自主權利，但我更支持宗教團體，因為我是國際佛光會的副總會長。我認為對於宗教團體與一般人的傳統認知，也就是對家庭、對夫妻倫理與價值不應該改變。",
	            "opinion": "反對",
	            "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/102/65/LCIDC01_1026501.pdf",
	            "trustVote": "332"
	        }],
	        "forTotal": 0,
	        "againstTotal": 1,
	        "unclearTotal": 0,
	        "position": "反對",
	        "positionCount": 1
	    }, {
	        "name": "孔文吉",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["aborigine", "highland"],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-8246",
	                "address": "10051臺北市中正區濟南路1段3-1號0203室",
	                "fax": "02-2358-8250"
	            }
	        },
	        "constituency_detail": "山地原住民",
	        "entries": [{
	            "name": "孔文吉",
	            "id": "6",
	            "date": "2013-10-24",
	            "year": "2013",
	            "month": "10",
	            "day": "24",
	            "type": "委員會質詢",
	            "quote": "本席希望你們能夠仔細審酌這件事情，本席是反對的，因為我是基督徒，幸好尤美女委員的提案，本席沒有連署，連署欄沒有本席的名字，我必須在此表示反對，不然很多宗教團體都會來找我。現在有些學校會請同志團體到學校去分享他們的心得，本席希望法務部能站在中性的立場，多聽取各方的意見，教會團體對於同性戀結婚還是無法容許、無法同意的。",
	            "opinion": "反對",
	            "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/102/63/LCIDC01_1026301.pdf",
	            "trustVote": "43"
	        }],
	        "forTotal": 0,
	        "againstTotal": 1,
	        "unclearTotal": 0,
	        "position": "反對",
	        "positionCount": 1
	    }, {
	        "name": "呂學樟",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["HSZ", 0],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6258",
	                "address": "10051臺北市中正區濟南路1段3-1號0407室",
	                "fax": "02-2358-6260"
	            },
	            "新竹服務處": {
	                "phone": "03-535-8181",
	                "address": "新竹市民族路272號",
	                "fax": "03-542-9399"
	            }
	        },
	        "constituency_detail": "全市",
	        "entries": [{
	            "name": "呂學樟",
	            "id": "25",
	            "date": "2014-12-22",
	            "year": "2014",
	            "month": "12",
	            "day": "22",
	            "type": "委員會質詢",
	            "quote": "我反對的是為同性戀婚姻過當修法，因為這樣的修法會造成千百年來家庭倫常的淪喪，社會的價值觀也會崩潰。",
	            "opinion": "反對",
	            "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/104/12/LCIDC01_1041201.pdf",
	            "trustVote": "54"
	        }],
	        "forTotal": 0,
	        "againstTotal": 1,
	        "unclearTotal": 0,
	        "position": "反對",
	        "positionCount": 1
	    }, {
	        "name": "李貴敏",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["proportional"],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6246",
	                "address": "10051臺北市中正區鎮江街2號5302室",
	                "fax": "02-2358-6380"
	            }
	        },
	        "constituency_detail": "",
	        "entries": [{
	            "name": "李貴敏",
	            "id": "22",
	            "date": "2014-12-22",
	            "year": "2014",
	            "month": "12",
	            "day": "22",
	            "type": "委員會質詢",
	            "quote": "我們去看看別的國家如何解決這個問題，我剛才特別提到，我到國外蒐集資料，美國的解決方式是在全民尚未達成共識時讓彼此的對立降到最低，可能是透過法院判決或其他方式，而不是在共識尚未達成時硬要撕裂人民之間的情感。",
	            "opinion": "反對",
	            "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/104/12/LCIDC01_1041201.pdf",
	            "trustVote": "52"
	        }],
	        "forTotal": 0,
	        "againstTotal": 1,
	        "unclearTotal": 0,
	        "position": "反對",
	        "positionCount": 1
	    }, {
	        "name": "林鴻池",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["TPQ", 6],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6871",
	                "address": "10051臺北市中正區濟南路1段3-1號0506室",
	                "fax": "02-2358-6875"
	            },
	            "板橋服務處": {
	                "phone": "02-2253-6788",
	                "address": "新北市板橋區文化路一段120號6樓之1",
	                "fax": "02-2253-7688"
	            }
	        },
	        "constituency_detail": "板橋區（縣民大道 湳仔溝以西）65里",
	        "entries": [{
	            "name": "林鴻池",
	            "id": "28",
	            "date": "2014-12-22",
	            "year": "2014",
	            "month": "12",
	            "day": "22",
	            "type": "委員會質詢",
	            "quote": "今天要討論的民法親屬編部分條文修正案中針對去性別化，希望透過去性別化，修改民法親屬編，讓同性戀可以結婚。有的人認為這其實是基本人權，他們兩個要結婚並沒有礙著別人，不過，這是一個婚姻制度，也是一個家庭制度，我們幾千年來的家庭制度、倫理在一夕之間要透過民法親屬編改變它，我們也可以很快就讓它出委員會，送院會三讀通過，改文字很簡單，但我們需要考量的是，幾千年來的這個家庭制度、倫理的變化對社會產生的衝擊是什麼？",
	            "opinion": "反對",
	            "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/104/12/LCIDC01_1041201.pdf",
	            "trustVote": "2"
	        }],
	        "forTotal": 0,
	        "againstTotal": 1,
	        "unclearTotal": 0,
	        "position": "反對",
	        "positionCount": 1
	    }, {
	        "name": "廖正井",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["TAO", 2],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6316",
	                "address": "10051臺北市中正區濟南路1段3-1號0605室",
	                "fax": "02-2358-6320"
	            },
	            "大園服務處": {
	                "phone": "03-385-1818",
	                "address": "桃園縣大園鄉田心村華興路157號",
	                "fax": "03-386-9656"
	            },
	            "楊梅服務處": {
	                "phone": "03-488-2728",
	                "address": "桃園縣楊梅市大模街10號3樓之2",
	                "fax": "03-488-2758"
	            },
	            "新屋服務處": {
	                "phone": "03-477-3556",
	                "address": "桃園縣新屋鄉中山路112號",
	                "fax": "03-477-3536"
	            }
	        },
	        "constituency_detail": "大園鄉 觀音鄉 新屋鄉 楊梅市",
	        "entries": [{
	            "name": "廖正井",
	            "id": "21",
	            "date": "2014-12-22",
	            "year": "2014",
	            "month": "12",
	            "day": "22",
	            "type": "委員會質詢",
	            "quote": "我贊成你的看法，我們客家人有家族族譜，像我們就常常談起自己是來台第幾代，相關族譜也都會留傳下來，如果照這樣發展，可能就會失去家庭倫理，家庭關係也不復存在，是不是？",
	            "opinion": "反對",
	            "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/104/12/LCIDC01_1041201.pdf",
	            "trustVote": "4"
	        }],
	        "forTotal": 0,
	        "againstTotal": 1,
	        "unclearTotal": 0,
	        "position": "反對",
	        "positionCount": 1
	    }, {
	        "name": "羅淑蕾",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["TPE", 3],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6156",
	                "address": "10051臺北市中正區濟南路1段3-1號0406室",
	                "fax": "02-2358-6160"
	            },
	            "松山服務處": {
	                "phone": "02-2719-5580",
	                "address": "臺北市松山區光復北路240號",
	                "fax": "02-2718-6878"
	            },
	            "中山服務處": {
	                "phone": "02-2563-8251",
	                "address": "臺北市民權東路二段26號6樓之7",
	                "fax": "02-2561-1035"
	            }
	        },
	        "constituency_detail": "中山區 松山區20里",
	        "entries": [{
	            "name": "羅淑蕾",
	            "id": "7",
	            "date": "2013-11-01",
	            "year": "2013",
	            "month": "11",
	            "day": "01",
	            "type": "院會書面質詢",
	            "quote": "本院羅委員淑蕾，鑑於近期少數團體基於「同性婚姻」、「伴侶制度」、「多人家屬及收養制度」之三大訴求，執意推動「多元成家法案」，將會為台灣帶來家庭的不穩定性及耗費大量社會成本，兒童的權益得不到保障，衍生更多社會問題，感到憂心。爰此，衡平台灣整體社會發展及少數特殊家庭需求，相關主管機關應在維護法制穩定性的前提下，建立起個案考量及處理之機制，特向行政院提出質詢。",
	            "opinion": "反對",
	            "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/102/61/LCIDC01_1026101.pdf",
	            "trustVote": "100"
	        }],
	        "forTotal": 0,
	        "againstTotal": 1,
	        "unclearTotal": 0,
	        "position": "反對",
	        "positionCount": 1
	    }]
	};

/***/ },
/* 101 */
/*!******************************************************!*\
  !*** ./app/containers/IssueVotePage/data/unclear.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = {
	    "opinion": "不知所云",
	    "icon": "frown-o",
	    "count": 1,
	    "percentage": 4,
	    "legislators": [{
	        "name": "許忠信",
	        "party": "台灣團結聯盟",
	        "party_eng": "TSU",
	        "caucus": "TSU",
	        "entries": [{
	            "name": "許忠信",
	            "id": "12",
	            "date": "2013-12-16",
	            "year": "2013",
	            "month": "12",
	            "day": "16",
	            "type": "委員會質詢",
	            "quote": "社會上有許多同性戀的同志，我們非常尊重他們的權益，他們該受到的尊重，本席都非常尊重。現今有所謂的多元成家方案，在多元成家方案中兩位同性別的人不可能自然生育，勢必要倚賴人工生殖，問題在於兩位女性共組家庭，能不能兩位女性都接受人工生殖，在兩位女性中誰可以接受人工授孕？如果兩位同性的男性共組家庭，在兩位男性中誰能找代理孕母？請部長針對此一問題向媒體做答復。",
	            "opinion": "不明確",
	            "link": "http://lci.ly.gov.tw/LyLCEW/communique1/final/pdf/103/03/LCIDC01_1030302.pdf",
	            "trustVote": "32"
	        }],
	        "forTotal": 0,
	        "againstTotal": 0,
	        "unclearTotal": 1,
	        "position": "不明確",
	        "positionCount": 1
	    }]
	};

/***/ },
/* 102 */
/*!***************************************************!*\
  !*** ./app/containers/IssueVotePage/data/none.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = {
	    "opinion": "不明確",
	    "icon": "question",
	    "count": 7,
	    "percentage": 27,
	    "legislators": [{
	        "name": "王廷升",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["HUA", 0],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6688",
	                "address": "10051臺北市中正區濟南路1段3-1號1103室",
	                "fax": "02-2358-6690"
	            },
	            "花蓮市服務處": {
	                "phone": "03-833-0729",
	                "address": "970花蓮市中原路462號",
	                "fax": "03-836-2156"
	            }
	        },
	        "constituency_detail": "全縣",
	        "position": "未表態"
	    }, {
	        "name": "柯建銘",
	        "party": "民主進步黨",
	        "party_eng": "DPP",
	        "caucus": "DPP",
	        "constituency": ["proportional"],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6106",
	                "address": "10051臺北市中正區青島東路3號3樓",
	                "fax": "02-2358-6110"
	            },
	            "新竹服務處": {
	                "phone": "03-526-9880",
	                "address": "新竹市四維路15號3樓",
	                "fax": "03-523-2902"
	            }
	        },
	        "constituency_detail": "",
	        "position": "未表態"
	    }, {
	        "name": "洪秀柱",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["proportional"],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6099",
	                "address": "10051臺北市中正區濟南路1段3-1號12樓",
	                "fax": "02-2358-6100"
	            },
	            "立法委員洪秀柱服務處": {
	                "phone": "02-8923-7667",
	                "address": "新北市永和區永和路一段65巷2號",
	                "fax": "02-8923-7668"
	            }
	        },
	        "constituency_detail": "",
	        "position": "未表態"
	    }, {
	        "name": "高志鵬",
	        "party": "民主進步黨",
	        "party_eng": "DPP",
	        "caucus": "DPP",
	        "constituency": ["TPQ", 3],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6241",
	                "address": "10051臺北市中正區濟南路1段3-1號0503室",
	                "fax": "02-2358-6245"
	            },
	            "三重服務處": {
	                "phone": "02-8988-1368",
	                "address": "新北市三重區忠孝路一段153號",
	                "fax": "02-8988-3076"
	            }
	        },
	        "constituency_detail": "三重區103里",
	        "position": "未表態"
	    }, {
	        "name": "曾巨威",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["proportional"],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-6381",
	                "address": "10051臺北市中正區濟南路1段3-1號0705室",
	                "fax": "02-2358-6390"
	            }
	        },
	        "constituency_detail": "",
	        "position": "未表態"
	    }, {
	        "name": "謝國樑",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["KEE", 0],
	        "contact": {
	            "國會研究室": {
	                "phone": "02-2358-8066",
	                "address": "10051臺北市中正區鎮江街2號5101室",
	                "fax": "02-2358-8070"
	            },
	            "基隆服務處": {
	                "phone": "02-2427-8899",
	                "address": "基隆市中正區愛三路37號6樓",
	                "fax": "02-2421-3639"
	            }
	        },
	        "constituency_detail": "全市",
	        "position": "未表態"
	    }, {
	        "name": "顏寬恒",
	        "party": "中國國民黨",
	        "party_eng": "KMT",
	        "caucus": "KMT",
	        "constituency": ["TXG", 2],
	        "contact": {
	            " ": {},
	            "": {}
	        },
	        "constituency_detail": "沙鹿鎮 龍井鄉 大肚鄉 烏日鄉 霧峰 大里市2里",
	        "position": "未表態"
	    }]
	};

/***/ },
/* 103 */
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("events");

/***/ },
/* 104 */
/*!*****************************************!*\
  !*** external "react/lib/ReactUpdates" ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("react/lib/ReactUpdates");

/***/ },
/* 105 */
/*!******************************************!*\
  !*** external "react/lib/Object.assign" ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("react/lib/Object.assign");

/***/ },
/* 106 */
/*!**************************************!*\
  !*** external "react/lib/invariant" ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("react/lib/invariant");

/***/ },
/* 107 */
/*!*************************************************!*\
  !*** external "react/lib/ExecutionEnvironment" ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("react/lib/ExecutionEnvironment");

/***/ },
/* 108 */
/*!************************************!*\
  !*** external "react/lib/warning" ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("react/lib/warning");

/***/ },
/* 109 */
/*!*******************************!*\
  !*** ./~/classnames/index.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/

	function classNames () {
		'use strict';

		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if ('string' === argType || 'number' === argType) {
				classes += ' ' + arg;

			} else if (Array.isArray(arg)) {
				classes += ' ' + classNames.apply(null, arg);

			} else if ('object' === argType) {
				for (var key in arg) {
					if (arg.hasOwnProperty(key) && arg[key]) {
						classes += ' ' + key;
					}
				}
			}
		}

		return classes.substr(1);
	}

	// safely export classNames for node / browserify
	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	}

	/* global define */
	// safely export classNames for RequireJS
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}


/***/ },
/* 110 */
/*!*****************************************!*\
  !*** ./~/react-router/lib/PropTypes.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var assign = __webpack_require__(/*! react/lib/Object.assign */ 105);
	var ReactPropTypes = __webpack_require__(/*! react */ 1).PropTypes;
	var Route = __webpack_require__(/*! ./Route */ 67);

	var PropTypes = assign({}, ReactPropTypes, {

	  /**
	   * Indicates that a prop should be falsy.
	   */
	  falsy: function falsy(props, propName, componentName) {
	    if (props[propName]) {
	      return new Error('<' + componentName + '> should not have a "' + propName + '" prop');
	    }
	  },

	  /**
	   * Indicates that a prop should be a Route object.
	   */
	  route: ReactPropTypes.instanceOf(Route),

	  /**
	   * Indicates that a prop should be a Router object.
	   */
	  //router: ReactPropTypes.instanceOf(Router) // TODO
	  router: ReactPropTypes.func

	});

	module.exports = PropTypes;

/***/ },
/* 111 */
/*!*********************************************************!*\
  !*** ./~/react-router/lib/components/ContextWrapper.js ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	/**
	 * This component is necessary to get around a context warning
	 * present in React 0.13.0. It sovles this by providing a separation
	 * between the "owner" and "parent" contexts.
	 */

	var React = __webpack_require__(/*! react */ 1);

	var ContextWrapper = (function (_React$Component) {
	  function ContextWrapper() {
	    _classCallCheck(this, ContextWrapper);

	    if (_React$Component != null) {
	      _React$Component.apply(this, arguments);
	    }
	  }

	  _inherits(ContextWrapper, _React$Component);

	  _createClass(ContextWrapper, [{
	    key: 'render',
	    value: function render() {
	      return this.props.children;
	    }
	  }]);

	  return ContextWrapper;
	})(React.Component);

	module.exports = ContextWrapper;

/***/ },
/* 112 */
/*!*******************************************************!*\
  !*** ./~/react-router/lib/actions/LocationActions.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Actions that modify the URL.
	 */
	'use strict';

	var LocationActions = {

	  /**
	   * Indicates a new location is being pushed to the history stack.
	   */
	  PUSH: 'push',

	  /**
	   * Indicates the current location should be replaced.
	   */
	  REPLACE: 'replace',

	  /**
	   * Indicates the most recent entry should be removed from the history stack.
	   */
	  POP: 'pop'

	};

	module.exports = LocationActions;

/***/ },
/* 113 */
/*!*****************************************!*\
  !*** ./~/react-router/lib/PathUtils.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var invariant = __webpack_require__(/*! react/lib/invariant */ 106);
	var assign = __webpack_require__(/*! object-assign */ 401);
	var qs = __webpack_require__(/*! qs */ 402);

	var paramCompileMatcher = /:([a-zA-Z_$][a-zA-Z0-9_$]*)|[*.()\[\]\\+|{}^$]/g;
	var paramInjectMatcher = /:([a-zA-Z_$][a-zA-Z0-9_$?]*[?]?)|[*]/g;
	var paramInjectTrailingSlashMatcher = /\/\/\?|\/\?\/|\/\?/g;
	var queryMatcher = /\?(.*)$/;

	var _compiledPatterns = {};

	function compilePattern(pattern) {
	  if (!(pattern in _compiledPatterns)) {
	    var paramNames = [];
	    var source = pattern.replace(paramCompileMatcher, function (match, paramName) {
	      if (paramName) {
	        paramNames.push(paramName);
	        return '([^/?#]+)';
	      } else if (match === '*') {
	        paramNames.push('splat');
	        return '(.*?)';
	      } else {
	        return '\\' + match;
	      }
	    });

	    _compiledPatterns[pattern] = {
	      matcher: new RegExp('^' + source + '$', 'i'),
	      paramNames: paramNames
	    };
	  }

	  return _compiledPatterns[pattern];
	}

	var PathUtils = {

	  /**
	   * Returns true if the given path is absolute.
	   */
	  isAbsolute: function isAbsolute(path) {
	    return path.charAt(0) === '/';
	  },

	  /**
	   * Joins two URL paths together.
	   */
	  join: function join(a, b) {
	    return a.replace(/\/*$/, '/') + b;
	  },

	  /**
	   * Returns an array of the names of all parameters in the given pattern.
	   */
	  extractParamNames: function extractParamNames(pattern) {
	    return compilePattern(pattern).paramNames;
	  },

	  /**
	   * Extracts the portions of the given URL path that match the given pattern
	   * and returns an object of param name => value pairs. Returns null if the
	   * pattern does not match the given path.
	   */
	  extractParams: function extractParams(pattern, path) {
	    var _compilePattern = compilePattern(pattern);

	    var matcher = _compilePattern.matcher;
	    var paramNames = _compilePattern.paramNames;

	    var match = path.match(matcher);

	    if (!match) {
	      return null;
	    }var params = {};

	    paramNames.forEach(function (paramName, index) {
	      params[paramName] = match[index + 1];
	    });

	    return params;
	  },

	  /**
	   * Returns a version of the given route path with params interpolated. Throws
	   * if there is a dynamic segment of the route path for which there is no param.
	   */
	  injectParams: function injectParams(pattern, params) {
	    params = params || {};

	    var splatIndex = 0;

	    return pattern.replace(paramInjectMatcher, function (match, paramName) {
	      paramName = paramName || 'splat';

	      // If param is optional don't check for existence
	      if (paramName.slice(-1) === '?') {
	        paramName = paramName.slice(0, -1);

	        if (params[paramName] == null) return '';
	      } else {
	        invariant(params[paramName] != null, 'Missing "%s" parameter for path "%s"', paramName, pattern);
	      }

	      var segment;
	      if (paramName === 'splat' && Array.isArray(params[paramName])) {
	        segment = params[paramName][splatIndex++];

	        invariant(segment != null, 'Missing splat # %s for path "%s"', splatIndex, pattern);
	      } else {
	        segment = params[paramName];
	      }

	      return segment;
	    }).replace(paramInjectTrailingSlashMatcher, '/');
	  },

	  /**
	   * Returns an object that is the result of parsing any query string contained
	   * in the given path, null if the path contains no query string.
	   */
	  extractQuery: function extractQuery(path) {
	    var match = path.match(queryMatcher);
	    return match && qs.parse(match[1]);
	  },

	  /**
	   * Returns a version of the given path without the query string.
	   */
	  withoutQuery: function withoutQuery(path) {
	    return path.replace(queryMatcher, '');
	  },

	  /**
	   * Returns a version of the given path with the parameters in the given
	   * query merged into the query string.
	   */
	  withQuery: function withQuery(path, query) {
	    var existingQuery = PathUtils.extractQuery(path);

	    if (existingQuery) query = query ? assign(existingQuery, query) : existingQuery;

	    var queryString = qs.stringify(query, { arrayFormat: 'brackets' });

	    if (queryString) {
	      return PathUtils.withoutQuery(path) + '?' + queryString;
	    }return PathUtils.withoutQuery(path);
	  }

	};

	module.exports = PathUtils;

/***/ },
/* 114 */
/*!*********************************************!*\
  !*** ./~/react-router/lib/ScrollHistory.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var invariant = __webpack_require__(/*! react/lib/invariant */ 106);
	var canUseDOM = __webpack_require__(/*! react/lib/ExecutionEnvironment */ 107).canUseDOM;
	var getWindowScrollPosition = __webpack_require__(/*! ./getWindowScrollPosition */ 397);

	function shouldUpdateScroll(state, prevState) {
	  if (!prevState) {
	    return true;
	  } // Don't update scroll position when only the query has changed.
	  if (state.pathname === prevState.pathname) {
	    return false;
	  }var routes = state.routes;
	  var prevRoutes = prevState.routes;

	  var sharedAncestorRoutes = routes.filter(function (route) {
	    return prevRoutes.indexOf(route) !== -1;
	  });

	  return !sharedAncestorRoutes.some(function (route) {
	    return route.ignoreScrollBehavior;
	  });
	}

	/**
	 * Provides the router with the ability to manage window scroll position
	 * according to its scroll behavior.
	 */
	var ScrollHistory = {

	  statics: {

	    /**
	     * Records curent scroll position as the last known position for the given URL path.
	     */
	    recordScrollPosition: function recordScrollPosition(path) {
	      if (!this.scrollHistory) this.scrollHistory = {};

	      this.scrollHistory[path] = getWindowScrollPosition();
	    },

	    /**
	     * Returns the last known scroll position for the given URL path.
	     */
	    getScrollPosition: function getScrollPosition(path) {
	      if (!this.scrollHistory) this.scrollHistory = {};

	      return this.scrollHistory[path] || null;
	    }

	  },

	  componentWillMount: function componentWillMount() {
	    invariant(this.constructor.getScrollBehavior() == null || canUseDOM, 'Cannot use scroll behavior without a DOM');
	  },

	  componentDidMount: function componentDidMount() {
	    this._updateScroll();
	  },

	  componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
	    this._updateScroll(prevState);
	  },

	  _updateScroll: function _updateScroll(prevState) {
	    if (!shouldUpdateScroll(this.state, prevState)) {
	      return;
	    }var scrollBehavior = this.constructor.getScrollBehavior();

	    if (scrollBehavior) scrollBehavior.updateScrollPosition(this.constructor.getScrollPosition(this.state.path), this.state.action);
	  }

	};

	module.exports = ScrollHistory;

/***/ },
/* 115 */
/*!***********************************************!*\
  !*** ./~/react-router/lib/isReactChildren.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(/*! react */ 1);

	function isValidChild(object) {
	  return object == null || React.isValidElement(object);
	}

	function isReactChildren(object) {
	  return isValidChild(object) || Array.isArray(object) && object.every(isValidChild);
	}

	module.exports = isReactChildren;

/***/ },
/* 116 */
/*!******************************************!*\
  !*** ./~/react-router/lib/Transition.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	/* jshint -W058 */

	'use strict';

	var Cancellation = __webpack_require__(/*! ./Cancellation */ 118);
	var Redirect = __webpack_require__(/*! ./Redirect */ 117);

	/**
	 * Encapsulates a transition to a given path.
	 *
	 * The willTransitionTo and willTransitionFrom handlers receive
	 * an instance of this class as their first argument.
	 */
	function Transition(path, retry) {
	  this.path = path;
	  this.abortReason = null;
	  // TODO: Change this to router.retryTransition(transition)
	  this.retry = retry.bind(this);
	}

	Transition.prototype.abort = function (reason) {
	  if (this.abortReason == null) this.abortReason = reason || 'ABORT';
	};

	Transition.prototype.redirect = function (to, params, query) {
	  this.abort(new Redirect(to, params, query));
	};

	Transition.prototype.cancel = function () {
	  this.abort(new Cancellation());
	};

	Transition.from = function (transition, routes, components, callback) {
	  routes.reduce(function (callback, route, index) {
	    return function (error) {
	      if (error || transition.abortReason) {
	        callback(error);
	      } else if (route.onLeave) {
	        try {
	          route.onLeave(transition, components[index], callback);

	          // If there is no callback in the argument list, call it automatically.
	          if (route.onLeave.length < 3) callback();
	        } catch (e) {
	          callback(e);
	        }
	      } else {
	        callback();
	      }
	    };
	  }, callback)();
	};

	Transition.to = function (transition, routes, params, query, callback) {
	  routes.reduceRight(function (callback, route) {
	    return function (error) {
	      if (error || transition.abortReason) {
	        callback(error);
	      } else if (route.onEnter) {
	        try {
	          route.onEnter(transition, params, query, callback);

	          // If there is no callback in the argument list, call it automatically.
	          if (route.onEnter.length < 4) callback();
	        } catch (e) {
	          callback(e);
	        }
	      } else {
	        callback();
	      }
	    };
	  }, callback)();
	};

	module.exports = Transition;

/***/ },
/* 117 */
/*!****************************************!*\
  !*** ./~/react-router/lib/Redirect.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Encapsulates a redirect to the given route.
	 */
	"use strict";

	function Redirect(to, params, query) {
	  this.to = to;
	  this.params = params;
	  this.query = query;
	}

	module.exports = Redirect;

/***/ },
/* 118 */
/*!********************************************!*\
  !*** ./~/react-router/lib/Cancellation.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Represents a cancellation caused by navigating away
	 * before the previous transition has fully resolved.
	 */
	"use strict";

	function Cancellation() {}

	module.exports = Cancellation;

/***/ },
/* 119 */
/*!*************************************!*\
  !*** ./~/react-router/lib/Match.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	/* jshint -W084 */
	var PathUtils = __webpack_require__(/*! ./PathUtils */ 113);

	function deepSearch(route, pathname, query) {
	  // Check the subtree first to find the most deeply-nested match.
	  var childRoutes = route.childRoutes;
	  if (childRoutes) {
	    var match, childRoute;
	    for (var i = 0, len = childRoutes.length; i < len; ++i) {
	      childRoute = childRoutes[i];

	      if (childRoute.isDefault || childRoute.isNotFound) continue; // Check these in order later.

	      if (match = deepSearch(childRoute, pathname, query)) {
	        // A route in the subtree matched! Add this route and we're done.
	        match.routes.unshift(route);
	        return match;
	      }
	    }
	  }

	  // No child routes matched; try the default route.
	  var defaultRoute = route.defaultRoute;
	  if (defaultRoute && (params = PathUtils.extractParams(defaultRoute.path, pathname))) {
	    return new Match(pathname, params, query, [route, defaultRoute]);
	  } // Does the "not found" route match?
	  var notFoundRoute = route.notFoundRoute;
	  if (notFoundRoute && (params = PathUtils.extractParams(notFoundRoute.path, pathname))) {
	    return new Match(pathname, params, query, [route, notFoundRoute]);
	  } // Last attempt: check this route.
	  var params = PathUtils.extractParams(route.path, pathname);
	  if (params) {
	    return new Match(pathname, params, query, [route]);
	  }return null;
	}

	var Match = (function () {
	  function Match(pathname, params, query, routes) {
	    _classCallCheck(this, Match);

	    this.pathname = pathname;
	    this.params = params;
	    this.query = query;
	    this.routes = routes;
	  }

	  _createClass(Match, null, [{
	    key: 'findMatch',

	    /**
	     * Attempts to match depth-first a route in the given route's
	     * subtree against the given path and returns the match if it
	     * succeeds, null if no match can be made.
	     */
	    value: function findMatch(routes, path) {
	      var pathname = PathUtils.withoutQuery(path);
	      var query = PathUtils.extractQuery(path);
	      var match = null;

	      for (var i = 0, len = routes.length; match == null && i < len; ++i) match = deepSearch(routes[i], pathname, query);

	      return match;
	    }
	  }]);

	  return Match;
	})();

	module.exports = Match;

/***/ },
/* 120 */
/*!***********************************************!*\
  !*** ./~/react-router/lib/supportsHistory.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function supportsHistory() {
	  /*! taken from modernizr
	   * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
	   * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
	   * changed to avoid false negatives for Windows Phones: https://github.com/rackt/react-router/issues/586
	   */
	  var ua = navigator.userAgent;
	  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
	    return false;
	  }
	  return window.history && 'pushState' in window.history;
	}

	module.exports = supportsHistory;

/***/ },
/* 121 */
/*!******************************************************!*\
  !*** ./app/components/Legislator/images/default.jpg ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "adff2800ecfceb1a8512e66dbfcba22d.jpg"

/***/ },
/* 122 */
/*!************************************************************!*\
  !*** ./app/containers/HomePage/images/HomePage-avatar.png ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "552174c198e297b09a8da79dceb04377.png"

/***/ },
/* 123 */
/*!************************************************************************!*\
  !*** ./app/containers/IssueVotePage/images/IssueVotePage-pieChart.jpg ***!
  \************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "af623a61fc37ed339bc25b009ecf51c1.jpg"

/***/ },
/* 124 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/丁守中.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "53d832dde2584a6b68b859595df491e1.png"

/***/ },
/* 125 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/何欣純.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "d25f9aa20400dc1521818b436d449684.png"

/***/ },
/* 126 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/劉建國.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "60c1fb1461010c9d349fd59d7f8d089e.png"

/***/ },
/* 127 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/劉櫂豪.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "ab91c1e460c2df6d6e724eea36f027d6.png"

/***/ },
/* 128 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/吳宜臻.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "35872dc6c469b4890d5244c6e9116c58.png"

/***/ },
/* 129 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/吳秉叡.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "cbe50421960b6c730774e8e486ad47f4.png"

/***/ },
/* 130 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/吳育仁.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "b050342cd87246dc4e69f3233b04658b.png"

/***/ },
/* 131 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/吳育昇.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "87db7c524b3d7971b1b4f3258cf8b7e1.png"

/***/ },
/* 132 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/呂學樟.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "5b1fae3481ae71f325c78f8e4e8a472d.png"

/***/ },
/* 133 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/呂玉玲.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "d1d162bd9ce385864294b29443252e25.png"

/***/ },
/* 134 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/周倪安.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "669090029e21d33ff94ec8d1b6c785c4.png"

/***/ },
/* 135 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/姚文智.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "6e8cc6691a75f8da8388be07d5556766.png"

/***/ },
/* 136 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/孔文吉.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "88a2c7a995f631b99cd64d995dfab78f.png"

/***/ },
/* 137 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/孫大千.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fa33f3abf5850468242d4eaf320e8974.png"

/***/ },
/* 138 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/尤美女.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "ea06058ce6865cc390a5e698bdd51e5f.png"

/***/ },
/* 139 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/廖國棟.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "d5a34927f07363524db91114a5193fed.png"

/***/ },
/* 140 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/廖正井.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "a5585a36aa92f37670796dae7d66e4d7.png"

/***/ },
/* 141 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/張嘉郡.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "f443dfef7d959315b5de18c624cbd487.png"

/***/ },
/* 142 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/張慶忠.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "00ebc516fe36e29da4554dea515ea7e3.png"

/***/ },
/* 143 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/徐少萍.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "0143df208291106b551ecd2fee8eaada.png"

/***/ },
/* 144 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/徐欣瑩.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "11adddc659edd65de5cb9cdb231d4f3f.png"

/***/ },
/* 145 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/徐耀昌.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "608560fc2f5747c339100d06af96c0e1.png"

/***/ },
/* 146 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/曾巨威.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "4f428aadd27447b49b22d3913d8314db.png"

/***/ },
/* 147 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/李俊俋.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "6ba110d2d09df1f2614d5f99915409aa.png"

/***/ },
/* 148 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/李慶華.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "29299b9cfe831de240f66d404ab9ca01.png"

/***/ },
/* 149 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/李應元.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "353da4ea294e23ddfca92b5409815659.png"

/***/ },
/* 150 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/李昆澤.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "e72b1192465f398f7b78cf41a8e57600.png"

/***/ },
/* 151 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/李桐豪.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "f7723a63d641062d912c5e917a077b0f.png"

/***/ },
/* 152 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/李貴敏.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fdc93992371587dd5296b161a7f1533e.png"

/***/ },
/* 153 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/李鴻鈞.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "a0bf6aefcb506d2c5f44f188b463055d.png"

/***/ },
/* 154 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/林佳龍.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "3802ce4b86543f8ba8a6e12576261a11.png"

/***/ },
/* 155 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/林國正.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "7e939ae577d32377730975e6a6b13957.png"

/***/ },
/* 156 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/林岱樺.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "2778f8da3bd9ff99f97fbbcd00ffcb4c.png"

/***/ },
/* 157 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/林德福.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "ee4c030d95297f4acac4f43a2cf30e7c.png"

/***/ },
/* 158 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/林明溱.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "1026936de3d79cad10375db2fb224f57.png"

/***/ },
/* 159 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/林淑芬.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "6753fa256ebb8b9f79a92b864dc07c9c.png"

/***/ },
/* 160 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/林滄敏.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "49a8ecc0ea3e270bd86fb9abcbbcc101.png"

/***/ },
/* 161 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/林郁方.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "0985fc424b3c867dc78ee4ad4441972f.png"

/***/ },
/* 162 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/林鴻池.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "646e19774a68cf1c682c802843498484.png"

/***/ },
/* 163 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/柯建銘.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "3d6b6b5c383bcb149fce97f6ade761e9.png"

/***/ },
/* 164 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/楊應雄.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "33296efd6371b3d5fe3a46931aaae4e9.png"

/***/ },
/* 165 */
/*!********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/楊曜.png ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "eeb940a6bdd877a5847665f55e324a27.png"

/***/ },
/* 166 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/楊玉欣.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "ed3137aad81a3d0e3f69d8e190e06a93.png"

/***/ },
/* 167 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/楊瓊瓔.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "bd7df856396a0fde2814d8f95af92787.png"

/***/ },
/* 168 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/楊麗環.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "1964e8931f52680153b12400f28ddd50.png"

/***/ },
/* 169 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/段宜康.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "64adcf1e1c9f73d8cc2327edb74770b9.png"

/***/ },
/* 170 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/江啟臣.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "c2b6e97bd67a34d4eec98b72c1e78c30.png"

/***/ },
/* 171 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/江惠貞.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "3b2b1e895fa60ba3b8e357b03be70940.png"

/***/ },
/* 172 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/洪秀柱.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "814629edb623c2ae8abd709a5f4ba364.png"

/***/ },
/* 173 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/潘孟安.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "63d508865f66ad4f66cb3fcffde109cf.png"

/***/ },
/* 174 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/潘維剛.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "912b40303bc4ad99573993c35dd87968.png"

/***/ },
/* 175 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/王廷升.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "48becbb6c8363b5d06b5378da237c966.png"

/***/ },
/* 176 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/王惠美.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "7ea00e85fdae44eb179698d88fd17ab4.png"

/***/ },
/* 177 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/王育敏.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "9a725d40fa466c6a6feb35e1c095a2ad.png"

/***/ },
/* 178 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/王進士.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "7060df98746658a0007b52914293164e.png"

/***/ },
/* 179 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/王金平.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "0b3e8d909b3ccc8387f3ca3cda91a2f5.png"

/***/ },
/* 180 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/田秋堇.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "d47a2295bd4e9f0aa2f384c5cff92de1.png"

/***/ },
/* 181 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/盧嘉辰.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "0a7f7d550fbba083a1a595e80a0c019d.png"

/***/ },
/* 182 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/盧秀燕.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "5959def6cfea6573f06f44e30221938c.png"

/***/ },
/* 183 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/管碧玲.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "85f2b66fb5e454a95d78d49a0861f9d5.png"

/***/ },
/* 184 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/簡東明.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "4a9f1fe9c32dfe821b651ef682b6fd4f.png"

/***/ },
/* 185 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/紀國棟.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "6c88b3aa5a15d6b6e90e33eb6a5753fe.png"

/***/ },
/* 186 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/羅明才.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "61338f718a5cacb3243484b34315c707.png"

/***/ },
/* 187 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/羅淑蕾.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "6f56230d2d04544709318dec35af247b.png"

/***/ },
/* 188 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/翁重鈞.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "233a76bd5645035247b8d8b9e17020a0.png"

/***/ },
/* 189 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/葉宜津.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "f718d850490d50321f819a6da4a452e2.png"

/***/ },
/* 190 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/葉津鈴.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "d22085e69e7a57168c5aa7b47cd24db3.png"

/***/ },
/* 191 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/蔡其昌.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "52f6f68756a56b57e23814966394eb6d.png"

/***/ },
/* 192 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/蔡正元.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "0d2fcd1e1b53a72a8c97e84f7fd96644.png"

/***/ },
/* 193 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/蔡煌瑯.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "bfa408f21914edf437b3cfd6d837a879.png"

/***/ },
/* 194 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/蔡錦隆.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "796bd36d1333cfb25e855d481656002b.png"

/***/ },
/* 195 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/蔣乃辛.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "a8ef44704d92580eeb39cfd603a34d01.png"

/***/ },
/* 196 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/蕭美琴.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "e254151a98a3a800f3d0ac01b2bf38ed.png"

/***/ },
/* 197 */
/*!********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/薛凌.png ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "94c15053133f33e597fc4e10dc283513.png"

/***/ },
/* 198 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/蘇清泉.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "717e67ab577a1775ce9ddf4a5ff060f6.png"

/***/ },
/* 199 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/蘇震清.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "0ef5594a1bccf4b16df7fb8e68655f8b.png"

/***/ },
/* 200 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/許忠信.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "6e95d823f9d673cd7f034209d74cb234.png"

/***/ },
/* 201 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/許智傑.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "c4407a23e06fd9463a6056c0a9c6577e.png"

/***/ },
/* 202 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/許添財.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "eeba0ccc9a3c7dc5d6b92f7478d99df7.png"

/***/ },
/* 203 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/詹凱臣.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "3cca8512a8582c0ab4a9a7b9b6fe81a2.png"

/***/ },
/* 204 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/謝國樑.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "6691f01e092eef857a10c4fce8a71f64.png"

/***/ },
/* 205 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/費鴻泰.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "95a37b322b646d8323457fcb1d3fd6ee.png"

/***/ },
/* 206 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/賴士葆.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "ad47f7c2986b340f47198e2d7e6616e8.png"

/***/ },
/* 207 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/賴振昌.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fdb564bc843c8844ad8e3476fa968c7f.png"

/***/ },
/* 208 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/趙天麟.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "659d62e81925fd88ae920db7f6beabd2.png"

/***/ },
/* 209 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/邱志偉.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "4b13eeb894061935b4396375351206c4.png"

/***/ },
/* 210 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/邱文彥.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "92e0f78be7cb0e384580bffb8d837bd5.png"

/***/ },
/* 211 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/邱議瑩.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "076d254b4b94793b3d636ccbea6711d9.png"

/***/ },
/* 212 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/鄭天財.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "513f57ccc7a29e2beaf54cdc38c8ad0c.png"

/***/ },
/* 213 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/鄭汝芬.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "75979106f892bfbe57b1415bc8c15fe9.png"

/***/ },
/* 214 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/鄭麗君.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "3176aa505cb1a78cda5909e7c85157ac.png"

/***/ },
/* 215 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/陳亭妃.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "71a1ee49d03deae203fbc6ae1e22eba0.png"

/***/ },
/* 216 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/陳其邁.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "128c0a7483e8daa47f693d9326a090de.png"

/***/ },
/* 217 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/陳唐山.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "31b1e07b4281906a6e2e05c0eb5765fd.png"

/***/ },
/* 218 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/陳學聖.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "0d04270529df1e19bbf181b116a3c9e8.png"

/***/ },
/* 219 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/陳怡潔.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "9df443ce4f4d8a0abc4dea357fd71791.png"

/***/ },
/* 220 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/陳明文.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "6f9f4cea49452f446458e5a1b86f437c.png"

/***/ },
/* 221 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/陳根德.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "e43116ce1d367346429b1d0bff2ddd15.png"

/***/ },
/* 222 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/陳歐珀.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "e0de59d3d88ef4fa390c7ad15d184736.png"

/***/ },
/* 223 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/陳淑慧.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "9acf2e60bfcc6c1823457b4fdff4a1ce.png"

/***/ },
/* 224 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/陳碧涵.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "60fc483100a0cba64a2e61f38828c89b.png"

/***/ },
/* 225 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/陳節如.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "78c247f8aaf8bb82a23b1aad1dc9941f.png"

/***/ },
/* 226 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/陳超明.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "acdae1531ca424f2314775a13b5b5953.png"

/***/ },
/* 227 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/陳鎮湘.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "6613fa3490df21163983044cc7f100c4.png"

/***/ },
/* 228 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/陳雪生.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "4a09a511d013e5322614064721cb2d14.png"

/***/ },
/* 229 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/顏寬恒.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "79d35d2a704c643b2e0295da1b7a86b0.png"

/***/ },
/* 230 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/馬文君.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "0973f8c6da915adc2b376eff97b64265.png"

/***/ },
/* 231 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/高志鵬.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "77821e0d7d1cd603e5e1e9dc1fc3b679.png"

/***/ },
/* 232 */
/*!**********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/高金素梅.png ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fb431093fb74b2eae7c44e1975e5284d.png"

/***/ },
/* 233 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/魏明谷.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "ab79f6582f091847cf56fc4b1b65e81c.png"

/***/ },
/* 234 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/黃偉哲.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "b88fcc6e1bbe88f6f69983d3e5fc6ad0.png"

/***/ },
/* 235 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/黃志雄.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "d92b46d47c09cd04474199e4c12245b6.png"

/***/ },
/* 236 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/黃文玲.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "ecd9a0029b62a297a32a1d1a94f6254f.png"

/***/ },
/* 237 */
/*!*********************************************************!*\
  !*** ./app/components/Legislator/images/avatar/黃昭順.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "6bbc4ccbda3220df5798bed8de6ef944.png"

/***/ },
/* 238 */
/*!***************************************************!*\
  !*** ./app/containers/IssueListPage/images/1.png ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "895f6a6cf32918bd967e77932667664e.png"

/***/ },
/* 239 */
/*!***************************************************!*\
  !*** ./app/containers/IssueListPage/images/2.png ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "4b7fd436641af4e708368d7cb3ed3117.png"

/***/ },
/* 240 */
/*!***************************************************!*\
  !*** ./app/containers/IssueListPage/images/3.png ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "e4c3e97597b5c4878040315608989925.png"

/***/ },
/* 241 */
/*!***************************************************!*\
  !*** ./app/containers/IssueListPage/images/4.png ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "552174c198e297b09a8da79dceb04377.png"

/***/ },
/* 242 */
/*!***************************************************!*\
  !*** ./app/containers/IssueListPage/images/5.png ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "ec8eb2b91486717e9b984886733f83b0.png"

/***/ },
/* 243 */
/*!***************************************************!*\
  !*** ./app/containers/IssueListPage/images/6.png ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "895f6a6cf32918bd967e77932667664e.png"

/***/ },
/* 244 */
/*!***************************************************!*\
  !*** ./app/containers/IssueListPage/images/7.png ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "4b7fd436641af4e708368d7cb3ed3117.png"

/***/ },
/* 245 */
/*!**************************************!*\
  !*** ./app/components/Icon/Icon.css ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = {};

/***/ },
/* 246 */
/*!********************************************!*\
  !*** ./app/components/SideBar/SideBar.css ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = {};

/***/ },
/* 247 */
/*!****************************************************!*\
  !*** ./app/components/CompareCard/CompareCard.css ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = {};

/***/ },
/* 248 */
/*!***************************************************!*\
  !*** ./app/components/CompareCard/CompareCard.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = {
		"candidateA": "賴士葆",
		"candidateB": "苗博雅",
		"issues": [{ "title": "公司獲利盈餘重新分配",
			"賴士葆": "for",
			"苗博雅": "against",
			"阮昭雄": "unclear",
			"余宛如": "for"
		}, { "title": "增加罰則處罰企業未分配盈餘",
			"賴士葆": "against",
			"苗博雅": "none",
			"阮昭雄": "unclear",
			"余宛如": "for"
		}, { "title": "每周40工時及加班上限",
			"賴士葆": "against",
			"苗博雅": "for",
			"阮昭雄": "for",
			"余宛如": "against"
		}, { "title": "勞工債權清償順位優於銀行抵押權",
			"賴士葆": "for",
			"苗博雅": "none",
			"阮昭雄": "none",
			"余宛如": "against"
		}, { "title": "家事移工應納入勞基法規範",
			"賴士葆": "unclear",
			"苗博雅": "against",
			"阮昭雄": "for",
			"余宛如": "for"
		}]
	};

/***/ },
/* 249 */
/*!*********************************************************!*\
  !*** ./app/components/CompareCard/images ^\.\/.*\.png$ ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./余宛如.png": 270,
		"./苗博雅.png": 271,
		"./賴士葆.png": 272,
		"./阮昭雄.png": 273
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 249;


/***/ },
/* 250 */
/*!*******************************************************!*\
  !*** ./app/components/CompareCard/images/default.svg ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiIGhlaWdodD0iMTAwcHgiIHdpZHRoPSIxMDBweCI+CjxwYXRoIGZpbGw9IiNDQ0MiIGQ9Ik04OC44LDUwYzAtMjEuNi0xNy42LTM5LjItMzkuMi0zOS4yUzEwLjQsMjguNCwxMC40LDUwYzAsMTEuOSw1LjQsMjIuNiwxMy44LDI5LjhjMC4xLDAuMSwwLjIsMC4yLDAuNCwwLjMgIGM2LjgsNS43LDE1LjUsOS4xLDI1LjEsOS4xYzkuNCwwLDE4LjEtMy40LDI0LjktOC45YzAuNC0wLjEsMC43LTAuNCwwLjktMC43QzgzLjYsNzIuMyw4OC44LDYxLjgsODguOCw1MHogTTE0LDUwICBjMC0xOS42LDE2LTM1LjYsMzUuNi0zNS42czM1LjYsMTYsMzUuNiwzNS42YzAsOS42LTMuOCwxOC4zLTEwLDI0LjdjLTEtNC43LTQtMTIuNy0xMy4yLTE3LjljMi4xLTIuNiwzLjMtNiwzLjMtOS42ICBjMC04LjYtNy0xNS42LTE1LjYtMTUuNmMtOC42LDAtMTUuNiw3LTE1LjYsMTUuNmMwLDMuNiwxLjMsNi45LDMuMyw5LjZjLTkuMyw1LjItMTIuMywxMy4yLTEzLjIsMTcuOUMxNy45LDY4LjQsMTQsNTkuNiwxNCw1MHogICBNMzcuNiw0Ny4zYzAtNi42LDUuNC0xMiwxMi0xMmM2LjYsMCwxMiw1LjQsMTIsMTJjMCw2LjYtNS40LDEyLTEyLDEyQzQzLDU5LjMsMzcuNiw1My45LDM3LjYsNDcuM3ogTTI3LjQsNzcuOCAgYzAuMi0yLjksMS44LTEyLjcsMTIuNi0xOC4yYzIuNywyLjEsNiwzLjMsOS42LDMuM2MzLjYsMCw3LTEuMyw5LjctMy40QzcwLDY1LDcxLjcsNzQuNiw3Miw3Ny43Yy02LjEsNC45LTEzLjksNy45LTIyLjMsNy45ICBDNDEuMiw4NS42LDMzLjUsODIuNywyNy40LDc3Ljh6Ii8+Cjwvc3ZnPg=="

/***/ },
/* 251 */
/*!************************************************************!*\
  !*** ./app/components/CandidatePicker/CandidatePicker.css ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = {};

/***/ },
/* 252 */
/*!*************************************************************!*\
  !*** ./app/components/CandidatePicker/images ^\.\/.*\.png$ ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./余宛如.png": 274,
		"./苗博雅.png": 275,
		"./賴士葆.png": 276,
		"./阮昭雄.png": 277
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 252;


/***/ },
/* 253 */
/*!******************************************!*\
  !*** ./app/components/AppBar/AppBar.css ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = {};

/***/ },
/* 254 */
/*!****************************************************!*\
  !*** ./app/components/CompareTabs/CompareTabs.css ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = {};

/***/ },
/* 255 */
/*!**************************************!*\
  !*** ./app/components/Tabs/Tabs.css ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = {};

/***/ },
/* 256 */
/*!******************************************!*\
  !*** ./app/components/Record/Record.jsx ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { desc = parent = getter = undefined; _again = false; var object = _x,
	    property = _x2,
	    receiver = _x3; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(/*! react */ 1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(/*! react-router */ 28);

	var _classnames = __webpack_require__(/*! classnames */ 109);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _LegislatorLegislatorJsx = __webpack_require__(/*! ../Legislator/Legislator.jsx */ 29);

	var _LegislatorLegislatorJsx2 = _interopRequireDefault(_LegislatorLegislatorJsx);

	var _LegislatorAvatarLegislatorAvatarJsx = __webpack_require__(/*! ../LegislatorAvatar/LegislatorAvatar.jsx */ 88);

	var _LegislatorAvatarLegislatorAvatarJsx2 = _interopRequireDefault(_LegislatorAvatarLegislatorAvatarJsx);

	var _IconIconJsx = __webpack_require__(/*! ../Icon/Icon.jsx */ 74);

	var _IconIconJsx2 = _interopRequireDefault(_IconIconJsx);

	var _UserAvatarUserAvatarJsx = __webpack_require__(/*! ../UserAvatar/UserAvatar.jsx */ 398);

	var _UserAvatarUserAvatarJsx2 = _interopRequireDefault(_UserAvatarUserAvatarJsx);

	__webpack_require__(/*! ./Record.css */ 399);

	var Record = (function (_React$Component) {
	    function Record(props) {
	        _classCallCheck(this, Record);

	        _get(Object.getPrototypeOf(Record.prototype), "constructor", this).call(this, props);
	        this.state = {
	            showTooltip: false,
	            showFull: false
	        };
	    }

	    _inherits(Record, _React$Component);

	    _createClass(Record, [{
	        key: "_onToggleShowFull",
	        value: function _onToggleShowFull() {

	            this.setState({
	                showFull: !this.state.showFull
	            });
	        }
	    }, {
	        key: "_onToggleShowTooltip",
	        value: function _onToggleShowTooltip() {

	            this.setState({
	                showTooltip: !this.state.showTooltip
	            });
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var data = this.props.data;
	            var _state = this.state;
	            var showTooltip = _state.showTooltip;
	            var showFull = _state.showFull;

	            var opinionClasses = _classnames2["default"]({
	                "Record-opinion": true,
	                "is-for": data.opinion === "贊成",
	                "is-against": data.opinion === "反對",
	                "is-unclear": data.opinion === "不明確"
	            });

	            var bindToggleShowTooltip = this._onToggleShowTooltip.bind(this, null);
	            var bindToggleShowFull = this._onToggleShowFull.bind(this, null);

	            var tooltip = showTooltip ? _react2["default"].createElement(
	                "div",
	                { className: "Record-tooltip" },
	                _react2["default"].createElement(
	                    "div",
	                    { className: "Record-tooltipItem" },
	                    "複製連結"
	                ),
	                _react2["default"].createElement(
	                    "div",
	                    { className: "Record-tooltipItem" },
	                    "看立法院原始紀錄"
	                ),
	                _react2["default"].createElement(
	                    "div",
	                    { className: "Record-tooltipItem" },
	                    "檢舉"
	                )
	            ) : "";

	            var quoteContent = data.quote;
	            if (!showFull && data.quote.length > 140) quoteContent = data.quote.substring(0, 140);

	            var readMoreSpan = !showFull && data.quote.length > 140 ? _react2["default"].createElement(
	                "span",
	                { className: "Reocrd-readFull" },
	                " ...閱讀全部"
	            ) : "";

	            var editByItem = showFull ? _react2["default"].createElement(
	                "div",
	                { className: "Reocrd-editBy" },
	                _react2["default"].createElement(_UserAvatarUserAvatarJsx2["default"], null),
	                "由 Eddie Hung 編輯"
	            ) : "";

	            return _react2["default"].createElement(
	                "div",
	                { className: "Record" },
	                _react2["default"].createElement(
	                    "div",
	                    { className: "Record-title" },
	                    _react2["default"].createElement(_LegislatorAvatarLegislatorAvatarJsx2["default"], { data: data.name, name: true }),
	                    _react2["default"].createElement(
	                        "div",
	                        { className: opinionClasses },
	                        data.opinion
	                    )
	                ),
	                _react2["default"].createElement(
	                    "div",
	                    { className: "Record-quote",
	                        onClick: bindToggleShowFull },
	                    quoteContent,
	                    readMoreSpan
	                ),
	                _react2["default"].createElement(
	                    "div",
	                    { className: "Record-info" },
	                    "－",
	                    data.type,
	                    "，",
	                    data.date
	                ),
	                editByItem,
	                _react2["default"].createElement(
	                    "div",
	                    { className: "Record-action" },
	                    _react2["default"].createElement(
	                        "div",
	                        { className: "Record-actionItem" },
	                        _react2["default"].createElement(
	                            "span",
	                            { className: "Record-star" },
	                            _react2["default"].createElement(_IconIconJsx2["default"], { icon: "star" }),
	                            " ",
	                            data.trustVote
	                        )
	                    ),
	                    _react2["default"].createElement(
	                        "div",
	                        { className: "Record-actionItem" },
	                        _react2["default"].createElement(
	                            "span",
	                            { className: "Record-more" },
	                            _react2["default"].createElement(_IconIconJsx2["default"], { icon: "share" }),
	                            " 124"
	                        )
	                    ),
	                    _react2["default"].createElement(
	                        "div",
	                        { className: "Record-actionItem" },
	                        _react2["default"].createElement(
	                            "span",
	                            { className: "Record-more",
	                                onClick: bindToggleShowTooltip },
	                            _react2["default"].createElement(_IconIconJsx2["default"], { icon: "ellipsis-h" })
	                        ),
	                        tooltip
	                    )
	                )
	            );
	        }
	    }]);

	    return Record;
	})(_react2["default"].Component);

	exports["default"] = Record;
	module.exports = exports["default"];

/***/ },
/* 257 */
/*!**************************************************!*\
  !*** ./app/components/RecordList/RecordList.css ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = {};

/***/ },
/* 258 */
/*!**************************************************************!*\
  !*** ./app/components/LegislatorAvatar/LegislatorAvatar.css ***!
  \**************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = {};

/***/ },
/* 259 */
/*!*********************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar ^\.\/.*\.png$ ***!
  \*********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./丁守中.png": 278,
		"./何欣純.png": 279,
		"./劉建國.png": 280,
		"./劉櫂豪.png": 281,
		"./吳宜臻.png": 282,
		"./吳秉叡.png": 283,
		"./吳育仁.png": 284,
		"./吳育昇.png": 285,
		"./呂學樟.png": 286,
		"./呂玉玲.png": 287,
		"./周倪安.png": 288,
		"./姚文智.png": 289,
		"./孔文吉.png": 290,
		"./孫大千.png": 291,
		"./尤美女.png": 292,
		"./廖國棟.png": 293,
		"./廖正井.png": 294,
		"./張嘉郡.png": 295,
		"./張慶忠.png": 296,
		"./徐少萍.png": 297,
		"./徐志榮.png": 298,
		"./徐欣瑩.png": 299,
		"./徐耀昌.png": 300,
		"./曾巨威.png": 301,
		"./李俊俋.png": 302,
		"./李慶華.png": 303,
		"./李應元.png": 304,
		"./李昆澤.png": 305,
		"./李桐豪.png": 306,
		"./李貴敏.png": 307,
		"./李鴻鈞.png": 308,
		"./林佳龍.png": 309,
		"./林國正.png": 310,
		"./林岱樺.png": 311,
		"./林德福.png": 312,
		"./林明溱.png": 313,
		"./林淑芬.png": 314,
		"./林滄敏.png": 315,
		"./林郁方.png": 316,
		"./林鴻池.png": 317,
		"./柯建銘.png": 318,
		"./楊應雄.png": 319,
		"./楊曜.png": 320,
		"./楊玉欣.png": 321,
		"./楊瓊瓔.png": 322,
		"./楊麗環.png": 323,
		"./段宜康.png": 324,
		"./江啟臣.png": 325,
		"./江惠貞.png": 326,
		"./洪秀柱.png": 327,
		"./潘孟安.png": 328,
		"./潘維剛.png": 329,
		"./王廷升.png": 330,
		"./王惠美.png": 331,
		"./王育敏.png": 332,
		"./王進士.png": 333,
		"./王金平.png": 334,
		"./田秋堇.png": 335,
		"./盧嘉辰.png": 336,
		"./盧秀燕.png": 337,
		"./管碧玲.png": 338,
		"./簡東明.png": 339,
		"./紀國棟.png": 340,
		"./羅明才.png": 341,
		"./羅淑蕾.png": 342,
		"./翁重鈞.png": 343,
		"./莊瑞雄.png": 344,
		"./葉宜津.png": 345,
		"./葉津鈴.png": 346,
		"./蔡其昌.png": 347,
		"./蔡正元.png": 348,
		"./蔡煌瑯.png": 349,
		"./蔡錦隆.png": 350,
		"./蔣乃辛.png": 351,
		"./蕭美琴.png": 352,
		"./薛凌.png": 353,
		"./蘇清泉.png": 354,
		"./蘇震清.png": 355,
		"./許忠信.png": 356,
		"./許智傑.png": 357,
		"./許淑華.png": 358,
		"./許添財.png": 359,
		"./詹凱臣.png": 360,
		"./謝國樑.png": 361,
		"./費鴻泰.png": 362,
		"./賴士葆.png": 363,
		"./賴振昌.png": 364,
		"./趙天麟.png": 365,
		"./邱志偉.png": 366,
		"./邱文彥.png": 367,
		"./邱議瑩.png": 368,
		"./鄭天財.png": 369,
		"./鄭汝芬.png": 370,
		"./鄭麗君.png": 371,
		"./陳亭妃.png": 372,
		"./陳其邁.png": 373,
		"./陳唐山.png": 374,
		"./陳學聖.png": 375,
		"./陳怡潔.png": 376,
		"./陳明文.png": 377,
		"./陳根德.png": 378,
		"./陳歐珀.png": 379,
		"./陳淑慧.png": 380,
		"./陳碧涵.png": 381,
		"./陳節如.png": 382,
		"./陳素月.png": 383,
		"./陳超明.png": 384,
		"./陳鎮湘.png": 385,
		"./陳雪生.png": 386,
		"./顏寬恒.png": 387,
		"./馬文君.png": 388,
		"./高志鵬.png": 389,
		"./高金素梅.png": 390,
		"./魏明谷.png": 391,
		"./黃偉哲.png": 392,
		"./黃國書.png": 393,
		"./黃志雄.png": 394,
		"./黃文玲.png": 395,
		"./黃昭順.png": 396
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 259;


/***/ },
/* 260 */
/*!************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/default.jpg ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "adff2800ecfceb1a8512e66dbfcba22d.jpg"

/***/ },
/* 261 */
/*!**************************************************************!*\
  !*** ./app/components/CompareMultiCard/CompareMultiCard.css ***!
  \**************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = {};

/***/ },
/* 262 */
/*!*************************************************************!*\
  !*** ./app/components/CompareMultiCard/CompareMultiCard.js ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = {
		"candidateA": "賴士葆",
		"candidateB": "苗博雅",
		"candidateC": "阮昭雄",
		"candidateD": "余宛如",
		"issues": [{ "title": "公司獲利盈餘重新分配",
			"candidateA": "for",
			"candidateB": "against",
			"candidateC": "for",
			"candidateD": "against"
		}, { "title": "增加罰則處罰企業未分配盈餘",
			"candidateA": "against",
			"candidateB": "none",
			"candidateC": "for",
			"candidateD": "unclear"
		}, { "title": "每周40工時及加班上限",
			"candidateA": "against",
			"candidateB": "for",
			"candidateC": "for",
			"candidateD": "for"
		}, { "title": "勞工債權清償順位優於銀行抵押權",
			"candidateA": "for",
			"candidateB": "none",
			"candidateC": "for",
			"candidateD": "unclear"
		}, { "title": "家事移工應納入勞基法規範",
			"candidateA": "unclear",
			"candidateB": "against",
			"candidateC": "for",
			"candidateD": "none"
		}]
	};

/***/ },
/* 263 */
/*!********************************************************!*\
  !*** ./app/components/CompareMultiCard/images/賴士葆.png ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "ad47f7c2986b340f47198e2d7e6616e8.png"

/***/ },
/* 264 */
/*!********************************************************!*\
  !*** ./app/components/CompareMultiCard/images/苗博雅.png ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "ee8cfab9bf21dde03752cb3053c3eb12.png"

/***/ },
/* 265 */
/*!********************************************************!*\
  !*** ./app/components/CompareMultiCard/images/阮昭雄.png ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "f9018778a5b58bdbee4971d2f1f86b25.png"

/***/ },
/* 266 */
/*!********************************************************!*\
  !*** ./app/components/CompareMultiCard/images/余宛如.png ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "b3f84ce153c46c9c1895595b5b190e70.png"

/***/ },
/* 267 */
/*!****************************************!*\
  !*** ./app/components/Input/Input.css ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = {};

/***/ },
/* 268 */
/*!******************************************************************!*\
  !*** ./app/components/OverviewWallAvatar/OverviewWallAvatar.jsx ***!
  \******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(/*! react */ 1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(/*! react-router */ 28);

	var _LegislatorAvatarLegislatorAvatarJsx = __webpack_require__(/*! ../LegislatorAvatar/LegislatorAvatar.jsx */ 88);

	var _LegislatorAvatarLegislatorAvatarJsx2 = _interopRequireDefault(_LegislatorAvatarLegislatorAvatarJsx);

	__webpack_require__(/*! ./OverviewWallAvatar.css */ 400);

	var OverviewWallAvatar = (function (_React$Component) {
	    function OverviewWallAvatar() {
	        _classCallCheck(this, OverviewWallAvatar);

	        if (_React$Component != null) {
	            _React$Component.apply(this, arguments);
	        }
	    }

	    _inherits(OverviewWallAvatar, _React$Component);

	    _createClass(OverviewWallAvatar, [{
	        key: "render",
	        value: function render() {
	            var data = this.props.data;

	            var partyClass = "OverviewWallAvatar-avatar is-" + data.party_eng;

	            var positionCount = data.positionCount || 0;
	            var positionCountItem = _react2["default"].createElement(
	                "div",
	                { className: "OverviewWallAvatar-opinionCount" },
	                positionCount
	            );

	            return _react2["default"].createElement(
	                _reactRouter.Link,
	                { className: "OverviewWallAvatar", to: "personIssue", params: { issue: "food-safety" } },
	                _react2["default"].createElement(
	                    "div",
	                    { className: "OverviewWallAvatar-hoverInfo" },
	                    "有 ",
	                    positionCount,
	                    " 個表態紀錄"
	                ),
	                _react2["default"].createElement(
	                    "div",
	                    { className: partyClass },
	                    _react2["default"].createElement(_LegislatorAvatarLegislatorAvatarJsx2["default"], { data: data.name, plain: true, name: true }),
	                    positionCountItem
	                )
	            );
	        }
	    }]);

	    return OverviewWallAvatar;
	})(_react2["default"].Component);

	exports["default"] = OverviewWallAvatar;
	module.exports = exports["default"];

/***/ },
/* 269 */
/*!******************************************************!*\
  !*** ./app/components/OpinionGroup/OpinionGroup.css ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = {};

/***/ },
/* 270 */
/*!***************************************************!*\
  !*** ./app/components/CompareCard/images/余宛如.png ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "b3f84ce153c46c9c1895595b5b190e70.png"

/***/ },
/* 271 */
/*!***************************************************!*\
  !*** ./app/components/CompareCard/images/苗博雅.png ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "ee8cfab9bf21dde03752cb3053c3eb12.png"

/***/ },
/* 272 */
/*!***************************************************!*\
  !*** ./app/components/CompareCard/images/賴士葆.png ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "ad47f7c2986b340f47198e2d7e6616e8.png"

/***/ },
/* 273 */
/*!***************************************************!*\
  !*** ./app/components/CompareCard/images/阮昭雄.png ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "f9018778a5b58bdbee4971d2f1f86b25.png"

/***/ },
/* 274 */
/*!*******************************************************!*\
  !*** ./app/components/CandidatePicker/images/余宛如.png ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "b3f84ce153c46c9c1895595b5b190e70.png"

/***/ },
/* 275 */
/*!*******************************************************!*\
  !*** ./app/components/CandidatePicker/images/苗博雅.png ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "ee8cfab9bf21dde03752cb3053c3eb12.png"

/***/ },
/* 276 */
/*!*******************************************************!*\
  !*** ./app/components/CandidatePicker/images/賴士葆.png ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "ad47f7c2986b340f47198e2d7e6616e8.png"

/***/ },
/* 277 */
/*!*******************************************************!*\
  !*** ./app/components/CandidatePicker/images/阮昭雄.png ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "f9018778a5b58bdbee4971d2f1f86b25.png"

/***/ },
/* 278 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/丁守中.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "53d832dde2584a6b68b859595df491e1.png"

/***/ },
/* 279 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/何欣純.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "d25f9aa20400dc1521818b436d449684.png"

/***/ },
/* 280 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/劉建國.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "60c1fb1461010c9d349fd59d7f8d089e.png"

/***/ },
/* 281 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/劉櫂豪.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "ab91c1e460c2df6d6e724eea36f027d6.png"

/***/ },
/* 282 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/吳宜臻.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "35872dc6c469b4890d5244c6e9116c58.png"

/***/ },
/* 283 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/吳秉叡.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "cbe50421960b6c730774e8e486ad47f4.png"

/***/ },
/* 284 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/吳育仁.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "b050342cd87246dc4e69f3233b04658b.png"

/***/ },
/* 285 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/吳育昇.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "87db7c524b3d7971b1b4f3258cf8b7e1.png"

/***/ },
/* 286 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/呂學樟.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "5b1fae3481ae71f325c78f8e4e8a472d.png"

/***/ },
/* 287 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/呂玉玲.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "d1d162bd9ce385864294b29443252e25.png"

/***/ },
/* 288 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/周倪安.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "669090029e21d33ff94ec8d1b6c785c4.png"

/***/ },
/* 289 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/姚文智.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "6e8cc6691a75f8da8388be07d5556766.png"

/***/ },
/* 290 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/孔文吉.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "88a2c7a995f631b99cd64d995dfab78f.png"

/***/ },
/* 291 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/孫大千.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fa33f3abf5850468242d4eaf320e8974.png"

/***/ },
/* 292 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/尤美女.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "5039b452548c6bb49a25369e707a3ffa.png"

/***/ },
/* 293 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/廖國棟.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "d5a34927f07363524db91114a5193fed.png"

/***/ },
/* 294 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/廖正井.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "a5585a36aa92f37670796dae7d66e4d7.png"

/***/ },
/* 295 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/張嘉郡.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "f443dfef7d959315b5de18c624cbd487.png"

/***/ },
/* 296 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/張慶忠.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "00ebc516fe36e29da4554dea515ea7e3.png"

/***/ },
/* 297 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/徐少萍.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "0143df208291106b551ecd2fee8eaada.png"

/***/ },
/* 298 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/徐志榮.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "c670357ffcf6e12ba6d94663503881d9.png"

/***/ },
/* 299 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/徐欣瑩.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "11adddc659edd65de5cb9cdb231d4f3f.png"

/***/ },
/* 300 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/徐耀昌.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "608560fc2f5747c339100d06af96c0e1.png"

/***/ },
/* 301 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/曾巨威.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "4f428aadd27447b49b22d3913d8314db.png"

/***/ },
/* 302 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/李俊俋.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "6ba110d2d09df1f2614d5f99915409aa.png"

/***/ },
/* 303 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/李慶華.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "29299b9cfe831de240f66d404ab9ca01.png"

/***/ },
/* 304 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/李應元.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "353da4ea294e23ddfca92b5409815659.png"

/***/ },
/* 305 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/李昆澤.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "e72b1192465f398f7b78cf41a8e57600.png"

/***/ },
/* 306 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/李桐豪.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "f7723a63d641062d912c5e917a077b0f.png"

/***/ },
/* 307 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/李貴敏.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fdc93992371587dd5296b161a7f1533e.png"

/***/ },
/* 308 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/李鴻鈞.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "a0bf6aefcb506d2c5f44f188b463055d.png"

/***/ },
/* 309 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/林佳龍.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "3802ce4b86543f8ba8a6e12576261a11.png"

/***/ },
/* 310 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/林國正.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "7e939ae577d32377730975e6a6b13957.png"

/***/ },
/* 311 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/林岱樺.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "2778f8da3bd9ff99f97fbbcd00ffcb4c.png"

/***/ },
/* 312 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/林德福.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "ee4c030d95297f4acac4f43a2cf30e7c.png"

/***/ },
/* 313 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/林明溱.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "1026936de3d79cad10375db2fb224f57.png"

/***/ },
/* 314 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/林淑芬.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "6753fa256ebb8b9f79a92b864dc07c9c.png"

/***/ },
/* 315 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/林滄敏.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "49a8ecc0ea3e270bd86fb9abcbbcc101.png"

/***/ },
/* 316 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/林郁方.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "0985fc424b3c867dc78ee4ad4441972f.png"

/***/ },
/* 317 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/林鴻池.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "646e19774a68cf1c682c802843498484.png"

/***/ },
/* 318 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/柯建銘.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "3d6b6b5c383bcb149fce97f6ade761e9.png"

/***/ },
/* 319 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/楊應雄.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "33296efd6371b3d5fe3a46931aaae4e9.png"

/***/ },
/* 320 */
/*!**************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/楊曜.png ***!
  \**************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "eeb940a6bdd877a5847665f55e324a27.png"

/***/ },
/* 321 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/楊玉欣.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "ed3137aad81a3d0e3f69d8e190e06a93.png"

/***/ },
/* 322 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/楊瓊瓔.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "bd7df856396a0fde2814d8f95af92787.png"

/***/ },
/* 323 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/楊麗環.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "1964e8931f52680153b12400f28ddd50.png"

/***/ },
/* 324 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/段宜康.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "64adcf1e1c9f73d8cc2327edb74770b9.png"

/***/ },
/* 325 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/江啟臣.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "c2b6e97bd67a34d4eec98b72c1e78c30.png"

/***/ },
/* 326 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/江惠貞.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "3b2b1e895fa60ba3b8e357b03be70940.png"

/***/ },
/* 327 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/洪秀柱.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "814629edb623c2ae8abd709a5f4ba364.png"

/***/ },
/* 328 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/潘孟安.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "63d508865f66ad4f66cb3fcffde109cf.png"

/***/ },
/* 329 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/潘維剛.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "912b40303bc4ad99573993c35dd87968.png"

/***/ },
/* 330 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/王廷升.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "48becbb6c8363b5d06b5378da237c966.png"

/***/ },
/* 331 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/王惠美.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "7ea00e85fdae44eb179698d88fd17ab4.png"

/***/ },
/* 332 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/王育敏.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "9a725d40fa466c6a6feb35e1c095a2ad.png"

/***/ },
/* 333 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/王進士.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "7060df98746658a0007b52914293164e.png"

/***/ },
/* 334 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/王金平.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "0b3e8d909b3ccc8387f3ca3cda91a2f5.png"

/***/ },
/* 335 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/田秋堇.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "d47a2295bd4e9f0aa2f384c5cff92de1.png"

/***/ },
/* 336 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/盧嘉辰.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "0a7f7d550fbba083a1a595e80a0c019d.png"

/***/ },
/* 337 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/盧秀燕.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "5959def6cfea6573f06f44e30221938c.png"

/***/ },
/* 338 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/管碧玲.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "85f2b66fb5e454a95d78d49a0861f9d5.png"

/***/ },
/* 339 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/簡東明.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "4a9f1fe9c32dfe821b651ef682b6fd4f.png"

/***/ },
/* 340 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/紀國棟.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "6c88b3aa5a15d6b6e90e33eb6a5753fe.png"

/***/ },
/* 341 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/羅明才.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "61338f718a5cacb3243484b34315c707.png"

/***/ },
/* 342 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/羅淑蕾.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "6f56230d2d04544709318dec35af247b.png"

/***/ },
/* 343 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/翁重鈞.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "233a76bd5645035247b8d8b9e17020a0.png"

/***/ },
/* 344 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/莊瑞雄.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "c1cb8757504c2374d880209cb1e4bbaf.png"

/***/ },
/* 345 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/葉宜津.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "f718d850490d50321f819a6da4a452e2.png"

/***/ },
/* 346 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/葉津鈴.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "d22085e69e7a57168c5aa7b47cd24db3.png"

/***/ },
/* 347 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/蔡其昌.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "52f6f68756a56b57e23814966394eb6d.png"

/***/ },
/* 348 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/蔡正元.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "0d2fcd1e1b53a72a8c97e84f7fd96644.png"

/***/ },
/* 349 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/蔡煌瑯.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "bfa408f21914edf437b3cfd6d837a879.png"

/***/ },
/* 350 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/蔡錦隆.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "796bd36d1333cfb25e855d481656002b.png"

/***/ },
/* 351 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/蔣乃辛.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "a8ef44704d92580eeb39cfd603a34d01.png"

/***/ },
/* 352 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/蕭美琴.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "e254151a98a3a800f3d0ac01b2bf38ed.png"

/***/ },
/* 353 */
/*!**************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/薛凌.png ***!
  \**************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "94c15053133f33e597fc4e10dc283513.png"

/***/ },
/* 354 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/蘇清泉.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "717e67ab577a1775ce9ddf4a5ff060f6.png"

/***/ },
/* 355 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/蘇震清.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "0ef5594a1bccf4b16df7fb8e68655f8b.png"

/***/ },
/* 356 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/許忠信.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "6e95d823f9d673cd7f034209d74cb234.png"

/***/ },
/* 357 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/許智傑.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "c4407a23e06fd9463a6056c0a9c6577e.png"

/***/ },
/* 358 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/許淑華.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "7b015d9c85723f95d2726f8ac9bb2829.png"

/***/ },
/* 359 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/許添財.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "eeba0ccc9a3c7dc5d6b92f7478d99df7.png"

/***/ },
/* 360 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/詹凱臣.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "3cca8512a8582c0ab4a9a7b9b6fe81a2.png"

/***/ },
/* 361 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/謝國樑.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "6691f01e092eef857a10c4fce8a71f64.png"

/***/ },
/* 362 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/費鴻泰.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "95a37b322b646d8323457fcb1d3fd6ee.png"

/***/ },
/* 363 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/賴士葆.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "ad47f7c2986b340f47198e2d7e6616e8.png"

/***/ },
/* 364 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/賴振昌.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fdb564bc843c8844ad8e3476fa968c7f.png"

/***/ },
/* 365 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/趙天麟.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "659d62e81925fd88ae920db7f6beabd2.png"

/***/ },
/* 366 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/邱志偉.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "4b13eeb894061935b4396375351206c4.png"

/***/ },
/* 367 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/邱文彥.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "92e0f78be7cb0e384580bffb8d837bd5.png"

/***/ },
/* 368 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/邱議瑩.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "076d254b4b94793b3d636ccbea6711d9.png"

/***/ },
/* 369 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/鄭天財.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "513f57ccc7a29e2beaf54cdc38c8ad0c.png"

/***/ },
/* 370 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/鄭汝芬.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "75979106f892bfbe57b1415bc8c15fe9.png"

/***/ },
/* 371 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/鄭麗君.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "3176aa505cb1a78cda5909e7c85157ac.png"

/***/ },
/* 372 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/陳亭妃.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "71a1ee49d03deae203fbc6ae1e22eba0.png"

/***/ },
/* 373 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/陳其邁.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "128c0a7483e8daa47f693d9326a090de.png"

/***/ },
/* 374 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/陳唐山.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "31b1e07b4281906a6e2e05c0eb5765fd.png"

/***/ },
/* 375 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/陳學聖.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "0d04270529df1e19bbf181b116a3c9e8.png"

/***/ },
/* 376 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/陳怡潔.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "9df443ce4f4d8a0abc4dea357fd71791.png"

/***/ },
/* 377 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/陳明文.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "6f9f4cea49452f446458e5a1b86f437c.png"

/***/ },
/* 378 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/陳根德.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "e43116ce1d367346429b1d0bff2ddd15.png"

/***/ },
/* 379 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/陳歐珀.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "e0de59d3d88ef4fa390c7ad15d184736.png"

/***/ },
/* 380 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/陳淑慧.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "9acf2e60bfcc6c1823457b4fdff4a1ce.png"

/***/ },
/* 381 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/陳碧涵.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "60fc483100a0cba64a2e61f38828c89b.png"

/***/ },
/* 382 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/陳節如.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "78c247f8aaf8bb82a23b1aad1dc9941f.png"

/***/ },
/* 383 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/陳素月.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "74829f3ecf63987027c6ff874734a628.png"

/***/ },
/* 384 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/陳超明.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "acdae1531ca424f2314775a13b5b5953.png"

/***/ },
/* 385 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/陳鎮湘.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "6613fa3490df21163983044cc7f100c4.png"

/***/ },
/* 386 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/陳雪生.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "4a09a511d013e5322614064721cb2d14.png"

/***/ },
/* 387 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/顏寬恒.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "79d35d2a704c643b2e0295da1b7a86b0.png"

/***/ },
/* 388 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/馬文君.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "0973f8c6da915adc2b376eff97b64265.png"

/***/ },
/* 389 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/高志鵬.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "77821e0d7d1cd603e5e1e9dc1fc3b679.png"

/***/ },
/* 390 */
/*!****************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/高金素梅.png ***!
  \****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fb431093fb74b2eae7c44e1975e5284d.png"

/***/ },
/* 391 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/魏明谷.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "ab79f6582f091847cf56fc4b1b65e81c.png"

/***/ },
/* 392 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/黃偉哲.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "b88fcc6e1bbe88f6f69983d3e5fc6ad0.png"

/***/ },
/* 393 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/黃國書.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "ae2563a45bc3ef4be1df9b9d9a4c800b.png"

/***/ },
/* 394 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/黃志雄.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "d92b46d47c09cd04474199e4c12245b6.png"

/***/ },
/* 395 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/黃文玲.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "ecd9a0029b62a297a32a1d1a94f6254f.png"

/***/ },
/* 396 */
/*!***************************************************************!*\
  !*** ./app/components/LegislatorAvatar/images/avatar/黃昭順.png ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "6bbc4ccbda3220df5798bed8de6ef944.png"

/***/ },
/* 397 */
/*!*******************************************************!*\
  !*** ./~/react-router/lib/getWindowScrollPosition.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var invariant = __webpack_require__(/*! react/lib/invariant */ 106);
	var canUseDOM = __webpack_require__(/*! react/lib/ExecutionEnvironment */ 107).canUseDOM;

	/**
	 * Returns the current scroll position of the window as { x, y }.
	 */
	function getWindowScrollPosition() {
	  invariant(canUseDOM, 'Cannot get current scroll position without a DOM');

	  return {
	    x: window.pageXOffset || document.documentElement.scrollLeft,
	    y: window.pageYOffset || document.documentElement.scrollTop
	  };
	}

	module.exports = getWindowScrollPosition;

/***/ },
/* 398 */
/*!**************************************************!*\
  !*** ./app/components/UserAvatar/UserAvatar.jsx ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(/*! react */ 1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(/*! react-router */ 28);

	__webpack_require__(/*! ./UserAvatar.css */ 403);

	var UserAvatar = (function (_React$Component) {
	  function UserAvatar() {
	    _classCallCheck(this, UserAvatar);

	    if (_React$Component != null) {
	      _React$Component.apply(this, arguments);
	    }
	  }

	  _inherits(UserAvatar, _React$Component);

	  _createClass(UserAvatar, [{
	    key: "render",
	    value: function render() {

	      var imgURL = __webpack_require__(/*! ./images/user.jpg */ 404);
	      return _react2["default"].createElement(
	        "div",
	        { className: "UserAvatar" },
	        _react2["default"].createElement("img", { className: "UserAvatar-img",
	          src: imgURL })
	      );
	    }
	  }]);

	  return UserAvatar;
	})(_react2["default"].Component);

	exports["default"] = UserAvatar;
	module.exports = exports["default"];

/***/ },
/* 399 */
/*!******************************************!*\
  !*** ./app/components/Record/Record.css ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = {};

/***/ },
/* 400 */
/*!******************************************************************!*\
  !*** ./app/components/OverviewWallAvatar/OverviewWallAvatar.css ***!
  \******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = {};

/***/ },
/* 401 */
/*!*************************************************!*\
  !*** ./~/react-router/~/object-assign/index.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function ToObject(val) {
		if (val == null) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	module.exports = Object.assign || function (target, source) {
		var from;
		var keys;
		var to = ToObject(target);

		for (var s = 1; s < arguments.length; s++) {
			from = arguments[s];
			keys = Object.keys(Object(from));

			for (var i = 0; i < keys.length; i++) {
				to[keys[i]] = from[keys[i]];
			}
		}

		return to;
	};


/***/ },
/* 402 */
/*!**************************************!*\
  !*** ./~/react-router/~/qs/index.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./lib/ */ 405);


/***/ },
/* 403 */
/*!**************************************************!*\
  !*** ./app/components/UserAvatar/UserAvatar.css ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = {};

/***/ },
/* 404 */
/*!***************************************************!*\
  !*** ./app/components/UserAvatar/images/user.jpg ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "3be5b4bc7b1bfd42ebc3129db4669421.jpg"

/***/ },
/* 405 */
/*!******************************************!*\
  !*** ./~/react-router/~/qs/lib/index.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	// Load modules

	var Stringify = __webpack_require__(/*! ./stringify */ 406);
	var Parse = __webpack_require__(/*! ./parse */ 407);


	// Declare internals

	var internals = {};


	module.exports = {
	    stringify: Stringify,
	    parse: Parse
	};


/***/ },
/* 406 */
/*!**********************************************!*\
  !*** ./~/react-router/~/qs/lib/stringify.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	// Load modules

	var Utils = __webpack_require__(/*! ./utils */ 408);


	// Declare internals

	var internals = {
	    delimiter: '&',
	    arrayPrefixGenerators: {
	        brackets: function (prefix, key) {
	            return prefix + '[]';
	        },
	        indices: function (prefix, key) {
	            return prefix + '[' + key + ']';
	        },
	        repeat: function (prefix, key) {
	            return prefix;
	        }
	    }
	};


	internals.stringify = function (obj, prefix, generateArrayPrefix) {

	    if (Utils.isBuffer(obj)) {
	        obj = obj.toString();
	    }
	    else if (obj instanceof Date) {
	        obj = obj.toISOString();
	    }
	    else if (obj === null) {
	        obj = '';
	    }

	    if (typeof obj === 'string' ||
	        typeof obj === 'number' ||
	        typeof obj === 'boolean') {

	        return [encodeURIComponent(prefix) + '=' + encodeURIComponent(obj)];
	    }

	    var values = [];

	    if (typeof obj === 'undefined') {
	        return values;
	    }

	    var objKeys = Object.keys(obj);
	    for (var i = 0, il = objKeys.length; i < il; ++i) {
	        var key = objKeys[i];
	        if (Array.isArray(obj)) {
	            values = values.concat(internals.stringify(obj[key], generateArrayPrefix(prefix, key), generateArrayPrefix));
	        }
	        else {
	            values = values.concat(internals.stringify(obj[key], prefix + '[' + key + ']', generateArrayPrefix));
	        }
	    }

	    return values;
	};


	module.exports = function (obj, options) {

	    options = options || {};
	    var delimiter = typeof options.delimiter === 'undefined' ? internals.delimiter : options.delimiter;

	    var keys = [];

	    if (typeof obj !== 'object' ||
	        obj === null) {

	        return '';
	    }

	    var arrayFormat;
	    if (options.arrayFormat in internals.arrayPrefixGenerators) {
	        arrayFormat = options.arrayFormat;
	    }
	    else if ('indices' in options) {
	        arrayFormat = options.indices ? 'indices' : 'repeat';
	    }
	    else {
	        arrayFormat = 'indices';
	    }

	    var generateArrayPrefix = internals.arrayPrefixGenerators[arrayFormat];

	    var objKeys = Object.keys(obj);
	    for (var i = 0, il = objKeys.length; i < il; ++i) {
	        var key = objKeys[i];
	        keys = keys.concat(internals.stringify(obj[key], key, generateArrayPrefix));
	    }

	    return keys.join(delimiter);
	};


/***/ },
/* 407 */
/*!******************************************!*\
  !*** ./~/react-router/~/qs/lib/parse.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	// Load modules

	var Utils = __webpack_require__(/*! ./utils */ 408);


	// Declare internals

	var internals = {
	    delimiter: '&',
	    depth: 5,
	    arrayLimit: 20,
	    parameterLimit: 1000
	};


	internals.parseValues = function (str, options) {

	    var obj = {};
	    var parts = str.split(options.delimiter, options.parameterLimit === Infinity ? undefined : options.parameterLimit);

	    for (var i = 0, il = parts.length; i < il; ++i) {
	        var part = parts[i];
	        var pos = part.indexOf(']=') === -1 ? part.indexOf('=') : part.indexOf(']=') + 1;

	        if (pos === -1) {
	            obj[Utils.decode(part)] = '';
	        }
	        else {
	            var key = Utils.decode(part.slice(0, pos));
	            var val = Utils.decode(part.slice(pos + 1));

	            if (Object.prototype.hasOwnProperty(key)) {
	                continue;
	            }

	            if (!obj.hasOwnProperty(key)) {
	                obj[key] = val;
	            }
	            else {
	                obj[key] = [].concat(obj[key]).concat(val);
	            }
	        }
	    }

	    return obj;
	};


	internals.parseObject = function (chain, val, options) {

	    if (!chain.length) {
	        return val;
	    }

	    var root = chain.shift();

	    var obj = {};
	    if (root === '[]') {
	        obj = [];
	        obj = obj.concat(internals.parseObject(chain, val, options));
	    }
	    else {
	        var cleanRoot = root[0] === '[' && root[root.length - 1] === ']' ? root.slice(1, root.length - 1) : root;
	        var index = parseInt(cleanRoot, 10);
	        var indexString = '' + index;
	        if (!isNaN(index) &&
	            root !== cleanRoot &&
	            indexString === cleanRoot &&
	            index >= 0 &&
	            index <= options.arrayLimit) {

	            obj = [];
	            obj[index] = internals.parseObject(chain, val, options);
	        }
	        else {
	            obj[cleanRoot] = internals.parseObject(chain, val, options);
	        }
	    }

	    return obj;
	};


	internals.parseKeys = function (key, val, options) {

	    if (!key) {
	        return;
	    }

	    // The regex chunks

	    var parent = /^([^\[\]]*)/;
	    var child = /(\[[^\[\]]*\])/g;

	    // Get the parent

	    var segment = parent.exec(key);

	    // Don't allow them to overwrite object prototype properties

	    if (Object.prototype.hasOwnProperty(segment[1])) {
	        return;
	    }

	    // Stash the parent if it exists

	    var keys = [];
	    if (segment[1]) {
	        keys.push(segment[1]);
	    }

	    // Loop through children appending to the array until we hit depth

	    var i = 0;
	    while ((segment = child.exec(key)) !== null && i < options.depth) {

	        ++i;
	        if (!Object.prototype.hasOwnProperty(segment[1].replace(/\[|\]/g, ''))) {
	            keys.push(segment[1]);
	        }
	    }

	    // If there's a remainder, just add whatever is left

	    if (segment) {
	        keys.push('[' + key.slice(segment.index) + ']');
	    }

	    return internals.parseObject(keys, val, options);
	};


	module.exports = function (str, options) {

	    if (str === '' ||
	        str === null ||
	        typeof str === 'undefined') {

	        return {};
	    }

	    options = options || {};
	    options.delimiter = typeof options.delimiter === 'string' || Utils.isRegExp(options.delimiter) ? options.delimiter : internals.delimiter;
	    options.depth = typeof options.depth === 'number' ? options.depth : internals.depth;
	    options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : internals.arrayLimit;
	    options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : internals.parameterLimit;

	    var tempObj = typeof str === 'string' ? internals.parseValues(str, options) : str;
	    var obj = {};

	    // Iterate over the keys and setup the new object

	    var keys = Object.keys(tempObj);
	    for (var i = 0, il = keys.length; i < il; ++i) {
	        var key = keys[i];
	        var newObj = internals.parseKeys(key, tempObj[key], options);
	        obj = Utils.merge(obj, newObj);
	    }

	    return Utils.compact(obj);
	};


/***/ },
/* 408 */
/*!******************************************!*\
  !*** ./~/react-router/~/qs/lib/utils.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	// Load modules


	// Declare internals

	var internals = {};


	exports.arrayToObject = function (source) {

	    var obj = {};
	    for (var i = 0, il = source.length; i < il; ++i) {
	        if (typeof source[i] !== 'undefined') {

	            obj[i] = source[i];
	        }
	    }

	    return obj;
	};


	exports.merge = function (target, source) {

	    if (!source) {
	        return target;
	    }

	    if (typeof source !== 'object') {
	        if (Array.isArray(target)) {
	            target.push(source);
	        }
	        else {
	            target[source] = true;
	        }

	        return target;
	    }

	    if (typeof target !== 'object') {
	        target = [target].concat(source);
	        return target;
	    }

	    if (Array.isArray(target) &&
	        !Array.isArray(source)) {

	        target = exports.arrayToObject(target);
	    }

	    var keys = Object.keys(source);
	    for (var k = 0, kl = keys.length; k < kl; ++k) {
	        var key = keys[k];
	        var value = source[key];

	        if (!target[key]) {
	            target[key] = value;
	        }
	        else {
	            target[key] = exports.merge(target[key], value);
	        }
	    }

	    return target;
	};


	exports.decode = function (str) {

	    try {
	        return decodeURIComponent(str.replace(/\+/g, ' '));
	    } catch (e) {
	        return str;
	    }
	};


	exports.compact = function (obj, refs) {

	    if (typeof obj !== 'object' ||
	        obj === null) {

	        return obj;
	    }

	    refs = refs || [];
	    var lookup = refs.indexOf(obj);
	    if (lookup !== -1) {
	        return refs[lookup];
	    }

	    refs.push(obj);

	    if (Array.isArray(obj)) {
	        var compacted = [];

	        for (var i = 0, il = obj.length; i < il; ++i) {
	            if (typeof obj[i] !== 'undefined') {
	                compacted.push(obj[i]);
	            }
	        }

	        return compacted;
	    }

	    var keys = Object.keys(obj);
	    for (i = 0, il = keys.length; i < il; ++i) {
	        var key = keys[i];
	        obj[key] = exports.compact(obj[key], refs);
	    }

	    return obj;
	};


	exports.isRegExp = function (obj) {
	    return Object.prototype.toString.call(obj) === '[object RegExp]';
	};


	exports.isBuffer = function (obj) {

	    if (obj === null ||
	        typeof obj === 'undefined') {

	        return false;
	    }

	    return !!(obj.constructor &&
	        obj.constructor.isBuffer &&
	        obj.constructor.isBuffer(obj));
	};


/***/ }
/******/ ]);