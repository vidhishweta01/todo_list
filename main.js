/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\nbody {\\n  background-color: rgb(234, 242, 243);\\n}\\n\\nheader {\\n  background-color: rgb(4, 24, 43);\\n  color: blanchedalmond;\\n  padding-left: 10px;\\n  position: fixed;\\n  top: 0;\\n  width: 100%;\\n}\\n\\n.sidenav {\\n  height: 100%;\\n  width: 160px;\\n  position: fixed;\\n  z-index: 1;\\n  top: 6.19vh;\\n  left: 0;\\n  background-color: rgb(175, 231, 238);\\n  overflow-x: hidden;\\n  padding-top: 10px;\\n  padding-left: 5px;\\n}\\n\\n.sidenav button {\\n  background-color: rgb(175, 231, 238);\\n  display: block;\\n  color: rgb(34, 46, 48);\\n  width: 99%;\\n  border: none;\\n}\\n\\n.show {\\n  background-color: rgb(0, 119, 128) !important;\\n}\\n\\n.content {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  width: 50%;\\n  margin-left: 35vw;\\n}\\n\\n.form {\\n  display: flex;\\n  flex-direction: column;\\n  align-content: space-between;\\n  margin-left: 45vw;\\n  margin-top: 10vh;\\n  width: 30%;\\n}\\n\\n.button-div {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-between;\\n}\\n\\n.submit,\\n.cancel {\\n  width: 49%;\\n  background-color: rgb(0, 119, 128);\\n  color: wheat;\\n}\\n\\n.cancel {\\n  background-color: rgb(255, 115, 0);\\n}\\n\\n.project1 {\\n  background-color: rgb(174, 245, 250) !important;\\n  margin-bottom: 1vh;\\n  margin-top: 1vh;\\n  padding: 2vh;\\n}\\n\\n.modal {\\n  display: none;\\n  z-index: 3;\\n  position: fixed;\\n  left: 0;\\n  top: 44px !important;\\n  width: 100%;\\n  height: 100%;\\n  overflow: auto;\\n  background-color: rgb(0, 0, 0);\\n  background-color: rgba(0, 0, 0, 0.4);\\n  padding-top: 100px;\\n}\\n\\n.modal-content {\\n  background-color: rgb(4, 24, 43);\\n  margin: auto;\\n  position: relative !important;\\n  padding: 10px !important;\\n  outline: 0 !important;\\n  width: 66% !important;\\n  color: white !important;\\n  height: 1024px !important;\\n}\\n\\n.contain {\\n  margin-top: 3vh;\\n  margin-left: 3vw;\\n  text-align: center;\\n  padding: 10px;\\n}\\n\\n.cross {\\n  border: none;\\n  display: inline-block;\\n  padding: 8px 16px;\\n  vertical-align: middle;\\n  overflow: hidden;\\n  text-decoration: none;\\n  color: black;\\n  background-color: inherit;\\n  text-align: center;\\n  cursor: pointer !important;\\n  white-space: nowrap;\\n  font-size: 4vh !important;\\n  font-weight: bolder !important;\\n}\\n\\n.display-top-right {\\n  position: absolute;\\n  right: 0;\\n  top: 0;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo_list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo_list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/getTarget.js */ \"./node_modules/style-loader/dist/runtime/getTarget.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = function(css, style){\n      if (style.styleSheet) {\n        style.styleSheet.cssText = css;\n      } else {\n      while (style.firstChild) {\n        style.removeChild(style.firstChild);\n      }\n\n      style.appendChild(document.createTextNode(css));\n    }\n  };\noptions.setAttributes = function(style) {\n        var nonce =\n           true ? __webpack_require__.nc : 0;\n\n        if (nonce) {\n          style.setAttribute(\"nonce\", nonce);\n        }\n      };\noptions.insert = function(style){\n    var target = _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default()(\"head\");\n\n    if (!target) {\n      throw new Error(\n        \"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\"\n      );\n    }\n\n    target.appendChild(style);\n  };\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default.locals : undefined);\n\n\n//# sourceURL=webpack://todo_list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/getTarget.js":
/*!*************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/getTarget.js ***!
  \*************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n\nmodule.exports = getTarget;\n\n//# sourceURL=webpack://todo_list/./node_modules/style-loader/dist/runtime/getTarget.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo_list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo_list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo_list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/dom */ \"./src/js/dom.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _js_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/project */ \"./src/js/project.js\");\n/* harmony import */ var _js_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/storage */ \"./src/js/storage.js\");\n\n\n\n\n// import { GetData } from './js/storage';\n// import { store } from './js/storage';\n\nlet array = [];\n(0,_js_dom__WEBPACK_IMPORTED_MODULE_0__.default)();\nconst form = document.querySelector('.form');\n\nfunction free(cont) {\n  let child = cont.lastElementChild;\n  while (child) {\n    cont.removeChild(child);\n    child = cont.lastElementChild;\n  }\n}\n\nfunction deleteProject() {\n  localStorage.clear();\n  array.splice(this.parentNode, 1);\n  this.parentNode.remove();\n  (0,_js_storage__WEBPACK_IMPORTED_MODULE_3__.store)(array);\n}\n\nfunction display() {\n  const h = (0,_js_storage__WEBPACK_IMPORTED_MODULE_3__.GetData)();\n  if (h) {\n    array = h;\n  }\n  const contain = document.querySelector('.content');\n  free(contain);\n\n  array.forEach((project) => {\n    const Div = document.createElement('div');\n    Div.setAttribute('class', 'project1');\n    const titl = document.createElement('h4');\n    titl.setAttribute('class', 'title');\n    titl.innerHTML = project.name;\n\n    const date = document.createElement('h3');\n    date.setAttribute('class', 'date');\n    date.innerHTML = project.date;\n\n    const dele = document.createElement('button');\n    dele.setAttribute('class', 'del');\n    dele.innerHTML = 'delete';\n\n    Div.append(titl, date, dele);\n    contain.appendChild(Div);\n\n    dele.addEventListener('click', deleteProject);\n  });\n}\n\nfunction newProject(name, date) {\n  const project = new _js_project__WEBPACK_IMPORTED_MODULE_2__.default();\n  project.name = name;\n  project.date = date;\n  (0,_js_storage__WEBPACK_IMPORTED_MODULE_3__.updateStorage)(project);\n  const contain2 = document.querySelector('.content');\n  free(contain2);\n}\n\nfunction cross() {\n  document.getElementById('id01').style.display = 'none';\n}\n// Event listener\nconst submitButton = document.querySelector('.submit');\nsubmitButton.addEventListener('click', (getData) => {\n  getData.preventDefault();\n  const title = document.getElementById('101').value;\n  const date1 = document.getElementById('1od').value;\n  newProject(title, date1);\n  form.reset();\n});\n\nconst cancel = document.querySelector('.cancel');\ncancel.addEventListener('click', (e) => {\n  e.preventDefault();\n  form.reset();\n});\n\nconst show = document.querySelector('.show');\nshow.addEventListener('click', (ek) => {\n  ek.preventDefault();\n  display();\n});\n\nconst spa = document.querySelector('.cross');\nspa.addEventListener('click', cross);\n\n//# sourceURL=webpack://todo_list/./src/index.js?");

