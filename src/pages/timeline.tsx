import { TimelineContents } from "@/components/Timeline/Timeline";
import { Layout } from "@/layout/Layout";

export const Timeline = () => {
  return (
    <Layout pageType="timeline" width={1000}>
      <TimelineContents />
    </Layout>
  );
};

export default Timeline;
