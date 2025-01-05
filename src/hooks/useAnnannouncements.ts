import useSWR from "swr";
import {fetcher} from "@/lib/axios";
import {Annannouncements, Response} from "@/types";

export const useAnnannouncements = (tenantAlias: string) => {
  const {data, error, isLoading} = useSWR<Response<Annannouncements>>(
    `/qr-menu/${tenantAlias}/announcements`,
    fetcher,
  );

  return {
    annannouncements: data?.data,
    error,
    isLoading,
  };
};
