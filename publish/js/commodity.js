"use strict";!function(){var r=[],o=document.getElementById("paginationContainer");QF.pGet("../php/getgoods.php",{}).then(function(t){if(t.error)throw new Error("请求失败");r=t.msg,new Pagination(o,t.msg,0,6).display(function(t){console.log(t);var o='<ul style="width:100%;" class="row wrap-column list-group list-group-horizontal-sm no-gutters" >';return t.forEach(function(t){o+='<li class="col col-4 list-group-item" style="padding:0 10px 20px 10px; border: none">\n\t\t\t\t\t\t                <div class="card">\n\t\t\t\t\t\t                    <img src="'+t.goods_small_logo+'" class="card-img-top" alt="...">\n\t\t\t\t\t\t                    <div class="card-body">\n\t\t\t\t\t\t                        <p class="d-flex justify-content-between align-items-center card-text"><span>￥'+t.goods_price+'</span>\n\t\t\t\t\t\t                        <button type="button" data-id="'+t.goods_id+'" class="btn btn-primary">加入购物车</button>\n\t\t\t\t\t\t\t\t\t\t\t    </p>\n\t\t\t\t\t\t                    </div>\n\t\t\t\t\t\t                </div>\n\t\t\t\t\t\t\t        </li>'}),o+="</ul>"})}).catch(function(t){console.log(t)}),o.onclick=function(t){if("button"===t.target.tagName.toLowerCase()){var o=t.target.getAttribute("data-id");console.log("当前按钮,商品id是"+o);var n=r.find(function(t){return t.goods_id===o}),i=localStorage.getItem("shoppingCart")||"[]",a=JSON.parse(i),e=a.find(function(t){return t.goods_id===o});e?e.count++:(n.count=1,a.push(n)),localStorage.setItem("shoppingCart",JSON.stringify(a)),location.href="../html/shoppingCart.html"}}}();