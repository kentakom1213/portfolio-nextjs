import type React from "react";
import { Fragment } from "react";
import styled from "styled-components";
import events from "./events.json";
import time_axis from "./axis.json";

// 各time_axisのy座標マップを作成
const timeAxisMap: { [key: string]: number } = {};
const label_height = 20;
const bar_width = 13;

time_axis.forEach((time, index) => {
  timeAxisMap[time] = index * label_height + label_height / 2;
});

// イベントデータ型
interface Event {
  start: string;
  end: string;
  color: string;
  label: string;
  description: string;
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

const TimeLabel = styled.div<{ is_bold: boolean }>`
  height: ${label_height}px;
  font-size: 14px;
  font-weight: ${(props) => (props.is_bold ? "bold" : "normal")};
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

// 追加: イベント詳細表示用の枠
export const EventDetailFrame = styled.div`
  margin: 0 10px 0 50px;
  padding: 20px;
  position: relative;
  border: 3px solid #000;
  border-radius: 20px;
`;

const ConnectorLine = styled.div<{ leftOffset: number }>`
  position: absolute;
  left: ${(props) => props.leftOffset}px;
  top: 50%;
  width: ${(props) => 50 - props.leftOffset}px;
  height: 2px;
  background-color: #000;
`;

const DetailContainer = styled.div<{ topPosition: number }>`
  position: absolute;
  left: 60px;
  top: ${(props) => props.topPosition}px;
  width: 100%;
`;

// タイムラインコンポーネント
const Timeline: React.FC<{ events: Event[] }> = ({ events }) => {
  // 詳細情報の表示位置をスタック
  let detailYOffset = -100;

  return (
    <TimelineWrapper>
      <TimeAxisContainer>
        {time_axis.map((time, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: イベントの順序は変更されないため、indexをkeyにしても問題ない
          <TimeLabel key={index} is_bold={index % 12 === 0}>
            {time}
          </TimeLabel>
        ))}
      </TimeAxisContainer>
      <EventContainer>
        {events.map((event, idx) => {
          const startY = timeAxisMap[event.start];
          const endY = timeAxisMap[event.end];
          const height = endY - startY;

          // 詳細のY座標を設定して、次の詳細の位置を更新
          const detailY = Math.max(detailYOffset + 100, startY);
          detailYOffset = detailY;

          return (
            // biome-ignore lint/suspicious/noArrayIndexKey: イベントの順序は変更されないため、indexをkeyにしても問題ない
            <Fragment key={idx}>
              <EventBarContainer
                leftOffset={idx * bar_width}
                topPosition={startY}
              >
                <Circle color={event.color} style={{ top: 0 }} />
                <EventBar height={height} color={event.color}>
                  <Tooltip>{event.label}</Tooltip>
                </EventBar>
                <Circle color={event.color} style={{ top: height }} />
              </EventBarContainer>

              {/* イベントの詳細枠と線（スタック表示） */}
              <DetailContainer topPosition={detailY}>
                <ConnectorLine
                  leftOffset={(idx - events.length) * bar_width + 8}
                />
                <EventDetailFrame>{event.description}</EventDetailFrame>
              </DetailContainer>
            </Fragment>
          );
        })}
      </EventContainer>
    </TimelineWrapper>
  );
};

export const TimelineContents: React.FC = () => <Timeline events={events} />;
