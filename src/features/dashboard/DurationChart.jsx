import { ResponsivePie } from "@nivo/pie";
import styled from "styled-components";
import { useDarkMode } from "../../context/DarkModeContext";
import Heading from "../../ui/Heading";

const ChartBox = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 1rem 3.2rem;
  grid-column: 3 / span 2;

  & > *:first-child {
    margin-bottom: 1.6rem;
  }
`;

const startDataLight = [
  { id: "1 night", label: "1 night", value: 0, color: "#ef4444" },
  { id: "2 nights", label: "2 nights", value: 0, color: "#f97316" },
  { id: "3 nights", label: "3 nights", value: 0, color: "#eab308" },
  { id: "4-5 nights", label: "4-5 nights", value: 0, color: "#84cc16" },
  { id: "6-7 nights", label: "6-7 nights", value: 0, color: "#22c55e" },
  { id: "8-14 nights", label: "8-14 nights", value: 0, color: "#14b8a6" },
  { id: "15-21 nights", label: "15-21 nights", value: 0, color: "#3b82f6" },
  { id: "21+ nights", label: "21+ nights", value: 0, color: "#a855f7" },
];

const startDataDark = [
  { id: "1 night", label: "1 night", value: 0, color: "#b91c1c" },
  { id: "2 nights", label: "2 nights", value: 0, color: "#c2410c" },
  { id: "3 nights", label: "3 nights", value: 0, color: "#a16207" },
  { id: "4-5 nights", label: "4-5 nights", value: 0, color: "#4d7c0f" },
  { id: "6-7 nights", label: "6-7 nights", value: 0, color: "#15803d" },
  { id: "8-14 nights", label: "8-14 nights", value: 0, color: "#0f766e" },
  { id: "15-21 nights", label: "15-21 nights", value: 0, color: "#1d4ed8" },
  { id: "21+ nights", label: "21+ nights", value: 0, color: "#7e22ce" },
];

function prepareData(template, stays) {
  const result = [...template];

  stays.forEach(({ numNights }) => {
    const match = (condition) => result.find((d) => d.id === condition);

    if (numNights === 1) match("1 night").value += 1;
    else if (numNights === 2) match("2 nights").value += 1;
    else if (numNights === 3) match("3 nights").value += 1;
    else if ([4, 5].includes(numNights)) match("4-5 nights").value += 1;
    else if ([6, 7].includes(numNights)) match("6-7 nights").value += 1;
    else if (numNights >= 8 && numNights <= 14) match("8-14 nights").value += 1;
    else if (numNights >= 15 && numNights <= 21)
      match("15-21 nights").value += 1;
    else if (numNights > 21) match("21+ nights").value += 1;
  });

  return result.filter((item) => item.value > 0);
}

function DurationChart({ confirmedStays }) {
  const { isDarkMode } = useDarkMode();
  const startData = isDarkMode ? startDataDark : startDataLight;
  const data = prepareData(startData, confirmedStays);

  return (
    <ChartBox>
      <Heading as="h2">The average duration of bookings</Heading>
      <div style={{ height: "300px" }}>
        <ResponsivePie
          data={data}
          margin={{ top: 20, right: 80, bottom: 80, left: 80 }}
          innerRadius={0.5}
          padAngle={0.6}
          cornerRadius={2}
          activeOuterRadiusOffset={8}
          colors={({ data }) => data.color}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor={isDarkMode ? "#e5e7eb" : "#333"}
          arcLabelsTextColor={{
            from: "color",
            modifiers: isDarkMode ? [["brighter", 2]] : [["darker", 2]],
          }}
          legends={[
            {
              anchor: "bottom",
              direction: "row",
              translateY: 56,
              itemWidth: 100,
              itemHeight: 18,
              symbolShape: "circle",
              itemTextColor: isDarkMode ? "#ffffff" : "#333333", //
            },
          ]}
        />
      </div>
    </ChartBox>
  );
}

export default DurationChart;
//nvo lib used ,aslo use rechart , d3 lib charts
