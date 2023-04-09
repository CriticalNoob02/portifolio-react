import "./graphics.sass"
import PieChart from "./Piechart"
import React, { useEffect, useState, Fragment } from 'react'
import colors from "../../../components/style/variables/colors"

function Graphics(){ 

 const [lang, setLang] = useState()

 useEffect(() => {
    fetch("http://localhost:5100/CriticalNoob02/lang")
    .then( res => res.json() )
    .then( resData => setLang(resData) )
    .catch(erro => console.log(erro))
 }, [])

  // Dados mockados
  const label = ["verde", "Blue", "Yellow","Red","Pink"]
  const labelToolip = 'Linhas de Código'
  const data = [12,19,3,7,4]
  const title = 'Linguagens mais utilizadas nos projetos'
  // Dados da Api
  const color = []
  const labelApi = []
  const dataApi = []
  for(let key in lang){
    console.log(labelApi)
    labelApi.push(key)
    dataApi.push(lang[key])
  }
  for(let key in colors.colorDefault){color.push(colors.colorDefault[key])}

    return(
        <Fragment>
          <h1 className="titleReposGit">Linguagens usadas nos repositórios</h1>
          <div className="graphicsBox">
              <PieChart
                labelData={label}
                descriptionData={labelToolip}
                valueData={ data}
                color={color}
                titleText={title}
              />
          </div>
        </Fragment>
    )
}

export default Graphics