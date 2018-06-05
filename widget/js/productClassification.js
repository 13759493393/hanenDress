$(document).ready(function () {

    $.ajax({
        type: "get",
        url: "jliro.hnla.cn/api/Api/productCate?pid=0",
        async: "true",
        data:{
             pid:"0"
        },
        dataType: "json",
        success: function (data) {

            

        }
    });

});