import "../styles/Categories.css";
import Button from "./Button";
import Select from "./Select";

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
      <Button
        style={{
          paddingLeft: "10px",
        }}
        label={"Reset"}
        onClick={() => setActiveCategory("")}
      />
    </div>
  );
}

export default Categories;
