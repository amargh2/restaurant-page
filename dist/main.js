/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./OrelegaOne-Regular.ttf */ "./src/OrelegaOne-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./background-ren-ran.jpg */ "./src/background-ren-ran.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n\n    font-family: 'Orlega';\n  \n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype');\n  \n    font-weight: 600;\n  \n    font-style: normal;\n  \n  }\n \n/*contact page styles*/\n.contact-header {\n    display: flex;\n    justify-content: center;\n    background-color: white;\n    background-color: rgb(0, 55, 55);\n    border-radius: 10px;\n    border-bottom: 5px solid white;\n    border-top: 5px solid white;\n    align-items:center;\n    color: white;\n}\n\n.contact {\n    display: grid;\n    grid-template-areas: \n    \". header .\"\n    \". nav .\"\n    \". form .\"\n    \". form .\"\n    \". form .\"\n    \"footer footer footer\";\n    background-color:lightgreen;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-size:contain;\n    background-repeat: no-repeat;\n    background-size:cover;\n    grid-template-columns: 1fr 3fr 1fr;\n    position:relative;\n    min-height:100vh;\n    grid-template-rows: .5fr .25fr 4fr 1fr;    \n    gap: 5px;\n    border-radius: 10px;\n    padding: 10px;\n    font-family: 'Orlega';\n    \n}\n\n.form {\n    grid-area: form;\n    padding-left: 250px;\n    padding-right: 250px;\n    padding-top: 25px;\n    padding-bottom: 25px;\n    border-radius: 10px;\n    background-color: lightgrey;\n    display: grid;\n    flex-direction: column;\n    justify-content: space-around;\n    gap: 10px;\n    border-top: rgb(0, 55, 55) solid 2rem;\n    border-right: rgb(0, 55, 55) solid 2rem;\n    border-bottom: rgb(0, 55, 55) solid 2rem;\n    border-left: rgb(0, 55, 55) solid 2rem;\n}\n\n.name-field {\n    display: flex;\n    justify-content: center;\n    gap: 10px;\n}\n\n.name-field > input {\n    width: 19rem;\n    border-radius: 1rem;\n}\n\n.email-field {\n    display: flex;\n    justify-content: center;\n    gap: 10px;\n}\n\n.email-field > input{\n    width: 19rem; \n    border-radius: 1rem;   \n}\n\n.message-field {\n    display: flex;\n    justify-content: center;\n    gap: 5px;\n}\n\n.form > h2 {\n    text-align: center;\n}\n\nh3>p {\n    font-weight: lighter;\n    font-size: smaller;\n}\n\nform {\n    font-size: larger;\n}\n\n.message-field > input {\n    width: 23rem;\n    height: 23rem;\n    border-radius: 1rem;\n    text-align: center;\n}\n\n.submit {\n    background-color:rgb(0, 55, 55);\n    border-radius: 10px;\n    padding: 1rem;\n    display: flex;\n    justify-content:center;\n    border-bottom: 5px solid white;\n    border-top: 5px solid white;\n}\n\n  /*menu page styles*/\n\n.menu-header {\n    grid-area: menu;\n    grid-column-start: 1;\n    grid-column-end: 5;\n    grid-row-start: 1;\n    grid-row-end: 1;\n    display: flex;\n    justify-content: center;\n    background-color: white;\n    background-color: rgb(0, 55, 55);\n    border-radius: 10px;\n    border-bottom: 5px solid white;\n    border-top: 5px solid white;\n    align-items:center;\n    color: white;\n}\n\n.menu {\n    display: grid;\n    grid-template-areas: \n    \". header .\"\n    \". nav .\"\n    \". menu .\"\n    \". menu .\"\n    \". menu .\"\n    \"footer footer footer\";\n    background-color:lightgreen;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-size:contain;\n    background-repeat: no-repeat;\n    background-size:cover;\n    grid-template-columns: 1fr 3fr 1fr;\n    position:relative;\n    min-height:100vh;\n    grid-template-rows: .5fr .25fr 4fr 1fr;    \n    gap: 5px;\n    border-radius: 10px;\n    padding: 10px;\n    font-family: 'Orlega';\n}\n\n.image-div {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr 1fr 1fr;\n    gap: 5px;\n}\n\n.description-div{\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr 1fr;\n    grid-template-columns: 1fr;\n    font-size: larger;\n    align-items:center;\n}\n\n.menu-div {\n    grid-area: menu;\n    grid-template-areas:\n    \"picture picture title title\"\n    \"picture picture description description\";\n    display:grid;\n    background-color:lightgrey;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr;\n    padding-left: 250px;\n    padding-right: 250px;\n    padding-top: 25px;\n    padding-bottom: 25px;\n    border-radius: 10px;\n    border-top:rgb(0, 55, 55) solid 2rem;\n    border-right: rgb(0, 55, 55) solid 2rem;\n    border-bottom: rgb(0, 55, 55) solid 2rem;\n    border-left: rgb(0, 55, 55) solid 2rem;\n    gap: 1rem;\n}\n\n.menu-img {\n    width: 10vw;\n    height: 20vh;\n    border:rgb(0, 55, 55) solid 5px;\n    border-radius: 5px;\n}\n\n.menu-item-div {\n    background-color: lightgrey;\n    display:grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 5px;\n    border-radius: 10px;\n}\n\n\n\n/*home page styles/static element styles*/\n.content {\n    display: grid;\n    grid-template-areas: \n    \". header .\"\n    \". nav .\"\n    \". main .\"\n    \". main .\"\n    \"footer footer footer\";\n    background-color:lightgreen;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-size:contain;\n    background-repeat: no-repeat;\n    background-size:cover;\n    grid-template-columns: 1fr 3fr 1fr;\n    position:relative;\n    min-height:100vh;\n    grid-template-rows: .5fr .25fr 4fr 1fr;\n    gap: 5px;\n    border-radius: 10px;\n    padding: 10px;\n    font-family: 'Orlega';\n}\n\nh1 {\n    background-color: white;\n    padding: 25px;\n    border-radius: 15px;\n    background-color: lightgrey;\n    width: 30rem;\n    text-align: center;\n}\n\n.header {\n    grid-area: header;\n    display: flex;\n    justify-content: center;\n    background-color: white;\n    background-color: rgb(0, 55, 55);\n    border-radius: 10px;\n    border-bottom: 5px solid lightgrey;\n    border-top: 5px solid lightgrey;\n    align-items:center;\n    \n}\n\n.nav {\n    display: flex;\n    grid-area: nav;\n    justify-content: center;\n    grid-template-columns: 1 1fr;\n    grid-template-rows: 1 1fr;\n    background-color: rgb(0, 55, 55);\n    padding: 20px;\n    gap: 20px;\n    border-bottom: solid lightgrey 5px;\n    border-top: solid lightgrey 5px;\n    border-radius: 10px;\n\n}\n\n.button {\n    width: 10rem;\n    height: 4rem;\n    background-color: lightgrey;\n    border-radius: 10px;\n    font-size: large;\n    font-weight: bold;\n    font-family: 'Orlega';\n}\n\n.button:hover {\n    background-color: lightblue;\n    color: white;\n}\n\n.text {\n    background-color: lightgrey;\n    border-radius: 10px;\n    padding:150px;\n}\n\n.main {\n    grid-area: main;\n    background-color: rgb(0, 55, 55);\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    border-radius: 10px;\n    padding: 10px;\n    border-bottom: 5px solid lightgrey;\n    border-top: 5px solid lightgrey;\n    gap: 10px;\n    font-size: larger;\n}\n\n.picture-grid {\n    display:grid;\n    gap: 5px;\n    grid-template-columns: 1fr 1fr;\n    grid-auto-flow: row;\n    padding: 10px;\n    background-color: lightgrey;\n    border-radius: 5px;\n\n}\n\n.main-picture {\n    max-width: 100%;\n    max-height: 100%;\n    border-radius: 5px;\n}\n\n\n.footer {\n    grid-area: footer;\n    background-color:rgb(0, 55, 55);\n    bottom:0;\n    color: white;\n    font-size:smaller;\n    border-radius: 10px;\n    border-top: lightgrey 5px solid;\n    border-bottom: lightgrey 5px solid;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n\n    font-family: 'Orlega';\n  \n    src: url('./OrelegaOne-Regular.ttf') format('truetype');\n  \n    font-weight: 600;\n  \n    font-style: normal;\n  \n  }\n \n/*contact page styles*/\n.contact-header {\n    display: flex;\n    justify-content: center;\n    background-color: white;\n    background-color: rgb(0, 55, 55);\n    border-radius: 10px;\n    border-bottom: 5px solid white;\n    border-top: 5px solid white;\n    align-items:center;\n    color: white;\n}\n\n.contact {\n    display: grid;\n    grid-template-areas: \n    \". header .\"\n    \". nav .\"\n    \". form .\"\n    \". form .\"\n    \". form .\"\n    \"footer footer footer\";\n    background-color:lightgreen;\n    background-image: url('./background-ren-ran.jpg');\n    background-size:contain;\n    background-repeat: no-repeat;\n    background-size:cover;\n    grid-template-columns: 1fr 3fr 1fr;\n    position:relative;\n    min-height:100vh;\n    grid-template-rows: .5fr .25fr 4fr 1fr;    \n    gap: 5px;\n    border-radius: 10px;\n    padding: 10px;\n    font-family: 'Orlega';\n    \n}\n\n.form {\n    grid-area: form;\n    padding-left: 250px;\n    padding-right: 250px;\n    padding-top: 25px;\n    padding-bottom: 25px;\n    border-radius: 10px;\n    background-color: lightgrey;\n    display: grid;\n    flex-direction: column;\n    justify-content: space-around;\n    gap: 10px;\n    border-top: rgb(0, 55, 55) solid 2rem;\n    border-right: rgb(0, 55, 55) solid 2rem;\n    border-bottom: rgb(0, 55, 55) solid 2rem;\n    border-left: rgb(0, 55, 55) solid 2rem;\n}\n\n.name-field {\n    display: flex;\n    justify-content: center;\n    gap: 10px;\n}\n\n.name-field > input {\n    width: 19rem;\n    border-radius: 1rem;\n}\n\n.email-field {\n    display: flex;\n    justify-content: center;\n    gap: 10px;\n}\n\n.email-field > input{\n    width: 19rem; \n    border-radius: 1rem;   \n}\n\n.message-field {\n    display: flex;\n    justify-content: center;\n    gap: 5px;\n}\n\n.form > h2 {\n    text-align: center;\n}\n\nh3>p {\n    font-weight: lighter;\n    font-size: smaller;\n}\n\nform {\n    font-size: larger;\n}\n\n.message-field > input {\n    width: 23rem;\n    height: 23rem;\n    border-radius: 1rem;\n    text-align: center;\n}\n\n.submit {\n    background-color:rgb(0, 55, 55);\n    border-radius: 10px;\n    padding: 1rem;\n    display: flex;\n    justify-content:center;\n    border-bottom: 5px solid white;\n    border-top: 5px solid white;\n}\n\n  /*menu page styles*/\n\n.menu-header {\n    grid-area: menu;\n    grid-column-start: 1;\n    grid-column-end: 5;\n    grid-row-start: 1;\n    grid-row-end: 1;\n    display: flex;\n    justify-content: center;\n    background-color: white;\n    background-color: rgb(0, 55, 55);\n    border-radius: 10px;\n    border-bottom: 5px solid white;\n    border-top: 5px solid white;\n    align-items:center;\n    color: white;\n}\n\n.menu {\n    display: grid;\n    grid-template-areas: \n    \". header .\"\n    \". nav .\"\n    \". menu .\"\n    \". menu .\"\n    \". menu .\"\n    \"footer footer footer\";\n    background-color:lightgreen;\n    background-image: url('./background-ren-ran.jpg');\n    background-size:contain;\n    background-repeat: no-repeat;\n    background-size:cover;\n    grid-template-columns: 1fr 3fr 1fr;\n    position:relative;\n    min-height:100vh;\n    grid-template-rows: .5fr .25fr 4fr 1fr;    \n    gap: 5px;\n    border-radius: 10px;\n    padding: 10px;\n    font-family: 'Orlega';\n}\n\n.image-div {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr 1fr 1fr;\n    gap: 5px;\n}\n\n.description-div{\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr 1fr;\n    grid-template-columns: 1fr;\n    font-size: larger;\n    align-items:center;\n}\n\n.menu-div {\n    grid-area: menu;\n    grid-template-areas:\n    \"picture picture title title\"\n    \"picture picture description description\";\n    display:grid;\n    background-color:lightgrey;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr;\n    padding-left: 250px;\n    padding-right: 250px;\n    padding-top: 25px;\n    padding-bottom: 25px;\n    border-radius: 10px;\n    border-top:rgb(0, 55, 55) solid 2rem;\n    border-right: rgb(0, 55, 55) solid 2rem;\n    border-bottom: rgb(0, 55, 55) solid 2rem;\n    border-left: rgb(0, 55, 55) solid 2rem;\n    gap: 1rem;\n}\n\n.menu-img {\n    width: 10vw;\n    height: 20vh;\n    border:rgb(0, 55, 55) solid 5px;\n    border-radius: 5px;\n}\n\n.menu-item-div {\n    background-color: lightgrey;\n    display:grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 5px;\n    border-radius: 10px;\n}\n\n\n\n/*home page styles/static element styles*/\n.content {\n    display: grid;\n    grid-template-areas: \n    \". header .\"\n    \". nav .\"\n    \". main .\"\n    \". main .\"\n    \"footer footer footer\";\n    background-color:lightgreen;\n    background-image: url('./background-ren-ran.jpg');\n    background-size:contain;\n    background-repeat: no-repeat;\n    background-size:cover;\n    grid-template-columns: 1fr 3fr 1fr;\n    position:relative;\n    min-height:100vh;\n    grid-template-rows: .5fr .25fr 4fr 1fr;\n    gap: 5px;\n    border-radius: 10px;\n    padding: 10px;\n    font-family: 'Orlega';\n}\n\nh1 {\n    background-color: white;\n    padding: 25px;\n    border-radius: 15px;\n    background-color: lightgrey;\n    width: 30rem;\n    text-align: center;\n}\n\n.header {\n    grid-area: header;\n    display: flex;\n    justify-content: center;\n    background-color: white;\n    background-color: rgb(0, 55, 55);\n    border-radius: 10px;\n    border-bottom: 5px solid lightgrey;\n    border-top: 5px solid lightgrey;\n    align-items:center;\n    \n}\n\n.nav {\n    display: flex;\n    grid-area: nav;\n    justify-content: center;\n    grid-template-columns: 1 1fr;\n    grid-template-rows: 1 1fr;\n    background-color: rgb(0, 55, 55);\n    padding: 20px;\n    gap: 20px;\n    border-bottom: solid lightgrey 5px;\n    border-top: solid lightgrey 5px;\n    border-radius: 10px;\n\n}\n\n.button {\n    width: 10rem;\n    height: 4rem;\n    background-color: lightgrey;\n    border-radius: 10px;\n    font-size: large;\n    font-weight: bold;\n    font-family: 'Orlega';\n}\n\n.button:hover {\n    background-color: lightblue;\n    color: white;\n}\n\n.text {\n    background-color: lightgrey;\n    border-radius: 10px;\n    padding:150px;\n}\n\n.main {\n    grid-area: main;\n    background-color: rgb(0, 55, 55);\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    border-radius: 10px;\n    padding: 10px;\n    border-bottom: 5px solid lightgrey;\n    border-top: 5px solid lightgrey;\n    gap: 10px;\n    font-size: larger;\n}\n\n.picture-grid {\n    display:grid;\n    gap: 5px;\n    grid-template-columns: 1fr 1fr;\n    grid-auto-flow: row;\n    padding: 10px;\n    background-color: lightgrey;\n    border-radius: 5px;\n\n}\n\n.main-picture {\n    max-width: 100%;\n    max-height: 100%;\n    border-radius: 5px;\n}\n\n\n.footer {\n    grid-area: footer;\n    background-color:rgb(0, 55, 55);\n    bottom:0;\n    color: white;\n    font-size:smaller;\n    border-radius: 10px;\n    border-top: lightgrey 5px solid;\n    border-bottom: lightgrey 5px solid;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/OrelegaOne-Regular.ttf":
/*!************************************!*\
  !*** ./src/OrelegaOne-Regular.ttf ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4ceedbbd136e6fb2937e.ttf";

/***/ }),

