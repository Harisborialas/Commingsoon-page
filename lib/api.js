export const sendContactForm = (values) => {
  fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(values),
  }).then((res) => {
    if (!res.ok === 200) throw new Error("Failed to send message");
    return res.json();
  });
};
