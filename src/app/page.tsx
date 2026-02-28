import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import QuickLinks from "@/components/QuickLinks";
import AboutSchoolBanner from "@/components/AboutSchoolBanner";
import AboutUs from "@/components/AboutUs";
import CampusHighlights from "@/components/CampusHighlights";
import SchoolVideo from "@/components/SchoolVideo";
import StudentLife from "@/components/StudentLife";
import RecentActivities from "@/components/RecentActivities";
import SchoolMap from "@/components/SchoolMap";
import Footer from "@/components/Footer";
import NoticeBoard from "@/components/NoticeBoard";
import PopupModal from "@/components/PopupModal";

export default function Home() {
  return (
    <>
      <main className="relative min-h-screen overflow-x-hidden">
        <Header />

        {/* Sections Container - Push down below fixed header */}
        <div className="flex flex-col w-full pt-[100px]">
          <HeroSlider />
          <QuickLinks />
          <NoticeBoard />
          <AboutSchoolBanner />
          <AboutUs />
          <CampusHighlights />
          <SchoolVideo />
          <StudentLife />
          <RecentActivities />
          <SchoolMap />
          <Footer />
        </div>
      </main>

      {/* Popup Modal - Outside main container */}
      <PopupModal />
    </>
  );
}
