webpackJsonp([41],{eAZP:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("3cXf"),l=i.n(a),n=i("ZLEe"),s=i.n(n),o=i("vLgD");var r={getMineCount:function(e,t){var i="/assets/mine/stat";return"2"===t&&(i="/assets/owner/stat"),Object(o.a)({url:i,method:"get",params:e})},getAssetDetial:function(e){return Object(o.a)({url:"/assets/owner/detail",method:"get",params:e})}},c=(i("E4LH"),i("YgaF")),d=i("U6op"),u=(i("4T3X"),{data:function(){return{list:{query:{nameMine:void 0,nameAssetsOwner:void 0,versionTypeAsset:void 0},data:[],loading:!1},pageNo:1,radio7:"1",totalCount:0,pageSize:10,dialog:{row:{},loading:!1,visible:!1,totalCount:0,pageNo:1,pageSize:10,title:{c:"新增客户信息",u:"资产明细",v:"客户详情信息"},btn:{c:"新增",u:"关闭",v:"关闭"},status:["c","u","v"],data:[]},dict:{mines:{list:[],obj:{}},mills:{list:[],obj:{}},idAssetsOwner:{list:[],obj:{}}}}},created:function(){this.fetchData(),this.initDict()},watch:{radio7:function(e,t){var i=this;s()(this.list.query).forEach(function(e){i.list.query[e]=void 0}),this.pageSize=10,this.fetchData()}},methods:{fetchData:function(){this.pageNo=1,this.search()},initDict:function(){var e=this;c.a.getMineList().then(function(e){this.dict.mines=e}.bind(this)),c.a.getMachineList().then(function(e){this.dict.mills=e}.bind(this));var t={pageNo:0,pageSize:0};d.a.findAll(t).then(function(t){var i=t.result?t.result.recordList:[];e.custlist=i;var a={};i.length>0&&i.forEach(function(e){e.name=e.nameShort,a[e.id]=e.nameShort});var l={};l.list=i||[],l.obj=a,e.dict.idAssetsOwner=l})},handleSizeChange:function(e){this.pageSize=e,this.fetchData()},handleSizeChangeDialog:function(e){this.dialog.pageSize=e,this.detail()},showDialog:function(e,t){this.dialog.data=[],this.dialog.row=t,this.dialog.status=e,this.dialog.visible=!0,"c"!==e&&this.detail()},routerBack:function(){this.$router.go(-1)},detail:function(e){var t=this;this.dialog.loading=!0;var i={pageNo:this.dialog.pageNo,pageSize:this.dialog.pageSize,nameAssetsOwner:this.dialog.row.nameAssetsOwner,versionTypeAsset:this.dialog.row.versionTypeAsset};r.getAssetDetial(i).then(function(e){t.dialog.data=e.result,t.dialog.data=e.result.recordList,t.dialog.totalCount=e.result.totalRecord,t.dialog.loading=!1}).catch(function(e){t.dialog.loading=!1})},cancel:function(){this.dialog.visible=!1},currentChange:function(e){this.pageNo=e,this.search()},currentDialogChange:function(e){this.dialog.pageNo=e,this.detail()},search:function(){var e=this;this.list.loading=!0;var t=JSON.parse(l()(this.list.query));t.pageNo=this.pageNo,t.pageSize=this.pageSize,t.nameMine=this.dict.mines.obj[this.list.query.nameMine],t.nameAssetsOwner=this.dict.idAssetsOwner.obj[this.list.query.nameAssetsOwner],t.versionTypeAsset=this.dict.mills.obj[this.list.query.versionTypeAsset],s()(t).forEach(function(e){var i=t[e];void 0!==i&&null!==i&&""!==i||(t[e]=void 0)}),r.getMineCount(t,this.radio7).then(function(t){e.list.data=t.result.recordList,e.totalCount=t.result.totalRecord,e.list.loading=!1}).catch(function(t){e.list.loading=!1})}}}),g={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-container calendar-list-container"},[i("div",{staticClass:"filter-container"},[i("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.list.query}},[i("el-form-item",{attrs:{label:"统计方式"}},[i("el-radio",{attrs:{label:"1",border:""},model:{value:e.radio7,callback:function(t){e.radio7=t},expression:"radio7"}},[e._v("按矿场统计")]),e._v(" "),i("el-radio",{attrs:{label:"2",border:""},model:{value:e.radio7,callback:function(t){e.radio7=t},expression:"radio7"}},[e._v("按资产所有者统计")])],1),e._v(" "),i("el-form-item",[i("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:function(t){e.routerBack()}}},[e._v("返回")])],1)],1),e._v(" "),i("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.list.query}},["1"===e.radio7?i("el-form-item",{attrs:{label:"矿场中文名"}},[i("el-select",{attrs:{clearable:"",placeholder:"全部"},model:{value:e.list.query.nameMine,callback:function(t){e.$set(e.list.query,"nameMine",t)},expression:"list.query.nameMine"}},e._l(e.dict.mines.list,function(e,t){return i("el-option",{key:t,attrs:{label:e.name,value:e.id}})}))],1):e._e(),e._v(" "),"2"===e.radio7?i("el-form-item",{attrs:{label:"资产所有者"}},[i("el-select",{attrs:{clearable:"",placeholder:"全部"},model:{value:e.list.query.nameAssetsOwner,callback:function(t){e.$set(e.list.query,"nameAssetsOwner",t)},expression:"list.query.nameAssetsOwner"}},e._l(e.dict.idAssetsOwner.list,function(e,t){return i("el-option",{key:t,attrs:{label:e.name,value:e.id}})}))],1):e._e(),e._v(" "),i("el-form-item",{attrs:{label:"矿机型号"}},[i("el-select",{attrs:{clearable:"",placeholder:"全部"},model:{value:e.list.query.versionTypeAsset,callback:function(t){e.$set(e.list.query,"versionTypeAsset",t)},expression:"list.query.versionTypeAsset"}},e._l(e.dict.mills.list,function(e,t){return i("el-option",{key:t,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),i("el-form-item",[i("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.fetchData}},[e._v("查询")])],1)],1)],1),e._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.list.loading,expression:"list.loading",modifiers:{body:!0}}],attrs:{stripe:"",data:e.list.data,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[i("el-table-column",{attrs:{label:"1"===e.radio7?"矿场中文名":"资产所有者",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s("1"===e.radio7?t.row.nameMine:t.row.nameAssetsOwner))]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"型号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.versionTypeAsset))]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"数量",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.count))]}}])}),e._v(" "),"2"===e.radio7?i("el-table-column",{staticStyle:{"white-space":"nowrap"},attrs:{align:"center",label:"操作","class-name":"mid-padding fixed-width",width:"230"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(i){e.showDialog("u",t.row)}}},[e._v("明细")])]}}])}):e._e()],1),e._v(" "),e.list.data.length>0?i("div",{staticClass:"pagination-container",staticStyle:{"margin-top":"20px","text-align":"left"}},[i("el-pagination",{attrs:{background:"",layout:"total, sizes, prev, pager, next, jumper","page-sizes":[5,10,20,30,40,50,60,70,80,90,100],"current-page":e.pageNo,total:e.totalCount,"page-size":e.pageSize},on:{"size-change":e.handleSizeChange,"current-change":e.currentChange}})],1):e._e(),e._v(" "),i("el-dialog",{attrs:{"close-on-click-modal":!1,"close-on-press-escape":!1,title:e.dialog.title[e.dialog.status],visible:e.dialog.visible,width:"800px"},on:{"update:visible":function(t){e.$set(e.dialog,"visible",t)}}},[i("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.dialog.loading,expression:"dialog.loading"}],attrs:{"label-width":"0px"}},[i("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.dialog.loading,expression:"dialog.loading",modifiers:{body:!0}}],attrs:{stripe:"",data:e.dialog.data,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[i("el-table-column",{attrs:{label:"矿场中文名",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.nameMine))]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"型号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.versionTypeAsset))]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"数量",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.count))]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"资产所有者",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.nameAssetsOwner))]}}])})],1),e._v(" "),i("el-row",[e.dialog.data.length>0?i("div",{staticClass:"pagination-container",staticStyle:{"margin-top":"20px","text-align":"left"}},[i("el-pagination",{attrs:{background:"",layout:"total, sizes, prev, pager, next, jumper","page-sizes":[5,10,20,30,40,50,60,70,80,90,100],"current-page":e.dialog.pageNo,total:e.dialog.totalCount,"page-size":e.dialog.pageSize},on:{"size-change":e.handleSizeChangeDialog,"current-change":e.currentDialogChange}})],1):e._e()]),e._v(" "),i("el-row",[i("div",{staticClass:"el-col el-col-12"},[i("el-form-item")],1)])],1)],1)],1)},staticRenderFns:[]},h=i("/Xao")(u,g,!1,null,null,null);t.default=h.exports}});