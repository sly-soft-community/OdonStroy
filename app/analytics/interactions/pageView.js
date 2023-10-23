// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
//
// import { GoogleAnalytics } from "nextjs-google-analytics";
//
// const App = ({ Component, pageProps }) => {
//   return (
//     <>
//       <GoogleAnalytics trackPageViews={{ ignoreHashChange: true }} />
//       <Component {...pageProps} />
//     </>
//   );
// };
//
// export default App;

export function pageView(
  { title, location, path, sendPageView, userId },
  measurementId
) {
  const gaMeasurementId =
    process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? measurementId;

  if (!gaMeasurementId || !window.gtag) {
    return;
  }

  const pageViewOptions = {};

  if (title !== undefined) {
    pageViewOptions.page_title = title;
  }

  if (location !== undefined) {
    pageViewOptions.page_location = location;
  }

  if (path !== undefined) {
    pageViewOptions.page_path = path;
  }

  if (sendPageView !== undefined) {
    pageViewOptions.send_page_view = sendPageView;
  }

  if (userId !== undefined) {
    pageViewOptions.user_id = userId;
  }

  window.gtag("config", gaMeasurementId, pageViewOptions);
}
