(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(3),o=a.n(l),c=(a(13),a(1));a(15);function m(e){return r.a.createElement("nav",{className:"navbar navbar-expand-lg \n    ".concat("yellow"===e.theme&&!0===e.dark?"darkyellow1":"yellow"===e.theme?"yellow":"red"===e.theme&&!0===e.dark?"darkred1":"red"===e.theme?"red":"magenta"===e.theme&&!0===e.dark?"darkmagenta1":"magenta"===e.theme?"magenta":"light"===e.theme&&!0===e.dark?"dark1":"navbar-light bg-light"," text-").concat(!0===e.dark?"light":"dark")},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("a",{className:"navbar-brand text text-".concat(!0===e.dark?"light":"dark"),href:"/"},e.title),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link active text text-".concat(!0===e.dark?"light":"dark"),"aria-current":"page",href:"/"},"Home"))),r.a.createElement("div",null,"Select Your Theme Color"),r.a.createElement("button",{className:"dot yellow mx-2",onClick:function(){e.showalert("yellow theme enabled","success"),e.settheme("yellow")}}),r.a.createElement("button",{className:"dot red mx-2",onClick:function(){e.showalert("red theme enabled","success"),e.settheme("red")}}),r.a.createElement("button",{className:"dot magenta mx-2",onClick:function(){e.showalert("magenta theme enabled","success"),e.settheme("magenta")}}),r.a.createElement("button",{className:"dot bg-light mx-2",onClick:function(){e.showalert("light theme enabled","success"),e.settheme("light")}}),r.a.createElement("div",{className:"form-check form-switch"},r.a.createElement("input",{className:"form-check-input",type:"checkbox",onClick:function(){!1===e.dark?(e.setdark(!0),e.showalert("dark theme enabled!!","success")):(e.setdark(!1),e.showalert("dark theme disabled!!","success"))},id:"flexSwitchCheckChecked"}),r.a.createElement("label",{className:"form-check-label text text-".concat(!0===e.dark?"light":"dark"),htmlFor:"flexSwitchCheckChecked"},"Dark Mode")))))}function s(e){var t=Object(n.useState)(""),a=Object(c.a)(t,2),l=a[0],o=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"text-center"},e.heading),r.a.createElement("textarea",{className:"form-control \n              ".concat("yellow"===e.theme&&!0===e.dark?"darkyellow1":"yellow"===e.theme?"yellow":"red"===e.theme&&!0===e.dark?"darkred1":"red"===e.theme?"red":"magenta"===e.theme&&!0===e.dark?"darkmagenta1":"magenta"===e.theme?"magenta":"light"===e.theme&&!0===e.dark?"dark1":"bg-light"," text text-").concat(!0===e.dark?"light":"dark"),value:l,onChange:function(e){o(e.target.value)},id:"textbox",rows:"8"}),r.a.createElement("div",{className:"my-3"},r.a.createElement("button",{className:"".concat("yellow"===e.theme&&!0===e.dark?"btn darkyellow1":"yellow"===e.theme?"btn yellow":"red"===e.theme&&!0===e.dark?"btn darkred1":"red"===e.theme?"btn red":"magenta"===e.theme&&!0===e.dark?"btn darkmagenta1":"magenta"===e.theme?"btn magenta":"light"===e.theme&&!0===e.dark?"btn dark1":"btn btn-primary"),onClick:function(){var t=l.toUpperCase();o(t),e.showalert("converted in uppercase!!!","success")}},"Convert Uppercase"),r.a.createElement("button",{className:"".concat("yellow"===e.theme&&!0===e.dark?"btn darkyellow1":"yellow"===e.theme?"btn yellow":"red"===e.theme&&!0===e.dark?"btn darkred1":"red"===e.theme?"btn red":"magenta"===e.theme&&!0===e.dark?"btn darkmagenta1":"magenta"===e.theme?"btn magenta":"light"===e.theme&&!0===e.dark?"btn dark1":"btn btn-primary"," mx-2"),onClick:function(){var t=l.toLowerCase();o(t),e.showalert("converted in lowercase!!!","success")}},"Convert Lowercase"),r.a.createElement("button",{className:"".concat("yellow"===e.theme&&!0===e.dark?"btn darkyellow1":"yellow"===e.theme?"btn yellow":"red"===e.theme&&!0===e.dark?"btn darkred1":"red"===e.theme?"btn red":"magenta"===e.theme&&!0===e.dark?"btn darkmagenta1":"magenta"===e.theme?"btn magenta":"light"===e.theme&&!0===e.dark?"btn dark1":"btn btn-primary"),onClick:function(){var t=new SpeechSynthesisUtterance(l);speechSynthesis.speak(t),e.showalert("speaking!!!!!","success")}},"Speak")),r.a.createElement("h3",null,"Text Summary"),r.a.createElement("p",null,l.length," charachters ",l.split(" ").length-1," words"),r.a.createElement("p",null,.008*(l.split(" ").length-1)," Minuites to read"),r.a.createElement("h3",null,"Preview"),r.a.createElement("p",null,l.length>0?l:"Enter a text and show the previw")))}function d(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"text text-center mtb-20"},e.heading),r.a.createElement("div",{className:"container shadow shadow-rounded"},r.a.createElement("h4",null,"We provide free tools to help you with your daily tasks. You will find tools for formatting source code, converters, tools for handling text, such as convert your sentance in uppercase, convert your sentance in lowercase, convert your sentance in speech. Check the current features below and feel free to recommend a new feature by contacting us.")))}function h(e){return e.alert&&r.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},r.a.createElement("strong",null,function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.message)))}m.defaultProps={title:"Title Text here",about:"About Text here"};var i=function(){var e=Object(n.useState)("light"),t=Object(c.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(null),i=Object(c.a)(o,2),u=i[0],b=i[1],g=Object(n.useState)(!1),k=Object(c.a)(g,2),w=k[0],y=k[1];!0===w&&"yellow"===a?(document.body.style.backgroundColor="#58580d",document.body.style.color="white"):!0===w&&"red"===a?(document.body.style.backgroundColor="#701010",document.body.style.color="white"):!0===w&&"magenta"===a?(document.body.style.backgroundColor="#681768",document.body.style.color="white"):!0===w&&"light"===a?(document.body.style.backgroundColor="#212529",document.body.style.color="white"):(document.body.style.backgroundColor="white",document.body.style.color="black");var p=function(e,t){b({message:e,type:t}),setTimeout(function(){b(null)},1500)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,{title:"TextUtils",about:"About",setdark:y,dark:w,theme:a,showalert:p,settheme:l}),r.a.createElement(h,{alert:u}),r.a.createElement(s,{heading:"Enter text to analyze",theme:a,dark:w,showalert:p}),r.a.createElement(d,{heading:"About Us"}))},u=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,18)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,l=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),l(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i,null))),u()},4:function(e,t,a){e.exports=a(17)}},[[4,3,2]]]);
//# sourceMappingURL=main.ca21b240.chunk.js.map