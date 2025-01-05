import useSWR from "swr";
import {fetcher} from "@/lib/axios";
import {Response} from "@/types";

export const useItem = (tenantAlias: string, itemId: string) => {
  const {data, error, isLoading} = useSWR<Response<any>>(
    `/qr-menu/${tenantAlias}/items/${itemId}`,
    fetcher,
  );

  return {
    item: data?.data,
    error,
    isLoading,
  };
};
