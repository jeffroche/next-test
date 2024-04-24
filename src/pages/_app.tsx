import "@/styles/globals.css";

import { useEffect } from "react";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    console.log("Version info", {
      version: process.env.APP_VERSION,
      versionFromNext: process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA,
    });
  }, []);

  return <Component {...pageProps} />;
}
