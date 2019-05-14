(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/app"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/App.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: [],
  data: function data() {
    return {};
  },
  mounted: function mounted() {
    this.setDefaultParagraphs();
  },
  methods: {
    copyAll: function copyAll() {
      var comp = this;
      var text = this.composedSentences.join("\n\n");
      this.$copyText(text).then(function (e) {
        eventHub.$emit('copied-all');
      }, function (e) {
        setTimeout(function () {
          comp.$copyText(text).then(function (e) {
            eventHub.$emit('copied-all');
          }, function (e) {
            console.error(e);
          });
        }, 15);
      });
    },
    addParagraph: function addParagraph() {
      var nextIndex = this.paragraphs.length % 3;
      this.$store.commit('addParagraph', {
        length: this.defaultParagraphs[nextIndex].length
      });
      setTimeout(function () {
        window.scrollTo(0, document.body.scrollHeight);
      }, 2);
    },
    setDefaultParagraphs: function setDefaultParagraphs() {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.defaultParagraphs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var defaultParagraph = _step.value;
          this.$store.commit('addParagraph', Object.assign({}, defaultParagraph));
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    },
    getReducedParagraphIndex: function getReducedParagraphIndex(index) {
      return index % 3;
    },
    getReducedSentenceIndex: function getReducedSentenceIndex(index, paragraphIndex) {
      var count = this.baseParagraphs[paragraphIndex].length;
      return index % count;
    }
  },
  computed: {
    composedSentences: function composedSentences() {
      var _this = this;

      var composedSentences = [];
      var baseIndex;
      var baseParagraph;
      var baseSentenceIndex;
      var composed;
      var paragraph;
      Object.keys(this.paragraphs).forEach(function (paragraphIndex) {
        paragraph = _this.paragraphs[paragraphIndex];
        baseIndex = _this.getReducedParagraphIndex(paragraphIndex);
        baseParagraph = _this.baseParagraphs[baseIndex];
        composed = [];

        for (var sentenceIndex = 0; sentenceIndex < paragraph.length; sentenceIndex++) {
          baseSentenceIndex = _this.getReducedSentenceIndex(sentenceIndex, baseIndex);
          composed.push(baseParagraph[baseSentenceIndex]);
        }

        composedSentences.push(composed.join(" "));
      });
      return composedSentences;
    },
    paragraphs: function paragraphs() {
      return this.$store.getters.paragraphs;
    },
    defaultParagraphs: function defaultParagraphs() {
      return this.$store.getters.defaultParagraphs;
    },
    baseParagraphs: function baseParagraphs() {
      return this.$store.getters.baseParagraphs;
    },
    currentYear: function currentYear() {
      return this.$store.getters.currentYear;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LoremParagraph.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/LoremParagraph.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['paragraph', 'composedParagraph', 'index', 'paragraphCount'],
  data: function data() {
    return {
      paragraphClass: '',
      flashTimeout: null
    };
  },
  mounted: function mounted() {},
  methods: {
    flashParagraph: function flashParagraph(e) {
      var _this = this;

      clearTimeout(this.flashTimeout);
      this.paragraphClass = '';
      this.paragraphClass = 'flash';
      this.flashTimeout = setTimeout(function () {
        _this.paragraphClass = '';
      }, 300);
    },
    increaseSentences: function increaseSentences() {
      this.$store.commit('updateParagraphLength', {
        paragraphIndex: this.index,
        action: 'increase'
      });
    },
    reduceSentences: function reduceSentences() {
      if (!this.canReduce) {
        return;
      }

      this.$store.commit('updateParagraphLength', {
        paragraphIndex: this.index,
        action: 'reduce'
      });
    },
    removeParagraph: function removeParagraph() {
      if (!this.canRemove) {
        return;
      }

      this.$store.commit('removeParagraph', this.index);
    }
  },
  computed: {
    canReduce: function canReduce() {
      return this.paragraph.length > 1 || this.$parent.paragraphs.length > 1;
    },
    canRemove: function canRemove() {
      return this.paragraphCount > 1;
    }
  },
  created: function created() {
    eventHub.$on('copied-all', this.flashParagraph);
  },
  beforeDestroy: function beforeDestroy() {
    eventHub.$off('copied-all', this.flashParagraph);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/App.vue?vue&type=template&id=332fccf4&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/App.vue?vue&type=template&id=332fccf4& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass:
        "main-container container-fluid d-flex flex-column justify-content-between"
    },
    [
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-12 col-lg-8" },
          [
            _c("h1", { staticClass: "text-center" }, [
              _vm._v("Simple Lorem Ipsum")
            ]),
            _vm._v(" "),
            _vm._l(_vm.paragraphs, function(paragraph, index) {
              return _c("lorem-paragraph", {
                key: "paragraph-" + index,
                attrs: {
                  paragraph: paragraph,
                  "composed-paragraph": _vm.composedSentences[index],
                  index: index,
                  "paragraph-count": _vm.paragraphs.length
                }
              })
            }),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "d-flex flex-row justify-content-center mb-5" },
              [
                _c(
                  "button",
                  {
                    staticClass:
                      "btn btn-outline-primary control-button btn-add",
                    attrs: { type: "button" },
                    on: { click: _vm.addParagraph }
                  },
                  [_c("i", { staticClass: "fa fa-plus" })]
                )
              ]
            )
          ],
          2
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "col-12 col-lg-4 d-flex justify-content-center mb-5 mb-lg-0"
          },
          [
            _c(
              "button",
              {
                staticClass:
                  "btn btn-outline-success btn-copy-all control-button",
                attrs: { type: "button" },
                on: { click: _vm.copyAll }
              },
              [_vm._m(0)]
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c("footer", { staticClass: "row" }, [
        _c("div", { staticClass: "col-12 col-lg-8 text-center" }, [
          _vm._v("\n\t\t\t© " + _vm._s(_vm.currentYear) + " Simple Lorem by "),
          _c(
            "a",
            { attrs: { href: "https://gtcrais.net", target: "_blank" } },
            [_vm._v("GTCrais")]
          )
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon-container" }, [
      _c("i", { staticClass: "fa fa-file-o first" }),
      _vm._v(" "),
      _c("i", { staticClass: "fa fa-file-o second" }),
      _vm._v(" "),
      _c("i", { staticClass: "fa fa-file-o third" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LoremParagraph.vue?vue&type=template&id=2ac036a2&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/LoremParagraph.vue?vue&type=template&id=2ac036a2& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "paragraph-container d-flex justify-content-between" },
    [
      _c("p", { class: _vm.paragraphClass }, [
        _vm._v("\n\t\t" + _vm._s(_vm.composedParagraph) + "\n\t")
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "controls right-controls d-flex flex-column align-items-center"
        },
        [
          _c(
            "button",
            {
              directives: [
                {
                  name: "clipboard",
                  rawName: "v-clipboard:copy",
                  value: _vm.composedParagraph,
                  expression: "composedParagraph",
                  arg: "copy"
                },
                {
                  name: "clipboard",
                  rawName: "v-clipboard:success",
                  value: _vm.flashParagraph,
                  expression: "flashParagraph",
                  arg: "success"
                }
              ],
              staticClass: "btn btn-outline-success btn-copy control-button",
              attrs: { type: "button" }
            },
            [_c("i", { staticClass: "fa fa-copy" })]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass:
                "btn btn-outline-primary btn-increase control-button mb-1",
              attrs: { type: "button" },
              on: { click: _vm.increaseSentences }
            },
            [_c("i", { staticClass: "fa fa-expand" })]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-outline-primary btn-reduce control-button",
              class: { disabled: !_vm.canReduce },
              attrs: { type: "button" },
              on: { click: _vm.reduceSentences }
            },
            [_c("i", { staticClass: "fa fa-compress" })]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-outline-warning btn-remove control-button",
              class: { disabled: !_vm.canRemove },
              attrs: { type: "button" },
              on: { click: _vm.removeParagraph }
            },
            [_c("i", { staticClass: "fa fa-trash-o" })]
          )
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/css/app.styl":
/*!********************************!*\
  !*** ./resources/css/app.styl ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/js sync recursive \\.vue$/":
/*!***********************************!*\
  !*** ./resources/js sync \.vue$/ ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./components/App.vue": "./resources/js/components/App.vue",
	"./components/LoremParagraph.vue": "./resources/js/components/LoremParagraph.vue"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./resources/js sync recursive \\.vue$/";

/***/ }),

/***/ "./resources/js/App.js":
/*!*****************************!*\
  !*** ./resources/js/App.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_ComponentManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/ComponentManager.js */ "./resources/js/services/ComponentManager.js");
/* harmony import */ var _services_StoreManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/StoreManager.js */ "./resources/js/services/StoreManager.js");
__webpack_require__(/*! ./bootstrap/libraries.js */ "./resources/js/bootstrap/libraries.js");

Vue.use(VueCookie);
Vue.use(VueClipboard);
Vue.use(Vuex);
window.eventHub = new Vue();


window.store = _services_StoreManager_js__WEBPACK_IMPORTED_MODULE_1__["default"].setupStore();
_services_ComponentManager_js__WEBPACK_IMPORTED_MODULE_0__["default"].registerComponents();
window.eventHub = new Vue();
var app = new Vue({
  el: '#vue-wrapper',
  store: store
});

/***/ }),

/***/ "./resources/js/bootstrap/libraries.js":
/*!*********************************************!*\
  !*** ./resources/js/bootstrap/libraries.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-cookie */ "./node_modules/vue-cookie/src/vue-cookie.js");
/* harmony import */ var vue_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_cookie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_clipboard2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-clipboard2 */ "./node_modules/vue-clipboard2/vue-clipboard.js");
/* harmony import */ var vue_clipboard2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_clipboard2__WEBPACK_IMPORTED_MODULE_2__);
//require('jquery');
//require('bootstrap');
//window.Popper = require('popper.js').default;
//require('lodash');

