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

eval("document.body.classList.remove('no-js');\ndocument.body.classList.add('js-enabled');\nhandleContactForm();\nhandleBurgerMenu();\n\nfunction handleContactForm() {\n  var contactBtns = document.querySelectorAll('.showContact');\n  var closeBtn = document.querySelector('.contact__close');\n  var openMenuCheckbox = document.querySelector(\".toggle\");\n  contactBtns.forEach(function (btn) {\n    btn.addEventListener('click', function (e) {\n      document.body.classList.add('contact--show');\n\n      if (openMenuCheckbox.checked) {\n        openMenuCheckbox.checked = false;\n      }\n    });\n  });\n  closeBtn.addEventListener('click', function (e) {\n    document.body.classList.remove('contact--show');\n  });\n}\n\nfunction handleBurgerMenu() {\n  var openMenuCheckbox = document.querySelector(\".toggle\");\n  var menuItems = document.querySelectorAll(\".nav__link\");\n  menuItems.forEach(function (menuItem) {\n    menuItem.addEventListener('click', function (e) {\n      openMenuCheckbox.checked = false;\n    });\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJkb2N1bWVudCIsImJvZHkiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJoYW5kbGVDb250YWN0Rm9ybSIsImhhbmRsZUJ1cmdlck1lbnUiLCJjb250YWN0QnRucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjbG9zZUJ0biIsInF1ZXJ5U2VsZWN0b3IiLCJvcGVuTWVudUNoZWNrYm94IiwiZm9yRWFjaCIsImJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiY2hlY2tlZCIsIm1lbnVJdGVtcyIsIm1lbnVJdGVtIl0sInNvdXJjZXMiOlsid2VicGFjazovL3Byb2pldC1jdi8uL3Jlc291cmNlL2pzL21haW4uanM/MmEwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ25vLWpzJyk7XG5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2pzLWVuYWJsZWQnKTtcblxuaGFuZGxlQ29udGFjdEZvcm0oKTtcbmhhbmRsZUJ1cmdlck1lbnUoKTtcblxuZnVuY3Rpb24gaGFuZGxlQ29udGFjdEZvcm0oKSB7XG4gICAgY29uc3QgY29udGFjdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hvd0NvbnRhY3QnKTtcbiAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0X19jbG9zZScpO1xuICAgIGNvbnN0IG9wZW5NZW51Q2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZ2dsZVwiKTtcblxuICAgIGNvbnRhY3RCdG5zLmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdjb250YWN0LS1zaG93Jyk7XG4gICAgICAgICAgICBpZiAob3Blbk1lbnVDaGVja2JveC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgb3Blbk1lbnVDaGVja2JveC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2NvbnRhY3QtLXNob3cnKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlQnVyZ2VyTWVudSgpIHtcbiAgICBjb25zdCBvcGVuTWVudUNoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2dnbGVcIik7XG4gICAgY29uc3QgbWVudUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXZfX2xpbmtcIik7XG5cbiAgICBtZW51SXRlbXMuZm9yRWFjaCgobWVudUl0ZW0pID0+IHtcbiAgICAgICAgbWVudUl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgb3Blbk1lbnVDaGVja2JveC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgIH0pXG4gICAgfSlcbn0iXSwibWFwcGluZ3MiOiJBQUFBQSxRQUFRLENBQUNDLElBQVQsQ0FBY0MsU0FBZCxDQUF3QkMsTUFBeEIsQ0FBK0IsT0FBL0I7QUFDQUgsUUFBUSxDQUFDQyxJQUFULENBQWNDLFNBQWQsQ0FBd0JFLEdBQXhCLENBQTRCLFlBQTVCO0FBRUFDLGlCQUFpQjtBQUNqQkMsZ0JBQWdCOztBQUVoQixTQUFTRCxpQkFBVCxHQUE2QjtFQUN6QixJQUFNRSxXQUFXLEdBQUdQLFFBQVEsQ0FBQ1EsZ0JBQVQsQ0FBMEIsY0FBMUIsQ0FBcEI7RUFDQSxJQUFNQyxRQUFRLEdBQUdULFFBQVEsQ0FBQ1UsYUFBVCxDQUF1QixpQkFBdkIsQ0FBakI7RUFDQSxJQUFNQyxnQkFBZ0IsR0FBR1gsUUFBUSxDQUFDVSxhQUFULENBQXVCLFNBQXZCLENBQXpCO0VBRUFILFdBQVcsQ0FBQ0ssT0FBWixDQUFvQixVQUFDQyxHQUFELEVBQVM7SUFDekJBLEdBQUcsQ0FBQ0MsZ0JBQUosQ0FBcUIsT0FBckIsRUFBOEIsVUFBQ0MsQ0FBRCxFQUFPO01BQ2pDZixRQUFRLENBQUNDLElBQVQsQ0FBY0MsU0FBZCxDQUF3QkUsR0FBeEIsQ0FBNEIsZUFBNUI7O01BQ0EsSUFBSU8sZ0JBQWdCLENBQUNLLE9BQXJCLEVBQThCO1FBQzFCTCxnQkFBZ0IsQ0FBQ0ssT0FBakIsR0FBMkIsS0FBM0I7TUFDSDtJQUNKLENBTEQ7RUFNSCxDQVBEO0VBU0FQLFFBQVEsQ0FBQ0ssZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsVUFBQ0MsQ0FBRCxFQUFPO0lBQ3RDZixRQUFRLENBQUNDLElBQVQsQ0FBY0MsU0FBZCxDQUF3QkMsTUFBeEIsQ0FBK0IsZUFBL0I7RUFDSCxDQUZEO0FBR0g7O0FBRUQsU0FBU0csZ0JBQVQsR0FBNEI7RUFDeEIsSUFBTUssZ0JBQWdCLEdBQUdYLFFBQVEsQ0FBQ1UsYUFBVCxDQUF1QixTQUF2QixDQUF6QjtFQUNBLElBQU1PLFNBQVMsR0FBR2pCLFFBQVEsQ0FBQ1EsZ0JBQVQsQ0FBMEIsWUFBMUIsQ0FBbEI7RUFFQVMsU0FBUyxDQUFDTCxPQUFWLENBQWtCLFVBQUNNLFFBQUQsRUFBYztJQUM1QkEsUUFBUSxDQUFDSixnQkFBVCxDQUEwQixPQUExQixFQUFtQyxVQUFDQyxDQUFELEVBQU87TUFDdENKLGdCQUFnQixDQUFDSyxPQUFqQixHQUEyQixLQUEzQjtJQUNILENBRkQ7RUFHSCxDQUpEO0FBS0giLCJmaWxlIjoiLi9yZXNvdXJjZS9qcy9tYWluLmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resource/js/main.js\n");

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