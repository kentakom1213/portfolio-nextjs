import { HeaderContaner, HeaderIconBox, HeaderLink, HeaderLinkFlex, HeaderTitle, HeaderTitleFlex } from "./HeaderStyles";
import Image from "next/image";

export const Header = ({ pageType } : { pageType: string }) => {
  return (
    <HeaderContaner>
      <HeaderTitleFlex>
        <HeaderIconBox>
          <Image src="/powellicon.svg" alt="powell icon" width={50} height={50} />
        </HeaderIconBox>
        <HeaderTitle>
          甲本 健太 <span style={{ fontSize: 25 }}>/ KOMOTO Kenta</span>
        </HeaderTitle>
      </HeaderTitleFlex>
      <HeaderLinkFlex>
        <HeaderLink href="/" underline={pageType === "about"}>
          about
        </HeaderLink>
        <HeaderLink href="/skills" underline={pageType === "skills"}>
          skills
        </HeaderLink>
        <HeaderLink href="/contact" underline={pageType === "contact"}>
          contact
        </HeaderLink>
      </HeaderLinkFlex>
    </HeaderContaner>
  )
};