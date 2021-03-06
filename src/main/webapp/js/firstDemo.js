var zTreeObj,
setting = {
		view: {
			selectedMulti: false
		}
},
zTreeNodes = [
		{"name":"网站导航", open:true, children: [
			{ "name":"google", "url":"http://g.cn", "target":"_blank"},
			{ "name":"baidu", "url":"http://baidu.com", "target":"_blank"},
			{ "name":"sina", "url":"http://www.sina.com.cn", "target":"_blank"}
			]
		}
];

$(document).ready(function(){
		/**
		 *通过初始化方法生成了tree控件, 
		 */
		zTreeObj = $.fn.zTree.init($("#tree"), setting, zTreeNodes);
		
		/**
		 * 得到了zTree的对象
		 * @param  id 元素
		 */
		alert($.fn.zTree.getZTreeObj("tree"));
		/**
		 * 为页面的button添加一个点击事件，销毁树 
		 */
		var button = $("#destroy");
		button.bind("click",function(){
			$.fn.zTree.destroy("tree");
		});
});

