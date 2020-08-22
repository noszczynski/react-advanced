import React from "react";
import Header from "../components/Header/Header";
import PageTemplate from "../templates/PageTemplate";
import Downshift from "downshift";

const ITEMS_OPTIONS = [
  { value: "apple" },
  { value: "pear" },
  { value: "orange" },
  { value: "grape" },
  { value: "banana" }
];

const DownshiftPage = () => (
  <div>
    <Header />
    <PageTemplate title={`Patterns`}>
      <Downshift>
        {({
          getInputProps,
          isOpen,
          inputValue,
          getMenuProps,
          getItemProps,
          selectedItem
        }) => (
          <div className={`dropdown ${isOpen ? "is-active" : ""}`}>
            <input
              className={`input`}
              type="text"
              placeholder="Text input"
              {...getInputProps()}
            />
            <div className={`dropdown-menu`}>
              <div className={`dropdown-content`} {...getMenuProps()}>
                {ITEMS_OPTIONS.filter(item =>
                  item.value.includes(inputValue)
                ).map(({ value }, index) => (
                  <button
                    {...getItemProps({
                      key: value,
                      index,
                      item: value
                    })}
                    className={`dropdown-item button is-white ${
                      value === selectedItem ? "is-active" : ""
                    }`}
                  >
                    {value}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </Downshift>
    </PageTemplate>
  </div>
);

export default DownshiftPage;
