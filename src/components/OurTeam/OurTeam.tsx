'use client';

import { FC } from 'react';
import { TitleSections } from '../TitleSection/TitleSection';

import { MeetOurTeam } from '@/types/difinitions';
import { SwiperTeam } from '../SwiperTeam/SwiperTeam';

interface OurTeamProps {
  meetOurTeam: MeetOurTeam;
}

export const OurTeam: FC<OurTeamProps> = ({ meetOurTeam }) => {
  const { title } = meetOurTeam;

  return (
    <section
      aria-labelledby={title}
      className="py-16 px-4 md:py-20 md:px-6 xl:py-[88px] xl:px-24 bg-bg_OurTeam_tablet xl:bg-bg_OurTeam_desk bg-[length:198px_368px] md:bg-[length:268px_518px] xl:bg-left xl:bg-[length:50%_100%] bg-left-top bg-no-repeat"
    >
      <TitleSections text={title} id={title} />
      <SwiperTeam meetOurTeam={meetOurTeam} />
    </section>
  );
};
