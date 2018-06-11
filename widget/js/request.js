apiready = function () {
    //主页请求
    api.ajax({
            url: "http://jliro.hnla.cn/api/Api/home",
            method: "get",
            data: ""
        }, function (ret, err) {
            if (ret) {
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
    );

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
    );

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
    );

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
    );

    //新闻请求
    /* api.ajax({
             method: "GET",
             url: "http://jliro.hnla.cn/api/Api/newsCate",
             data: ""
         },
         function (ret, err) {

             if (ret) {

                 var newContent = "";

                 for (var i = 0; i < ret.data.length; i++) {
                     newContent += "<li class='swiper-slide' id='" + ret.data[i].id + "'><a>" + ret.data[i].name + "</a></li>"
                 }

                 $(".news-stype ul").html(newContent);
                 $(".news-stype li").css("width", "33.3%");
                 $(".news-stype li").eq(0).addClass("active");

                 api.ajax({
                         method: "GET",
                         url: "http://jliro.hnla.cn/api/Api/newsList?cate_id=1&page=1&list_rows=20",
                         data: ""
                     }, function (ret, err) {

                         if (ret) {

                             if (ret.data.page_data != undefined) {

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
                                 $(".page-newsList").html("<h3 style='text-align: center;line-height: 200%'>抱歉，暂时没有相关新闻！<h3>");
                             }

                         } else {
                             api.alert({msg: ('错误码：' + err.code + '；错误信息：' + err.msg + '网络状态码：' + err.statusCode)});
                         }

                     }
                 );

                 $(".news-stype li").click(function () {
                     $(this).addClass("active").siblings().removeClass("active");
                     var thisNewsId = $(this).attr("id");

                     api.ajax({
                         method: "GET",
                         url: "http://jliro.hnla.cn/api/Api/newsList?cate_id=" + thisNewsId + "&page=1&list_rows=20",
                         data: "",
                         success: function (ret, err) {

                             if (ret) {

                                 if (ret.data.page_data != undefined) {

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
                                     $(".page-newsList").html("<h3 style='text-align: center;line-height: 200%'>抱歉，暂时没有相关新闻！<h3>");
                                 }

                             } else {
                                 api.alert({msg: ('错误码：' + err.code + '；错误信息：' + err.msg + '网络状态码：' + err.statusCode)});
                             }

                         }
                     })

                 });

             } else {
                 api.alert({msg: ('错误码：' + err.code + '；错误信息：' + err.msg + '网络状态码：' + err.statusCode)});
             }

         }
     );*/

    api.ajax({
            method: "GET",
            url: "http://jliro.hnla.cn/api/Api/newsCate",
            data: ""
        }, function (ret, err) {

            if (ret) {
                var newContent = "";

                for (var i = 0; i < ret.data.length; i++) {
                    newContent += "<li class='swiper-slide' id='" + ret.data[i].id + "'><a>" + ret.data[i].name + "</a></li>"
                }

                $(".news-stype ul").html(newContent);
                $(".news-stype li").css("width", "33.3%");
                $(".news-stype li").eq(0).addClass("active");

                api.ajax({
                        method: "GET",
                        url: "http://jliro.hnla.cn/api/Api/newsList?cate_id=1&page=1&list_rows=20",
                        data: ""
                    }, function (ret, err) {

                        if (ret) {
                            if (ret.data.page_data != undefined) {

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
                                $(".page-newsList").html("<h3 style='text-align: center;line-height: 200%'>抱歉，暂时没有相关新闻！<h3>");
                            }
                        } else {
                            api.alert({msg: ('错误码：' + err.code + '；错误信息：' + err.msg + '网络状态码：' + err.statusCode)});
                        }
                    }
                );

                $(".news-stype li").click(function () {
                    $(this).addClass("active").siblings().removeClass("active");
                    var thisNewsId = $(this).attr("id");

                    api.ajax({
                        method: "GET",
                        url: "http://jliro.hnla.cn/api/Api/newsList?cate_id=" + thisNewsId + "&page=1&list_rows=20",
                        data: ""
                    }, function (ret, err) {

                        if (ret) {
                            if (ret.data.page_data != undefined) {

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
                                $(".page-newsList").html("<h3 style='text-align: center;line-height: 200%'>抱歉，暂时没有相关新闻！<h3>");
                            }
                        } else {
                            api.alert({msg: ('错误码：' + err.code + '；错误信息：' + err.msg + '网络状态码：' + err.statusCode)});
                        }

                    })

                });
            } else {
                api.alert({msg: ('错误码：' + err.code + '；错误信息：' + err.msg + '网络状态码：' + err.statusCode)});
            }

        }
    );

    //获取全部产品
    api.ajax({
            url: "http://jliro.hnla.cn/api/Api/productList?cate2_id=0&page=1&list_rows=20&is_top=1",
            method: "GET",
            data: ""
        }, function (ret, err) {

            if (ret) {

                var allProduct = "";
                for (var x = 0; x < ret.data.page_data.length; x++) {
                    if (ret.data.page_data[x][0] != undefined && ret.data.page_data[x][1] != undefined && ret.data.page_data[x][2] != undefined) {

                        allProduct +=

                            "<dl><dt><a id='" + ret.data.page_data[x][0].id + "'>" +
                            "<img src='" + ret.data.page_data[x][0].thumb + "' alt=''>" +
                            "<h4>" + ret.data.page_data[x][0].name + "</h4>" +
                            "<span>￥" + ret.data.page_data[x][0].price + "</span></a></dt><dd>" +
                            "<a id='" + ret.data.page_data[x][1].id + "'>" +
                            "<img src='" + ret.data.page_data[x][1].thumb + "' alt=''>" +
                            "<h4>" + ret.data.page_data[x][1].name + "</h4>" +
                            "<span>￥" + ret.data.page_data[x][1].price + "</span></a>" +
                            "<a id='" + ret.data.page_data[x][2].id + "'>" +
                            "<img src='" + ret.data.page_data[x][2].thumb + "' alt=''>" +
                            "<h4>" + ret.data.page_data[x][2].name + "</h4>" +
                            "<span>￥" + ret.data.page_data[x][2].price + "</span></a></dd></dl>"
                    }
                }
                $(".page-product_all").html("<h2>精品推荐</h2>" + allProduct);


            } else {
                api.alert({msg: ('错误码：' + err.code + '；错误信息：' + err.msg + '网络状态码：' + err.statusCode)});
            }

        }
    );

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
    );

    //product-list页面的点击跳转
    $(".product-stypeList dd span").eq(0).addClass("active");
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

    //news-list点击跳转
    $(".swiper-wrapper .swiper-slide").click(function () {
        $(this).addClass("active swiper-slide-active").siblings().removeClass("active swiper-slide-active");
    });

    //产品二级分类请求
    //产品按分类分页请求
    api.ajax({
            method: "GET",
            data: "",
            url: "http://jliro.hnla.cn/api/Api/productCate?pid=1",
        }, function (ret, err) {
            if (!ret) {
                api.alert({msg: ('错误码：' + err.code + '；错误信息：' + err.msg + '网络状态码：' + err.statusCode)});
            } else {
                var spanContent = "";
                for (var i = 0; i < 4; i++) {
                    spanContent += "<span id='" + ret.data[i].id + "'>" + ret.data[i].name + "</span>"
                }
                // console.log(spanContent);
                $(".product-stypeList dd").html(spanContent);
                $(".product-stypeList dd span").eq(0).addClass("active");

                api.ajax({
                        method: "GET",
                        data: "",
                        url: "http://jliro.hnla.cn/api/Api/productList?cate2_id=16&page=1&list_rows=20",
                    }, function (ret, err) {
                        if (ret) {
                            var productListHtml = "";
                            productListHtml +=

                                "<dl><dt><a href='product-show.html' id='" + ret.data.page_data[0][0].id + "'>" +
                                "<img src='" + ret.data.page_data[0][0].thumb + "' alt=''>" +
                                "<h4>" + ret.data.page_data[0][0].name + "</h4>" +
                                "<span>￥" + ret.data.page_data[0][0].price + "</span></a></dt><dd>" +
                                "<a href='product-show.html' id='" + ret.data.page_data[0][1].id + "'>" +
                                "<img src='" + ret.data.page_data[0][1].thumb + "' alt=''>" +
                                "<h4>" + ret.data.page_data[0][1].name + "</h4>" +
                                "<span>￥" + ret.data.page_data[0][1].price + "</span></a>" +
                                "<a href='product-show.html' id='" + ret.data.page_data[0][2].id + "'>" +
                                "<img src='" + ret.data.page_data[0][2].thumb + "' alt=''>" +
                                "<h4>" + ret.data.page_data[0][2].name + "</h4>" +
                                "<span>￥" + ret.data.page_data[0][2].price + "</span></a></dd></dl>"

                            $(".page-product_list").html(productListHtml);
                        } else {
                            api.alert({msg: ('错误码：' + err.code + '；错误信息：' + err.msg + '网络状态码：' + err.statusCode)});
                        }
                    }
                );

                var liContent = "";
                for (var x = 4; x < ret.data.length; x++) {
                    liContent += "<li id='" + ret.data[x].id + "'>" + ret.data[x].name + "</li>"
                }
                $(".product-stypeList ul").html(liContent);

                //product-list页面的点击跳转
                $(".product-stypeList dd span").eq(0).addClass("active");
                $(".product-stypeList dd span").click(function () {
                    $(".product-stypeList ul li").removeClass("active_li009");
                    var contentText = $(this).text();
                    $(this).addClass("active").siblings().removeClass("active");
                    $(".page-product h2").html(contentText);
                    var this_span_id = $(this).attr("id");
                    //跳转到产品二级页面请求
                    //span跳转请求
                    api.ajax({
                        method: "GET",
                        url: "http://jliro.hnla.cn/api/Api/productList?cate2_id=" + this_span_id + "&page=1&list_rows=20",
                        data: ""
                    }, function (ret, err) {

                        if (ret) {
                            var productListHtml = "";
                            if (ret.data != undefined) {
                                for (var x = 0; x < ret.data.page_data.length; x++) {
                                    if (ret.data.page_data[x][0] != undefined && ret.data.page_data[x][1] != undefined && ret.data.page_data[x][2] != undefined) {

                                        productListHtml +=

                                            "<dl><dt><a id='" + ret.data.page_data[x][0].id + "'>" +
                                            "<img src='" + ret.data.page_data[x][0].thumb + "' alt=''>" +
                                            "<h4>" + ret.data.page_data[x][0].name + "</h4>" +
                                            "<span>￥" + ret.data.page_data[x][0].price + "</span></a></dt><dd>" +
                                            "<a id='" + ret.data.page_data[x][1].id + "'>" +
                                            "<img src='" + ret.data.page_data[x][1].thumb + "' alt=''>" +
                                            "<h4>" + ret.data.page_data[x][1].name + "</h4>" +
                                            "<span>￥" + ret.data.page_data[x][1].price + "</span></a>" +
                                            "<a id='" + ret.data.page_data[x][2].id + "'>" +
                                            "<img src='" + ret.data.page_data[x][2].thumb + "' alt=''>" +
                                            "<h4>" + ret.data.page_data[x][2].name + "</h4>" +
                                            "<span>￥" + ret.data.page_data[x][2].price + "</span></a></dd></dl>"
                                    }
                                }
                                $(".page-product_list").html(productListHtml);
                            } else {
                                $(".page-product_list").html("<h3 style='text-align: center;line-height: 200%'>抱歉，暂时没有相关产品！<h3>");
                            }

                        } else {
                            api.alert({msg: ('错误码：' + err.code + '；错误信息：' + err.msg + '网络状态码：' + err.statusCode)});
                        }

                    })

                });
                //li跳转请求
                $(".product-stypeList ul li").click(function () {
                    $(".product-stypeList dd span").removeClass("active");
                    var contentText_li = $(this).text();
                    $(this).addClass("active_li009").siblings().removeClass("active_li009");
                    $(".page-product h2").html(contentText_li);
                    var this_li_id = $(this).attr("id");
                    // alert(this_li_id)

                    api.ajax({
                        method: "GET",
                        data: "",
                        url: "http://jliro.hnla.cn/api/Api/productList?cate2_id=" + this_li_id + "&page=1&list_rows=20"
                    }, function (ret, err) {

                        if (ret) {

                            var productListHtml = "";
                            if (ret.data != undefined) {
                                for (var x = 4; x < ret.data.page_data.length; x++) {

                                    productListHtml +=

                                        "<dl><dt><a href='product-show.html' id='" + ret.data.page_data[x][0].id + "'>" +
                                        "<img src='" + ret.data.page_data[x][0].thumb + "' alt=''>" +
                                        "<h4>" + ret.data.page_data[x][0].name + "</h4>" +
                                        "<span>￥" + ret.data.page_data[x][0].price + "</span></a></dt><dd>" +
                                        "<a href='product-show.html' id='" + ret.data.page_data[x][1].id + "'>" +
                                        "<img src='" + ret.data.page_data[x][1].thumb + "' alt=''>" +
                                        "<h4>" + ret.data.page_data[x][1].name + "</h4>" +
                                        "<span>￥" + ret.data.page_data[x][1].price + "</span></a>" +
                                        "<a href='product-show.html' id='" + ret.data.page_data[x][2].id + "'>" +
                                        "<img src='" + ret.data.page_data[x][2].thumb + "' alt=''>" +
                                        "<h4>" + ret.data.page_data[x][2].name + "</h4>" +
                                        "<span>￥" + ret.data.page_data[x][2].price + "</span></a></dd></dl>"

                                }
                                $(".page-product_list").html(productListHtml);
                            } else {
                                $(".page-product_list").html("<h3 style='text-align: center;line-height: 200%'>抱歉，暂时没有相关产品！<h3>");
                            }

                        } else {
                            api.alert({msg: ('错误码：' + err.code + '；错误信息：' + err.msg + '网络状态码：' + err.statusCode)});
                        }

                    })

                });


            }
        }
    );

};