/***/ }),

/***/ "./src/js/dom.js":
/*!***********************!*\
  !*** ./src/js/dom.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ setup)\n/* harmony export */ });\nfunction TopNav() {\n  const element = document.createElement('header');\n  const todo = document.createElement('h1');\n  todo.innerHTML = 'TO-DO-LIST >>';\n  element.append(todo);\n  document.body.append(element);\n}\n\nfunction sideNav() {\n  const element = document.createElement('div');\n  element.setAttribute('class', 'sidenav');\n  const project = document.createElement('div');\n  project.setAttribute('class', 'project');\n  const projHead = document.createElement('h2');\n  projHead.innerHTML = 'Projects';\n  const show = document.createElement('button');\n  show.setAttribute('class', 'show');\n  show.innerHTML = 'show';\n  project.append(projHead, show);\n\n  element.append(project);\n\n  document.body.append(element);\n}\n\nfunction contain() {\n  const element = document.createElement('div');\n  element.setAttribute('class', 'content');\n  const addproject = document.createElement('button');\n  addproject.setAttribute('class', 'add-project');\n  addproject.innerHTML = '+ Add Project';\n  document.body.append(element);\n}\n\nfunction contain2() {\n  const element = document.createElement('form');\n  const head = document.createElement('h6');\n  head.innerHTML = 'Create Project to do';\n  const br = document.createElement('br');\n  const br1 = document.createElement('br');\n  element.setAttribute('id', 'form');\n  element.setAttribute('class', 'form');\n  const i = document.createElement('input');\n  i.setAttribute('type', 'text');\n  i.setAttribute('name', 'name');\n  i.setAttribute('id', '101');\n  const gfg = document.createElement('input');\n  gfg.setAttribute('type', 'date');\n  gfg.setAttribute('id', '1od');\n  const button = document.createElement('div');\n  button.setAttribute('class', 'button-div');\n  const sub = document.createElement('button');\n  sub.setAttribute('class', 'submit');\n  sub.innerHTML = 'Submit';\n  const cancel = document.createElement('button');\n  cancel.setAttribute('class', 'cancel');\n  cancel.innerHTML = 'Cancel';\n  button.append(sub, cancel);\n  element.append(head, i, br1, gfg, br, button);\n  document.body.append(element);\n}\n\nfunction contain3() {\n  const element = document.createElement('div');\n  element.setAttribute('id', 'id01');\n  element.setAttribute('class', 'modal');\n  const modalContent = document.createElement('div');\n  modalContent.setAttribute('class', 'modal-content');\n  const contain = document.createElement('div');\n  contain.setAttribute('class', 'contain');\n  const span = document.createElement('span');\n  span.setAttribute('class', 'cross display-top-right');\n  span.innerHTML = '&times;';\n  const par = document.createElement('div');\n  par.setAttribute('class', 'conten');\n  par.innerHTML = 'project not present to delete';\n  contain.append(span, par);\n  modalContent.append(contain);\n  element.append(modalContent);\n  document.body.append(element);\n}\n\nfunction setup() {\n  TopNav();\n  sideNav();\n  contain2();\n  contain();\n  contain3();\n}\n\n//# sourceURL=webpack://todo_list/./src/js/dom.js?");

