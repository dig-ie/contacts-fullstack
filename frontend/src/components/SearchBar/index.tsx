import { SearchBarContainer, SearchBarInput } from "./styles";
import { SearchBarProps } from "./types";
export const SearchBar: React.FC<SearchBarProps> = ({ placeholder }) => {
  return (
    <SearchBarContainer>
      <SearchBarInput placeholder={placeholder} />
    </SearchBarContainer>
  );
};
