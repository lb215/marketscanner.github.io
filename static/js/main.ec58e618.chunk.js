(this.webpackJsonpmarketscreener=this.webpackJsonpmarketscreener||[]).push([[0],{11:function(e,t,r){},14:function(e,t,r){},15:function(e,t,r){"use strict";r.r(t);var n=r(1),i=r(0),l=r.n(i),c=r(5),o=r.n(c),s=(r(11),r(12),r(2));function a(e){var t=e.total,r=e.label,i=e.suffix,l=e.subtitle;return Object(n.jsx)(s.a,{children:Object(n.jsxs)(s.a.Body,{className:"p-3 text-center",children:[Object(n.jsx)(s.c,{size:2,className:"m-0 mb-1",children:Object(n.jsxs)("span",{style:{color:t>0?"green":"red"},children:[t,i&&i]})}),Object(n.jsx)(s.e,{color:"muted",className:" mb-2",children:Object(n.jsx)("span",{style:{fontWeight:500},children:r})}),l&&Object(n.jsx)(s.e,{color:"muted",className:" mb-4",children:Object(n.jsx)("span",{style:{fontSize:"0.8rem"},children:l})})]})})}var T=r(4);r(14);function d(e){var t=e.main,r=e.label,i=e.percents,l=e.date;return Object(n.jsx)(s.a,{children:Object(n.jsxs)(s.a.Body,{className:"p-3 text-center",children:[Object(n.jsx)(s.c,{size:2,className:"m-0 mb-1",children:Object(n.jsx)("span",{children:t})}),Object(n.jsx)(s.e,{color:"muted",className:" mb-2",children:Object(n.jsx)("span",{style:{fontWeight:500},children:r})}),i&&i.map((function(e){return Object(n.jsxs)(s.e,{color:"muted",className:" mb-1",children:[Object(n.jsx)("b",{children:Object(n.jsxs)("span",{style:{fontSize:"0.8rem"},children:[e.Title,"\t"]})}),Object(n.jsxs)("span",{style:null==e.Color?{fontSize:"0.8rem"}:{fontSize:"0.8rem",fontWeight:500,color:e.Color},children:[e.Percent,void 0!=e.Suffix?e.Suffix:"%"]})]})})),l&&Object(n.jsx)(s.e,{color:"muted",className:" mb-1",children:Object(n.jsx)("span",{style:{fontSize:"0.7rem"},children:new Date(l).toDateString()})})]})})}var h=function(){return Object(n.jsxs)(i.Fragment,{children:[Object(n.jsx)("div",{style:{textAlign:"right",paddingRight:"1rem"},children:Object(n.jsx)("span",{style:{fontSize:"0.8rem"},children:new Date(T.Date).toDateString()})}),Object(n.jsx)(s.d.Content,{title:"Dashboard",children:T.Data.map((function(e){return function(e){switch(e.Type){case"Flow":return function(e){return Object(n.jsx)(s.b.Row,{cards:!0,children:Object(n.jsx)(s.b.Col,{width:12,sm:6,lg:4,children:Object(n.jsx)(a,{total:e.NetFlow,label:e.Title,suffix:e.Suffix,subtitle:e.SubTitle})})})}(e);case"PercentMultiple":return function(e){return Object(n.jsx)(s.b.Row,{cards:!0,children:Object(n.jsx)(s.b.Col,{width:12,sm:6,lg:4,children:Object(n.jsx)(d,{main:e.Main,label:e.Title,percents:e.Percents,date:e.Date})})})}(e)}}(e)}))})]})};var j=function(){return Object(n.jsx)("div",{children:Object(n.jsx)(h,{})})},b=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,16)).then((function(t){var r=t.getCLS,n=t.getFID,i=t.getFCP,l=t.getLCP,c=t.getTTFB;r(e),n(e),i(e),l(e),c(e)}))};o.a.render(Object(n.jsx)(l.a.StrictMode,{children:Object(n.jsx)(j,{})}),document.getElementById("root")),b()},4:function(e){e.exports=JSON.parse('{"Date":"2021-01-07T18:00:10.3270814+02:00","Data":[{"Title":"Treasuries net pay downs","Type":"Flow","SubTitle":"1/12/2021 - 1/12/2021","BeginDate":"2021-01-12T00:00:00","EndDate":"2021-01-12T00:00:00","NetFlow":7,"Suffix":"M"},{"Title":"Fed assets purchases","Type":"Flow","SubTitle":"1/4/2021 - 1/14/2021","BeginDate":"2021-01-04T00:00:00","EndDate":"2021-01-14T00:00:00","NetFlow":104,"Suffix":"B"},{"Title":"Treasury general account","Type":"PercentMultiple","Date":"2021-01-05T00:00:00","Main":"1600B","Percents":[{"Title":"Today","Percent":2.36,"Color":"red"},{"Title":"This month","Percent":7.42,"Color":"green"},{"Title":"This year","Percent":10.18,"Color":"green"}]},{"Title":"SOFR","Type":"PercentMultiple","Date":"2021-01-06T00:00:00","Main":0.18,"Percents":[{"Title":"Today","Percent":0,"Color":"green"},{"Title":"This week","Percent":5.88,"Color":"red"},{"Title":"This month","Percent":0,"Color":"green"},{"Title":"Volume","Percent":978,"Suffix":"B"}]},{"Title":"Libor ON","Type":"PercentMultiple","Date":"2021-01-06T00:00:00","Main":0.09,"Percents":[{"Title":"Today","Percent":0.14,"Color":"red"},{"Title":"This week","Percent":1.01,"Color":"green"},{"Title":"This month","Percent":3.9,"Color":"red"}]},{"Title":"Libor 1W","Type":"PercentMultiple","Date":"2021-01-06T00:00:00","Main":0.1,"Percents":[{"Title":"Today","Percent":0,"Color":"green"},{"Title":"This week","Percent":0.62,"Color":"red"},{"Title":"This month","Percent":8.15,"Color":"red"}]},{"Title":"Libor 1M","Type":"PercentMultiple","Date":"2021-01-06T00:00:00","Main":0.13,"Percents":[{"Title":"Today","Percent":0.86,"Color":"red"},{"Title":"This week","Percent":10.05,"Color":"green"},{"Title":"This month","Percent":13.01,"Color":"green"}]},{"Title":"Libor 2M","Type":"PercentMultiple","Date":"2021-01-06T00:00:00","Main":0.18,"Percents":[{"Title":"Today","Percent":0.96,"Color":"red"},{"Title":"This week","Percent":3.35,"Color":"green"},{"Title":"This month","Percent":2.45,"Color":"green"}]},{"Title":"Libor 3M","Type":"PercentMultiple","Date":"2021-01-06T00:00:00","Main":0.23,"Percents":[{"Title":"Today","Percent":1.22,"Color":"green"},{"Title":"This week","Percent":7.83,"Color":"green"},{"Title":"This month","Percent":3.59,"Color":"red"}]},{"Title":"Libor 6M","Type":"PercentMultiple","Date":"2021-01-06T00:00:00","Main":0.25,"Percents":[{"Title":"Today","Percent":0.59,"Color":"green"},{"Title":"This week","Percent":1.85,"Color":"green"},{"Title":"This month","Percent":1.32,"Color":"green"}]},{"Title":"Libor 12M","Type":"PercentMultiple","Date":"2021-01-06T00:00:00","Main":0.33,"Percents":[{"Title":"Today","Percent":0.8,"Color":"red"},{"Title":"This week","Percent":2.6,"Color":"green"},{"Title":"This month","Percent":1.3,"Color":"green"}]}]}')}},[[15,1,2]]]);
//# sourceMappingURL=main.ec58e618.chunk.js.map