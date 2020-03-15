import React, { Fragment, useContext, useRef, useState } from "react";
import Header from "../components/Header";
import { useDetectOutsideClick } from "../Hooks/useDetectOutsideClick";
import PageTemplate from "../Templates/PageTemplate";

const Context = React.createContext();

const User = () => {
  const context = useContext(Context);
  return <p>My name is: {context.name}</p>;
};

const Users = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const modalRef = useRef(null);

  useDetectOutsideClick(modalRef, setModalOpen);

  return (
    <Fragment>
      <Header />
      <Context.Provider value={{ name: "Adam" }}>
        <h2 className={`title is-3`}>Users:</h2>
        <User />
      </Context.Provider>
      <PageTemplate title={`Users`}>
        <button
          className="button is-primary"
          aria-label="open"
          onClick={() => setModalOpen(true)}
        >
          Open modal
        </button>
        <div className={`modal ${isModalOpen ? "is-active" : ""}`}>
          <div className="modal-background" />
          <div ref={modalRef} className="modal-content">
            <article className="message">
              <div className="message-header">
                <p>Hello World</p>
                <button
                  className="delete"
                  aria-label="delete"
                  onClick={() => setModalOpen(false)}
                />
              </div>
              <div className="message-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,
                porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla.
                Nullam gravida purus diam, et dictum.
              </div>
            </article>
          </div>
          <button
            className="modal-close is-large"
            aria-label="close"
            onClick={() => setModalOpen(false)}
          />
        </div>
      </PageTemplate>
    </Fragment>
  );
};

export default Users;
