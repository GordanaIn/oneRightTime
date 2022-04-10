import React, {useState} from "react";
import ReactEcharts from "echarts-for-react";

function BarGraphMobile(){

    // all option in Graph
    const option = {
        //title of Graph
        title: {
            text: '1.2 Graph two:predicted investments',
           margin:0,


        },
        // legend of colors in Graph
        legend: {
            data: ['good', 'bad'],
            top:'90%'
        },

        // to se on graph with mous iformation
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        // X line with montsh
        xAxis: {
            type: 'category',
            axisLine: { show: true },
            data: ['Jan', 'Feb','Mars','April','May']
        },
        // Y line - label for % of result
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: function (val) {
                    return (val - 0) + 50 + '%';
                }
            },
            // pointers of axis X and Y
            axisPointer: {
                label: {
                    formatter: function (params) {
                        return ((params.value) * 150).toFixed(1) + '%';
                    }
                }
            },
            splitNumber: 1
        },
        // series of Graph
        series: [
            {
                name: 'good',
                type: 'bar',
                color:'black',
                data: [19,'',30,'',17],
                stack: 'one',


            },
            {
                name: 'bad',
                data: ['',-30,'',-20],
                type: 'bar',
                color:'#d20707',
                stack: 'tow',
            },
            {
                name: 'bad',
                data: [-10],
                type: 'bar',
                color:'#d20707',
                stack: 'one',
            },

        ]
    };
    return<ReactEcharts option={option} />;

}
export default BarGraphMobile;
