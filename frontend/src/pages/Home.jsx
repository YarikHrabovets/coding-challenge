import React, { useState, useEffect } from 'react'

import MyInput from '../components/UI/input/MyInput'
import MyButton from '../components/UI/button/MyButton'
import Loader from '../components/UI/loader/MyLoader'
import CountryView from '../components/CountryView'

import axios from '../axios'

const Home = () => {
    const [userInp, setUserInp] = useState('')
    const [data, setData] = useState([])
    const [history, setHistory] = useState([])

    const [isLoading, setLoading] = useState(false)
    const [erorr, setError] = useState(null)


    useEffect(() => {
        const storedHistory = localStorage.getItem('userHistory')
        if(storedHistory) {
            setHistory(JSON.parse(storedHistory))
        }
      }, [])


    async function handleSubmit(e) {
        e.preventDefault()

        const userInpTrim = userInp.trim()
        if(!history.includes(userInpTrim)) {
            localStorage.setItem('userHistory', JSON.stringify([...history, userInpTrim]))
            setHistory([...history, userInpTrim])
        }

        if(userInpTrim !== '') {
            setUserInp('')
            setData([])
            setLoading(true)
            await axios.get('/api', {
                params: {
                    country: userInpTrim,
                }
                })
                .then(response => {
                    setLoading(false)
                    setData(response.data[0])
                    setError(null)
                })
                .catch(erorr => {
                    setLoading(false)
                    setError(erorr)
                })
        }
    }

    function handleKeyDown(e) {
        if(e.key === 'Enter') {
            e.preventDefault()
        }
    }

    return (
        <main className='main'>
            <p className='text-center fs-1 fw-bold mt-5'>
                {erorr ? erorr.message : 'Search information about any country' }
            </p>
            {isLoading && <Loader />}
            {data.length !== 0 ?  
                    <>
                        <hr />
                        <CountryView name={data.name} flags={[data.flags, data.coatOfArms]} capital={data.capital}
                                    region={data.region} subregion={data.subregion} languages={data.languages}
                                    currencies={data.currencies} latlng={data.latlng} population={data.population} 
                                    area={data.area} borders={data.borders} timezones={data.timezones} car={data.car} 
                                    startOfWeek={data.startOfWeek} maps={data.maps}
                        />
                    </>
                    : <></>
            }
            <form onSubmit={handleSubmit} className='position-fixed w-100 bottom-0 mb-4'>
                <div className='container input-group d-flex flex-row justify-content-center'>
                    <MyInput type='text' name='county' value={userInp} onChange={(e) => setUserInp(e.target.value)} 
                             onKeyDown={handleKeyDown} placeholder='Type any county name...' />
                    <MyButton type='submit' className='btn btn-outline-secondary btn-lg right-round shadow'>
                        Search
                    </MyButton>
                </div>
            </form>
        </main>
    )
}

export default Home