window.Vuex = vuex__WEBPACK_IMPORTED_MODULE_0__["default"];

window.VueCookie = vue_cookie__WEBPACK_IMPORTED_MODULE_1___default.a;

window.VueClipboard = vue_clipboard2__WEBPACK_IMPORTED_MODULE_2___default.a;
window.Vue = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");

/***/ }),

/***/ "./resources/js/components/App.vue":
/*!*****************************************!*\
  !*** ./resources/js/components/App.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_332fccf4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=332fccf4& */ "./resources/js/components/App.vue?vue&type=template&id=332fccf4&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ "./resources/js/components/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_332fccf4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_332fccf4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/App.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/components/App.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/App.vue?vue&type=template&id=332fccf4&":
/*!************************************************************************!*\
  !*** ./resources/js/components/App.vue?vue&type=template&id=332fccf4& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_332fccf4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=332fccf4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/App.vue?vue&type=template&id=332fccf4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_332fccf4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_332fccf4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/LoremParagraph.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/LoremParagraph.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LoremParagraph_vue_vue_type_template_id_2ac036a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoremParagraph.vue?vue&type=template&id=2ac036a2& */ "./resources/js/components/LoremParagraph.vue?vue&type=template&id=2ac036a2&");
/* harmony import */ var _LoremParagraph_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoremParagraph.vue?vue&type=script&lang=js& */ "./resources/js/components/LoremParagraph.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LoremParagraph_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LoremParagraph_vue_vue_type_template_id_2ac036a2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LoremParagraph_vue_vue_type_template_id_2ac036a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/LoremParagraph.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/LoremParagraph.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/LoremParagraph.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoremParagraph_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./LoremParagraph.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LoremParagraph.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoremParagraph_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/LoremParagraph.vue?vue&type=template&id=2ac036a2&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/LoremParagraph.vue?vue&type=template&id=2ac036a2& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoremParagraph_vue_vue_type_template_id_2ac036a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./LoremParagraph.vue?vue&type=template&id=2ac036a2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LoremParagraph.vue?vue&type=template&id=2ac036a2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoremParagraph_vue_vue_type_template_id_2ac036a2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoremParagraph_vue_vue_type_template_id_2ac036a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/services/ComponentManager.js":
/*!***************************************************!*\
  !*** ./resources/js/services/ComponentManager.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ComponentManager =
/*#__PURE__*/
function () {
  function ComponentManager() {
    _classCallCheck(this, ComponentManager);
  }

  _createClass(ComponentManager, null, [{
    key: "registerComponents",
    value: function registerComponents() {
      var components = {};

      var files = __webpack_require__("./resources/js sync recursive \\.vue$/");

      files.keys().map(function (key) {
        var componentName = key.split('/').pop().split('.')[0];
        components[componentName] = Vue.component(componentName, files(key)["default"]);
      });
      return components;
    }
  }]);

  return ComponentManager;
}();

