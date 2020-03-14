var trend = echarts.init(document.getElementById('line-chart'));

// 指定图表的配置项和数据
var dataX = ['2.21', '2.22', '2.23', '2.24', '2.25'];
var dataY = [Math.round(Math.random()*500),Math.round(Math.random()*500),Math.round(Math.random()*500),Math.round(Math.random()*500),Math.round(Math.random()*500)];
var dataZ = [500, 500, 500, 500, 500];
var option = {
    title: {
        text: '确诊人数趋势图',
        target: 'blank',
        left: '5%',
        textStyle: {
            color: '#fff',
            fontSize: 15,
            bottom: 20
        }
    },
    grid: {
        left: 40,
        right: 40,
        top: 30,
        bottom: 25,
    },
    backgroundColor: 'rgba(0,0,0,0.8)',		// 背景颜色
    tooltip: {
        trigger: 'item',
        formatter: "{a}<br/>{b} : {c}人"
    },
    xAxis: {
        type: 'category',
        position: 'bottom',
        // 等同于 axisLine: true    开始
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        // 等同于 axisLine: true    结束
        axisLabel: {
            color: '#fff',
            fontSize: 12
        },
        data: dataX,
    },
    yAxis: {
        splitNumber: 5, // 坐标轴的分割段数，需要注意的是这个分割段数只是个预估值，最后实际显示的段数会在这个基础上根据分割后坐标轴刻度显示的易读程度作调整。在类目轴中无效。
        // 等同于 axisLine: true    开始
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        // 等同于 axisLine: true    结束
        splitLine: {
            show: true,
            lineStyle: {
                color: '#fff',
                opacity: 0.2
            }
        },
        axisLabel: {
            color: '#fff',
            fontSize: 12
        }
    },
    series: [{
        name: '确诊人数',
        type: 'line',
        data: dataY,
        smooth: true,
        symbol: 'emptyCircle',
        symbolSize: 5,
        itemStyle: {
            normal: {
                color: '#fff'
            }
        },
        lineStyle: {
            normal: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: 'rgba(255,0,0,0.8)' // 0% 处的颜色
                    }, {
                        offset: 1, color: 'rgba(0,0,238,0.8)' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
                width: 3
            }
        },
        areaStyle: {
            normal: {
                color: "rgba(51,255,255,0.3)",
            }
        }
    }, {
        name: '占位背景',
        type: 'bar',
        itemStyle: {
            normal: {
                show: true,
                color: '#fff',
                opacity: 0
            }
        },
        silent: true, // 图形是否不响应和触发鼠标事件，默认为 false，即响应和触发鼠标事件。
        barWidth: '50%', // 柱条宽度
        data: dataZ, // 占位背景在y轴上的值(高度)
        animation: false // 是否开启动画
    }, {
        name: '占位背景',
        type: 'bar',
        itemStyle: {
            normal: {
                show: true,
                color: '#fff',
                opacity: 0.1
            }
        },
        silent: true,
        barWidth: '50%',
        barGap: 0, // 柱间距离
        data: dataZ,
        animation: false
    }],
};
trend.setOption(option)