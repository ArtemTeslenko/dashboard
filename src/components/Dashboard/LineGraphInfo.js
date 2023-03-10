import {
  IndicatorExtBox,
  IndicatorIntBox,
  InfoItem,
  InfoList,
  InfoUserBox,
  InfoUserText,
} from "./LineGraphInfo.styled";

export const LineGraphInfo = ({ userColors, usersData, chartData }) => {
  const colNames = chartData
    .reduce((resArr, item) => [...resArr, ...Object.keys(item)], [])
    .filter((item, index, arr) => arr.indexOf(item) === index);

  const totalSales = chartData.reduce((total, item) => {
    for (const color of colNames) {
      if (!isNaN(item[color])) total += item[color];
    }
    return total;
  }, 0);

  const getUserSales = (color) =>
    chartData.reduce((total, item) => (total += item[color]), 0) || 0;

  return (
    <InfoList>
      {usersData.map(({ name, date }, index) => (
        <InfoItem key={index}>
          <IndicatorExtBox bgColor={userColors[index].hex}>
            <IndicatorIntBox
              isActive={getUserSales(userColors[index].colorName)}
            />
          </IndicatorExtBox>
          <InfoUserBox>
            <InfoUserText>
              Rating{" "}
              {Math.floor(
                (getUserSales(userColors[index].colorName) / totalSales) * 100
              )}
              %
            </InfoUserText>
            <InfoUserText>
              {getUserSales(userColors[index].colorName)} sales
            </InfoUserText>
          </InfoUserBox>
          {/* ❗️❗️❗️ should be unique value in back, for example id */}
          <InfoUserBox>
            <InfoUserText>{name}</InfoUserText>
            <InfoUserText>{date}</InfoUserText>
          </InfoUserBox>
        </InfoItem>
      ))}
    </InfoList>
  );
};
