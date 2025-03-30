export const handleQuoteSubmit = (formData) => {
  const fetchUrl = new URL(process.env.REACT_APP_QUERY_URL);
  fetchUrl.pathname = "/swQuoteApi";
  try {
    const submission = fetch(fetchUrl.href, {
      method: "POST",
      body: formData,
    }).then((res) => {
      return res.status;
    });
    return submission;
  } catch (e) {
    console.error(e);
    return 404;
  }
};
