export const handleQuoteSubmit = (formData) => {
  const fetchUrl = new URL(process.env.REACT_APP_QUERY_URL);
  fetchUrl.pathname = "/swQuoteApi";
  console.log(formData);
  fetch(fetchUrl.href, {
    method: "POST",
    body: formData,
  });
};
