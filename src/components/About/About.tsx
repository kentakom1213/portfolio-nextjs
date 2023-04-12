import Image from 'next/image'
import { AboutHeadLine, AboutHeadLineTag } from './AboutStyles';

export const AboutImage = () => {
  return (
    <Image src="/images/seattle2.JPG" alt='komoto kenta' fill style={{ borderRadius: '20px', objectFit: 'cover' }}></Image>
  )
};

export const AboutText = () => {
  return (
    <>
      <AboutHeadLine fontSize={50}>
        <ruby>甲本 健太<rt>こうもと けんた</rt></ruby>
      </AboutHeadLine>
      <AboutHeadLine fontSize={30}>
        <AboutHeadLineTag>
          所属
        </AboutHeadLineTag>
        名古屋大学情報学部<br/>
        自然情報学科数理情報系専攻
      </AboutHeadLine>
      <AboutHeadLine fontSize={35}>
        <AboutHeadLineTag>
          生年月日
        </AboutHeadLineTag>
        2002 / 12 / 13
      </AboutHeadLine>
      <AboutHeadLine fontSize={24.5}>
        <AboutHeadLineTag>
          ひとこと
        </AboutHeadLineTag>
        高校生の頃にプログラミングを始めました。<br/>
        現在は、アルゴリズムや数理最適化に興味を持っています。
      </AboutHeadLine>
    </>
  )
};
