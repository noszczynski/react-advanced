import React from "react";
import { Controls, MultiStep, Page } from "../components/Multistep/Multistep";
import Header from "../components/Header/Header";

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
    inputValue: ""
  },
  {
    title: "What about your phone number 2?",
    name: "abc",
    inputLabel: "phone",
    inputValue: ""
  },
  {
    title: "What about your phone number 3?",
    name: "ssd",
    inputLabel: "phone",
    inputValue: ""
  }
];

const MultiPageForm = () => {
  return (
    <>
      <Header />
      <MultiStep>
        {PAGES.map(({ title, name, inputLabel, inputValue }, index) => (
          <Page pageIndex={index} key={name}>
            <div className={`box`}>
              <p className={`title is-4`}>{title}</p>
              <input type={`text`} name={name} placeholder={inputLabel} />
            </div>
          </Page>
        ))}
        <Controls />
      </MultiStep>
    </>
  );
};

export default MultiPageForm;
