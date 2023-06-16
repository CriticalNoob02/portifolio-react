import "./graphicPie.scss"
import PieChart from "../../../components/charts/Piechart"
import React, { useEffect, useState, Fragment, useContext } from 'react'
import { isLoading } from "../../../context/isLoading"
import colors from "../../../components/style/variables/colors"
import Loader from "../../../components/loaders/loader"

function GraphicPie(){ 
  const {loading2, setLoading2} = useContext(isLoading)

 const [lang, setLang] = useState()

 useEffect(() => {
    fetch("http://localhost:5100/CriticalNoob02/lang")
    .then( res => res.json() )
    .then( resData => {
      setLang(resData)
      setLoading2(false)
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
          <h1 className="titleReposGit">Linguagens dos repositórios</h1>

          {
          loading2
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

export default GraphicPie