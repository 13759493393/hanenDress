// $(document).ready(function () {

apiready = function () {
    //主页请求
    api.ajax({
            url: "http://jliro.hnla.cn/api/Api/home",
            method: "get",
            data: ""
        }, function (ret, err) {
            if (ret) {
                /*alert(ret)
                alert(JSON.stringify(ret))
                alert("请求成功")*/
                $(".index-brand").html(
                    "<li><img src='images/brand-img1.jpg' class='img' alt=''>" +
                    "<a href='" + ret.data.brand.brand1url + "'>" +
                    "<span><img src='images/ico/brand-ico1.png'></span>" +
                    "<em>" + ret.data.brand.brand1name + "</em>" +
                    "<p>" + ret.data.brand.brand1desc + "</p>" +
                    "</a></li>" +
                    "<li><img src='images/brand-img2.jpg' class='img' alt=''>" +
                    "<a href='" + ret.data.brand.brand2url + "'>" +
                    "<span><img src='images/ico/brand-ico2.png'></span>" +
                    "<em>" + ret.data.brand.brand2name + "</em>" +
                    "<p>" + ret.data.brand.brand2desc + "</p>" +
                    "</a></li>"
                );
            } else {
                api.alert({msg: ('错误码：' + err.code + '；错误信息：' + err.msg + '网络状态码：' + err.statusCode)});
            }
        }
    )
//加盟中心请求
    api.ajax({
            url: "http://jliro.hnla.cn/api/Api/join",
            method: "get",
            data: ""
        }, function (ret, err) {
            if (ret) {
                $(".joinCenter_container").html(ret.data.html);
                $(".page-banner img").attr("src", ret.data.banner);
            } else {
                api.alert({msg: ('错误码：' + err.code + '；错误信息：' + err.msg + '网络状态码：' + err.statusCode)});
            }
        }
    )
    // 关于我们请求
    api.ajax({
            url: "http://jliro.hnla.cn/api/Api/about",
            method: "get",
            data: ""
        }, function (ret, err) {
            if (ret) {
                $(".forUsContent_container").html(ret.data.html);
                $(".page-banner img").attr("src", ret.data.banner);
            } else {
                api.alert({msg: ('错误码：' + err.code + '；错误信息：' + err.msg + '网络状态码：' + err.statusCode)});
            }
        }
    )
//服务中心请求
    api.ajax({
            url: "http://jliro.hnla.cn/api/Api/service",
            method: "get",
            data: ""
        }, function (ret, err) {
            if (ret) {
                $(".serviceCenter_container").html(ret.data.html);
                $(".page-banner img").attr("src", ret.data.banner);
            } else {
                api.alert({msg: ('错误码：' + err.code + '；错误信息：' + err.msg + '网络状态码：' + err.statusCode)});
            }
        }
    )
//新闻按分类分页
    api.ajax({
            url: "http://jliro.hnla.cn/api/Api/newsList?cate_id=1&page=1&list_rows=20",
            method: "get",
            data: ""
        }, function (ret, err) {

            if (ret) {
                var contentHtml = "";
                for (var i = 0; i < ret.data.page_data.length; i++) {
                    contentHtml += "<dl><dt><a href='news-show.html'><img src='" + ret.data.page_data[i].thumb + "' alt=''></a></dt><dd>" +
                        "<span>" + ret.data.page_data[i].create_time + "</span>" +
                        "<h4><a href='news-show.html'>" + ret.data.page_data[i].title + "</a></h4>" +
                        "<p><a href='news-show.html'>" + ret.data.page_data[i].description + "</a></p>" +
                        "<a href='news-show.html' class='more'>MORE</a></dd> </dl>";
                }
                $(".page-newsList").html(contentHtml);
            } else {
                api.alert({msg: ('错误码：' + err.code + '；错误信息：' + err.msg + '网络状态码：' + err.statusCode)});
            }

        }
    )
//单一新闻请求
    api.ajax({
            url: "http://jliro.hnla.cn/api/Api/news?id=1",
            method: "get",
            data: ""
        }, function (ret, err) {

            if (ret) {
                $(".page-newsShow").html(
                    "<div class='title'><h3>" + ret.data.title + "</h3>" +
                    "<span>时间：" + ret.data.create_time + "</span></div>" +
                    "<div class='info'>" + ret.data.content + "</div>"
                );
            } else {
                api.alert({msg: ('错误码：' + err.code + '；错误信息：' + err.msg + '网络状态码：' + err.statusCode)});
            }

        }
    )
//单一产品请求
    api.ajax({
            url: "http://jliro.hnla.cn/api/Api/product?id=1",
            method: "get",
            data: ""
        }, function (ret, err) {

            if (ret) {
                $(".productDetail").html(
                    "<div class='page-productHead'><img src='" + ret.data.thumb + "'alt=''>" +
                    "<h4>" + ret.data.name + "</h4><span>￥" + ret.data.price + "</span></div>" +
                    "<div class='page-productInfo'><p class='code'>商品编号：" + ret.data.pdt_id + "</p>" +
                    "<span class='title'>简&#12288;&#12288;介：</span>" +
                    "<p class='text'>" + ret.data.description + "</p></div>"
                );
            } else {
                api.alert({msg: ('错误码：' + err.code + '；错误信息：' + err.msg + '网络状态码：' + err.statusCode)});
            }

        }
    )
//获取全部产品
    api.ajax({
            url: "http://jliro.hnla.cn/api/Api/productList?cate2_id=0&page=1&list_rows=20&is_top=1",
            method: "get",
            data: ""
        }, function (ret, err) {

            if (ret) {
                var productHtml = "";
                for (var x = 0; x < ret.data.page_data.length; x++) {
                    if (ret.data.page_data[x][0] != undefined && ret.data.page_data[x][1] != undefined && ret.data.page_data[x][2] != undefined) {
                        productHtml +=
                            "<dl><dt><a href='product-show.html'>" +
                            "<img src='" + ret.data.page_data[x][0].thumb + "' alt=''>" +
                            "<h4>" + ret.data.page_data[x][0].name + "</h4>" +
                            "<span>￥" + ret.data.page_data[x][0].price + "</span></a></dt><dd>" +
                            "<a href='product-show.html'>" +
                            "<img src='" + ret.data.page_data[x][1].thumb + "' alt=''>" +
                            "<h4>" + ret.data.page_data[x][1].name + "</h4>" +
                            "<span>￥" + ret.data.page_data[x][1].price + "</span></a>" +
                            "<a href='product-show.html'>" +
                            "<img src='" + ret.data.page_data[x][2].thumb + "' alt=''>" +
                            "<h4>" + ret.data.page_data[x][2].name + "</h4>" +
                            "<span>￥" + ret.data.page_data[x][2].price + "</span></a></dd></dl>"
                    }
                }
                $(".page-product_all").html("<h2>精品推荐</h2>" + productHtml);
            } else {
                api.alert({msg: ('错误码：' + err.code + '；错误信息：' + err.msg + '网络状态码：' + err.statusCode)});
            }

        }
    )
    //产品按分类分页
    api.ajax({
            url: "http://jliro.hnla.cn/api/Api/productList?cate2_id=17&page=1&list_rows=20",
            method: "get",
            data: ""
        }, function (ret, err) {

            if (ret) {
                var productListHtml = "";
                for (var x = 0; x < ret.data.page_data.length; x++) {

                    productListHtml +=

                        "<dl><dt><a href='product-show.html'>" +
                        "<img src='" + ret.data.page_data[x][0].thumb + "' alt=''>" +
                        "<h4>" + ret.data.page_data[x][0].name + "</h4>" +
                        "<span>￥" + ret.data.page_data[x][0].price + "</span></a></dt><dd>" +
                        "<a href='product-show.html'>" +
                        "<img src='" + ret.data.page_data[x][1].thumb + "' alt=''>" +
                        "<h4>" + ret.data.page_data[x][1].name + "</h4>" +
                        "<span>￥" + ret.data.page_data[x][1].price + "</span></a>" +
                        "<a href='product-show.html'>" +
                        "<img src='" + ret.data.page_data[x][2].thumb + "' alt=''>" +
                        "<h4>" + ret.data.page_data[x][2].name + "</h4>" +
                        "<span>￥" + ret.data.page_data[x][2].price + "</span></a></dd></dl>"

                }
                $(".page-product_list").html("<h2>过膝裙</h2>" + productListHtml);
            } else {
                api.alert({msg: ('错误码：' + err.code + '；错误信息：' + err.msg + '网络状态码：' + err.statusCode)});
            }

        }
    )
    //product-list页面的点击跳转
    $(".product-stypeList dd span").click(function () {
        $(".product-stypeList ul li").removeClass("active_li009");
        var contentText = $(this).text();
        $(this).addClass("active").siblings().removeClass("active");
        $(".page-product h2").html(contentText);
    });

    $(".product-stypeList ul li").click(function () {
        $(".product-stypeList dd span").removeClass("active");
        var contentText_li = $(this).text();
        $(this).addClass("active_li009").siblings().removeClass("active_li009");
        $(".page-product h2").html(contentText_li);
    });

};