/*//全部产品请求
$.ajax({
        url: "http://jliro.hnla.cn/api/Api/productList?cate2_id=0&page=1&list_rows=20&is_top=1",
        method: "GET",
        data: "",
        success: function (data) {


            var allProduct = "";
            for (var x = 0; x < data.data.page_data.length; x++) {
                if (data.data.page_data[x][0] != undefined && data.data.page_data[x][1] != undefined && data.data.page_data[x][2] != undefined) {

                    allProduct +=

                        "<dl><dt><a id='" + data.data.page_data[x][0].id + "'>" +
                        "<img src='" + data.data.page_data[x][0].thumb + "' alt=''>" +
                        "<h4>" + data.data.page_data[x][0].name + "</h4>" +
                        "<span>￥" + data.data.page_data[x][0].price + "</span></a></dt><dd>" +
                        "<a id='" + data.data.page_data[x][1].id + "'>" +
                        "<img src='" + data.data.page_data[x][1].thumb + "' alt=''>" +
                        "<h4>" + data.data.page_data[x][1].name + "</h4>" +
                        "<span>￥" + data.data.page_data[x][1].price + "</span></a>" +
                        "<a id='" + data.data.page_data[x][2].id + "'>" +
                        "<img src='" + data.data.page_data[x][2].thumb + "' alt=''>" +
                        "<h4>" + data.data.page_data[x][2].name + "</h4>" +
                        "<span>￥" + data.data.page_data[x][2].price + "</span></a></dd></dl>"
                }
            }
            $(".page-product_all").html("<h2>精品推荐</h2>" + allProduct);


        }

    }
);*/

