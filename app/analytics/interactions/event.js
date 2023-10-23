// https://developers.google.com/analytics/devguides/collection/gtagjs/events
//
// import { useState } from "react";
// import Page from "../components/Page";
// import { event } from "nextjs-google-analytics";
//
// export function Contact() {
//   const [message, setMessage] = useState("");
//
//   const handleInput = (e) => {
//     setMessage(e.target.value);
//   };
//
//   const handleSubmit = (e) => {
//     e.preventDefault();
//
//     event("submit_form", {
//       category: "Contact",
//       label: message,
//     });
//
//     setState("");
//   };
//
//   return (
//     <Page>
//       <h1>This is the Contact page</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           <span>Message:</span>
//           <textarea onChange={handleInput} value={message} />
//         </label>
//         <button type="submit">submit</button>
//       </form>
//     </Page>
//   );
// }

export function event(
  action,
  { category, label, value, nonInteraction, userId, ...otherOptions }
) {
  if (!window.gtag) {
    return;
  }

  const eventOptions = { ...otherOptions };

  if (category !== undefined) {
    eventOptions.event_category = category;
  }

  if (label !== undefined) {
    eventOptions.event_label = label;
  }

  if (value !== undefined) {
    eventOptions.value = value;
  }

  if (nonInteraction !== undefined) {
    eventOptions.non_interaction = nonInteraction;
  }

  if (userId !== undefined) {
    eventOptions.user_id = userId;
  }

  window.gtag("event", action, eventOptions);
}
