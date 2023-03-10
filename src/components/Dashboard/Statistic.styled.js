import styled from "styled-components";

const StatisticBox = styled.div``;

const StatisticList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0px 0px 16px 0px;
  list-style: none;
`;

const StatisticItem = styled.li`
  background-color: #242731;
  color: #ffffff;
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

const StatisticIcon = styled.svg``;

const Diagrames = styled.div`
  display: flex;
`;

export { StatisticBox, StatisticList, StatisticItem, StatisticIcon, Diagrames };
