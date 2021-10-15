import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/react-testing";
import SingleProduct from "../../components/SingleProduct";
import { fakeItem } from "../../utils/testUtils";

const product = fakeItem();

const mocks = [];

describe("<SingleProduct />", () => {
  it("renders with proper data", () => {
    render(
      <MockedProvider mocks={mocks}>
        <SingleProduct product={product} />
      </MockedProvider>,
    );

    expect(screen.getByText("R 50")).toBeInTheDocument();
    const link = screen.getByText(product.name);
    expect(link).toHaveAttribute("href", "/product/abc123");
  });
});
