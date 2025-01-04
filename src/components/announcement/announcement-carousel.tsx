"use client";

import type {Annannouncements, Response} from "@/types";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper/modules";
import {Megaphone} from "lucide-react";
import useSWR from "swr";
import {Loading} from "../common/loading";
import {useAppContext} from "@/contexts/AppContext";
import axios from "@/lib/axios";

import "swiper/css";
import "swiper/css/pagination";

const AnnouncementCarousel = () => {
  const {language, defaultLanguage, tenant} = useAppContext();
  const {data, isLoading} = useSWR<Response<Annannouncements>>(
    `/qr-menu/${tenant.alias}/announcements`,
    axios,
  );

  if (isLoading) {
    return <Loading />;
  }

  const annannouncements = data?.data;

  const hasAnnannouncements = annannouncements && annannouncements.length !== 0;

  if (!hasAnnannouncements) {
    return null;
  }

  return (
    <div className="container pt-2">
      <Swiper
        autoHeight={true}
        autoplay={{delay: 5000}}
        modules={[Autoplay, Pagination]}
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
                <div className="pt-1 pb-6">
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

export {AnnouncementCarousel};