/***/ "./src/background-ren-ran.jpg":
/*!************************************!*\
  !*** ./src/background-ren-ran.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b4fb60c496352b6e4832.jpg";

/***/ }),

/***/ "./src/bowl-jo-sonn.jpg":
/*!******************************!*\
  !*** ./src/bowl-jo-sonn.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a588c245a8eee659c282.jpg";

/***/ }),

/***/ "./src/fruit.jpg":
/*!***********************!*\
  !*** ./src/fruit.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "70089ff7180c01b868d3.jpg";

/***/ }),

/***/ "./src/grain-bowl-olena-sergienko.jpg":
/*!********************************************!*\
  !*** ./src/grain-bowl-olena-sergienko.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4dd4079276d8847c7744.jpg";

/***/ }),

/***/ "./src/leaves.jpg":
/*!************************!*\
  !*** ./src/leaves.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9594a9ca27c433754eef.jpg";

/***/ }),

/***/ "./src/salad.jpg":
/*!***********************!*\
  !*** ./src/salad.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a4ecc55413a92a10f336.jpg";

/***/ }),

/***/ "./src/soup.jpg":
/*!**********************!*\
  !*** ./src/soup.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "17127a777e9474d89d00.jpg";

/***/ }),

/***/ "./src/toast.jpg":
/*!***********************!*\
  !*** ./src/toast.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "07a01c8c7ee377737985.jpg";

/***/ }),

/***/ "./src/veggie-burger-deryn-macey.jpg":
/*!*******************************************!*\
  !*** ./src/veggie-burger-deryn-macey.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "292f4e60aee3f4b7da41.jpg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
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
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _leaves_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./leaves.jpg */ "./src/leaves.jpg");
/* harmony import */ var _soup_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./soup.jpg */ "./src/soup.jpg");
/* harmony import */ var _salad_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./salad.jpg */ "./src/salad.jpg");
/* harmony import */ var _fruit_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fruit.jpg */ "./src/fruit.jpg");
/* harmony import */ var _toast_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toast.jpg */ "./src/toast.jpg");
/* harmony import */ var _veggie_burger_deryn_macey_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./veggie-burger-deryn-macey.jpg */ "./src/veggie-burger-deryn-macey.jpg");
/* harmony import */ var _bowl_jo_sonn_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bowl-jo-sonn.jpg */ "./src/bowl-jo-sonn.jpg");
/* harmony import */ var _grain_bowl_olena_sergienko_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./grain-bowl-olena-sergienko.jpg */ "./src/grain-bowl-olena-sergienko.jpg");
/* Imports for webpack/assets */













/*This class contains every function necessary for the construction of the
main page; it will be extended into other classes for the other pages;
this is the scaffold to build from.*/

