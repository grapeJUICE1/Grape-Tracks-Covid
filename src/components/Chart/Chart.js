import React , {useState , useEffect} from 'react'
import {fetchDailyData} from './../../api'
import {Line , Bar} from 'react-chartjs-2'
import style from './Chart.module.css'


function Chart({data:{recovered , confirmed , deaths} , country}) {
  const [dailyData , setDailyData] = useState([])
  
  useEffect(() =>{
    const fetchApi = async() =>{
      setDailyData(await fetchDailyData())
    }
    fetchApi()
  },[])
  
  const lineChart = (
    dailyData.length?
    (
    <Line 
    data={{
      labels : dailyData.map(({date}) => date),
      datasets:[{
        data:dailyData.map(({confirmed}) => confirmed) ,
        label:'infected',
        borderColor: '#3333ff',
        fill:true
      } , {
        data:dailyData.map(({deaths}) => deaths) ,
        label:'deaths',
        borderColor: 'red',
        backgroundColor:'rgba(255, 0 , 0, 0.5)',
        fill:true,
      }] ,
    }}
    />
    ):null
    )
    
    const barChart = (
      confirmed?(
      <Bar 
       data={{
         labels:['infected' , 'recovered' , 'deaths'],
         datasets : [{
         label : 'people',
         backgroundColor:['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
         data:[confirmed.value , recovered.value , deaths.value],
         }]
         
         
       }} 
       options = {{
         legend: {display: false} ,
         title: { display: true, text: `Current state in ${country}` },
        }}
         
       
      />
      ):null
      )
  return (<div className={style.chart}>{country ? barChart :lineChart}</div>);
}

export default Chart