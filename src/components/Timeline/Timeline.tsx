import type React from "react";
import { Fragment } from "react";
import events from "./events.json";
import time_axis from "./axis.json";
import {
  TimelineWrapper,
  TimeAxisContainer,
  TimeLabel,
  EventContainer,
  EventBarContainer,
  EventBar,
  Circle,
  ConnectorLine,
  DetailContainer,
  EventDetailTitle,
  EventDetailFrame,
  bar_width,
  label_height,
} from "./TimelineStyles";

// 各time_axisのy座標マップを作成
const timeAxisMap: { [key: string]: number } = {};

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
          detailYOffset = detailY + 50;

          return (
            // biome-ignore lint/suspicious/noArrayIndexKey: イベントの順序は変更されないため、indexをkeyにしても問題ない
            <Fragment key={idx}>
              <EventBarContainer
                leftOffset={idx * bar_width}
                topPosition={startY}
              >
                <Circle color={event.color} style={{ top: 0 }} />
                <EventBar height={height} color={event.color} />
                <Circle color={event.color} style={{ top: height }} />
              </EventBarContainer>

              {/* イベントの詳細枠と線（スタック表示） */}
              <DetailContainer topPosition={detailY}>
                <ConnectorLine
                  leftOffset={(idx - events.length) * bar_width + 8}
                />
                <EventDetailTitle>{event.label}</EventDetailTitle>
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
