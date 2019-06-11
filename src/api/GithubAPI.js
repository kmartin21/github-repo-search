import axios from 'axios'

const BASE_URL = 'https://api.github.com/search/repositories?q='

export const searchRepos = (keywords, stars, license, includeForked) => {
    axios.get(`${BASE_URL}${keywords}+stars:${stars}+license:${license}`)
        .then(response => console.log(response.json()))
        .catch(error => error.message)
} 