/***/ }),

/***/ "./src/js/project.js":
/*!***************************!*\
  !*** ./src/js/project.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\n  constructor(name, date) {\n    this.name = name;\n    this.date = date;\n  }\n}\n\n//# sourceURL=webpack://todo_list/./src/js/project.js?");

/***/ }),

/***/ "./src/js/storage.js":
/*!***************************!*\
  !*** ./src/js/storage.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"store\": () => (/* binding */ store),\n/* harmony export */   \"updateStorage\": () => (/* binding */ updateStorage),\n/* harmony export */   \"GetData\": () => (/* binding */ GetData)\n/* harmony export */ });\nfunction store(array) {\n  localStorage.setItem('array', JSON.stringify(array));\n}\n\nfunction updateStorage(data) {\n  const arr = localStorage.getItem('array');\n  if (arr) {\n    const array = JSON.parse(arr);\n    array.push(data);\n    store(array);\n  } else {\n    const aa = [];\n    aa.push(data);\n    store(aa);\n  }\n}\n\nfunction GetData() {\n  const p = localStorage.getItem('array');\n  if (p) {\n    return JSON.parse(p);\n  }\n  return false;\n}\n\n\n\n//# sourceURL=webpack://todo_list/./src/js/storage.js?");

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
/******/ 			id: moduleId,
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
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;