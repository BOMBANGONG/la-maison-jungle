import '../styles/Categories.css'
import Button from './Button'
import Select from './Select'
import React from 'react'

interface Props {
  setActiveCategory: Function
  categories: string[]
  activeCategory: string
}

const Categories = ({
  setActiveCategory,
  categories,
  activeCategory,
}: Props) => {
  function handleChange(v: { target: { value: any } }) {
    setActiveCategory(v?.target.value)
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
