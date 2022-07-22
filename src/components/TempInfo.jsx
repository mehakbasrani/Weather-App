import React from 'react'
import { useState } from 'react'
import './tempinfo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faTemperatureFull } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

function TempInfo() {
    const [city, setCity] = useState('')
    const [search, setSearch] = useState('Delhi')

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=a856b4191efd26744cbdca5b95f5669a`
            const response = await fetch(url);
            const resJson = await response.json()
            setCity(resJson.main)
        }
        fetchApi();
    }, [search])

    // useEffect(()=>{
    //     fetch("https://api.openweathermap.org/data/2.5/weather?q=${search}_units=metric&appid=a856b4191efd26744cbdca5b95f5669a")
    //     .then(response =>{
    //         response.json()
    //         setCity(response.main) 
    //     })
    // },[search])
    return (
        <>
        <div className="box">
            <div className="container">
                <input type="search"
                 value={search}
                    onChange={event => {
                        setSearch(event.target.value)
                    }} />

                {
                    !city ? (
                        <p>No Data Found</p>
                    ) : (<>
                        <div className='location'>
                           <FontAwesomeIcon className='icon1' icon={faLocationDot}></FontAwesomeIcon>
                            <h1>{search}</h1>
                        </div>
                        <div className='info'>
                        <FontAwesomeIcon className='icon2' icon={faTemperatureFull}></FontAwesomeIcon>
                            <h2>{city.temp}°C</h2>
                            </div><div>
                            <p>Min {city.temp_min}°C | Max {city.temp_max}°C</p>
                        </div>
                        <section>
<div className=" wave wave-one"></div>
<div className="wave wave-two"></div>
<div className="wave wave-three"></div>
</section>
                    </>

                    )
                }
            </div> </div>
        </>
    )
}

export default TempInfo
