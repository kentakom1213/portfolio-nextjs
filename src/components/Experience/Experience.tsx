import Image from "next/image";
import { SpanColor } from "@/styles/Global/Color";
import { ExperienceFrame, ExperienceGrid, ExperienceGridImage, ExperienceGridText, ExperienceKeisanryoImage, ExperienceKeisanryoText, ExperienceOptimizeImage, ExperienceOptimizeText, ExperienceSubTitle, ExperienceText, ExperienceTitle, ExperienceZemiGrid } from "./ExperienceStyles";

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
  );
};

const ExperienceSubpage = ({ title, url, children }: { title: string, url?: string, children: any }) => {
  return (
    <ExperienceGridText>
      <ExperienceSubTitle hasLink={url}>
        {url ? <a href={url}>{title}</a> : title}
      </ExperienceSubTitle>
      <ExperienceText>
        {children}
      </ExperienceText>
    </ExperienceGridText>
  );
};

export const ExperienceKyopro = () => {
  return (
    <ExperienceContents title="競技プログラミング">
      <ExperienceText>
        競技プログラミングは、様々なデータやそれに対する操作をコンピュータ上で効率的に行うための知識や能力を競う大会です。
        そのうち、日本で最も人気のあるAtCoderというコンテストサイトに大学1年生の時から継続的に参加しており、
        現在のレーティングは<SpanColor color="green">緑色</SpanColor>（登録者のうち上位30%に当たる）です。
        現在も、コンテストを通じてアルゴリズムやデータ構造といった、コーディングをする上での重要な考え方を学んでいます。
      </ExperienceText>
      <ExperienceGrid>
        <ExperienceGridImage>
          <Image src="/images/experience/atcoder-rating-transition-graph.png" alt="AtCoderのレート遷移" fill style={{ borderRadius: "20px", objectFit: "contain" }}></Image>
        </ExperienceGridImage>
        <ExperienceGridImage>
          <Image src="/images/experience/atcoder-rating-hist.png" alt="AtCoderのレート遷移" fill style={{ borderRadius: "20px", objectFit: "contain" }}></Image>
        </ExperienceGridImage>
      </ExperienceGrid>
      <ExperienceGrid ratio={[3, 4]}>
        <ExperienceSubpage title="実装したアルゴリズム">
          右は、プログラミング言語Rustを用いて2分探索というアルゴリズムを実装したものです。
          競技プログラミングでは、このようなアルゴリズムをコンテスト時間内に完成させて、あらゆる問題に正解させなければならないため、
          正確なコードを素早く書く能力やコードの間違っている部分を見抜いて修正するデバッグ能力が身につきます。
        </ExperienceSubpage>
        <ExperienceGridImage>
          <Image src="/images/experience/binary_search_rust_wide.png" alt="Rustでの二分探索" fill style={{ borderRadius: "20px", objectFit: "cover" }}></Image>
        </ExperienceGridImage>
      </ExperienceGrid>
    </ExperienceContents>
  );
};

export const ExperienceWeb = () => {
  return (
    <ExperienceContents title="Web関係">
      <ExperienceGrid ratio={[2, 3]}>
        <ExperienceSubpage title="GitHub" url="https://github.com/kentakom1213">
          様々なコードはGitHubで管理しています。GitやGitHubの操作は1年生のとき始めたNUOCW（後述）というアルバイトの経験を通して身につけました。
        </ExperienceSubpage>
        <ExperienceGridImage>
          <Image src="/images/experience/github_about.png" alt="GitHub" fill style={{ borderRadius: "20px", objectFit: "cover" }}></Image>
        </ExperienceGridImage>
      </ExperienceGrid>
      <ExperienceGrid ratio={[2, 3]}>
        <ExperienceSubpage title="名大の授業 (NUOCW)" url="https://ocw.nagoya-u.jp">
          名古屋大学の授業を外部に公開するサイト、NUOCWに1年生の時から参加しています。
          Reactでの記事作成からサーバの管理、講義管理アプリの作成など、フロントエンド、バックエンド問わず様々な分野の業務を行っています。
        </ExperienceSubpage>
        <ExperienceGridImage>
          <Image src="/images/experience/nuocw_about.png" alt="NUOCW" fill style={{ borderRadius: "20px", objectFit: "cover" }}></Image>
        </ExperienceGridImage>
      </ExperienceGrid>
      <ExperienceGrid ratio={[2, 3]}>
        <ExperienceSubpage title="個人ブログ" url="https://blog.powell1213.com">
          Hexoという静的サイトジェネレータで個人のブログを公開しています。
          内容は、競技プログラミングのことや授業で学んだことなど、自分が勉強したことのアウトプットが中心です。
        </ExperienceSubpage>
        <ExperienceGridImage>
          <Image src="/images/experience/powell_blog.png" alt="NUOCW" fill style={{ borderRadius: "20px", objectFit: "cover" }}></Image>
        </ExperienceGridImage>
      </ExperienceGrid>
    </ExperienceContents>
  );
};

export const ExperienceSemiar = () => {
  return (
    <ExperienceContents title="自主ゼミ">
      <ExperienceText>
        情報系の分野を自主的に学習する自主ゼミ、「ゼロイチゼミ」の運営に携わっています。
        現在は名古屋大学の1,2年生を中心に20名ほどが参加しており、そのテーマは一冊の本を輪読形式で読み進めるものから、互いの得意分野を発表し合うもの、
        資格の合格に向けて一緒に取り組むものなど様々です。ここでは、その自主ゼミで自分が発表した際のスライドの一部を紹介します。
      </ExperienceText>
      <ExperienceZemiGrid>
        <ExperienceOptimizeText>
          <ExperienceSubpage title="パラメータの最適化">
            「ゼロから作るディープラーニング」という書籍を輪読し、実際に AI を作ってみるというテーマのゼミでの発表です。
            ニューラルネットワークにおけるパラメータとは何かというレベルから、いかにして様々なパラメータを最適になるように調整していくかという内容まで、段階的に説明しました。
          </ExperienceSubpage>
        </ExperienceOptimizeText>
        <ExperienceOptimizeImage>
          <Image src="/images/experience/parameter_optimization.png" alt="パラメータの最適化" fill style={{ borderRadius: "10px", objectFit: "cover" }}></Image>
        </ExperienceOptimizeImage>
        <ExperienceKeisanryoText>
          <ExperienceSubpage title="計算量を学ぼう">
            プログラムの速度を大まかに見積もるのに必要な計算量という概念をテーマにした発表です。
            「プログラムをいかにして高速化するか」というテーマで基本的なアルゴリズムについても踏み込んで解説しています。
          </ExperienceSubpage>
        </ExperienceKeisanryoText>
        <ExperienceKeisanryoImage>
          <Image src="/images/experience/keisanryo.png" alt="計算量" fill style={{ borderRadius: "10px", objectFit: "cover" }}></Image>
        </ExperienceKeisanryoImage>
      </ExperienceZemiGrid>
    </ExperienceContents>
  );
};