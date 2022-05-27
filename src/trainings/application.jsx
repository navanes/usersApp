import React, { Component } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

const Application = () => {
  const { search } = useLocation();
  console.log(search);
  //   const { name, age } = queryString.parse(search);
  const searchParamas = new URLSearchParams(search);
  const name = searchParamas.get("name");
  const age = searchParamas.get("age");

  return (
    <>
      <h1>Name: {name} </h1>
      <h2>age: {age} </h2>
    </>
  );
};

export default Application;
