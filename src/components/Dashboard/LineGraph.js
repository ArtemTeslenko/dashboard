import { useQueryClient } from "react-query";
import { useState } from "react";
import { Diagram, Table, Paragraph, Graph } from "../Graphs";
import {
  LineGraphBox,
  LineGraphDataTypeBox,
  LineGraphHeader,
  LineGraphTitle,
} from "./LineGraph.styled";
import { LineGraphSelect } from "./LineGraphSelect";

export const LineGraph = () => {
  const [selectValue, setSelectValue] = useState("Graph");
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData();
  const userColors = [
    { colorName: "blue", hex: "#18A0FB" },
    { colorName: "red", hex: "#ED2D95" },
    { colorName: "green", hex: "#3CDC86" },
    { colorName: "orange", hex: "#F4A732" },
    { colorName: "purple", hex: "#9B53F8" },
  ];

  const handleSelectChange = (value) => {
    setSelectValue(value);
  };

  return (
    <LineGraphBox>
      <LineGraphHeader>
        <LineGraphTitle>Game Stats</LineGraphTitle>
        <LineGraphDataTypeBox>
          <LineGraphSelect changeValue={handleSelectChange} />
        </LineGraphDataTypeBox>
      </LineGraphHeader>
      {selectValue === "Diagrams" && <Diagram />}
      {selectValue === "Table" && <Table />}
      {selectValue === "Paragraph" && <Paragraph />}
      {selectValue === "Graph" && <Graph data={data} userColors={userColors} />}
    </LineGraphBox>
  );
};
