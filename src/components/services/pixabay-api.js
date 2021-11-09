export const sendServerRequest = (page, keyword) => {
  // PIXABAY
  // const baseUrl = "https://pixabay.com/api/";
  // const API_KEY = "23803222-9b3ffdbc29f05e2c5cc8bf419";

  const baseUrl2 = "https://newsapi.org/v2/everything";
  const API_KEY_V2 = "ead4fca44b904fd19a414f25f0c9bd1f";

  return fetch(
    // PIXABAY REQUEST
    // `${baseUrl}?q=${keyword}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    // EVERYTHING REQUEST
    `${baseUrl2}?q=${keyword}&apiKey=${API_KEY_V2}&page=${page}&pageSize=12`
  ).then((res) => res.json());
};
