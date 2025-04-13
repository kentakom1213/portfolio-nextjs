import styled from "styled-components";
import { pc, sp, tab } from "../../styles/Global/media";

export const label_height = 20;
export const bar_width = 13;

export const TimelineWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
`;

export const TimeAxisContainer = styled.div`
  width: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 2px solid #ccc;
  margin-right: 20px;
`;

export const TimeLabel = styled.div<{ is_bold: boolean }>`
  height: ${label_height}px;
  font-size: 14px;
  font-weight: ${(props) => (props.is_bold ? "bold" : "normal")};
`;

export const EventContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const EventBarContainer = styled.div<{
	leftOffset: number;
	topPosition: number;
}>`
  position: absolute;
  display: flex;
  flex-direction: column;
  left: ${(props) => props.leftOffset}px;
  top: ${(props) => props.topPosition}px;
`;

export const EventBar = styled.div<{ height: number; color: string }>`
  width: 4px;
  height: ${(props) => props.height}px;
  background-color: ${(props) => props.color};
  position: relative;
  border-radius: 2px;
`;

export const Circle = styled.div<{ color: string }>`
  width: 8px;
  height: 8px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  position: absolute;
  left: -2px;
`;

// 追加: イベント詳細表示用の枠
export const EventDetailTitle = styled.h3`
  position: absolute;
  margin-left: 80px;
  margin-top: -15px;
  padding: 0 5px 0;
  background-color: white;
  z-index: 1;

  ${sp`
    margin-top: -8px;
    margin-left: 65px;
    font-size: 12px;
  `}
`;

export const EventDetailFrame = styled.div`
  margin: 0 50px 0 50px;
  padding: 20px;
  position: relative;
  border: 3px solid #000;
  border-radius: 20px;

  ${sp`
    padding: 10px;
    font-size: 15px;
  `}
`;

export const ConnectorLine = styled.div<{ leftOffset: number }>`
  position: absolute;
  left: ${(props) => props.leftOffset}px;
  top: 20%;
  width: ${(props) => 50 - props.leftOffset}px;
  height: 2px;
  background-color: #000;
`;

export const DetailContainer = styled.div<{ topPosition: number }>`
  position: absolute;
  left: 60px;
  top: ${(props) => props.topPosition}px;
  width: 100%;
`;
