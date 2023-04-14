import { HeaderContaner, HeaderIconBox, HeaderLink, HeaderLinkFlex, HeaderTitle, HeaderSubTitle, HeaderTitleFlex } from "./HeaderStyles";
import Image from "next/image";

export const Header = ({ pageType } : { pageType: string }) => {
  return (
    <HeaderContaner>
      <HeaderTitleFlex>
        <HeaderIconBox>
          <Image src="/powellicon.svg" alt="powell icon" fill />
        </HeaderIconBox>
        <HeaderTitle>
          甲本 健太 <HeaderSubTitle>/ KOMOTO Kenta</HeaderSubTitle>
        </HeaderTitle>
      </HeaderTitleFlex>
      <HeaderLinkFlex>
        <HeaderLink href="/" underline={pageType === "about"}>
          about
        </HeaderLink>
        <HeaderLink href="/skills" underline={pageType === "skills"}>
          skills
        </HeaderLink>
        <HeaderLink href="/experience" underline={pageType === "experience"}>
          experience
        </HeaderLink>
        <HeaderLink href="/contact" underline={pageType === "contact"}>
          contact
        </HeaderLink>
      </HeaderLinkFlex>
    </HeaderContaner>
  )
};