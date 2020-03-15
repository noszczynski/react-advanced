import React, { Fragment } from "react";
import { Controls, MultiStep, Page } from "../components/Multistep/Multistep";
import Header from "../components/Header";

//TODO save values
const PAGES = [
  {
    title: "What's your name?",
    name: "name",
    inputLabel: "name",
    inputValue: ""
  },
  {
    title: "And your last name?",
    name: "lastName",
    inputLabel: "last name",
    inputValue: ""
  },
  {
    title: "What about your phone number?",
    name: "phone",
    inputLabel: "phone",
    inputValue: "dupa"
  },
  {
    title: "What about your phone number 2?",
    name: "abc",
    inputLabel: "phone",
    inputValue: "dupa"
  },
  {
    title: "What about your phone number 3?",
    name: "ssd",
    inputLabel: "phone",
    inputValue: "dupa"
  }
];

const Contact = () => {
  // const setInputValue = (index, inputValue) => {
  //   PAGES[index].inputValue = inputValue;
  // };

  return (
    <Fragment>
      <Header />
      <MultiStep>
        <p>{PAGES.length}</p>
        {PAGES.map(({ title, name, inputLabel, inputValue }, index) => (
          <Page pageIndex={index} key={name}>
            <div className={`box`}>
              <p className={`title is-4`}>{title}</p>
              <input
                type={`text`}
                name={name}
                placeholder={inputLabel}
                // onChange={e => setInputValue(index, e.target.value)}
              />
            </div>
          </Page>
        ))}
        <Controls />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur
        dicta earum ex harum ipsam iusto modi nihil odit, placeat porro
        possimus, quas, ratione totam voluptas. Dolor est id quasi.
      </MultiStep>
    </Fragment>
  );
};

export default Contact;
