import React from 'react'
// import { Radar } from 'react-chartjs-2'
// import { Chart } from 'chart.js'
import { ChartJSProps } from '@/types'

type ChartTypes = {
    rader: string
}

type RaderChartProps = JSX.IntrinsicElements['div'] & (ChartJSProps | {
    type: keyof ChartTypes
})

export const RaderChart: React.FC<RaderChartProps> = (props) => {
    console.log(props)
    return (
        <canvas id={props.id} />
    )
}