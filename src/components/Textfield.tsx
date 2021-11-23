import React, { useState } from 'react'
import UiTextfield from '@ied/ui-textfield'

const Textfield: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>()

  function handleInput(e: any) {
    setInputValue(e.target.value)
  }

  function handleBlur() {
    if (!inputValue?.includes('@')) {
      alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥")
    }
  }
  return (
    <div>
      <UiTextfield
        dataTestId="outlined_2"
        outlined
        id="outlined_2"
        value={inputValue}
        onChange={handleInput}
        onBlur={handleBlur}
      />
    </div>
  )
}

export default Textfield
