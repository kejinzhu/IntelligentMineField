webpackJsonp([16],{CzJj:function(t,e,i){var n=i("eiVj");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("8bSs")("54ce330a",n,!0)},eiVj:function(t,e,i){(t.exports=i("BkJT")(!1)).push([t.i,"\n.title[data-v-9547fae8] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n}\n.title .add[data-v-9547fae8] {\n    background-color: #6969dc;\n    color: #FFFFFF;\n    margin-left: 4px;\n}\n.custom-tree-node[data-v-9547fae8] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  font-size: 14px;\n  padding-right: 8px;\n}\n.dialog[data-v-9547fae8] {\n  position: absolute;\n  background-color: #FFFFFF;\n  width: 80px;\n  height: 125px;\n  -webkit-box-shadow: 2px 2px 2px #888888;\n          box-shadow: 2px 2px 2px #888888;\n  border: 1px solid #f0f0f0;\n  z-index: 10;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.dialog-item[data-v-9547fae8] {\n    font-size: 12px;\n    color: #333333;\n    height: 20%;\n    width: 100%;\n    text-align: center;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    cursor: pointer;\n}\n.dialog-item[data-v-9547fae8]:hover {\n      background-color: #F0F0F0;\n}\n",""])},oHBm:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("ZLEe"),o=i.n(n),a=i("vLgD");var l={findDict:function(t){return Object(a.a)({url:"/dics/union",method:"get",params:t})},getDict:function(t){return Object(a.a)({url:"/dics/"+t,method:"get"})},createDict:function(t){return Object(a.a)({url:"/dics/",method:"post",data:t})},updateDict:function(t){return Object(a.a)({url:"/dics/"+t.id,method:"put",data:t})},removeDict:function(t){return Object(a.a)({url:"/dics/"+t,method:"delete"})},findAll:function(t){return Object(a.a)({url:"/dic/groups",method:"get",params:t})},find:function(t){return Object(a.a)({url:"/dic/groups/"+t,method:"get"})},create:function(t){return Object(a.a)({url:"/dic/groups/",method:"post",data:t})},update:function(t){return Object(a.a)({url:"/dic/groups/"+t.id,method:"put",data:t})},remove:function(t){return Object(a.a)({url:"/dic/groups/"+t,method:"delete"})}},r=(i("E4LH"),{data:function(){return{defaultProps:{children:"children",label:"name"},dictLoading:!1,dicts:[],selectId:"",group:{id:"",code:"",loading:!1,dictType:1,type:1,visible:!1},addForm:{id:"",name:"",code:"",idGroup:"",parentId:"",nameNick:"",remark:"",status:0,nameUpdater:"",timeUpdate:"",nameCreator:"",timeCreate:""},visible:!1,top:"0px",left:"0px",list:{query:{pageSize:0,pageNo:0},data:[],select:[],loading:!1},dialog:{loading:!1,visible:!1,title:{c:"新增字典",u:"修改字典",v:"字典详情"},btn:{c:"新增",u:"修改",v:"关闭"},status:["c","u","v"],data:{}},dict:{}}},created:function(){var t=this;document.getElementById("app").onclick=function(e){t.visible=!1},this.fetchData()},destroyed:function(){document.getElementById("app").onclick=null},computed:{groupTitle:function(){return 1===this.group.type?"新增字典":2===this.group.type?"修改字典":3===this.group.type?"字典详情":void 0},btnName:function(){return 1===this.group.type?"新增":2===this.group.type?"修改":void 0}},methods:{addRoot:function(){this.group.id=void 0,this.groupClick(1,1)},rightNodeClick:function(t,e){this.top=t.clientY+"px",this.left=t.clientX+"px",this.visible=!0,this.selectId=e.id,this.group.id=e.id,this.group.code=e.code},dictClick:function(t,e){this.selectId=e,this.groupClick(2,t)},groupClick:function(t,e){var i=this,n=this.group.id;if(this.group.type=e,this.group.dictType=t,4===e)return this.groupDelete();1===e?(i.group.loading=!1,o()(i.addForm).forEach(function(t){i.addForm[t]=""}),i.addForm.status=0):this.getInfo(this.selectId),1===t&&1===e&&(this.addForm.parentId=n||-1),2===t&&1===e&&(this.addForm.idGroup=n||-1),this.group.visible=!0},getInfo:function(t){var e=this,i=this,n="find";2===this.group.dictType&&(n="getDict"),this.group.loading=!0,l[n](t).then(function(t){var n;n=t.result,o()(i.addForm).forEach(function(t){i.addForm[t]=n[t]}),e.group.loading=!1}).catch(function(t){e.group.loading=!1})},dictGroup:function(t){console.log(t)},groupDelete:function(){var t=this;this.$confirm("确认是否删除该数据?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.groupSubmit()}).catch(function(t){console.log(t)})},valid:function(){return 4===this.group.type||(1===this.group.dictType&&""===this.addForm.code?(this.$message.error("编码不能为空！"),!1):""!==this.addForm.name||(this.$message.error("名称不能为空！"),!1))},groupSubmit:function(){if(this.valid()){var t=this,e=1===this.group.dictType?"create":"createDict",i=1===this.group.dictType?"update":"updateDict",n="";this.group.loading=!0,1===this.group.type?(n="添加成功！",l[e](this.addForm).then(function(t){o()},function(t){a()}).catch(function(t){a()})):2===this.group.type?(n="修改成功！",l[i](this.addForm).then(function(t){o()},function(t){a()}).catch(function(t){a()})):4===this.group.type&&(n="删除成功！",l[i]({id:this.selectId,status:1}).then(function(t){o()},function(t){a()}).catch(function(t){a()}))}function o(){t.$message({message:n,type:"success"}),t.group.visible=!1,t.group.loading=!1,t.fetchData(),t.handleNodeClick({code:t.group.code})}function a(){t.group.loading=!1}},fetchData:function(){this.dictLoading=!0,this.search()},handleNodeClick:function(t){this.group.code=t.code,this.visible=!1,this.list.loading=!0;var e={groupCode:t.code};l.findDict(e).then(function(t){this.dicts=t.result,this.list.loading=!1}.bind(this))},search:function(){var t=this;l.findAll(this.list.query).then(function(e){t.list.data=e.result,t.list.select=[{id:-1,name:"无"}].concat(e.result),t.dictLoading=!1}).catch(function(e){t.dictLoading=!1})}}}),d={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-container calendar-list-container",on:{click:function(e){t.visible=!1}}},[i("el-row",[i("el-col",{attrs:{span:4}},[i("div",{staticClass:"title"},[i("p",[t._v("字典树")]),t._v(" "),t.btn.root?i("div",{staticClass:"add",on:{click:function(e){t.addRoot()}}},[i("i",{staticClass:"el-icon-plus"})]):t._e()]),t._v(" "),i("div",{staticClass:"grid-content bg-purple",staticStyle:{height:"600px","overflow-y":"scroll"}},[i("el-tree",{directives:[{name:"loading",rawName:"v-loading",value:t.dictLoading,expression:"dictLoading"}],attrs:{data:t.list.data},on:{"node-click":t.handleNodeClick,"node-contextmenu":t.rightNodeClick},scopedSlots:t._u([{key:"default",fn:function(e){e.node;var n=e.data;return i("div",{staticClass:"custom-tree-node"},[i("span",{staticStyle:{"font-size":"14px",color:"#555555"}},[t._v(t._s(n.name))])])}}])})],1)]),t._v(" "),i("el-col",{attrs:{span:20}},[i("div",{staticClass:"grid-content bg-purple-light"},[i("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:t.list.loading,expression:"list.loading",modifiers:{body:!0}}],attrs:{stripe:"",data:t.dicts,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[i("el-table-column",{attrs:{label:"序号",align:"center",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.$index+1))]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"ID",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.id))]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"字典名",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.name))]}}])}),t._v(" "),i("el-table-column",{staticStyle:{"white-space":"nowrap"},attrs:{align:"center",label:"操作","class-name":"mid-padding fixed-width",width:"230"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(i){t.dictClick(2,e.row.id)}}},[t._v("修改")]),t._v(" "),i("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(i){t.dictClick(3,e.row.id)}}},[t._v("详情")]),t._v(" "),i("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(i){t.dictClick(4,e.row.id)}}},[t._v("删除")])]}}])})],1)],1)])],1),t._v(" "),i("el-dialog",{attrs:{"close-on-click-modal":!1,"close-on-press-escape":!1,title:t.groupTitle,visible:t.group.visible,width:"800px"},on:{"update:visible":function(e){t.$set(t.group,"visible",e)}}},[i("el-form",{directives:[{name:"loading",rawName:"v-loading",value:t.group.loading,expression:"group.loading"}],ref:"form",attrs:{model:t.addForm,"label-width":"100px"}},[i("el-row",[1===t.group.dictType?i("div",{staticClass:"el-col el-col-12"},[i("el-form-item",{attrs:{label:"编码",required:""}},[i("el-input",{attrs:{disabled:3===t.group.type,onKeypress:"return (!/^\\s*$/.test(String.fromCharCode(event.which)))"},model:{value:t.addForm.code,callback:function(e){t.$set(t.addForm,"code",e)},expression:"addForm.code"}})],1)],1):t._e()]),t._v(" "),i("el-row",[i("div",{staticClass:"el-col el-col-12"},[i("el-form-item",{attrs:{label:"名称",required:""}},[i("el-input",{attrs:{disabled:3===t.group.type,onKeypress:"return (!/^\\s*$/.test(String.fromCharCode(event.which)))"},model:{value:t.addForm.name,callback:function(e){t.$set(t.addForm,"name",e)},expression:"addForm.name"}})],1)],1),t._v(" "),1===t.group.dictType?i("div",{staticClass:"el-col el-col-12"},[i("el-form-item",{attrs:{label:"上级字典"}},[i("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择",disabled:3===t.group.type},model:{value:t.addForm.parentId,callback:function(e){t.$set(t.addForm,"parentId",e)},expression:"addForm.parentId"}},t._l(t.list.select,function(t,e){return i("el-option",{key:e,attrs:{label:t.name,value:t.id}})}))],1)],1):i("div",{staticClass:"el-col el-col-12"},[i("el-form-item",{attrs:{label:"上级字典",required:""}},[i("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择",disabled:3===t.group.type},model:{value:t.addForm.idGroup,callback:function(e){t.$set(t.addForm,"idGroup",e)},expression:"addForm.idGroup"}},t._l(t.list.data,function(t,e){return i("el-option",{key:e,attrs:{label:t.name,value:t.id}})}))],1)],1)]),t._v(" "),i("el-row",[2===t.group.dictType?i("div",{staticClass:"el-col el-col-12"},[i("el-form-item",{attrs:{label:"昵称"}},[i("el-input",{attrs:{disabled:3===t.group.type},model:{value:t.addForm.nameNick,callback:function(e){t.$set(t.addForm,"nameNick",e)},expression:"addForm.nameNick"}})],1)],1):t._e()]),t._v(" "),1===t.group.dictType?i("el-form-item",{attrs:{label:"备注"}},[i("el-input",{attrs:{type:"textarea",disabled:3===t.group.type,rows:4,maxlength:"200"},model:{value:t.addForm.remark,callback:function(e){t.$set(t.addForm,"remark",e)},expression:"addForm.remark"}})],1):t._e(),t._v(" "),1!==t.group.type?i("el-row",[i("div",{staticClass:"el-col el-col-12"},[i("el-form-item",{attrs:{label:"创建人"}},[i("el-input",{attrs:{disabled:""},model:{value:t.addForm.nameCreator,callback:function(e){t.$set(t.addForm,"nameCreator",e)},expression:"addForm.nameCreator"}})],1)],1),t._v(" "),i("div",{staticClass:"el-col el-col-12"},[i("el-form-item",{attrs:{label:"创建时间"}},[i("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"datetime",disabled:""},model:{value:t.addForm.timeCreate,callback:function(e){t.$set(t.addForm,"timeCreate",e)},expression:"addForm.timeCreate"}})],1)],1)]):t._e(),t._v(" "),3===t.group.type?i("el-row",[i("div",{staticClass:"el-col el-col-12"},[i("el-form-item",{attrs:{label:"修改人"}},[i("el-input",{attrs:{disabled:""},model:{value:t.addForm.nameUpdater,callback:function(e){t.$set(t.addForm,"nameUpdater",e)},expression:"addForm.nameUpdater"}})],1)],1),t._v(" "),i("div",{staticClass:"el-col el-col-12"},[i("el-form-item",{attrs:{label:"修改时间"}},[i("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"datetime",disabled:""},model:{value:t.addForm.timeUpdate,callback:function(e){t.$set(t.addForm,"timeUpdate",e)},expression:"addForm.timeUpdate"}})],1)],1)]):t._e(),t._v(" "),i("el-form-item",[3!==t.group.type?i("el-button",{attrs:{type:"primary"},on:{click:t.groupSubmit}},[t._v(t._s(t.btnName))]):t._e(),t._v(" "),3!==t.group.type?i("el-button",{on:{click:function(e){t.group.visible=!1}}},[t._v("取消")]):t._e(),t._v(" "),3===t.group.type?i("el-button",{on:{click:function(e){t.group.visible=!1}}},[t._v("关闭")]):t._e()],1)],1)],1),t._v(" "),t.visible?i("div",{staticClass:"dialog",style:{top:t.top,left:t.left}},[i("div",{staticClass:"dialog-item",on:{click:function(e){t.groupClick(2,1)}}},[i("span",[t._v("新增")])]),t._v(" "),i("div",{staticClass:"dialog-item",on:{click:function(e){t.groupClick(1,2)}}},[i("span",[t._v("修改")])]),t._v(" "),i("div",{staticClass:"dialog-item",on:{click:function(e){t.groupClick(1,3)}}},[i("span",[t._v("详情")])]),t._v(" "),i("div",{staticClass:"dialog-item",on:{click:function(e){t.groupClick(1,4)}}},[i("span",[t._v("删除")])])]):t._e()],1)},staticRenderFns:[]};var c=i("/Xao")(r,d,!1,function(t){i("CzJj")},"data-v-9547fae8",null);e.default=c.exports}});