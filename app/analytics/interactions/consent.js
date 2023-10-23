// https://developers.google.com/tag-platform/devguides/consent#gtag.js
//
// const consentValue: 'denied' | 'granted' = getUserCookiePreferenceFromLocalStorage(); // 'denied' or 'granted'
// 
// consent({
//    arg: 'update',
//    params: {
//      ad_storage: consentValue,
//      analytics_storage: consentValue,
//    },
// });

export function consent({ arg, params }) {
  if (!window.gtag) {
    return;
  }
  window.gtag("consent", arg, params);
}
