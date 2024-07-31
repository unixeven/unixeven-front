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
    footer,
  } = await getDictionary(lang);

  return (
    <main>
      <div className="w-full bg-hero-bg-mob md:bg-hero-bg-md desk:bg-hero-bg-desk bg-no-repeat bg-heroPositionMob desk:bg-heroPositionDesk md:bg-heroPositionMd bg-hero-bg-mob-size desk:bg-hero-bg-desk-size md:bg-hero-bg-md-size">
        <Header nav={header.nav} />
        <Hero />
      </div>

      <AboutUs aboutUs={aboutUs} />
      <OurTeam meetOurTeam={meetOurTeam} />
      <OurServices services={services} />
      <WorkingProcess workProcesses={workProcesses} />
      <OurClients />
      <ContactUs />
      <Footer footer={footer} />
    </main>
  );
}
