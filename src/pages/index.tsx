import AppBar from "@/components/AppBar";
import Banner from "@/components/Banner";

const Index: React.FC = () => {
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
};

export default Index;
