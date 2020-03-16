var trend = echarts.init(document.getElementById('line-chart'));

// 指定图表的配置项和数据
var dataX = new Array();
var dataY = new Array();
var dataZ = new Array();
var dataDead = new Array();
var chart = localStorage.getItem("line-chart");
for(var i = 0; i < date; i++) {
    dataX[i] = data[i]['属性']
    dataY[i] = data[i][province + chart];
    dataZ[i] = 1;
    dataDead[i] = data[i][province + '累计死亡']
}
var option = {
    title: {
        text: chart+'趋势图',
        target: 'blank',
        left: '5%',
        textStyle: {
            color: '#fff',
            fontSize: 15,
            bottom: 20
        }
    },
    legend: {
 
        selected: {
            '累计死亡' : false
        },
    },
    grid: {
        left: 40,
        right: 40,
        top: 30,
        bottom: 25,
        containLabel: true   //防止宽度被截取
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
            interval: 5,
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
    series: [
    {
        name: chart,
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
    },
    {
        name: '累计死亡',
        type: 'line',
        smooth: true,
        data: dataDead
    },],
};
trend.setOption(option)