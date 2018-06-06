// $(document).ready(function () {

//主页的apicloud请求
apiready = function (indexPage) {
    api.ajax({
            url: "http://jliro.hnla.cn/api/Api/home",
            method: "get",
            data: ""
        }, function (ret, err) {
            // alert("进入请求")
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
        alert("请求完毕")
        }
    )
};

/*//加盟中心请求
apiready = function (joinCenter) {
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
        alert("请求完毕")
        }
    )
};

//关于我们请求
apiready = function (aboutUs) {
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
            alert("请求完毕")
        }
    )
};*/

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







