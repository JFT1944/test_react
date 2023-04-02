import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";
// import TEST_IMAGES from "./_testCommon.js";
// import App from './App'




it("renders without crashing", async function() {
  render(<Card />);
});