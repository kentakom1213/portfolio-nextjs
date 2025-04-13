import Image from "next/image";
import { AboutHeadLine, AboutHeadLineTag, AboutTitle } from "./AboutStyles";

export const AboutImage = () => {
	return (
		<Image
			src="/images/about/at_seattle.JPG"
			alt="komoto kenta"
			fill
			style={{ borderRadius: "20px", objectFit: "cover" }}
		/>
	);
};

export const AboutText = () => {
	return (
		<>
			<AboutTitle>
				<ruby>
					甲本 健太<rt>こうもと けんた</rt>
				</ruby>
			</AboutTitle>
			<AboutHeadLine fontSize={25}>
				<AboutHeadLineTag>所属</AboutHeadLineTag>
				名古屋大学情報学研究科
				<br />
				数理情報系専攻 M1
			</AboutHeadLine>
			<AboutHeadLine fontSize={25}>
				<AboutHeadLineTag>研究分野</AboutHeadLineTag>
				グラフアルゴリズム
				<br />
				列挙アルゴリズム
			</AboutHeadLine>
			<AboutHeadLine fontSize={23}>
				<AboutHeadLineTag>ひとこと</AboutHeadLineTag>
				アルゴリズムの理論と、それを用いた実際のプログラムの高速化に興味を持っています。
				また、プログラミング言語 Rust に興味を持っており業務での開発や OSS
				開発などに利用しています。
			</AboutHeadLine>
		</>
	);
};
