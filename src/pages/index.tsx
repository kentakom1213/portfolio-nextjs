import Image from 'next/image'
import { Layout } from '@/layout/Layout'
import { AboutImage, AboutText } from '@/components/About/About';
import { AboutContentsFrame, AboutImageFrame, AboutTextFrame } from '@/components/About/AboutStyles';

export const About = () => {
  return (
    <Layout pageType="about" width={1100}>
      <AboutContentsFrame>
        <AboutImageFrame>
          <AboutImage />
        </AboutImageFrame>
        <AboutTextFrame>
          <AboutText />
        </AboutTextFrame>
      </AboutContentsFrame>
    </Layout>
  )
};

export default About;