(this["webpackJsonpcovid-19"]=this["webpackJsonpcovid-19"]||[]).push([[0],{104:function(e,t,a){},105:function(e,t,a){},193:function(e,t,a){e.exports=a(383)},27:function(e){e.exports=JSON.parse('{"AF":"Afghanistan","AL":"Albania","DZ":"Algeria","AO":"Angola","AR":"Argentina","AM":"Armenia","AU":"Australia","AT":"Austria","AZ":"Azerbaijan","BS":"Bahamas","BD":"Bangladesh","BY":"Belarus","BE":"Belgium","BZ":"Belize","BJ":"Benin","BT":"Bhutan","BO":"Bolivia","BA":"Bosnia and Herzegovina","BW":"Botswana","BR":"Brazil","BN":"Brunei Darussalam","BG":"Bulgaria","BF":"Burkina Faso","BI":"Burundi","KH":"Cambodia","CM":"Cameroon","CA":"Canada","CI":"Ivory Coast","CF":"Central African Republic","TD":"Chad","CL":"Chile","CN":"China","CO":"Colombia","CG":"Congo","CD":"DR Congo","CR":"Costa Rica","HR":"Croatia","CU":"Cuba","CY":"Cyprus","CZ":"Czechia","DK":"Denmark","DP":"Diamond Princess","DJ":"Djibouti","DO":"Dominican Republic","EC":"Ecuador","EG":"Egypt","SV":"El Salvador","GQ":"Equatorial Guinea","ER":"Eritrea","EE":"Estonia","ET":"Ethiopia","FK":"Falkland Islands","FJ":"Fiji","FI":"Finland","FR":"France","GF":"French Guiana","TF":"French Southern Territories","GA":"Gabon","GM":"Gambia","GE":"Georgia","DE":"Germany","GH":"Ghana","GR":"Greece","GL":"Greenland","GT":"Guatemala","GN":"Guinea","GW":"Guinea-Bissau","GY":"Guyana","HT":"Haiti","HN":"Honduras","HK":"Hong Kong","HU":"Hungary","IS":"Iceland","IN":"India","ID":"Indonesia","IR":"Iran","IQ":"Iraq","IE":"Ireland","IL":"Israel","IT":"Italy","JM":"Jamaica","JP":"Japan","JO":"Jordan","KZ":"Kazakhstan","KE":"Kenya","KP":"North Korea","XK":"Republic of Kosovo","KW":"Kuwait","KG":"Kyrgyzstan","LA":"Lao","LV":"Latvia","LB":"Lebanon","LS":"Lesotho","LR":"Liberia","LY":"Libya","LT":"Lithuania","LU":"Luxembourg","MK":"Macedonia","MG":"Madagascar","MW":"Malawi","MY":"Malaysia","ML":"Mali","MR":"Mauritania","MX":"Mexico","MD":"Moldova","MN":"Mongolia","ME":"Montenegro","MA":"Morocco","MZ":"Mozambique","MM":"Myanmar","NA":"Namibia","NP":"Nepal","NL":"Netherlands","NC":"New Caledonia","NZ":"New Zealand","NI":"Nicaragua","NE":"Niger","NG":"Nigeria","NO":"Norway","OM":"Oman","PK":"Pakistan","PS":"Palestine","PA":"Panama","PG":"Papua New Guinea","PY":"Paraguay","PE":"Peru","PH":"Philippines","PL":"Poland","PT":"Portugal","PR":"Puerto Rico","QA":"Qatar","RO":"Romania","RU":"Russia","RW":"Rwanda","SA":"Saudi Arabia","SN":"Senegal","RS":"Serbia","SL":"Sierra Leone","SG":"Singapore","SK":"Slovakia","SI":"Slovenia","SB":"Solomon Islands","SO":"Somalia","ZA":"South Africa","KR":"South Korea","SS":"South Sudan","ES":"Spain","LK":"Sri Lanka","SD":"Sudan","SR":"Suriname","SJ":"Svalbard and Jan Mayen","SZ":"Swaziland","SE":"Sweden","CH":"Switzerland","SY":"Syrian Arab Republic","TW":"Taiwan","TJ":"Tajikistan","TZ":"Tanzania","TH":"Thailand","TL":"Timor-Leste","TG":"Togo","TT":"Trinidad and Tobago","TN":"Tunisia","TR":"Turkey","TM":"Turkmenistan","AE":"UAE","UG":"Uganda","GB":"United Kingdom","UA":"Ukraine","US":"USA","UY":"Uruguay","UZ":"Uzbekistan","VU":"Vanuatu","VE":"Venezuela","VN":"Vietnam","EH":"Western Sahara","YE":"Yemen","ZM":"Zambia","ZW":"Zimbabwe"}')},379:function(e,t,a){},383:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),r=a(21),l=a.n(r),o=(a(104),a(63));a(198),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=a(11),c=a(12),d=a(13),u=a(14),m=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={hasError:!1},n}return Object(c.a)(a,[{key:"componentDidCatch",value:function(e,t){console.error(e,t)}},{key:"render",value:function(){return this.state.hasError?i.a.createElement("h1",null,"Something went wrong."):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),a}(i.a.Component),h=a(25),g=a(30),f=a(16),b=(a(105),a(99)),p=a(10),v=(a(379),function(e){var t=void 0===e.data?[{name:"Jan",uv:4e3,pv:2400,amt:2400},{name:"Feb",uv:3e3,pv:1398,amt:2210},{name:"March",uv:2e3,pv:9800,amt:2290},{name:"April",uv:2780,pv:3908,amt:2e3},{name:"May",uv:1890,pv:4800,amt:2181},{name:"June",uv:2390,pv:3800,amt:2500},{name:"July",uv:3490,pv:4300,amt:2100}]:e.data,a=function(t){var a=t.active,n=t.payload,r=t.label;return a?i.a.createElement("div",{className:"custom-tooltip",style:{background:"white",padding:15,borderRadius:10}},i.a.createElement("p",{style:{textAlign:"center",fontWeight:"bold",color:"black"}},r),n.map((function(t,a){return i.a.createElement("div",{key:a},i.a.createElement("span",{style:{color:t.color,fontWeight:"bold"}},t.name,":"," "),i.a.createElement("span",{style:{color:t.color,fontWeight:"bold"}},t.value," [+",e.data.filter((function(e){return(null===e||void 0===e?void 0:e.name)===t.payload.name}))[0]["daily".concat(t.name)],"]"),i.a.createElement("br",null))}))):null};return i.a.createElement("div",{className:"container-Linechart",style:e.height?{height:e.height}:{height:270}},i.a.createElement(p.e,null,i.a.createElement(p.d,{width:500,height:100,data:t},!1===e.grid?null:i.a.createElement(p.a,{strokeDasharray:"3 3"}),i.a.createElement(p.g,{hide:!1,dataKey:e.axis?e.axis:"name"}),i.a.createElement(p.h,null),e.customTooltip?i.a.createElement(p.f,{content:i.a.createElement(a,null)}):i.a.createElement(p.f,null),i.a.createElement(p.b,{layout:e.legendLayout?e.legendLayout:"horizontal",margin:{top:0,left:0,right:0,bottom:10},verticalAlign:e.verticalAlign?e.verticalAlign:"bottom"}),e.labels.map((function(t,a){return i.a.createElement(p.c,{key:a,type:"monotone",dataKey:t,stroke:e.colors[a],activeDot:{r:8},fill:e.colors[a],dot:!1})})))))}),y=(a(380),a(66)),E=a.n(y),C=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement(p.d,{width:250,height:50,data:this.props.data},i.a.createElement(p.c,{type:"monotone",dataKey:this.props.label,stroke:this.props.color,strokeWidth:2,dot:!1}))}}]),a}(n.PureComponent);C.jsfiddleUrl="https://jsfiddle.net/alidingling/exh283uh/";var S=a(67),k=a.n(S),N=a(68),w=a.n(N),R=a(44),_=a.n(R),x=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).chunkArray=function(e,t){for(var a=[],n=Object(f.a)(e);n.length>0;)a.push(n.splice(0,t));return a},n.state={searchString:"",currentPage:0,selectedCity:"",totalPages:0,activePage:0,selectedCountry:!1,locationLoader:!1,data:[],stateWiseCity:[],india:[],timelines:[],labels:["January","February","March","April","May"],isTable:0,datasets:[{label:"Rainfall",backgroundColor:"rgba(75,192,192,1)",borderColor:"rgba(0,0,0,1)",borderWidth:2,data:[65,59,80,81,56],data1:[65,59,80,81,56],data2:[65,59,80,81,56],data3:[65,59,80,81,56]}]},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({locationLoader:!0}),fetch("https://api.covid19india.org/data.json",{method:"GET"}).then((function(e){return e.json()})).then((function(t){e.setState({india:t,locationLoader:!1})})).catch((function(t){e.setState({locationLoader:!1})})),fetch("https://api.covid19india.org/state_district_wise.json",{method:"GET"}).then((function(e){return e.json()})).then((function(t){e.setState({stateWiseCity:t})})).catch((function(e){}))}},{key:"render",value:function(){var e=this,t=0!==this.state.india.length?this.state.india.cases_time_series.map((function(e){return""!==e.totalconfirmed?{name:e.date,confirmed:Number(e.totalconfirmed)}:null})):null,a=0!==this.state.india.length?this.state.india.cases_time_series.map((function(e){return""!==e.totalconfirmed?{name:e.date,confirmed:Number(e.totalconfirmed)-Number(e.totaldeceased)-Number(e.totalrecovered)}:null})):null,n=0!==this.state.india.length?this.state.india.cases_time_series.map((function(e){return""!==e.totaldeceased?{name:e.date,confirmed:Number(e.totaldeceased)}:null})):null,r=0!==this.state.india.length?this.state.india.cases_time_series.map((function(e){return""!==e.totalrecovered?{name:e.date,confirmed:Number(e.totalrecovered)}:null})):null,l=(0!==this.state.india.length&&this.state.india.cases_time_series.map((function(e){return""!==e.dailyrecovered?{name:e.date,Confirmed:Number(e.dailyconfirmed),Active:Number(e.dailyconfirmed)-Number(e.dailyrecovered)-Number(e.dailydeceased),Recovered:Number(e.dailyrecovered),Deaths:Number(e.dailydeceased)}:null})),0!==this.state.india.length?this.state.india.cases_time_series.map((function(e){return""!==e.totalrecovered?{name:e.date,Confirmed:Number(e.totalconfirmed),Active:Number(e.totalconfirmed)-Number(e.totalrecovered)-Number(e.totaldeceased),Recovered:Number(e.totalrecovered),Deaths:Number(e.totaldeceased),dailyConfirmed:Number(e.dailyconfirmed),dailyActive:Number(e.dailyconfirmed)-Number(e.dailyrecovered)-Number(e.dailydeceased),dailyRecovered:Number(e.dailyrecovered),dailyDeaths:Number(e.dailydeceased)}:null})):null),o=0!==this.state.india.length?this.state.india.statewise.filter((function(e){return"Total"!==e.state})).map((function(e){return{state:e.state,confirmed:Number(e.confirmed),active:Number(e.active),recovered:Number(e.recovered),deaths:Number(e.deaths),deltaConfirmed:Number(e.delta.confirmed),deltaActive:Number(e.delta.active),deltaRecovered:Number(e.delta.recovered),deltaDeaths:Number(e.delta.deaths)}})):[],s=0!==this.state.india.length?[{Header:"State/UT",accessor:"state"},{Header:"Confirmed",accessor:"confirmed",Cell:function(e){return i.a.createElement(i.a.Fragment,null,0===e.original.deltaConfirmed?null:i.a.createElement("span",{style:{fontSize:15,fontWeight:"bold",color:"#e43339"}},i.a.createElement("span",{style:{fontSize:15,fontWeight:"bold"}},"\u25b2"),e.original.deltaConfirmed)," ",i.a.createElement("span",{className:"number"},e.value))}},{Header:"Active",accessor:"active",Cell:function(e){return i.a.createElement(i.a.Fragment,null,0===e.original.deltaActive?null:i.a.createElement("span",{style:{fontSize:15,fontWeight:"bold",color:"#192a56"}},i.a.createElement("span",{style:{fontSize:15,fontWeight:"bold"}},"\u25b2"),e.original.deltaActive)," ",i.a.createElement("span",{className:"number"},e.value))}},{Header:"Recovered",accessor:"recovered",Cell:function(e){return i.a.createElement(i.a.Fragment,null,0===e.original.deltaRecovered?null:i.a.createElement("span",{style:{fontSize:15,fontWeight:"bold",color:"#006266"}},i.a.createElement("span",{style:{fontSize:15,fontWeight:"bold"}},"\u25b2"),e.original.deltaRecovered)," ",i.a.createElement("span",{className:"number"},e.value))}},{Header:"Deaths",accessor:"deaths",Cell:function(e){return i.a.createElement(i.a.Fragment,null,0===e.original.deltaDeaths?null:i.a.createElement("span",{style:{fontSize:15,fontWeight:"bold",color:"#535c68"}},i.a.createElement("span",{style:{fontSize:15,fontWeight:"bold"}},"\u25b2"),e.original.deltaDeaths)," ",i.a.createElement("span",{className:"number"},e.value))}}]:[],c=0!==this.state.stateWiseCity.length?Object.keys(this.state.stateWiseCity).map((function(t){return Object(g.a)({},t,Object.keys(e.state.stateWiseCity[t].districtData).map((function(a){return{city:a,confirmed:e.state.stateWiseCity[t].districtData[a].confirmed,active:e.state.stateWiseCity[t].districtData[a].active,recovered:e.state.stateWiseCity[t].districtData[a].recovered,deaths:e.state.stateWiseCity[t].districtData[a].deaths}})))})):[],d=0!==this.state.india.length?[{Header:"District",accessor:"city"},{Header:"Confirmed",accessor:"confirmed"},{Header:"Active",accessor:"active"},{Header:"Recovered",accessor:"recovered"},{Header:"Deaths",accessor:"deaths"}]:[];return i.a.createElement(m,null,i.a.createElement("div",{className:"App",style:{background:"#172852",color:"white",height:"100vh",overflowY:"scroll"}},i.a.createElement("div",{className:"container"},i.a.createElement("div",null,i.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",fontSize:40,fontWeight:"bold",marginTop:30,paddingBottom:30,borderBottom:"2px solid white"}},"Covid-19 India Dashboard",i.a.createElement("img",{onClick:function(){return window.open("https://github.com/miteshtagadiya/Covid-19-Global-Dashboard","_blank")},src:E.a,alt:"github",style:{height:50,width:50,cursor:"pointer"}})),i.a.createElement("div",{style:{padding:15}},i.a.createElement("img",{onClick:function(){return e.props.history.push("/india")},src:k.a,alt:"India",style:{height:50,width:70,cursor:"pointer"}}),i.a.createElement("span",{style:{fontWeight:"bold"}},"Switch"),i.a.createElement("img",{onClick:function(){return e.props.history.push("/")},src:w.a,alt:"World",style:{marginLeft:15,height:50,width:50,cursor:"pointer"}}))),i.a.createElement("div",{style:{minHeight:"90vh"}},i.a.createElement("div",{className:"row",style:{padding:"10px 0px 30px 0px"}},i.a.createElement("div",{className:"col-sm-3",style:{padding:15}},i.a.createElement("div",{style:{padding:20,fontWeight:"bold",background:"linear-gradient(to right, #ee9ca7, #ffdde1)",color:"#e43339",borderRadius:10}},i.a.createElement("div",{style:{fontSize:35}},0!==this.state.india.length?this.state.india.statewise.filter((function(e){return"Total"===e.state}))[0].confirmed:0),i.a.createElement("div",{style:{fontSize:15,marginBottom:10}},"[+",0!==this.state.india.length?this.state.india.statewise.filter((function(e){return"Total"===e.state}))[0].confirmed-this.state.india.cases_time_series[this.state.india.cases_time_series.length-2].totalconfirmed:0,"]"),i.a.createElement("div",{style:{fontSize:18}},"Confirmed"),0!==this.state.india.length?i.a.createElement(C,{data:t,label:"confirmed",color:"#e43339"}):null)),i.a.createElement("div",{className:"col-sm-3",style:{padding:15}},i.a.createElement("div",{style:{padding:20,fontWeight:"bold",background:"linear-gradient(to right, #ee9ca7, #ffdde1)",color:"#192a56",borderRadius:10}},i.a.createElement("div",{style:{fontSize:35}},0!==this.state.india.length?this.state.india.statewise.filter((function(e){return"Total"===e.state}))[0].active:0),i.a.createElement("div",{style:{fontSize:15,marginBottom:10}},"[+",0!==this.state.india.length?this.state.india.statewise.filter((function(e){return"Total"===e.state}))[0].active-(this.state.india.cases_time_series[this.state.india.cases_time_series.length-2].totalconfirmed-this.state.india.cases_time_series[this.state.india.cases_time_series.length-2].totaldeceased-this.state.india.cases_time_series[this.state.india.cases_time_series.length-2].totalrecovered):0,"]"),i.a.createElement("div",{style:{fontSize:18}},"Active"),0!==this.state.india.length?i.a.createElement(C,{data:a,label:"confirmed",color:"#192a56"}):null)),i.a.createElement("div",{className:"col-sm-3",style:{padding:15}},i.a.createElement("div",{style:{padding:20,fontWeight:"bold",background:"linear-gradient(to right, #ee9ca7, #ffdde1)",color:"#006266",borderRadius:10}},i.a.createElement("div",{style:{fontSize:35}},0!==this.state.india.length?this.state.india.statewise.filter((function(e){return"Total"===e.state}))[0].recovered:0),i.a.createElement("div",{style:{fontSize:15,marginBottom:10}},"[+",0!==this.state.india.length?this.state.india.statewise.filter((function(e){return"Total"===e.state}))[0].recovered-this.state.india.cases_time_series[this.state.india.cases_time_series.length-2].totalrecovered:0,"]"),i.a.createElement("div",{style:{fontSize:18}},"Recovered"),0!==this.state.india.length?i.a.createElement(C,{data:r,label:"confirmed",color:"#006266"}):null)),i.a.createElement("div",{className:"col-sm-3",style:{padding:15}},i.a.createElement("div",{style:{padding:20,fontWeight:"bold",background:"linear-gradient(to right, #ee9ca7, #ffdde1)",color:"#535c68",borderRadius:10}},i.a.createElement("div",{style:{fontSize:35}},0!==this.state.india.length?this.state.india.statewise.filter((function(e){return"Total"===e.state}))[0].deaths:0),i.a.createElement("div",{style:{fontSize:15,marginBottom:10}},"[+",0!==this.state.india.length?this.state.india.statewise.filter((function(e){return"Total"===e.state}))[0].deaths-this.state.india.cases_time_series[this.state.india.cases_time_series.length-2].totaldeceased:0,"]"),i.a.createElement("div",{style:{fontSize:18}},"Deaths"),0!==this.state.india.length?i.a.createElement(C,{data:n,label:"confirmed",color:"#535c68"}):null))),i.a.createElement("div",{style:{background:"linear-gradient(to right, #d9a7c7, #fffcdc)",paddingBottom:15,borderRadius:15,marginBottom:15}},i.a.createElement(v,{customTooltip:!0,grid:!1,data:l,labels:["Confirmed","Active","Recovered","Deaths"],colors:["#e43339","#192a56","#006266","#535c68"]})),1===this.state.isTable?null:!0===this.state.locationLoader?i.a.createElement("div",null,i.a.createElement("img",{src:_.a,alt:"Loader"})):i.a.createElement("div",{style:{paddingTop:5}},i.a.createElement("input",{type:"text",placeholder:"Search",onChange:function(t){return e.setState({searchString:t.target.value})}})),i.a.createElement("div",{style:{textAlign:"right",padding:"15px 0px",marginTop:15}},i.a.createElement("span",{onClick:function(){return e.setState({isTable:1})},style:1===this.state.isTable?{background:"#f6565b",fontWeight:"bold",cursor:"pointer",color:"white",padding:"10px 30px",borderRadius:"20px 0px 0px 20px"}:{background:"white",fontWeight:"bold",cursor:"pointer",color:"black",padding:"10px 30px",borderRadius:"20px 0px 0px 20px"}},"Table"),i.a.createElement("span",{onClick:function(){return e.setState({isTable:0,selectedCountry:!1})},style:0===this.state.isTable?{background:"#f6565b",fontWeight:"bold",cursor:"pointer",color:"white",padding:"10px 30px",borderRadius:"0px 20px 20px 0px"}:{background:"white",fontWeight:"bold",cursor:"pointer",color:"black",padding:"10px 30px",borderRadius:"0px 20px 20px 0px"}},"Card")),0===this.state.isTable?i.a.createElement("div",{className:"row"},!0===this.state.locationLoader?i.a.createElement("div",null,i.a.createElement("img",{src:_.a,alt:"Loader"})):0!==this.state.india.length?this.state.india.statewise.filter((function(t){return t.state.toLowerCase().includes(e.state.searchString.toLowerCase())})).map((function(e,t){return"Total"!==e.state?i.a.createElement("div",{key:t,className:"col-sm-4",style:{padding:15}},i.a.createElement("div",{style:{textAlign:"center",borderRadius:10,background:"white",color:"black"}},i.a.createElement("label",{style:{borderTopLeftRadius:10,borderTopRightRadius:10,color:"white",width:"100%",fontSize:18,fontWeight:"bold",padding:10,background:"#f6565b"}},e.state),i.a.createElement("br",null),i.a.createElement("div",{className:"row justify-content-center",style:{paddingTop:15,paddingBottom:15}},i.a.createElement("div",{style:{padding:10,fontWeight:"bold"}},i.a.createElement("div",null,e.confirmed),i.a.createElement("div",null,"Confirmed")),i.a.createElement("div",{style:{padding:10,fontWeight:"bold"}},i.a.createElement("div",null,e.active),i.a.createElement("div",null,"Active")),i.a.createElement("div",{style:{padding:10,fontWeight:"bold"}},i.a.createElement("div",null,e.recovered),i.a.createElement("div",null,"Recovered")),i.a.createElement("div",{style:{padding:10,fontWeight:"bold"}},i.a.createElement("div",null,e.deaths),i.a.createElement("div",null,"Deaths"))))):null})):null):i.a.createElement("div",{className:"row",style:{marginTop:15}},i.a.createElement("div",{className:"col-sm-12"},i.a.createElement("div",{style:{background:"white",color:"black",borderRadius:10}},i.a.createElement(b.a,{data:o,columns:s,defaultPageSize:10,className:"-striped -highlight",noDataText:i.a.createElement("b",null,"No data found"),getTheadProps:function(e,t,a){return{style:{fontWeight:"bold"}}},getTdProps:function(e,t,a,n){return{onClick:function(e,t){t&&t()}}},filterable:!0,SubComponent:function(e){return i.a.createElement("div",{style:{padding:"20px"}},i.a.createElement("div",{style:{borderRadius:10}},i.a.createElement(b.a,{data:Object.values(c.filter((function(t){return Object.keys(t)[0]===e.original.state}))[0])[0],columns:d,defaultPageSize:5,showPagination:!0})))}}))))),i.a.createElement("div",{style:{padding:15}},"Designed and Developed by","  ",i.a.createElement("a",{style:{color:"#f6565b",fontWeight:"bold",textDecoration:"none"},href:"https://miteshtagadiya.js.org",rel:"noopener noreferrer",target:"_blank"},"Mitesh Tagadiya")))))}}]),a}(n.Component),j=Object(h.f)(x),T=a(70),D=a(164),L="LEFT",P=function(e,t){for(var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=e,i=[];n<=t;)i.push(n),n+=a;return i},O=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;Object(s.a)(this,a),(n=t.call(this,e)).gotoPage=function(e){var t=n.props.onPageChanged,a=void 0===t?function(e){return e}:t,i=Math.max(0,Math.min(e,n.totalPages)),r={currentPage:i,totalPages:n.totalPages,pageLimit:n.pageLimit,totalRecords:n.totalRecords};n.setState({currentPage:i},(function(){return a(r)}))},n.handleClick=function(e){return function(t){t.preventDefault(),n.gotoPage(e)}},n.handleMoveLeft=function(e){e.preventDefault(),n.gotoPage(n.state.currentPage-2*n.pageNeighbours-1)},n.handleMoveRight=function(e){e.preventDefault(),n.gotoPage(n.state.currentPage+2*n.pageNeighbours+1)},n.fetchPageNumbers=function(){var e=n.totalPages,t=n.state.currentPage,a=n.pageNeighbours,i=2*n.pageNeighbours+3;if(e>i+2){var r=Math.max(2,t-a),l=Math.min(e-1,t+a),o=P(r,l),s=r>2,c=e-l>1,d=i-(o.length+1);switch(!0){case s&&!c:var u=P(r-d,r-1);o=[L].concat(Object(f.a)(u),Object(f.a)(o));break;case!s&&c:var m=P(l+1,l+d);o=[].concat(Object(f.a)(o),Object(f.a)(m),["RIGHT"]);break;case s&&c:default:o=[L].concat(Object(f.a)(o),["RIGHT"])}return[1].concat(Object(f.a)(o),[e])}return P(1,e)};var i=e.totalRecords,r=void 0===i?null:i,l=e.pageLimit,o=void 0===l?30:l,c=e.pageNeighbours,d=void 0===c?0:c;return n.pageLimit="number"===typeof o?o:30,n.totalRecords="number"===typeof r?r:0,n.pageNeighbours="number"===typeof d?Math.max(0,Math.min(d,2)):0,n.totalPages=Math.ceil(n.totalRecords/n.pageLimit),n.state={currentPage:1},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.gotoPage(1)}},{key:"render",value:function(){var e=this;if(!this.totalRecords||1===this.totalPages)return null;var t=this.state.currentPage,a=this.fetchPageNumbers();return i.a.createElement(n.Fragment,null,i.a.createElement("nav",{"aria-label":"Countries Pagination"},i.a.createElement("ul",{className:"pagination"},a.map((function(a,n){return a===L?i.a.createElement("li",{key:n,className:"page-item"},i.a.createElement("a",{className:"page-link",href:"#","aria-label":"Previous",onClick:e.handleMoveLeft},i.a.createElement("span",{"aria-hidden":"true"},"\xab"),i.a.createElement("span",{className:"sr-only"},"Previous"))):"RIGHT"===a?i.a.createElement("li",{key:n,className:"page-item"},i.a.createElement("a",{className:"page-link",href:"#","aria-label":"Next",onClick:e.handleMoveRight},i.a.createElement("span",{"aria-hidden":"true"},"\xbb"),i.a.createElement("span",{className:"sr-only"},"Next"))):i.a.createElement("li",{key:n,className:"page-item".concat(t===a?" active":"")},i.a.createElement("a",{className:"page-link",href:"#",onClick:e.handleClick(a)},a))})))))}}]),a}(n.Component),W=a(27),A=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).chunkArray=function(e,t){for(var a=[],n=Object(f.a)(e);n.length>0;)a.push(n.splice(0,t));return a},n.onPageChanged=function(e){var t=n.state.data,a=e.currentPage,i=e.totalPages,r=e.pageLimit,l=(a-1)*r,o=t.locations.slice(l,l+r);n.setState({timelines:[],locationLoader:!0}),n.state.selectedCountry||n.renderCharts(n.chunkArray(Object.keys(W),9)[a-1]),n.setState({currentPage:a-1,currentLocations:o,totalPages:i})},n.onCardPageChanged=function(e){n.state.data;var t=e.currentPage;e.totalPages,e.pageLimit;n.setState({cards:[],locationLoader:!0}),!1!==n.state.loadDefaultCards||n.state.selectedCountry||n.renderCards(n.chunkArray(Object.keys(W),9)[t-1]),n.setState({currentCardPage:t-1,locationLoader:!1,loadDefaultCards:!1,selectedCountry:!1})},n.state={searchString:"",cards:[],currentPage:0,currentCardPage:0,totalCardPages:0,totalPages:0,globalData:0,locationLoader:!1,selectedCountry:!1,loadDefaultCards:!0,data:[],timelines:[],labels:["January","February","March","April","May"],isChart:0,datasets:[{label:"Rainfall",backgroundColor:"rgba(75,192,192,1)",borderColor:"rgba(0,0,0,1)",borderWidth:2,data:[65,59,80,81,56],data1:[65,59,80,81,56],data2:[65,59,80,81,56],data3:[65,59,80,81,56]}]},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({locationLoader:!0}),fetch("https://coronavirus-tracker-api.herokuapp.com/v2/locations",{method:"GET"}).then((function(e){return e.json()})).then((function(t){e.setState({data:t,totalPages:e.chunkArray(t.locations,9).length,locationLoader:!1})})).catch((function(t){e.setState({locationLoader:!1})})),fetch("https://thevirustracker.com/free-api?global=stats",{method:"GET"}).then((function(e){return e.json()})).then((function(t){e.setState({globalData:t.results[0],locationLoader:!1})})).catch((function(t){e.setState({locationLoader:!1})})),this.renderCards(this.chunkArray(Object.keys(W),9)[this.state.currentCardPage])}},{key:"renderCards",value:function(e){var t=this;this.setState({isChart:0,cards:[]}),e.map((function(e){fetch("https://thevirustracker.com/free-api?countryTotal=".concat(e),{method:"GET"}).then((function(e){return e.json()})).then((function(e){t.setState({locationLoader:!1,cards:t.state.cards.concat(e)})})).catch((function(e){t.setState({locationLoader:!1})}))}))}},{key:"renderCharts",value:function(e){var t=this;this.setState({isChart:1}),e.map((function(e){fetch("https://thevirustracker.com/free-api?countryTimeline=".concat(e),{method:"GET"}).then((function(e){return e.json()})).then((function(e){t.setState((function(t){return{timelines:t.timelines.concat(e),locationLoader:!1}}))})).catch((function(e){t.setState({locationLoader:!1})}))}))}},{key:"render",value:function(){var e=this,t={control:function(e){return Object(T.a)({},e,{backgroundColor:"white"})},option:function(e,t){t.data;var a=t.isDisabled,n=t.isFocused,i=t.isSelected;return Object(T.a)({},e,{backgroundColor:a?null:i||n?"#f6565b":null,color:a?"#ccc":i?"white":"black",cursor:a?"not-allowed":"default",":active":Object(T.a)({},e[":active"],{backgroundColor:!a&&(i?"#f6565b":"white")})})}},a=Object.keys(W).map((function(e){return{value:e,label:W[e]}}));return i.a.createElement(m,null,i.a.createElement("div",{className:"App",style:{background:"#172852",color:"white",height:"100vh",overflowY:"scroll"}},i.a.createElement("div",{className:"container"},i.a.createElement("div",null,i.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",fontSize:40,fontWeight:"bold",marginTop:30,paddingBottom:30,borderBottom:"2px solid white"}},"Covid-19 Global Dashboard",i.a.createElement("img",{onClick:function(){return window.open("https://github.com/miteshtagadiya/Covid-19-Global-Dashboard","_blank")},src:E.a,alt:"github",style:{height:50,width:50,cursor:"pointer"}}))),i.a.createElement("div",{style:{paddingTop:15}},i.a.createElement("img",{onClick:function(){return e.props.history.push("/india")},src:k.a,alt:"India",style:{height:50,width:70,cursor:"pointer"}}),i.a.createElement("span",{style:{fontWeight:"bold"}},"Switch"),i.a.createElement("img",{onClick:function(){return e.props.history.push("/")},src:w.a,alt:"World",style:{marginLeft:15,height:50,width:50,cursor:"pointer"}})),i.a.createElement("div",{style:{minHeight:"90vh"}},i.a.createElement("div",{className:"row",style:{padding:"30px 0px"}},i.a.createElement("div",{className:"col-sm-3",style:{padding:15}},i.a.createElement("div",{style:{padding:20,fontWeight:"bold",minHeight:156,background:"linear-gradient(to right, #ee9ca7, #ffdde1)",color:"#530803",borderRadius:10}},i.a.createElement("div",{style:{fontSize:35}},0!==this.state.globalData.length?this.state.globalData.total_cases:0),i.a.createElement("div",{style:{fontSize:18,marginBottom:10}},"[+"," ",0!==this.state.globalData.length?this.state.globalData.total_new_cases_today:0,"]"),i.a.createElement("div",{style:{fontSize:18}},"Confirmed"))),i.a.createElement("div",{className:"col-sm-3",style:{padding:15}},i.a.createElement("div",{style:{padding:20,minHeight:156,fontWeight:"bold",background:"linear-gradient(to right, #ee9ca7, #ffdde1)",color:"#530803",borderRadius:10}},i.a.createElement("div",{style:{fontSize:35,marginBottom:37}},0!==this.state.globalData.length?this.state.globalData.total_active_cases:0),i.a.createElement("div",{style:{fontSize:18}},"Active"))),i.a.createElement("div",{className:"col-sm-3",style:{padding:15}},i.a.createElement("div",{style:{padding:20,fontWeight:"bold",minHeight:156,background:"linear-gradient(to right, #ee9ca7, #ffdde1)",color:"#530803",borderRadius:10}},i.a.createElement("div",{style:{fontSize:35}},0!==this.state.globalData.length?this.state.globalData.total_deaths:0),i.a.createElement("div",{style:{fontSize:18,marginBottom:10}},"[+"," ",0!==this.state.globalData.length?this.state.globalData.total_new_deaths_today:0,"]"),i.a.createElement("div",{style:{fontSize:18}},"Deaths"))),i.a.createElement("div",{className:"col-sm-3",style:{padding:15}},i.a.createElement("div",{style:{padding:20,minHeight:156,fontWeight:"bold",background:"linear-gradient(to right, #ee9ca7, #ffdde1)",color:"#530803",borderRadius:10}},i.a.createElement("div",{style:{fontSize:35,marginBottom:37}},0!==this.state.globalData.length?this.state.globalData.total_recovered:0),i.a.createElement("div",{style:{fontSize:18}},"Recovered")))),i.a.createElement("div",null,i.a.createElement(D.a,{onChange:function(t){e.setState({timelines:[],cards:[],selectedCountry:!0}),0===e.state.isChart?e.renderCards([t.value.toUpperCase()]):e.renderCharts([t.value.toUpperCase()])},styles:t,options:a})),i.a.createElement("div",{style:{textAlign:"right",padding:"15px 0px",marginTop:15}},i.a.createElement("span",{onClick:function(){return e.setState({isChart:1,selectedCountry:!1})},style:1===this.state.isChart?{background:"#f6565b",fontWeight:"bold",cursor:"pointer",color:"white",padding:"10px 30px",borderRadius:"20px 0px 0px 20px"}:{background:"white",fontWeight:"bold",cursor:"pointer",color:"black",padding:"10px 30px",borderRadius:"20px 0px 0px 20px"}},"Chart"),i.a.createElement("span",{onClick:function(){return e.setState({isChart:0,selectedCountry:!1})},style:0===this.state.isChart?{background:"#f6565b",fontWeight:"bold",cursor:"pointer",color:"white",padding:"10px 30px",borderRadius:"0px 20px 20px 0px"}:{background:"white",fontWeight:"bold",cursor:"pointer",color:"black",padding:"10px 30px",borderRadius:"0px 20px 20px 0px"}},"Card")),0===this.state.isChart?!0===this.state.locationLoader?i.a.createElement("div",null,i.a.createElement("img",{src:_.a,alt:"Loader"})):i.a.createElement("div",{className:"row"},0!==this.state.cards.length?this.state.cards.map((function(e,t){return i.a.createElement("div",{key:t,className:"col-sm-4",style:{padding:15}},i.a.createElement("div",{style:{textAlign:"center",borderRadius:10,background:"white",color:"black"}},i.a.createElement("label",{style:{borderTopLeftRadius:10,borderTopRightRadius:10,color:"white",width:"100%",fontSize:18,fontWeight:"bold",padding:10,background:"#f6565b"}},e.countrydata[0].info.title),i.a.createElement("br",null),i.a.createElement("div",{className:"row justify-content-center"},i.a.createElement("div",{style:{padding:20,fontWeight:"bold"}},i.a.createElement("div",null,e.countrydata[0].total_cases,0===e.countrydata[0].total_new_cases_today?null:i.a.createElement("span",{style:{fontSize:12,color:"#e43339"}},"  ","[+",e.countrydata[0].total_new_cases_today,"]")),i.a.createElement("div",null,"Confirmed")),i.a.createElement("div",{style:{padding:20,fontWeight:"bold"}},i.a.createElement("div",null,e.countrydata[0].total_active_cases),i.a.createElement("div",null,"Active")),i.a.createElement("div",{style:{padding:20,fontWeight:"bold"}},i.a.createElement("div",null,e.countrydata[0].total_deaths,0===e.countrydata[0].total_new_deaths_today?null:i.a.createElement("span",{style:{fontSize:12,color:"#535c68"}},"  ","[+",e.countrydata[0].total_new_deaths_today,"]")),i.a.createElement("div",null,"Deaths")),i.a.createElement("div",{style:{padding:20,fontWeight:"bold"}},i.a.createElement("div",null,e.countrydata[0].total_recovered),i.a.createElement("div",null,"Recovered")),i.a.createElement("div",{style:{padding:20,fontWeight:"bold"}},i.a.createElement("div",null,e.countrydata[0].total_serious_cases),i.a.createElement("div",null,"Serious")))))})):null,i.a.createElement("div",{className:"row",style:{width:"100%",padding:30}},i.a.createElement(O,{totalRecords:Object.keys(W).length,pageLimit:9,pageNeighbours:1,onPageChanged:function(t){return e.onCardPageChanged(t)}}))):i.a.createElement("div",{className:"row"},!0===this.state.locationLoader?i.a.createElement("div",{style:{width:"100%"}},i.a.createElement("img",{src:_.a,alt:"Loader"})):0!==this.state.timelines.length?this.state.timelines.map((function(e,t){console.log(e);var a=Object.keys(e.timelineitems[0]).filter((function(e){return"stat"!==e})).map((function(t,a){var n;return n={name:t,Confirmed:e.timelineitems[0][t].total_cases,Deaths:e.timelineitems[0][t].total_deaths,Recovered:e.timelineitems[0][t].total_recoveries},Object(g.a)(n,"New Conf.",e.timelineitems[0][t].new_daily_cases),Object(g.a)(n,"New Deaths",e.timelineitems[0][t].new_daily_deaths),n}));return i.a.createElement("div",{key:t,className:"col-sm-4",style:{padding:15}},i.a.createElement("div",{style:{background:"white",borderRadius:10}},i.a.createElement("label",{style:{borderTopLeftRadius:10,borderTopRightRadius:10,color:"white",width:"100%",fontSize:18,fontWeight:"bold",padding:10,background:"#f6565b"}},e.countrytimelinedata[0].info.title),i.a.createElement("br",null),i.a.createElement("div",{className:"row justify-content-center"},i.a.createElement("div",{style:{padding:20,fontWeight:"bold",color:"#92063e"}},i.a.createElement("div",null,Object.values(e.timelineitems[0])[Object.values(e.timelineitems[0]).length-2].total_cases,0===Object.values(e.timelineitems[0])[Object.values(e.timelineitems[0]).length-2].new_daily_deaths?null:i.a.createElement("span",{style:{fontSize:13}},"  ","[+",Object.values(e.timelineitems[0])[Object.values(e.timelineitems[0]).length-2].new_daily_cases,"]")),i.a.createElement("div",null,"Confirmed")),i.a.createElement("div",{style:{padding:20,fontWeight:"bold",color:"black"}},i.a.createElement("div",null,Object.values(e.timelineitems[0])[Object.values(e.timelineitems[0]).length-2].total_deaths,0===Object.values(e.timelineitems[0])[Object.values(e.timelineitems[0]).length-2].new_daily_deaths?null:i.a.createElement("span",{style:{fontSize:13}},"  ","[+",Object.values(e.timelineitems[0])[Object.values(e.timelineitems[0]).length-2].new_daily_deaths,"]")),i.a.createElement("div",null,"Deaths")),i.a.createElement("div",{style:{padding:20,fontWeight:"bold",color:"#2F847C"}},i.a.createElement("div",null,Object.values(e.timelineitems[0])[Object.values(e.timelineitems[0]).length-2].total_recoveries),i.a.createElement("div",null,"Recovered"))),i.a.createElement(v,{labels:["Confirmed","Recovered","Deaths","New Conf.","New Deaths"],colors:["#e43339","#006266","#535c68","#192a56","#192a56"],data:a})))})):null,i.a.createElement("br",null),this.state.selectedCountry?null:i.a.createElement("div",{className:"row",style:{width:"100%",padding:30}},i.a.createElement(O,{totalRecords:Object.keys(W).length,pageLimit:9,pageNeighbours:1,onPageChanged:this.onPageChanged})))),i.a.createElement("div",{style:{padding:15}},"Designed and Developed by","  ",i.a.createElement("a",{style:{color:"#f6565b",fontWeight:"bold",textDecoration:"none"},href:"https://miteshtagadiya.js.org",rel:"noopener noreferrer",target:"_blank"},"Mitesh Tagadiya")))))}}]),a}(n.Component),M=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(i.a.Fragment,null,i.a.createElement(h.c,null,i.a.createElement(h.a,{path:"/india",component:j}),i.a.createElement(h.a,{path:"/",component:A}))))}}]),a}(n.Component),z=(Object(h.f)(M),i.a.createElement(o.a,null,i.a.createElement(m,null,i.a.createElement(M,null))));l.a.render(z,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},44:function(e,t,a){e.exports=a.p+"static/media/virus.2d7d3b99.gif"},66:function(e,t,a){e.exports=a.p+"static/media/github1.0ba2aa20.png"},67:function(e,t,a){e.exports=a.p+"static/media/india.b9bb7cd7.png"},68:function(e,t,a){e.exports=a.p+"static/media/world.5a35664b.png"}},[[193,1,2]]]);
//# sourceMappingURL=main.5cd8a920.chunk.js.map