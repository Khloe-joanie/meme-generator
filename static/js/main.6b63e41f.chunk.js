(this.webpackJsonpmymemegenerator=this.webpackJsonpmymemegenerator||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(7),o=n.n(r),s=n(2),i=n(3),l=n(5),m=n(4),j=(n(13),n(0)),h=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{children:Object(j.jsx)("h1",{className:"myheader meme",children:"Meme Generator Header"})})}}]),n}(a.Component),b=n(8),u=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).handleChange=function(t){var n=t.target,a=n.name,c=n.value;e.setState(Object(b.a)({},a,c))},e.handleClick=function(){var t=e.state.allMemeImgs.data.memes;e.setState({randomImg:t[Math.floor(Math.random()*t.length)].url})},e.state={topText:"",bottomText:"",randomImg:"http://i.imgflip.com/1bij.jpg",allMemeImgs:[]},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.imgflip.com/get_memes").then((function(e){return e.json()})).then((function(t){e.setState({allMemeImgs:t})}))}},{key:"render",value:function(){return Object(j.jsx)("div",{className:"row mymeme",children:Object(j.jsxs)("div",{className:"col-md-6 offset-md-3",children:[Object(j.jsxs)("div",{style:{border:"3px solid black",marginBottom:"3em",textAlign:"center"},children:[Object(j.jsx)("h1",{style:{textAlign:"center"},children:this.state.topText}),Object(j.jsx)("img",{src:this.state.randomImg}),Object(j.jsx)("h1",{style:{textAlign:"center"},children:this.state.bottomText})]}),Object(j.jsx)("input",{className:"form-control",type:"text",value:this.state.topText,name:"topText",placeholder:"Top text",onChange:this.handleChange}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{className:"form-control",type:"text",value:this.state.bottomText,name:"bottomText",placeholder:"Bottom Text",onChange:this.handleChange}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{className:"mybutton",onClick:this.handleClick,children:"Generate Meme"})]})})}}]),n}(a.Component),d=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(j.jsx)("footer",{className:"myfooter",children:Object(j.jsxs)("p",{className:"foot",children:["\xa9 2021. All Rights reserved | Design by"," ",Object(j.jsx)("span",{style:{fontFamily:"Romantica Regular",fontSize:"33px",color:"#fff)"},children:"Joan Mumbi"})]})})}}]),n}(a.Component),x=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).state={},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(h,{}),Object(j.jsx)(u,{}),Object(j.jsx)(d,{})]})}}]),n}(a.Component),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))};o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root")),O()}},[[15,1,2]]]);
//# sourceMappingURL=main.6b63e41f.chunk.js.map