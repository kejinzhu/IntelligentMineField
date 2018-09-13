webpackJsonp([13],{"/xXo":function(e,t,a){"use strict";var i=a("vLgD");t.a={getList:function(e){return Object(i.a)({url:"/repair/sends",method:"get",params:e})},add:function(e){return Object(i.a)({url:"/repair/sends",method:"post",data:e})},get:function(e){return Object(i.a)({url:"/repair/sends/"+e,method:"get"})},patch:function(e){return Object(i.a)({url:"/repair/sends",method:"put",data:e})}}},"1sXT":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("ZLEe"),s=a.n(i),r=a("/xXo"),n=a("YgaF"),l=a("4T3X"),o=(a("Q0Ca"),{dateSend:"发货日期",noLogistics:"物流单号",idTypeAsset:"资产类型",versionTypeAsset:"型号",numAssets:"发货数量",chargeLogistics:"物流费",nameSender:"发货人名称",mobileSender:"发货人电话",nameDriver:"司机名称",mobileDriver:"司机电话",noCar:"车牌号",nameLogisticsCompany:"物流公司",remark:"备注",idMine:"矿场",nameFactory:"厂家",addressFactory:"收货人地址",nameReceiver:"收货人名称",mobileRecevier:"收货人电话"}),d={data:function(){return{addVisible:!1,addType:1,list:[],listLoading:!0,addLoading:!1,totalCount:0,formInline:{pageNo:1,pageSize:10,dateSend:"",noLogistics:"",typeAsset:""},addForm:{id:"",dateSend:"",noLogistics:"",idTypeAsset:"",typeAsset:"",chargeLogistics:"",versionTypeAsset:"",numAssets:"",nameSender:"",mobileSender:"",nameDriver:"",mobileDriver:"",noCar:"",nameLogisticsCompany:"",nameMine:"",idMine:"",nameFactory:"",nameReceiver:"",mobileRecevier:"",addressFactory:"",remark:"",nameUpdater:"",timeUpdate:"",nameCreator:"",timeCreate:""},dicts:{idMachineFactory:{list:[],obj:{}},typeAsset:{list:[],obj:{}}},mineList:{list:[],obj:{}},millList:{list:[],obj:{}},purchList:{list:[],obj:{}}}},filters:{},created:function(){this.getDict(),this.getMill(),this.getMine(),this.fetchData()},mounted:function(){},computed:{addTitle:function(){return 1===this.addType?"新增返厂维修发货统计信息":2===this.addType?"修改返厂维修发货统计信息":3===this.addType?"返厂维修发货统计详细信息":void 0},btnName:function(){return 2===this.addType?"修改":"新增"}},methods:{getMine:function(){n.a.getMineList().then(function(e){this.mineList=e}.bind(this))},getMill:function(){n.a.getMachineList().then(function(e){this.millList=e}.bind(this))},getDict:function(){Object(l.a)("dict_9").then(function(e){this.dicts.idMachineFactory=e}.bind(this)),Object(l.a)("dict_14").then(function(e){this.dicts.typeAsset=e}.bind(this))},typeChange:function(){this.addForm.versionTypeAsset="",this.addForm.typeAsset=this.dicts.typeAsset.obj[this.addForm.idTypeAsset]},mineChange:function(){this.addForm.nameMine=this.mineList.obj[this.addForm.idMine]},initSearch:function(){var e=this,t={};return s()(this.formInline).forEach(function(a){var i=e.formInline[a];void 0!==i&&null!==i&&""!==i&&(t[a]=i)}),t},searchList:function(){this.formInline.pageNo=1,this.fetchData()},fetchData:function(){var e=this,t=this.initSearch();this.listLoading=!0,r.a.getList(t).then(function(t){e.list=t.result.recordList,e.totalCount=t.result.totalRecord,e.listLoading=!1})},handleSizeChange:function(e){this.formInline.pageNo=1,this.formInline.pageSize=e,this.fetchData()},handleCurrentChange:function(e){this.formInline.pageNo=e,this.fetchData()},clickBtn:function(e,t){var a=this;this.addType=e,1===e?(a.addLoading=!1,a.purchList=[],s()(a.addForm).forEach(function(e){a.addForm[e]=""})):this.getInfo(t),this.addVisible=!0},getInfo:function(e){var t=this,a=this;this.addLoading=!0,r.a.get(e).then(function(e){var i;i=e.result,s()(a.addForm).forEach(function(e){a.addForm[e]=i[e]}),t.addLoading=!1})},valid:function(){for(var e in o){var t=this.addForm[e];if("remark"!==e)if("nameDriver"!==e){if("mobileDriver"!==e)if("noCar"!==e){if(""===t.toString().trim()){var a=o[e]+"不能为空！";return this.$message.error(a),!1}if("noLogistics"===e&&t.length>14){var i=o[e]+"长度不能超过14！";return this.$message.error(i),!1}if("numAssets"===e&&t.length>10){var s=o[e]+"长度不能超过10！";return this.$message.error(s),!1}if("chargeLogistics"===e){if(!/^\d{0,8}(?:\.\d{1,2})?$/.test(t)){var r=o[e]+"只能输入八位整数两位小数！";return this.$message.error(r),!1}}if(("mobileSender"===e||"mobileRecevier"===e)&&this.validMobile(t)){var n=o[e]+"格式不正确！";return this.$message.error(n),!1}if("nameSender"===e||"nameLogisticsCompany"===e||"nameReceiver"===e){if(/[^\u4E00-\u9FA5]/g.test(t)){var l=o[e]+"只能输入中文！";return this.$message.error(l),!1}}}else{if(t.length>10){var d=o[e]+"长度不能超过10！";return this.$message.error(d),!1}if(""!==t&&!/^[A-Za-z0-9\u4e00-\u9fa5]+$/gi.test(t)){var c=o[e]+"只能输入中文数字字母！";return this.$message.error(c),!1}}else if(""!==t&&this.validMobile(t)){var m=o[e]+"格式不正确！";return this.$message.error(m),!1}}else{if(/[^\u4E00-\u9FA5]/g.test(t)){var u=o[e]+"只能输入中文！";return this.$message.error(u),!1}if(t.length>10){var p=o[e]+"长度不能超过10！";return this.$message.error(p),!1}}else if(t.length>200){var f=o[e]+"长度不能超过200！";return this.$message.error(f),!1}}return!0},validMobile:function(e){return!/^[1][\d]{10}$/.test(e)},addSubmit:function(){var e=this;if(this.valid()){var t=this,a="";this.addLoading=!0,1===this.addType?(a="添加成功！",r.a.add(this.addForm).then(function(e){i()}).catch(function(t){e.addLoading=!1})):2===this.addType&&(a="修改成功！",r.a.patch(this.addForm).then(function(e){i()}).catch(function(t){e.addLoading=!1}))}function i(){t.$message({message:a,type:"success"}),t.addVisible=!1,t.addLoading=!1,t.fetchData()}},addCancel:function(){this.addVisible=!1}}},c={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container calendar-list-container"},[a("div",{staticClass:"filter-container"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formInline}},[a("el-form-item",{attrs:{label:"发货日期"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date","value-format":"yyyy-MM-dd HH:mm:ss",placeholder:"选择日期"},model:{value:e.formInline.dateSend,callback:function(t){e.$set(e.formInline,"dateSend",t)},expression:"formInline.dateSend"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"物流单号"}},[a("el-input",{attrs:{clearable:""},model:{value:e.formInline.noLogistics,callback:function(t){e.$set(e.formInline,"noLogistics",t)},expression:"formInline.noLogistics"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"资产类型"}},[a("el-select",{attrs:{clearable:"",placeholder:"全部"},model:{value:e.formInline.typeAsset,callback:function(t){e.$set(e.formInline,"typeAsset",t)},expression:"formInline.typeAsset"}},e._l(e.dicts.typeAsset.list,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.name}})}))],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.searchList}},[e._v("查询")]),e._v(" "),e.btn.add?a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:function(t){e.clickBtn(1)}}},[e._v(e._s(e.btn.add))]):e._e()],1)],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.listLoading,expression:"listLoading",modifiers:{body:!0}}],attrs:{data:e.list,"element-loading-text":"Loading",border:"",stripe:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{label:"矿场名称",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.nameMine))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"发货日期",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e._f("parseTime")(t.row.dateSend,"{y}-{m}-{d}")))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"物流单号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.noLogistics))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"资产类型",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e.dicts.typeAsset.obj[t.row.idTypeAsset]))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"型号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.versionTypeAsset))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"数量",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.numAssets))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"物流费(元)",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.chargeLogistics))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"物流公司",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.nameLogisticsCompany))]}}])}),e._v(" "),a("el-table-column",{staticStyle:{"white-space":"nowrap"},attrs:{align:"center",label:"操作","class-name":"mid-padding fixed-width",width:"230"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.btn.edit?a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){e.clickBtn(2,t.row.id)}}},[e._v(e._s(e.btn.edit))]):e._e(),e._v(" "),e.btn.info?a("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(a){e.clickBtn(3,t.row.id)}}},[e._v(e._s(e.btn.info))]):e._e()]}}])})],1),e._v(" "),a("el-pagination",{attrs:{background:"",layout:"total, sizes, prev, pager, next, jumper","page-sizes":[5,10,20,30,40,50,60,70,80,90,100],"current-page":e.formInline.pageNo,total:e.totalCount,"page-size":e.formInline.pageSize},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}),e._v(" "),a("el-dialog",{attrs:{"close-on-click-modal":!1,"close-on-press-escape":!1,title:e.addTitle,visible:e.addVisible,width:"800px"},on:{"update:visible":function(t){e.addVisible=t}}},[a("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.addLoading,expression:"addLoading"}],ref:"form",attrs:{model:e.addForm,"label-width":"100px"}},[a("el-row",[a("div",{staticClass:"el-col el-col-12"},[a("el-form-item",{attrs:{label:"发货日期",required:""}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期",disabled:1!==e.addType},model:{value:e.addForm.dateSend,callback:function(t){e.$set(e.addForm,"dateSend",t)},expression:"addForm.dateSend"}})],1)],1),e._v(" "),a("div",{staticClass:"el-col el-col-12"},[a("el-form-item",{attrs:{label:"物流单号",required:""}},[a("el-input",{attrs:{disabled:1!==e.addType},model:{value:e.addForm.noLogistics,callback:function(t){e.$set(e.addForm,"noLogistics",t)},expression:"addForm.noLogistics"}})],1)],1)]),e._v(" "),a("el-row",[a("div",{staticClass:"el-col el-col-12"},[a("el-form-item",{attrs:{label:"资产类型",required:""}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择",disabled:3===e.addType},on:{change:e.typeChange},model:{value:e.addForm.idTypeAsset,callback:function(t){e.$set(e.addForm,"idTypeAsset",t)},expression:"addForm.idTypeAsset"}},e._l(e.dicts.typeAsset.list,function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:parseInt(e.id)}})}))],1)],1),e._v(" "),a("div",{staticClass:"el-col el-col-12"},[a("el-form-item",{attrs:{label:"型号",required:""}},[83==e.addForm.idTypeAsset?a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择",disabled:3===e.addType},model:{value:e.addForm.versionTypeAsset,callback:function(t){e.$set(e.addForm,"versionTypeAsset",t)},expression:"addForm.versionTypeAsset"}},e._l(e.millList.list,function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.name}})})):a("el-input",{attrs:{type:"text",disabled:3===e.addType},model:{value:e.addForm.versionTypeAsset,callback:function(t){e.$set(e.addForm,"versionTypeAsset",t)},expression:"addForm.versionTypeAsset"}})],1)],1)]),e._v(" "),a("el-row",[a("div",{staticClass:"el-col el-col-12"},[a("el-form-item",{attrs:{label:"数量",required:""}},[a("div",{staticClass:"el-input",class:{"is-disabled":3===e.addType}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.addForm.numAssets,expression:"addForm.numAssets"}],staticClass:"el-input__inner",attrs:{type:"number",disabled:3===e.addType,onKeypress:"if(event.which===8) {return true} else return (/[\\d]/.test(String.fromCharCode(event.which)))"},domProps:{value:e.addForm.numAssets},on:{input:function(t){t.target.composing||e.$set(e.addForm,"numAssets",t.target.value)}}})])])],1),e._v(" "),a("div",{staticClass:"el-col el-col-12"},[a("el-form-item",{attrs:{label:"物流费(元)",required:""}},[a("div",{staticClass:"el-input",class:{"is-disabled":3===e.addType}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.addForm.chargeLogistics,expression:"addForm.chargeLogistics"}],staticClass:"el-input__inner",attrs:{type:"number",disabled:3===e.addType,onKeypress:"if(event.which===8) {return true} else return (/[\\d.]/.test(String.fromCharCode(event.which)))"},domProps:{value:e.addForm.chargeLogistics},on:{input:function(t){t.target.composing||e.$set(e.addForm,"chargeLogistics",t.target.value)}}})])])],1)]),e._v(" "),a("el-row",[a("div",{staticClass:"el-col el-col-12"},[a("el-form-item",{attrs:{label:"发货人",required:""}},[a("el-input",{attrs:{disabled:3===e.addType},model:{value:e.addForm.nameSender,callback:function(t){e.$set(e.addForm,"nameSender",t)},expression:"addForm.nameSender"}})],1)],1),e._v(" "),a("div",{staticClass:"el-col el-col-12"},[a("el-form-item",{attrs:{label:"电话",required:""}},[a("el-input",{attrs:{disabled:3===e.addType,onKeypress:"if(event.which===8) {return true} else return (/[\\d]/.test(String.fromCharCode(event.which)))"},model:{value:e.addForm.mobileSender,callback:function(t){e.$set(e.addForm,"mobileSender",t)},expression:"addForm.mobileSender"}})],1)],1)]),e._v(" "),a("el-row",[a("div",{staticClass:"el-col el-col-12"},[a("el-form-item",{attrs:{label:"司机"}},[a("el-input",{attrs:{disabled:3===e.addType},model:{value:e.addForm.nameDriver,callback:function(t){e.$set(e.addForm,"nameDriver",t)},expression:"addForm.nameDriver"}})],1)],1),e._v(" "),a("div",{staticClass:"el-col el-col-12"},[a("el-form-item",{attrs:{label:"电话"}},[a("el-input",{attrs:{disabled:3===e.addType,onKeypress:"if(event.which===8) {return true} else return (/[\\d]/.test(String.fromCharCode(event.which)))"},model:{value:e.addForm.mobileDriver,callback:function(t){e.$set(e.addForm,"mobileDriver",t)},expression:"addForm.mobileDriver"}})],1)],1)]),e._v(" "),a("el-row",[a("div",{staticClass:"el-col el-col-12"},[a("el-form-item",{attrs:{label:"车牌号"}},[a("el-input",{attrs:{disabled:3===e.addType},model:{value:e.addForm.noCar,callback:function(t){e.$set(e.addForm,"noCar",t)},expression:"addForm.noCar"}})],1)],1),e._v(" "),a("div",{staticClass:"el-col el-col-12"},[a("el-form-item",{attrs:{label:"物流公司",required:""}},[a("el-input",{attrs:{disabled:3===e.addType},model:{value:e.addForm.nameLogisticsCompany,callback:function(t){e.$set(e.addForm,"nameLogisticsCompany",t)},expression:"addForm.nameLogisticsCompany"}})],1)],1)]),e._v(" "),a("el-form-item",{attrs:{label:"备注"}},[a("el-input",{attrs:{type:"textarea",disabled:3===e.addType},model:{value:e.addForm.remark,callback:function(t){e.$set(e.addForm,"remark",t)},expression:"addForm.remark"}})],1),e._v(" "),a("el-row",[a("div",{staticClass:"el-col el-col-12"},[a("el-form-item",{attrs:{label:"矿场",required:""}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择",disabled:3===e.addType},on:{change:e.mineChange},model:{value:e.addForm.idMine,callback:function(t){e.$set(e.addForm,"idMine",t)},expression:"addForm.idMine"}},e._l(e.mineList.list,function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.id}})}))],1)],1),e._v(" "),a("div",{staticClass:"el-col el-col-12"},[a("el-form-item",{attrs:{label:"厂家",required:""}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择",disabled:3===e.addType},model:{value:e.addForm.nameFactory,callback:function(t){e.$set(e.addForm,"nameFactory",t)},expression:"addForm.nameFactory"}},e._l(e.dicts.idMachineFactory.list,function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.name}})}))],1)],1)]),e._v(" "),a("el-row",[a("div",{staticClass:"el-col el-col-24"},[a("el-form-item",{attrs:{label:"收货地址",required:""}},[a("el-input",{attrs:{disabled:3===e.addType},model:{value:e.addForm.addressFactory,callback:function(t){e.$set(e.addForm,"addressFactory",t)},expression:"addForm.addressFactory"}})],1)],1)]),e._v(" "),a("el-row",[a("div",{staticClass:"el-col el-col-12"},[a("el-form-item",{attrs:{label:"收货人",required:""}},[a("el-input",{attrs:{disabled:3===e.addType},model:{value:e.addForm.nameReceiver,callback:function(t){e.$set(e.addForm,"nameReceiver",t)},expression:"addForm.nameReceiver"}})],1)],1),e._v(" "),a("div",{staticClass:"el-col el-col-12"},[a("el-form-item",{attrs:{label:"电话",required:""}},[a("el-input",{attrs:{disabled:3===e.addType,onKeypress:"if(event.which===8) {return true} else return (/[\\d]/.test(String.fromCharCode(event.which)))"},model:{value:e.addForm.mobileRecevier,callback:function(t){e.$set(e.addForm,"mobileRecevier",t)},expression:"addForm.mobileRecevier"}})],1)],1)]),e._v(" "),1!==e.addType?a("el-row",[a("div",{staticClass:"el-col el-col-12"},[a("el-form-item",{attrs:{label:"创建人"}},[a("el-input",{attrs:{disabled:""},model:{value:e.addForm.nameCreator,callback:function(t){e.$set(e.addForm,"nameCreator",t)},expression:"addForm.nameCreator"}})],1)],1),e._v(" "),a("div",{staticClass:"el-col el-col-12"},[a("el-form-item",{attrs:{label:"创建时间"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"datetime",disabled:""},model:{value:e.addForm.timeCreate,callback:function(t){e.$set(e.addForm,"timeCreate",t)},expression:"addForm.timeCreate"}})],1)],1)]):e._e(),e._v(" "),3===e.addType?a("el-row",[a("div",{staticClass:"el-col el-col-12"},[a("el-form-item",{attrs:{label:"修改人"}},[a("el-input",{attrs:{disabled:""},model:{value:e.addForm.nameUpdater,callback:function(t){e.$set(e.addForm,"nameUpdater",t)},expression:"addForm.nameUpdater"}})],1)],1),e._v(" "),a("div",{staticClass:"el-col el-col-12"},[a("el-form-item",{attrs:{label:"修改时间"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"datetime",disabled:""},model:{value:e.addForm.timeUpdate,callback:function(t){e.$set(e.addForm,"timeUpdate",t)},expression:"addForm.timeUpdate"}})],1)],1)]):e._e(),e._v(" "),a("el-form-item",[3!==e.addType?a("el-button",{attrs:{type:"primary"},on:{click:e.addSubmit}},[e._v(e._s(e.btnName))]):e._e(),e._v(" "),3!==e.addType?a("el-button",{on:{click:e.addCancel}},[e._v("取消")]):e._e(),e._v(" "),3===e.addType?a("el-button",{on:{click:e.addCancel}},[e._v("关闭")]):e._e()],1)],1)],1)],1)},staticRenderFns:[]};var m=a("/Xao")(d,c,!1,function(e){a("FhuH")},"data-v-720072d5",null);t.default=m.exports},FhuH:function(e,t,a){var i=a("zEHA");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("8bSs")("26ce0a8a",i,!0)},zEHA:function(e,t,a){(e.exports=a("BkJT")(!1)).push([e.i,'\ninput[data-v-720072d5]::-webkit-outer-spin-button,\ninput[data-v-720072d5]::-webkit-inner-spin-button {\n  -webkit-appearance: none !important;\n  margin: 0;\n}\ninput[type="number"][data-v-720072d5] {\n  -moz-appearance: textfield;\n  line-height: 0;\n}\n',""])}});