/*//ajax测试请求 过膝裙
$.ajax({
    type: "GET",
    url: "http://jliro.hnla.cn/api/Api/productList?cate2_id=17&page=1&list_rows=20",
    data: "",
    headers: "",
    success: function (data) {

        var productListHtml = "";
        for (var x = 0; x < data.data.page_data.length; x++) {

            productListHtml +=

                "<dl><dt><a href='product-show.html'>" +
                "<img src='" + data.data.page_data[x][0].thumb + "' alt=''>" +
                "<h4>" + data.data.page_data[x][0].name + "</h4>" +
                "<span>￥" + data.data.page_data[x][0].price + "</span></a></dt><dd>" +
                "<a href='product-show.html'>" +
                "<img src='" + data.data.page_data[x][1].thumb + "' alt=''>" +
                "<h4>" + data.data.page_data[x][1].name + "</h4>" +
                "<span>￥" + data.data.page_data[x][1].price + "</span></a>" +
                "<a href='product-show.html'>" +
                "<img src='" + data.data.page_data[x][2].thumb + "' alt=''>" +
                "<h4>" + data.data.page_data[x][2].name + "</h4>" +
                "<span>￥" + data.data.page_data[x][2].price + "</span></a></dd></dl>"

        }
        $(".page-product_list").html(productListHtml);

    },
    error: function () {
        alert("请求失败")
    }
});


//product-list页面的点击跳转
$(".product-stypeList dd span").click(function () {
    $(".product-stypeList ul li").removeClass("active_li009");
    var contentText = $(this).text();
    $(this).addClass("active").siblings().removeClass("active");
    $(".page-product h2").html(contentText);
});

$(".product-stypeList ul li").click(function () {
    $(".product-stypeList dd span").removeClass("active");
    var contentText_li = $(this).text();
    $(this).addClass("active_li009").siblings().removeClass("active_li009");
    $(".page-product h2").html(contentText_li);
});


//ajax测试请求 全部产品
$.ajax({
    type: "GET",
    url: "http://jliro.hnla.cn/api/Api/productList?cate2_id=0&page=1&list_rows=20&is_top=1",
    data: "",
    headers: "",
    success: function (data) {

        var productHtml = "";
        for (var x = 0; x < data.data.page_data.length; x++) {
            if (data.data.page_data[x][0] != undefined && data.data.page_data[x][1] != undefined && data.data.page_data[x][2] != undefined) {
                productHtml +=
                    "<dl><dt><a href='product-show.html'>" +
                    "<img src='" + data.data.page_data[x][0].thumb + "' alt=''>" +
                    "<h4>" + data.data.page_data[x][0].name + "</h4>" +
                    "<span>￥" + data.data.page_data[x][0].price + "</span></a></dt><dd>" +
                    "<a href='product-show.html'>" +
                    "<img src='" + data.data.page_data[x][1].thumb + "' alt=''>" +
                    "<h4>" + data.data.page_data[x][1].name + "</h4>" +
                    "<span>￥" + data.data.page_data[x][1].price + "</span></a>" +
                    "<a href='product-show.html'>" +
                    "<img src='" + data.data.page_data[x][2].thumb + "' alt=''>" +
                    "<h4>" + data.data.page_data[x][2].name + "</h4>" +
                    "<span>￥" + data.data.page_data[x][2].price + "</span></a></dd></dl>"
            }
        }
        $(".page-product_all").html("<h2>精品推荐</h2>" + productHtml);

    },
    error: function () {
        alert("请求失败")
    }
});*/


