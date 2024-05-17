import * as S from "./styles";
import { SearchBar } from "../SearchBar";
import profileIcon from "../../icons/profileIcon.png";
export const NavBar = () => {
  return (
    <S.NavBarContainer>
      <S.LeftSideContainer>
        <S.HamburguerButton>
          <S.HamburguerMenuImage src="https://cdn.icon-icons.com/icons2/1776/PNG/512/multipleline_114207.png" />
        </S.HamburguerButton>
        <S.NavBarIcon src="https://cdn.icon-icons.com/icons2/2556/PNG/512/profile_picture_user_icon_153075.png" />
        <S.NavBarTitle>Contatos</S.NavBarTitle>
      </S.LeftSideContainer>
      <S.SearchBarContainer>
        <SearchBar />
      </S.SearchBarContainer>
      <S.ProfileContainer>
        <S.ProfileImage />
      </S.ProfileContainer>
    </S.NavBarContainer>
  );
};
