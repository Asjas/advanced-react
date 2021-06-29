import { resetIdCounter, useCombobox } from "downshift";
import { useRouter } from "next/router";
import debounce from "lodash.debounce";
import { DropDown, DropDownItem, SearchStyles } from "./styles/DropDown";
import { useSearchProductsLazyQuery } from "../types/generated-queries";

function Search() {
  const router = useRouter();
  const [searchProducts, { data, loading, error }] = useSearchProductsLazyQuery({ fetchPolicy: "no-cache" });

  const items = data?.searchTerms || [];
  const findItemsButChill = debounce(searchProducts, 350);
  resetIdCounter();

  const { isOpen, inputValue, getMenuProps, getInputProps, getComboboxProps, getItemProps, highlightedIndex } =
    useCombobox({
      items,
      onInputValueChange() {
        findItemsButChill({ variables: { searchTerm: inputValue } });
      },
      onSelectedItemChange({ selectedItem }) {
        void router.push({
          pathname: `/product/${selectedItem.id}`,
        });
      },
      itemToString(item) {
        return item?.name || "";
      },
    });

  return (
    <SearchStyles>
      <div {...getComboboxProps()}>
        <input
          {...getInputProps({
            type: "search",
            placeholder: "Search for an item",
            id: "search",
            className: loading ? "loading" : "",
          })}
        />
      </div>
      <DropDown {...getMenuProps()}>
        {isOpen
          ? items.map((item, index) => (
              <DropDownItem key={item.id} {...getItemProps({ item, index })} highlighted={index === highlightedIndex}>
                <img src={item?.photo?.image?.publicUrlTransformed} alt={item?.photo?.altText} width="50" />
                {item.name}
              </DropDownItem>
            ))
          : null}
        {isOpen && !items.length && !loading ? (
          <DropDownItem>Sorry, No items found for {inputValue}</DropDownItem>
        ) : null}
      </DropDown>
    </SearchStyles>
  );
}

export default Search;
