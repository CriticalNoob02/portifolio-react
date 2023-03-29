const URLgit = 'https://api.github.com/users'
const lang = []

const requestLang = fetch(`${URLgit}/CriticalNoob02/repos`)
.then( res => res.json())
.then( resData => {
    const langs = resData.map((line) =>{ return line.languages_url })
    const langPromises = langs.map(url => fetch(url).then(res => res.json()))
    return Promise.all(langPromises)
})
.then(dataLangs => {
  dataLangs.forEach(obj => {
    Object.keys(obj).forEach(key => {
      if (!lang[key]) {
        lang[key] = obj[key]
      } else {
        lang[key] += obj[key]
      }
    })
  })
  return lang
})



export default requestLang