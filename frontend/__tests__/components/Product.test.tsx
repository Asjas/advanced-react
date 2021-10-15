import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/react-testing";
import Product from "../../components/Product";
import { fakeItem } from "../../utils/testUtils";

const product = fakeItem();

describe("<Product />", () => {
  it("renders out the price tag and title", () => {
    render(
      <MockedProvider>
        <Product product={product} />
      </MockedProvider>,
    );

    expect(screen.getByText("R 50")).toBeInTheDocument();
    const link = screen.getByText(product.name);
    expect(link).toHaveAttribute("href", "/product/abc123");
  });

  it("renders the image properly", () => {
    render(
      <MockedProvider>
        <Product product={product} />
      </MockedProvider>,
    );

    const img = screen.getByAltText(product.name);
    expect(img).toBeInTheDocument();
  });
});
