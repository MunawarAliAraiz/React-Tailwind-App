import React from 'react'
import BussinessContent from './BussinessContent'
import InvestorsContent from './InvestorsContent'
import { BrowserRouter as Router } from 'react-router-dom'

function WeWorkWithPage({investors}) {
  return (
    <>{investors ? <InvestorsContent/> : <BussinessContent/>}</>
  )
}

export default WeWorkWithPage