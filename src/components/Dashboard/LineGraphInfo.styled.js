import styled from "styled-components";

const InfoList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const InfoItem = styled.li`
  display: flex;
`;

const InfoUserBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoUserText = styled.span``;

const IndicatorExtBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 4px;
`;

const IndicatorIntBox = styled.div`
  width: 16px;
  height: 16px;
  border: 2px solid #242731;
  border-radius: 4px;
  background-color: ${({ isActive }) => (isActive ? "transparent" : "#242731")};
`;

export {
  InfoList,
  InfoItem,
  InfoUserBox,
  InfoUserText,
  IndicatorExtBox,
  IndicatorIntBox,
};
