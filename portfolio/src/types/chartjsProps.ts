
export type ChartJSProps = {
    type: string
    data: DataProps
    // options: OptionsProps
    options: OptionsProps
}

export interface DataProps {
    labels: string[]
    datasets: DataSetProps[]
}

interface DataSetProps {
    label: string
    data: number[]
    backgroundColor: string[] // color[]
    borderColor: string[] // color[]
    borderWidth: number
}

// export type DataProps = {
//     label?: string
//     background?: string // color
//     borderColor?: string // color
//     borderWidth?: number
//     borderDash?: number[]
//     borderDashOffset?: number
//     borderCapStyle?: string
//     borderJoinStyle?: string
//     fill?: boolean | string
//     lineTension?: number
//     pointBackgroundColor?: string | string[] // color | color[]
//     pointBorderColor?: string | string[] // color | color[]
//     pointBorderWidth?: number | number[]
//     pointRadius?: number | number[]
//     pointRotation?: number | number[]
//     pointStyle?: string | string[] | Image | Image[]
//     pointHitRadius?: number | number[]
//     pointHoverBackgroundColor?: string | string[] // color | color[]
//     pointHoverBorderColor?: string | string[] // string | string[]
//     pointHoverBorderWidth?: number | number[]
//     pointHoverRadius?: number | number[]
// }

export interface OptionsProps {
    scales: ScalesProps
}

interface ScalesProps {
    y: {
        beginAtZero: boolean
    }
}

// type Image = {}