"use strict";$(function(){var e=function(e){var i=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),t=window.location.search.substr(1).match(i);return null!=t?unescape(t[2]):t},s=function(e,l,i,a){var n=l.load(2,{shade:[.45,"#000"]});e.render({elem:"#prize_info",url:"./../getAllPrize",cellMinWidth:80,cols:[[{field:"nickname",title:"用户名",templet:function(e){return'<div><img class="user_icon" src='+e.headimgurl+" />"+decodeURI(e.nickname)+"</div>"}},{field:"sex",title:"性别",align:"center",templet:function(e){return e.sex?1==e.sex?"男":"女":"---"}},{field:"city",title:"城市",align:"center",templet:function(e){return e.city?e.city:"---"}},{field:"award_name",title:"奖品名称",align:"center"},{field:"award_id",title:"奖品编码",align:"center"},{field:"creat_time",title:"中奖日期",sort:!0,align:"center"},{field:"is_get",title:"是否领取",sort:!0,align:"center",templet:function(e){return'<input type="checkbox" code="'+e.openid+"@"+e.creat_time+'" name="close" '+(0==e.is_get?"checked":"disabled")+' lay-filter="switchTest" lay-skin="switch" value="'+e.is_get+'" lay-text="NO|YES">'}}]],page:!0,limit:20,done:function(e,i,t){l.close(n),$("#fieldset1").slideDown(),a&&l.msg("欢迎使用后台管理系统！",{icon:6,offset:"30%"})}}),$.cookie("flag")||$.cookie("flag","1",{expires:5/24}),i.on("switch(switchTest)",function(i){var t=l.load(2,{shade:[.45,"#000"]});"0"==$(i.elem).val()?$(i.elem).val("1"):$(i.elem).val("0"),$.get("./../updataIsGet",{openid:$(i.elem).attr("code").split("@")[0],creat_time:$(i.elem).attr("code").split("@")[1],state:$(i.elem).val()},function(e){l.close(t),e.flag&&1==e.flag?($(i.elem).attr("disabled",!0).siblings("div.layui-form-switch").addClass("layui-checkbox-disbaled layui-disabled").removeClass("layui-form-onswitch"),l.msg("状态修改成功！",{icon:1,offset:"30%"})):l.msg("网络异常！",{icon:5,offset:"30%"})})})};$.cookie("code")&&e("username")&&$.cookie("code")==hex_md5(e("username"))?($("#user_name").text(e("username")),layui.use(["layer","table","form","colorpicker","slider"],function(){var e,i,t=layui.layer,n=layui.table,o=layui.form,d=layui.colorpicker,r=layui.slider;if($.cookie("flag"))s(n,t,o);else var l=t.open({type:1,title:!1,closeBtn:!1,anim:(e=0,i=6,Math.floor(Math.random()*(i-e+1)+e)),area:"300px;",shade:.8,id:"LAY_layuipro",btn:["好的"],btnAlign:"c",moveType:1,content:['<div style="padding: 50px; line-height: 22px; background-color: #393D49; color: #fff; font-weight: 300;">你知道吗？亲！',"<br>","    <br>无论春夏秋冬，关心牵挂始终跟踪；无论白天黑夜，问候祝福永不松懈。亲爱的朋友，工作繁忙，注意休息，愿幸福快乐！","<br>","    <br>每天微笑多一点，每天快乐就多一点；遇到一件难事，微笑着去面对，会变得简单许多，这样也能起到有效的减压效果哦！亲爱的我们一起来为自己微笑吧！","<br>","    <br>我们此后的征途是星辰大海 ^_^","</div>"].join(""),success:function(e){},yes:function(){l&&t.close(l),s(n,t,o,"1")}});$(".nav").on("click",function(){switch($(this).addClass("layui-this").siblings().removeClass("layui-this"),$(".content").eq($(this).index()).show().siblings().hide(),$(this).index()){case 0:s(n,t,o);break;case 1:!function(r,s,c,u,f){windowDom=function(e,i,t){var l=3<arguments.length&&void 0!==arguments[3]?arguments[3]:"",a=4<arguments.length&&void 0!==arguments[4]?arguments[4]:"",n=5<arguments.length&&void 0!==arguments[5]?arguments[5]:"",o=6<arguments.length&&void 0!==arguments[6]?arguments[6]:0,d=s.open({type:1,title:e,closeBtn:1,anim:2,area:"400px",move:!1,btn:["确定","取消"],content:'<form class="layui-form" id="'+i+'" action="" lay-filter="'+i+'">\n                            <div class="layui-form-item">\n                                <label class="layui-form-label">奖品名称</label>\n                                <div class="layui-input-inline">\n                                    <input type="text" id="award_name" maxlength="20" required lay-verify="required" placeholder="请输入奖品名称"\n                                        autocomplete="off" class="layui-input" value="'+a+'">\n                                </div>\n                            </div>\n                            <div class="layui-form-item">\n                                <label class="layui-form-label">奖品id</label>\n                                <div class="layui-input-inline">\n                                    <input type="text" id="award_id" required lay-verify="required" placeholder="请输入奖品id"\n                                        autocomplete="off" class="layui-input" value="'+n+'">\n                                </div>\n                            </div>\n                            <div class="layui-form-item">\n                                <label class="layui-form-label">奖品背景色</label>\n                                <div class="layui-input-inline" style="width: 120px;">\n                                    <input type="text" value="" disabled placeholder="请选择颜色" lay-verify="required" class="layui-input" id="award_bg_color">\n                                </div>\n                                <div class="layui-inline" style="left: -11px;">\n                                    <div id="test-form"></div>\n                                </div>\n                            </div>\n                            <div class="layui-form-item">\n                                <label class="layui-form-label">奖品权重</label>\n                                <div class="layui-input-inline">\n                                    <div id="slideTest1" class="demo-slider"></div>\n                                    <span class="probability_num">'+o+'</span>\n                                </div>\n                            </div>\n                            <div class="layui-form-item" style="display: none;">\n                                <div class="layui-input-block">\n                                    <button class="layui-btn" lay-submit="" id="windowBtn" lay-filter="windowSubmit">确定</button>\n                                </div>\n                            </div>\n                        </form>',success:function(){$("#award_bg_color").val(t).parent().css("width","222px"),u.render({elem:"#test-form",color:t,done:function(e){$("#award_bg_color").val(e)}}),f.render({elem:"#slideTest1",theme:"#1E9FFF",value:o,change:function(e){$(".probability_num").html(e)}})},yes:function(){$("#windowBtn").click()}});c.on("submit(add)",function(e){return $.get("./../addAwardRule",{id:"rule"+(new Date).getTime(),award_name:$("#award_name").val(),award_id:$("#award_id").val(),award_bg_color:$("#award_bg_color").val(),award_probability:$(".probability_num").text()},function(e){e.flag&&1==e.flag?(s.close(d),r.reload("ruleTable",{url:"./../getAllAward"}),s.msg("新增奖品项成功！",{icon:1,offset:"30%"})):s.msg("网络异常，请联系管理员！",{icon:5,offset:"30%"})}),!1}),c.on("submit(edit)",function(e){return $.get("./../editAwardRule",{id:l,award_name:$("#award_name").val(),award_id:$("#award_id").val(),award_bg_color:$("#award_bg_color").val(),award_probability:$(".probability_num").text()},function(e){e.flag&&1==e.flag?(s.close(d),r.reload("ruleTable",{url:"./../getAllAward"}),s.msg("奖品项修改成功！",{icon:1,offset:"30%"})):s.msg("网络异常，请联系管理员！",{icon:5,offset:"30%"})}),!1})};var l=s.load(2,{shade:[.45,"#000"]});r.render({elem:"#award_info",url:"./../getAllAward",toolbar:"#toolbarDemo",id:"ruleTable",cellMinWidth:80,cols:[[{field:"index",title:"#",align:"center",width:80,templet:function(e){return e.LAY_INDEX}},{field:"award_name",title:"奖品名称"},{field:"award_id",title:"奖品id",align:"center"},{field:"award_bg_color",title:"奖品背景颜色",align:"center",templet:function(e){return'<span class="bgColor">'+e.award_bg_color+'</span><span style="display: inline-block; width: 12px; height: 12px; margin-left: 4px; background:'+e.award_bg_color+'"></span>'}},{field:"award_probability",title:"奖品权重",align:"center"},{title:"操作",toolbar:"#toolbar",align:"center",width:200}]],limit:100,done:function(e,i,t){s.close(l)}}),r.on("toolbar(award_info)",function(e){"add"==e.event&&(void 0).windowDom("新增","add","#fbdb00")}),r.on("tool(award_info)",function(e){var i=e.data;"del"===e.event?s.confirm("是否删除 “"+i.award_name+"” 奖品项？",{title:"提示"},function(e){$.get("./../delAwardRule",{id:i.id},function(e){e.flag&&1==e.flag?(s.msg("奖品项删除成功！",{icon:1,offset:"30%"}),r.reload("ruleTable",{url:"./../getAllAward"})):s.msg("网络异常，请联系管理员！",{icon:5,offset:"30%"})}),s.close(e)}):"edit"===e.event&&(void 0).windowDom("编辑","edit",i.award_bg_color,i.id,i.award_name,i.award_id,i.award_probability)})}(n,t,o,d,r);break;case 2:l=o,a=t,getSetting=function(){var t=a.load(2,{shade:[.45,"#000"]});$.get("./../getSetting",{},function(e){var i=e.result[0];l.val("content2",i),1==i.game_state?$("#game_info_div").slideUp():$("#game_info_div").slideDown(),a.close(t)})},(void 0).getSetting(),l.on("switch(game_state)",function(e){this.checked?$("#game_info_div").slideUp():$("#game_info_div").slideDown()}),l.on("submit(content2)",function(e){return e.field.game_state=e.field.game_state?1:0,a.open({title:"提示",btn:["确定","取消"],content:"提交后将立即生效，确认提交？",closeBtn:0,yes:function(){var i=a.load(2,{shade:[.45,"#000"]});$.get("./../updataSetting",{data:e.field},function(e){a.close(i),e.flag&&1==e.flag?a.msg("系统设置修改成功！",{icon:1,offset:"30%"}):a.msg("网络异常，请联系管理员！",{icon:5,offset:"30%"}),(void 0).getSetting()})}}),!1})}var l,a}),$("#logout").on("click",function(){t.open({title:"提示",btn:["确定","取消"],content:"是否退出后台管理系统？",closeBtn:0,yes:function(){$.cookie("code","",{expires:-1}),$(window).attr("location","./index.html")}})})})):$(window).attr("location","./index.html")});