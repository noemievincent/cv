/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resource/js/main.js":
/*!*****************************!*\
  !*** ./resource/js/main.js ***!
  \*****************************/
/***/ (() => {

eval("document.body.classList.remove('no-js');\ndocument.body.classList.add('js-enabled');\nhandleContactForm();\nhandleBurgerMenu();\n\nfunction handleContactForm() {\n  var contactBtns = document.querySelectorAll('.showContact');\n  var closeBtn = document.querySelector('.contact__close');\n  var moreInfosBtn = document.querySelector('.contact__expander-link');\n  var moreInfosContainer = document.querySelector('.contact__container');\n  var moreInfosText = document.querySelector('.contact__expander-text');\n  var anchors = document.querySelectorAll('.contact__anchor');\n  var contactProgress = document.querySelector('.contact__progress');\n  moreInfosBtn.addEventListener('click', function (e) {\n    moreInfosContainer.classList.toggle('contact__expander--expanded');\n    var _ref = [moreInfosText.dataset.text, moreInfosText.textContent];\n    moreInfosText.textContent = _ref[0];\n    moreInfosText.dataset.text = _ref[1];\n  });\n  contactBtns.forEach(function (btn) {\n    btn.addEventListener('click', function (e) {\n      document.body.classList.add('contact--show');\n    });\n  });\n  closeBtn.addEventListener('click', function (e) {\n    document.body.classList.remove('contact--show');\n  });\n  anchors.forEach(function (anchor) {\n    if (anchor.classList.contains('contact__anchor--active')) {\n      contactProgress.style.transform = \"scaleX(\".concat(0.5 * anchor.dataset.number, \")\");\n    }\n  });\n}\n\nfunction handleBurgerMenu() {\n  var openMenuCheckbox = document.querySelector(\".toggle\");\n  var menuItems = document.querySelectorAll(\".nav__link\");\n  openMenuCheckbox.addEventListener('change', function (e) {\n    document.body.classList.toggle('header--expanded');\n  });\n  menuItems.forEach(function (menuItem) {\n    menuItem.addEventListener('click', function (e) {\n      openMenuCheckbox.checked = false;\n    });\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZS9qcy9tYWluLmpzLmpzIiwibmFtZXMiOlsiZG9jdW1lbnQiLCJib2R5IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiaGFuZGxlQ29udGFjdEZvcm0iLCJoYW5kbGVCdXJnZXJNZW51IiwiY29udGFjdEJ0bnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2xvc2VCdG4iLCJxdWVyeVNlbGVjdG9yIiwibW9yZUluZm9zQnRuIiwibW9yZUluZm9zQ29udGFpbmVyIiwibW9yZUluZm9zVGV4dCIsImFuY2hvcnMiLCJjb250YWN0UHJvZ3Jlc3MiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInRvZ2dsZSIsImRhdGFzZXQiLCJ0ZXh0IiwidGV4dENvbnRlbnQiLCJmb3JFYWNoIiwiYnRuIiwiYW5jaG9yIiwiY29udGFpbnMiLCJzdHlsZSIsInRyYW5zZm9ybSIsIm51bWJlciIsIm9wZW5NZW51Q2hlY2tib3giLCJtZW51SXRlbXMiLCJtZW51SXRlbSIsImNoZWNrZWQiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2pldC1jdi8uL3Jlc291cmNlL2pzL21haW4uanM/MmEwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ25vLWpzJyk7XG5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2pzLWVuYWJsZWQnKTtcblxuaGFuZGxlQ29udGFjdEZvcm0oKTtcbmhhbmRsZUJ1cmdlck1lbnUoKTtcblxuZnVuY3Rpb24gaGFuZGxlQ29udGFjdEZvcm0oKSB7XG4gICAgY29uc3QgY29udGFjdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hvd0NvbnRhY3QnKTtcbiAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0X19jbG9zZScpO1xuICAgIGNvbnN0IG1vcmVJbmZvc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0X19leHBhbmRlci1saW5rJyk7XG4gICAgY29uc3QgbW9yZUluZm9zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3RfX2NvbnRhaW5lcicpO1xuICAgIGNvbnN0IG1vcmVJbmZvc1RleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdF9fZXhwYW5kZXItdGV4dCcpO1xuICAgIGNvbnN0IGFuY2hvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29udGFjdF9fYW5jaG9yJyk7XG4gICAgY29uc3QgY29udGFjdFByb2dyZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3RfX3Byb2dyZXNzJyk7XG5cbiAgICBtb3JlSW5mb3NCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBtb3JlSW5mb3NDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnY29udGFjdF9fZXhwYW5kZXItLWV4cGFuZGVkJyk7XG4gICAgICAgIFttb3JlSW5mb3NUZXh0LnRleHRDb250ZW50LCBtb3JlSW5mb3NUZXh0LmRhdGFzZXQudGV4dF0gPSBbbW9yZUluZm9zVGV4dC5kYXRhc2V0LnRleHQsIG1vcmVJbmZvc1RleHQudGV4dENvbnRlbnRdO1xuICAgIH0pXG5cbiAgICBjb250YWN0QnRucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnY29udGFjdC0tc2hvdycpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdjb250YWN0LS1zaG93Jyk7XG4gICAgfSk7XG5cbiAgICBhbmNob3JzLmZvckVhY2goKGFuY2hvcikgPT4ge1xuICAgICAgICBpZiAoYW5jaG9yLmNsYXNzTGlzdC5jb250YWlucygnY29udGFjdF9fYW5jaG9yLS1hY3RpdmUnKSkge1xuICAgICAgICAgICAgY29udGFjdFByb2dyZXNzLnN0eWxlLnRyYW5zZm9ybSA9IGBzY2FsZVgoJHswLjUgKiBhbmNob3IuZGF0YXNldC5udW1iZXJ9KWAgO1xuICAgICAgICB9XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gaGFuZGxlQnVyZ2VyTWVudSgpIHtcbiAgICBjb25zdCBvcGVuTWVudUNoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2dnbGVcIik7XG4gICAgY29uc3QgbWVudUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXZfX2xpbmtcIik7XG5cbiAgICBvcGVuTWVudUNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnaGVhZGVyLS1leHBhbmRlZCcpO1xuICAgIH0pXG5cbiAgICBtZW51SXRlbXMuZm9yRWFjaCgobWVudUl0ZW0pID0+IHtcbiAgICAgICAgbWVudUl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgb3Blbk1lbnVDaGVja2JveC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgIH0pXG4gICAgfSlcbn0iXSwibWFwcGluZ3MiOiJBQUFBQSxRQUFRLENBQUNDLElBQVQsQ0FBY0MsU0FBZCxDQUF3QkMsTUFBeEIsQ0FBK0IsT0FBL0I7QUFDQUgsUUFBUSxDQUFDQyxJQUFULENBQWNDLFNBQWQsQ0FBd0JFLEdBQXhCLENBQTRCLFlBQTVCO0FBRUFDLGlCQUFpQjtBQUNqQkMsZ0JBQWdCOztBQUVoQixTQUFTRCxpQkFBVCxHQUE2QjtFQUN6QixJQUFNRSxXQUFXLEdBQUdQLFFBQVEsQ0FBQ1EsZ0JBQVQsQ0FBMEIsY0FBMUIsQ0FBcEI7RUFD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\n//# sourceURL=webpack-internal:///./resource/js/main.js\n");

/***/ }),

/***/ "./resource/css/main.scss":
/*!********************************!*\
  !*** ./resource/css/main.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZS9jc3MvbWFpbi5zY3NzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2pldC1jdi8uL3Jlc291cmNlL2Nzcy9tYWluLnNjc3M/NTZjZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resource/css/main.scss\n");

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
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
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
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/main": 0,
/******/ 			"css/main": 0
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
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
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
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkprojet_cv"] = self["webpackChunkprojet_cv"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./resource/js/main.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./resource/css/main.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;