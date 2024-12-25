import { useEffect, useRef } from 'react'
import { createChart } from 'lightweight-charts'

function StockChart() {
  const chartContainerRef = useRef()

  useEffect(() => {
    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: 400,
      layout: {
        backgroundColor: '#ffffff',
        textColor: 'rgba(33, 56, 77, 1)'
      },
      grid: {
        vertLines: {
          color: 'rgba(197, 203, 206, 0.7)'
        },
        horzLines: {
          color: 'rgba(197, 203, 206, 0.7)'
        }
      },
      priceScale: {
        borderVisible: false
      },
      timeScale: {
        borderVisible: false
      }
    })

    const lineSeries = chart.addLineSeries()
    lineSeries.setData([
      { time: '2019-04-11', value: 80.01 },
      { time: '2019-04-12', value: 96.63 },
      { time: '2019-04-13', value: 76.64 },
      { time: '2019-04-14', value: 81.89 },
      { time: '2019-04-15', value: 74.43 }
    ])

    return () => {
      chart.remove()
    }
  }, [])

  return <div ref={chartContainerRef} style={{ width: '100%' }} />
}

export default StockChart
