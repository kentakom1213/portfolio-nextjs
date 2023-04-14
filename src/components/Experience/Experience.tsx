import Image from "next/image";
import { SpanColor } from "@/styles/Global/Color";
import { ExperienceFrame, ExperienceGrid, ExperienceGridElem, ExperienceTitle } from "./ExperienceStyles";

export const ExperienceContents = ({ title, children }: { title: string, children: any }) => {
  return (
    <ExperienceFrame>
      <ExperienceTitle>
        {title}
      </ExperienceTitle>
      <div>
        {children}
      </div>
    </ExperienceFrame>
  )
};

export const ExperienceKyopro = () => {
  return (
    <ExperienceContents title="競技プログラミング">
      <p>
        競技プログラミングは、様々なデータやそれに対する操作をコンピュータ上で効率的に行うための知識や能力を競う大会です。
        そのうち、日本で最も人気のあるAtCoderというコンテストサイトに大学1年生の時から継続的に参加しており、
        現在のレーティングは<SpanColor color="green">緑色</SpanColor>（登録者のうち上位30%に当たる）です。
        現在も、コンテストを通じてアルゴリズムやデータ構造といった、コーディングをする上での重要な考え方を学んでいます。
      </p>
      <ExperienceGrid>
        <ExperienceGridElem>
            <Image src="/images/experience/atcoder-rating-transition-graph.png" alt="AtCoderのレート遷移" fill style={{ borderRadius: "20px", objectFit: "contain" }}></Image>
        </ExperienceGridElem>
      </ExperienceGrid>
    </ExperienceContents>
  );
};

export const ExperienceWeb = () => {
  return (
    <ExperienceContents title="Web関係">
      <p>
        GitHub
      </p>
    </ExperienceContents>
  );
};

export const ExperienceSemiar = () => {
  return (
    <ExperienceContents title="自主ゼミ">
      <p>
        情報系の分野を自主的に学習する自主ゼミ、「ゼロイチゼミ」の運営に携わっています。
        現在は名古屋大学の1,2年生を中心に20名ほどが参加しており、そのテーマは一冊の本を輪読形式で読み進めるものから、互いの得意分野を発表し合うもの、
        資格の合格に向けて一緒に取り組むものなど様々です。ここでは、その自主ゼミで自分が発表した際のスライドの一部を紹介します。
      </p>
    </ExperienceContents>
  );
};