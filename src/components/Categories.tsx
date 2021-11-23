import '../styles/Categories.css'
import Button from './Button'
import Select from './Select'
import React from 'react'

interface Props {
  categories: string[]
  activeCategory: string
  setActiveCategory: Function
  // onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Categories = ({
  setActiveCategory,
  categories,
  activeCategory,
}: Props) => {
  function handleChange(e: any) {
    setActiveCategory(e?.target.value)
  }
  return (
    <div className="lmj-categories">
      <Select
        label="category"
        options={categories}
        value={activeCategory}
        onChange={handleChange}
      />
      <Button id="" label={'Reset'} onClick={() => setActiveCategory('')} />
    </div>
  )
}

Categories.propTypes = {}

export default Categories
