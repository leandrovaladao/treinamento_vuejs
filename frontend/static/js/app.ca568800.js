(function(t){function o(o){for(var e,i,r=o[0],c=o[1],l=o[2],h=0,p=[];h<r.length;h++)i=r[h],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(e in c)Object.prototype.hasOwnProperty.call(c,e)&&(t[e]=c[e]);u&&u(o);while(p.length)p.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,o=0;o<s.length;o++){for(var n=s[o],e=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(e=!1)}e&&(s.splice(o--,1),t=i(i.s=n[0]))}return t}var e={},a={app:0},s=[];function i(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=e,i.d=function(t,o,n){i.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,o){if(1&o&&(t=i(t)),8&o)return t;if(4&o&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var e in t)i.d(n,e,function(o){return t[o]}.bind(null,e));return n},i.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(o,"a",o),o},i.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=o,r=r.slice();for(var l=0;l<r.length;l++)o(r[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,o,n){t.exports=n("56d7")},"034f":function(t,o,n){"use strict";var e=n("85ec"),a=n.n(e);a.a},"56d7":function(t,o,n){"use strict";n.r(o);n("e260"),n("e6cf"),n("cca6"),n("a79d");var e=n("2b0e"),a=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],i=(n("034f"),n("2877")),r={},c=Object(i["a"])(r,a,s,!1,null,null,null),l=c.exports,u=n("8c4f"),h=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticClass:"wrapper bg-default",staticStyle:{"min-height":"100vh"}},[t.loading?t._e():n("div",[n("h1",[t._v("Posts")]),n("ul",{staticClass:"list-group"},t._l(t.posts,(function(o){return n("li",{key:o.id,staticClass:"list-group-item"},[n("strong",[t._v("Titulo:")]),t._v(t._s(o.title)),n("br"),n("strong",[t._v("Conteúdo:")]),t._v(t._s(o.body)+" ")])})),0),n("div",{staticClass:"col-xs-12"},[n("div",[n("a",{staticClass:"btn btn-sm btn-success m-t-5",on:{click:t.goToMain}},[t._v(" Voltar para Principal ")])])])])])},p=[],d=n("bc3a"),f=n.n(d),v={name:"Posts",data:function(){return{token:"",posts:[],loading:!0}},methods:{goToMain:function(){this.$router.push({path:"/"})},getPosts:function(){var t=this,o="http://localhost:8000/api/v1/posts/",n={method:"GET",athentication:"Bearer ".concat(this.token)};f.a.get(o,n).then((function(o){t.posts=o.data,t.loading=!1}))}},mounted:function(){var t=this,o="http://localhost:8000/api/token/",n={method:"POST",username:"admin",password:"123"};f.a.post(o,n).then((function(o){t.token=o.data.access,t.getPosts()}))}},m=v,g=Object(i["a"])(m,h,p,!1,null,"cace1abc",null),b=g.exports,_=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticClass:"wrapper bg-default",staticStyle:{"min-height":"100vh"}},[n("nav",{staticClass:"navbar navbar-default navbar-fixed-top"},[n("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("Opções")]),n("div",{staticClass:"container"},[n("ul",{staticClass:"nav navbar-nav"},[n("li",{staticClass:"active"},[n("a",{attrs:{href:"#"},on:{click:t.goToPosts}},[t._v("Ir para Posts "),n("span",{staticClass:"sr-only"},[t._v("(current)")])])]),n("li",{staticClass:"active"},[n("a",{attrs:{href:"#"},on:{click:t.goToAlbums}},[t._v("Ir para Albums "),n("span",{staticClass:"sr-only"},[t._v("(current)")])])]),n("li",{staticClass:"active"},[n("a",{attrs:{href:"#"},on:{click:t.goToTodos}},[t._v("Ir para To-Dos "),n("span",{staticClass:"sr-only"},[t._v("(current)")])])])])])])])},T=[],y={name:"Main",data:function(){return{token:"",posts:[],albums:[],todos:[],loading:!0,created:!1}},methods:{goToPosts:function(){this.$router.push({path:"/posts/"})},goToAlbums:function(){this.$router.push({path:"/albums/"})},goToTodos:function(){this.$router.push({path:"/todos/"})},getPosts:function(){var t=this,o="https://jsonplaceholder.typicode.com/posts",n={method:"GET"};f.a.get(o,n).then((function(o){t.posts=o.data,t.loading=!1}))},insertPosts:function(t){var o="http://localhost:8000/api/v1/posts/",n={method:"POST",athentication:"Bearer ".concat(this.token),title:t.title,body:t.body};f.a.post(o,n).then((function(t){console.log("Post inserido:"+t)}))},getAlbums:function(){var t=this,o="https://jsonplaceholder.typicode.com/albums",n={method:"GET"};f.a.get(o,n).then((function(o){console.log(o),t.albums=o.data,t.loading=!1}))},insertAlbums:function(t){var o="http://localhost:8000/api/v1/albums/",n={method:"POST",athentication:"Bearer ".concat(this.token),title:t.title};f.a.post(o,n).then((function(t){console.log("Album inserido:"+t)}))},getToDos:function(){var t=this,o="https://jsonplaceholder.typicode.com/todos",n={method:"GET"};f.a.get(o,n).then((function(o){t.todos=o.data,t.loading=!1}))},insertToDos:function(t){var o="http://localhost:8000/api/v1/todos/",n={method:"POST",athentication:"Bearer ".concat(this.token),title:t.title,completed:t.completed};f.a.post(o,n).then((function(t){console.log("To-Do inserido:"+t)}))},insertDataIntoDb:function(){var t=this;this.getPosts(),this.getAlbums(),this.getToDos();var o="http://localhost:8000/api/token/",n={method:"POST",username:"admin",password:"123"};f.a.post(o,n).then((function(o){t.token=o.data.access;for(var n=0;n<t.posts.length;n++)t.insertPosts(t.posts[n]);for(var e=0;e<t.albums.length;e++)t.insertAlbums(t.albums[e]);for(var a=0;a<t.todos.length;a++)t.insertToDos(t.todos[a])}))}},mounted:function(){var t=this,o="http://localhost:8000/api/v1/checkdata/",n={method:"GET"};f.a.get(o,n).then((function(){console.log("Entrou"),t.insertDataIntoDb()})).catch(console.log("Deu certo"))}},k=y,P=Object(i["a"])(k,_,T,!1,null,"1baa360f",null),C=P.exports,O=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticClass:"wrapper bg-default",staticStyle:{"min-height":"100vh"}},[t.loading?t._e():n("div",[n("h1",[t._v("To-Dos")]),n("ul",{staticClass:"list-group"},t._l(t.todos,(function(o){return n("li",{key:o.id,staticClass:"list-group-item"},[n("strong",[t._v("Titulo:")]),t._v(t._s(o.title)),n("br"),n("strong",[t._v("Completo?")]),t._v(t._s(t._f("convertBoolText")(o.completed))),n("br")])})),0),n("div",{staticClass:"col-xs-12"},[n("div",[n("a",{staticClass:"btn btn-sm btn-success m-t-5",on:{click:t.goToMain}},[t._v(" Voltar para Principal ")])])])])])},w=[],x={name:"ToDos",data:function(){return{token:"",todos:[],loading:!0}},methods:{goToMain:function(){this.$router.push({path:"/"})},getTodos:function(){var t=this,o="http://localhost:8000/api/v1/todos/",n={method:"GET",athentication:"Bearer ".concat(this.token)};f.a.get(o,n).then((function(o){t.todos=o.data,t.loading=!1}))}},filters:{convertBoolText:function(t){return t?"Sim":"Não"}},mounted:function(){var t=this,o="http://localhost:8000/api/token/",n={method:"POST",username:"admin",password:"123"};f.a.post(o,n).then((function(o){t.token=o.data.access,t.getTodos()}))}},j=x,S=Object(i["a"])(j,O,w,!1,null,"0e176493",null),D=S.exports,A=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticClass:"wrapper bg-default",staticStyle:{"min-height":"100vh"}},[t.loading?t._e():n("div",[n("h1",[t._v("Albums")]),n("ul",{staticClass:"list-group"},t._l(t.albums,(function(o){return n("li",{key:o.id,staticClass:"list-group-item"},[n("strong",[t._v("Titulo:")]),t._v(t._s(o.title)),n("br")])})),0),n("div",{staticClass:"col-xs-12"},[n("div",[n("a",{staticClass:"btn btn-sm btn-success m-t-5",on:{click:t.goToMain}},[t._v(" Voltar para Principal ")])])])])])},E=[],M={name:"Albums",data:function(){return{token:"",albums:[],loading:!0}},methods:{goToMain:function(){this.$router.push({path:"/"})},getAlbums:function(){var t=this,o="http://localhost:8000/api/v1/albums/",n={method:"GET",athentication:"Bearer ".concat(this.token)};f.a.get(o,n).then((function(o){t.albums=o.data,t.loading=!1}))}},mounted:function(){var t=this,o="http://localhost:8000/api/token/",n={method:"POST",username:"admin",password:"123"};f.a.post(o,n).then((function(o){t.token=o.data.access,t.getAlbums()}))}},$=M,B=Object(i["a"])($,A,E,!1,null,"641c39ba",null),G=B.exports;e["a"].use(u["a"]);var I=new u["a"]({routes:[{path:"/",name:"Main",component:C},{path:"/posts/",name:"Posts",component:b},{path:"/albums/",name:"Albums",component:G},{path:"/todos/",name:"ToDos",component:D}],scrollBehavior:function(){return{x:0,y:0}}});e["a"].config.productionTip=!1,new e["a"]({router:I,render:function(t){return t(l)}}).$mount("#app")},"85ec":function(t,o,n){}});
//# sourceMappingURL=app.ca568800.js.map