import useSWR from "swr";
import {fetcher} from "@/lib/axios";
import {Response} from "@/types";

export const useItems = (tenantAlias: string, itemId?: string) => {
  const url = `/qr-menu/${tenantAlias}/items${itemId ? `?itemId=${itemId}` : ""}`;
  const {data, error, isLoading} = useSWR<Response<any[]>>(url, fetcher);

  return {
    items: data?.data,
    error,
    isLoading,
  };
};
