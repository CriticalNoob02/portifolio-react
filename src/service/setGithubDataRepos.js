const URLgit = 'https://api.github.com/users'

const requestRepos = fetch(`${URLgit}/CriticalNoob02/repos`)
.then( res => res.json())
.then( resData => {
    let contador = 0
    const repos = resData.map((line) =>{ 
        const { name, html_url, language } = line
        const repositories = [contador, name, html_url, language]
        contador++
        return repositories
     })
    return Promise.all(repos)
})

export default requestRepos