import CampConclusion from "@/components/CampConclusion";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Startup Ambassadors Camp - 7 Kunlik Shaxsiy O'sish Tajribasi</title>
        <meta 
          name="description" 
          content="Oltiariqdan boshlangan yo'l — 7 kunlik camp tajribasi. G'oyani realga aylantirish, jamoada ishlash va shaxsiy o'sish haqida ilhomlantiruvchi hikoya." 
        />
        <meta name="keywords" content="camp tajribasi, 7 kun, shaxsiy o'sish, startup ambassadors, yoshlar ventures" />
      </Helmet>
      <main className="min-h-screen bg-background">
        <CampConclusion />
      </main>
    </>
  );
};

export default Index;
