import { AboutUs } from '@/components/AboutUs/AboutUs';
import { ContactUs } from '@/components/ContactUs/ContactUs';
import { Container } from '@/components/Container/Container';
import { Footer } from '@/components/Footer/Footer';
import { Hero } from '@/components/Hero/Hero';
import { OurClients } from '@/components/OurClients/OurClients';
import { OurServices } from '@/components/OurServices/OurServices';
import { OurTeam } from '@/components/OurTeam/OurTeam';
import { WorkingProcess } from '@/components/WorkingProcess/WorkingProcess';

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <OurTeam />
      <OurServices />
      <WorkingProcess />
      <OurClients />
      <ContactUs />
      <Footer />
    </main>
  );
}
