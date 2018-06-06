$(document).ready(function () {
    apiready = function (aboutUs) {
        api.ajax({
                url: "http://jliro.hnla.cn/api/Api/about",
                method: "get",
                data: ""
            }, function (ret, err) {
            alert("进入请求")
                if (ret) {
                    $(".forUsContent_container").html(ret.data.html);
                    $(".page-banner img").attr("src", ret.data.banner);
                    alert("请求完毕")
                } else {
                    api.alert({msg: ('错误码：' + err.code + '；错误信息：' + err.msg + '网络状态码：' + err.statusCode)});
                }
            }
        )
    };
})