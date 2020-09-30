import React from 'react';
import style from './App.module.css';
import Cards from './components/Card/Card'
import Chart from './components/Chart/Chart'
import CountryPicker from './components/CountryPicker/CountryPicker'
import {fetchData} from './api'


class App extends React.Component{
  state ={
    data:{} ,
    country : ''
  }
  async componentDidMount(){
    const fetchedData = await fetchData()
    this.setState({data:fetchedData})
  }
  handleCountryChange = async(country) => {
    const data = await fetchData(country)
    this.setState({data , country})
    
  }
  render(){
    return(
      <div className={style.container}>
      <img src='https://i.ibb.co/7QpKsCX/image.png' className={style.img} alt='covid-19'>
      </img>
      <Cards data={this.state.data}/>
      <CountryPicker handleCountryChange={this.handleCountryChange}/>
      <Chart data={this.state.data} country={this.state.country}/>
      </div>
    );
  }
}

export default App;
