import { SkillFrameworks, SkillLanguages, SkillSoftwares } from '@/components/Skills/Skills';
import { Layout } from '@/layout/Layout'

export const Skills = () => {
  return (
      <Layout pageType="skills" width={1000}>
        <SkillLanguages />
        <SkillFrameworks />
        <SkillSoftwares />
      </Layout>
  )
};

export default Skills;