//新闻请求
/*$.ajax({
    type: "GET",
        url: "http://jliro.hnla.cn/api/Api/newsCate",
        data: "",
   success:function (data) {

       var newContent = "";

       for (var i = 0; i < data.data.length; i++) {
           newContent += "<li class='swiper-slide' id='" + data.data[i].id + "'><a>" + data.data[i].name + "</a></li>"
       }

       $(".news-stype ul").html(newContent);
       $(".news-stype li").css("width", "33.3%");
       $(".news-stype li").eq(0).addClass("active");

       $.ajax({
               type: "GET",
               url: "http://jliro.hnla.cn/api/Api/newsList?cate_id=1&page=1&list_rows=20",
               data: "",
           success:function (data) {

               if (data.data.page_data != undefined) {

                   var contentHtml = "";
                   for (var i = 0; i < data.data.page_data.length; i++) {
                       contentHtml += "<dl><dt><a href='news-show.html'><img src='" + data.data.page_data[i].thumb + "' alt=''></a></dt><dd>" +
                           "<span>" + data.data.page_data[i].create_time + "</span>" +
                           "<h4><a href='news-show.html'>" + data.data.page_data[i].title + "</a></h4>" +
                           "<p><a href='news-show.html'>" + data.data.page_data[i].description + "</a></p>" +
                           "<a href='news-show.html' class='more'>MORE</a></dd> </dl>";
                   }
                   $(".page-newsList").html(contentHtml);

               } else {
                   $(".page-newsList").html("<h3 style='text-align: center;line-height: 200%'>抱歉，暂时没有相关新闻！<h3>");
               }
           }
           }
       );

       $(".news-stype li").click(function () {
           $(this).addClass("active").siblings().removeClass("active");
           var thisNewsId = $(this).attr("id");

           $.ajax({
               type: "GET",
               url: "http://jliro.hnla.cn/api/Api/newsList?cate_id=" + thisNewsId + "&page=1&list_rows=20",
               data: "",
               success: function (data) {

                       if (data.data.page_data != undefined) {

                           var contentHtml = "";
                           for (var i = 0; i < data.data.page_data.length; i++) {
                               contentHtml += "<dl><dt><a href='news-show.html'><img src='" + data.data.page_data[i].thumb + "' alt=''></a></dt><dd>" +
                                   "<span>" + data.data.page_data[i].create_time + "</span>" +
                                   "<h4><a href='news-show.html'>" + data.data.page_data[i].title + "</a></h4>" +
                                   "<p><a href='news-show.html'>" + data.data.page_data[i].description + "</a></p>" +
                                   "<a href='news-show.html' class='more'>MORE</a></dd> </dl>";
                           }
                           $(".page-newsList").html(contentHtml);

                       } else {
                           $(".page-newsList").html("<h3 style='text-align: center;line-height: 200%'>抱歉，暂时没有相关新闻！<h3>");
                       }


               }
           })

       });

   }}
);*/



