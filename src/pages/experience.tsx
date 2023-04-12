import { ExperienceContents, ExperienceKyopro, ExperienceWeb, ExperienceSemiar } from '@/components/Experience/Experience';
import { ExperienceFrame } from '@/components/Experience/ExperienceStyles';
import { Layout } from '@/layout/Layout'

export const Experience = () => {
  return (
    <Layout pageType="experience" width={1000}>
      <ExperienceKyopro />
      <ExperienceWeb />
      <ExperienceSemiar />
    </Layout>
  )
};

export default Experience;