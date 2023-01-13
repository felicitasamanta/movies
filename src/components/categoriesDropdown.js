import React from "react";
const CategoriesDropdown = (props) => {
  console.log(props.categories);
  return (
    <div class="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Dropdown button
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {props.categories?.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </div>
  );
};
export default CategoriesDropdown;