/* harmony default export */ __webpack_exports__["default"] = (ComponentManager);

/***/ }),

/***/ "./resources/js/services/StoreManager.js":
/*!***********************************************!*\
  !*** ./resources/js/services/StoreManager.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var StoreManager =
/*#__PURE__*/
function () {
  function StoreManager() {
    _classCallCheck(this, StoreManager);
  }

  _createClass(StoreManager, null, [{
    key: "setupStore",
    value: function setupStore() {
      return new Vuex.Store({
        state: Object.assign(StoreManager.storeState()),
        getters: Object.assign(StoreManager.storeGetters()),
        mutations: Object.assign(StoreManager.storeMutations()),
        actions: Object.assign(StoreManager.storeActions())
      });
    }
  }, {
    key: "storeState",
    value: function storeState() {
      return {
        currentYear: currentYear,
        defaultParagraphs: [{
          length: 8
        }, {
          length: 4
        }, {
          length: 16
        }],
        paragraphs: [],
        baseParagraphs: [["Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Donec tincidunt tortor non efficitur egestas.", "Integer maximus dui ut porta efficitur.", "Nullam consectetur tincidunt scelerisque.", "In facilisis varius ullamcorper.", "Phasellus nibh odio, vehicula non commodo vel, ullamcorper eu quam.", "Nunc at congue elit, ac gravida velit.", "Cras eu quam eget augue vehicula faucibus ac sed enim.", "Integer non ipsum in nisi sagittis aliquam.", "Nullam at porta ex.", "Fusce gravida, neque sit amet ultricies semper, magna magna lobortis nunc, sit amet varius elit risus vel turpis.", "Mauris augue lacus, aliquam et leo quis, tempor eleifend massa.", "Cras elementum arcu nec turpis accumsan, vel laoreet nisi elementum.", "Praesent laoreet urna eget orci eleifend fermentum.", "Cras congue fermentum enim, id elementum magna pretium vitae.", "Etiam mollis tincidunt semper.", "Proin auctor turpis eu erat auctor, a placerat libero lacinia.", "Interdum et malesuada fames ac ante ipsum primis in faucibus.", "Curabitur urna felis, imperdiet vel vulputate eget, sagittis eu ipsum.", "In augue lacus, pellentesque in lacus ac, bibendum vestibulum sem.", "Ut finibus pretium efficitur."], ["Etiam tristique mauris eu elit rutrum, vitae vehicula nunc gravida.", "Vestibulum ornare metus eget semper vestibulum.", "Integer auctor arcu eget mi cursus luctus non ac orci.", "Donec eu mi egestas, volutpat dolor ut, cursus arcu.", "Praesent blandit turpis interdum, feugiat risus quis, efficitur lorem.", "Duis blandit quis ligula a dignissim.", "Morbi consectetur ante sit amet sapien porta ornare.", "Nullam tristique nisi tortor, viverra euismod leo tincidunt id.", "Vestibulum tempor ante a felis interdum, id placerat metus ultrices.", "Suspendisse in aliquet sem.", "In ut leo ipsum.", "Donec sollicitudin risus a odio finibus tempus.", "Nunc dignissim mi eu tristique hendrerit.", "Vestibulum laoreet vitae arcu sit amet condimentum.", "Aenean risus ipsum, fringilla at blandit nec, convallis eu turpis.", "Morbi erat nibh, tempor sit amet lorem vitae, gravida tincidunt elit.", "Suspendisse vitae dapibus augue, quis dignissim lectus.", "Aenean mattis nibh et diam pharetra, in tincidunt nisi lobortis.", "Donec feugiat velit eget sollicitudin fringilla.", "Quisque ornare sit amet velit id eleifend.", "Vivamus aliquet accumsan urna, vel tempus nulla aliquet bibendum."], ["Phasellus tincidunt elementum tristique.", "Aliquam erat volutpat.", "Donec at suscipit risus, sit amet vehicula ipsum.", "Sed ac enim fringilla enim lacinia pretium.", "Phasellus volutpat mauris massa, vel auctor magna ullamcorper ac.", "Pellentesque dignissim auctor sem ac vestibulum.", "Pellentesque non sem in nunc porttitor consectetur.", "Quisque quis mattis urna, et venenatis nibh.", "Etiam auctor quis velit in malesuada.", "Phasellus ut dui ut enim placerat bibendum nec eleifend dui.", "Phasellus ex orci, bibendum vitae mattis in, imperdiet eu quam.", "Vivamus sed consectetur lacus.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Integer mollis, ante nec consequat accumsan, odio arcu lacinia justo, sit amet gravida purus est vel leo.", "Etiam ac pretium nunc.", "Donec sit amet sagittis tortor.", "In efficitur augue sed magna venenatis, sed ornare ex venenatis.", "Nunc erat lectus, imperdiet id ante faucibus, placerat feugiat massa.", "Aliquam molestie volutpat ligula sit amet ultrices.", "Fusce vitae elit volutpat, commodo nulla in, consequat magna.", "Aenean mattis nibh et diam pharetra, in tincidunt nisi lobortis."]]
      };
    }
  }, {
    key: "storeGetters",
    value: function storeGetters() {
      return {
        currentYear: function currentYear(state) {
          return state.currentYear;
        },
        paragraphs: function paragraphs(state) {
          return state.paragraphs;
        },
        defaultParagraphs: function defaultParagraphs(state) {
          return state.defaultParagraphs;
        },
        baseParagraphs: function baseParagraphs(state) {
          return state.baseParagraphs;
        }
      };
    }
  }, {
    key: "storeMutations",
    value: function storeMutations() {
      return {
        addParagraph: function addParagraph(state, paragraph) {
          state.paragraphs.push(paragraph);
        },
        removeParagraph: function removeParagraph(state, paragraphIndex) {
          state.paragraphs.splice(paragraphIndex, 1);
        },
        updateParagraphLength: function updateParagraphLength(state, data) {
          var paragraph = state.paragraphs[data.paragraphIndex];

          if (data.action === 'increase') {
            paragraph.length++;
          } else {
            paragraph.length--;
          }

          if (!paragraph.length) {
            this.commit('removeParagraph', data.paragraphIndex);
          }
        }
      };
    }
  }, {
    key: "storeActions",
    value: function storeActions() {
      return {};
    }
  }]);

  return StoreManager;
}();

/* harmony default export */ __webpack_exports__["default"] = (StoreManager);

/***/ }),

/***/ 0:
/*!************************************************************!*\
  !*** multi ./resources/js/App.js ./resources/css/app.styl ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Program Files\wamp\www\SimpleLorem\resources\js\App.js */"./resources/js/App.js");
module.exports = __webpack_require__(/*! C:\Program Files\wamp\www\SimpleLorem\resources\css\app.styl */"./resources/css/app.styl");


/***/ })

},[[0,"/js/manifest","/js/vendor"]]]);