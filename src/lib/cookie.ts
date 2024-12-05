"use server";

import {cookies} from "next/headers";

const get = async (key: string) => (await cookies()).get(key)?.value;

const set = async (key: string, value: string) => {
  const cookieExpire = new Date();

  cookieExpire.setFullYear(cookieExpire.getFullYear() + 1);

  (await cookies()).set(key, value, {
    expires: cookieExpire,
    sameSite: "strict",
  });
};

const remove = async (key: string) => {
  (await cookies()).delete(key);
};

export {get, set, remove};
