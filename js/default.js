/*API相关
 * 为了防止地址改来改去增加代码修改难度
 * 在这个文件夹中奖地址固定赋值给变量
 * 方便之后更改
 */
//发布状态的主机地址
PRODUCT_HOST="http://h6.duchengjiu.top/shop/";//部署到外网，上线
//测试状态下的主机地址
DEBUG_HOST="http://192.168.200.33:8080/shop/";//部署到内网，自己调试
//登录
LOGIN="api_user.php";
//获取商品分类
PRODUCT_TYPE="api_cat.php";
//通过商品分类获得商品列表
GOODS="api_goods.php";
//查看购物车列表
SHOPPINGCAR="api_cart.php";
