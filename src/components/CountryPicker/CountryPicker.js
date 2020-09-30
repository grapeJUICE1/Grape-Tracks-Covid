import React , {useState , useEffect} from 'react'
import {NativeSelect , FormControl} from '@material-ui/core'
import style from './CountryPicker.module.css'

import {fetchCountries} from './../../api'

function CountryPicker({handleCountryChange}) {
  const [countries , setCountries] = useState([])
  useEffect(() => {
    const fetchApi = async() =>{
      setCountries(await fetchCountries())
    }
    fetchApi()
  }, [setCountries])
  return(
    <FormControl className={style.formControl}>
    <NativeSelect default='' onChange={(e) => handleCountryChange(e.target.value)}>
     <option value=''>Global</option>
     {countries.map((d,i) => <option key={i} value={d}>{d}</option>)}
    </NativeSelect>
    </FormControl>
    );
}

export default CountryPicker