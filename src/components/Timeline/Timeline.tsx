import React from "react";
import styled from "styled-components";

// 時系列軸
const time_axis: string[] = [
  "2021/04",
  "2021/05",
  "2021/06",
  "2021/07",
  "2021/08",
  "2021/09",
  "2021/10",
  "2021/11",
  "2021/12",
  "2022/01",
  "2022/02",
  "2022/03",
  "2022/04",
  "2022/05",
  "2022/06",
  "2022/07",
  "2022/08",
  "2022/09",
  "2022/10",
  "2022/11",
  "2022/12",
  "2023/01",
  "2023/02",
  "2023/03",
  "2023/04",
  "2023/05",
  "2023/06",
  "2023/07",
  "2023/08",
  "2023/09",
  "2023/10",
  "2023/11",
  "2023/12",
  "2024/01",
  "2024/02",
  "2024/03",
  "2024/04",
  "2024/05",
  "2024/06",
  "2024/07",
  "2024/08",
  "2024/09",
  "2024/10",
  "2024/11",
  "2024/12",
  "2025/01",
  "2025/02",
  "2025/03",
];

// 各time_axisのy座標マップを作成
const timeAxisMap: { [key: string]: number } = {};
const label_height = 20; // 各ラベル間のマージン

time_axis.forEach((time, index) => {
  timeAxisMap[time] = index * label_height + label_height / 2;
});

// イベントデータ型
interface Event {
  start: string;
  end: string;
  color: string;
  label: string;
}

// スタイル定義
const TimelineWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
`;

const TimeAxisContainer = styled.div`
  width: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 2px solid #ccc;
  margin-right: 20px;
`;

const TimeLabel = styled.div`
  height: ${label_height}px;
  font-size: 12px;
`;

const EventContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const EventBarContainer = styled.div<{
  leftOffset: number;
  topPosition: number;
}>`
  position: absolute;
  display: flex;
  flex-direction: column;
  left: ${(props) => props.leftOffset}px;
  top: ${(props) => props.topPosition}px;
`;

const EventBar = styled.div<{ height: number; color: string }>`
  width: 4px;
  height: ${(props) => props.height}px;
  background-color: ${(props) => props.color};
  position: relative;
  border-radius: 2px;
`;

const Circle = styled.div<{ color: string }>`
  width: 8px;
  height: 8px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  position: absolute;
  left: -2px;
`;

const Tooltip = styled.div`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  background-color: #333;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 12px;
  white-space: nowrap;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;

  ${EventBar}:hover & {
    visibility: visible;
    opacity: 1;
  }
`;

const Timeline: React.FC<{ events: Event[] }> = ({ events }) => {
  return (
    <TimelineWrapper>
      <TimeAxisContainer>
        {time_axis.map((time, index) => (
          <TimeLabel key={index}>{time}</TimeLabel>
        ))}
      </TimeAxisContainer>
      <EventContainer>
        {events.map((event, idx) => {
          const startY = timeAxisMap[event.start];
          const endY = timeAxisMap[event.end];
          const height = endY - startY;

          return (
            <EventBarContainer
              key={idx}
              leftOffset={idx * 20}
              topPosition={startY}
            >
              <Circle color={event.color} style={{ top: 0 }} />
              <EventBar height={height} color={event.color}>
                <Tooltip>{event.label}</Tooltip>
              </EventBar>
              <Circle color={event.color} style={{ top: height - 4 }} />
            </EventBarContainer>
          );
        })}
      </EventContainer>
    </TimelineWrapper>
  );
};

// 使用例
const events: Event[] = [
  {
    start: "2021/04",
    end: "2023/06",
    color: "#ff5733",
    label: "プロジェクトA",
  },
  {
    start: "2023/04",
    end: "2023/07",
    color: "#33ff57",
    label: "プロジェクトB",
  },
  {
    start: "2024/01",
    end: "2024/03",
    color: "#3357ff",
    label: "プロジェクトC",
  },
  {
    start: "2022/01",
    end: "2025/03",
    color: "#ffd333",
    label: "プロジェクトD",
  },
];

export const TimelineContents: React.FC = () => {
  return <Timeline events={events} />;
};
