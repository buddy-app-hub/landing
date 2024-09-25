import AppBar from "@/app/components/AppBar";
import Footer from "@/app/components/Footer";
import AboutUs from "@/app/components/AboutUs";
import WantToBeBuddy from "@/app/components/WantToBeBuddy";
import FrequentlyAskedQuestions from "@/app/components/FrequentlyAskedQuestions";
import Banner from "@/app/components/Banner";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">

      <AppBar />

      <main className="flex flex-col row-start-2 sm:items-start" style={{ width: '100%' }}>
          <Banner />

          {/*<AboutUs />*/}

          <div>Proximamente</div>

          <div style={{ height: '250px' }} />

{/*          <WantToBeBuddy />

          <FrequentlyAskedQuestions />

          <Footer />*/}

      </main>
    </div>
  );
}
