import { useEffect, useState } from "react";
import { useAxios } from "./useAxios";

export const useAuth = (code) => {
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    if (code) {
      useAxios()
        .post("/login", { code })
        .then((res) => {
          setAccessToken(res.data.accessToken);
          // localStorage.setItem("accessToken", res.data.accessToken);
        })
        .catch((err) => {
          window.location = "/";
        });
    }
  }, [code]);
  return accessToken;
};
