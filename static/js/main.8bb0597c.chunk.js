(this.webpackJsonpmarketscreener=this.webpackJsonpmarketscreener||[]).push([[0],{11:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(1),i=n(0),l=n.n(i),c=n(5),o=n.n(c),s=(n(11),n(12),n(2));function a(e){var t=e.total,n=e.label,i=e.suffix,l=e.subtitle;return Object(r.jsx)(s.a,{children:Object(r.jsxs)(s.a.Body,{className:"p-3 text-center",children:[Object(r.jsx)(s.c,{size:2,className:"m-0 mb-1",children:Object(r.jsxs)("span",{style:{color:t>0?"green":"red"},children:[t,i&&i]})}),Object(r.jsx)(s.e,{color:"muted",className:" mb-2",children:Object(r.jsx)("span",{style:{fontWeight:500},children:n})}),l&&Object(r.jsx)(s.e,{color:"muted",className:" mb-4",children:Object(r.jsx)("span",{style:{fontSize:"0.8rem"},children:l})})]})})}var T=n(4);n(14);function d(e){var t=e.main,n=e.label,i=e.percents,l=e.date;return Object(r.jsx)(s.a,{children:Object(r.jsxs)(s.a.Body,{className:"p-3 text-center",children:[Object(r.jsx)(s.c,{size:2,className:"m-0 mb-1",children:Object(r.jsx)("span",{children:t})}),Object(r.jsx)(s.e,{color:"muted",className:" mb-2",children:Object(r.jsx)("span",{style:{fontWeight:500},children:n})}),i&&i.map((function(e){return Object(r.jsxs)(s.e,{color:"muted",className:" mb-1",children:[Object(r.jsx)("b",{children:Object(r.jsxs)("span",{style:{fontSize:"0.8rem"},children:[e.Title,"\t"]})}),Object(r.jsxs)("span",{style:null==e.Color?{fontSize:"0.8rem"}:{fontSize:"0.8rem",fontWeight:500,color:e.Color},children:[e.Percent,void 0!=e.Suffix?e.Suffix:"%"]})]})})),l&&Object(r.jsx)(s.e,{color:"muted",className:" mb-1",children:Object(r.jsx)("span",{style:{fontSize:"0.7rem"},children:new Date(l).toDateString()})})]})})}var h=function(){return Object(r.jsxs)(i.Fragment,{children:[Object(r.jsx)("div",{style:{textAlign:"right",paddingRight:"1rem"},children:Object(r.jsx)("span",{style:{fontSize:"0.8rem"},children:new Date(T.Date).toDateString()})}),Object(r.jsx)(s.d.Content,{title:"Dashboard",children:T.Data.map((function(e){return function(e){switch(e.Type){case"Flow":return function(e){return Object(r.jsx)(s.b.Row,{cards:!0,children:Object(r.jsx)(s.b.Col,{width:12,sm:6,lg:4,children:Object(r.jsx)(a,{total:e.NetFlow,label:e.Title,suffix:e.Suffix,subtitle:e.SubTitle})})})}(e);case"PercentMultiple":return function(e){return Object(r.jsx)(s.b.Row,{cards:!0,children:Object(r.jsx)(s.b.Col,{width:12,sm:6,lg:4,children:Object(r.jsx)(d,{main:e.Main,label:e.Title,percents:e.Percents,date:e.Date})})})}(e)}}(e)}))})]})};var j=function(){return Object(r.jsx)("div",{children:Object(r.jsx)(h,{})})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,l=t.getLCP,c=t.getTTFB;n(e),r(e),i(e),l(e),c(e)}))};o.a.render(Object(r.jsx)(l.a.StrictMode,{children:Object(r.jsx)(j,{})}),document.getElementById("root")),b()},4:function(e){e.exports=JSON.parse('{"Date":"2021-01-09T00:00:06.6159205+02:00","Data":[{"Title":"Treasuries net pay downs","Type":"Flow","SubTitle":"1/12/2021 - 1/15/2021","BeginDate":"2021-01-12T00:00:00","EndDate":"2021-01-15T00:00:00","NetFlow":-63.6,"Suffix":"B"},{"Title":"Fed assets purchases","Type":"Flow","SubTitle":"1/4/2021 - 1/14/2021","BeginDate":"2021-01-04T00:00:00","EndDate":"2021-01-14T00:00:00","NetFlow":104,"Suffix":"B"},{"Title":"Treasury general account","Type":"PercentMultiple","Date":"2021-01-07T00:00:00","Main":"1577B","Percents":[{"Title":"Today","Percent":1.91,"Color":"green"},{"Title":"This month","Percent":8.78,"Color":"green"},{"Title":"This year","Percent":11.5,"Color":"green"}]},{"Title":"SOFR","Type":"PercentMultiple","Date":"2021-01-07T00:00:00","Main":0.18,"Percents":[{"Title":"Today","Percent":0,"Color":"green"},{"Title":"This week","Percent":5.88,"Color":"red"},{"Title":"This month","Percent":0,"Color":"green"},{"Title":"Volume","Percent":951,"Suffix":"B"}]},{"Title":"Libor ON","Type":"PercentMultiple","Date":"2021-01-07T00:00:00","Main":0.09,"Percents":[{"Title":"Today","Percent":0.29,"Color":"red"},{"Title":"This week","Percent":1.31,"Color":"red"},{"Title":"This month","Percent":4.67,"Color":"red"}]},{"Title":"Libor 1W","Type":"PercentMultiple","Date":"2021-01-07T00:00:00","Main":0.1,"Percents":[{"Title":"Today","Percent":0.86,"Color":"green"},{"Title":"This week","Percent":7.79,"Color":"red"},{"Title":"This month","Percent":4.35,"Color":"red"}]},{"Title":"Libor 1M","Type":"PercentMultiple","Date":"2021-01-07T00:00:00","Main":0.13,"Percents":[{"Title":"Today","Percent":0.48,"Color":"red"},{"Title":"This week","Percent":7.9,"Color":"green"},{"Title":"This month","Percent":9,"Color":"green"}]},{"Title":"Libor 2M","Type":"PercentMultiple","Date":"2021-01-07T00:00:00","Main":0.17,"Percents":[{"Title":"Today","Percent":6.25,"Color":"green"},{"Title":"This week","Percent":2.89,"Color":"green"},{"Title":"This month","Percent":5.09,"Color":"green"}]},{"Title":"Libor 3M","Type":"PercentMultiple","Date":"2021-01-07T00:00:00","Main":0.22,"Percents":[{"Title":"Today","Percent":3.95,"Color":"green"},{"Title":"This week","Percent":5.37,"Color":"green"},{"Title":"This month","Percent":2.44,"Color":"green"}]},{"Title":"Libor 6M","Type":"PercentMultiple","Date":"2021-01-07T00:00:00","Main":0.25,"Percents":[{"Title":"Today","Percent":0.45,"Color":"green"},{"Title":"This week","Percent":3.18,"Color":"green"},{"Title":"This month","Percent":0.74,"Color":"green"}]},{"Title":"Libor 12M","Type":"PercentMultiple","Date":"2021-01-07T00:00:00","Main":0.33,"Percents":[{"Title":"Today","Percent":0.94,"Color":"green"},{"Title":"This week","Percent":3.83,"Color":"green"},{"Title":"This month","Percent":2.66,"Color":"green"}]}]}')}},[[15,1,2]]]);
//# sourceMappingURL=main.8bb0597c.chunk.js.map