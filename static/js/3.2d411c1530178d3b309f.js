webpackJsonp([3],{"0TK5":function(e,t,a){"use strict";var n=a("vLgD");t.a={getList:function(e){return Object(n.a)({url:"/menus",method:"get",params:e})},add:function(e){return Object(n.a)({url:"/menus",method:"post",data:e})},get:function(e){return Object(n.a)({url:"/menus/"+e,method:"get"})},patch:function(e){return Object(n.a)({url:"/menus/"+e.id,method:"put",data:e})}}},"9SOp":function(e,t,a){(e.exports=a("BkJT")(!1)).push([e.i,"\n@keyframes treeTableShow {\nfrom {opacity: 0;\n}\nto {opacity: 1;\n}\n}\n@-webkit-keyframes treeTableShow {\nfrom {opacity: 0;\n}\nto {opacity: 1;\n}\n}\n.el-table th>.cell {\n  text-align: center;\n}\n",""])},SLiU:function(e,t,a){(e.exports=a("BkJT")(!1)).push([e.i,"",""])},XE2F:function(e,t,a){var n=a("9SOp");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("8bSs")("0fc335e2",n,!0)},cvNT:function(e,t){e.exports=function(){return Function.call.apply(Array.prototype.concat,arguments)}},gj9C:function(e,t,a){var n=a("SLiU");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("8bSs")("80c979e0",n,!0)},kudP:function(e,t,a){var n=a("m+lN");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("8bSs")("719da41d",n,!0)},"m+lN":function(e,t,a){(e.exports=a("BkJT")(!1)).push([e.i,'\n.ms-tree-space[data-v-39b964b8] {\n  position: relative;\n  top: 1px;\n  display: inline-block;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1;\n  width: 18px;\n  height: 14px;\n}\n.ms-tree-space[data-v-39b964b8]::before {\n    content: "";\n}\n.processContainer[data-v-39b964b8] {\n  width: 100%;\n  height: 100%;\n}\ntable td[data-v-39b964b8] {\n  line-height: 26px;\n}\n.tree-ctrl[data-v-39b964b8] {\n  position: relative;\n  cursor: pointer;\n  color: #2196F3;\n  margin-left: -18px;\n}\n',""])},"oi+F":function(e,t,a){e.exports={default:a("cvNT"),__esModule:!0}},p7Ux:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("ZLEe"),i=a.n(n),r=a("oi+F"),l=a.n(r),o=a("kfHR"),d=a.n(o),s=a("E7jK");function c(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i=[];return d()(e).forEach(function(e){void 0===e._expanded&&s.default.set(e,"_expanded",t);var r=1;if(void 0!==n&&null!==n&&(r=n+1),s.default.set(e,"_level",r),a&&s.default.set(e,"parent",a),i.push(e),e.children&&e.children.length>0){var l=c(e.children,t,e,r);i=i.concat(l)}}),i}var u={name:"treeTable",data:function(){return{}},props:{data:{type:[Array,Object],required:!0},columns:{type:Array,default:function(){return[]}},evalFunc:Function,evalArgs:Array,expandAll:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},computed:{formatData:function(){var e=void 0;e=Array.isArray(this.data)?this.data:[this.data];var t=this.evalFunc||c,a=this.evalArgs?l()([e,this.expandAll],this.evalArgs):[e,this.expandAll];return t.apply(null,a)}},methods:{showRow:function(e){var t=!e.row.parent||e.row.parent._expanded&&e.row.parent._show;return e.row._show=t,t?"animation:treeTableShow 1s;-webkit-animation:treeTableShow 1s;":"display:none;"},toggleExpanded:function(e){var t=this.formatData[e];t._expanded=!t._expanded},iconShow:function(e,t){return 0===e&&t.children&&t.children.length>0},getExpands:function(){var e=[];return this.formatData.forEach(function(t,a){t._expanded&&e.push(a)}),e},toggleExpandeds:function(e){var t=this;e.forEach(function(e){t.toggleExpanded(e)})}}},m={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-table",e._b({directives:[{name:"loading",rawName:"v-loading.body",value:e.loading,expression:"loading",modifiers:{body:!0}}],attrs:{data:e.formatData,"row-style":e.showRow}},"el-table",e.$attrs,!1),[0===e.columns.length?a("el-table-column",{attrs:{width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._l(t.row._level,function(e){return a("span",{key:e,staticClass:"ms-tree-space"})}),e._v(" "),e.iconShow(0,t.row)?a("span",{staticClass:"tree-ctrl",on:{click:function(a){e.toggleExpanded(t.$index)}}},[t.row._expanded?a("i",{staticClass:"el-icon-minus"}):a("i",{staticClass:"el-icon-plus"})]):e._e(),e._v("\n      "+e._s(t.$index)+"\n    ")]}}])}):e._l(e.columns,function(t,n){return a("el-table-column",{key:t.value,attrs:{label:t.text,width:t.width},scopedSlots:e._u([{key:"default",fn:function(i){return[e._l(i.row._level,function(t){return 0===n?a("span",{key:t,staticClass:"ms-tree-space"}):e._e()}),e._v(" "),e.iconShow(n,i.row)?a("span",{staticClass:"tree-ctrl",on:{click:function(t){e.toggleExpanded(i.$index)}}},[i.row._expanded?a("i",{staticClass:"el-icon-minus"}):a("i",{staticClass:"el-icon-plus"})]):e._e(),e._v("\n      "+e._s(i.row[t.value])+"\n    ")]}}])})}),e._v(" "),e._t("default")],2)},staticRenderFns:[]};var p=a("/Xao")(u,m,!1,function(e){a("XE2F"),a("kudP")},"data-v-39b964b8",null).exports,f=a("0TK5"),h=a("4T3X"),v=a("RbaZ"),b={name:"名称",url:"url",type:"类型",order:"排序编号",remark:"备注"},g={components:{treeTable:p},data:function(){return{addType:0,addLoading:!1,addVisible:!1,listLoading:!0,expandAll:!1,treeVisible:!1,treeLoading:!1,formInline:{code:"",name:""},addForm:{id:"",idParent:"",name:"",code:"",url:"",type:"",order:"",remark:"",nameUpdater:"",timeUpdate:"",nameCreator:"",timeCreate:""},columns:[{value:"name",text:"菜单名称",width:""}],parentNode:{name:"",id:""},idParentName:"",listData:[],listObj:{},data:[],treeData:[],defaultProps:{children:"children",label:"name"},defaultKey:8,dicts:{type:{list:[],obj:{}}}}},created:function(){this.getDict(),this.getAll()},mounted:function(){},computed:{addTitle:function(){return 1===this.addType?"新增菜单信息":2===this.addType?"修改菜单信息":3===this.addType?"菜单详细信息":void 0},btnName:function(){return 2===this.addType?"修改":"新增"},btn:function(){return this.$store.getters.btn}},methods:{nodeFilter:function(e,t,a){return e!==t.id},checkChange:function(e){e.id===this.parentNode.id?(this.parentNode.id=0,this.parentNode.name=""):(this.$refs.treeData.setCheckedKeys([e.id]),this.parentNode.id=e.id,this.parentNode.name=e.name)},treeSelect:function(){1!==this.addType&&2!==this.addType||(this.parentNode.id=this.addForm.idParent,this.treeVisible=!0,this.$nextTick(function(){this.$refs.treeData.filter(this.addForm.id),this.$refs.treeData.setCheckedKeys([this.addForm.idParent])}))},treeSubmit:function(){this.idParentName=this.parentNode.name,this.addForm.idParent=this.parentNode.id,this.treeVisible=!1},getParentName:function(e){0===e&&(this.idParentName="");for(var t=0;t<this.listData.length;t++){var a=this.listData[t];a.id===e&&(this.idParentName=a.name)}},getDict:function(){Object(h.a)("local_8").then(function(e){this.dicts.type=e}.bind(this))},clickBtn:function(e,t,a){var n=this;this.addType=e,1===e?(n.addLoading=!1,i()(n.addForm).forEach(function(e){n.addForm[e]=""})):this.getInfo(t),1===this.addType&&(this.addForm.idParent=t||0,this.idParentName=a),this.addVisible=!0},search:function(){""===this.formInline.name?this.getAll():this.getAll(!0)},getAll:function(e){var t=this;this.addLoading=!0;var a={pageSize:0,pageNo:0};""!==this.formInline.code&&(a.code=this.formInline.code),""!==this.formInline.name&&(a.name=this.formInline.name);var n=[];this.$nextTick(function(){n=this.$refs.tree.getExpands()}),f.a.getList(a).then(function(a){e?t.data=a.result.recordList:(t.listData=a.result.recordList,t.listObj=function(e){var t={};return e.forEach(function(e){t[e.id]=e.name}),t}(a.result.recordList),t.data=v.a.initTree(a.result.recordList)),t.$nextTick(function(){!e&&n.length>0&&this.$refs.tree.toggleExpandeds(n)}),t.listLoading=!1,t.addLoading=!1})},getInfo:function(e){var t=this,a=this;e,this.addLoading=!0,f.a.get(e).then(function(e){var n;n=e.result,i()(a.addForm).forEach(function(e){a.addForm[e]=n[e]}),t.getParentName(e.result.idParent),t.addLoading=!1})},valid:function(){for(var e in b){var t=this.addForm[e];if("remark"!==e){if(""===t.toString().trim()){var a=b[e]+"不能为空！";return this.$message.error(a),!1}}else if(t.length>200){var n=b[e]+"长度不能超过200！";return this.$message.error(n),!1}}return!0},addSubmit:function(){if(this.valid()){var e=this,t="";this.addLoading=!0,1===this.addType?(t="添加成功！",f.a.add(this.addForm).then(function(e){a()},function(e){n()})):2===this.addType&&(t="修改成功！",f.a.patch(this.addForm).then(function(e){a()},function(e){n()}))}function a(){e.$message({message:t,type:"success"}),e.addVisible=!1,e.addLoading=!1,e.getAll()}function n(){e.addLoading=!1}},message:function(e){this.$message.info(e.event)}}},y={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formInline}},[a("el-form-item",{attrs:{label:"名称"}},[a("el-input",{attrs:{clearable:""},model:{value:e.formInline.name,callback:function(t){e.$set(e.formInline,"name",t)},expression:"formInline.name"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(t){e.search()}}},[e._v("查询")]),e._v(" "),a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:function(t){e.clickBtn(1)}}},[e._v("新增")])],1)],1)],1),e._v(" "),a("tree-table",{ref:"tree",attrs:{data:e.data,loading:e.listLoading,columns:e.columns,expandAll:e.expandAll,border:""}},[a("el-table-column",{attrs:{label:"类型",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(e.dicts.type.obj[t.row.type])+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"URL",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.url)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"上级菜单",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(e.listObj[t.row.idParent])+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"排序编号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.order)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"200",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){e.clickBtn(1,t.row.id,t.row.name)}}},[e._v("新增")]),e._v(" "),a("el-button",{attrs:{type:"text"},on:{click:function(a){e.clickBtn(2,t.row.id)}}},[e._v("修改")]),e._v(" "),a("el-button",{attrs:{type:"text"},on:{click:function(a){e.clickBtn(3,t.row.id)}}},[e._v("详情")])]}}])})],1),e._v(" "),a("el-dialog",{attrs:{"close-on-click-modal":!1,"close-on-press-escape":!1,title:e.addTitle,visible:e.addVisible,width:"800px"},on:{"update:visible":function(t){e.addVisible=t}}},[a("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.addLoading,expression:"addLoading"}],ref:"form",attrs:{model:e.addForm,"label-width":"100px"}},[a("el-row",[a("div",{staticClass:"el-col el-col-12"},[a("el-form-item",{attrs:{label:"名称",required:""}},[a("el-input",{attrs:{type:"text",disabled:3===e.addType},model:{value:e.addForm.name,callback:function(t){e.$set(e.addForm,"name",t)},expression:"addForm.name"}})],1)],1)]),e._v(" "),a("el-row",[a("div",{staticClass:"el-col el-col-12"},[a("el-form-item",{attrs:{label:"类型",required:""}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择",disabled:3===e.addType},model:{value:e.addForm.type,callback:function(t){e.$set(e.addForm,"type",t)},expression:"addForm.type"}},e._l(e.dicts.type.list,function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.id}})}))],1)],1),e._v(" "),a("div",{staticClass:"el-col el-col-12"},[a("el-form-item",{attrs:{label:"上级菜单"}},[a("el-input",{attrs:{type:"text",disabled:3===e.addType,readonly:""},nativeOn:{click:function(t){e.treeSelect(t)}},model:{value:e.idParentName,callback:function(t){e.idParentName=t},expression:"idParentName"}})],1)],1)]),e._v(" "),a("el-row",[a("div",{staticClass:"el-col el-col-12"},[a("el-form-item",{attrs:{label:"URL",required:""}},[a("el-input",{attrs:{type:"text",disabled:3===e.addType},model:{value:e.addForm.url,callback:function(t){e.$set(e.addForm,"url",t)},expression:"addForm.url"}})],1)],1),e._v(" "),a("div",{staticClass:"el-col el-col-12"},[a("el-form-item",{attrs:{label:"排序编号",required:""}},[a("div",{staticClass:"el-input",class:{"is-disabled":3===e.addType}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.addForm.order,expression:"addForm.order"}],staticClass:"el-input__inner",attrs:{type:"text",disabled:3===e.addType,onKeypress:"if(event.which===8) {return true} else return (/[\\d]/.test(String.fromCharCode(event.which)))"},domProps:{value:e.addForm.order},on:{input:function(t){t.target.composing||e.$set(e.addForm,"order",t.target.value)}}})])])],1)]),e._v(" "),a("el-form-item",{attrs:{label:"备注"}},[a("el-input",{attrs:{type:"textarea",disabled:3===e.addType},model:{value:e.addForm.remark,callback:function(t){e.$set(e.addForm,"remark",t)},expression:"addForm.remark"}})],1),e._v(" "),1!==e.addType?a("el-row",[a("div",{staticClass:"el-col el-col-12"},[a("el-form-item",{attrs:{label:"创建人"}},[a("el-input",{attrs:{disabled:""},model:{value:e.addForm.nameCreator,callback:function(t){e.$set(e.addForm,"nameCreator",t)},expression:"addForm.nameCreator"}})],1)],1),e._v(" "),a("div",{staticClass:"el-col el-col-12"},[a("el-form-item",{attrs:{label:"创建时间"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"datetime",disabled:""},model:{value:e.addForm.timeCreate,callback:function(t){e.$set(e.addForm,"timeCreate",t)},expression:"addForm.timeCreate"}})],1)],1)]):e._e(),e._v(" "),3===e.addType?a("el-row",[a("div",{staticClass:"el-col el-col-12"},[a("el-form-item",{attrs:{label:"修改人"}},[a("el-input",{attrs:{disabled:""},model:{value:e.addForm.nameUpdater,callback:function(t){e.$set(e.addForm,"nameUpdater",t)},expression:"addForm.nameUpdater"}})],1)],1),e._v(" "),a("div",{staticClass:"el-col el-col-12"},[a("el-form-item",{attrs:{label:"修改时间"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"datetime",disabled:""},model:{value:e.addForm.timeUpdate,callback:function(t){e.$set(e.addForm,"timeUpdate",t)},expression:"addForm.timeUpdate"}})],1)],1)]):e._e(),e._v(" "),a("el-form-item",[3!==e.addType?a("el-button",{attrs:{type:"primary"},on:{click:e.addSubmit}},[e._v(e._s(e.btnName))]):e._e(),e._v(" "),3!==e.addType?a("el-button",{on:{click:function(t){e.addVisible=!1}}},[e._v("取消")]):e._e(),e._v(" "),3===e.addType?a("el-button",{on:{click:function(t){e.addVisible=!1}}},[e._v("关闭")]):e._e()],1)],1)],1),e._v(" "),a("el-dialog",{attrs:{"close-on-click-modal":!1,"close-on-press-escape":!1,title:"上级菜单",visible:e.treeVisible,width:"400px"},on:{"update:visible":function(t){e.treeVisible=t}}},[a("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.treeLoading,expression:"treeLoading"}],ref:"form",attrs:{"label-width":"100px"}},[a("el-row",{staticStyle:{"margin-bottom":"20px"}},[a("el-tree",{ref:"treeData",attrs:{data:e.data,"show-checkbox":"","check-strictly":!0,"node-key":"id","default-expanded-keys":[],"default-expand-all":!0,props:e.defaultProps,"filter-node-method":e.nodeFilter},on:{check:e.checkChange}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.treeSubmit}},[e._v("确认")]),e._v(" "),a("el-button",{on:{click:function(t){e.treeVisible=!1}}},[e._v("取消")])],1)],1)],1)],1)},staticRenderFns:[]};var _=a("/Xao")(g,y,!1,function(e){a("gj9C")},"data-v-04f946be",null);t.default=_.exports}});