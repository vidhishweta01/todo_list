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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\nbody {\\n  background-color: rgb(234, 242, 243);\\n}\\n\\nheader {\\n  background-color: rgb(4, 24, 43);\\n  color: blanchedalmond;\\n  padding-left: 10px;\\n  position: fixed;\\n  top: 0;\\n  width: 100%;\\n}\\n\\n.sidenav {\\n  height: 100%;\\n  width: 160px;\\n  position: fixed;\\n  z-index: 1;\\n  top: 6.19vh;\\n  left: 0;\\n  background-color: rgb(175, 231, 238);\\n  overflow-x: hidden;\\n  padding-top: 10px;\\n  padding-left: 5px;\\n}\\n\\n.today {\\n  display: flex;\\n  flex-direction: column;\\n  margin-top: 8vh;\\n  margin-left: 180px;\\n  background-color: cadetblue;\\n}\\n\\n.proj-name {\\n  text-align: center;\\n  background-color: rgb(67, 122, 124);\\n  color: white;\\n  margin-bottom: 0;\\n}\\n\\n.to-do {\\n  display: flex;\\n  flex-direction: column;\\n  border: 2px solid blue;\\n  width: 15%;\\n  background-color: rgb(209, 240, 219);\\n  padding: 1vh;\\n  text-align: center;\\n}\\n\\n.all-task {\\n  display: flex;\\n  flex-direction: row;\\n  margin-bottom: 0;\\n}\\n\\n.all-task-delete {\\n  width: 25%;\\n  margin-left: 33vw;\\n}\\n\\n.side-project {\\n  display: flex;\\n  flex-direction: row;\\n}\\n.sidenav button {\\n  background-color: rgb(175, 231, 238);\\n  display: block;\\n  color: rgb(34, 46, 48);\\n  border: none;\\n}\\n\\n\\n.show,\\n.show-task {\\n  background-color: rgb(0, 119, 128) !important;\\n  width: 99% !important;\\n}\\n\\n.content {\\n  margin-top: 10vh !important;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  width: 50%;\\n  margin-left: 35vw;\\n}\\n\\n.form,\\n.task-form {\\n  display: none;\\n  flex-direction: column;\\n  align-content: space-between;\\n  margin-left: 45vw;\\n  margin-top: 10vh;\\n  width: 30%;\\n}\\n\\n.form > h6,\\n.task-form > h6 {\\n  margin-top: 1rem;\\n  margin-bottom: 0.2rem;\\n}\\n\\n.task-form {\\n  display: none;\\n}\\n\\n.button-div {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-between;\\n}\\n\\n.clear-all,\\n.task-submit,\\n.task-cancel,\\n.submit,\\n.cancel {\\n  width: 49%;\\n  background-color: rgb(0, 119, 128);\\n  color: wheat;\\n}\\n\\n.clear-all,\\n.task-cancel,\\n.cancel {\\n  background-color: rgb(255, 115, 0);\\n}\\n\\n.project1 {\\n  background-color: rgb(174, 245, 250) !important;\\n  margin-bottom: 1vh;\\n  margin-top: 1vh;\\n  padding: 2vh;\\n}\\n\\n.AddTask,\\n.del {\\n  margin-right: 1vw;\\n}\\n\\n.modal {\\n  display: none;\\n  z-index: 3;\\n  position: fixed;\\n  left: 0;\\n  top: 44px !important;\\n  width: 100%;\\n  height: 100%;\\n  overflow: auto;\\n  background-color: rgb(0, 0, 0);\\n  background-color: rgba(0, 0, 0, 0.4);\\n  padding-top: 100px;\\n}\\n\\n.modal-content {\\n  background-color: rgb(4, 24, 43) !important;\\n  margin: auto;\\n  position: relative !important;\\n  padding: 10px !important;\\n  outline: 0 !important;\\n  width: 66% !important;\\n  color: white !important;\\n}\\n\\n.contain {\\n  margin-left: 3vw;\\n  text-align: center;\\n  padding: 10px;\\n}\\n\\n.cross {\\n  border: none;\\n  display: inline-block;\\n  padding: 8px 16px;\\n  vertical-align: middle;\\n  overflow: hidden;\\n  text-decoration: none;\\n  color: rgb(245, 240, 240);\\n  background-color: inherit;\\n  text-align: center;\\n  cursor: pointer !important;\\n  white-space: nowrap;\\n  font-size: 4vh !important;\\n  font-weight: bolder !important;\\n}\\n\\n.display-top-right {\\n  position: absolute;\\n  right: 0;\\n  top: 0;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo_list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/dom */ \"./src/js/dom.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _js_todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/todo */ \"./src/js/todo.js\");\n/* harmony import */ var _js_construc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/construc */ \"./src/js/construc.js\");\n/* harmony import */ var _js_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/storage */ \"./src/js/storage.js\");\n\n\n\n\n\n\nlet array = [];\nlet recentProject = [];\nlet taskey = [];\n(0,_js_dom__WEBPACK_IMPORTED_MODULE_0__.setup)();\nconst form = document.querySelector('.form');\nconst form1 = document.querySelector('.task-form');\n\nconst free = (cont) => {\n  let child = cont.lastElementChild;\n  while (child) {\n    cont.removeChild(child);\n    child = cont.lastElementChild;\n  }\n}\n\nconst deleteProject2 = (name) => {\n  if (recentProject.indexOf(name) !== -1) {\n    const j = recentProject.indexOf(name);\n    recentProject.splice(j, 1);\n    sideBar(recentProject);\n  }\n}\n\nfunction deleteAllTask() {\n  const k = this.parentNode.lastElementChild;\n  const j = this.parentNode.firstElementChild.innerHTML;\n  localStorage.removeItem(j);\n  if (taskey.indexOf(j) !== -1) {\n    const m = taskey.indexOf(j);\n    localStorage.removeItem('keyArray');\n    taskey.splice(j, 1);\n    (0,_js_storage__WEBPACK_IMPORTED_MODULE_4__.storKey)(taskey);\n  }\n  k.remove();\n  this.remove();\n  displayTask();\n}\n\nconst displayTask = () => {\n  const todo = document.querySelector('.today');\n  free(todo);\n  const k = (0,_js_storage__WEBPACK_IMPORTED_MODULE_4__.getkey)();\n  if (k) {\n    taskey = k;\n  }\n  taskey.forEach((key) => {\n    const Projectname = document.createElement('h6');\n    const delet = document.createElement('button');\n    delet.innerHTML = 'Delete all';\n    delet.setAttribute('class', 'all-task-delete');\n    const allTask = document.createElement('div');\n    allTask.setAttribute('class', 'all-task');\n    Projectname.setAttribute('class', 'proj-name');\n    Projectname.innerHTML = key;\n    const arr = (0,_js_storage__WEBPACK_IMPORTED_MODULE_4__.getTask)(key);\n    arr.forEach((task) => {\n      const div = document.createElement('div');\n      div.setAttribute('class', 'to-do');\n      const name = document.createElement('h6');\n      name.innerHTML = task.name;\n      const para = document.createElement('p');\n      para.innerHTML = task.description;\n      const date = document.createElement('h6');\n      date.innerHTML = task.dueDate;\n      div.append(name, date, para);\n      allTask.append(div);\n    });\n    todo.append(Projectname, allTask, delet);\n    delet.addEventListener('click', deleteAllTask);\n  });\n}\n\ndisplayTask();\n\nfunction deleteProject() {\n  localStorage.clear();\n  const k = array.slice(this.parentNode)[0].name;\n  array.splice(this.parentNode, 1);\n  this.parentNode.remove();\n  (0,_js_storage__WEBPACK_IMPORTED_MODULE_4__.store)(array);\n  deleteProject2(k);\n}\n\nconst sideBar = (recentProject) => {\n  const pro = document.querySelector('.project');\n  free(pro);\n  recentProject.forEach((project) => {\n    const div = document.createElement('div');\n    div.setAttribute('class', 'side-project')\n    const name = document.createElement('p');\n    name.setAttribute('class', 'titl');\n    name.innerHTML = project;\n    div.append(name);\n    pro.appendChild(div);\n  });\n}\n\nfunction Addtask() {\n  const k = this.parentNode.firstElementChild.innerHTML;\n  form1.style.display = 'flex';\n  document.querySelector('.projectname').innerHTML = k;\n}\n\n\nconst display = () => {\n  const h = (0,_js_storage__WEBPACK_IMPORTED_MODULE_4__.GetData)();\n  if (h) {\n    array = h;\n  }\n  const contain = document.querySelector('.content');\n  free(contain);\n  array.forEach((project) => {\n    const Div = document.createElement('div');\n    Div.setAttribute('class', 'project1');\n    const titl = document.createElement('h4');\n    titl.setAttribute('class', 'title');\n    titl.innerHTML = project.name;\n    const title = document.createElement('h6');\n    title.setAttribute('class', 'titl');\n    title.innerHTML = project.name;\n    const AddTask = document.createElement('button');\n    AddTask.setAttribute('class', 'AddTask');\n    AddTask.innerHTML = '+ Add Task';\n    const dele = document.createElement('button');\n    dele.setAttribute('class', 'del');\n    dele.innerHTML = 'delete';\n    Div.append(titl, AddTask, dele);\n    contain.appendChild(Div);\n    dele.addEventListener('click', deleteProject);\n    AddTask.addEventListener('click', Addtask);\n  });\n}\n\ndisplay();\n\nconst cross = () => {\n  document.getElementById('id01').style.display = 'none';\n}\n// Event listener\nconst adPro = document.querySelector('.Add-project');\nadPro.addEventListener('click', (j) => {\n  j.preventDefault();\n  form.style.display = 'flex';\n});\n\nconst submitButton = document.querySelector('.submit');\nsubmitButton.addEventListener('click', (getData) => {\n  getData.preventDefault();\n  const title = document.getElementById('101').value;\n  if (title !== '') {\n    (0,_js_construc__WEBPACK_IMPORTED_MODULE_3__.newProject)(title);\n    recentProject.push(title);\n    sideBar(recentProject);\n  } else {\n    document.getElementById('id01').style.display = 'block';\n  }\n  form.reset();\n  form.style.display = 'none';\n  display();\n}); \n\nconst cancel = document.querySelector('.cancel');\ncancel.addEventListener('click', (e) => {\n  e.preventDefault();\n  form.reset();\n  form.style.display = 'none';\n});\n\nconst sub = document.querySelector('.task-submit');\nsub.addEventListener('click', (h) => {\n  h.preventDefault();\n  const projectName = document.querySelector('.projectname').innerHTML;\n  const taskName = document.getElementById('102').value;\n  const description = document.getElementById('103').value;\n  const Date = document.getElementById('1od').value;\n  if (taskName !== '') {\n    const task = new _js_todo__WEBPACK_IMPORTED_MODULE_2__.default(taskName, description, Date);\n    const k = (0,_js_storage__WEBPACK_IMPORTED_MODULE_4__.getTask)(projectName); \n    if (k) {\n      (0,_js_storage__WEBPACK_IMPORTED_MODULE_4__.updateTask)(projectName, task);\n    } else {\n      const arr = [];\n      arr.push(task);\n      (0,_js_storage__WEBPACK_IMPORTED_MODULE_4__.storeTask)(projectName, arr);\n      (0,_js_storage__WEBPACK_IMPORTED_MODULE_4__.updateKeys)(projectName);\n    }\n  } else {\n    document.getElementById('id01').style.display = 'block';\n  }\n  form1.reset();\n  form1.style.display = 'none';\n  displayTask();\n});\n\nconst can = document.querySelector('.task-cancel');\ncan.addEventListener('click', (c) => {\n  c.preventDefault();\n  form1.reset();\n  form1.style.display = 'none';\n});\n\nconst show = document.querySelector('.show');\nshow.addEventListener('click', (ek) => {\n  ek.preventDefault();\n  display();\n});\n\nconst showtask = document.querySelector('.show-task');\nshowtask.addEventListener('click', (g) => {\n  g.preventDefault();\n  displayTask();\n});\n\nconst clearAll = document.querySelector('.clear-all');\nclearAll.addEventListener('click', (g) => {\n  g.preventDefault();\n  localStorage.clear();\n});\n\nconst spa = document.querySelector('.cross');\nspa.addEventListener('click', cross);\n\nconst tody = document.getElementById('Today');\ntody.addEventListener('click', (e) => {\n  e.preventDefault();\n  form1.style.display = 'flex';\n  document.querySelector('.projectname').innerHTML = 'Today';\n});\n\n//# sourceURL=webpack://todo_list/./src/index.js?");

