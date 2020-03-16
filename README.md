# InfectStatisticWeb
疫情统计Web主仓库

#### 作业链接
https://github.com/ZhangJiaWeiDEV/InfectStatisticWeb

#### 结对学号
221701118、221701119

#### 项目描述
&emsp;&emsp;该项目是一个疫情统计的Web应用，使用地图以及折线图来直观地表示疫情的感染程度以及变化趋势，用户可以选择日期查看当天的感染情况以及变化趋势，也可以点击地图上的省份来查看详细信息。

#### 项目结构及运行
&emsp;&emsp;该项目使用HTML+CSS+JavaScript编写，使用echarts绘制地图与折线图，数据保持在js文件里，持久化在Storage。该程序主体有三个容器：left、main和right，left容器用来显示被点击省份的详细信息。main容器用来显示echart绘制的两个地图：present-map（显示当前确诊人数）和accumulate-map（显示累计确诊人数），前者呈现于暖色调，后者呈现于冷色调，两个地图同时只会显示一个，可以用按钮切换。right容器用于显示表示变化趋势的折线图line-chart，可以使用按钮选择新增确诊趋势图、累计确诊趋势图以及治愈\死亡趋势图。上述用echarts绘制的三个图都分别存为了一个js文件，除去使用echarts时导入的js文件外，还有一个data.js文件将全国各省1月19日至2月26日的受灾情况都记录到了一个数组里。除了js文件外还有一个main.html的主文件，运行该文件即可查看主页面，css文件这里不再做介绍。