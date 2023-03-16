import axios from 'axios'


const GithubEndpoint = axios.create({
    baseURL: 'http://api.github/users'
})

export default GithubEndpoint

