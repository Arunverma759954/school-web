import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import AboutUs from "@/components/AboutUs";
import SchoolVideo from "@/components/SchoolVideo";
import StudentLife from "@/components/StudentLife";
import RecentActivities from "@/components/RecentActivities";
import Footer from "@/components/Footer";
import NoticeBoard from "@/components/NoticeBoard";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Header />

      {/* Sections Container */}
      <div className="flex flex-col w-full">
        <HeroSlider />
        <NoticeBoard />
        <AboutUs />
        <SchoolVideo />
        <StudentLife />
        <RecentActivities />
        <Footer />
      </div>
    </main>
  );
}
