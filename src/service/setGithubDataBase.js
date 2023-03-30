const URLgit = 'https://api.github.com/users'

const requestData = fetch(`${URLgit}/CriticalNoob02`)
.then( res => res.json())
.then( resData => resData)
.catch((err) => {
    console.log(err)
})

export default requestData