(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,function(e,t,a){a(17),e.exports=a(18)},function(e,t,a){"use strict";a.r(t);var n=a(2),i=a(3),r=a.n(i),s=a(4),u=a.n(s);window.Vuex=n.a,window.VueCookie=r.a,window.VueClipboard=u.a,window.Vue=a(9)},,,,,,,,function(e,t,a){var n={"./components/App.vue":16,"./components/LoremParagraph.vue":15};function i(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=r,e.exports=i,i.id=14},function(e,t,a){"use strict";a.r(t);var n={props:["paragraph","composedParagraph","index","paragraphCount"],data:function(){return{paragraphClass:"",flashTimeout:null}},mounted:function(){},methods:{flashParagraph:function(e){var t=this;clearTimeout(this.flashTimeout),this.paragraphClass="",this.paragraphClass="flash",this.flashTimeout=setTimeout(function(){t.paragraphClass=""},300)},increaseSentences:function(){this.$store.commit("updateParagraphLength",{paragraphIndex:this.index,action:"increase"}),eventHub.$emit("save-settings")},reduceSentences:function(){this.canReduce&&(this.$store.commit("updateParagraphLength",{paragraphIndex:this.index,action:"reduce"}),eventHub.$emit("save-settings"))},removeParagraph:function(){this.canRemove&&(this.$store.commit("removeParagraph",this.index),eventHub.$emit("save-settings"))}},computed:{canReduce:function(){return this.paragraph.length>1||this.$parent.paragraphs.length>1},canRemove:function(){return this.paragraphCount>1}},created:function(){eventHub.$on("copied-all",this.flashParagraph)},beforeDestroy:function(){eventHub.$off("copied-all",this.flashParagraph)}},i=a(1),r=Object(i.a)(n,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"paragraph-container d-flex justify-content-between"},[a("p",{class:e.paragraphClass},[e._v("\n\t\t"+e._s(e.composedParagraph)+"\n\t")]),e._v(" "),a("div",{staticClass:"controls right-controls d-flex flex-column align-items-center"},[a("button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.composedParagraph,expression:"composedParagraph",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.flashParagraph,expression:"flashParagraph",arg:"success"}],staticClass:"btn btn-outline-success btn-copy control-button",attrs:{type:"button"}},[a("i",{staticClass:"fa fa-copy"})]),e._v(" "),a("button",{staticClass:"btn btn-outline-primary btn-increase control-button mb-1",attrs:{type:"button"},on:{click:e.increaseSentences}},[a("i",{staticClass:"fa fa-expand"})]),e._v(" "),a("button",{staticClass:"btn btn-outline-primary btn-reduce control-button",class:{disabled:!e.canReduce},attrs:{type:"button"},on:{click:e.reduceSentences}},[a("i",{staticClass:"fa fa-compress"})]),e._v(" "),a("button",{staticClass:"btn btn-outline-warning btn-remove control-button",class:{disabled:!e.canRemove},attrs:{type:"button"},on:{click:e.removeParagraph}},[a("i",{staticClass:"fa fa-trash-o"})])])])},[],!1,null,null,null);t.default=r.exports},function(e,t,a){"use strict";a.r(t);var n={props:[],data:function(){return{paragraphsCookie:null}},mounted:function(){this.setCookie(),this.setDefaultParagraphs()},methods:{reset:function(){this.$cookie.delete("slparagraphs"),this.paragraphsCookie=null,this.$store.commit("removeParagraphs"),this.setDefaultParagraphs()},saveSettings:function(){this.$cookie.set("slparagraphs",JSON.stringify(this.paragraphs),{expires:"2Y"}),this.setCookie()},copyAll:function(){var e=this,t=this.composedSentences.join("\n\n");this.$copyText(t).then(function(e){eventHub.$emit("copied-all")},function(a){setTimeout(function(){e.$copyText(t).then(function(e){eventHub.$emit("copied-all")},function(e){console.error(e)})},15)})},addParagraph:function(){var e=this.paragraphs.length%3;this.$store.commit("addParagraph",{length:this.defaultParagraphs[e].length}),setTimeout(function(){window.scrollTo(0,document.body.scrollHeight)},2),this.saveSettings()},setDefaultParagraphs:function(){var e=this.paragraphsCookie?JSON.parse(this.paragraphsCookie):this.defaultParagraphs,t=!0,a=!1,n=void 0;try{for(var i,r=e[Symbol.iterator]();!(t=(i=r.next()).done);t=!0){var s=i.value;this.$store.commit("addParagraph",Object.assign({},s))}}catch(e){a=!0,n=e}finally{try{t||null==r.return||r.return()}finally{if(a)throw n}}},setCookie:function(){this.paragraphsCookie=this.$cookie.get("slparagraphs")},getReducedParagraphIndex:function(e){return e%3},getReducedSentenceIndex:function(e,t){return e%this.baseParagraphs[t].length}},computed:{composedSentences:function(){var e,t,a,n,i,r=this,s=[];return Object.keys(this.paragraphs).forEach(function(u){i=r.paragraphs[u],e=r.getReducedParagraphIndex(u),t=r.baseParagraphs[e],n=[];for(var o=0;o<i.length;o++)a=r.getReducedSentenceIndex(o,e),n.push(t[a]);s.push(n.join(" "))}),s},paragraphs:function(){return this.$store.getters.paragraphs},defaultParagraphs:function(){return this.$store.getters.defaultParagraphs},baseParagraphs:function(){return this.$store.getters.baseParagraphs},currentYear:function(){return this.$store.getters.currentYear}},created:function(){eventHub.$on("save-settings",this.saveSettings)},beforeDestroy:function(){eventHub.$off("save-settings",this.saveSettings)}},i=a(1),r=Object(i.a)(n,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main-container container-fluid d-flex flex-column justify-content-between"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-lg-8"},[a("h1",{staticClass:"text-center"},[e._v("Simple Lorem Ipsum")]),e._v(" "),e._l(e.paragraphs,function(t,n){return a("lorem-paragraph",{key:"paragraph-"+n,attrs:{paragraph:t,"composed-paragraph":e.composedSentences[n],index:n,"paragraph-count":e.paragraphs.length}})}),e._v(" "),a("div",{staticClass:"d-flex flex-row justify-content-center mb-5"},[a("button",{staticClass:"btn btn-outline-primary control-button btn-add",attrs:{type:"button"},on:{click:e.addParagraph}},[a("i",{staticClass:"fa fa-plus"})])])],2),e._v(" "),a("div",{staticClass:"col-12 col-lg-4 d-flex justify-content-center mb-5 mb-lg-0"},[a("div",{staticClass:"reset-container d-flex justify-content-end"},[a("button",{staticClass:"btn btn-outline-warning btn-reset control-button",class:{disabled:!e.paragraphsCookie},attrs:{type:"button"},on:{click:e.reset}},[a("i",{staticClass:"fa fa-undo"})])]),e._v(" "),a("button",{staticClass:"btn btn-outline-success btn-copy-all control-button",attrs:{type:"button"},on:{click:e.copyAll}},[e._m(0)])])]),e._v(" "),a("footer",{staticClass:"row"},[a("div",{staticClass:"col-12 col-lg-8 text-center"},[e._v("\n\t\t\t© "+e._s(e.currentYear)+" Simple Lorem by "),a("a",{attrs:{href:"https://gtcrais.net",target:"_blank"}},[e._v("GTCrais")])])])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"icon-container"},[t("i",{staticClass:"fa fa-file-o first"}),this._v(" "),t("i",{staticClass:"fa fa-file-o second"}),this._v(" "),t("i",{staticClass:"fa fa-file-o third"})])}],!1,null,null,null);t.default=r.exports},function(e,t,a){"use strict";function n(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}a.r(t);var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,i,r;return t=e,r=[{key:"registerComponents",value:function(){var e={},t=a(14);return t.keys().map(function(a){var n=a.split("/").pop().split(".")[0];e[n]=Vue.component(n,t(a).default)}),e}}],(i=null)&&n(t.prototype,i),r&&n(t,r),e}();function r(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,a,n;return t=e,n=[{key:"setupStore",value:function(){return new Vuex.Store({state:Object.assign(e.storeState()),getters:Object.assign(e.storeGetters()),mutations:Object.assign(e.storeMutations()),actions:Object.assign(e.storeActions())})}},{key:"storeState",value:function(){return{currentYear:currentYear,defaultParagraphs:[{length:8},{length:4},{length:16}],paragraphs:[],baseParagraphs:[["Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Donec tincidunt tortor non efficitur egestas.","Integer maximus dui ut porta efficitur.","Nullam consectetur tincidunt scelerisque.","In facilisis varius ullamcorper.","Phasellus nibh odio, vehicula non commodo vel, ullamcorper eu quam.","Nunc at congue elit, ac gravida velit.","Cras eu quam eget augue vehicula faucibus ac sed enim.","Integer non ipsum in nisi sagittis aliquam.","Nullam at porta ex.","Fusce gravida, neque sit amet ultricies semper, magna magna lobortis nunc, sit amet varius elit risus vel turpis.","Mauris augue lacus, aliquam et leo quis, tempor eleifend massa.","Cras elementum arcu nec turpis accumsan, vel laoreet nisi elementum.","Praesent laoreet urna eget orci eleifend fermentum.","Cras congue fermentum enim, id elementum magna pretium vitae.","Etiam mollis tincidunt semper.","Proin auctor turpis eu erat auctor, a placerat libero lacinia.","Interdum et malesuada fames ac ante ipsum primis in faucibus.","Curabitur urna felis, imperdiet vel vulputate eget, sagittis eu ipsum.","In augue lacus, pellentesque in lacus ac, bibendum vestibulum sem.","Ut finibus pretium efficitur."],["Etiam tristique mauris eu elit rutrum, vitae vehicula nunc gravida.","Vestibulum ornare metus eget semper vestibulum.","Integer auctor arcu eget mi cursus luctus non ac orci.","Donec eu mi egestas, volutpat dolor ut, cursus arcu.","Praesent blandit turpis interdum, feugiat risus quis, efficitur lorem.","Duis blandit quis ligula a dignissim.","Morbi consectetur ante sit amet sapien porta ornare.","Nullam tristique nisi tortor, viverra euismod leo tincidunt id.","Vestibulum tempor ante a felis interdum, id placerat metus ultrices.","Suspendisse in aliquet sem.","In ut leo ipsum.","Donec sollicitudin risus a odio finibus tempus.","Nunc dignissim mi eu tristique hendrerit.","Vestibulum laoreet vitae arcu sit amet condimentum.","Aenean risus ipsum, fringilla at blandit nec, convallis eu turpis.","Morbi erat nibh, tempor sit amet lorem vitae, gravida tincidunt elit.","Suspendisse vitae dapibus augue, quis dignissim lectus.","Aenean mattis nibh et diam pharetra, in tincidunt nisi lobortis.","Donec feugiat velit eget sollicitudin fringilla.","Quisque ornare sit amet velit id eleifend.","Vivamus aliquet accumsan urna, vel tempus nulla aliquet bibendum."],["Phasellus tincidunt elementum tristique.","Aliquam erat volutpat.","Donec at suscipit risus, sit amet vehicula ipsum.","Sed ac enim fringilla enim lacinia pretium.","Phasellus volutpat mauris massa, vel auctor magna ullamcorper ac.","Pellentesque dignissim auctor sem ac vestibulum.","Pellentesque non sem in nunc porttitor consectetur.","Quisque quis mattis urna, et venenatis nibh.","Etiam auctor quis velit in malesuada.","Phasellus ut dui ut enim placerat bibendum nec eleifend dui.","Phasellus ex orci, bibendum vitae mattis in, imperdiet eu quam.","Vivamus sed consectetur lacus.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Integer mollis, ante nec consequat accumsan, odio arcu lacinia justo, sit amet gravida purus est vel leo.","Etiam ac pretium nunc.","Donec sit amet sagittis tortor.","In efficitur augue sed magna venenatis, sed ornare ex venenatis.","Nunc erat lectus, imperdiet id ante faucibus, placerat feugiat massa.","Aliquam molestie volutpat ligula sit amet ultrices.","Fusce vitae elit volutpat, commodo nulla in, consequat magna.","Aenean mattis nibh et diam pharetra, in tincidunt nisi lobortis."]]}}},{key:"storeGetters",value:function(){return{currentYear:function(e){return e.currentYear},paragraphs:function(e){return e.paragraphs},defaultParagraphs:function(e){return e.defaultParagraphs},baseParagraphs:function(e){return e.baseParagraphs}}}},{key:"storeMutations",value:function(){return{addParagraph:function(e,t){e.paragraphs.push(t)},removeParagraph:function(e,t){e.paragraphs.splice(t,1)},removeParagraphs:function(e){e.paragraphs=[]},updateParagraphLength:function(e,t){var a=e.paragraphs[t.paragraphIndex];"increase"===t.action?a.length++:a.length--,a.length||this.commit("removeParagraph",t.paragraphIndex)}}}},{key:"storeActions",value:function(){return{}}}],(a=null)&&r(t.prototype,a),n&&r(t,n),e}();a(6),Vue.use(VueCookie),Vue.use(VueClipboard),Vue.use(Vuex),window.eventHub=new Vue,window.store=s.setupStore(),i.registerComponents(),window.eventHub=new Vue;new Vue({el:"#vue-wrapper",store:store})},function(e,t){}],[[5,1,2]]]);