$(document).ready(function () {

    apiready = function () {

        api.alert("正在发起请求！");

        api.ajax({
            url: "jliro.postman_collection(all).json",
            method: "post",
            headers: "",
            data: {
                "pdt_cate": [
                    {
                        "id": 1,
                        "name": "女装",
                        "en_name": "Clothing",
                        "img": "http://jliro.hnla.cn/uploads/admin/home_config/20180604/15d4f8d77b5ac4ab9c80ba97a9e61e21.jpg"
                    },
                    {
                        "id": 2,
                        "name": "时尚配饰",
                        "en_name": "Accessories",
                        "img": "http://jliro.hnla.cn/uploads/admin/home_config/20180604/47d2ee55c44824cda625e427aa81674b.jpg"
                    },
                    {
                        "id": 3,
                        "name": "皮草系列",
                        "en_name": "Fur series",
                        "img": "http://jliro.hnla.cn/uploads/admin/home_config/20180604/f7728dcbe294f47739d1d93b33798592.jpg"
                    }
                ],
                "brand": {
                    "brand1desc": "子品牌1简介",
                    "brand1img": "http://jliro.hnla.cn/uploads/admin/home_config/20180604/8c10bd2afbd215e4fa4af260238b9029.jpg",
                    "brand1name": "子品牌1",
                    "brand1url": "http://jliro.hna.cn",
                    "brand2desc": "子品牌2简介",
                    "brand2img": "http://jliro.hnla.cn/uploads/admin/home_config/20180604/80ec0f07ccbfc2f4b6c0413399c29fbe.jpg",
                    "brand2name": "子品牌2",
                    "brand2url": "http://jliro.hna.cn"
                }
            }, function (ret, err) {
                if (ret) {
                    api.alert("请求成功！");
                } else {
                    api.alert("请求失败！");
                }
            }
        });

    };

});




