import "./graphics.sass"
import requestLang from "../../../service/setGithubLangRepos"
import PieChart from "./Piechart"
import React, { useEffect, useState, Fragment } from 'react'
import colors from "../../style/variables/colors"

function Graphics(){ 

 const [lang, setLang] = useState()

 useEffect(() => {
      Promise.resolve(requestLang)
      .then( res => setLang(res))
      .catch(erro => console.log(erro))
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
  }
  for(let key in colors.colorDefault){color.push(colors.colorDefault[key])}

    return(
        <Fragment>
          <h1 className="titleReposGit">Linguagens usadas nos repositórios</h1>
          <div className="graphicsBox">
              <PieChart
                labelData={labelApi ?? label}
                descriptionData={labelToolip}
                valueData={dataApi ?? data}
                color={color}
                titleText={title}
              />
          </div>
        </Fragment>
    )
}

export default Graphics