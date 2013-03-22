var zTreeObj;
var setting={
		view:{
			/**
			 * true/false 是否显示节点之间的虚线
			 * showLine:false,
			 */
			
			/**
			 * 是否显示节点上的图标
			 * showIcon:false
			 */
			/**
			 * 节点中字体，显示自定义样式
			 */
			fontCss:customFont.getFont
			
		},
		data:{
			simpleData:{
				enable:true
			}
		}
};
var zTreeNodes = [   
          /**
           * id     nodeId
           * pId    parentNodeId
           * name   显示的内容
           * url    链接
           * 以上这些都在  setting.data.key和setting.data.simpleData中定义
           * 
           * treeNode 对象中为我们定义icon,iconClose ,iconOpen iconSkin等关于图标的对象
           * 
           * 为节点添加字体  font:{key,value},其中key为css样式，value为css样式的值,
           * 想要在树中显示，我们还需要设置setting.view.fontCss=getFont
           */
          {id:1,pId:0,name:"1父节点",open:true,iconOpen:"../ztree/css/zTreeStyle/img/diy/1_open.png"
        	  ,iconClose:"../ztree/css/zTreeStyle/img/diy/1_close.png",font:{'font-weight':'bold'}},        
          {id:2,pId:1,name:"1_1父节点",isParent:true,icon:"../ztree/css/zTreeStyle/img/diy/2.png"},
          {id:3,pId:1,name:"1_2节点",font:{'background-color':'black', 'color':'white'}},
          {id:4,pId:1,name:"1_3节点"},
          {id:5,pId:0,name:"2父节点"},
          {id:6,pId:5,name:"2_1节点"},
      ];
/**
 *  设置字体的属性
 * @param treeId
 * @param node
 * @returns
 */
function getFont(treeId, node) {
	return node.font ? node.font : {};
}



$(document).ready(function(){
	zTreeObj = $.fn.zTree.init($("#tree"),setting,zTreeNodes);
});