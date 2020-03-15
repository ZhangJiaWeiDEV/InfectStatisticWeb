document.write("<script type='text/javascript' src='data.js'></script>");
var myChart = echarts.init(document.getElementById('present-map'));
var date = localStorage.getItem("date");
var option = {
    title : {
        text: '疫情地图',
        x:'center'
    },
    tooltip : {//提示框组件。
        trigger: 'item'//数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。
    },
     
    visualMap: {//颜色的设置  dataRange
        x: 'left',
        y: 'center',
        splitList: [
            {start: 10000, color: '#000000'},
            {start: 1000, end: 9999, color: '#663333'},
            {start: 500, end: 999, color: '#CC0000'},
            {start: 100, end: 499, color: '#FF4500'},
            {start: 10, end: 99, color: '#FF9966'},
            {start: 1, end: 9, color: '#FFFFCC'},
            {end: 0, label: '0', color: '#F5F5F5'}
        ],
//            min: 0,
//            max: 2500,
//            calculable : true,//颜色呈条状
        color: ['#E0022B', '#E09107', '#A3E00B']
    },
    toolbox: {//工具栏
        show: true,
        orient : 'vertical',//工具栏 icon 的布局朝向
        x: 'right',
        y: 'center',
        feature : {//各工具配置项。
            mark : {show: true},
            dataView : {show: true, readOnly: false},//数据视图工具，可以展现当前图表所用的数据，编辑后可以动态更新。
            restore : {show: true},//配置项还原。
            saveAsImage : {show: true}//保存为图片。
        }
    },
    roamController: {//控制地图的上下左右放大缩小 图上没有显示
        show: true,
        x: 'right',
        mapTypeControl: {
            'china': true
        }
    },
    series : [
        {                
            name: '确诊人数',
            type: 'map',
            mapType: 'china',
            roam: false,//是否开启鼠标缩放和平移漫游
            itemStyle:{//地图区域的多边形 图形样式
                normal:{//是图形在默认状态下的样式
                    label:{
                        show:true,//是否显示标签
                            textStyle: {
                        color: "rgb(249, 249, 249)"
                        }
                    },
                    emphasis:{
                        show:true,
                    },
                },
                emphasis:{//是图形在高亮状态下的样式,比如在鼠标悬浮或者图例联动高亮时
                    label:{show:true}
                }
            },
            top:"3%",//组件距离容器的距离
            data:[
                {name: '北京',value: parseInt(data[date - 1]['北京现存确诊'])},
                {name: '天津',value: parseInt(data[date - 1]['天津现存确诊'])},
                {name: '上海',value: parseInt(data[date - 1]['上海现存确诊'])},
                {name: '重庆',value: parseInt(data[date - 1]['重庆现存确诊'])},
                {name: '河北',value: parseInt(data[date - 1]['河北现存确诊'])},
                {name: '河南',value: parseInt(data[date - 1]['河南现存确诊'])},
                {name: '云南',value: parseInt(data[date - 1]['云南现存确诊'])},
                {name: '辽宁',value: parseInt(data[date - 1]['辽宁现存确诊'])},
                {name: '黑龙江',value: parseInt(data[date - 1]['黑龙江现存确诊'])},
                {name: '湖南',value: parseInt(data[date - 1]['湖南现存确诊'])},
                {name: '安徽',value: parseInt(data[date - 1]['安徽现存确诊'])},
                {name: '山东',value: parseInt(data[date - 1]['山东现存确诊'])},
                {name: '新疆',value: parseInt(data[date - 1]['新疆现存确诊'])},
                {name: '江苏',value: parseInt(data[date - 1]['江苏现存确诊'])},
                {name: '浙江',value: parseInt(data[date - 1]['浙江现存确诊'])},
                {name: '江西',value: parseInt(data[date - 1]['江西现存确诊'])},
                {name: '湖北',value: parseInt(data[date - 1]['湖北现存确诊'])},
                {name: '广西',value: parseInt(data[date - 1]['广西现存确诊'])},
                {name: '甘肃',value: parseInt(data[date - 1]['甘肃现存确诊'])},
                {name: '山西',value: parseInt(data[date - 1]['山西现存确诊'])},
                {name: '内蒙古',value: parseInt(data[date - 1]['内蒙古现存确诊'])},
                {name: '陕西',value: parseInt(data[date - 1]['陕西现存确诊'])},
                {name: '吉林',value: parseInt(data[date - 1]['吉林现存确诊'])},
                {name: '福建',value: parseInt(data[date - 1]['福建现存确诊'])},
                {name: '贵州',value: parseInt(data[date - 1]['贵州现存确诊'])},
                {name: '广东',value: parseInt(data[date - 1]['广东现存确诊'])},
                {name: '青海',value: parseInt(data[date - 1]['青海现存确诊'])},
                {name: '西藏',value: parseInt(data[date - 1]['西藏现存确诊'])},
                {name: '四川',value: parseInt(data[date - 1]['四川现存确诊'])},
                {name: '宁夏',value: parseInt(data[date - 1]['宁夏现存确诊'])},
                {name: '海南',value: parseInt(data[date - 1]['海南现存确诊'])},
                {name: '台湾',value: parseInt(data[date - 1]['台湾现存确诊'])},
                {name: '香港',value: parseInt(data[date - 1]['香港现存确诊'])},
                {name: '澳门',value: parseInt(data[date - 1]['澳门现存确诊'])}
            ]
        }
    ]
};
myChart.setOption(option);
myChart.on('click', function(params){
    var id=document.getElementById("province");
	id.innerHTML = params.name;
});
myChart.on('mouseover', function (params) {
    var dataIndex = params.dataIndex;
    console.log(params);
});