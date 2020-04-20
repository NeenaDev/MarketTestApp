(this["webpackJsonpmarket-app"]=this["webpackJsonpmarket-app"]||[]).push([[0],{40:function(e,t,a){e.exports=a(71)},45:function(e,t,a){},46:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(16),c=a.n(o),i=(a(45),a(8)),s=a(9),l=a(11),u=a(10),d=a(39),m=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"onDeleteEvent",value:function(){this.props.onDeleteEvent(this.props.data)}},{key:"render",value:function(){var e=this.props,t=e.data,a=e.disabled;return r.a.createElement("tr",{className:"eachRow"},r.a.createElement(p,{cellData:{type:"rank",value:null!==t.cmc_rank?t.cmc_rank:"N/A",id:t.id}}),r.a.createElement(p,{cellData:{type:"symbol",value:t.symbol,id:t.id}}),r.a.createElement(p,{cellData:{type:"price",value:t.quote.USD.price,id:t.id}}),r.a.createElement("td",{className:"deleteCell"},r.a.createElement(d.a,{className:"deleteBtn ".concat(a&&"disableDeleteBtn"),onClick:this.onDeleteEvent.bind(this),size:17,color:"#3f83ab"})))}}]),a}(r.a.Component),p=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("td",null,r.a.createElement("div",{id:this.props.cellData.id},this.props.cellData.value))}}]),a}(r.a.Component),h=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this)).onSort=function(e){return function(t){var a=n.state.sort.column?"asc"===n.state.sort.direction?"desc":"asc":"desc",r=n.props.data.sort((function(t,a){return"rank"===e?t.cmc_rank-a.cmc_rank:t.price-a.price}));"desc"===a&&r.reverse(),n.setState({data:r,sort:{column:e,direction:a}})}},n.setArrow=function(e){var t="sort-direction";return n.state.sort.column===e&&(t+="asc"===n.state.sort.direction?" asc":" desc"),t},n.state={sort:{column:null,direction:"desc"}},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.data,n=t.onRowDel,o=a.map((function(t){return r.a.createElement(m,{data:t,key:t.id,onDeleteEvent:n.bind(e),disabled:1===a.length})}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("table",{className:"table table-bordered"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:this.setArrow("rank"),onClick:this.onSort("rank")},"CMC Rank"),r.a.createElement("th",null,"Symbol"),r.a.createElement("th",{className:this.setArrow("price"),onClick:this.onSort("price")},"Price"),r.a.createElement("th",null,"Action"))),r.a.createElement("tbody",null,o)))}}]),a}(n.Component),E=a(14),D=(a(46),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this)).state={displayMenu:!1},n.showDropdownMenu=n.showDropdownMenu.bind(Object(E.a)(n)),n.hideDropdownMenu=n.hideDropdownMenu.bind(Object(E.a)(n)),n}return Object(s.a)(a,[{key:"showDropdownMenu",value:function(e){var t=this;e.preventDefault(),this.setState({displayMenu:!0},(function(){document.addEventListener("click",t.hideDropdownMenu)}))}},{key:"hideDropdownMenu",value:function(){var e=this;this.setState({displayMenu:!1},(function(){document.removeEventListener("click",e.hideDropdownMenu)}))}},{key:"render",value:function(){var e=this,t=this.props.data.map((function(t){return r.a.createElement("li",{key:t.id,onClick:function(){return e.props.onChange(t)}},t.symbol)}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"dropDownContainer"},r.a.createElement("div",{className:"dropdown"},r.a.createElement("div",{className:"button",onClick:this.showDropdownMenu},this.props.label),this.state.displayMenu?r.a.createElement("ul",null,t):null)))}}]),a}(n.Component)),k=a(33),f=a.n(k).a.create({baseURL:"https://www.stackadapt.com/coinmarketcap/"}),b=function(e){return function(t){t({type:"GET_MARKET_QUOTES_REQUEST"}),f.get("/quotes?id=".concat(e.toString())).then((function(e){var a;a=Object.values(e.data.data),t({type:"GET_MARKET_QUOTES_SUCCESS",marketQuotes:a})})).catch((function(e){t(function(e){return{type:"GET_MARKET_QUOTES_FAIL",error:e}}(e))}))}},v=a(18),T=(a(68),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={marketTableData:[],marketDropdownListData:[]},n}return Object(s.a)(a,[{key:"handleRowDel",value:function(e){this.state.marketDropdownListData.push(e),this.setState(this.state.marketDropdownListData);var t=this.state.marketTableData.indexOf(e);this.state.marketTableData.splice(t,1),this.setState(this.state.marketTableData)}},{key:"handleAddEvent",value:function(e){var t=e;this.state.marketTableData.push(t),this.setState(this.state.marketTableData);var a=this.state.marketDropdownListData.filter((function(e){return e.symbol!==t.symbol}));this.setState({marketDropdownListData:a})}},{key:"componentDidMount",value:function(){this.props.getMarketData()}},{key:"componentDidUpdate",value:function(e){var t=this.props.marketData;if(e.marketData!==t&&t){var a=t.length,n=t.slice(0,5),r=t.slice(5,a);this.setState({marketTableData:n,marketDropdownListData:r})}}},{key:"render",value:function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"header"}),r.a.createElement("div",{className:"content"},r.a.createElement(D,{data:this.state.marketDropdownListData,label:"Select Symbol",onChange:this.handleAddEvent.bind(this)}),r.a.createElement(h,{onRowDel:this.handleRowDel.bind(this),data:this.state.marketTableData})))}}]),a}(n.Component)),_=Object(v.b)((function(e){return{marketData:e.marketData.marketQuotes}}),(function(e){return{getMarketData:function(){return e((function(e){e({type:"GET_MARKET_DATA_REQUEST"}),f.get("map").then((function(t){var a=[],n=[],r=(a=t.data.data.slice(0,10)).map((function(e){return n.push(e.id)}));console.log(r),e(function(e){return{type:"GET_MARKET_DATA_SUCCESS",marketData:e}}(a)),e(b(n))})).catch((function(t){e(function(e){return{type:"GET_MARKET_DATA_FAIL",error:e}}(t))}))}))},getMarketQuotes:function(t){return e(b())}}}))(T);a(69);var S=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(_,null))},O=a(6),w=a(38),y=a(12),A=a(35),M=a(36),j=a.n(M),C={marketData:[],marketQuotes:[]},R=function(e,t){return e},g=function(e,t){return{marketData:t.marketData,loading:!1}},U=function(e,t){return{loading:!1,error:t.error}},N=function(e,t){return e},Q=function(e,t){return{marketQuotes:t.marketQuotes,loading:!1}},L=function(e,t){return{loading:!1,error:t.error}},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_MARKET_DATA_REQUEST":return R(e);case"GET_MARKET_DATA_SUCCESS":return g(0,t);case"GET_MARKET_DATA_FAIL":return U(0,t);case"GET_MARKET_QUOTES_REQUEST":return N(e);case"GET_MARKET_QUOTES_SUCCESS":return Q(0,t);case"GET_MARKET_QUOTES_FAIL":return L(0,t);default:return e}},K=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||y.d,F=Object(y.c)({marketData:G}),I=Object(y.e)(F,K(Object(y.a)(j.a,A.a))),B=Object(O.d)(S),q=r.a.createElement(v.a,{store:I},r.a.createElement(w.a,null,r.a.createElement(B,null)));c.a.render(q,document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.3b21413e.chunk.js.map