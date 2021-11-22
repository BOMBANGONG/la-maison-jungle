import React from 'react'

type NoDataPageProps = {
  title: string
}

export const NoDataPage: React.FC<NoDataPageProps> = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}
