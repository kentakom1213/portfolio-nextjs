import { SkillLanguages } from '@/components/Skills/Skills';
import { Layout } from '@/layout/Layout'

export const Skills = () => {
  return (
      <Layout pageType="skills" width={1000}>
        <SkillLanguages />
      </Layout>
  )
};

export default Skills;