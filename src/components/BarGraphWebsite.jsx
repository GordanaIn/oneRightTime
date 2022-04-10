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


function BarGraphWebsite() {
    // Label side
    const labelLeft = {
        position: 'left',
    };
    // Label side
    const labelRight = {
        position: 'right'
    };
    // all option in Graph
  const  option = {
        title: {
            text: '1.1 Graph one: Investments targets',
        },
      // to se on graph with mous iformation
        tooltip: {
            trigger: 'axis',
            position:'center',
            width:'80px',
            height:'80px',
            axisPointer: {
                type: 'shadow'
            }
        },

      // legend of colors in Graph
        grid: {
            top: 80,
            bottom: 50
        },
      // X line with montsh
        xAxis: {
            type: 'value',
            position: 'top',
            splitLine: {
                lineStyle: {
                    type: 'd'
                }
            }
        },
      // Y line - label of result
        yAxis: {
            type: 'category',
            axisLine: {show: true},
            axisLabel: {show: false},
            axisTick: {show: false},
            splitLine: {show: false},
            data:[
                'Company Investment 2',
                'Company Investment 1',

            ]

        },
      // series of Graph
        series: [
            { // information of value
                name: 'Company Investment 2:',
                type: 'bar',
                color:'green',
                marginTop:'20px',
                label: {
                    show: true,

                },
                // Data of value
                data: [
                    {value: -3200, label: labelLeft},
                ],
            },
            { // information of value
                name: 'Company Investment 1:',
                type: 'bar',
                label: {
                    show: true,

                },
                // Data of value
                data: [
                    {value: 8000, label: labelRight},
                    {value: 7000, label: labelRight},
                ],

            },



            { // information of value
                name: 'Company Investment 1:',
                type: 'bar',
                label: {
                    show: true,
                },
                // Data of value
                data: [
                    {value: 10000, label: labelRight},

                ],
            },

        ]
    };
    return<ReactEcharts option={option} />
}
export default BarGraphWebsite;