class MainPage {

    generateContentDiv() {
        let contentDiv = document.createElement('div')
        contentDiv.classList.add('content')
        return contentDiv
    }

    generateHeader() {
        let headerDiv = document.createElement('div');
        headerDiv.classList.add('header')
        headerDiv.innerHTML = '<h1>Welcome to Plant-B</h1>';
        return headerDiv
    }

    generateButtons() {
        const menuButton = document.createElement('button');
        const contactButton = document.createElement('button');
        const aboutButton = document.createElement('button');
        menuButton.id = 'menu-button';
        aboutButton.id = 'about-button';
        contactButton.id = 'contact-buttons';
        menuButton.class
        menuButton.addEventListener('click', this.loadMenuPage);
        aboutButton.addEventListener('click', this.makeHomePage());
        buttons = [menuButton, aboutButton, contactButton];
        return buttons;
    }



    generateNav() {
        const navDiv = document.createElement('div');
        navDiv.classList.add('nav');
        

        const aboutButton = document.createElement('button')
        aboutButton.id = 'about-button'
        aboutButton.className = 'button';
        aboutButton.textContent = 'About Us'

        const menuButton = document.createElement('button')
        menuButton.id = 'menu-button';
        menuButton.className = 'button';
        menuButton.textContent = 'Menu'
        
        const contactButton = document.createElement('button');
        contactButton.id = 'contact-button';
        contactButton.className = 'button';
        contactButton.textContent = 'Contact Us'
    

        navDiv.appendChild(aboutButton)
        navDiv.appendChild(menuButton)
        navDiv.appendChild(contactButton)
        
        return navDiv
    }

 
    
    generateFooter() {
        let footerDiv = document.createElement('div');
        footerDiv.classList.add('footer')
        footerDiv.textContent = 'footer text footer text footer text';
        return footerDiv
    }

    generatePictureGrid() {
        let pictureDiv = document.createElement('div');
        pictureDiv.classList.add('picture-grid')
        
        const imgOne = new Image();
        imgOne.src = _veggie_burger_deryn_macey_jpg__WEBPACK_IMPORTED_MODULE_6__;
        imgOne.classList.add('main-picture')
        
        const imgTwo = new Image();
        imgTwo.src = _bowl_jo_sonn_jpg__WEBPACK_IMPORTED_MODULE_7__;
        imgTwo.classList.add('main-picture')

        const imgThree = new Image();
        imgThree.src = _grain_bowl_olena_sergienko_jpg__WEBPACK_IMPORTED_MODULE_8__;
        imgThree.classList.add('main-picture')
        
        const imgFour = new Image();
        imgFour.src = _soup_jpg__WEBPACK_IMPORTED_MODULE_2__;
        imgFour.classList.add('main-picture')

        pictureDiv.appendChild(imgOne);
        pictureDiv.appendChild(imgTwo);
        pictureDiv.appendChild(imgThree);
        pictureDiv.appendChild(imgFour);

        return pictureDiv
    }

    generateMainTextDiv() {
        let mainTextDiv = document.createElement('div')
        mainTextDiv.textContent = 'We are the best plant-based restaurant in the city! We offer a great menu of flavorful and fully vegan dishes that are filling and satisfying! Come see us!'
        mainTextDiv.classList.add('text')
        return mainTextDiv
    }

    generateMainDiv(pictureDiv, mainTextDiv) {
        let mainDiv = document.createElement('div')
        mainDiv.classList.add('main')
        mainDiv.appendChild(pictureDiv);
        mainDiv.appendChild(mainTextDiv);
        return mainDiv
    }

    generatePage(contentDiv, navDiv, mainDiv, footerDiv, headerDiv) {
        document.body.appendChild(contentDiv)
        contentDiv.appendChild(headerDiv);
        contentDiv.appendChild(navDiv)
        contentDiv.appendChild(footerDiv);
        contentDiv.appendChild(mainDiv);
    }

    makeHomePage() {
        this.generatePage(
            this.generateContentDiv(),
            this.generateNav(),
            this.generateMainDiv(
                this.generatePictureGrid(),
                this.generateMainTextDiv()
            ),
            this.generateFooter(),
            this.generateHeader()
        )
        this.addListenersToButtons()
    }

    appendStaticElements(containerDiv, navDiv, footerDiv, headerDiv){
        document.body.appendChild(containerDiv);
        containerDiv.appendChild(headerDiv);
        containerDiv.appendChild(navDiv)
        containerDiv.appendChild(footerDiv);
    }

    clearPage() {
        document.body.replaceChildren()
    }

    addListeners() {
        document.body.addEventListener('click', function(e){
            if (e.target.id= 'menu-button') {
                menuPage.clearPage();
                menuPage.loadMenuPage();
            }
            else if (e.target.id = 'about-button') {
                homePage.clearPage();
                homePage.makeHomePage();
            }
            else if (e.target.id = 'contact-button') {
                contactPage.clearPage();
                contactPage.generateForm();
            }
            else {
                return false
            }
        })
    }

    addListenersToButtons() {
       const aboutButton = document.getElementById('about-button');
       const menuButton = document.getElementById('menu-button');
       const contactButton = document.getElementById('contact-button');

       aboutButton.addEventListener('click', () =>{
           this.clearPage()
           this.makeHomePage()
       })

       menuButton.addEventListener('click', () => {
           this.clearPage();
           menuPage.loadMenuPage()
       })

       contactButton.addEventListener('click', () => {
       this.clearPage();
       contactPage.loadContactPage()
        })
    }

}

class MenuPage extends MainPage {
    
    generateMenuContainer() {
        const menuContainer = document.createElement('div');
        menuContainer.className = 'menu';
        const menuHeaderDiv = document.createElement('div');
        menuHeaderDiv.className = 'menu-header';
        return menuContainer
    }

    generateImages(){
        const img1 = new Image();
        img1.src = _soup_jpg__WEBPACK_IMPORTED_MODULE_2__;
        const img2 = new Image();
        img2.src = _salad_jpg__WEBPACK_IMPORTED_MODULE_3__;
        const img3 = new Image();
        img3.src = _toast_jpg__WEBPACK_IMPORTED_MODULE_5__;
        const img4 = new Image();
        img4.src = _bowl_jo_sonn_jpg__WEBPACK_IMPORTED_MODULE_7__;

        const images = [img1, img2, img3, img4];
        const imageDiv = document.createElement('div')
        imageDiv.className = 'image-div'

        images.forEach(image => image.classList.add('menu-img'));
        images.forEach(image => {
            imageDiv.appendChild(image)
        })

        return imageDiv
    }

    generateDescriptions() {

        const descriptionDiv = document.createElement('div');
        descriptionDiv.className = 'description-div';

        const title1 = document.createElement('h3');
        title1.className = 'title'
        title1.textContent = 'Butternut Bisque - $6'
        const desc1 = document.createElement('p');
        desc1.textContent = 'Butternut squash bisque with warm crusty bread.';
        descriptionDiv.appendChild(title1)
        title1.appendChild(desc1)

        const title2 = document.createElement('h3')
        title2.className = 'title'
        title2.textContent = 'Garden Salad - $10'
        const desc2 = document.createElement('p');
        desc2.textContent = "Salad, huh? Oh yeah, we got salad.";
        const finishedItem2 = title2.appendChild(desc2);
        descriptionDiv.appendChild(title2);
        title2.appendChild(desc2);
        
        const title3 = document.createElement('h3')
        title3.className = 'title'
        title3.textContent = 'Toast Board - $10'
        const desc3 = document.createElement('p');
        desc3.textContent = "We hate to tell you this, but you'll never own a house if you keep getting this. Might be worth it though?"
        const finishedItem3 = title3.appendChild(desc3);
        descriptionDiv.appendChild(title3);
        title3.appendChild(desc3);

        const title4 = document.createElement('h3')
        title4.className = 'title'
        title4.textContent = 'Grain Bowl - $10'
        const desc4 = document.createElement('p');
        desc4.textContent = 'Hearty and filling grain bowl with fresh ingredients and your choice of dressing.'
        descriptionDiv.appendChild(title4)
        title4.appendChild(desc4)

        
        
        return descriptionDiv
    }


    generateMenu(descriptionDiv, imageDiv, menuDiv) {
            
            const title = document.createElement('h2');
            title.textContent = 'Menu'
            const titleDiv = document.createElement('div')
            titleDiv.className = 'menu-header'
            titleDiv.appendChild(title)


            
            document.querySelector('.menu').appendChild(menuDiv);
            menuDiv.appendChild(titleDiv)
            menuDiv.appendChild(imageDiv);
            menuDiv.appendChild(descriptionDiv);        
        }
    

    generateMenuDiv() {
        const menuDiv = document.createElement('div');
        menuDiv.classList.add('menu-div');
        return menuDiv
    }

    loadMenuPage() {
        
        this.appendStaticElements(
            this.generateMenuContainer(),
            this.generateNav(),
            this.generateFooter(),
            this.generateHeader()
        )

        this.generateMenu(
            this.generateDescriptions(),
            this.generateImages(),
            this.generateMenuDiv()
        )
        
        this.addListenersToButtons()
    }
}

class ContactPage extends MainPage {
    
    generateContactContainer() {
        const contactContainer = document.createElement('div')
        contactContainer.className = 'contact'
        return contactContainer
    }

