import { useQueryClient } from "react-query";
import {
  StatisticBox,
  StatisticIcon,
  StatisticItem,
  StatisticList,
  Diagrames,
} from "./Statistic.styled";
import icons from "../../icons/icons.svg";
import { LineGraph } from "./LineGraph";
import { CircleDiagram } from "./CircleDiagrame";

export const Statistic = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData();

  return (
    <StatisticBox>
      <StatisticList>
        {data &&
          Object.keys(data.statistic).map((item) => (
            <StatisticItem key={item}>
              <StatisticIcon width="20px" height="20px">
                <use xlinkHref={`${icons}#icon-${item}`} />
              </StatisticIcon>
              {data.statistic[item]}
              {item}
            </StatisticItem>
          ))}
      </StatisticList>
      <Diagrames>
        <LineGraph />
        <CircleDiagram />
      </Diagrames>
    </StatisticBox>
  );
};
