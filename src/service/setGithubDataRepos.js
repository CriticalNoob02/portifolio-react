const URLgit = 'https://api.github.com/users'
const lang = []

const requestLang = fetch(`${URLgit}/CriticalNoob02/repos`)
.then( res => res.json())
.then( resData => {
    const langs = resData.map((line) =>{ return line.languages_url })
    for(const element of langs){
        fetch(element)
        .then( res => res.json())
        .then( dataLangs => {
            lang.push(dataLangs)
        })
    }
    console.log(lang)
    const result = lang.reduce((total, obj) => {
        const keys = Object.keys(obj)
        if(keys.length === 1){
            const key = keys[0]
            if(!total[key]){ total[key] = obj[key]}
            else{total[key] += obj[key]}
        }
        else{
            keys.forEach(key => {
            if (!total[key]) { total[key] = obj[key] } 
            else { total[key] += obj[key] }
            })     
        }
        console.log(total)
        return total
    },{})
    return result
})




export default requestLang