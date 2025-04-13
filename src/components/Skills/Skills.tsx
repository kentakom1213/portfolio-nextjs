import Image from "next/image";
import {
	SkillsContainer,
	SkillBox,
	SkillImageBox,
	SkillBoxTitle,
	SkillText,
	SkillsContainerTitle,
} from "./SkillsStyles";
import Link from "next/link";
import type { ReactNode } from "react";

const SkillTemplate = ({
	title,
	image,
	children,
}: {
	title: string;
	image: string;
	children: ReactNode;
}) => {
	return (
		<SkillBox>
			<SkillImageBox>
				<Image
					src={image}
					alt={`${title}のロゴ`}
					width={100}
					height={100}
					style={{ objectFit: "contain" }}
				/>
			</SkillImageBox>
			<SkillBoxTitle>{title}</SkillBoxTitle>
			<SkillText>{children}</SkillText>
		</SkillBox>
	);
};

const TextLink = ({
	href,
	children,
}: {
	href: string;
	children: ReactNode;
}) => {
	return (
		<Link href={href} style={{ textDecoration: "underline" }}>
			{children}
		</Link>
	);
};

export const SkillLanguages = () => {
	return (
		<>
			<SkillsContainerTitle>{"> "}Language</SkillsContainerTitle>
			<SkillsContainer>
				<SkillTemplate title="Rust" image="/images/skills/rust.svg">
					Webバックエンドの高速化などでの使用経験があります。
				</SkillTemplate>
				<SkillTemplate title="Python" image="/images/skills/python.svg">
					Web開発や機械学習などに使用しています。
				</SkillTemplate>
				<SkillTemplate title="TypeScript" image="/images/skills/ts.svg">
					Webフロントエンドの開発に利用しています。
				</SkillTemplate>
				<SkillTemplate title="Html" image="/images/skills/html.svg">
					Web開発に使用しています。
				</SkillTemplate>
				<SkillTemplate title="CSS" image="/images/skills/css.svg">
					Web開発に使用しています。
				</SkillTemplate>
			</SkillsContainer>
		</>
	);
};

export const SkillFrameworks = () => {
	return (
		<>
			<SkillsContainerTitle>{"> "}Framework</SkillsContainerTitle>
			<SkillsContainer>
				<SkillTemplate title="Django" image="/images/skills/django.svg">
					<TextLink href="https://ocw.nagoya-u.jp/">NUOCW</TextLink>
					で、内部向けのリソース管理ソフトを作成する際に使用しました。
				</SkillTemplate>
				<SkillTemplate title="React" image="/images/skills/react.svg">
					NUOCWでのページ作成、このポートフォリオなど
				</SkillTemplate>
				<SkillTemplate title="Next.js" image="/images/skills/next.svg">
					このポートフォリオを作成する際に使用しました。
				</SkillTemplate>
				<SkillTemplate title="Axum" image="/images/skills/rust.svg">
					Rust製のWebフレームワークです。
					<TextLink href="https://sudoku.pwll.dev/">数独ソルバ</TextLink>
					のAPI開発に利用しました。
				</SkillTemplate>
				<SkillTemplate title="egui" image="/images/skills/rust.svg">
					Rust製のGUIフレームワークです。
					<TextLink href="https://kentakom1213.github.io/graph-editor/">
						Graph Editor
					</TextLink>
					の開発に利用しました。
				</SkillTemplate>
			</SkillsContainer>
		</>
	);
};

export const SkillSoftwares = () => {
	return (
		<>
			<SkillsContainerTitle>{"> "}Software</SkillsContainerTitle>
			<SkillsContainer>
				<SkillTemplate title="Git" image="/images/skills/git.svg">
					コードの管理に使用しています。
				</SkillTemplate>
				<SkillTemplate title="GitHub" image="/images/skills/github.svg">
					チーム開発等に利用しています。
				</SkillTemplate>
				<SkillTemplate title="Docker" image="/images/skills/docker.webp">
					開発の環境構築、サーバへのデプロイに使用しています。
				</SkillTemplate>
				<SkillTemplate title="Linux" image="/images/skills/linux.svg">
					サーバの運用に使用しています。
				</SkillTemplate>
			</SkillsContainer>
		</>
	);
};
