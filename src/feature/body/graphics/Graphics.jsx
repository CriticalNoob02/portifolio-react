import "./graphics.sass"
import PieChart from "../../../components/charts/Piechart"
import React, { useEffect, useState, Fragment } from 'react'
import colors from "../../../components/style/variables/colors"
import Loader from "../../../components/loaders/loader"

function Graphics(){ 

 const [lang, setLang] = useState()
 const [isLoading, setisLoading] = useState(true)

 useEffect(() => {
    fetch("http://localhost:5100/CriticalNoob02/lang")
    .then( res => res.json() )
    .then( resData => {
      setLang(resData)
      setisLoading(false)
    })
    .catch(erro => console.log(erro))
 }, [])
 
  // Dados da Api
  const title = 'Linguagens mais utilizadas nos projetos'
  const labelToolip = 'Linhas de Código'
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

          {
          isLoading
            ?
          <Loader/>
            :
          <div className="graphicsBox">
            <PieChart
              labelData={labelApi}
              descriptionData={labelToolip}
              valueData={ dataApi }
              color={color}
              titleText={title}
            />
          </div>
          }

        </Fragment>
    )
}

export default Graphics