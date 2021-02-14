export default function* searchSaga({ payload }) {
  const response = yield fetch(`https://api.github.com/search/repositories?q=${payload}+in:name`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.status === 200) {
    const result = yield response.json();
  }
}
