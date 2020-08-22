import React, { Fragment, useEffect, useReducer, useState } from "react";
import Header from "../components/Header/Header";
import PageTemplate from "../templates/PageTemplate";
import cx from "classnames";
import axios from "axios";

const TodoList = () => {
  const [inputsContent, setInputContent] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      searchInputContent: "",
      itemInputContent: ""
    }
  );
  const [itemsList, setItemsList] = useState([]);
  const [originalItemsList, setOriginalItemsList] = useState([]);

  const handleInputChange = e => {
    setInputContent({
      [e.target.name]: e.target.value
    });
  };

  const addNewItem = () => {
    const newElement = {
      content: inputsContent.itemInputContent,
      id: itemsList.length + 1
    };

    setItemsList([...itemsList, newElement]);
  };

  const removeElement = id => {
    const newItemsList = itemsList.filter(item => item.id !== id);
    setItemsList(newItemsList);
  };

  const fetchData = async () => {
    const response = await axios.get(
      "http://www.mocky.io/v2/5e6d5a002e000083000eebbc?mocky-delay=500ms"
    );
    return response;
  };

  useEffect(() => {
    fetchData().then(response => {
      setItemsList(response.data);
      setOriginalItemsList(response.data);
    });
  }, []);

  return (
    <Fragment>
      <Header />
      <PageTemplate title={"TODO List"}>
        <div>
          <label htmlFor="search">Search items by content</label>
          <input
            autoComplete="off"
            className="input is-large"
            name="searchInputContent"
            id="search"
            type="text"
            placeholder="Search item"
            value={inputsContent.searchInputContent}
            onChange={handleInputChange}
          />
          <hr />
          <input
            autoComplete="off"
            className="input is-large"
            name="itemInputContent"
            type="text"
            placeholder="Create new item"
            value={inputsContent.itemInputContent}
            onChange={handleInputChange}
          />
          <br />
          <br />
          <button
            onClick={addNewItem}
            className={cx("button is-warning is-large")}
          >
            Add item
          </button>
          <br />
          <br />
          {itemsList.length > 0 ? (
            itemsList
              .filter(item =>
                item.content
                  .toLowerCase()
                  .includes(inputsContent.searchInputContent.toLowerCase())
              )
              .map(({ id, content }) => (
                <div key={id} className={cx("notification is-info")}>
                  <button
                    className="delete"
                    onClick={() => removeElement(id)}
                  />
                  {content}
                </div>
              ))
          ) : originalItemsList.length > 0 ? (
            <p className={`is-large`}>Add something</p>
          ) : (
            <button className={`button is-info is-loading`} />
          )}
        </div>
      </PageTemplate>
    </Fragment>
  );
};

export default TodoList;