    generateForm() {

        const form = document.createElement("form");
        form.className = 'form';

        const contactHeader = document.createElement('div')
        contactHeader.className = 'contact-header'
        const title = document.createElement('h2');
        title.textContent = 'Want to get in touch?'
        contactHeader.appendChild(title)
        form.appendChild(contactHeader)

        const nameFieldDiv = document.createElement('div')
        nameFieldDiv.className = 'name-field'
        const nameInput = document.createElement('input');
        nameInput.type = 'text';
        const nameLabel = document.createElement('label');
        nameLabel.setAttribute('for', 'name')
        nameLabel.textContent = 'Name:'
        nameFieldDiv.appendChild(nameLabel);
        nameFieldDiv.appendChild(nameInput);
        

        const emailDiv = document.createElement('div');
        emailDiv.className = 'email-field'
        const emailInput = document.createElement('input');
        emailInput.type ='email';
        const emailLabel = document.createElement('label');
        emailLabel.setAttribute('for', 'email')
        emailLabel.textContent = 'Email:'
        emailDiv.appendChild(emailLabel);
        emailDiv.appendChild(emailInput);

        const messageDiv = document.createElement('div');
        messageDiv.className = 'message-field';
        const messageInput = document.createElement('input');
        messageInput.type = 'text';
        messageInput.value = "What's on your mind?"
        const messageLabel = document.createElement('label')
        messageLabel.setAttribute('for', 'message')
        messageDiv.appendChild(messageLabel);
        messageDiv.appendChild(messageInput)

        const submitDiv = document.createElement('div');
        submitDiv.className = 'submit';
        const submitInput = document.createElement('input');
        submitInput.type = 'submit';
        submitInput.value = 'Send';
        submitInput.className= 'button';
        const submitLabel = document.createElement('label');
        submitDiv.appendChild(submitLabel);
        submitDiv.appendChild(submitInput);



        const contactDiv = document.querySelector('.contact');


        form.appendChild(nameFieldDiv);
        form.appendChild(emailDiv);
        form.appendChild(messageDiv);
        form.appendChild(submitDiv)

        contactDiv.appendChild(form);
        document.body.appendChild(contactDiv);
    }

    loadContactPage() {
        
        this.appendStaticElements(
            this.generateContactContainer(),
            this.generateNav(),
            this.generateFooter(),
            this.generateHeader()
        )

        this.generateForm()
        this.addListenersToButtons()
    }
}

const menuPage = new MenuPage();
const homePage = new MainPage();
const contactPage = new ContactPage();
homePage.makeHomePage();





