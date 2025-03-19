import Image from "next/image";
import {
  TimelineContainer,
  IventBox,
  IventImageBox,
  IventBoxTitle,
  IventText,
  TimelineContainerTitle,
} from "./TimelineStyles";
import Link from "next/link";

const IventTemplate = ({
  title,
  children,
}: {
  title: string;
  children: any;
}) => {
  return (
    <IventBox>
      <IventImageBox></IventImageBox>
      <IventBoxTitle>{title}</IventBoxTitle>
      <IventText>{children}</IventText>
    </IventBox>
  );
};

const TextLink = ({ text, link }: { text: string; link: string }) => {
  return (
    <Link href={link} style={{ textDecoration: "underline" }}>
      {text}
    </Link>
  );
};

export const TimelineContents = () => {
  return (
    <>
      <TimelineContainerTitle>{"> "}Language</TimelineContainerTitle>
      <TimelineContainer>
        <IventTemplate title="Python">
          Web開発や機械学習などに使用しています。
        </IventTemplate>
        <IventTemplate title="Rust">
          競技プログラミングやWebAPIの作成などに使用しています。
        </IventTemplate>
        <IventTemplate title="JavaScript">
          主にWeb開発に使用しています。
        </IventTemplate>
        <IventTemplate title="TypeScript">
          Rust同様、型がしっかりしているので気に入っています。
        </IventTemplate>
        <IventTemplate title="Html">Web開発に使用しています。</IventTemplate>
        <IventTemplate title="CSS">Web開発に使用しています。</IventTemplate>
      </TimelineContainer>
    </>
  );
};
