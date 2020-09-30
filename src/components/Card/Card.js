import React from 'react'
import {Card , CardContent , Grid , Typography} from '@material-ui/core'
import style from './Card.module.css'
import Countup from 'react-countup'
import cx from 'classnames'


function Cards( { data: { confirmed, recovered, deaths, lastUpdate } }) {
  if(!confirmed){
    return 'loading....'
  }
  return(
  <div className={style.container}>
  
  
  <Grid container spacing={3} justify='center'>
  <Grid item component={Card} xs={12} md={3} className={cx(style.card , style.infected)}>
  <CardContent>
  <Typography color='textSecondary' gutterButtom>Infected</Typography>
  
  <Typography variant='h5'>
  <Countup 
  start={0}
  end={confirmed.value}
  duration={2.5}
  seperator=','
  /></Typography>
  
  <Typography color='textSecondary'> 
  {new Date(lastUpdate).toDateString()}</Typography>
  <Typography variant='body2'>
Number of infected people in covod-19
  </Typography>
  </CardContent>
  </Grid>
  
  
  <Grid item component={Card} xs={12} md={3} className={cx(style.card , style.recovered)}>
  <CardContent>
  <Typography color='textSecondary' gutterButtom>recovered</Typography>
  
  <Typography variant='h5'>
    <Countup 
  start={0}
  end={recovered.value}
  duration={2.5}
  seperator=','
  />
  </Typography>
  
  <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
  <Typography variant='body2'>
Number of recovered cases in covid-19
  </Typography>
  </CardContent>
  </Grid>
  
  
  
  <Grid item component={Card} xs={12} md={3} className={cx(style.card , style.deaths)}>
  <CardContent>
  <Typography color='textSecondary' gutterButtom>Deaths</Typography>
  
  <Typography variant='h5'>  
  <Countup 
  start={0}
  end={deaths.value}
  duration={2.5}
  seperator=','
  /></Typography>
  
  <Typography color='textSecondary'>
  {new Date(lastUpdate).toDateString()}
  </Typography>
  <Typography variant='body2'>
Number of deaths in covid-19
  </Typography>
  </CardContent>
  </Grid>
  </Grid>
  </div>);
}

export default Cards