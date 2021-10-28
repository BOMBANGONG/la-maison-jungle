import "../styles/Categories.css";
import Button from "./Button";
import Select from "./Select";
import { string, array, func } from "prop-types";

function Categories({ setActiveCategory, categories, activeCategory }) {
  function handleChange(v) {
    setActiveCategory(v?.target.value);
  }
  return (
    <div className="lmj-categories">
      <Select
        label="category"
        options={categories}
        value={activeCategory}
        onChange={handleChange}
      />
      <Button label={"Reset"} onClick={() => setActiveCategory("")} />
    </div>
  );
}

Categories.propTypes = {
  setActiveCategory: func,
  categories: array,
  activeCategory: string,
};

export default Categories;
