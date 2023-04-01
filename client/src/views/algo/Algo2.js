/* eslint-disable */
import React from 'react'
import { useEffect, useState } from 'react'

import {
  CCard,
  CCardBody,
  CCol,
  CRow,
} from '@coreui/react'
import { CChartLine, CChart } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'

import WidgetsDropdown from '../widgets/WidgetsDropdown'

import axios from 'axios'

const Algo = () => {
  const algo_name = "buy_and_hold_gme"
  const [portfolioData, setPortfolio] = useState([])
  const [portfolioStatusData, setPortfolioStatus] = useState([])
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
  console.log("render")

  useEffect(() => {
    axios
      .get('/api/portfolio/history/'+algo_name)
      .then(response => {              
        
      setPortfolio(response.data)

      const portfolioStatusData = 
        {
          date: response.data.slice(-1)[0].date,
          apr: response.data.slice(-1)[0].algo.apr,
          sharpe: response.data.slice(-1)[0].algo.sharpe,
          mdd: response.data.slice(-1)[0].algo.mdd
        }
      
      setPortfolioStatus(portfolioStatusData)
      })
  },[])

  return (
    <>
      <CRow>
        <CCol >
          <h1>
            {algo_name}
          </h1>
        </CCol>
      </CRow>
      <WidgetsDropdown data = {portfolioStatusData}/>
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="return" className="card-title mb-0">
                Cumulative Return
              </h4>
              <div className="small text-medium-emphasis">March 2019 - March 2023</div>
            </CCol>
            <CCol sm={7} className="d-none d-md-block">
            </CCol>
          </CRow>
          <CChartLine
            style={{ height: '300px', marginTop: '40px' }}
            data={{
              labels: portfolioData.map(data=>(data.date.substring(0, 10))),
              
              datasets: [
                {
                  label: algo_name,
                  backgroundColor: hexToRgba(getStyle('--cui-info'), 10),
                  borderColor: getStyle('--cui-info'),
                  pointHoverBackgroundColor: getStyle('--cui-info'),
                  borderWidth: 2,
                  data: portfolioData.map(data=>(data.algo.cum_ret)),
                  fill: true,
                },
                
              ],
            }}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                x: {
                  grid: {
                    drawOnChartArea: false,
                  },
                },
                y: {
                  ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    stepSize: Math.ceil(250 / 5),
                    max: 250,
                  },
                },
              },
              elements: {
                line: {
                  tension: 0.4,
                },
                point: {
                  radius: 0,
                  hitRadius: 10,
                  hoverRadius: 4,
                  hoverBorderWidth: 3,
                },
              },
            }}
          />
          <CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
                Position
              </h4>
              <div className="small text-medium-emphasis">March 2019 - March 2023</div>
            </CCol>
            <CCol sm={7} className="d-none d-md-block">
            </CCol>
          </CRow>
          <CChart
            type="line"
            style={{ height: '300px', marginTop: '40px' }}
            data={{
              labels: portfolioData.map(data=>(data.date.substring(0, 10))),
              
              datasets: [
                {
                  label: algo_name,
                  backgroundColor: hexToRgba(getStyle('--cui-info'), 10),
                  borderColor: getStyle('--cui-info'),
                  pointHoverBackgroundColor: getStyle('--cui-info'),
                  borderWidth: 2,
                  data: portfolioData.map(data=>(data.algo.position)),
                  fill: true,
                },
                
              ],
            }}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                x: {
                  grid: {
                    drawOnChartArea: false,
                  },
                },
                y: {
                  ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    stepSize: Math.ceil(250 / 5),
                    max: 250,
                  },
                },
              },
              elements: {
                line: {
                  tension: 0.4,
                },
                point: {
                  radius: 0,
                  hitRadius: 10,
                  hoverRadius: 4,
                  hoverBorderWidth: 3,
                },
              },
            }}
          />
        </CCardBody>
      </CCard>
    </>
  )
}

export default Algo
  /* eslint-disable */