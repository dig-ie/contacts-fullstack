import { SearchBarContainer, SearchBarInput } from "./styles";

export const SearchBar = ({placeholder}) => {
  return (
    <SearchBarContainer>
      <SearchBarInput placeholder={placeholder}/>
    </SearchBarContainer>
  );
};
