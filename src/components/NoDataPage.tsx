import React from 'react'
import noData from '../assets/noData.jpg'
import '../styles/NoData.css'

export const NoDataPage: React.FC = () => {
  return (
    <div className="img-container">
      <img src={noData} alt="No Data img" className="center" />
    </div>
  )
}
