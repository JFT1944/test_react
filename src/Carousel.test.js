import React from "react";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";
import App from './App'
// import { toHaveAttribute } from "@testing-library/jest-dom/dist/matchers";




it("renders without crashing", async function() {
  render(<Carousel  photos={TEST_IMAGES}/>);
});

it("matches snapshot", function() {
  const {asFragment} = render(<Carousel photos={TEST_IMAGES}/>);
  expect(asFragment()).toMatchSnapshot();
});

it('should decrement the array', function() {
  let {getByTestId, getByText} = render(<Carousel photos={TEST_IMAGES}/>)
  let leftButton = getByTestId('left_click')
  const h4 = getByText('testing image', {exact:false})
  fireEvent.click(leftButton)
  expect(h4).toHaveTextContent(`testing image 1`)

})
it('Should left remove button', function() {
  let {getByTestId, getByText} = render(<Carousel photos={TEST_IMAGES}/>)
  let leftButton = getByTestId('left_click')
  const h4 = getByText('testing image', {exact:false})
  // fireEvent.click(leftButton)
  expect(leftButton).toBeEmptyDOMElement(`testing image 1`)

})

it('Should right remove button', function() {
  let {getByTestId, getByText} = render(<Carousel photos={TEST_IMAGES}/>)
  let rightButton = getByTestId('right_click')
  const h4 = getByText('testing image', {exact:false})
  fireEvent.click(rightButton)
  fireEvent.click(rightButton)
  // expect(h4).toHaveTextContent(`testing image 1`)

})


it("works when you click on the right arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});
