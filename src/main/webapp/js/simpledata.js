var zTreeObj;
var setting={
		/**
		 * 使用的节点JSON数据,可以为简单数据
		 */
		data:{
			simpleData:{
				enable:true
			}
		}
		
};
var zTreeNodes = [    
          {id:1,pId:0,name:"1父节点",open:true},        
          {id:2,pId:1,name:"1_1父节点",isParent:true},
          {id:3,pId:1,name:"1_2节点"},
          {id:4,pId:1,name:"1_3节点"},
          {id:5,pId:0,name:"2父节点"},
          {id:6,pId:5,name:"2_1节点"},
      ];

$(document).ready(function(){
	zTreeObj = $.fn.zTree.init($("#tree"),setting,zTreeNodes);
});