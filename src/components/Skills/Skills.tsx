import Image from "next/image";
import { SkillsContainer, SkillBox, SkillImageBox, SkillTitle, SkillText } from "./SkillsStyles";

const SkillTemplate = ({ title, image, children }: { title: string, image: string, children: string }) => {
  return (
    <SkillBox>
      <SkillImageBox>
        <Image src={image} alt={`${title}のロゴ`} width={100} height={100} style={{ objectFit: "contain" }} />
      </SkillImageBox>
      <SkillTitle>{title}</SkillTitle>
      <SkillText>{children}</SkillText>
    </SkillBox>
  );
};

export const SkillLanguages = () => {
  return (
    <SkillsContainer>
      <SkillTemplate title="Python" image="/images/skills/python.svg">
        Web開発や機械学習などに使用しています。
      </SkillTemplate>
      <SkillTemplate title="Rust" image="/images/skills/rust.svg">
        Web開発や機械学習などに使用しています。
      </SkillTemplate>
      <SkillTemplate title="JavaScript" image="/images/skills/js.svg">
        Web開発や機械学習などに使用しています。
      </SkillTemplate>
      <SkillTemplate title="TypeScript" image="/images/skills/ts.svg">
        Web開発や機械学習などに使用しています。
      </SkillTemplate>
      <SkillTemplate title="Html" image="/images/skills/html.svg">
        Web開発や機械学習などに使用しています。
      </SkillTemplate>
      <SkillTemplate title="CSS" image="/images/skills/css.svg">
        Web開発や機械学習などに使用しています。
      </SkillTemplate>
    </SkillsContainer>
  );
};