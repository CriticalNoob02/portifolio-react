import "./graphics.sass"
import PieChart from "./Piechart"
import React, { useEffect, useState } from 'react'
import GithubEndpoint from '../../../service/client'
import axios from 'axios'
import colors from "../../style/variables/colors"

function Graphics(props){ 
 //Função que ira guardar os dados da requisição
 const [lang, setLang] = useState()


 //Função para recuperar as informações da API
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

 //Função para extrair as linguagens dentro da api
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

 //Função para gerar um estado logo quando é carregado o app
 useEffect(() => {
     getLangGithub()
 }, [])


  // Dados mockados
  const label = ["verde", "Blue", "Yellow"]
  const labelToolip = 'Algo aqui'
  const dados = [12,19,3]
  const cores = [colors.primary_dark,colors.secundary_dark,colors.tertiary_dark]
  const title = 'Algooooooo'

    return(
        <div className="graphicsBox">
            {console.log(lang)}
            <PieChart 
              labelData={label}
              descriptionData={labelToolip}
              valueData={dados}
              color={cores}
              titleText={title}
            />
        </div>
    )
}

export default Graphics