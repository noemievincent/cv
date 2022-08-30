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

eval("document.body.classList.remove('no-js');\ndocument.body.classList.add('js-enabled');\nhandleContactForm();\nhandleBurgerMenu();\n\nfunction handleContactForm() {\n  var contactBtns = document.querySelectorAll('.showContact');\n  var closeBtn = document.querySelector('.contact__close');\n  var openMenuCheckbox = document.querySelector(\".toggle\");\n  var moreInfosBtn = document.querySelector('.contact__expander-link');\n  var moreInfosContainer = document.querySelector('.contact__container');\n  var moreInfosText = document.querySelector('.contact__expander-text');\n  moreInfosBtn.addEventListener('click', function (e) {\n    moreInfosContainer.classList.toggle('contact__expander--expanded');\n    var _ref = [moreInfosText.dataset.text, moreInfosText.textContent];\n    moreInfosText.textContent = _ref[0];\n    moreInfosText.dataset.text = _ref[1];\n  });\n  contactBtns.forEach(function (btn) {\n    btn.addEventListener('click', function (e) {\n      document.body.classList.add('contact--show');\n\n      if (openMenuCheckbox.checked) {\n        openMenuCheckbox.checked = false;\n      }\n    });\n  });\n  closeBtn.addEventListener('click', function (e) {\n    document.body.classList.remove('contact--show');\n  });\n}\n\nfunction handleBurgerMenu() {\n  var openMenuCheckbox = document.querySelector(\".toggle\");\n  var menuItems = document.querySelectorAll(\".nav__link\");\n  menuItems.forEach(function (menuItem) {\n    menuItem.addEventListener('click', function (e) {\n      openMenuCheckbox.checked = false;\n    });\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZS9qcy9tYWluLmpzLmpzIiwibmFtZXMiOlsiZG9jdW1lbnQiLCJib2R5IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiaGFuZGxlQ29udGFjdEZvcm0iLCJoYW5kbGVCdXJnZXJNZW51IiwiY29udGFjdEJ0bnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2xvc2VCdG4iLCJxdWVyeVNlbGVjdG9yIiwib3Blbk1lbnVDaGVja2JveCIsIm1vcmVJbmZvc0J0biIsIm1vcmVJbmZvc0NvbnRhaW5lciIsIm1vcmVJbmZvc1RleHQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInRvZ2dsZSIsImRhdGFzZXQiLCJ0ZXh0IiwidGV4dENvbnRlbnQiLCJmb3JFYWNoIiwiYnRuIiwiY2hlY2tlZCIsIm1lbnVJdGVtcyIsIm1lbnVJdGVtIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZXQtY3YvLi9yZXNvdXJjZS9qcy9tYWluLmpzPzJhMGMiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCduby1qcycpO1xuZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdqcy1lbmFibGVkJyk7XG5cbmhhbmRsZUNvbnRhY3RGb3JtKCk7XG5oYW5kbGVCdXJnZXJNZW51KCk7XG5cbmZ1bmN0aW9uIGhhbmRsZUNvbnRhY3RGb3JtKCkge1xuICAgIGNvbnN0IGNvbnRhY3RCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNob3dDb250YWN0Jyk7XG4gICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdF9fY2xvc2UnKTtcbiAgICBjb25zdCBvcGVuTWVudUNoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2dnbGVcIik7XG4gICAgY29uc3QgbW9yZUluZm9zQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3RfX2V4cGFuZGVyLWxpbmsnKTtcbiAgICBjb25zdCBtb3JlSW5mb3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdF9fY29udGFpbmVyJyk7XG4gICAgY29uc3QgbW9yZUluZm9zVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0X19leHBhbmRlci10ZXh0Jyk7XG5cbiAgICBtb3JlSW5mb3NCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBtb3JlSW5mb3NDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnY29udGFjdF9fZXhwYW5kZXItLWV4cGFuZGVkJyk7XG4gICAgICAgIFttb3JlSW5mb3NUZXh0LnRleHRDb250ZW50LCBtb3JlSW5mb3NUZXh0LmRhdGFzZXQudGV4dF0gPSBbbW9yZUluZm9zVGV4dC5kYXRhc2V0LnRleHQsIG1vcmVJbmZvc1RleHQudGV4dENvbnRlbnRdO1xuICAgIH0pXG5cbiAgICBjb250YWN0QnRucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnY29udGFjdC0tc2hvdycpO1xuICAgICAgICAgICAgaWYgKG9wZW5NZW51Q2hlY2tib3guY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgIG9wZW5NZW51Q2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdjb250YWN0LS1zaG93Jyk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUJ1cmdlck1lbnUoKSB7XG4gICAgY29uc3Qgb3Blbk1lbnVDaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9nZ2xlXCIpO1xuICAgIGNvbnN0IG1lbnVJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2X19saW5rXCIpO1xuXG4gICAgbWVudUl0ZW1zLmZvckVhY2goKG1lbnVJdGVtKSA9PiB7XG4gICAgICAgIG1lbnVJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIG9wZW5NZW51Q2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB9KVxuICAgIH0pXG59Il0sIm1hcHBpbmdzIjoiQUFBQUEsUUFBUSxDQUFDQyxJQUFULENBQWNDLFNBQWQsQ0FBd0JDLE1BQXhCLENBQStCLE9BQS9CO0FBQ0FILFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxTQUFkLENBQXdCRSxHQUF4QixDQUE0QixZQUE1QjtBQUVBQyxpQkFBaUI7QUFDakJDLGdCQUFnQjs7QUFFaEIsU0FBU0QsaUJBQVQsR0FBNkI7RUFDekIsSUFBTUUsV0FBVyxHQUFHUCxRQUFRLENBQUNRLGdCQUFULENBQTBCLGNBQTFCLENBQXBCO0VBQ0EsSUFBTUMsUUFBUSxHQUFHVCxRQUFRLENBQUNVLGFBQVQsQ0FBdUIsaUJBQXZCLENBQWpCO0VBQ0EsSUFBTUMsZ0JBQWdCLEdBQUdYLFFBQVEsQ0FBQ1UsYUFBVCxDQUF1QixTQUF2QixDQUF6QjtFQUNBLElBQU1FLFlBQVksR0FBR1osUUFBUSxDQUFDVSxhQUFULENBQXVCLHlCQUF2QixDQUFyQjtFQUNBLElBQU1HLGtCQUFrQixHQUFHYixRQUFRLENBQUNVLGFBQVQsQ0FBdUIscUJBQXZCLENBQTNCO0VBQ0EsSUFBTUksYUFBYSxHQUFHZCxRQUFRLENBQUNVLGFBQVQsQ0FBdUIseUJBQXZCLENBQXRCO0VBRUFFLFlBQVksQ0FBQ0csZ0JBQWIsQ0FBOEIsT0FBOUIsRUFBdUMsVUFBQ0MsQ0FBRCxFQUFPO0lBQzFDSCxrQkFBa0IsQ0FBQ1gsU0FBbkIsQ0FBNkJlLE1BQTdCLENBQW9DLDZCQUFwQztJQUQwQyxXQUVnQixDQUFDSCxhQUFhLENBQUNJLE9BQWQsQ0FBc0JDLElBQXZCLEVBQTZCTCxhQUFhLENBQUNNLFdBQTNDLENBRmhCO0lBRXpDTixhQUFhLENBQUNNLFdBRjJCO0lBRWROLGFBQWEsQ0FBQ0ksT0FBZCxDQUFzQkMsSUFGUjtFQUc3QyxDQUhEO0VBS0FaLFdBQVcsQ0FBQ2MsT0FBWixDQUFvQixVQUFDQyxHQUFELEVBQVM7SUFDekJBLEdBQUcsQ0FBQ1AsZ0JBQUosQ0FBcUIsT0FBckIsRUFBOEIsVUFBQ0MsQ0FBRCxFQUFPO01BQ2pDaEIsUUFBUSxDQUFDQyxJQUFULENBQWNDLFNBQWQsQ0FBd0JFLEdBQXhCLENBQTRCLGVBQTVCOztNQUNBLElBQUlPLGdCQUFnQixDQUFDWSxPQUFyQixFQUE4QjtRQUMxQlosZ0JBQWdCLENBQUNZLE9BQWpCLEdBQTJCLEtBQTNCO01BQ0g7SUFDSixDQUxEO0VBTUgsQ0FQRDtFQVNBZCxRQUFRLENBQUNNLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLFVBQUNDLENBQUQsRUFBTztJQUN0Q2hCLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxTQUFkLENBQXdCQyxNQUF4QixDQUErQixlQUEvQjtFQUNILENBRkQ7QUFHSDs7QUFFRCxTQUFTRyxnQkFBVCxHQUE0QjtFQUN4QixJQUFNSyxnQkFBZ0IsR0FBR1gsUUFBUSxDQUFDVSxhQUFULENBQXVCLFNBQXZCLENBQXpCO0VBQ0EsSUFBTWMsU0FBUyxHQUFHeEIsUUFBUSxDQUFDUSxnQkFBVCxDQUEwQixZQUExQixDQUFsQjtFQUVBZ0IsU0FBUyxDQUFDSCxPQUFWLENBQWtCLFVBQUNJLFFBQUQsRUFBYztJQUM1QkEsUUFBUSxDQUFDVixnQkFBVCxDQUEwQixPQUExQixFQUFtQyxVQUFDQyxDQUFELEVBQU87TUFDdENMLGdCQUFnQixDQUFDWSxPQUFqQixHQUEyQixLQUEzQjtJQUNILENBRkQ7RUFHSCxDQUpEO0FBS0gifQ==\n//# sourceURL=webpack-internal:///./resource/js/main.js\n");

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