/*const homePage = new MainPage()

homePage.makeHomePage()*/
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFROztBQUVSO0FBQ0E7QUFDQTtBQUNBLFFBQVE7O0FBRVI7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLHNDQUFJO0FBQ3ZCO0FBQ0EsbUJBQW1CLHVDQUFLO0FBQ3hCO0FBQ0EsbUJBQW1CLHVDQUFLO0FBQ3hCO0FBQ0EsbUJBQW1CLDhDQUFJOztBQUV2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BOztBQUVBLHlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL09yZWxlZ2FPbmUtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2JhY2tncm91bmQtcmVuLXJhbi5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuXFxuICAgIGZvbnQtZmFtaWx5OiAnT3JsZWdhJztcXG4gIFxcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgXFxuICB9XFxuIFxcbi8qY29udGFjdCBwYWdlIHN0eWxlcyovXFxuLmNvbnRhY3QtaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgNTUsIDU1KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItdG9wOiA1cHggc29saWQgd2hpdGU7XFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uY29udGFjdCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICBcXFwiLiBoZWFkZXIgLlxcXCJcXG4gICAgXFxcIi4gbmF2IC5cXFwiXFxuICAgIFxcXCIuIGZvcm0gLlxcXCJcXG4gICAgXFxcIi4gZm9ybSAuXFxcIlxcbiAgICBcXFwiLiBmb3JtIC5cXFwiXFxuICAgIFxcXCJmb290ZXIgZm9vdGVyIGZvb3RlclxcXCI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6bGlnaHRncmVlbjtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOmNvbnRhaW47XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyIDFmcjtcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxuICAgIG1pbi1oZWlnaHQ6MTAwdmg7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogLjVmciAuMjVmciA0ZnIgMWZyOyAgICBcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnT3JsZWdhJztcXG4gICAgXFxufVxcblxcbi5mb3JtIHtcXG4gICAgZ3JpZC1hcmVhOiBmb3JtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDI1MHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNTBweDtcXG4gICAgcGFkZGluZy10b3A6IDI1cHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGJvcmRlci10b3A6IHJnYigwLCA1NSwgNTUpIHNvbGlkIDJyZW07XFxuICAgIGJvcmRlci1yaWdodDogcmdiKDAsIDU1LCA1NSkgc29saWQgMnJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbTogcmdiKDAsIDU1LCA1NSkgc29saWQgMnJlbTtcXG4gICAgYm9yZGVyLWxlZnQ6IHJnYigwLCA1NSwgNTUpIHNvbGlkIDJyZW07XFxufVxcblxcbi5uYW1lLWZpZWxkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLm5hbWUtZmllbGQgPiBpbnB1dCB7XFxuICAgIHdpZHRoOiAxOXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxuLmVtYWlsLWZpZWxkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmVtYWlsLWZpZWxkID4gaW5wdXR7XFxuICAgIHdpZHRoOiAxOXJlbTsgXFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07ICAgXFxufVxcblxcbi5tZXNzYWdlLWZpZWxkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4uZm9ybSA+IGgyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5oMz5wIHtcXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcXG59XFxuXFxuZm9ybSB7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbn1cXG5cXG4ubWVzc2FnZS1maWVsZCA+IGlucHV0IHtcXG4gICAgd2lkdGg6IDIzcmVtO1xcbiAgICBoZWlnaHQ6IDIzcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5zdWJtaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigwLCA1NSwgNTUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuICAvKm1lbnUgcGFnZSBzdHlsZXMqL1xcblxcbi5tZW51LWhlYWRlciB7XFxuICAgIGdyaWQtYXJlYTogbWVudTtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogNTtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XFxuICAgIGdyaWQtcm93LWVuZDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgNTUsIDU1KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItdG9wOiA1cHggc29saWQgd2hpdGU7XFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubWVudSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICBcXFwiLiBoZWFkZXIgLlxcXCJcXG4gICAgXFxcIi4gbmF2IC5cXFwiXFxuICAgIFxcXCIuIG1lbnUgLlxcXCJcXG4gICAgXFxcIi4gbWVudSAuXFxcIlxcbiAgICBcXFwiLiBtZW51IC5cXFwiXFxuICAgIFxcXCJmb290ZXIgZm9vdGVyIGZvb3RlclxcXCI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6bGlnaHRncmVlbjtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOmNvbnRhaW47XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyIDFmcjtcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxuICAgIG1pbi1oZWlnaHQ6MTAwdmg7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogLjVmciAuMjVmciA0ZnIgMWZyOyAgICBcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnT3JsZWdhJztcXG59XFxuXFxuLmltYWdlLWRpdiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmcjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi5kZXNjcmlwdGlvbi1kaXZ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXG59XFxuXFxuLm1lbnUtZGl2IHtcXG4gICAgZ3JpZC1hcmVhOiBtZW51O1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwicGljdHVyZSBwaWN0dXJlIHRpdGxlIHRpdGxlXFxcIlxcbiAgICBcXFwicGljdHVyZSBwaWN0dXJlIGRlc2NyaXB0aW9uIGRlc2NyaXB0aW9uXFxcIjtcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmxpZ2h0Z3JleTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gICAgcGFkZGluZy1sZWZ0OiAyNTBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMjUwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyLXRvcDpyZ2IoMCwgNTUsIDU1KSBzb2xpZCAycmVtO1xcbiAgICBib3JkZXItcmlnaHQ6IHJnYigwLCA1NSwgNTUpIHNvbGlkIDJyZW07XFxuICAgIGJvcmRlci1ib3R0b206IHJnYigwLCA1NSwgNTUpIHNvbGlkIDJyZW07XFxuICAgIGJvcmRlci1sZWZ0OiByZ2IoMCwgNTUsIDU1KSBzb2xpZCAycmVtO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5tZW51LWltZyB7XFxuICAgIHdpZHRoOiAxMHZ3O1xcbiAgICBoZWlnaHQ6IDIwdmg7XFxuICAgIGJvcmRlcjpyZ2IoMCwgNTUsIDU1KSBzb2xpZCA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLm1lbnUtaXRlbS1kaXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxuICAgIGRpc3BsYXk6Z3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBnYXA6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuXFxuXFxuLypob21lIHBhZ2Ugc3R5bGVzL3N0YXRpYyBlbGVtZW50IHN0eWxlcyovXFxuLmNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gICAgXFxcIi4gaGVhZGVyIC5cXFwiXFxuICAgIFxcXCIuIG5hdiAuXFxcIlxcbiAgICBcXFwiLiBtYWluIC5cXFwiXFxuICAgIFxcXCIuIG1haW4gLlxcXCJcXG4gICAgXFxcImZvb3RlciBmb290ZXIgZm9vdGVyXFxcIjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpsaWdodGdyZWVuO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6Y29udGFpbjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnIgMWZyO1xcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG4gICAgbWluLWhlaWdodDoxMDB2aDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAuNWZyIC4yNWZyIDRmciAxZnI7XFxuICAgIGdhcDogNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmb250LWZhbWlseTogJ09ybGVnYSc7XFxufVxcblxcbmgxIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDI1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXG4gICAgd2lkdGg6IDMwcmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgNTUsIDU1KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIGxpZ2h0Z3JleTtcXG4gICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIGxpZ2h0Z3JleTtcXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xcbiAgICBcXG59XFxuXFxuLm5hdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdyaWQtYXJlYTogbmF2O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxIDFmcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDU1LCA1NSk7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGdhcDogMjBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgbGlnaHRncmV5IDVweDtcXG4gICAgYm9yZGVyLXRvcDogc29saWQgbGlnaHRncmV5IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG5cXG59XFxuXFxuLmJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxMHJlbTtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LWZhbWlseTogJ09ybGVnYSc7XFxufVxcblxcbi5idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRleHQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6MTUwcHg7XFxufVxcblxcbi5tYWluIHtcXG4gICAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgNTUsIDU1KTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgbGlnaHRncmV5O1xcbiAgICBib3JkZXItdG9wOiA1cHggc29saWQgbGlnaHRncmV5O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbn1cXG5cXG4ucGljdHVyZS1ncmlkIHtcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBnYXA6IDVweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXG59XFxuXFxuLm1haW4tcGljdHVyZSB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgbWF4LWhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG5cXG4uZm9vdGVyIHtcXG4gICAgZ3JpZC1hcmVhOiBmb290ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDAsIDU1LCA1NSk7XFxuICAgIGJvdHRvbTowO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTpzbWFsbGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXItdG9wOiBsaWdodGdyZXkgNXB4IHNvbGlkO1xcbiAgICBib3JkZXItYm90dG9tOiBsaWdodGdyZXkgNXB4IHNvbGlkO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztJQUVJLHFCQUFxQjs7SUFFckIsK0RBQXVEOztJQUV2RCxnQkFBZ0I7O0lBRWhCLGtCQUFrQjs7RUFFcEI7O0FBRUYsc0JBQXNCO0FBQ3RCO0lBQ0ksYUFBYTtJQUNiLHVC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LFFBQVE7SUFDUiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0Isa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOzs7QUFHQTtJQUNJLGlCQUFpQjtJQUNqQiwrQkFBK0I7SUFDL0IsUUFBUTtJQUNSLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLCtCQUErQjtJQUMvQixrQ0FBa0M7QUFDdENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuXFxuICAgIGZvbnQtZmFtaWx5OiAnT3JsZWdhJztcXG4gIFxcbiAgICBzcmM6IHVybCgnLi9PcmVsZWdhT25lLVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgXFxuICB9XFxuIFxcbi8qY29udGFjdCBwYWdlIHN0eWxlcyovXFxuLmNvbnRhY3QtaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgNTUsIDU1KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItdG9wOiA1cHggc29saWQgd2hpdGU7XFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uY29udGFjdCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICBcXFwiLiBoZWFkZXIgLlxcXCJcXG4gICAgXFxcIi4gbmF2IC5cXFwiXFxuICAgIFxcXCIuIGZvcm0gLlxcXCJcXG4gICAgXFxcIi4gZm9ybSAuXFxcIlxcbiAgICBcXFwiLiBmb3JtIC5cXFwiXFxuICAgIFxcXCJmb290ZXIgZm9vdGVyIGZvb3RlclxcXCI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6bGlnaHRncmVlbjtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2JhY2tncm91bmQtcmVuLXJhbi5qcGcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOmNvbnRhaW47XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyIDFmcjtcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxuICAgIG1pbi1oZWlnaHQ6MTAwdmg7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogLjVmciAuMjVmciA0ZnIgMWZyOyAgICBcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnT3JsZWdhJztcXG4gICAgXFxufVxcblxcbi5mb3JtIHtcXG4gICAgZ3JpZC1hcmVhOiBmb3JtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDI1MHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNTBweDtcXG4gICAgcGFkZGluZy10b3A6IDI1cHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGJvcmRlci10b3A6IHJnYigwLCA1NSwgNTUpIHNvbGlkIDJyZW07XFxuICAgIGJvcmRlci1yaWdodDogcmdiKDAsIDU1LCA1NSkgc29saWQgMnJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbTogcmdiKDAsIDU1LCA1NSkgc29saWQgMnJlbTtcXG4gICAgYm9yZGVyLWxlZnQ6IHJnYigwLCA1NSwgNTUpIHNvbGlkIDJyZW07XFxufVxcblxcbi5uYW1lLWZpZWxkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLm5hbWUtZmllbGQgPiBpbnB1dCB7XFxuICAgIHdpZHRoOiAxOXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxuLmVtYWlsLWZpZWxkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmVtYWlsLWZpZWxkID4gaW5wdXR7XFxuICAgIHdpZHRoOiAxOXJlbTsgXFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07ICAgXFxufVxcblxcbi5tZXNzYWdlLWZpZWxkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4uZm9ybSA+IGgyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5oMz5wIHtcXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcXG59XFxuXFxuZm9ybSB7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbn1cXG5cXG4ubWVzc2FnZS1maWVsZCA+IGlucHV0IHtcXG4gICAgd2lkdGg6IDIzcmVtO1xcbiAgICBoZWlnaHQ6IDIzcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5zdWJtaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigwLCA1NSwgNTUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuICAvKm1lbnUgcGFnZSBzdHlsZXMqL1xcblxcbi5tZW51LWhlYWRlciB7XFxuICAgIGdyaWQtYXJlYTogbWVudTtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogNTtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XFxuICAgIGdyaWQtcm93LWVuZDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgNTUsIDU1KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItdG9wOiA1cHggc29saWQgd2hpdGU7XFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubWVudSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICBcXFwiLiBoZWFkZXIgLlxcXCJcXG4gICAgXFxcIi4gbmF2IC5cXFwiXFxuICAgIFxcXCIuIG1lbnUgLlxcXCJcXG4gICAgXFxcIi4gbWVudSAuXFxcIlxcbiAgICBcXFwiLiBtZW51IC5cXFwiXFxuICAgIFxcXCJmb290ZXIgZm9vdGVyIGZvb3RlclxcXCI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6bGlnaHRncmVlbjtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2JhY2tncm91bmQtcmVuLXJhbi5qcGcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOmNvbnRhaW47XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyIDFmcjtcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxuICAgIG1pbi1oZWlnaHQ6MTAwdmg7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogLjVmciAuMjVmciA0ZnIgMWZyOyAgICBcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnT3JsZWdhJztcXG59XFxuXFxuLmltYWdlLWRpdiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmcjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi5kZXNjcmlwdGlvbi1kaXZ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXG59XFxuXFxuLm1lbnUtZGl2IHtcXG4gICAgZ3JpZC1hcmVhOiBtZW51O1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwicGljdHVyZSBwaWN0dXJlIHRpdGxlIHRpdGxlXFxcIlxcbiAgICBcXFwicGljdHVyZSBwaWN0dXJlIGRlc2NyaXB0aW9uIGRlc2NyaXB0aW9uXFxcIjtcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmxpZ2h0Z3JleTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gICAgcGFkZGluZy1sZWZ0OiAyNTBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMjUwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyLXRvcDpyZ2IoMCwgNTUsIDU1KSBzb2xpZCAycmVtO1xcbiAgICBib3JkZXItcmlnaHQ6IHJnYigwLCA1NSwgNTUpIHNvbGlkIDJyZW07XFxuICAgIGJvcmRlci1ib3R0b206IHJnYigwLCA1NSwgNTUpIHNvbGlkIDJyZW07XFxuICAgIGJvcmRlci1sZWZ0OiByZ2IoMCwgNTUsIDU1KSBzb2xpZCAycmVtO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5tZW51LWltZyB7XFxuICAgIHdpZHRoOiAxMHZ3O1xcbiAgICBoZWlnaHQ6IDIwdmg7XFxuICAgIGJvcmRlcjpyZ2IoMCwgNTUsIDU1KSBzb2xpZCA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLm1lbnUtaXRlbS1kaXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxuICAgIGRpc3BsYXk6Z3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBnYXA6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuXFxuXFxuLypob21lIHBhZ2Ugc3R5bGVzL3N0YXRpYyBlbGVtZW50IHN0eWxlcyovXFxuLmNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gICAgXFxcIi4gaGVhZGVyIC5cXFwiXFxuICAgIFxcXCIuIG5hdiAuXFxcIlxcbiAgICBcXFwiLiBtYWluIC5cXFwiXFxuICAgIFxcXCIuIG1haW4gLlxcXCJcXG4gICAgXFxcImZvb3RlciBmb290ZXIgZm9vdGVyXFxcIjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpsaWdodGdyZWVuO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vYmFja2dyb3VuZC1yZW4tcmFuLmpwZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6Y29udGFpbjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnIgMWZyO1xcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG4gICAgbWluLWhlaWdodDoxMDB2aDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAuNWZyIC4yNWZyIDRmciAxZnI7XFxuICAgIGdhcDogNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmb250LWZhbWlseTogJ09ybGVnYSc7XFxufVxcblxcbmgxIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDI1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXG4gICAgd2lkdGg6IDMwcmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgNTUsIDU1KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIGxpZ2h0Z3JleTtcXG4gICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIGxpZ2h0Z3JleTtcXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xcbiAgICBcXG59XFxuXFxuLm5hdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdyaWQtYXJlYTogbmF2O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxIDFmcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDU1LCA1NSk7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGdhcDogMjBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgbGlnaHRncmV5IDVweDtcXG4gICAgYm9yZGVyLXRvcDogc29saWQgbGlnaHRncmV5IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG5cXG59XFxuXFxuLmJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxMHJlbTtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LWZhbWlseTogJ09ybGVnYSc7XFxufVxcblxcbi5idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRleHQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6MTUwcHg7XFxufVxcblxcbi5tYWluIHtcXG4gICAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgNTUsIDU1KTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgbGlnaHRncmV5O1xcbiAgICBib3JkZXItdG9wOiA1cHggc29saWQgbGlnaHRncmV5O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbn1cXG5cXG4ucGljdHVyZS1ncmlkIHtcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBnYXA6IDVweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXG59XFxuXFxuLm1haW4tcGljdHVyZSB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgbWF4LWhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG5cXG4uZm9vdGVyIHtcXG4gICAgZ3JpZC1hcmVhOiBmb290ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDAsIDU1LCA1NSk7XFxuICAgIGJvdHRvbTowO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTpzbWFsbGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXItdG9wOiBsaWdodGdyZXkgNXB4IHNvbGlkO1xcbiAgICBib3JkZXItYm90dG9tOiBsaWdodGdyZXkgNXB4IHNvbGlkO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCIvKiBJbXBvcnRzIGZvciB3ZWJwYWNrL2Fzc2V0cyAqL1xuXG5pbXBvcnQgJy4vc3R5bGUuY3NzJ1xuaW1wb3J0IExlYXZlcyBmcm9tICcuL2xlYXZlcy5qcGcnXG5pbXBvcnQgU291cCBmcm9tICcuL3NvdXAuanBnJ1xuaW1wb3J0IFNhbGFkIGZyb20gJy4vc2FsYWQuanBnJ1xuaW1wb3J0IEZydWl0IGZyb20gJy4vZnJ1aXQuanBnJ1xuaW1wb3J0IFRvYXN0IGZyb20gJy4vdG9hc3QuanBnJ1xuaW1wb3J0IEJ1cmdlciBmcm9tICcuL3ZlZ2dpZS1idXJnZXItZGVyeW4tbWFjZXkuanBnJ1xuaW1wb3J0IEJvd2wgZnJvbSAnLi9ib3dsLWpvLXNvbm4uanBnJ1xuaW1wb3J0IEdyYWluQm93bCBmcm9tICcuL2dyYWluLWJvd2wtb2xlbmEtc2VyZ2llbmtvLmpwZydcblxuXG5cbi8qVGhpcyBjbGFzcyBjb250YWlucyBldmVyeSBmdW5jdGlvbiBuZWNlc3NhcnkgZm9yIHRoZSBjb25zdHJ1Y3Rpb24gb2YgdGhlXG5tYWluIHBhZ2U7IGl0IHdpbGwgYmUgZXh0ZW5kZWQgaW50byBvdGhlciBjbGFzc2VzIGZvciB0aGUgb3RoZXIgcGFnZXM7XG50aGlzIGlzIHRoZSBzY2FmZm9sZCB0byBidWlsZCBmcm9tLiovXG5cbmNsYXNzIE1haW5QYWdlIHtcblxuICAgIGdlbmVyYXRlQ29udGVudERpdigpIHtcbiAgICAgICAgbGV0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBjb250ZW50RGl2LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnKVxuICAgICAgICByZXR1cm4gY29udGVudERpdlxuICAgIH1cblxuICAgIGdlbmVyYXRlSGVhZGVyKCkge1xuICAgICAgICBsZXQgaGVhZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhlYWRlckRpdi5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKVxuICAgICAgICBoZWFkZXJEaXYuaW5uZXJIVE1MID0gJzxoMT5XZWxjb21lIHRvIFBsYW50LUI8L2gxPic7XG4gICAgICAgIHJldHVybiBoZWFkZXJEaXZcbiAgICB9XG5cbiAgICBnZW5lcmF0ZUJ1dHRvbnMoKSB7XG4gICAgICAgIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY29uc3QgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjb25zdCBhYm91dEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBtZW51QnV0dG9uLmlkID0gJ21lbnUtYnV0dG9uJztcbiAgICAgICAgYWJvdXRCdXR0b24uaWQgPSAnYWJvdXQtYnV0dG9uJztcbiAgICAgICAgY29udGFjdEJ1dHRvbi5pZCA9ICdjb250YWN0LWJ1dHRvbnMnO1xuICAgICAgICBtZW51QnV0dG9uLmNsYXNzXG4gICAgICAgIG1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmxvYWRNZW51UGFnZSk7XG4gICAgICAgIGFib3V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5tYWtlSG9tZVBhZ2UoKSk7XG4gICAgICAgIGJ1dHRvbnMgPSBbbWVudUJ1dHRvbiwgYWJvdXRCdXR0b24sIGNvbnRhY3RCdXR0b25dO1xuICAgICAgICByZXR1cm4gYnV0dG9ucztcbiAgICB9XG5cblxuXG4gICAgZ2VuZXJhdGVOYXYoKSB7XG4gICAgICAgIGNvbnN0IG5hdkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBuYXZEaXYuY2xhc3NMaXN0LmFkZCgnbmF2Jyk7XG4gICAgICAgIFxuXG4gICAgICAgIGNvbnN0IGFib3V0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgYWJvdXRCdXR0b24uaWQgPSAnYWJvdXQtYnV0dG9uJ1xuICAgICAgICBhYm91dEJ1dHRvbi5jbGFzc05hbWUgPSAnYnV0dG9uJztcbiAgICAgICAgYWJvdXRCdXR0b24udGV4dENvbnRlbnQgPSAnQWJvdXQgVXMnXG5cbiAgICAgICAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIG1lbnVCdXR0b24uaWQgPSAnbWVudS1idXR0b24nO1xuICAgICAgICBtZW51QnV0dG9uLmNsYXNzTmFtZSA9ICdidXR0b24nO1xuICAgICAgICBtZW51QnV0dG9uLnRleHRDb250ZW50ID0gJ01lbnUnXG4gICAgICAgIFxuICAgICAgICBjb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNvbnRhY3RCdXR0b24uaWQgPSAnY29udGFjdC1idXR0b24nO1xuICAgICAgICBjb250YWN0QnV0dG9uLmNsYXNzTmFtZSA9ICdidXR0b24nO1xuICAgICAgICBjb250YWN0QnV0dG9uLnRleHRDb250ZW50ID0gJ0NvbnRhY3QgVXMnXG4gICAgXG5cbiAgICAgICAgbmF2RGl2LmFwcGVuZENoaWxkKGFib3V0QnV0dG9uKVxuICAgICAgICBuYXZEaXYuYXBwZW5kQ2hpbGQobWVudUJ1dHRvbilcbiAgICAgICAgbmF2RGl2LmFwcGVuZENoaWxkKGNvbnRhY3RCdXR0b24pXG4gICAgICAgIFxuICAgICAgICByZXR1cm4gbmF2RGl2XG4gICAgfVxuXG4gXG4gICAgXG4gICAgZ2VuZXJhdGVGb290ZXIoKSB7XG4gICAgICAgIGxldCBmb290ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZm9vdGVyRGl2LmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpXG4gICAgICAgIGZvb3RlckRpdi50ZXh0Q29udGVudCA9ICdmb290ZXIgdGV4dCBmb290ZXIgdGV4dCBmb290ZXIgdGV4dCc7XG4gICAgICAgIHJldHVybiBmb290ZXJEaXZcbiAgICB9XG5cbiAgICBnZW5lcmF0ZVBpY3R1cmVHcmlkKCkge1xuICAgICAgICBsZXQgcGljdHVyZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwaWN0dXJlRGl2LmNsYXNzTGlzdC5hZGQoJ3BpY3R1cmUtZ3JpZCcpXG4gICAgICAgIFxuICAgICAgICBjb25zdCBpbWdPbmUgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1nT25lLnNyYyA9IEJ1cmdlcjtcbiAgICAgICAgaW1nT25lLmNsYXNzTGlzdC5hZGQoJ21haW4tcGljdHVyZScpXG4gICAgICAgIFxuICAgICAgICBjb25zdCBpbWdUd28gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1nVHdvLnNyYyA9IEJvd2w7XG4gICAgICAgIGltZ1R3by5jbGFzc0xpc3QuYWRkKCdtYWluLXBpY3R1cmUnKVxuXG4gICAgICAgIGNvbnN0IGltZ1RocmVlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltZ1RocmVlLnNyYyA9IEdyYWluQm93bDtcbiAgICAgICAgaW1nVGhyZWUuY2xhc3NMaXN0LmFkZCgnbWFpbi1waWN0dXJlJylcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGltZ0ZvdXIgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1nRm91ci5zcmMgPSBTb3VwO1xuICAgICAgICBpbWdGb3VyLmNsYXNzTGlzdC5hZGQoJ21haW4tcGljdHVyZScpXG5cbiAgICAgICAgcGljdHVyZURpdi5hcHBlbmRDaGlsZChpbWdPbmUpO1xuICAgICAgICBwaWN0dXJlRGl2LmFwcGVuZENoaWxkKGltZ1R3byk7XG4gICAgICAgIHBpY3R1cmVEaXYuYXBwZW5kQ2hpbGQoaW1nVGhyZWUpO1xuICAgICAgICBwaWN0dXJlRGl2LmFwcGVuZENoaWxkKGltZ0ZvdXIpO1xuXG4gICAgICAgIHJldHVybiBwaWN0dXJlRGl2XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVNYWluVGV4dERpdigpIHtcbiAgICAgICAgbGV0IG1haW5UZXh0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgbWFpblRleHREaXYudGV4dENvbnRlbnQgPSAnV2UgYXJlIHRoZSBiZXN0IHBsYW50LWJhc2VkIHJlc3RhdXJhbnQgaW4gdGhlIGNpdHkhIFdlIG9mZmVyIGEgZ3JlYXQgbWVudSBvZiBmbGF2b3JmdWwgYW5kIGZ1bGx5IHZlZ2FuIGRpc2hlcyB0aGF0IGFyZSBmaWxsaW5nIGFuZCBzYXRpc2Z5aW5nISBDb21lIHNlZSB1cyEnXG4gICAgICAgIG1haW5UZXh0RGl2LmNsYXNzTGlzdC5hZGQoJ3RleHQnKVxuICAgICAgICByZXR1cm4gbWFpblRleHREaXZcbiAgICB9XG5cbiAgICBnZW5lcmF0ZU1haW5EaXYocGljdHVyZURpdiwgbWFpblRleHREaXYpIHtcbiAgICAgICAgbGV0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBtYWluRGl2LmNsYXNzTGlzdC5hZGQoJ21haW4nKVxuICAgICAgICBtYWluRGl2LmFwcGVuZENoaWxkKHBpY3R1cmVEaXYpO1xuICAgICAgICBtYWluRGl2LmFwcGVuZENoaWxkKG1haW5UZXh0RGl2KTtcbiAgICAgICAgcmV0dXJuIG1haW5EaXZcbiAgICB9XG5cbiAgICBnZW5lcmF0ZVBhZ2UoY29udGVudERpdiwgbmF2RGl2LCBtYWluRGl2LCBmb290ZXJEaXYsIGhlYWRlckRpdikge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnREaXYpXG4gICAgICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaGVhZGVyRGl2KTtcbiAgICAgICAgY29udGVudERpdi5hcHBlbmRDaGlsZChuYXZEaXYpXG4gICAgICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZm9vdGVyRGl2KTtcbiAgICAgICAgY29udGVudERpdi5hcHBlbmRDaGlsZChtYWluRGl2KTtcbiAgICB9XG5cbiAgICBtYWtlSG9tZVBhZ2UoKSB7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVQYWdlKFxuICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZUNvbnRlbnREaXYoKSxcbiAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVOYXYoKSxcbiAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVNYWluRGl2KFxuICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVQaWN0dXJlR3JpZCgpLFxuICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVNYWluVGV4dERpdigpXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZUZvb3RlcigpLFxuICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZUhlYWRlcigpXG4gICAgICAgIClcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnNUb0J1dHRvbnMoKVxuICAgIH1cblxuICAgIGFwcGVuZFN0YXRpY0VsZW1lbnRzKGNvbnRhaW5lckRpdiwgbmF2RGl2LCBmb290ZXJEaXYsIGhlYWRlckRpdil7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyRGl2KTtcbiAgICAgICAgY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKGhlYWRlckRpdik7XG4gICAgICAgIGNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChuYXZEaXYpXG4gICAgICAgIGNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChmb290ZXJEaXYpO1xuICAgIH1cblxuICAgIGNsZWFyUGFnZSgpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZXBsYWNlQ2hpbGRyZW4oKVxuICAgIH1cblxuICAgIGFkZExpc3RlbmVycygpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmlkPSAnbWVudS1idXR0b24nKSB7XG4gICAgICAgICAgICAgICAgbWVudVBhZ2UuY2xlYXJQYWdlKCk7XG4gICAgICAgICAgICAgICAgbWVudVBhZ2UubG9hZE1lbnVQYWdlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChlLnRhcmdldC5pZCA9ICdhYm91dC1idXR0b24nKSB7XG4gICAgICAgICAgICAgICAgaG9tZVBhZ2UuY2xlYXJQYWdlKCk7XG4gICAgICAgICAgICAgICAgaG9tZVBhZ2UubWFrZUhvbWVQYWdlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChlLnRhcmdldC5pZCA9ICdjb250YWN0LWJ1dHRvbicpIHtcbiAgICAgICAgICAgICAgICBjb250YWN0UGFnZS5jbGVhclBhZ2UoKTtcbiAgICAgICAgICAgICAgICBjb250YWN0UGFnZS5nZW5lcmF0ZUZvcm0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGFkZExpc3RlbmVyc1RvQnV0dG9ucygpIHtcbiAgICAgICBjb25zdCBhYm91dEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhYm91dC1idXR0b24nKTtcbiAgICAgICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtYnV0dG9uJyk7XG4gICAgICAgY29uc3QgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0LWJ1dHRvbicpO1xuXG4gICAgICAgYWJvdXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcbiAgICAgICAgICAgdGhpcy5jbGVhclBhZ2UoKVxuICAgICAgICAgICB0aGlzLm1ha2VIb21lUGFnZSgpXG4gICAgICAgfSlcblxuICAgICAgIG1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgIHRoaXMuY2xlYXJQYWdlKCk7XG4gICAgICAgICAgIG1lbnVQYWdlLmxvYWRNZW51UGFnZSgpXG4gICAgICAgfSlcblxuICAgICAgIGNvbnRhY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgdGhpcy5jbGVhclBhZ2UoKTtcbiAgICAgICBjb250YWN0UGFnZS5sb2FkQ29udGFjdFBhZ2UoKVxuICAgICAgICB9KVxuICAgIH1cblxufVxuXG5jbGFzcyBNZW51UGFnZSBleHRlbmRzIE1haW5QYWdlIHtcbiAgICBcbiAgICBnZW5lcmF0ZU1lbnVDb250YWluZXIoKSB7XG4gICAgICAgIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWVudUNvbnRhaW5lci5jbGFzc05hbWUgPSAnbWVudSc7XG4gICAgICAgIGNvbnN0IG1lbnVIZWFkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWVudUhlYWRlckRpdi5jbGFzc05hbWUgPSAnbWVudS1oZWFkZXInO1xuICAgICAgICByZXR1cm4gbWVudUNvbnRhaW5lclxuICAgIH1cblxuICAgIGdlbmVyYXRlSW1hZ2VzKCl7XG4gICAgICAgIGNvbnN0IGltZzEgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1nMS5zcmMgPSBTb3VwO1xuICAgICAgICBjb25zdCBpbWcyID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltZzIuc3JjID0gU2FsYWQ7XG4gICAgICAgIGNvbnN0IGltZzMgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1nMy5zcmMgPSBUb2FzdDtcbiAgICAgICAgY29uc3QgaW1nNCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWc0LnNyYyA9IEJvd2w7XG5cbiAgICAgICAgY29uc3QgaW1hZ2VzID0gW2ltZzEsIGltZzIsIGltZzMsIGltZzRdO1xuICAgICAgICBjb25zdCBpbWFnZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGltYWdlRGl2LmNsYXNzTmFtZSA9ICdpbWFnZS1kaXYnXG5cbiAgICAgICAgaW1hZ2VzLmZvckVhY2goaW1hZ2UgPT4gaW1hZ2UuY2xhc3NMaXN0LmFkZCgnbWVudS1pbWcnKSk7XG4gICAgICAgIGltYWdlcy5mb3JFYWNoKGltYWdlID0+IHtcbiAgICAgICAgICAgIGltYWdlRGl2LmFwcGVuZENoaWxkKGltYWdlKVxuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiBpbWFnZURpdlxuICAgIH1cblxuICAgIGdlbmVyYXRlRGVzY3JpcHRpb25zKCkge1xuXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRlc2NyaXB0aW9uRGl2LmNsYXNzTmFtZSA9ICdkZXNjcmlwdGlvbi1kaXYnO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIHRpdGxlMS5jbGFzc05hbWUgPSAndGl0bGUnXG4gICAgICAgIHRpdGxlMS50ZXh0Q29udGVudCA9ICdCdXR0ZXJudXQgQmlzcXVlIC0gJDYnXG4gICAgICAgIGNvbnN0IGRlc2MxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBkZXNjMS50ZXh0Q29udGVudCA9ICdCdXR0ZXJudXQgc3F1YXNoIGJpc3F1ZSB3aXRoIHdhcm0gY3J1c3R5IGJyZWFkLic7XG4gICAgICAgIGRlc2NyaXB0aW9uRGl2LmFwcGVuZENoaWxkKHRpdGxlMSlcbiAgICAgICAgdGl0bGUxLmFwcGVuZENoaWxkKGRlc2MxKVxuXG4gICAgICAgIGNvbnN0IHRpdGxlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgICAgICAgdGl0bGUyLmNsYXNzTmFtZSA9ICd0aXRsZSdcbiAgICAgICAgdGl0bGUyLnRleHRDb250ZW50ID0gJ0dhcmRlbiBTYWxhZCAtICQxMCdcbiAgICAgICAgY29uc3QgZGVzYzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGRlc2MyLnRleHRDb250ZW50ID0gXCJTYWxhZCwgaHVoPyBPaCB5ZWFoLCB3ZSBnb3Qgc2FsYWQuXCI7XG4gICAgICAgIGNvbnN0IGZpbmlzaGVkSXRlbTIgPSB0aXRsZTIuYXBwZW5kQ2hpbGQoZGVzYzIpO1xuICAgICAgICBkZXNjcmlwdGlvbkRpdi5hcHBlbmRDaGlsZCh0aXRsZTIpO1xuICAgICAgICB0aXRsZTIuYXBwZW5kQ2hpbGQoZGVzYzIpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgdGl0bGUzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICAgICAgICB0aXRsZTMuY2xhc3NOYW1lID0gJ3RpdGxlJ1xuICAgICAgICB0aXRsZTMudGV4dENvbnRlbnQgPSAnVG9hc3QgQm9hcmQgLSAkMTAnXG4gICAgICAgIGNvbnN0IGRlc2MzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBkZXNjMy50ZXh0Q29udGVudCA9IFwiV2UgaGF0ZSB0byB0ZWxsIHlvdSB0aGlzLCBidXQgeW91J2xsIG5ldmVyIG93biBhIGhvdXNlIGlmIHlvdSBrZWVwIGdldHRpbmcgdGhpcy4gTWlnaHQgYmUgd29ydGggaXQgdGhvdWdoP1wiXG4gICAgICAgIGNvbnN0IGZpbmlzaGVkSXRlbTMgPSB0aXRsZTMuYXBwZW5kQ2hpbGQoZGVzYzMpO1xuICAgICAgICBkZXNjcmlwdGlvbkRpdi5hcHBlbmRDaGlsZCh0aXRsZTMpO1xuICAgICAgICB0aXRsZTMuYXBwZW5kQ2hpbGQoZGVzYzMpO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgICAgICAgdGl0bGU0LmNsYXNzTmFtZSA9ICd0aXRsZSdcbiAgICAgICAgdGl0bGU0LnRleHRDb250ZW50ID0gJ0dyYWluIEJvd2wgLSAkMTAnXG4gICAgICAgIGNvbnN0IGRlc2M0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBkZXNjNC50ZXh0Q29udGVudCA9ICdIZWFydHkgYW5kIGZpbGxpbmcgZ3JhaW4gYm93bCB3aXRoIGZyZXNoIGluZ3JlZGllbnRzIGFuZCB5b3VyIGNob2ljZSBvZiBkcmVzc2luZy4nXG4gICAgICAgIGRlc2NyaXB0aW9uRGl2LmFwcGVuZENoaWxkKHRpdGxlNClcbiAgICAgICAgdGl0bGU0LmFwcGVuZENoaWxkKGRlc2M0KVxuXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGRlc2NyaXB0aW9uRGl2XG4gICAgfVxuXG5cbiAgICBnZW5lcmF0ZU1lbnUoZGVzY3JpcHRpb25EaXYsIGltYWdlRGl2LCBtZW51RGl2KSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ01lbnUnXG4gICAgICAgICAgICBjb25zdCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICB0aXRsZURpdi5jbGFzc05hbWUgPSAnbWVudS1oZWFkZXInXG4gICAgICAgICAgICB0aXRsZURpdi5hcHBlbmRDaGlsZCh0aXRsZSlcblxuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51JykuYXBwZW5kQ2hpbGQobWVudURpdik7XG4gICAgICAgICAgICBtZW51RGl2LmFwcGVuZENoaWxkKHRpdGxlRGl2KVxuICAgICAgICAgICAgbWVudURpdi5hcHBlbmRDaGlsZChpbWFnZURpdik7XG4gICAgICAgICAgICBtZW51RGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRGl2KTsgICAgICAgIFxuICAgICAgICB9XG4gICAgXG5cbiAgICBnZW5lcmF0ZU1lbnVEaXYoKSB7XG4gICAgICAgIGNvbnN0IG1lbnVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWVudURpdi5jbGFzc0xpc3QuYWRkKCdtZW51LWRpdicpO1xuICAgICAgICByZXR1cm4gbWVudURpdlxuICAgIH1cblxuICAgIGxvYWRNZW51UGFnZSgpIHtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuYXBwZW5kU3RhdGljRWxlbWVudHMoXG4gICAgICAgICAgICB0aGlzLmdlbmVyYXRlTWVudUNvbnRhaW5lcigpLFxuICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZU5hdigpLFxuICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZUZvb3RlcigpLFxuICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZUhlYWRlcigpXG4gICAgICAgIClcblxuICAgICAgICB0aGlzLmdlbmVyYXRlTWVudShcbiAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVEZXNjcmlwdGlvbnMoKSxcbiAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVJbWFnZXMoKSxcbiAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVNZW51RGl2KClcbiAgICAgICAgKVxuICAgICAgICBcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnNUb0J1dHRvbnMoKVxuICAgIH1cbn1cblxuY2xhc3MgQ29udGFjdFBhZ2UgZXh0ZW5kcyBNYWluUGFnZSB7XG4gICAgXG4gICAgZ2VuZXJhdGVDb250YWN0Q29udGFpbmVyKCkge1xuICAgICAgICBjb25zdCBjb250YWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgY29udGFjdENvbnRhaW5lci5jbGFzc05hbWUgPSAnY29udGFjdCdcbiAgICAgICAgcmV0dXJuIGNvbnRhY3RDb250YWluZXJcbiAgICB9XG5cbiAgICBnZW5lcmF0ZUZvcm0oKSB7XG5cbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgICAgICBmb3JtLmNsYXNzTmFtZSA9ICdmb3JtJztcblxuICAgICAgICBjb25zdCBjb250YWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgY29udGFjdEhlYWRlci5jbGFzc05hbWUgPSAnY29udGFjdC1oZWFkZXInXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSAnV2FudCB0byBnZXQgaW4gdG91Y2g/J1xuICAgICAgICBjb250YWN0SGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKVxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGNvbnRhY3RIZWFkZXIpXG5cbiAgICAgICAgY29uc3QgbmFtZUZpZWxkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgbmFtZUZpZWxkRGl2LmNsYXNzTmFtZSA9ICduYW1lLWZpZWxkJ1xuICAgICAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBuYW1lSW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgY29uc3QgbmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgbmFtZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ25hbWUnKVxuICAgICAgICBuYW1lTGFiZWwudGV4dENvbnRlbnQgPSAnTmFtZTonXG4gICAgICAgIG5hbWVGaWVsZERpdi5hcHBlbmRDaGlsZChuYW1lTGFiZWwpO1xuICAgICAgICBuYW1lRmllbGREaXYuYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcbiAgICAgICAgXG5cbiAgICAgICAgY29uc3QgZW1haWxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZW1haWxEaXYuY2xhc3NOYW1lID0gJ2VtYWlsLWZpZWxkJ1xuICAgICAgICBjb25zdCBlbWFpbElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgZW1haWxJbnB1dC50eXBlID0nZW1haWwnO1xuICAgICAgICBjb25zdCBlbWFpbExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgZW1haWxMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdlbWFpbCcpXG4gICAgICAgIGVtYWlsTGFiZWwudGV4dENvbnRlbnQgPSAnRW1haWw6J1xuICAgICAgICBlbWFpbERpdi5hcHBlbmRDaGlsZChlbWFpbExhYmVsKTtcbiAgICAgICAgZW1haWxEaXYuYXBwZW5kQ2hpbGQoZW1haWxJbnB1dCk7XG5cbiAgICAgICAgY29uc3QgbWVzc2FnZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtZXNzYWdlRGl2LmNsYXNzTmFtZSA9ICdtZXNzYWdlLWZpZWxkJztcbiAgICAgICAgY29uc3QgbWVzc2FnZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgbWVzc2FnZUlucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgICAgIG1lc3NhZ2VJbnB1dC52YWx1ZSA9IFwiV2hhdCdzIG9uIHlvdXIgbWluZD9cIlxuICAgICAgICBjb25zdCBtZXNzYWdlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgICAgIG1lc3NhZ2VMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdtZXNzYWdlJylcbiAgICAgICAgbWVzc2FnZURpdi5hcHBlbmRDaGlsZChtZXNzYWdlTGFiZWwpO1xuICAgICAgICBtZXNzYWdlRGl2LmFwcGVuZENoaWxkKG1lc3NhZ2VJbnB1dClcblxuICAgICAgICBjb25zdCBzdWJtaXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc3VibWl0RGl2LmNsYXNzTmFtZSA9ICdzdWJtaXQnO1xuICAgICAgICBjb25zdCBzdWJtaXRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHN1Ym1pdElucHV0LnR5cGUgPSAnc3VibWl0JztcbiAgICAgICAgc3VibWl0SW5wdXQudmFsdWUgPSAnU2VuZCc7XG4gICAgICAgIHN1Ym1pdElucHV0LmNsYXNzTmFtZT0gJ2J1dHRvbic7XG4gICAgICAgIGNvbnN0IHN1Ym1pdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgc3VibWl0RGl2LmFwcGVuZENoaWxkKHN1Ym1pdExhYmVsKTtcbiAgICAgICAgc3VibWl0RGl2LmFwcGVuZENoaWxkKHN1Ym1pdElucHV0KTtcblxuXG5cbiAgICAgICAgY29uc3QgY29udGFjdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0Jyk7XG5cblxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKG5hbWVGaWVsZERpdik7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZW1haWxEaXYpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKG1lc3NhZ2VEaXYpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdERpdilcblxuICAgICAgICBjb250YWN0RGl2LmFwcGVuZENoaWxkKGZvcm0pO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhY3REaXYpO1xuICAgIH1cblxuICAgIGxvYWRDb250YWN0UGFnZSgpIHtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuYXBwZW5kU3RhdGljRWxlbWVudHMoXG4gICAgICAgICAgICB0aGlzLmdlbmVyYXRlQ29udGFjdENvbnRhaW5lcigpLFxuICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZU5hdigpLFxuICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZUZvb3RlcigpLFxuICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZUhlYWRlcigpXG4gICAgICAgIClcblxuICAgICAgICB0aGlzLmdlbmVyYXRlRm9ybSgpXG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXJzVG9CdXR0b25zKClcbiAgICB9XG59XG5cbmNvbnN0IG1lbnVQYWdlID0gbmV3IE1lbnVQYWdlKCk7XG5jb25zdCBob21lUGFnZSA9IG5ldyBNYWluUGFnZSgpO1xuY29uc3QgY29udGFjdFBhZ2UgPSBuZXcgQ29udGFjdFBhZ2UoKTtcbmhvbWVQYWdlLm1ha2VIb21lUGFnZSgpO1xuXG5cblxuXG5cbi8qY29uc3QgaG9tZVBhZ2UgPSBuZXcgTWFpblBhZ2UoKVxuXG5ob21lUGFnZS5tYWtlSG9tZVBhZ2UoKSovIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9