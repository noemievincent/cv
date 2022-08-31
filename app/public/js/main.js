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

eval("document.body.classList.remove('no-js');\ndocument.body.classList.add('js-enabled');\nhandleContactForm();\nhandleBurgerMenu();\n\nfunction handleContactForm() {\n  var contactBtns = document.querySelectorAll('.showContact');\n  var closeBtn = document.querySelector('.contact__close');\n  var openMenuCheckbox = document.querySelector(\".toggle\");\n  var moreInfosBtn = document.querySelector('.contact__expander-link');\n  var moreInfosContainer = document.querySelector('.contact__container');\n  var moreInfosText = document.querySelector('.contact__expander-text');\n  moreInfosBtn.addEventListener('click', function (e) {\n    moreInfosContainer.classList.toggle('contact__expander--expanded');\n    var _ref = [moreInfosText.dataset.text, moreInfosText.textContent];\n    moreInfosText.textContent = _ref[0];\n    moreInfosText.dataset.text = _ref[1];\n  });\n  contactBtns.forEach(function (btn) {\n    btn.addEventListener('click', function (e) {\n      document.body.classList.add('contact--show');\n\n      if (openMenuCheckbox.checked) {\n        openMenuCheckbox.checked = false;\n      }\n    });\n  });\n  closeBtn.addEventListener('click', function (e) {\n    document.body.classList.remove('contact--show');\n  });\n}\n\nfunction handleBurgerMenu() {\n  var openMenuCheckbox = document.querySelector(\".toggle\");\n  var menuItems = document.querySelectorAll(\".nav__link\");\n  menuItems.forEach(function (menuItem) {\n    menuItem.addEventListener('click', function (e) {\n      openMenuCheckbox.checked = false;\n    });\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJkb2N1bWVudCIsImJvZHkiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJoYW5kbGVDb250YWN0Rm9ybSIsImhhbmRsZUJ1cmdlck1lbnUiLCJjb250YWN0QnRucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjbG9zZUJ0biIsInF1ZXJ5U2VsZWN0b3IiLCJvcGVuTWVudUNoZWNrYm94IiwibW9yZUluZm9zQnRuIiwibW9yZUluZm9zQ29udGFpbmVyIiwibW9yZUluZm9zVGV4dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwidG9nZ2xlIiwiZGF0YXNldCIsInRleHQiLCJ0ZXh0Q29udGVudCIsImZvckVhY2giLCJidG4iLCJjaGVja2VkIiwibWVudUl0ZW1zIiwibWVudUl0ZW0iXSwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamV0LWN2Ly4vcmVzb3VyY2UvanMvbWFpbi5qcz8yYTBjIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbm8tanMnKTtcbmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnanMtZW5hYmxlZCcpO1xuXG5oYW5kbGVDb250YWN0Rm9ybSgpO1xuaGFuZGxlQnVyZ2VyTWVudSgpO1xuXG5mdW5jdGlvbiBoYW5kbGVDb250YWN0Rm9ybSgpIHtcbiAgICBjb25zdCBjb250YWN0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaG93Q29udGFjdCcpO1xuICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3RfX2Nsb3NlJyk7XG4gICAgY29uc3Qgb3Blbk1lbnVDaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9nZ2xlXCIpO1xuICAgIGNvbnN0IG1vcmVJbmZvc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0X19leHBhbmRlci1saW5rJyk7XG4gICAgY29uc3QgbW9yZUluZm9zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3RfX2NvbnRhaW5lcicpO1xuICAgIGNvbnN0IG1vcmVJbmZvc1RleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdF9fZXhwYW5kZXItdGV4dCcpO1xuXG4gICAgbW9yZUluZm9zQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgbW9yZUluZm9zQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ2NvbnRhY3RfX2V4cGFuZGVyLS1leHBhbmRlZCcpO1xuICAgICAgICBbbW9yZUluZm9zVGV4dC50ZXh0Q29udGVudCwgbW9yZUluZm9zVGV4dC5kYXRhc2V0LnRleHRdID0gW21vcmVJbmZvc1RleHQuZGF0YXNldC50ZXh0LCBtb3JlSW5mb3NUZXh0LnRleHRDb250ZW50XTtcbiAgICB9KVxuXG4gICAgY29udGFjdEJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtLXNob3cnKTtcbiAgICAgICAgICAgIGlmIChvcGVuTWVudUNoZWNrYm94LmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICBvcGVuTWVudUNoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnY29udGFjdC0tc2hvdycpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVCdXJnZXJNZW51KCkge1xuICAgIGNvbnN0IG9wZW5NZW51Q2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZ2dsZVwiKTtcbiAgICBjb25zdCBtZW51SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdl9fbGlua1wiKTtcblxuICAgIG1lbnVJdGVtcy5mb3JFYWNoKChtZW51SXRlbSkgPT4ge1xuICAgICAgICBtZW51SXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBvcGVuTWVudUNoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgfSlcbiAgICB9KVxufSJdLCJtYXBwaW5ncyI6IkFBQUFBLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxTQUFkLENBQXdCQyxNQUF4QixDQUErQixPQUEvQjtBQUNBSCxRQUFRLENBQUNDLElBQVQsQ0FBY0MsU0FBZCxDQUF3QkUsR0FBeEIsQ0FBNEIsWUFBNUI7QUFFQUMsaUJBQWlCO0FBQ2pCQyxnQkFBZ0I7O0FBRWhCLFNBQVNELGlCQUFULEdBQTZCO0VBQ3pCLElBQU1FLFdBQVcsR0FBR1AsUUFBUSxDQUFDUSxnQkFBVCxDQUEwQixjQUExQixDQUFwQjtFQUNBLElBQU1DLFFBQVEsR0FBR1QsUUFBUSxDQUFDVSxhQUFULENBQXVCLGlCQUF2QixDQUFqQjtFQUNBLElBQU1DLGdCQUFnQixHQUFHWCxRQUFRLENBQUNVLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBekI7RUFDQSxJQUFNRSxZQUFZLEdBQUdaLFFBQVEsQ0FBQ1UsYUFBVCxDQUF1Qix5QkFBdkIsQ0FBckI7RUFDQSxJQUFNRyxrQkFBa0IsR0FBR2IsUUFBUSxDQUFDVSxhQUFULENBQXVCLHFCQUF2QixDQUEzQjtFQUNBLElBQU1JLGFBQWEsR0FBR2QsUUFBUSxDQUFDVSxhQUFULENBQXVCLHlCQUF2QixDQUF0QjtFQUVBRSxZQUFZLENBQUNHLGdCQUFiLENBQThCLE9BQTlCLEVBQXVDLFVBQUNDLENBQUQsRUFBTztJQUMxQ0gsa0JBQWtCLENBQUNYLFNBQW5CLENBQTZCZSxNQUE3QixDQUFvQyw2QkFBcEM7SUFEMEMsV0FFZ0IsQ0FBQ0gsYUFBYSxDQUFDSSxPQUFkLENBQXNCQyxJQUF2QixFQUE2QkwsYUFBYSxDQUFDTSxXQUEzQyxDQUZoQjtJQUV6Q04sYUFBYSxDQUFDTSxXQUYyQjtJQUVkTixhQUFhLENBQUNJLE9BQWQsQ0FBc0JDLElBRlI7RUFHN0MsQ0FIRDtFQUtBWixXQUFXLENBQUNjLE9BQVosQ0FBb0IsVUFBQ0MsR0FBRCxFQUFTO0lBQ3pCQSxHQUFHLENBQUNQLGdCQUFKLENBQXFCLE9BQXJCLEVBQThCLFVBQUNDLENBQUQsRUFBTztNQUNqQ2hCLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxTQUFkLENBQXdCRSxHQUF4QixDQUE0QixlQUE1Qjs7TUFDQSxJQUFJTyxnQkFBZ0IsQ0FBQ1ksT0FBckIsRUFBOEI7UUFDMUJaLGdCQUFnQixDQUFDWSxPQUFqQixHQUEyQixLQUEzQjtNQUNIO0lBQ0osQ0FMRDtFQU1ILENBUEQ7RUFTQWQsUUFBUSxDQUFDTSxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxVQUFDQyxDQUFELEVBQU87SUFDdENoQixRQUFRLENBQUNDLElBQVQsQ0FBY0MsU0FBZCxDQUF3QkMsTUFBeEIsQ0FBK0IsZUFBL0I7RUFDSCxDQUZEO0FBR0g7O0FBRUQsU0FBU0csZ0JBQVQsR0FBNEI7RUFDeEIsSUFBTUssZ0JBQWdCLEdBQUdYLFFBQVEsQ0FBQ1UsYUFBVCxDQUF1QixTQUF2QixDQUF6QjtFQUNBLElBQU1jLFNBQVMsR0FBR3hCLFFBQVEsQ0FBQ1EsZ0JBQVQsQ0FBMEIsWUFBMUIsQ0FBbEI7RUFFQWdCLFNBQVMsQ0FBQ0gsT0FBVixDQUFrQixVQUFDSSxRQUFELEVBQWM7SUFDNUJBLFFBQVEsQ0FBQ1YsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsVUFBQ0MsQ0FBRCxFQUFPO01BQ3RDTCxnQkFBZ0IsQ0FBQ1ksT0FBakIsR0FBMkIsS0FBM0I7SUFDSCxDQUZEO0VBR0gsQ0FKRDtBQUtIIiwiZmlsZSI6Ii4vcmVzb3VyY2UvanMvbWFpbi5qcy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resource/js/main.js\n");

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