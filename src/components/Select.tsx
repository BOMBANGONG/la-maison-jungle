import { Select as UiSelect } from '@ied/ui-select'
import React from 'react'

type Props = {
  label: string
  options: any
  onChange: () => void
  value: string
}

const Select = (props: Props) => {
  const { label, options, onChange, value } = props
  return (
    <div>
      <UiSelect
        id=""
        style={{
          width: '160px',
        }}
        label={label}
        options={options}
        onChange={onChange}
        value={value}
        color="primary"
        dataTestId={''}
      />
    </div>
  )
}

export default Select
