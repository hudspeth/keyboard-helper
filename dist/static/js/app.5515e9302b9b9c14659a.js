webpackJsonp([1],{EMeC:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("7+uW"),n={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"big-screen"})},staticRenderFns:[]};var a=s("VU/8")({data:{},methods:{}},n,!1,function(t){s("EMeC")},"data-v-e09b1978",null).exports,r=s("M4fF"),o={data:function(){return{topRowKeys:["Q","W","E","R","T","Y","U","I","O","P"],middleRowKeys:["A","S","D","F","G","H","J","K","L"],bottomRowKeys:["Z","X","C","V","B","N","M"],inputStr:""}},created:function(){window.addEventListener("keyup",this.getInput)},methods:{textToSpeech:function(t){var e=new SpeechSynthesisUtterance(t);window.speechSynthesis.speak(e),this.inputStr=""},getInput:function(t){var e=""+t.key,s=this.$el.querySelector('[data-key="'+e.toUpperCase()+'"]');this.highlightKey(s),this.playKeyStroke(),this.inputStr+=e,this.update()},update:s.n(r).a.debounce(function(){var t=this.inputStr.charAt(0).toUpperCase()+this.inputStr.slice(1).toLowerCase();this.textToSpeech(t)},2e3),highlightKey:function(t){try{t.classList.add("highlight"),setTimeout(function(){t.classList.remove("highlight")},100)}catch(t){}},playKeyStroke:function(){var t=document.getElementById("audio");t.currentTime=0,t.play()}}},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"big-screen"},[s("span",{staticClass:"big-text",on:{inputStr:t.update}},[t._v(t._s(t.inputStr))])]),t._v(" "),s("div",{staticClass:"keys"},[s("div",{staticClass:"top-row"},t._l(t.topRowKeys,function(e){return s("div",[s("div",{staticClass:"key",attrs:{"data-key":e}},[s("kbd",[t._v(t._s(e))]),t._v(" "),s("span",{staticClass:"sound"},[t._v(t._s(e))])])])})),t._v(" "),s("div",{staticClass:"middle-row"},t._l(t.middleRowKeys,function(e){return s("div",[s("div",{staticClass:"key",attrs:{"data-key":e}},[s("kbd",[t._v(t._s(e))]),t._v(" "),s("span",{staticClass:"sound"},[t._v(t._s(e))])])])})),t._v(" "),s("div",{staticClass:"bottom-row"},t._l(t.bottomRowKeys,function(e){return s("div",[s("div",{staticClass:"key",attrs:{"data-key":e}},[s("kbd",[t._v(t._s(e))]),t._v(" "),s("span",{staticClass:"sound"},[t._v(t._s(e))])])])}))]),t._v(" "),s("audio",{ref:"audio",attrs:{id:"audio",src:"static/keystroke.mp3",type:"audio/wav"}})])},staticRenderFns:[]};var d={name:"App",components:{display:a,keyboard:s("VU/8")(o,c,!1,function(t){s("gLnH")},"data-v-b0e67076",null).exports}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("keyboard")],1)},staticRenderFns:[]};var p=s("VU/8")(d,u,!1,function(t){s("yP0/")},null,null).exports;i.a.config.productionTip=!1,new i.a({el:"#app",components:{App:p},template:"<App/>"})},gLnH:function(t,e){},"yP0/":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.5515e9302b9b9c14659a.js.map