/**
     _                           
    (_)                          
     _   _ __     ___ _  _    _  
    | | / _` \  / / _`/ _ \ \ /  
    | |/ (_|\ \/ / (_|  __/\ \   
    \ |\__,_ \__/\__,_\___ /\_\  
    /_/                          
                                 
    
    作者：陈霓清
    官网：www.javaex.cn
    版本：4.0.0
    Licences: MIT
*/
;(function() {
	var javaex = function() {
		// 默认属性
		function defaults(args) {
			var defaults = {
				id : "",              // 元素id
				mode : "",            // 模式
				type : "",            // 组件类型
				url : "",             // 请求地址
				dataList : [],            // 数据集合
				isInit : false,       // 是否初始化自动调用回调函数
				callback : function() {return true;},  // 回调事件
				
				// 伪单选和伪多选
				name : "",            // radio的name属性
				uncheckClass : "",    // 未选中时往label标签添加的class
				checkedClass : "",    // 选中时往label标签添加的class
				
				// 计时器获取验证码
				second : 45,                          // 默认倒计时45秒
				text : "获取验证码",                     // 文字显示
				color : "unset",                      // 默认的文字颜色
				backgroundColor : "transparent",      // 默认的文字背景色
				downColor : "unset",                  // 倒计时时的文字颜色
				downBackgroundColor : "transparent",  // 倒计时时的文字背景色
				
				// 树形菜单
				checkbox : true,            // 是否显示复选框
				isShowAllCheck : false,    // 是否显示全选
				isAllowJumpUrl : false,     // 点击菜单名称时，是否允许跳转链接
				icon : false,               // 是否显示图标
				withoutNodeArr : null,      // 获取复选框值时，排除的节点数组（从1开始），例如[1, 2]
				checkboxCallback : function() {return true;},  // 点击复选框的回调事件
				aCallback : function() {return true;},  // 点击菜单名（a标签）的回调事件
				
				// 进度条属性
				percent : 0,                // 百分比
				isShowPercent : false,      // 是否显示百分比
				
				// 标签属性
				tags : "",              // 回显标签
				
				// 弹出层属性
				mask : true,            // 是否使用遮罩
				width : 300,            // 弹出层宽度，单位px
				maxHeight : "",         // 弹出层最大高度
				height : "",            // 弹出层高度
				top : "30%",            // 距离顶部距离，支持 200px 这种写法
				title : "温馨提示",       // 弹出层标题
				closeIcon : true,       // 是否显示右上角关闭 X
				content : "",           // 弹出层内容
				textAlign : "left",     // 内容位置：left；center；right
				confirmName : "确定",    // 确定按钮名称
				cancelName : "取消",     // 取消按钮名称
				confirm : function() {return true;},  // 点击确定按钮后的回调函数
				cancel : function() {return true;},    // 点击取消按钮后的回调函数
				close : function() {return true;},    // 点击右上角X关闭弹出层时的回调函数
				live : 2000,            // 操作提示存在时间（单位：毫秒）
				timeout : 10000,        // 超时时间（单位：毫秒）
				timeoutText : "连接超时，请重试",    // 超时提示
				selector : "",                    // 图片数组选择器
				scrolling : "yes",                // 是否有滚动条
				offsetLeft : 0,                   // 左偏移量
				offsetTop : 0,                    // 上偏移量
				hasBackground : false,            // 是否有加载图片
				isClickMaskClose : false,         // 是否允许点击遮罩关闭弹窗
				
				// 左侧菜单属性
				isAutoSelected : false,    // 是否自动选中
				key : "key",               // 默认内容标识
				isShowFirst : false,       // 是否初始化显示第1个二级节点
				isShowAll : false,         // 是否初始化显示所有二级节点
				
				// 评分属性
				num : 5,                   // 星星数量
				size : 24,                 // 星星大小
				scoreArr : [1, 2, 3, 4, 5],    // 分数数组
				levelTextArr : ['1分', '2分', '3分', '4分', '5分'],    // 文字提示数组
				score : "",                // 默认分数
				half : false,              // 是否启用半星
				isReadOnly : false,        // 是否只读
				clickOnce : true,          // 是否只允许点击一次，点击后会自动变成只读模式
				
				// Tab切换属性
				current : 1,               // 默认显示第几个标签，从1开始计
				delay : 200,               // 鼠标移动切换时，延迟多少毫秒
				display : "block",         // div的display属性
				
				// 表格选择属性
				mergeColArr : [],          // 需要合并的列数组（从1开始），例如[1, 3]
				tree : 0,                  // 第几列是树形（从1开始）
				isClose : false,           // 树形表格默认是否闭合
				isDragColWidth : false,    // 是否允许拖动列宽
				leftFixedColNum : 0,       // 左侧固定列数
				rightFixedColNum : 0,      // 右侧固定列数
				colWidth : null,           // 为未设置宽度的列设置指定的宽
				sort : null,               // 排序字段
				sortSingle : true,         // 是否只对单列进行排序
				sortCallback : function() {return true;},  // 排序回调
				
				// select选择框属性
				maxNum : 6,                // 下拉列表最多显示多少项，超出会显示滚动条
				minWidth : 140,            // 最小宽度
				isSearch : false,          // 是否允许检索，true：允许；false：不允许
				hasInputName : false,      // input是否有name属性
				
				// 分页属性
				totalPages : null,         // 总页数
				pageNum : 1,               // 默认选中第几页
				pageSize : null,           // 每页显示多少条
				totalNum : null,           // 总条数，不填时，不显示
				position : "right",        // 分页显示位置。 left:居左；center:居中；right:居右
				isShowJumpPage : true,    // 是否显示跳页
				lastPageText : "上一页",    // 上一页文字标识
				nextPageText : "下一页",    // 下一页文字标识
				isShowOnePage : true,      // 当只有一页时，是否显示分页组件
				isShowSelect : true,       // 是否显示条数选择控件
				isReturnFirst : true,      // 条数选择控件重新选择后，是否返回第1页
				
				// 幻灯片
				isAutoPlay : true,             // 是否自动轮播
				focusCenter : false,           // 焦点区域是否自动居中
				startSlide : 1,                // 开始切换的位置（即从第几张图开始切换），从1开始计
				focusBoxMode : "mouseover",    // 焦点切换模式。mouseover：鼠标移动切换； click: 鼠标点击切换
				effect : null,                 // 切换效果，默认为淡入淡出。slice：左右滑动;smooth：平滑
				
				// 日期选择属性
				// 单选日期
				date : "",
				// 日期范围
				startDate : "",             // 开始日期，默认今天
				endDate : "",               // 结束日期，默认今天
				alignment : "left",         // 日期选择框的对齐方式。left代表左对齐；right代表右对齐
				monthNum : 1,               // 展示的月份数，最大是2。 1代表选择单日；2代表选择范围
				splitLine : " - ",          // 两个日期之间的连接符
				minTime : "",               // 最小可选时间
				maxTime : "",               // 最大可选时间
				
				// 仅仅是时间选择
				time : "",                  // 默认显示时间
				
				// 头像上传属性
				imgDivId : "image-box",     // 本地上传的图片区域id
				cutBox : "cut-box",         // 裁剪区域id
				moveBox : "move-box",       // 背景区域id，可拖动
				dataUrl : "data-url",       // 最终将图片地址返回给哪个input存储
				
				// 图片懒加载
				threshold : 100,            // 提前开始加载
				event : "scroll",           // 事件触发时才加载
				container : window,
				dataOriginal : "data-original",  // 图片延迟加载时，从该属性中获取真正的图片地址
				appear : null,
				load : null,
				placeholder : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",
				
				// 文件上传属性
				isShowTip : false,          // 是否显示操作提示
				containerId : "",           // 容器id
				uploadText : "上传封面",      // 上传图片文字提示
				param : {"file":"file"},    // 参数名称，左边的 "file" 是固定必须的。   右边的 "file"是参数名，Spring中与MultipartFile的参数名保持一致
				header : {},                // request.setRequestHeader
				chooseBefore : function() {return true;},    // 选择文件前的回调函数
				chooseAfter : function() {return true;},     // 选择文件后的回调函数
				maxSize : "",               // 单张图片的大小上限，单位KB，0或空为不限制
				imgList : "",               // 图片回显地址
				dataType : "base64",        // 图片上传后的返回类型
				deleteImage : function() {return true;},    // 删除图片的回调函数
				addImg : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAIBJREFUSA3tl7ENwCAMBN9RpkvFQsyUNGE9IpIs8P8FBUZy58PmkLAAxFXqdY8QcewqCPRDZ4HNgR02Czv2KDZVU7qc5FTt2KPY9VTHN2G8B59y/CZHm6I6Ap1v9idKPfsIdYMpJx7NZmH1ymguVdPKVCBVq+Zobj3Vxt8pmjNlHkcEEcpxsEklAAAAAElFTkSuQmCC",
				
				// 评论
				commentCount : 0,            // 评论条数
				user : null,                 // 当前登录用户
				list : null,
				commentMapping : null,       // 评论映射
				replyMapping : null,         // 回复映射
				defaultAvatar : "",          // 默认头像地址
				curUserAvatar : "",          // 当前登录用户头像地址
				isChangeTimeText : false,    // 修改时间显示文本
				unLogin : function() {return true;},          // 未登录时点击输入框的回调函数
				showMoreReply : function() {return true;},    // 点击查看更多回复的回调函数
				
				// 数字选择器
				initValue : "",              // 初始化显示的数字
				step : 1,                    // 步长
				minValue : 1,                // 最小值
				maxValue : 100,              // 最大值
				decrCallback : function() {return true;},    // 递减回调函数
				incrCallback : function() {return true;},    // 递增回调函数
				
				// 表单回显
				formData : {},               // 表单数据
				defaultRadioChecked : 1,     // 单选框没有值时，默认选中第几个（0代表不默认选中）
				
				// 富文本编辑器属性
				fixedTop : -1,     // 工具栏距离顶部多少像素时，固定
				image : null
			};
			return $.extend(defaults, args);
		}
		
		var info = {
			// 获取地址栏参数
			getParam : function(key) {
				var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
				var r = window.location.search.substr(1).match(reg);
				if (r != null) {
					return unescape(r[2]);
				}
				return null;
			},
			// 获取checkbox的值。 passDisabled表示是否跳过禁用的
			getCheckboxVal : function(name, passDisabled) {
				let varArr = [];
				$(':checkbox[name="'+name+'"]:checked').each(function() {
					if (typeof passDisabled == "undefined" || !passDisabled) {
						varArr.push($(this).val());
					} else if (!$(this).attr("disabled")) {
						varArr.push($(this).val());
					}
				});
				return varArr;
			},
			getCheckboxText : function(name, passDisabled) {
				let textArr = [];
				$(':checkbox[name="'+name+'"]:checked').each(function() {
					let text = $(this).next().next(".javaex-fill-text").text();
					if (!text) {
						text = $(this)[0].nextSibling.nodeValue;
					}
					
					if (typeof passDisabled == "undefined" || !passDisabled) {
						textArr.push(text);
					} else if (!$(this).attr("disabled")) {
						textArr.push(text);
					}
				});
				return textArr;
			},
			// 获取/设置radio的值
			setRadioVal : function(name, val) {
				$(':radio[name="'+name+'"][value="'+val+'"]').attr("checked", true);
			},
			getRadioVal : function(name) {
				var val = $(':radio[name="'+name+'"]:checked').val();
				return info.ifnull(val);
			},
			getRadioText : function(name) {
				if ($(':radio[name="'+name+'"]:checked').length==0) {
					return "";
				}
				
				var text = $(':radio[name="'+name+'"]:checked').next().next(".javaex-fill-text").text();
				if (!text) {
					text = $(':radio[name="'+name+'"]:checked')[0].nextSibling.nodeValue;
				}
				return info.ifnull(text);
			},
			// 获取select的值
			getSelectVal : function(selector) {
				return $(selector).val();
			},
			getSelectText : function(selector) {
				return $(selector).find("option:selected").text().trim();
			},
			
			// 侧边栏
			drawer : function(args) {
				var settings = defaults(args);
				var id = settings.id;
				var width = String(settings.width);
				var position = settings.position;
				var isClickMaskClose = settings.isClickMaskClose;
				var title = settings.title;
				var closeIcon = settings.closeIcon;
				var url = settings.url;
				
				if (!id) {
					id = info.getUUID();
				}
				
				// 自动创建iframe嵌套模式
				if (!!url) {
					closeFn = settings.close;
					
					var html = '<div id="'+id+'" class="javaex-drawer javaex-drawer-auto">';
					html += '<div class="javaex-drawer-header">';
					html += '<div class="javaex-drawer-title">'+title+'</div>';
					if (closeIcon) {
						html += '<a class="javaex-drawer-close" href="javascript:;" onclick="javaex.callback(\''+id+'\', closeFn);"><span class="icon-close"></span></a>';
					}
					html += '</div>';
					html += '<div class="javaex-drawer-content"><iframe src="'+url+'" width="100%" height="100%" frameborder="0" scrolling="yes" style="overflow: visible;border: 0;"></iframe></div>';
					html += '</div>';
					$(document.body).append(html);
				}
				
				var $drawer = $("#"+id);
				$drawer.show();
				
				var tempDrift = 0;    // 偏移量
				
				// 用户设置了百分比
				if (width.indexOf("%")>0) {
					tempDrift = -(width.replace("%", "")) + "%";
				}
				// 用户设置了带单位的像素
				else if (width.indexOf("px")>0) {
					tempDrift = -(width.replace("px", "")) + "px";
				}
				// 用户设置了值
				else {
					tempDrift = -(width) + "px";
					width = width + "px";
				}
				
				// 添加遮罩
				$drawer.before('<div class="javaex-mask"></div>');
				// 显示导航
				if (position=="left") {
					$drawer.css({
						"width" : width,
						"left" : tempDrift
					});
					$drawer.css("transform", "translateX(" + $drawer.width() + "px)");
				}
				else if (position=="right") {
					$drawer.css({
						"width" : width,
						"right" : tempDrift
					});
					$drawer.css("transform", "translateX(" + -($drawer.width()) + "px)");
				}
				
				// 点击遮罩隐藏导航
				if (isClickMaskClose) {
					$(".javaex-mask").click(function() {
						$(".javaex-mask").remove();
						$drawer.css("transform", "translateX(0px)");
						
						if ($drawer.hasClass("javaex-drawer-auto")) {
							setTimeout(function() {
								$drawer.remove();
							}, 200);
						}
					});
				}
				
				// 打开后的回调函数
				settings.callback({});
			},
			
			// form表单自动填充
			form : function(args) {
				var settings = defaults(args);
				var formId = settings.id;
				var formData = settings.formData;
				var defaultRadioChecked = parseInt(settings.defaultRadioChecked);
				
				if (formData==null) {
					return;
				}
				
				var $form = $("#"+formId);
				
				// 遍历json得到键值对
				for (let key in formData) {
					let value = formData[key];
					
					// 获取对应的元素
					let $item = $form.find('[name="'+ key +'"]');
					if ($item.length==0) {
						continue;
					}
					// 获取对应的元素类型
					let type = $item[0].type;
					
					switch (type) {
						case "checkbox":
							value = value==null ? "" : value;
							if (typeof value === "number") {
								value = String(value);
							}
							value = value.split(",");
							
							for (let i=0; i<value.length; i++) {
								$form.find(':checkbox[name="'+key+'"][value="'+value[i]+'"]').attr("checked", true);
							}
							break;
						case "radio":
							$form.find(':radio[name="'+key+'"][value="'+value+'"]').attr("checked", true);
							
							// 如果没有值，默认选中
							if (!$form.find(':radio[name="'+key+'"]:checked').val() && defaultRadioChecked>0) {
								$form.find(':radio[name="'+key+'"]').each(function(i) {
									if ((i+1) == defaultRadioChecked) {
										$(this).attr("checked", true);
										return false;
									}
								});
							}
							break;
						case "select-one":
							$item.val(value);
							let selectId = $item.attr("id");
							if (!!selectId) {
								$("#input-"+selectId).val(info.getSelectText("#"+selectId));
							}
							break;
						default:
							if (!!value || value==0) {
								$item.val(value);
							}
							break;
					}
				}
				
				// 回调函数
				settings.callback({});
			},
			
			// cookie
			deleteCookie : function(key) {
				var exp = new Date();
				exp.setTime(exp.getTime() - 1);
				var cval = info.getCookie(key);
				if (cval!=null) {
					document.cookie = key + "=" + cval + "; path=/; expires=" + exp.toGMTString();
				}
			},
			getCookie : function(key) {
				var strArr = document.cookie.split("; ");
				for (let i=0; i<strArr.length; i++) {
					var temp = strArr[i].split("=");
					if (temp[0]==key) {
						return unescape(temp[1]);
					}
				}
				return "";
			},
			setCookie : function(key, value, time) {
				if (value.constructor === Object) {
					value = JSON.stringify(value);
				}
				if (!time) {
					document.cookie = key + "=" + escape(value) + "; path=/; expires=-1";
				} else {
					let days = parseInt(time);
					let exp = new Date();
					exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000);
					document.cookie = key + "=" + escape(value) + "; path=/; expires=" + exp.toGMTString();
				}
			},
			
			// localStorage
			deleteLocalStorage : function(key) {
				if (!!key) {
					localStorage.removeItem(key);
				} else {
					localStorage.clear();
				}
			},
			getLocalStorage : function(key) {
				return localStorage.getItem(key);
			},
			setLocalStorage : function(key, value) {
				if (value.constructor === Object) {
					value = JSON.stringify(value);
				}
				localStorage.setItem(key, value);
			},
			
			// sessionStorage
			deleteSessionStorage : function(key) {
				if (!!key) {
					sessionStorage.removeItem(key);
				} else {
					sessionStorage.clear();
				}
			},
			getSessionStorage : function(key) {
				return sessionStorage.getItem(key);
			},
			setSessionStorage : function(key, value) {
				if (value.constructor === Object) {
					value = JSON.stringify(value);
				}
				sessionStorage.setItem(key, value);
			},
			
			// 将null转为空字符串
			ifnull : function(str, replaceValue) {
				if (typeof str === "number") {
					return str;
				}
				
				if (replaceValue === undefined) {
					return (!str || str=="undefined") ? "" : str;
				} else {
					return (!str || str=="undefined") ? replaceValue : str;
				}
			},
			
			// 判断字符串是否是JSON格式
			isJSON : function(str) {
				if (typeof str === "string") {
					try {
						var obj = JSON.parse(str);
						if (typeof obj === "object" && obj) {
							return true;
						} else {
							return false;
						}
					} catch(e) {
						return false;
					}
				}
				
				return false;
			},
			
			// 生成一个不重复的id
			getUUID : function() {
				return Date.now().toString(36) + Math.random().toString(36).substr(3, 3);
			},
			
			// 数字选择器
			numChose : function(args) {
				var settings = defaults(args);
				var id = settings.id;
				var step = settings.step;
				var minValue = settings.minValue;
				var maxValue = settings.maxValue;
				
				var initValue = settings.initValue;
				if (!initValue) {
					initValue = $("#"+id).val();
				}
				$("#"+id).val(initValue);
				
				//添加左右加减号
				var wrapId = "javaex-numChose-wrap-" + id;
				var leftId = "javaex-numChose-left-" + id;
				var rightId = "javaex-numChose-right-" + id;
				
				$("#"+id).wrap('<div id="'+wrapId+'" class="javaex-numChose-wrap"></div>');
				$("#"+id).before('<span id="'+leftId+'" class="javaex-numChose-left" onselectstart="return false;">-</span>');
				$("#"+id).after('<span id="'+rightId+'" class="javaex-numChose-right" onselectstart="return false;">+</span>');
				
				// 点击减号
				$("#"+leftId).click(function() {
					var inputValue = $("#"+id).val();
					inputValue = Number(inputValue);
					var newValue = inputValue - step;
					if (newValue>=minValue) {
						$("#"+id).val(newValue);
						settings.decrCallback({
							"val" : newValue
						});
					}
				});
				
				// 点击加号
				$("#"+rightId).click(function() {
					var inputValue = $("#"+id).val();
					inputValue = Number(inputValue);
					var newValue = inputValue + step;
					if (newValue<=maxValue) {
						$("#"+id).val(newValue);
						settings.incrCallback({
							"val" : newValue
						});
					}
				});
			},
			
			// 单选
			radio : function() {
				$(":radio.javaex-fill").each(function() {
					// 判断是否已经渲染过了
					if ($(this).hasClass("javaex-rendered")) {
						return true;
					} else {
						$(this).addClass("javaex-rendered");
					}
					
					// 判断用户是否自己包裹了一层LABEL
					if ($(this).parent()[0].tagName=="LABEL") {
						$(this).parent().addClass("javaex-fill-label");
						// 先获取input之后的文本，保存起来
						var text = $(this)[0].nextSibling.nodeValue;
						// 清空input之后的文本
						$(this)[0].nextSibling.nodeValue = "";
					} else {
						// 先获取input之后的文本，保存起来
						var text = $(this)[0].nextSibling.nodeValue;
						// 清空input之后的文本
						$(this)[0].nextSibling.nodeValue = "";
						// 为input创建父节点
						$(this).wrap('<label class="javaex-fill-label"></label>');
					}
					
					if (!!text) {
						// 重新追加之前保存的input之后的文本
						text = text.replace(/(\s*$)/g, "");
						if (text.length==0) {
							$(this).parent().append('<span></span>');
						} else {
							$(this).parent().append('<span class="javaex-fill-text">' + text + '</span>');
						}
					}
					// 判断是否已存在span标签
					if ($(this).siblings().length==1) {
						$(this).after('<span class="javaex-fill-css javaex-radio-check"></span>');
					}
				});
			},
			
			// 伪单选
			fakeRadio : function(args) {
				var settings = defaults(args);
				var name = settings.name;
				var uncheckClass = settings.uncheckClass;
				var checkedClass = settings.checkedClass;
				
				$(':radio[name="'+name+'"]').each(function() {
					if ($(this).is(":checked")) {
						$(this).closest("label").addClass(checkedClass);
						if (settings.isInit) {
							settings.callback({
								"val" : $(this).val(),
								"text" : $(this)[0].nextSibling.nodeValue
							});
						}
					} else {
						$(this).closest("label").addClass(uncheckClass);
					}
				});
				
				$(':radio[name="'+name+'"]').change(function() {
					$(':radio[name="'+name+'"]').each(function() {
						$(this).closest("label").removeClass(checkedClass).addClass(uncheckClass);
					});
					$(this).closest("label").removeClass(uncheckClass).addClass(checkedClass);
					settings.callback({
						"val" : $(this).val(),
						"text" : $(this)[0].nextSibling.nodeValue
					});
				});
			},
			
			// 复选框
			checkbox : function() {
				$(":checkbox.javaex-fill").each(function() {
					// 判断是否已经渲染过了
					if ($(this).hasClass("javaex-rendered")) {
						return true;
					} else {
						$(this).addClass("javaex-rendered");
					}
					// 判断用户是否自己包裹了一层LABEL
					if ($(this).parent()[0].tagName=="LABEL") {
						$(this).parent().addClass("javaex-fill-label");
						// 先获取input之后的文本，保存起来
						var text = $(this)[0].nextSibling.nodeValue;
						// 清空input之后的文本
						$(this)[0].nextSibling.nodeValue = "";
					} else {
						// 先获取input之后的文本，保存起来
						var text = $(this)[0].nextSibling.nodeValue;
						// 清空input之后的文本
						$(this)[0].nextSibling.nodeValue = "";
						// 为input创建父节点
						$(this).wrap('<label class="javaex-fill-label"></label>');
					}
					
					if (!!text) {
						// 重新追加之前保存的input之后的文本
						text = text.replace(/(\s*$)/g, "");
						if (text.length==0) {
							$(this).parent().append('<span></span>');
						} else {
							$(this).parent().append('<span class="javaex-fill-text">' + text + '</span>');
						}
					}
					// 判断是否已存在span标签
					if ($(this).siblings().length==1) {
						$(this).after('<span class="javaex-fill-css icon-check"></span>');
					}
				});
			},
			
			// 监听复选框的点击事件
			checkboxCheck : function($this) {
				if ($this.is(":checked")) {
					$this.parent(".javaex-fill-label").addClass("javaex-checkbox-checked");
				} else {
					$this.parent(".javaex-fill-label").removeClass("javaex-checkbox-checked");
				}
				
				var listen = $this.attr("listen");
				if (listen === undefined) {
					return true;
				}
				
				// 提取key
				var listenKey = listen.replace(listen.split("-")[0]+"-", "");
				var keyArr = listenKey.split("-");
				
				// 判断当前点击的复选框的选中状态
				if ($this.is(":checked")) {
					// 当前级别的复选框的选中个数
					var num = 0;
					// 选中时
					$(":checkbox.javaex-fill").each(function() {
						let listenNext = $(this).attr("listen");
						if (listenNext === undefined) {
							return true;
						}
						
						// 让子级复选框全部选中
						if (listenNext!=listen && listenNext.indexOf(listen)>=0) {
							// 跳过禁用的
							if (!$(this).attr("disabled")) {
								$(this).attr("checked", true);
								$(this).parent(".javaex-fill-label").addClass("javaex-checkbox-checked");
								
								// 设置选择图标为对勾（树形菜单专用）
								$(this).next("span.icon-stop").removeClass("icon-stop").addClass("icon-check");
							}
						}
						if (listenNext==listen) {
							if ($(this).is(":checked") || $(this).attr("disabled")) {
								num++;
							}
						}
					});
					
					// 判断当前级别的复选框是否已全部选中
					if (num == $('[listen="'+listen+'"]').length) {
						// 自动选中父级
						var parentListen = listen.replace("-" + keyArr[keyArr.length - 1], "");
						if ((parentListen.split("-").length - 1) == 1) {
							// 遍历listen-X-?
							var flag = true;
							for (let i=1; i<=10; i++) {
								let temp = parentListen + "-" + i;
								if ($('[listen="'+temp+'"]').length>0 && !$('[listen="'+temp+'"]').is(":checked")) {
									flag = false;
								}
							}
							
							if (flag) {
								$(":checkbox.javaex-fill").each(function() {
									if ($(this).attr("listen") == parentListen) {
										$(this).attr("checked", true);
										$(this).parent(".javaex-fill-label").addClass("javaex-checkbox-checked");
										return false;
									}
								});
							}
						} else {
							$(":checkbox.javaex-fill").each(function() {
								if ($(this).attr("listen") == parentListen) {
									$(this).attr("checked", true);
									$(this).parent(".javaex-fill-label").addClass("javaex-checkbox-checked");
									return false;
								}
							});
							
							parentListen = parentListen.substring(0, parentListen.length - 2);
							var flag = true;
							for (let i=1; i<=10; i++) {
								let temp = parentListen + "-" + i;
								if ($('[listen="'+temp+'"]').length.length>0 && !$('[listen="'+temp+'"]').length.is(":checked")) {
									flag = false;
								}
							}
							if (flag) {
								$(":checkbox.javaex-fill").each(function() {
									if ($(this).attr("listen") == parentListen) {
										$(this).attr("checked", true);
										$(this).parent(".javaex-fill-label").addClass("javaex-checkbox-checked");
										return false;
									}
								});
							}
						}
					}
				}
				// 未选中时
				else {
					$(":checkbox.javaex-fill").each(function() {
						let listenNext = $(this).attr("listen");
						if (listenNext === undefined) {
							return true;
						}
						
						// 让子级复选框全部取消选中
						if (listenNext!=listen && listenNext.indexOf(listen)>=0) {
							$(this).attr("checked", false);
							$(this).parent(".javaex-fill-label").removeClass("javaex-checkbox-checked");
						}
						// 让父级复选框全部取消选中
						var parentListen = "listen";
						for (let i=0; i<keyArr.length; i++) {
							if (keyArr[i] != keyArr[keyArr.length - 1]) {
								parentListen += "-";
								parentListen += keyArr[i];
								if (listenNext==parentListen) {
									$(this).attr("checked", false);
									$(this).parent(".javaex-fill-label").removeClass("javaex-checkbox-checked");
								}
							}
						}
					});
				}
			},
			listenCheckbox : function(args) {
				var settings = defaults(args);
				
				$(document).on("click", ":checkbox.javaex-fill", function() {
					info.checkboxCheck($(this));
					settings.callback({});
				});
			},
			
			// 伪多选
			fakeCheckbox : function(args) {
				var settings = defaults(args);
				var name = settings.name;
				var uncheckClass = settings.uncheckClass;
				var checkedClass = settings.checkedClass;
				
				$(':checkbox[name="'+name+'"]').each(function() {
					if ($(this).is(":checked")) {
						$(this).parent("label").addClass(checkedClass);
					} else {
						$(this).parent("label").addClass(uncheckClass);
					}
				});
				
				$(':checkbox[name="'+name+'"]').change(function() {
					if ($(this).is(":checked")) {
						$(this).closest("label").removeClass(uncheckClass).addClass(checkedClass);
					} else {
						$(this).closest("label").removeClass(checkedClass).addClass(uncheckClass);
					}
				});
			},
			
			// 倒计时获取验证码
			timerId : null,
			code : function(args) {
				var settings = defaults(args);
				var id = settings.id;
				var second = parseInt(settings.second);
				var $id = $("#"+id);
				
				if (settings.type=="reset") {
					// 解禁
					clearInterval(info.timerId);
					
					$id.removeClass("javaex-code-disabled");
					$id.text(settings.text);
					second = parseInt(settings.second);
				} else {
					setTimer();
					
					function setTimer() {
						// 设置禁用
						$id.addClass("javaex-code-disabled");
						
						$id.text(second + "秒后重试");
						// 启动定时器
						info.timerId = setInterval(function() {
							second = second - 1;
							if (second>0) {
								$id.text(second + "秒后重试");
							} else {
								// 解禁
								clearInterval(info.timerId);
								$id.removeClass("javaex-code-disabled");
								$id.text(settings.text);
								second = parseInt(settings.second);
							}
						}, 1000);
					}
				}
			},
			
			// 树形菜单
			tree : function(args) {
				var settings = defaults(args);
				var id = settings.id;
				var jsonData = settings.dataList;
				var checkbox = settings.checkbox;
				var icon = settings.icon;
				var withoutNodeArr = settings.withoutNodeArr;
				var flag = false;    // 自定义图标
				var nodeListen = "listen-" + id + "1-2";
				
				var html = '';
				if (settings.isShowAllCheck) {
					let allListen =  "listen-" + id + "1";
					html += '<input type="checkbox" name="javaex-all-check" class="javaex-fill" listen="' + allListen + '"/> 全选';
				}
				if (parseInt(settings.type)==1) {
					tree(jsonData);
				} else {
					tree2(jsonData);
				}
				$("#"+id).empty();
				$("#"+id).append(html);
				
				function tree(jsonData, nodeIndex) {
					if (jsonData.length>0) {
						if (!nodeIndex) {
							nodeIndex = 1;
						}
						html += '<ul>';
						$.each(jsonData, function(i, data) {
							if (!!data.children && data.children.length>0) {
								if (data.open) {
									html += '<li class="javaex-tree-parent-li" open="true">';
								} else {
									html += '<li class="javaex-tree-parent-li">';
								}
								html += '<span class="javaex-tree-icon icon-caret-right"></span>';
								if (checkbox) {
									if (data.checked) {
										html += '<input type="checkbox" class="javaex-fill" listen="'+nodeListen+'" node="'+nodeIndex+'" name="javaex-tree" value="'+data.id+'" checked/> ';
									} else {
										html += '<input type="checkbox" class="javaex-fill" listen="'+nodeListen+'" node="'+nodeIndex+'" name="javaex-tree" value="'+data.id+'" /> ';
									}
								}
								html += '<a href="javascript:;" node="'+nodeIndex+'" javaex-menu-id="'+data.id+'">';
								if (icon) {
									if (!!data.icon) {
										flag = true;
										html += '<span class="javaex-tree-icon '+data.icon+'"></span>';
									} else {
										html += '<span class="javaex-tree-icon icon-folder"></span>';
									}
								}
								html += data.name+'</a>';
								tree(data.children, (nodeIndex+1));
							} else {
								html += '<li class="javaex-tree-child-li">';
								if (checkbox) {
									if (data.checked) {
										html += '<input type="checkbox" class="javaex-fill" listen="'+nodeListen+'" node="'+nodeIndex+'" name="javaex-tree" value="'+data.id+'" checked/> ';
									} else {
										html += '<input type="checkbox" class="javaex-fill" listen="'+nodeListen+'" node="'+nodeIndex+'" name="javaex-tree" value="'+data.id+'" /> ';
									}
								}
								if (!data.url || settings.isAllowJumpUrl==false) {
									html += '<a href="javascript:;" node="'+nodeIndex+'" javaex-menu-id="'+data.id+'">';
								} else {
									html += '<a href="'+data.url+'" node="'+nodeIndex+'" javaex-menu-id="'+data.id+'">';
								}
								if (icon) {
									if (!!data.icon) {
										flag = true;
										html += '<span class="javaex-tree-icon '+data.icon+'"></span>';
									} else {
										html += '<span class="javaex-tree-icon icon-folder"></span>';
									}
								}
								html += data.name+'</a>';
								html += '</li>';
							}
						});
						html += '</ul>';
					}
				}
				
				/**
				 * 如果采用第二种数据类型，则系统自动重新生成第一种数据结构
				 */
				function tree2(jsonData) {
					if (jsonData.length>0) {
						var jsonArr = new Array();
						$.each(jsonData, function(i, data) {
							if (parseInt(data.parentId)<1) {
								var childrenArr = addChild(jsonData, data.id);
								data.children = childrenArr;
								jsonArr.push(data);
							}
						});
						tree(jsonArr);
					}
				}
				function addChild(jsonData, parentId) {
					var childArr = new Array();
					for (let i=0; i<jsonData.length; i++) {
						if (jsonData[i].parentId==parentId) {
							var childrenArr = addChild(jsonData, jsonData[i].id);
							jsonData[i].children = childrenArr;
							childArr.push(jsonData[i]);
						}
					}
					return childArr;
				}
				
				if (checkbox) {
					// 渲染复选框
					info.checkbox();
					
					if (settings.isShowAllCheck) {
						// 监听复选框全选点击事件
						$('#'+id+' :checkbox[name="javaex-all-check"]').click(function() {
							if ($(this).is(":checked")) {
								callbackAll();
							} else {
								settings.checkboxCallback({
									"idArr" : []
								});
							}
						});
					}
					
					// 初始化修改复选框状态
					$('#'+id+' :checkbox[name="javaex-tree"]:checked').each(function() {
						if ($(this).parent().parent("li").attr("class")=="javaex-tree-child-li") {
							changeCheckBoxStatus($(this));
						}
					});
					
					// 监听复选框的点击事件
					$('#'+id+' :checkbox[name="javaex-tree"]').click(function() {
						changeCheckBoxStatus($(this));
						callback();
					});
				}
				
				// 初始化自动调用回调函数
				if (settings.isInit) {
					callback();
				}
				
				// 加载完毕
				settings.callback();
				
				/**
				 * 改变复选框的状态
				 * obj : 当前复选框对象
				 */
				function changeCheckBoxStatus(obj) {
					// 如果是原生的复选框，则直接返回
					if (!obj.attr("class")) {
						return;
					}
					
					// 判断是否是父节点（含有子节点）
					var parentLi = obj.parent().parent();
					if (parentLi.hasClass("javaex-tree-parent-li")) {
						// 获取当前兄弟li的个数（包括自身）
						var sibLen = parentLi.siblings().length + 1;
						var checkedNum = 0;
						obj.siblings("span.icon-stop").removeClass("icon-stop").addClass("icon-check");
						if (obj.is(":checked")) {
							checkedNum++;
							// 选中时，其下子节点全部选中
							parentLi.find("label").find("span.icon-stop").removeClass("icon-stop").addClass("icon-check");
							parentLi.find(":checkbox").attr("checked", true);
							// 添加背景色
							obj.parent().parent("li").addClass("checked");
						} else {
							// 未选中时，其下子节点全部取消选中
							parentLi.find(":checkbox").attr("checked", false);
							// 取消背景色
							obj.parent().parent("li").removeClass("checked");
						}
						// 遍历当前同一级别复选框选中个数
						parentLi.siblings("li").children("label").find(":checkbox").each(function() {
							if ($(this).is(":checked") && $(this).siblings("span.icon-check").length>0) {
								checkedNum++;
							}
						});
						
						var objLi = parentLi.parent().parent("li.javaex-tree-parent-li");
						if (objLi.length>0) {
							// 判断选中个数
							if (checkedNum==sibLen) {
								// 全部选中，让其父级也自动选中
								objLi.children("label").find("span.icon-stop").removeClass("icon-stop").addClass("icon-check");
								objLi.children("label").find(":checkbox").attr("checked", true);
								// 添加背景色
								objLi.addClass("checked");
							} else if (checkedNum==0) {
								// 全部未选中，让其父级也自动取消选中
								objLi.children("label").find(":checkbox").attr("checked", false);
								// 取消背景色
								objLi.removeClass("checked");
							} else {
								// 部分选中，让其父级呈现半选中状态
								objLi.children("label").find("span.icon-check").removeClass("icon-check").addClass("icon-stop");
								objLi.children("label").find(":checkbox").attr("checked", true);
								// 取消背景色
								objLi.removeClass("checked");
							}
							
							// 修改父级节点复选框的选中状态
							changeParentCheckBoxStatus(objLi);
						}
					} else {
						// 获取当前兄弟li的个数（包括自身）
						var sibLen = parentLi.siblings().length + 1;
						var checkedNum = 0;
						// 判断自身是否选中
						if (obj.is(":checked")) {
							checkedNum++;
							// 添加背景色
							obj.parent().parent("li").addClass("checked");
						} else {
							// 添加背景色
							obj.parent().parent("li").removeClass("checked");
						}
						// 遍历当前同一级别复选框选中个数
						parentLi.siblings("li").children("label").find(":checkbox").each(function() {
							if ($(this).is(":checked") && $(this).siblings("span.icon-check").length>0) {
								checkedNum++;
							}
						});
						
						var objLi = parentLi.parent().parent("li.javaex-tree-parent-li");
						if (objLi.length>0) {
							// 判断选中个数
							if (checkedNum==sibLen) {
								// 子级全部选中，让其父级也自动选中
								objLi.children("label").find("span.icon-stop").removeClass("icon-stop").addClass("icon-check");
								objLi.children("label").find(":checkbox").attr("checked", true);
								// 添加背景色
								objLi.addClass("checked");
							} else if (checkedNum==0) {
								// 子级全部未选中，让其父级也自动取消选中
								objLi.children("label").find(":checkbox").attr("checked", false);
								// 取消背景色
								objLi.removeClass("checked");
							} else {
								// 子级部分选中，让其父级呈现半选中状态
								objLi.children("label").find("span.icon-check").removeClass("icon-check").addClass("icon-stop");
								objLi.children("label").find(":checkbox").attr("checked", true);
								// 取消背景色
								objLi.removeClass("checked");
							}
							
							// 修改父级节点复选框的选中状态
							changeParentCheckBoxStatus(objLi);
						}
					}
				}
				
				/**
				 * 改变父节点复选框的状态
				 * obj : 父节点li对象
				 */
				function changeParentCheckBoxStatus(obj) {
					// 标识是否存在半选中的，true代表有半选中的
					var flag = false;
					// 获取当前兄弟li的个数（包括自身）
					var sibLen = obj.siblings().length + 1;
					var checkedNum = 0;
					var thisCheckBox = obj.children("label").find(":checkbox");
					if (thisCheckBox.is(":checked")) {
						checkedNum++;
						if (thisCheckBox.siblings("span.icon-check").length==0) {
							flag = true;
						}
					} else {
						// 未选中时，其下子节点全部取消选中
						obj.find(":checkbox").attr("checked", false);
					}
					// 遍历当前同一级别复选框选中个数
					obj.siblings("li").children("label").find(":checkbox").each(function() {
						if ($(this).is(":checked")) {
							checkedNum++;
							if ($(this).siblings("span.icon-check").length==0) {
								flag = true;
							}
						}
					});
					
					var objLi = obj.parent().parent("li.javaex-tree-parent-li");
					if (objLi.length>0) {
						// 判断选中个数
						if (checkedNum==sibLen) {
							if (flag) {
								// 部分选中，让其父级呈现半选中状态
								objLi.children("label").find("span.icon-check").removeClass("icon-check").addClass("icon-stop");
								objLi.children("label").find(":checkbox").attr("checked", true);
							} else {
								// 全部选中，让其父级也自动选中
								objLi.children("label").find("span.icon-stop").removeClass("icon-stop").addClass("icon-check");
								objLi.children("label").find(":checkbox").attr("checked", true);
							}
						} else if (checkedNum==0) {
							// 全部未选中，让其父级也自动取消选中
							objLi.children("label").find(":checkbox").attr("checked", false);
							// 取消背景色
							objLi.removeClass("checked");
						} else {
							// 部分选中，让其父级呈现半选中状态
							objLi.children("label").find("span.icon-check").removeClass("icon-check").addClass("icon-stop");
							objLi.children("label").find(":checkbox").attr("checked", true);
						}
						// 递归
						changeParentCheckBoxStatus(objLi);
					}
				}
				
				/**
				 * 回调函数。获取所有选中的复选框的值
				 */
				function callback() {
					var idArr = new Array();
					
					$('#'+id+' :checkbox[name="javaex-tree"]:checked').each(function(i) {
						if ((withoutNodeArr==null || $.inArray(parseInt($(this).attr("node")), withoutNodeArr)==-1)) {
							idArr.push($(this).val());
						}
					});
					
					settings.checkboxCallback({
						"idArr" : idArr
					});
				}
				
				function callbackAll() {
					var idArr = new Array();
					
					$('#'+id+' :checkbox[name="javaex-tree"]').each(function(i) {
						if ((withoutNodeArr==null || $.inArray(parseInt($(this).attr("node")), withoutNodeArr)==-1)) {
							idArr.push($(this).val());
						}
					});
					
					settings.checkboxCallback({
						"idArr" : idArr
					});
				}
				
				// 初始化全部闭合
				if (settings.isClose) {
					$("#"+id+" li.javaex-tree-parent-li").find("ul>li").hide();
				} else {
					$("#"+id+" .javaex-tree-icon.icon-caret-right").addClass("icon-caret-down").removeClass("icon-caret-right");
				}
				
				// 添加图标
				if (icon && !flag) {
					$("#"+id+" li").each(function() {
						if ($(this).hasClass("javaex-tree-child-li")) {
							$(this).find(">a>span").addClass("icon-document-alt-fill").removeClass("icon-folder");
						}
					});
				}
				// 判断哪些默认开启
				$("#"+id+" li.javaex-tree-parent-li").each(function() {
					if ($(this).attr("open")) {
						$(this).children("span").addClass("icon-caret-down").removeClass("icon-caret-right");
						if (icon && !flag) {
							$(this).children("a").children("span").addClass("icon-folder-open").removeClass("icon-folder");
						}
						$(this).children("ul").find(">li").show();
					}
				});
				// 高亮点击的菜单
				$("#"+id+" li a").on("click", function(e) {
					$("#"+id+" li a").removeClass("on");
					$(this).addClass("on");
					
					// 回调函数
					settings.aCallback({
						"node" : $(this).attr("node"),
						"id" : $(this).attr("javaex-menu-id"),
						"name" : $(this).text()
					});
				});
				// 点击父节点（其下有子节点）事件
				$("#"+id+" li.javaex-tree-parent-li>span").on("click", function(e) {
					var children = $(this).siblings("ul").find(">li");
					// 判断是否闭合状态
					if (children.is(":hidden")) {
						$(this).addClass("icon-caret-down").removeClass("icon-caret-right");
						if (icon && !flag) {
							$(this).siblings("a").children("span").addClass("icon-folder-open").removeClass("icon-folder");
						}
						children.show("fast");
					} else {
						$(this).addClass("icon-caret-right").removeClass("icon-caret-down");
						if (icon && !flag) {
							$(this).siblings("a").children("span").addClass("icon-folder").removeClass("icon-folder-open");
						}
						children.hide("fast");
					}
					e.stopPropagation();
				});
			},
			
			// 进度条
			progress : function(args) {
				var settings = defaults(args);
				var percent = parseInt(settings.percent);
				var id = settings.id;
				$progress = $("#"+id);
				
				if (settings.isShowPercent) {
					$progress.html("<span>"+percent+"%</span>");
				} else {
					$progress.html(" ");
				}
				
				if ($progress.width() < 1) {
					$progress.css({
						"width" : percent+"%",
						"transition" : "width 0.8s 0.1s"
					});
				} else {
					$progress.css({
						"width" : percent+"%"
					});
				}
			},
			
			// 图片懒加载
			lazyload : function(args) {
				var settings = defaults(args);
				var selector = settings.selector;
				var elements = $(selector);
				var effect = settings.effect;
				if (!effect) {
					effect = "fadeIn";
				}
				
				// 强制初始检查图像是否应显示
				$(document).ready(function() {
					$(settings.container).trigger(settings.event);
					checkImage();
				});
				// 窗口调整大小时重新检查
				$(window).bind("resize", function() {
					checkImage();
				});
				
				// 将容器缓存为jquery作为对象
				$container = (settings.container === undefined || settings.container === window) ? $(window) : $(settings.container);
				
				// 每个滚动触发一个滚动事件
				if (0 === settings.event.indexOf("scroll")) {
					$container.bind(settings.event, function() {
						return checkImage();
					});
				}
				
				elements.each(function() {
					var self = this;
					var $self = $(self);
					
					self.loaded = false;
					
					// 如果没有给定的src属性
					if (!$self.attr("src")) {
						if ($self.is("img")) {
							$self.attr("src", settings.placeholder);
						}
					}
					
					// 当触发显示时，加载原始图像
					$self.one("appear", function() {
						if (!this.loaded) {
							if (settings.appear) {
								var elements_left = elements.length;
								settings.appear.call(self, elements_left, settings);
							}
							$("<img />").bind("load", function() {
								var original = $self.attr(settings.dataOriginal);
								$self.hide();
								if ($self.is("img")) {
									$self.attr("src", original);
								} else {
									$self.css("background-image", "url('" + original + "')");
								}
								$self[effect](400);
								
								self.loaded = true;
								// 删除占位属性
								$self.removeAttr(settings.dataOriginal);
								
								// 从数组中删除图像，以便下次不循环
								var temp = $.grep(elements, function(element) {
									return !element.loaded;
								});
								elements = $(temp);
								
								if (settings.load) {
									var elements_left = elements.length;
									settings.load.call(self, elements_left, settings);
								}
							}).attr("src", $self.attr(settings.dataOriginal));
						}
					});
					
					$(window).trigger("scroll");
				});
				
				/**
				 * 检查图像是否应显示
				 */
				function checkImage() {
					var counter = 0;
					
					elements.each(function() {
						var $this = $(this);
						// 跳过隐藏图片
						if (!$this.is(":visible")) {
							return;
						}
						if (abovethetop(this, settings) || leftofbegin(this, settings)) {
							// 无操作
						} else if (!belowthefold(this, settings) && !rightoffold(this, settings)) {
							$this.trigger("appear");
							// 如果找到要加载的图像，请重置计数器
							counter = 0;
						} else {
							if (++counter > 0) {
								return false;
							}
						}
					});
				}
				
				// 在窗口下方
				function belowthefold(element, settings) {
					var fold;
					
					if (settings.container === undefined || settings.container === window) {
						fold = (window.innerHeight ? window.innerHeight : $(window).height()) + $(window).scrollTop();
					} else {
						fold = $(settings.container).offset().top + $(settings.container).height();
					}
					
					return fold <= $(element).offset().top - settings.threshold;
				};
				// 在窗口右方
				function rightoffold(element, settings) {
					var fold;
					
					if (settings.container === undefined || settings.container === window) {
						fold = $(window).width() + $(window).scrollLeft();
					} else {
						fold = $(settings.container).offset().left + $(settings.container).width();
					}
					
					return fold <= $(element).offset().left - settings.threshold;
				};
				// 在窗口上方
				function abovethetop(element, settings) {
					var fold;
					
					if (settings.container === undefined || settings.container === window) {
						fold = $(window).scrollTop();
					} else {
						fold = $(settings.container).offset().top;
					}
					
					return fold >= $(element).offset().top + settings.threshold  + $(element).height();
				};
				// 在窗口左方
				function leftofbegin(element, settings) {
					var fold;
					
					if (settings.container === undefined || settings.container === window) {
						fold = $(window).scrollLeft();
					} else {
						fold = $(settings.container).offset().left;
					}
					
					return fold >= $(element).offset().left + settings.threshold + $(element).width();
				};
			},
			
			// 得到系统时间
			/**
			 * 格式化数字，不足10，补0
			 */
			add0 : function(num) {
				return (num>=0 && num<=9) ? ("0" + num) : num;
			},
			// 返回今日日期，格式yyyy-MM-dd
			getToday : function() {
				var date = new Date();
				var year = date.getFullYear();
				var month = date.getMonth() + 1;
				var day = date.getDate();
				
				return year + "-" + info.add0(month) + "-" + info.add0(day);
			},
			getDay : function() {
				return new Date().getDate();
			},
			getMonth : function() {
				return new Date().getMonth() + 1;
			},
			getYear : function() {
				return new Date().getFullYear();
			},
			// 返回星期：1-7
			getWeek : function() {
				var week = new Date().getDay();
				return week==0 ? 7 : week;
			},
			// 返回当前时间，格式yyyy-MM-dd HH:mm:ss
			now : function() {
				var date = new Date();
				var year = date.getFullYear();
				var month = date.getMonth() + 1;
				var day = date.getDate();
				
				return year + "-" + info.add0(month) + "-" + info.add0(day) + " " + info.add0(date.getHours()) + ":" + info.add0(date.getMinutes()) + ":" + info.add0(date.getSeconds());
			},
			/**
			 * 格式化时间戳
			 *     timestamp ：时间戳，支持秒和毫秒
			 *     fmt       : 格式化。 例如：yyyy-MM-dd HH:mm:ss
			 */
			dateFormat : function(timestamp, fmt) {
				var timestampStr = info.ifnull(timestamp);
				if (!timestampStr) {
					return false;
				}
				
				var date = (String(timestamp).length>10) ? new Date(timestamp) : new Date(timestamp * 1000);
				return doDateFormat(date, fmt);
				
				function doDateFormat(date, fmt) {
					var o = { 
						"M+" : date.getMonth()+1, //月份
						"d+" : date.getDate(), //日
						"h+" : date.getHours()%12 == 0 ? 12 : date.getHours()%12, //小时
						"H+" : date.getHours(), //小时
						"m+" : date.getMinutes(), //分
						"s+" : date.getSeconds(), //秒
						"q+" : Math.floor((date.getMonth()+3)/3), //季度
						"S" : date.getMilliseconds() //毫秒
					}; 
					var week = { 
						"0" : "/u65e5", 
						"1" : "/u4e00", 
						"2" : "/u4e8c", 
						"3" : "/u4e09", 
						"4" : "/u56db", 
						"5" : "/u4e94", 
						"6" : "/u516d"
					};
					if (/(y+)/.test(fmt)) {
						fmt = fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));
					} 
					if (/(E+)/.test(fmt)) {
						fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length>1) ? (RegExp.$1.length>2 ? "/u661f/u671f" : "/u5468") : "")+week[date.getDay()+""]);
					} 
					for (var k in o) {
						if (new RegExp("("+ k +")").test(fmt)) {
							fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
						}
					}

					return fmt;
				}
			},
			
			/* 
			 * 获得时间差
			 * startTime : 开始时间（时间格式为 yyyy-MM-dd HH:mm:ss 例如：2018-06-21 00:00:00）
			 * endTime : 结束时间（时间格式为 yyyy-MM-dd HH:mm:ss 例如：2018-06-21 00:00:00）
			 * type : 返回精度（second，minute，hour，day）
			 */
			getTimeDiff : function(startTime, endTime, type) {
				//将xxxx-xx-xx的时间格式，转换为 xxxx/xx/xx的格式
				startTime = startTime.replace(/\-/g, "/");
				endTime = endTime.replace(/\-/g, "/");
				//将计算间隔类性字符转换为小写
				type = type.toLowerCase();
				var sTime = new Date(startTime);//开始时间
				var eTime = new Date(endTime);	//结束时间
				
				// 作为除数的数字
				var divNum = 1;
				switch (type) {
					case "second":
						divNum = 1000;
						break;
					case "minute":
						divNum = 1000 * 60;
						break;
					case "hour":
						divNum = 1000 * 3600;
						break;
					case "day":
						divNum = 1000 * 3600 * 24;
						break;
					default:
						break;
				}
				var diff = parseInt((eTime.getTime() - sTime.getTime()) / parseInt(divNum));
				
				return diff > 0 ? diff : 0;
			},
			
			// 评论
			comment : function(args) {
				var settings = defaults(args);
				var id = settings.id;
				var list = settings.list;
				var url = settings.url;
				var commentMapping = settings.commentMapping;
				var replyMapping = settings.replyMapping;
				var defaultAvatar = settings.defaultAvatar;
				var curUserAvatar = defaultAvatar;
				var user = settings.user;
				if (user!=null && user.avatar) {
					curUserAvatar = user.avatar;
				}
				
				var commentId = settings.commentId;
				
				// 必须重新赋值，不然无法传递该参数
				attribute = args;
				
				var html = '';
				
				// 加载更多回复
				if (commentId) {
					var replyList = settings.replyList;
					for (let j=0; j<replyList.length; j++) {
						html += '<li>';
						html += '<div class="javaex-comment-c-item">';
						html += '<div class="javaex-comment-left">';
						html += '<div class="javaex-avatar30">';
						if (!replyList[j][replyMapping.avatar]) {
							html += '<a href="'+url+replyList[j][replyMapping.userId]+'" target="_blank" style="display: block;"><img src="'+defaultAvatar+'" class="face" /></a>';
						} else {
							html += '<a href="'+url+replyList[j][replyMapping.userId]+'" target="_blank" style="display: block;"><img src="'+replyList[j][replyMapping.avatar]+'" class="face" /></a>';
						}
						html += '</div>';
						html += '</div>';
						html += '<div class="javaex-comment-right l40">';
						html += '<div class="javaex-comment-c-conent"><a class="javaex-comment-c-replyer" href="'+url+replyList[j][replyMapping.userId]+'" target="_blank">'+replyList[j][replyMapping.username]+'</a><input type="hidden" value="'+replyList[j][replyMapping.userId]+'" />';
						if (!!replyList[j][replyMapping.toUserId]) {
							html += '<span class="javaex-comment-c-reply">回复</span>';
							html += '<a class="javaex-comment-c-replyer" href="'+url+replyList[j][replyMapping.toUserId]+'" target="_blank">'+replyList[j][replyMapping.toUsername]+'</a>';
						}
						html += '<span class="javaex-comment-c-text">：                    '+replyList[j][replyMapping.content]+'</span>';
						html += '</div>';
						html += '<div class="javaex-comment-bottom">';
						html += '<span class="javaex-comment-time change-time">'+info.dateFormat(replyList[j][replyMapping.time], "yyyy-MM-dd HH:mm:ss")+'</span>';
						html += '<a href="javascript:;" onclick="javaex.javaexShowReplyTextarea2(this, attribute)"><i class="javaex-icon-comment icon-chat_bubble_outline"></i></a>';
						html += '</div>';
						html += '</div>';
						html += '</div>';
						html += '</li>';
					}
					
					var tempCommentId = "javaex-comment-reply_" + commentId;
					var $tempCommentId = $("#"+tempCommentId);
					if ($tempCommentId.children("li").length < 10) {
						$tempCommentId.html(html);
					} else {
						$tempCommentId.append(html);
					}
				}
				// 初始化
				else {
					html += '<div class="javaex-section-hd"><img src="'+curUserAvatar+'" class="javaex-avatar-img"></div>';
					html += '<div class="javaex-comment-form">';
					html += '<div class="javaex-comment-form-textwrap"><textarea wrap="virtual" class="javaex-comment-textarea original" placeholder="我来说两句..."></textarea></div>';
					html += '<div style="text-align:right;"><button class="javaex-btn javaex-comment-submit" onclick="javaex.javaexComment(this, attribute)">发布</button></div>';
					html += '</div>';
					html += '<div class="javaex-comment-count-title">全部评论<span>('+settings.commentCount+')</span></div>';
					html += '<ul class="javaex-comment-ul">';
					for (let i=0; i<list.length; i++) {
						var commentId = list[i][commentMapping.commentId];
						
						html += '<li id="'+commentId+'">';
						html += '<div class="javaex-comment-left">';
						html += '<div class="javaex-avatar60">';
						if (!list[i][commentMapping.avatar]) {
							html += '<a href="'+url+list[i][commentMapping.userId]+'" target="_blank" style="display: block;"><img src="'+defaultAvatar+'" class="face" /></a>';
						} else {
							html += '<a href="'+url+list[i][commentMapping.userId]+'" target="_blank" style="display: block;"><img src="'+list[i][commentMapping.avatar]+'" class="face" /></a>';
						}
						html += '</div>';
						html += '</div>';
						html += '<div class="javaex-comment-right">';
						html += '<div class="javaex-comment-title"><a class="javaex-comment-author" href="'+url+list[i][commentMapping.userId]+'" target="_blank">'+list[i][commentMapping.username]+'</a><input type="hidden" value="'+list[i][commentMapping.userId]+'" /></div>';
						html += '<div class="javaex-comment-conent">'+list[i][commentMapping.content]+'</div>';
						html += '<div class="javaex-comment-bottom">';
						html += '<span class="javaex-comment-time change-time">'+info.dateFormat(list[i][commentMapping.time], "yyyy-MM-dd HH:mm:ss")+'</span>';
						html += '<a href="javascript:;" onclick="javaex.javaexShowReplyTextarea1(this, attribute)"><i class="javaex-icon-comment icon-chat_bubble_outline"></i></a>';
						html += '</div>';
						
						var replyList = list[i][commentMapping.replyList];
						var replyLen = replyList.length;
						if (replyLen>0) {
							let tempCommentId = "javaex-comment-reply_" + commentId;
							
							var replyNum = list[i][commentMapping.replyNum];
							replyNum = replyNum ? parseInt(replyNum) : 0;
							info.setSessionStorage(tempCommentId, replyNum);
							
							html += '<div class="javaex-comment-posrs">';
							html += '<ul id="'+tempCommentId+'" class="javaex-comment-reply clear">';
							for (let j=0; j<replyLen; j++) {
								html += '<li>';
								html += '<div class="javaex-comment-c-item">';
								html += '<div class="javaex-comment-left">';
								html += '<div class="javaex-avatar30">';
								if (!replyList[j][replyMapping.avatar]) {
									html += '<a href="'+url+replyList[j][replyMapping.userId]+'" target="_blank" style="display: block;"><img src="'+defaultAvatar+'" class="face" /></a>';
								} else {
									html += '<a href="'+url+replyList[j][replyMapping.userId]+'" target="_blank" style="display: block;"><img src="'+replyList[j][replyMapping.avatar]+'" class="face" /></a>';
								}
								html += '</div>';
								html += '</div>';
								html += '<div class="javaex-comment-right l40">';
								html += '<div class="javaex-comment-c-conent"><a class="javaex-comment-c-replyer" href="'+url+replyList[j][replyMapping.userId]+'" target="_blank">'+replyList[j][replyMapping.username]+'</a><input type="hidden" value="'+replyList[j][replyMapping.userId]+'" />';
								if (!!replyList[j][replyMapping.toUserId]) {
									html += '<span class="javaex-comment-c-reply">回复</span>';
									html += '<a class="javaex-comment-c-replyer" href="'+url+replyList[j][replyMapping.toUserId]+'" target="_blank">'+replyList[j][replyMapping.toUsername]+'</a>';
								}
								html += '<span class="javaex-comment-c-text">：                    '+replyList[j][replyMapping.content]+'</span>';
								html += '</div>';
								html += '<div class="javaex-comment-bottom">';
								html += '<span class="javaex-comment-time change-time">'+info.dateFormat(replyList[j][replyMapping.time], "yyyy-MM-dd HH:mm:ss")+'</span>';
								html += '<a href="javascript:;" onclick="javaex.javaexShowReplyTextarea2(this, attribute)"><i class="javaex-icon-comment icon-chat_bubble_outline"></i></a>';
								html += '</div>';
								html += '</div>';
								html += '</div>';
								html += '</li>';
							}
							html += '</ul>';
						}
						html += '</div>';
						html += '</div>';
						html += '</li>';
					}
					html += '</ul>';
					
					$("#"+id).html(html);
				}
				
				$(".javaex-comment-reply").each(function() {
					let curNum = $(this).children("li").length;
					let tempId = $(this).attr("id");
					let replyNum = parseInt(info.getSessionStorage(tempId));
					let diff = replyNum - curNum;
					let commentId = tempId.split("_")[1];
					
					if ($(this).next(".javaex-comment-submit-part").length>0) {
						$(this).next(".javaex-comment-submit-part").remove();
					}
					
					if (diff>0) {
						var str = '<div class="javaex-comment-submit-part clear">剩余<em>'+diff+'</em>条回复，<a href="javascript:;" onclick="javaex.javaexShowMoreReply(\''+commentId+'\', attribute)" class="fold">点击查看</a></div>';
						$(this).after(str);
					}
				});
				
				// 修改时间显示
				if (settings.isChangeTimeText) {
					info.changeTimeTexts(".change-time");
				}
				
				if (user.isLogin!=1 || user.isLogin!="1") {
					$(document).on("focus", "#"+id+" .javaex-comment-textarea", function() {
						settings.unLogin();
					});
				}
			},
			// 点击查看更多回复
			javaexShowMoreReply : function(commentId, args) {
				var settings = defaults(args);
				
				var key = "javaex-comment-reply-page_" + commentId;
				var pageNum = info.getSessionStorage(key);
				if (!pageNum || ($("#javaex-comment-reply_" + commentId).children("li").length<10)) {
					pageNum = 0;
				}
				info.setSessionStorage(key, parseInt(pageNum) + 1);
				
				settings.showMoreReply({
					"commentId" : commentId,
					"pageNum" : parseInt(pageNum) + 1
				});
			},
			// 评论
			javaexComment : function(obj, args) {
				var settings = defaults(args);
				
				var content = $(obj).parent().parent().find("textarea").val().replace(/<(script)[\S\s]*?\1>|<\/?(a|img)[^>]*>/gi, "");
				content = content.replace(/(^\s*)|(\s*$)/g, "").replace(/\'/g, "\\'");
				if (!content) {
					info.tip({
						mode : "toast",
						content : "说两句再来点我吧",
						type : "error"
					});
					return;
				}
				
				settings.callback({
					"type" : "comment",
					"content" : content
				});
			},
			// 第一个直接回复层主
			javaexShowReplyTextarea1 : function(obj, args) {
				// 必须重新赋值，不然无法传递该参数
				attribute = args;
				
				var posrLength = $(obj).parent().siblings(".javaex-comment-form.noHd").length;
				if (posrLength==0) {
					var html = '<div class="javaex-comment-form noHd">';
					html += '<div class="javaex-comment-form-textwrap"><textarea wrap="virtual" class="javaex-comment-textarea original" placeholder="我来说两句..."></textarea></div>';
					html += '<div style="text-align:right;"><button class="javaex-btn javaex-comment-submit" onclick="javaex.javaexReply1(this, attribute)">发布</button></div>';
					html += '</div>';
					$(obj).parent().after(html);
				} else {
					$(obj).parent().siblings(".javaex-comment-form.noHd").remove();
				}
			},
			javaexReply1 : function(obj, args) {
				var settings = defaults(args);
				
				var commentId = $(obj).parents("li").attr("id");
				var toUserId = $(obj).parent().parent().parent().children("div:first-child").children('input[type="hidden"]').val();
				var toUsername = $(obj).parent().parent().parent().children("div:first-child").children('a.comment-author').text().replace(/(^\s*)|(\s*$)/g, "");
				var content = $(obj).parent().parent().find("textarea").val().replace(/<(script)[\S\s]*?\1>|<\/?(a|img)[^>]*>/gi, "");
				content = content.replace(/(^\s*)|(\s*$)/g, "").replace(/\'/g, "\\'");
				if (!content) {
					info.tip({
						mode : "toast",
						content : "说两句再来点我吧",
						type : "error"
					});
					return;
				}
				
				settings.callback({
					"type" : "reply",
					"commentId" : commentId,
					"toUserId" : toUserId,
					"toUsername" : toUsername,
					"content" : content
				});
			},
			// 回复回复
			javaexShowReplyTextarea2 : function(obj, args) {
				// 必须重新赋值，不然无法传递该参数
				attribute = args;
				
				var posrLength = $(obj).parent().siblings(".javaex-comment-form.noHd").length;
				if (posrLength==0) {
					var html = '<div class="javaex-comment-form noHd">';
					html += '<div class="javaex-comment-form-textwrap"><textarea wrap="virtual" class="javaex-comment-textarea original" placeholder="我来说两句..."></textarea></div>';
					html += '<div style="text-align:right;"><button class="javaex-btn javaex-comment-submit" onclick="javaex.javaexReply2(this, attribute)">发布</button></div>';
					html += '</div>';
					$(obj).parent().after(html);
				} else {
					$(obj).parent().siblings(".javaex-comment-form.noHd").remove();
				}
			},
			javaexReply2 : function(obj, args) {
				var settings = defaults(args);
				
				var commentId = $(obj).parents("li").parents("li").attr("id");
				var toUserId = $(obj).parent().parent().parent().children("div:first-child").children('input[type="hidden"]').val();
				var toUsername = $(obj).parent().parent().parent().children("div:first-child").children('a.comment-c-replyer').text().replace(/(^\s*)|(\s*$)/g, "");
				var content = $(obj).parent().parent().find("textarea").val().replace(/<(script)[\S\s]*?\1>|<\/?(a|img)[^>]*>/gi, "");
				content = content.replace(/(^\s*)|(\s*$)/g, "").replace(/\'/g, "\\'");
				if (!content) {
					info.tip({
						mode : "toast",
						content : "说两句再来点我吧",
						type : "error"
					});
					return;
				}
				
				settings.callback({
					"type" : "reply",
					"commentId" : commentId,
					"toUserId" : toUserId,
					"toUsername" : toUsername,
					"content" : content
				});
			},
			
			/* 
			 * 修改时间显示
			 * time : 传入的时间，格式yyyy-MM-dd HH:mm:ss
			 */
			changeTimeText : function(time) {
				var timeText = time;
				var now = info.now();
				var day = info.getTimeDiff(time, now, "day");
				if (day>6) {
					// 直接显示返回的时间，不改变
				} else if (day>0) {
					// 修改为几天前
					if (day==1) {
						timeText = "昨天 " + time.split(" ")[1];
					} else if (day==2) {
						timeText = "前天 " + time.split(" ")[1];
					} else {
						timeText = day + " 天前";
					}
				} else if (day==0) {
					var hour = info.getTimeDiff(time, now, "hour");
					if (hour>0) {
						timeText = hour + " 小时前";
					} else if (hour==0) {
						var minute = info.getTimeDiff(time, now, "minute");
						if (minute>0) {
							timeText = minute + " 分钟前";
						} else if (minute==0) {
							var second = info.getTimeDiff(time, now, "second");
							timeText = second + " 秒前";
						}
					}
				}
				
				return timeText;
			},
			
			/* 
			 * 修改时间显示
			 * selector : jquery选择器，例如    ".change-time"
			 */
			changeTimeTexts : function(selector) {
				// 当前系统时间
				var now = info.now();
				// 修改时间显示
				$(selector).each(function() {
					if (isNaN($(this).text()) && !isNaN(Date.parse($(this).text()))) {
						var day = info.getTimeDiff($(this).text(), now, "day");
						if (day>6) {
							// 直接显示返回的时间，不改变
						} else if (day>0) {
							// 修改为几天前
							if (day==1) {
								$(this).text("昨天 " + $(this).text().split(" ")[1]);
							} else if (day==2) {
								$(this).text("前天 " + $(this).text().split(" ")[1]);
							} else {
								$(this).text(day + " 天前");
							}
						} else if (day==0) {
							var hour = info.getTimeDiff($(this).text(), now, "hour");
							if (hour>0) {
								$(this).text(hour + " 小时前");
								$(this).addClass("highlight-color");
							} else if (hour==0) {
								var minute = info.getTimeDiff($(this).text(), now, "minute");
								if (minute>0) {
									$(this).text(minute + " 分钟前");
									$(this).addClass("highlight-color");
								} else if (minute==0) {
									var second = info.getTimeDiff($(this).text(), now, "second");
									$(this).text(second + " 秒前");
									$(this).addClass("highlight-color");
								}
							}
						}
					}
				});
			},
			
			// 标签
			tag : function(args) {
				var settings = defaults(args);
				var id = settings.id;
				var maxNum = settings.maxNum;
				
				var html = '';
				html += '<div class="javaex-tagator">';
				html += '<div class="javaex-tags"></div>';
				html += '<input class="javaex-tag-input" autocomplete="false" maxlength="20" placeholder="输入标签按回车保存" onkeydown="if(event.keyCode==13){javaex.saveTag(this.value, \''+id+'\', \''+maxNum+'\');}">';
				html += '</div>';
				
				$(".javaex-tagbox").append(html);
				
				// 回显标签
				var tagArr = settings.tags;
				if (!!tagArr) {
					// 标签结果
					var tag = "";
					// 标签容器
					var tagHtml = '';
					
					for (let i=0; i<tagArr.length; i++) {
						if (i==0) {
							tag = tagArr[i];
						} else {
							tag += "," + tagArr[i];
						}
						
						tagHtml += '<div class="javaex-tag">';
						tagHtml += '<span>'+tagArr[i]+'</span>';
						tagHtml += '<div class="javaex-tag-remove" onclick="javascript:javaex.removeTag(this, \''+tagArr[i]+'\', \''+id+'\');">×</div><div style="clear: both;"></div>';
						tagHtml += '</div>';
					}
					// 标签结果
					$("#"+id).val(tag);
					// 标签容器
					$(".javaex-tags").append(tagHtml);
				}
			},
			saveTag : function(tag, id, maxNum) {
				// 长度判断
				if (tag.length>=20) {
					return false;
				}
				// 去除空格
				tag = tag.replace(/(^\s*)|(\s*$)/g, "");
				if (tag=="") {
					return false;
				}
				
				var result = $("#"+id).val();
				if (result=="") {
					// 第一次添加
					$("#"+id).val(tag);
				} else {
					var arr = result.split(",");
					// 判断是否已到上限
					if (arr.length>=parseInt(maxNum)) {
						return false;
					}
					
					// 判断是否是重复添加
					for (let i=0; i<arr.length; i++) {
						if (tag==arr[i]) {
							return false;
						}
					}
					$("#"+id).val(result + "," + tag);
				}
				
				var html = '';
				html += '<div class="javaex-tag">';
				html += '<span>'+tag+'</span>';
				html += '<div class="javaex-tag-remove" onclick="javascript:javaex.removeTag(this, \''+tag+'\', \''+id+'\');">×</div><div style="clear: both;"></div>';
				html += '</div>';
				$(".javaex-tag-input").val("");
				$(".javaex-tags").append(html);
			},
			removeTag : function (obj, tag, id) {
				obj.parentNode.remove();
				
				var result = $("#"+id).val();
				var index = result.indexOf(","+tag);
				if (index==-1) {
					// 该标签排第一位
					result = result.replace(tag+",", "");
					result = result.replace(tag, "");
				} else {
					result = result.replace(","+tag, "");
				}
				
				$("#"+id).val(result);
			},
			
			// 分类筛选
			filter : function(args) {
				var settings = defaults(args);
				var selector = settings.selector;
				
				// 如果没有一个选中的，则默认选中第一个
				$(selector).each(function() {
					if ($(this).children("li.on").length==0) {
						$(this).children("li").first().addClass("on");
					}
				});
				
				// 初始化返回回调函数
				if (settings.isInit) {
					callback();
				}
				
				$(selector+">li").click(function() {
					$(this).addClass("on").siblings().removeClass("on");
					
					var arr = new Array();
					$(selector).each(function() {
						var ulId = $(this).attr("id");
						var liValue = $(this).children("li.on").attr("val");
						arr.push(ulId + "=" + liValue);
					});
					settings.callback(arr);
				});
				
				function callback() {
					var arr = new Array();
					$(selector).each(function() {
						var ulId = $(this).attr("id");
						var liValue = $(this).children("li.on").attr("val");
						arr.push(ulId + "=" + liValue);
					});
					
					settings.callback(arr);
				}
			},
			
			// 评分
			score : function(args) {
				var settings = defaults(args);
				var id = settings.id;
				var num = parseInt(settings.num);
				var scoreArr = settings.scoreArr;
				var isReadOnly = settings.isReadOnly;
				var half = settings.half;
				var size = settings.size;
				var levelTextArr = settings.levelTextArr;
				
				// 填充代码
				var liHtml = '<ul>';
				for (let i=1; i<=num; i++) {
					if (half) {
						liHtml += '<li index="'+i+'" score="'+scoreArr[i-1]+'" tooltip-pos="up"><i class="javaex-score-star icon-star_border" style="font-size:'+size+'px;"></i></li>';
					} else {
						liHtml += '<li index="'+i+'" score="'+scoreArr[i-1]+'" tooltip-pos="up"><i class="javaex-score-star icon-star_border" style="font-size:'+size+'px;"></i></li>';
					}
				}
				liHtml += '</ul>';
				$("#"+id).empty();
				$("#"+id).append(liHtml);
				
				// 评分等级改变函数
				var scoreChange = function(elem, index, halfFlag) {
					return $(elem).each(function(i, scoreElem) {
						return $(scoreElem).find("i").each(function(i, item) {
							if (i<index) {
								$(item).removeClass("icon-star_border");
								$(item).removeClass("icon-star_half");
								return $(item).addClass("icon-star");
							}
							else if (i==index) {
								$(item).removeClass("icon-star_border");
								if (halfFlag) {
									$(item).removeClass("icon-star");
									$(item).addClass("icon-star_half");
								} else {
									$(item).removeClass("icon-star_half");
									$(item).addClass("icon-star");
								}
							}
							else {
								$(item).removeClass("icon-star");
								$(item).removeClass("icon-star_half");
								return $(item).addClass("icon-star_border");
							}
						});
					});
				};
				
				// 默认分数
				var score = settings.score;
				if (!!score) {
					$("#"+id+" li").each(function() {
						let tempScore = Math.ceil(score);    // 只比较整数，所以这里向上取整来比较
						let halfFlag = false;
						if (half) {
							// 小数点大于0.7就全星，否则就半星
							if ((Math.ceil(score) - score) <= 0.3) {
								halfFlag = false;
							} else {
								halfFlag = true;
							}
						} else {
							// 如果没有选择半星的属性，却给了小数的数值，统一向上
							score = (Math.ceil(score) - score) < 0.5 ? Math.ceil(score): Math.floor(score);
						}
						
						if ($(this).attr("score")==tempScore) {
							$("#"+id).addClass("active");
							
							var index = $(this).attr("index");
							
							scoreChange($("#"+id), index-1, halfFlag);
							return false;
						}
					});
				}
				
				// 判断是否只读
				if (!isReadOnly) {
					// 鼠标滑过时
					$("#"+id+" li").each(function() {
						var $this = $(this);
						
						// 鼠标在li标签上滑动
						$this.mousemove(function(e) {
							let index = $(this).attr("index") | 0;
							if (parseInt(index)<=0) {
								return false;
							}
							
							// 判断半星
							let halfFlag = false;
							if (half) {
								if ((e.pageX - $(this).offset().left) <= $(this).width()/2) {
									halfFlag = true;
									$(this).attr("tooltip", levelTextArr[index*2 - 2])
								} else {
									$(this).attr("tooltip", levelTextArr[index*2 - 1])
								}
							} else {
								$(this).attr("tooltip", levelTextArr[index - 1])
							}
							
							return scoreChange($("#"+id), index-1, halfFlag);
						});
					});
					
					// 点击评分
					$("#"+id+" li").click(function(e) {
						// 判断半星
						let halfFlag = false;
						if (half) {
							if ((e.pageX - $(this).offset().left) <= $(this).width()/2) {
								halfFlag = true;
							}
						}
						
						let index = $(this).attr("index") | 0;
						if (parseInt(index)<=0) {
							return;
						}
						
						$("#"+id).attr("active", index);
						scoreChange($("#"+id), index-1, halfFlag);
						
						let score = parseInt($(this).attr("score"));
						if (halfFlag) {
							score = score - 0.5;
						}
						
						settings.callback({
							"index" : index,
							"score" : score
						});
						
						if (settings.clickOnce) {
							args.isReadOnly = true;
							args.score = score;
							info.score(args);
						}
					});
				}
			},
			
			// 返回顶部
			goTopBtn : function(args) {
				var settings = defaults(args);
				var id = settings.id;
				
				$("#"+id).css("display", "none");
				
				// 回到顶部
				$("#"+id).click(function() {
					$("body, html").animate({scrollTop:0}, 500);
				});
				
				$(window).scroll(function() {
					var sc = $(window).scrollTop();
					if (sc>300) {
						$("#"+id).css("display", "block");
					} else {
						$("#"+id).css("display", "none");
					}
				});
			},
			
			// 普通确认框
			alert : function(args) {
				var settings = defaults(args);
				var id = settings.id;
				var width = parseInt(settings.width);
				var maxHeight = "";
				if (settings.maxHeight!="") {
					maxHeight = parseInt(settings.maxHeight);
				}
				
				if (!id) {
					id = info.getUUID();
				}
				if (settings.mask) {
					info.addMask();
				}
				
				confirmFn = settings.confirm;
				closeFn = settings.close;
				
				// 弹出层代码
				var alertHtml = '<div id="'+id+'" class="javaex-dialog javaex-animated-zoom-in" style="width:'+width+'px;top:'+settings.top+';left:'+(document.documentElement.clientWidth-width)/2+'px;">';
				alertHtml += '<div id="javaex-dialog-top-'+id+'" class="javaex-dialog-top">';
				alertHtml += '<div class="javaex-dialog-title">'+settings.title+'</div>';
				if (settings.closeIcon) {
					alertHtml += '<div class="javaex-dialog-opt-icon"><a href="javascript:;" onclick="javaex.callback(\''+id+'\', closeFn);"><span class="icon-close"><span></a></div>';
				}
				alertHtml += '</div>';
				if (!!maxHeight) {
					alertHtml += '<div class="javaex-dialog-content" style="overflow: auto;max-height:'+maxHeight+'px;text-align:'+settings.textAlign+';">';
				} else {
					alertHtml += '<div class="javaex-dialog-content" style="text-align:'+settings.textAlign+';">';
				}
				alertHtml += settings.content;
				alertHtml += '</div>';
				alertHtml += '<div class="javaex-dialog-footer">';
				alertHtml += '<button class="javaex-btn javaex-dialog-btn-confirm" onclick="javaex.callback(\''+id+'\', confirmFn);">'+settings.confirmName+'</button>';
				alertHtml += '</div>';
				alertHtml += '</div>';
				$(document.body).append(alertHtml);
				
				// 弹出层拖拽
				var oDialog = document.getElementById(id);
				var oDrag = document.getElementById("javaex-dialog-top-"+id);
				info.drag(oDialog, oDrag);
				
				// 打开后的回调函数
				settings.callback({});
			},
			
			// 确定、取消框
			confirm : function(args) {
				var settings = defaults(args);
				var id = settings.id;
				var width = parseInt(settings.width);
				var maxHeight = "";
				if (settings.maxHeight!="") {
					maxHeight = parseInt(settings.maxHeight);
				}
				
				if (!id) {
					id = info.getUUID();
				}
				if (settings.mask) {
					info.addMask();
				}
				
				confirmFn = settings.confirm;
				cancelFn = settings.cancel;
				closeFn = settings.close;
				
				// 弹出层代码
				var confirmHtml = '<div id="'+id+'" class="javaex-dialog javaex-animated-zoom-in" style="width:'+width+'px;top:'+settings.top+';left:'+(document.documentElement.clientWidth-width)/2+'px;">';
				confirmHtml += '<div id="javaex-dialog-top-'+id+'" class="javaex-dialog-top">';
				confirmHtml += '<div class="javaex-dialog-title">'+settings.title+'</div>';
				if (settings.closeIcon) {
					confirmHtml += '<div class="javaex-dialog-opt-icon"><a href="javascript:;" onclick="javaex.callback(\''+id+'\', closeFn);"><span class="icon-close"><span></a></div>';
				}
				confirmHtml += '</div>';
				if (!!maxHeight) {
					confirmHtml += '<div class="javaex-dialog-content" style="overflow: auto;max-height:'+maxHeight+'px;text-align:'+settings.textAlign+';">';
				} else {
					confirmHtml += '<div class="javaex-dialog-content" style="text-align:'+settings.textAlign+';">';
				}
				confirmHtml += settings.content;
				confirmHtml += '</div>';
				confirmHtml += '<div class="javaex-dialog-footer">';
				confirmHtml += '<button class="javaex-btn javaex-dialog-btn-confirm" onclick="javaex.callback(\''+id+'\', confirmFn);">'+settings.confirmName+'</button>';
				confirmHtml += '<button class="javaex-btn javaex-dialog-btn-cancel" onclick="javaex.callback(\''+id+'\', cancelFn);">'+settings.cancelName+'</button>';
				confirmHtml += '</div>';
				confirmHtml += '</div>';
				$(document.body).append(confirmHtml);
				
				// 弹出层拖拽
				var oDialog = document.getElementById(id);
				var oDrag = document.getElementById("javaex-dialog-top-" + id);
				info.drag(oDialog, oDrag);
				
				// 打开后的回调函数
				settings.callback({});
			},
			
			// 列表删除弹出层
			deleteDialog : function(obj, args) {
				var settings = defaults(args);
				var offsetTop = parseInt(settings.offsetTop);
				
				// 删除追随弹出层，防止二次弹出
				$(".javaex-danger-dialog").remove();
				
				confirmFn = settings.confirm;
				cancelFn = settings.cancel;
				
				// 生成随机id
				var UUID = info.getUUID();
				var left = obj.getBoundingClientRect().left + document.documentElement.scrollLeft;
				var top = obj.getBoundingClientRect().top + document.documentElement.scrollTop;
				var leftInt = left - 186 + (obj.offsetWidth/2) + 30;
				if ((leftInt + 320) > $(document).width()) {
					leftInt = $(document).width() - 321;
				}
				var topInt = top + obj.offsetHeight - 40 - offsetTop;
				
				// 弹出层代码
				var html = '<div id="'+UUID+'" class="javaex-danger-dialog javaex-win javaex-animated-fadein-up" style="left:'+leftInt+'px;top:'+topInt+'px;">';
				html += '<button class="javaex-btn red" onclick="javaex.callback(\''+UUID+'\', confirmFn);"><span class="icon icon-check_circle"></span> '+settings.confirmName+'</button>';
				html += '<button class="javaex-btn indigo" onclick="javaex.callback(\''+UUID+'\', cancelFn);"><span class="icon icon-cancel"></span> '+settings.cancelName+'</button>';
				html += '</div>';
				
				var winId = "javaex-win-"+UUID;
				var contentHtml = '<div id="'+winId+'" class="javaex-win javaex-win-hint javaex-animated-fadein-up">';
				contentHtml += '<div class="javaex-error-text">'+settings.content+'</div>';
				contentHtml += '<div class="javaex-tail"></div>';
				contentHtml += '</div>';
				
				$(document.body).append(html);
				
				setTimeout(function() {
					$("#"+UUID).append(contentHtml);
					
					var topHeight = $("#"+winId).height() + 5;
					$("#"+winId).css("top", "-" + topHeight + "px");
				}, 300);
				
				// 打开后的回调函数
				settings.callback({});
			},
			
			// 定位弹出面板
			panel : function(obj, args) {
				var settings = defaults(args);
				var position = settings.position;
				var alignment = settings.alignment;
				
				var left = obj.getBoundingClientRect().left + document.documentElement.scrollLeft + parseInt(settings.offsetLeft);
				var top = obj.getBoundingClientRect().top + document.documentElement.scrollTop + parseInt(settings.offsetTop);
				
				$(".javaex-panel").remove();
				
				// 弹出层代码
				var html = '';
				// 判断方位
				// 上边
				if (position=="up") {
					html += '<div class="javaex-panel" style="left:'+left+'px;">';
				}
				// 下边
				else if (position=="down") {
					if (alignment=="left") {
						html += '<div class="javaex-panel javaex-animated-sideslip alignment-left" style="left:'+left+'px;top:'+(top + obj.offsetHeight)+'px;">';
					} else {
						html += '<div class="javaex-panel javaex-animated-sideslip alignment-right" style="top:'+(top + obj.offsetHeight)+'px;">';
					}
				}
				// 左边
				else if (position=="left") {
					html += '<div class="javaex-panel javaex-panel-left javaex-animated-zoom-in">';
				}
				// 右边
				else if (position=="right") {
					html += '<div class="javaex-panel javaex-panel-right javaex-animated-zoom-in" style="left:'+(left + obj.offsetWidth + 10)+'px;">';
				}
				
				html += settings.content;
				html += '</div>';
				$(document.body).append(html);
				
				// 修正位置
				var panelHeight = $(".javaex-panel").height();
				var panelWidth = $(".javaex-panel").width();
				if (position=="up") {
					$(".javaex-panel").addClass("javaex-animated-slide-up");
					$(".javaex-panel").css("top", (top - panelHeight - 1) + "px");
				}
				else if (position=="left") {
					$(".javaex-panel").css({
						"top" : (top + obj.offsetHeight/2 - panelHeight/2) + "px",
						"left" : (left - panelWidth - 10) + "px"
					});
				}
				else if (position=="right") {
					$(".javaex-panel").css("top", (top + obj.offsetHeight/2 - panelHeight/2) + "px");
				}
				else if (position=="down" && alignment=="right") {
					$(".javaex-panel").css("left", (left + obj.offsetWidth - panelWidth) + "px");
				}
				
				// 点击空白处隐藏弹出层
				document.onmouseup = function() {
					var obj = $(".javaex-panel");
					if (!obj.is(event.target) && obj.has(event.target).length==0) {
						$(".javaex-panel").remove();
						document.onmouseup = null;
					}
				};
				
				// 打开后的回调函数
				settings.callback({});
			},
			
			// 定位提示
			toast : function(obj, args) {
				var settings = defaults(args);
				var type = settings.type;
				var offsetTop = parseInt(settings.offsetTop);
				
				// 先删除，防止2次弹出
				$(".javaex-toast-warp").remove();
				
				// 生成随机id
				var UUID = info.getUUID();
				var left = obj.getBoundingClientRect().left + document.documentElement.scrollLeft;
				var top = obj.getBoundingClientRect().top + document.documentElement.scrollTop;
				var leftInt = left + (obj.offsetWidth/2);
				var topInt = top + obj.offsetHeight - offsetTop - 70;
				
				// 弹出层代码
				var html = '<div id="'+UUID+'" class="javaex-toast-warp" style="position: absolute;left:'+leftInt+'px;top:'+topInt+'px;">';
				if (type=="error") {
					html += '<div class="javaex-toast-content javaex-animated-fadein-up error">'+settings.content+'</div>';
				} else {
					html += '<div class="javaex-toast-content javaex-animated-fadein-up">'+settings.content+'</div>';
				}
				html += '</div>';
				
				$(document.body).append(html);
				
				setTimeout(function() {
					$(".javaex-toast-warp").remove();
				}, settings.live);
			},
			
			// 操作提示
			timeoutId : null,
			tip : function(args) {
				var settings = defaults(args);
				var mode = settings.mode;
				var type = settings.type;
				var timeout = settings.timeout;
				
				$(".javaex-opt-mask").remove();
				
				var html = '';
				// 黑色透明提示
				if (mode=="toast") {
					$(".javaex-opt-tip").remove();
					$(".javaex-message-feedback").remove();
					$(".javaex-opt-mask").remove();
					
					html += '<div class="javaex-toast-warp"><div class="javaex-toast-content">'+settings.content+'</div></div>';
				}
				// 反馈
				else if (mode=="message") {
					if (type=="submit") {
						if (!!timeout) {
							timeout = parseInt(timeout);
						} else {
							timeout = 0;
						}
						
						$(".javaex-message-feedback").remove();
						
						html += '<div class="javaex-opt-mask"></div>';
						html += '<div class="javaex-message-feedback javaex-animated-zoom-in">';
						html += '<div class="javaex-mf-icons javaex-mf-submit">';
						html += '<span class="javaex-mf-icon javaex-mf-icon-submit"></span>';
						html += '<span class="javaex-mf-text">'+settings.content+'</span>';
						html += '</div>';
						html += '</div>';
						
						// 启动定时器
						if (timeout>0) {
							// 实时刷新时间单位为毫秒
							info.timeoutId = setInterval(function() {
								info.tip({
									mode : "message",
									content : settings.timeoutText,
									type : "error"
								});
								clearInterval(info.timeoutId);
							}, timeout);
						}
					}
					else if (type=="success") {
						clearInterval(info.timeoutId);
						$(".javaex-message-feedback").remove();
						
						html += '<div class="javaex-message-feedback javaex-animated-zoom-in">';
						html += '<div class="javaex-mf-icons succeed">';
						html += '<span class="javaex-mf-icon javaex-mf-icon-succeed"></span>';
						html += '<span class="javaex-mf-text">'+settings.content+'</span>';
						html += '</div>';
						html += '</div>';
					}
					else if (type=="error") {
						clearInterval(info.timeoutId);
						$(".javaex-message-feedback").remove();
						
						html += '<div class="javaex-message-feedback javaex-animated-zoom-in">';
						html += '<div class="javaex-mf-icons javaex-mf-failed">';
						html += '<span class="javaex-mf-icon javaex-mf-icon-failed"></span>';
						html += '<span class="javaex-mf-text">'+settings.content+'</span>';
						html += '</div>';
						html += '</div>';
					}
				}
				// 后台操作提示
				else {
					if (type=="submit") {
						if (!!timeout) {
							timeout = parseInt(timeout);
						} else {
							timeout = 0;
						}
						
						$(".javaex-opt-tip").remove();
						
						html += '<div class="javaex-opt-mask"></div>';
						html += '<div class="javaex-opt-tip javaex-animated-fadein-down">';
						html += '<div style="display: flex;">';
						html += '<span class="javaex-tip-icon javaex-tip-icon-loading"></span>';
						html += '<span class="java-opt-tip-msg">' + settings.content + '</span>';
						html += '</div>';
						html += '</div>';
						
						// 启动定时器
						if (timeout>0) {
							// 实时刷新时间单位为毫秒
							info.timeoutId = setInterval(function() {
								info.tip({
									content : settings.timeoutText,
									type : "error"
								});
								clearInterval(info.timeoutId);
							}, timeout);
						}
					}
					else if (type=="success") {
						clearInterval(info.timeoutId);
						// 判断是否已存在提交提示
						if ($(".javaex-tip-icon-loading").length>0) {
							// 存在，直接修改样式
							$(".javaex-opt-tip").css("background-color", "#79c37b");
							$(".javaex-opt-tip .javaex-tip-icon").removeClass("javaex-tip-icon-loading");
							$(".javaex-opt-tip .javaex-tip-icon").addClass("icon-check");
							$(".javaex-opt-tip .javaex-tip-icon").css({
								"font-size" : "16px",
								"font-weight" : "bold"
							});
							// 修改文字
							$(".javaex-opt-tip .java-opt-tip-msg").text(settings.content);
						} else {
							$(".javaex-opt-tip").remove();
							
							html += '<div class="javaex-opt-tip success javaex-animated-fadein-down">';
							html += '<div style="display: flex;">';
							html += '<span class="javaex-tip-icon icon-check"></span>';
							html += '<span class="java-opt-tip-msg">' + settings.content + '</span>';
							html += '</div>';
							html += '</div>';
						}
					}
					else if (type=="error") {
						clearInterval(info.timeoutId);
						// 判断是否已存在提交提示
						if ($(".javaex-tip-icon-loading").length>0) {
							// 存在，直接修改样式
							$(".javaex-opt-tip").css("background-color", "#ff6e6e");
							$(".javaex-opt-tip .javaex-tip-icon").removeClass("javaex-tip-icon-loading");
							$(".javaex-opt-tip .javaex-tip-icon").addClass("icon-close");
							$(".javaex-opt-tip .javaex-tip-icon").css({
								"font-size" : "16px",
								"font-weight" : "bold"
							});
							// 修改文字
							$(".javaex-opt-tip .java-opt-tip-msg").text(settings.content);
						} else {
							$(".javaex-opt-tip").remove();
							
							html += '<div class="javaex-opt-tip error javaex-animated-fadein-down">';
							html += '<div style="display: flex;">';
							html += '<span class="javaex-tip-icon icon-close"></span>';
							html += '<span class="java-opt-tip-msg">' + settings.content + '</span>';
							html += '</div>';
							html += '</div>';
						}
					}
				}
				
				$(document.body).append(html);
				
				if (mode=="message") {
					var tipWidth = $(".javaex-message-feedback").width();
					$(".javaex-message-feedback").css("margin-left", -(tipWidth/2));
				} else {
					var tipWidth = $(".javaex-opt-tip").width();
					$(".javaex-opt-tip").css("margin-left", -(tipWidth/2)+"px");
				}
				
				if (mode=="toast" || type=="success" || type=="error") {
					setTimeout(function() {
						$(".javaex-opt-tip").remove();
						$(".javaex-message-feedback").remove();
						$(".javaex-opt-mask").remove();
						$(".javaex-toast-warp").remove();
					}, settings.live);
				}
			},
			
			// 判断是否是IE内核
			isIE : function() {
				// ie
				if (!!window.ActiveXobject || "ActiveXObject" in window) {
					return true;
				}
				// ie11
				if((/Trident\/7\./).test(navigator.userAgent)) {
					return true;
				}
				return false;
			},
			
			// 页面预加载
			loading : function(args) {
				var settings = defaults(args);
				var mode = settings.mode;
				var containerId = settings.containerId;
				var id = settings.id;
				var type = settings.type;
				var content = settings.content;
				if (!content) {
					content = "正在读取数据，请稍候...";
				}
				var top = settings.top;
				
				// 页面预加载
				if (mode=="") {
					$(document.body).append('<div id="javaex-loading" class="javaex-loading">'+content+'</div>');
					
					// 判断页面是否加载完毕
					document.onload = document.onreadystatechange = function() {
						if (!this.readyState || this.readyState == "loaded" || this.readyState == "complete" ) {
							document.onload = document.onreadystatechange = null;
							var oLoading = document.getElementById("javaex-loading");
							if (oLoading!=null) {
								if (info.isIE()) {
									oLoading.removeNode(true);
								} else {
									oLoading.remove();
								}
							}
						}
					};
				}
				// 手动操作
				else if (mode=="manual") {
					// 全局的
					if (!containerId) {
						// 手动打开
						if (type=="open") {
							$(document.body).append('<div id="javaex-loading" class="javaex-loading">'+content+'</div>');
						}
						// 手动关闭
						else if (type=="close") {
							$("#javaex-loading").remove();
						}
					}
					// 局部的
					else {
						// 手动打开
						if (type=="open") {
							$("#"+containerId).addClass("javaex-temp-relative");
							
							if (id=="") {
								$("#"+containerId).append('<div class="javaex-loading-mask"><div style="margin: auto;"><div class="javaex-loading-process"></div></div></div>');
							} else {
								$("#"+containerId).append('<div id="'+id+'" class="javaex-loading-mask"><div style="margin: auto;"><div class="javaex-loading-process"></div></div></div>');
							}
						}
						// 手动关闭
						else if (type=="close") {
							$("#"+containerId).removeClass("javaex-temp-relative");
							
							if (id=="") {
								$(".javaex-loading-mask").remove();
							} else {
								$("#"+id).remove();
							}
						}
					}
				}
			},
			
			// 高级弹出层
			num : 0,    // 代表第几张图片切换
			dialog : function(args) {
				var settings = defaults(args);
				var width = parseInt(settings.width);
				var offsetLeft = parseInt(settings.offsetLeft);
				var offsetTop = parseInt(settings.offsetTop);
				var height = settings.height;
				if (height!="") {
					height = parseInt(height);
				}
				var hasBackground = settings.hasBackground;
				var type = settings.type;
				
				// 必须重新赋值，不然无法传递该参数
				attribute = args;
				
				// 生成随机id
				var UUID = info.getUUID();
				// 判断是否指定了id
				if (settings.id!="") {
					UUID = settings.id;
				}
				
				closeFn = settings.close;
				
				// 弹出层代码
				var dialogHtml = '';
				// 判断弹出层样式
				// 图片弹出层（图片放大预览）
				if (type=="image") {
					// 添加遮罩
					info.addMask();
					
					// 创建对象
					var image = new Image();
					// 改变图片的src
					image.src = settings.url;
					var maxWidth = document.documentElement.clientWidth - 120;
					var maxHeight = document.documentElement.clientHeight - 120;
					
					var arr = info.autoWidthHeight(image.width, image.height, maxWidth, maxHeight);
					width = arr[0]+40;
					height = arr[1]+40;
					
					dialogHtml = '<div id="'+UUID+'" class="javaex-dialog javaex-animated-zoom-in" style="width:'+width+'px;left:'+(maxWidth-width+120)/2+'px;">';
					dialogHtml += '<div class="javaex-dialog-content" style="padding: 0;">';
					dialogHtml += '<img src="'+settings.url+'" />';
					dialogHtml += '</div>';
					dialogHtml += '<a class="javaex-dialog-close-big" href="javascript:;" onclick="javaex.close(\''+UUID+'\');"></a>';
					dialogHtml += '</div>';
				}
				// 切换图片弹出层
				else if (type=="images") {
					// 遍历图片
					var selector = settings.selector;
					var placeholder = settings.placeholder;
					var original = settings.dataOriginal;
					
					$(selector).each(function(i) {
						// 判断当前点击的是第几张图片
						if ($(this).attr("src")==settings.url) {
							info.num = i;
						}
					});
					
					// 创建对象
					var image = new Image();
					// 改变图片的src
					image.src = settings.url;
					var maxWidth = document.documentElement.clientWidth - 120;
					var maxHeight = document.documentElement.clientHeight - 120;
					
					var arr = info.autoWidthHeight(image.width, image.height, maxWidth, maxHeight);
					width = arr[0];
					height = arr[1];
					
					dialogHtml = '<div class="javaex-allcover"></div>';
					dialogHtml += '<div id="'+UUID+'" class="javaex-area-window">';
					dialogHtml += '<div id="javaex-box-image-manga" style="width:'+width+'px;height:'+height+'px;left:'+(maxWidth-width+120)/2+'px;top:'+(maxHeight-height+120)/2+'px;">';
					dialogHtml += '<img id="img-'+UUID+'" src="'+settings.url+'" style="opacity: 1;">';
					dialogHtml += '</div>';
					dialogHtml += '<div class="javaex-allcover-prev-image" title="上一张" onclick="javaex.lastImg(\''+UUID+'\', \''+selector+'\', \''+placeholder+'\', \''+original+'\');">';
					dialogHtml += '<i class="icon icon-chevron-circle-left"></i>';
					dialogHtml += '</div>';
					dialogHtml += '<div class="javaex-allcover-next-image" title="下一张" onclick="javaex.nextImg(\''+UUID+'\', \''+selector+'\', \''+placeholder+'\', \''+original+'\');">';
					dialogHtml += '<i class="icon icon-chevron-circle-right"></i>';
					dialogHtml += '</div>';
					dialogHtml += '<div class="javaex-area-tool-image">';
					dialogHtml += '<a id="javaex-btn-quit-image" class="javaex-btn red" href="javascript:;" onclick="javaex.close(\''+UUID+'\');">';
					dialogHtml += '<i class="icon icon-cancel" style="vertical-align: middle;height: 30px;line-height: 28px;font-size: 16px;"></i>退出读图模式';
					dialogHtml += '</a>';
					dialogHtml += '</div>';
					dialogHtml += '</div>';
				}
				// 完全的弹出层
				else if (type=="dialog") {
					let topHeight = (document.documentElement.clientHeight-height)/2 + offsetTop;
					let leftWidth = (document.documentElement.clientWidth-width)/2 + offsetLeft;
					
					if (settings.mask) {
						info.addMask();
					}
					if (settings.title && settings.title!="温馨提示") {
						dialogHtml += '<div id="'+UUID+'" class="javaex-dialog javaex-animated-zoom-in" style="width:'+width+'px;height:'+height+'px;top:'+topHeight+'px;left:'+leftWidth+'px;">';
						dialogHtml += '<div id="javaex-dialog-top-'+UUID+'" class="javaex-dialog-top">';
						dialogHtml += '<div id="javaex-dialog-title-'+UUID+'" class="javaex-dialog-title">'+settings.title+'</div>';
						dialogHtml += '<div class="javaex-dialog-opt-icon"><a href="javascript:;" onclick="javaex.callback(\''+UUID+'\', closeFn);"><span class="icon-close"><span></a></div>';
						dialogHtml += '</div>';
						if (hasBackground) {
							dialogHtml += '<div id="javaex-dialog-content-'+UUID+'" class="javaex-dialog-content javaex-dialog-window javaex-dialog-bg">';
						} else {
							dialogHtml += '<div id="javaex-dialog-content-'+UUID+'" class="javaex-dialog-content javaex-dialog-window">';
						}
					} else {
						dialogHtml = '<div id="'+UUID+'" class="javaex-dialog javaex-animated-zoom-in" style="box-shadow: none;width:'+width+'px;height:'+height+'px;top:'+topHeight+'px;left:'+leftWidth+'px;">';
						if (hasBackground) {
							dialogHtml += '<div id="javaex-dialog-content-'+UUID+'" class="javaex-dialog-content javaex-dialog-window javaex-dialog-bg" style="height:100%;">';
						} else {
							dialogHtml += '<div id="javaex-dialog-content-'+UUID+'" class="javaex-dialog-content javaex-dialog-window" style="height:100%;">';
						}
					}
					dialogHtml += '<iframe src="'+settings.url+'" width="100%" height="100%" frameborder="0" scrolling="'+settings.scrolling+'" style="overflow: visible;border: 0;"></iframe>';
					dialogHtml += '</div>';
					if (!settings.title || settings.title=="温馨提示") {
						dialogHtml += '<a class="javaex-dialog-close-big" href="javascript:;" onclick="javaex.callback(\''+UUID+'\', closeFn);"></a>';
					}
					dialogHtml += '</div>';
				}
				// 高级弹出层（可最大化、最小化）
				else if (type=="window") {
					let topHeight = (document.documentElement.clientHeight-height)/2 + offsetTop;
					let leftWidth = (document.documentElement.clientWidth-width)/2 + offsetLeft;
					
					// 添加遮罩
					if (settings.mask) {
						info.addMask();
					}
					
					dialogHtml = '<div id="'+UUID+'" class="javaex-dialog javaex-animated-zoom-in" style="width:'+width+'px;height:'+height+'px;top:'+topHeight+'px;left:'+leftWidth+'px;">';
					dialogHtml += '<div class="javaex-dialog-top">';
					dialogHtml += '<div id="javaex-dialog-title-'+UUID+'" class="javaex-dialog-title">'+settings.title+'</div>';
					dialogHtml += '<div class="javaex-dialog-opt-icon clear">';
					dialogHtml += '<a href="javascript:;" id="javaex-dialog-min-'+UUID+'" onclick="javaex.min(\''+UUID+'\');"><span class="icon-minus"><span></a>';
					dialogHtml += '<a href="javascript:;" id="javaex-dialog-max-'+UUID+'" onclick="javaex.max(\''+UUID+'\');"><span class="icon-fullscreen"><span></a>';
					dialogHtml += '<a href="javascript:;" id="javaex-dialog-revert-'+UUID+'" onclick="javaex.revert(\''+UUID+'\', attribute);" style="display:none;"><span class="icon-fullscreen_exit"><span></a>';
					dialogHtml += '<a href="javascript:;" onclick="javaex.callback(\''+UUID+'\', closeFn);"><span class="icon-close"><span></a>';
					dialogHtml += '</div>';
					dialogHtml += '</div>';
					if (hasBackground) {
						dialogHtml += '<div id="javaex-dialog-content-'+UUID+'" class="javaex-dialog-content javaex-dialog-window javaex-dialog-bg" style="overflow-y:hidden;">';
					} else {
						dialogHtml += '<div id="javaex-dialog-content-'+UUID+'" class="javaex-dialog-content javaex-dialog-window" style="overflow-y:hidden;">';
					}
					dialogHtml += '<iframe id="javaex-iframe-'+UUID+'" src="'+settings.url+'" width="100%" height="100%" frameborder="0" scrolling="'+settings.scrolling+'" style="overflow: visible;border: 0;"></iframe>';
					dialogHtml += '</div>';
					dialogHtml += '<i id="javaex-dialog-resize-'+UUID+'" class="javaex-dialog-resize" onmousemove="javaex.resize(\''+UUID+'\', attribute);"></i>';
					dialogHtml += '</div>';
				}
				$(document.body).append(dialogHtml);
				
				var oDialog = document.getElementById(UUID);
				// 弹出层垂直居中
				if (type=="image") {
					var heightDifference = document.documentElement.clientHeight - oDialog.offsetHeight;
					oDialog.style.top = (heightDifference/2) + "px";
					
					$(".javaex-mask").click(function() {
						info.close(UUID);
					});
				} else if (type=="window" || (type=="dialog" && !!settings.title && settings.title!="温馨提示")) {
					// 弹出层拖拽
					var oDrag = document.getElementById("javaex-dialog-title-" + UUID);
					info.drag(oDialog, oDrag);
					
					// 判断是否允许点击遮罩关闭弹窗
					if (settings.isClickMaskClose) {
						$(".javaex-mask").click(function() {
							info.close(UUID);
						});
					}
				}
				
				// 打开后的回调函数
				settings.callback({});
			},
			
			// 自动调节图片宽高
			autoWidthHeight : function(width, height, maxWidth, maxHeight) {
				if (width<maxWidth && height<maxHeight) {
					// 当图片比图片框小时，不做任何改变 
				} else {
					if (maxWidth/maxHeight <= width/height) {
						// 原图片宽高比例 大于 图片框宽高比例
						width = maxWidth;	// 以框的宽度为标准
						height = maxWidth * (height/width);
					} else {
						// 原图片宽高比例 小于 图片框宽高比例
						width = maxHeight * (width/height);
						height = maxHeight;	// 以框的高度为标准
					}
				}
				var arr = new Array(width, height);
				return arr;
			},
			
			// 切换上一张图片
			lastImg : function(UUID, selector, placeholder, original) {
				info.num--;
				if (info.num>=0) {
					$("#img-"+UUID).css({
						"opacity" : 0,
						"transition" : "opacity 200ms ease 0s"
					});
					
					setTimeout(function() {
						// 创建对象
						var image = new Image();
						// 改变图片的src
						image.src = $(selector).eq(info.num).attr("src");
						var maxWidth = document.documentElement.clientWidth-120;
						var maxHeight = document.documentElement.clientHeight-120;
						
						var arr = info.autoWidthHeight(image.width, image.height, maxWidth, maxHeight);
						width = arr[0];
						height = arr[1];
						$("#javaex-box-image-manga").css({
							"width" : width + "px",
							"height" : height + "px",
							"left" : (maxWidth-width+120)/2 + "px",
							"top" : (maxHeight-height+120)/2 + "px"
						});
						$("#img-"+UUID).attr("src", image.src);
						$("#img-"+UUID).css({
							"opacity" : 1,
							"transition" : ""
						});
					}, 200);
				} else {
					info.num = $(selector).length-2;
					info.nextImg(UUID, selector, placeholder, original);
				}
			},
			
			// 切换下一张图片
			nextImg : function(UUID, selector, placeholder, original) {
				info.num++;
				if (info.num<$(selector).length) {
					$("#img-"+UUID).css({
						"opacity" : 0,
						"transition" : "opacity 200ms ease 0s"
					});
					
					setTimeout(function() {
						// 创建对象
						var image = new Image();
						// 改变图片的src
						var imgSrc = $(selector).eq(info.num).attr("src");
						if (imgSrc.indexOf(placeholder)!=-1) {
							// 说明是延迟加载的图片
							imgSrc = $(selector).eq(info.num).attr(original);
						}
						
						image.src = imgSrc;
						var maxWidth = document.documentElement.clientWidth-120;
						var maxHeight = document.documentElement.clientHeight-120;
						
						var arr = info.autoWidthHeight(image.width, image.height, maxWidth, maxHeight);
						width = arr[0];
						height = arr[1];
						$("#javaex-box-image-manga").css({
							"width" : width + "px",
							"height" : height + "px",
							"left" : (maxWidth-width+120)/2 + "px",
							"top" : (maxHeight-height+120)/2 + "px"
						});
						$("#img-"+UUID).attr("src", image.src);
						$("#img-"+UUID).css({
							"opacity" : 1,
							"transition" : ""
						});
					}, 200);
				} else {
					info.num = -1;
					info.nextImg(UUID, selector, placeholder, original);
				}
			},
			
			// 改变弹出层大小
			resize : function(UUID, args) {
				var settings = defaults(args);
				
				// 弹出层的最小宽度和高度
				var dragMinWidth = parseInt(settings.width);
				var dragMinHeight = parseInt(settings.height);
				
				var oDialog = document.getElementById(UUID);
				var oResize = document.getElementById("javaex-dialog-resize-" + UUID);
				var oBody = document.getElementById("javaex-dialog-content-"+UUID);
				var oIframe = document.getElementById("javaex-iframe-" + UUID);
				
				oResize.onmousedown = function (event) {
					var oEvent = event || window.event;
					var absX = oEvent.clientX - oResize.offsetLeft;
					var absY = oEvent.clientY - oResize.offsetTop;
					
					document.onmousemove = function (eve) {
						var oEve = eve || window.event;
						var offsetLeft = oEve.clientX - absX;
						var offsetTop = oEve.clientY - absY;
						var maxWidth = document.documentElement.clientWidth - oDialog.offsetLeft - 2;
						var maxHeight = document.documentElement.clientHeight - oDialog.offsetTop - 2;
						
						var offsetWidth = oResize.offsetWidth + offsetLeft;
						var offsetHeight = oResize.offsetHeight + offsetTop;
						
						if (offsetWidth<dragMinWidth) {
							offsetWidth = dragMinWidth;
						}
						if (offsetWidth>maxWidth) {
							offsetWidth = maxWidth;
						}
						if (offsetHeight<dragMinHeight) {
							offsetHeight = dragMinHeight;
						}
						if (offsetHeight>maxHeight) {
							offsetHeight = maxHeight;
						}
						
						oDialog.style.width = offsetWidth + "px";
						oDialog.style.height = offsetHeight + "px";
						return false;
					};
					
					oIframe.contentWindow.onmouseup = document.onmouseup = function() {
						oResize.onmousedown = null;
						document.onmousemove = null;
						document.onmouseup = null;
					};
					
					return false;
				};
			},
			
			// 弹出层最小化
			min : function(UUID) {
				// 最小化图标隐藏
				var oMin = document.getElementById("javaex-dialog-min-" + UUID);
				oMin.style.display = "none";
				// 右下角拖放图标隐藏
				var oResize = document.getElementById("javaex-dialog-resize-" + UUID);
				oResize.style.display = "none";
				// 最大化图标隐藏
				var oMax = document.getElementById("javaex-dialog-max-" + UUID);
				oMax.style.display = "none";
				// 还原图标显示
				var oRevert = document.getElementById("javaex-dialog-revert-" + UUID);
				oRevert.style.display = "inline-block";
				
				// 隐藏该弹出层内容区域
				var oContent = document.getElementById("javaex-dialog-content-" + UUID);
				oContent.style.display = "none";
				
				// 重新设置该弹出层的一些属性
				var oDialog = document.getElementById(UUID);
				oDialog.style.left = "0";
				oDialog.style.width = "260px";
				oDialog.style.height = "40px";
				offsetTop = document.documentElement.clientHeight - oDialog.offsetHeight;
				oDialog.style.top = offsetTop + "px";
			},
			
			// 弹出层最大化
			max : function(UUID) {
				// 最大化图标隐藏
				var oMax = document.getElementById("javaex-dialog-max-" + UUID);
				oMax.style.display = "none";
				// 右下角拖放图标显示
				var oResize = document.getElementById("javaex-dialog-resize-" + UUID);
				oResize.style.display = "none";
				// 最小化图标显示
				var oMin = document.getElementById("javaex-dialog-min-" + UUID);
				oMin.style.display = "inline-block";
				// 还原图标显示
				var oRevert = document.getElementById("javaex-dialog-revert-" + UUID);
				oRevert.style.display = "inline-block";
				
				// 重新设置该弹出层的一些属性
				var oDialog = document.getElementById(UUID);
				oDialog.style.top = "0";
				oDialog.style.left = "0";
				oDialog.style.width = document.documentElement.clientWidth - 2 + "px";
				oDialog.style.height = document.documentElement.clientHeight - 2 + "px";
				
				// 重新设置该弹出层内容区域的高度
				var oContent = document.getElementById("javaex-dialog-content-" + UUID);
				oContent.style.display = "block";
			},
			
			// 弹出层大小还原
			revert : function(UUID, args) {
				var settings = defaults(args);
				var width = parseInt(settings.width);
				var height = parseInt(settings.height);
				
				// 最小化图标显示
				var oMin = document.getElementById("javaex-dialog-min-" + UUID);
				oMin.style.display = "inline-block";
				// 还原图标隐藏
				var oRevert = document.getElementById("javaex-dialog-revert-" + UUID);
				oRevert.style.display = "none";
				// 最大化图标显示
				var oMax = document.getElementById("javaex-dialog-max-" + UUID);
				oMax.style.display = "inline-block";
				// 右下角拖放图标显示
				var oResize = document.getElementById("javaex-dialog-resize-" + UUID);
				oResize.style.display = "inline-block";
				
				// 还原该弹出层的属性
				var oDialog = document.getElementById(UUID);
				var offsetTop = parseInt(settings.offsetTop);
				var offsetLeft = parseInt(settings.offsetLeft);
				
				oDialog.style.width = width + "px";
				oDialog.style.height = height + "px";
				oDialog.style.left = (document.documentElement.clientWidth-width)/2 + offsetLeft + "px";
				oDialog.style.top = (document.documentElement.clientHeight-height)/2 + offsetTop + "px";
				
				// 还原该弹出层内容区域的高度
				var oContent = document.getElementById("javaex-dialog-content-" + UUID);
				oContent.style.display = "block";
			},
			
			// 点击按钮的回调函数
			callback : function(id, fn) {
				if (fn()!=false) {
					info.close(id);
				}
			},
			
			// 关闭弹出层
			close : function(id) {
				// id不存在
				if (!id) {
					$(".javaex-dialog").removeClass("javaex-animated-zoom-in");
					$(".javaex-dialog").addClass("javaex-animated-zoom-out");
					$(".javaex-mask").remove();
					$(".javaex-panel").remove();
					
					if ($(".javaex-drawer").length>0) {
						$(".javaex-drawer").css("transform", "translateX(0px)");
					}
					
					setTimeout(function() {
						$(".javaex-dialog").remove();
					}, 300);
				}
				// 指定id
				else {
					$dialog = $("#"+id);
					
					if ($dialog.hasClass("javaex-area-window")) {
						$dialog.remove();
						$(".javaex-allcover").remove();
					}
					else if ($dialog.hasClass("javaex-danger-dialog")) {
						$dialog.removeClass("javaex-animated-fadein-up");
						$dialog.addClass("javaex-animated-zoom-out");
						setTimeout(function() {
							$dialog.remove();
						}, 300);
					}
					else if ($dialog.hasClass("javaex-drawer")) {
						$dialog.css("transform", "translateX(0px)");
						if ($dialog.hasClass("javaex-drawer-auto")) {
							setTimeout(function() {
								$dialog.remove();
							}, 200);
						}
					}
					else {
						$dialog.removeClass("javaex-animated-zoom-in");
						$dialog.addClass("javaex-animated-zoom-out");
						setTimeout(function() {
							$dialog.remove();
						}, 300);
					}
					
					$(".javaex-mask").remove();
				}
			},
			
			// 添加遮罩背景
			addMask : function() {
				$(document.body).append('<div class="javaex-mask"></div>');
			},
			
			// 拖拽事件
			drag : function(oDialog, oDrag) {
				oDrag.onmousedown = function(event) {
					var oEvent = event || window.event;
					var absX = oEvent.clientX - oDialog.offsetLeft;
					var absY = oEvent.clientY - oDialog.offsetTop;
					
					document.onmousemove = function(eve) {
						var oEve = eve || window.event;
						var offsetLeft = oEve.clientX - absX;
						var offsetTop = oEve.clientY - absY;
						
						// 防止拖动溢出
						if (offsetLeft<=0) {
							offsetLeft = 0;
						} else if (offsetLeft>=(document.documentElement.clientWidth-oDialog.offsetWidth)) {
							offsetLeft = document.documentElement.clientWidth - oDialog.offsetWidth;
						}
						
						if (offsetTop<=0) {
							offsetTop = 0;
						} else if (offsetTop>=(document.documentElement.clientHeight-oDialog.offsetHeight)) {
							offsetTop = document.documentElement.clientHeight - oDialog.offsetHeight;
						}
						
						// 修改属性
						oDialog.style.left = offsetLeft + "px";
						oDialog.style.top = offsetTop + "px";
					};
					document.onmouseup = function() {
						document.onmousemove = null;
						document.onmouseup = null;
					};
				};
			},
			
			// 重新渲染
			render : function() {
				info.radio();
				info.checkbox();
			},
			
			// 左侧菜单
			menu : function(args) {
				var settings = defaults(args);
				var menuId = settings.id;
				var cookieKey = "javaexMenuUrl-" + menuId;
				
				// 初始化显示所有节点
				if (settings.isShowAll) {
					$("#"+menuId+" .javaex-menu-item").addClass("javaex-menu-show");
					$("#"+menuId+" .javaex-menu-item>ul").css("display", "block");
				}
				
				// 左侧菜单 —— 展开/收起
				$("#"+menuId+" .javaex-menu-item>a").on("click", function() {
					if ($(this).next().css("display")=="none") {
						if (!settings.isShowAll) {
							$("#"+menuId+" .javaex-menu-item").children("ul").slideUp(300);
						}
						$(this).next("ul").slideDown(300);
						if (settings.isShowAll) {
							$(this).parent("li").addClass("javaex-menu-show");
						} else {
							$(this).parent("li").addClass("javaex-menu-show").siblings("li").removeClass("javaex-menu-show");
						}
					} else {
						if ($(this).next("ul").length==0) {
							// 没有子级菜单
							$("#"+menuId+" .javaex-menu-item.javaex-menu-show ul").slideUp(300);
						} else {
							// 有子级菜单
							$(this).next("ul").slideUp(300);
						}
						if (settings.isShowAll) {
							$(this).parent("li").removeClass("javaex-menu-show");
						} else {
							$("#"+menuId+" .javaex-menu-item.javaex-menu-show").removeClass("javaex-menu-show");
						}
					}
				});
				
				var menuFlag = 0;
				// 选中菜单高亮
				$("#"+menuId+" li.javaex-menu-item>a").click(function() {
					menuFlag = 1;
					addHover($(this).parent());
				});
				$("#"+menuId+" li.javaex-menu-item ul li>a").click(function() {
					menuFlag = 2;
					addHover($(this).parent());
				});
				
				/**
				 * 为选中菜单添加高亮
				 */
				function addHover(obj) {
					// 清除所有菜单项的高亮
					if (menuFlag==1) {
						$("#"+menuId+" li.javaex-menu-item").removeClass("hover");
					} else if (menuFlag==2) {
						$("#"+menuId+" li.javaex-menu-item ul li").removeClass("hover");
					} else {
						$("#"+menuId+" li.javaex-menu-item").removeClass("hover");
						$("#"+menuId+" li.javaex-menu-item ul li").removeClass("hover");
					}
					
					// 为当前点击菜单添加高亮
					obj.addClass("hover");
				}
				
				// 是否自动选中高亮
				if (settings.isAutoSelected) {
					// 获取当前页面的url
					var url = window.location.href;
					// 自动高亮菜单，flag标识有没有找到匹配的链接
					var flag = menuSelected(url);
					// 未找到匹配的链接时，从cookie中取上一次获取的链接，并高亮该链接
					if (!flag) {
						// 判断是否需要高亮默认链接
						if (!settings.key) {
							info.deleteCookie(cookieKey);
							menuSelected(settings.url);
						} else {
							// 判断是不是首页根链接
							var host = window.location.host;
							
							if (url==("http://"+host+"/") || url==("https://"+host+"/")
								|| url==("http://"+host) || url==("https://"+host)) {
								// 是的话，清除cookie
								info.deleteCookie(cookieKey);
							} else {
								var url = info.getCookie(cookieKey);
								if (!url) {
									url = settings.url;
									if (!url.startsWith("/")) {
										url = "/" + url;
									}
								}
								// 自动高亮菜单
								flag = menuSelected(url);
								
								if (!flag) {
									url = settings.url;
									if (!url.startsWith("/")) {
										url = "/" + url;
									}
									menuSelected(url);
								}
							}
						}
					}
				}
				
				/**
				 * 设置菜单自动选中
				 */
				function menuSelected(url) {
					var url2 = url.replace(window.location.host, "").replace("http://", "").replace("https://", "");
					
					// 标识有没有找到匹配的链接
					var flag = false;
					// 遍历菜单
					// 先使用完全匹配
					var menuFlag = false;
					$("#"+menuId+" li").each(function() {
						var href = $(this).children().first().attr("href");
						if (href.indexOf("javascript:page")>=0) {
							href = href.replace(/"/g, "'");
							href = href.replace("javascript:page('", "").replace("');", "").replace("')", "");
						}
						
						if (url2==href) {
							// 完全匹配成功
							menuFlag = true;
							// 找到匹配的链接时，设置cookie
							flag = true;
							info.setCookie(cookieKey, url);
							
							// 判断该菜单是不是展开菜单
							if ($(this).hasClass("javaex-menu-item")) {
								// 没有展开菜单时，其本身高亮
								// 清除所有菜单项的高亮
								$("#"+menuId+" li.javaex-menu-item").removeClass("hover");
								$("#"+menuId+" li.javaex-menu-item ul li").removeClass("hover");
								// 为当前点击菜单添加高亮
								$(this).addClass("hover");
							} else {
								$(this).addClass("hover").siblings().removeClass("hover");
								$(this).parent().parent().addClass("javaex-menu-show hover");
							}
							return;
						}
					});
					
					// 如果完全匹配失败，再使用关键词匹配
					if (!menuFlag) {
						$("#"+menuId+" li").each(function() {
							var href = $(this).children().first().attr("href");
							if (url.indexOf(href)>=0) {
								// 找到匹配的链接时，设置cookie
								flag = true;
								info.setCookie(cookieKey, url);
								
								// 判断该菜单是不是展开菜单
								if ($(this).hasClass("javaex-menu-item")) {
									// 没有展开菜单时，其本身高亮
									// 清除所有菜单项的高亮
									$("#"+menuId+" li.javaex-menu-item").removeClass("hover");
									$("#"+menuId+" li.javaex-menu-item ul li").removeClass("hover");
									// 为当前点击菜单添加高亮
									$(this).addClass("hover");
								} else {
									$(this).addClass("hover").siblings().removeClass("hover");
									$(this).parent().parent().addClass("javaex-menu-show");
								}
								return;
							}
						});
					}
					
					return flag;
				}
			},
			
			// Tab切换
			tab : function(args) {
				var settings = defaults(args);
				var tabId = settings.id;
				var current = parseInt(settings.current);
				var mode = settings.mode;
				var display = settings.display;
				
				// 为当前选中的选项卡添加样式
				$("#" + tabId + " .javaex-tab-title ul li").each(function(i) {
					if (i==(current-1)) {
						$(this).addClass("current");
					}
				});
				
				// 显示当前选中的选项卡的内容，隐藏其他选项卡的内容
				$("#" + tabId + " .javaex-tab-content>div").each(function(i) {
					if (i==(current-1)) {
						$(this).css("display", display);
					} else {
						$(this).css("display", "none");
					}
				});
				
				// 初始化返回回调函数，返回选项卡的索引，从1开始计
				if (settings.isInit) {
					settings.callback({
						"index" : current
					});
				}
				
				// 判断鼠标移动切换还是鼠标点击切换
				// 鼠标移动切换
				if (mode=="mouseover") {
					$("#" + tabId + " .javaex-tab-title ul li").mouseover(function() {
						$this = $(this);
						setTimeout(function() {
							$this.addClass("current").siblings().removeClass("current");
							$("#" + tabId + " .javaex-tab-content>div:eq(" + $this.index() + ")").show().siblings().hide();
							// 触发图片懒加载机制
							$(settings.container).trigger(settings.event);
							// 设置回调函数，返回选项卡的索引，从1开始计
							settings.callback({
								"index" : $this.index() + 1
							});
						}, settings.delay);
					});
				}
				// 鼠标点击切换
				else if (mode=="click") {
					$("#" + tabId + " .javaex-tab-title ul li").click(function() {
						$(this).addClass("current").siblings().removeClass("current");
						$("#" + tabId + " .javaex-tab-content>div:eq(" + $(this).index() + ")").show().siblings().hide();
						// 触发图片懒加载机制
						$(settings.container).trigger(settings.event);
						// 设置回调函数，返回选项卡的索引，从1开始计
						settings.callback({
							"index" : $(this).index() + 1
						});
					});
				}
			},
			
			// 表格
			initTable : function(tableId) {
				// 将所有列的排序标识初始化
				$("#" + tableId + " thead tr th").find(".javaex-table-sort-icon").css("opacity", 0.3);
			},
			table : function(args) {
				var settings = defaults(args);
				var tableId = settings.id;
				var mergeColArr = settings.mergeColArr;
				var tree = settings.tree;
				var isDragColWidth = settings.isDragColWidth;      // 是否允许拖动列宽
				var mode = settings.mode;    // 拖动列宽模式：overflow表示允许使用父容器溢出来调整列的大小
				var leftFixedColNum = parseInt(settings.leftFixedColNum);    // 左侧固定列数
				var rightFixedColNum = parseInt(settings.rightFixedColNum);  // 右侧固定列数
				var sort = settings.sort;    // 排序字段
				var sortSingle = settings.sortSingle;  // 是否只对单列进行排序
				var colWidth = settings.colWidth;      // 为未设置宽度的列设置指定的宽度
				var $table = $("#" + tableId);
				
				// 为未设置宽度的列设置指定的宽度
				if (!!colWidth) {
					if (String(colWidth).indexOf("px")==-1) {
						colWidth = colWidth + "px";
					}
					
					$table.find("thead tr th").each(function(i) {
						if (!$(this)[0].style.width && !$(this).hasClass("javaex-table-num-col") && !$(this).hasClass("javaex-table-filter-col")) {
							$(this).width(colWidth);
						}
					});
				}
				
				// 列排序
				if (sort!=null) {
					setSortCol(tableId);
				}
				
				// 固定列
				if (leftFixedColNum>0 || rightFixedColNum>0) {
					fixedCol(tableId);
				}
				
				/**
				 * 列排序
				 */
				function setSortCol(tableId) {
					var html = '<svg class="javaex-table-sort-svg" focusable="false" viewBox="0 0 1024 1024" aria-hidden="true" role="presentation"><path class="javaex-table-sort-icon" d="M381.1,165.5c-18.7-7.5-53-3.8-67.4,11.2L176.9,314.3c-9.6,9.6-14.9,22.5-14.9,35.9s5.3,26.2,14.9,35.9 c19.7,19.8,51.7,19.3,70.9,0l64.1-64.7l-0.2,490.5c0,27.9,22.4,50.4,50.1,50.4c27.7,0,50.1-22.5,50.1-50.4V212.2 C412.1,191.8,400.3,173.5,381.1,165.5z"></path><path class="javaex-table-sort-icon" d="M847.5,636.9c-19.7-19.8-51.7-19.3-70.9,0L712,700.1l0.7-488c0-27.8-22.4-50.3-50.1-50.3 c-27.7,0-50.1,22.5-50.1,50.3v598.9c0,20.9,12.3,39.1,31.5,47.1c5.9,2.7,12.3,3.7,18.7,3.7c13.3,0,38.6-5.3,48.2-15l137.3-138.1 C866.7,688.8,866.7,656.7,847.5,636.9z"></path></svg>';
					
					for (let i in sort) {
						let field = sort[i];
						
						let $th = $("#" + tableId + " thead tr:first").children("th").eq(--i);
						if ($th.children(".javaex-table-sort").length==0) {
							$th.append('<a class="javaex-table-sort"></a>');
							
							$th.children(".javaex-table-sort").empty();
							$th.children(".javaex-table-sort").append(html);
							
							let $sort = $th.children(".javaex-table-sort");
							$sort.bind("click", function() {
								let $sort0 = $sort.find(".javaex-table-sort-icon").eq(0);
								let $sort1 = $sort.find(".javaex-table-sort-icon").eq(1);
								let sort1Opacity = $sort1.css("opacity");
								var sortArr = new Array();
								
								if (sortSingle) {
									// 将所有列的排序标识初始化
									$("#" + tableId + " thead tr th").find(".javaex-table-sort-icon").css("opacity", 0.3);
									// 设置当前列的排序高亮
									if (sort1Opacity == 0.7) {
										$sort0.css("opacity", 0.7);
										$sort1.css("opacity", 0.3);
										
										sortArr.push(field + "=asc");
									} else {
										$sort0.css("opacity", 0.3);
										$sort1.css("opacity", 0.7);
										
										sortArr.push(field + "=desc");
									}
								} else {
									// 设置当前列的排序高亮
									if (sort1Opacity == 0.7) {
										$sort0.css("opacity", 0.7);
										$sort1.css("opacity", 0.3);
									} else {
										$sort0.css("opacity", 0.3);
										$sort1.css("opacity", 0.7);
									}
									
									for (let j in sort) {
										let fieldTemp = sort[j];
										
										let $thTemp = $("#" + tableId + " thead tr:first").children("th").eq(--j);
										let $sortTemp0 = $thTemp.find(".javaex-table-sort-icon").eq(0);
										let $sortTemp1 = $thTemp.find(".javaex-table-sort-icon").eq(1);
										
										if ($sortTemp0.css("opacity") == 0.7) {
											sortArr.push(fieldTemp + "=asc");
										}
										else if ($sortTemp1.css("opacity") == 0.7) {
											sortArr.push(fieldTemp + "=desc");
										}
									}
								}
								
								// 返回排序回调
								settings.sortCallback({
									"sortArr" : sortArr
								});
							});
						}
					}
				}
				
				/**
				 * 固定列
				 */
				function fixedCol(tableId) {
					var fixedTableParentId = "javaex-fixed-table-parent-" + tableId;
					if ($("#"+fixedTableParentId).length==0) {
						// 在指定的表格父级套一个div
						$table.wrap('<div id="' + fixedTableParentId + '" class="javaex-fixed-table-parent"></div>');
					}
					var $fixedTableParent = $("#" + fixedTableParentId);
					
					var tableWidth = $table.width();                           // 获取表格宽度
					let right = $fixedTableParent.width() - tableWidth - 2;    // 用于计算右侧固定栏所用
					var colLen = document.getElementById(tableId).rows[0].cells.length;  // 获取表格的列数
					
					// 激活滚动条
					if ($fixedTableParent.scrollLeft() == 0) {
						$fixedTableParent.scrollLeft(1);
					}
					// 滚动滚动条事件
					$fixedTableParent.scroll(function() {
						var left = $fixedTableParent.scrollLeft();
						left = left + 0.1;
						
						// 获取表格的所有tr
						var trs = $("#" + tableId + " tr");
						trs.each(function() {
							if (leftFixedColNum>0) {
								if (leftFixedColNum==1) {
									$(this).children().eq(0).addClass("javaex-table-col-fixed javaex-fixed-alone");
									$(this).children().eq(0).css({
										"left": left + "px"
									});
								} else {
									for (let i=0; i<leftFixedColNum; i++) {
										if (i==0) {
											$(this).children().eq(i).addClass("javaex-table-col-fixed javaex-fixed-left");
											$(this).children().eq(i).css({
												"left": left + "px"
											});
										} else if (i == (leftFixedColNum-1)) {
											$(this).children().eq(i).addClass("javaex-table-col-fixed javaex-fixed-right");
											$(this).children().eq(i).css({
												"left": left + "px"
											});
										} else {
											$(this).children().eq(i).addClass("javaex-table-col-fixed javaex-fixed-center");
											$(this).children().eq(i).css({
												"left": left + "px"
											});
										}
									}
								}
							}
							
							if (rightFixedColNum>0) {
								for (let i=0; i<rightFixedColNum; i++) {
									let index = colLen - (i+1);
									
									if (i == (rightFixedColNum-1)) {
										$(this).children().eq(index).addClass("javaex-table-col-fixed javaex-fixed-left");
										$(this).children().eq(index).css({
											"left": (right + left) + "px"
										});
									} else {
										$(this).children().eq(index).addClass("javaex-table-col-fixed javaex-fixed-center");
										$(this).children().eq(index).css({
											"left": (right + left) + "px"
										});
									}
								}
							}
						});
					});
				}
				
				// 拖动列宽
				if (isDragColWidth) {
					var curTH;
					var oTable = document.getElementById(tableId);
					var minWidth = oTable.offsetWidth;
					var len = oTable.rows[0].cells.length;
					
					for (let i=0; i<len; i++) {
						// 更改鼠标样式
						oTable.rows[0].cells[i].onmousemove = function(event) {
							if (event.offsetX > (this.offsetWidth - 10)) {
								this.style.cursor = "col-resize";
							} else {
								this.style.cursor = "auto";
							}
						};
						
						oTable.rows[0].cells[i].onmousedown = function() {
							// 记录单元格
							curTH = this;
							if (event.offsetX > (curTH.offsetWidth - 10)) {
								curTH.mouseDown = true;
								curTH.oldX = event.x;
								curTH.oldWidth = curTH.offsetWidth;
							}
							
							if (mode=="overflow") {
								curTH.tableWidth = oTable.offsetWidth;
							}
							
							oTable.rows[0].cells[i].onmouseup = function() {
								// 结束宽度调整
								if (!curTH) {
									curTH = this;
								}
								curTH.mouseDown = false;
								curTH.style.cursor = "auto";
								
								// 固定列
								if (leftFixedColNum>0 || rightFixedColNum>0) {
									fixedCol(tableId);
								}
							};
							
							oTable.onmousemove = oTable.rows[0].cells[i].onmousemove = function(event) {
								if (event.offsetX > (this.offsetWidth - 10)) {
									this.style.cursor = "col-resize";
								} else {
									this.style.cursor = "auto";
								}
								
								// 取出暂存的oTable cell
								if (!curTH) {
									curTH = this;
								}
								
								// 调整宽度
								if (curTH.mouseDown!=null && curTH.mouseDown) {
									curTH.style.cursor = "auto";
									if ((curTH.oldWidth + (event.x - curTH.oldX)) > 80) {
										curTH.width = curTH.oldWidth + (event.x - curTH.oldX);
									}
									
									// 调整列宽
									curTH.style.width = curTH.width + "px";
									curTH.style.cursor = "col-resize";
									
									if (mode=="overflow") {
										// 调整整个表
										oTable.width = curTH.tableWidth + (curTH.offsetWidth - curTH.oldWidth);
										if (oTable.width > minWidth) {
											oTable.style.width = oTable.width + "px";
										}
									}
								}
								
								return false;
							};
							
							return false;
						};
						
						// 防止用户在鼠标按下的状态下，又移动到tr行上再放开导致的BUG
						document.onmouseup = function() {
							if (!!curTH) {
								curTH.mouseDown = false;
								curTH.style.cursor = "auto";
								oTable.onmousemove = null;
							}
						};
					}
				}
				
				// 表格根据内容自动合并
				if (mergeColArr.length>0) {
					for (let i=0; i<mergeColArr.length; i++) {
						// mergeColArr[i]-1是因为数组从0开始计算，而页面默认第一行或第一列从1开始计算
						tableMerge($("#"+tableId), mergeColArr[i]-1);
					}
					
					// 清理数据：removeData() 方法移除之前通过 data() 方法设置的数据
					$("#"+tableId).removeData();
				}
				
				// 树形列
				if (parseInt(tree)>0) {
					$("#"+tableId+" tbody tr").each(function() {
						setPaddingLeft($(this));
					});
					
					$("#"+tableId+" .icon-caret-down, " + "#" + tableId + " icon-caret-right").on("click", function(e) {
						if ($(this).hasClass("icon-caret-down")) {
							$(this).addClass("icon-caret-right").removeClass("icon-caret-down");
						} else {
							$(this).addClass("icon-caret-down").removeClass("icon-caret-right");
						}
						var flag = false;
						var objTr = $(this).closest("tr");
						// 判断是否闭合状态
						objTr.nextAll("tr").each(function() {
							var parentId = $(this).attr("parentId");
							if (parentId==objTr.attr("id")) {
								if ($(this).is(":hidden")) {
									flag = true;
									$(this).show();
									$(this).addClass("javaex-animated-slide-down");
								}
							}
						});
						
						if (!flag) {
							hideTr(objTr);
						}
						
						e.stopPropagation();
					});
					
					// 是否默认闭合
					if (settings.isClose) {
						$("#"+tableId+" .icon-caret-down").each(function() {
							if ($(this).closest("tr").is(":visible")) {
								$(this).click();
							}
						});
					}
				}
				
				/**
				 * 自动添加展开图标
				 */
				function setPaddingLeft(objTr) {
					var flag = false;
					var id = objTr.attr("id");
					objTr.nextAll("tr").each(function() {
						if ($(this).attr("parentId")==id) {
							flag = true;
							if (objTr.children("td:eq("+(tree-1)+")").children("span.icon-caret-down").length==0) {
								objTr.children("td:eq("+(tree-1)+")").prepend('<span class="javaex-tree-icon icon-caret-down" style="font-size: 16px;"></span>');
							}
							var paddingLeft = parseInt($(this).children("td:eq("+(tree-1)+")").css("padding-left"));
							$(this).children("td:eq("+(tree-1)+")").css("padding-left", (paddingLeft+16)+"px");
							setPaddingLeft($(this));
						}
					});
					if (!flag) {
						var objTd = objTr.children("td:eq("+(tree-1)+")");
						objTd.children("span.icon-caret-down").remove();
						// 查询其上一个符合条件的tr的td的padding-feft
						objTr.prevAll().each(function() {
							if ($(this).children("td:eq("+(tree-1)+")").children("span.icon-caret-down").length>0) {
								var paddingLeft = parseInt($(this).children("td:eq("+(tree-1)+")").css("padding-left"));
								
								if (objTd.closest("tr").attr("parentId")==$(this).attr("id")) {
									objTd.css("padding-left", (paddingLeft + 24) + "px");
								}
								
								return false;
							}
						});
					}
				}
				
				/**
				 * 隐藏tr行
				 */
				function hideTr(objTr) {
					var id = objTr.attr("id");
					objTr.nextAll("tr").each(function() {
						if ($(this).attr("parentId")==id) {
							if ($(this).children("td:eq("+(tree-1)+")").children("span.icon-caret-down").length>0) {
								$(this).children("td:eq("+(tree-1)+")").children("span.icon-caret-down").addClass("icon-caret-right").removeClass("icon-caret-down");
							}
							$(this).hide();
							$(this).removeClass("javaex-animated-slide-down");
							hideTr($(this));
						}
					});
				}
				
				/**
				 * 表格根据内容自动合并
				 */
				function tableMerge(obj, colIndex) {
					 // 存放单元格内容
					obj.data("content", "");
					// 默认为1，即不跨行
					obj.data("rowspan", 1);
					// 与上一行比较结果不同的td, 默认一个"空"的jquery对象
					// 例如合并前3行，则表示第4行的td
					obj.data("td", $());
					// 表格的总行数，用于最后一行做特殊处理时进行判断之用
					obj.data("trNum", $("#"+tableId+" tbody tr").length);
					// 遍历每一行的数据，关键是定位td, 和其对应的rowspan
					$("tbody tr", obj).each(function(index) {
						var $tr = $(this);
						// :eq() 选择器选取带有指定 index 值的元素。td:eq中的colIndex即列索引
						var $td = $("td:eq(" + colIndex + ")", $tr);
						var currentContent = $td.html();
						
						// 根据内容自动合并
						if (obj.data("content")=="") {
							obj.data("content", currentContent);
							obj.data("td", $td);
						} else {
							// 当前行的内容与上一行相同时
							if (obj.data("content")==currentContent) {
								// rowspan累加
								addRowspan();
							} else {
								// 重新指定一个新的rowspan
								newRowspan();
							}
						}
						
						/**
						 * rowspan累加
						 */
						function addRowspan() {
							var rowspan = obj.data("rowspan") + 1;
							obj.data("rowspan", rowspan);
							$td.hide();
							// 最后一行的情况比较特殊一点
							// 比如最后2行 td中的内容是一样的, 那么到最后一行就应该把此时的td里保存的td设置rowspan
							if (++index == obj.data("trNum")) {
								obj.data("td").attr("rowspan", obj.data("rowspan"));
							}
						}
						
						/**
						 * 重新指定一个新的rowspan
						 */
						function newRowspan() {
							// rowspan默认为1，如果统计出的rowspan没有变化，则不处理
							if (obj.data("rowspan")!=1) {
								obj.data("td").attr("rowspan", obj.data("rowspan"));
							}
							// 保存第一次出现不同内容的td, 和其内容, 重置rowspan
							obj.data("td", $td);
							obj.data("content", $td.html());
							obj.data("rowspan", 1);
						}
					});
				}
			},
			
			// 复制代码（highlight.js专用）
			copy : function() {
				// 遍历页面上所有的<pre></pre>
				const oPres = document.getElementsByTagName("pre");
				for (let i=0; i<oPres.length; i++) {
					let oPre = oPres[i];
					
					// 生成唯一id
					let UUID = info.getUUID();
					let id = "javaex-code-" + UUID;
					
					// 生成复制按钮
					let copyBtn = '<div class="javaex-codecopy-btn" data-title="复制" data-clipboard-target="#' + id + '" onclick="javaex.javaexCopyBtnClick(this)" onmouseout="javaex.javaexCopyBtnMouseout(this)"></div>';
					
					oPre.setAttribute("id", id);
					
					// 将复制按钮追加至页面
					let html = oPre.innerHTML + copyBtn;
					oPre.innerHTML = html;
				}
				
				// 初始化复制功能
				const clipboardJs = new ClipboardJS('.javaex-codecopy-btn');
			},
			// 点击复制按钮
			javaexCopyBtnClick : function(obj) {
				obj.setAttribute("data-title", "复制成功");
			},
			// 鼠标移出复制按钮
			javaexCopyBtnMouseout : function(obj) {
				setTimeout(function () {
					obj.setAttribute("data-title", "复制");
				}, 1500);
			},
			
			// select下拉选择框（多选模式）
			selectCheckbox : function(args) {
				var settings = defaults(args);
				var selectId = settings.id;
				var isShowAllCheck = settings.isShowAllCheck;
				var minWidth = parseInt(settings.minWidth);
				var dataList = settings.dataList;
				// 多选模式的一些属性
				var checkboxName = "name-" + selectId;
				var checkAllListen = "listen-" + selectId;
				var checkChildListen = "listen-" + selectId + "-child";
				
				$("#span-"+selectId).remove();
				
				// 先隐藏页面的select元素
				var $select = $("#"+selectId);
				if ($select.length==0) {
					return false;
				}
				$select.css("display", "none");
				
				// 生成样式代码
				var selectHtml = '<div id="span-'+selectId+'" class="javaex-select-box">';
				selectHtml += '<div id="input-'+selectId+'" class="javaex-select"></div>';
				selectHtml += '<span id="icon-'+selectId+'" class="icon-angle-down javaex-select-close"></span>';
				selectHtml += '<ul id="ul-'+selectId+'" class="javaex-select-ul"></ul>';
				selectHtml += '</div>';
				$select.before(selectHtml);
				
				// 判断是否禁用
				if ($select.prop("disabled")) {
					$("#input-"+selectId).addClass("disabled");
				}
				
				// 设置宽度
				var width = $select[0].style.width;
				if (!!width) {
					$("#input-"+selectId).css("width", width);
					$("#span-"+selectId).css("width", width);
				} else {
					// 获取选项最大宽度
					width = $select.width();
					if (width<minWidth) {
						width = minWidth;
					}
					$("#input-"+selectId).css("width", width + "px");
				}
				
				// 为列表添加内容
				var $ul = $("#ul-"+selectId);
				$ul.empty();
				if (dataList.length>0) {
					var liHtml = '';
					$.each(dataList, function(i, data) {
						// 禁用或选中
						let tempStr = '';
						if (data.selected) {
							tempStr += ' selected ';
						}
						if (data.disabled) {
							tempStr += ' disabled="disabled" ';
						}
						
						liHtml += '<li javaex-val="' + data.value + '"' + tempStr + '>' + data.text + '</li>';
					});
					
					$ul.html(liHtml);
				} else {
					$ul.html($select.html().replace(/<option/g, '<li').replace(/<\/option>/g, '</li>').replace(/value=/g, 'javaex-val='));
				}
				
				var $ulLi = $("#ul-"+selectId+" li");
				// 添加属性
				$ulLi.addClass("javaex-select-ul-item");
				// 遍历并修改样式与回显
				$ulLi.each(function(i) {
					if (!!$(this).attr("disabled")) {
						$(this).addClass("javaex-disabled");
					}
					
					let val = $(this).attr("javaex-val");
					let text = $(this).text().trim();
					
					// 禁用或选中
					let tempStr = '';
					if (!!$(this).attr("disabled")) {
						tempStr += ' disabled="disabled" ';
					}
					if (!!$(this).attr("selected")) {
						tempStr += ' checked ';
					}
					
					$(this).html('<input type="checkbox" class="javaex-fill" name="'+checkboxName+'" listen="'+checkChildListen+'" value="'+val+'" '+tempStr+' />' + text);
					
					if (i == $ulLi.length-1) {
						if (isShowAllCheck) {
							$ul.prepend('<li class="javaex-select-ul-item"><input type="checkbox" class="javaex-fill" listen="'+checkAllListen+'"/>全选</li><hr class="javaex-divider"></hr>');
						}
						
						info.render();
						
						info.checkboxCheck($ulLi.first(':checkbox[name="'+checkboxName+'"]'));
						
						let selectValArr = info.getCheckboxVal(checkboxName, true);
						let selectTextArr = info.getCheckboxText(checkboxName, true);
						
						// 将文本回显到input框
						let str = '';
						for (let i=0; i<selectTextArr.length; i++) {
							str += '<i class="javaex-btn mini">' + selectTextArr[i] + '</i>';
						}
						$("#input-"+selectId).html(str);
						
						if (settings.isInit) {
							// 回调函数
							settings.callback({
								"val" : selectValArr,
								"text" : selectTextArr
							});
						}
					}
				});
				
				// 设置下拉列表最大高度
				$ul.css("max-height", 28*parseInt(settings.maxNum) + 2 + "px");
				
				// 绑定select选择框的点击事件
				$("#span-"+selectId).click(function(event) {
					// 关闭时间选择框
					$(".javaex-date-main").css("display", "none");
					
					if ($(this).find("ul").is(":visible")) {
						$(".javaex-select-ul").css("display", "none");
						$(".javaex-select-ul").removeClass("javaex-animated-slide-up javaex-animated-slide-down");
						$(".javaex-select-close").removeClass("javaex-select-open");
						return false;
					}
					
					// 先隐藏所有已展开的选项列表
					$(".javaex-select-ul").css("display", "none");
					$(".javaex-select-close").removeClass("javaex-select-open");
					
					// 判断是否已禁用
					if ($select.prop("disabled")) {
						event.preventDefault();
					} else {
						// 删除属性
						$ulLi.removeClass("javaex-select-ul-item-selected");
						$ulLi.each(function() {
							if ($(this).val()==$("#"+selectId).val()) {
								$(this).addClass("javaex-select-ul-item-selected");
								return false;
							}
						});
						// 显示每一项（因为检索过后，很多项都被隐藏了）
						$ulLi.css("display", "block");
						
						var ulHeight = $ul.height();
						var elHeight = $("#input-"+selectId).height();
						var offsetBottom = $(window).height() - elHeight - ($("#input-"+selectId).offset().top - $(document).scrollTop());
						
						// 显示ul
						// 向上弹出
						if (offsetBottom < (ulHeight+100)) {
							var top = -(ulHeight + 1) + "px";
							$(this).find("ul").removeClass("javaex-animated-slide-down").addClass("javaex-animated-slide-up");
							$(this).find("ul").css({
								"display" :"block",
								"top" : top
							});
						}
						// 向下弹出
						else {
							$(this).find("ul").removeClass("javaex-animated-slide-up").addClass("javaex-animated-slide-down");
							$(this).find("ul").css({
								"display" :"block"
							});
						}
						
						// 箭头旋转180度
						$("#icon-"+selectId).addClass("javaex-select-open");
						
						// 该方法将停止事件的传播，阻止它被分派到其他 Document 节点。
						// 因为涉及到点击空白处隐藏select框，这里必须加这个方法
						event.stopPropagation();
					}
				});
				
				// 选中某一项
				$("#ul-"+selectId+" li").on("click", function(e) {
					if ($(this).hasClass("javaex-disabled")) {
						return false;
					}
					
					var $this = $(this);
					var $checkbox = $this.find(":checkbox.javaex-fill");
					if ($checkbox.is(":checked")) {
						$checkbox.attr("checked", false);
					} else {
						$checkbox.attr("checked", true);
					}
					
					info.checkboxCheck($checkbox);
					
					var selectValArr = info.getCheckboxVal(checkboxName, true);
					var selectTextArr = info.getCheckboxText(checkboxName, true);
					
					// 将文本回显到input框
					var str = '';
					for (let i=0; i<selectTextArr.length; i++) {
						str += '<i class="javaex-btn mini">' + selectTextArr[i] + '</i>';
					}
					$("#input-"+selectId).html(str);
					
					// 回调函数
					settings.callback({
						"val" : selectValArr,
						"text" : selectTextArr
					});
					
					e.preventDefault();
					e.stopPropagation();
				});
				
				// 点击空白处隐藏select框
				$(document).click(function() {
					$("#ul-"+selectId).css("display", "none");
					$("#ul-"+selectId).removeClass("javaex-animated-slide-up javaex-animated-slide-down");
					$("#icon-"+selectId).removeClass("javaex-select-open");
				});
			},
			
			// select下拉选择框
			select : function(args) {
				var settings = defaults(args);
				var mode = settings.mode;
				if (mode=="checkbox") {
					info.selectCheckbox(args);
					return false;
				}
				var selectId = settings.id;
				var dataList = settings.dataList;
				var minWidth = parseInt(settings.minWidth);
				var isSearch = settings.isSearch;
				var hasInputName = settings.hasInputName;
				
				$("#span-"+selectId).remove();
				
				// 先隐藏页面的select元素
				var $select = $("#"+selectId);
				if ($select.length==0) {
					return false;
				}
				$select.css("display", "none");
				
				// 生成样式代码
				var selectHtml = '<div id="span-'+selectId+'" class="javaex-select-box">';
				if (isSearch) {
					if (hasInputName) {
						selectHtml += '<input id="input-'+selectId+'" name="input-'+selectId+'" type="text" class="javaex-select" autocomplete="off" oninput="javaex.selectSearch(\''+selectId+'\', this.value)" />';
					} else {
						selectHtml += '<input id="input-'+selectId+'" type="text" class="javaex-select" autocomplete="off" oninput="javaex.selectSearch(\''+selectId+'\', this.value)" />';
					}
				} else {
					if (hasInputName) {
						selectHtml += '<input id="input-'+selectId+'" name="input-'+selectId+'" type="text" class="javaex-select" autocomplete="off" readonly />';
					} else {
						selectHtml += '<input id="input-'+selectId+'" type="text" class="javaex-select" autocomplete="off" readonly />';
					}
				}
				selectHtml += '<span id="icon-'+selectId+'" class="icon-angle-down javaex-select-close"></span>';
				selectHtml += '<ul id="ul-'+selectId+'" class="javaex-select-ul"></ul>';
				selectHtml += '</div>';
				$select.before(selectHtml);
				
				// 判断是否禁用
				if ($("#"+selectId).prop("disabled")) {
					$("#input-"+selectId).addClass("disabled");
				}
				
				// 设置宽度
				var width = $select[0].style.width;
				if (!!width) {
					$("#input-"+selectId).css("width", width);
					$("#span-"+selectId).css("width", width);
				} else {
					// 获取选项最大宽度
					width = $select.width();
					if (width<minWidth) {
						width = minWidth;
					}
					$("#input-"+selectId).css("width", width + "px");
				}
				
				var $ul = $("#ul-"+selectId);
				// 为列表添加内容
				$ul.empty();
				if (dataList.length>0) {
					var option = '';
					$.each(dataList, function(i, data) {
						// 禁用或选中
						let tempStr = '';
						if (data.selected) {
							tempStr += ' selected ';
						}
						if (data.disabled) {
							tempStr += ' disabled="disabled" ';
						}
						
						option += '<option value="' + data.value + '"' + tempStr + '>' + data.text + '</option>';
					});
					
					$("#"+selectId).html(option);
				}
				$ul.html($("#"+selectId).html());
				
				// 添加属性
				$("#ul-"+selectId+" option").addClass("javaex-select-ul-item");
				// 选中默认值
				$("#ul-"+selectId+" option").each(function() {
					if ($(this).val()==$("#"+selectId).val()) {
						$(this).addClass("javaex-select-ul-item-selected");
						$("#input-"+selectId).val($(this).text().trim());
						
						if (settings.isInit) {
							// 回调函数
							settings.callback({
								"val" : $(this).val(),
								"text" : $(this).text().trim()
							});
						}
						return false;
					}
				});
				
				// 设置下拉列表最大高度
				$ul.css("max-height", 28*parseInt(settings.maxNum) + 2 + "px");
				
				// 绑定select选择框的点击事件
				$("#span-"+selectId).click(function(event) {
					// 关闭时间选择框
					$(".javaex-date-main").css("display", "none");
					
					if ($(this).find("ul").is(":visible")) {
						if (!isSearch) {
							$(".javaex-select-ul").css("display", "none");
							$(".javaex-select-ul").removeClass("javaex-animated-slide-up javaex-animated-slide-down");
							$(".javaex-select-close").removeClass("javaex-select-open");
						}
						
						return false;
					}
					
					// 先隐藏所有已展开的选项列表
					$(".javaex-select-ul").css("display", "none");
					$(".javaex-select-close").removeClass("javaex-select-open");
					
					// 判断是否已禁用
					if ($("#"+selectId).prop("disabled")) {
						event.preventDefault();
					} else {
						// 删除属性
						$("#ul-"+selectId+" option").removeClass("javaex-select-ul-item-selected");
						$("#ul-"+selectId+" option").each(function() {
							if ($(this).val()==$("#"+selectId).val()) {
								$(this).addClass("javaex-select-ul-item-selected");
								return false;
							}
						});
						// 显示每一项（因为检索过后，很多项都被隐藏了）
						$("#ul-"+selectId+" option").css("display", "block");
						
						var ulHeight = $("#ul-"+selectId).height();
						var elHeight = $("#input-"+selectId).height();
						var offsetBottom = $(window).height() - elHeight - ($("#input-"+selectId).offset().top - $(document).scrollTop());
						
						// 显示ul
						// 向上弹出
						if (offsetBottom < (ulHeight+100)) {
							var top = -(ulHeight + 1) + "px";
							$(this).find("ul").removeClass("javaex-animated-slide-down").addClass("javaex-animated-slide-up");
							$(this).find("ul").css({
								"display" :"block",
								"top" : top
							});
						}
						// 向下弹出
						else {
							$(this).find("ul").removeClass("javaex-animated-slide-up").addClass("javaex-animated-slide-down");
							$(this).find("ul").css({
								"display" :"block"
							});
						}
						
						// 箭头旋转180度
						$("#icon-"+selectId).addClass("javaex-select-open");
						
						// 该方法将停止事件的传播，阻止它被分派到其他 Document 节点。
						// 因为涉及到点击空白处隐藏select框，这里必须加这个方法
						event.stopPropagation();
					}
				});
				
				// 选中某一项
				$("#ul-"+selectId+" option").on("click", function(e) {
					var selectVal = $(this).val();
					var selectText = $(this).text();
					
					// 设置元素select的值
					$("#"+selectId).val(selectVal);
					// 将文本回显到input框
					$("#input-"+selectId).val($(this).text().trim());
					// 隐藏选择列表
					$("#ul-"+selectId).css("display", "none");
					$("#ul-"+selectId).removeClass("javaex-animated-slide-up javaex-animated-slide-down");
					
					if ($(this).parent().parent().parent().hasClass("javaex-error-parent")) {
						$(this).parent().parent().parent().removeClass("javaex-error-parent");
						$(this).parent().parent().parent().find(".javaex-form-error").remove();
						$(this).parent().parent().parent().find(".javaex-win-hint").remove();
					}
					
					$("#icon-"+selectId).removeClass("javaex-select-open");
					
					// 回调函数
					settings.callback({
						"val" : selectVal,
						"text" : selectText.trim()
					});
					
					// 如果有onchange属性，则手动触发onchange事件
					if (!!$("#"+selectId).attr("onchange")) {
						$("#"+selectId).trigger("change");
					}
					
					e.preventDefault();
					e.stopPropagation();
				});
				
				// 点击空白处隐藏select框
				$(document).click(function() {
					$("#ul-"+selectId).css("display", "none");
					$("#ul-"+selectId).removeClass("javaex-animated-slide-up javaex-animated-slide-down");
					$("#icon-"+selectId).removeClass("javaex-select-open");
				});
			},
			selectSearch : function(selectId, keyword) {
				// 如果检索内容为空
				keyword = keyword.replace(/(^\s*)|(\s*$)/g, "");
				if (keyword=="") {
					// 则显示所有选项
					$("#ul-"+selectId+" option").show();
				} else {
					// 遍历匹配每一个选项
					$("#ul-"+selectId+" option").each(function(i) {
						// 因为indexOf()方法对大小写敏感，所以这里强制转化为小写后再匹配
						// 如果当前选项不匹配
						if ($(this).text().toLowerCase().indexOf(keyword.toLowerCase())==-1) {
							$(this).css("display", "none");
						} else {
							$(this).css("display", "block");
						}
					});
				}
				
				var ulHeight = $("#ul-"+selectId).height();
				var elHeight = $("#input-"+selectId).height();
				var offsetBottom = $(window).height() - elHeight - ($("#input-"+selectId).offset().top - $(document).scrollTop());
				
				// 向上弹出
				if (offsetBottom < (ulHeight+100)) {
					var top = -(ulHeight) + "px";
					$("#ul-"+selectId).css({
						"width" :$("#span-"+selectId).find("input").width()+22,
						"display" :"block",
						"top" : top
					});
				}
			},
			
			// page分页
			page : function(args) {
				var settings = defaults(args);
				var pageId = settings.id;
				$("#"+pageId).empty();
				
				// 获取总页数
				var totalPages = settings.totalPages;
				if (totalPages==null) {
					return false;
				}
				totalPages = parseInt(totalPages);
				
				// 获取默认选中页
				var pageNum = parseInt(settings.pageNum);
				if (pageNum<1 || pageNum>totalPages) {
					pageNum = 1;
				}
				var goPageNum = pageNum;
				
				// 每页条数
				var pageSize = null;
				if (!!settings.pageSize) {
					pageSize = parseInt(settings.pageSize);
				}
				
				// 总条数
				var totalNum = null;
				if (!!settings.totalNum) {
					totalNum = settings.totalNum;
				}
				
				// 是否显示跳页
				var isShowJumpPage = settings.isShowJumpPage;
				// 是否显示条数选择控件
				var isShowSelect = settings.isShowSelect;
				// 条数选择控件重新选择后，是否返回第1页
				var isReturnFirst = settings.isReturnFirst;
				// 获取显示位置
				var position = settings.position;
				if (position=="left") {
					$("#"+pageId).parent().css("text-align", "left");
				}
				else if (position=="center") {
					$("#"+pageId).parent().css("text-align", "center");
				}
				else if (position=="right") {
					$("#"+pageId).parent().css("text-align", "right");
				}
				
				// 上一页、下一页文字标识
				var lastPageText = settings.lastPageText;
				var nextPageText = settings.nextPageText;
				
				// 显示分页
				showPage(pageId, "jump", goPageNum);
				
				/**
				 * 显示分页
				 */
				function showPage(pageId, type, goPageNum) {
					// 判断总页数数量
					if (totalPages<=0) {
						$("#"+pageId).append('');
						return;
					}
					else if (totalPages<7) {
						if (totalPages==1) {
							if (!settings.isShowOnePage) {
								$("#"+pageId).append('');
								return;
							}
						}
						
						var pageSizeHtml = '';
						if (isShowSelect) {
							pageSizeHtml += '<span class="javaex-hint"><select id="javaex-pageSize-'+pageId+'">';
							for (let i=1; i<=10; i++) {
								if (i*10==pageSize) {
									pageSizeHtml += '<option value="'+i+'0" selected>'+i+'0 条/页</option>';
								} else {
									pageSizeHtml += '<option value="'+i+'0">'+i+'0 条/页</option>';
								}
							}
							pageSizeHtml += '</select></span>';
						}
						
						var html = '<li class="javaex-last-page"><a>'+lastPageText+'</a></li>';
						for (let i=1; i<=totalPages; i++) {
							if (i==pageNum) {
								html += '<li class="active" page="'+i+'"><a>'+i+'</a></li>';
							} else {
								html += '<li page="'+i+'"><a>'+i+'</a></li>';
							}
						}
						html += '<li class="javaex-next-page"><a>'+nextPageText+'</a></li>';
						
						$("#"+pageId).append(pageSizeHtml);
						$("#"+pageId).append(html);
						
						// 显示总条数
						showNumber();
						
						// 初始化
						init(pageId, goPageNum);
					}
					else {
						newPages(pageId, "jump", goPageNum);
					}
				}
				
				/**
				 * 禁用上一页下一页
				 */
				function disableLastAndNextPage(pageNum) {
					if (!pageNum) {
						pageNum = 1;
					}
					// 当前页是第一页
					if (pageNum==1) {
						$("#"+pageId).find(".javaex-last-page").addClass("disabled");
						
						// 总页数也是第一页
						if (totalPages==1) {
							$("#"+pageId).find(".javaex-next-page").addClass("disabled");
						} else {
							$("#"+pageId).find(".javaex-next-page").removeClass("disabled");
						}
					} else {
						$("#"+pageId).find(".javaex-last-page").removeClass("disabled");
						
						// 当前页是最后一页
						if (pageNum==totalPages) {
							$("#"+pageId).find(".javaex-next-page").addClass("disabled");
						} else {
							$("#"+pageId).find(".javaex-next-page").removeClass("disabled");
						}
					}
				}
				
				/**
				 * 初始化
				 */
				function init(pageId, curPageNum) {
					if (isShowSelect) {
						info.select({
							id : "javaex-pageSize-" + pageId,
							maxNum : 10,
							minWidth : 88,
							callback: function (rtn) {
								if (pageSize!=rtn.val) {
									if (isReturnFirst) {
										pageNum = 1;
									} else {
										pageNum = activePage(pageId, $("#"+pageId).children("li.active"));
									}
									
									pageSize = rtn.val;
									
									settings.callback({
										"pageNum" : parseInt(pageNum),
										"pageSize" : parseInt(pageSize)
									});
								}
							}
						});
					}
					
					// 禁用上一页下一页
					disableLastAndNextPage(curPageNum);
					
					// 监听跳页事件
					$("#javaex-button-mini-"+pageId).click(function() {
						var goPageNum = $("#javaex-pager-"+pageId).val();
						
						if (isNaN(goPageNum)) {
							goPageNum = 1;
						} else {
							goPageNum = parseInt(goPageNum);
							if (goPageNum<1) {
								goPageNum = 1;
							} else if (goPageNum>totalPages) {
								goPageNum = totalPages;
							}
						}
						
						if (pageNum==goPageNum) {
							return false;
						}
						
						pageNum = goPageNum;
						
						$("#"+pageId).empty();
						showPage(pageId, "jump", goPageNum);
						
						settings.callback({
							"pageNum" : parseInt(goPageNum),
							"pageSize" : parseInt(pageSize)
						});
					});
					
					// 监听点击分页事件
					$("#"+pageId).children("li").click(function() {
						// 当前点击对象（点击非数字时，需要改变）
						var element = $(this);
						// 当前点击的是第几页
						var pageText = $(this).children("a").text();
						// 当前页
						var pageNum = "";
						// 上一页
						var lastPage = $("#"+pageId).children("li.active").attr("page");
						// 判断点击的是数字页还是上一页、下一页之类的
						if (isNaN(pageText)) {
							switch (pageText) {
								case lastPageText:
									if (lastPage=="1") {
										return;
									}
									if (lastPage>=(totalPages-1) || lastPage<=3 || totalPages<7) {
										element = $("#"+pageId).children("li.active").prev();
									} else {
										newPages(pageId, "prev", (parseInt(lastPage)-1));
										element = $("#"+pageId).children("li.active");
									}
									break;
								case nextPageText:
									if (lastPage==totalPages) {
										return;
									}
									if (lastPage>=(totalPages-2) || lastPage<3 || totalPages<7) {
										element = $("#"+pageId).children("li.active").next();
									} else {
										newPages(pageId, "next", (parseInt(lastPage)+1));
										element = $("#"+pageId).children("li.active");
									}
									break;
								case "...":
									return;
							}
						} else {
							pageText = parseInt(pageText);
							if (totalPages>6) {
								if (pageText<=3 || pageText>=(totalPages-3)) {
									newPages(pageId, "jump", pageText);
								}
							}
						}
						
						pageNum = activePage(pageId, element);
						
						// 禁用上一页下一页
						disableLastAndNextPage(pageNum);
						
						if (pageNum!="" && pageNum!=lastPage) {
							// 跳页显示
							$("#javaex-pager-"+pageId).val(pageNum);
							// 条数选择
							if (isShowSelect) {
								pageSize = $("#javaex-pageSize-"+pageId).val();
							}
							
							settings.callback({
								"pageNum" : parseInt(pageNum),
								"pageSize" : parseInt(pageSize)
							});
						}
					});
				}
				
				/**
				 * 激活页
				 */
				function activePage(pageId, element) {
					element.addClass("active").siblings().removeClass("active");
					return $("#"+pageId).children("li.active").text();
				}
				
				/**
				 * 显示总条数
				 */
				function showNumber() {
					var number = '';
					if (!!totalNum || isShowJumpPage) {
						number += '<span class="javaex-hint">当前位置：';
						// 是否显示跳页
						if (isShowJumpPage) {
							number += '<input id="javaex-pager-'+pageId+'" class="javaex-pagination-input-pager" type="number" value="'+pageNum+'"><button id="javaex-button-mini-'+pageId+'" class="javaex-btn-mini">跳页</button>';
						}
						// 是否显示总条数
						if (!!totalNum) {
							number += '  共'+totalNum+'条';
						}
						number += '</span>';
					}
					
					$("#"+pageId).append(number);
				}
				
				/**
				 * 多页
				 */
				function newPages(pageId, type, curPageNum) {
					var htmlLeft = "";
					var htmlRight = "";
					var htmlC = "";
					var HL = '<li><a>...</a></li>';
					var html = '<li class="javaex-last-page"><a>'+lastPageText+'</a></li>';
					for (let n=0; n<3; n++) {
						htmlC += '<li '+((n-1)==0?'class="active"':'')+' page="'+(curPageNum+n-1)+'"><a>'+(curPageNum+n-1)+'</a></li>';
						htmlLeft += '<li '+((n+2)==curPageNum?'class="active"':'')+' page="'+(n+2)+'"><a>'+(n+2)+'</a></li>';
						htmlRight += '<li '+((totalPages+n-3)==curPageNum?'class="active"':'')+' page="'+(totalPages+n-3)+'"><a>'+(totalPages+n-3)+'</a></li>';
					}
					
					switch (type) {
						case "next":
							if (curPageNum<=4) {
								html += '<li page="1"><a>1</a></li>' + htmlLeft + HL + '<li page="' + totalPages + '"><a>' + totalPages + '</a></li>';
							} else if (curPageNum>=(totalPages-3)) {
								html += '<li page="1"><a>1</a></li>' + HL + htmlRight + '<li page="' + totalPages + '"><a>' + totalPages + '</a></li>';
							} else {
								html += '<li page="1"><a>1</a></li>' + HL + htmlC + HL + '<li page="' + totalPages + '"><a>' + totalPages+'</a></li>';
							}
							break;
						case "prev":
							if (curPageNum<=4) {
								html += '<li page="1"><a>1</a></li>' + htmlLeft + HL + '<li page="' + totalPages + '"><a>' + totalPages + '</a></li>';
							} else if (curPageNum>=(totalPages-3)) {
								html += '<li page="1"><a>1</a></li>' + HL + htmlRight + '<li page="' + totalPages + '"><a>' + totalPages + '</a></li>';
							} else {
								html += '<li page="1"><a>1</a></li>' + HL + htmlC + HL + '<li page="' + totalPages + '"><a>' + totalPages + '</a></li>';
							}
							break;
						case "jump":
							if (curPageNum<=4) {
								if (curPageNum==1) {
									html += '<li class="active" page="1"><a>1</a></li>' + htmlLeft + HL + '<li page="' + totalPages + '"><a>' + totalPages + '</a></li>';
								} else {
									html += '<li page="1"><a>1</a></li>' + htmlLeft + HL + '<li page="' + totalPages + '"><a>' + totalPages + '</a></li>';
								}
							} else if((curPageNum>=totalPages-3) && (totalPages>=7)) {
								if (curPageNum==totalPages) {
									html += '<li page="1"><a>1</a></li>' + HL + htmlRight + '<li class="active" page="' + totalPages + '"><a>' + totalPages + '</a></li>';
								}else{
									html += '<li page="1"><a>1</a></li>' + HL + htmlRight + '<li page="' + totalPages + '"><a>' + totalPages + '</a></li>';
								}
							} else {
								html += '<li page="1"><a>1</a></li>' + HL + htmlC + HL + '<li page="' + totalPages + '"><a>' + totalPages + '</a></li>';
							}
					}
					
					html += '<li class="javaex-next-page"><a>'+nextPageText+'</a></li>';
					
					if (totalPages>5 || totalPages<3) {
						var pageSizeHtml = '';
						if (isShowSelect) {
							pageSizeHtml += '<span class="javaex-hint"><select id="javaex-pageSize-'+pageId+'">';
							for (let i=1; i<=10; i++) {
								if (i*10==pageSize) {
									pageSizeHtml += '<option value="'+i+'0" selected>'+i+'0 条/页</option>';
								} else {
									pageSizeHtml += '<option value="'+i+'0">'+i+'0 条/页</option>';
								}
							}
							pageSizeHtml += '</select></span>';
						}
						$("#"+pageId).empty();
						$("#"+pageId).append(pageSizeHtml);
						$("#"+pageId).append(html);
						
						// 显示总条数
						showNumber();
						
						init(pageId, curPageNum);
					}
				}
			},
			
			// 流加载
			loadDataFunction : "",
			isOver : "",	// 哪一块内容区域已经没有更多数据了
			flow : function(args) {
				var settings = defaults(args);
				var pageId = settings.id;
				info.loadDataFunction = settings.loadDataFunction;
				
				var bottomH = 50;//距离底部多少像素开始加载
				
				init();
				
				function init() {
					// 事先在下方插入加载占位div
					var flowLoadingId = "flow-loading-" + pageId;
					var obj = document.getElementById(flowLoadingId);
					if (obj==null) {
						$("#"+pageId).after('<div id="'+flowLoadingId+'" class="javaex-flow-box" style="display: none;"><div class="javaex-flow-loading"></div></div>');
					}
					
					$("#" + flowLoadingId).show();
					info.loadDown(pageId);
					
					$(window).scroll(function() {
						var totalheight = parseFloat($(window).height()) + parseFloat($(window).scrollTop() + bottomH);
						if (($(document).height() <= totalheight) && (info.isOver!=pageId)) {
							$("#" + flowLoadingId).show();
							info.loadDown(pageId);
						} else {
							$("#" + flowLoadingId).hide();
						}
					});
				}
			},
			// 设置已无加载数据
			over : function(pageId) {
				info.isOver = pageId;
			},
			// 向下方加载数据
			loadDown : function(pageId) {
				info.loadDataFunction();
			},
			
			// 幻灯片
			slide : function(args) {
				var settings = defaults(args);
				var id = settings.id;
				var slide = $("#"+id);
				// 是否自动轮播
				var isAutoPlay = settings.isAutoPlay;
				// 切换效果
				var effect = settings.effect;
				// 开始切换的位置（即从第几张图开始切换），从1开始计
				var startSlide = parseInt(settings.startSlide);
				var index = startSlide - 1;
				
				// 触发图片懒加载
				var $self = slide.find(".javaex-slide-focus-bg li").eq(index).find("img");
				if ($self.length==0) {
					$self = slide.find(".javaex-slide-focus-bg li").eq(index).find("a");
				}
				var original = $self.attr(settings.dataOriginal);
				if (!!original) {
					if ($self.is("img")) {
						$self.attr("src", original);
					} else {
						$self.css("background-image", "url('" + original + "')");
					}
					$self.removeAttr(settings.dataOriginal);
				}
				settings.callback({
					"index" : index + 1
				});
				
				// 自动轮播间隔多少毫秒
				var delay = parseInt(settings.delay);
				if (delay==200) {
					delay = 2000;
				}
				// 定时器
				var time = null;
				
				var slideBg = slide.find(".javaex-slide-focus-bg");
				var slideLi = slideBg.find("li");
				var count = slideLi.length;
				
				// 切换模式
				switch (effect) {
					case "slice":    // 左右滑动
						settings["width"] = slide.width();
						slideBg.css({
							"width": count * settings["width"] + "px"
						});
						slideLi.css({
							"float" : "left",
							"position": "relative"
						});
						slideLi.show();
						break;
				}
				
				// 默认从第几张开始切换
				slide.find(".javaex-slide-focus-bg li").each(function(i) {
					if (effect=="slice") {
						if (i==index) {
							var sliceWidth = index * slide.width();
							slide.find(".javaex-slide-focus-bg").css({
								"margin-left" : -sliceWidth + "px"
							});
						}
					}
					else if (effect=="smooth") {
						if (i==index) {
							$(this).show();
						} else {
							$(this).hide();
						}
					}
					else {
						if (i==index) {
							$(this).css("opacity", 1);
							$(this).show();
						} else {
							$(this).css("opacity", 0);
							$(this).hide();
						}
					}
				});
				// 默认显示的标题
				if (slide.find(".javaex-slide-focus-title").length>0) {
					slide.find(".javaex-slide-focus-title li").each(function(i) {
						if (i==index) {
							$(this).show();
						} else {
							$(this).hide();
						}
					});
				}
				// 默认高亮的焦点
				if (slide.find(".javaex-slide-focus-box").length>0) {
					// 如果缺省焦点，则自动补充
					if (slide.find(".javaex-slide-focus-box ul").length==0) {
						var html = '<ul>';
						for (let i=0; i<count; i++) {
							html += '<li></li>';
						}
						html += '</ul>';
						slide.find(".javaex-slide-focus-box").empty();
						slide.find(".javaex-slide-focus-box").append(html);
					}
					slide.find(".javaex-slide-focus-box li").eq(index).addClass("on");
				}
				
				// 自动轮播
				autoPlay();
				
				// 点击下一张
				slide.find(".javaex-slide-next").on("click", function() {
					var old = index;
					if (index >= (count-1)) {
						index = 0;
					} else {
						index++;
					}
					change.call(slide, index, old);
				});
				
				// 点击上一张
				slide.find(".javaex-slide-prev").on("click", function() {
					var old = index;
					if (index <= 0) {
						index = count - 1;
					} else {
						index--;
					}
					change.call(slide, index, old);
				});
				
				// 焦点
				slide.find(".javaex-slide-focus-box li").each(function(i) {
					if (settings.focusBoxMode=="mouseover") {
						$(this).on("mouseover.slidebox", function() {
							change.call(slide, i, index);
							index = i;
						});
					} else {
						$(this).on("click.slidebox", function() {
							change.call(slide, i, index);
							index = i;
						});
					}
				});
				
				// 鼠标移到大图时，暂停自动轮播
				slide.on("mouseover", function() {
					if (isAutoPlay) {
						clearInterval(time);
					}
					$(this).find(".javaex-slide-prev-next>div").css({
						"opacity" : 1,
						"visibility" : "visible"
					});
				});
				
				// 鼠标移开大图时，重新开始自动轮播
				slide.on("mouseleave", function() {
					if (isAutoPlay) {
						autoPlay();
					}
					$(this).find(".javaex-slide-prev-next>div").css({
						"opacity" : 0,
						"visibility" : "hidden"
					});
				});
				
				/**
				 * 自动轮播
				 */
				function autoPlay() {
					if (isAutoPlay) {
						time = setInterval(function() {
							var old = index;
							if (index >= (count-1)) {
								index = 0;
							} else {
								index++;
							}
							change.call(slide, index, old);
						},
						delay);
					}
				}
				
				// 焦点是否自动居中
				if (settings.focusCenter) {
					var box = slide.find(".javaex-slide-focus-box");
					box.css("margin-left", -(box.width()/2)+"px");
				}
				
				function change(show, hide) {
					// 背景大图
					// 左右滑动
					if (effect=="slice") {
						var sliceWidth = show * settings["width"];
						slide.find(".javaex-slide-focus-bg").stop().animate({
							"margin-left" : -sliceWidth + "px"
						});
					}
					// 平滑
					else if (effect=="smooth") {
						slide.find(".javaex-slide-focus-bg li").eq(hide).css({
							"display" : "none"
						});
						slide.find(".javaex-slide-focus-bg li").eq(show).css({
							"display" : "list-item"
						});
					}
					// 默认，淡入淡出
					else {
						slide.find(".javaex-slide-focus-bg li").eq(hide).css({
							"opacity" : 0,
							"display" : "none"
						});
						slide.find(".javaex-slide-focus-bg li").eq(show).css({
							"display" : "list-item"
						}).stop().animate({
							"opacity" : 1
						});
					}
					// 标题
					slide.find(".javaex-slide-focus-title li").eq(hide).hide();
					slide.find(".javaex-slide-focus-title li").eq(show).show();
					// 焦点
					slide.find(".javaex-slide-focus-box li").removeClass("on");
					slide.find(".javaex-slide-focus-box li").eq(show).addClass("on");
					
					// 触发图片懒加载
					var $self = slide.find(".javaex-slide-focus-bg li").eq(show).find("img");
					if ($self.length==0) {
						$self = slide.find(".javaex-slide-focus-bg li").eq(show).find("a");
					}
					var original = $self.attr(settings.dataOriginal);
					if (!!original) {
						if ($self.is("img")) {
							$self.attr("src", original);
						} else {
							$self.css("background-image", "url('" + original + "')");
						}
						$self.removeAttr(settings.dataOriginal);
					}
					
					// 回调函数
					settings.callback({
						"index" : show + 1
					});
				}
			},
			
			// 日期选择
			date : function(args) {
				var settings = defaults(args);
				var dateId = settings.id;
				
				// 防止自定义右外边距导致的icon图标错位
				if ($("#"+dateId).parent(".javaex-date-container").length==0) {
					var marginRight = $("#"+dateId).css("marginRight").replace("px", "");
					marginRight = parseInt(marginRight);
					var right = 6 + marginRight;
					$("#"+dateId).wrap('<div class="javaex-date-container"></div>');
					$("#"+dateId).parent(".javaex-date-container").append('<i class="icon-calendar"></i>');
					$("#"+dateId).next(".icon-calendar").css("right", right+"px");
				}
				
				// 控件类型
				var type = settings.type;
				if (!type) {
					type = "yyyy-MM-dd";
				}
				// 是否显示时分秒
				var isTime = false;
				if (type!="yyyy-MM-dd") {
					isTime = true;
				}
				
				// 是否清空
				var isClear = false;
				// 记录初始值，以此来控制取消按钮事件
				var initDate = "";
				var initHMS = "";
				var initStart = "";
				var initEnd = "";
				// 开始日期和结束日期的中间日期
				var hideMidDate = 0;
				
				// 默认日历参数最大是3
				var monthNum = Math.min(parseInt(settings.monthNum), 3);
				
				// 初始化日期选择器面板的HTML代码
				var dateHtml = '<div id="javaex-date-box-' + dateId + '" class="javaex-date-main javaex-animated-slide-down" style="display: none;">';
				dateHtml += '<div class="javaex-date-body javaex-date-ui clear" id="javaex-date-list-' + dateId + '"></div>';
				dateHtml += '<div class="javaex-date-footer javaex-date-ui">';
				dateHtml += '<div class="javaex-data-form-btn" style="display:none;">';
				dateHtml += '<input type="text" id="hide-start-'+dateId+'" value="'+settings.startDate+'" readonly />';
				dateHtml += '<span> - </span>';
				dateHtml += '<input type="text" id="hide-end-'+dateId+'" value="'+settings.endDate+'" readonly />';
				dateHtml += '<input type="text" id="hide-date-'+dateId+'" value="'+settings.date.split(" ")[0]+'" readonly />';
				if (monthNum==1 && isTime) {
					dateHtml += '<input type="text" id="hide-HMS-'+dateId+'" value="'+settings.date.split(" ")[1]+'" readonly />';
				}
				dateHtml += '</div>';
				dateHtml += '<div class="javaex-data-form-btn">';
				dateHtml += '<button class="javaex-btn gray" id="javaex-date-clear-'+dateId+'">清空</button>';
				dateHtml += '<button class="javaex-btn wathet" id="javaex-date-cancel-'+dateId+'">取消</button>';
				dateHtml += '<button class="javaex-btn blue" id="javaex-date-ok-'+dateId+'">确定</button>';
				dateHtml += '</div>';
				dateHtml += '</div>';
				dateHtml += '</div>';
				$(document.body).append(dateHtml);
				
				// 初始化
				init();
				// 关闭日期选择框，并把结果回显到输入框
				close(true);
				
				// 日期框的点击事件
				$("#"+dateId).bind("click", function() {
					if ($("#javaex-date-box-"+dateId).is(":visible")) {
						return;
					}
					
					$(".javaex-date-main").css("display", "none");
					
					if (monthNum==1) {
						initDate = document.getElementById("hide-date-"+dateId).value;
						if (isTime) {
							initHMS = document.getElementById("hide-HMS-"+dateId).value;
						}
					} else {
						initStart = document.getElementById("hide-start-"+dateId).value;
						initEnd = document.getElementById("hide-end-"+dateId).value;
						
						// 获取开始日期和结束日期的中间日期
						if (initStart!="" && initEnd!="") {
							var hideStartDate = str2date(initStart).getTime();
							var hideEndDate = str2date(initEnd).getTime();
							hideMidDate = hideStartDate + (hideEndDate - hideStartDate)/2;
						}
					}
					
					init();
					show();
					return;
				});
				// 日期选择确定按钮的点击事件
				$("#javaex-date-ok-"+dateId).bind("click", function() {
					close(true);
					
					// 设置回调函数，返回一个时间对象，包含开始和结束时间
					if (monthNum==1 && isTime) {
						var str = "";
						var date = $("#hide-date-"+dateId).val();
						if (date=="") {
							str = "";
						} else {
							str = date + " " + getHMStime();
						}
						settings.callback({
							"date": str
						});
					}
					else if (monthNum==1) {
						settings.callback({
							"date": $("#hide-date-"+dateId).val()
						});
					}
					else {
						settings.callback({
							"startDate": $("#hide-start-"+dateId).val(), 
							"endDate": $("#hide-end-"+dateId).val()
						});
					}
					
					return;
				});
				// 日期选择取消按钮的点击事件
				$("#javaex-date-cancel-"+dateId).bind("click", function() {
					// 重新赋值
					if (monthNum==1) {
						document.getElementById("hide-date-"+dateId).value = initDate;
						if (isTime) {
							document.getElementById("hide-HMS-"+dateId).value = initHMS;
						}
					} else {
						document.getElementById("hide-start-"+dateId).value = initStart;
						document.getElementById("hide-end-"+dateId).value = initEnd;
					}
					
					close();
					
					isClear = false;
					return;
				});
				// 日期选择清空按钮的点击事件
				$("#javaex-date-clear-"+dateId).bind("click", function() {
					var date = document.getElementById("hide-date-"+dateId).value;
					var start = document.getElementById("hide-start-"+dateId).value;
					var end = document.getElementById("hide-end-"+dateId).value;
					
					// 先清除样式
					if (monthNum==1) {
						document.getElementById("hide-date-"+dateId).value = "";
						if (isTime) {
							document.getElementById("hide-HMS-"+dateId).value = "";
							$("#javaex-date-hour-"+dateId+" li").removeClass("current");
							$("#javaex-date-minute-"+dateId+" li").removeClass("current");
							$("#javaex-date-second-"+dateId+" li").removeClass("current");
						}
					} else {
						document.getElementById("hide-start-"+dateId).value = "";
						document.getElementById("hide-end-"+dateId).value = "";
					}
					removeCSS();
					
					isClear = true;
					return;
				});
				
				/**
				 * 日期选择器初始化
				 */
				function init() {
					var exDate = this;
					// 清空日期列表的内容
					$("#javaex-date-list-"+dateId).empty();
					
					// 如果结束日期为空，则取当天的日期为结束日期
					var endDate = "";
					if (!settings.endDate) {
						if (!settings.date) {
							endDate = new Date();
						} else {
							endDate = str2date(settings.date.split(" ")[0]);
						}
					} else {
						endDate = str2date(settings.endDate);
					}
					
					// 日历结束时间
					this.calendarEndDate = new Date(endDate.getFullYear(), endDate.getMonth()+1, 0);
					
					// 计算并显示以 endDate 为结尾的最近几个月的日期列表
					if (monthNum==1 && isTime) {
						for (let i=0; i<monthNum; i++) {
							var td = "";
							td = fillDate(endDate.getFullYear(), endDate.getMonth(), i);
							if (0==i) {
								$("#javaex-date-list-"+dateId).append(td);
							} else {
								var firstTd = $("#javaex-date-list-"+dateId).find("table").get(0);
								$(firstTd).before(td);
							}
							endDate.setMonth(endDate.getMonth()-1, 1);
						}
						var timeHtml = '';
						timeHtml += '<table>';
						timeHtml += '<caption>时间选择</caption>';
						timeHtml += '<thead>';
						timeHtml += '<tr>';
						timeHtml += '<th>小时</th>';
						timeHtml += '<th>分钟</th>';
						timeHtml += '<th>秒数</th>';
						timeHtml += '</tr>';
						timeHtml += '</thead>';
						timeHtml += '<tbody>';
						timeHtml += '<tr>';
						
						var hourHtml = '';
						hourHtml += '<td style="padding: 0;">';
						hourHtml += '<ul id="javaex-date-hour-'+dateId+'" style="height: 180px; overflow: auto;">';
						for (let n=0; n<24; n++) {
							if (n<10) {
								hourHtml += '<li>0'+n+'</li>';
							} else {
								hourHtml += '<li>'+n+'</li>';
							}
						}
						hourHtml += '</ul>';
						hourHtml += '</td>';
						timeHtml += hourHtml;
						
						var minuteHtml = '';
						minuteHtml += '<td style="padding: 0;">';
						minuteHtml += '<ul id="javaex-date-minute-'+dateId+'" style="height: 180px; overflow: auto;">';
						for (let n=0; n<60; n++) {
							if (n<10) {
								minuteHtml += '<li>0'+n+'</li>';
							} else {
								minuteHtml += '<li>'+n+'</li>';
							}
						}
						minuteHtml += '</ul>';
						minuteHtml += '</td>';
						timeHtml += minuteHtml;
						
						var secondHtml = '';
						secondHtml += '<td style="padding: 0;">';
						secondHtml += '<ul id="javaex-date-second-'+dateId+'" style="height: 180px; overflow: auto;">';
						for (let n=0; n<60; n++) {
							if (n<10) {
								secondHtml += '<li>0'+n+'</li>';
							} else {
								secondHtml += '<li>'+n+'</li>';
							}
						}
						secondHtml += '</ul>';
						secondHtml += '</td>';
						timeHtml += secondHtml;
						
						timeHtml += '</tr>';
						timeHtml += '</tbody>';
						timeHtml += '</table>';
						$("#javaex-date-list-"+dateId).append(timeHtml);
					} else {
						for (let i=0; i<monthNum; i++) {
							var td = "";
							td = fillDate(endDate.getFullYear(), endDate.getMonth(), i);
							if (0==i) {
								$("#javaex-date-list-"+dateId).append(td);
							} else {
								var firstTd = $("#javaex-date-list-"+dateId).find("table").get(0);
								$(firstTd).before(td);
							}
							endDate.setMonth(endDate.getMonth()-1, 1);
						}
					}
					
					// 日历开始时间
					this.calendarStartDate = new Date(endDate.getFullYear(), endDate.getMonth()+1, 1);
					
					// 上一年
					$("#last-year-"+dateId).bind("click", function() {
						exDate.calendarEndDate.setFullYear(exDate.calendarEndDate.getFullYear()-1, exDate.calendarEndDate.getMonth(), 1);
						settings.endDate = date2ymd(exDate.calendarEndDate).join("-");
						init();
						return;
					});
					// 上一个月
					$("#last-month-"+dateId).bind("click", function() {
						exDate.calendarEndDate.setMonth(exDate.calendarEndDate.getMonth()-1, 1);
						settings.endDate = date2ymd(exDate.calendarEndDate).join("-");
						init();
						return;
					});
					// 下一个月
					$("#next-month-"+dateId).bind("click", function() {
						exDate.calendarEndDate.setMonth(exDate.calendarEndDate.getMonth()+1, 1);
						settings.endDate = date2ymd(exDate.calendarEndDate).join("-");
						init();
						return;
					});
					// 下一年
					$("#next-year-"+dateId).bind("click", function() {
						exDate.calendarEndDate.setFullYear(exDate.calendarEndDate.getFullYear()+1, exDate.calendarEndDate.getMonth(), 1);
						settings.endDate = date2ymd(exDate.calendarEndDate).join("-");
						init();
						return;
					});
					// 小时
					$("#javaex-date-hour-"+dateId+" li").bind("click", function() {
						$(this).addClass("current").siblings().removeClass("current");
						setHMStime();
						return;
					});
					// 分钟
					$("#javaex-date-minute-"+dateId+" li").bind("click", function() {
						$(this).addClass("current").siblings().removeClass("current");
						setHMStime();
						return;
					});
					// 秒数
					$("#javaex-date-second-"+dateId+" li").bind("click", function() {
						$(this).addClass("current").siblings().removeClass("current");
						setHMStime();
						return;
					});
					
					// 添加样式
					addCSS();
				}
				
				/**
				 * 重复对时分秒赋值
				 */
				function setHMStime() {
					var hour = $("#javaex-date-hour-"+dateId+" li.current").text();
					var minute = $("#javaex-date-minute-"+dateId+" li.current").text();
					var second = $("#javaex-date-second-"+dateId+" li.current").text();
					$("#hide-HMS-"+dateId).val(hour+":"+minute+":"+second);
				}
				
				/**
				 * 移除日历的样式
				 */
				function removeCSS() {
					// 整个日期列表的开始日期
					var csd = this.calendarStartDate;
					var ced = this.calendarEndDate;
					
					var bDate = new Date(csd.getFullYear(), csd.getMonth(), csd.getDate());
					var choice = "";
					// 从开始日期循环到结束日期
					for (let d=new Date(bDate); d.getTime()<=ced.getTime(); d.setDate(d.getDate()+1)) {
						// 移除日期样式
						choice = "javaex-data-choice-style";
						// 移除指定样式
						$("#"+dateId+"_date_" + date2ymd(d).join("-")).removeClass(choice);
						$("#"+dateId+"_date_" + date2ymd(d).join("-")).removeClass("javaex-started").removeClass("javaex-ended").removeClass("javaex-selected");
					}
				}
				
				/**
				 * 为选中的日期添加样式
				 */
				function addCSS() {
					// 展示的月份数为1时，视为单选日期
					if (monthNum==1) {
						// 获得选中日期
						var date = str2date($("#hide-date-"+dateId).val());
						// 为选中日期添加特殊样式
						$("#"+dateId+"_date_" + date2ymd(new Date(date)).join("-")).removeClass().addClass("javaex-ended");
						
						// 需要时分秒
						if (isTime) {
							var HMS = $("#hide-HMS-"+dateId).val();
							var arr = HMS.split(":");
							$("#javaex-date-hour-"+dateId+" li").each(function() {
								if ($(this).text()==arr[0]) {
									$(this).addClass("current").siblings().removeClass("current");
									return;
								}
							});
							$("#javaex-date-minute-"+dateId+" li").each(function() {
								if ($(this).text()==arr[1]) {
									$(this).addClass("current").siblings().removeClass("current");
									return;
								}
							});
							$("#javaex-date-second-"+dateId+" li").each(function() {
								if ($(this).text()==arr[2]) {
									$(this).addClass("current").siblings().removeClass("current");
									return;
								}
							});
						}
						return;
					}
					
					// 获得开始、结束日期
					var startDate = str2date($("#hide-start-"+dateId).val());
					var endDate = str2date($("#hide-end-"+dateId).val());
					
					var choice = "";
					for (let d=new Date(startDate); d.getTime()<=endDate.getTime(); d.setDate(d.getDate()+1)) {
						// 添加日期样式
						choice = "javaex-data-choice-style";
						$("#"+dateId+"_date_" + date2ymd(d).join("-")).removeClass("javaex-started").removeClass("javaex-ended").removeClass("javaex-selected");
						$("#"+dateId+"_date_" + date2ymd(d).join("-")).removeClass(choice);
						$("#"+dateId+"_date_" + date2ymd(d).join("-")).attr("class", choice);
					}
					
					// 为开始、结束日期添加特殊样式
					$("#"+dateId+"_date_" + date2ymd(new Date(startDate)).join("-")).removeClass().addClass("javaex-started");
					$("#"+dateId+"_date_" + date2ymd(new Date(endDate)).join("-")).removeClass().addClass("javaex-ended");
				}
				
				/**
				 * 选择日期
				 * ymd : 时间字符串
				 */
				function selectDate(ymd) {
					isClear = false;
					
					// 格式化日期
					var ymdFormat = formatDate(ymd);
					
					// 如果是单选日期
					if (this.dateInput==("hide-date-" + dateId)) {
						// 移除样式
						removeCSS();
						// 为当前点添加样式
						$("#"+dateId+"_date_" + ymd).attr("class", "javaex-selected");
						// 更改对应输入框的值
						$("#" + this.dateInput).val(ymdFormat);
						return;
					}
					
					// 如果是范围日期
					// 如果没有选择日期
					if ($("#" + this.dateInput).val()=="") {
						// start、end input切换
						if (this.dateInput==("hide-start-" + dateId)) {
							// 移除样式
							removeCSS();
							// 为当前点添加样式
							$("#"+dateId+"_date_" + ymd).attr("class", "javaex-selected");
							// 更改对应输入框的值
							$("#" + this.dateInput).val(ymdFormat);
							this.dateInput = "hide-end-" + dateId;
						} else if (this.dateInput==("hide-end-" + dateId)) {
							// 如果开始时间未选
							if ($("#hide-start-"+dateId).val()=="") {
								this.dateInput = "hide-start-" + dateId;
								selectDate(ymd);
								return;
							}
							// 更改对应输入框的值
							$("#" + this.dateInput).val(ymdFormat);
							// 切换输入框焦点
							this.dateInput = "hide-start-" + dateId;
							
							// 如果endDateTime小于hideStartDate，则相互交换
							var hideStartDate = str2date($("#hide-start-"+dateId).val()).getTime();
							var hideEndDate = str2date($("#hide-end-"+dateId).val()).getTime();
							if (hideEndDate<hideStartDate) {
								var tmp = $("#hide-start-"+dateId).val();
								$("#hide-start-"+dateId).val($("#hide-end-"+dateId).val());
								$("#hide-end-"+dateId).val(tmp);
							}
							
							removeCSS();
							addCSS();
						}
					} else {
						var nowClickDate = str2date(ymdFormat).getTime();
						
						// 如果此次点击的日期比中间日期小
						if (nowClickDate<hideMidDate) {
							// 变更开始日期，结束日期不变
							$("#hide-start-"+dateId).val(ymdFormat);
						} else {
							// 如果此次点击的日期大于等于中间日期
							// 变更结束日期，开始日期不变
							$("#hide-end-"+dateId).val(ymdFormat);
						}
						removeCSS();
						addCSS();
						var hideStartDate = str2date($("#hide-start-"+dateId).val()).getTime();
						var hideEndDate = str2date($("#hide-end-"+dateId).val()).getTime();
						hideMidDate = hideStartDate + (hideEndDate - hideStartDate)/2;
					}
				}
				
				/**
				 * 显示日历
				 */
				function show() {
					var pos = $("#"+dateId).offset();
					var left = pos.left;
					if (settings.alignment=="right") {
						var width = $("#"+dateId).width();
						left = left + width - ($("#javaex-date-box-"+dateId).width()+20);
					}
					$("#javaex-date-box-"+dateId).css("display", "block");
					$("#javaex-date-box-"+dateId).css("left", left + "px");
					$("#javaex-date-box-"+dateId).css("top", pos.top + $("#"+dateId).height() + 3 + "px");
					// 展示的月份数为1时，视为单选日期
					if (monthNum==1) {
						this.dateInput = "hide-date-" + dateId;
						
						if (isTime && settings.date) {
							var diffH = $("#javaex-date-hour-"+dateId+" li.current").position().top;
							if (diffH>220) {
								diffH = diffH-83+"px";
								$("#javaex-date-hour-"+dateId).animate({"scrollTop": diffH}, 500);
							}
							var diffM = $("#javaex-date-minute-"+dateId+" li.current").position().top;
							if (diffM>220) {
								diffM = diffM-83+"px";
								$("#javaex-date-minute-"+dateId).animate({"scrollTop": diffM}, 500);
							}
							var diffS = $("#javaex-date-second-"+dateId+" li.current").position().top;
							if (diffS>220) {
								diffS = diffS-83+"px";
								$("#javaex-date-second-"+dateId).animate({"scrollTop": diffS}, 500);
							}
						}
					} else {
						this.dateInput = "hide-start-" + dateId;
					}
				}
				
				/**
				 * 关闭日期选择框
				 * isOk : 判断是否是点击确定按钮关闭的 
				 */
				function close(isOk) {
					if (isOk) {
						var str = "";
						// 判断此前是否按了清空按钮
						if (isClear) {
							if (monthNum==1) {
								document.getElementById("hide-date-"+dateId).value = "";
								if (isTime) {
									document.getElementById("hide-HMS-"+dateId).value = "";
									$("#javaex-date-hour-"+dateId+" li").removeClass("current");
									$("#javaex-date-minute-"+dateId+" li").removeClass("current");
									$("#javaex-date-second-"+dateId+" li").removeClass("current");
								}
							} else {
								document.getElementById("hide-start-"+dateId).value = "";
								document.getElementById("hide-end-"+dateId).value = "";
							}
						} else {
							// 展示的月份数为1时，视为单选日期
							if (monthNum==1) {
								// 需要显示时分秒
								if (isTime) {
									$("#"+dateId).val($("#hide-date-"+dateId).val() + " " + getHMStime());
								} else {
									$("#"+dateId).val($("#hide-date-"+dateId).val());
								}
							} else {
								if ($("#hide-end-"+dateId).val()=="") {
									$("#"+dateId).val($("#hide-start-"+dateId).val());
								} else {
									$("#"+dateId).val($("#hide-start-"+dateId).val() + settings.splitLine + $("#hide-end-"+dateId).val());
								}
							}
							
							// 展示的月份数为1时，视为单选日期
							if (monthNum==1) {
								var date = $("#hide-date-"+dateId).val();
								// 需要显示时分秒
								if (isTime) {
									if (date=="") {
										str = "";
									} else {
										str = date + " " + getHMStime();
									}
								} else {
									str = date;
								}
							} else {
								// 否则为日期范围
								// 只选了开始日期时。默认结束日期和开始日期为同一天
								if ($("#hide-end-"+dateId).val()=="") {
									$("#hide-end-"+dateId).val($("#hide-start-"+dateId).val())
								}
								str = $("#hide-start-"+dateId).val() + settings.splitLine + $("#hide-end-"+dateId).val();
								if (str==settings.splitLine) {
									str = "";
								}
							}
						}
						
						// 把时间显示到页面
						var obj = document.getElementById(dateId);
						if (obj && obj.tagName=="INPUT") {
							$("#"+dateId).val(str);
						} else {
							$("#"+dateId).html(str);
						}
						
						isClear = false;
					}
					// 隐藏日历框
					$("#javaex-date-box-"+dateId).css("display", "none");
				}
				
				/**
				 * 日期填充函数
				 * year : 年
				 * month : 月
				 */ 
				function fillDate(year, month, index) {
					var exDate = this;
					// 当月第一天
					var firstDayOfMonth = new Date(year, month, 1);
					var dateBegin = new Date(year, month, 1);
					var w = dateBegin.getDay();
					// 计算应该开始的日期
					dateBegin.setDate(1 - w);
					
					// 当月最后一天
					var lastDayOfMonth = new Date(year, month + 1, 0);
					var dateEnd = new Date(year, month + 1, 0);
					w = dateEnd.getDay();
					// 计算应该结束的日期
					dateEnd.setDate(dateEnd.getDate() + 6 - w);
					
					var today = new Date();
					var table = document.createElement("table");
					// 判断是否显示时分秒
					if (monthNum==1 && isTime) {
						$(table).css("position", "relative");
					}
					
					var captionLeft = '';
					var captionRight = '';
					// 如果是最后一个月的日期，则加上下一个月和下一年的链接
					if (index==0) {
						// 判断是否显示时分秒
						if (monthNum==1 && isTime) {
							captionRight += '<a href="javascript:;" id="next-year-'+dateId+'" class="javaex-date-double-right"><i class="icon-angle-double-right"></i></a>';
							captionRight += '<a href="javascript:;" id="next-month-'+dateId+'" class="javaex-date-right"><i class="icon-angle-right"></i></a>';
						} else {
							captionRight += '<a href="javascript:;" id="next-year-'+dateId+'" class="javaex-date-double-right"><i class="icon-angle-double-right"></i></a>';
							captionRight += '<a href="javascript:;" id="next-month-'+dateId+'" class="javaex-date-right"><i class="icon-angle-right"></i></a>';
						}
					}
					// 如果是第一个月的日期，则加上上一个月和上一年的链接
					if((index+1)==monthNum) {
						// 判断是否显示时分秒
						if (monthNum==1 && isTime) {
							captionLeft += '<a href="javascript:;" id="last-year-'+dateId+'" class="javaex-date-double-left"><i class="icon-angle-double-left"></i></a>';
							captionLeft += '<a href="javascript:;" id="last-month-'+dateId+'" class="javaex-date-left"><i class="icon-angle-left"></i></a>';
						} else {
							captionLeft += '<a href="javascript:;" id="last-year-'+dateId+'" class="javaex-date-double-left"><i class="icon-angle-double-left"></i></a>';
							captionLeft += '<a href="javascript:;" id="last-month-'+dateId+'" class="javaex-date-left"><i class="icon-angle-left"></i></a>';
						}
					}
					
					cap = document.createElement("caption");
					$(cap).append(captionLeft + year + "年" + (month + 1) + "月" + captionRight);
					$(table).append(cap);
					thead = document.createElement("thead");
					tr = document.createElement("tr");
					var days = ["日", "一", "二", "三", "四", "五", "六"];
					for (let i=0; i<7; i++) {
						th = document.createElement("th");
						$(th).append(days[i]);
						$(tr).append(th);
					}
					$(thead).append(tr);
					$(table).append(thead);
					
					tr = document.createElement("tr");
					td = document.createElement("td");
					$(td).attr("colSpan", 7);
					$(td).css("text-align", "center");
					$(tr).append(td);
					var tbody = document.createElement("tbody");
					$(tbody).append(tr);
					
					// 当前月的所有日期(包括空白位置填充的日期)
					var tdClass = "";
					var deviation = 0;
					var ymd = "";
					var minTime = "";
					if (settings.minTime=="today") {
						minTime = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
					} else {
						minTime = str2date(settings.minTime);
					}
					var maxTime = "";
					if (settings.maxTime=="today") {
						maxTime = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
					} else {
						maxTime = str2date(settings.maxTime);
					}
					for (let d=dateBegin; d.getTime()<=dateEnd.getTime(); d.setDate(d.getDate()+1)) {
						// 当前月之前的日期
						if (d.getTime()<firstDayOfMonth.getTime()) {
							tdClass = "javaexDateRangeGray";
							deviation = -1;
						} else if (settings.minTime!="" && d.getTime()<minTime.getTime()) {
							tdClass = "javaexDateRangeGray";
							deviation = -2;
						}
						// 当前月之后的日期
						else if (d.getTime()>lastDayOfMonth.getTime()) {
							tdClass = "javaexDateRangeGray";
							deviation = 1;
						}
						// 最大可选日期
						else if (settings.maxTime!="" && d.getTime()>maxTime.getTime()) {
							tdClass = "javaexDateRangeGray";
							deviation = 2;
						}
						// 当前月日期
						else {
							deviation = 0;
							tdClass = "";
						}
						
						// 如果是周日
						if (d.getDay()==0) {
							tr = document.createElement("tr");
						}
						
						td = document.createElement("td");
						td.innerHTML = d.getDate();
						if (tdClass!="") {
							$(td).attr("class", tdClass);
						}
						
						// 只有当前月可以点击
						if (deviation==0) {
							ymd = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
							$(td).attr("id", dateId + "_date_" + ymd);
							
							(function(ymd) {
								$(td).bind("click", ymd, function() {
									selectDate(ymd);
									return;
								});
							})(ymd);
						}
						$(td).addClass("riqi");
						$(tr).append(td);
						
						// 如果是周六
						if (d.getDay()==6) {
							$(tbody).append(tr);
						}
					}
					$(table).append(tbody);
					
					return table;
				}
				
				/**
				 * 把时间字串转成时间格式
				 * str : 时间字符串
				 */ 
				function str2date(str) {
					var arr = str.split("-");
					// 返回日期格式
					return new Date(arr[0], arr[1]-1, arr[2]);
				}
				
				/**
				 * 把时间格式转成对象
				 * date : 时间
				 */ 
				function date2ymd(date) {
					return [date.getFullYear(), (date.getMonth() + 1), date.getDate()];
				}
				
				/**
				 * 日期格式化，前面加0
				 */ 
				function formatDate(ymd) {
					return ymd.replace(/(\d{4})\-(\d{1,2})\-(\d{1,2})/g, function(ymdFormatDate, y, m, d) {
						if (m<10) {
							m = "0" + m;
						}
						if (d<10) {
							d = "0" + d;
						}
						return y + "-" + m + "-" + d;
					});
				}
				
				/**
				 * 返回时分秒
				 */
				function getHMStime() {
					var hour = "";
					var minute = "";
					var second = "";
					if ($("#javaex-date-hour-"+dateId+" li.current").length>0) {
						hour = $("#javaex-date-hour-"+dateId+" li.current").text();
					}
					if ($("#javaex-date-minute-"+dateId+" li.current").length>0) {
						minute = $("#javaex-date-minute-"+dateId+" li.current").text();
					}
					if ($("#javaex-date-second-"+dateId+" li.current").length>0) {
						second = $("#javaex-date-second-"+dateId+" li.current").text();
					}
					
					var time = "";
					if (hour!="" && minute!="" && second!="") {
						time = hour + ":" + minute + ":" + second;
					}
					
					return time;
				}
			},
			
			// 时间选择
			time : function(args) {
				var settings = defaults(args);
				var timeId = settings.id;
				var time = settings.time;
				var initHMS = "";
				var isClear = false;
				
				// 初始化时间选择器面板的HTML代码
				var timeHtml = '<div id="javaex-date-box-' + timeId + '" class="javaex-date-main javaex-animated-slide-down clear" style="display: none;">';
				timeHtml += '<div class="javaex-date-body javaex-date-ui clear" id="javaex-date-list-' + timeId + '">';
				timeHtml += '<table style="width: calc(100% - 20px);">';
				timeHtml += '<caption>时间选择</caption>';
				timeHtml += '<thead>';
				timeHtml += '<tr>';
				timeHtml += '<th class="tc">小时</th>';
				timeHtml += '<th class="tc">分钟</th>';
				timeHtml += '<th class="tc">秒数</th>';
				timeHtml += '</tr>';
				timeHtml += '</thead>';
				timeHtml += '<tbody>';
				timeHtml += '<tr>';
				
				var hourHtml = '';
				hourHtml += '<td style="padding: 0;">';
				hourHtml += '<ul id="javaex-date-hour-'+timeId+'" style="height: 180px; overflow: auto;">';
				for (let n=0; n<24; n++) {
					if (n<10) {
						hourHtml += '<li>0'+n+'</li>';
					} else {
						hourHtml += '<li>'+n+'</li>';
					}
				}
				hourHtml += '</ul>';
				hourHtml += '</td>';
				timeHtml += hourHtml;
				
				var minuteHtml = '';
				minuteHtml += '<td style="padding: 0;">';
				minuteHtml += '<ul id="javaex-date-minute-'+timeId+'" style="height: 180px; overflow: auto;">';
				for (let n=0; n<60; n++) {
					if (n<10) {
						minuteHtml += '<li>0'+n+'</li>';
					} else {
						minuteHtml += '<li>'+n+'</li>';
					}
				}
				minuteHtml += '</ul>';
				minuteHtml += '</td>';
				timeHtml += minuteHtml;
				
				var secondHtml = '';
				secondHtml += '<td style="padding: 0;">';
				secondHtml += '<ul id="javaex-date-second-'+timeId+'" style="height: 180px; overflow: auto;">';
				for (let n=0; n<60; n++) {
					if (n<10) {
						secondHtml += '<li>0'+n+'</li>';
					} else {
						secondHtml += '<li>'+n+'</li>';
					}
				}
				secondHtml += '</ul>';
				secondHtml += '</td>';
				timeHtml += secondHtml;
				
				timeHtml += '</tr>';
				timeHtml += '</tbody>';
				timeHtml += '</table>';
				timeHtml += '</div>';
				timeHtml += '<div class="javaex-date-footer javaex-date-ui" style="padding: 0;border-top: none;">';
				timeHtml += '<div class="javaex-data-form-btn" style="display:none;">';
				timeHtml += '<input type="text" id="hide-HMS-'+timeId+'" value="'+time+'" readonly />';
				timeHtml += '</div>';
				timeHtml += '<div class="javaex-data-form-btn">';
				timeHtml += '<button class="javaex-btn gray" id="javaex-date-clear-' + timeId + '">清空</button>';
				timeHtml += '<button class="javaex-btn wathet" id="javaex-date-cancel-' + timeId + '">取消</button>';
				timeHtml += '<button class="javaex-btn blue" id="javaex-date-ok-' + timeId + '">确定</button>';
				timeHtml += '</div>';
				timeHtml += '</div>';
				timeHtml += '</div>';
				$(document.body).append(timeHtml);
				
				// 添加样式
				addCSS();
				// 显示时间选择器面板
				show();
				// 关闭时间选择框，并把结果回显到输入框
				close(true);
				
				// 时间选择框的点击事件
				$("#"+timeId).bind("click", function() {
					initHMS = document.getElementById("hide-HMS-"+timeId).value;
					
					addCSS();
					show();
					return;
				});
				
				// 时间选择确定按钮的点击事件
				$("#javaex-date-ok-"+timeId).bind("click", function() {
					close(true);
					
					settings.callback({
						"time": getHMStime()
					});
					return;
				});
				
				// 时间选择取消按钮的点击事件
				$("#javaex-date-cancel-"+timeId).bind("click", function() {
					// 重新赋值
					document.getElementById("hide-HMS-"+timeId).value = initHMS;
					
					close();
					
					isClear = false;
					return;
				});
				
				// 时间选择清空按钮的点击事件
				$("#javaex-date-clear-"+timeId).bind("click", function() {
					// 清除样式
					document.getElementById("hide-HMS-"+timeId).value = "";
					$("#javaex-date-hour-"+timeId+" li").removeClass("current");
					$("#javaex-date-minute-"+timeId+" li").removeClass("current");
					$("#javaex-date-second-"+timeId+" li").removeClass("current");
					
					isClear = true;
					return;
				});
				
				// 小时
				$("#javaex-date-hour-"+timeId+" li").bind("click", function() {
					$(this).addClass("current").siblings().removeClass("current");
					setHMStime();
					return;
				});
				// 分钟
				$("#javaex-date-minute-"+timeId+" li").bind("click", function() {
					$(this).addClass("current").siblings().removeClass("current");
					setHMStime();
					return;
				});
				// 秒数
				$("#javaex-date-second-"+timeId+" li").bind("click", function() {
					$(this).addClass("current").siblings().removeClass("current");
					setHMStime();
					return;
				});
				
				/**
				 * 为选中的时间添加样式
				 */
				function addCSS() {
					var HMS = $("#hide-HMS-"+timeId).val();
					var arr = HMS.split(":");
					$("#javaex-date-hour-"+timeId+" li").each(function() {
						if ($(this).text()==arr[0]) {
							$(this).addClass("current").siblings().removeClass("current");
							return;
						}
					});
					$("#javaex-date-minute-"+timeId+" li").each(function() {
						if ($(this).text()==arr[1]) {
							$(this).addClass("current").siblings().removeClass("current");
							return;
						}
					});
					$("#javaex-date-second-"+timeId+" li").each(function() {
						if ($(this).text()==arr[2]) {
							$(this).addClass("current").siblings().removeClass("current");
							return;
						}
					});
				}
				
				/**
				 * 返回时分秒
				 */
				function getHMStime() {
					var hour = "";
					var minute = "";
					var second = "";
					if ($("#javaex-date-hour-"+timeId+" li.current").length>0) {
						hour = $("#javaex-date-hour-"+timeId+" li.current").text();
					}
					if ($("#javaex-date-minute-"+timeId+" li.current").length>0) {
						minute = $("#javaex-date-minute-"+timeId+" li.current").text();
					}
					if ($("#javaex-date-second-"+timeId+" li.current").length>0) {
						second = $("#javaex-date-second-"+timeId+" li.current").text();
					}
					
					var time = "";
					if (hour!="" && minute!="" && second!="") {
						time = hour + ":" + minute + ":" + second;
					}
					
					return time;
				}
				
				/**
				 * 重复对时分秒赋值
				 */
				function setHMStime() {
					var hour = $("#javaex-date-hour-"+timeId+" li.current").text();
					var minute = $("#javaex-date-minute-"+timeId+" li.current").text();
					var second = $("#javaex-date-second-"+timeId+" li.current").text();
					$("#hide-HMS-"+timeId).val(hour+":"+minute+":"+second);
				}
				
				/**
				 * 显示显示时间选择器面板
				 */
				function show() {
					var pos = $("#"+timeId).offset();
					var left = pos.left;
					$("#javaex-date-box-"+timeId).css("display", "block");
					$("#javaex-date-box-"+timeId).css("left", left+"px");
					$("#javaex-date-box-"+timeId).css("top", pos.top+$("#"+timeId).height()+4+"px");
					
					if ($("#javaex-date-hour-"+timeId+" li.current").length>0) {
						var diffH = $("#javaex-date-hour-"+timeId+" li.current").position().top;
						if (diffH>220) {
							diffH = diffH-83+"px";
							$("#javaex-date-hour-"+timeId).animate({"scrollTop": diffH}, 500);
						}
					}
					if ($("#javaex-date-minute-"+timeId+" li.current").length>0) {
						var diffM = $("#javaex-date-minute-"+timeId+" li.current").position().top;
						if (diffM>220) {
							diffM = diffM-83+"px";
							$("#javaex-date-minute-"+timeId).animate({"scrollTop": diffM}, 500);
						}
					}
					if ($("#javaex-date-second-"+timeId+" li.current").length>0) {
						var diffS = $("#javaex-date-second-"+timeId+" li.current").position().top;
						if (diffS>220) {
							diffS = diffS-83+"px";
							$("#javaex-date-second-"+timeId).animate({"scrollTop": diffS}, 500);
						}
					}
				}
				
				/**
				 * 关闭日期选择框
				 * isOk : 判断是否是点击确定按钮关闭的 
				 */
				function close(isOk) {
					if (isOk) {
						var str = "";
						// 判断此前是否按了清空按钮
						if (isClear) {
							document.getElementById("hide-HMS-"+timeId).value = "";
							$("#javaex-date-hour-"+timeId+" li").removeClass("current");
							$("#javaex-date-minute-"+timeId+" li").removeClass("current");
							$("#javaex-date-second-"+timeId+" li").removeClass("current");
						} else {
							$("#"+timeId).val(getHMStime());
							
							str = getHMStime();
						}
						
						// 把时间显示到页面
						var obj = document.getElementById(timeId);
						if (obj && obj.tagName=="INPUT") {
							$("#"+timeId).val(str);
						} else {
							$("#"+timeId).html(str);
						}
						
						isClear = false;
					}
					
					// 隐藏时间框
					$("#javaex-date-box-"+timeId).css("display", "none");
				}
			},
			
			// 排序
			dragging : $(),
			placeholders : $(),
			
			// 文件上传
			upload : function(args) {
				var settings = defaults(args);
				var type = settings.type;                    // 上传类型
				var url = settings.url;                      // 请求路径
				var inputId = settings.id;                   // <input type="file" />的id
				var isShowTip = settings.isShowTip;          // 是否显示操作提示
				var containerId = settings.containerId;      // 图片容器id
				var uploadText = settings.uploadText;        // 上传图片文字提示
				var addImg = settings.addImg;                // 默认添加图片
				var maxNum = parseInt(settings.maxNum);      // 文件上传数量上限
				var maxSize = settings.maxSize;              // 单张图片的大小上限，单位KB，0或空为不限制
				var param = settings.param;
				var header = settings.header;
				var imgList = settings.imgList;              // 图片回显地址
				var dataType = settings.dataType;            // 图片上传后的返回类型
				
				// 富文本
				if (type=="editImage") {
					// 点击上传
					$("#"+inputId).change(function() {
						// 得到上传图片按钮的图像文件
						var file = $("#"+inputId)[0].files[0];
						
						if (!checkImg(file)) {
							return false;
						}
						
						if (dataType=="base64") {
							// 创建FileReader对象
							var reader = new FileReader();
							
							if (file) {
								// onload表示文件读取完成并成功时，触发回调函数
								reader.onload = function (event) {
									// 得到图片的base64编码
									var base64Img = event.target.result;
									// 回调函数，返回图片的base64
									settings.callback(base64Img);
								};
							}
							// 使用FileReader对象的readAsDataURL方法来读取图像文件
							reader.readAsDataURL(file);
						} else if (dataType=="url") {
							// 创建FormData对象
							var data = new FormData();
							// 为FormData对象添加数据
							for (let key in param) {
								if (key=="file") {
									data.append(param[key], file);
								} else {
									data.append(key, param[key]);
								}
							}
							
							if (isShowTip) {
								info.tip({
									mode : "message",
									content : "图片上传中，请稍候...",
									type : "submit"
								});
							}
							
							// 发送数据
							$.ajax({
								url : url,
								type : "POST",
								data : data,
								dataType : "json",
								cache : false,
								contentType : false,
								processData : false,
								xhrFields: {
									withCredentials: true
								},
								crossDomain: true,
								beforeSend : function(request) {
									for (let key in header) {
										request.setRequestHeader(key, header[key]);
									}
								},
								success : function(rtn) {
									clearInterval(info.timeoutId);
									$(".javaex-message-feedback").remove();
									settings.callback(rtn);
								},
								error : function() {
									info.tip({
										mode : "message",
										content : "上传失败，请稍后重试",
										type : "error"
									});
								}
							});
						}
						
						$("#"+inputId).val("");
					});
				}
				// 上传图片
				else if (type=="image") {
					var imageSrc = $("#"+containerId+" .javaex-cover").children("img").attr("src");
					if (!imageSrc) {
						// 没有回显图片
						$("#"+containerId+" .javaex-cover img").attr("src", addImg);
						$("#"+containerId+" .javaex-cover img").after('<div class="javaex-cover-text">'+uploadText+'</div>');
					} else {
						// 有回显图片
						$("#"+containerId+" .javaex-cover img").addClass("javaex-upload-img").removeClass("javaex-upload-img-cover");
						$("#"+containerId+" .javaex-cover").append('<div class="javaex-cover-mask"><span class="icon-close"></span></div>');
					}
					
					$(document).on("click", "#"+containerId+" .javaex-cover-mask", function() {
						$(this).remove();
						$("#"+containerId+" .javaex-cover img").attr("src", addImg);
						$("#"+containerId+" .javaex-cover img").addClass("javaex-upload-img-cover").removeClass("javaex-upload-img");
						$("#"+containerId+" .javaex-cover img").after('<div class="javaex-cover-text">'+uploadText+'</div>');
						
						// 删除图片的回调函数
						settings.deleteImage();
					});
					
					// 点击上传
					$("#"+inputId).change(function() {
						// 选择文件前的回调函数
						settings.chooseBefore();
						
						// 得到上传图片按钮的图像文件
						var file = $("#"+inputId)[0].files[0];
						
						if (!checkImg(file)) {
							return false;
						}
						
						if (dataType=="base64") {
							// 创建FileReader对象
							var reader = new FileReader();
							
							// 选择文件后的回调函数
							var filename = file.name;
							var fileSuffix = "";
							var pos = filename.lastIndexOf(".");
							if (pos>-1) {
								fileSuffix = filename.substring(pos + 1);
							}
							settings.chooseAfter({
								"filename" : filename,
								"filesize" : file.size,
								"fileSuffix" : fileSuffix
							});
							
							if (file) {
								// onload表示文件读取完成并成功时，触发回调函数
								reader.onload = function (event) {
									// 得到图片的base64编码
									var base64Img = event.target.result;
									
									$("#"+containerId+" .javaex-cover img").addClass("javaex-upload-img").removeClass("javaex-upload-img-cover");
									$("#"+containerId+" .javaex-cover-text").remove();
									$("#"+containerId+" .javaex-cover").append('<div class="javaex-cover-mask"><span class="icon-close"></span></div>');
									
									// 回调函数，返回图片的base64
									settings.callback(base64Img);
								};
							}
							// 使用FileReader对象的readAsDataURL方法来读取图像文件
							reader.readAsDataURL(file);
						} else if (dataType=="url") {
							// 创建FormData对象
							var data = new FormData();
							// 为FormData对象添加数据
							for (let key in param) {
								if (key=="file") {
									data.append(param[key], file);
								} else {
									data.append(key, param[key]);
								}
							}
							
							// 选择文件后的回调函数
							var filename = file.name;
							var fileSuffix = "";
							var pos = filename.lastIndexOf(".");
							if (pos>-1) {
								fileSuffix = filename.substring(pos + 1);
							}
							settings.chooseAfter({
								"filename" : filename,
								"filesize" : file.size,
								"fileSuffix" : fileSuffix
							});
							
							if (isShowTip) {
								info.tip({
									content : "图片上传中，请稍候...",
									type : "submit"
								});
							}
							
							// 发送数据
							$.ajax({
								url : url,
								type : "post",
								data : data,
								dataType : "json",
								cache : false,
								contentType : false,
								processData : false,
								xhrFields: {
									withCredentials: true
								},
								crossDomain: true,
								beforeSend : function(request) {
									for (let key in header) {
										request.setRequestHeader(key, header[key]);
									}
								},
								success : function(rtn) {
									clearInterval(info.timeoutId);
									$(".javaex-opt-tip").remove();
									$(".javaex-opt-mask").remove();
									
									$("#"+containerId+" .javaex-cover img").addClass("javaex-upload-img").removeClass("javaex-upload-img-cover");
									$("#"+containerId+" .javaex-cover-text").remove();
									$("#"+containerId+" .javaex-cover").append('<div class="javaex-cover-mask"><span class="icon-close"></span></div>');
									
									settings.callback(rtn);
								},
								error : function() {
									info.tip({
										content : "上传失败，请稍后重试",
										type : "error"
									});
								}
							});
						}
						
						$("#"+inputId).val("");
					});
				}
				// 上传多图
				else if (type=="images") {
					// 回显图片
					if (imgList!=null && imgList.length>0) {
						for (let i=0; i<imgList.length; i++) {
							// 生成随机id
							var UUID = info.getUUID();
							
							var imgHtml = '<li id="'+UUID+'" class="javaex-upload-images-thumbnail" style="width:'+settings.width+'px;height:'+settings.height+'px;">';
							imgHtml += '<div class="javaex-img-trash"><span class="icon-trash-o"></span></div>';
							imgHtml += '<img src="'+imgList[i]+'" />';
							imgHtml += '</li>';
							$("#"+containerId).append(imgHtml);
							
							// 为每一张图片绑定事件
							imgBindEvent(UUID);
							// 图片排序
							imgSort(containerId);
						}
						
						// 初始化返回数据
						var imgUrlArr = new Array();
						$("#"+containerId+" img").each(function() {
							imgUrlArr.push($(this).attr("src"));
						});
						
						// 回调函数
						settings.callback(imgUrlArr);
					}
					
					// 点击上传
					$("#"+inputId).change(function() {
						// 判断上传数量是否已达上限
						if ($("#"+containerId+" img").length > (parseInt(maxNum)-1)) {
							info.tip({
								content : "最多上传" + maxNum + "张图片",
								type : "error"
							});
							return false;
						}
						
						if (dataType=="base64") {
							// 定义一个数组，用来存储UUID
							var uuidArr = new Array();
							var count = 0;
							var fileLength = $("#"+inputId)[0].files.length;
							
							// 当前已经存在的图片数量
							var nowNum = $("#"+containerId+" img").length;
							// 遍历得到上传的图片
							$.each($("#"+inputId)[0].files, function(i) {
								if ((nowNum+i)<maxNum) {
									// 生成随机id
									var UUID = info.getUUID();
									uuidArr.push(UUID);
									// 获取图片
									var file = $("#"+inputId)[0].files[i];
									
									if (!checkImg(file)) {
										return false;
									}
									
									// 创建FileReader对象
									var reader = new FileReader();
									// onload表示文件读取完成并成功时，触发回调函数
									reader.onload = function(event) {
										// 得到图片的base64编码
										var base64Img = event.target.result;
										
										var imgHtml = '<li id="'+UUID+'" class="javaex-upload-images-thumbnail" style="width:'+settings.width+'px;height:'+settings.height+'px;">';
										imgHtml += '<div class="javaex-img-trash"><span class="icon-trash-o"></span></div>';
										imgHtml += '<img src="'+base64Img+'" />';
										imgHtml += '</li>';
										$("#"+containerId).append(imgHtml);
										
										// 为图片绑定事件
										imgBindEvent(UUID);
										
										count++;
										if ((count==fileLength) || (nowNum+i)==(parseInt(maxNum)-1)) {
											var imgUrlArr = new Array();
											$("#"+containerId+" img").each(function() {
												imgUrlArr.push($(this).attr("src"));
											});
											
											// 回调函数
											settings.callback(imgUrlArr);
											
											// 图片排序
											imgSort(containerId);
										}
									};
									// 使用FileReader对象的readAsDataURL方法来读取图像文件
									reader.readAsDataURL(file);
								}
							});
						} else if (dataType=="url") {
							var image = settings.image;
							// 定义一个数组，用来存储UUID
							var uuidArr = new Array();
							var count = 0;
							var fileLength = $("#"+inputId)[0].files.length;
							// 当前已经存在的图片数量
							var nowNum = $("#"+containerId+" img").length;
							
							for (let i=0; i<fileLength; i++) {
								if ((nowNum+i)<maxNum) {
									var UUID = info.getUUID();
									uuidArr.push(UUID);
									
									var imgHtml = '<li id="'+UUID+'" class="javaex-upload-images-thumbnail" style="width:'+settings.width+'px;height:'+settings.height+'px;">';
									imgHtml += '<div class="javaex-img-trash"><span class="icon-trash-o"></span></div>';
									imgHtml += '<img src="'+settings.placeholder+'" />';
									imgHtml += '</li>';
									$("#"+containerId).append(imgHtml);
								}
							}
							
							// 遍历得到上传的图片
							$.each($("#"+inputId)[0].files, function(i) {
								if ((nowNum+i)<maxNum) {
									var UUID = uuidArr[i];
									// 获取图片
									var file = $("#"+inputId)[0].files[i];
									
									if (!checkImg(file)) {
										return false;
									}
									
									// 创建FormData对象
									var data = new FormData();
									// 为FormData对象添加数据
									for (let key in param) {
										if (key=="file") {
											data.append(param[key], file);
										} else {
											data.append(key, param[key]);
										}
									}
									
									// 发送数据
									$.ajax({
										url : image.url,
										type : "post",
										data : data,
										dataType : "json",
										cache : false,
										contentType : false,
										processData : false,
										xhrFields: {
											withCredentials: true
										},
										crossDomain: true,
										beforeSend : function(request) {
											for (let key in header) {
												request.setRequestHeader(key, header[key]);
											}
										},
										success : function(rtn) {
											image.rtnData = rtn;
											var imgSrc = "";
											if (!image.prefix) {
												if (image.imgUrl.split(".").length==2) {
													imgSrc = image.rtnData[image.imgUrl.split(".")[0]][image.imgUrl.split(".")[1]];
												} else {
													imgSrc = image.rtnData[image.imgUrl];
												}
											} else {
												if (image.imgUrl.split(".").length==2) {
													imgSrc = image.prefix+image.rtnData[image.imgUrl.split(".")[0]][image.imgUrl.split(".")[1]];
												} else {
													imgSrc = image.prefix+image.rtnData[image.imgUrl];
												}
											}
											
											$("#"+UUID).find("img").attr("src", imgSrc);
											
											// 为图片绑定事件
											imgBindEvent(UUID);
											
											count++;
											if ((count==fileLength) || (nowNum+i)==(maxNum-1)) {
												var imgUrlArr = new Array();
												$("#"+containerId+" img").each(function() {
													imgUrlArr.push($(this).attr("src"));
												});
												
												// 回调函数
												settings.callback(imgUrlArr);
												
												// 图片排序
												imgSort(containerId);
											}
										},
										error : function() {
											info.tip({
												content : "上传失败，请稍后重试",
												type : "error"
											});
										}
									});
								}
							});
						}
						
						$("#"+inputId).val("");
					});
					
					/**
					 * 为图片绑定事件
					 */
					function imgBindEvent(id) {
						// 绑定鼠标移入事件
						$(document).on("mouseenter", "#"+id, function() {
							$("#"+id+" .javaex-img-trash").stop().animate({height:"30px"});
						});
						// 绑定鼠标移出事件
						$(document).on("mouseleave", "#"+id, function() {
							$("#"+id+" .javaex-img-trash").stop().animate({height:0});
						});
						// 绑定删除图片事件
						$(document).on("click", "#"+id+" .javaex-img-trash span", function() {
							$("#"+id).remove();
							
							var imgUrlArr = new Array();
							$("#"+containerId+" img").each(function() {
								imgUrlArr.push($(this).attr("src"));
							});
							
							// 回调函数
							settings.callback(imgUrlArr);
						});
					}
					
					/**
					 * 图片排序事件
					 */
					function imgSort(containerId) {
						options = $.extend({}, null);
						return $("#"+containerId).each(function() {
							var isHandle, index, items = $(this).children(options.items);
							var placeholder = $('<' + (/^ul|ol$/i.test(this.tagName) ? 'li' : 'div') + ' class="javaex-sort-placeholder">');
							
							items.find(options.handle).mousedown(function() {
								isHandle = true;
							}).mouseup(function() {
								isHandle = false;
							});
							$(this).data("items", options.items);
							info.placeholders = info.placeholders.add(placeholder);
							items.attr("draggable", "true").on("dragstart.h5s", function(e) {
								if (options.handle && !isHandle) {
									return false;
								}
								isHandle = false;
								var dt = e.originalEvent.dataTransfer;
								dt.effectAllowed = "move";
								dt.setData("Text", "dummy");
								index = (info.dragging = $(this)).addClass("javaex-sort-dragging").index();
							}).on("dragend.h5s", function() {
								(info.dragging = $(this)).removeClass("javaex-sort-dragging").show();
								info.placeholders.detach();
								if (index != (info.dragging = $(this)).index()) {
									items.parent().trigger("sortupdate", {item: info.dragging});
									
									var imgUrlArr = new Array();
									$("#"+containerId+" img").each(function() {
										imgUrlArr.push($(this).attr("src"));
									});
									
									// 回调函数
									settings.callback(imgUrlArr);
								}
								info.dragging = null;
							}).not("a[href], img").on("selectstart.h5s", function() {
								this.dragDrop && this.dragDrop();
								return false;
							}).end().add([this, placeholder]).on("dragover.h5s dragenter.h5s drop.h5s", function(e) {
								if (!items.is(info.dragging) && options.connectWith !== $(info.dragging).parent().data("connectWith")) {
									return true;
								}
								if (e.type=="drop") {
									e.stopPropagation();
									info.placeholders.filter(":visible").after(info.dragging);
									return false;
								}
								e.preventDefault();
								e.originalEvent.dataTransfer.dropEffect = "move";
								if (items.is(this)) {
									if (options.forcePlaceholderSize) {
										placeholder.height(info.dragging.outerHeight());
									}
									info.dragging.hide();
									$(this)[placeholder.index() < $(this).index() ? 'after' : 'before'](placeholder);
									info.placeholders.not(placeholder).detach();
								} else if (!info.placeholders.is(this) && !$(this).children(options.items).length) {
									info.placeholders.detach();
									$(this).append(placeholder);
								}
								return false;
							});
						});
					}
				}
				// 上传文件
				else if (type=="file") {
					// 点击上传
					$("#"+inputId).change(function() {
						// 选择文件前的回调函数
						settings.chooseBefore();
						
						// 得到上传按钮的文件
						var file = $("#"+inputId)[0].files[0];
						
						// 校验文件大小
						if (maxSize=="" || maxSize==0 || maxSize=="0") {
							// 不校验
						} else {
							if (file.size>(maxSize*1024*1024)) {
								info.tip({
									content : "文件过大，单个文件上限 "+maxSize+"M",
									type : "error"
								});
								return false;
							}
						}
						
						// 创建FormData对象
						var data = new FormData();
						// 为FormData对象添加数据
						for (let key in param) {
							if (key=="file") {
								data.append(param[key], file);
							} else {
								data.append(key, param[key]);
							}
						}
						
						// 选择文件后的回调函数
						var filename = file.name;
						var fileSuffix = "";
						var pos = filename.lastIndexOf(".");
						if (pos>-1) {
							fileSuffix = filename.substring(pos + 1);
						}
						settings.chooseAfter({
							"filename" : filename,
							"filesize" : file.size,
							"fileSuffix" : fileSuffix
						});
						
						if (isShowTip) {
							info.tip({
								content : "文件上传中，请稍候...",
								type : "submit",
								timeout : 0
							});
						}
						
						// 发送数据
						$.ajax({
							url : url,
							type : "post",
							data : data,
							dataType : "json",
							cache : false,
							contentType : false,
							processData : false,
							success : function(rtn) {
								clearInterval(info.timeoutId);
								$(".javaex-opt-tip").remove();
								$(".javaex-opt-mask").remove();
								settings.callback(rtn);
							},
							error : function() {
								info.tip({
									content : "上传失败，请稍后重试",
									type : "error"
								});
							}
						});
						
						$("#"+inputId).unbind("change");
					});
				}
				
				/**
				 * 校验图片
				 */
				function checkImg(file) {
					// 校验图片类型
					if (!/\.(gif|jpg|jpeg|png|webp|bmp|GIF|JPG|JPEG|PNG|WEBP|BMP)$/.test(file.name)) {
						info.tip({
							content : "图片类型必须是.gif,jpeg,jpg,png,webp,bmp中的一种",
							type : "error"
						});
						return false;
					}
					
					// 校验图片大小
					if (maxSize=="" || maxSize==0 || maxSize=="0") {
						// 不校验
					} else {
						if (file.size > (maxSize*1024)) {
							info.tip({
								content : "图片过大，单张图片上限 "+maxSize+"KB",
								type : "error"
							});
							return false;
						}
					}
					
					return true;
				}
			},
			
			// 头像上传
			// 下列几个属性是为了防止属性值初始化，相当于全局变量
			ratio : 1,	// 初始化比例，缩放时会用到。没有特别需要，请勿更改
			dragAble : false,	// 图片是否可拖动（只有鼠标左键按在图片上时，才可以拖动）
			mouseX : 0,	// 鼠标按下时的X坐标
			mouseY : 0,	// 鼠标按下时的Y坐标
			imgDivId : "", // 本地上传的图片区域
			cutBox : "",	// 裁剪区域
			moveBox : "",	// 背景区域，可拖动
			dataUrl : "",	// 最终将图片地址返回给哪个input存储
			imgSrc : "",	// 裁剪后的图片的地址
			image : new Image(),
			uploadAvatar : function(obj, args) {
				var settings = defaults(args);
				info.imgDivId = settings.imgDivId;
				info.moveBox = settings.moveBox;
				info.cutBox = settings.cutBox;
				info.dataUrl = settings.dataUrl;
				
				// 创建FileReader对象
				var reader = new FileReader();
				// 得到上传图片按钮的图像文件
				var file = obj.files[0];
				if (file) {
					// onload表示文件读取完成并成功时，触发回调函数
					reader.onload = function (event) { 
						// 得到图片的base64编码
						info.imgSrc = event.target.result;
						// 图片预加载
						info.image.src = info.imgSrc;
						info.image.onload = function() {
							$("#"+settings.moveBox).hide();
							// 设置图片显示
							info.setBackgroundImage();
							// 头像预览
							info.headPreview();
							
							// 为图片div区域绑定鼠标滚动缩放事件
							$("#"+info.imgDivId).bind("mousewheel DOMMouseScroll", info.imageZoom);
							// 为图片div区域绑定鼠标左键按下事件
							$("#"+info.imgDivId).bind("mousedown", info.mouseDown);
							// 为图片div区域绑定鼠标拖动图片事件
							$("#"+info.imgDivId).bind("mousemove", info.imageDrag);
							// 为整个窗口绑定鼠标左键弹起事件
							$(window).bind("mouseup", info.mouseUp);
							
							// 缩小
							$("#narrow").on("click", function() {
								info.narrow();
							});
							// 放大
							$("#enlarge").on("click", function() {
								info.enlarge();
							});
						};
					};
				}
				// 使用FileReader对象的readAsDataURL方法来读取图像文件
				reader.readAsDataURL(file);
			},
			// 放大
			enlarge: function() {
				this.ratio = this.ratio * 1.1;
				info.setBackgroundImage();
			},
			// 缩小
			narrow: function() {
				this.ratio = this.ratio * 0.9;
				info.setBackgroundImage();
			},
			// 在图片div区域显示图片
			setBackgroundImage : function() {
				// 缩放后的图片宽、高
				var zoomImgWidth = parseInt(info.image.width) * info.ratio;
				var zoomImgHeight = parseInt(info.image.height) * info.ratio;
				// 缩放后的图片左上角，距离背景层左上角的距离：x、y
				var posX = ($("#"+info.imgDivId).width() - zoomImgWidth) / 2;
				var posY = ($("#"+info.imgDivId).height() - zoomImgHeight) / 2;
				// 为图片div添加样式
				$("#"+info.imgDivId).css({
					"background-image" : "url(" + info.image.src + ")",
					"background-repeat" : "no-repeat",
					"background-size" : zoomImgWidth + "px " + zoomImgHeight + "px",
					"background-position" : posX + "px " + posY + "px"
				});
			},
			// 鼠标滚轮滚动实现图片缩放
			imageZoom : function(event) {
				if (event.originalEvent.wheelDelta>0 || event.originalEvent.detail<0) {
					info.ratio = info.ratio * 1.1;
				} else {
					info.ratio = info.ratio * 0.9;
				}
				info.setBackgroundImage();
				info.headPreview();
				event.preventDefault();
			},
			// 鼠标左键按下
			mouseDown : function(event) {
				event.stopImmediatePropagation();
				
				// 设置图片可以被拖动
				info.dragAble = true;
				// 设置鼠标此刻所在的坐标
				info.mouseX = event.clientX;
				info.mouseY = event.clientY;
			},
			// 拖动图片
			imageDrag : function(event) {
				event.stopImmediatePropagation();
				
				// 只有鼠标左键按在图片上时，才可以拖动
				if (info.dragAble) {
					// 计算图片被拖动后，此时鼠标所在的坐标与拖动前所在的坐标之差
					var diffX = event.clientX - info.mouseX;
					var diffY = event.clientY - info.mouseY;
					
					// 分割图片左上角距离背景层左上角的距离：x、y
					var arr = $("#"+info.imgDivId).css("background-position").split(" ");
					
					// 得到新的图片左上角距离背景层左上角的距离：x、y
					var posX = diffX + parseInt(arr[0]);
					var posY = diffY + parseInt(arr[1]);
					
					// 重新设置图片div区域的属性
					$("#"+info.imgDivId).css("background-position", posX + "px " + posY + "px");
					
					// 重新记录鼠标所在的坐标
					info.mouseX = event.clientX;
					info.mouseY = event.clientY;
				}
			},
			// 鼠标左键弹起
			mouseUp : function(event) {
				event.stopImmediatePropagation();
				info.dragAble = false;
				info.headPreview();
			},
			// 头像预览
			headPreview : function() {
				var cutBoxWidth = $("#"+info.cutBox).width();
				var cutBoxHeight = $("#"+info.cutBox).height();
				
				var canvas = document.createElement("canvas");
				var posArr = $("#"+info.imgDivId).css("background-position").split(" ");
				var sizeArr = $("#"+info.imgDivId).css("background-size").split(" ");
				var swidth = parseInt(info.image.width);	// 被剪切图像的宽度
				var sheight = parseInt(info.image.height);	// 被剪切图像的高度
				var x = parseInt(posArr[0]) - $("#"+info.imgDivId).width()/2 + cutBoxWidth/2;	// 在画布上放置图像的 x 坐标位置
				var y = parseInt(posArr[1]) - $("#"+info.imgDivId).height()/2 + cutBoxHeight/2;	// 在画布上放置图像的 y 坐标位置
				var width = parseInt(sizeArr[0]);	// 要使用的图像的宽度。（伸展或缩小图像）
				var height = parseInt(sizeArr[1]);	// 要使用的图像的高度。（伸展或缩小图像）
				
				canvas.width = cutBoxWidth;
				canvas.height = cutBoxHeight;
				// 当前，唯一支持的是 "2d",它返回一个 CanvasRenderingContext2D 对象，使用它可以绘制到 Canvas 元素中。
				var context = canvas.getContext("2d");
				context.drawImage(info.image, 0, 0, swidth, sheight, x, y, width, height);
				// 用canvas的toDataURL()将图片转为dataURL(base64)
				var avatarPreviewImageSrc = canvas.toDataURL('image/png');
				
				// 填充预览头像
				$(".javaex-avatar180").html('');
				$(".javaex-avatar50").html('');
				$(".javaex-avatar30").html('');
				$(".javaex-avatar180").append('<img src="'+avatarPreviewImageSrc+'" align="absmiddle" style="width:180px;border-radius:180px;">');
				$(".javaex-avatar50").append('<img src="'+avatarPreviewImageSrc+'" align="absmiddle" style="width:50px;border-radius:50px;">');
				$(".javaex-avatar30").append('<img src="'+avatarPreviewImageSrc+'" align="absmiddle" style="width:30px;border-radius:30px;">');
				
				// 自动返回裁剪后的图片地址
				$("#"+info.dataUrl).val(avatarPreviewImageSrc);
			},
			
			// 富文本编辑器
			curRange : "",	// 当前范围
			edit : function(args) {
				var settings = defaults(args);
				var editId = settings.id;
				var content = $("#"+editId).html();// settings.content;
				$("#"+editId).empty();
				var fixedTop = parseInt(settings.fixedTop);
				// 生成随机id
				var UUID = info.getUUID();
				
				var editHtml = '';
				editHtml += '<div class="javaex-edit-toolbar">';
				editHtml += '<ul class="javaex-edit-btn-toolbar clear">';
				// 字体
				editHtml += '<a class="javaex-edit-family edit-btn edit-btn-name-fontsize javaex-edit-combobox">';
				editHtml += '<span tooltip-pos="down" tooltip="字体" class="edit-button-label"><i>arial</i><span class="icon-caret-down"></span></span>';
				editHtml += '<ul class="javaex-edit-family-select dropdown-menu javaex-edit-combobox-menu javaex-edit-combobox-paragraph" style="z-index: 2;display:none;">';
				editHtml += '<li class="javaex-edit-combobox-item javaex-edit-combobox-checked"><label class="javaex-edit-combobox-item-label">arial</label></li>';
				editHtml += '<li class="javaex-edit-combobox-item"><label class="javaex-edit-combobox-item-label">宋体</label></li>';
				editHtml += '<li class="javaex-edit-combobox-item"><label class="javaex-edit-combobox-item-label">微软雅黑</label></li>';
				editHtml += '<li class="javaex-edit-combobox-item"><label class="javaex-edit-combobox-item-label">楷体</label></li>';
				editHtml += '<li class="javaex-edit-combobox-item"><label class="javaex-edit-combobox-item-label">黑体</label></li>';
				editHtml += '<li class="javaex-edit-combobox-item"><label class="javaex-edit-combobox-item-label">隶书</label></li>';
				editHtml += '<li class="javaex-edit-combobox-item"><label class="javaex-edit-combobox-item-label">Consolas</label></li>';
				editHtml += '</ul>';
				editHtml += '</a>';
				// 字体大小
				editHtml += '<a class="javaex-edit-size edit-btn edit-btn-name-fontsize javaex-edit-combobox">';
				editHtml += '<span tooltip-pos="down" tooltip="字号" class="edit-button-label"><i>16</i><span class="icon-caret-down"></span></span>';
				editHtml += '<ul class="javaex-edit-size-select dropdown-menu javaex-edit-combobox-menu javaex-edit-combobox-paragraph" style="z-index: 2;display:none;">';
				editHtml += '<li class="javaex-edit-combobox-item javaex-edit-combobox-item-7"><label class="javaex-edit-combobox-item-label">12</label></li>';
				editHtml += '<li class="javaex-edit-combobox-item javaex-edit-combobox-item-6"><label class="javaex-edit-combobox-item-label">14</label></li>';
				editHtml += '<li class="javaex-edit-combobox-item javaex-edit-combobox-item-5 javaex-edit-combobox-checked"><label class="javaex-edit-combobox-item-label">16</label></li>';
				editHtml += '<li class="javaex-edit-combobox-item javaex-edit-combobox-item-4"><label class="javaex-edit-combobox-item-label">18</label></li>';
				editHtml += '<li class="javaex-edit-combobox-item javaex-edit-combobox-item-3"><label class="javaex-edit-combobox-item-label">24</label></li>';
				editHtml += '<li class="javaex-edit-combobox-item javaex-edit-combobox-item-2"><label class="javaex-edit-combobox-item-label">32</label></li>';
				editHtml += '<li class="javaex-edit-combobox-item javaex-edit-combobox-item-1"><label class="javaex-edit-combobox-item-label">48</label></li>';
				editHtml += '</ul>';
				editHtml += '</a>';
				// 段落格式
				editHtml += '<a class="javaex-edit-format edit-btn edit-btn-name-fontsize javaex-edit-combobox">';
				editHtml += '<span tooltip-pos="down" tooltip="段落格式" class="edit-button-label"><i>p</i><span class="icon-caret-down"></span></span>';
				editHtml += '<ul class="javaex-edit-format-select dropdown-menu javaex-edit-combobox-menu javaex-edit-combobox-paragraph" style="z-index: 2;display:none;">';
				editHtml += '<li class="javaex-edit-combobox-item javaex-edit-combobox-item-7 javaex-edit-combobox-checked"><label class="javaex-edit-combobox-item-label">p</label></li>';
				editHtml += '<li class="javaex-edit-combobox-item javaex-edit-combobox-item-6"><label class="javaex-edit-combobox-item-label">H6</label></li>';
				editHtml += '<li class="javaex-edit-combobox-item javaex-edit-combobox-item-5"><label class="javaex-edit-combobox-item-label">H5</label></li>';
				editHtml += '<li class="javaex-edit-combobox-item javaex-edit-combobox-item-4"><label class="javaex-edit-combobox-item-label">H4</label></li>';
				editHtml += '<li class="javaex-edit-combobox-item javaex-edit-combobox-item-3"><label class="javaex-edit-combobox-item-label">H3</label></li>';
				editHtml += '<li class="javaex-edit-combobox-item javaex-edit-combobox-item-2"><label class="javaex-edit-combobox-item-label">H2</label></li>';
				editHtml += '<li class="javaex-edit-combobox-item javaex-edit-combobox-item-1"><label class="javaex-edit-combobox-item-label">H1</label></li>';
				editHtml += '</ul>';
				editHtml += '</a>';
				editHtml += '<span class="separator-line"></span>';
				// 上传图片
				editHtml += '<a class="edit-btn" tooltip-pos="down" tooltip="本地图片"><i class="icon icon-photo"><label for="'+UUID+'" style="display: inline-block; width:100%;height:100%;position: absolute;top: 0;left: 0;cursor: pointer;"></label></i>';
				editHtml += '<input type="file" style="display:none;" id="'+UUID+'" accept="image/gif, image/jpeg, image/jpg, image/png" /></a>';
				// 外链视频
				editHtml += '<a class="edit-btn edit-btn-video" tooltip-pos="down" tooltip="外链视频"><div class="icon icon-video"></div></a>';
				// 超链接
				editHtml += '<a class="edit-btn edit-btn-href" tooltip-pos="down" tooltip="超链接"><div class="icon icon-chain"></div></a>';
				// 去除超链接
				editHtml += '<a class="edit-btn edit-btn-unlink" tooltip-pos="down" tooltip="去除超链接"><div class="icon icon-chain-broken"></div></a>';
				editHtml += '<span class="separator-line"></span>';
				// 加粗
				editHtml += '<a class="edit-btn edit-btn-bold" tooltip-pos="down" tooltip="加粗"><div class="icon icon-format_bold"></div></a>';
				// 斜体
				editHtml += '<a class="edit-btn edit-btn-italic" tooltip-pos="down" tooltip="斜体"><div class="icon icon-format_italic"></div></a>';
				// 下划线
				editHtml += '<a class="edit-btn edit-btn-underline" tooltip-pos="down" tooltip="下划线"><div class="icon icon-format_underlined"></div></a>';
				// 删除线
				editHtml += '<a class="edit-btn edit-btn-strikethrough" tooltip-pos="down" tooltip="删除线"><div class="icon icon-strikethrough_s"></div></a>';
				// 字体颜色
				editHtml += '<span class="edit-btn-foreColor"><a class="edit-btn" tooltip-pos="down" tooltip="字体颜色"><div class="icon icon-format_color_text"></div></a></span>';
				// 背景颜色
				editHtml += '<span class="edit-btn-backColor"><a class="edit-btn" tooltip-pos="down" tooltip="背景颜色"><div class="icon icon-font_download"></div></a></span>';
				editHtml += '<span class="separator-line"></span>';
				// 上标
				editHtml += '<a class="edit-btn edit-btn-superscript" tooltip-pos="down" tooltip="上标"><div class="icon icon-superscript"></div></a>';
				// 下标
				editHtml += '<a class="edit-btn edit-btn-subscript" tooltip-pos="down" tooltip="下标"><div class="icon icon-subscript"></div></a>';
				// 分隔线
				editHtml += '<a class="edit-btn edit-btn-insertHorizontalRule" tooltip-pos="down" tooltip="分隔线"><div class="icon icon-minus"></div></a>';
				// 全选
				editHtml += '<a class="edit-btn edit-btn-selectAll" tooltip-pos="down" tooltip="全选"><div class="icon icon-select_all"></div></a>';
				// 清除格式
				editHtml += '<a class="edit-btn edit-btn-removeFormat" tooltip-pos="down" tooltip="清除格式"><div class="icon icon-format_clear"></div></a>';
				editHtml += '<span class="separator-line"></span>';
				// 增加缩进
				editHtml += '<a class="edit-btn edit-btn-indent" tooltip-pos="down" tooltip="增加缩进"><div class="icon icon-format_indent_increase"></div></a>';
				// 减少缩进
				editHtml += '<a class="edit-btn edit-btn-outdent" tooltip-pos="down" tooltip="减少缩进"><div class="icon icon-format_indent_decrease"></div></a>';
				// 居左对齐
				editHtml += '<a class="edit-btn edit-btn-justifyleft" tooltip-pos="down" tooltip="居左对齐"><div class="icon icon-format_align_left"></div></a>';
				// 居中对齐
				editHtml += '<a class="edit-btn edit-btn-justifycenter" tooltip-pos="down" tooltip="居中对齐"><div class="icon icon-format_align_center"></div></a>';
				// 居右对齐
				editHtml += '<a class="edit-btn edit-btn-justifyright" tooltip-pos="down" tooltip="居右对齐"><div class="icon icon-format_align_right"></div></a>';
				editHtml += '<span class="separator-line"></span>';
				// 有序列表
				editHtml += '<a class="edit-btn edit-btn-insertOrderedList" tooltip-pos="down" tooltip="有序列表"><div class="icon icon-format_list_numbered"></div></a>';
				// 无序列表
				editHtml += '<a class="edit-btn edit-btn-insertUnorderedList" tooltip-pos="down" tooltip="无序列表"><div class="icon icon-format_list_bulleted"></div></a>';
				// 表格
				editHtml += '<a class="edit-btn edit-btn-table" tooltip-pos="down" tooltip="表格"><div class="icon icon-table"></div></a>';
				// 添加引用文字
				editHtml += '<a class="edit-btn edit-btn-quote" tooltip-pos="down" tooltip="添加引用文字"><div class="icon icon-format_quote"></div></a>';
				// 添加代码
				editHtml += '<a class="edit-btn edit-btn-code" tooltip-pos="down" tooltip="添加代码"><div class="icon icon-code"></div></a>';
				editHtml += '</ul>';
				editHtml += '</div>';
				editHtml += '<div class="javaex-edit-body">';
				editHtml += '<div class="javaex-edit-body-container" contenteditable="true">';
				if (!content) {
					editHtml += '<p><br /></p>';
				} else {
					editHtml += content;
				}
				editHtml += '</div>';
				editHtml += '</div>';
				$("#"+editId).append(editHtml);
				
				// 初始化返回回调函数
				if (settings.isInit) {
					callback();
				}
				
				// 固定工具栏
				if (fixedTop>=0) {
					var toolbarWidth = $("#"+editId+" .javaex-edit-toolbar").width();
					$(window).scroll(function() {
						var distanceFromTop = $("#"+editId).offset().top - document.documentElement.scrollTop;
						if (distanceFromTop<fixedTop) {
							$("#"+editId+" .javaex-edit-toolbar").css({
								"position" : "fixed",
								"top" : fixedTop + "px",
								"width" : toolbarWidth+"px",
								"z-index" : "900"
							});
						} else {
							$("#"+editId+" .javaex-edit-toolbar").css({
								"position" : "relative",
								"top" : "unset",
								"width" : "auto",
								"z-index" : "900"
							});
						}
					});
				}
				
				// 编辑器内容区域光标发生变化时，保存selection
				$("#"+editId+" .javaex-edit-body-container").bind("mouseup keyup", function() {
					// 保存当前范围
					saveCurRange();
					
					// 回调函数，返回完整html代码内容和纯文字内容
					callback();
				});
				
				// 图片上传
				var image = settings.image;
				if (image==null || image.dataType=="base64") {
					info.upload({
						type : "editImage",
						id : UUID,
						dataType : "base64",
						callback : function (rtn) {
							// 还原selection
							restoreSelection();
							// 插入图片
							execCommand("insertimage", false, rtn);
						}
					});
				} else {
					var isShowTip = image.isShowTip;
					if (!isShowTip) {
						isShowTip = false;
					}
					info.upload({
						type : "editImage",
						url : image.url,
						id : UUID,
						param : image.param,
						header : image.header,
						dataType : "url",
						isShowTip : isShowTip,
						callback : function (rtn) {
							$(".javaex-opt-tip").remove();
							$(".javaex-opt-mask").remove();
							// 还原selection
							restoreSelection();
							// 插入图片
							image.rtnData = rtn;
							if (!image.prefix) {
								if (image.imgUrl.split(".").length==2) {
									execCommand("insertimage", false, image.rtnData[image.imgUrl.split(".")[0]][image.imgUrl.split(".")[1]]);
								} else {
									execCommand("insertimage", false, image.rtnData[image.imgUrl]);
								}
							} else {
								if (image.imgUrl.split(".").length==2) {
									execCommand("insertimage", false, image.prefix + image.rtnData[image.imgUrl.split(".")[0]][image.imgUrl.split(".")[1]]);
								} else {
									execCommand("insertimage", false, image.prefix + image.rtnData[image.imgUrl]);
								}
							}
						}
					});
				}
				
				// 加粗
				var isBold = false;
				$("#"+editId+" .edit-btn-bold").bind("click", function() {
					var selection = restoreSelection();
					if (selection==null || selection.type!="Range") {
						info.curRange = null;
					}
					execCommand("bold", false, null);
					if (isBold) {
						isBold = false;
						$(this).removeClass("edit-active");
					} else {
						isBold = true;
						$(this).addClass("edit-active");
					}
					return false;
				});
				// 斜体
				var isItalic = false;
				$("#"+editId+" .edit-btn-italic").bind("click", function() {
					var selection = restoreSelection();
					if (selection==null || selection.type!="Range") {
						info.curRange = null;
					}
					execCommand("italic", false, null);
					if (isItalic) {
						isItalic = false;
						$(this).removeClass("edit-active");
					} else {
						isItalic = true;
						$(this).addClass("edit-active");
					}
					return false;
				});
				// 增加缩进
				$("#"+editId+" .edit-btn-indent").bind("click", function() {
					execCommand("indent", false, null);
					return false;
				});
				// 减少缩进
				$("#"+editId+" .edit-btn-outdent").bind("click", function() {
					execCommand("outdent", false, null);
					return false;
				});
				// 居左对齐
				$("#"+editId+" .edit-btn-justifyleft").bind("click", function() {
					execCommand("justifyLeft", false, null);
					return false;
				});
				// 居中对齐
				$("#"+editId+" .edit-btn-justifycenter").bind("click", function() {
					execCommand("justifyCenter", false, null);
					return false;
				});
				// 居右对齐
				$("#"+editId+" .edit-btn-justifyright").bind("click", function() {
					execCommand("justifyRight", false, null);
					return false;
				});
				// 外链视频
				$("#"+editId+" .edit-btn-video").bind("click", function() {
					var html = '<div class="javaex-unit clear" style="margin-left: -20px;">';
					html += '<div class="javaex-unit-left tl"><p class="subtitle">链接地址</p></div>';
					html += '<div class="javaex-unit-right"><input type="text" class="javaex-text" id="javaex-edit-video-href" placeholder="请输入视频绝对地址" autocomplete="off"/></div>';
					html += '</div>';
					html += '<div style="display: grid; grid-column-gap: 20px; grid-template-columns: 1fr 1fr;">';
					html += '<div style="grid-column-end: 1; grid-column-start: 1;">';
					html += '<div class="javaex-unit clear" style="margin-left: -20px;">';
					html += '<div class="javaex-unit-left tl"><p class="subtitle">播放器宽</p></div>';
					html += '<div class="javaex-unit-right"><input type="text" class="javaex-text" id="javaex-edit-video-width" value="640" placeholder="宽" /></div>';
					html += '</div>';
					html += '</div>';
					html += '<div style="grid-column-end: 2; grid-column-start: 2;">';
					html += '<div class="javaex-unit clear" style="margin-left: -20px;">';
					html += '<div class="javaex-unit-left tl"><p class="subtitle">播放器高</p></div>';
					html += '<div class="javaex-unit-right"><input type="text" class="javaex-text" id="javaex-edit-video-height" value="400" placeholder="高" /></div>';
					html += '</div>';
					html += '</div>';
					html += '</div>';
					
					info.alert({
						content : html,
						title : "视频",
						width: "500px",
						confirm : function() {
							info.videoCallback();
						}
					});
					
					return false;
				});
				// 超链接
				$("#"+editId+" .edit-btn-href").bind("click", function() {
					var html = '<div class="javaex-unit clear" style="margin-left: -20px;">';
					html += '<div class="javaex-unit-left tl"><p class="subtitle">链接地址</p></div>';
					html += '<div class="javaex-unit-right"><input type="text" class="javaex-text" id="javaex-edit-href" autocomplete="off"/></div>';
					html += '</div>';
					html += '<div class="javaex-unit clear" style="margin-left: -20px;">';
					html += '<div class="javaex-unit-left tl"><p class="subtitle">链接标题</p></div>';
					html += '<div class="javaex-unit-right"><input type="text" class="javaex-text" id="javaex-edit-hrefText" autocomplete="off"/></div>';
					html += '</div>';
					
					info.alert({
						content : html,
						title : "超链接",
						width: "500px",
						confirm : function() {
							info.hrefCallback();
						}
					});
					return false;
				});
				// 去除超链接
				$("#"+editId+" .edit-btn-unlink").bind("click", function() {
					execCommand("unlink", false, null);
					return false;
				});
				// 下划线
				var isUnderline = false;
				$("#"+editId+" .edit-btn-underline").bind("click", function() {
					var selection = restoreSelection();
					if (selection==null || selection.type!="Range") {
						info.curRange = null;
					}
					execCommand("underline", false, null);
					if (isUnderline) {
						isUnderline = false;
						$(this).removeClass("edit-active");
					} else {
						isUnderline = true;
						$(this).addClass("edit-active");
					}
					return false;
				});
				// 删除线
				var isStrikethrough = false;
				$("#"+editId+" .edit-btn-strikethrough").bind("click", function() {
					var selection = restoreSelection();
					if (selection==null || selection.type!="Range") {
						info.curRange = null;
					}
					execCommand("strikethrough", false, null);
					if (isStrikethrough) {
						isStrikethrough = false;
						$(this).removeClass("edit-active");
					} else {
						isStrikethrough = true;
						$(this).addClass("edit-active");
					}
					return false;
				});
				// 上标
				var isSuperscript = false;
				$("#"+editId+" .edit-btn-superscript").bind("click", function() {
					var selection = restoreSelection();
					if (selection==null || selection.type!="Range") {
						info.curRange = null;
					}
					execCommand("superscript", false, null);
					if (isSuperscript) {
						isSuperscript = false;
						$(this).removeClass("edit-active");
					} else {
						isSuperscript = true;
						$(this).addClass("edit-active");
					}
					return false;
				});
				// 下标
				var isSubscript = false;
				$("#"+editId+" .edit-btn-subscript").bind("click", function() {
					var selection = restoreSelection();
					if (selection==null || selection.type!="Range") {
						info.curRange = null;
					}
					execCommand("subscript", false, null);
					if (isSubscript) {
						isSubscript = false;
						$(this).removeClass("edit-active");
					} else {
						isSubscript = true;
						$(this).addClass("edit-active");
					}
					return false;
				});
				// 有序列表
				var isInsertOrderedList = false;
				$("#"+editId+" .edit-btn-insertOrderedList").bind("click", function() {
					execCommand("insertOrderedList", false, null);
					if (isInsertOrderedList) {
						isInsertOrderedList = false;
						$(this).removeClass("edit-active");
					} else {
						isInsertOrderedList = true;
						$("#"+editId+" .edit-btn-insertUnorderedList").removeClass("edit-active");
						$(this).addClass("edit-active");
					}
					return false;
				});
				// 无序列表
				var isInsertUnorderedList = false;
				$("#"+editId+" .edit-btn-insertUnorderedList").bind("click", function() {
					execCommand("insertUnorderedList", false, null);
					if (isInsertUnorderedList) {
						isInsertUnorderedList = false;
						$(this).removeClass("edit-active");
					} else {
						isInsertUnorderedList = true;
						$("#"+editId+" .edit-btn-insertOrderedList").removeClass("edit-active");
						$(this).addClass("edit-active");
					}
					return false;
				});
				// 分隔线
				$("#"+editId+" .edit-btn-insertHorizontalRule").bind("click", function() {
					execCommand("insertHTML", false, '<hr /><br />');
					return false;
				});
				// 全选
				$("#"+editId+" .edit-btn-selectAll").bind("click", function() {
					execCommand("selectAll", false, null);
					return false;
				});
				// 清除格式
				$("#"+editId+" .edit-btn-removeFormat").bind("click", function() {
					execCommand("removeFormat", false, null);
					return false;
				});
				// 字体颜色
				var isForeColor = false;
				$("#"+editId+" .edit-btn-foreColor").bind("click", function() {
					$(this).addClass("edit-active");
					$("#"+editId+" .edit-btn-backColor .javaex-edit-color-menu").hide();
					if ($("#"+editId+" .edit-btn-foreColor .javaex-edit-color-menu").length==0) {
						$(this).append(editColorMenu());
					} else {
						if ($("#"+editId+" .edit-btn-foreColor .javaex-edit-color-menu").is(':hidden')) {
							$("#"+editId+" .edit-btn-foreColor .javaex-edit-color-menu").show();
						}
					}
					$("#"+editId+" .edit-btn-foreColor .javaex-edit-color-menu input").bind("click", function(e) {
						$(this).parent().css("display", "none");
						var color = $(this).attr("color-val");
						execCommand("foreColor", false, color);
						e.stopPropagation();
						if (color=="Black") {
							$("#"+editId+" .edit-btn-foreColor .icon-format_color_text").css("color", "unset");
							$("#"+editId+" .edit-btn-foreColor").removeClass("edit-active");
						} else {
							$("#"+editId+" .edit-btn-foreColor .icon-format_color_text").css("color", color);
						}
					});
					return false;
				});
				// 背景颜色
				var isBackColor = false;
				$("#"+editId+" .edit-btn-backColor").bind("click", function() {
					$(this).addClass("edit-active");
					$("#"+editId+" .edit-btn-foreColor .javaex-edit-color-menu").hide();
					if ($("#"+editId+" .edit-btn-backColor .javaex-edit-color-menu").length==0) {
						$(this).append(editColorMenu());
					} else {
						if ($("#"+editId+" .edit-btn-backColor .javaex-edit-color-menu").is(':hidden')) {
							$("#"+editId+" .edit-btn-backColor .javaex-edit-color-menu").show();
						}
					}
					$("#"+editId+" .edit-btn-backColor .javaex-edit-color-menu input").bind("click", function(e) {
						$(this).parent().css("display", "none");
						var color = $(this).attr("color-val");
						execCommand("backColor", false, color);
						e.stopPropagation();
						if (color=="White") {
							$("#"+editId+" .edit-btn-backColor .icon-font_download").css("color", "unset");
							$("#"+editId+" .edit-btn-backColor").removeClass("edit-active");
						} else {
							$("#"+editId+" .edit-btn-backColor .icon-font_download").css("color", color);
						}
					});
					return false;
				});
				// 表格
				$("#"+editId+" .edit-btn-table").bind("click", function() {
					var html = '<div style="display: grid; grid-column-gap: 20px; grid-template-columns: 1fr 1fr;margin-bottom: -20px;">';
					html += '<div style="grid-column-end: 1; grid-column-start: 1;">';
					html += '<div class="javaex-unit clear" style="margin-left: -20px;">';
					html += '<div class="javaex-unit-left tl"><p class="subtitle">表格行数</p></div>';
					html += '<div class="javaex-unit-right"><input type="text" class="javaex-text" id="javaex-edit-table-row-num" value="2" /></div>';
					html += '</div>';
					html += '</div>';
					html += '<div style="grid-column-end: 2; grid-column-start: 2;">';
					html += '<div class="javaex-unit clear" style="margin-left: -20px;">';
					html += '<div class="javaex-unit-left tl"><p class="subtitle">表格列数</p></div>';
					html += '<div class="javaex-unit-right"><input type="text" class="javaex-text" id="javaex-edit-table-col-num" value="2" /></div>';
					html += '</div>';
					html += '</div>';
					html += '</div>';
					
					info.alert({
						content : html,
						title : "添加表格",
						width: "360px",
						confirm : function() {
							info.tableCallback();
						}
					});
					return false;
				});
				
				// 点击空白处隐藏字体、字体大小、段落格式选择框
				$(document).click(function() {
					$("#"+editId+" .javaex-edit-family-select").hide();
					$("#"+editId+" .javaex-edit-size-select").hide();
					$("#"+editId+" .javaex-edit-format-select").hide();
					$("#"+editId+" .javaex-edit-color-menu").hide();
				});
				// 字体选择
				$("#"+editId+" .javaex-edit-family").bind("click", function() {
					restoreSelection();
					$("#"+editId+" .javaex-edit-size-select").hide();
					$("#"+editId+" .javaex-edit-format-select").hide();
					$("#"+editId+" .javaex-edit-family-select").show();
					event.stopPropagation();
				});
				$("#"+editId+" .javaex-edit-family-select > li").bind("click", function() {
					$(this).closest(".javaex-edit-family").find("i").text($(this).text());
					$(this).addClass("javaex-edit-combobox-checked").siblings().removeClass("javaex-edit-combobox-checked");
					$("#"+editId+" .javaex-edit-family-select").fadeOut();
					var selection = restoreSelection();
					if (selection==null || selection.type!="Range") {
						info.curRange = null;
					}
					execCommand("fontName", false, $(this).text());
				});
				// 字体大小
				$("#"+editId+" .javaex-edit-size").bind("click", function() {
					restoreSelection();
					$("#"+editId+" .javaex-edit-family-select").hide();
					$("#"+editId+" .javaex-edit-format-select").hide();
					$("#"+editId+" .javaex-edit-size-select").show();
					event.stopPropagation();
				});
				$("#"+editId+" .javaex-edit-size-select > li").bind("click", function() {
					var fontSize = $(this).text();
					var fontSizeText = "14px";
					switch (fontSize) {
						case "48":
							fontSize = 7;
							fontSizeText = "48px";
							break;
						case "32":
							fontSize = 6;
							fontSizeText = "32px";
							break;
						case "24":
							fontSize = 5;
							fontSizeText = "24px";
							break;
						case "18":
							fontSize = 4;
							fontSizeText = "18px";
							break;
						case "16":
							fontSize = 3;
							fontSizeText = "16px";
							break;
						case "14":
							fontSize = 2;
							fontSizeText = "14px";
							break;
						case "12":
							fontSize = 1;
							fontSizeText = "12px";
							break;
						default:
							fontSize = 3;
							fontSizeText = "16px";
							break;
					}
					$(this).closest(".javaex-edit-size").find("i").text($(this).text());
					$(this).addClass("javaex-edit-combobox-checked").siblings().removeClass("javaex-edit-combobox-checked");
					$("#"+editId+" .javaex-edit-size-select").fadeOut();
					var selection = restoreSelection();
					if (selection==null || selection.type!="Range") {
						info.curRange = null;
					}
					execCommand("fontSize", false, fontSize);
				});
				// 段落格式
				$("#"+editId+" .javaex-edit-format").bind("click", function() {
					restoreSelection();
					$("#"+editId+" .javaex-edit-family-select").hide();
					$("#"+editId+" .javaex-edit-size-select").hide();
					$("#"+editId+" .javaex-edit-format-select").show();
					event.stopPropagation();
				});
				$("#"+editId+" .javaex-edit-format-select > li").bind("click", function() {
					$(this).closest(".javaex-edit-format").find("i").text($(this).text());
					$(this).addClass("javaex-edit-combobox-checked").siblings().removeClass("javaex-edit-combobox-checked");
					$("#"+editId+" .javaex-edit-format-select").fadeOut();
					var selection = restoreSelection();
					if (selection==null || selection.type!="Range") {
						info.curRange = null;
					}
					execCommand("removeFormat", false, null);
					execCommand("formatBlock", false, $(this).text());
				});
				// 添加引用文字
				$("#"+editId+" .edit-btn-quote").bind("click", function() {
					info.alert({
						content : '<textarea id="javaex-edit-quote" wrap="hard" class="javaex-desc" style="height: 160px;"></textarea>',
						title : "请输入引用内容",
						width: "500px",
						confirm : function() {
							info.quoteCallback();
						}
					});
					return false;
				});
				// 添加代码
				$("#"+editId+" .edit-btn-code").bind("click", function() {
					restoreSelection();
					execCommand("insertHTML", false, '<pre><code><br /></code></pre><p><br />');
				});
				
				/**
				 * 调色板
				 */
				function editColorMenu() {
					return '<div class="javaex-edit-color-menu"><input type="button" style="background-color: Black" title="黑色" color-val="Black"><input type="button" style="background-color: Sienna" color-val="Sienna" title="赭色"><input type="button" style="background-color: DarkOliveGreen" color-val="DarkOliveGreen" title="暗橄榄绿色"><input type="button" style="background-color: DarkGreen" color-val="DarkGreen" title="暗绿色"><input type="button" style="background-color: DarkSlateBlue" color-val="DarkSlateBlue" title="暗灰蓝色"><input type="button" style="background-color: Navy" color-val="Navy" title="海军色"><input type="button" style="background-color: Indigo" color-val="Indigo" title="靛青色"><input type="button" style="background-color: DarkSlateGray" color-val="DarkSlateGray" title="墨绿色"><input type="button" style="background-color: DarkRed" color-val="DarkRed" title="暗红色"><input type="button" style="background-color: DarkOrange" color-val="DarkOrange" title="暗桔黄色"><input type="button" style="background-color: Olive" color-val="Olive" title="橄榄色"><input type="button" style="background-color: Green" color-val="Green" title="绿色"><input type="button" style="background-color: Teal" color-val="Teal" title="水鸭色"><input type="button" style="background-color: Blue" color-val="Blue" title="蓝色"><input type="button" style="background-color: SlateGray" color-val="SlateGray" title="灰石色"><input type="button" style="background-color: DimGray" color-val="DimGray" title="暗灰色"><input type="button" style="background-color: Red" color-val="Red" title="红色"><input type="button" style="background-color: SandyBrown" color-val="SandyBrown" title="沙褐色"><input type="button" style="background-color: YellowGreen" color-val="YellowGreen" title="黄绿色"><input type="button" style="background-color: SeaGreen" color-val="SeaGreen" title="海绿色"><input type="button" style="background-color: MediumTurquoise" color-val="MediumTurquoise" title="间绿宝石"><input type="button" style="background-color: RoyalBlue" color-val="RoyalBlue" title="皇家蓝"><input type="button" style="background-color: Purple" color-val="Purple" title="紫色"><input type="button" style="background-color: Gray" color-val="Gray" title="灰色"><input type="button" style="background-color: Magenta" color-val="Magenta" title="红紫色"><input type="button" style="background-color: Orange" color-val="Orange" title="橙色"><input type="button" style="background-color: Yellow" color-val="Yellow" title="黄色"><input type="button" style="background-color: Lime" color-val="Lime" title="酸橙色"><input type="button" style="background-color: Cyan" color-val="Cyan" title="青色"><input type="button" style="background-color: DeepSkyBlue" color-val="DeepSkyBlue" title="深天蓝色"><input type="button" style="background-color: DarkOrchid" color-val="DarkOrchid" title="暗紫色"><input type="button" style="background-color: Silver" color-val="Silver" title="银色"><input type="button" style="background-color: Pink" color-val="Pink" title="粉色"><input type="button" style="background-color: Wheat" color-val="Wheat" title="浅黄色"><input type="button" style="background-color: LemonChiffon" color-val="LemonChiffon" title="柠檬绸色"><input type="button" style="background-color: White" color-val="White" title="白色"></div>';
				}
				
				/**
				 * 获取当前的范围
				 */
				function getCurRange() {
					var selection = null;
					var range = null;
					var parentElement = null;
					var oEditArea = $("#"+editId+" .javaex-edit-body-container")[0];
					//获取选中区域
					selection = window.document.getSelection();
					if (selection.getRangeAt && selection.rangeCount) {
						range = window.document.getSelection().getRangeAt(0);
						parentElement = range.commonAncestorContainer;
					}
					// 判断选中区域是否在编辑区域
					if (parentElement && (parentElement.id==oEditArea.id || window.jQuery.contains(oEditArea, parentElement))) {
						return range;
					}
				}
				
				/**
				 * 保存当前的范围
				 */
				function saveCurRange() {
					info.curRange = getCurRange();
				}
				
				/**
				 * 还原selection
				 */
				function restoreSelection() {
					var selection = null;
					if (!!info.curRange) {
						selection = window.document.getSelection();
						selection.removeAllRanges();
						selection.addRange(info.curRange);
					}
					return selection;
				}
				
				/**
				 * 插入数据
				 * command ： 指令
				 * mode ： 交互方式
				 * data ： 数据
				 */
				function execCommand(command, mode, data) {
					// 执行指令
					document.execCommand(command, mode, data);
					
					// 回调函数，返回完整html代码内容和纯文字内容
					callback();
				}
				
				/**
				 * 回调函数：返回完整html代码内容和纯文字内容
				 */
				function callback() {
					settings.callback({
						"html" : $("#"+editId+" .javaex-edit-body-container").html().replace(/<(script)[\S\s]*?\1>/gi, "").replace(/\r\n/g, "<br/>").replace(/\n/g,"<br/>"),
						"text" : $("#"+editId+" .javaex-edit-body-container").text().replace(/<(script)[\S\s]*?\1>|<\/?(a|img)[^>]*>/gi, "").replace(/\r\n/g, "").replace(/\n/g, "").replace(/\<|\>|\&/g, "")
					});
				}
			},
			// 超链接回调
			hrefCallback : function() {
				var href = $("#javaex-edit-href").val();            // 超链接地址
				var hrefText = $("#javaex-edit-hrefText").val();    // 超链接显示文本
				                                  // 是否新标签打开
				if (!!href) {
					if (!hrefText) {
						hrefText = href;
					}
					
					if (!!info.curRange) {
						var selection = null;
						selection = window.document.getSelection();
						selection.removeAllRanges();
						selection.addRange(info.curRange);
					}
					
					var hrefHtml = '<a href="'+href+'" target="_blank">'+hrefText+'</a>';
					
					document.execCommand('insertHTML', false, hrefHtml);
				}
			},
			// 添加引用文字回调
			quoteCallback : function() {
				var quote = $("#javaex-edit-quote").val();
				if (!quote) {
					quote = "<br/>";
				}
				if (!!info.curRange) {
					var selection = null;
					selection = window.document.getSelection();
					selection.removeAllRanges();
					selection.addRange(info.curRange);
				}
				var quoteHtml = '<div class="javaex-edit-quote"><blockquote>'+quote+'</blockquote></div><br/>';
				document.execCommand('insertHTML', false, quoteHtml);
			},
			// 添加表格
			tableCallback : function() {
				var rowNum = $("#javaex-edit-table-row-num").val();
				var colNum = $("#javaex-edit-table-col-num").val();
				var html = '';
				html += '<table class="javaex-table unhover edit-table">';
				html += '	<tbody>';
				for (let row=0; row<rowNum; row++) {
					html += '	<tr>';
					for (let col=0; col<colNum; col++) {
						html += '	<td></td>';
					}
					html += '	</tr>';
				}
				html += '	</tbody>';
				html += '</table>';
				html += '<br/>';
				if (!!info.curRange) {
					var selection = null;
					selection = window.document.getSelection();
					selection.removeAllRanges();
					selection.addRange(info.curRange);
				}
				document.execCommand('insertHTML', false, html);
			},
			// 添加外链视频
			videoCallback : function() {
				var href = $("#javaex-edit-video-href").val();
				var width = $("#javaex-edit-video-width").val();
				var height = $("#javaex-edit-video-height").val();
				
				if (!!href && !!width && !!height) {
					var html = '<video controls="controls" width="'+width+'" height="'+height+'" src="'+href+'">您的浏览器不支持 video 标签。</video>';
					
					if (!!info.curRange) {
						var selection = null;
						selection = window.document.getSelection();
						selection.removeAllRanges();
						selection.addRange(info.curRange);
					}
					
					document.execCommand('insertHTML', false, html);
				}
			}
		};
		
		return info;
	};
	
	window.javaex = javaex();
})();

$(function() {
	javaex.radio();
	javaex.checkbox();
	javaex.listenCheckbox();
});