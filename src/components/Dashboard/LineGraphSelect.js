import {
  Option,
  Select,
  SelectBox,
  SelectName,
} from "./LineGraphSelect.styled";

export const LineGraphSelect = ({ changeValue }) => {
  return (
    <SelectBox>
      <SelectName>Data type</SelectName>
      <Select
        defaultValue="Graph"
        onChange={(e) => changeValue(e.target.value)}
      >
        <Option value="Diagrams">Diagrams</Option>
        <Option value="Graph">Graph</Option>
        <Option value="Table">Table</Option>
        <Option value="Paragraph">Paragraph</Option>
      </Select>
    </SelectBox>
  );
};
