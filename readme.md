# 仿b站

1. Header 实现了 
    1. 路由配置
    2. 分区选中时 点亮
        - classnames 包 实现动态类名的添加

2. VideoListBox
    1. api 
        - useEffect []
        - async 立即执行函数
        - axios.get 请求数据

3. Card
    1. 实现了每个视频小盒子的基本布局
    2. 实现了弹幕数、播放量的数据格式化
        - < 10000 按数字算
        - > 10000 以万为单位保留一位小数，
            一位小数位为0时，去0
        - utils:NumberFormat
    3. (待实现)，图片请求错误时，用默认背景，
        并且消除图片的加载失败图标
        - classnames 动态添加 类名
            使 加载失败图标 display:none;    
