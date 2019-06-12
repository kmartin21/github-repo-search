import axios from 'axios'

const BASE_URL = 'https://api.github.com/search/repositories?q='

export const searchRepos = (keywords, stars, license, includeForked) => {
    const searchReposUrl = `${BASE_URL}${keywords}+stars:${stars}+license:${license}+fork:${includeForked}`

    return axios.get(searchReposUrl)
        .then(response => response.data.items)
        .catch(error => error.message)
} 