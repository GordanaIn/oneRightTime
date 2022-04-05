import * as echarts from 'echarts/core';
import {
    TitleComponent,
    TooltipComponent,
    GridComponent
} from 'echarts/components';
import { BarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import ReactEcharts from "echarts-for-react";
import React from "react";

echarts.use([
    TitleComponent,
    TooltipComponent,
    GridComponent,
    BarChart,
    CanvasRenderer
]);
const chartDom = document.getElementById('root  ');
const barChartWebsite = echarts.init(chartDom);
let option;

function BarChartWebsite() {


    const labelRight = {
        position: 'right'
    };
    option = {
        title: {
            text: 'Bar Chart with Negative Value'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            top: 80,
            bottom: 30
        },
        xAxis: {
            type: 'value',
            position: 'top',
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            }
        },
        yAxis: {
            type: 'category',
            axisLine: {show: false},
            axisLabel: {show: false},
            axisTick: {show: false},
            splitLine: {show: false},
            data: [
                'ten',
                'nine',
                'eight',
                'seven',
                'six',
                'five',
                'four',
                'three',
                'two',
                'one'
            ]
        },
        series: [
            {
                name: 'Cost',
                type: 'bar',
                stack: 'Total',
                label: {
                    show: true,
                    formatter: '{b}'
                },
                data: [
                    {value: -0.07, label: labelRight},
                    {value: -0.09, label: labelRight},
                    0.2,
                    0.44,
                    {value: -0.23, label: labelRight},
                    0.08,
                    {value: -0.17, label: labelRight},
                    0.47,
                    {value: -0.36, label: labelRight},
                    0.18
                ]
            }
        ]
    };

    return<ReactEcharts option={option} />



}
export default BarChartWebsite;
