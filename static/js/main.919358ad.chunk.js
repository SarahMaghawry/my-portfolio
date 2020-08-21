(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],{21:function(e,t,a){e.exports=a.p+"static/media/profile.54e4338c.jpg"},22:function(e,t,a){e.exports=a.p+"static/media/taskCoach.c13a5e87.png"},23:function(e,t,a){e.exports=a.p+"static/media/portfolio.77c7e4c4.png"},24:function(e,t,a){e.exports=a(36)},29:function(e,t,a){},30:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),i=a.n(c),l=(a(29),a(30),a(12)),o=a(1),s=a(3),m=a(4),u=a(6),p=a(5),h=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("li",{id:this.props.item},r.a.createElement(l.b,{to:this.props.tolink,onClick:this.props.activec.bind(this,this.props.item)},this.props.item))}}]),a}(n.Component),d=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).activeitem=function(e){n.state.NavItemActive.length>0&&document.getElementById(n.state.NavItemActive).classList.remove("active"),n.setState({NavItemActive:e},(function(){document.getElementById(n.state.NavItemActive).classList.add("active")}))},n.state={NavItemActive:""},n}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement(h,{item:"Home",tolink:"/my-portfolio",activec:this.activeitem}),r.a.createElement(h,{item:"About",tolink:"/about",activec:this.activeitem}),r.a.createElement(h,{item:"Skills",tolink:"/skills",activec:this.activeitem}),r.a.createElement(h,{item:"Projects",tolink:"/projects",activec:this.activeitem}),r.a.createElement(h,{item:"Contact",tolink:"/contact",activec:this.activeitem})))}}]),a}(n.Component),f=a(20),b=a.n(f),v=a(21),E=a.n(v),k=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"social"},r.a.createElement("a",{href:"https://github.com/SarahMaghawry",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{className:"fab fa-github"})),r.a.createElement("a",{href:"https://twitter.com/zaraHmaghawry",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{className:"fab fa-twitter"})),r.a.createElement("a",{href:"https://www.facebook.com/kossa12sag",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{className:"fab fa-facebook-f"})),r.a.createElement("a",{href:"https://linkedin.com/in/sarah-maghawry",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{className:"fab fa-linkedin-in"})))}}]),a}(n.Component),g=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"condiv home"},r.a.createElement("img",{src:E.a,alt:"profile-pic",className:"profilepic"}),r.a.createElement(b.a,{className:"typingeffect",text:["I am Sarah Ibrahim","A Full Stack Web Developer."],speed:100,eraseDelay:500}),r.a.createElement(k,null))}}]),a}(n.Component),y=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"condiv"},r.a.createElement("h1",{className:"subtopic"},"About Me"),r.a.createElement("h1",null,"Sarah Ibrahim"),r.a.createElement("h3",null,"Full Stack Web Developer"),r.a.createElement("br",null),r.a.createElement("p",null,"An Experienced Software Engineer with a demonstrated history of working in the information technology and services industry. Skilled in JavaScript, NodeJs, ReactJs, SQL and NoSQL databases, and certified Uipath RPA developer. ",r.a.createElement("br",null),"Strong engineering professional with a Bachelor's degree focused in Computer Engineering from Faculty of Egineering Helwan University Cairo."))}}]),a}(n.Component),j=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"widecard"},r.a.createElement("div",{className:"compdet"},r.a.createElement("h3",null,this.props.title),r.a.createElement("img",{alt:"projects",src:this.props.pic,style:{width:600,height:280}}),r.a.createElement("p",{className:"secondtext"},this.props.description,r.a.createElement("a",{href:this.props.link,rel:"noopener noreferrer",target:"_blank",style:{color:"blue"}},"Github Repo"))))}}]),a}(n.Component),O=a(22),N=a.n(O),w=a(23),S=a.n(w),C=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"condiv"},r.a.createElement("h1",{className:"subtopic"},"Highlighted Projects"),r.a.createElement(j,{title:"Task Coach",pic:N.a,description:"An app that lets users add their daily tasks, edit the logged task \r and delete completed tasks. It's developed using MERN stack and \r the power of mongoDB and CRUD operations to list, add, update and delete tasks. ",link:"https://github.com/SarahMaghawry/react-app"}),r.a.createElement(j,{title:"My Portfolio",pic:S.a,description:"A portfolio that is powered by Reactjs components, icons and simple awesome CSS styling. ",link:"https://github.com/SarahMaghawry/my-portfolio"}))}}]),a}(n.Component),A=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={myskills:["HTML - CSS - JavaScript","Nodejs","Reactjs","MySQL","MongoDB","REST API","OOP - MVC - UML"]},n}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"condiv skills"},r.a.createElement("h1",{className:"subtopic"},"My Skills"),r.a.createElement("ul",null,this.state.myskills.map((function(e){return r.a.createElement("li",null,e)}))))}}]),a}(n.Component),M=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"condiv"},r.a.createElement("h1",{className:"subtopic"},"Contact Me"),r.a.createElement("h3",null,"Email : saraibrahim1100@gmail.com"),r.a.createElement("h3",null,"Mobile: Only Avaliable in my CV for privacy concern."),r.a.createElement(k,null))}}]),a}(n.Component);var I=function(){return r.a.createElement(l.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(d,null),r.a.createElement(o.a,{exact:!0,path:"/my-portfolio"},r.a.createElement(g,null)),r.a.createElement(o.a,{path:"/about"},r.a.createElement(y,null)),r.a.createElement(o.a,{path:"/projects"},r.a.createElement(C,null)),r.a.createElement(o.a,{path:"/skills"},r.a.createElement(A,null)),r.a.createElement(o.a,{path:"/contact"},r.a.createElement(M,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.919358ad.chunk.js.map