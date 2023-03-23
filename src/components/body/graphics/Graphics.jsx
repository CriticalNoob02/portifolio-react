import "./graphics.sass"
import PieChart from "./Piechart"
import React, { useEffect, useState } from 'react'
import GithubEndpoint from '../../../service/client'
import axios from 'axios'
import colors from "../../style/variables/colors"

function Graphics(props){ 

 const [lang, setLang] = useState()


 async function getLangGithub(){
     try {
         let response = await GithubEndpoint.get(`/CriticalNoob02/repos`)
         let data = response.data
         const langs = data.map((line) =>{ return line.languages_url })
         extractLang(langs)
     } catch (error) {
         console.log("Erro ao recuperar informações da API \n" + error)
     }
 }

 async function extractLang(langs){
  try {
    var lang = []
    for(let i = 0; i < langs.length; i++){
      var apiRequest = await axios.get(langs[i])
      lang.push(apiRequest.data)
    }
    formattingData(lang)
  } catch (error) {
      console.log("Erro ao recuperar informações da API \n" + error)
  }
 }

 function formattingData(dados){
    const result = dados.reduce((total, obj) => {
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
        return total
    },{})
    console.log(result)
    setLang(result)
 }

 useEffect(() => {
     getLangGithub()
 }, [])

  // Dados mockados
  const label = ["verde", "Blue", "Yellow"]
  const labelToolip = 'Linhas de Código'
  const data = [12,19,3]
  const title = 'Linguagens mais utilizadas nos projetos'
  // Dados da Api
  const color = []
  const labelApi = []
  const dataApi = []
  for(let key in lang){
    labelApi.push(key)
    dataApi.push(lang[key])
    console.log(labelApi)
  }
  for(let key in colors.colorDefault){
    color.push(colors.colorDefault[key])
  }

    return(
        <div className="graphicsBox">
            {console.log(lang)}
            <PieChart 
              labelData={labelApi ?? label}
              descriptionData={labelToolip}
              valueData={dataApi ?? data}
              color={color}
              titleText={title}
            />
        </div>
    )
}

export default Graphics