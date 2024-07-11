import React, { useState } from "react";
import "./App.css";
import "./Checkbox.css";
import "./Button.css";

const Checkbox = ({ label, isChecked, onCheckboxChange }) => (
  <label className="checkbox-container">
    {label}
    <input
      type="checkbox"
      className="custom-checkbox"
      checked={isChecked}
      onChange={onCheckboxChange}
    />
    <span className="checkbox-label"></span>
  </label>
);

const App = () => {
  const [checkedItems, setCheckedItems] = useState({
    all: false,
    page1: false,
    page2: false,
    page3: false,
    page4: false,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;

    if (name === "all") {
      const newCheckedItems = Object.keys(checkedItems).reduce((acc, key) => {
        acc[key] = checked;
        return acc;
      }, {});

      setCheckedItems(newCheckedItems);
    } else {
      setCheckedItems((prevState) => ({
        ...prevState,
        [name]: checked,
      }));
    }
  };

  return (
    <div className="app">
      <div className="checkbox-list">
        <Checkbox
          label="All pages"
          isChecked={checkedItems.all}
          onCheckboxChange={(e) =>
            handleCheckboxChange({
              target: { name: "all", checked: e.target.checked },
            })
          }
        />
        <div className="verticalLine"></div>
        <Checkbox
          label="Page 1"
          isChecked={checkedItems.page1}
          onCheckboxChange={(e) =>
            handleCheckboxChange({
              target: { name: "page1", checked: e.target.checked },
            })
          }
        />
        <Checkbox
          label="Page 2"
          isChecked={checkedItems.page2}
          onCheckboxChange={(e) =>
            handleCheckboxChange({
              target: { name: "page2", checked: e.target.checked },
            })
          }
        />
        <Checkbox
          label="Page 3"
          isChecked={checkedItems.page3}
          onCheckboxChange={(e) =>
            handleCheckboxChange({
              target: { name: "page3", checked: e.target.checked },
            })
          }
        />
        <Checkbox
          label="Page 4"
          isChecked={checkedItems.page4}
          onCheckboxChange={(e) =>
            handleCheckboxChange({
              target: { name: "page4", checked: e.target.checked },
            })
          }
        />
        <button className="custom-button">Done</button>
      </div>
    </div>
  );
};

export default App;
