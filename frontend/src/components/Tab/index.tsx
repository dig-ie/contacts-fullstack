import * as S from "./styles";
import { TabProps } from "./types";
export const Tab: React.FC<TabProps> = ({ color, tabName }) => {
  return (
    <S.TabButton color={color}>
      <S.LeftSideContainer>
        <S.ButtonIconContainer>
          <S.ButtonIcon />
        </S.ButtonIconContainer>
        <S.TabName>{tabName}</S.TabName>
      </S.LeftSideContainer>
      <S.OpicionalRightButton></S.OpicionalRightButton>
    </S.TabButton>
  );
};
