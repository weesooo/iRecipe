(this.webpackJsonpiRecipe=this.webpackJsonpiRecipe||[]).push([[0],{25:function(e,t,a){e.exports=a(57)},31:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(17),i=a.n(r),o=a(6),l=a.n(o),s=a(18),u=a(3),m=(a(31),a(19)),p=a.n(m);var d=function(){return c.a.createElement("div",{className:"header"},c.a.createElement("h1",null,"iRecipe",c.a.createElement(p.a,null)))},f=a(21),h=a.n(f),E=(a(54),a(68)),v=function(e){return e.ingredients.map((function(e){return c.a.createElement("ul",{key:Object(E.a)(),className:"ingredient-list"},c.a.createElement("li",{className:"ingredient-text"},e.text),c.a.createElement("li",{className:"ingredient-weight"},"Weight - ",e.weight))}))},g=a(22),b=a.n(g);var w=function(e){var t=e.recipe.recipe,a=t.label,r=t.image,i=t.ingredients,o=Object(n.useState)(!1),l=Object(u.a)(o,2),s=l[0],m=l[1];return c.a.createElement("div",{className:"recipe"},c.a.createElement("h2",null,a),c.a.createElement("img",{src:r,alt:a}),c.a.createElement("button",{className:"buttn",onClick:function(){return m(!s)}},"Ingredients ",c.a.createElement(b.a,null)," "),s&&c.a.createElement(v,{ingredients:i}))};a(55);var N=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(""),o=Object(u.a)(i,2),m=o[0],p=o[1],f="https://api.edamam.com/search?q=".concat(m,"&app_id=").concat("67558d62","&app_key=").concat("3fb3a1061f152063fd16dbf4e3776316"),v=function(){var e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get(f);case 2:t=e.sent,r(t.data.hits),p("");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"app"},c.a.createElement(d,null),c.a.createElement("div",{className:"form"},c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),v()}},c.a.createElement("input",{className:"search",type:"text",placeholder:"What do you wanna cook today?",autoComplete:"off",onChange:function(e){p(e.target.value)},value:m}),c.a.createElement("input",{className:"searchbutton",type:"submit",value:"Go"}))),c.a.createElement("div",{className:"recipes"},a!==[]&&a.map((function(e){return c.a.createElement(w,{key:Object(E.a)(),recipe:e})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.35f002b4.chunk.js.map