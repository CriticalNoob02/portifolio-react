import axios from 'axios'


const GithubEndpoint = axios.create({
    baseURL: 'https://api.github.com/users'
})

export default GithubEndpoint