/*    //首页请求
    $.ajax({
        type: "GET",
        url: "http://jliro.hnla.cn/api/Api/home",
        data: "",
        headers: "",
        success: function (data) {

            $(".index-brand").html(
                "<li><img src='images/brand-img1.jpg' class='img' alt=''>" +
                "<a href='" + data.data.brand.brand1url + "'>" +
                "<span><img src='images/ico/brand-ico1.png'></span>" +
                "<em>" + data.data.brand.brand1name + "</em>" +
                "<p>" + data.data.brand.brand1desc + "</p>" +
                "</a></li>" +
                "<li><img src='images/brand-img2.jpg' class='img' alt=''>" +
                "<a href='" + data.data.brand.brand2url + "'>" +
                "<span><img src='images/ico/brand-ico2.png'></span>" +
                "<em>" + data.data.brand.brand2name + "</em>" +
                "<p>" + data.data.brand.brand2desc + "</p>" +
                "</a></li>"
            );
        },
        error: function () {
            alert("请求失败")
        }
    })

    //加盟中心请求
    $.ajax({
        type: "GET",
        url: "http://jliro.hnla.cn/api/Api/join",
        data: "",
        headers: "",
        success: function (data) {
            $(".joinCenter_container").html(data.data.html);
            $(".page-banner img").attr("src", data.data.banner);
        },
        error: function () {
            alert("请求失败")
        }
    })

    //关于我们请求
    $.ajax({
        type: "GET",
        url: "http://jliro.hnla.cn/api/Api/about",
        data: "",
        headers: "",
        success: function (data) {
            $(".forUsContent_container").html(data.data.html);
            $(".page-banner img").attr("src", data.data.banner);
        },
        error: function () {
            alert("请求失败")
        }
    })

    //服务中心请求
    $.ajax({
        type: "GET",
        url: "http://jliro.hnla.cn/api/Api/service",
        data: "",
        headers: "",
        success: function (data) {
            $(".serviceCenter_container").html(data.data.html);
            $(".page-banner img").attr("src", data.data.banner);
        },
        error: function () {
            alert("请求失败")
        }
    });*/

// });