/***/ }),

/***/ "./src/js/construc.js":
/*!****************************!*\
  !*** ./src/js/construc.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newProject\": () => (/* binding */ newProject),\n/* harmony export */   \"newTask\": () => (/* binding */ newTask)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/js/project.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ \"./src/js/todo.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ \"./src/js/storage.js\");\n\n\n\n\nconst free = (cont) => {\n  let child = cont.lastElementChild;\n  while (child) {\n    cont.removeChild(child);\n    child = cont.lastElementChild;\n  }\n}\n\nconst newProject = (name) => {\n  const project = new _project__WEBPACK_IMPORTED_MODULE_0__.default();\n  project.name = name;\n  (0,_storage__WEBPACK_IMPORTED_MODULE_2__.updateStorage)(project);\n  const contain2 = document.querySelector('.content');\n  free(contain2);\n}\n  \nconst newTask = (taskName, description, duedate, projectName) => {\n  const TasK = new _todo__WEBPACK_IMPORTED_MODULE_1__.default(taskName, description, duedate);\n  (0,_storage__WEBPACK_IMPORTED_MODULE_2__.updateTask)(projectName, TasK);\n}\n\n\n\n//# sourceURL=webpack://todo_list/./src/js/construc.js?");

/***/ }),

/***/ "./src/js/dom.js":
/*!***********************!*\
  !*** ./src/js/dom.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Today\": () => (/* binding */ Today),\n/* harmony export */   \"setup\": () => (/* binding */ setup)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/js/project.js\");\n\nconst Today = new _project__WEBPACK_IMPORTED_MODULE_0__.default('Today');\nconst TopNav = () => {\n  const element = document.createElement('header');\n  const todo = document.createElement('h1');\n  todo.innerHTML = 'TO-DO-LIST >>';\n  element.append(todo);\n  document.body.append(element);\n}\n\nconst sideNav = () => {\n  const element = document.createElement('div');\n  element.setAttribute('class', 'sidenav');\n  const defaultProject = document.createElement('div');\n  defaultProject.setAttribute('class', 'default-project');\n  const project = document.createElement('div');\n  const today = document.createElement('h5');\n  today.innerHTML = Today.name;\n  const AddTask = document.createElement('button');\n  AddTask.setAttribute('id', 'Today');\n  defaultProject.append(today, AddTask);\n  AddTask.setAttribute('class', 'AddTask');\n  AddTask.innerHTML = '+ Add Task';\n  project.setAttribute('class', 'projectt');\n  const projHead = document.createElement('h5');\n  projHead.innerHTML = 'Recent Projects';\n  const projectt = document.createElement('div');\n  projectt.setAttribute('class', 'project');\n  const AddProject = document.createElement('button');\n  AddProject.setAttribute('class', 'Add-project');\n  AddProject.innerHTML = '+ Add Project';\n  const show = document.createElement('button');\n  show.setAttribute('class', 'show');\n  show.innerHTML = 'show';\n  const br1 = document.createElement('br');\n  const showTask = document.createElement('button');\n  showTask.setAttribute('class', 'show-task');\n  showTask.innerHTML = 'Show Task';\n  project.append(defaultProject, projHead, projectt, AddProject, show, br1, showTask);\n  const clearAll = document.createElement('button');\n  clearAll.setAttribute('class', 'clear-all');\n  clearAll.innerHTML = 'clear All';\n  element.append(project, clearAll);\n\n  document.body.append(element);\n}\n\nconst contain = () => {\n  const element = document.createElement('div');\n  element.setAttribute('class', 'content');\n  const addproject = document.createElement('button');\n  addproject.setAttribute('class', 'add-project');\n  addproject.innerHTML = '+ Add Project';\n  document.body.append(element);\n}\n\nconst contain1 = () => {\n  const element = document.createElement('div');\n  element.setAttribute('class', 'today');\n  document.body.append(element);\n}\n\nconst contain2 = () => {\n  const element = document.createElement('form');\n  const head = document.createElement('h6');\n  head.innerHTML = 'Create Project';\n  element.setAttribute('id', 'form');\n  element.setAttribute('class', 'form');\n  const i = document.createElement('input');\n  i.setAttribute('type', 'text');\n  i.setAttribute('name', 'name');\n  i.setAttribute('id', '101');\n  const br = document.createElement('br');\n  const button = document.createElement('div');\n  button.setAttribute('class', 'button-div');\n  const sub = document.createElement('button');\n  sub.setAttribute('class', 'submit');\n  sub.innerHTML = 'Submit';\n  const cancel = document.createElement('button');\n  cancel.setAttribute('class', 'cancel');\n  cancel.innerHTML = 'Cancel';\n  button.append(sub, cancel);\n  element.append(head, i, br, button);\n  document.body.append(element);\n}\n\nconst contain4 = () => {\n  const element = document.createElement('form');\n  element.setAttribute('class', 'task-form');\n  const head = document.createElement('h6');\n  head.setAttribute('class', 'projectname');\n  head.innerHTML = 'Task';\n  const i = document.createElement('input');\n  i.setAttribute('type', 'text');\n  i.setAttribute('name', 'name');\n  i.setAttribute('id', '102');\n  const head2 = document.createElement('h6');\n  head2.innerHTML = 'Description';\n  const j = document.createElement('input');\n  j.setAttribute('type', 'textArea');\n  j.setAttribute('description', 'name');\n  j.setAttribute('id', '103');\n  \n  const date = document.createElement('input');\n  date.setAttribute('type', 'date');\n  date.setAttribute('id', '1od');\n  const br = document.createElement('br');\n  const br2 = document.createElement('br');\n  const button = document.createElement('div');\n  button.setAttribute('class', 'button-div');\n  const sub = document.createElement('button');\n  sub.setAttribute('class', 'task-submit');\n  sub.innerHTML = 'Submit';\n  const cancel = document.createElement('button');\n  cancel.setAttribute('class', 'task-cancel');\n  cancel.innerHTML = 'Cancel';\n  button.append(sub, cancel);\n  element.append(head, i, head2, j, br2, date, br, button);\n  document.body.append(element);\n}\n\n\nconst contain3 = () => {\n  const element = document.createElement('div');\n  element.setAttribute('id', 'id01');\n  element.setAttribute('class', 'modal');\n  const modalContent = document.createElement('div');\n  modalContent.setAttribute('class', 'modal-content');\n  const contain = document.createElement('div');\n  contain.setAttribute('class', 'contain');\n  const span = document.createElement('span');\n  span.setAttribute('class', 'cross display-top-right');\n  span.innerHTML = '&times;';\n  const par = document.createElement('div');\n  par.setAttribute('class', 'conten');\n  par.innerHTML = 'cannot create empty project or empty task';\n  contain.append(span, par);\n  modalContent.append(contain);\n  element.append(modalContent);\n  document.body.append(element);\n}\n\nconst setup = () => {\n  TopNav();\n  sideNav();\n  contain1();\n  contain2();\n  contain4();\n  contain();\n  contain3();\n}\n\n\n\n//# sourceURL=webpack://todo_list/./src/js/dom.js?");

