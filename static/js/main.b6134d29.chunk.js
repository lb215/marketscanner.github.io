(this.webpackJsonpmarketscreener=this.webpackJsonpmarketscreener||[]).push([[0],{11:function(e,t,r){},14:function(e,t,r){},15:function(e,t,r){"use strict";r.r(t);var n=r(1),i=r(0),l=r.n(i),c=r(5),o=r.n(c),s=(r(11),r(12),r(2));function a(e){var t=e.total,r=e.label,i=e.suffix,l=e.subtitle;return Object(n.jsx)(s.a,{children:Object(n.jsxs)(s.a.Body,{className:"p-3 text-center",children:[Object(n.jsx)(s.c,{size:2,className:"m-0 mb-1",children:Object(n.jsxs)("span",{style:{color:t>0?"green":"red"},children:[t,i&&i]})}),Object(n.jsx)(s.e,{color:"muted",className:" mb-2",children:Object(n.jsx)("span",{style:{fontWeight:500},children:r})}),l&&Object(n.jsx)(s.e,{color:"muted",className:" mb-4",children:Object(n.jsx)("span",{style:{fontSize:"0.8rem"},children:l})})]})})}var T=r(4);r(14);function d(e){var t=e.main,r=e.label,i=e.percents,l=e.date;return Object(n.jsx)(s.a,{children:Object(n.jsxs)(s.a.Body,{className:"p-3 text-center",children:[Object(n.jsx)(s.c,{size:2,className:"m-0 mb-1",children:Object(n.jsx)("span",{children:t})}),Object(n.jsx)(s.e,{color:"muted",className:" mb-2",children:Object(n.jsx)("span",{style:{fontWeight:500},children:r})}),i&&i.map((function(e){return Object(n.jsxs)(s.e,{color:"muted",className:" mb-1",children:[Object(n.jsx)("b",{children:Object(n.jsxs)("span",{style:{fontSize:"0.8rem"},children:[e.Title,"\t"]})}),Object(n.jsxs)("span",{style:null==e.Color?{fontSize:"0.8rem"}:{fontSize:"0.8rem",fontWeight:500,color:e.Color},children:[e.Percent,void 0!=e.Suffix?e.Suffix:"%"]})]})})),l&&Object(n.jsx)(s.e,{color:"muted",className:" mb-1",children:Object(n.jsx)("span",{style:{fontSize:"0.7rem"},children:new Date(l).toDateString()})})]})})}var h=function(){return Object(n.jsxs)(i.Fragment,{children:[Object(n.jsx)("div",{style:{textAlign:"right",paddingRight:"1rem"},children:Object(n.jsx)("span",{style:{fontSize:"0.8rem"},children:new Date(T.Date).toDateString()})}),Object(n.jsx)(s.d.Content,{title:"Dashboard",children:T.Data.map((function(e){return function(e){switch(e.Type){case"Flow":return function(e){return Object(n.jsx)(s.b.Row,{cards:!0,children:Object(n.jsx)(s.b.Col,{width:12,sm:6,lg:4,children:Object(n.jsx)(a,{total:e.NetFlow,label:e.Title,suffix:e.Suffix,subtitle:e.SubTitle})})})}(e);case"PercentMultiple":return function(e){return Object(n.jsx)(s.b.Row,{cards:!0,children:Object(n.jsx)(s.b.Col,{width:12,sm:6,lg:4,children:Object(n.jsx)(d,{main:e.Main,label:e.Title,percents:e.Percents,date:e.Date})})})}(e)}}(e)}))})]})};var j=function(){return Object(n.jsx)("div",{children:Object(n.jsx)(h,{})})},b=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,16)).then((function(t){var r=t.getCLS,n=t.getFID,i=t.getFCP,l=t.getLCP,c=t.getTTFB;r(e),n(e),i(e),l(e),c(e)}))};o.a.render(Object(n.jsx)(l.a.StrictMode,{children:Object(n.jsx)(j,{})}),document.getElementById("root")),b()},4:function(e){e.exports=JSON.parse('{"Date":"2020-12-03T02:37:32.769196+02:00","Data":[{"Title":"Treasuries net pay downs","Type":"Flow","SubTitle":"12/8/2020 - 12/8/2020","BeginDate":"2020-12-08T00:00:00","EndDate":"2020-12-08T00:00:00","NetFlow":3,"Suffix":"M"},{"Title":"Fed assets purchases","Type":"Flow","SubTitle":"12/1/2020 - 12/11/2020","BeginDate":"2020-12-01T00:00:00","EndDate":"2020-12-11T00:00:00","NetFlow":99,"Suffix":"B"},{"Title":"Treasury general account","Type":"PercentMultiple","Date":"2020-12-01T00:00:00","Main":"1560B","Percents":[{"Title":"Today","Percent":3.89,"Color":"green"},{"Title":"This month","Percent":3.89,"Color":"green"},{"Title":"This year","Percent":12.45,"Color":"green"}]},{"Title":"SOFR","Type":"PercentMultiple","Date":"2020-12-01T00:00:00","Main":0.16,"Percents":[{"Title":"Today","Percent":5.88,"Color":"green"},{"Title":"This week","Percent":14.29,"Color":"red"},{"Title":"This month","Percent":0,"Color":"green"},{"Title":"Volume","Percent":972,"Suffix":"B"}]},{"Title":"Libor ON","Type":"PercentMultiple","Date":"2020-12-01T00:00:00","Main":0.08,"Percents":[{"Title":"Today","Percent":5.29,"Color":"green"},{"Title":"This week","Percent":1.83,"Color":"green"},{"Title":"This month","Percent":1.08,"Color":"green"}]},{"Title":"Libor 1W","Type":"PercentMultiple","Date":"2020-12-01T00:00:00","Main":0.1,"Percents":[{"Title":"Today","Percent":5.36,"Color":"red"},{"Title":"This week","Percent":0.37,"Color":"green"},{"Title":"This month","Percent":2.65,"Color":"green"}]},{"Title":"Libor 1M","Type":"PercentMultiple","Date":"2020-12-01T00:00:00","Main":0.15,"Percents":[{"Title":"Today","Percent":3.75,"Color":"green"},{"Title":"This week","Percent":1.67,"Color":"green"},{"Title":"This month","Percent":5.26,"Color":"red"}]},{"Title":"Libor 2M","Type":"PercentMultiple","Date":"2020-12-01T00:00:00","Main":0.18,"Percents":[{"Title":"Today","Percent":1.11,"Color":"red"},{"Title":"This week","Percent":5.57,"Color":"red"},{"Title":"This month","Percent":3.99,"Color":"red"}]},{"Title":"Libor 3M","Type":"PercentMultiple","Date":"2020-12-01T00:00:00","Main":0.23,"Percents":[{"Title":"Today","Percent":1.92,"Color":"red"},{"Title":"This week","Percent":12.35,"Color":"red"},{"Title":"This month","Percent":7.53,"Color":"red"}]},{"Title":"Libor 6M","Type":"PercentMultiple","Date":"2020-12-01T00:00:00","Main":0.26,"Percents":[{"Title":"Today","Percent":1.47,"Color":"red"},{"Title":"This week","Percent":1.97,"Color":"red"},{"Title":"This month","Percent":6.86,"Color":"red"}]},{"Title":"Libor 12M","Type":"PercentMultiple","Date":"2020-12-01T00:00:00","Main":0.33,"Percents":[{"Title":"Today","Percent":0.87,"Color":"red"},{"Title":"This week","Percent":0.74,"Color":"green"},{"Title":"This month","Percent":0.91,"Color":"red"}]}]}')}},[[15,1,2]]]);
//# sourceMappingURL=main.b6134d29.chunk.js.map