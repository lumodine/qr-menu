"use client";

import type {Annannouncements} from "@/types";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper/modules";
import {Megaphone} from "lucide-react";
import {useAppContext} from "@/contexts/AppContext";

import "swiper/css";
import "swiper/css/pagination";

export type AnnouncementCarouselProps = {
  annannouncements: Annannouncements;
};

export const AnnouncementCarousel = ({annannouncements}: AnnouncementCarouselProps) => {
  const {language, defaultLanguage} = useAppContext();

  const hasAnnannouncements = annannouncements && annannouncements.length !== 0;

  if (!hasAnnannouncements) {
    return null;
  }

  return (
    <div className="container pt-2">
      <Swiper
        autoHeight={true}
        autoplay={{delay: 5000}}
        modules={[Pagination]}
        pagination={{clickable: true}}
      >
        {annannouncements.map((annannouncement, annannouncementIndex) => {
          let translation = annannouncement.translations.find(
            (translation) => translation.language._id === language.language._id,
          );

          if (!translation) {
            translation = annannouncement.translations.find(
              (translation) => translation.language._id === defaultLanguage.language._id,
            );
          }

          if (!translation) {
            return null;
          }

          return (
            <SwiperSlide key={annannouncementIndex}>
              <div className="bg-primary-foreground w-full text-center rounded-sm  p-2">
                <Megaphone className="text-primary" />
                <div className="pt-2 pb-6">
                  <span className="text-primary font-bold text-lg">{translation.title}</span>
                  {translation.description && <p>{translation.description}</p>}
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
AnnouncementCarousel.displayName = "AnnouncementCarousel";
