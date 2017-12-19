import axios from 'axios';

const id = 'YOUR_CLIENT_ID';
const sec = 'YOUR_SECRET_ID';
const params = `?client_id=${ id }&client_secret=${ sec }`;

export default function fetchPopularRepos(language) {
  const encodedURI = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${ language }&sort=stars&order=desc&type=Repositories`);

  return axios
    .get(encodedURI) // returns a promise, you can chain .then
    .then(response => response.data.items);
  // don't have to worry about storting through .data.items, as we already do this in the return
}

// Used to grab full user Object, contains followers, etc
export function getProfile(username) {
  return axios.get(`https://api.github.com/users/${ username }${ params }`).then(user => user.data);
}

// Used to grab every repo, which will then be passed to determine # of stars
export function getRepos(username) {
  return axios.get(`https://api.github.com/users/${ username }/repos${ params }&per_page=100`);
}

export function calculateScore(profile, repos) {
  const { followers } = profile;
  const stars = getStarCount(repos);
  // bypass prettier formatter removal of braces...
  const fol = followers * 3;
  return fol + stars;
}

export function getStarCount(repos) {
  return repos.data.reduce((count, repo) => count + repo.stargazers_count, 0);
}

export function getUserData(player) {
  return axios
    .all([
      // axios.all takes array of functions as promises
      // getProfile returns profile Object with all stats
      // getRepos returns massive object of repos that include stargazers_count
      getProfile(player),
      getRepos(player),
    ]) // once both resolves, we take the data, and assign to variables
    .then((data) => {
      const profile = data[ 0 ];
      const repos = data[ 1 ];
      // we then return an object, the score is calculated using our function above
      return {
        profile,
        score: calculateScore(profile, repos),
      };
    });
}

export function handleError(error) {
  console.warn(error);
  return null;
}

export function sortPlayers(players) {
  return players.sort((a, b) => b.score - a.score);
}

export function battle(players) {
  return axios
    .all(players.map(getUserData))
    .then(sortPlayers)
    .catch(handleError);
}

// example usage

// api.battle([ 'tylermcginnis', 'facebook' ]).then((players) => {
//   const winner = players[ 0 ];
//   const loser = players[ 1 ];
//   // both winner and loser will be an object with this shape:
//   // return { // from getUserData above
//   //   profile,
//   //   score: calculateScore(profile, repos),
//   // };
// });
