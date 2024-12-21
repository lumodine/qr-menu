"use client";

import type {Annannouncements} from "@/types";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper/modules";
import {useAppContext} from "@/contexts/AppContext";

import "swiper/css";
import "swiper/css/pagination";

export type AnnouncementCarouselProps = {
  annannouncements: Annannouncements;
};

export const AnnouncementCarousel = ({annannouncements}: AnnouncementCarouselProps) => {
  const {language, defaultLanguage} = useAppContext();

  if (annannouncements.length === 0) {
    return null;
  }

  return (
    <div className="container pt-2">
      <Swiper autoHeight={true} modules={[Pagination]} pagination={{clickable: true}}>
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
              <div className="bg-primary-foreground w-full py-8 px-2 text-center rounded-sm">
                <span className="text-primary font-bold text-lg">{translation.title}</span>
                {translation.description && <p>{translation.description}</p>}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
AnnouncementCarousel.displayName = "AnnouncementCarousel";
