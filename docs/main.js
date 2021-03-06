/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/config.js":
/*!**********************!*\
  !*** ./js/config.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var OMDB_API_KEY = {
  apiKey: 'c877aaf'
};
/* harmony default export */ __webpack_exports__["default"] = (OMDB_API_KEY);

/***/ }),

/***/ "./js/l34.js":
/*!*******************!*\
  !*** ./js/l34.js ***!
  \*******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./js/config.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var apiKey = _config__WEBPACK_IMPORTED_MODULE_0__["default"].apiKey;
var searchInput = document.querySelector('#input-search');
var searchBtn = document.querySelector('#submit-btn');
var output = document.querySelector('#output-container');
var pagination = document.querySelector('#pagination');
var prevBtnContainer = document.querySelector('#prev-btn');
var nextBtnContainer = document.querySelector('#next-btn');
searchBtn.addEventListener('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
  var url, response, data, renderItem, showSearchResult, createPagination, renderClickedItem;
  return regeneratorRuntime.wrap(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          renderClickedItem = function _renderClickedItem(item) {
            if (item.Poster === 'N/A') {
              item.Poster = './img/no-poster-available.png';
            }

            var result = '';
            result += "<div class=\"output-section__item-clicked\">\n              <img class=\"output-section__item-clicked-poster\" src=\"".concat(item.Poster, "\" alt=\"").concat(item.Title, "\"><div class=\"output-section__item-clicked-details-container\"><p class=\"output-section__item-clicked-title\">").concat(item.Title, "</p><p class=\"output-section__item-clicked-year\">").concat(item.Year, "</p><p class=\"output-section__item-clicked-coutry\">").concat(item.Country, "</p><p class=\"output-section__item-clicked-director\">").concat(item.Director, "</p><p class=\"output-section__item-clicked-runtime\">").concat(item.Runtime, "</p><p class=\"output-section__item-clicked-actors\">").concat(item.Actors, "</p><p class=\"output-section__item-clicked-plot\">").concat(item.Plot, "</p></div></div>");
            output.innerHTML = result;
            pagination.innerHTML = '';
            prevBtnContainer.innerHTML = '';
            nextBtnContainer.innerHTML = '';
          };

          createPagination = function _createPagination(itemsCount) {
            pagination.innerHTML = ' ';

            for (var i = 1; i <= 10; i++) {
              var btn = document.createElement('button');
              btn.innerText = "".concat(i);
              pagination.append(btn);
            }

            var btnPrev = document.createElement('button');
            btnPrev.innerHTML = '&#8592;';
            var btnNext = document.createElement('button');
            btnNext.innerHTML = '&#8594;';
            prevBtnContainer.append(btnPrev);
            btnPrev.style.visibility = 'hidden';
            nextBtnContainer.append(btnNext);
            var currentPage = 1;
            var btnsPerPage = 10;
            btnPrev.addEventListener('click', function () {
              if (currentPage > 1) {
                currentPage--;
                changePage(currentPage);
              }
            });
            btnNext.addEventListener('click', function () {
              if (currentPage < setPagesNumb()) {
                currentPage++;
                changePage(currentPage);
              }
            });

            function changePage(page) {
              if (page < 1) {
                page = 1;
              }

              if (page > setPagesNumb()) page = setPagesNumb();
              pagination.innerHTML = ' ';

              for (var _i = (page - 1) * btnsPerPage + 1; _i <= page * btnsPerPage; _i++) {
                var _btn = document.createElement('button');

                _btn.innerText = "".concat(_i);
                pagination.append(_btn);
              }

              if (page == 1) {
                btnPrev.style.visibility = 'hidden';
              } else {
                btnPrev.style.visibility = 'visible';
              }

              if (page == setPagesNumb()) {
                btnNext.style.visibility = 'hidden';
              } else {
                btnNext.style.visibility = 'visible';
              }
            }

            function setPagesNumb() {
              return itemsCount / btnsPerPage;
            }

            window.onload = function () {
              changePage(1);
            };

            pagination.addEventListener('click', /*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
                var clickedPage, url, response, data;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        e.preventDefault();
                        clickedPage = +e.target.innerText;
                        console.log(clickedPage);
                        url = "https://www.omdbapi.com/?apikey=".concat(apiKey, "&s=").concat(searchInput.value, "&page=").concat(clickedPage);
                        _context.next = 6;
                        return fetch(url);

                      case 6:
                        response = _context.sent;
                        _context.next = 9;
                        return response.json();

                      case 9:
                        data = _context.sent;
                        output.innerHTML = ' ';
                        showSearchResult(data);

                      case 12:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x) {
                return _ref2.apply(this, arguments);
              };
            }());
          };

          showSearchResult = function _showSearchResult(json) {
            var result = '';
            json.Search.forEach(function (e) {
              result += renderItem(e);
              output.innerHTML = result;
            });
          };

          renderItem = function _renderItem(item) {
            if (item.Poster === 'N/A') {
              item.Poster = './img/no-poster-available.png';
            }

            var result = '';
            result += "<div class=\"output-section__item\">\n              <img src=\"".concat(item.Poster, "\" alt=\"").concat(item.Title, "\">\n              <div class=\"output-section__item-hover\">").concat(item.Title, "</div>\n              </div>");
            return result;
          };

          url = "https://www.omdbapi.com/?apikey=".concat(apiKey, "&s=").concat(searchInput.value);
          _context3.prev = 5;
          _context3.next = 8;
          return fetch(url);

        case 8:
          response = _context3.sent;
          _context3.next = 11;
          return response.json();

        case 11:
          data = _context3.sent;
          createPagination(Number(data.totalResults));
          output.innerHTML = ' ';
          showSearchResult(data);
          _context3.next = 20;
          break;

        case 17:
          _context3.prev = 17;
          _context3.t0 = _context3["catch"](5);
          console.log('Rejected', _context3.t0);

        case 20:
          output.addEventListener('click', /*#__PURE__*/function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
              var clickedItem, url, response, data;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      e.preventDefault();
                      clickedItem = e.target.innerText;
                      url = "https://www.omdbapi.com/?apikey=".concat(apiKey, "&t=").concat(clickedItem);
                      _context2.next = 5;
                      return fetch(url);

                    case 5:
                      response = _context2.sent;
                      _context2.next = 8;
                      return response.json();

                    case 8:
                      data = _context2.sent;
                      output.innerHTML = ' ';
                      renderClickedItem(data);

                    case 11:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            }));

            return function (_x2) {
              return _ref3.apply(this, arguments);
            };
          }());

        case 21:
        case "end":
          return _context3.stop();
      }
    }
  }, _callee3, null, [[5, 17]]);
}))); // pagination.innerHTML = ' ';
// ALTERNATIVE WAYS OF FETCHING DATA
// searchBtn.addEventListener('click', () => {
//   const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchInput.value}`;
//   fetch(url)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error));
// });
// searchBtn.addEventListener('click', () => {
//   const xhr = new XMLHttpRequest();
//   xhr.addEventListener('readystatechange', () => {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       const data = JSON.parse(xhr.responseText);
//       console.log(data);
//     } else if (xhr.readyState === 4) {
//       console.log('could not fetch data');
//     }
//   });
//   xhr.open(
//     'GET',
//     `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchInput.value}`,
//   );
//   // xhr.responseType = 'json';
//   xhr.send();
// });

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_no_poster_available_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/no-poster-available.png */ "./img/no-poster-available.png");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/styles.scss */ "./styles/styles.scss");
/* harmony import */ var _js_l34_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/l34.js */ "./js/l34.js");




/***/ }),

/***/ "./img/no-poster-available.png":
/*!*************************************!*\
  !*** ./img/no-poster-available.png ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/no-poster-available.png");

/***/ }),

/***/ "./styles/styles.scss":
/*!****************************!*\
  !*** ./styles/styles.scss ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js"], function() { return __webpack_require__("../node_modules/@babel/polyfill/lib/index.js"); })
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js"], function() { return __webpack_require__("./main.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map