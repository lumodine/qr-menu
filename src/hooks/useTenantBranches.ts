import useSWR from "swr";
import {fetcher} from "@/lib/axios";
import {Response, TenantBranches} from "@/types";

export const useTenantBranches = (tenantAlias: string) => {
  const {data, error, isLoading} = useSWR<Response<TenantBranches>>(
    `/qr-menu/${tenantAlias}/branches`,
    fetcher,
  );

  return {
    branches: data?.data,
    error,
    isLoading,
  };
};
