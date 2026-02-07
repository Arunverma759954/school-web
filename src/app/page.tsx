import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import QuickLinks from "@/components/QuickLinks";
import AboutSchoolBanner from "@/components/AboutSchoolBanner";
import AboutUs from "@/components/AboutUs";
import SchoolVideo from "@/components/SchoolVideo";
import StudentLife from "@/components/StudentLife";
import RecentActivities from "@/components/RecentActivities";
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
          <SchoolVideo />
          <StudentLife />
          <RecentActivities />
          <Footer />
        </div>
      </main>

      {/* Popup Modal - Outside main container */}
      <PopupModal />
    </>
  );
}
