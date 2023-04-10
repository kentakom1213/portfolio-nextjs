import Image from 'next/image'
import { Layout } from '@/layout/Layout'

export const Home = () => {
  return (
      <Layout pageType="about">
        <Image src="/images/seattle1.JPG" alt='komoto kenta' width={500} height={600} style={{ objectFit: 'contain' }}></Image>
      </Layout>
  )
};

export default Home;