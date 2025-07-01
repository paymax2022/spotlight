import AboutSection from "@/component/about/AboutSection";
import ActivitySection from "@/component/activity/ActivitySection";
import BannerSection from "@/component/banner/BannerSection";
import BlogSection from "@/component/blog/BlogSection";
import CategorySection from "@/component/category/CategorySection";
import EventSection from "@/component/event/EventSection";
import FaqSection from "@/component/faq/FaqSection";
import FooterSection from "@/component/footer/FooterSection";
import VideoModal from "@/component/modal/VideoModal";
import NavbarSection from "@/component/navbar/NavbarSection";
import TestimonialSection from "@/component/testimonial/TestimonialSection";
import ScrollToTopButton from "@/component/utils/ScrollToTopButton";
import VideoSection from "@/component/video/VideoSection";
import WorkSection from "@/component/work/WorkSection";
import AllCourseSection from "@/component/course/AllCourseSection";


export const metadata = {
  title: "Spotlight Talent Hunt 2025 | Nigeria's Premier Reality Show",
  description: "Talent Hunt Contest",
};

export default function Home() {
  return (
    <>
      <NavbarSection style="" logo="images/timeless_logo.png" />
      <BannerSection />
      <CategorySection />
      {/* <AboutSection /> */}
           <AllCourseSection/>
      {/* <EventSection section="tf__event mt_95" startIndex={0} endIndex={4} /> */}
      <FaqSection img="images/advert1.png" />

 
      {/* <WorkSection />
      <TestimonialSection />
      <ActivitySection /> */}
      {/* <VideoSection /> */}
      {/* <BlogSection /> */}
      <FooterSection />
      <VideoModal />
      <ScrollToTopButton style="" />
    </>
  );
}
