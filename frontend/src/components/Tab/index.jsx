import * as S from "./styles";
export const Tab = ({color, TabName}) => {
  return (
    <S.TabButton color={color}>
      <S.LeftSideContainer>
        <S.ButtonIconContainer>
          <S.ButtonIcon />
        </S.ButtonIconContainer>
        <S.TabName>{TabName}</S.TabName>
      </S.LeftSideContainer>
      <S.OpicionalRightButton></S.OpicionalRightButton>
    </S.TabButton>
  );
};
