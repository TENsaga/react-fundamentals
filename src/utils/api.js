import axios from 'axios';

export default function fetchPopularRepos(language) {
  const encodedURI = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${
    language
  }&sort=stars&order=desc&type=Repositories`);

  return axios
    .get(encodedURI) // returns a promise, you can chain .then
    .then(response => response.data.items);
  // don't have to worry about storting through .data.items, as we already do this in the return
}
