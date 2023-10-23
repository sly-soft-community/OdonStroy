import { useEffect } from "react";
import { Router } from "next/router";
import { pageView } from "../interactions/pageView";

export function usePageViews({ gaMeasurementId, ignoreHashChange, disabled }) {
  useEffect(() => {
    if (disabled) {
      return;
    }

    const handleRouteChange = (url) => {
      const _gaMeasurementId =
        process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? gaMeasurementId;
      pageView({ path: url.toString() }, _gaMeasurementId);
    };

    Router.events.on("routeChangeComplete", handleRouteChange);

    if (!ignoreHashChange) {
      Router.events.on("hashChangeComplete", handleRouteChange);
    }

    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);

      if (!ignoreHashChange) {
        Router.events.off("hashChangeComplete", handleRouteChange);
      }
    };
  }, [gaMeasurementId, ignoreHashChange, disabled]);
}
