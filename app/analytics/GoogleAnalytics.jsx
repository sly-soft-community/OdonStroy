"use client";

import React from "react";
import Script from "next/script";
import { usePageViews } from "./hooks/usePageViews";

export function GoogleAnalytics({
  debugMode = false,
  gaMeasurementId,
  gtagUrl = "https://www.googletagmanager.com/gtag/js",
  strategy = "afterInteractive",
  defaultConsent = "granted",
  trackPageViews,
  nonce,
}) {
  const _gaMeasurementId =
    process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? gaMeasurementId;

  usePageViews({
    gaMeasurementId: _gaMeasurementId,
    ignoreHashChange:
      typeof trackPageViews === "object"
        ? trackPageViews?.ignoreHashChange
        : false,
    disabled: !trackPageViews,
  });

  if (!_gaMeasurementId) {
    return null;
  }

  return (
    <>
      <Script src={`${gtagUrl}?id=${_gaMeasurementId}`} strategy={strategy} />
      <Script id="nextjs-google-analytics" nonce={nonce}>
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            ${defaultConsent === "denied"
            ? `gtag('consent', 'default', {
              'ad_storage': 'denied',
              'analytics_storage': 'denied'
            });`
            : ``
          }
            gtag('config', '${_gaMeasurementId}', {
              cookie_flags: 'SameSite=None;Secure',
              page_path: window.location.pathname,
              ${debugMode ? `debug_mode: ${debugMode},` : ""}
            });
          `}
      </Script>
    </>
  );
}
