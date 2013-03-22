/**
 * zTree树对象
 */
var zTreeObj;

var setting={
		async:{
			/**
			 * 开启异步
			 */
			enable:true,
			/**
			 * 异步访问的值
			 */
			url:"../asyncData.do",
			/**
			 * 为异步请求添加的参数,这些参数是zTree自动为我们获取
			 * 我们只需要在此定义好就行
			 */
			autoParam:["id","name=n","level=lv"],
			/**
			 * 自定义的参数
			 */
			otherParam:{"otherParam":"zTreeAsyncTest"},
			/**
			 * 对异步请求返回的数据进行
			 * 方法的参数为 Function(treeId,parentNode,responseData)
			 * 过滤后的json数据再用于渲染树,
			 * 当然这个方法不是必要的，如果后天传入的数据依然十分规范
			 * 这个dataFilter是可以不写的，
			 * 这个方法一般用于用户自定义的对数据进行调整
			 */
			dataFilter:filter
		},
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
			 * fontCss:customFont.getFont
			 */
		},
		data:{
			simpleData:{
				enable:true
			}
		}
};
/**
 * 在本例中我们不会使用该对象，会使用异步调用回来的数据渲染树
 */
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
/**
 * 
 * @param treeId          树容器
 * @param parentNode      父节点
 * @param childNodes      ajaxData,在本方法中我们传回一个数组对象
 * @returns
 */
function filter(treeId,parentNode,childNodes){
	if(!childNodes){
		return null;
	}
	
	for ( var i = 0; i < childNodes.length; i++) {
		childNodes[i].name = childNodes[i].name.replace(/\.n/g,'.');
	}
	return childNodes;
}

$(document).ready(function(){
	zTreeObj = $.fn.zTree.init($("#tree"),setting);
});