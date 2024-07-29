import { AboutUs } from '@/components/AboutUs/AboutUs';
import { ContactUs } from '@/components/ContactUs/ContactUs';

import { Footer } from '@/components/Footer/Footer';

import { Hero } from '@/components/Hero/Hero';
import { OurClients } from '@/components/OurClients/OurClients';
import { OurServices } from '@/components/OurServices/OurServices';
import { OurTeam } from '@/components/OurTeam/OurTeam';
import { WorkingProcess } from '@/components/WorkingProcess/WorkingProcess';
import { getDictionary, Locale } from './dictionaries';
import { Header } from '@/components/Header/Header';

interface HomeProps {
  params: {
    lang: Locale;
  };
}

export default async function Home({ params: { lang } }: HomeProps) {
  const {
    header,
    aboutUs,
    meetOurTeam,
    services,
    workProcesses,
    clientsSay,
    portfolio,
    contacts,
  } = await getDictionary(lang);

  return (
    <main>
      <div className="w-full desk:bg-hero-bg-desk bg-no-repeat bg-heroPosition bg-hero-bg-desk-size">
        <Header nav={header.nav} />
        <Hero />
      </div>

      <AboutUs />
      <OurTeam meetOurTeam={meetOurTeam} />
      <OurServices />
      <WorkingProcess workProcesses={workProcesses} />
      <OurClients />
      <ContactUs />
      <Footer />
    </main>
  );
}
