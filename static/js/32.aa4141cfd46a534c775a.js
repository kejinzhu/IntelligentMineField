webpackJsonp([32],{"/xXo":function(e,t,a){"use strict";var i=a("vLgD");t.a={getList:function(e){return Object(i.a)({url:"/repair/sends",method:"get",params:e})},add:function(e){return Object(i.a)({url:"/repair/sends",method:"post",data:e})},get:function(e){return Object(i.a)({url:"/repair/sends/"+e,method:"get"})},patch:function(e){return Object(i.a)({url:"/repair/sends",method:"put",data:e})}}},pXq7:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("ZLEe"),l=a.n(i),s=a("a3Yh"),d=a.n(s),n=a("vLgD");var o,r={getList:function(e){return Object(n.a)({url:"/repair/receives",method:"get",params:e})},add:function(e){return Object(n.a)({url:"/repair/receives",method:"post",data:e})},get:function(e){return Object(n.a)({url:"/repair/receives/"+e,method:"get"})},patch:function(e){return Object(n.a)({url:"/repair/receives/"+e.id,method:"put",data:e})}},c=a("/xXo"),m=a("YgaF"),u=a("4T3X"),p=a("Q0Ca"),f=(o={dateReceive:"收货日期",dateSend:"发货日期"},d()(o,"dateReceive","收货日期"),d()(o,"noLogistics","物流单号"),d()(o,"idTypeAsset","资产类型"),d()(o,"versionTypeAsset","型号"),d()(o,"numExpect","应收数量"),d()(o,"numFact","实收数量"),d()(o,"chargeLogistics","物流费"),d()(o,"nameSender","发货人"),d()(o,"mobileSender","发货人电话"),d()(o,"idMine","收货矿场"),d()(o,"nameReceiver","收货人"),d()(o,"mobileRecevier","收货人号码"),d()(o,"addressMine","收货地址"),o),v={data:function(){return{addVisible:!1,addType:1,list:[],noLogisticsList:[],noBatchList:[],listLoading:!0,addLoading:!1,totalCount:0,formInline:{pageNo:1,pageSize:10,dateSend:"",noLogistics:"",typeAsset:""},addForm:{id:"",timeCreate:"",status:"",idCreator:"",nameCreator:"",dateReceive:"",noLogistics:"",noLogisticsReceive:"",dateSend:"",numExpect:"",numFact:"",chargeLogistics:"",nameLogisticsCompany:"",nameFactory:"",nameSender:"",mobileSender:"",nameDriver:"",mobileDriver:"",noCar:"",idMine:"",addressMine:"",nameReceiver:"",mobileRecevier:"",remark:"",idTypeAsset:"",typeAsset:"",versionTypeAsset:"",nameUpdater:"",timeUpdate:""},dicts:{typeAsset:{list:[],obj:{}},typeNameFactory:{list:[],obj:{}}},mineList:{list:[],obj:{}},millList:{list:[],obj:{}},purchList:{list:[],obj:{}}}},filters:{},created:function(){this.getDict(),this.getMine(),this.getMill(),this.fetchData()},mounted:function(){},computed:{addTitle:function(){return 1===this.addType?"新增返厂维修收货统计信息":2===this.addType?"修改返厂维修收货统计信息":3===this.addType?"返厂维修收货统计详细信息":void 0},btnName:function(){return 2===this.addType?"修改":"新增"}},methods:{getNameMine:function(e,t){for(var a=0;a<e.length;a++)if(e[a].id==t)return e[a].name},buyDateChange:function(e){console.log(e),this.getPurch(e)},getPurch:function(e){m.a.getPurch(e).then(function(e){this.purchList=e}.bind(this))},getMine:function(){m.a.getMineList().then(function(e){this.mineList=e}.bind(this))},getMill:function(){m.a.getMachineList().then(function(e){this.millList=e}.bind(this))},getDict:function(){Object(u.a)("dict_21").then(function(e){this.dicts.typeNameFactory=e}.bind(this)),Object(u.a)("dict_14").then(function(e){this.dicts.typeAsset=e}.bind(this))},mineChange:function(){this.addForm.nameMine=this.mineList.obj[this.addForm.idMine]},typeChange:function(){this.addForm.versionTypeAsset="",this.addForm.typeAsset=this.dicts.typeAsset.obj[this.addForm.idTypeAsset]},dateSendChange:function(){this.fetchdateSendData()},noLogisticsChange:function(){this.fetchnoBatchList()},fetchdateSendData:function(){var e=this;this.addForm.noLogistics="";var t={dateSend:Object(p.parseTime)(this.addForm.dateSend)};c.a.getList(t).then(function(t){e.noLogisticsList=t.result.recordList})},fetchnoBatchList:function(){var e=this;this.addForm.noBatch="";var t={noLogistics:this.addForm.noLogistics};c.a.getList(t).then(function(t){e.addForm.numExpect=t.result.recordList[0].numAssets||""})},initSearch:function(){var e=this,t={};return l()(this.formInline).forEach(function(a){var i=e.formInline[a];void 0!==i&&null!==i&&""!==i&&(t[a]=i)}),t},searchList:function(){this.formInline.pageNo=1,this.fetchData()},fetchData:function(){var e=this,t=this.initSearch();this.listLoading=!0,r.getList(t).then(function(t){e.list=t.result.recordList,e.totalCount=t.result.totalRecord,e.listLoading=!1})},handleSizeChange:function(e){this.formInline.pageSize=e,this.formInline.pageNo=1,this.fetchData()},handleCurrentChange:function(e){this.formInline.pageNo=e,this.fetchData()},clickBtn:function(e,t){var a=this;this.addType=e,1===e?(a.addLoading=!1,l()(a.addForm).forEach(function(e){a.addForm[e]=""})):this.getInfo(t),this.addVisible=!0},getInfo:function(e){var t=this,a=this;this.addLoading=!0,r.get(e).then(function(e){var i;i=e.result,l()(a.addForm).forEach(function(e){a.addForm[e]=i[e]}),t.addLoading=!1})},valid:function(){for(var e in f){var t=this.addForm[e];if(void 0===t||null===t||""===t.toString().trim()){var a=f[e]+"不能为空！";return this.$message.error(a),!1}}return!0},addSubmit:function(){if(this.valid()){var e=this,t="";this.addLoading=!0,1===this.addType?(t="添加成功！",r.add(this.addForm).then(function(e){a()})):2===this.addType&&(t="修改成功！",r.patch(this.addForm).then(function(e){a()},function(t){e.addLoading=!1}))}function a(){e.$message({message:t,type:"success"}),e.addVisible=!1,e.addLoading=!1,e.fetchData()}},addCancel:function(){this.addVisible=!1}}},b={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container calendar-list-container"},[a("div",{staticClass:"filter-container"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formInline}},[a("el-form-item",{attrs:{label:"收货日期"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date","value-format":"yyyy-MM-dd HH:mm:ss",placeholder:"选择日期"},model:{value:e.formInline.dateReceive,callback:function(t){e.$set(e.formInline,"dateReceive",t)},expression:"formInline.dateReceive"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"物流单号"}},[a("el-input",{model:{value:e.formInline.noLogistics,callback:function(t){e.$set(e.formInline,"noLogistics",t)},expression:"formInline.noLogistics"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"资产类型"}},[a("el-select",{attrs:{clearable:"",placeholder:"全部"},model:{value:e.formInline.typeAsset,callback:function(t){e.$set(e.formInline,"typeAsset",t)},expression:"formInline.typeAsset"}},e._l(e.dicts.typeAsset.list,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.name}})}))],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.searchList}},[e._v("查询")]),e._v(" "),e.btn.add?a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:function(t){e.clickBtn(1)}}},[e._v("新增")]):e._e()],1)],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.listLoading,expression:"listLoading",modifiers:{body:!0}}],attrs:{data:e.list,"element-loading-text":"Loading",border:"",stripe:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{label:"矿场名称",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e.getNameMine(e.mineList.list,t.row.idMine)))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"收货日期",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e._f("parseTime")(t.row.dateReceive,"{y}-{m}-{d}")))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"物流单号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.noLogistics))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"资产类型",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.typeAsset))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"型号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.versionTypeAsset))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"数量",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.numFact))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"物流公司",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.nameLogisticsCompany))]}}])}),e._v(" "),a("el-table-column",{staticStyle:{"white-space":"nowrap"},attrs:{align:"center",label:"操作","class-name":"mid-padding fixed-width",width:"230"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.btn.edit?a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){e.clickBtn(2,t.row.id)}}},[e._v("修改")]):e._e(),e._v(" "),e.btn.info?a("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(a){e.clickBtn(3,t.row.id)}}},[e._v("查看")]):e._e()]}}])})],1),e._v(" "),a("el-pagination",{attrs:{background:"",layout:"total, sizes, prev, pager, next, jumper","page-sizes":[5,10,20,30,40,50,60,70,80,90,100],"current-page":e.formInline.pageNo,total:e.totalCount,"page-size":e.formInline.pageSize},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}),e._v(" "),a("el-dialog",{attrs:{"close-on-click-modal":!1,"close-on-press-escape":!1,title:e.addTitle,visible:e.addVisible,width:"960px"},on:{"update:visible":function(t){e.addVisible=t}}},[a("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.addLoading,expression:"addLoading"}],ref:"form",attrs:{model:e.addForm,"label-width":"120px"}},[a("el-row",[a("div",{staticClass:"el-col el-col-12"},[a("el-form-item",{attrs:{label:"收货日期",required:""}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期",disabled:3===e.addType},model:{value:e.addForm.dateReceive,callback:function(t){e.$set(e.addForm,"dateReceive",t)},expression:"addForm.dateReceive"}})],1)],1),e._v(" "),a("div",{staticClass:"el-col el-col-12"},[a("el-form-item",{attrs:{label:"发货日期",required:""}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期",disabled:3===e.addType},on:{change:e.dateSendChange},model:{value:e.addForm.dateSend,callback:function(t){e.$set(e.addForm,"dateSend",t)},expression:"addForm.dateSend"}})],1)],1)]),e._v(" "),a("el-row",[a("div",{staticClass:"el-col el-col-12"},[a("el-form-item",{attrs:{label:"原发货物流单号",required:""}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择",disabled:3===e.addType},on:{change:e.noLogisticsChange},model:{value:e.addForm.noLogistics,callback:function(t){e.$set(e.addForm,"noLogistics",t)},expression:"addForm.noLogistics"}},e._l(e.noLogisticsList,function(e,t){return a("el-option",{key:t,attrs:{label:e.noLogistics,value:e.noLogistics}})}))],1)],1),e._v(" "),a("div",{staticClass:"el-col el-col-12"},[a("el-form-item",{attrs:{label:"收货物流单号",required:""}},[a("el-input",{attrs:{type:"text",disabled:3===e.addType},model:{value:e.addForm.noLogisticsReceive,callback:function(t){e.$set(e.addForm,"noLogisticsReceive",t)},expression:"addForm.noLogisticsReceive"}})],1)],1)]),e._v(" "),a("el-row",[a("div",{staticClass:"el-col el-col-12"},[a("el-form-item",{attrs:{label:"资产类型",required:""}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择",disabled:3===e.addType},on:{change:e.typeChange},model:{value:e.addForm.idTypeAsset,callback:function(t){e.$set(e.addForm,"idTypeAsset",t)},expression:"addForm.idTypeAsset"}},e._l(e.dicts.typeAsset.list,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:parseInt(e.id)}})}))],1)],1),e._v(" "),a("div",{staticClass:"el-col el-col-12"},[a("el-form-item",{attrs:{label:"型号",required:""}},[83==e.addForm.idTypeAsset?a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择",disabled:3===e.addType},model:{value:e.addForm.versionTypeAsset,callback:function(t){e.$set(e.addForm,"versionTypeAsset",t)},expression:"addForm.versionTypeAsset"}},e._l(e.millList.list,function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.name}})})):a("el-input",{attrs:{type:"text",disabled:3===e.addType},model:{value:e.addForm.versionTypeAsset,callback:function(t){e.$set(e.addForm,"versionTypeAsset",t)},expression:"addForm.versionTypeAsset"}})],1)],1)]),e._v(" "),a("el-row",[a("div",{staticClass:"el-col el-col-12"},[a("el-form-item",{attrs:{label:"应收数量",required:""}},[a("el-input",{attrs:{type:"number",disabled:!0},model:{value:e.addForm.numExpect,callback:function(t){e.$set(e.addForm,"numExpect",t)},expression:"addForm.numExpect"}})],1)],1),e._v(" "),a("div",{staticClass:"el-col el-col-12"},[a("el-form-item",{attrs:{label:"实收数量",required:""}},[a("el-input",{attrs:{type:"number",disabled:3===e.addType},model:{value:e.addForm.numFact,callback:function(t){e.$set(e.addForm,"numFact",t)},expression:"addForm.numFact"}})],1)],1)]),e._v(" "),a("el-row",[a("div",{staticClass:"el-col el-col-12"},[a("el-form-item",{attrs:{label:"厂家名称"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择",disabled:3===e.addType},model:{value:e.addForm.nameFactory,callback:function(t){e.$set(e.addForm,"nameFactory",t)},expression:"addForm.nameFactory"}},e._l(e.dicts.typeNameFactory.list,function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.name}})}))],1)],1),e._v(" "),a("div",{staticClass:"el-col el-col-12"})]),e._v(" "),a("el-row",[a("div",{staticClass:"el-col el-col-12"},[a("el-form-item",{attrs:{label:"发货人",required:""}},[a("el-input",{attrs:{disabled:3===e.addType},model:{value:e.addForm.nameSender,callback:function(t){e.$set(e.addForm,"nameSender",t)},expression:"addForm.nameSender"}})],1)],1),e._v(" "),a("div",{staticClass:"el-col el-col-12"},[a("el-form-item",{attrs:{label:"电话",required:""}},[a("el-input",{attrs:{disabled:3===e.addType},model:{value:e.addForm.mobileSender,callback:function(t){e.$set(e.addForm,"mobileSender",t)},expression:"addForm.mobileSender"}})],1)],1)]),e._v(" "),a("el-row",[a("div",{staticClass:"el-col el-col-12"},[a("el-form-item",{attrs:{label:"司机"}},[a("el-input",{attrs:{disabled:3===e.addType},model:{value:e.addForm.nameDriver,callback:function(t){e.$set(e.addForm,"nameDriver",t)},expression:"addForm.nameDriver"}})],1)],1),e._v(" "),a("div",{staticClass:"el-col el-col-12"},[a("el-form-item",{attrs:{label:"电话"}},[a("el-input",{attrs:{disabled:3===e.addType},model:{value:e.addForm.mobileDriver,callback:function(t){e.$set(e.addForm,"mobileDriver",t)},expression:"addForm.mobileDriver"}})],1)],1)]),e._v(" "),a("el-row",[a("div",{staticClass:"el-col el-col-12"},[a("el-form-item",{attrs:{label:"物流费用",required:""}},[a("el-input",{attrs:{disabled:3===e.addType},model:{value:e.addForm.chargeLogistics,callback:function(t){e.$set(e.addForm,"chargeLogistics",t)},expression:"addForm.chargeLogistics"}})],1)],1),e._v(" "),a("div",{staticClass:"el-col el-col-12"},[a("el-form-item",{attrs:{label:"车牌号"}},[a("el-input",{attrs:{disabled:3===e.addType},model:{value:e.addForm.noCar,callback:function(t){e.$set(e.addForm,"noCar",t)},expression:"addForm.noCar"}})],1)],1)]),e._v(" "),a("el-row",[a("el-form-item",{attrs:{label:"备注"}},[a("el-input",{attrs:{type:"textarea",disabled:3===e.addType},model:{value:e.addForm.remark,callback:function(t){e.$set(e.addForm,"remark",t)},expression:"addForm.remark"}})],1)],1),e._v(" "),a("el-row",[a("div",{staticClass:"el-col el-col-12"},[a("el-form-item",{attrs:{label:"矿场",required:""}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择",disabled:3===e.addType},on:{change:e.mineChange},model:{value:e.addForm.idMine,callback:function(t){e.$set(e.addForm,"idMine",t)},expression:"addForm.idMine"}},e._l(e.mineList.list,function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.id}})}))],1)],1)]),e._v(" "),a("el-row",[a("div",{staticClass:"el-col el-col-24"},[a("el-form-item",{attrs:{label:"收货地址",required:""}},[a("el-input",{attrs:{disabled:3===e.addType},model:{value:e.addForm.addressMine,callback:function(t){e.$set(e.addForm,"addressMine",t)},expression:"addForm.addressMine"}})],1)],1)]),e._v(" "),a("el-row",[a("div",{staticClass:"el-col el-col-12"},[a("el-form-item",{attrs:{label:"收货人",required:""}},[a("el-input",{attrs:{disabled:3===e.addType},model:{value:e.addForm.nameReceiver,callback:function(t){e.$set(e.addForm,"nameReceiver",t)},expression:"addForm.nameReceiver"}})],1)],1),e._v(" "),a("div",{staticClass:"el-col el-col-12"},[a("el-form-item",{attrs:{label:"电话",required:""}},[a("el-input",{attrs:{disabled:3===e.addType},model:{value:e.addForm.mobileRecevier,callback:function(t){e.$set(e.addForm,"mobileRecevier",t)},expression:"addForm.mobileRecevier"}})],1)],1)]),e._v(" "),1!==e.addType?a("el-row",[a("div",{staticClass:"el-col el-col-12"},[a("el-form-item",{attrs:{label:"创建人"}},[a("el-input",{attrs:{disabled:""},model:{value:e.addForm.nameCreator,callback:function(t){e.$set(e.addForm,"nameCreator",t)},expression:"addForm.nameCreator"}})],1)],1),e._v(" "),a("div",{staticClass:"el-col el-col-12"},[a("el-form-item",{attrs:{label:"创建时间"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"datetime",disabled:""},model:{value:e.addForm.timeCreate,callback:function(t){e.$set(e.addForm,"timeCreate",t)},expression:"addForm.timeCreate"}})],1)],1)]):e._e(),e._v(" "),3===e.addType?a("el-row",[a("div",{staticClass:"el-col el-col-12"},[a("el-form-item",{attrs:{label:"修改人"}},[a("el-input",{attrs:{disabled:""},model:{value:e.addForm.nameUpdater,callback:function(t){e.$set(e.addForm,"nameUpdater",t)},expression:"addForm.nameUpdater"}})],1)],1),e._v(" "),a("div",{staticClass:"el-col el-col-12"},[a("el-form-item",{attrs:{label:"修改时间"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"datetime",disabled:""},model:{value:e.addForm.timeUpdate,callback:function(t){e.$set(e.addForm,"timeUpdate",t)},expression:"addForm.timeUpdate"}})],1)],1)]):e._e(),e._v(" "),a("el-form-item",[3!==e.addType?a("el-button",{attrs:{type:"primary"},on:{click:e.addSubmit}},[e._v(e._s(e.btnName))]):e._e(),e._v(" "),a("el-button",{on:{click:e.addCancel}},[e._v("取消")])],1)],1)],1)],1)},staticRenderFns:[]},h=a("/Xao")(v,b,!1,null,null,null);t.default=h.exports}});