/***/ }),

/***/ "./src/js/project.js":
/*!***************************!*\
  !*** ./src/js/project.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\n  constructor(name) {\n    this.name = name;\n    this.task = [];\n  }\n}\n\n//# sourceURL=webpack://todo_list/./src/js/project.js?");

/***/ }),

/***/ "./src/js/storage.js":
/*!***************************!*\
  !*** ./src/js/storage.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"store\": () => (/* binding */ store),\n/* harmony export */   \"updateStorage\": () => (/* binding */ updateStorage),\n/* harmony export */   \"GetData\": () => (/* binding */ GetData),\n/* harmony export */   \"storeTask\": () => (/* binding */ storeTask),\n/* harmony export */   \"getTask\": () => (/* binding */ getTask),\n/* harmony export */   \"updateTask\": () => (/* binding */ updateTask),\n/* harmony export */   \"updateKeys\": () => (/* binding */ updateKeys),\n/* harmony export */   \"getkey\": () => (/* binding */ getkey),\n/* harmony export */   \"storKey\": () => (/* binding */ storKey)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/js/dom.js\");\n\nfunction store(array) {\n  localStorage.setItem('array', JSON.stringify(array));\n}\n\nfunction updateStorage(data) {\n  const arr = GetData();\n  if (arr) {\n    if (arr.indexOf(data) == -1) {\n      arr.push(data);\n      store(arr);\n    } else {\n      return true;\n    }\n  } else {\n    const aa = [];\n    aa.push(data);\n    store(aa);\n  }\n}\n\nfunction GetData() {\n  const p = localStorage.getItem('array');\n  if (p) {\n    return JSON.parse(p);\n  }\n  return false;\n}\n\nconst storeTask = (projectName, task) => {\n  localStorage.setItem(projectName, JSON.stringify(task));\n}\n\nconst getTask = (projectName) => {\n  const task = localStorage.getItem(projectName);\n  if (task) {\n    return JSON.parse(task);\n  }\n  return false;\n}\n\nconst updateTask = (projectName, task) => {\n  const arr = getTask(projectName);\n  if (arr) {\n    arr.push(task);\n    storeTask(projectName, arr);\n  } else {\n    const aa = [];\n    aa.push(task);\n    storeTask(projectName, aa);\n  }\n}\n\nconst storKey = (keyArray) => {\n  localStorage.setItem('keyArray', JSON.stringify(keyArray));\n}\n\nconst getkey = () => {\n  const keyarr = localStorage.getItem('keyArray');\n  if (keyarr) {\n    return JSON.parse(keyarr);\n  }\n  return false;\n}\n\nconst updateKeys = (key) => {\n  const keyarr = getkey();\n  if (keyarr) {\n    keyarr.push(key);\n    storKey(keyarr);\n  } else {\n    const keyar = [];\n    keyar.push(key);\n    storKey(keyar);\n  }\n}\n\n\n\n//# sourceURL=webpack://todo_list/./src/js/storage.js?");

/***/ }),

/***/ "./src/js/todo.js":
/*!************************!*\
  !*** ./src/js/todo.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n    constructor(name, description, dueDate) {\n        this.name = name;\n        this.description = description;\n        this.dueDate = dueDate;\n    }\n}\n\n//# sourceURL=webpack://todo_list/./src/js/todo.js?");

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